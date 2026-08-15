# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 16 promoted**  
Date: **2026-08-16**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 16 source review, six-species full-schema authoring, regression review, completion audit and atomic promotion.

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
dossier_complete_count == 123
pilot_reviewed_count == 2
not_started_count == 26
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two `pilot_reviewed` species remain #131 Lapras and #151 Mew.

Result: **PASS**.

## Prior-batch continuity check

All 117 rows complete through Batch 15 remain complete. No earlier promotion was reverted.

Result: **PASS**.

## Batch 16 promotion check

Only these six previously `not_started` rows are newly promoted:

```text
035 clefairy  complete B16-new p6_followup_required=true
036 clefable  complete B16-new p6_followup_required=true
037 vulpix    complete B16-new p6_followup_required=true
038 ninetales complete B16-new p6_followup_required=true
122 mr-mime   complete B16-new p6_followup_required=true
124 jynx      complete B16-new p6_followup_required=true
```

Result: **PASS**.

## Batch 16 epistemic / folklore regression

```text
observation_interpretation_legend_analogy_and_version_scoped_claims_are_distinct == true
Clefairy_full_moon_equals_guaranteed_spawn_or_buff == false
Clefable_moon_kin_equals_confirmed_origin == false
Ninetales_folklore_equals_generic_magic_system == false
Ninetales_millennium_claim_equals_exact_age_or_immortality == false
project_authored_local_folklore_equals_franchise_canon == false
```

Result: **PASS**.

## Batch 16 agency / invisible-information regression

```text
Ninetales_mind_control_equals_passive_aura_or_automatic_player_input_removal == false
Jynx_rhythmic_influence_equals_forced_dance_input_or_universal_charm_status == false
extraordinary_mental_influence_requires_trigger_warning_counterplay_and_bounded_consequence == true
Mr_Mime_invisible_barrier_equals_untelegraphed_unavoidable_collision == false
Mr_Mime_barrier_requires_discoverability_and_counterplay_when_gameplay_relevant == true
Mr_Mime_barrier_equals_permanent_map_geometry_or_indestructible_wall == false
```

Result: **PASS**.

## Batch 16 maturation / language / humanoid regression

```text
Vulpix_one_tail_to_six_equals_ordinary_maturation == true
Vulpix_tail_growth_equals_evolution_level_or_kill_XP == false
Jynx_human_sounding_cries_equal_fluent_human_language == false
Mr_Mime_pantomime_equals_human_profession == false
humanoid_shape_equals_human_personhood_or_social_identity == false
modern_scientist_or_musician_examples_equal_ancient_institutions == false
```

Result: **PASS**.

## Evolution / chronology checks

```text
family_stage_capabilities_auto_inherit_without_evidence == false
Moon_Stone_or_Fire_Stone_metadata_equals_common_ancient_item_market == false
Cleffa_Mime_Jr_Smoochum_expand_mandatory_Gen1_roster == false
regional_forms_or_Mr_Rime_equal_proto_Kanto_presence == false
modern_Fairy_type_abilities_or_move_terms_equal_fixed_ancient_mechanics == false
```

Result: **PASS**.

## P6 follow-up audit

All six Batch 16 rows explicitly set `p6_followup_required: true` for moonlit floating and anomaly readability, acoustic-information presentation, Vulpix maturation/fire cues, Ninetales epistemic and mental-influence telegraphs, Mr. Mime invisible-barrier discoverability, and Jynx partial-communication/rhythmic-influence presentation.

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
Batch_16_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
epistemic_folklore_regression == PASS
agency_influence_regression == PASS
invisible_barrier_regression == PASS
maturation_evolution_regression == PASS
language_humanoid_regression == PASS
evolution_chronology_regression == PASS
blocking_p4_gate_count == 0
```

Batch 16 manifest promotion is complete. P4 remains active at `123 complete / 2 pilot_reviewed / 26 not_started`.
