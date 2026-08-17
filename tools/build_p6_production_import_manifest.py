#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import struct
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any, Iterable

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
USER_AGENT = "pokemon-ancient-trpg-p6-import/1"
MAX_WORKERS = 16
REQUEST_TIMEOUT_SECONDS = 30
REQUEST_RETRIES = 2
PER_ENCOUNTER_ATLAS_GUARDRAIL = 512 * 1024
MAX_REPACK_WIDTH = 768


class ImportValidationError(RuntimeError):
    pass


def fail(message: str) -> None:
    raise ImportValidationError(message)


def load_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        value = json.load(handle)
    if not isinstance(value, dict):
        fail(f"{path}: root must be an object")
    return value


def fetch_bytes(url: str) -> bytes:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "*/*",
            "Cache-Control": "no-cache",
        },
    )
    last_error: BaseException | None = None
    for attempt in range(REQUEST_RETRIES + 1):
        try:
            with urllib.request.urlopen(request, timeout=REQUEST_TIMEOUT_SECONDS) as response:
                return response.read()
        except (urllib.error.URLError, TimeoutError) as exc:
            last_error = exc
            if attempt >= REQUEST_RETRIES:
                break
            time.sleep(0.25 * (2**attempt))
    fail(f"failed to fetch {url}: {last_error}")


def fetch_json(url: str) -> dict[str, Any]:
    raw = fetch_bytes(url)
    try:
        value = json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        fail(f"invalid JSON from {url}: {exc}")
    if not isinstance(value, dict):
        fail(f"{url}: root must be an object")
    return value


