# Pokémon Ancient TRPG — Agent Operating Guide

This file is the entry point for any coding, planning, content-authoring or remediation agent working in this repository.

## Chat development continuity / Luna

When repository development is requested from a chat surface with a disposable or sandboxed code-execution environment, read `.agents/skills/luna-chat-coder/SKILL.md` before substantive repository work.

Luna is an execution, exact-state recovery, transport and fallback policy only. It does **not** replace this repository's engineering/gameplay/content/resource rules. Explicit owner decisions, this `AGENTS.md`, `PROJECT_STATUS.md`, active issue/PR contracts and repository tests remain authoritative over Luna whenever project behavior or product direction is involved.

Use Luna's sandbox-first path when available: resolve the current PR/branch to an immutable commit SHA, materialize exact source before editing, inventory available capabilities before acquiring new ones, and use a bounded Actions mission only for a demonstrated capability/transport/execution gap. Do not make access to the owner's host computer a dependency of ordinary repository work.

The vendored Luna source and version are recorded in `.agents/skills/luna-chat-coder/UPSTREAM.md`.

The repository owner intentionally wants routine progress to work from short instructions such as:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
pokemon-ancient-trpg next
pokemon-ancient-trpg continue
```

Equivalent requests mean: **recover live repository state and execute the next unblocked work without asking the owner to restate context.**

## Project identity

This is an unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG intended primarily for personal play and limited sharing with friends.

The game combines:

- fiction-first character creation and tabletop-style stats;
- deterministic/state-driven events and 2d6 checks;
- survival, travel, equipment, gathering, preparation and return loops;
- rare, meaningful physical relationships with Pokémon;
- a pre-regional-civilization proto-Kanto setting earlier than normalized Hisui-like human–Pokémon coexistence;
- replayable authored text content where prose quality is itself a major part of the fun.

Do not casually import generic fantasy assumptions. Conventional wizard/class/guild/kingdom conventions are not presumed merely because the visual/material baseline feels medieval. Durable institutions and occupations must arise from the approved Pokémon-shaped setting.

## Required reading order

Before substantive work:

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. the exact active issue / PR / authoring topic
4. `docs/ROADMAP.md`
5. `docs/DECISIONS.md` plus any newer numbered decision document referenced by `PROJECT_STATUS.md`
6. the relevant design/specification contract
7. `docs/REFERENCE_PROTOCOL.md` when external facts, APIs, libraries, Pokémon data/resources, licensing, provenance, comparable projects, fonts or tools matter
8. `docs/RESOURCE_STRATEGY.md` / P6 resource contracts whenever media/font/resource handling is involved
9. live GitHub PR / issue / CI state

For current P8.3 work also read:

- issue #128;
- issue #118 owner-gate history;
- `docs/DECISION_D037_NARRATIVE_FACTORY_AND_PIXEL_ART.md`;
- `docs/P8_3_NARRATIVE_AUTHORING_FACTORY.md`;
- `docs/P8_3_AUTHORING_CANON_DIGEST.md`;
- `docs/P8_3_PIXEL_ART_AND_TYPOGRAPHY_DIRECTION.md`.

If documentation and live repository state disagree, reconcile stale documentation as part of the current work.

## Source-of-truth hierarchy

When sources disagree, use this order:

1. explicit owner-approved decisions and current owner feedback;
2. compiling code and automated tests for implemented behavior;
3. live PR / merge / issue / CI / authoring-branch state;
4. exact active issue acceptance criteria;
5. approved design/specification/resource/authoring contracts;
6. `PROJECT_STATUS.md`;
7. `docs/ROADMAP.md`;
8. older discussion/model memory.

External references are evidence, not authority over owner-approved design.

## Explicit next / continue protocol

For a routine `next` / `continue` request:

1. Read `AGENTS.md` and `PROJECT_STATUS.md`.
2. Inspect live open PRs/issues for this repository.
3. If an active PR owns the current first-incomplete work, finish/repair only that scope before starting a later slice.
4. Reconcile recently merged work that made `PROJECT_STATUS.md` stale.
5. Select the first incomplete unblocked item from the current active issue/status.
6. Read the exact issue and relevant contracts.
7. Resolve researchable factual/technical uncertainty from current primary sources rather than delegating research to the owner.
8. Detect whether a Human Design Gate is actually required.
9. If no gate is required, implement one coherent slice with tests/validation/schema/provenance/docs appropriate to that slice.
10. Update `PROJECT_STATUS.md` whenever current/next state materially changes.
11. Publish/update one scoped `agent/<description>` PR unless an existing PR owns the work.
12. Do not advance to a later core phase while the active phase has an unresolved implementation/review/owner gate.
13. Stop only when the coherent slice is complete, a real external blocker exists, or a genuine owner design gate is reached.

### Current override: P8.3 blocks P9

The P8.2 automated product gate passed, but the deployed owner replay on 2026-08-18 **rejected** the product experience. Therefore:

- #118 remains open;
- #128 P8.3 is the active continuation lane;
- P9 content multiplication remains blocked;
- do not interpret old green P8 browser checks as owner acceptance.

## P8.3 narrative-authoring protocol

Narrative prose is a primary gameplay production system. Do not produce huge content sets in one model call.

### Authoring unit

A large topic is planned as bounded sessions with stable IDs such as `s001`, `s002`, ... . Default production guidance is deliberately conservative:

- ordinary scene: ~2,500–4,500 player-facing Korean characters;
- connected encounter/arc: ~4,000–6,500;
- worldbuilding: ~4,500–7,500;
- default hard ceiling: 8,000 player-facing Korean characters per session unless an explicit profile overrides it.

Session boundaries should align to coherent dramatic/scene jobs rather than arbitrary token cuts.

### Durable authoring state

Authoring provenance lives under:

```text
content/authoring/topics/<topic-id>/
```

A completed session normally owns:

```text
spec.json
context.json
draft.ko-KR.md
summary.json
continuity.json
qa.json
```

Repository artifacts, not hidden model conversation memory, are the continuity source of truth.

### Local Codex worker

The owner approves a local-computer workflow using a self-hosted GitHub runner and Codex CLI.

- GitHub issue queue is the initial remote trigger.
- A title beginning with `[authoring]` is the reserved queue marker.
- The local orchestrator uses a **fresh non-interactive Codex process per planning/session unit**.
- Each completed unit must be committed/pushed before the next unit starts.
- Provider quota/rate/credit exhaustion must not erase previous units.

### ChatGPT fallback

Codex and ChatGPT are separate execution paths but must share the same authoring contract.

When a topic/plan/session is marked `awaiting_chatgpt` or `awaiting_chatgpt_plan`:

1. Do not invent a replacement topic/session.
2. Inspect the topic branch/request and find the exact pending unit.
3. Read its spec/context plus only declared dependencies/relevant full text.
4. Preserve stable topic/session IDs, story facts, dependencies and size budget.
5. Write the same result/summary/continuity/QA artifact shape expected from Codex.
6. Mark that same unit complete so local Codex can later resume at the next session.

Switching worker must never reroll events, identities, outcomes or continuity just because the provider changed.

### Revision

If the owner says a specific topic/session is bad, preserve the stable session ID and revise only that session by default. Increment revision, regenerate its summary/continuity, then identify downstream dependencies that need `continuity_review`. Do not throw away unrelated accepted sessions unless the owner requests cascade regeneration.

### Korean prose standard

Player-facing Korean must:

- read like native Korean, not translated English syntax;
- prefer understandable short/medium sentences before ornate phrasing;
- use mobile-friendly paragraph rhythm;
- establish concrete geography, time and physical causality;
- make choices read as actions rather than survey answers;
- avoid generic fantasy filler and proof/test wording;
- preserve proto-Kanto/pre-modern canon;
- make Pokémon posture, movement, sound, distance, environmental reaction and threat/counterplay concrete when relevant.

A Beedrill encounter should make the stinger orientation, wing sound, distance, approach, surrounding vegetation and danger legible rather than merely saying “Beedrill appeared.”

## P8.3 visual / pixel-art direction

The owner has explicitly frozen a coherent **high-resolution pixel-art** direction.

The `모험가 이야기` reference is valued not merely because it uses pixels, but because detailed/high-quality dot graphics still communicate a strong medieval-fantasy atmosphere.

Without copying proprietary assets/layouts/icons/text/music/branding, this project should unify the following under one high-resolution pixel language:

- opening/key art;
- locality/travel/encounter illustrations;
- Pokémon presentation;
- human portraits;
- equipment/items/resources;
- HUD icons, frames and ornaments;
- relevant scene/status effects.

Existing Pokémon pixel resources should look native to surrounding art, not pasted over smooth painterly/vector/photographic backgrounds. Avoid glassmorphism/material-style modern cards and arbitrary post-process pixelation.

“Pixel” does not require crude tiny 8-bit output. Detailed materials, lighting, vegetation, weather and environmental storytelling are desired. The medieval/pre-modern feeling should come from actual material/silhouette/lighting/architecture/clothing/tool/ecology choices.

### Typography

Use publicly usable/free fonts with verified licensing and P6 provenance.

Initial evaluation candidates:

- NeoDunggeunmo / Neo둥근모 — strong pixel HUD/button/heading candidate;
- NeoDunggeunmo Pro / Neo둥근모 Pro — proportional pixel-derived long-form Korean candidate.

Pixel identity never overrides long-form phone readability. Test line height, punctuation, glyph clarity, stable line breaks, contrast and several minutes of continuous reading at the accepted phone viewport before adoption.

## Human Design Gate

Distinguish researchable uncertainty from owner-authored creative decisions.

### Do not ask the owner for researchable facts

Examples:

- API/data fields;
- current framework/browser/PWA behavior;
- current library/tool capabilities;
- license/provenance text;
- available font/resource formats;
- performance/memory characteristics that can be measured;
- whether a deterministic implementation can be tested.

Research these from current primary sources and make an engineering recommendation.

### Ask before freezing material creative canon

A Human Design Gate is required when multiple valid answers materially affect persistent world tone/canon, human–Pokémon relationship, lethality/morality, core stats, occupation fantasy, companionship philosophy, progression philosophy, region identity, or another expensive-to-reverse player-facing rule/art decision that the owner has not already resolved.

Do not re-ask decisions already frozen by D-037 or earlier decisions unless new evidence creates a genuine conflict.

When a gate is needed, prefer 2–4 concrete options with recommendation, reason and impact. Ask only the minimum decision required.

## Setting-invention boundary

Agents may invent non-canonical local flavor that does not establish a durable world rule, such as a disposable NPC name inside an already-approved setting.

Agents may not silently invent a new institution, supernatural system, historical law, species-wide behavior, job archetype or durable setting fact merely to finish content.

Ask: **would future content authors need this fact to stay consistent?** If yes, it likely belongs in a decision/contract.

## Reference / Pokémon-IP / resource rule

The repository being public does not make Pokémon or third-party assets freely reusable.

- distinguish code/data licenses from Pokémon names/designs/media IP;
- prefer primary sources and official repositories/documentation;
- treat public repositories as references unless exact license/provenance supports intended use;
- do not claim non-commercial fan use is automatically licensed;
- preserve provenance for imported/transformed/generated data/resources;
- keep project-owned rules/content/resources separated from externally sourced canonical data/assets;
- do not add a project license that purports to relicense Pokémon IP or third-party assets;
- generated imagery is a production aid, not automatic acceptable art: normalize/validate it into the pixel-art/resource contract and record provenance.

P6 remains authoritative for resource inclusion, preprocessing, stable IDs, attribution/provenance, loading/cache/eviction and mobile budgets.

## Architecture and performance principles

Even though this is primarily a text game:

- deterministic authoritative game state is preferred;
- seeded randomness should be reproducible where practical;
- event eligibility should be evaluated on discrete transitions, not per-frame polling;
- parsed/generated lookup structures should be cached and reused;
- avoid repeated parsing/conversion/allocation in hot/repeated paths;
- preprocess resource transformations at build time where practical;
- stable resource IDs own cache identity;
- do not preload all 151 Pokémon media;
- UI/animation must not become gameplay authority;
- save formats require explicit versioning/migration;
- narrative authoring provenance remains separate from runtime authoritative state.

## Roadmap order

Core phase order remains:

`P0 → P1 → P2 → P3 → P4 → P5 → P6 → P7 → P8 → P9 → P10`

P8.3 is an owner-required remediation lane inside the P8 acceptance boundary. It must close before P9 breadth expansion.

## Completion standard

A phase/slice is not complete because prose/code/art was generated. Completion requires its acceptance criteria plus the strongest practical evidence available: source-backed research, explicit owner decisions, provenance records, schema validation, deterministic tests, reproducible fixtures, build/CI checks, phone/browser evidence, authoring-session QA and owner playtest/review where subjective product quality is the actual gate.
