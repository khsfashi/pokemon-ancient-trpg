# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 04 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`  
Composite identity authority: `docs/P4_MAGNETON_COMPOSITE_IDENTITY_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 04 source review, P4-HDG-003 resolution, full-schema authoring and atomic promotion.

Batch 04 stress-tests host/parasite control, reversible interspecies-dependent evolution, a participant species with its own independent evolution family, and multi-origin composite evolution.

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

## Batch 04 promotion check

New complete dossiers:

- #046 Paras
- #047 Parasect
- #079 Slowpoke
- #080 Slowbro
- #081 Magnemite
- #082 Magneton
- #090 Shellder
- #091 Cloyster

The previous 28 completed species remain complete. The two remaining pilot-reviewed species remain:

- #131 Lapras
- #151 Mew

All other mandatory species remain `not_started`.

```text
dossier_complete_count == 36
pilot_reviewed_count == 2
not_started_count == 113
draft_count == 0
blocking_p4_gate_count == 0
```

Result: **PASS**.

## Batch 04 P6 follow-up audit

All eight new rows explicitly set `p6_followup_required: true`.

Reasons include spore/cloud readability, Slowbro attachment and reversion states, electromagnetic field/metal interaction, Magneton contributor continuity, Shellder shell state and Cloyster projectile/current state.

No P4 document chooses final asset provenance, style, bundling or mobile budgets.

Result: **PASS**.

## Batch 04 domain regression check

### Paras / Parasect

```text
host_fungal_control_is_species_local == true
universal_mind_or_soul_rule_created == false
spore_hazard_is_separate_from_low_species_stats == true
medicinal_use_becomes_generic_loot == false
```

### Slowpoke / Slowbro

```text
delayed_pain_equals_Guard_bonus == false
Shellder_attachment_can_create_Slowbro == true
Shellder_loss_can_restore_Slowpoke == true
global_deevolution_system_created == false
persistent_history_survives_reversion == true
```

### Shellder / Cloyster

```text
Shellder_participant_role_replaces_own_family == false
Slowbro_grants_free_Shellder_companion == false
closed_shell_changes_approach_permission == true
Cloyster_projectile_hazard_is_separate_from_Guard == true
```

### Magnemite / Magneton

```text
metallic_Pokemon_proves_modern_human_industry == false
Magneton_species_entity_count == 1
Magneton_visible_companion_slot_count == 1
Magneton_contributor_history_count == 3
contributor_history_retained == true
three_stat_blocks_summed == false
three_independent_actions_assumed == false
literal_three_brains_claimed_as_canon == false
generic_split_action_created == false
```

Result: **PASS**.

## Hazard and permission regression check

```text
hazard_severity_capped_by_axis_rating == false
high_species_stats_imply_aggression == false
invalid_approach_review_occurs_before_numeric_check == true
Paras_spore_contact_can_matter_despite_low_Vigor == true
Slowpoke_reaction_delay_is_timing_not_defense == true
Magnemite_hover_changes_position_permission == true
Magneton_field_can_invalidate_metal_heavy_approach == true
Shellder_closed_shell_can_invalidate_soft_body_attack == true
Cloyster_current_hazard_is_environmental_not_Guard == true
```

Result: **PASS**.

## D-033 composite persistence audit

P4-HDG-003 owner choice A is represented by a one-entity active profile plus retained contributor provenance.

```text
active_Magneton_profile_count == 1
component_provenance_count == 3
relationship_history_erased == false
slot_compression_command == false
universal_multi_body_identity_rule == false
```

The player-facing presentation may evoke three brains or three simultaneous viewpoints, but the exact anatomical brain count and soul/consciousness mechanism remain unsupported and intentionally unresolved.

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

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
Batch_04_status_promotion == PASS
P6_followup_explicitness == PASS
host_parasite_regression == PASS
reversible_evolution_regression == PASS
participant_species_regression == PASS
composite_multi_origin_regression == PASS
D-033_identity_regression == PASS
hazard_permission_regression == PASS
blocking_p4_gate_count == 0
```

Batch 04 manifest promotion is complete.