#!/usr/bin/env python3
from __future__ import annotations

import copy
import json
import re
import sys
from pathlib import Path
from typing import Any, Callable

import yaml
from jsonschema import Draft202012Validator
from jsonschema.exceptions import ValidationError

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
STABLE_REF_RE = re.compile(r"^[a-z0-9][a-z0-9._-]{0,63}$")
SEMANTIC_REF_RE = re.compile(r"^(p2|p3|p4|p5|content)\.[a-z0-9][a-z0-9._:-]{0,126}$")


def fail(message: str) -> None:
    raise AssertionError(message)


def load_json(name: str) -> dict[str, Any]:
    with (DOCS / name).open("r", encoding="utf-8") as handle:
        return json.load(handle)


def load_yaml(name: str) -> dict[str, Any]:
    with (DOCS / name).open("r", encoding="utf-8") as handle:
        data = yaml.safe_load(handle)
    if not isinstance(data, dict):
        fail(f"{name}: root must be a mapping")
    return data


def inline_type_ok(type_name: str, value: Any) -> bool:
    if type_name.startswith("enum:"):
        return isinstance(value, str) and value in type_name.removeprefix("enum:").split("|")
    return False


def type_ok(type_name: str, value: Any, argument_types: dict[str, Any]) -> bool:
    if inline_type_ok(type_name, value):
        return True
    spec = argument_types.get(type_name)
    if spec is None:
        return False
    kind = spec.get("type")
    if kind == "string":
        if not isinstance(value, str):
            return False
        pattern = spec.get("pattern")
        return pattern is None or re.fullmatch(pattern, value) is not None
    if kind == "boolean":
        return isinstance(value, bool)
    if kind == "integer":
        if isinstance(value, bool) or not isinstance(value, int):
            return False
        if "minimum" in spec and value < spec["minimum"]:
            return False
        if "maximum" in spec and value > spec["maximum"]:
            return False
        if "excluded" in spec and value == spec["excluded"]:
            return False
        return True
    if kind == "array":
        if not isinstance(value, list) or len(value) > spec.get("max_items", sys.maxsize):
            return False
        return all(type_ok(spec["item_type"], item, argument_types) for item in value)
    if kind == "map":
        if not isinstance(value, dict) or len(value) > spec.get("max_items", sys.maxsize):
            return False
        return all(
            type_ok(spec["key_type"], key, argument_types)
            and type_ok(spec["value_type"], item, argument_types)
            for key, item in value.items()
        )
    return False


def args_match(spec: dict[str, str], args: dict[str, Any], argument_types: dict[str, Any]) -> bool:
    if set(args) != set(spec):
        return False
    return all(type_ok(type_name, args[key], argument_types) for key, type_name in spec.items())


def walk_conditions(node: Any) -> list[dict[str, Any]]:
    if isinstance(node, bool) or node is None:
        return []
    if not isinstance(node, dict):
        fail(f"condition node must be boolean or mapping: {node!r}")
    if "predicate_id" in node:
        return [node]
    if "all" in node:
        return [item for child in node["all"] for item in walk_conditions(child)]
    if "any" in node:
        return [item for child in node["any"] for item in walk_conditions(child)]
    if "not" in node:
        return walk_conditions(node["not"])
    fail(f"unknown condition node: {node!r}")


