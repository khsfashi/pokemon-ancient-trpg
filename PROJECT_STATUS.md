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
- character creation begins with **three partially opaque, fiction-first formative choices** that deterministically resolve an Origin and Learned Practice before the player sees the final background;
- the hidden mapping is discovery-oriented but must not be a hidden stat trap: resulting mechanics are revealed before confirmation and attributes are specialized explicitly afterward;
- ordinary new humans begin at `1` in all seven attributes, then spend **4 explicit attribute increases**, with a normal starting cap of `3`;
- Learned Practice grants one trained Competence at `+1`; the player then chooses one additional personal trained Competence at `+1`; ordinary creation does not begin with `+2` expertise;
- “fallen noble”-like backgrounds are approved, but the baseline pre-regional implementation is **몰락한 옛 수장가의 후예** (`fallen_head_house`) rather than silently introducing a mature Kanto-wide feudal aristocracy;
- human progression uses **milestone-earned advancement + earned training/insight eligibility**, not character levels, kill-XP or use-count grinding;
- ordinary permanent advancement costs initially use `1 / 2 / 3`: trained Competence, expert Competence, then core-attribute increase respectively, each requiring matching growth eligibility;
- defeating or killing Pokémon grants no universal XP; progression comes from authored milestones, knowledge, insight, training, reputation, relationships, equipment/access and other meaningful consequences;
- the normalized Competence catalog is intentionally compact, and there is no universal Pokémon `taming`/`handling` Competence;
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
- **P3-HDG-004 / D-026:** character creation is a **veiled lifepath + free specialization hybrid**.
- the default flow is three fiction-first formative choices → deterministic `Origin + Learned Practice` → reveal → explicit specialization.
- formative-choice mappings are initially hidden, but choices must remain thematically fair and resulting mechanics are revealed before final confirmation.
- formative choices do not secretly modify core attributes.
- ordinary characters start all seven attributes at `1`, then spend `4` increases with starting cap `3` (`11` total starting attribute points).
- Learned Practice grants one trained Competence `+1`; free specialization grants one additional different trained Competence `+1`; starting expert `+2` is reserved for later advancement/exceptional rules.
- the Origin seed set includes `fallen_head_house` (몰락한 옛 수장가의 후예), disaster survivor, outsider ward, shrine-raised, route household, craft household, wilds household, and ordinary village household.
- Learned Practice seeds include hunter, route guide, village guard, forager, healer apprentice, smith apprentice, fisher, keeper, and ritual attendant.
- Origin/Practice are story-state packages rather than fixed classes and may create contacts, recognition, possessions, debts, duties, claims, taboos, equipment and event flags.
- **P3-HDG-005 / D-027:** progression is **milestone growth + earned training/insight eligibility**.
- there is no general human level, kill-XP or repeated-use skill XP; authored milestones grant a small one-shot `advancement_points` resource.
- an improvement also requires matching growth eligibility created by actual experience, training, mentorship, discovery or another authored causal source.
- initial costs are `+0→+1 Competence = 1`, `+1→+2 Competence = 2`, `Attribute +1 = 3`, each plus eligibility; normal human attribute cap remains `4`.
- permanent advancement spending occurs at safe/checkpoint moments rather than during immediate danger.
- the initial normalized Competence catalog is `arms`, `hunting`, `wayfinding`, `foraging`, `medicine`, `smithing`, `crafting`, `fishing`, `recordkeeping`, `ritual`, `stealth`, `negotiation`.
- a check receives at most one Competence bonus; repeated relevant Competences do not stack.
- there is no universal Pokémon handling/taming Competence and defeating Pokémon grants no universal XP.
- knowledge, routes, relationships, reputation, techniques, equipment/access and narrative permissions are first-class horizontal progression rewards.

Binding contracts:

- `docs/P3_ATTRIBUTE_CONTRACT.md`
- `docs/P3_DICE_AND_CHECK_CONTRACT.md`
- `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`
- `docs/P3_CHARACTER_CREATION_CONTRACT.md`
- `docs/P3_PROGRESSION_AND_COMPETENCE_CONTRACT.md`

Inventory/economy abstraction, rare psychic-gift mechanics, exact fate/roll-intervention resource rules and the final P3 exit audit remain open. Numeric envelopes above can be tuned in data without reopening their underlying rule architecture.

### Exact next work

Define **P3 inventory / resources / economy abstraction**.

The contract must preserve the pre-regional village/clan economy and dangerous-travel tone without turning the mobile text RPG into a slot-by-slot survival spreadsheet. It should decide:

- what inventory detail is mechanically meaningful versus abstracted;
- how carried supplies, tools, weapons, armor and bulky items are represented;
- how food/water/medicine/travel preparation interact with Fatigue, Injury and Context;
- how barter, obligations, local value and any limited currency-like medium are represented without inventing a mature Kanto-wide standardized economy;
- how Pokémon-derived materials remain species/context-sensitive under D-021/P4 rather than generic loot;
- what resource rewards can substitute for frequent Pokémon acquisition and conventional XP.

If multiple materially different economy/inventory fantasies remain after a compact design pass, raise the minimum Human Design Gate rather than silently choosing one.

After inventory/economy, P3 should bind rare psychic-gift mechanics, resolve any necessary fate/roll-intervention resource rule, then run a P3 exit audit before entering P4.

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
