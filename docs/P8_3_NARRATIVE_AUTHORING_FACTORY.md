# P8.3 Narrative Authoring Factory

Status: **ACTIVE DESIGN / implementation target #128**

## 1. Purpose

Narrative prose is a primary gameplay surface of Pokémon Ancient TRPG. The production system must preserve prose quality by refusing giant one-shot authoring jobs. A large topic is planned as many bounded authoring sessions. Each session is independently addressable, persisted, reviewable, replaceable, and continuity-auditable.

The factory is provider-agnostic. The same repository contract is used by:

- a local Codex CLI worker on the owner's self-hosted runner; and
- ChatGPT acting through GitHub when a session is handed off or the owner explicitly chooses chat authoring.

Provider identity never changes story/session identity.

## 2. Remote-control model

GitHub is the durable queue and handoff boundary.

1. The owner remotely creates an issue whose title begins with `[authoring]`.
2. The issue contains a JSON request block describing the topic and brief.
3. `narrative-authoring-queue.yml` runs on an owner-controlled self-hosted runner.
4. The runner checks out or creates `authoring/<topic-id>`.
5. The local orchestrator plans the topic if necessary, then starts one **fresh** `codex exec --ephemeral` process per bounded session.
6. Every completed planning/session unit is validated, committed, and pushed before the next unit begins.
7. When all sessions finish, the branch is ready for assembly/review/PR.
8. If Codex hits a recognized usage/rate/credit limit, the current stable session becomes `awaiting_chatgpt`. Previously completed work remains committed.
9. A later ChatGPT `@GitHub` continuation reads that same authoring branch and finishes that same session contract instead of replanning it.

The factory does **not** assume that a local process can spawn a normal ChatGPT web/mobile conversation. GitHub state is the explicit cross-product handoff.

## 3. Request format

Example issue:

```text
Title: [authoring] windbreak-beedrill-opening
```

Body:

```json
{
  "topic_id": "windbreak-beedrill-opening",
  "title": "방풍림 독침붕 첫 조우",
  "brief": "방풍림을 통과하다 독침붕의 영역에 들어선 초반 위기 장면을 작성한다.",
  "target_total_chars": 24000,
  "profile": "encounter_arc",
  "worker": "auto"
}
```

`worker` may be `auto`, `codex`, or `chatgpt`. `auto` prefers the local Codex worker and hands off rather than discarding state when Codex is unavailable.

## 4. Topic/session hierarchy

```text
topic
  topic.json
  plan.json
  continuity-ledger.json
  sessions/
    s001/
    s002/
    ...
```

Each session owns one coherent dramatic job. Session boundaries should occur at scene/beat boundaries, not arbitrary token cuts.

## 5. Default size profiles

The system optimizes for quality, not maximum output per request.

| profile | target Korean characters/session | typical paragraph count | intent |
|---|---:|---:|---|
| `scene` | 2,500–4,500 | 8–18 | one scene or encounter beat |
| `encounter_arc` | 4,000–6,500 | 12–24 | connected encounter slice |
| `worldbuilding` | 4,500–7,500 | 12–28 | locality/faction/lore prose |
| `microcopy` | 800–2,500 | variable | choices, UI narrative, creation prompts |

Default hard ceiling: **8,000 player-facing Korean characters per authoring session** unless the topic contract explicitly overrides it.

A 200,000-character topic is therefore expected to become dozens of fresh sessions. The planner must not compress it into a handful of oversized calls merely to finish faster.

## 6. Context bundle

Each session receives a generated context bundle with bounded relevance layers:

1. binding project/canon decisions relevant to the topic;
2. Korean narrative style guide;
3. pixel-art presentation direction where prose implies visual beats;
4. topic brief and dramatic function;
5. current structured continuity ledger;
6. summaries of dependency sessions;
7. full dependency prose only when explicitly marked high relevance and within context budget;
8. owner feedback / prohibited contradictions;
9. exact target character, paragraph, scene-beat and output-schema requirements.

Do not append all previous prose to every session. Context selection must be dependency-driven.

## 7. Session artifacts

A session directory contains:

```text
spec.json
context.json
draft.ko-KR.md
summary.json
continuity.json
qa.json
```

Minimum metadata:

- stable topic ID and session ID;
- revision number;
- worker/provider used;
- status;
- dependency session IDs;
- context manifest/hash where practical;
- Korean prose;
- carry-forward summary;
- continuity facts introduced/changed/resolved;
- unresolved hooks;
- event/choice/resource IDs where applicable;
- deterministic QA result;
- owner review state;
- timestamps and commit provenance.

