# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 15 promoted**  
Date: **2026-08-16**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 15 source review, six-species full-schema authoring, regression review, completion audit and atomic promotion.

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
dossier_complete_count == 117
pilot_reviewed_count == 2
not_started_count == 32
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

Result: **PASS**.

## Prior-batch continuity check

All 111 rows complete through Batch 14 remain complete. No earlier promotion was reverted.

Result: **PASS**.

## Batch 15 promotion check

Only these six previously `not_started` rows are newly promoted:

```text
043 oddish      complete B15-new p6_followup_required=true
044 gloom       complete B15-new p6_followup_required=true
045 vileplume   complete B15-new p6_followup_required=true
069 bellsprout  complete B15-new p6_followup_required=true
070 weepinbell  complete B15-new p6_followup_required=true
071 victreebel  complete B15-new p6_followup_required=true
```

Result: **PASS**.

## Batch 15 botanical-body / agency regression

```text
plantlike_body_equals_scenery_crop_forage_or_resource_node == false
Oddish_burial_equals_perfect_concealment_or_generic_Grass_burrowing == false
Gloom_attraction_equals_compulsion_or_player_agency_removal == false
Victreebel_lure_equals_mind_control_forced_pathfinding_or_input_suppression == false
Weepinbell_sharp_leaves_equal_detachable_equipment_or_free_crafting_stock == false
secretions_pollen_seeds_leaves_or_petals_equal_automatic_loot == false
```

Result: **PASS**.

## Batch 15 pollen / chemical-hazard regression

```text
Vileplume_allergy_and_toxicity_are_distinguishable == true
Vileplume_pollen_equals_constant_aura_or_continuous_dispersion_simulation == false
Vileplume_toxicity_equals_automatic_paralysis == false
Bellsprout_iron_corrosion_equals_universal_material_deletion == false
Weepinbell_toxic_powder_and_acid_are_distinct_hazard_channels == true
Weepinbell_or_Victreebel_dissolution_equals_global_material_delete_rule == false
real_world_pH_reaction_rate_or_durability_formula_imported == false
```

Result: **PASS**.

## Batch 15 movement / feeding-history regression

```text
Bellsprout_rooted_rehydration_is_temporary_species_local_state == true
Bellsprout_rooting_equals_generic_healing_or_forced_movement_immunity == false
Bellsprout_motion_reaction_equals_omniscient_awareness_or_automatic_initiative == false
Victreebel_feeding_history_changes_acid_sweetness_qualitatively == true
Victreebel_feeding_history_equals_kill_XP_hidden_level_or_permanent_stat_growth == false
Victreebel_feeding_history_equals_recursive_corrosion_scaling_or_farm_loop == false
```

Result: **PASS**.

## Evolution / chronology checks

```text
family_stage_capabilities_auto_inherit_without_evidence == false
modern_level_21_metadata_equals_ancient_character_levels_or_kill_XP == false
Leaf_Stone_metadata_equals_common_ancient_item_market == false
Bellossom_and_Sun_Stone_remain_post_Gen1_provenance_context == true
modern_abilities_or_move_terms_equal_fixed_ancient_mechanics == false
```

Result: **PASS**.

## P6 follow-up audit

All six Batch 15 rows explicitly set `p6_followup_required: true` for botanical-body readability without resource semantics, buried/rooted state presentation, scent/lure telegraphs, airborne pollen warning, separate toxin/corrosion channels, and feeding-history presentation without a progression meter.

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
Batch_15_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
botanical_body_object_resource_regression == PASS
attraction_player_agency_regression == PASS
pollen_toxin_corrosion_regression == PASS
rooting_movement_reaction_regression == PASS
feeding_history_progression_regression == PASS
evolution_chronology_regression == PASS
blocking_p4_gate_count == 0
```

Batch 15 manifest promotion is complete. P4 remains active at `117 complete / 2 pilot_reviewed / 32 not_started`.
