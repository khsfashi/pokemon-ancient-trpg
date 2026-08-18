#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any

from build_p6_production_import_manifest import (
    DOCS,
    ROOT,
    fetch_bytes,
    load_json,
    png_dimensions,
    raw_url,
    sha256_hex,
    validate_atlas_metadata,
)

SPECIES_ID = 15
SPECIES_NAME = "beedrill"
SOURCE_REPO = "pagefaultgames/pokerogue-assets"
TARGET_DIR = ROOT / "godot" / "local_assets" / "pokemon" / SPECIES_NAME
PROVENANCE_PATH = TARGET_DIR / "provenance.json"


class MaterializeError(RuntimeError):
    pass


def _fail(message: str) -> None:
    raise MaterializeError(message)


def _write_atomic(path: Path, data: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(f".{path.name}.tmp")
    temporary.write_bytes(data)
    temporary.replace(path)


def _load_animated_source(source_map: dict[str, Any]) -> dict[str, Any]:
    source = source_map.get("animated_encounter")
    if not isinstance(source, dict):
        _fail("P6 source map is missing animated_encounter")
    pin = source.get("pin")
    texture_template = source.get("texture_template")
    metadata_template = source.get("atlas_metadata_template")
    if not isinstance(pin, str) or len(pin) != 40:
        _fail("P6 animated encounter pin must be an exact 40-character commit SHA")
    if not isinstance(texture_template, str) or "{id}" not in texture_template:
        _fail("P6 animated texture template is invalid")
    if not isinstance(metadata_template, str) or "{id}" not in metadata_template:
        _fail("P6 animated metadata template is invalid")
    return source


def materialize() -> dict[str, Any]:
    source_map = load_json(DOCS / "P6_POKEMON_RESOURCE_SOURCE_MAP.json")
    source = _load_animated_source(source_map)
    pin = source["pin"]
    texture_source_path = source["texture_template"].format(id=SPECIES_ID)
    metadata_source_path = source["atlas_metadata_template"].format(id=SPECIES_ID)

    texture_data = fetch_bytes(raw_url(SOURCE_REPO, pin, texture_source_path))
    metadata_data = fetch_bytes(raw_url(SOURCE_REPO, pin, metadata_source_path))
    width, height = png_dimensions(texture_data)

    try:
        metadata = json.loads(metadata_data.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        _fail(f"pinned Beedrill atlas metadata is invalid JSON: {exc}")
    if not isinstance(metadata, dict):
        _fail("pinned Beedrill atlas metadata root must be an object")

    atlas = validate_atlas_metadata(SPECIES_ID, metadata, width, height)
    if atlas["frame_count"] < 2:
        _fail("direct-encounter Beedrill atlas must contain multiple animation frames")

    texture_target = TARGET_DIR / f"{SPECIES_ID}.png"
    metadata_target = TARGET_DIR / f"{SPECIES_ID}.json"
    _write_atomic(texture_target, texture_data)
    _write_atomic(metadata_target, metadata_data)

    provenance = {
        "schema_version": "p8-3-local-p6-materialization-v1",
        "species": {"national_dex_id": SPECIES_ID, "slug": SPECIES_NAME},
        "source": {
            "source_id": source["source_id"],
            "repository": SOURCE_REPO,
            "pin": pin,
            "texture_path": texture_source_path,
            "metadata_path": metadata_source_path,
        },
        "verified": {
            "texture_sha256": sha256_hex(texture_data),
            "metadata_sha256": sha256_hex(metadata_data),
            "texture_dimensions": {"width": width, "height": height},
            "metadata_layout": atlas["metadata_layout"],
            "metadata_format": atlas["metadata_format"],
            "frame_count": atlas["frame_count"],
            "unique_frame_count": atlas["unique_frame_filename_count"],
            "frame_bounds_valid": True,
        },
        "distribution": {
            "target_is_gitignored_local_asset": True,
            "public_distribution": "not_cleared",
            "commit_media": False,
        },
    }
    _write_atomic(
        PROVENANCE_PATH,
        (json.dumps(provenance, ensure_ascii=False, sort_keys=True, indent=2) + "\n").encode("utf-8"),
    )
    return provenance


def self_test() -> None:
    local_root = ROOT / "godot" / "local_assets"
    if not TARGET_DIR.is_relative_to(local_root):
        _fail("materialization target escaped godot/local_assets")
    source_map = load_json(DOCS / "P6_POKEMON_RESOURCE_SOURCE_MAP.json")
    source = _load_animated_source(source_map)
    if source["texture_template"].format(id=SPECIES_ID) != f"images/pokemon/{SPECIES_ID}.png":
        _fail("pinned Beedrill texture locator drifted")
    if source["atlas_metadata_template"].format(id=SPECIES_ID) != f"images/pokemon/{SPECIES_ID}.json":
        _fail("pinned Beedrill metadata locator drifted")
    print("P8.3 Beedrill local materializer self-test: PASS")


def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Materialize only the pinned P6/D-036 Beedrill direct-encounter atlas into the "
            "gitignored Godot owner-review boundary."
        )
    )
    parser.add_argument("--self-test", action="store_true", help="validate the local contract without network access")
    args = parser.parse_args()

    try:
        if args.self_test:
            self_test()
            return 0
        provenance = materialize()
    except MaterializeError as exc:
        parser.error(str(exc))

    verified = provenance["verified"]
    print(
        "P8.3 Beedrill local materialization: PASS "
        f"frames={verified['frame_count']} atlas={verified['texture_dimensions']}"
    )
    print(f"Local ignored target: {TARGET_DIR.relative_to(ROOT)}")
    print("Do not git-add godot/local_assets; run the Godot owner-evidence capture next.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
