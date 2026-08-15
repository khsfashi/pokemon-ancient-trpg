# Project Status

Last explanatory handoff update: **2026-08-15**

This file is the human-readable operational handoff. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current owner-approved direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- first playable land is **future-Kanto territory before a mature Kanto regional civilization exists**;
- ancient people use local identities/names rather than a mature regional `Kanto` identity;
- human society is an **early settled village / clan network** with local agriculture, ironworking, crafts and specialists but weak regional integration;
- settlements are small islands of relative safety connected by dangerous, locally known survivable corridors;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**;
- iron tools and weapons help humans survive but do not make ordinary humans peers of Pokémon;
- narrow **Pokémon-dependent technology islands** may exist when traceable to official Pokémon capabilities/ecology plus generations of human practice; they remain local, fragile and non-industrial;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- modern Kanto cities, routes, institutions, political boundaries and habitat distribution are not projected backward automatically;
- species presentation uses a **hybrid identification model**: unknown/descriptive labels and local aliases can precede stable official species identity;
- humans and Pokémon are not integrated through normalized trainer culture or routine ownership;
- there is **no portable Pokémon containment technology**;
- Pokémon companionship is a core system with exactly **three visible slots**, while `0/3` through `3/3` are all valid run states;
- a complete human-only `0/3` run must remain fully playable and completable;
- companions physically travel with the player and impose species-specific logistical/social consequences;
- the world uses **serious selective lethality**: persistent injury, permanent impairment, critical condition and death are real, but ordinary defeat is not automatic death;
- companion death is possible but rare/high-impact rather than routine attrition;
- humans intentionally killing Pokémon is **contextual and culture/species-sensitive**; defeating a Pokémon does not imply killing or automatic harvesting;
- rare **human psychics / miracle-workers** are allowed as canon-compatible exceptional people, not as a generic wizard spell system;
- standard player characters do not begin with usable psychic power: rare lifepath foreshadowing may exist, but an actual Gift requires a rare authored in-run awakening and ordinarily remains one narrow manifestation family;
- ancient Pokémon should feel materially dangerous; broad lineage-strength change remains species-specific/provisional until P4;
- mandatory roster is National Pokédex **#001-#151**, with substantive P4 dossiers and meaningful P9 gameplay presence required for all 151;
- the opening playable scope is one bounded settlement-centered locality plus surrounding routes/ecologies, not all of future Kanto and not all 151 species at once.

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
- **P2-HDG-004 / D-019:** hybrid species identification/naming.
- **P2-HDG-005 / D-020:** serious selective lethality.
- **P2-HDG-006 / D-021:** Pokémon killing ethics are contextual and culture/species-sensitive.
- **P2-HDG-007 / D-022:** pre-regional-civilization proto-Kanto locality.

Binding/supporting contracts include the P2 technology, terminology/identification, lethality/injury, killing-ethics, first-region and exit-audit documents under `docs/`.

### Provisional ancient-danger premise carried into P4

`docs/DECISIONS.md` D-016 remains **PROVISIONAL** in wording, not in desired danger tone.

The project intends ancient Pokémon to be frightening and often overwhelming even against iron-armed humans. What remains unproven is a universal canon claim that civilization genetically weakened every species. P4 therefore decides strength/history species by species and labels project extrapolation honestly.

## Current phase

