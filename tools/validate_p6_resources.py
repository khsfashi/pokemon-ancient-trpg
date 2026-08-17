#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from jsonschema import Draft202012Validator

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
INITIAL_BUDGET = 3 * 1024 * 1024
COMPACT_CACHE_CAP = 384 * 1024
ENCOUNTER_CACHE_CAP = 1024 * 1024
LUCIDE_IDS = {
    "ui.icon.action.back",
    "ui.icon.action.confirm",
    "ui.icon.action.settings",
    "ui.icon.action.close",
}


def fail(message: str) -> None:
    raise AssertionError(message)


def load(name: str) -> dict[str, Any]:
    with (DOCS / name).open("r", encoding="utf-8") as handle:
        value = json.load(handle)
    if not isinstance(value, dict):
        fail(f"{name}: root must be an object")
    return value


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
        if expected > ENCOUNTER_CACHE_CAP // 2:
            fail(f"#{sample['id']}: exceeds 512 KiB per-atlas guardrail")

    inv = source["runtime_invariants"]
    if inv["initial_pokemon_media_bytes"] != 0 or inv["all_151_preloaded"]:
        fail("Pokémon media preload invariant drift")
    if inv["cache_key"] != "resource_id":
        fail("source-map cache key drift")
    if inv["duplicate_instance_policy"] != "reuse_single_cached_instance":
        fail("source-map duplicate-instance policy drift")
    if inv["conceal_reveal_materializes_duplicate_source_assets"]:
        fail("conceal/reveal must not duplicate source assets")


def main() -> int:
    schema = load("P6_RESOURCE_MANIFEST_SCHEMA.json")
    manifest = load("P6_RESOURCE_MANIFEST.json")
    source = load("P6_POKEMON_RESOURCE_SOURCE_MAP.json")
    validate_schema(schema, manifest)
    validate_manifest(manifest)
    validate_source_map(source)
    initial = sum(
        (r["runtime"].get("encoded_bytes") or 0)
        for r in manifest["resources"]
        if r["runtime"]["preload_scope"] == "initial"
    )
    print(f"P6 resource validation PASS: {len(manifest['resources'])} manifest records")
    print(f"Measured initial source bytes represented: {initial}/{INITIAL_BUDGET}")
    print(f"Compact cache cap: {COMPACT_CACHE_CAP}")
    print(f"Encounter cache cap: {ENCOUNTER_CACHE_CAP}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
