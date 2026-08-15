# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 14 promoted**  
Date: **2026-08-16**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 14 source review, eight-species full-schema authoring, regression review, completion audit and atomic promotion.

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
dossier_complete_count == 111
pilot_reviewed_count == 2
not_started_count == 38
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

Result: **PASS**.

## Prior-batch continuity check

All 103 rows complete through Batch 13 remain complete. No earlier promotion was reverted.

Result: **PASS**.

## Batch 14 promotion check

Only these eight previously `not_started` rows are newly promoted:

```text
027 sandshrew complete B14-new p6_followup_required=true
028 sandslash complete B14-new p6_followup_required=true
050 diglett   complete B14-new p6_followup_required=true
051 dugtrio   complete B14-new p6_followup_required=true
074 geodude   complete B14-new p6_followup_required=true
075 graveler  complete B14-new p6_followup_required=true
076 golem     complete B14-new p6_followup_required=true
095 onix      complete B14-new p6_followup_required=true
```

Result: **PASS**.

## Batch 14 regression checks

```text
Ground_or_Rock_type_equals_burrowing_permission == false
Speed_rating_equals_literal_burrowing_or_rolling_velocity == false
Force_rating_equals_terrain_or_structure_damage_formula == false
Diglett_hidden_lower_body_shape == intentionally_unresolved
Dugtrio_active_entity_count == 1
Dugtrio_ordinary_turn_count == 1
Dugtrio_independent_health_state_count == 1
Dugtrio_visible_companion_slot_cost == 1
Geodude_rocklike_body_equals_object_or_ore == false
Sandslash_regrowth_equals_repeatable_live_harvest == false
Graveler_rolling_equals_unstoppable_state == false
Golem_shed_shell_equals_automatic_loot == false
Golem_self_explosion_equals_real_world_blast_formula == false
Onix_50_mph_equals_runtime_fast_travel == false
hazard_severity_capped_by_species_axis == false
```

Result: **PASS**.

## Chronology / human-context checks

```text
Diglett_later_farm_raising_equals_ancient_domestication_norm == false
Golem_diversion_grooves_equal_setting_wide_infrastructure == false
Golem_dynamite_wording_equals_ancient_dynamite_technology == false
modern_evolution_levels_or_trade_equal_ancient_levels_XP_or_trade_institution == false
Onix_later_Metal_Coat_context_equals_ancient_technology == false
```

Result: **PASS**.

## P6 follow-up audit

All eight Batch 14 rows explicitly set `p6_followup_required: true` for burrow/tremor/roll telegraphs, hidden-anatomy-safe presentation, lithic-body readability without loot semantics, shed-material state, massive-body scale and route-hazard readability.

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
Batch_14_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
burrowing_terrain_regression == PASS
lithic_body_resource_regression == PASS
rolling_explosive_hazard_regression == PASS
multi_head_action_economy_regression == PASS
chronology_human_context_regression == PASS
blocking_p4_gate_count == 0
```

Batch 14 manifest promotion is complete. P4 remains active at `111 complete / 2 pilot_reviewed / 38 not_started`.
