# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 19 promoted**  
Date: **2026-08-16**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 19 source review, six-species full-schema authoring, regression review, completion audit and atomic promotion.

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
dossier_complete_count == 141
pilot_reviewed_count == 2
not_started_count == 8
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

Result: **PASS**.

## Prior-batch continuity check

All 135 rows complete through Batch 18 remain complete. No earlier promotion was reverted.

Result: **PASS**.

## Batch 19 promotion check

Only these six previously `not_started` rows are newly promoted:

```text
086 seel     complete B19-new p6_followup_required=true
087 dewgong  complete B19-new p6_followup_required=true
116 horsea   complete B19-new p6_followup_required=true
117 seadra   complete B19-new p6_followup_required=true
118 goldeen  complete B19-new p6_followup_required=true
119 seaking  complete B19-new p6_followup_required=true
```

Result: **PASS**.

## Batch 19 water / cold / breathing regression

```text
Seel_ice_bashing_equals_universal_ice_destruction_or_mining == false
Seel_cold_numeric_wording_equals_continuous_temperature_formula == false
Seel_water_competence_equals_indefinite_underwater_breathing == false
Dewgong_eight_knots_equals_turn_distance_fast_travel_or_auto_pursuit == false
Dewgong_cold_adaptation_equals_universal_cold_or_Ice_immunity == false
Dewgong_day_night_pattern_equals_real_time_scheduler == false
Dewgong_snow_concealment_equals_permanent_invisibility == false
```

Result: **PASS**.

## Batch 19 ink / poison / player-agency regression

```text
Horsea_rapid_escape_equals_guaranteed_flee_or_free_reaction == false
Horsea_ink_equals_automatic_blindness_input_loss_or_permanent_concealment == false
Horsea_tail_anchoring_equals_generic_grapple_or_extra_action == false
Seadra_poisonous_spines_equal_automatic_poison_on_touch_or_proximity == false
Seadra_contact_fainting_wording_equals_forced_fainting_without_resolution == false
Seadra_whirlpool_equals_automatic_forced_movement_boat_destruction_or_input_removal == false
water_poison_ink_contact_hazards_preserve_warning_eligibility_counterplay_escape_and_player_input == true
```

Result: **PASS**.

## Batch 19 resource / ecology / terrain regression

```text
Seadra_medicinal_value_equals_guaranteed_cure_recipe_price_market_or_live_harvest == false
Seadra_parental_care_equals_permanent_hostility == false
Goldeen_five_knots_equals_turn_distance_initiative_or_world_travel_formula == false
Goldeen_nonstop_wording_equals_infinite_stamina == false
Goldeen_waterfall_ascent_equals_universal_traversal_permission == false
Goldeen_glass_breaking_equals_universal_material_destruction == false
Seaking_horn_boring_equals_generic_mining_or_arbitrary_terrain_deletion == false
Seaking_seasonal_ecology_equals_continuous_breeding_population_or_fertility_simulation == false
Seaking_nest_defense_equals_automatic_combat_or_access_denial == false
```

Result: **PASS**.

## Action-economy / entity regression

```text
all_six_one_Pokemon_one_ordinary_turn_one_health_state_one_initiative_presence == true
all_six_one_visible_companion_slot_per_individual == true
Horsea_fins_or_tail_equal_extra_actions == false
Seadra_multiple_spines_equal_extra_actions_entities_or_health_pools == false
Goldeen_or_Seaking_horns_equal_detachable_weapon_entities == false
```

Result: **PASS**.

## Runtime boundary regression

```text
continuous_fluid_or_current_simulation_created == false
continuous_temperature_simulation_created == false
continuous_oxygen_simulation_created == false
continuous_ink_field_simulation_created == false
continuous_poison_proximity_scanning_created == false
continuous_breeding_or_population_simulation_created == false
continuous_resource_market_simulation_created == false
per_appendage_entity_or_turn_created == false
per_frame_species_rule_scanning_created == false
cached_authored_or_discrete_state_lookup_preferred_for_later_runtime == true
```

Result: **PASS**.

## Evolution / provenance checks

```text
Kingdra_expands_mandatory_Gen1_roster == false
Dragon_Scale_context_equals_ancient_item_availability_or_trade_evolution_institution == false
modern_ability_names_equal_ancient_rules_or_vocabulary == false
Water_Dancer_or_Water_Queen_equals_human_profession_or_institution == false
historical_cell_gene_wording_equals_ancient_genetics_technology == false
```

Result: **PASS**.

## D-034 / P6 follow-up audit

```text
all_six_directly_encounterable_somewhere == true
direct_encounterable_equals_common_everywhere == false
direct_encounterable_equals_ordinary_companionship == false
aquatic_habitat_fit_equals_guaranteed_presence_in_every_water_zone == false
seasonal_ecology_equals_real_world_calendar_lockout == false
all_six_p6_followup_required == true
```

Result: **PASS**.

## Remaining not-started rows

```text
023 ekans
024 arbok
060 poliwag
061 poliwhirl
062 poliwrath
098 krabby
099 kingler
108 lickitung
```

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
Batch_19_status_promotion == PASS
status_count_arithmetic == PASS
water_cold_breathing_regression == PASS
ink_poison_player_agency_regression == PASS
resource_ecology_terrain_regression == PASS
action_economy_entity_regression == PASS
runtime_boundary_regression == PASS
evolution_provenance_regression == PASS
D034_encounterability_regression == PASS
P6_followup_explicitness == PASS
blocking_p4_gate_count == 0
```

Batch 19 manifest promotion is complete. P4 remains active at `141 complete / 2 pilot_reviewed / 8 not_started`.
