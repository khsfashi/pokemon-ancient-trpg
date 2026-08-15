# P4 Batch 08 — Completion Audit

Status: **PASS — READY FOR MANIFEST PROMOTION**  
Date: **2026-08-15**  
Tracks: **#5**  
Inputs: `docs/P4_BATCH_08_BIOLOGICAL_RESOURCES_REMAINS_REGENERATION_PLAN.md`, `docs/P4_BATCH_08_SOURCE_REVIEW.md`, `docs/P4_BATCH_08_FULL_SCHEMA_DOSSIERS.md`, the six indexed species dossier documents, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P2_INJURY_AND_LETHALITY_CONTRACT.md`, `docs/P2_KILLING_ETHICS_CONTRACT.md`, `docs/P3_INVENTORY_RESOURCES_AND_ECONOMY_CONTRACT.md`

## 1. Scope

Batch 08 audits six biological-resource / remains / regeneration stress species:

- #104 Cubone
- #105 Marowak
- #113 Chansey
- #114 Tangela
- #120 Staryu
- #121 Starmie

The batch tests whether body-derived value can stay species-, state-, knowledge- and consent-sensitive rather than collapsing into `kill creature -> receive item`.

## 2. Source and normalization audit

```text
source_review_species_count == 6
structured_source_revision == PokeAPI/api-data@2cda0b56a3a8ad2529d8aac73528225f96d2c848
rating_scale_version == p4-six-axis-v1
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
```

Derived profiles:

```text
Cubone  2/2/4/2/2/1
Marowak 3/4/5/2/4/2
Chansey 6/1/1/1/5/2
Tangela 3/2/5/5/2/3
Staryu  1/2/2/3/2/4
Starmie 3/3/4/5/4/5
```

Result: **PASS**.

## 3. Full-schema audit

Each indexed dossier contains reviewed or explicitly absent values for the complete shared P4 surface.

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
blocking_human_design_gate_count == 0
```

Result: **PASS**.

## 4. Resource provenance regression

```text
Cubone_skull_origin == dead_mother_remains
Cubone_skull_generic_loot == false
Cubone_skull_safe_forcible_removal_supported == false

Marowak_bone_weapon_use == true
Marowak_bone_communication_use == true
Marowak_bone_body_harvest_origin == unknown
Marowak_death_guarantees_bone_drop == false

Chansey_nutritious_egg == true
Chansey_voluntary_sharing == true
Chansey_injury_or_death_required_for_egg == false
Chansey_forced_collection_supported == false

Tangela_vine_detaches_without_pain == true
Tangela_vine_regrows_by_next_day == true
Tangela_vine_culinary_use == true
Tangela_permission_generalizes_to_other_tissue == false

Staryu_regeneration_is_resource_provenance == false

Starmie_core_has_value_evidence == true
Starmie_core_safe_removal == unknown
Starmie_core_removal_survivability == unknown
Starmie_core_regrowth == unknown
Starmie_core_guaranteed_drop == false
```

Result: **PASS**.

## 5. Generic loot / inventory regression

```text
generic_corpse_drop_rule_created == false
generic_body_part_drop_table_created == false
generic_corpse_inventory_created == false
generic_harvest_skill_created == false
kill_creature_equals_material_conversion == false
body_part_value_equals_safe_pickup == false
identity_bound_remains_equal_equipment == false
```

Every exact material or resource path requires species-specific provenance and scene state.

Result: **PASS**.

## 6. Regeneration / injury / death regression

```text
Staryu_major_regeneration_record == present
Staryu_major_injury_can_restore_over_hours == true
Staryu_regeneration_equals_immortality == false
Staryu_regeneration_equals_death_reversal == false
Staryu_regeneration_equals_combat_auto_heal == false
Staryu_regeneration_adds_Vigor_or_Guard == false

Tangela_vine_regrowth_record == present
Tangela_vine_regrowth_equals_whole_body_immortality == false

Starmie_core_regrowth_inferred_from_Staryu == false
```

D-020 injury, critical condition and death semantics remain authoritative.

