#!/usr/bin/env python3
"""Validate the committed P8 generated pack and owner-playtest choice density."""

from __future__ import annotations

import json
from typing import Any

import build_p8_slice_pack as builder

SINGLE_ACTION_TRANSITIONS = {"slice.ending.return_crossroads"}


def resolution_signature(resolution: Any, event_id: str, choice_id: str) -> str:
    if not isinstance(resolution, dict):
        builder.fail(f"{event_id}.{choice_id} resolution must be an object")
    kind = resolution.get("kind")
    if kind == "direct":
        outcome_id = resolution.get("outcomeId")
        if not isinstance(outcome_id, str) or not outcome_id:
            builder.fail(f"{event_id}.{choice_id} direct resolution requires outcomeId")
        return f"direct:{outcome_id}"
    if kind == "check":
        check = resolution.get("check")
        outcome_map = resolution.get("outcomeMap")
        if not isinstance(check, dict) or not isinstance(outcome_map, dict):
            builder.fail(f"{event_id}.{choice_id} check resolution requires check and outcomeMap")
        return "check:" + json.dumps(
            {"check": check, "outcomeMap": outcome_map},
            sort_keys=True,
            separators=(",", ":"),
        )
    builder.fail(f"{event_id}.{choice_id} has unsupported resolution kind: {kind!r}")


def validate_choice_density(source: dict[str, Any]) -> None:
    events = source.get("events")
    if not isinstance(events, list) or not events:
        builder.fail("P8 authored slice must contain events")

    seen_events: set[str] = set()
    for event in events:
        if not isinstance(event, dict):
            builder.fail("event must be an object")
        event_id = event.get("eventId")
        if not isinstance(event_id, str) or not event_id:
            builder.fail("eventId must be a non-empty string")
        seen_events.add(event_id)

        choices = event.get("choices")
        if not isinstance(choices, list) or not choices:
            builder.fail(f"{event_id} requires choices")

        if event_id in SINGLE_ACTION_TRANSITIONS:
            if len(choices) != 1:
                builder.fail(f"{event_id} is an intentional transition and must stay one action")
            continue
        if len(choices) < 2:
            builder.fail(f"{event_id} must expose at least two authoritative choices")

        choice_ids: set[str] = set()
        signatures: set[str] = set()
        for choice in choices:
            if not isinstance(choice, dict):
                builder.fail(f"{event_id} choice must be an object")
            choice_id = choice.get("choiceId")
            if not isinstance(choice_id, str) or not choice_id:
                builder.fail(f"{event_id} choiceId must be a non-empty string")
            if choice_id in choice_ids:
                builder.fail(f"{event_id} has duplicate choiceId: {choice_id}")
            choice_ids.add(choice_id)
            signature = resolution_signature(choice.get("resolution"), event_id, choice_id)
            if signature in signatures:
                builder.fail(f"{event_id} choices must not share the same authoritative resolution")
            signatures.add(signature)

    missing_transitions = SINGLE_ACTION_TRANSITIONS - seen_events
    if missing_transitions:
        builder.fail(f"intentional transition event missing: {sorted(missing_transitions)}")


def main() -> int:
    source = builder.load_source()
    builder.validate_source(source)
    validate_choice_density(source)
    expected = builder.build_pack(source)
    with builder.OUTPUT_PATH.open("r", encoding="utf-8") as handle:
        actual = json.load(handle)
    if actual != expected:
        builder.fail("generated P8 slice pack is stale; run python tools/build_p8_slice_pack.py")
    print("P8 authored slice source/generated semantic and choice-density check: OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
