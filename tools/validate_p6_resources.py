#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any

from jsonschema import Draft202012Validator

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
INITIAL_BUDGET = 3 * 1024 * 1024
COMPACT_CACHE_CAP = 384 * 1024
ENCOUNTER_CACHE_CAP = 1024 * 1024
PER_ENCOUNTER_ATLAS_GUARDRAIL = 512 * 1024
GEN1_IDS = list(range(1, 152))
LUCIDE_IDS = {
    "ui.icon.action.back",
    "ui.icon.action.confirm",
    "ui.icon.action.settings",
    "ui.icon.action.close",
}


def fail(message: str) -> None:
    raise AssertionError(message)


def load_path(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        value = json.load(handle)
    if not isinstance(value, dict):
        fail(f"{path}: root must be an object")
    return value


def load(name: str) -> dict[str, Any]:
    return load_path(DOCS / name)


def validate_schema(schema: dict[str, Any], manifest: dict[str, Any]) -> None:
    errors = sorted(
        Draft202012Validator(schema).iter_errors(manifest),
        key=lambda e: list(e.absolute_path),
    )
    if errors:
        lines = [
            f"{'/'.join(str(p) for p in e.absolute_path) or '<root>'}: {e.message}"
            for e in errors
        ]
        fail("manifest schema failure:\n" + "\n".join(lines))


def validate_manifest(manifest: dict[str, Any]) -> None:
    resources = manifest["resources"]
    ids = [r["resource_id"] for r in resources]
    if len(ids) != len(set(ids)):
        fail("duplicate resource_id")

    seen: dict[tuple[str, str, str], str] = {}
    for r in resources:
        rid = r["resource_id"]
        up = r["upstream"]
        rights = r["rights"]
        redist = r["redistribution"]
        rt = r["runtime"]

        if rt["cache_key"] != "resource_id":
            fail(f"{rid}: cache key drift")
        if rt["duplicate_instance_policy"] != "reuse_single_cached_instance":
            fail(f"{rid}: duplicate decoded instances forbidden")

        locator = up.get("asset_locator", "")
        key = (up["canonical_url"], up["pin"], locator)
        if locator:
            prior = seen.setdefault(key, rid)
            if prior != rid:
                fail(f"{rid}: duplicate upstream artifact owned by {prior}")

        if redist["repo_mode"] == "metadata_only" and redist["build_mode"] == "bundled":
            fail(f"{rid}: metadata_only cannot be bundled")
        if redist["build_mode"] == "bundled" and up["sha256"] is None:
            fail(f"{rid}: bundled external artifact requires SHA-256")

        if rights["pokemon_ip_boundary"] == "depicts_or_contains_pokemon_ip":
            if redist["repo_mode"] == "commit_allowed":
                fail(f"{rid}: uncleared Pokémon media cannot be committed")
            if redist["public_distribution"] == "allowed":
                fail(f"{rid}: current P6 has no public-cleared Pokémon media")
            if rt["preload_scope"] == "initial":
                fail(f"{rid}: Pokémon media cannot be initial preload")

        if redist["public_distribution"] == "allowed" and rights["pokemon_ip_boundary"] == "unknown":
            fail(f"{rid}: unknown rights cannot be public-allowed")

        if (
            r["source_kind"] == "third_party"
            and redist["public_distribution"] == "allowed"
            and up["sha256"] is None
        ):
            if rid != "font.ui.primary.ko-latn" or redist["build_mode"] != "build_time_fetch":
                fail(f"{rid}: allowed hash-late third-party artifact is not approved")
            evidence = redist.get("reason", "") + " " + (r.get("provenance_notes") or "")
            if "49c54b5152a184a243e85f7281ed338b6569987e" not in evidence or "2057688" not in evidence:
                fail(f"{rid}: missing immutable font blob/size evidence")

        dims = r["preprocess"]["output_dimensions"]
        decoded = rt.get("decoded_bytes_estimate")
        if r["asset_class"] in {"pokemon_icon", "pokemon_encounter_image"} and isinstance(dims, dict):
            expected = dims["width"] * dims["height"] * 4
            if decoded != expected:
                fail(f"{rid}: RGBA8 estimate must equal {expected}")

    initial_bytes = sum(
        (r["runtime"].get("encoded_bytes") or 0)
        for r in resources
        if r["runtime"]["preload_scope"] == "initial"
    )
    if initial_bytes > INITIAL_BUDGET:
        fail(f"initial resource source bytes {initial_bytes} > {INITIAL_BUDGET}")

    lucide = {r["resource_id"] for r in resources if r["source_id"] == "lucide-1.27.0"}
    if lucide != LUCIDE_IDS:
        fail(f"Lucide baseline drift: {sorted(lucide)}")


def validate_source_map(source: dict[str, Any]) -> None:
    if source.get("schema_version") != "p6-pokemon-resource-source-map-v1":
        fail("source-map schema version drift")
    dex = source["national_dex_range"]
    if (dex["first"], dex["last"], dex["count"]) != (1, 151, 151):
        fail("source map must own exactly National Dex 001..151")

    compact = source["compact_identity"]
    if compact["pin"] != "c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e":
        fail("PokéSprite pin drift")
    ev = compact["coverage_evidence"]
    if not ev["required_range_is_contiguous"]:
        fail("compact Gen-I mapping must remain contiguous")
    if (ev["mapping_first_key"], ev["mapping_last_required_key"], ev["key_after_required_range"]) != ("001", "151", "152"):
        fail("compact mapping boundary drift")
    if [s["id"] for s in ev["representative_exact_files"]] != [1, 25, 150, 151]:
        fail("compact sample set drift")
    if 24 * (68 * 56 * 4) > COMPACT_CACHE_CAP:
        fail("24 compact decoded icons no longer fit 384 KiB")

    encounter = source["animated_encounter"]
    if encounter["pin"] != "909b43612324622608023b3beb2f24f4ef159c1d":
        fail("animated candidate pin drift")
    if encounter["texture_template"] != "images/pokemon/{id}.png":
        fail("animated texture path drift")
    if encounter["atlas_metadata_template"] != "images/pokemon/{id}.json":
        fail("animated metadata path drift")
    if [s["id"] for s in encounter["representative_exact_files"]] != [1, 151]:
        fail("animated sample set drift")
    for sample in encounter["representative_exact_files"]:
        dims = sample["texture_dimensions"]
        expected = dims["width"] * dims["height"] * 4
        if sample["decoded_rgba8_bytes"] != expected:
            fail(f"#{sample['id']}: bad RGBA8 estimate")

    inv = source["runtime_invariants"]
    if inv["initial_pokemon_media_bytes"] != 0 or inv["all_151_preloaded"]:
        fail("Pokémon media preload invariant drift")
    if inv["cache_key"] != "resource_id":
        fail("source-map cache key drift")
    if inv["duplicate_instance_policy"] != "reuse_single_cached_instance":
        fail("source-map duplicate-instance policy drift")
    if inv["conceal_reveal_materializes_duplicate_source_assets"]:
        fail("conceal/reveal must not duplicate source assets")


def is_sha256(value: Any) -> bool:
    return (
        isinstance(value, str)
        and len(value) == 64
        and all(character in "0123456789abcdef" for character in value)
    )


def validate_production_import(
    produced: dict[str, Any],
    source: dict[str, Any],
) -> None:
    if produced.get("schema_version") != "p6-production-import-manifest-v1":
        fail("production import manifest schema version drift")

    generator = produced.get("generator", {})
    if generator.get("network_fetch_mode") != "memory_only":
        fail("production importer must fetch Pokémon media in memory only")
    if generator.get("pokemon_media_written_to_output") is not False:
        fail("production importer may not write Pokémon media to output")
    if generator.get("output_contains_metadata_only") is not True:
        fail("production import output must be metadata-only")

    pins = produced.get("source_pins", {})
    if pins.get("compact", {}).get("pin") != source["compact_identity"]["pin"]:
        fail("production compact pin mismatch")
    if pins.get("animated", {}).get("pin") != source["animated_encounter"]["pin"]:
        fail("production animated pin mismatch")

    coverage = produced.get("coverage", {})
    if coverage.get("compact_required_ids") != {"first": 1, "last": 151, "count": 151}:
        fail("production compact coverage contract drift")
    if coverage.get("compact_validated_count") != 151:
        fail("production compact import did not validate all 151")
    if coverage.get("animated_selected_ids") != GEN1_IDS:
        fail("P6 exit requires animated pair/frame validation across all Gen-I ids")
    if coverage.get("animated_validated_count") != 151:
        fail("production animated import did not validate all 151")

    redistribution = produced.get("redistribution", {})
    if redistribution.get("pokemon_media_repo_mode") != "metadata_only":
        fail("production import repo mode drift")
    if redistribution.get("pokemon_media_public_distribution") != "not_cleared":
        fail("production Pokémon media public-distribution boundary drift")
    if redistribution.get("produced_manifest_public_distribution") != "allowed_metadata_only":
        fail("produced import manifest must be metadata-only")
    if redistribution.get("source_media_embedded") is not False:
        fail("produced import manifest embeds source media")

    compact_records = produced.get("compact")
    if not isinstance(compact_records, list) or len(compact_records) != 151:
        fail("production compact record count must equal 151")
    if [record.get("id") for record in compact_records] != GEN1_IDS:
        fail("production compact ids must be ordered 001..151")
    compact_paths: set[str] = set()
    representative = {
        item["id"]: item["sha256"]
        for item in source["compact_identity"]["coverage_evidence"]["representative_exact_files"]
    }
    for record in compact_records:
        species_id = record["id"]
        path = record.get("path")
        if not isinstance(path, str) or not path:
            fail(f"#{species_id:03d}: compact path missing")
        if path in compact_paths:
            fail(f"#{species_id:03d}: duplicate compact path {path}")
        compact_paths.add(path)
        if not is_sha256(record.get("sha256")):
            fail(f"#{species_id:03d}: compact SHA-256 invalid")
        if representative.get(species_id) not in {None, record["sha256"]}:
            fail(f"#{species_id:03d}: compact representative SHA-256 mismatch")
        dims = record.get("dimensions")
        if dims != {"width": 68, "height": 56}:
            fail(f"#{species_id:03d}: compact dimensions drift")
        if record.get("decoded_rgba8_bytes") != 68 * 56 * 4:
            fail(f"#{species_id:03d}: compact decoded estimate drift")
        if not isinstance(record.get("encoded_bytes"), int) or record["encoded_bytes"] <= 0:
            fail(f"#{species_id:03d}: compact encoded size invalid")

    animated_records = produced.get("animated")
    if not isinstance(animated_records, list) or len(animated_records) != 151:
        fail("production animated record count must equal 151")
    if [record.get("id") for record in animated_records] != GEN1_IDS:
        fail("production animated ids must be ordered 001..151")

    texture_paths: set[str] = set()
    metadata_paths: set[str] = set()
    source_over_ids: list[int] = []
    normalized_over_ids: list[int] = []
    max_source: tuple[int, int] = (-1, -1)
    max_normalized: tuple[int, int, dict[str, int]] = (-1, -1, {})

    for record in animated_records:
        species_id = record["id"]
        texture_path = record.get("texture_path")
        metadata_path = record.get("metadata_path")
        if texture_path != source["animated_encounter"]["texture_template"].format(id=species_id):
            fail(f"#{species_id:03d}: animated texture path drift")
        if metadata_path != source["animated_encounter"]["atlas_metadata_template"].format(id=species_id):
            fail(f"#{species_id:03d}: animated metadata path drift")
        if texture_path in texture_paths or metadata_path in metadata_paths:
            fail(f"#{species_id:03d}: duplicate animated source path")
        texture_paths.add(texture_path)
        metadata_paths.add(metadata_path)

        if not is_sha256(record.get("texture_sha256")) or not is_sha256(record.get("metadata_sha256")):
            fail(f"#{species_id:03d}: animated SHA-256 invalid")

        dims = record.get("source_texture_dimensions")
        if not isinstance(dims, dict):
            fail(f"#{species_id:03d}: source animated dimensions missing")
        width, height = dims.get("width"), dims.get("height")
        if not isinstance(width, int) or not isinstance(height, int) or width <= 0 or height <= 0:
            fail(f"#{species_id:03d}: source animated dimensions invalid")
        source_decoded = width * height * 4
        if record.get("source_decoded_rgba8_bytes") != source_decoded:
            fail(f"#{species_id:03d}: source RGBA8 estimate drift")
        source_within = source_decoded <= PER_ENCOUNTER_ATLAS_GUARDRAIL
        if record.get("source_within_512_kib_guardrail") is not source_within:
            fail(f"#{species_id:03d}: source guardrail classification drift")
        if not source_within:
            source_over_ids.append(species_id)
        if source_decoded > max_source[1]:
            max_source = (species_id, source_decoded)

        if record.get("frame_bounds_valid") is not True:
            fail(f"#{species_id:03d}: frame bounds not validated")
        frame_count = record.get("frame_count")
        unique_frame_count = record.get("unique_frame_count")
        unique_rect_count = record.get("unique_source_rectangle_count")
        if not isinstance(frame_count, int) or frame_count <= 0:
            fail(f"#{species_id:03d}: frame count invalid")
        if unique_frame_count != frame_count:
            fail(f"#{species_id:03d}: frame filenames must be unique")
        if not isinstance(unique_rect_count, int) or unique_rect_count <= 0 or unique_rect_count > frame_count:
            fail(f"#{species_id:03d}: unique source rectangle count invalid")

        plan = record.get("normalization_plan")
        if not isinstance(plan, dict):
            fail(f"#{species_id:03d}: normalization plan missing")
        if plan.get("method") != "dedupe-source-rectangles+shelf-pack-v1":
            fail(f"#{species_id:03d}: normalization method drift")
        if plan.get("pixel_scale") != 1 or plan.get("rotation") is not False:
            fail(f"#{species_id:03d}: normalization may not scale/rotate pixel art")
        if plan.get("unique_source_rectangle_count") != unique_rect_count:
            fail(f"#{species_id:03d}: normalization rectangle count drift")
        packed_dims = plan.get("packed_dimensions")
        if not isinstance(packed_dims, dict):
            fail(f"#{species_id:03d}: normalized dimensions missing")
        packed_width, packed_height = packed_dims.get("width"), packed_dims.get("height")
        if (
            not isinstance(packed_width, int)
            or not isinstance(packed_height, int)
            or packed_width <= 0
            or packed_height <= 0
        ):
            fail(f"#{species_id:03d}: normalized dimensions invalid")
        packed_area = packed_width * packed_height
        if plan.get("packed_pixel_area") != packed_area:
            fail(f"#{species_id:03d}: normalized area drift")
        normalized_decoded = packed_area * 4
        if plan.get("decoded_rgba8_bytes") != normalized_decoded:
            fail(f"#{species_id:03d}: normalized RGBA8 estimate drift")
        normalized_within = normalized_decoded <= PER_ENCOUNTER_ATLAS_GUARDRAIL
        if plan.get("within_512_kib_guardrail") is not normalized_within:
            fail(f"#{species_id:03d}: normalized guardrail classification drift")
        if not normalized_within:
            normalized_over_ids.append(species_id)
        if normalized_decoded > max_normalized[1]:
            max_normalized = (species_id, normalized_decoded, packed_dims)

        for key in ("texture_encoded_bytes", "metadata_encoded_bytes"):
            if not isinstance(record.get(key), int) or record[key] <= 0:
                fail(f"#{species_id:03d}: {key} invalid")

    measurement = produced.get("animated_budget_measurement")
    if not isinstance(measurement, dict):
        fail("animated budget measurement missing")
    if measurement.get("source_over_512_kib_count") != len(source_over_ids):
        fail("source over-budget count drift")
    if measurement.get("source_over_512_kib_ids") != source_over_ids:
        fail("source over-budget id list drift")
    if measurement.get("normalized_over_512_kib_count") != len(normalized_over_ids):
        fail("normalized over-budget count drift")
    if measurement.get("normalized_over_512_kib_ids") != normalized_over_ids:
        fail("normalized over-budget id list drift")
    if measurement.get("max_source") != {
        "id": max_source[0],
        "decoded_rgba8_bytes": max_source[1],
    }:
        fail("max source atlas measurement drift")
    if measurement.get("max_normalized") != {
        "id": max_normalized[0],
        "decoded_rgba8_bytes": max_normalized[1],
        "packed_dimensions": max_normalized[2],
    }:
        fail("max normalized atlas measurement drift")

    if normalized_over_ids:
        fail(
            "normalized encounter atlases exceed 512 KiB after deterministic repack: "
            + ", ".join(f"#{species_id:03d}" for species_id in normalized_over_ids)
        )
    if max_normalized[1] > ENCOUNTER_CACHE_CAP // 2:
        fail("normalized per-atlas maximum no longer permits two resident atlases in 1 MiB")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--production-import-manifest",
        type=Path,
        default=None,
        help="Optional metadata-only manifest emitted by the P6 production importer.",
    )
    args = parser.parse_args()

    schema = load("P6_RESOURCE_MANIFEST_SCHEMA.json")
    manifest = load("P6_RESOURCE_MANIFEST.json")
    source = load("P6_POKEMON_RESOURCE_SOURCE_MAP.json")
    validate_schema(schema, manifest)
    validate_manifest(manifest)
    validate_source_map(source)

    if args.production_import_manifest is not None:
        produced = load_path(args.production_import_manifest)
        validate_production_import(produced, source)

    initial = sum(
        (r["runtime"].get("encoded_bytes") or 0)
        for r in manifest["resources"]
        if r["runtime"]["preload_scope"] == "initial"
    )
    print(f"P6 resource validation PASS: {len(manifest['resources'])} manifest records")
    print(f"Measured initial source bytes represented: {initial}/{INITIAL_BUDGET}")
    print(f"Compact cache cap: {COMPACT_CACHE_CAP}")
    print(f"Encounter cache cap: {ENCOUNTER_CACHE_CAP}")
    if args.production_import_manifest is not None:
        print("P6 production import manifest validation PASS: compact=151 animated=151 normalized<=512KiB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
