# Project Status

Last explanatory handoff update: **2026-08-16**

This file is the concise operational handoff. Durable product authority remains in `docs/DECISIONS.md` and the phase contracts; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like material baseline; Pokémon-dependent technology/culture remains narrow and evidence-backed.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid full run.
- Pokémon use fixed six-axis species baselines plus capability/hazard tags. Ordinary Pokémon do not scale with the player; exceptional individuals require explicit persistent history/traits.
- `p4-six-axis-v1` remains pinned. Hazard severity is not capped by species-axis ratings.
- Evolution is distinct from ordinary maturation; no kill-XP, visible character levels or generic evolution command.
- Mandatory P4 roster is National Pokédex #001-#151. D-034 requires all 151 to be directly encounterable somewhere in total content, while baseline-era natural presence remains a separate question.

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
```

## Current phase

**P4 — Pokémon adaptation + complete Gen-I 151 species dossiers (#5) is active.**

P4 exit requires 151/151 substantive reviewed dossiers. Do not begin P5 before that audit passes.

Current authoritative manifest state after Batch 18 and unchanged by Batch 19 selection/source review:

```text
dossier_complete_count == 135
pilot_reviewed_count == 2
not_started_count == 14
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

### P4 foundation

- D-031: fixed species baselines plus explicit individual variation; no player-level enemy scaling.
- `p4-six-axis-v1`: raw `<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`.
- D-032: modern level/trade evolution metadata is source context, not ancient progression law.
- D-033: Magneton remains one active entity / one visible companion slot.
- D-034: all #001-#151 require direct encounterability somewhere in total content, separate from baseline natural presence.

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
Batch 13   PASS
Batch 14   PASS
Batch 15   PASS
Batch 16   PASS
Batch 17   PASS
Batch 18   PASS
```

### P4 Batch 18 — COMPLETE

Roster:

- #125 Electabuzz
- #126 Magmar
- #138 Omanyte / #139 Omastar
- #142 Aerodactyl
- #143 Snorlax

Primary outputs:

- `docs/P4_BATCH_18_ANCIENT_CHRONOLOGY_ELEMENTAL_PHYSIOLOGY_PLAN.md`
- `docs/P4_BATCH_18_SOURCE_REVIEW.md`
- `docs/P4_BATCH_18_DOSSIER_125_ELECTABUZZ.md`
- `docs/P4_BATCH_18_DOSSIER_126_MAGMAR.md`
- `docs/P4_BATCH_18_DOSSIER_138_OMANYTE.md`
- `docs/P4_BATCH_18_DOSSIER_139_OMASTAR.md`
- `docs/P4_BATCH_18_DOSSIER_142_AERODACTYL.md`
- `docs/P4_BATCH_18_DOSSIER_143_SNORLAX.md`
- `docs/P4_BATCH_18_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_18_COMPLETION_AUDIT.md`

Completion conclusions:

- all six dossiers populate the 20 frozen-schema top-level sections with `dossier_status: complete` and zero blocking Human Design Gates;
- deterministic `p4-six-axis-v1` profiles reproduce with zero manual exceptions;
- Electabuzz charge/static/storm feeding remains discrete species-local physiology without continuous electrical fields, automatic paralysis, grids, batteries or energy markets;
- Magmar heat/flame/lava recovery remains authored exposure/recovery state without continuous thermodynamics, automatic ignition, total lava immunity or confirmed generic volcanic-birth cosmology;
- Omanyte/Omastar direct encounterability is satisfied by one exceptionally isolated project-authored marine relict locality with a tiny self-sustaining lineage, not ordinary abundance, restoration technology or time travel;
- Omastar restraint preserves warning, eligibility, counterplay, escape and player input; tentacles do not add turns, entities or health pools;
- Aerodactyl direct encounterability is satisfied by one exceptionally isolated aerial relict locality/lineage; `airborne` / `grounded` are discrete encounter states and do not create unrestricted traversal, automatic initiative or passenger fast travel;
- Snorlax appetite/sleep/resource pressure remains event-scoped; the extreme food claim does not create a continuous calorie/economy ledger and digestive resilience does not create universal toxin/disease immunity;
- all six remain one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot;
- later runtime may use cached/coarse state and event-triggered consequences; no continuous per-frame species simulation is required.

Deterministic profiles:

```text
Electabuzz 3/4/2/4/4/5
Magmar     3/4/2/5/4/4
Omanyte    1/2/5/4/2/1
Omastar    3/3/6/5/3/2
Aerodactyl 4/5/3/3/3/6
Snorlax    6/5/3/3/5/1
```

Completion validation:

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
manifest_promoted_species_count == 6
manifest_complete_count == 135
manifest_pilot_reviewed_count == 2
manifest_not_started_count == 14
```

### P4 Batch 19 — SOURCE REVIEW COMPLETE — full-schema authoring next

Roster:

- #086 Seel / #087 Dewgong
- #116 Horsea / #117 Seadra
- #118 Goldeen / #119 Seaking

Primary outputs so far:

- `docs/P4_BATCH_19_AQUATIC_LOCOMOTION_COLD_WATER_MORPHOLOGY_PLAN.md`
- `docs/P4_BATCH_19_SOURCE_REVIEW.md`

Source-review conclusions:

