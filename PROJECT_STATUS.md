# Project Status

Last explanatory handoff update: **2026-08-15**

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
- human player characters use seven core attributes: **Strength / Endurance / Agility / Sense / Intellect / Will / Presence** (`근력 / 체력 / 기민 / 감각 / 지성 / 의지 / 존재감`);
- core uncertain-action resolution is **2d6 + Attribute + Competence + Context**, with staged margin outcomes and rare natural-doubles spikes;
- natural `6+6` is a Fortune Spike and natural `1+1` is a Trouble Spike; neither bypasses fiction or the serious-selective-lethality contract;
- human survival uses one numeric **Vitality** pool, three-stage **Fatigue**, three-stage **Fear**, and named discrete **Injuries** rather than four full meters;
- `0 Vitality` means Incapacitated rather than dead; Light/Serious/Critical Injuries and death are explicit separate consequences;
- Luck and Pokémon Bond are not core attributes; fate-like resources and individual relationship state remain separate systems;
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

### P2 — World bible and setting contract (#3) — COMPLETE

P2 closed through PR #26 after `docs/P2_EXIT_AUDIT.md` reported **PASS**.

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

Currency details, exact psychic numbers, local village names/maps and species-specific ecology are explicitly assigned downstream rather than treated as missing P2 work.

### Provisional ancient-danger premise carried into P4

`docs/DECISIONS.md` D-016 remains **PROVISIONAL** in wording, not in desired danger tone.

The project intends ancient Pokémon to be frightening and often overwhelming even against iron-armed humans. What remains unproven is a universal canon claim that civilization genetically weakened every species. P4 therefore decides strength/history species by species and labels project extrapolation honestly.

## Current phase

**P3 — Core TRPG rules and character model (#4) is active.**

P3 owns:

- character creation;
- attributes and derived stats;
- backgrounds/occupations;
- dice/check model;
- difficulty and opposed checks;
- health, fatigue, fear, injury and recovery mechanics;
- inventory/resources and economy abstraction;
- progression;
- failure/partial-success philosophy;
- bounded mechanics for rare human psychic gifts where playable.

### Resolved P3 decisions

- **P3-HDG-001 / D-023:** seven human core attributes — `Strength / Endurance / Agility / Sense / Intellect / Will / Presence`.
- Strength and Endurance stay separate; Agility and Sense stay separate; Sense and Intellect stay separate; Will and Presence stay separate.
- Presence is social projection/authority rather than beauty or a universal dialogue-win stat.
- Luck is not an eighth attribute; Bond is individual Pokémon relationship state rather than a human core stat.
- P4 may use a different or derived Pokémon stat model instead of forcing species into the human seven-attribute model.
- **P3-HDG-002 / D-024:** core checks use `2d6 + Attribute + Competence + Context` with margin-based setback / costly-partial / full / exceptional outcomes.
- natural `6+6` is a **Fortune Spike** and natural `1+1` is a **Trouble Spike**, each a rare 1/36 overlay on the normal result rather than an automatic success/death switch.
- the default check scale is Attribute `0–4`, Competence `+0/+1/+2`, ordinary Context `-2..+2`, and difficulty `7 / 9 / 11 / 13 / 15`; routine and impossible actions do not roll.
- Fortune Spikes preferentially create discovery, bestiary insight, route, relationship, resource-preservation, or optional-event opportunities because frequent Pokémon acquisition is not the game's reward loop.
- **P3-HDG-003 / D-025:** human survival uses `Vitality + staged Fatigue + staged Fear + discrete Injuries`.
- `Vitality Max = 4 + Endurance` is the initial balance formula; ordinary harm is compact (`1–3`) and Vitality zero means Incapacitated, not dead.
- Fatigue is `Ready → Tired → Exhausted`; Fear is `Steady → Shaken → Panicked`; penalties apply only when the pressure is relevant rather than globally.
- Injuries are named persistent records with `Light / Serious / Critical` severity, with at most three active mechanical Injury records for mobile readability.
- Critical Injury and death remain explicit high-severity states with stabilization/rescue logic consistent with D-020.

Binding contracts:

- `docs/P3_ATTRIBUTE_CONTRACT.md`
- `docs/P3_DICE_AND_CHECK_CONTRACT.md`
- `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`

Starting attribute allocation, exact character-creation shell, progression philosophy, inventory/economy abstraction, rare psychic-gift mechanics, and exact fate/insight resource rules remain open. The numeric envelopes above can be tuned in data without reopening their underlying rule architecture.

### Exact next Human Design Gate

Resolve **P3-HDG-004 — character creation structure**.

The seven attributes and compact competence scale are fixed, but the project has not yet decided how much of a new character comes from free allocation versus an ancient-world background/occupation. This materially changes build freedom, replayability, onboarding, and how strongly the setting is expressed before the first event.

#### A — Mostly free point allocation

- player allocates starting attribute points and chooses competences directly;
- background is mostly narrative identity/contact/equipment rather than mechanical package;
- maximum build freedom and easiest optimization.

**Impact:** clean and familiar, but occupations can feel cosmetic and new players must understand all seven attributes before making good choices.

#### B — Background/occupation packages

- choose a setting-native background such as hunter, gatherer, smith-lineage worker, healer apprentice, route guide, fisher, ritual specialist, etc.;
- the package supplies most starting attributes/competences/equipment/contacts;
- player makes only a few finishing choices.

**Impact:** strongest immediate world flavor and easiest onboarding, but mechanically constrains unusual builds and can drift toward class-like archetypes.

#### C — Hybrid foundation + free specialization **(recommended)**

- every human starts from the same ordinary baseline;
- choose one setting-native **Background** for narrative permissions, one trained competence, starting relationship/equipment hooks, and possibly one bounded stat influence;
- separately spend a small free attribute budget and choose personal specialization so two hunters or two healers need not share the same sheet;
- Background is not a locked class and does not decide future progression.

**Impact:** preserves ancient-world identity while keeping character-building freedom and human-only build diversity. It also maps cleanly to the `+0/+1/+2` competence contract without adding a large skill list.

#### D — Short lifepath sequence

- character creation resolves two or three formative-life choices/events such as upbringing, apprenticeship, hardship, taboo/contact, or expedition experience;
- each step contributes attributes, competence, relationships, equipment, or knowledge;
- final sheet emerges from the sequence rather than one package.

**Impact:** strongest narrative/replay flavor and can make creation itself fun, but onboarding is longer and balancing combinations is substantially harder.

Recommendation: **C — Hybrid foundation + free specialization**.

After this gate, P3 should bind exact starting allocation and the first background/occupation taxonomy, then resolve progression philosophy (which is separately owner-gated) before inventory/economy and rare psychic-gift mechanics.

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
