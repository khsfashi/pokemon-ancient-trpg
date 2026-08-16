# P4 Batch 17 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 17 completion audit**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_17_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`

## 1. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #056 | Mankey / 망키 | `docs/P4_BATCH_17_DOSSIER_056_MANKEY.md` |
| #057 | Primeape / 성원숭 | `docs/P4_BATCH_17_DOSSIER_057_PRIMEAPE.md` |
| #106 | Hitmonlee / 시라소몬 | `docs/P4_BATCH_17_DOSSIER_106_HITMONLEE.md` |
| #107 | Hitmonchan / 홍수몬 | `docs/P4_BATCH_17_DOSSIER_107_HITMONCHAN.md` |
| #123 | Scyther / 스라크 | `docs/P4_BATCH_17_DOSSIER_123_SCYTHER.md` |
| #127 | Pinsir / 쁘사이저 | `docs/P4_BATCH_17_DOSSIER_127_PINSIR.md` |

Each dossier contains all 20 frozen-schema top-level sections and `dossier_status: complete`.

## 2. Deterministic rating profiles

```text
Mankey     2/4/1/1/2/3
Primeape   3/5/3/3/3/4
Hitmonlee  2/6/2/1/5/4
Hitmonchan 2/5/3/1/5/3
Scyther    3/5/4/2/4/5
Pinsir     3/6/5/2/3/4
```

```text
rating_scale_version == p4-six-axis-v1
manual_rating_exception_count == 0
```

## 3. Epistemic-provenance regression

```text
observation_equals_interpretation == false
measurement_equals_world_formula == false
scientist_interpretation_equals_confirmed_ancient_fact == false
analogy_or_reputation_equals_human_institution == false
version_scoped_extraordinary_equals_universal_species_law == false
project_extrapolation_equals_franchise_canon == false
```

Numeric Pokédex wording remains evidence about capability, never a direct conversion into initiative, travel, kinetic energy, damage, carrying capacity, material hardness or cooldown values.

## 4. Mankey / Primeape aggression and agency regression

```text
Mankey_group_living_and_separation_linked_anger == source_backed
Mankey_visible_anger_warning_signs == version_scoped_source_backed
Mankey_quick_temper_equals_numeric_rage_meter == false
Mankey_no_time_to_flee_wording_equals_global_no_flee == false
Primeape_gaze_linked_fury_and_pursuit == source_backed
Primeape_extreme_pursuit_equals_infinite_pathfinding == false
Primeape_running_target_equals_automatic_failure == false
Primeape_Poke_Ball_anger == modern_scientist_interpretation_only
```

Both species use explicit warning/escalation/de-escalation/pursuit states. Source severity is preserved without silent player-input or escape removal.

## 5. Hitmonlee morphology / action-economy regression

```text
Hitmonlee_controlled_leg_extension == source_backed
Hitmonlee_approximately_double_kick_reach == source_backed_measurement
Hitmonlee_impact_time_sole_hardening == source_backed
leg_extension_equals_infinite_reach_grapple_or_traversal == false
successive_kicks_equal_extra_turns == false
Force_6_equals_joules_or_universal_armor_penetration == false
continuous_skeletal_simulation_required == false
```

Extended kick reach is a discrete species-local encounter state, not continuous limb physics.

## 6. Hitmonchan combo / speed / recovery regression

```text
Hitmonchan_combination_punching == source_backed
Hitmonchan_over_300_mph_finishing_punch_wording == source_backed_numeric_claim
Hitmonchan_roughly_three_minute_recovery_cadence == source_backed_measurement
combination_equals_extra_turns_or_one_action_per_fist == false
300_mph_equals_initiative_travel_or_kinetic_energy_formula == false
three_minutes_equals_global_round_length_or_real_time_cooldown == false
boxer_world_champion_language_equals_proto_kanto_boxing_institution == false
```

A combo may be one ordinary action's fiction/effect. A prolonged authored confrontation may expose a recovery opening without a real-time timer.

## 7. Scyther natural-weapon / perception regression

