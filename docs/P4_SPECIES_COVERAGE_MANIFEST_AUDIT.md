# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 17 promoted**  
Date: **2026-08-16**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 17 source review, six-species full-schema authoring, regression review, completion audit and atomic promotion.

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

```text
dossier_complete_count == 129
pilot_reviewed_count == 2
not_started_count == 20
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

Result: **PASS**.

## Prior-batch continuity check

All 123 rows complete through Batch 16 remain complete. No earlier promotion was reverted.

Result: **PASS**.

## Batch 17 promotion check

Only these six previously `not_started` rows are newly promoted:

```text
056 mankey     complete B17-new p6_followup_required=true
057 primeape   complete B17-new p6_followup_required=true
106 hitmonlee  complete B17-new p6_followup_required=true
107 hitmonchan complete B17-new p6_followup_required=true
123 scyther    complete B17-new p6_followup_required=true
127 pinsir     complete B17-new p6_followup_required=true
```

Result: **PASS**.

## Batch 17 aggression / agency regression

```text
Mankey_quick_temper_equals_numeric_rage_meter == false
Mankey_extreme_escape_wording_equals_global_no_flee == false
Primeape_pursuit_equals_infinite_pathfinding == false
Primeape_gaze_trigger_equals_omniscient_detection == false
source_severity_requires_explicit_warning_state_and_counterplay == true
```

Result: **PASS**.

## Batch 17 morphology / action-economy regression

```text
Hitmonlee_extended_legs_equal_discrete_species_capability == true
Hitmonlee_successive_kicks_equal_extra_turns == false
Hitmonchan_combinations_equal_one_action_effect_when_authored == true
Hitmonchan_two_fists_equal_two_action_slots == false
Scyther_two_scythes_equal_two_actions_or_entities == false
Pinsir_two_pincer_horns_equal_extra_actions == false
```

Result: **PASS**.

## Batch 17 numeric / physics regression

```text
Hitmonchan_300_mph_equals_initiative_travel_or_kinetic_energy_formula == false
Hitmonchan_three_minute_recovery_equals_real_time_global_timer == false
Hitmonlee_Force_6_equals_joules_or_universal_armor_penetration == false
Pinsir_twice_body_weight_claim_equals_generic_carry_capacity_formula == false
material_feats_equal_generic_destructible_world == false
```

Result: **PASS**.

## Batch 17 natural-weapon / resource regression

```text
Hitmonlee_legs_and_feet_are_living_anatomy == true
Hitmonchan_fists_are_living_anatomy == true
Scyther_scythes_are_living_anatomy == true
Pinsir_pincers_are_living_anatomy == true
body_parts_equal_automatic_loot_or_equipment == false
live_harvest_loop_created == false
generic_material_conversion_allowed == false
```

Result: **PASS**.

## Batch 17 perception / temperature / runtime regression

```text
Scyther_blur_equals_extra_entities_or_teleportation == false
Scyther_grass_camouflage_equals_permanent_invisibility == false
Pinsir_cold_intolerance_equals_exact_global_temperature_threshold == false
continuous_rage_pursuit_limb_kinetic_material_or_temperature_simulation_created == false
per_frame_species_rule_scanning_created == false
cached_authored_or_discrete_state_lookup_preferred_for_later_runtime == true
```

Result: **PASS**.

## Evolution / chronology checks

```text
Annihilape_expands_mandatory_Gen1_roster == false
Tyrogue_or_Hitmontop_expand_mandatory_Gen1_roster == false
Scizor_or_Kleavor_expand_mandatory_Gen1_roster == false
Mega_Pinsir_implies_Mega_Evolution_or_ordinary_flight == false
later_region_relationships_equal_proto_kanto_ecology == false
modern_ability_names_equal_ancient_rules_or_vocabulary == false
boxer_Kick_Master_ninja_bullet_train_or_concrete_language_equals_required_ancient_institution == false
```

Result: **PASS**.

## D-034 encounterability check

```text
all_six_Batch_17_species_directly_encounterable_somewhere == true
direct_encounterable_equals_common_everywhere == false
direct_encounterable_equals_ordinary_companionship == false
baseline_natural_presence_remains_separate == true
```

Result: **PASS**.

## P6 follow-up audit

All six Batch 17 rows explicitly set `p6_followup_required: true` for anger/pursuit warning states, extended-reach readability, combo/recovery cadence, Scyther blur/camouflage/single-entity presentation and Pinsir grip/cold-state counterplay.

Result: **PASS**.

## Mutation rules preserved

Future P4 changes must update this manifest atomically with reviewed status changes. A row may be promoted to `complete` only when its dossier satisfies the frozen P4 schema and has no blocking P4 Human Design Gate.

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
Batch_17_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
aggression_agency_regression == PASS
morphology_action_economy_regression == PASS
numeric_physics_regression == PASS
natural_weapon_resource_regression == PASS
perception_temperature_runtime_regression == PASS
evolution_chronology_regression == PASS
D034_encounterability_regression == PASS
blocking_p4_gate_count == 0
```

Batch 17 manifest promotion is complete. P4 remains active at `129 complete / 2 pilot_reviewed / 20 not_started`.
