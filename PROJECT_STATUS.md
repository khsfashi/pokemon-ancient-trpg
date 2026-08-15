# Project Status

Last explanatory handoff update: **2026-08-15**

This file is the concise human-readable operational handoff. Durable product authority remains in `docs/DECISIONS.md` and phase contracts. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current binding direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- first playable land is **future-Kanto territory before mature Kanto regional civilization exists**;
- people identify primarily with local villages/clans/places rather than a regional Kanto state;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**, with narrow Pokémon-dependent technology islands only where canon evidence and local practice justify them;
- humans and Pokémon are not integrated through normalized trainer culture, routine ownership, Poké Balls, PC storage, or portable containment;
- Pokémon companionship is rare and meaningful with exactly **three visible companion slots**, while `0/3` is a first-class complete run;
- the world uses **serious selective lethality**: injury, lasting impairment, Critical condition and death are real, but ordinary defeat or `0 Vitality` is not automatic death;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- species identification is knowledge-dependent: descriptive/local labels may precede stable official species identity;
- contextual hunting/killing/material use is species- and culture-sensitive rather than generic loot logic;
- body-derived value does **not** imply a generic corpse drop, safe extraction, ownership, harvest action or renewable resource; resource semantics are species- and state-specific;
- rare human psychics / miracle-workers exist, but standard characters do not begin with usable psychic power; actual Gifts require rare authored awakening and ordinarily remain one narrow family;
- Pokémon use a **separate six-axis species profile** plus capability/hazard tags rather than the human seven-Attribute model;
- ordinary Pokémon do **not** auto-scale with player growth; weak species can become genuinely routine later, while rare exceptional/named individuals can remain dangerous through explicit individual stats, traits, history and ecology;
- Pokémon **hazard severity is not capped by species stats**;
- P4 six-axis normalization is pinned as **`p4-six-axis-v1`**, a deterministic 1..6 scale derived from preserved raw canonical base stats;
- Pokémon evolution is a species-specific persistent transformation distinct from ordinary growth/maturation; no kill-XP, visible level meter or generic `Evolve` command is assumed;
- multi-origin Magneton evolution uses **D-033**: one active Magneton entity / one visible companion slot with three contributor histories retained; literal brain/soul anatomy remains unresolved;
- mandatory design roster is National Pokédex **#001-#151**, all 151 species;
- **mandatory dossier coverage does not imply baseline-era spawn authorization**; unsupported or noncontemporaneous species may have complete dossiers with explicit `unknown` / `not_applicable_baseline` ancient fields;
- **D-034 requires all 151 mandatory species to be directly encounterable somewhere in total game content**; baseline-era natural presence remains separate, and noncontemporaneous species require rare authored chronology-anomaly/displacement paths rather than routine ancient spawns;
- the opening playable scope remains one bounded settlement-centered locality plus surrounding routes/ecologies.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous continuation protocol, roadmap, decision log and Human Design Gate rules are established. Primary operational entry point: `AGENTS.md`.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

Closed via PR #18. Primary outputs include `docs/SOURCE_REGISTRY.md`, `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`, `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`, and `docs/REFERENCE_PROTOCOL.md`. Final production asset selection remains deferred to P6.

### P2 — World bible and setting contract (#3) — COMPLETE

`docs/P2_EXIT_AUDIT.md` = **PASS**. Primary contract: `docs/WORLD_BIBLE.md`. D-012 through D-022 are binding; D-016 remains provisional only in its universal historical wording because P4 handles ancient strength species by species.

### P3 — Core TRPG rules and character model (#4) — COMPLETE

`docs/P3_EXIT_AUDIT.md` = **PASS**.

```text
human_attributes == 7
check_formula == 2d6 + Attribute + Competence + Context
character_levels == false
kill_XP == false
portable_Pokemon_containment == false
visible_companion_slots == 3
zero_companion_run_valid == true
fate_or_reroll_currency == false
```

Primary contracts are the `docs/P3_*_CONTRACT.md` files covering attributes, dice/checks, health/injury, creation, progression, inventory/economy, rare psychic Gifts, and emergency consumables.

## Current phase