def sha256_hex(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def png_dimensions(data: bytes) -> tuple[int, int]:
    if len(data) < 24 or data[:8] != b"\x89PNG\r\n\x1a\n":
        fail("not a PNG")
    if data[12:16] != b"IHDR":
        fail("PNG missing IHDR as first chunk")
    width, height = struct.unpack(">II", data[16:24])
    if width <= 0 or height <= 0:
        fail("PNG has non-positive dimensions")
    return width, height


def raw_url(repo: str, pin: str, path: str) -> str:
    return f"https://raw.githubusercontent.com/{repo}/{pin}/{path}"


def parse_id_spec(spec: str) -> list[int]:
    spec = spec.strip().lower()
    if spec in {"all", "1-151", "001-151"}:
        return list(range(1, 152))
    ids: set[int] = set()
    for token in spec.split(","):
        token = token.strip()
        if not token:
            continue
        if "-" in token:
            start_text, end_text = token.split("-", 1)
            start = int(start_text)
            end = int(end_text)
            if start > end:
                fail(f"bad id range {token}")
            ids.update(range(start, end + 1))
        else:
            ids.add(int(token))
    if not ids:
        fail("animated id set is empty")
    if min(ids) < 1 or max(ids) > 151:
        fail("animated ids must stay within National Dex 001..151")
    return sorted(ids)


def shelf_pack_unique_rectangles(
    rectangles: list[tuple[int, int, int, int]],
) -> dict[str, Any]:
    """Find a deterministic no-scale shelf-pack plan for unique source rectangles.

    Rectangles are deduplicated by exact source x/y/w/h before this function.
    Repacking therefore preserves every source pixel region while allowing multiple
    logical frames that reference the exact same region to reuse one packed copy.
    """
    if not rectangles:
        fail("animated atlas has no unique frame rectangles")

    ordered = sorted(rectangles, key=lambda r: (-r[3], -r[2], r[1], r[0]))
    min_width = max(rect[2] for rect in ordered)
    sum_width = sum(rect[2] for rect in ordered)
    max_width = min(MAX_REPACK_WIDTH, max(min_width, sum_width))

    best: tuple[int, int, int] | None = None
    for candidate_width in range(min_width, max_width + 1):
        x = 0
        y = 0
        row_height = 0
        used_width = 0
        for _, _, width, height in ordered:
            if x > 0 and x + width > candidate_width:
                y += row_height
                x = 0
                row_height = 0
            x += width
            used_width = max(used_width, x)
            row_height = max(row_height, height)
        used_height = y + row_height
        area = used_width * used_height
        candidate = (area, used_width, used_height)
        if best is None or candidate < best:
            best = candidate

    if best is None:
        fail("failed to build deterministic shelf-pack plan")
    area, width, height = best
    return {
        "method": "dedupe-source-rectangles+shelf-pack-v1",
        "pixel_scale": 1,
        "rotation": False,
        "unique_source_rectangle_count": len(ordered),
        "packed_dimensions": {"width": width, "height": height},
        "packed_pixel_area": area,
        "decoded_rgba8_bytes": area * 4,
        "within_512_kib_guardrail": area * 4 <= PER_ENCOUNTER_ATLAS_GUARDRAIL,
    }


def validate_atlas_metadata(
    species_id: int,
    metadata: dict[str, Any],
    expected_width: int,
    expected_height: int,
) -> dict[str, Any]:
    textures = metadata.get("textures")
    if not isinstance(textures, list) or not textures:
        fail(f"#{species_id:03d}: atlas textures must be a non-empty array")

    expected_image = f"{species_id}.png"
    matching = [t for t in textures if isinstance(t, dict) and t.get("image") == expected_image]
    if len(matching) != 1:
        fail(f"#{species_id:03d}: expected exactly one texture entry for {expected_image}")
    texture = matching[0]

    if texture.get("format") != "RGBA8888":
        fail(f"#{species_id:03d}: atlas format drift")
    size = texture.get("size")
    if not isinstance(size, dict):
        fail(f"#{species_id:03d}: missing atlas size")
    if (size.get("w"), size.get("h")) != (expected_width, expected_height):
        fail(
            f"#{species_id:03d}: metadata size {size.get('w')}x{size.get('h')} "
            f"!= PNG {expected_width}x{expected_height}"
        )

    frames = texture.get("frames")
    if not isinstance(frames, list) or not frames:
        fail(f"#{species_id:03d}: frames must be a non-empty array")

    filenames: set[str] = set()
    source_rectangles: set[tuple[int, int, int, int]] = set()
    for index, frame_entry in enumerate(frames):
        if not isinstance(frame_entry, dict):
            fail(f"#{species_id:03d}: frame[{index}] must be an object")
        filename = frame_entry.get("filename")
        if not isinstance(filename, str) or not filename:
            fail(f"#{species_id:03d}: frame[{index}] filename missing")
        if filename in filenames:
            fail(f"#{species_id:03d}: duplicate frame filename {filename}")
        filenames.add(filename)

        frame = frame_entry.get("frame")
        if not isinstance(frame, dict):
            fail(f"#{species_id:03d}: frame[{index}] rectangle missing")
        coords = tuple(frame.get(key) for key in ("x", "y", "w", "h"))
        if not all(isinstance(value, int) for value in coords):
            fail(f"#{species_id:03d}: frame[{index}] rectangle must be integer")
        x, y, width, height = coords
        if x < 0 or y < 0 or width <= 0 or height <= 0:
            fail(f"#{species_id:03d}: frame[{index}] rectangle invalid")
        if x + width > expected_width or y + height > expected_height:
            fail(f"#{species_id:03d}: frame[{index}] exceeds texture bounds")
        source_rectangles.add((x, y, width, height))

        source_size = frame_entry.get("sourceSize")
        sprite_source = frame_entry.get("spriteSourceSize")
        if isinstance(source_size, dict) and isinstance(sprite_source, dict):
            sw, sh = source_size.get("w"), source_size.get("h")
            sx, sy = sprite_source.get("x"), sprite_source.get("y")
            ssw, ssh = sprite_source.get("w"), sprite_source.get("h")
            values = (sw, sh, sx, sy, ssw, ssh)
            if not all(isinstance(value, int) for value in values):
                fail(f"#{species_id:03d}: source rectangle must be integer")
            if sw <= 0 or sh <= 0 or sx < 0 or sy < 0 or ssw <= 0 or ssh <= 0:
                fail(f"#{species_id:03d}: source rectangle invalid")
            if sx + ssw > sw or sy + ssh > sh:
                fail(f"#{species_id:03d}: spriteSourceSize exceeds sourceSize")

    repack = shelf_pack_unique_rectangles(list(source_rectangles))
    return {
        "frame_count": len(frames),
        "unique_frame_filename_count": len(filenames),
        "unique_source_rectangle_count": len(source_rectangles),
        "normalization_plan": repack,
    }


def build_compact_records(source: dict[str, Any]) -> list[dict[str, Any]]:
    compact = source["compact_identity"]
    repo = "msikma/pokesprite"
    pin = compact["pin"]
    mapping_path = compact["mapping_file"]
    mapping = fetch_json(raw_url(repo, pin, mapping_path))

    expected_keys = [f"{species_id:03d}" for species_id in range(1, 152)]
    missing = [key for key in expected_keys if key not in mapping]
    if missing:
        fail(f"compact mapping missing required ids: {missing[:8]}")
    if "152" not in mapping:
        fail("compact mapping boundary evidence lost: 152 missing")

    records: list[dict[str, Any]] = []

    def one(species_id: int) -> dict[str, Any]:
        key = f"{species_id:03d}"
        entry = mapping[key]
        if not isinstance(entry, dict):
            fail(f"compact mapping {key} must be an object")
        slug = entry.get("slug", {}).get("eng")
        if not isinstance(slug, str) or not slug:
            fail(f"compact mapping {key} missing slug.eng")
        path = compact["asset_template"].format(slug=slug)
        data = fetch_bytes(raw_url(repo, pin, path))
        width, height = png_dimensions(data)
        expected = compact["source_canvas"]
        if (width, height) != (expected["width"], expected["height"]):
            fail(f"#{species_id:03d}: compact dimensions drift: {width}x{height}")
        return {
            "id": species_id,
            "slug": slug,
            "path": path,
            "sha256": sha256_hex(data),
            "encoded_bytes": len(data),
            "dimensions": {"width": width, "height": height},
            "decoded_rgba8_bytes": width * height * 4,
        }

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(one, species_id): species_id for species_id in range(1, 152)}
        for future in as_completed(futures):
            records.append(future.result())

    records.sort(key=lambda item: item["id"])
    sample_hashes = {
        item["id"]: item["sha256"]
        for item in compact["coverage_evidence"]["representative_exact_files"]
    }
    for record in records:
        expected_hash = sample_hashes.get(record["id"])
        if expected_hash is not None and record["sha256"] != expected_hash:
            fail(f"#{record['id']:03d}: compact representative SHA-256 drift")
    if len({record["path"] for record in records}) != 151:
        fail("compact default paths must be unique across 001..151")
    return records


