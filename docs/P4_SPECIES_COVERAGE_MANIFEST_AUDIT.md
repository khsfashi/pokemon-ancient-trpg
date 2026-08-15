# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 13 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 13 source review, seven-species full-schema authoring, regression review, completion audit and atomic promotion.

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
dossier_complete_count == 103
pilot_reviewed_count == 2
not_started_count == 46
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

Result: **PASS**.

## Prior-batch continuity check

All 96 rows complete through Batch 12 remain complete. No earlier promotion was reverted.

Result: **PASS**.

## Batch 13 promotion check

Only these seven previously `not_started` rows are newly promoted:

```text
016 pidgey    complete B13-new p6_followup_required=true
017 pidgeotto complete B13-new p6_followup_required=true
018 pidgeot   complete B13-new p6_followup_required=true
021 spearow   complete B13-new p6_followup_required=true
022 fearow    complete B13-new p6_followup_required=true
084 doduo     complete B13-new p6_followup_required=true
085 dodrio    complete B13-new p6_followup_required=true
```

Result: **PASS**.

## Batch 13 regression checks

```text
Flying_type_equals_unlimited_traversal == false
Speed_rating_equals_literal_velocity == false
Pidgeot_Mach_2_equals_real_world_physics_formula == false
territoriality_equals_auto_combat == false
Keen_Eye_equals_perfect_detection == false
Fearow_food_snatching_equals_inventory_mutation_permission == false
Doduo_active_entity_count == 1
Dodrio_active_entity_count == 1
Doduo_ordinary_turn_count == 1
Dodrio_ordinary_turn_count == 1
Doduo_independent_HP_pool_count == 1
Dodrio_independent_HP_pool_count == 1
Doduo_internal_telepathy_equals_external_mind_reading == false
Dodrio_three_hearts_or_lung_sets_equal_extra_lives == false
```

Result: **PASS**.

## P6 follow-up audit

All seven Batch 13 rows explicitly set `p6_followup_required: true` for aerial scale/telegraph, local patrol/territory readability, Fearow resource-contest readability, and Doduo/Dodrio multi-head presentation without multi-entity UI.

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
Batch_13_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
traversal_speed_regression == PASS
detection_territory_theft_regression == PASS
multi_head_organ_regression == PASS
blocking_p4_gate_count == 0
```

Batch 13 manifest promotion is complete. P4 remains active at `103 complete / 2 pilot_reviewed / 46 not_started`.