def validate_registry(registry: dict[str, Any]) -> tuple[set[str], dict[str, Any], dict[str, Any]]:
    semantic_reads = registry["semantic_reads"]
    predicates = registry["pure_predicates"]
    commands = registry["commands"]
    argument_types = registry["argument_types"]

    semantic_ids = [entry["ref"] for entry in semantic_reads]
    predicate_ids = [entry["id"] for entry in predicates]
    command_ids = [entry["id"] for entry in commands]

    if len(semantic_ids) != len(set(semantic_ids)):
        fail("registry: duplicate semantic read")
    if len(predicate_ids) != len(set(predicate_ids)):
        fail("registry: duplicate predicate id")
    if len(command_ids) != len(set(command_ids)):
        fail("registry: duplicate command id")

    semantic_set = set(semantic_ids)
    predicate_map = {entry["id"]: entry for entry in predicates}
    command_map = {entry["id"]: entry for entry in commands}

    for predicate in predicates:
        unknown_reads = set(predicate["reads"]) - semantic_set
        if unknown_reads:
            fail(f"registry predicate {predicate['id']}: unknown reads {sorted(unknown_reads)}")
        for type_name in predicate.get("args", {}).values():
            if type_name not in argument_types and not type_name.startswith("enum:"):
                fail(f"registry predicate {predicate['id']}: unknown argument type {type_name}")

    for command in commands:
        for type_name in command.get("args", {}).values():
            if type_name not in argument_types and not type_name.startswith("enum:"):
                fail(f"registry command {command['id']}: unknown argument type {type_name}")

    required_p2_commands = {
        "p2.world.commit_route_state",
        "p2.world.record_local_knowledge",
        "p2.world.grant_permission",
        "p2.world.revoke_permission",
        "p2.world.commit_relationship_state",
        "p2.world.commit_setting_flag_state",
    }
    missing_p2 = required_p2_commands - set(command_map)
    if missing_p2:
        fail(f"registry: P2 typed mutation gap remains: {sorted(missing_p2)}")

    required_p2_predicates = {
        "p2.world.relationship_state_is",
        "p2.world.setting_flag_state_is",
    }
    missing_predicates = required_p2_predicates - set(predicate_map)
    if missing_predicates:
        fail(f"registry: P2 predicate gap remains: {sorted(missing_predicates)}")

    forbidden_fragments = ("raw", "capture", "containment", "generic_evolution", "generic_loot")
    for command_id in command_map:
        if any(fragment in command_id for fragment in forbidden_fragments):
            fail(f"registry: forbidden generic/raw command surfaced: {command_id}")

    return semantic_set, predicate_map, command_map


