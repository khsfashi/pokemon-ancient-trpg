# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 03 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 03 source review, full-schema authoring and atomic promotion. Batch 03 stress-tests branching evolution, transformation distinct from evolution, multi-part/multi-will single-entity semantics, and species-specific carried-tool behavior.

The manifest remains status-oriented and does not duplicate dossier prose or canonical source data.

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

`authoring_batch` remains an allowed operational field. For `pilot_reviewed` and `complete`, `p6_followup_required` must be explicit on the species row.

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

## Batch 03 promotion check

The eight new Batch 03 dossiers are now complete:

- #083 Farfetch'd
- #102 Exeggcute
- #103 Exeggutor
- #132 Ditto
- #133 Eevee
- #134 Vaporeon
- #135 Jolteon
- #136 Flareon

The twenty Batch 01/02-complete species remain complete. The two pilot species outside completed batch-family closure remain `pilot_reviewed`:

- #131 Lapras
- #151 Mew

All other mandatory species remain `not_started`.

```text
dossier_complete_count == 28
pilot_reviewed_count == 2
not_started_count == 121
draft_count == 0
blocking_p4_gate_count == 0
```

Result: **PASS**.

## Batch 03 P6 follow-up audit

All eight new dossiers require later P6 readability/provenance work because their gameplay depends on visible carried-tool state, internal-part coordination, transformation identity, branching evolution or elemental/environmental state communication:

```text
Farfetch'd true
Exeggcute  true
Exeggutor  true
Ditto      true
Eevee      true
Vaporeon   true
Jolteon    true
Flareon    true
```

Previously reviewed flags are preserved unchanged. Unreviewed species remain `unknown` through `not_started` defaults.

Result: **PASS**.

## Batch 03 domain regression check

### Farfetch'd

```text
stalk_is_species_behavior_dependency == true
stalk_is_generic_loot == false
learned_style_is_individual_behavior == true
generic_held_item_system_created == false
```

### Exeggcute / Exeggutor

```text
multi_part_species_entity_count == 1
multi_part_companion_slot_count == 1
internal_head_plurality_can_affect_behavior == true
universal_soul_or_personhood_rule_created == false
rare_head_loss_is_farmable_duplication == false
```

### Ditto

```text
transformation_equals_evolution == false
transformed_shape_changes_species_key == false
transformed_shape_can_change_scene_permissions == true
permanent_copied_dossier_replacement == false
```

### Eevee family

```text
branching_evolution_is_menu_class_change == false
stone_inventory_forces_evolution == false
persistent_individual_history_survives == true
later_generation_branches_expand_GenI_baseline == false
generic_evolution_stone_economy_created == false
```

Result: **PASS**.

## Hazard and permission regression check

Batch 03 preserves the P4 hazard contract:

```text
hazard_severity_capped_by_axis_rating == false
high_species_stats_imply_aggression == false
invalid_approach_review_occurs_before_numeric_check == true
Vaporeon_submerged_visual_tracking_can_be_invalid == true
Jolteon_electric_and_fur_exposure_are_distinct == true
Flareon_heat_changes_environment_state == true
Ditto_identity_pressure_is_not_only_TN_inflation == true
```

Important examples:

- Vaporeon's water concealment changes tracking permission instead of inflating Guard.
- Jolteon's electrical discharge and needlelike fur use separate exposure records; conductive context matters without altering species stats.
- Flareon's fire can ignite dry environments and alter escape routes; official heat descriptions do not become a universal temperature-to-Injury equation.
- Ditto's copied appearance can invalidate appearance-only identification before any numeric check.

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies all completion domains in `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, outline prose or selection into a future batch.

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
Batch_03_status_promotion == PASS
P6_followup_explicitness == PASS
species_equipment_regression == PASS
multi_head_single_entity_regression == PASS
transformation_not_evolution_regression == PASS
branching_evolution_regression == PASS
hazard_permission_regression == PASS
blocking_p4_gate_count == 0
```

Batch 03 manifest promotion is complete.