# Project Status

Last explanatory handoff update: **2026-08-15**

This file is the concise human-readable operational handoff. Durable product authority remains in `docs/DECISIONS.md` and phase contracts. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current binding direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- first playable land is **future-Kanto territory before mature Kanto regional civilization exists**;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**, with narrow Pokémon-dependent technology/culture islands only where canon evidence and local practice justify them;
- humans and Pokémon are not integrated through normalized trainer culture, routine ownership, Poké Balls, PC storage, or portable containment;
- Pokémon companionship is rare and meaningful with exactly **three visible companion slots**, while `0/3` is a first-class complete run;
- the world uses **serious selective lethality**: injury, lasting impairment, Critical condition and death are real, but ordinary defeat or `0 Vitality` is not automatic death;
- ancient-world lore follows **official evidence → bounded interpretation → explicit project extrapolation**;
- contextual hunting/killing/material use is species- and culture-sensitive rather than generic loot logic;
- rare human psychics / miracle-workers exist, but standard characters do not begin with usable psychic power;
- Pokémon use a **separate six-axis species profile** plus capability/hazard tags rather than the human seven-Attribute model;
- ordinary Pokémon do **not** auto-scale with player growth; weak species can become genuinely routine later, while rare exceptional/named individuals can remain dangerous through explicit individual stats, traits, history and ecology;
- Pokémon **hazard severity is not capped by species stats**;
- P4 six-axis normalization is pinned as **`p4-six-axis-v1`**;
- Pokémon evolution is species-specific persistent transformation distinct from ordinary growth/maturation; no kill-XP, visible level meter or generic `Evolve` command is assumed;
- mandatory design roster is National Pokédex **#001-#151**, all 151 species;
- **mandatory dossier coverage does not imply baseline-era spawn authorization**;
- **D-034 requires all 151 mandatory species to be directly encounterable somewhere in total game content**, with chronology-anomaly/displacement paths where baseline-era presence is unsupported;
- the opening playable scope remains one bounded settlement-centered locality plus surrounding routes/ecologies.

## Completed phases

### P0 — Governance (#1) — COMPLETE

Autonomous continuation protocol, roadmap, decision log and Human Design Gate rules are established. Primary operational entry point: `AGENTS.md`.

### P1 — Reference/API/data/resource/IP research (#2) — COMPLETE

Closed via PR #18. Primary outputs include `docs/SOURCE_REGISTRY.md`, `docs/FAN_PROJECT_ENFORCEMENT_CASES.md`, `docs/P1_RESOURCE_ECOSYSTEM_RECON.md`, and `docs/REFERENCE_PROTOCOL.md`. Final production asset selection remains deferred to P6.

### P2 — World bible and setting contract (#3) — COMPLETE

`docs/P2_EXIT_AUDIT.md` = **PASS**. Primary contract: `docs/WORLD_BIBLE.md`.

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

Current authoritative manifest state after Batch 12:

