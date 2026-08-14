# Project Status

Last explanatory handoff update: **2026-08-14**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current owner-approved direction:

- ancient / pre-modern setting intentionally **earlier than the Hisui-era precedent**;
- human society is an **early settled village / clan network**, not a mature city/state society and not primarily nomadic;
- settlements are small islands of relative safety connected by dangerous, locally known routes;
- humans and Pokémon are not already integrated through normalized trainer culture or routine ownership;
- Pokémon may be dangerous wildlife, monsters, sacred beings, ecological forces, tolerated neighbors, or exceptional companions depending on species and culture;
- stable Pokémon companionship should carry social and narrative weight rather than being routine;
- the mandatory species roster is National Pokédex **#001-#151**, with detailed P4 dossiers and meaningful P9 gameplay presence required for all 151;
- character creation, compact TRPG statistics/checks, dice outcomes, conditional events, discoveries/insights and persistent run state are core;
- occupations must emerge from this setting instead of generic fantasy-magic classes;
- web/PWA is acceptable for mobile delivery; APK remains optional until P7/P10 evidence justifies it;
- public repository status and non-commercial intent do not create Pokémon IP permission;
- resource/source provenance and mobile resource discipline are first-class constraints.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous `next/continue` workflow, roadmap, decision log, Human Design Gates and repository operating rules are established.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

P1 closed via PR #18 after producing source-backed contracts for Pokémon data/mechanics, sprite/audio candidates, comparable games, official historical-setting precedent, fan-project/IP boundaries and general font/UI/audio/art ecosystems.

Important P1 outputs include:

- `docs/SOURCE_REGISTRY.md`
- `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`
- `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`

Final production asset selection remains intentionally deferred to P6.

## Current phase

**P2 — World bible and setting contract (#3) is active.**

Authoritative working document: `docs/WORLD_BIBLE.md`.

### Resolved P2 decisions

#### P2-HDG-001 — human-society baseline — RESOLVED

Owner selected **A: early settled village / clan network**.

This establishes:

- persistent villages/hamlets rather than mature cities or predominantly mobile camps;
- kinship/clan/local leadership ahead of centralized bureaucracy;
- small-scale cultivation, gathering, fishing, hunting where appropriate, storage and specialist craft;
- intermittent route-dependent exchange;
- dangerous inter-settlement travel and geographically local ecological knowledge;
- oral/local knowledge dominance with specialist literacy/record keeping;
- enough social specialization for varied occupations without modern institutions;
- a world where wilderness remains materially outside normal human control.

Durable decision: `docs/DECISIONS.md` D-012.

### P2 world baseline already constrained

The world bible now defines, without overreaching the owner's choice:

- settlement and social organization;
- subsistence/economic baseline;
- travel and wilderness meaning;
- knowledge/record asymmetry;
- non-normalized human–Pokémon relationships;
- settlement protection concepts;
- medicine baseline;
- occupation design space;
- explicit unresolved questions and cross-phase invariants.

It deliberately does **not** choose capture technology, exact metallurgy, exact region, terminology, currency, lethality or exceptional-bond mechanics yet.

## Exact next lane

Resolve **P2-HDG-002 — Pokémon capture / containment baseline** before detailed technology and occupation design.

This is blocking because it changes:

- what `forming a Pokémon party` means;
- whether a companion physically travels with the player at all times;
- how rare multiple companions can realistically be;
- settlement defense and transport practices;
- P3 inventory/equipment assumptions;
- P4 bond/companionship dossiers;
- P5 encounter choices and consequences.

The next agent should present a small set of setting-consistent options rather than silently inheriting modern or Hisui Poké Ball conventions.

After that, continue P2 through only the next blocking decisions needed to freeze:

1. technology/material baseline,
2. human terminology and knowledge model,
3. exceptional human–Pokémon bond prevalence/social meaning,
4. injury/lethality/severity tone,
5. first-playable region/world boundary,
6. economy/medicine details only to the granularity needed by P3-P5.

Do not front-load all remaining questions at once.

## Later mandatory contracts

- **P3 / #4:** compact deterministic TRPG rules and character model.
- **P4 / #5:** shared Pokémon adaptation rules + `151/151` substantive ancient-setting species dossiers.
- **P5 / #6:** deterministic seeded narrative event engine contract.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice using production-intended contracts.
- **P9 / #9:** replayable content expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
