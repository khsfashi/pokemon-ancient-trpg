# Project Status

Last explanatory handoff update: **2026-08-14**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current owner-approved direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- first playable land is **future-Kanto territory before a mature Kanto regional civilization exists**;
- `Kanto` is primarily a project/system-level future geographic anchor; ancient people use local identities/names rather than a mature regional identity;
- human society is an **early settled village / clan network**;
- local settlements can have culture, agriculture, ironworking and specialists while regional state capacity, roads, markets, institutions and information networks remain weak or absent;
- settlements are small islands of relative safety connected by dangerous, locally known survivable corridors;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**;
- iron tools and weapons help humans survive but do not make ordinary humans peers of Pokémon;
- narrow **Pokémon-dependent technology islands** can make one locality unusually advanced in one craft when the practice is causally traceable to official Pokémon capabilities/ecology and generations of human practice;
- technology islands are local, fragile and non-industrial; they do not imply a general modern technology tree or obedient Pokémon workforce;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- modern Kanto cities, routes, institutions, political boundaries and habitat distribution are not projected backward automatically;
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
- humans intentionally killing Pokémon is **contextual and culture/species-sensitive**: survival/defense can justify lethal action, while local taboos, rarity, intelligence, sacredness, ecology and necessity can change judgment;
- defeating a Pokémon does not imply killing it, and killing one does not imply automatic harvesting or loot;
- rare **human psychics / miracle-workers** are allowed as canon-compatible exceptional people, not as a generic wizard spell system;
- ancient Pokémon should feel materially dangerous; broad lineage-strength change remains species-specific/provisional until P4 rather than being falsely presented as universal canon;
- mandatory roster is National Pokédex **#001-#151**, with substantive P4 dossiers and meaningful P9 gameplay presence required for all 151;
- the opening playable scope is one bounded settlement-centered locality plus surrounding routes/ecologies, not all of future Kanto and not all 151 species at once;
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

### P2 — World bible and setting contract (#3) — READY TO CLOSE ON CURRENT PR MERGE

Primary contract: `docs/WORLD_BIBLE.md`.

Resolved decisions:

- **P2-HDG-001 / D-012:** early settled village / clan-network society.
- **P2-HDG-002 / D-013:** no portable containment; optional three-slot companion system; `0/3` is a first-class complete run.
- **D-014:** ordinary material floor is iron-age / medieval-fantasy-like.
- **D-015:** rare Sabrina-like human psychics / miracle-workers may exist; no universal magic system.
- **P2-HDG-003 / D-017:** iron-age baseline plus Pokémon-dependent local technology islands.
- **D-018:** canon-first worldbuilding derivation protocol.
- **P2-HDG-004 / D-019:** hybrid species identification/naming; unknown/local terminology before identification, stable official species name after identification.
- **P2-HDG-005 / D-020:** serious selective lethality; persistent/critical injury and death are real, but ordinary defeat is not automatic death.
- **P2-HDG-006 / D-021:** Pokémon killing ethics are contextual and culture/species-sensitive rather than universally taboo or universally routine.
- **P2-HDG-007 / D-022:** pre-regional-civilization proto-Kanto locality; future-Kanto anchor without mature ancient Kanto civilization.

Binding/supporting contracts:

- `docs/P2_TECHNOLOGY_CANON_RESEARCH.md`
- `docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md`
- `docs/P2_TERMINOLOGY_AND_IDENTIFICATION_CONTRACT.md`
- `docs/P2_LETHALITY_CANON_RESEARCH.md`
- `docs/P2_INJURY_AND_LETHALITY_CONTRACT.md`
- `docs/P2_KILLING_ETHICS_CONTRACT.md`
- `docs/P2_FIRST_REGION_CONTRACT.md`
- `docs/P2_EXIT_AUDIT.md`

`docs/P2_EXIT_AUDIT.md` maps every #3 requirement to a binding contract and reports **PASS**. Currency details, exact psychic numbers, local village names/maps and species-specific ecology are explicitly assigned downstream rather than treated as missing P2 work.

### Provisional ancient-danger premise carried into P4

`docs/DECISIONS.md` D-016 remains **PROVISIONAL** in wording, not in desired danger tone.

The project intends ancient Pokémon to be frightening and often overwhelming even against iron-armed humans. What remains unproven is a universal canon claim that civilization genetically weakened every species. P4 therefore decides strength/history species by species and labels project extrapolation honestly.

## Current / next phase

**P3 — Core TRPG rules and character model (#4)** becomes active once the current P2 completion PR is merged and #3 is closed.

P3 owns:

- character creation;
- attributes and derived stats;
- backgrounds/occupations;
- dice/check model;
- difficulty/opposed checks;
- health, fatigue, fear, injury and recovery mechanics;
- inventory/resources and economy abstraction;
- progression;
- failure/partial-success philosophy;
- bounded mechanics for rare human psychic gifts where playable.

### Exact next Human Design Gate

Resolve **P3-HDG-001 — core attribute model**.

The world contract does not objectively determine how many base attributes the player should manage. This is a core player-facing rule and therefore requires owner approval.

#### A — Four broad attributes

`Body / Agility / Mind / Spirit`

- very compact and mobile-friendly;
- perception/tracking folds into Mind or relevant background;
- fear/social/psychic resistance folds into Spirit;
- smallest character sheet and easiest balance surface.

**Impact:** fastest play and lowest complexity, but wilderness perception/knowledge distinctions can become overly broad.

#### B — Five focused attributes **(recommended)**

`Body / Agility / Sense / Mind / Will`

- Body: strength, endurance, physical force/resistance;
- Agility: speed, dexterity, stealth, precise movement;
- Sense: perception, tracking, environmental awareness, immediate danger reading;
- Mind: knowledge, craft, medicine, planning, reasoning;
- Will: fear resistance, self-control, conviction and bounded psychic resilience/discipline.

There is **no dedicated Charisma stat**. Social checks use the approach plus background/relationship/context, normally Mind or Will when an attribute is actually needed.

**Impact:** still compact while making survival/exploration and knowledge meaningfully distinct; avoids a generic fantasy/social dump stat and maps cleanly onto the P2 world.

#### C — Six traditional granular attributes

`Strength / Endurance / Agility / Sense / Mind / Presence`

- separates physical power from durability;
- gives social influence its own base stat;
- allows finer build niches.

**Impact:** more conventional TRPG differentiation but more balance surface, more derived-stat coupling and more chances for low-value stat checks in a mobile text game.

Recommendation: **B**.

After the attribute model, P3 should freeze the dice/check model and health/fear/injury representation before designing detailed backgrounds or progression.

## Later mandatory contracts

- **P4 / #5:** shared Pokémon adaptation rules + `151/151` substantive ancient-setting dossiers with provenance/evidence classes, species-specific companionship, ancient-strength treatment, technology/craft hooks, identification/alias hooks, killing/hunting/material treatment and exceptional lethality/durability factors.
- **P5 / #6:** deterministic seeded narrative event-engine contract, including valid `0/3` companion runs, local-knowledge conditions, knowledge-dependent species rendering, context-sensitive lethal-act consequences and authored consequence ladders.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice with visible three-slot companion UI and hybrid encounter-identification presentation.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