```text
dossier_complete_count == 96
pilot_reviewed_count == 2
not_started_count == 53
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two remaining `pilot_reviewed` species are #131 Lapras and #151 Mew.

### P4 shared foundation — COMPLETE

- **D-031:** fixed species baselines plus explicit individual variation. Ratings are `Vigor / Force / Guard / Potency / Resistance / Speed`; no player-level enemy scaling; rare exceptional/named individuals use explicit persistent traits/history rather than generic elite affixes.
- **`p4-six-axis-v1`:** raw `<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`.
- **D-032:** evolution is separate from maturation; modern level/trade metadata is source context rather than ancient kill-XP law.
- **D-033 / P4-HDG-003:** Magneton is one active entity / one visible companion slot while three contributing Magnemite histories remain persistent provenance.
- **D-034:** all #001-#151 must have direct encounterability somewhere in total content, separate from baseline-era natural presence.

### P4 completed dossier work

```text
Pilot      PASS
Batch 01   PASS
Batch 02   PASS
Batch 03   PASS
Batch 04   PASS
Batch 05   PASS
Batch 06   PASS
Batch 07   PASS
Batch 08   PASS
Batch 09   PASS
Batch 10   PASS
Batch 11   PASS
Batch 12   PASS
```

Important batch contracts and audits remain in the corresponding `docs/P4_BATCH_*` files. The manifest is the machine-readable source of coverage truth.

### P4 Batch 12 — COMPLETE

Foundational elemental anatomy / condition-signal / starter-meta stress roster:

- #001 Bulbasaur / #002 Ivysaur / #003 Venusaur
- #004 Charmander / #005 Charmeleon / #006 Charizard
- #007 Squirtle / #008 Wartortle / #009 Blastoise

Primary outputs:

- `docs/P4_BATCH_12_FOUNDATIONAL_ELEMENTAL_ANATOMY_PLAN.md`
- `docs/P4_BATCH_12_SOURCE_REVIEW.md`
- `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md` plus nine indexed species dossier documents
- `docs/P4_BATCH_12_COMPLETION_AUDIT.md`

Batch 12 validates these boundaries:

1. **Integrated anatomy is not equipment, inventory or loot.** Bulbasaur's seed, Ivysaur's bud, Venusaur's flower, Squirtle's shell and Blastoise's nozzles remain body-integrated species anatomy/state.
2. **Charmander's tail flame is qualitative condition information, not HP UI.** It can communicate broad weakness/health without exact values, fixed thresholds or guaranteed death prediction.
3. **Overgrow, Blaze and Torrent remain modern mechanic context.** They do not create ancient fixed-percentage physiology or automatic project damage multipliers.
4. **Sunlight, season and local heat remain species/stage local.** Ivysaur/Venusaur and Charmeleon do not create generic Grass/Fire environmental formulas.
5. **Charizard battle history supports explicit individual variation, not progression currency.** Veteran individuals may be exceptional through persistent history/traits, never kill-XP, visible levels, repeatable stat grinding or player scaling.
6. **Squirtle shell hardening is maturation, not evolution or an armor upgrade.** Human smithing/repair rules are not inferred from biological shell state.
7. **Wartortle longevity symbolism is culture, not magic or domestication.** Popularity among older people does not prove lifespan transfer, tail harvesting, common ownership or a care institution.
8. **Blastoise weapon analogies do not advance human technology.** Cannon/jet/rocket-like wording describes anatomy and force, not ancient cannon, rockets, pressure vessels or industrial metallurgy.
9. **Modern starter familiarity does not authorize ancient distribution.** The three families are not automatically beginner-safe, institutionally bred, settlement-common or routine companions.
10. **Evolution-family facts remain stage-local.** Condition signals, heat, flight, maturation, symbolism and nozzles do not auto-copy across related stages.
11. **Threat progression remains compatible with the RPG direction.** Ordinary low-tier species may become routine later; exceptional unevolved individuals may still become boss-grade through explicit authored profiles.
12. **No new Human Design Gate was required.** Existing P2/P3/P4 contracts represent all reviewed uncertainties conservatively.

`docs/P4_BATCH_12_COMPLETION_AUDIT.md` = **PASS**.

`docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md` matches the authoritative Batch 12 state: `96 complete / 2 pilot_reviewed / 53 not_started`.

### P4 Batch 13 — SOURCE REVIEW COMPLETE

Aerial ecology / territoriality / traversal / multi-head control stress roster:

- #016 Pidgey / #017 Pidgeotto / #018 Pidgeot
- #021 Spearow / #022 Fearow
- #084 Doduo / #085 Dodrio

Primary outputs so far:

- `docs/P4_BATCH_13_AERIAL_ECOLOGY_TERRITORIALITY_MULTIHEAD_PLAN.md`
- `docs/P4_BATCH_13_SOURCE_REVIEW.md`

The source review validates these boundaries before full-schema authoring:

1. **Flying type is not a universal traversal permission.** Spearow has explicit long-distance flight limits; Doduo is primarily a fast ground runner with poor/difficult flight; Fearow has explicit sustained/all-day flight evidence. Flight distance/endurance must remain species-local.
2. **Six-axis Speed is not literal travel velocity.** The strongest regression is Dodrio: its normalized Speed rating is `5` versus Doduo `3`, while current official species text says Dodrio cannot run as fast as Doduo but can run for longer stretches.
3. **Navigation and patrol are not omniscience.** Pidgey nest-homing, Pidgeotto aerial patrol, Pidgeotto/Pidgeot prey vision and Fearow search behavior do not grant arbitrary routefinding, map revelation, perfect detection or stealth immunity.
4. **Historical extreme-speed claims remain source facts without becoming a physics engine.** Pidgeot's version-tagged Mach-2 wording is retained, but it does not define per-round distance, real-world kinetic-energy damage, automatic initiative or map travel time.
5. **Territoriality and theft remain authored encounter behavior.** Pidgeotto/Spearow/Fearow pressure is context-driven; Fearow food-snatching cannot silently delete inventory or infer hidden item knowledge.
6. **Multiple heads/organs do not multiply entity resources.** Doduo and Dodrio each remain one Pokémon/entity, one ordinary initiative/turn, one visible companion slot if applicable and one health/injury entity. Synchronization, lookout rotation, redundant organs and head leadership remain anatomy/behavior state.
7. **Doduo between-head telepathy remains internal and species-local.** It does not create external mind reading, truth detection, Psychic typing or a generic psychic subsystem.
8. **Modern abilities/evolution/held-item tables remain context.** `Keen Eye`, `Tangled Feet`, `Run Away`, `Early Bird`, hidden abilities, modern level thresholds and `Sharp Beak` held-item data do not become literal ancient guarantees, percentages, loot or institutions.
9. **No new Human Design Gate was required.** Existing P2/P3/P4 contracts represent all reviewed pressures conservatively.

`docs/P4_BATCH_13_SOURCE_REVIEW.md` = **READY FOR FULL-SCHEMA AUTHORING**.

The coverage manifest is intentionally unchanged at `96 complete / 2 pilot_reviewed / 53 not_started` until full-schema authoring + Batch 13 completion audit pass atomically.

## Exact next work

Continue **P4 Batch 13** without entering P5:

1. author seven frozen-schema dossiers for #016-#018, #021-#022 and #084-#085 from the reviewed claim packets;
2. reproduce the seven `p4-six-axis-v1` profiles with no manual exceptions and keep literal traversal/perception separate from the Speed axis;
3. preserve version-scoped evidence for Pidgeot Mach-2/altitude/gust claims, Pidgeotto long-distance prey carrying, Fearow flight endurance, Doduo high ground speed/internal telepathy and Dodrio multi-organ/head-control claims;
4. keep navigation, territory, detection, theft and multi-head behavior event-driven rather than deterministic player-state mutation or multiplied action economy;
5. preserve modern abilities, held items and level evolution thresholds as source context rather than ancient fixed mechanics;
6. run source/provenance, frozen-schema, P2/P3/P4 contradiction, evolution-family and cross-species regression checks;
7. create the Batch 13 completion audit and promote exactly these seven manifest rows atomically only if the audit passes, yielding expected state `103 complete / 2 pilot_reviewed / 46 not_started`;
8. keep D-034 direct encounterability separate from baseline-era natural presence;
9. do not begin P5 until the mandatory P4 `151/151` exit audit passes.

Current authoritative state remains:

```text
dossier_complete_count == 96
pilot_reviewed_count == 2
not_started_count == 53
blocking_p4_gate_count == 0
```

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence, including D-034 chronology-anomaly/displacement paths where baseline presence is impossible.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
