#!/usr/bin/env python3
"""Build/check the deterministic P8 authored vertical-slice runtime pack."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
SOURCE_PATH = ROOT / "content" / "p8" / "vertical-slice.source.json"
P4_SPECIES_PATH = ROOT / "docs" / "P4_SPECIES_COVERAGE_MANIFEST.yaml"
OUTPUT_PATH = ROOT / "src" / "generated" / "p8-slice-pack.json"

FORMAT_VERSION = "p8-slice-runtime-pack-v1"
SOURCE_SCHEMA_VERSION = "p8-authored-slice-source-v1"
CANON_SCOPE = "local_disposable_slice"
APPROVAL = "approved_local_slice"
ALLOWED_TRIGGERS = {
    "run_started", "location_entered", "travel_step_committed", "rest_completed",
    "player_action_committed", "check_resolved", "companion_state_changed",
    "knowledge_changed", "milestone_committed", "event_resolved", "event_chain_advanced",
}
REQUIRED_PILLARS = {
    "ordinary_human_pressure", "travel_survival", "persistent_relationship",
    "pokemon_ecology", "mixed_human_pokemon", "ending_inputs",
}
STABLE_ID = re.compile(r"^[a-z0-9][a-z0-9._-]{0,63}$")
P4_ROW = re.compile(
    r"- \{national_dex: (?P<dex>\d+), species_key: (?P<key>[a-z0-9-]+), "
    r"dossier_status: (?P<status>[a-z_]+),"
)


def fail(message: str) -> None:
    raise ValueError(message)


def require_mapping(value: Any, label: str) -> dict[str, Any]:
    if not isinstance(value, dict) or not all(isinstance(key, str) for key in value):
        fail(f"{label} must be a string-keyed object")
    return value


def require_list(value: Any, label: str) -> list[Any]:
    if not isinstance(value, list):
        fail(f"{label} must be a list")
    return value


def require_string(value: Any, label: str) -> str:
    if not isinstance(value, str) or not value:
        fail(f"{label} must be a non-empty string")
    return value


def require_stable_id(value: Any, label: str) -> str:
    text = require_string(value, label)
    if STABLE_ID.fullmatch(text) is None:
        fail(f"{label} must be a stable id")
    return text


def require_safe_int(value: Any, label: str, minimum: int = 0) -> int:
    if not isinstance(value, int) or isinstance(value, bool) or value < minimum:
        fail(f"{label} must be an integer >= {minimum}")
    return value


def canonical_json_bytes(value: Any) -> bytes:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":")).encode("utf-8")


def pretty_json(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, indent=2) + "\n"


def load_source() -> dict[str, Any]:
    with SOURCE_PATH.open("r", encoding="utf-8") as handle:
        return require_mapping(json.load(handle), str(SOURCE_PATH.relative_to(ROOT)))


def load_p4_species() -> dict[int, tuple[str, str]]:
    rows: dict[int, tuple[str, str]] = {}
    for line in P4_SPECIES_PATH.read_text(encoding="utf-8").splitlines():
        match = P4_ROW.search(line)
        if match is None:
            continue
        dex = int(match.group("dex"))
        if dex in rows:
            fail(f"duplicate P4 species row: {dex}")
        rows[dex] = (match.group("key"), match.group("status"))
    if set(rows) != set(range(1, 152)):
        fail("P4 species manifest must expose exactly national dex 1..151")
    return rows


def validate_source(source: dict[str, Any]) -> None:
    if source.get("schemaVersion") != SOURCE_SCHEMA_VERSION:
        fail(f"schemaVersion must be {SOURCE_SCHEMA_VERSION}")
    require_stable_id(source.get("contentPackId"), "contentPackId")
    require_string(source.get("contentPackVersion"), "contentPackVersion")
    if source.get("canonScope") != CANON_SCOPE:
        fail(f"canonScope must stay {CANON_SCOPE}")
    if require_list(source.get("durableCanonClaims"), "durableCanonClaims"):
        fail("Batch 03 source must not freeze durable world canon")

    prompts = require_list(source.get("prompts"), "prompts")
    if len(prompts) != 3:
        fail("exactly three formative prompts are required")
    seen_prompts: set[str] = set()
    seen_answers: set[str] = set()
    for prompt_value in prompts:
        prompt = require_mapping(prompt_value, "prompt")
        prompt_id = require_stable_id(prompt.get("promptId"), "promptId")
        if prompt_id in seen_prompts:
            fail(f"duplicate promptId: {prompt_id}")
        seen_prompts.add(prompt_id)
        require_string(prompt.get("promptText"), f"{prompt_id}.promptText")
        answers = require_list(prompt.get("answers"), f"{prompt_id}.answers")
        if len(answers) < 2:
            fail(f"{prompt_id} must have at least two fiction-first answers")
        for answer_value in answers:
            answer = require_mapping(answer_value, f"{prompt_id}.answer")
            answer_id = require_stable_id(answer.get("answerId"), "answerId")
            if answer_id in seen_answers:
                fail(f"duplicate answerId: {answer_id}")
            seen_answers.add(answer_id)
            require_string(answer.get("text"), f"{answer_id}.text")
            tags = require_list(answer.get("hiddenTags"), f"{answer_id}.hiddenTags")
            if not tags:
                fail(f"{answer_id} requires hidden deterministic tags")
            for tag in tags:
                require_stable_id(tag, f"{answer_id}.hiddenTag")

    for collection_name, minimum in (("origins", 4), ("practices", 4)):
        rows = require_list(source.get(collection_name), collection_name)
        if len(rows) < minimum:
            fail(f"{collection_name} requires at least {minimum} approved records")
        seen: set[str] = set()
        for row_value in rows:
            row = require_mapping(row_value, collection_name)
            id_field = "originId" if collection_name == "origins" else "practiceId"
            row_id = require_stable_id(row.get(id_field), id_field)
            if row_id in seen:
                fail(f"duplicate {id_field}: {row_id}")
            seen.add(row_id)
            require_string(row.get("label"), f"{row_id}.label")
            require_safe_int(row.get("authoredOrder"), f"{row_id}.authoredOrder")
            if row.get("approval") != APPROVAL:
                fail(f"{row_id} must have approval={APPROVAL}")
            tags = require_list(row.get("matchTags"), f"{row_id}.matchTags")
            if not tags:
                fail(f"{row_id} requires matchTags")
            for tag in tags:
                require_stable_id(tag, f"{row_id}.matchTag")
            if collection_name == "practices":
                require_stable_id(row.get("competenceId"), f"{row_id}.competenceId")

    p4_rows = load_p4_species()
    selected_species = require_list(source.get("species"), "species")
    if not 3 <= len(selected_species) <= 8:
        fail("Batch 03 requires 3..8 selected P4 species records")
    seen_dex: set[int] = set()
    for species_value in selected_species:
        species = require_mapping(species_value, "species")
        dex = require_safe_int(species.get("nationalDex"), "species.nationalDex", 1)
        key = require_stable_id(species.get("speciesKey"), "species.speciesKey")
        if dex in seen_dex:
            fail(f"duplicate selected species dex: {dex}")
        seen_dex.add(dex)
        p4_key, p4_status = p4_rows.get(dex, ("", ""))
        if (p4_key, p4_status) != (key, "complete"):
            fail(f"selected species {dex}:{key} must trace to a complete P4 row")

    events = require_list(source.get("events"), "events")
    if not events:
        fail("at least one authored event is required")
    event_ids: set[str] = set()
    represented_pillars: set[str] = set()
    for event_value in events:
        event = require_mapping(event_value, "event")
        event_id = require_stable_id(event.get("eventId"), "eventId")
        if event_id in event_ids:
            fail(f"duplicate eventId: {event_id}")
        event_ids.add(event_id)
        if event.get("canonScope") != CANON_SCOPE:
            fail(f"{event_id} must remain local/disposable")
        require_safe_int(event.get("contentRevision"), f"{event_id}.contentRevision")
        weight = require_string(event.get("baseWeight"), f"{event_id}.baseWeight")
        if not weight.isdigit() or int(weight) <= 0:
            fail(f"{event_id}.baseWeight must be a positive decimal string")
        triggers = require_list(event.get("triggers"), f"{event_id}.triggers")
        if not triggers or any(trigger not in ALLOWED_TRIGGERS for trigger in triggers):
            fail(f"{event_id} has an invalid or empty trigger list")
        if event.get("weightModifiers") != []:
            fail(f"{event_id} Batch 03 authored pack keeps weightModifiers empty")
        repeat = require_mapping(event.get("repeatPolicy"), f"{event_id}.repeatPolicy")
        if repeat != {"oncePerRun": True}:
            fail(f"{event_id} must be once-per-run in the first coherent slice")
        if not require_list(event.get("choices"), f"{event_id}.choices"):
            fail(f"{event_id} requires choices")
        if not require_list(event.get("outcomes"), f"{event_id}.outcomes"):
            fail(f"{event_id} requires outcomes")
        if "script" in event or "executor" in event:
            fail(f"{event_id} cannot embed an event-specific executable")
        pillars = require_list(event.get("pillars"), f"{event_id}.pillars")
        represented_pillars.update(require_stable_id(item, f"{event_id}.pillar") for item in pillars)

    missing_pillars = REQUIRED_PILLARS - represented_pillars
    if missing_pillars:
        fail(f"coherent chain is missing required pillars: {sorted(missing_pillars)}")

    replays = require_mapping(source.get("replays"), "replays")
    for replay_name in ("zeroCompanion", "alternate"):
        replay = require_mapping(replays.get(replay_name), f"replays.{replay_name}")
        seed = require_string(replay.get("runSeedHex"), f"{replay_name}.runSeedHex")
        if re.fullmatch(r"[0-9a-f]{32}", seed) is None:
            fail(f"{replay_name}.runSeedHex must be 128-bit lowercase hex")
        character = require_mapping(replay.get("character"), f"{replay_name}.character")
        answer_ids = require_list(character.get("answerIds"), f"{replay_name}.answerIds")
        if len(answer_ids) != 3 or any(answer_id not in seen_answers for answer_id in answer_ids):
            fail(f"{replay_name} must select three authored formative answers")
        increases = require_list(character.get("attributeIncreases"), f"{replay_name}.attributeIncreases")
        if len(increases) != 4:
            fail(f"{replay_name} must encode exactly four starting attribute increases")
        require_stable_id(character.get("personalCompetenceId"), f"{replay_name}.personalCompetenceId")
        inputs = require_list(replay.get("inputs"), f"{replay_name}.inputs")
        if not inputs:
            fail(f"{replay_name} requires compact replay inputs")
        for input_value in inputs:
            item = require_mapping(input_value, f"{replay_name}.input")
            if item.get("triggerId") not in ALLOWED_TRIGGERS:
                fail(f"{replay_name} contains an invalid trigger")
            expected_event = require_stable_id(item.get("expectedEventId"), f"{replay_name}.expectedEventId")
            if expected_event not in event_ids:
                fail(f"{replay_name} references unknown event: {expected_event}")
            require_stable_id(item.get("choiceId"), f"{replay_name}.choiceId")


def build_pack(source: dict[str, Any]) -> dict[str, Any]:
    formative_answers: list[dict[str, Any]] = []
    presentation_prompts: list[dict[str, Any]] = []
    for prompt in source["prompts"]:
        presentation_prompts.append({
            "promptId": prompt["promptId"], "promptText": prompt["promptText"],
            "answers": [{"answerId": answer["answerId"], "text": answer["text"]} for answer in prompt["answers"]],
        })
        for answer in prompt["answers"]:
            formative_answers.append({"answerId": answer["answerId"], "promptId": prompt["promptId"], "tags": list(answer["hiddenTags"])})

    origins = [{"originId": row["originId"], "matchTags": list(row["matchTags"]), "authoredOrder": row["authoredOrder"]} for row in source["origins"]]
    practices = [{"practiceId": row["practiceId"], "competenceId": row["competenceId"], "matchTags": list(row["matchTags"]), "authoredOrder": row["authoredOrder"]} for row in source["practices"]]
    species = [{
        "nationalDex": row["nationalDex"], "speciesKey": row["speciesKey"],
        "dossierDescriptorId": f"p4.species.{row['nationalDex']:03d}.{row['speciesKey']}", "optionalResourceRef": None,
    } for row in source["species"]]

    events: list[dict[str, Any]] = []
    trigger_index: dict[str, list[str]] = {}
    represented_pillars: set[str] = set()
    for source_event in source["events"]:
        represented_pillars.update(source_event["pillars"])
        events.append({key: value for key, value in source_event.items() if key not in {"pillars", "canonScope"}})
        for trigger_id in source_event["triggers"]:
            trigger_index.setdefault(trigger_id, []).append(source_event["eventId"])
    events.sort(key=lambda event: event["eventId"])
    trigger_index = {trigger_id: sorted(event_ids) for trigger_id, event_ids in sorted(trigger_index.items())}

    runtime_core: dict[str, Any] = {
        "formatVersion": FORMAT_VERSION,
        "contentPackId": source["contentPackId"], "contentPackVersion": source["contentPackVersion"],
        "canonScope": source["canonScope"], "durableCanonClaims": list(source["durableCanonClaims"]),
        "formativeAnswers": formative_answers, "origins": origins, "practices": practices,
        "presentationPrompts": presentation_prompts, "species": species, "events": events,
        "triggerIndex": trigger_index, "representedPillars": sorted(represented_pillars),
    }
    digest = hashlib.sha256(canonical_json_bytes(runtime_core)).hexdigest()
    return {**runtime_core, "contentDigestSha256": digest, "replays": source["replays"]}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="fail if committed generated pack is stale")
    args = parser.parse_args()
    source = load_source()
    validate_source(source)
    rendered = pretty_json(build_pack(source))
    if args.check:
        if not OUTPUT_PATH.exists():
            fail(f"generated pack is missing: {OUTPUT_PATH.relative_to(ROOT)}")
        if OUTPUT_PATH.read_text(encoding="utf-8") != rendered:
            fail("generated P8 slice pack is stale; run python tools/build_p8_slice_pack.py")
        print("P8 authored slice source and generated pack: OK")
        return 0
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(rendered, encoding="utf-8")
    print(f"Wrote {OUTPUT_PATH.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
