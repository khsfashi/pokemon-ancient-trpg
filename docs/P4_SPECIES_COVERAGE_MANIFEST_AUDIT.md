# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 20 promoted**  
Date: **2026-08-16**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 20 source review, five-species full-schema authoring, regression review, completion audit and atomic promotion.

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
dossier_complete_count == 146
pilot_reviewed_count == 2
not_started_count == 3
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

Result: **PASS**.

## Prior-batch continuity check

All 141 rows complete through Batch 19 remain complete. No earlier promotion was reverted.

Result: **PASS**.

## Batch 20 promotion check

Only these five previously `not_started` rows are newly promoted:

```text
023 ekans      complete B20-new p6_followup_required=true
024 arbok      complete B20-new p6_followup_required=true
060 poliwag    complete B20-new p6_followup_required=true
061 poliwhirl  complete B20-new p6_followup_required=true
062 poliwrath  complete B20-new p6_followup_required=true
```

Result: **PASS**.

## Batch 20 stealth / sensing / venom regression

```text
Ekans_stealth_equals_invisibility_or_guaranteed_surprise == false
Ekans_tongue_sensing_equals_omniscient_detection_or_continuous_scan == false
Ekans_swallowing_equals_instant_kill_or_arbitrary_target_storage == false
venomous_species_identity_equals_automatic_poison == false
newborn_nonvenomous_wording_requires_continuous_age_simulation == false
```

Result: **PASS**.

## Batch 20 intimidation / constriction / pursuit regression

```text
Arbok_intimidation_equals_forced_Fear_flee_or_input_loss == false
Arbok_constriction_equals_free_or_permanent_restraint == false
Arbok_historical_no_escape_wording_equals_universal_no_escape_rule == false
Arbok_persistent_pursuit_equals_infinite_chase_or_perfect_tracking == false
Arbok_steel_drum_crushing_equals_mining_or_structural_deletion == false
```

Result: **PASS**.

## Batch 20 amphibious / drowsiness / traversal regression

```text
Poliwag_poor_land_walking_equals_automatic_immobilization == false
Poliwag_thin_skin_equals_universal_puncture_immunity == false
Water_type_equals_unrestricted_aquatic_or_amphibious_traversal == false
Poliwhirl_moist_skin_equals_continuous_hydration_meter == false
Poliwhirl_slippery_skin_equals_guaranteed_escape == false
Poliwhirl_spiral_drowsiness_equals_passive_hypnosis_or_automatic_sleep == false
Poliwhirl_spiral_effect_equals_continuous_gaze_polling == false
Poliwrath_extreme_endurance_equals_infinite_stamina == false
Poliwrath_ocean_crossing_equals_world_travel_formula == false
Poliwrath_water_surface_running_equals_permanent_water_walking_or_passenger_fast_travel == false
```

Result: **PASS**.

## Action-economy / entity / progression regression

```text
all_five_one_Pokemon_one_ordinary_turn_one_health_state_one_initiative_presence == true
all_five_one_visible_companion_slot_per_individual == true
serpentine_coils_multiple_limbs_or_whole_body_swimming_equal_extra_actions == false
ordinary_weak_species_may_become_late_game_routine == true
exceptional_individuals_require_persistent_history_and_distinctive_traits == true
weak_species_named_apex_semantics_preserved == true
high_stat_species_aggression_is_not_assumed == true
player_level_enemy_scaling_created == false
```

Result: **PASS**.

## Player-agency / hazard regression

```text
venom_constriction_drowsiness_and_water_hazards_preserve_warning_eligibility_counterplay_escape_and_player_input == true
automatic_poison_created == false
automatic_Fear_created == false
automatic_sleep_created == false
permanent_restraint_created == false
automatic_player_agency_removal_created == false
```

Result: **PASS**.

## Resource / craft boundary

```text
live_venom_extraction_equal_repeatable_default_resource_loop == false
shed_skin_equal_guaranteed_drop == false
thin_or_slippery_skin_equal_material_node == false
Poliwrath_strength_equal_transport_or_power_infrastructure == false
generic_material_conversion_allowed == false
ownership_shortcut_forbidden == true
```

Result: **PASS**.

## Runtime boundary regression

```text
continuous_stealth_or_scent_scan_created == false
continuous_poison_proximity_scanning_created == false
continuous_grapple_squeeze_created == false
continuous_pursuit_tracking_race_created == false
continuous_hydration_or_maturation_simulation_created == false
continuous_gaze_polling_created == false
continuous_swimming_fluid_or_stamina_simulation_created == false
per_appendage_entity_or_turn_created == false
per_frame_species_rule_scanning_created == false
cached_authored_or_discrete_state_lookup_preferred_for_later_runtime == true
```

Result: **PASS**.

## Evolution / provenance checks

```text
modern_level_or_Water_Stone_metadata_equals_ancient_progression_law == false
Politoed_or_Kings_Rock_trade_context_expands_mandatory_Gen1_roster == false
modern_ability_names_equal_ancient_rules_or_vocabulary == false
Fighting_type_equals_human_martial_institution == false
```

Result: **PASS**.

## D-034 / companionship / P6 follow-up audit

```text
all_five_directly_encounterable_somewhere == true
direct_encounterable_equals_common_everywhere == false
direct_encounterable_equals_ordinary_companionship == false
all_five_companionship_classification == eligible
capture_or_defeat_equals_companionship == false
all_five_p6_followup_required == true
```

Result: **PASS**.

## Remaining not-started rows

```text
098 krabby
099 kingler
108 lickitung
```

These are the final three `not_started` Generation-I rows. P4 still cannot exit because #131 Lapras and #151 Mew remain `pilot_reviewed`, and all mandatory rows must reach substantive `complete` status before the exit audit.

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
Batch_20_status_promotion == PASS
status_count_arithmetic == PASS
stealth_sensing_venom_regression == PASS
intimidation_constriction_pursuit_regression == PASS
amphibious_drowsiness_traversal_regression == PASS
action_economy_progression_regression == PASS
player_agency_hazard_regression == PASS
resource_boundary_audit == PASS
runtime_boundary_regression == PASS
evolution_provenance_regression == PASS
D034_companionship_regression == PASS
P6_followup_explicitness == PASS
blocking_p4_gate_count == 0
```

Batch 20 manifest promotion is complete. P4 remains active at `146 complete / 2 pilot_reviewed / 3 not_started`.
