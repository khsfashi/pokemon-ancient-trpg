# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 05 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 05 source review, chronology classification, full-schema authoring and atomic promotion.

Batch 05 proves a new P4 boundary: **mandatory dossier coverage is not the same thing as baseline-era encounter availability**.

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

## Batch 05 promotion check

New complete dossiers:

- #088 Grimer
- #089 Muk
- #100 Voltorb
- #101 Electrode
- #109 Koffing
- #110 Weezing
- #137 Porygon
- #150 Mewtwo

The previous 36 completed species remain complete. The two remaining pilot-reviewed species remain:

- #131 Lapras
- #151 Mew

All other mandatory species remain `not_started`.

```text
dossier_complete_count == 44
pilot_reviewed_count == 2
not_started_count == 105
draft_count == 0
blocking_p4_gate_count == 0
```

Result: **PASS**.

## Batch 05 P6 follow-up audit

All eight new rows explicitly set `p6_followup_required: true`.

Primary follow-ups include:

- Grimer/Muk contamination-zone readability;
- Koffing/Weezing gas density, wind and ventilation readability;
- original/Hisuian Voltorb-family form disambiguation if later content needs both;
- explicit chronology-locked presentation for Porygon and Mewtwo so `complete` cannot be mistaken for baseline spawn permission.

No P4 document chooses final asset provenance, style, bundling or mobile budgets.

Result: **PASS**.

## Presence / chronology regression

```text
mandatory_dossier_coverage_equals_spawn_authorization == false
Grimer_baseline_presence == plausible_derived
Muk_baseline_presence == plausible_derived
Koffing_baseline_presence == plausible_derived
Weezing_baseline_presence == plausible_derived
Voltorb_original_baseline_presence == unsupported_unknown
Electrode_original_baseline_presence == unsupported_unknown
Porygon_baseline_presence == noncontemporaneous
Mewtwo_baseline_presence == noncontemporaneous
```

A `complete` row can therefore contain reviewed `unknown` or `not_applicable_baseline` ecology/encounter/bond fields where chronology requires them.

Result: **PASS**.

## Pollution / infrastructure regression

```text
Grimer_or_Muk_requires_factory == false
Grimer_or_Muk_requires_sewer_system == false
Koffing_or_Weezing_requires_factory == false
Weezing_perfume_use_creates_mass_industry == false
generic_poison_harvest_economy_created == false
localized_preindustrial_toxic_niche_allowed == true
```

Result: **PASS**.

## Regional-form regression

```text
Hisuian_Voltorb_history_exists == true
Hisuian_Electrode_history_exists == true
Hisuian_form_substitutes_original_Gen1_form == false
original_form_ancient_presence_proven == false
ancient_Poke_Ball_infrastructure_created == false
ancient_power_grid_created == false
original_and_Hisuian_evolution_metadata_collapsed == false
```

Result: **PASS**.

## Artificial-origin regression

```text
Porygon_advanced_science_origin_preserved == true
Porygon_cyberspace_preserved == true
baseline_cyberspace_created == false
Porygon_historical_observation_creates_time_travel_rule == false
Mewtwo_genetic_manipulation_origin_preserved == true
ancient_genetics_lab_created == false
Mewtwo_is_rare_ancient_wildlife == false
Legendary_status_equals_spawn_permission == false
```

Result: **PASS**.

## Hazard and permission regression

```text
hazard_severity_capped_by_axis_rating == false
Grimer_Potency_2_makes_toxin_harmless == false
Muk_environmental_toxicity_is_only_melee_damage == false
Voltorb_Force_1_makes_explosion_harmless == false
Electrode_Speed_6_equals_flat_damage_bonus == false
Koffing_Guard_4_defines_explosion_damage == false
Weezing_Guard_6_defines_gas_severity == false
Porygon_digital_traversal_requires_baseline_cyberspace == false
Mewtwo_hazard_profile_grants_baseline_encounter == false
```

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, outline prose, batch selection, or baseline encounter availability alone.

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
Batch_05_status_promotion == PASS
P6_followup_explicitness == PASS
presence_chronology_regression == PASS
pollution_infrastructure_regression == PASS
regional_form_regression == PASS
artificial_origin_regression == PASS
hazard_permission_regression == PASS
blocking_p4_gate_count == 0
```

Batch 05 manifest promotion is complete. P4 remains active at `44 complete / 2 pilot_reviewed / 105 not_started`.