def validate_representative_events(
    representative: dict[str, Any],
    event_validator: Draft202012Validator,
    registry: dict[str, Any],
    semantic_set: set[str],
    predicate_map: dict[str, Any],
    command_map: dict[str, Any],
) -> None:
    argument_types = registry["argument_types"]
    check_adapter = registry["check_adapter"]
    check_required = check_adapter["required_args"]
    check_optional = check_adapter["optional_args"]
    events = representative["events"]

    event_ids = [event["event_id"] for event in events]
    if len(event_ids) != len(set(event_ids)):
        fail("representative events: duplicate event_id")

    chain_steps = {
        (event["chain_membership"]["chain_id"], event["chain_membership"]["chain_step_id"])
        for event in events
        if "chain_membership" in event
    }

    for event in events:
        errors = sorted(event_validator.iter_errors(event), key=lambda error: list(error.path))
        if errors:
            first = errors[0]
            fail(f"{event['event_id']}: JSON Schema failure at {list(first.path)}: {first.message}")

        declared_reads = set(event["reads"])
        unknown_reads = declared_reads - semantic_set
        if unknown_reads:
            fail(f"{event['event_id']}: unknown semantic reads {sorted(unknown_reads)}")

        known_domain_ids = set(event["domain_commands"])
        unknown_domain_ids = known_domain_ids - set(command_map)
        if unknown_domain_ids:
            fail(f"{event['event_id']}: unknown declared commands {sorted(unknown_domain_ids)}")

        condition_roots = [event["eligibility"]]
        condition_roots.extend(modifier["when"] for modifier in event["weight"]["modifiers"])
        for choice in event["choices"]:
            condition_roots.extend(
                choice.get(key) for key in ("visibility_when", "availability_when") if key in choice
            )

        for root in condition_roots:
            for condition in walk_conditions(root):
                predicate_id = condition["predicate_id"]
                predicate = predicate_map.get(predicate_id)
                if predicate is None:
                    fail(f"{event['event_id']}: unknown predicate {predicate_id}")
                if not set(predicate["reads"]).issubset(declared_reads):
                    fail(
                        f"{event['event_id']}: predicate {predicate_id} reads "
                        f"{predicate['reads']} without declaration"
                    )
                if not args_match(predicate.get("args", {}), condition["args"], argument_types):
                    fail(f"{event['event_id']}: predicate args invalid for {predicate_id}")

        outcome_ids = {outcome["outcome_id"] for outcome in event["outcomes"]}
        referenced_outcomes: set[str] = set()
        for choice in event["choices"]:
            resolution = choice["resolution"]
            referenced_outcomes.update(resolution["outcome_map"].values())
            if resolution["kind"] in {"check", "opposed"}:
                check = resolution["check"]
                check_args = {
                    "check_id": check["check_id"],
                    "governing_attribute_ref": check["governing_attribute_ref"],
                    "context_components": check["context_components"],
                    "outcome_map": resolution["outcome_map"],
                }
                for key in check_optional:
                    if key in check:
                        check_args[key] = check[key]
                if not all(
                    key in check_args and type_ok(type_name, check_args[key], argument_types)
                    for key, type_name in check_required.items()
                ):
                    fail(f"{event['event_id']}: check required args invalid")
                for key, type_name in check_optional.items():
                    if key in check_args and not type_ok(type_name, check_args[key], argument_types):
                        fail(f"{event['event_id']}: check optional arg {key} invalid")
                check_refs = {check["governing_attribute_ref"], *check["context_components"]}
                if "competence_ref" in check:
                    check_refs.add(check["competence_ref"])
                if "opposed_target_ref" in check:
                    check_refs.add(check["opposed_target_ref"])
                if not check_refs.issubset(declared_reads):
                    fail(f"{event['event_id']}: check semantic refs are not declared reads")
            for window_name in ("preparation_window", "reaction_window", "recovery_window"):
                if window_name not in choice:
                    continue
                for command_id in choice[window_name]["legal_operation_ids"]:
                    if command_id not in command_map:
                        fail(f"{event['event_id']}: unknown {window_name} command {command_id}")
                    if command_id not in known_domain_ids:
                        fail(f"{event['event_id']}: {window_name} command not declared at event level")

        if referenced_outcomes != outcome_ids:
            fail(
                f"{event['event_id']}: outcome reachability mismatch "
                f"referenced={sorted(referenced_outcomes)} defined={sorted(outcome_ids)}"
            )

        for outcome in event["outcomes"]:
            for call in outcome["domain_commands"]:
                command_id = call["command_id"]
                command = command_map.get(command_id)
                if command is None:
                    fail(f"{event['event_id']}: unknown outcome command {command_id}")
                if command_id not in known_domain_ids:
                    fail(f"{event['event_id']}: outcome command {command_id} missing from event declaration")
                if not args_match(command.get("args", {}), call["args"], argument_types):
                    fail(f"{event['event_id']}: command args invalid for {command_id}")
            for step in outcome["enqueue_chain_steps"]:
                key = (step["chain_id"], step["chain_step_id"])
                if key not in chain_steps:
                    fail(f"{event['event_id']}: dangling representative chain step {key}")

    acceptance = representative["acceptance"]
    if acceptance["human_social_non_pokemon_immediate_cause_event_count"] < 1:
        fail("D-035 human/social representative missing")
    if acceptance["survival_environment_event_count"] < 1:
        fail("D-035 survival/environment representative missing")
    if acceptance["persistent_faction_chain_step_count"] < 2:
        fail("D-035 persistent faction chain representative missing")
    if acceptance["pokemon_ecology_direct_event_count"] < 1:
        fail("D-035 Pokémon direct representative missing")
    if acceptance["mixed_human_pokemon_event_count"] < 1:
        fail("D-035 mixed representative missing")
    if acceptance["d034_exceptional_path_event_count"] < 1:
        fail("D-034 exceptional representative missing")
    if acceptance["check_reaction_event_count"] < 1:
        fail("check/reaction representative missing")
    if acceptance["bespoke_engine_path_count"] != 0 or acceptance["p2_raw_write_count"] != 0:
        fail("representative fixtures require bespoke/raw paths")
    if acceptance["zero_companion_required_by_any_fixture"]:
        fail("representative fixtures violate 0/3 viability")


VALIDATION_LAYERS = {
    "P5V001": "schema_and_pack_index",
    "P5V002": "registry_and_pack_index",
    "P5V003": "schema",
    "P5V004": "schema_and_semantic",
    "P5V005": "semantic_ast",
    "P5V006": "declared_dependency",
    "P5V007": "ownership",
    "P5V008": "domain_registry",
    "P5V009": "check_adapter",
    "P5V010": "emergency_adapter",
    "P5V011": "semantic_graph",
    "P5V012": "chain_graph",
    "P5V013": "player_safe_projection",
    "P5V014": "semantic_source",
    "P5V015": "transaction_plan",
    "P5V016": "p4_chronology_semantic",
    "P5V017": "p4_encounter_semantic",
    "P5V018": "p4_companion_semantic",
}


