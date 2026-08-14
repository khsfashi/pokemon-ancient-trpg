# Project Status

Last explanatory handoff update: **2026-08-14**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current owner-approved direction:

- ancient / pre-modern setting intentionally **earlier than the Hisui-era precedent**;
- human society is an **early settled village / clan network**, not a mature city/state society and not primarily nomadic;
- settlements are small islands of relative safety connected by dangerous, locally known routes;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**;
- iron weapons and tools improve human survival but do not make ordinary humans peers of Pokémon;
- humans and Pokémon are not already integrated through normalized trainer culture or routine ownership;
- there is **no portable Pokémon containment technology**: no Poké Ball-like storage, instant recall, transfer, or PC-style creature storage;
- Pokémon may be dangerous wildlife, monsters, sacred beings, ecological forces, tolerated neighbors, or exceptional companions depending on species and culture;
- Pokémon companionship is a **core player system** with exactly **three visible companion slots**, but acquiring any companion is optional;
- `0/3`, `1/3`, `2/3`, and `3/3` companion occupancy are all valid supported run states;
- the complete game and its endings must support a `0/3` human-only run without treating empty companion slots as failure;
- companions physically travel with the player and impose species-specific logistical/social consequences;
- in-world, monster-tamer-like people are rare: one dangerous companion can be notable, several powerful companions exceptional, and dragon/legendary-scale companionship potentially legendary;
- rare **human psychics / miracle-workers** may exist as setting-native exceptional people; they are narrow personal gifts rather than a generic wizard spell system;
- the owner wants ancient Pokémon to feel materially more dangerous than modern familiarity suggests; a broad ancient-lineage-strength premise is currently PROVISIONAL and must remain canon-aware/species-specific until P4 audit;
- the mandatory species roster is National Pokédex **#001-#151**, with detailed P4 dossiers and meaningful P9 gameplay presence required for all 151;
- character creation, compact TRPG statistics/checks, dice outcomes, conditional events, discoveries/insights and persistent run state are core;
- occupations must emerge from this setting; rare psychics may occupy part of the fantasy-wizard gameplay niche without introducing generic magic;
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

Durable decision: `docs/DECISIONS.md` D-012.

#### P2-HDG-002 — capture / containment and companion baseline — RESOLVED

Owner selected **A: no portable containment technology**, with the clarified three-slot optional companion system.

Durable decision: `docs/DECISIONS.md` D-013.

#### Iron-age ordinary material baseline — RESOLVED

Owner explicitly wants the ordinary human technology floor to feel like **iron-age / medieval fantasy**, not stone/bronze age. Iron arms/tools exist, but this does not flatten Pokémon into routine game animals.

Durable decision: `docs/DECISIONS.md` D-014.

#### Rare human psychics / miracle-workers — RESOLVED AS A CONCEPT

Owner explicitly permits Sabrina-like human psychics. These can occupy part of the fantasy-wizard gameplay niche, but should be rare, narrow, personal gifts rather than a universal magic system.

Durable decision: `docs/DECISIONS.md` D-015.

### New canon research

`docs/P2_TECHNOLOGY_CANON_RESEARCH.md` audits whether Pokémon capabilities can plausibly cause uneven technology development and whether ancient Pokémon can reasonably be framed as more dangerous.

Research findings:

- official material directly shows Pokémon helping humans with heavy labor and medicine;
- official material establishes electromagnetic, psychic, transport/infrastructure and extraordinary energy phenomena with obvious technological relevance;
- official Regieleki material even describes ancient humans fitting special insulating equipment to restrain a Pokémon's power, strongly supporting `ancient human craft developed around a Pokémon phenomenon` as franchise-compatible world logic;
- Sabrina is direct official precedent for a human using psychic powers;
- version-tagged Magikarp Pokédex text explicitly says distant-past Magikarp were stronger and became weaker over time, establishing species-level precedent for historical lineage strength change;
- none of this establishes a universal rule that every Pokémon was stronger or that civilization genetically weakened all Pokémon.

### Provisional ancient-danger premise

`docs/DECISIONS.md` D-016 records the owner's desired ancient-strength direction as **PROVISIONAL** pending species-level P4 treatment.

Safe current wording: many ancient populations may be harsher, stronger, or more dangerous than distant modern descendants; the exact cause and magnitude vary by species.

## Exact next lane

Resolve **P2-HDG-003 — Pokémon-dependent technology islands**.

Research recommendation:

> Keep the general human technology floor iron-age, but allow particular settlements, clans, or specialists to possess one unusually advanced craft when it can be traced to a source-backed Pokémon capability and generations of local interaction/observation.

If approved, the rule must remain non-scalable and species-audited:

- no obedient Pokémon industrial workforce;
- no automatic modern tech tree from elemental powers;
- local access to the species/habitat/specialist is required;
- losing that ecology or knowledge can collapse the craft;
- P4's 151 species dossiers record exact technology/craft hooks and their provenance.

After this gate, continue only through the next P2 decisions needed for:

1. human terminology and knowledge model,
2. injury/lethality/severity tone,
3. first-playable region/world boundary,
4. economy/medicine details only to the granularity needed by P3-P5,
5. exact psychic ability ceiling only when P3 needs it.

Do not reopen containment, companion slots, iron-age floor, or the existence of rare human psychics unless the owner explicitly supersedes D-013/D-014/D-015.

## Later mandatory contracts

- **P3 / #4:** compact deterministic TRPG rules and character model, supporting human-only, companion-assisted, and rare bounded psychic-character paths.
- **P4 / #5:** shared Pokémon adaptation rules + `151/151` substantive ancient-setting species dossiers, including species-specific companionship, ancient-strength classification and technology/craft hooks.
- **P5 / #6:** deterministic seeded narrative event engine contract, including valid `0/3` companion runs.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable; must preserve three companion state slots.
- **P8 / #8:** first playable mobile vertical slice using production-intended contracts and visible three-slot companion UI.
- **P9 / #9:** replayable content expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
