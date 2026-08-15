# P4 Species Coverage Manifest Audit

Status: **PASS — Batch 08 promoted**  
Date: **2026-08-15**  
Tracks: **#5**  
Manifest: `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`  
Evolution authority: `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## Purpose

This audit verifies the machine-readable #001-#151 coverage state after Batch 08 source review, full-schema authoring, resource/remains/regeneration regressions and promotion.

It also corrects the previous explanatory audit text, which still reported the Batch 06 `52 complete / 2 pilot_reviewed / 97 not_started` snapshot even though the manifest itself had already promoted Batch 07 to 58 complete species.

The manifest is authoritative; this document now matches its current resolved state.

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

After Batch 08 promotion:

```text
dossier_complete_count == 64
pilot_reviewed_count == 2
not_started_count == 85
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

The two remaining `pilot_reviewed` species are unchanged:

- #131 Lapras
- #151 Mew

Result: **PASS**.

## Batch 07 continuity check

Batch 07 rows remain complete:

```text
144 articuno  complete B07-new
145 zapdos    complete B07-new
146 moltres   complete B07-new
147 dratini   complete B07-new
148 dragonair complete B07-new
149 dragonite complete B07-new
```

No Batch 07 promotion was lost while refreshing the previously stale explanatory audit.

Result: **PASS**.

## Batch 08 promotion check

Only these six previously `not_started` rows are newly promoted:

```text
104 cubone  complete B08-new p6_followup_required=true
105 marowak complete B08-new p6_followup_required=true
113 chansey complete B08-new p6_followup_required=true
114 tangela complete B08-new p6_followup_required=true
120 staryu  complete B08-new p6_followup_required=true
121 starmie complete B08-new p6_followup_required=true
```

No unrelated species row changes status.

Result: **PASS**.

## Batch 08 resource/remains/regeneration regression

```text
Cubone_skull_generic_loot == false
Marowak_bone_guaranteed_drop == false
Chansey_egg_voluntary_resource == true
Chansey_egg_farm_created == false
Tangela_detached_vine_species_local_renewable_resource == true
Tangela_permission_generalizes_to_other_species == false
Staryu_regeneration_equals_immortality == false
Staryu_regeneration_equals_combat_auto_heal == false
Starmie_core_value_equals_safe_removal == false
Starmie_core_regrowth == unknown
```

Result: **PASS**.

## Structured-data domain regression

Pinned PokeAPI gameplay `held_items` remain source metadata in their own domain and do not become P4 body-resource facts.

```text
modern_held_item_metadata_equals_ancient_loot_table == false
Thick_Club_equals_body_drop == false
Lucky_Egg_equals_Chansey_biological_output == false
Stardust_or_Star_Piece_equals_Staryu_body_product == false
```

Result: **PASS**.

## Later-generation scope regression

```text
Happiny_mandatory_P4_row_created == false
Blissey_mandatory_P4_row_created == false
Tangrowth_mandatory_P4_row_created == false
Alolan_Marowak_substitutes_original == false
mandatory_species_range == [1, 151]
```

Result: **PASS**.

## P6 follow-up audit

All six Batch 08 rows explicitly set `p6_followup_required: true`.

Primary follow-ups include:

- Cubone skull/remains readability without equipment/drop affordance;
- Marowak bone throw and rhythmic communication readability;
- Chansey offer-versus-protect egg posture without harvest/shop affordance;
- Tangela painless vine detachment and next-day regrowth without gore or generic harvest UI;
- Staryu elapsed regeneration state distinct from death or combat HP ticks;
- Starmie core/signal readability without weak-point, loot or technology implications.

No P4 document chooses final asset provenance, style, bundling or mobile budgets.

Result: **PASS**.

## Mutation rules preserved

Future P4 PRs must update this manifest atomically with reviewed status changes.

A row may be promoted to `complete` only when the corresponding dossier satisfies `docs/P4_SPECIES_DOSSIER_SCHEMA.md` and has no blocking P4 Human Design Gate.

Do not infer completion from imported source data, raw stats, sprites, outline prose, batch selection, encounter availability, modern held-item tables, or material value alone.

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
Batch_07_continuity == PASS
Batch_08_status_promotion == PASS
status_count_arithmetic == PASS
P6_followup_explicitness == PASS
resource_remains_regeneration_regression == PASS
held_item_domain_regression == PASS
later_generation_scope_regression == PASS
blocking_p4_gate_count == 0
```

Batch 08 manifest promotion is complete. P4 remains active at `64 complete / 2 pilot_reviewed / 85 not_started`.
