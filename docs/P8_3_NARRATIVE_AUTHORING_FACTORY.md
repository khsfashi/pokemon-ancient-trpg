# P8.3 Narrative Authoring Factory

Status: **ACTIVE / implementation target #128**

## 1. Purpose

Narrative prose is a primary gameplay surface of Pokémon Ancient TRPG. The production system preserves prose quality by refusing giant one-shot authoring jobs. A large topic is planned as many bounded authoring sessions. Each session is independently addressable, persisted, reviewable, replaceable and continuity-auditable.

The factory is provider-agnostic. The same repository contract is used by:

- a local Codex CLI worker on the owner's self-hosted runner; and
- ChatGPT acting through GitHub when a plan/session is handed off or the owner explicitly chooses chat authoring.

Provider identity never changes story/session identity.

## 2. Remote-control model

GitHub is the durable queue and handoff boundary.

1. The owner remotely creates or edits an issue whose title begins with `[authoring]`.
2. The issue contains a JSON request describing topic, mode and context selectors.
3. `narrative-authoring-queue.yml` runs on the owner's self-hosted runner.
4. The runner checks out or creates `authoring/<topic-id>`.
5. The local orchestrator plans when needed and starts one **fresh** `codex exec --ephemeral` process per bounded unit.
6. Every completed planning/session unit is validated, committed and pushed before the next unit begins.
7. If Codex hits a recognized usage/rate/credit limit, the current unit becomes `awaiting_chatgpt`; previous units remain committed.
8. ChatGPT can complete the **same** saved plan/session contract through GitHub rather than starting a parallel story.
9. A completed topic gets a draft PR for owner review/assembly.

The factory does not assume that a local process can spawn a normal ChatGPT web/mobile conversation. GitHub state is the explicit cross-product handoff.

## 3. Request modes

### 3.1 New/continue topic

```text
Title: [authoring] windbreak-beedrill-opening
```

```json
{
  "topic_id": "windbreak-beedrill-opening",
  "title": "방풍림 독침붕 첫 조우",
  "brief": "방풍림을 통과하다 독침붕의 영역에 들어선 초반 위기 장면을 작성한다.",
  "target_total_chars": 16000,
  "profile": "encounter_arc",
  "worker": "auto",
  "mode": "author"
}
```

`worker` may be `auto`, `codex`, or `chatgpt`. `auto` prefers the local Codex worker and hands off rather than discarding state when Codex quota is unavailable.

### 3.2 Revise one stable session

Edit/reopen the same queue issue with a **new issue revision**:

```json
{
  "topic_id": "windbreak-beedrill-opening",
  "mode": "revise",
  "session_id": "s002",
  "feedback": "독침붕의 거리와 침의 방향, 나무와 풀의 반응이 더 선명해야 한다.",
  "cascade": false
}
```

`cascade: false` regenerates the target only and marks completed transitive dependents `continuity_review`. `cascade: true` archives and queues affected dependent sessions for re-authoring too.

The orchestrator hashes issue number + issue update + title/body so the same request revision is applied only once even though a workflow may advance many units.

### 3.3 Retry a technical blocker

```json
{
  "topic_id": "windbreak-beedrill-opening",
  "mode": "resume",
  "session_id": "s003"
}
```

Use after fixing a local Codex/auth/configuration problem. It does not silently reroll a completed unit.

## 4. Topic/session hierarchy

```text
topic
  topic.json
  plan-context.json
  plan.json
  continuity-ledger.json
  sessions/
    s001/
      spec.json
      context.json
      draft.ko-KR.md
      summary.json
      continuity.json
      qa.json
      revisions/
        r001/...
    s002/...
```

Each session owns one coherent dramatic job. Session boundaries occur at scene/beat boundaries, not arbitrary token cuts.

## 5. Default size profiles

The system optimizes for quality rather than maximum output per call.