**P3 — Core TRPG rules and character model (#4) is active.**

P3 owns character creation, attributes, checks, survival pressure/injury, inventory/economy, progression, rare psychic gifts and final rules integration.

### Resolved P3 decisions

#### P3-HDG-001 / D-023 — Seven human attributes

Human player characters use:

- Strength / 근력
- Endurance / 체력
- Agility / 기민
- Sense / 감각
- Intellect / 지성
- Will / 의지
- Presence / 존재감

Luck is not an eighth attribute and Bond is individual Pokémon relationship state.

Binding contract: `docs/P3_ATTRIBUTE_CONTRACT.md`.

#### P3-HDG-002 / D-024 — Core checks

Core uncertain-action resolution is:

`2d6 + Attribute + Competence + Context`

The system uses margin-based setback / costly-partial / full / exceptional outcomes. Natural `6+6` is a Fortune Spike and natural `1+1` is a Trouble Spike; neither bypasses fiction or the serious-selective-lethality contract.

Default scale: Attribute `0–4`, Competence `+0/+1/+2`, ordinary Context `-2..+2`, difficulties `7 / 9 / 11 / 13 / 15`. Routine and impossible actions do not roll.

Binding contract: `docs/P3_DICE_AND_CHECK_CONTRACT.md`.

#### P3-HDG-003 / D-025 — Human survival

Human survival uses one numeric **Vitality** pool, three-stage **Fatigue**, three-stage **Fear**, and named discrete **Injuries**.

- `Vitality Max = 4 + Endurance` initial formula.
- ordinary harm stays compact (`1–3`).
- `0 Vitality` means Incapacitated rather than dead.
- Fatigue: `Ready → Tired → Exhausted`.
- Fear: `Steady → Shaken → Panicked`.
- Injuries: Light / Serious / Critical, maximum three active mechanical records for mobile readability.
- recovery channels remain distinct; there is no generic instant-heal potion economy.

Binding contract: `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`.

#### P3-HDG-004 / D-026 — Character creation

Character creation is a **veiled lifepath + free specialization hybrid**:

`ordinary human baseline → three fiction-first formative choices → deterministic Origin + Learned Practice → reveal → explicit specialization`

- mappings are initially hidden but thematically fair;
- resulting mechanics are revealed before confirmation;
- formative choices do not secretly modify core attributes;
- all seven attributes begin at `1`, then spend **4 explicit increases**, starting cap `3`;
- Learned Practice grants one trained Competence `+1`;
- choose one additional different trained Competence `+1`;
- ordinary creation does not begin at `+2` expertise;
- `fallen_head_house` / **몰락한 옛 수장가의 후예** is the baseline fallen-prestigious-house fantasy without inventing a mature feudal Kanto.

Binding contract: `docs/P3_CHARACTER_CREATION_CONTRACT.md`.

#### P3-HDG-005 / D-027 — Progression

Human progression uses **milestone-earned advancement + earned training/insight eligibility**.

There is no character level, kill-XP or use-count grinding. Initial permanent advancement costs are:

- new trained Competence `+0 → +1`: `1` point + matching eligibility;
- expert Competence `+1 → +2`: `2` points + expert eligibility;
- core Attribute `+1`: `3` points + major breakthrough eligibility, normal human cap `4`.

The normalized Competence catalog is:

`arms`, `hunting`, `wayfinding`, `foraging`, `medicine`, `smithing`, `crafting`, `fishing`, `recordkeeping`, `ritual`, `stealth`, `negotiation`.

There is no universal Pokémon taming/handling Competence and defeating Pokémon grants no universal XP.

Binding contract: `docs/P3_PROGRESSION_AND_COMPETENCE_CONTRACT.md`.

#### P3-HDG-006 / D-028 — Hybrid Load + pooled expedition resources

The owner selected **B — hybrid Load + pooled expedition resources**.

Inventory/economy therefore uses:

- individually represented weapons, armor, specialized tools, rare/specific materials, keepsakes, keys and other notable items;
- three compact pooled resources: **Provisions / Remedies / Materials**;
- small integer item/resource **Load** instead of kilogram simulation, slot grids or inventory Tetris;
- initial `Comfortable Load = 4 + Strength`;
- ordinary item/resource Load values `0–3`;
- carrying `1–2` above Comfortable Load creates contextual **Burdened** pressure rather than a universal stat penalty;
- ordinary travel beyond `Comfortable Load + 2` requires a transport/hauling solution or authored exceptional situation;
- adequate supplies interact with Fatigue, treatment, repair, preparation and Context through discrete event transitions, not continuous hunger/durability polling;
- equipment primarily changes fictional eligibility, Context, harm/Injury consequences and options rather than creating gear-score inflation;
- no default Kanto-wide standardized currency or universal money wallet;
- barter, gifts, favors, obligations, remembered debt, labor/service exchange and locality-specific exchange media are supported;
- a normalized internal trade-value reference may support deterministic balancing without becoming literal universal currency;
- Pokémon-derived materials remain species/context-sensitive and are never automatic generic loot;
- Load is recomputed only when load-relevant inventory state changes and should be cached rather than rescanned every render/frame.

Binding contract: `docs/P3_INVENTORY_RESOURCES_AND_ECONOMY_CONTRACT.md`.

#### P3-HDG-007 / D-029 — Rare foreshadowing + in-run psychic awakening

The owner selected a **B + C hybrid** and explicitly required psychic humans to remain rare.

The binding model is:

- standard character creation never grants usable psychic ability directly;
- a small minority of thematically appropriate formative histories may produce **Unusual Sign / foreshadowing** state, but this is not a power and does not guarantee awakening;
- actual psychic ability always requires an explicit rare authored **in-run awakening event**;
- characters without creation-time foreshadowing can still awaken through an exceptional transformative event, but that route is intentionally rarer and more demanding;
- initial tuning targets keep strong foreshadowing at roughly `<=10%` of ordinary creation histories/seeds and actual awakening at roughly `<=5%` of ordinary runs; these are player-run tuning targets, not lore census claims;
- an awakened ordinary player character has one narrow Gift family by default: Omen/Premonition, Mind Echo, Kinetic Touch, Dream Resonance, or Veil Sense;
- a family grants explicit facets/manifestations rather than an entire spell list;
- there is no `psychic` Competence, psychic Attribute, mana bar, or standard psychic class;
- psychic checks reuse the existing 2d6 engine and normally rely on Sense, Will, or Presence with psychic Competence contribution `+0`;
- powerful **Miracle exertion** is bounded by existing Fatigue/Fear/Vitality/Injury state rather than a new magic resource, with Fatigue normally increasing at least one stage for a forceful miracle attempt;
- Gifts primarily unlock authored choices, information, resistance, positioning, or rare miracle branches rather than universal combat attacks;
- Omen/Premonition does not grant universal rerolls or Fortune-Spike control;
- ordinary advancement points cannot create a Gift from `none`; after awakening, narrow facet growth requires Gift-specific eligibility and normally remains inside the existing family;
- ordinary multi-family psychic builds are not supported.

Binding contract: `docs/P3_RARE_PSYCHIC_GIFT_CONTRACT.md`.

### Exact next work

Decide whether P3 needs a separate **fate / roll-intervention resource** at all.

The decision must account for the systems already carrying uncertainty and dopamine:

- center-weighted 2d6 checks;
- setback / costly-partial / full / exceptional outcome bands;
- rare natural `6+6` Fortune Spikes and `1+1` Trouble Spikes;
- preparation, equipment and bounded Context;
- milestone/insight progression;
- rare Gift/Omen branches that explicitly do **not** provide universal rerolls.

The next slice should determine whether player-controlled roll intervention adds meaningful agency or merely dilutes danger, makes doubles farmable, and adds another state resource. If a resource is justified, its earning, storage cap, spend timing, deterministic replay semantics, doubles interaction and relationship to advancement/psychic Gifts must be frozen. If it is not justified, record the deliberate absence of universal rerolls and move directly to the P3 exit audit.

After that decision, run a **P3 exit audit** before entering P4.

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
