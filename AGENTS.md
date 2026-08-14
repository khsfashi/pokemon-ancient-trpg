# Pokémon Ancient TRPG — Agent Operating Guide

This file is the entry point for any coding or planning agent working in this repository.

The repository owner intentionally wants routine progress to work from a short instruction such as:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
pokemon-ancient-trpg next
pokemon-ancient-trpg continue
```

Equivalent requests mean: **recover live repository state and execute the next unblocked roadmap work without asking the owner to restate context.**

## Project identity

This is an unofficial, non-commercial Pokémon fan-made text RPG/TRPG project intended primarily for personal play and limited sharing with friends.

The current product direction is a mobile-friendly text adventure built around:

- character creation and tabletop-style stats,
- dice/check resolution,
- state- and condition-driven events,
- random discoveries/insights,
- travel and survival,
- rare and meaningful relationships with Pokémon,
- a pre-modern / ancient setting where humans and Pokémon do **not** already live together as ordinary modern partners.

This project must not casually import generic fantasy assumptions. In particular, conventional fantasy-magic jobs such as wizard classes are not presumed to exist. Occupations should arise naturally from this Pokémon setting unless the owner explicitly decides otherwise.

## Required reading order

Before substantive work:

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. the exact active roadmap issue
4. `docs/ROADMAP.md`
5. `docs/DECISIONS.md`
6. the relevant design/specification contract
7. `docs/REFERENCE_PROTOCOL.md` when external facts, APIs, libraries, Pokémon data, licensing, provenance, or comparable projects matter
8. live GitHub PR / issue / CI state

If documentation and live repository state disagree, reconcile the stale documentation as part of the current work.

## Source-of-truth hierarchy

When sources disagree, use this order:

1. explicit owner decisions recorded in `docs/DECISIONS.md`,
2. compiling code and automated tests for implemented behavior,
3. live PR / merge / issue / CI state,
4. exact active issue acceptance criteria,
5. current approved design/specification contracts,
6. `PROJECT_STATUS.md`,
7. `docs/ROADMAP.md`,
8. older discussion or model memory.

External references are evidence, not authority over owner-approved game design.

## Explicit next / continue protocol

For a routine `next` / `continue` request:

1. Read `AGENTS.md` and `PROJECT_STATUS.md`.
2. Inspect live open PRs and issues for this repository.
3. If an active PR owns the current first-incomplete roadmap work, finish or repair only that scope before starting a later phase.
4. Reconcile any recently merged work that made `PROJECT_STATUS.md` stale.
5. Select the first incomplete and unblocked roadmap item from `PROJECT_STATUS.md` / `docs/ROADMAP.md`.
6. Read the exact issue and relevant contracts.
7. Resolve factual or technical uncertainty through current primary sources under `docs/REFERENCE_PROTOCOL.md` rather than asking the owner to research it.
8. Detect whether a Human Design Gate is required before freezing the design.
9. If no Human Design Gate is required, implement or specify one coherent vertical slice of the active issue.
10. Add/update tests, validation, schemas, fixtures, reference records, and documentation appropriate to the work.
11. Update `PROJECT_STATUS.md` whenever current/next state materially changes.
12. Publish/update one scoped `agent/<description>` PR unless an existing PR owns the work.
13. Do not begin a later core phase while the current phase still has an unresolved implementation/review/validation blocker.
14. Stop only when the current coherent work is complete, a real external blocker exists, or a Human Design Gate is reached.

## Human Design Gate

The agent must distinguish **researchable uncertainty** from **owner-authored creative/product decisions**.

### Do not ask the owner for researchable facts

Examples:

- what fields PokéAPI exposes,
- how Pokémon Showdown structures move/learnset data,
- current framework/library capabilities,
- browser/PWA storage behavior,
- current license text or source provenance,
- performance characteristics that can be measured or derived,
- whether a technical implementation can be tested deterministically.

For these, consult current primary sources, record evidence, and make an engineering recommendation.

### Ask the owner before material creative canon is frozen

A Human Design Gate is required when multiple answers are valid and the choice materially affects any of:

- world tone or canon,
- how humans understand or name Pokémon,
- the social relationship between humans and Pokémon,
- lethality, injury, morality, or age-rating tone,
- core character attributes,
- occupation/background fantasy,
- capture/taming/bond philosophy,
- progression philosophy,
- first-region identity,
- any other persistent player-facing rule that would be expensive or incoherent to reverse later.

Do **not** silently invent lore to fill such gaps.

### Gate format

When a gate is needed, prefer 2–4 concrete options:

```text
Decision needed: <question>

A. ...
B. ... ← recommended
C. ...

Recommendation: B
Why: ...
Impact: ...
```

Ask only the minimum decision needed to unblock the active work. Do not bundle unrelated worldbuilding questions.

Once the owner decides, immediately record the decision in `docs/DECISIONS.md` with status and rationale. Do not ask the same question again unless new evidence creates a genuine conflict.

## Setting-invention boundary

Agents may freely create **non-canonical local content details** when they do not establish a durable world rule, for example a disposable NPC name or flavor sentence inside an already-approved setting contract.

Agents may not invent a new institution, supernatural system, historical law, species-wide behavior, job archetype, or other persistent setting fact merely to finish an event.

When uncertain, ask: **Would future content authors need to know this fact to stay consistent?** If yes, it is likely a design decision and belongs in a contract/decision record.

## Reference and Pokémon-IP rule

This repository being public does not make third-party assets or Pokémon intellectual property freely reusable.

Hard rules:

- distinguish code/data licenses from ownership of Pokémon names, characters, designs, images, audio, and other IP,
- prefer primary sources and official repositories/documentation,
- treat public repositories as references unless their exact license/provenance supports the intended use,
- do not claim that non-commercial fan use is automatically licensed or legally authorized,
- preserve source/provenance records for imported or generated data,
- keep project-owned rules/content separate from externally sourced canonical data,
- do not add a repository software license that purports to relicense Pokémon IP or third-party assets.

## Architecture and performance principles

Even though this is primarily a text game:

- deterministic authoritative game state is preferred,
- seeded randomness should be reproducible for tests/debugging where practical,
- event eligibility should be evaluated on discrete state transitions rather than per-render/per-frame polling,
- parsed/generated lookup structures should be cached and reused,
- avoid unnecessary allocations and repeated parsing in hot/repeated paths,
- imported external data should be normalized into project-owned build/runtime contracts,
- UI must not become the source of gameplay truth,
- save formats require explicit versioning/migration once implementation begins.

## Roadmap order

The core phase order is fixed unless the owner explicitly changes it:

`P0 Governance → P1 References/Data/IP → P2 World Bible → P3 TRPG Rules → P4 Pokémon Adaptation → P5 Event Engine → P6 Technical Architecture → P7 Vertical Slice → P8 Content Expansion → P9 Mobile/Release`

Research/specification intentionally precedes implementation. Do not start framework scaffolding simply because implementation is easy while upstream game contracts remain materially unresolved.

## Completion standard

A phase is not complete because prose was generated. Completion requires the issue's acceptance criteria plus the strongest practical evidence available for that phase: source-backed research, explicit owner decisions, schema validation, automated tests, reproducible fixtures, build/CI checks, or playable evidence as appropriate.
