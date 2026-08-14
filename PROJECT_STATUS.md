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
- the world uses **serious selective lethality**: ordinary defeat is not automatic death, but persistent injury, permanent impairment, critical condition and death are real possible consequences of sufficiently dangerous circumstances;
- companion death is possible but rare/high-impact rather than routine attrition;
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
- **P2-HDG-005 / D-020:** serious selective lethality; persistent/critical injury and death are real, but ordinary defeat is not automatic death.

### Supporting research and contracts

`docs/P2_TECHNOLOGY_CANON_RESEARCH.md` records the source research behind iron-era danger, Pokémon-driven crafts, human psychics and historical strength-change precedent.

`docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md` binds narrow/local Pokémon-dependent technology and canon-versus-project-lore evidence classes.

`docs/P2_TERMINOLOGY_AND_IDENTIFICATION_CONTRACT.md` binds stable species identity, run knowledge, unidentified/identified presentation, and optional local aliases.

`docs/P2_LETHALITY_CANON_RESEARCH.md` records the official-setting boundary for injury, death, hunting and non-universal battle lethality.

`docs/P2_INJURY_AND_LETHALITY_CONTRACT.md` now binds:

- escape/non-lethal defeat/injury/critical/death as distinct semantic outcomes;
- persistent and potentially permanent injury;
- explicit high-severity lethal paths rather than `failed roll = death`;
- danger communication/telegraphing where reasonably possible;
- rare/high-impact companion death rather than ordinary attrition;
- human-only survival tools under lethal stakes;
- no generic assumption that death means fainting or that resurrection is routine;
- downstream P3/P4/P5 requirements for health, durability, treatment and consequence ladders.

### Provisional ancient-danger premise

`docs/DECISIONS.md` D-016 remains **PROVISIONAL** in wording, not in the desired danger tone.

The project intends ancient Pokémon to be frightening and often overwhelming even against iron-armed humans. What remains unproven is a universal canon claim that civilization genetically weakened every species. P4 therefore decides strength/history species by species and labels project extrapolation honestly.

## Exact next lane

Resolve **P2-HDG-006 — social/ethical treatment of killing Pokémon**.

D-020 establishes that Pokémon can genuinely die. The remaining question is how ordinary communities interpret a human intentionally causing that death.

### A — Pragmatic survival norm

- hunting and killing Pokémon for food, materials, route safety and settlement defense are ordinary accepted practices;
- specific sacred, useful, rare, intelligent or locally protected species may be exceptions;
- killing is treated broadly like dangerous-animal hunting in a harsh pre-modern world.

**Impact:** strong survival realism and easy material economy, but can make Pokémon feel too much like generic harvestable monsters if used globally.

### B — Contextual and culture/species-sensitive **(recommended)**

- killing Pokémon is neither universally taboo nor casually normal;
- immediate defense, necessary hunting, mercy killing, population control, food/material need, local ecology, species behavior, rarity, perceived intelligence/sacredness and existing truces all matter;
- one village may hunt a species another village protects or worships;
- killing for necessity can be accepted while wasteful, reckless or prestige-only killing may attract condemnation in many communities;
- P4/P5 decide concrete species/local cases rather than inheriting one moral answer for all 151.

**Impact:** best fit for the project's local-culture model and canon-first species dossiers. It supports hunters and material use without turning every encounter into a loot source.

### C — Broad killing taboo

- most communities avoid intentionally killing Pokémon except immediate self-defense, mercy, catastrophe or rare ritual necessity;
- food/material use relies mostly on non-lethal gathering, ordinary agriculture, fishing/hunting targets outside the Pokémon roster where setting permits, or exceptional local practices.

**Impact:** makes Pokémon feel especially numinous/otherworldly and companionship morally weighty, but narrows survival/hunting/economy design and needs more setting work around food/materials.

### D — Hunter-prestige culture

- defeating and killing dangerous Pokémon can be a major status practice, rite, profession or proof of protection capability;
- trophies/materials and famous hunts are important social institutions;
- local taboos can still exist.

**Impact:** creates a strong Monster Hunter-like identity, but risks making direct killing too central and flattening the more varied human–Pokémon relationships already established.

Recommendation: **B**.

It preserves the fact that this is a dangerous pre-modern ecosystem while allowing P4 to make, for example, one species a food source, another a protected neighbor, another a lethal pest, and another a sacred being without contradiction.

After killing ethics, the strongest remaining P2 blockers are:

1. first-playable region/world boundary;
2. economy/medicine details only to the depth needed by P3-P5;
3. exact psychic ability ceiling only when P3 requires it.

Do not reopen containment, companion slots, iron-age floor, technology islands, canon-first derivation, hybrid identification, selective lethality, or existence of rare human psychics unless the owner explicitly supersedes D-013/D-014/D-015/D-017/D-018/D-019/D-020.

## Later mandatory contracts

- **P3 / #4:** compact deterministic TRPG rules and character model; human-only, companion-assisted and rare bounded psychic paths; health model must represent non-lethal defeat through lethal outcomes.
- **P4 / #5:** shared Pokémon adaptation rules + `151/151` substantive ancient-setting dossiers with provenance/evidence classes, species-specific companionship, ancient-strength treatment, technology/craft hooks, identification/alias hooks and exceptional lethality/durability factors.
- **P5 / #6:** deterministic seeded narrative event-engine contract, including valid `0/3` companion runs, local-knowledge conditions, knowledge-dependent species rendering and authored consequence ladders.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice with visible three-slot companion UI and hybrid encounter-identification presentation.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
