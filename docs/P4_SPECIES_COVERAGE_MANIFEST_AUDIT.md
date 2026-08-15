# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 02 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 02 full-schema authoring and promotion. Batch 02 deliberately stress-tests D-032 across a biologically legible metamorphic family, a physical evolution-stone family, and a modern trade-metadata Psychic family.

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

## Batch 02 promotion check

The eight new Batch 02 dossiers are now complete:

- #010 Caterpie
- #011 Metapod
- #012 Butterfree
- #025 Pikachu
- #026 Raichu
- #063 Abra
- #064 Kadabra
- #065 Alakazam

The twelve Batch 01-complete species remain complete, and the two pilot species outside completed batch-family closure remain `pilot_reviewed`:

- #131 Lapras
- #151 Mew

All other mandatory species remain `not_started`.

```text
dossier_complete_count == 20
pilot_reviewed_count == 2
not_started_count == 129
draft_count == 0
blocking_p4_gate_count == 0
```

Result: **PASS**.

## Batch 02 P6 follow-up audit

All eight new dossiers require later P6 readability/provenance work because their gameplay depends on visible transformation, environmental-hazard, material-trigger, or Psychic-state communication:

```text
Caterpie   true
Metapod    true
Butterfree true
Pikachu    true
Raichu     true
Abra       true
Kadabra    true
Alakazam   true
```

Previously reviewed flags are preserved unchanged. Unreviewed species remain `unknown` through `not_started` defaults.

Result: **PASS**.

## D-032 mechanism regression check

### Caterpie family

```text
ordinary_Caterpie_growth_equals_evolution == false
Caterpie_to_Metapod == metamorphic_species_transformation
Metapod_to_Butterfree == metamorphic_species_transformation
modern_level_threshold_diegetic == false
```

### Pikachu family

```text
Pikachu_to_Raichu == rare_Thunder_Stone_mediated_transformation
Thunder_Stone_common_shop_item == false
Thunder_Stone_generic_upgrade_currency == false
forced_companion_evolution == false
```

### Abra family

```text
modern_level_metadata_literalized == false
modern_trade_metadata_literalized == false
ancient_trade_ritual_created == false
human_Psychic_Gift_forces_evolution == false
exact_reproducible_trigger == unknown
Alakazam_same_species_aging_can_increase_strength == true
```

Result: **PASS**.

The unknown Psychic-family trigger is an intentional knowledge boundary, not a blocking product-design decision.

## Hazard and permission regression check

Batch 02 preserves the P4 hazard contract:

```text
low_stat_species_can_have_material_hazard == true
hazard_severity_capped_by_axis_rating == false
group_environment_pressure_is_stat_bonus == false
teleport_evasion_is_flat_TN_inflation == false
psychic_space_control_requires_permission_review == true
high_species_stats_imply_aggression == false
```

Important examples:

- Caterpie defensive odor stays a bounded deterrence/nuisance exposure rather than an invented toxin.
- Butterfree poison scales use airflow/exposure semantics rather than Potency as a damage ceiling.
- Pikachu group electrical build changes environmental state instead of adding a swarm stat bonus.
- Raichu voltage prose does not become a universal damage formula.
- Abra Teleport can invalidate ordinary restraint/pursuit rather than merely raising TN.
- Kadabra/Alakazam Psychic control can invalidate unsupported physical approaches before numeric checks.

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies all completion domains in `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, or prose existence alone.

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
Batch_02_status_promotion == PASS
P6_followup_explicitness == PASS
D032_mechanism_regression == PASS
hazard_permission_regression == PASS
blocking_p4_gate_count == 0
```

Batch 02 manifest promotion is complete.