# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 12 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 12 source review, nine-species full-schema authoring, regression review, completion audit and atomic promotion.

The manifest is authoritative; this document matches its current resolved state.

## Manifest resolution contract

`resolved_record = status_defaults[dossier_status] merged with species row`

Every resolved species record contains:

```text
national_dex
species_key
dossier_status
source_review_status
stat_profile_status
capability_hazard_status
ecology_status
threat_encounter_status
individual_variation_status
bond_status
narrative_hook_status
p6_followup_required
blocking_gate_refs
```

`authoring_batch` remains an allowed operational field. `pilot_reviewed` and `complete` rows require explicit `p6_followup_required`.

## Structural checks

```text
species_row_count == 151
national_dex_min == 1
national_dex_max == 151
national_dex_unique_count == 151
species_key_unique_count == 151
mandatory_species_ids == {1..151}
```

Result: **PASS**.

## Current status counts

After Batch 12 promotion:

```text
dossier_complete_count == 96
pilot_reviewed_count == 2
not_started_count == 53
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain unchanged:

- #131 Lapras
- #151 Mew

Result: **PASS**.

## Prior-batch continuity check

All 87 rows complete through Batch 11 remain complete. No earlier promotion was reverted while applying Batch 12.

Representative continuity anchors remain:

```text
013 weedle      complete B01-anchor
025 pikachu     complete B02-new
083 farfetchd   complete B03-new
082 magneton    complete B04-new
150 mewtwo      complete B05-new
128 tauros      complete B06-new
144 articuno    complete B07-new
120 staryu      complete B08-new
039 jigglypuff  complete B09-new
041 zubat       complete B10-new
068 machamp     complete B11-new
```

Result: **PASS**.

## Batch 12 promotion check

Only these nine previously `not_started` rows are newly promoted:

```text
001 bulbasaur  complete B12-new p6_followup_required=true
002 ivysaur    complete B12-new p6_followup_required=true
003 venusaur   complete B12-new p6_followup_required=true
004 charmander complete B12-new p6_followup_required=true
005 charmeleon complete B12-new p6_followup_required=true
006 charizard  complete B12-new p6_followup_required=true
007 squirtle   complete B12-new p6_followup_required=true
008 wartortle  complete B12-new p6_followup_required=true
009 blastoise  complete B12-new p6_followup_required=true
```

No unrelated species row changes status.

Result: **PASS**.

## Integrated anatomy / resource / equipment regression

```text
Bulbasaur_seed_is_body_integrated == true
Ivysaur_bud_is_body_integrated == true
Venusaur_flower_is_body_integrated == true
Squirtle_shell_is_body_integrated == true
Blastoise_nozzles_are_shell_integrated == true
integrated_anatomy_equals_equipment_or_inventory == false
integrated_anatomy_equals_generic_loot_or_safe_harvest == false
```

Result: **PASS**.

## Condition / modern-mechanic regression

```text
Charmander_tail_flame_broad_condition_signal == source_backed
Charmander_flame_equals_exact_HP_or_fixed_threshold == false
temporary_total_extinguishing_equals_automatic_instant_death == unresolved_not_assumed
Overgrow_Blaze_Torrent_low_HP_text == modern_mechanic_context
Overgrow_Blaze_Torrent_equals_ancient_fixed_threshold_or_damage_multiplier == false
```

Result: **PASS**.

## Environment / history / progression regression

```text
Ivysaur_sunlight_relationship == source_backed
Venusaur_solar_energy_and_summer_relationship == source_backed
Charmeleon_local_heat == source_backed
Charizard_flight_and_battle_history_relationship == source_backed
Grass_type_equals_generic_photosynthesis_weather_formula == false
Fire_type_equals_generic_heat_aura == false
battle_history_equals_kill_XP_visible_level_or_repeatable_stat_grind == false
ordinary_species_auto_scale_with_player == false
exceptional_individuals_use_explicit_history_traits_and_stat_deltas == true
```

Result: **PASS**.

## Maturation / culture / technology regression

```text
Squirtle_shell_hardening_equals_biological_maturation == true
Squirtle_shell_hardening_equals_evolution_or_armor_upgrade == false
Wartortle_longevity_symbolism_equals_human_lifespan_extension == false
Wartortle_popularity_equals_common_ancient_pet_ownership == false
Blastoise_nozzles_equal_detachable_weapon == false
cannon_jet_rocket_analogy_equals_human_technology_proof == false
human_cannon_rocket_pressure_vessel_industrial_metallurgy_imported == false
```

Result: **PASS**.

## Starter-meta / stage-inheritance regression

```text
modern_starter_role_equals_ancient_distribution_or_beginner_safety == false
modern_starter_role_equals_common_companionship_or_institutional_breeding == false
mandatory_dossier_coverage_equals_baseline_spawn_authorization == false
D034_direct_encounterability_somewhere_in_total_content_preserved == true
family_membership_equals_automatic_capability_inheritance == false
modern_evolution_levels_16_32_36_equal_character_level_or_kill_XP == false
```

Result: **PASS**.

## Companionship regression

```text
visible_companion_slots == 3
capture_equals_companionship == false
portable_containment == false
Bulbasaur_Ivysaur_Charmander_Charmeleon_Squirtle_Wartortle == eligible
Venusaur_Charizard_Blastoise == exceptional_only
eligible_equals_common_ownership_or_starter_availability == false
```

Result: **PASS**.

## P6 follow-up audit

All nine Batch 12 rows explicitly set `p6_followup_required: true`.

Primary follow-ups include:

- body-integration readability for Bulbasaur seed, Ivysaur bud, Venusaur flower, Squirtle shell and Blastoise nozzles without item/equipment affordances;
- qualitative Charmander tail-flame condition states without numeric HP or threshold presentation;
- sunlight/shade/season readability for Ivysaur and Venusaur without generic type-buff UI;
- Charmeleon heat and escalation readability without a rage meter;
- Charizard aerial scale, cover pressure and exceptional-history presentation without levels or elite affixes;
- Wartortle tail symbolism and waterline stalking without charm, pet or longevity-buff UI;
- Blastoise bracing, nozzle alignment and jet-line telegraph without weapon slots, ammo, pressure values or human-cannon iconography.

No P4 document chooses final asset provenance, style, bundling or mobile budgets.

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

P4 exit remains:

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
blocking_p4_gate_count == 0
```

## Verdict

```text
manifest_structure == PASS
prior_batch_continuity == PASS
Batch_12_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
integrated_anatomy_regression == PASS
condition_modern_mechanic_regression == PASS
environment_history_progression_regression == PASS
maturation_culture_technology_regression == PASS
starter_meta_stage_inheritance_regression == PASS
companionship_regression == PASS
blocking_p4_gate_count == 0
```

Batch 12 manifest promotion is complete. P4 remains active at `96 complete / 2 pilot_reviewed / 53 not_started`.
