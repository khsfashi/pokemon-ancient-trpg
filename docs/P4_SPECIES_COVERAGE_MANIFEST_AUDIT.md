# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 06 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 06 source review, full-schema authoring, social-ecology regressions and promotion.

Batch 06 preserves a key authoring boundary: **family, young and herd context may change encounter state without becoming universal Pokémon stats or generic subsystems**.

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

## Batch 06 promotion check

New complete dossiers:

- #029 Nidoran♀
- #030 Nidorina
- #031 Nidoqueen
- #032 Nidoran♂
- #033 Nidorino
- #034 Nidoking
- #115 Kangaskhan
- #128 Tauros

The previous 44 completed species remain complete. The two remaining pilot-reviewed species remain:

- #131 Lapras
- #151 Mew

All other mandatory species remain `not_started`.

```text
dossier_complete_count == 52
pilot_reviewed_count == 2
not_started_count == 97
draft_count == 0
blocking_p4_gate_count == 0
```

Result: **PASS**.

## Batch 06 P6 follow-up audit

All eight new rows explicitly set `p6_followup_required: true`.

Primary follow-ups include:

- Nidoran♀ / Nidoran♂ visual identity disambiguation without presenting them as one form toggle;
- Nidorina tucked/raised-barb and separated-family state readability;
- Nidoqueen young-present/protective-interposition and charge-lane readability;
- Nidorino horn/barb challenge posture;
- Nidoking rampage path and terrain-damage readability;
- Kangaskhan child-in-pouch versus nearby-outside-pouch state without implying a second active companion;
- Tauros herd direction, charge lane and battle-scarred protector identity.

No P4 document chooses final asset provenance, style, bundling or mobile budgets.

Result: **PASS**.

## Paired species / evolution regression

```text
national_dex_29_species_key == nidoran-f
national_dex_32_species_key == nidoran-m
nidoran_f_and_nidoran_m_are_distinct_species == true

nidoran-f_chain == [nidoran-f, nidorina, nidoqueen]
nidoran-m_chain == [nidoran-m, nidorino, nidoking]

modern_level_metadata_equals_kill_XP == false
Moon_Stone_relationship_creates_generic_evolution_menu == false
generic_reproduction_system_created == false
```

Result: **PASS**.

## Social-state regression

```text
Nidorina_family_presence_can_change_behavior == true
Nidorina_separation_can_change_behavior == true
Nidoqueen_young_presence_can_change_behavior == true
Nidoqueen_young_threat_can_escalate_protection == true

family_presence_changes_species_base_stats == false
young_presence_grants_fixed_parent_bonus == false
generic_family_morale_attribute_created == false
generic_parenting_system_created == false
```

Result: **PASS**.

## Kangaskhan encounter-unit regression

```text
Kangaskhan_active_entity_count == 1
Kangaskhan_visible_companion_slot_cost == 1
dependent_child_associated_state == true
child_can_be_in_pouch_or_nearby == true
child_threat_can_change_maternal_behavior == true

child_is_inventory == false
child_is_hidden_free_companion == false
ordinary_child_independent_combat_action == false
separate_child_species_profile_required == false
Mega_Kangaskhan_two_actor_semantics_imported == false
```

Result: **PASS**.

## Tauros / D-031 regression

```text
Tauros_herd_context_supported == true
Tauros_protector_role_supported == true
battle_scars_can_mark_individual_history == true
tauros-herd-protector-prototype_present == true
prototype_hidden_stat_bonus == false

later_explicit_individual_deltas_allowed == true
ordinary_Tauros_player_scales == false
generic_elite_affix_created == false
```

Result: **PASS**.

## Hazard and permission regression

```text
required_Batch_06_hazard_or_permission_record_count == 12

nidoran-f-poison-barb-contact == present
nidoran-f-enraged-horn-toxin == present
nidorina-family-safe-barbs == present
nidorina-separation-nervousness == present
nidoqueen-hard-scale-tackle == present
nidoqueen-young-defense-escalation == present
nidoran-m-sound-vigilance == present
nidorino-hostile-presence-challenge == present
nidoking-destructive-tail-rampage == present
kangaskhan-child-protection == present
tauros-furious-charge == present
tauros-herd-protector-intervention == present

hazard_severity_capped_by_axis_rating == false
low_force_means_harmless_poison == false
social_state_equals_flat_stat_modifier == false
charge_or_collision_equals_automatic_death == false
```

Result: **PASS**.

## Chronology / infrastructure regression

```text
Batch_06_baseline_presence == plausible_derived_for_all_eight
exact_ancient_locality_claimed_as_C1 == false
chronology_anomaly_required == false

Nidoking_transmission_tower_reference_is_capability_scale == true
ancient_transmission_infrastructure_created == false
ancient_power_grid_created == false

Mega_Kangaskhan_substitutes_original_form == false
Paldean_Tauros_substitutes_original_form == false
```

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, outline prose, batch selection, social-state notes, or baseline encounter availability alone.

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
Batch_06_status_promotion == PASS
P6_followup_explicitness == PASS
paired_species_evolution_regression == PASS
social_state_regression == PASS
Kangaskhan_encounter_unit_regression == PASS
Tauros_D031_regression == PASS
hazard_permission_regression == PASS
chronology_infrastructure_regression == PASS
blocking_p4_gate_count == 0
```

Batch 06 manifest promotion is complete. P4 remains active at `52 complete / 2 pilot_reviewed / 97 not_started`.
