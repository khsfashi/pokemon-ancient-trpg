#!/usr/bin/env python3
"""Validate the non-authoritative P8 phone presentation source against the generated slice pack."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
PRESENTATION_PATH = ROOT / "content" / "p8" / "vertical-slice.presentation.json"
PACK_PATH = ROOT / "src" / "generated" / "p8-slice-pack.json"
STABLE_ID = re.compile(r"^[a-z0-9][a-z0-9._-]{0,63}$")
EXPECTED_SCHEMA = "p8-slice-presentation-source-v1"


def fail(message: str) -> None:
    raise ValueError(message)


def mapping(value: Any, label: str) -> dict[str, Any]:
    if not isinstance(value, dict) or not all(isinstance(key, str) for key in value):
        fail(f"{label} must be a string-keyed object")
    return value


def sequence(value: Any, label: str) -> list[Any]:
    if not isinstance(value, list):
        fail(f"{label} must be a list")
    return value


def text(value: Any, label: str) -> str:
    if not isinstance(value, str) or not value.strip():
        fail(f"{label} must be non-empty text")
    return value


def stable(value: Any, label: str) -> str:
    result = text(value, label)
    if STABLE_ID.fullmatch(result) is None:
        fail(f"{label} must be a stable id")
    return result


def main() -> int:
    presentation = mapping(json.loads(PRESENTATION_PATH.read_text(encoding="utf-8")), "presentation")
    pack = mapping(json.loads(PACK_PATH.read_text(encoding="utf-8")), "pack")
    if presentation.get("schemaVersion") != EXPECTED_SCHEMA:
        fail(f"schemaVersion must be {EXPECTED_SCHEMA}")
    if presentation.get("contentPackId") != pack.get("contentPackId") or presentation.get("contentPackVersion") != pack.get("contentPackVersion"):
        fail("presentation content identity must match the active P8 slice pack")

    events = {mapping(item, "event")["eventId"]: mapping(item, "event") for item in sequence(pack.get("events"), "pack.events")}
    species_ids = {int(mapping(item, "species")["nationalDex"]) for item in sequence(pack.get("species"), "pack.species")}
    scenes = sequence(presentation.get("sceneSequence"), "sceneSequence")
    seen_events: set[str] = set()
    for index, raw_scene in enumerate(scenes):
        scene = mapping(raw_scene, f"sceneSequence[{index}]")
        event_id = stable(scene.get("eventId"), "scene.eventId")
        if event_id not in events:
            fail(f"presentation references unknown event: {event_id}")
        if event_id in seen_events:
            fail(f"presentation duplicates event: {event_id}")
        seen_events.add(event_id)
        trigger_id = stable(scene.get("triggerId"), f"{event_id}.triggerId")
        event = events[event_id]
        if trigger_id not in event.get("triggers", []):
            fail(f"{event_id} presentation trigger is not an authored event trigger")
        for field in ("eyebrow", "title", "body", "continueLabel"):
            text(scene.get(field), f"{event_id}.{field}")
        authored_choices = {mapping(item, "choice")["choiceId"] for item in sequence(event.get("choices"), f"{event_id}.choices")}
        presentation_choices = mapping(scene.get("choices"), f"{event_id}.choices")
        if set(presentation_choices) != authored_choices:
            fail(f"{event_id} presentation choices must exactly match authored choice ids")
        for label in presentation_choices.values():
            text(label, f"{event_id}.choice label")
        authored_outcomes = {mapping(item, "outcome")["outcomeId"] for item in sequence(event.get("outcomes"), f"{event_id}.outcomes")}
        presentation_outcomes = mapping(scene.get("outcomes"), f"{event_id}.outcomes")
        if set(presentation_outcomes) != authored_outcomes:
            fail(f"{event_id} presentation outcomes must exactly match authored outcome ids")
        for label in presentation_outcomes.values():
            text(label, f"{event_id}.outcome text")
        if "speciesId" in scene:
            species_id = scene["speciesId"]
            if not isinstance(species_id, int) or species_id not in species_ids:
                fail(f"{event_id}.speciesId must reference the curated P8 species subset")

    if seen_events != set(events):
        fail("sceneSequence must cover every P8 authored event exactly once")

    specializations = sequence(presentation.get("specializations"), "specializations")
    if len(specializations) < 2:
        fail("phone flow requires at least two compact specialization options")
    allowed_attributes = {"strength", "endurance", "agility", "sense", "intellect", "will", "presence"}
    for raw in specializations:
        item = mapping(raw, "specialization")
        stable(item.get("specializationId"), "specializationId")
        text(item.get("label"), "specialization.label")
        text(item.get("description"), "specialization.description")
        increases = sequence(item.get("attributeIncreases"), "specialization.attributeIncreases")
        if len(increases) != 4 or any(value not in allowed_attributes for value in increases):
            fail("every specialization must provide exactly four legal attribute increases")
        counts = {attribute: increases.count(attribute) for attribute in allowed_attributes}
        if any(count > 2 for count in counts.values()):
            fail("a specialization cannot raise a starting attribute above cap 3")
        stable(item.get("personalCompetenceId"), "specialization.personalCompetenceId")

    print("P8 phone presentation source: OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