```text
Scyther_forearm_scythes_are_body_integrated_anatomy == true
Scyther_extreme_visual_relative_speed == source_backed
Scyther_grass_camouflage_and_rare_flight == version_scoped_source_backed
blur_equals_extra_entities == false
camouflage_equals_permanent_invisibility == false
Speed_5_equals_guaranteed_first_action_or_evasion == false
hard_object_cutting_equals_universal_material_deletion == false
scythes_equal_detachable_equipment_or_live_harvest == false
```

Indirect signs, terrain and explicit attack lanes preserve counterplay against speed and camouflage.

## 8. Pinsir grip / material / temperature regression

```text
Pinsir_powerful_body_integrated_pincers == source_backed
Pinsir_cold_intolerance == source_backed
Pinsir_roughly_twice_body_weight_lift_claim == version_scoped_measurement
Pinsir_sleep_burrowing == version_scoped_source_backed
pincer_power_equals_automatic_grapple == false
twice_body_weight_equals_global_carry_capacity_formula == false
sleep_burrow_equals_generic_mining_or_subterranean_travel == false
cold_intolerance_equals_exact_global_temperature_threshold == false
Mega_Pinsir_equals_ordinary_Pinsir_flight == false
```

Grip resolution remains position/leverage/state based. Temperature remains authored ecology/state pressure rather than continuous simulation.

## 9. One-entity / one-turn regression

```text
Mankey_group_behavior_equals_shared_health_or_pack_turn == false
Hitmonlee_two_legs_equal_two_actions == false
Hitmonchan_two_fists_equal_two_actions == false
Scyther_two_scythes_equal_two_actions == false
Pinsir_two_pincer_horns_equal_two_actions == false
all_six_one_Pokemon_one_ordinary_turn_one_health_state_one_initiative_presence == true
all_six_one_visible_companion_slot_per_individual == true
```

## 10. Chronology / evolution regression

```text
Annihilape_expands_mandatory_Gen1_roster == false
Tyrogue_or_Hitmontop_expand_mandatory_Gen1_roster == false
Scizor_or_Kleavor_expand_mandatory_Gen1_roster == false
Mega_Pinsir_implies_Mega_Evolution_access == false
modern_ability_names_equal_ancient_rules_or_vocabulary == false
modern_boxer_ninja_bullet_train_or_concrete_language_equals_required_ancient_institutions == false
```

## 11. Companionship classifications

```text
Mankey     eligible
Primeape   exceptional_only
Hitmonlee  exceptional_only
Hitmonchan exceptional_only
Scyther    exceptional_only
Pinsir     exceptional_only
```

All companionship is voluntary. Defeat, restraint, pursuit escape, physical usefulness or access to a body part never implies recruitment or ownership.

## 12. Resource / craft boundary

```text
legs_feet_fists_scythes_pincers_equal_body_integrated_anatomy == true
body_parts_equal_automatic_loot_or_equipment == false
live_harvest_loop_created == false
generic_material_conversion_allowed == false
material_feats_equal_generic_destructible_world == false
ownership_shortcut_forbidden == true
p6_followup_required_for_all_six == true
```

## 13. Runtime / implementation boundary

```text
continuous_rage_simulation == false
continuous_infinite_pursuit_pathfinding == false
continuous_limb_physics == false
continuous_kinetic_energy_simulation == false
continuous_material_fracture_simulation == false
continuous_temperature_simulation == false
per_frame_species_rule_scanning == false
cached_authored_or_discrete_state_lookup_preferred == true
```

These are handoff constraints for later P5/P7, not new runtime APIs.

## 14. D-034 encounterability regression

```text
all_six_directly_encounterable_somewhere == true
direct_encounterable_equals_common_everywhere == false
direct_encounterable_equals_ordinary_companionship == false
later_region_evidence_equals_proto_kanto_presence == false
```

## 15. Completion state

```text
full_schema_dossier_count == 6
dossier_status_complete_count == 6
required_section_count_per_dossier == 20
placeholder_TODO_count == 0
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

Batch 17 is ready for completion audit and atomic manifest promotion.
