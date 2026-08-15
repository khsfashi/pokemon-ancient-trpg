# P4 Batch 12 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 12 audit**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_12_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`

## 1. Review boundary

All nine Batch 12 species use the frozen P4 dossier schema and `p4-six-axis-v1` with no manual stat exception.

The batch preserves source-backed integrated anatomy, condition readability, sunlight/season relationships, local heat, flight, battle-history signals, shell maturation, cultural symbolism and shell-integrated water jets without silently creating inventory/equipment, exact HP UI, fixed low-HP physiology, generic type/weather formulas, XP/levels, domestication, technology chronology or stage-wide inheritance.

```text
body_integrated_anatomy_equals_equipment_or_loot == false
condition_signal_equals_numeric_HP_UI == false
Overgrow_Blaze_Torrent_equals_ancient_fixed_low_HP_physiology == false
sunlight_or_summer_fact_equals_generic_Grass_weather_formula == false
local_heat_equals_generic_Fire_aura == false
battle_history_equals_kill_XP_visible_level_or_player_scaling == false
maturation_equals_evolution == false
longevity_symbolism_equals_lifespan_transfer_or_harvestable_charm == false
shell_nozzle_analogy_equals_human_cannon_rocket_or_pressure_technology == false
starter_role_equals_ancient_distribution_safety_or_domestication == false
```

## 2. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #001 | Bulbasaur / 이상해씨 | `docs/P4_BATCH_12_DOSSIER_001_BULBASAUR.md` |
| #002 | Ivysaur / 이상해풀 | `docs/P4_BATCH_12_DOSSIER_002_IVYSAUR.md` |
| #003 | Venusaur / 이상해꽃 | `docs/P4_BATCH_12_DOSSIER_003_VENUSAUR.md` |
| #004 | Charmander / 파이리 | `docs/P4_BATCH_12_DOSSIER_004_CHARMANDER.md` |
| #005 | Charmeleon / 리자드 | `docs/P4_BATCH_12_DOSSIER_005_CHARMELEON.md` |
| #006 | Charizard / 리자몽 | `docs/P4_BATCH_12_DOSSIER_006_CHARIZARD.md` |
| #007 | Squirtle / 꼬부기 | `docs/P4_BATCH_12_DOSSIER_007_SQUIRTLE.md` |
| #008 | Wartortle / 어니부기 | `docs/P4_BATCH_12_DOSSIER_008_WARTORTLE.md` |
| #009 | Blastoise / 거북왕 | `docs/P4_BATCH_12_DOSSIER_009_BLASTOISE.md` |

Every dossier contains the shared required sections:

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

## 3. Deterministic rating profiles

```text
Bulbasaur  2/2/2/3/3/2
Ivysaur    3/3/3/4/4/3
Venusaur   4/4/4/5/5/4
Charmander 1/2/2/3/2/3
Charmeleon 2/3/2/4/3/4
Charizard  3/4/3/5/4/5
Squirtle   2/2/3/2/3/2
Wartortle  2/3/4/3/4/2
Blastoise  3/4/5/4/5/3
```

No dossier adds a manual rating exception.

## 4. Integrated anatomy / resource regression

```text
Bulbasaur_seed_is_body_integrated == true
Ivysaur_bud_is_body_integrated == true
Venusaur_flower_is_body_integrated == true
Squirtle_shell_is_body_integrated == true
Blastoise_nozzles_are_shell_integrated == true
integrated_anatomy_equals_equipment == false
integrated_anatomy_equals_inventory == false
integrated_anatomy_equals_safe_harvest_resource == false
```

The batch never converts familiar object-language such as seed, shell or cannon/nozzle into detachable player systems.

## 5. Condition / modern ability regression

```text
Charmander_tail_flame_broad_condition_signal == source_backed
Charmander_flame_equals_exact_HP == false
Charmander_flame_equals_fixed_percentage_threshold == false
Charmander_flame_equals_complete_injury_diagnosis == false
temporary_total_extinguishing_equals_automatic_instant_death == unresolved_not_assumed
Overgrow_Blaze_Torrent_low_HP_text == modern_mechanic_context
Overgrow_Blaze_Torrent_equals_ancient_project_damage_multiplier == false
```

