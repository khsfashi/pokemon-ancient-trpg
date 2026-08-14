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
- there is **no portable Pokémon containment technology**: no Poké Ball-like storage, instant recall, transfer, or PC-style creature storage;
- Pokémon may be dangerous wildlife, monsters, sacred beings, ecological forces, tolerated neighbors, or exceptional companions depending on species and culture;
- Pokémon companionship is a **core player system** with exactly **three visible companion slots**, but acquiring any companion is optional;
- `0/3`, `1/3`, `2/3`, and `3/3` companion occupancy are all valid supported run states;
- the complete game and its endings must support a `0/3` human-only run without treating empty companion slots as failure;
- companions physically travel with the player and impose species-specific logistical/social consequences;
- in-world, monster-tamer-like people are rare: one dangerous companion can be notable, several powerful companions exceptional, and dragon/legendary-scale companionship potentially legendary;
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

This establishes persistent villages/hamlets, kinship/local authority, mixed subsistence and specialist craft, route-dependent exchange, dangerous wilderness travel, local ecological knowledge, and enough social specialization for varied non-fantasy occupations.

Durable decision: `docs/DECISIONS.md` D-012.

#### P2-HDG-002 — capture / containment and companion baseline — RESOLVED

Owner selected **A: no portable containment technology**, with an important gameplay clarification:

- Pokémon cannot be stored in Poké Ball-like portable containers;
- companions physically remain in the world with the player;
- companionship is an explicit core system, not merely a rare scripted reward;
- player state/UI has exactly **three companion slots**;
- all occupancy states from `0/3` to `3/3` are valid;
- a run with zero companions must remain fully playable and completable;
- empty companion slots must not be represented as an unfinished collection objective;
- in-world companionship remains socially rare and prestigious despite being mechanically first-class;
- defeating/restraining a Pokémon does not create a companion; an ongoing accepted relationship is required.

Durable decision: `docs/DECISIONS.md` D-013.

### P2 world baseline already constrained

The world bible now defines:

- settlement and social organization;
- subsistence/economic baseline;
- travel and wilderness meaning;
- knowledge/record asymmetry;
- non-normalized human–Pokémon relationships;
- no-containment companion rules and the three-slot system invariant;
- settlement protection concepts;
- medicine baseline;
- occupation design space;
- explicit unresolved questions and cross-phase invariants.

## Exact next lane

Continue P2 with the next blocking world decision. The strongest remaining candidate is the **technology/material baseline**, because it constrains weapons, tools, traps, transport, construction, medicine, craft occupations and plausible encounter solutions across P3-P5.

Do not reopen containment or companion-slot count unless the owner explicitly supersedes D-013.

After technology/material baseline, continue P2 through only the next necessary decisions for:

1. human terminology and knowledge model,
2. injury/lethality/severity tone,
3. first-playable region/world boundary,
4. companion social prevalence/detail only where P3/P4 actually need a shared rule,
5. economy/medicine details only to the granularity needed by P3-P5.

Species-specific companionship eligibility, bond requirements, burdens, riding plausibility, departure and similar variation should primarily belong to P4 rather than becoming one universal P2 rule.

## Later mandatory contracts

- **P3 / #4:** compact deterministic TRPG rules and character model, supporting both human-only and companion-assisted builds.
- **P4 / #5:** shared Pokémon adaptation rules + `151/151` substantive ancient-setting species dossiers, including species-specific companionship plausibility.
- **P5 / #6:** deterministic seeded narrative event engine contract, including valid `0/3` companion runs.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable; must preserve three companion state slots.
- **P8 / #8:** first playable mobile vertical slice using production-intended contracts and visible three-slot companion UI.
- **P9 / #9:** replayable content expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
