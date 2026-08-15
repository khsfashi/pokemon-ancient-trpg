# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 09 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 09 source review, full-schema authoring, mind-state/agency/exposure-route/traversal regressions and promotion.

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

After Batch 09 promotion:

```text
dossier_complete_count == 72
pilot_reviewed_count == 2
not_started_count == 77
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two remaining `pilot_reviewed` species are unchanged:

- #131 Lapras
- #151 Mew

Result: **PASS**.

## Batch 07 / Batch 08 continuity check

Earlier promoted rows remain complete. In particular:

```text
144 articuno  complete B07-new
145 zapdos    complete B07-new
146 moltres   complete B07-new
147 dratini   complete B07-new
148 dragonair complete B07-new
149 dragonite complete B07-new

104 cubone    complete B08-new
105 marowak   complete B08-new
113 chansey   complete B08-new
114 tangela   complete B08-new
120 staryu    complete B08-new
121 starmie   complete B08-new
```

No prior promotion was lost while applying Batch 09.

Result: **PASS**.

## Batch 09 promotion check

Only these eight previously `not_started` rows are newly promoted:

```text
039 jigglypuff complete B09-new p6_followup_required=true
040 wigglytuff complete B09-new p6_followup_required=true
048 venonat    complete B09-new p6_followup_required=true
049 venomoth   complete B09-new p6_followup_required=true
054 psyduck    complete B09-new p6_followup_required=true
055 golduck    complete B09-new p6_followup_required=true
096 drowzee    complete B09-new p6_followup_required=true
097 hypno      complete B09-new p6_followup_required=true
```

No unrelated species row changes status.

Result: **PASS**.

## Mind-state / agency regression

```text
Jigglypuff_auditory_sleep == species_local
Wigglytuff_auto_inherits_Jigglypuff_sleep == false
Drowzee_dream_access_requires_sleeping_dreaming_target == true
Drowzee_dream_equals_objective_truth == false
Hypno_hypnosis_equals_arbitrary_command == false
silent_player_action_rewriting == false
one_universal_mental_save == false
```

Result: **PASS**.

## Exposure-route regression

```text
Venonat_primary_review_route == body_surface_contact
Venomoth_primary_review_route == dispersed_toxic_scale_or_powder
Venonat_airborne_cloud_inferred == false
all_Poison_type_species_share_powder_rule == false
exposure_avoidance_equals_post_exposure_consequence == false
```

Result: **PASS**.

## Psyduck / Golduck regression

```text
Psyduck_headache_triggered_manifestation_can_be_involuntary == true
Psyduck_random_unbounded_psychic_table == false
Psyduck_target_amnesia_inferred == false
Golduck_rough_water_route_permission == true
Golduck_Speed_equals_Swim_formula == false
Psyduck_headache_trait_auto_inherited_by_Golduck == false
```

Result: **PASS**.

## P6 follow-up audit

All eight Batch 09 rows explicitly set `p6_followup_required: true`.

Primary follow-ups include:

- Jigglypuff auditory exposure and sleep readability with a non-audio accessibility path;
- Wigglytuff inflation/impact telegraphing without inheriting Jigglypuff's sleep affordance;
- Venonat contact-hazard readability distinct from Venomoth's airborne/dispersed hazard;
- Venomoth scale-cloud/airflow readability without fixed-radius damage-circle implications;
- Psyduck distress and involuntary manifestation readability without a player-controllable charge meter;
- Golduck route-permission readability without a numeric Swim stat;
- Drowzee subjective dream information labeling without omniscient mind-reading UI;
- Hypno pendulum/gaze exposure cues while preserving player action agency.

No P4 document chooses final asset provenance, style, bundling or mobile budgets.

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, outline prose, batch selection, encounter availability, modern move/ability tables, family relationship, or type membership alone.

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
Batch_09_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
mind_state_agency_regression == PASS
exposure_route_regression == PASS
involuntary_psychic_regression == PASS
aquatic_route_permission_regression == PASS
blocking_p4_gate_count == 0
```

Batch 09 manifest promotion is complete. P4 remains active at `72 complete / 2 pilot_reviewed / 77 not_started`.