**P4 — Pokémon adaptation + complete Gen-I 151 species dossiers (#5) is active.**

P4 exit requires **151/151 substantive reviewed dossiers**. Do not begin P5 before that audit passes.

Authoritative shared inputs:

- `docs/GEN1_SPECIES_COVERAGE_PLAN.md`
- `docs/P4_POKEMON_DOMAIN_CONTRACT.md`
- `docs/P4_SPECIES_DOSSIER_SCHEMA.md`
- `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`
- `docs/P4_RATING_SCALE_CALIBRATION.md`
- `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`
- `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`
- `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md`

Current manifest state after Batch 09:

```text
dossier_complete_count == 72
pilot_reviewed_count == 2
not_started_count == 77
draft_count == 0
blocking_p4_gate_count == 0
```

The two remaining `pilot_reviewed` species are #131 Lapras and #151 Mew.

### P4 shared foundation — COMPLETE

**D-031** establishes fixed species baselines plus explicit individual variation: `Vigor / Force / Guard / Potency / Resistance / Speed`; raw canonical stats remain preserved; capability/hazard tags cover non-rating properties; no player-level enemy scaling; rare named/apex individuals may use explicit deltas, capabilities, learned behavior and history; generic `elite +HP` affixes are forbidden.

Pinned normalization:

```text
raw <40     => 1
40..59      => 2
60..79      => 3
80..99      => 4
100..119    => 5
>=120       => 6
```

**D-032** separates evolution from maturation: same-species age/experience/scars/learning are development; evolution changes canonical species stage and may change stats/capabilities/ecology/logistics; persistent history/bond survives; modern level/trade metadata is source context rather than ancient kill-XP law; unsupported exact ancient triggers remain `unknown`.

**D-033 / P4-HDG-003** establishes the Magneton many-to-one exception: three contributing Magnemite may form one active Magneton entity occupying one visible companion slot; contributor names/bonds/learned behavior/injuries where meaningful/event history remain queryable provenance; literal brain/soul count and generic splitting remain unresolved. Binding contract: `docs/P4_MAGNETON_COMPOSITE_IDENTITY_CONTRACT.md`.

### P4 pilot — COMPLETE

Pilot species: #019 Rattata, #013 Weedle, #015 Beedrill, #131 Lapras, #130 Gyarados, #092 Gastly, #140 Kabuto, #151 Mew. `docs/P4_PILOT_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 01 — COMPLETE

Completed #014 Kakuna, #020 Raticate, #093 Haunter, #094 Gengar, #129 Magikarp and #141 Kabutops; six pilot anchors were also promoted to complete. `docs/P4_BATCH_01_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 02 — COMPLETE

Completed #010 Caterpie, #011 Metapod, #012 Butterfree, #025 Pikachu, #026 Raichu, #063 Abra, #064 Kadabra and #065 Alakazam. Validated metamorphosis, physical evolution-stone relationships and modern level/trade metadata without kill-XP or an ancient trade institution. `docs/P4_BATCH_02_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 03 — COMPLETE

Completed #083 Farfetch'd, #102 Exeggcute, #103 Exeggutor, #132 Ditto, #133 Eevee, #134 Vaporeon, #135 Jolteon and #136 Flareon. Validated branching evolution, transformation distinct from evolution, multi-head/multi-will single-entity semantics and species-specific carried-tool behavior. `docs/P4_BATCH_03_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 04 — COMPLETE

Completed #046 Paras, #047 Parasect, #079 Slowpoke, #080 Slowbro, #081 Magnemite, #082 Magneton, #090 Shellder and #091 Cloyster. Validated host/parasite control, source-backed reversible evolution, participant-species versus own-family semantics and D-033 multi-origin composite persistence. `docs/P4_BATCH_04_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 05 — COMPLETE

Completed #088 Grimer, #089 Muk, #100 Voltorb, #101 Electrode, #109 Koffing, #110 Weezing, #137 Porygon and #150 Mewtwo. Validated chronology-safe dossiers for noncontemporaneous/artificial species, preindustrial hazard extrapolation, original-form requirements and stat-independent hazards. `docs/P4_BATCH_05_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 06 — COMPLETE

Completed #029 Nidoran♀, #030 Nidorina, #031 Nidoqueen, #032 Nidoran♂, #033 Nidorino, #034 Nidoking, #115 Kangaskhan and #128 Tauros.

Validated separate Nidoran species/chains without a breeding simulator; species-local family/young encounter state without generic morale/parent bonuses; one-entity Kangaskhan with dependent-child state; explicit scarred Tauros herd protectors without hidden stat bonuses; infrastructure comparisons without infrastructure backfill; and stat-independent poison/charge/collision hazards.

`docs/P4_BATCH_06_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 07 — COMPLETE

Completed #144 Articuno, #145 Zapdos, #146 Moltres, #147 Dratini, #148 Dragonair and #149 Dragonite.

Validated legendary rarity without unsupported singleton cardinality; D-034 direct encounterability through rare authored events rather than routine spawning; environmental permissions separate from six-axis ratings; event-scoped weather changes; Dragonite traversal capability separate from normalized Speed; and Dratini-family evolution/maturation without kill-XP.

`docs/P4_BATCH_07_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 08 — COMPLETE

Completed biological-resource / remains / regeneration stress roster:

- #104 Cubone
- #105 Marowak
- #113 Chansey
- #114 Tangela
- #120 Staryu
- #121 Starmie

Primary outputs:

- `docs/P4_BATCH_08_BIOLOGICAL_RESOURCES_REMAINS_REGENERATION_PLAN.md`
- `docs/P4_BATCH_08_SOURCE_REVIEW.md`
- `docs/P4_BATCH_08_FULL_SCHEMA_DOSSIERS.md` plus its six indexed species dossier documents
- `docs/P4_BATCH_08_COMPLETION_AUDIT.md`

Batch 08 validates these boundaries:

1. **Body-derived value does not create a generic loot rule.** Cubone's maternal skull is identity-bound remains, Marowak's carried bone is a weapon/communication object with unproven harvest origin, and neither becomes a guaranteed corpse drop.
2. **Renewable biological resources require species-specific evidence.** Chansey eggs use explicit voluntary sharing semantics; Tangela vines are the positive control for painless detachment, next-day regrowth and culinary use. Neither creates a generic farming/harvesting subsystem.
3. **Regeneration remains separate from injury/death and stat normalization.** Staryu can restore major injury over roughly half a day, but this does not create immortality, death reversal, combat auto-healing or Vigor/Guard bonuses.
4. **Commercial value does not imply safe extraction.** Starmie's core has value/exploitation evidence, while safe removal, survivability and regrowth remain `unknown`; no ancient black-market infrastructure or exact price is backfilled.
5. **Modern structured `held_items` metadata stays in its own domain.** Thick Club, Lucky Egg, Stardust/Star Piece metadata is not reinterpreted as biological provenance or an ancient drop table.
6. **Later-generation family/form context does not expand the mandatory roster.** Happiny, Blissey, Tangrowth and Alolan Marowak remain context only.
7. **No new Human Design Gate was required.** Existing P2/P3/P4 injury, ethics, economy and species-local resource rules close all six dossiers conservatively.

`docs/P4_BATCH_08_COMPLETION_AUDIT.md` = **PASS**.

### P4 Batch 09 — COMPLETE

Completed mind-state / agency / exposure-hazard / traversal stress roster:

- #039 Jigglypuff
- #040 Wigglytuff
- #048 Venonat
- #049 Venomoth
- #054 Psyduck
- #055 Golduck
- #096 Drowzee
- #097 Hypno

Primary outputs:

- `docs/P4_BATCH_09_MIND_STATE_AGENCY_HAZARDS_PLAN.md`
- `docs/P4_BATCH_09_SOURCE_REVIEW.md`
- `docs/P4_BATCH_09_FULL_SCHEMA_DOSSIERS.md` plus its eight indexed species dossier documents
- `docs/P4_BATCH_09_COMPLETION_AUDIT.md`

Batch 09 validates these boundaries:

1. **Drowsiness, induced sleep and hypnosis remain distinct.** Sleep can temporarily remove ordinary conscious action, but no failed mental check silently hands player-character action selection to the GM or engine.
2. **Dream access is not omniscient mind reading.** Drowzee's reviewed permission is sleep-bound subjective dream sensing/consumption; waking thought reading, objective truth detection, hidden-state inspection and automatic memory theft remain unsupported.
3. **Hypnosis is not arbitrary domination.** Hypno uses visible pendulum/gaze exposure with drowsiness or bounded hypnosis pressure; no generic command, personality rewrite or persistent domination subsystem is introduced.
4. **Evolution-family membership does not auto-copy hazards.** Jigglypuff's auditory sleep claim is not automatically cloned into Wigglytuff; Psyduck's headache-triggered involuntary manifestation is not automatically cloned into Golduck; each stage is authored from stage-local evidence.
5. **Toxin delivery routes stay species-specific.** Venonat uses body-surface/contact toxin semantics while Venomoth supports dispersed toxic scales/powder; neither creates a universal Poison-type delivery rule.
6. **Psyduck's psychic manifestation is involuntary but bounded.** Headache/distress can trigger an episode and Psyduck may not remember it afterward, but there is no unrestricted random psychic-catastrophe table and no automatic target amnesia.
7. **Golduck proves explicit traversal permission distinct from normalized Speed.** Rough-water/high-wave swimming is a species capability; it does not create `Speed = Swim`, make the human route safe, or backfill navigation technology from forehead glow.
8. **No new Human Design Gate was required.** Existing P3 agency/Will/pressure and P4 hazard/exposure rules represent the batch conservatively.

`docs/P4_BATCH_09_COMPLETION_AUDIT.md` = **PASS**.

`docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md` now matches the authoritative Batch 09 state: `72 complete / 2 pilot_reviewed / 77 not_started`.

### P4 Batch 10 — SELECTED

Selected terrain / temperature / sensory / aquatic-physiology stress roster:

- #041 Zubat
- #042 Golbat
- #072 Tentacool
- #073 Tentacruel
- #077 Ponyta
- #078 Rapidash
- #111 Rhyhorn
- #112 Rhydon

Primary selection contract: `docs/P4_BATCH_10_TERRAIN_TEMPERATURE_SENSORY_AQUATIC_PLAN.md`.

Selection targets four underrepresented boundaries without changing the coverage manifest yet:

1. **Nonvisual sensory navigation and state-dependent flight** — Zubat's ultrasonic navigation/blindness and Golbat's feeding/body-state effects on flight must remain capabilities/constraints rather than hidden `Speed` rules.
2. **Aquatic physiology and shoreline exposure** — Tentacool's low-tide desiccation and Tentacruel's venomous restraint/outbreak ecology prevent `Water type = amphibious safety` from becoming a universal assumption.
3. **Heat/contact semantics and overland logistics** — Ponyta's acceptance-gated safe fiery contact and Rapidash's extreme overland speed/herd leadership must not become `bond = hazard immunity` or `Speed = mount travel` formulas.
4. **Collision, terrain breach and volcanic tolerance** — Rhyhorn/Rhydon test turning/stopping constraints, boulder/bedrock interaction, steep terrain and lava-heat tolerance as species-local permissions/hazards independent from flat Force/Potency ratings.

No new Human Design Gate is required for selection. Later-generation Crobat, Galarian Ponyta/Rapidash and Rhyperior remain provenance context only.

## Exact next work

Create **P4 Batch 10 source review** for #041 Zubat, #042 Golbat, #072 Tentacool, #073 Tentacruel, #077 Ponyta, #078 Rapidash, #111 Rhyhorn and #112 Rhydon.

The source review must establish evidence-backed boundaries for ultrasonic navigation/blindness, sunlight exposure, feeding-driven flight loss, shoreline dehydration, extendible venomous restraint, acceptance-gated fiery contact, extreme overland travel, collision-driven terrain breach, bedrock boring and volcanic/lava-heat tolerance.

Do **not** create universal mount, terrain-destruction, amphibious-respiration, type-based environmental-immunity, or `rating = traversal permission` systems. Do not promote the Batch 10 manifest rows until source review, full-schema dossiers and completion audit pass. Do not begin P5.

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules, including emergency-item reaction windows and valid `0/3` companion runs.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence, including D-034 chronology-anomaly/displacement paths where baseline presence is impossible.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`