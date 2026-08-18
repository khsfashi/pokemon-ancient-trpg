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

Recommended JSON body:

```json
{
  "topic_id": "windbreak-beedrill-opening",
  "title": "방풍림 독침붕 첫 조우",
  "brief": "방풍림을 통과하다 독침붕 영역에 들어서는 초반 위기 장면",
  "target_total_chars": 24000,
  "profile": "encounter_arc",
  "worker": "auto",
  "context_files": []
}
```

The self-hosted authoring workflow uses branch `authoring/<topic-id>` and persists every completed unit before starting the next.

## ChatGPT handoff

If a topic/session status is `awaiting_chatgpt_plan` or `awaiting_chatgpt`, ChatGPT must continue the **same branch and same stable unit identity**.

Do not create a replacement topic/session merely because the Codex worker stopped.

## Review granularity

Owner feedback should preferably identify:

```text
<topic-id> <session-id> <feedback>
```

Example:

```text
windbreak-beedrill-opening s007 독침붕 위협 묘사가 약함. 이 세션만 다시.
```

A revision preserves session ID, increments revision and audits downstream dependency impact.