def build_animated_records(source: dict[str, Any], ids: Iterable[int]) -> list[dict[str, Any]]:
    encounter = source["animated_encounter"]
    repo = "pagefaultgames/pokerogue-assets"
    pin = encounter["pin"]
    records: list[dict[str, Any]] = []

    def one(species_id: int) -> dict[str, Any]:
        texture_path = encounter["texture_template"].format(id=species_id)
        metadata_path = encounter["atlas_metadata_template"].format(id=species_id)
        texture_data = fetch_bytes(raw_url(repo, pin, texture_path))
        metadata_data = fetch_bytes(raw_url(repo, pin, metadata_path))
        width, height = png_dimensions(texture_data)
        try:
            metadata = json.loads(metadata_data.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError) as exc:
            fail(f"#{species_id:03d}: invalid atlas JSON: {exc}")
        if not isinstance(metadata, dict):
            fail(f"#{species_id:03d}: atlas JSON root must be object")
        atlas = validate_atlas_metadata(species_id, metadata, width, height)
        source_decoded = width * height * 4
        return {
            "id": species_id,
            "texture_path": texture_path,
            "metadata_path": metadata_path,
            "texture_sha256": sha256_hex(texture_data),
            "metadata_sha256": sha256_hex(metadata_data),
            "texture_encoded_bytes": len(texture_data),
            "metadata_encoded_bytes": len(metadata_data),
            "source_texture_dimensions": {"width": width, "height": height},
            "source_decoded_rgba8_bytes": source_decoded,
            "source_within_512_kib_guardrail": source_decoded <= PER_ENCOUNTER_ATLAS_GUARDRAIL,
            "frame_count": atlas["frame_count"],
            "unique_frame_count": atlas["unique_frame_filename_count"],
            "unique_source_rectangle_count": atlas["unique_source_rectangle_count"],
            "frame_bounds_valid": True,
            "normalization_plan": atlas["normalization_plan"],
        }

    id_list = sorted(set(ids))
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(one, species_id): species_id for species_id in id_list}
        for future in as_completed(futures):
            records.append(future.result())

    records.sort(key=lambda item: item["id"])
    if [record["id"] for record in records] != id_list:
        fail("animated import result coverage drift")
    return records