## 6. Environment / type regression

```text
Ivysaur_sunlight_link == source_backed
Venusaur_solar_energy_and_summer_relation == source_backed
Charmeleon_local_heat == source_backed
Blastoise_recoil_bracing == source_backed
Grass_type_equals_generic_photosynthesis_weather_rule == false
Fire_type_equals_generic_heat_aura == false
Water_type_equals_generic_jet_propulsion == false
```

Scene state may matter, but no hidden type-derived modifier system is introduced.

## 7. Battle history / individual variation regression

```text
Charizard_battle_history_can_correlate_with_hotter_flame == source_backed
battle_history_equals_kill_XP == false
battle_history_equals_visible_level == false
battle_history_equals_repeatable_stat_grind == false
battle_history_equals_player_scaled_enemy_growth == false
exceptional_individuals_require_explicit_history_traits_and_stat_deltas == true
```

Charizard serves as a positive control for D-031: a veteran individual can be notably more dangerous without converting the whole species into a scaling progression system.

## 8. Maturation / evolution regression

```text
Squirtle_post_birth_shell_hardening == source_backed
shell_hardening_equals_biological_maturation == true
shell_hardening_equals_evolution == false
modern_evolution_levels_16_32_36_are_source_metadata == true
modern_evolution_levels_equal_character_level_or_kill_XP == false
```

## 9. Culture / domestication regression

```text
Wartortle_tail_longevity_symbolism == source_backed
Wartortle_popularity_among_older_people == source_backed
symbolism_equals_human_lifespan_extension == false
popularity_equals_common_ancient_pet_ownership == false
tail_equals_harvestable_charm_or_blessing_source == false
starter_role_equals_common_companion_or_beginner_safe == false
```

## 10. Technology chronology regression

```text
Blastoise_shell_jet_nozzles == source_backed
Blastoise_recoil_management == source_backed
cannon_jet_rocket_analogy_equals_human_technology_proof == false
ancient_humans_have_cannon_rocket_pressure_vessel_or_industrial_metallurgy_from_this_evidence == false
nozzles_equal_detachable_weapon_or_player_equipment == false
```

## 11. Evolution-stage inheritance regression

```text
Bulbasaur_seed_reserve_auto_inherited_as_Ivysaur_rule == false
Ivysaur_bloom_aroma_auto_inherited_as_Venusaur_rule == false
Venusaur_summer_power_auto_inherited_backwards == false
Charmander_health_flame_semantics_auto_inherited_by_Charmeleon_or_Charizard == false
Charmeleon_battle_seeking_heat_auto_inherited_by_Charmander_or_Charizard == false
Charizard_flight_or_battle_history_auto_inherited_backwards == false
Squirtle_soft_shell_maturation_auto_inherited_by_Wartortle_or_Blastoise == false
Wartortle_longevity_symbolism_auto_inherited_by_family == false
Blastoise_nozzles_auto_inherited_backwards == false
```

## 12. Companionship state

Frozen schema classifications:

```text
Bulbasaur  eligible
Ivysaur    eligible
Venusaur   exceptional_only
Charmander eligible
Charmeleon eligible
Charizard  exceptional_only
Squirtle   eligible
Wartortle  eligible
Blastoise  exceptional_only
```

`eligible` never means common ownership, easy capture or starter distribution. Every classification still requires voluntary persistent trust, three-slot accounting and no portable containment.

## 13. Threat progression compatibility

The batch preserves the project rule that ordinary low-tier species may become routine later while named exceptions remain dangerous:

```text
ordinary_Bulbasaur_Charmander_Squirtle_can_become_late_game_routine == true
ordinary_species_auto_scale_with_player == false
exceptional_unevolved_individual_can_exceed_ordinary_evolved_specimen_in_selected_axes == true
final_stage_species_remain_high_threat_without_scaling == true
```

## 14. Completion state

```text
full_schema_dossier_count == 9
dossier_status_complete_count == 9
required_section_count_per_dossier == 20
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

No Batch 12 dossier introduces a blocking Human Design Gate. The batch is ready for completion audit and atomic manifest promotion validation.