- current official pages and pinned `SRC-DATA-001` evidence were reviewed claim-by-claim rather than flattening observation, measurement, analogy/reputation, contextual ecology and historical/version-scoped extraordinary wording into universal rules;
- Seel cold-water/ice-bashing evidence supports localized ice interaction and meaningful water/land asymmetry, while historical breathing-hole evidence prevents assuming indefinite underwater breathing; numeric cold claims remain source-scale evidence rather than a temperature simulator;
- Dewgong cold adaptation, thermal-energy wording, day/night feeding and eight-knot swimming remain bounded species evidence rather than universal cold immunity, real-time schedule simulation or a turn/travel-speed formula;
- Horsea fin-driven escape, backward/multidirectional swimming, tail anchoring and ink remain ordinary-action, event-scoped capabilities rather than guaranteed flee, generic grapple, unrestricted traversal or automatic blindness/input loss;
- Seadra paternal care, toxic spines, severe historical contact wording, historical whirlpool claims and medicinal-resource value preserve warning/eligibility/counterplay and resource provenance without automatic poison/fainting, continuous fluid simulation, live-harvest normalization or a medicine economy;
- Goldeen five-knot swimming, horn use, seasonal migration and stronger historical glass-breaking/current wording remain source evidence without infinite stamina, generic material destruction, universal waterfall traversal or conversion of “Water Dancer/Water Queen” analogies into human institutions;
- Seaking autumn spawning, boulder nest construction and parental defense remain contextual ecology without continuous breeding/population simulation, universal drilling/mining, arbitrary terrain deletion or guaranteed hostility;
- modern ability semantics and later Kingdra/Dragon Scale context remain provenance rather than ancient battle formulas/items/progression law;
- all six remain one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot regardless of fins, tails, horns or spines;
- D-034 direct encounterability remains separate from commonness, ordinary companionship and baseline-era abundance;
- later runtime should prefer cached/coarse water, cold, current, nest, concealment and poison-eligibility state plus event-triggered consequences; no continuous per-frame fluid/temperature/oxygen/breeding/resource simulation is required;
- no new blocking Human Design Gate is required.

Deterministic profiles from pinned `SRC-DATA-001`:

```text
Seel     3/2/2/2/3/2
Dewgong  4/3/4/3/4/3
Horsea   1/2/3/3/1/3
Seadra   2/3/4/4/2/4
Goldeen  2/3/3/1/2/3
Seaking  4/4/3/3/4/3
```

Source-review validation:

```text
reviewed_species_count == 6
current_official_species_pages_verified == 6
pinned_species_records_reviewed == 6
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
source_claims_epistemically_scoped == true
water_traversal_global_rule_added == false
numeric_speed_runtime_formula_added == false
continuous_simulation_requirement_count == 0
automatic_poison_or_drowning_rule_added == false
biological_harvest_economy_added == false
breeding_simulator_added == false
terrain_mining_system_added == false
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

### Remaining P4 not-started roster

Source review does not promote coverage, so the authoritative manifest still lists all 14 rows as `not_started` until the later Batch 19 completion audit:

```text
#023 Ekans       #024 Arbok
#060 Poliwag     #061 Poliwhirl    #062 Poliwrath
#086 Seel        #087 Dewgong
#098 Krabby      #099 Kingler
#108 Lickitung
#116 Horsea      #117 Seadra
#118 Goldeen     #119 Seaking
```

If Batch 19 later completes and promotes exactly its six reviewed rows, the remaining `not_started` pool will be #023-#024, #060-#062, #098-#099 and #108.

## Exact next work

Author the six **P4 Batch 19 frozen full-schema dossiers**:

- `docs/P4_BATCH_19_DOSSIER_086_SEEL.md`
- `docs/P4_BATCH_19_DOSSIER_087_DEWGONG.md`
- `docs/P4_BATCH_19_DOSSIER_116_HORSEA.md`
- `docs/P4_BATCH_19_DOSSIER_117_SEADRA.md`
- `docs/P4_BATCH_19_DOSSIER_118_GOLDEEN.md`
- `docs/P4_BATCH_19_DOSSIER_119_SEAKING.md`

Then create:

- `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`
- `docs/P4_BATCH_19_COMPLETION_AUDIT.md`

The authoring/completion pass must:

1. populate all 20 frozen-schema top-level sections for each species with `dossier_status: complete` and no placeholder TODOs;
2. preserve the claim-level provenance and boundaries established by `docs/P4_BATCH_19_SOURCE_REVIEW.md`;
3. preserve one Pokémon = one ordinary turn / health state / initiative presence / visible companion slot regardless of fins, tails, horns or spines;
4. keep numeric swim/cold evidence out of direct turn/travel/thermodynamic formulas;
5. preserve warning, eligibility, counterplay, escape/avoidance and player input for water, poison, contact, concealment and nest-defense hazards;
6. keep D-034 direct encounterability separate from baseline abundance and ordinary companionship;
7. require no continuous fluid, temperature, oxygen, breeding, population or biological-resource simulation;
8. atomically promote exactly #086, #087, #116, #117, #118 and #119 in `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml` only after all six dossiers and the completion audit pass;
9. expect post-promotion coverage of `141 complete / 2 pilot_reviewed / 8 not_started` if every check passes;
10. do not begin P5 until the mandatory `151/151` P4 exit audit passes.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`