def build_manifest(source: dict[str, Any], animated_ids: list[int]) -> dict[str, Any]:
    compact_records = build_compact_records(source)
    animated_records = build_animated_records(source, animated_ids)
    source_over = [r for r in animated_records if not r["source_within_512_kib_guardrail"]]
    normalized_over = [
        r
        for r in animated_records
        if not r["normalization_plan"]["within_512_kib_guardrail"]
    ]
    max_source = max(animated_records, key=lambda r: r["source_decoded_rgba8_bytes"])
    max_normalized = max(
        animated_records,
        key=lambda r: r["normalization_plan"]["decoded_rgba8_bytes"],
    )
    return {
        "schema_version": "p6-production-import-manifest-v1",
        "generator": {
            "tool": "tools/build_p6_production_import_manifest.py",
            "network_fetch_mode": "memory_only",
            "pokemon_media_written_to_output": False,
            "output_contains_metadata_only": True,
        },
        "source_pins": {
            "compact": {
                "source_id": source["compact_identity"]["source_id"],
                "pin": source["compact_identity"]["pin"],
            },
            "animated": {
                "source_id": source["animated_encounter"]["source_id"],
                "pin": source["animated_encounter"]["pin"],
            },
        },
        "coverage": {
            "compact_required_ids": {"first": 1, "last": 151, "count": 151},
            "compact_validated_count": len(compact_records),
            "animated_selected_ids": animated_ids,
            "animated_validated_count": len(animated_records),
        },
        "animated_budget_measurement": {
            "source_over_512_kib_count": len(source_over),
            "source_over_512_kib_ids": [r["id"] for r in source_over],
            "normalized_over_512_kib_count": len(normalized_over),
            "normalized_over_512_kib_ids": [r["id"] for r in normalized_over],
            "max_source": {
                "id": max_source["id"],
                "decoded_rgba8_bytes": max_source["source_decoded_rgba8_bytes"],
            },
            "max_normalized": {
                "id": max_normalized["id"],
                "decoded_rgba8_bytes": max_normalized["normalization_plan"]["decoded_rgba8_bytes"],
                "packed_dimensions": max_normalized["normalization_plan"]["packed_dimensions"],
            },
        },
        "redistribution": {
            "pokemon_media_repo_mode": "metadata_only",
            "pokemon_media_public_distribution": "not_cleared",
            "produced_manifest_public_distribution": "allowed_metadata_only",
            "source_media_embedded": False,
        },
        "compact": compact_records,
        "animated": animated_records,
    }


def self_test() -> None:
    png = (
        b"\x89PNG\r\n\x1a\n"
        + b"\x00\x00\x00\rIHDR"
        + struct.pack(">II", 68, 56)
        + b"\x08\x06\x00\x00\x00"
    )
    assert png_dimensions(png) == (68, 56)
    assert parse_id_spec("1,3-5,151") == [1, 3, 4, 5, 151]

    plan = shelf_pack_unique_rectangles([(0, 0, 16, 16), (16, 0, 16, 16)])
    assert plan["pixel_scale"] == 1
    assert plan["unique_source_rectangle_count"] == 2
    assert plan["within_512_kib_guardrail"] is True

    metadata = {
        "textures": [
            {
                "image": "25.png",
                "format": "RGBA8888",
                "size": {"w": 32, "h": 32},
                "frames": [
                    {
                        "filename": "0001.png",
                        "frame": {"x": 0, "y": 0, "w": 16, "h": 16},
                        "sourceSize": {"w": 16, "h": 16},
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 16, "h": 16},
                    },
                    {
                        "filename": "0002.png",
                        "frame": {"x": 0, "y": 0, "w": 16, "h": 16},
                        "sourceSize": {"w": 16, "h": 16},
                        "spriteSourceSize": {"x": 0, "y": 0, "w": 16, "h": 16},
                    },
                ],
            }
        ]
    }
    atlas = validate_atlas_metadata(25, metadata, 32, 32)
    assert atlas["frame_count"] == 2
    assert atlas["unique_frame_filename_count"] == 2
    assert atlas["unique_source_rectangle_count"] == 1
    print("P6 production import self-test PASS")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--source-map",
        type=Path,
        default=DOCS / "P6_POKEMON_RESOURCE_SOURCE_MAP.json",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=ROOT / "build" / "p6-production-import-manifest.json",
    )
    parser.add_argument(
        "--animated-ids",
        default="all",
        help="all, comma-separated ids, or ranges; constrained to 001..151",
    )
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()

    if args.self_test:
        self_test()
        return 0

    source = load_json(args.source_map)
    animated_ids = parse_id_spec(args.animated_ids)
    manifest = build_manifest(source, animated_ids)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(manifest, ensure_ascii=False, sort_keys=True, indent=2) + "\n",
        encoding="utf-8",
    )
    measurement = manifest["animated_budget_measurement"]
    print(
        "P6 production import PASS: "
        f"compact={manifest['coverage']['compact_validated_count']}/151 "
        f"animated={manifest['coverage']['animated_validated_count']}/{len(animated_ids)}"
    )
    print(
        "Animated source atlas measurement: "
        f"over_512KiB={measurement['source_over_512_kib_count']} "
        f"max=#{measurement['max_source']['id']:03d}:"
        f"{measurement['max_source']['decoded_rgba8_bytes']}B"
    )
    print(
        "Deterministic normalized atlas plan: "
        f"over_512KiB={measurement['normalized_over_512_kib_count']} "
        f"max=#{measurement['max_normalized']['id']:03d}:"
        f"{measurement['max_normalized']['decoded_rgba8_bytes']}B "
        f"dims={measurement['max_normalized']['packed_dimensions']}"
    )
    print(f"metadata-only manifest: {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
