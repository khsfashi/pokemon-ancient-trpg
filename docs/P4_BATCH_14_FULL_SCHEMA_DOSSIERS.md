# P4 Batch 14 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 14 completion audit**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_14_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #027 | Sandshrew / 모래두지 | `docs/P4_BATCH_14_DOSSIER_027_SANDSHREW.md` |
| #028 | Sandslash / 고지 | `docs/P4_BATCH_14_DOSSIER_028_SANDSLASH.md` |
| #050 | Diglett / 디그다 | `docs/P4_BATCH_14_DOSSIER_050_DIGLETT.md` |
| #051 | Dugtrio / 닥트리오 | `docs/P4_BATCH_14_DOSSIER_051_DUGTRIO.md` |
| #074 | Geodude / 꼬마돌 | `docs/P4_BATCH_14_DOSSIER_074_GEODUDE.md` |
| #075 | Graveler / 데구리 | `docs/P4_BATCH_14_DOSSIER_075_GRAVELER.md` |
| #076 | Golem / 딱구리 | `docs/P4_BATCH_14_DOSSIER_076_GOLEM.md` |
| #095 | Onix / 롱스톤 | `docs/P4_BATCH_14_DOSSIER_095_ONIX.md` |

Each dossier contains all 20 frozen-schema top-level sections and `dossier_status: complete`.

## 2. Deterministic rating profiles

```text
Sandshrew 2/3/4/1/1/2
Sandslash 3/5/5/2/2/3
Diglett   1/2/1/1/2/4
Dugtrio   1/5/2/2/3/6
Geodude   2/4/5/1/1/1
Graveler  2/4/5/2/2/1
Golem     4/6/6/2/3/2
Onix      1/2/6/1/2/3
```

```text
rating_scale_version == p4-six-axis-v1
manual_rating_exception_count == 0
```

## 3. Subterranean traversal regression

```text
Ground_or_Rock_type_equals_burrowing_permission == false
Speed_rating_equals_literal_burrowing_velocity == false
Force_rating_equals_terrain_or_structure_damage_formula == false
Sandshrew_burrow_depth_and_substrate_limits_remain_unresolved == true
Diglett_underground_equals_perfect_stealth == false
Diglett_hidden_lower_body_shape == intentionally_unresolved
Dugtrio_unexpected_direction_equals_unavoidable_surprise == false
Onix_50_mph_equals_runtime_movement_or_fast_travel == false
Onix_long_tunnel_equals_safe_permanent_route == false
```

## 4. Lithic body / resource regression

```text
Geodude_rocklike_body_equals_object_or_ore == false
Geodude_low_information_misidentification_preserved == true
Sandslash_regrowth_equals_repeatable_live_harvest == false
Sandslash_naturally_shed_spike_path_is_contextual == true
Golem_annual_shed_shell_is_nonlethal_material_path == true
Golem_shed_shell_equals_automatic_loot_drop == false
Golem_shed_shell_equals_universal_fertilizer_economy == false
Onix_internal_magnetic_navigation_equals_harvestable_compass == false
```

## 5. Rolling / explosive hazard regression

```text
Sandslash_rolling_equals_unavoidable_collision == false
Graveler_rolling_equals_unstoppable_state == false
Graveler_rolling_equals_automatic_landslide == false
Graveler_Speed_1_does_not_cap_downhill_hazard_severity == true
Golem_self_explosion_equals_real_world_TNT_or_blast_formula == false
Golem_dynamite_wording_equals_ancient_dynamite_technology == false
hazard_severity_capped_by_species_axis == false
```

## 6. Human-context chronology regression

```text
Diglett_later_farm_raising_proves_possible_use == true
Diglett_later_farm_raising_equals_ancient_domestication_norm == false
Golem_human_diversion_grooves_prove_local_adaptation_possible == true
Golem_diversion_grooves_equal_setting_wide_infrastructure == false
modern_evolution_levels_or_trade_equal_ancient_levels_XP_or_trade_institution == false
modern_abilities_equal_fixed_ancient_percentages_or_guarantees == false
```

## 7. Multi-head regression

```text
Dugtrio_active_entity_count == 1
Dugtrio_ordinary_turn_count == 1
Dugtrio_independent_health_state_count == 1
Dugtrio_visible_companion_slot_cost == 1
three_heads_or_triplet_wording_equals_three_entities == false
```

## 8. Companionship classifications

```text
Sandshrew eligible
Sandslash exceptional_only
Diglett   eligible
Dugtrio   exceptional_only
Geodude   eligible
Graveler  exceptional_only
Golem     exceptional_only
Onix      exceptional_only
```

All companionship remains voluntary, never follows automatically from defeat, and costs one visible slot per active entity.

## 9. Completion state

```text
full_schema_dossier_count == 8
dossier_status_complete_count == 8
required_section_count_per_dossier == 20
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

Batch 14 is ready for completion audit and atomic manifest promotion.
