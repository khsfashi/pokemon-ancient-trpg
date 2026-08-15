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

Current authoritative manifest state remains unchanged during Batch 12 source review:

```text
dossier_complete_count == 87
pilot_reviewed_count == 2
not_started_count == 62
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
```

Important batch contracts and audits remain in the corresponding `docs/P4_BATCH_*` files. The manifest is the machine-readable source of coverage truth.

### P4 Batch 11 — COMPLETE

Human-proximity / labor / culture / multi-limb action roster:

- #052 Meowth
- #053 Persian
- #058 Growlithe
- #059 Arcanine
- #066 Machop
- #067 Machoke
- #068 Machamp

Primary outputs:

- `docs/P4_BATCH_11_HUMAN_PROXIMITY_LABOR_CULTURE_PLAN.md`
- `docs/P4_BATCH_11_SOURCE_REVIEW.md`
- `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md` plus seven indexed species dossier documents
- `docs/P4_BATCH_11_COMPLETION_AUDIT.md`

Batch 11 validates these boundaries:

1. **Human affinity does not create trainer culture.** Growlithe may be unusually friendly and faithful to people, but relationship, companionship and slot accounting remain explicit and voluntary.
2. **Pet evidence establishes possibility, not prevalence.** Persian can have human-associated history without common ancient domestication, universal safe handling or ownership shortcuts.
3. **Old cultural evidence does not pin project chronology.** Arcanine's ancient picture-scroll evidence supports old human observation somewhere in official fiction, not this exact future-Kanto locality, polity or literacy/art infrastructure.
4. **Species-associated objects remain bounded.** Meowth's forehead coinlike feature does not establish minted currency or loot; Machoke's regulation belt is source-backed while maker, material, origin, replacement and safe removal remain unresolved.
5. **Value and appearance do not create harvesting systems.** Persian's admired fur does not become a pelt/drop economy.
6. **Self-training is not character leveling.** Machop can train without kill-XP, visible levels, repeatable stat grinding or player-scaled enemy growth.
7. **Extreme strength remains scene-specific.** Machop/Machoke heavy-object permissions do not create a `Force -> kg` or structure-damage formula.
8. **Four arms are not four turns.** Machamp's anatomy and extreme strike cadence are represented as bounded close-range multi-angle pressure, never one action per limb or one roll per strike.
9. **Mental pressure preserves player agency.** Arcanine's majestic bark can create awe/intimidation pressure but never hypnosis, domination or forced player action.
10. **Evolution-family facts do not auto-copy.** Human affinity, pet evidence, labor behavior, belts and multi-arm pressure stay species/stage specific.
11. **No new Human Design Gate was required.** All unresolved object provenance remains safe for later owning phases without blocking P5 consumption.

`docs/P4_BATCH_11_COMPLETION_AUDIT.md` = **PASS**.

`docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md` matches the authoritative Batch 11 state: `87 complete / 2 pilot_reviewed / 62 not_started`.

### P4 Batch 12 — SOURCE REVIEW COMPLETE

Foundational elemental anatomy / condition-signal / starter-meta stress roster:

- #001 Bulbasaur / #002 Ivysaur / #003 Venusaur
- #004 Charmander / #005 Charmeleon / #006 Charizard
- #007 Squirtle / #008 Wartortle / #009 Blastoise

Primary outputs so far:

- `docs/P4_BATCH_12_FOUNDATIONAL_ELEMENTAL_ANATOMY_PLAN.md`
- `docs/P4_BATCH_12_SOURCE_REVIEW.md`

Batch 12 source review validates these boundaries before full-schema authoring:

1. **Body-integrated anatomy is not equipment or loot.** Bulbasaur's seed, Ivysaur/Venusaur plant structures, Squirtle's shell and Blastoise's shell nozzles remain species anatomy/state rather than detachable inventory, armor, weapons or ordinary harvest resources.
2. **Condition signals remain qualitative.** Charmander's tail flame can reveal broad weakness/health state without exposing numeric HP, fixed thresholds, exact injury state or a universal instant-death switch.
3. **Modern low-HP abilities remain modern mechanic context.** Overgrow, Blaze and Torrent do not establish an ancient fixed-percentage physiology or automatic project damage multiplier.
4. **Environmental effects remain stage/species local.** Ivysaur/Venusaur sunlight relationships, Charmeleon ambient heat and Blastoise recoil behavior do not become generic Grass/Fire/Water formulas.
5. **Battle experience is not progression currency.** Charizard's hotter-flame-with-battle-history evidence can support explicit individual history/exceptional traits, not kill-XP, visible levels, repeatable stat grinding or player-scaled wild Pokémon.
6. **Maturation remains distinct from evolution.** Squirtle's shell hardening after birth is ordinary biological development, not an evolution event or equippable armor upgrade.
7. **Culture evidence is not domestication.** Wartortle's longevity symbolism/popularity among older people does not prove common ancient ownership, tail harvesting, lifespan transfer or a universal blessing mechanic.
8. **Analogy language does not advance human technology.** Blastoise's cannon/jet/rocket-like function describes Pokémon anatomy and force; it does not establish ancient human cannon, rocket, pressure-vessel or industrial-metallurgy infrastructure.
9. **Starter familiarity is not ancient ecology.** Modern starter-selection role does not authorize beginner distribution, guaranteed settlement presence, institutional breeding, routine companionship or baseline-era natural spawning.
10. **Evolution-family facts remain stage local.** Charmander condition signals, Charmeleon heat/aggression, Charizard flight/history, Squirtle maturation, Wartortle culture and Blastoise nozzles are not automatically copied across stages.
11. **Modern evolution levels remain metadata.** Pinned structured chains preserve 16/32 or 16/36 modern thresholds, but D-032 prevents importing those numbers as character levels or XP law.
12. **No new Human Design Gate is required.** Existing P2/P3/P4 contracts represent all reviewed uncertainties conservatively.

The coverage manifest remains unchanged during source review: `87 complete / 2 pilot_reviewed / 62 not_started`.

## Exact next work

Continue **P4 Batch 12 full-schema authoring** without entering P5:

1. author frozen-schema dossiers for all nine selected species;
2. preserve the source-reviewed anatomy/equipment, condition/HP, ability/physiology, sunlight/heat/progression, maturation/evolution, cultural/domestication, technology-analogy and starter-meta boundaries;
3. create the Batch 12 dossier index/regression summary;
4. run schema/provenance, P2/P3/P4 contradiction, stage-inheritance and cross-family regression checks;
5. create `docs/P4_BATCH_12_COMPLETION_AUDIT.md`;
6. promote exactly #001-#009 to `complete` only if all nine dossiers and the completion audit pass atomically;
7. refresh `docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md` only after successful promotion;
8. stop for owner input only if full authoring exposes a genuinely product-defining universal rule that existing contracts cannot represent conservatively.

Expected clean Batch 12 completion state:

```text
dossier_complete_count == 96
pilot_reviewed_count == 2
not_started_count == 53
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

Do not begin P5 before the mandatory P4 `151/151` exit audit passes.

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence, including D-034 chronology-anomaly/displacement paths where baseline presence is impossible.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
