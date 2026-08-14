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
- species presentation uses a **hybrid identification model**: stable official species identities coexist with unknown/descriptive encounter labels and local aliases until the player has sufficient knowledge;
- official species names become the stable player-facing label after identification, but local names can remain in dialogue/lore and the umbrella word `Pokémon` is not forced as universal diegetic vocabulary;
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
- **P2-HDG-004 / D-019:** hybrid species identification/naming; unknown/local terminology before identification, stable official species name after identification.

### Supporting research and contracts

`docs/P2_TECHNOLOGY_CANON_RESEARCH.md` records the source research behind iron-era danger, Pokémon-driven crafts, human psychics and historical strength-change precedent.

`docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md` is the binding authoring contract for:

- narrow/local Pokémon-dependent technology;
- official-fact versus inference versus project-lore separation;
- P4 species dossier evidence classes;
- species-specific technology/craft hooks or explicit `none`;
- species-specific ancient-strength treatment;
- preservation of canon boundaries in later data/content pipelines.

`docs/P2_TERMINOLOGY_AND_IDENTIFICATION_CONTRACT.md` is the binding naming/knowledge contract for:

- stable system identity versus current run knowledge versus diegetic terminology;
- unidentified/identified species presentation;
- official-name reveal without full bestiary completion;
- optional local aliases rather than 151 forced replacement names;
- P4 identification hooks and P5 knowledge-dependent event rendering;
- P7/P8 separation of species key, display name, encounter label, identification state and aliases.

`docs/P2_LETHALITY_CANON_RESEARCH.md` records the official-setting boundary for the next severity decision. Its primary-source findings establish that wild Pokémon can attack people, Pokémon death/graves exist, and humans have hunted Pokémon severely enough to threaten a population, while **not** establishing that ordinary battle defeat is routinely lethal.

### Provisional ancient-danger premise

`docs/DECISIONS.md` D-016 remains **PROVISIONAL** in wording, not in the desired danger tone.

The project absolutely intends ancient Pokémon to be frightening and often overwhelming even against iron-armed humans. What remains unproven is a universal canon claim that civilization genetically weakened every species. P4 therefore decides strength/history species by species and labels project extrapolation honestly.

## Exact next lane

Resolve **P2-HDG-005 — injury/death/severity baseline**.

Canon research supports real danger and real death but does not require `every defeat = death`. The recommended gate is:

### A — Adventure-safe

- routine injury is recoverable;
- permanent injury is exceptional/scripted;
- death is mostly special narrative content or explicit endings;
- combat defeat generally means incapacitation/retreat.

### B — Serious selective lethality **(recommended)**

- injury is consequential and can affect the remainder of a run;
- serious/permanent injury is possible from major failures or dangerous encounters;
- death is possible but is an explicit high-severity outcome rather than the default result of losing a fight;
- humans cannot casually trade hits with Pokémon merely because RPG combat exists;
- retreat, preparation and avoidance remain core survival tools;
- companion death, if later implemented, is rare/high-impact rather than routine attrition.

### C — Harsh lethal survival

- severe injury and death are common consequences of combat failure;
- permanent character/companion loss are ordinary run risks;
- many direct battles become effectively life-or-death decisions.

Recommendation: **B**. It preserves the monster-scale threat and meaningful survival decisions without making every encounter or companion investment a grimdark attrition gamble.

After severity, resolve the social/ethical treatment of **killing Pokémon** separately so hunting, defensive killing, sacred species and material use can remain species- and culture-sensitive rather than becoming one global rule.

After that, the strongest remaining P2 blockers are:

1. first-playable region/world boundary;
2. economy/medicine details only to the depth needed by P3-P5;
3. exact psychic ability ceiling only when P3 requires it.

Do not reopen containment, companion slots, iron-age floor, technology islands, canon-first derivation, hybrid identification, or existence of rare human psychics unless the owner explicitly supersedes D-013/D-014/D-015/D-017/D-018/D-019.

## Later mandatory contracts

- **P3 / #4:** compact deterministic TRPG rules and character model; human-only, companion-assisted and rare bounded psychic paths.
- **P4 / #5:** shared Pokémon adaptation rules + `151/151` substantive ancient-setting dossiers with provenance/evidence classes, species-specific companionship, ancient-strength treatment, technology/craft hooks, and identification/alias hooks.
- **P5 / #6:** deterministic seeded narrative event-engine contract, including valid `0/3` companion runs, local-knowledge conditions, and knowledge-dependent species rendering.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice with visible three-slot companion UI and hybrid encounter-identification presentation.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