def case_validator(
    validation_id: str,
    payload: dict[str, Any],
    predicate_map: dict[str, Any],
    command_map: dict[str, Any],
    argument_types: dict[str, Any],
) -> bool:
    if validation_id == "P5V001":
        return isinstance(payload.get("event_id"), str) and STABLE_REF_RE.fullmatch(payload["event_id"]) is not None
    if validation_id == "P5V002":
        return payload.get("predicate_id") in predicate_map
    if validation_id == "P5V003":
        return payload.get("trigger_id") in {
            "run_started", "location_entered", "travel_step_committed", "rest_completed",
            "player_action_committed", "check_resolved", "companion_state_changed", "knowledge_changed",
            "milestone_committed", "event_resolved", "event_chain_advanced",
        }
    if validation_id == "P5V004":
        return all(
            isinstance(payload.get(key), int) and not isinstance(payload.get(key), bool)
            for key in ("base_points", "modifier_add_points")
        )
    if validation_id == "P5V005":
        return payload.get("predicate_id") in predicate_map and payload.get("consumes_rng") is False
    if validation_id == "P5V006":
        return set(payload.get("predicate", {}).get("resolves_reads", [])).issubset(set(payload.get("reads", [])))
    if validation_id == "P5V007":
        effect = payload.get("p5_effect", {})
        return effect.get("operation") in {
            "narrative.flag.set", "narrative.flag.clear", "narrative.counter.add", "event.chain.enqueue"
        } and isinstance(effect.get("ref"), str) and effect["ref"].startswith("p5.")
    if validation_id == "P5V008":
        command_id = payload.get("command_id")
        command = command_map.get(command_id)
        return command is not None and args_match(command.get("args", {}), payload.get("args", {}), argument_types)
    if validation_id == "P5V009":
        return (
            len(payload.get("competence_refs", [])) <= 1
            and isinstance(payload.get("static_difficulty"), int)
            and not isinstance(payload.get("static_difficulty"), bool)
        )
    if validation_id == "P5V010":
        return (
            payload.get("phase") == "reaction"
            and payload.get("window_id") == "reaction"
            and payload.get("command_id") == "p3.emergency.consume_and_mitigate"
            and payload.get("dice_already_recorded") is True
        )
    if validation_id == "P5V011":
        reachable = set(payload.get("reachable_outcomes", []))
        referenced = set(payload.get("referenced_outcomes", []))
        return bool(reachable) and referenced.issubset(reachable)
    if validation_id == "P5V012":
        return any(
            payload.get(key) not in (None, False)
            for key in ("max_occurrences", "cooldown_after_transitions", "explicit_exit_condition")
        )
    if validation_id == "P5V013":
        player_payload = payload.get("player_payload", {})
        forbidden = {"predicate_value", "hidden_weight", "secret_state", "diagnostic"}
        return payload.get("disclosure") != "secret" or not (forbidden & set(player_payload))
    if validation_id == "P5V014":
        source = str(payload.get("source", ""))
        return not any(token in source for token in ("wall_clock", "network", "device_state", "unordered"))
    if validation_id == "P5V015":
        commands = payload.get("commands", [])
        return (
            payload.get("state_write_count_before_all_validation_passes") == 0
            and all(command.get("validates") is True for command in commands)
            and not any(command.get("applied_early") is True for command in commands)
        )
    if validation_id == "P5V016":
        return (
            payload.get("command_id") == "p4.encounter.record_exceptional_chronology_interaction"
            and payload.get("routine_spawn_created") is False
            and payload.get("native_origin_rewritten") is False
            and payload.get("reusable_time_travel_created", False) is False
        )
    if validation_id == "P5V017":
        return not payload.get("claims_direct_coverage", False) or payload.get("living_playable_interaction") is True
    if validation_id == "P5V018":
        return (
            payload.get("run_valid") is True
            and payload.get("containment_created", False) is False
            and payload.get("forced_ownership", False) is False
            and payload.get("generic_numeric_bonus", 0) == 0
        )
    fail(f"unknown validation id {validation_id}")


