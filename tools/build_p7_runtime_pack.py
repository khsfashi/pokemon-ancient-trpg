#!/usr/bin/env python3
"""Build the deterministic P7 runtime pack from already-authoritative project contracts.

This script is intentionally build-time only. Runtime code consumes the normalized JSON
artifact and never parses YAML authoring files or reaches remote Pokemon APIs.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
from typing import Any

import yaml

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "src" / "generated" / "runtime-pack.json"
EVENTS_PATH = ROOT / "docs" / "P5_BATCH_03_REPRESENTATIVE_EVENTS.yaml"
ADAPTERS_PATH = ROOT / "docs" / "P5_DOMAIN_ADAPTER_REGISTRY.yaml"
RESOURCES_PATH = ROOT / "docs" / "P6_RESOURCE_MANIFEST.json"
SPECIES_PATH = ROOT / "docs" / "P4_SPECIES_COVERAGE_MANIFEST.yaml"

PACK_FORMAT_VERSION = "p7-runtime-pack-v1"
CONTENT_PACK_ID = "p7.contract-fixtures"
CONTENT_PACK_VERSION = "1"
ARCHITECTURE_CONTRACT_VERSION = "p7-architecture-v1"
CONTENT_SCOPE = "contract_fixture_not_production_lore"


def fail(message: str) -> None:
    raise ValueError(message)


def require_mapping(value: Any, name: str) -> dict[str, Any]:
    if not isinstance(value, dict) or not all(isinstance(key, str) for key in value):
        fail(f"{name} must be a string-keyed mapping")
    return value


def require_list(value: Any, name: str) -> list[Any]:
    if not isinstance(value, list):
        fail(f"{name} must be a list")
    return value


def require_string(value: Any, name: str) -> str:
    if not isinstance(value, str) or not value:
        fail(f"{name} must be a non-empty string")
    return value


def require_int(value: Any, name: str) -> int:
    if not isinstance(value, int) or isinstance(value, bool):
        fail(f"{name} must be an integer")
    return value


def load_yaml(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return require_mapping(yaml.safe_load(handle), str(path.relative_to(ROOT)))


def load_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return require_mapping(json.load(handle), str(path.relative_to(ROOT)))


def canonical_json_bytes(value: Any) -> bytes:
    return json.dumps(
        value,
        ensure_ascii=False,
        sort_keys=True,
        separators=(",", ":"),
    ).encode("utf-8")


def render_pretty_json(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, indent=2) + "\n"


def build_event_indexes(events_doc: dict[str, Any]) -> tuple[dict[str, Any], dict[str, list[str]]]:
    if events_doc.get("production_lore") is not False:
        fail("Batch 04 contract-fixture pack must remain explicitly non-production lore")

    event_index: dict[str, Any] = {}
    trigger_index: dict[str, list[str]] = {}

    events = require_list(events_doc.get("events"), "P5 events")
    for event_value in events:
        event = require_mapping(event_value, "P5 event")
        event_id = require_string(event.get("event_id"), "event_id")
        if event_id in event_index:
            fail(f"duplicate event_id: {event_id}")

        triggers = [require_string(item, f"{event_id}.triggers") for item in require_list(event.get("triggers"), f"{event_id}.triggers")]
        if len(set(triggers)) != len(triggers):
            fail(f"duplicate trigger on event: {event_id}")

        event_index[event_id] = event
        for trigger_id in triggers:
            trigger_index.setdefault(trigger_id, []).append(event_id)

    if not event_index:
        fail("P5 event set must not be empty")

    ordered_events = {event_id: event_index[event_id] for event_id in sorted(event_index)}
    ordered_triggers = {
        trigger_id: sorted(event_ids)
        for trigger_id, event_ids in sorted(trigger_index.items())
    }
    return ordered_events, ordered_triggers


def build_resource_index(resources_doc: dict[str, Any]) -> dict[str, Any]:
    resource_index: dict[str, Any] = {}

    for resource_value in require_list(resources_doc.get("resources"), "P6 resources"):
        resource = require_mapping(resource_value, "P6 resource")
        resource_id = require_string(resource.get("resource_id"), "resource_id")
        if resource_id in resource_index:
            fail(f"duplicate resource_id: {resource_id}")

        runtime = require_mapping(resource.get("runtime"), f"{resource_id}.runtime")
        fallback = require_mapping(resource.get("fallback"), f"{resource_id}.fallback")
        redistribution = require_mapping(resource.get("redistribution"), f"{resource_id}.redistribution")
        preprocess = require_mapping(resource.get("preprocess"), f"{resource_id}.preprocess")

        if runtime.get("cache_key") != "resource_id":
            fail(f"{resource_id} violates frozen P6 cache_key == resource_id")

        public_distribution = require_string(
            redistribution.get("public_distribution"),
            f"{resource_id}.public_distribution",
        )
        requirement = require_string(resource.get("requirement"), f"{resource_id}.requirement")
        if requirement == "required" and public_distribution != "allowed":
            fail(f"required resource is not public-distribution safe: {resource_id}")

        availability = (
            "public_build_time_import"
            if public_distribution == "allowed"
            else "optional_local_only"
        )

        resource_index[resource_id] = {
            "resource_id": resource_id,
            "asset_class": require_string(resource.get("asset_class"), f"{resource_id}.asset_class"),
            "requirement": requirement,
            "availability": availability,
            "public_distribution": public_distribution,
            "preload_scope": require_string(runtime.get("preload_scope"), f"{resource_id}.preload_scope"),
            "cache_key": resource_id,
            "duplicate_instance_policy": require_string(
                runtime.get("duplicate_instance_policy"),
                f"{resource_id}.duplicate_instance_policy",
            ),
            "eviction_class": require_string(runtime.get("eviction_class"), f"{resource_id}.eviction_class"),
            "encoded_bytes": runtime.get("encoded_bytes"),
            "decoded_bytes_estimate": runtime.get("decoded_bytes_estimate"),
            "output_format": preprocess.get("output_format"),
            "output_dimensions": preprocess.get("output_dimensions"),
            "fallback_mode": require_string(fallback.get("mode"), f"{resource_id}.fallback.mode"),
            "fallback_resource_id": fallback.get("alternate_resource_id"),
            "player_visible_failure": fallback.get("player_visible_failure"),
        }

    if not resource_index:
        fail("P6 resource set must not be empty")
    return {resource_id: resource_index[resource_id] for resource_id in sorted(resource_index)}


def build_species_index(species_doc: dict[str, Any]) -> dict[str, Any]:
    mandatory_range = require_list(species_doc.get("mandatory_species_range"), "mandatory_species_range")
    if mandatory_range != [1, 151]:
        fail("P7 Batch 04 requires the frozen Gen-I mandatory range [1, 151]")

    required_fields = [
        require_string(item, "required_resolved_fields item")
        for item in require_list(species_doc.get("required_resolved_fields"), "required_resolved_fields")
    ]
    status_defaults = require_mapping(species_doc.get("status_defaults"), "status_defaults")

    species_index: dict[str, Any] = {}
    seen_dex: set[int] = set()
    for row_value in require_list(species_doc.get("species"), "species"):
        row = require_mapping(row_value, "species row")
        national_dex = require_int(row.get("national_dex"), "species.national_dex")
        dossier_status = require_string(row.get("dossier_status"), f"species {national_dex} dossier_status")
        defaults = require_mapping(status_defaults.get(dossier_status), f"status_defaults.{dossier_status}")
        resolved = {**defaults, **row}

        missing = [field for field in required_fields if field not in resolved]
        if missing:
            fail(f"species {national_dex} missing resolved fields: {', '.join(missing)}")
        if national_dex in seen_dex:
            fail(f"duplicate species national_dex: {national_dex}")
        seen_dex.add(national_dex)

        species_key = require_string(resolved.get("species_key"), f"species {national_dex} species_key")
        key = f"{national_dex:03d}"
        species_index[key] = {
            "species_id": national_dex,
            "species_key": species_key,
            "dossier_descriptor_id": f"p4.species.{key}.{species_key}",
            "dossier_status": resolved.get("dossier_status"),
            "authoring_batch": resolved.get("authoring_batch"),
            "source_review_status": resolved.get("source_review_status"),
            "stat_profile_status": resolved.get("stat_profile_status"),
            "capability_hazard_status": resolved.get("capability_hazard_status"),
            "ecology_status": resolved.get("ecology_status"),
            "threat_encounter_status": resolved.get("threat_encounter_status"),
            "individual_variation_status": resolved.get("individual_variation_status"),
            "bond_status": resolved.get("bond_status"),
            "narrative_hook_status": resolved.get("narrative_hook_status"),
            "p6_followup_required": resolved.get("p6_followup_required"),
            "blocking_gate_refs": resolved.get("blocking_gate_refs"),
        }

    expected = set(range(1, 152))
    if seen_dex != expected:
        missing = sorted(expected - seen_dex)
        extra = sorted(seen_dex - expected)
        fail(f"species coverage must be exactly 1..151; missing={missing}, extra={extra}")

    return {key: species_index[key] for key in sorted(species_index)}


def build_adapter_index(adapters_doc: dict[str, Any]) -> tuple[dict[str, Any], dict[str, Any]]:
    adapter_index: dict[str, Any] = {}

    def register(adapter_id: str, kind: str, source: dict[str, Any], id_field: str) -> None:
        if adapter_id in adapter_index:
            fail(f"duplicate semantic adapter id: {adapter_id}")
        descriptor = {
            "adapter_id": adapter_id,
            "kind": kind,
        }
        for key, value in source.items():
            if key != id_field:
                descriptor[key] = value
        adapter_index[adapter_id] = descriptor

    for read_value in require_list(adapters_doc.get("semantic_reads"), "semantic_reads"):
        read = require_mapping(read_value, "semantic read")
        adapter_id = require_string(read.get("ref"), "semantic read ref")
        register(adapter_id, "semantic_read", read, "ref")

    for predicate_value in require_list(adapters_doc.get("pure_predicates"), "pure_predicates"):
        predicate = require_mapping(predicate_value, "pure predicate")
        adapter_id = require_string(predicate.get("id"), "pure predicate id")
        register(adapter_id, "pure_predicate", predicate, "id")

    check_adapter = require_mapping(adapters_doc.get("check_adapter"), "check_adapter")
    check_id = require_string(check_adapter.get("id"), "check_adapter.id")
    register(check_id, "check_adapter", check_adapter, "id")

    for command_value in require_list(adapters_doc.get("commands"), "commands"):
        command = require_mapping(command_value, "command")
        adapter_id = require_string(command.get("id"), "command.id")
        register(adapter_id, "command", command, "id")

    if not adapter_index:
        fail("semantic adapter registry must not be empty")

    registry_metadata = {
        "registry_format_version": require_string(
            adapters_doc.get("registry_format_version"),
            "registry_format_version",
        ),
        "contract_version": require_string(adapters_doc.get("contract_version"), "adapter contract_version"),
        "rules": require_mapping(adapters_doc.get("rules"), "adapter rules"),
        "argument_types": require_mapping(adapters_doc.get("argument_types"), "argument_types"),
    }
    return (
        {adapter_id: adapter_index[adapter_id] for adapter_id in sorted(adapter_index)},
        registry_metadata,
    )


def assert_public_runtime_pack_is_source_safe(pack: dict[str, Any]) -> None:
    encoded = canonical_json_bytes(pack).decode("utf-8")
    forbidden = (
        "http://",
        "https://",
        "pokeapi.co",
        "raw.githubusercontent.com",
        "asset_locator",
        "canonical_url",
    )
    leaked = [marker for marker in forbidden if marker in encoded]
    if leaked:
        fail(f"runtime pack leaked remote/source-only fields: {', '.join(leaked)}")


def build_runtime_pack() -> dict[str, Any]:
    events_doc = load_yaml(EVENTS_PATH)
    adapters_doc = load_yaml(ADAPTERS_PATH)
    resources_doc = load_json(RESOURCES_PATH)
    species_doc = load_yaml(SPECIES_PATH)

    event_index, trigger_index = build_event_indexes(events_doc)
    resource_index = build_resource_index(resources_doc)
    species_index = build_species_index(species_doc)
    adapter_index, adapter_registry_metadata = build_adapter_index(adapters_doc)

    unsigned_pack = {
        "pack_format_version": PACK_FORMAT_VERSION,
        "content_pack_id": CONTENT_PACK_ID,
        "content_pack_version": CONTENT_PACK_VERSION,
        "content_scope": CONTENT_SCOPE,
        "architecture_contract_version": ARCHITECTURE_CONTRACT_VERSION,
        "p5_contract_version": require_string(events_doc.get("contract_version"), "P5 contract_version"),
        "source_contracts": {
            "p4_species_coverage": require_string(species_doc.get("schema_version"), "P4 schema_version"),
            "p5_event_fixture": require_string(events_doc.get("fixture_format_version"), "P5 fixture_format_version"),
            "p5_adapter_registry": require_string(adapters_doc.get("registry_format_version"), "P5 registry_format_version"),
            "p6_resource_manifest": require_string(resources_doc.get("schema_version"), "P6 schema_version"),
        },
        "digest_algorithm": "sha256",
        "digest_scope": "canonical_json_without_content_digest_sha256",
        "event_index": event_index,
        "trigger_index": trigger_index,
        "resource_index": resource_index,
        "species_index": species_index,
        "semantic_adapter_index": adapter_index,
        "semantic_adapter_registry": adapter_registry_metadata,
    }

    digest = hashlib.sha256(canonical_json_bytes(unsigned_pack)).hexdigest()
    pack = {**unsigned_pack, "content_digest_sha256": digest}
    assert_public_runtime_pack_is_source_safe(pack)
    return pack


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument(
        "--check",
        action="store_true",
        help="Fail unless --output already equals the deterministic generated artifact.",
    )
    args = parser.parse_args()

    output = args.output
    if not output.is_absolute():
        output = ROOT / output

    pack = build_runtime_pack()
    rendered = render_pretty_json(pack)

    if args.check:
        if not output.is_file():
            print(f"ERROR: generated runtime pack is missing: {output.relative_to(ROOT)}")
            return 1
        current = output.read_text(encoding="utf-8")
        if current != rendered:
            print(f"ERROR: generated runtime pack is stale: {output.relative_to(ROOT)}")
            return 1
        print(
            "P7 runtime pack check PASS "
            f"({len(pack['event_index'])} events, "
            f"{len(pack['trigger_index'])} triggers, "
            f"{len(pack['resource_index'])} resources, "
            f"{len(pack['species_index'])} species, "
            f"{len(pack['semantic_adapter_index'])} adapters, "
            f"sha256={pack['content_digest_sha256']})"
        )
        return 0

    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(rendered, encoding="utf-8", newline="\n")
    print(f"Wrote {output.relative_to(ROOT)} sha256={pack['content_digest_sha256']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
