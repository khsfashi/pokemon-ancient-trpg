# Project Status

Last explanatory handoff update: **2026-08-15**

This file is the concise human-readable operational handoff. Durable product authority remains in `docs/DECISIONS.md` and phase contracts. Live GitHub PR/issue/CI state wins when this file becomes stale.

## Project direction

Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.

Current binding direction:

- setting is intentionally **earlier than the Hisui-era precedent**;
- first playable land is **future-Kanto territory before mature Kanto regional civilization exists**;
- ordinary material culture has an **iron-age / medieval-fantasy-like baseline**, with narrow Pokémon-dependent technology islands only where canon evidence and local practice justify them;
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

Current authoritative manifest state after Batch 10:

```text
dossier_complete_count == 80
pilot_reviewed_count == 2
not_started_count == 69
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
```

Important batch contracts and audits remain in the corresponding `docs/P4_BATCH_*` files. The manifest is the machine-readable source of coverage truth.

### P4 Batch 08 — COMPLETE

Biological-resource / remains / regeneration roster: #104 Cubone, #105 Marowak, #113 Chansey, #114 Tangela, #120 Staryu, #121 Starmie.

Key validated boundaries: no generic corpse loot; renewable biological resources require species-specific evidence; regeneration is separate from death and stats; commercial value does not imply safe extraction; held-item metadata is not biological provenance.

### P4 Batch 09 — COMPLETE

Mind-state / agency / exposure-route / traversal roster: #039 Jigglypuff, #040 Wigglytuff, #048 Venonat, #049 Venomoth, #054 Psyduck, #055 Golduck, #096 Drowzee, #097 Hypno.

Key validated boundaries: drowsiness/sleep/hypnosis remain distinct; dream access is not omniscient mind reading; hypnosis is not arbitrary domination; toxin delivery remains species-specific; Psyduck's manifestation is involuntary but bounded; Golduck traversal permission is separate from normalized Speed.

### P4 Batch 10 — COMPLETE

Terrain / temperature / sensory / aquatic-physiology roster:

- #041 Zubat
- #042 Golbat
- #072 Tentacool
- #073 Tentacruel
- #077 Ponyta
- #078 Rapidash
- #111 Rhyhorn
- #112 Rhydon

Primary outputs:

- `docs/P4_BATCH_10_TERRAIN_TEMPERATURE_SENSORY_AQUATIC_PLAN.md`
- `docs/P4_BATCH_10_SOURCE_REVIEW.md`
- `docs/P4_BATCH_10_FULL_SCHEMA_DOSSIERS.md` plus its eight indexed species dossier documents
- `docs/P4_BATCH_10_COMPLETION_AUDIT.md`

Batch 10 validates these boundaries:

1. **Nonvisual sensory navigation remains species-local.** Zubat's sound-wave survey does not become a Flying-type or Speed-derived radar system.
2. **Capability loss can be state-driven without stat mutation.** Golbat overfeeding can remove flight permission without changing its six-axis baseline.
3. **Water typing does not grant amphibious safety.** Tentacool low-tide stranding/dehydration remains species physiology, not a generic Water-Pokémon system.
4. **Tentacruel separates restraint from venom exposure.** Eighty tentacles do not create eighty actions; outbreak state is event/ecology pressure rather than a permanent biome rule.
5. **Ponyta's safe fiery contact is narrow and acceptance-gated.** It does not grant generic Fire immunity, attack immunity or automatic riding permission.
6. **Rapidash has extreme overland capability without a travel/mount formula.** Canon speed/travel evidence is permission evidence, not exact project map timing or rider capacity.
7. **Rhyhorn charge remains dangerous despite low normalized Speed.** Poor turning/stopping and boulder-breaking are species-local trajectory/terrain permissions, not a Force-derived structure-damage table.
8. **Rhydon has species-local bedrock/steep-terrain/lava-heat permissions.** They do not imply Ground/Rock type immunity, safe lava immersion or human-safe following.
9. **Evolution-family capabilities do not auto-copy between stages.** Crobat, Galarian Ponyta/Rapidash and Rhyperior remain later-generation context only.
10. **No new Human Design Gate was required.** Batch 10 closes with zero blocking P4 gates.

`docs/P4_BATCH_10_COMPLETION_AUDIT.md` = **PASS**.

`docs/P4_SPECIES_COVERAGE_MANIFEST_AUDIT.md` matches the authoritative Batch 10 state: `80 complete / 2 pilot_reviewed / 69 not_started`.

## Exact next work

Start **P4 Batch 11** without entering P5:

1. select a coherent stress-test roster from the remaining 69 `not_started` Gen-I species;
2. create the Batch 11 plan and perform official/structured source review;
3. record unresolved evidence conservatively and stop for a Human Design Gate only if a genuinely product-defining ambiguity appears;
4. do **not** promote any Batch 11 manifest rows until their full-schema dossiers and completion audit pass atomically.

The next continuation request should begin at **Batch 11 roster selection + source review**, not repeat Batch 10 work.

## Later mandatory contracts

- **P5 / #6:** deterministic seeded narrative event-engine contract consuming P2-P4 state/rules.
- **P6 / #12:** exact production resource/asset/provenance/mobile-budget contract.
- **P7 / #7:** technical architecture after P1-P6 contracts are stable.
- **P8 / #8:** first playable mobile vertical slice.
- **P9 / #9:** replayable expansion + `151/151` meaningful authored gameplay presence, including D-034 chronology-anomaly/displacement paths where baseline presence is impossible.
- **P10 / #10:** release/mobile delivery hygiene and optional Android packaging.

## Core roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