Runtime/localized game packs are generated from accepted authoring artifacts; authoring provenance is not itself runtime authority.

## 8. State machine

```text
planned -> ready -> running_codex -> completed
                         |-> awaiting_chatgpt
                         |-> blocked

awaiting_chatgpt -> running_chatgpt -> completed
completed -> revision_requested -> ready
completed -> continuity_review
```

Partial model output never becomes `completed`.

## 9. Codex execution contract

The local worker uses a fresh non-interactive process for each unit. The intended CLI form is based on current Codex CLI support for `codex exec`, `--ephemeral`, `--output-schema`, JSON event output, and last-message file output.

Representative call:

```text
codex exec --ephemeral --output-schema <schema> --output-last-message <tmp-json> -
```

The prompt/context is sent through stdin. No prior Codex conversation is required for continuity; repository artifacts are the continuity source of truth.

Recognized usage/rate/credit exhaustion is not a story failure. It transitions only the current unit to `awaiting_chatgpt` and exits cleanly after committing the handoff state.

Authentication/configuration failures become `blocked` with diagnostics. Unknown worker failures remain `blocked`; they must not be misclassified as quota exhaustion.

## 10. ChatGPT fallback contract

When ChatGPT receives a GitHub continuation request for this repository it must, before planning new authoring work:

1. inspect issue #128 and active authoring branches/requests;
2. prefer the oldest `awaiting_chatgpt` session over creating a replacement;
3. read that session's `spec.json` and `context.json` plus only the declared dependencies;
4. generate within the same character/paragraph/beat budget;
5. write the same `draft.ko-KR.md`, `summary.json`, `continuity.json`, `qa.json` contract;
6. preserve stable topic/session IDs and increment revision only when this is explicitly a revision;
7. mark the same session complete so the local worker can continue with the next session later.

Switching worker must never reroll identities, events, choices, outcomes, continuity facts, or branch structure.

## 11. Isolated revision and dependency impact

Owner feedback can target one session, for example:

```text
windbreak-beedrill-opening s007 다시. 독침붕 위협 묘사가 약함.
```

The system then:

- preserves `s007` identity;
- increments its revision;
- regenerates only `s007` by default;
- recalculates its summary/continuity artifacts;
- compares changed continuity facts against downstream dependency declarations;
- marks affected later sessions `continuity_review`;
- does not blindly regenerate unaffected later sessions;
- supports an explicit cascade regeneration request when desired.

## 12. Korean narrative quality contract

Player-facing prose must:

- read as native Korean, not translated English syntax;
- prefer clear short-to-medium sentence structure before ornate phrasing;
- use mobile-friendly paragraph rhythm;
- avoid abstract filler and repeated exposition;
- establish concrete geography, time progression and physical causality;
- make choices read like actions a person would take, not questionnaire labels;
- reveal mechanics through situation where possible instead of proof/test language;
- preserve approved proto-Kanto/pre-modern setting constraints;
- avoid casual modern trainer/Poké Ball assumptions;
- keep gameplay tension, state and decision pressure connected to the prose.

Pokémon presence requires specific physical/ecological description when relevant: posture, movement, sound, distance, body orientation, attack vector, nearby vegetation/animal response, human fear/knowledge and viable counterplay.

Benchmark example: a Beedrill in a windbreak forest should not merely be named. The player should understand where it is hovering, how its wings change the soundscape, where the forelimb stingers are aimed, what the surrounding brush is doing, whether it is guarding territory or preparing to close distance, and why the current route is dangerous.

## 13. Deterministic QA

At minimum validate:

- JSON/schema completeness;
- stable IDs and dependency integrity;
- character-count/paragraph-count bounds;
- empty/placeholder/proof-language failures;
- duplicate paragraph/repeated phrase heuristics;
- Korean whitespace/punctuation basics;
- continuity artifact shape;
- status transition legality;
- output present before `completed`.

A separate model critic may be used for high-value prose but cannot replace deterministic validation or owner judgment.

## 14. Art-direction coupling

Narrative authoring should call out visual beats suitable for illustration, but generated prose must not assume a painterly or modern-card presentation.

The binding visual target is **high-resolution pixel art that still communicates a strong medieval/pre-modern fantasy atmosphere**. See `docs/P8_3_PIXEL_ART_AND_TYPOGRAPHY_DIRECTION.md`.

## 15. P9 relationship

This factory is intentionally established before P9 content multiplication. P9 may generate large quantities of authored content only through a bounded/reviewable process equivalent to this contract. The factory does not by itself unblock P9; P8.3 owner replay remains required.
