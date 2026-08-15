# P4 Batch 15 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 15 completion audit**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_15_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #043 | Oddish / 뚜벅쵸 | `docs/P4_BATCH_15_DOSSIER_043_ODDISH.md` |
| #044 | Gloom / 냄새꼬 | `docs/P4_BATCH_15_DOSSIER_044_GLOOM.md` |
| #045 | Vileplume / 라플레시아 | `docs/P4_BATCH_15_DOSSIER_045_VILEPLUME.md` |
| #069 | Bellsprout / 모다피 | `docs/P4_BATCH_15_DOSSIER_069_BELLSPROUT.md` |
| #070 | Weepinbell / 우츠동 | `docs/P4_BATCH_15_DOSSIER_070_WEEPINBELL.md` |
| #071 | Victreebel / 우츠보트 | `docs/P4_BATCH_15_DOSSIER_071_VICTREEBEL.md` |

Each dossier contains all 20 frozen-schema top-level sections and `dossier_status: complete`.

## 2. Deterministic rating profiles

```text
Oddish     2/2/2/3/3/1
Gloom      3/3/3/4/3/2
Vileplume  3/4/4/5/4/2
Bellsprout 2/3/1/3/1/2
Weepinbell 3/4/2/4/2/2
Victreebel 4/5/3/5/3/3
```

```text
rating_scale_version == p4-six-axis-v1
manual_rating_exception_count == 0
```

## 3. Botanical-body / object regression

```text
plantlike_body_equals_scenery_crop_forage_or_resource_node == false
Oddish_daytime_burial_is_species_local == true
Oddish_daytime_burial_equals_perfect_concealment == false
Oddish_root_walking_equals_generic_Grass_burrowing == false
Oddish_seed_scattering_equals_free_crop_or_seed_resource == false
Weepinbell_plantlike_misidentification_equals_scenery == false
large_petals_leaves_roots_or_vines_equal_detachable_equipment_or_loot == false
```

## 4. Sensory attraction / player-agency regression

```text
Gloom_nectar_and_odor_are_sensory_ecology == true
Gloom_prey_attraction_equals_compulsion == false
Gloom_odor_equals_fixed_radius_or_universal_reaction == false
Gloom_extreme_faint_or_memory_wording_equals_automatic_effect == false
Victreebel_scent_lure_preserves_player_agency == true
Victreebel_vine_decoy_is_sensory_deception == true
Victreebel_lure_equals_forced_movement_or_input_suppression == false
unsuspecting_or_helpless_wording_equals_no_counterplay == false
```

## 5. Pollen / allergy / toxin regression

```text
Vileplume_airborne_pollen_hazard == source_backed
Vileplume_allergy_and_toxicity_are_distinguishable == true
Vileplume_paralysis_or_immobilization_wording_is_version_scoped == true
Vileplume_pollen_equals_constant_aura == false
Vileplume_pollen_equals_continuous_dispersion_simulation == false
Vileplume_pollen_equals_automatic_paralysis == false
Weepinbell_toxic_powder_is_separate_from_acid_hazard == true
hazard_delivery_or_exposure_equals_automatic_consequence == false
```

## 6. Corrosion / material regression

```text
Bellsprout_iron_corrosion_is_species_local == true
Bellsprout_iron_corrosion_equals_universal_material_deletion == false
Weepinbell_extreme_dissolution_wording_equals_literal_delete == false
Weepinbell_protective_fluid_equals_collectible_immunity_item == false
Victreebel_bone_or_hard_object_dissolution_equals_global_material_table == false
Victreebel_one_day_wording_equals_exact_universal_timer == false
real_world_pH_reaction_rate_or_durability_system_imported == false
automatic_equipment_or_terrain_deletion == false
```

## 7. Rooting / movement regression

```text
Bellsprout_rooted_rehydration_is_temporary_species_local_state == true
Bellsprout_rooted_state_can_prevent_escape == true
Bellsprout_rooting_equals_generic_healing == false
Bellsprout_rooting_equals_forced_movement_immunity == false
Bellsprout_motion_reaction_equals_omniscient_detection == false
Bellsprout_motion_reaction_equals_automatic_initiative == false
Bellsprout_evade_any_attack_wording_equals_invulnerability == false
```

## 8. Feeding-history / progression regression

```text
Victreebel_feeding_history_changes_acid_sweetness_qualitatively == true
Victreebel_feeding_history_equals_kill_XP == false
Victreebel_feeding_history_equals_hidden_level_or_permanent_stat_growth == false
Victreebel_feeding_history_equals_recursive_damage_or_corrosion_scaling == false
Victreebel_sweeter_acid_equals_farmable_resource_loop == false
ordinary_species_auto_scale_with_player == false
exceptional_individuals_require_explicit_persistent_history_and_traits == true
```

## 9. Evolution-stage inheritance and chronology

```text
Oddish_burial_behavior_auto_inherited_by_Gloom_or_Vileplume == false
Gloom_nectar_or_odor_auto_inherited_by_Vileplume == false
Bellsprout_rooted_rehydration_auto_inherited_by_Weepinbell_or_Victreebel == false
Weepinbell_rear_hook_roost_auto_inherited_by_Victreebel == false
modern_level_21_metadata_equals_ancient_level_or_kill_XP_law == false
Leaf_Stone_metadata_equals_common_ancient_item_market == false
Bellossom_and_Sun_Stone_are_post_Gen1_context_only == true
modern_abilities_or_move_mechanics_equal_fixed_ancient_formulas == false
```

## 10. Companionship classifications

```text
Oddish     eligible
Gloom      eligible
Vileplume  exceptional_only
Bellsprout eligible
Weepinbell exceptional_only
Victreebel exceptional_only
```

All companionship remains voluntary, never follows automatically from defeat, and costs one visible slot per active Pokémon.

## 11. Resource / P6 boundary

```text
secretions_pollen_acid_protective_fluid_seeds_or_leaf_anatomy_equals_automatic_loot == false
generic_material_conversion_allowed == false
P6_must_define_safe_acquisition_containment_preservation_and_ethics_before_itemization == true
p6_followup_required_for_all_six == true
```

## 12. Completion state

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

Batch 15 is ready for completion audit and atomic manifest promotion.
