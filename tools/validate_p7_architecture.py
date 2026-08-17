#!/usr/bin/env python3
"""Validate the frozen P7 Batch 01 architecture against P5/P6 handoff invariants."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "docs" / "P7_ARCHITECTURE_MANIFEST.json"
P5_PATH = ROOT / "docs" / "P5_DETERMINISTIC_EVENT_FOUNDATION_CONTRACT.md"
P6_PATH = ROOT / "docs" / "P6_RESOURCE_BUDGET_AND_PIPELINE_CONTRACT.md"
CONTRACT_PATH = ROOT / "docs" / "P7_TECHNICAL_ARCHITECTURE_CONTRACT.md"
PLAN_PATH = ROOT / "docs" / "P7_IMPLEMENTATION_SKELETON_PLAN.md"


def require(condition: bool, message: str) -> None:
    if not condition:
        raise SystemExit(f"P7 architecture validation failed: {message}")


def main() -> None:
    for path in (MANIFEST_PATH, P5_PATH, P6_PATH, CONTRACT_PATH, PLAN_PATH):
        require(path.is_file(), f"missing required artifact: {path.relative_to(ROOT)}")

    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    p5 = P5_PATH.read_text(encoding="utf-8")
    p6 = P6_PATH.read_text(encoding="utf-8")
    contract = CONTRACT_PATH.read_text(encoding="utf-8")
    plan = PLAN_PATH.read_text(encoding="utf-8")

    require(manifest["schema_version"] == "p7-architecture-v1", "unknown architecture version")
    require(manifest["phase_issue"] == 7, "wrong owning issue")

    delivery = manifest["delivery"]
    require(delivery["primary_target"] == "web-pwa", "web/PWA must be the primary target")
    require(delivery["backend_required"] is False, "baseline must not require a backend")
    require(delivery["deployment"] == "vercel-static", "unexpected baseline deployment target")
    require(delivery["android_packaging"].startswith("deferred-"), "Android packaging must remain deferred")

    toolchain = manifest["toolchain"]
    require(toolchain["node_line"] == "24.x-lts", "Node line drift")
    require(toolchain["build_tool"] == "vite-8.x", "Vite major drift")
    require(toolchain["language"] == "typescript-strict", "strict TypeScript is required")
    require(toolchain["ui"] == "preact-10.x", "Preact major drift")
    require(toolchain["state_library"] == "none", "baseline global state dependency is forbidden")
    require(toolchain["router_library"] == "none-in-baseline", "baseline router dependency is forbidden")

    runtime = manifest["runtime"]
    require(runtime["authoritative_core"] == "pure-typescript-domain-runtime", "UI framework cannot own gameplay")
    require(runtime["ui_is_authoritative"] is False, "UI cannot be authoritative")
    require(runtime["event_evaluation"] == "committed-transition-driven", "P5 transition boundary drift")
    require(runtime["per_frame_event_scan"] is False, "per-frame event scan forbidden")
    require(runtime["per_render_event_scan"] is False, "per-render event scan forbidden")
    require(runtime["runtime_u64_representation"] == "bigint", "u64 runtime representation must be exact")
    require(runtime["wire_u64_representation"] == "unsigned-decimal-string", "wire u64 must avoid JSON precision loss")
    require(runtime["sha256_provider"] == "web-crypto-subtle-digest", "unexpected SHA-256 provider")

    save = manifest["save"]
    require(save["primary_storage"] == "indexeddb", "IndexedDB must own authoritative browser saves")
    require(save["authoritative_state_in_service_worker_cache"] is False, "service-worker cache cannot own saves")
    require(save["authoritative_state_in_local_storage"] is False, "localStorage cannot own saves")
    require(save["migration_policy"] == "sequential-pure-fail-closed", "save migration must fail closed")
    require(save["backup_import"] == "validate-fully-before-atomic-write", "backup import must be atomic")
    require(save["run_seed_encoding"] == "32-lowercase-hex", "P5 run-seed encoding drift")
    require(save["content_pack_pin_required"] is True, "content pack pin is required")
    require(save["pending_event_state_required"] is True, "pending event state must survive reload")

    content = manifest["content_pipeline"]
    require(content["runtime_remote_pokemon_api"] is False, "runtime remote Pokémon API is forbidden")
    require(content["external_source_access"] == "build-import-only", "external source access must remain build-time")
    require(content["normalized_generated_artifacts"] is True, "runtime artifacts must be normalized/generated")
    require(content["trigger_index_generated"] is True, "P5 trigger index is required")
    require(content["resource_index_generated"] is True, "resource index is required")
    require(content["runtime_whole_catalog_scan_required"] is False, "whole-catalog runtime scans are forbidden")

    pwa = manifest["pwa"]
    require(pwa["manifest_required"] is True, "web app manifest required")
    require(pwa["service_worker_required_for_offline_baseline"] is True, "offline baseline requires service worker")
    require(pwa["pokemon_media_precache"] is False, "uncleared Pokémon media cannot be precached")
    require(pwa["forced_mid_transition_update"] is False, "forced mid-transition app update forbidden")

    resources = manifest["resources"]
    expected_caps = {
        "pokemon_media_initial_payload_bytes": 0,
        "compact_icon_decoded_cache_cap_bytes": 393_216,
        "encounter_atlas_decoded_per_item_cap_bytes": 2_097_152,
        "encounter_atlas_max_resident": 2,
        "encounter_atlas_decoded_cache_cap_bytes": 4_194_304,
        "combined_optional_pokemon_decoded_cap_bytes": 4_587_520,
        "p6_owned_required_initial_resource_payload_cap_bytes": 3_145_728,
    }
    for key, expected in expected_caps.items():
        require(resources[key] == expected, f"P6 resource cap drift: {key}")
    require(resources["lookup_key"] == "resource_id", "resource cache key drift")
    require(resources["lookup_complexity"] == "O(1)-equivalent", "resource lookup must be indexed")
    require(resources["inflight_request_coalescing"] is True, "duplicate in-flight requests must coalesce")
    require(resources["duplicate_long_lived_decoded_instances"] is False, "duplicate decoded instances forbidden")
    require(resources["all_151_media_preload"] is False, "whole-roster preload forbidden")
    require(resources["runtime_default_image_resize"] is False, "runtime default resize forbidden")
    require(resources["runtime_atlas_repack"] is False, "runtime atlas repack forbidden")
    require(resources["runtime_atlas_json_reparse_on_render"] is False, "atlas JSON render reparse forbidden")
    require(resources["missing_optional_media_changes_gameplay"] is False, "optional media cannot change gameplay")

    tests = manifest["tests"]
    for key in (
        "retain_p5_python_contract_gates",
        "retain_p6_python_resource_gates",
        "port_p5_rng_vectors_to_typescript",
        "save_migration_fixtures",
        "resource_cache_coalescing_and_eviction_fixtures",
        "phone_viewport_chromium_and_webkit_e2e",
        "offline_reload_resume_fixture",
        "typecheck_required",
        "production_build_required",
    ):
        require(tests[key] is True, f"required test gate disabled: {key}")

    # Upstream semantic anchors: fail loudly if P5/P6 contracts are replaced without revisiting P7.
    require("Contract version: `p5-event-contract-v1`" in p5, "P5 contract version changed")
    require("U64_BE(origin_transition_seq)" in p5, "P5 u64 transition encoding anchor missing")
    require("U64_BE(draw_index)" in p5, "P5 u64 draw-index encoding anchor missing")
    require("total_weight` must fit unsigned 63-bit range" in p5, "P5 63-bit weight anchor missing")
    require("compact_icon_decoded_cache <= 384 KiB" in p6, "P6 compact-cache anchor missing")
    require("per_encounter_atlas_decoded <= 2 MiB" in p6, "P6 per-atlas anchor missing")
    require("max_resident_encounter_atlases = 2" in p6, "P6 resident-atlas anchor missing")
    require("encounter_atlas_decoded_cache <= 4 MiB" in p6, "P6 atlas-cache anchor missing")
    require("pokemon_media_initial_payload = 0" in p6, "P6 zero-media-preload anchor missing")

    require("Preact + Vite — selected" in contract, "candidate decision missing")
    require("IndexedDB is the authoritative browser persistence store" in contract, "save ownership missing")
    require("runtime authoritative u64/u63 arithmetic -> bigint" in contract, "integer precision rule missing")
    require("P7 exit audit" in plan, "implementation plan has no exit gate")

    print("P7 architecture validation: PASS")
    print("architecture_version = p7-architecture-v1")
    print("delivery = web-pwa / static / no backend")
    print("runtime_integer_boundary = bigint <-> decimal-string wire")
    print("p5_transition_and_rng_anchors = preserved")
    print("p6_resource_budget_anchors = preserved")


if __name__ == "__main__":
    main()
