# P4 Batch 08 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 08 audit**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_08_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P2_INJURY_AND_LETHALITY_CONTRACT.md`, `docs/P2_KILLING_ETHICS_CONTRACT.md`, `docs/P3_INVENTORY_RESOURCES_AND_ECONOMY_CONTRACT.md`

## 1. Review boundary

All six Batch 08 species use the frozen P4 dossier schema and `p4-six-axis-v1` with no manual stat exception.

This batch stresses biological resources, remains, renewability, consent/behavior semantics and regeneration without introducing generic corpse drops, harvesting, breeding/farming, combat regeneration, or ancient market infrastructure.

```text
generic_corpse_drop_rule_created == false
generic_body_part_inventory_created == false
generic_harvest_system_created == false
resource_value_equals_safe_removal == false
renewable_tissue_permission_is_species_local == true
voluntary_resource_transfer_is_preserved == true
regeneration_equals_immortality == false
regeneration_equals_combat_auto_heal == false
modern_held_items_equal_body_resource == false
later_generation_family_context_expands_mandatory_roster == false
```

## 2. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #104 | Cubone / 탕구리 | `docs/P4_BATCH_08_DOSSIER_104_CUBONE.md` |
| #105 | Marowak / 텅구리 | `docs/P4_BATCH_08_DOSSIER_105_MAROWAK.md` |
| #113 | Chansey / 럭키 | `docs/P4_BATCH_08_DOSSIER_113_CHANSEY.md` |
| #114 | Tangela / 덩쿠리 | `docs/P4_BATCH_08_DOSSIER_114_TANGELA.md` |
| #120 | Staryu / 별가사리 | `docs/P4_BATCH_08_DOSSIER_120_STARYU.md` |
| #121 | Starmie / 아쿠스타 | `docs/P4_BATCH_08_DOSSIER_121_STARMIE.md` |

Every document contains the shared required sections:

```text
identity
provenance
canonical_source_data
species_stat_profile
capabilities_and_hazards
ancient_strength
ancient_ecology
human_perception_and_culture
identification_and_knowledge
threat_and_encounter
individual_variation
companionship
mechanical_hooks
hunting_materials_and_resources
technology_and_craft
emergency_consumable_hooks
narrative_and_event_hooks
presentation_and_p6_followups
cross_species_links
open_questions_and_gates
```

## 3. Resource provenance matrix

```text
Cubone_maternal_skull     = identity_bound_dead_relative_remains
Marowak_carried_bone      = behavioral_weapon_and_signal_object_origin_unknown
Chansey_egg               = living_output_voluntary_transfer
Tangela_detached_vine     = painless_renewable_living_tissue
Staryu_regeneration       = recovery_capability_not_resource_provenance
Starmie_core              = valuable_anatomy_safe_removal_unknown
```

The matrix intentionally refuses a common `body_part -> item` conversion path.

## 4. Positive and negative controls

### Positive renewable-resource control

Tangela explicitly supports all of the facts needed for a narrow renewable resource permission:

```text
vine_detaches_without_pain == true
vine_regrows_by_next_day == true
vine_has_culinary_use == true
```

This permission is limited to Tangela vines.

Chansey independently supports a different positive resource pattern:

```text
nutritious_egg_produced == true
voluntary_sharing_with_injured == true
forced_collection_supported == false
```

### Negative harvest controls

```text
Cubone_skull_generic_loot == false
Marowak_bone_origin_as_harvested_body_part == unknown
Staryu_regeneration_proves_harvestable_tissue == false
Starmie_core_safe_removal == unknown
Starmie_core_regrowth == unknown
```

Unknown values stay unknown rather than becoming gameplay convenience.

## 5. Regeneration boundary

Staryu receives explicit post-injury recovery semantics but no new global combat rule:

```text
staryu-major-regeneration == present
instant_combat_HP_tick == false
death_reversal == false
immortality == false
Vigor_bonus_from_regeneration == false
Guard_bonus_from_regeneration == false
```

Tangela's next-day vine regrowth is likewise tissue-specific and does not imply whole-body regeneration.

Starmie's family relationship to Staryu does not prove its core can safely be removed or regrown.

## 6. Remains / ethics boundary

Cubone's maternal skull is represented as identity-bound remains. It is never a default equipment slot, harvest target or guaranteed drop.

Marowak's bone is represented as a weapon and communication object. The reviewed source does not establish a generic origin or a body-harvest pipeline.

P2 killing/lethality and ethics contracts remain authoritative. P4 species value cannot silently turn killing into an optimized resource loop.

## 7. Economy / infrastructure boundary

Starmie's high-value-core statement authorizes value/exploitation hooks but not setting-wide infrastructure:

```text
modern_value_statement_preserved == true
ancient_exact_price_created == false
ancient_black_market_created == false
safe_core_extraction_recipe_created == false
core_as_currency_created == false
```

Chansey eggs and Tangela vines also do not create standardized currency, shop stock, farming throughput or industrial supply chains.

## 8. Structured-data boundary

Pinned PokeAPI `held_items` remain modern gameplay metadata.

```text
Thick_Club_metadata_equals_Marowak_body_drop == false
Lucky_Egg_metadata_equals_Chansey_biological_egg == false
Stardust_or_Star_Piece_metadata_equals_Staryu_body_product == false
held_item_metadata_backfills_ancient_loot == false
```

Only official evidence that actually describes biology/resource semantics is used for body-derived resource permissions.

## 9. Companionship state

```text
Cubone  difficult_but_possible
Marowak difficult_but_possible
Chansey difficult_but_possible
Tangela difficult_but_possible
Staryu  difficult_but_possible
Starmie exceptional_only
```

All classifications require voluntary persistent bonds. None use defeat/capture, portable storage, or resource extraction as recruitment.

## 10. Completion state

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

No Batch 08 dossier introduces a blocking Human Design Gate. The batch is ready for completion audit and atomic manifest promotion.
