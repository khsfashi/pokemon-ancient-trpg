#!/usr/bin/env python3
"""Validate the P8 Batch 01 vertical-slice contract against frozen P2-P7 invariants."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "docs" / "P8_VERTICAL_SLICE_MANIFEST.json"
CONTRACT_PATH = ROOT / "docs" / "P8_VERTICAL_SLICE_CONTRACT.md"
PLAN_PATH = ROOT / "docs" / "P8_IMPLEMENTATION_PLAN.md"
P2_PATH = ROOT / "docs" / "P2_FIRST_REGION_CONTRACT.md"
P3_CREATION_PATH = ROOT / "docs" / "P3_CHARACTER_CREATION_CONTRACT.md"
P5_PATH = ROOT / "docs" / "P5_DETERMINISTIC_EVENT_FOUNDATION_CONTRACT.md"
WORLD_PATH = ROOT / "docs" / "WORLD_CONTENT_AND_FACTION_CONTRACT.md"
P7_MANIFEST_PATH = ROOT / "docs" / "P7_ARCHITECTURE_MANIFEST.json"


def require(condition: bool, message: str) -> None:
    if not condition:
        raise SystemExit(f"P8 vertical-slice validation failed: {message}")


def main() -> None:
    required_paths = (
        MANIFEST_PATH,
        CONTRACT_PATH,
        PLAN_PATH,
        P2_PATH,
        P3_CREATION_PATH,
        P5_PATH,
        WORLD_PATH,
        P7_MANIFEST_PATH,
    )
    for path in required_paths:
        require(path.is_file(), f"missing required artifact: {path.relative_to(ROOT)}")

    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    contract = CONTRACT_PATH.read_text(encoding="utf-8")
    plan = PLAN_PATH.read_text(encoding="utf-8")
    p2 = P2_PATH.read_text(encoding="utf-8")
    p3 = P3_CREATION_PATH.read_text(encoding="utf-8")
    p5 = P5_PATH.read_text(encoding="utf-8")
    world = WORLD_PATH.read_text(encoding="utf-8")
    p7 = json.loads(P7_MANIFEST_PATH.read_text(encoding="utf-8"))

    require(manifest["schema_version"] == "p8-vertical-slice-v1", "unknown P8 contract version")
    require(manifest["phase_issue"] == 8, "wrong owning issue")

    upstream = manifest["upstream"]
    require(upstream["p5_event_contract_version"] == "p5-event-contract-v1", "P5 contract version drift")
    require(upstream["p7_architecture_version"] == "p7-architecture-v1", "P7 architecture version drift")
    require(p7["schema_version"] == upstream["p7_architecture_version"], "P7 manifest version mismatch")

    scope = manifest["slice_scope"]
    require(scope["primary_settlement_count"] == 1, "P8 must remain a single-primary-settlement slice")
    require(scope["travel_corridor_min"] >= 1, "P8 needs a meaningful travel corridor")
    require(scope["meaningfully_distinct_local_or_ecology_context_min"] >= 2, "P2 requires at least two distinct contexts")
    require(scope["formative_prompt_count"] == 3, "P3 creation requires exactly three formative prompts")
    require(scope["curated_origin_count_min"] >= 4, "curated Origin proof is too narrow")
    require(scope["curated_practice_count_min"] >= 4, "curated Learned Practice proof is too narrow")
    require(3 <= scope["curated_species_count_min"] <= scope["curated_species_count_max"] <= 8, "curated species envelope must remain 3..8")
    require(scope["visible_companion_slots"] == 3, "companion slot count drift")
    require(scope["zero_companion_completion_required"] is True, "0/3 completion proof is mandatory")
    require(scope["all_151_required_in_slice"] is False, "P8 must not absorb P9 all-151 breadth")

    loop = manifest["required_loop_proofs"]
    required_loop_keys = (
        "character_creation_reveal_and_specialization",
        "settlement_social_pressure",
        "human_social_non_pokemon_immediate_cause",
        "travel_survival_event",
        "persistent_faction_or_relationship_thread",
        "pokemon_ecology_direct_interaction",
        "mixed_human_motive_and_pokemon_ecology",
        "event_eligibility_choice_check_consequence",
        "deterministic_save_reload_resume",
        "coherent_run_ending",
        "phone_sized_ui",
    )
    for key in required_loop_keys:
        require(loop[key] is True, f"required loop proof disabled: {key}")

    runtime = manifest["runtime"]
    require(runtime["authoritative_core"] == "framework-independent-pure-typescript", "P7 authority boundary drift")
    require(runtime["event_engine"] == "p5-shared-data-driven", "P5 shared event engine required")
    require(runtime["event_evaluation"] == "committed-transition-driven", "event evaluation boundary drift")
    require(runtime["separate_faction_event_engine"] is False, "separate faction event engine forbidden")
    require(runtime["separate_pokemon_event_engine"] is False, "separate Pokémon event engine forbidden")
    require(runtime["hardcoded_story_events_in_ui"] is False, "story events cannot be hard-coded in UI")
    require(runtime["ui_direct_authoritative_mutation"] is False, "UI cannot mutate authority directly")
    require(runtime["pending_event_persisted_before_player_wait"] is True, "pending events must persist before waiting")
    require(runtime["save_storage"] == "indexeddb", "P7 IndexedDB save ownership drift")
    require(runtime["content_pack_pin_required"] is True, "P5 content pack pin is mandatory")
    require(runtime["runtime_remote_pokemon_api"] is False, "runtime remote Pokémon API forbidden")
    require(runtime["runtime_whole_event_catalog_scan"] is False, "whole event catalog scan cannot be a runtime requirement")

    guards = manifest["resource_guards"]
    require(guards["inherit_p6_p7_caps_without_relaxation"] is True, "P6/P7 resource caps must be inherited")
    p7_resources = p7["resources"]
    cap_pairs = {
        "pokemon_media_initial_payload_bytes": "pokemon_media_initial_payload_bytes",
        "compact_icon_decoded_cache_cap_bytes": "compact_icon_decoded_cache_cap_bytes",
        "encounter_atlas_decoded_per_item_cap_bytes": "encounter_atlas_decoded_per_item_cap_bytes",
        "encounter_atlas_max_resident": "encounter_atlas_max_resident",
        "encounter_atlas_decoded_cache_cap_bytes": "encounter_atlas_decoded_cache_cap_bytes",
        "combined_optional_pokemon_decoded_cap_bytes": "combined_optional_pokemon_decoded_cap_bytes",
        "required_initial_resource_payload_cap_bytes": "p6_owned_required_initial_resource_payload_cap_bytes",
    }
    for p8_key, p7_key in cap_pairs.items():
        require(guards[p8_key] == p7_resources[p7_key], f"P6/P7 resource cap drift: {p8_key}")
    require(guards["missing_optional_media_changes_gameplay"] is False, "optional media cannot affect gameplay")
    require(guards["runtime_default_image_resize"] is False, "runtime default resize forbidden")
    require(guards["runtime_atlas_repack"] is False, "runtime atlas repack forbidden")

    boundaries = manifest["content_boundaries"]
    require(boundaries["batch01_freezes_new_major_faction_identity"] is False, "Batch 01 cannot freeze final faction identity")
    require(boundaries["batch01_freezes_new_persistent_world_canon"] is False, "Batch 01 cannot invent persistent world canon")
    require(boundaries["local_noncanonical_slice_details_allowed"] is True, "local authored slice details must remain possible")
    require(boundaries["p9_owns_all_151_direct_interaction_breadth"] is True, "P9 all-151 ownership drift")
    require(boundaries["zero_companion_path_may_not_be_content_gated"] is True, "content cannot gate the 0/3 completion path")

    validation = manifest["validation"]
    for key in (
        "retain_p5_contract_gates",
        "retain_p6_resource_gates",
        "retain_p7_architecture_gates",
        "pure_runtime_unit_tests_required",
        "deterministic_replay_fixture_required",
        "mid_event_reload_fixture_required",
        "zero_companion_end_to_end_fixture_required",
        "phone_chromium_webkit_e2e_required",
        "typecheck_required",
        "production_build_required",
    ):
        require(validation[key] is True, f"required validation gate disabled: {key}")

    # Upstream semantic anchors. These deliberately fail if an upstream contract is materially replaced.
    require("one primary settlement" in p2, "P2 primary-settlement anchor missing")
    require("at least two meaningfully different ecological/local contexts" in p2, "P2 context-count anchor missing")
    require("default initial character-creation length is **three formative prompts**" in p3, "P3 three-prompt anchor missing")
    require("spend **4 attribute increases**" in p3, "P3 attribute-budget anchor missing")
    require("Contract version: `p5-event-contract-v1`" in p5, "P5 contract-version anchor missing")
    require("rendering, scrolling, animation, layout, app focus and frame ticks never evaluate event eligibility" in p5, "P5 transition-driven anchor missing")
    require("Every major world structure must be materially shaped by the existence of Pokémon" in world, "world-content causal rule missing")
    require("one ordinary human/social event not immediately caused by a Pokémon" in world, "mixed-world P8 human event anchor missing")
    require(p7["runtime"]["ui_is_authoritative"] is False, "P7 UI authority guard changed")
    require(p7["runtime"]["per_frame_event_scan"] is False, "P7 per-frame event-scan guard changed")
    require(p7["content_pipeline"]["runtime_whole_catalog_scan_required"] is False, "P7 catalog-scan guard changed")

    require("Contract version: `p8-vertical-slice-v1`" in contract, "P8 contract-version marker missing")
    require("story events are data, not hard-coded component branches" in contract, "P8 UI/story boundary missing")
    require("P9 still owns complete authored world breadth and all `151/151` living direct-interaction paths" in contract, "P9 breadth boundary missing")
    require("Batch 02 — authoritative gameplay runtime foundation" in plan, "Batch 02 runtime target missing")
    require("Batch 03 — authored vertical-slice content pack and replay fixture" in plan, "Batch 03 content target missing")
    require("Batch 04 — phone-sized Preact flow and production resource/save integration" in plan, "Batch 04 presentation target missing")
    require("Batch 05 — production browser proof and P8 exit audit" in plan, "P8 exit gate missing")

    print("P8 vertical-slice validation: PASS")
    print("contract_version = p8-vertical-slice-v1")
    print("scope = 1 settlement / >=2 contexts / 3..8 curated species")
    print("event_runtime = shared P5 / transition-driven / UI non-authoritative")
    print("zero_companion_completion = required")
    print("p6_p7_resource_caps = inherited without relaxation")
    print("p9_all_151_breadth = preserved")


if __name__ == "__main__":
    main()
