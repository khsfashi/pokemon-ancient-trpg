# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 21 promoted**  
Date: **2026-08-16**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 21 source review, three-species full-schema authoring, regression review, completion audit and atomic promotion.

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
dossier_complete_count == 149
pilot_reviewed_count == 2
not_started_count == 0
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The only non-`complete` species are #131 Lapras and #151 Mew, both `pilot_reviewed`.

Result: **PASS**.

## Prior-batch continuity check

All 146 rows complete through Batch 20 remain complete. No earlier promotion was reverted.

Result: **PASS**.

## Batch 21 promotion check

Only these three previously `not_started` rows are newly promoted:

```text
098 krabby     complete B21-new p6_followup_required=true
099 kingler    complete B21-new p6_followup_required=true
108 lickitung  complete B21-new p6_followup_required=true
```

Result: **PASS**.

## Batch 21 Krabby regression

```text
Krabby_pincer_loss_and_regrowth_equals_continuous_limb_health == false
Krabby_regrowth_equals_instant_recovery_or_resource_farming == false
Krabby_lost_pincer_equals_guaranteed_loot == false
Krabby_two_pincers_equal_extra_actions_entities_or_health_pools == false
Krabby_lateral_balance_equals_generic_locomotion_system == false
Krabby_bubble_display_equals_forced_Fear_or_free_action == false
Krabby_territoriality_equals_permanent_aggression == false
```

Result: **PASS**.

## Batch 21 Kingler regression

```text
Kingler_10000_horsepower_equals_literal_damage_or_physics_formula == false
Kingler_extreme_force_equals_generic_mining_material_or_armor_deletion == false
Kingler_large_claw_equals_automatic_hit_or_guaranteed_restraint == false
Kingler_one_large_claw_equals_extra_action_entity_health_pool_or_initiative == false
Kingler_aim_balance_and_fatigue_counterweights_preserved == true
Kingler_fatigue_equals_continuous_stamina_or_torque_simulation == false
Kingler_high_force_equals_automatic_aggression == false
```

Result: **PASS**.

## Batch 21 Lickitung contact / saliva regression

```text
Lickitung_contact_sensing_requires_actual_contact == true
Lickitung_contact_information_is_contact_accessible_only == true
Lickitung_texture_taste_memory_equals_omniscient_identification == false
Lickitung_tongue_like_arm_equals_generic_hands_or_unrestricted_tools == false
Lickitung_sticky_saliva_equals_guaranteed_grapple_attachment_or_traversal == false
Lickitung_tingling_rash_itch_or_paralysis_equals_automatic_status == false
Lickitung_saliva_contact_equals_continuous_contamination_polling == false
player_input_removal_created == false
```

Result: **PASS**.

## Hisui resource / chronology boundary

```text
Hisui_processed_saliva_adhesive_is_later_era_provenance == true
Hisui_processing_equals_proto_kanto_recipe_or_industry == false
Lickitung_saliva_equals_default_material_node == false
routine_live_saliva_harvest_created == false
companion_production_loop_created == false
generic_material_conversion_allowed == false
ownership_shortcut_forbidden == true
```

Result: **PASS**.

## Action-economy / entity / progression regression

```text
all_three_one_Pokemon_one_ordinary_turn_one_health_state_one_initiative_presence == true
all_three_one_visible_companion_slot_per_individual == true
multiple_pincers_or_long_tongue_equal_extra_actions == false
ordinary_weak_species_may_become_late_game_routine == true
ordinary_Kingler_remains_fixed_baseline_not_player_scaled == true
exceptional_individuals_require_persistent_history_and_distinctive_traits == true
weak_species_named_apex_semantics_preserved == true
high_stat_species_aggression_is_not_assumed == true
player_level_enemy_scaling_created == false
```

Result: **PASS**.

## Player-agency / hazard regression

```text
severe_crush_contact_irritation_and_grip_hazards_preserve_warning_eligibility_counterplay_escape_and_player_input == true
automatic_Fear_created == false
automatic_paralysis_created == false
automatic_rash_or_itch_created == false
permanent_restraint_created == false
automatic_player_agency_removal_created == false
```

Result: **PASS**.

## Runtime boundary regression

```text
continuous_limb_health_or_regrowth_ticks_created == false
continuous_pincer_force_torque_or_stamina_simulation_created == false
continuous_material_break_threshold_solver_created == false
continuous_tongue_contact_scan_created == false
continuous_adhesion_solver_created == false
continuous_saliva_contamination_polling_created == false
per_appendage_entity_or_turn_created == false
per_frame_species_rule_scanning_created == false
cached_authored_or_discrete_state_lookup_preferred_for_later_runtime == true
```

Result: **PASS**.

## Evolution / provenance checks

```text
modern_level_or_move_metadata_equals_ancient_progression_law == false
Lickilicky_context_expands_mandatory_Gen1_roster == false
Gigantamax_Kingler_context_equals_ordinary_Kingler_rule == false
modern_ability_names_equal_ancient_rules_or_vocabulary == false
```

Result: **PASS**.

## D-034 / companionship / P6 follow-up audit

```text
all_three_directly_encounterable_somewhere == true
direct_encounterable_equals_common_everywhere == false
direct_encounterable_equals_ordinary_companionship == false
all_three_companionship_classification == eligible
capture_or_defeat_equals_companionship == false
all_three_p6_followup_required == true
```

Result: **PASS**.

## Remaining non-complete rows

```text
131 lapras pilot_reviewed
151 mew    pilot_reviewed
```

There are no `not_started` or `draft` rows. These two pilot dossiers must now be audited against the final frozen schema/contracts and promoted only if their strict completion requirements pass.

## Mutation rules preserved

Future P4 changes must update this manifest atomically with reviewed status changes. A row may be promoted to `complete` only when its dossier satisfies the frozen P4 schema and has no blocking P4 Human Design Gate.

P4 exit remains:

```text
mandatory_species_ids == {1..151}
dossier_complete_count == 151
source_review_complete_count == 151
pilot_reviewed_count == 0
not_started_count == 0
draft_count == 0
blocking_p4_gate_count == 0
```

## Verdict

```text
manifest_structure == PASS
prior_batch_continuity == PASS
Batch_21_status_promotion == PASS
status_count_arithmetic == PASS
krabby_pincer_regrowth_regression == PASS
kingler_severe_force_counterweight_regression == PASS
lickitung_contact_saliva_regression == PASS
hisui_resource_chronology_regression == PASS
action_economy_progression_regression == PASS
player_agency_hazard_regression == PASS
runtime_boundary_regression == PASS
evolution_provenance_regression == PASS
D034_companionship_regression == PASS
P6_followup_explicitness == PASS
blocking_p4_gate_count == 0
```

Batch 21 manifest promotion is complete. P4 remains active at `149 complete / 2 pilot_reviewed / 0 not_started`. The exact next work is the final Lapras/Mew pilot completion audit and strict `151/151` P4 exit audit; P5 remains blocked until that passes.
