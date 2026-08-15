# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 11 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 11 source review, full-schema authoring, human-proximity / culture / object / training / action-economy regressions, and atomic promotion.

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

After Batch 11 promotion:

```text
dossier_complete_count == 87
pilot_reviewed_count == 2
not_started_count == 62
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two remaining `pilot_reviewed` species are unchanged:

- #131 Lapras
- #151 Mew

Result: **PASS**.

## Prior-batch continuity check

All 80 rows complete through Batch 10 remain complete. No earlier promotion was reverted while applying Batch 11.

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
041 zubat       complete B10-new
112 rhydon      complete B10-new
```

Result: **PASS**.

## Batch 11 promotion check

Only these seven previously `not_started` rows are newly promoted:

```text
052 meowth    complete B11-new p6_followup_required=true
053 persian   complete B11-new p6_followup_required=true
058 growlithe complete B11-new p6_followup_required=true
059 arcanine  complete B11-new p6_followup_required=true
066 machop    complete B11-new p6_followup_required=true
067 machoke   complete B11-new p6_followup_required=true
068 machamp   complete B11-new p6_followup_required=true
```

No unrelated species row changes status.

Result: **PASS**.

## Human-proximity / relationship regression

```text
Persian_pet_possibility_equals_common_ancient_domestication == false
Growlithe_human_affinity_equals_automatic_companionship == false
Growlithe_faithfulness_equals_unconditional_obedience == false
Machoke_voluntary_help_equals_owned_worker == false
Machoke_voluntary_help_equals_setting_wide_labor_institution == false
visible_companion_slots == 3
portable_containment == false
```

Result: **PASS**.

## Object / resource / economy regression

```text
Meowth_forehead_coinlike_feature_equals_minted_currency == false
Meowth_Pickup_equals_loot_generation == false
Persian_admired_fur_equals_harvest_or_trade_system == false
Machoke_belt_equals_anatomy == false
Machoke_belt_equals_player_equipment_or_drop == false
Machoke_belt_equals_factory_guild_or_modern_industry_proof == false
```

The Meowth forehead feature and Machoke belt preserve unresolved provenance rather than inventing material, manufacturing, removal, replacement, market, or crafting semantics.

Result: **PASS**.

## Chronology / agency regression

```text
Arcanine_ancient_picture_scroll == source_backed
picture_scroll_equals_exact_project_era_or_polity == false
Arcanine_majestic_bark_equals_hypnosis_or_domination == false
Arcanine_bark_can_force_specific_player_action == false
Hisuian_Arcanine_added_to_mandatory_roster == false
```

Result: **PASS**.

## Training / strength / action-economy regression

```text
Machop_self_directed_training == source_backed
training_equals_kill_XP_or_visible_level_meter == false
training_equals_repeatable_stat_grind_or_player_scaling == false
Force_rating_equals_fixed_mass_or_structure_damage_formula == false
Machamp_four_arms_equals_four_turns_or_actions == false
Machamp_high_strike_count_equals_one_roll_per_strike == false
Machamp_Speed_2_equals_slow_arm_reaction == false
```

Result: **PASS**.

## Evolution-family regression

```text
Meowth_shiny_interest_auto_inherited_by_Persian == false
Persian_pet_evidence_auto_inherited_by_Meowth == false
Growlithe_human_affinity_auto_inherited_as_Arcanine_domestication == false
Arcanine_awe_bark_auto_inherited_by_Growlithe == false
Machop_training_auto_inherited_as_Machoke_labor == false
Machoke_labor_or_belt_auto_inherited_by_Machamp == false
Machamp_four_arm_pressure_auto_inherited_by_Machoke == false
```

Result: **PASS**.

## P6 follow-up audit

All seven Batch 11 rows explicitly set `p6_followup_required: true`.

Primary follow-ups include:

- Meowth night eye-shine, shiny-object attention and forehead feature without inventory/currency affordance;
- Persian tail-warning and individual human-association readability without a tame/pet flag;
- Growlithe friendly / warning / guarding states and bark readability without ownership or enemy-scan implications;
- Arcanine scale, running and majestic-bark/awe presentation without mind-control language;
- Machop heavy-object scale and training history without level or progress-meter presentation;
- Machoke belt provenance/readability and voluntary task state without player-equipment or command-menu affordances;
- Machamp four-arm multi-angle pressure and range readability without per-arm action counters.

No P4 document chooses final asset provenance, style, bundling or mobile budgets.

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, outline prose, batch selection, encounter availability, modern move/ability tables, family relationship, human-affinity text, pet evidence, work evidence, species-associated objects or limb count alone.

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
Batch_11_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
human_proximity_regression == PASS
object_resource_economy_regression == PASS
chronology_agency_regression == PASS
training_strength_action_economy_regression == PASS
evolution_stage_inheritance_regression == PASS
blocking_p4_gate_count == 0
```

Batch 11 manifest promotion is complete. P4 remains active at `87 complete / 2 pilot_reviewed / 62 not_started`.
