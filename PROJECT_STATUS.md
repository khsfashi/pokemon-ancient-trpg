# Project Status

Last explanatory handoff update: **2026-08-14**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current owner-approved direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- human society is an **early settled village / clan network**;
- settlements are small islands of relative safety connected by dangerous, locally known routes;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**;
- iron tools and weapons help humans survive but do not make ordinary humans peers of Pokémon;
- narrow **Pokémon-dependent technology islands** can make one locality unusually advanced in one craft when the practice is causally traceable to official Pokémon capabilities/ecology and generations of human practice;
- technology islands are local, fragile and non-industrial; they do not imply a general modern technology tree or obedient Pokémon workforce;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- humans and Pokémon are not integrated through normalized trainer culture or routine ownership;
- there is **no portable Pokémon containment technology**;
- Pokémon companionship is a core system with exactly **three visible slots**, while `0/3` through `3/3` are all valid run states;
- a complete human-only `0/3` run must remain fully playable and completable;
- companions physically travel with the player and impose species-specific logistical/social consequences;
- one Pokémon companion can be socially notable; several powerful companions can be exceptional; dragon/legendary-scale bonds can become legendary;
- rare **human psychics / miracle-workers** are allowed as canon-compatible exceptional people, not as a generic wizard spell system;
- ancient Pokémon should feel materially dangerous; broad lineage-strength change remains species-specific/provisional until P4 rather than being falsely presented as universal canon;
- mandatory roster is National Pokédex **#001-#151**, with substantive P4 dossiers and meaningful P9 gameplay presence required for all 151;
- character creation, compact TRPG checks, dice outcomes, conditional events, discoveries/insights and persistent run state are core;
- public repository and non-commercial intent do not create Pokémon IP permission;
- resource provenance and mobile resource discipline remain first-class constraints.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous continuation protocol, roadmap, decision log and Human Design Gate rules are established.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

P1 closed via PR #18. Important outputs include:

- `docs/SOURCE_REGISTRY.md`
- `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`
- `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`

Final production asset selection remains deferred to P6.

## Current phase

**P2 — World bible and setting contract (#3) is active.**

Primary working contract: `docs/WORLD_BIBLE.md`.

### Resolved P2 decisions

- **P2-HDG-001 / D-012:** early settled village / clan-network society.
- **P2-HDG-002 / D-013:** no portable containment; optional three-slot companion system; `0/3` is a first-class complete run.
- **D-014:** ordinary material floor is iron-age / medieval-fantasy-like.
- **D-015:** rare Sabrina-like human psychics / miracle-workers may exist; no universal magic system.
- **P2-HDG-003 / D-017:** iron-age baseline plus Pokémon-dependent local technology islands.
- **D-018:** canon-first worldbuilding derivation protocol.

### Supporting research and contracts

`docs/P2_TECHNOLOGY_CANON_RESEARCH.md` records the source research behind iron-era danger, Pokémon-driven crafts, human psychics and historical strength-change precedent.

`docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md` is now the binding authoring contract for:

- narrow/local Pokémon-dependent technology;
- official-fact versus inference versus project-lore separation;
- P4 species dossier evidence classes;
- species-specific technology/craft hooks or explicit `none`;
- species-specific ancient-strength treatment;
- preservation of canon boundaries in later data/content pipelines.

### Provisional ancient-danger premise

`docs/DECISIONS.md` D-016 remains **PROVISIONAL** in wording, not in the desired danger tone.

The project absolutely intends ancient Pokémon to be frightening and often overwhelming even against iron-armed humans. What remains unproven is a universal canon claim that civilization genetically weakened every species. P4 therefore decides strength/history species by species and labels project extrapolation honestly.

## Exact next lane

Resolve **P2-HDG-004 — human terminology / identification presentation**.

This decision is now blocking because the world already assumes local, incomplete and non-standardized Pokémon knowledge, while the player still needs a readable mobile interface and the P4/P5 content pipeline needs to know whether it writes official species names, local names, descriptive unknown labels, or a hybrid.

The next gate should decide only the presentation contract, not invent 151 local names during P2.

Recommended direction to present to the owner:

- keep official Pokémon species names as stable **system/data identifiers**;
- allow diegetic local names, titles and mistaken names in dialogue/lore;
- before the player has sufficient knowledge, encounters may show a descriptive/unknown label rather than immediately revealing the official species name;
- once identified, the UI/bestiary uses the official species name for usability while retaining discovered local aliases in lore;
- decide separately whether people of the era use the umbrella word `Pokémon` at all.

After terminology, the next likely P2 blockers are:

1. injury/lethality/severity tone and treatment of killing Pokémon;
2. first-playable region/world boundary;
3. economy/medicine details only to the depth needed by P3-P5;
4. exact psychic ability ceiling only when P3 requires it.

Do not reopen containment, companion slots, iron-age floor, technology islands, canon-first derivation, or existence of rare human psychics unless the owner explicitly supersedes D-013/D-014/D-015/D-017/D-018.

## Later mandatory contracts

- **P3 / #4:** compact deterministic TRPG rules and character model; human-only, companion-assisted and rare bounded psychic paths.
- **P4 / #5:** shared Pokémon adaptation rules + `151/151` substantive ancient-setting dossiers with provenance/evidence classes, species-specific companionship, ancient-strength treatment and technology/craft hooks.
- **P5 / #6:** deterministic seeded narrative event-engine contract, including valid `0/3` companion runs and local-knowledge conditions.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice with visible three-slot companion UI.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