| profile | target Korean characters/session | typical paragraph count | intent |
|---|---:|---:|---|
| `scene` | 2,500–4,500 | 8–18 | one scene or encounter beat |
| `encounter_arc` | 4,000–6,500 | 12–24 | connected encounter slice |
| `worldbuilding` | 4,500–7,500 | 12–28 | locality/faction/lore prose |
| `microcopy` | 800–2,500 | variable | choices, UI narrative, creation prompts |

Default hard ceiling: **8,000 player-facing Korean characters per authoring session** unless a future measured profile explicitly revises the contract.

A ~200,000-character topic is expected to become dozens of fresh sessions. The planner must not compress it into a handful of oversized calls merely to finish faster.

## 6. Context bundle and relevance budgets

Every unit receives bounded, relevance-selected context. **Do not concatenate every prior document or story segment.**

Layers:

1. compact binding authoring canon digest;
2. Korean narrative/style guide and pixel-art presentation direction;
3. topic brief/dramatic function;
4. explicit selected source/contract excerpts;
5. current structured continuity ledger;
6. summaries of dependency sessions;
7. full dependency prose only when the plan explicitly marks `full:<session-id>` high relevance;
8. owner revision feedback;
9. exact character/paragraph/beat/output-schema budget.

### 6.1 Full context file

Use `context_files` only for small/medium documents that are genuinely relevant as a whole.

Initial hard safety limit: **40,000 characters per full context file**.

### 6.2 Selected document section

Large design/dossier documents should use `context_sections`:

```json
{
  "context_sections": [
    {
      "path": "docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md",
      "start_marker": "## 4. #015 Beedrill / 독침붕",
      "end_marker": "## 5. #131 Lapras / 라프라스"
    }
  ]
}
```

Initial selected-section ceiling: **30,000 characters**.

This is the default way to feed a single Pokémon dossier out of a large multi-species file.

### 6.3 Aggregate budget

Initial base authoring-context ceiling: **100,000 characters**.

Full prior-session prose included in one session is capped at **16,000 characters total**. If more history seems necessary, improve summaries/continuity structure instead of automatically increasing context.

These thresholds are engineering quality controls and may be tuned from measured prose quality/context cost; they are not story rules.

## 7. Session artifacts

Minimum artifacts:

```text
spec.json
context.json
draft.ko-KR.md
summary.json
continuity.json
qa.json
```

They carry:

- stable topic/session IDs;
- revision number;
- worker/provider;
- status;
- dependency session IDs;
- exact context manifest/hash where practical;
- player-facing Korean prose;
- carry-forward summary;
- continuity facts introduced/changed/resolved;
- unresolved hooks;
- deterministic QA;
- owner review state;
- timestamps/commit provenance.

Runtime/localized game packs remain separate from authoring provenance.

## 8. State machine

```text
planning -> awaiting_chatgpt_plan -> authoring

ready -> running_codex -> completed
                    |-> awaiting_chatgpt
                    |-> blocked

awaiting_chatgpt -> running_chatgpt -> completed
completed -> revision_requested -> completed
completed dependent -> continuity_review
continuity_review -> owner review / explicit cascade revision
```

Partial model output never becomes `completed`.

## 9. Codex execution contract

Every local model unit is a fresh non-interactive process. The queue wraps Codex in a read-only sandbox and ignores user/project exec rules/config for the worker execution surface; only the repository orchestrator writes accepted files.

Representative underlying form:

```text
codex exec --sandbox read-only --ignore-user-config --ignore-rules \
  --ephemeral --output-schema <schema> --output-last-message <tmp-json> -
```

The prompt/context comes through stdin. Model conversation persistence is not required for story continuity.

Recognized usage/rate/credit exhaustion is a provider handoff, not a story failure. Missing CLI/auth/configuration/unknown execution failures become explicit blockers with diagnostics and do not erase previously pushed units.

## 10. ChatGPT fallback contract

Before inventing a new authoring unit, ChatGPT must inspect the topic branch/request for an existing `awaiting_chatgpt_plan` or `awaiting_chatgpt` unit.

### 10.1 Inspect pending handoff

Repository helper:

```text
python tools/narrative_authoring.py pending --topic <topic-id>
```

