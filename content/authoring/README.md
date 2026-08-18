# Narrative Authoring Workspace

This directory stores **authoring provenance and session state**, not authoritative runtime gameplay state.

See:

- `docs/P8_3_NARRATIVE_AUTHORING_FACTORY.md`
- `docs/P8_3_AUTHORING_CANON_DIGEST.md`
- `docs/P8_3_PIXEL_ART_AND_TYPOGRAPHY_DIRECTION.md`
- `docs/DECISION_D037_NARRATIVE_FACTORY_AND_PIXEL_ART.md`
- issue #128

## Remote request

Create an owner-authored GitHub issue whose title begins with:

```text
[authoring] <topic-id>
```

Recommended body:

```json
{
  "topic_id": "windbreak-beedrill-opening",
  "title": "방풍림 독침붕 첫 조우",
  "brief": "방풍림을 통과하다 독침붕 영역에 들어서는 초반 위기 장면",
  "target_total_chars": 16000,
  "profile": "encounter_arc",
  "worker": "auto",
  "mode": "author",
  "context_files": [
    "content/p8/vertical-slice.source.json",
    "content/p8/vertical-slice.ko-KR.json",
    "docs/P8_VERTICAL_SLICE_CONTRACT.md"
  ],
  "context_sections": [
    {
      "path": "docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md",
      "start_marker": "## 4. #015 Beedrill / 독침붕",
      "end_marker": "## 5. #131 Lapras / 라프라스"
    }
  ]
}
```

Use `context_files` only when the entire document is relevant and reasonably sized. Use `context_sections` for one species/chapter/contract subsection out of a large file. The orchestrator rejects oversized indiscriminate context rather than silently paying the quality/context cost.

The self-hosted workflow uses branch `authoring/<topic-id>` and persists every completed unit before starting the next.

## ChatGPT handoff

If a topic status is `awaiting_chatgpt_plan` or a session is `awaiting_chatgpt`, ChatGPT must continue the **same branch and stable unit identity**.

Useful local-equivalent inspection command:

```text
python tools/narrative_authoring.py pending --topic windbreak-beedrill-opening
```

External worker output is normalized through:

```text
python tools/narrative_authoring.py apply-plan-output --topic <topic> --input <json> --worker chatgpt
python tools/narrative_authoring.py apply-session-output --topic <topic> --session sNNN --input <json> --worker chatgpt
```

When ChatGPT is operating through the GitHub connector instead of a local checkout, it must make equivalent branch-file updates and preserve the same schema, QA and state transitions.

Do not create a replacement topic/session merely because the Codex worker stopped.

## Review granularity

Owner feedback should target a stable topic/session whenever possible.

Example request body for only `s007`:

```json
{
  "topic_id": "windbreak-beedrill-opening",
  "mode": "revise",
  "session_id": "s007",
  "feedback": "독침붕 위협 묘사가 약하다. 거리, 침 방향, 날갯소리와 수풀 반응을 더 선명하게.",
  "cascade": false
}
```

The revision:

- preserves `s007` identity;
- archives old artifacts under `s007/revisions/rNNN/`;
- increments revision;
- regenerates only `s007` by default;
- rebuilds continuity from current completed revisions;
- marks affected completed dependents `continuity_review`.

Set `cascade: true` only when the upstream rewrite should automatically re-author dependent sessions as well.