def validate_catalog(
    batch02: dict[str, Any],
    predicate_map: dict[str, Any],
    command_map: dict[str, Any],
    argument_types: dict[str, Any],
) -> None:
    cases = batch02["validation_cases"]
    ids = [case["validation_id"] for case in cases]
    expected_ids = [f"P5V{index:03d}" for index in range(1, 19)]
    if sorted(ids) != expected_ids or len(ids) != len(set(ids)):
        fail(f"validation catalog mismatch: {ids}")

    for case in cases:
        validation_id = case["validation_id"]
        expected_layer = VALIDATION_LAYERS[validation_id]
        if case["layer"] != expected_layer:
            fail(f"{validation_id}: wrong validator layer {case['layer']} != {expected_layer}")
        passing = case_validator(validation_id, case["passing"], predicate_map, command_map, argument_types)
        failing = case_validator(validation_id, case["failing"], predicate_map, command_map, argument_types)
        if not passing:
            fail(f"{validation_id}: positive control did not pass {expected_layer}")
        if failing:
            fail(f"{validation_id}: negative fixture did not fail {expected_layer}")


def validate_pending_resume(batch02: dict[str, Any], pending_validator: Draft202012Validator) -> None:
    boundary = {entry["fixture_id"]: entry for entry in batch02["boundary_fixtures"]}
    mid_reaction = boundary["B02-pending-mid-reaction-reload"]["persisted"]
    pending_validator.validate(mid_reaction)

    mid_choice = copy.deepcopy(mid_reaction)
    mid_choice["phase"] = "awaiting_choice"
    mid_choice["completed_rng_draw_records"] = []
    for key in (
        "selected_choice_id", "completed_check_result", "pending_consequence", "pending_reaction_window"
    ):
        mid_choice.pop(key, None)
    pending_validator.validate(mid_choice)

    mid_roll = copy.deepcopy(mid_reaction)
    mid_roll["phase"] = "awaiting_roll"
    mid_roll["completed_rng_draw_records"] = []
    for key in ("completed_check_result", "pending_consequence", "pending_reaction_window"):
        mid_roll.pop(key, None)
    pending_validator.validate(mid_roll)

    invalid_reaction = copy.deepcopy(mid_reaction)
    invalid_reaction.pop("completed_check_result")
    try:
        pending_validator.validate(invalid_reaction)
    except ValidationError:
        pass
    else:
        fail("pending awaiting_reaction accepted without completed_check_result")

    version_fail = boundary["B02-pending-version-fail-closed"]
    if version_fail["expected"] != {
        "resume_allowed": False,
        "reroll_allowed": False,
        "reselect_allowed": False,
        "explicit_migration_required": True,
    }:
        fail("pending unknown-version fixture does not fail closed")


def validate_boundary_complexity(batch02: dict[str, Any]) -> None:
    boundary = {entry["fixture_id"]: entry for entry in batch02["boundary_fixtures"]}

    cooldown = boundary["B02-cooldown-boundary"]
    given = cooldown["given"]
    eligible_12 = 12 - given["last_resolved_transition"] >= given["cooldown_after_transitions"]
    eligible_13 = 13 - given["last_resolved_transition"] >= given["cooldown_after_transitions"]
    if eligible_12 != cooldown["assertions"]["transition_12_eligible"]:
        fail("cooldown boundary transition 12 mismatch")
    if eligible_13 != cooldown["assertions"]["transition_13_eligible"]:
        fail("cooldown boundary transition 13 mismatch")
    if cooldown["assertions"]["wall_clock_read_count"] != 0:
        fail("cooldown boundary reads wall clock")

    recent = boundary["B02-recent-history-boundary"]
    expected_retained = min(recent["given"]["recent_history_capacity"], recent["given"]["appended_event_count"])
    if recent["expected"]["retained_recent_id_count"] != expected_retained:
        fail("recent-history bounded ring mismatch")
    if recent["expected"]["unbounded_history_scan_required"]:
        fail("recent-history fixture requires unbounded scan")
    if str(recent["expected"]["event_count_lookup_complexity"]) != "O(1)":
        fail("event-count lookup is not O(1)")

    chain = boundary["B02-chain-bounded-cycle"]
    if not chain["expected"]["accepted"] or chain["graph"].get("max_occurrences") is None:
        fail("bounded chain cycle is not explicitly bounded")

    rng = boundary["B02-rng-channel-independence"]
    a = rng["variant_a"]["draws"]
    b = rng["variant_b"]["draws"]
    if [draw for draw in a if str(draw).startswith("event.select")] != [
        draw for draw in b if str(draw).startswith("event.select")
    ]:
        fail("event.select channel changed when insight draws were inserted")
    if [draw for draw in a if str(draw).startswith("check.d6")] != [
        draw for draw in b if str(draw).startswith("check.d6")
    ]:
        fail("check.d6 channel changed when insight draws were inserted")
    if rng["expected"]["opaque_global_cursor_required"]:
        fail("RNG fixture requires an opaque global cursor")


