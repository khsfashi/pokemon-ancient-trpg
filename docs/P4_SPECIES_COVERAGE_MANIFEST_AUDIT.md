# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 10 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 10 source review, full-schema authoring, species-local capability regressions and atomic promotion.

The manifest is authoritative; this document matches its current resolved state.

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

## Current status counts

After Batch 10 promotion:

```text
dossier_complete_count == 80
pilot_reviewed_count == 2
not_started_count == 69
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two remaining `pilot_reviewed` species are unchanged:

- #131 Lapras
- #151 Mew

Result: **PASS**.

## Prior-batch continuity check

All 72 rows complete through Batch 09 remain complete. No earlier promotion was reverted while applying Batch 10.

Representative continuity anchors remain:

```text
013 weedle      complete B01-anchor
025 pikachu     complete B02-new
083 farfetchd   complete B03-new
082 magneton    complete B04-new
150 mewtwo      complete B05-new
128 tauros      complete B06-new
144 articuno    complete B07-new
120 staryu      complete B08-new
039 jigglypuff  complete B09-new
097 hypno       complete B09-new
```

Result: **PASS**.

## Batch 10 promotion check

Only these eight previously `not_started` rows are newly promoted:

```text
041 zubat      complete B10-new p6_followup_required=true
042 golbat     complete B10-new p6_followup_required=true
072 tentacool  complete B10-new p6_followup_required=true
073 tentacruel complete B10-new p6_followup_required=true
077 ponyta     complete B10-new p6_followup_required=true
078 rapidash   complete B10-new p6_followup_required=true
111 rhyhorn    complete B10-new p6_followup_required=true
112 rhydon     complete B10-new p6_followup_required=true
```

No unrelated species row changes status.

Result: **PASS**.

## State / capability regression

```text
Golbat_overfed_flight_loss_mutates_base_stats == false
Tentacool_dehydration_changes_Water_type == false
Ponyta_newborn_locomotion_requires_second_species_profile == false
Rhyhorn_charge_danger_capped_by_Speed_1 == false
Rhydon_bedrock_or_heat_permission_derived_from_axis_formula == false
```

Result: **PASS**.

## Type-permission regression

```text
Flying_type_equals_sound_navigation == false
Water_type_equals_amphibious_safety == false
Fire_bond_equals_generic_fire_immunity == false
Ground_or_Rock_type_equals_lava_immunity == false
```

Result: **PASS**.

## Hazard-separation regression

```text
Golbat_bite_contact_equals_fixed_blood_loss_damage == false
Tentacruel_restraint_equals_venom_resolution == false
Tentacruel_80_tentacles_equals_80_actions == false
Rhyhorn_collision_equals_generic_terrain_HP_system == false
hazard_severity_capped_by_species_axis == false
```

Result: **PASS**.

## Traversal regression

```text
Rapidash_extreme_overland_running == species_local_permission
Rapidash_150_mph_equals_constant_cruising_speed == false
Speed_5_equals_map_travel_formula == false
Rhydon_steep_terrain_access_equals_human_safe_route == false
```

Result: **PASS**.

## Evolution-family regression

```text
Zubat_sound_navigation_auto_inherited_by_Golbat == false
Tentacool_shoreline_dehydration_auto_inherited_by_Tentacruel == false
Ponyta_safe_mane_contact_auto_inherited_by_Rapidash == false
Rhyhorn_charge_auto_inherited_by_Rhydon == false
Crobat_Galarian_Ponyta_Rapidash_Rhyperior_added_to_mandatory_roster == false
```

Result: **PASS**.

## P6 follow-up audit

All eight Batch 10 rows explicitly set `p6_followup_required: true`.

Primary follow-ups include:

- Zubat sound-navigation and sunlight-vulnerability readability without perfect-radar implications;
- Golbat feeding and overfed no-flight state readability without base-stat mutation;
- Tentacool healthy aquatic versus stranded/dehydrated state readability;
- Tentacruel tentacle reach, restraint, venom and outbreak readability without one-action-per-tentacle presentation;
- Ponyta acceptance-gated mane contact and maturation-state readability without generic Fire immunity;
- Rapidash run-lane, herd-leader and extreme-travel readability without exact speed simulation;
- Rhyhorn committed charge line, poor turning/stopping and bounded terrain-breach readability;
- Rhydon horn-boring, steep-terrain and volcanic-heat permission readability without type immunity.

No P4 document chooses final asset provenance, style, bundling or mobile budgets.

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, outline prose, batch selection, encounter availability, modern move/ability tables, family relationship, type membership, travel claims or environmental feats alone.

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
Batch_10_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
state_capability_regression == PASS
type_permission_regression == PASS
hazard_separation_regression == PASS
traversal_regression == PASS
evolution_stage_inheritance_regression == PASS
blocking_p4_gate_count == 0
```

Batch 10 manifest promotion is complete. P4 remains active at `80 complete / 2 pilot_reviewed / 69 not_started`.
