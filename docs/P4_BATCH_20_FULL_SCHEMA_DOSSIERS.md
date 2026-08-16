# P4 Batch 20 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 20 completion audit**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_20_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #023 | Ekans / 아보 | `docs/P4_BATCH_20_DOSSIER_023_EKANS.md` |
| #024 | Arbok / 아보크 | `docs/P4_BATCH_20_DOSSIER_024_ARBOK.md` |
| #060 | Poliwag / 발챙이 | `docs/P4_BATCH_20_DOSSIER_060_POLIWAG.md` |
| #061 | Poliwhirl / 슈륙챙이 | `docs/P4_BATCH_20_DOSSIER_061_POLIWHIRL.md` |
| #062 | Poliwrath / 강챙이 | `docs/P4_BATCH_20_DOSSIER_062_POLIWRATH.md` |

Each dossier contains all 20 frozen-schema top-level sections and `dossier_status: complete`.

## 2. Deterministic rating profiles

```text
Ekans      1/3/2/2/2/2
Arbok      3/4/3/3/3/4
Poliwag    2/2/2/2/2/4
Poliwhirl  3/3/3/2/2/4
Poliwrath  4/4/4/3/4/3

rating_scale_version == p4-six-axis-v1
manual_rating_exception_count == 0
```

## 3. Epistemic / chronology regression

```text
observation_equals_world_formula == false
version_scoped_extraordinary_equals_universal_species_law == false
modern_ability_semantics_equal_ancient_trigger_formulas == false
modern_level_stone_trade_or_Kings_Rock_metadata_equal_ancient_progression_law == false
Politoed_context_equals_mandatory_Gen1_presence == false
project_extrapolation_equals_franchise_canon == false
```

## 4. Ekans stealth / sensing / feeding regression

```text
Ekans_stealthy_movement == source_backed
Ekans_tongue_sensing == source_backed
Ekans_large_prey_swallowing == source_backed
Ekans_post_feeding_mobility_pressure == source_backed_context
stealth_equals_invisibility_or_guaranteed_surprise == false
tongue_sensing_equals_omniscient_or_continuous_scan == false
swallowing_equals_instant_kill_or_arbitrary_target_storage == false
newborn_nonvenomous_wording_requires_continuous_age_simulation == false
```

## 5. Arbok intimidation / constriction / pursuit regression

```text
Arbok_intimidation_display == source_backed
Arbok_persistent_pursuit == source_backed
Arbok_binding_and_poisoning == historical_cross_source_backed
Arbok_extreme_constriction_scale == historical_version_scoped_source_backed
intimidation_equals_forced_Fear_flee_or_input_loss == false
constriction_equals_free_or_permanent_restraint == false
historical_no_escape_wording_equals_universal_rule == false
persistent_pursuit_equals_infinite_chase_or_perfect_tracking == false
steel_drum_crushing_equals_mining_or_structural_deletion == false
```

## 6. Poliwag locomotion / anatomy regression

```text
Poliwag_visible_internal_spiral == source_backed
Poliwag_newly_developed_legs_and_poor_land_walking == source_backed
Poliwag_aquatic_preference == source_backed
Poliwag_thin_flexible_skin == historical_cross_source_backed
poor_land_walking_equals_automatic_immobilization == false
thin_flexible_skin_equals_universal_puncture_immunity == false
visible_internal_anatomy_equals_continuous_body_simulation == false
Water_type_equals_unrestricted_aquatic_or_amphibious_traversal == false
```

## 7. Poliwhirl amphibious / drowsiness regression

```text
Poliwhirl_amphibious_living == source_backed
Poliwhirl_moist_slippery_skin == source_backed_cross_source
Poliwhirl_spiral_linked_drowsiness == historical_cross_source_backed
slippery_skin_equals_guaranteed_restraint_escape == false
moist_skin_equals_continuous_hydration_meter == false
spiral_drowsiness_equals_passive_hypnosis_or_automatic_sleep == false
spiral_effect_equals_continuous_per_frame_gaze_polling == false
player_input_removal_created == false
```

## 8. Poliwrath endurance / traversal regression

```text
Poliwrath_whole_body_swimming == source_backed
Poliwrath_dry_land_living == source_backed
Poliwrath_brief_water_surface_running == source_backed
Poliwrath_extreme_swimming_endurance == source_backed_cross_source_scale
never_tired_or_Pacific_crossing_wording_equals_infinite_stamina == false
ocean_crossing_equals_literal_world_travel_formula == false
water_surface_running_equals_permanent_water_walking == false
water_surface_running_equals_passenger_fast_travel == false
Fighting_type_equals_human_martial_institution == false
```

## 9. One-entity / action-economy / player-agency regression

```text
all_five_one_Pokemon_one_ordinary_turn_one_health_state_one_initiative_presence == true
all_five_one_visible_companion_slot_per_individual == true
serpentine_body_coils_or_multiple_limbs_equal_extra_actions == false
venom_constriction_drowsiness_and_water_hazards_preserve_warning_eligibility_counterplay_escape_and_player_input == true
automatic_poison_Fear_sleep_or_restraint_created == false
```

## 10. Threat / progression compatibility

```text
ordinary_Ekans_or_Poliwag_may_become_late_game_routine == true
ordinary_Arbok_or_Poliwrath_remain_formidable_only_from_their_fixed_species_baseline_and_context == true
player_level_enemy_scaling_created == false
exceptional_individuals_require_persistent_history_and_distinctive_traits == true
weak_species_named_apex_semantics_preserved == true
hazard_severity_capped_by_species_axis == false
```

## 11. Companionship classifications

```text
Ekans      eligible
Arbok      eligible
Poliwag    eligible
Poliwhirl  eligible
Poliwrath  eligible
```

All companionship remains voluntary. Defeat, fear, restraint, aquatic usefulness or survival of an encounter never implies ownership.

## 12. Resource / craft boundary

```text
live_venom_extraction_equal_repeatable_default_resource_loop == false
shed_skin_equal_guaranteed_drop == false
Poliwag_or_Poliwhirl_skin_equal_material_node == false
Poliwrath_strength_equal_transport_or_power_infrastructure == false
generic_material_conversion_allowed == false
ownership_shortcut_forbidden == true
all_five_p6_followup_required == true
```

## 13. Runtime / implementation boundary

```text
continuous_stealth_or_scent_scan == false
continuous_poison_proximity_scanning == false
continuous_grapple_squeeze == false
continuous_pursuit_tracking_race == false
continuous_hydration_or_maturation_simulation == false
continuous_gaze_polling == false
continuous_swimming_fluid_or_stamina_simulation == false
per_appendage_entity_or_turn == false
cached_authored_or_discrete_state_lookup_preferred == true
```

Representative later-runtime state can remain coarse and event-driven: `hidden_in_grass`, `tongue_sensing_relevant`, `coiled`, `pursuing`, `venom_exposure_eligible`, `in_water`, `on_land`, `wet_skin`, `visual_spiral_exposure`, `surface_burst_eligible` and equivalent authored flags.

## 14. D-034 encounterability regression

```text
all_five_directly_encounterable_somewhere == true
direct_encounterable_equals_common_everywhere == false
direct_encounterable_equals_ordinary_companionship == false
water_or_grass_habitat_fit_equals_guaranteed_presence_in_every_matching_zone == false
```

## 15. Completion state

```text
full_schema_dossier_count == 5
dossier_status_complete_count == 5
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

Batch 20 is ready for completion audit and atomic manifest promotion.