def validate_contract_boundaries(registry: dict[str, Any], representative: dict[str, Any]) -> None:
    rules = registry["rules"]
    for key in (
        "generic_evolution_command_exists",
        "generic_capture_or_containment_command_exists",
        "generic_loot_command_exists",
        "generic_companion_bonus_command_exists",
    ):
        if rules[key]:
            fail(f"P3/P4 contradiction: {key} must remain false")
    if rules["eligibility_predicates_consume_rng"]:
        fail("eligibility predicates consume RNG")
    if not rules["effect_plan_commit_is_atomic"] or not rules["command_args_are_prevalidated_before_first_write"]:
        fail("atomic prevalidation contract weakened")

    event_text = json.dumps(representative["events"], sort_keys=True)
    if "p4.companion." in event_text:
        fail("Batch 03 representative world surface unexpectedly requires a companion")
    if "p4.encounter.record_direct_interaction" not in event_text:
        fail("D-034 ordinary direct-interaction path missing")
    if "p4.encounter.record_exceptional_chronology_interaction" not in event_text:
        fail("D-034 exceptional chronology path missing")


def main() -> int:
    event_schema = load_json("P5_NORMALIZED_EVENT_SCHEMA.json")
    pending_schema = load_json("P5_PENDING_EVENT_STATE_SCHEMA.json")
    Draft202012Validator.check_schema(event_schema)
    Draft202012Validator.check_schema(pending_schema)
    event_validator = Draft202012Validator(event_schema)
    pending_validator = Draft202012Validator(pending_schema)

    # Parse every P5 YAML contract/fixture artifact; new P5 YAML cannot bypass syntax validation.
    parsed_yaml: dict[str, dict[str, Any]] = {}
    for path in sorted(DOCS.glob("P5_*.yaml")):
        parsed_yaml[path.name] = load_yaml(path.name)

    required_yaml = {
        "P5_FOUNDATION_SEMANTIC_FIXTURES.yaml",
        "P5_DOMAIN_ADAPTER_REGISTRY.yaml",
        "P5_BATCH_02_VALIDATION_FIXTURES.yaml",
        "P5_BATCH_03_REPRESENTATIVE_EVENTS.yaml",
    }
    missing_yaml = required_yaml - set(parsed_yaml)
    if missing_yaml:
        fail(f"missing required P5 YAML artifacts: {sorted(missing_yaml)}")

    registry = parsed_yaml["P5_DOMAIN_ADAPTER_REGISTRY.yaml"]
    batch02 = parsed_yaml["P5_BATCH_02_VALIDATION_FIXTURES.yaml"]
    representative = parsed_yaml["P5_BATCH_03_REPRESENTATIVE_EVENTS.yaml"]

    semantic_set, predicate_map, command_map = validate_registry(registry)
    validate_representative_events(
        representative, event_validator, registry, semantic_set, predicate_map, command_map
    )
    validate_catalog(batch02, predicate_map, command_map, registry["argument_types"])
    validate_pending_resume(batch02, pending_validator)
    validate_boundary_complexity(batch02)
    validate_contract_boundaries(registry, representative)

    print(
        "P5 contract validation PASS: "
        f"schemas=2 p5_yaml={len(parsed_yaml)} validation_cases=18 "
        f"representative_events={len(representative['events'])}"
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (AssertionError, ValidationError, KeyError, TypeError, ValueError) as exc:
        print(f"P5 contract validation FAIL: {exc}", file=sys.stderr)
        raise SystemExit(1)