The output identifies pending kind/session and its saved context.

### 10.2 Plan handoff

ChatGPT produces JSON matching `authoring-plan.schema.json`, preserving topic ID, then applies the same normalization contract:

```text
python tools/narrative_authoring.py apply-plan-output \
  --topic <topic-id> --input <plan.json> --worker chatgpt
```

When operating through the GitHub connector rather than a local checkout, ChatGPT must make the equivalent branch-file updates and preserve the exact normalized schema/state.

### 10.3 Session handoff

ChatGPT reads that session's `spec.json`, `context.json`, declared summaries/full-text dependencies, generates only that bounded unit, and supplies JSON matching `authoring-session-output.schema.json`:

```text
python tools/narrative_authoring.py apply-session-output \
  --topic <topic-id> --session sNNN --input <output.json> --worker chatgpt
```

That shared persistence path runs the same deterministic QA and emits the same prose/summary/continuity/QA artifacts as Codex.

Changing worker must never reroll identities, events, choices, outcomes, continuity facts or branch structure merely because quota ownership changed.

## 11. Isolated revision and dependency impact

When one session is rejected:

- preserve its stable ID;
- archive previous current artifacts under `revisions/rNNN/`;
- increment revision;
- inject explicit owner feedback;
- re-author only that session by default;
- rebuild the topic continuity ledger from currently completed revision artifacts rather than leaving stale facts;
- find transitive dependent sessions from declared dependencies;
- mark completed affected dependents `continuity_review` without destroying their prose;
- regenerate them only on explicit cascade or after targeted review determines it is necessary.

This makes “session 07 was bad” a surgical operation rather than a reason to discard a 30-session topic.

## 12. Korean narrative quality contract

Player-facing prose must:

- read as native Korean, not translated English syntax;
- prefer clear short-to-medium sentence structure before ornate phrasing;
- use mobile-friendly paragraph rhythm;
- avoid abstract filler and repeated exposition;
- establish concrete geography, time progression and physical causality;
- make choices read like actions rather than questionnaire labels;
- reveal mechanics through situation where possible instead of proof/test language;
- preserve approved proto-Kanto/pre-modern constraints;
- avoid casual modern trainer/Poké Ball assumptions;
- keep gameplay tension/state/decision pressure connected to prose.

Pokémon presence requires physical/ecological specificity when relevant: posture, movement, sound, distance, body orientation, threat vector, nearby vegetation/animal response, human fear/knowledge and viable counterplay.

Benchmark example: a Beedrill in a windbreak forest should not merely be named. The player should understand where it is hovering, how its wings change the soundscape, where its forelimb/abdomen stingers are oriented, what vegetation is doing, whether it is warning or closing distance, and why each route choice carries risk.

## 13. Deterministic QA

At minimum validate:

- stable plan/session IDs and backward dependencies;
- context selector existence/budgets;
- character hard ceiling and minimum target envelope;
- empty/placeholder/proof-language failures;
- duplicate paragraph heuristics;
- required summary/continuity shape;
- completed-state artifact presence;
- `awaiting_chatgpt` context presence;
- legal revision/handoff state.

A later critic model may provide a separate qualitative pass for high-value scenes, but it never substitutes for deterministic validation or owner review.

## 14. Art-direction coupling

Narrative authoring should identify illustration-worthy physical beats without assuming modern cards or painterly concept art.

The binding target is **detailed/high-resolution pixel art that still communicates a strong medieval/pre-modern fantasy atmosphere**, so textual staging should translate into readable pixel composition: geography, threat direction, equipment, terrain, weather and light.

See `docs/P8_3_PIXEL_ART_AND_TYPOGRAPHY_DIRECTION.md`.

## 15. P9 relationship

The factory is intentionally established and exercised before P9 multiplication. P9 may only scale authored content through a bounded/reviewable process equivalent to this contract.

The factory itself does not unblock P9. P8.3 owner replay remains required after the UI/HUD/art/progression/opening remediation uses the accepted authoring pipeline.
