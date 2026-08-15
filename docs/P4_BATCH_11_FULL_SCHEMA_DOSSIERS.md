# P4 Batch 11 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 11 audit**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_11_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`

## 1. Review boundary

All seven Batch 11 species use the frozen P4 dossier schema and `p4-six-axis-v1` with no manual stat exception.

The batch preserves source-backed human proximity, pet possibility, loyalty, voluntary labor, cultural memory, species-associated objects, self-training and multi-limb combat while refusing to infer trainer culture, routine domestication, labor institutions, loot/equipment semantics, level grinding or anatomy-derived action economy.

```text
human_affinity_equals_trainer_culture == false
pet_evidence_equals_common_domestication == false
voluntary_labor_equals_owned_worker_or_labor_institution == false
species_associated_object_equals_loot_equipment_or_industry == false
self_training_equals_level_XP_or_repeatable_stat_grind == false
limb_count_equals_turn_or_action_count == false
ancient_source_reference_equals_exact_project_chronology == false
hazard_or_capability_severity_capped_by_six_axis == false
```

## 2. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #052 | Meowth / 나옹 | `docs/P4_BATCH_11_DOSSIER_052_MEOWTH.md` |
| #053 | Persian / 페르시온 | `docs/P4_BATCH_11_DOSSIER_053_PERSIAN.md` |
| #058 | Growlithe / 가디 | `docs/P4_BATCH_11_DOSSIER_058_GROWLITHE.md` |
| #059 | Arcanine / 윈디 | `docs/P4_BATCH_11_DOSSIER_059_ARCANINE.md` |
| #066 | Machop / 알통몬 | `docs/P4_BATCH_11_DOSSIER_066_MACHOP.md` |
| #067 | Machoke / 근육몬 | `docs/P4_BATCH_11_DOSSIER_067_MACHOKE.md` |
| #068 | Machamp / 괴력몬 | `docs/P4_BATCH_11_DOSSIER_068_MACHAMP.md` |

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
Meowth    2/2/1/2/2/4
Persian   3/3/3/3/3/5
Growlithe 2/3/2/3/2/3
Arcanine  4/5/4/5/4/4
Machop    3/4/2/1/1/1
Machoke   4/5/3/2/3/2
Machamp   4/6/4/3/4/2
```

No dossier adds a manual rating exception.

## 4. Human-proximity ladder regression

```text
Meowth_human_affinity_required == false
Persian_pet_possibility == source_backed
Persian_pet_possibility_equals_common_ancient_domestication == false
Growlithe_human_affinity == source_backed
Growlithe_human_affinity_equals_automatic_companionship == false
Arcanine_old_human_cultural_observation == source_backed
Arcanine_cultural_observation_equals_ownership == false
Machop_human_labor_claim_required == false
Machoke_voluntary_human_labor == source_backed
Machoke_voluntary_human_labor_equals_setting_wide_institution == false
Machamp_human_service_claim_required == false
```

The seven species intentionally do not share one domestication or human-use flag.

## 5. Species-associated object / resource regression

```text
Meowth_forehead_coinlike_feature == source_backed
Meowth_coin_origin_material_removability_replacement == unresolved
Meowth_coin_equals_minted_currency == false
Meowth_Pickup_equals_loot_generation == false

Persian_fur_admiration == source_backed
Persian_fur_admiration_equals_harvest_or_trade_system == false

Machoke_power_regulation_belt == source_backed
Machoke_belt_maker_material_origin_replacement == unresolved
Machoke_belt_equals_anatomy == false
Machoke_belt_equals_player_equipment_or_drop == false
Machoke_belt_equals_factory_guild_or_modern_industry_proof == false
```

The batch keeps unknown provenance explicit rather than inventing an economy or manufacturing chain.

## 6. Relationship / agency regression

```text
Growlithe_faithfulness_equals_unconditional_obedience == false
Growlithe_bark_equals_infallible_friend_foe_detection == false
Persian_pet_history_equals_safe_touch == false
Arcanine_bark_pressure_equals_hypnosis_or_domination == false
Arcanine_bark_can_force_player_action == false
companionship_requires_voluntary_persistent_trust == true
visible_companion_slots == 3
portable_containment == false
```

Arcanine awe pressure remains P3-agency-preserving social/fear pressure only.

## 7. Training / growth regression

```text
Machop_self_directed_training == source_backed
Machop_training_equals_kill_XP == false
Machop_training_equals_visible_level_meter == false
Machop_training_equals_repeatable_stat_grind == false
Machop_training_equals_player_scaled_enemy_growth == false
Machoke_training_equals_generic_growth_subsystem == false
```

Individual training history may support D-031 traits or explicit individual variation while the species baseline remains fixed.

## 8. Strength / labor regression

```text
Machop_extreme_strength == source_backed
Machoke_heavy_work_assistance == source_backed
Force_rating_equals_fixed_mass_formula == false
Force_rating_equals_structure_damage_formula == false
voluntary_help_equals_commandable_resource == false
voluntary_help_equals_companion_slot_bypass == false
```

Heavy-object interaction remains scene- and object-specific instead of a continuous physics table.

## 9. Multi-limb action-economy regression

```text
Machamp_four_arms == source_backed
Machamp_extreme_multi_angle_strike_pressure == source_backed
Machamp_high_arm_reaction_cadence == source_backed
four_arms_equals_four_turns == false
four_arms_equals_four_standard_actions == false
high_strike_count_equals_one_roll_per_strike == false
Speed_2_equals_slow_arm_reaction == false
```

Machamp close-range pressure is represented through bounded hazards/actions, range control and fictional positioning rather than per-limb or per-punch simulation.

## 10. Chronology / culture regression

```text
Arcanine_ancient_picture_scroll == source_backed
picture_scroll_equals_exact_project_era_document == false
picture_scroll_equals_future_Kanto_polity_or_literacy_proof == false
Hisuian_Arcanine_added_to_mandatory_roster == false
modern_pet_construction_or_trade_context_auto_imported == false
```

Old official cultural evidence is useful as possibility evidence without silently fixing the project's chronology or institutions.

## 11. Evolution-stage inheritance regression

```text
Meowth_shiny_interest_auto_inherited_by_Persian == false
Persian_pet_evidence_auto_inherited_by_Meowth == false
Growlithe_human_affinity_auto_inherited_as_Arcanine_domestication == false
Arcanine_awe_bark_auto_inherited_by_Growlithe == false
Machop_training_behavior_auto_inherited_as_Machoke_labor == false
Machoke_labor_or_belt_auto_inherited_by_Machamp == false
Machamp_four_arm_action_pressure_auto_inherited_by_Machoke == false
```

Evolution-family membership does not clone every behavior, object or relationship fact between stages.

## 12. Companionship state

Frozen schema classifications:

```text
Meowth    eligible
Persian   eligible
Growlithe eligible
Arcanine  exceptional_only
Machop    eligible
Machoke   eligible
Machamp   exceptional_only
```

`eligible` never means common ownership. Every classification still requires voluntary persistent trust, three-slot accounting, no portable containment and species-specific logistics.

## 13. Completion state

```text
full_schema_dossier_count == 7
dossier_status_complete_count == 7
required_section_count_per_dossier == 20
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

No Batch 11 dossier introduces a blocking Human Design Gate. Machoke belt provenance remains explicitly unresolved and safely deferred rather than generalized.

The batch is ready for completion audit and atomic manifest promotion validation.