Result: **PASS**.

## 7. Consent / behavior regression

```text
Chansey_resource_transfer_requires_voluntary_behavior == true
Tangela_detachment_can_occur_without_pain == true
Tangela_detachment_fact_equals_unlimited_harvest_consent == false
Cubone_skull_theft_is_not_neutral_resource_pickup == true
Starmie_core_value_does_not_imply_consent == true
```

The project can model renewable resources without erasing creature autonomy.

Result: **PASS**.

## 8. Economy / infrastructure regression

```text
Chansey_egg_farm_created == false
Chansey_egg_currency_created == false
Tangela_vine_industry_created == false
Starmie_ancient_black_market_created == false
Starmie_exact_price_created == false
Starmie_core_currency_created == false
resource_rumor_can_create_event_hook == true
resource_value_auto_creates_shop_stock == false
```

Modern value statements can inform temptation, protection or exploitation hooks while exact ancient institutions remain D2.

Result: **PASS**.

## 9. Structured-data held-item regression

Pinned PokeAPI gameplay metadata is kept in its domain:

```text
held_item_metadata_equals_body_resource == false
Thick_Club_equals_guaranteed_Cubone_or_Marowak_drop == false
Lucky_Egg_equals_source_backed_Chansey_biological_egg == false
Stardust_or_Star_Piece_equals_Staryu_or_Starmie_body_product == false
modern_held_item_metadata_backfills_ancient_loot_table == false
```

Result: **PASS**.

## 10. Later-generation family / chronology regression

```text
Happiny_added_to_mandatory_roster == false
Blissey_added_to_mandatory_roster == false
Tangrowth_added_to_mandatory_roster == false
Alolan_Marowak_substitutes_original_Marowak == false
chronology_anomaly_required_for_Batch_08 == false
exact_ancient_future_Kanto_locality_claimed_as_C1 == false
```

Later family/form metadata remains context, not scope expansion.

Result: **PASS**.

## 11. Companionship regression

```text
visible_companion_slots == 3
capture_equals_companionship == false
portable_containment == false
resource_output_equals_ownership == false

Cubone_classification == difficult_but_possible
Marowak_classification == difficult_but_possible
Chansey_classification == difficult_but_possible
Tangela_classification == difficult_but_possible
Staryu_classification == difficult_but_possible
Starmie_classification == exceptional_only
```

Result: **PASS**.

## 12. P2 / P3 / P4 contradiction review

```text
iron_age_baseline_preserved == true
trainer_culture_assumed == false
portable_Poke_Ball_containment_assumed == false
three_visible_companion_slots_preserved == true
zero_companion_run_still_valid == true
human_attributes_reused_as_Pokemon_stats == false
kill_XP_created == false
generic_evolution_menu_created == false
generic_loot_system_created == false
generic_harvest_system_created == false
generic_regeneration_system_created == false
generic_breeding_farming_system_created == false
modern_market_infrastructure_backfilled == false
player_level_enemy_scaling_created == false
blocking_human_design_gate_count == 0
```

Result: **PASS**.

## 13. Manifest promotion target

Only these six rows may be promoted by this batch:

```text
104 cubone
105 marowak
113 chansey
114 tangela
120 staryu
121 starmie
```

Expected post-promotion state:

```text
dossier_complete_count == 64
pilot_reviewed_count == 2
not_started_count == 85
draft_count == 0
blocking_p4_gate_count == 0
```

The two remaining `pilot_reviewed` rows stay #131 Lapras and #151 Mew.

## Verdict

```text
source_review == PASS
full_schema_authoring == PASS
resource_provenance_regression == PASS
generic_loot_inventory_regression == PASS
regeneration_injury_death_regression == PASS
consent_behavior_regression == PASS
economy_infrastructure_regression == PASS
held_item_metadata_regression == PASS
later_generation_scope_regression == PASS
companionship_regression == PASS
P2_P3_P4_contradiction_review == PASS
blocking_human_design_gate_count == 0
```

Batch 08 is safe to promote atomically in the coverage manifest.
