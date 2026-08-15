# P4 Batch 11 — #067 Machoke Full-Schema Dossier

Part of `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md`.

---

## #067 Machoke / 근육몬

```yaml
identity:
  national_dex: 67
  species_key: machoke
  official_name_en: Machoke
  official_name_ko: 근육몬
  evolution_family_keys: [machop, machoke, machamp]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-MACHOKE-SG]
  official_evidence:
    - claim_id: MCK-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-MACHOKE-SG
      version_context: current_official_portal
      paraphrase: Machoke_is_so_powerful_that_it_wears_a_power_regulation_belt_to_control_its_motions
    - claim_id: MCK-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-MACHOKE-SG
      version_context: current_official_portal
      paraphrase: Machoke_is_tireless_loves_training_and_voluntarily_helps_people_with_heavy_goods_construction_and_land_clearing
  derived_claims:
    - claim_id: MCK-D1-001
      evidence_class: D1
      based_on: [MCK-C1-001]
      statement: belt_is_a_species_associated_object_state_whose_provenance_is_unresolved
      canon_boundary_note: belt_is_not_anatomy_loot_player_equipment_or_proof_of_factory_guild_or_modern_industry
    - claim_id: MCK-D1-002
      evidence_class: D1
      based_on: [MCK-C1-002]
      statement: voluntary_human_labor_cooperation_is_source_backed_for_some_contexts
      canon_boundary_note: helping_people_does_not_establish_ownership_wages_command_vocabulary_or_a_setting_wide_Pokemon_labor_institution
    - claim_id: MCK-U-001
      evidence_class: U
      based_on: [MCK-C1-001]
      statement: belt_maker_material_origin_replacement_wild_acquisition_and_safe_removability_are_unresolved
      canon_boundary_note: P4_preserves_uncertainty_and_defers_specific_depiction_to_later_phase_content_or_asset_work
canonical_source_data:
  types: [fighting]
  base_stats_raw: {hp: 80, attack: 100, defense: 70, special_attack: 50, special_defense: 60, speed: 45}
  abilities_relevant_to_p4: [guts_as_modern_context, no_guard_as_modern_context, steadfast_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.5_m, weight: 70.5_kg}
  evolution_source:
    evolves_from: machop
    evolves_to: [machamp]
    canonical_conditions: [modern_Machop_level_threshold_and_Machoke_trade_evolution_are_source_context_not_ancient_XP_or_trade_requirement]
  other_material_facts: [extreme_power, power_regulation_belt, tireless_work, training, voluntary_heavy_goods_assistance, construction_and_land_clearing_help]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 5
  guard: 3
  potency: 2
  resistance: 3
  speed: 2
  derivation_notes: {vigor: hp_80, force: attack_100, guard: defense_70, potency: special_attack_50, resistance: special_defense_60, speed: speed_45}
  calibration_flags: [no_manual_exception, belt_provenance_unresolved, voluntary_labor_not_institution, lifting_not_mass_formula]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, heavy_load_movement_when_authored]
  physical_hazards: [grapple, throw, heavy_strike, uncontrolled_force_if_belt_or_state_is_disrupted_only_when_later_authored]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [self_training, voluntary_heavy_labor_assistance, construction_or_land_clearing_help_in_specific_context]
  utility_interaction_capabilities: [move_heavy_goods, clear_obstacles, assist_rescue_or_construction_if_voluntary_and_scene_valid]
  immunities_or_approach_invalidators: [human_scale_restraint_or_fragile_space_may_be_invalid_against_full_strength]
  hazard_records:
    - hazard_key: machoke-close-strength
      kind: other
      delivery_or_exposure: [grapple_throw_strike_or_heavy_object_interaction]
      prerequisite_or_trigger: [Machoke_commits_force_in_close_range_or_scene_object]
      warning_signs: [strength_display, reaching_for_target_or_object, damaged_or_stressed_surroundings]
      immediate_effects: [restraint, impact, position_loss, object_displacement]
      delayed_or_persistent_effects: [fracture_crush_or_other_P3_injury_if_context_supports]
      ordinary_consequence_ceiling: serious_injury_or_major_route_damage_in_specific_scene
      exceptional_consequence_ceiling: critical_or_lethal_only_under_D020_severe_force_fall_crush_or_compound_context
      countermeasures: [distance, terrain, clear_work_zone, do_not_contest_force_directly_without_leverage]
      emergency_consumable_hooks: []
      context_amplifiers: [fragile_structure, cliff, loose_heavy_goods, belt_related_instability_if_specific_event_supports]
      context_mitigators: [voluntary_cooperation, clear_task_boundary, open_space, robust_structure]
      governing_species_axes: [force, vigor]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [MCK-C1-001, MCK-C1-002, MCK-D1-002]
  notes: [belt_effect_is_source_backed_but_exact_mechanics_are_not, no_belt_removal_minigame_or_power_bonus_is_defined, labor_is_relationship_state_not_resource_extraction]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: high_strength_and_heavy_labor_capability_can_transform_a_premodern_worksite_or_conflict_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: specific_voluntary_work_relationships_can_change_routes_or_settlement_state
  canon_boundary_note: no_generic_ancient_bonus_or_workforce_baseline
ancient_ecology:
  habitat: [exact_ancient_natural_range_unknown, rocky_or_open_training_space_is_project_safe_when_locally_authored]
  ecological_niche: [large_humanoid_Fighting_Pokemon_exact_feeding_ecology_unknown]
  activity_pattern: [training_and_work_activity_supported_in_specific_context, exact_daily_pattern_unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [moves_heavy_goods_or_clears_land_when_voluntarily_helping_people]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [can_move_heavy_objects_and_clear_land_where_specific_action_occurs, no_generic_terrain_HP_system]
  observable_signs: [moved_stones, cleared_ground, heavy_tracks, worksite_changes_if_human_relationship_exists]
  locality_constraints: [human_work_association_requires_specific_relationship_history_not_normalized_labor_market]
  unsupported_gaps: [diet, group_structure, exact_habitat, belt_origin, belt_replacement, prevalence_of_human_work]
human_perception_and_culture:
  ordinary_attitude: [respect_for_strength, gratitude_or_wariness_toward_a_known_helper, caution_around_unknown_individual]
  specialist_knowledge_holders: [people_with_direct_work_relationship, builders_or_land_clearers_if_locally_authored, hunters]
  benefits_and_services: [heavy_goods_movement, construction_help, land_clearing, rescue_lifting_when_voluntary]
  fears_and_avoidance: [accidental_or_hostile_force, fragile_structure_damage, uncertainty_about_belt]
  myths_omens_taboos: [stories_about_tireless_helpers_or_belt_mystery_may_exist_only_locally_D2]
  practical_customs: [ask_or_signal_task_through_established_relationship_not_command_assumption, keep_clear_work_zone]
  common_misbeliefs: [helping_means_owned_worker, belt_is_human_factory_equipment, belt_can_be_looted_for_power, Force_rating_is_mass_or_damage_formula]
  local_variation_notes: [one_community_may_know_one_voluntary_helper_without_any_general_Pokemon_labor_custom]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [large_muscular_humanoid_Pokemon_wearing_a_distinctive_power_regulation_belt]
  local_aliases_or_titles: none
  identification_evidence: [muscular_body, belt, heavy_object_work_or_training]
  initial_knowledge_fragments: [do_not_touch_or_remove_the_belt_and_do_not_assume_help_is_obligation]
  post_identification_knowledge: [source_backed_voluntary_help_with_heavy_work_and_belt_regulation]
  advanced_insights: [belt_provenance_is_unknown_and_labor_relationship_is_specific_not_institutional]
  exceptional_individual_knowledge_hooks: [Machoke_known_by_a_specific_road_bridge_or_clearing_it_helped_create]
threat_and_encounter:
  baseline_threat_band: high_at_close_range_or_around_heavy_objects
  default_behavior_states: [training, working_voluntarily, resting, observing, warning, grappling, striking, withdrawing]
  aggression_tendency: unknown_to_contextual
  territoriality: unknown
  avoidance_tendency: moderate
  warning_signs: [stops_working_and_turns_attention, strength_display, blocking_position]
  encounter_triggers: [worksite_contact, training_ground, route_obstruction, threatened_bonded_people_if_authored]
  escalation_triggers: [forced_labor, attack, belt_interference, cornering, threat_to_specific_relationship]
  deescalation_conditions: [stop_interference, clear_space, allow_choice, restore_safe_task_boundary]
  pursuit_profile: moderate_and_contextual
  group_size_effects: [unknown_no_generic_labor_team_bonus]
  ordinary_consequence_categories: [grapple, impact, crush_or_fall, object_displacement, route_change]
  consequence_ceiling: serious_and_contextually_critical_under_D020
  human_check_hooks:
    - action: coordinate_a_heavy_task_with_a_willing_Machoke_without_treating_it_as_commandable_labor
      relevant_species_axis: none
      relevant_tags: [voluntary_labor, extreme_strength, species_associated_belt]
      relevant_hazard_keys: [machoke-close-strength]
      difficulty_guidance: D024_context_from_existing_relationship_task_clarity_space_human_safety_and_Machoke_willingness
      notes: success_enables_one_authored_task_not_a_permanent_labor_contract_or_free_resource
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [focused, helpful, competitive, independent, defensive]
    condition_variants: [training, working, resting, injured, relationship_stressed]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [long_training_history, survival_history, unusual_work_or_route_experience]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_history_scar_or_known_task_pattern]
    warning_or_rumor_hooks: [Machoke_known_for_clearing_a_landslide_route_after_a_local_disaster]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, no_forced_labor_or_containment, safe_space_for_strength, respect_for_belt_uncertainty]
  trust_building_paths: [shared_work_with_choice, mutual_rescue, respect_training_and_belt_boundaries, repeated_noncoercive_contact]
  reasons_to_stay: [bond, meaningful_shared_tasks, safe_training_space, reliable_care]
  rejection_or_departure_reasons: [coercion, treating_it_as_equipment_or_worker, belt_interference, confinement]
  human_social_costs: [structural_safety, public_expectation_of_free_labor, food_space_and_worksite_management]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [large_dry_resting_space]
    space_travel: [requires_space_for_large_body_and_strength]
    settlement_restrictions: [fragile_dense_structures_or_coercive_labor_demands_can_make_presence_unviable]
    special_resources: [belt_is_not_player_supplied_resource_unless_later_source_and_design_explicitly_define_it]
  assistance_capabilities: [heavy_lifting, land_clearing, construction_or_rescue_support_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_labor, no_belt_loot_or_equipment, visible_companion_slot_required]
  separation_injury_notes: [loss_of_specific_work_relationship_can_change_story_state_not_species_stats]
mechanical_hooks:
  tracking_clues: [cleared_ground, moved_goods, heavy_footprints, known_worksite]
  avoidance_preparation: [keep_clear_of_heavy_object_paths, never_touch_belt_without_explicit_authored_permission]
  resistance_or_protection: [terrain_barrier_and_safe_work_zone_over_direct_strength_contest]
  combat_approach_permissions: [range_and_positioning_before_close_grapple]
  blocked_or_invalid_approaches: [belt_as_loot, belt_removal_powerup, voluntary_help_as_commandable_labor, Force_as_structure_damage_formula]
  fear_hooks: [friendly_helper_turns_and_the_same_strength_that_moved_timber_is_now_between_party_and_exit]
  injury_hazard_hooks: [machoke-close-strength]
  environmental_state_hooks: [worksite_layout, heavy_goods, belt_state_if_later_authored, relationship_state]
  companion_assistance_hooks: [one_specific_heavy_task_or_rescue_when_willing]
  fortune_spike_opportunities: [Machoke_voluntarily_clears_a_blocked_route_after_players_help_it_or_its_community]
  trouble_spike_complications: [locals_attempt_to_claim_the_companion_as_free_labor]
hunting_materials_and_resources:
  killing_treatment: no_generic_body_resource_and_belt_does_not_become_drop
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [belt_removal_or_salvage_not_supported]
  taboo_or_protection: [harm_to_a_known_helper_can_have_specific_local_social_consequences]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: present
  enabling_evidence: [source_backed_power_regulation_belt]
  human_craft_bridge: [unknown]
  narrow_domain: species_associated_power_regulation_object_state
  local_dependency: [specific_belt_is_observed_on_Machoke_but_maker_material_origin_and_supply_chain_are_unknown]
  scalability_limits: [no_factory_guild_mass_production_trainer_issue_or_modern_industry_can_be_inferred, no_player_crafting_recipe]
  ownership_shortcut_forbidden: true
  evidence_class: U
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_or_join_a_voluntary_heavy_task_without_turning_it_into_ownership]
  dangerous: [belt_interference_or_worksite_panic_creates_close_strength_and_falling_object_pressure]
  unusual_or_rare: [community_has_a_long_history_with_one_Machoke_helper_but_no_explanation_for_its_belt]
  discovery_insight: [players_learn_source_backed_object_can_remain_unresolved_without_inventing_industry]
  route_environment: [landslide_or_blocked_road_can_be_changed_by_voluntary_help]
  settlement_culture: [debate_over_whether_a_known_Machoke_is_guest_partner_omen_or_worker_without_binding_universal_answer]
  cross_species: [Machop_training_and_Machamp_multi_arm_combat_do_not_auto_define_Machoke_behavior]
presentation_and_p6_followups:
  initial_bestiary_presentation: powerful_humanoid_Fighting_Pokemon_that_can_voluntarily_help_people_and_wears_an_unexplained_regulation_belt
  progressive_reveal_notes: [make_belt_visible_but_never_inventoryable_by_default, distinguish_working_by_choice_from_owned_worker_state]
  species_specific_visual_needs: [belt_state, heavy_task_posture, safe_work_zone]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [belt_must_not_have_player_equipment_affordance, voluntary_task_state_must_not_look_like_command_menu]
  p6_followup_required: true
cross_species_links:
  evolution_family: [machop, machamp]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: [specific_human_work_relationship_if_authored]
open_questions_and_gates:
  unresolved_sources: [belt_maker, belt_material, belt_origin, belt_replacement_cycle, belt_wild_acquisition_path, belt_removability_and_safe_handling, diet, exact_ancient_range]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [voluntary_task_state, belt_related_event_semantics, evolution_condition_mapping]
  deferred_to_p6: [belt_visual_provenance_and_asset_handling, work_state_readability]
  deferred_to_p7: [species_associated_object_state_and_relationship_persistence]
```
