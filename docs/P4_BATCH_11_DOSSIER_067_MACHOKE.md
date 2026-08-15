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
      statement: regulation_belt_is_a_source_backed_species_associated_object_while_its_canonical_maker_material_and_first_origin_are_unexplained
      canon_boundary_note: belt_is_not_anatomy_loot_player_equipment_or_proof_of_factory_guild_or_modern_industry
    - claim_id: MCK-D1-002
      evidence_class: D1
      based_on: [MCK-C1-002]
      statement: voluntary_human_labor_cooperation_is_source_backed_for_some_contexts
      canon_boundary_note: helping_people_does_not_establish_ownership_wages_command_vocabulary_or_a_setting_wide_Pokemon_labor_institution
    - claim_id: MCK-D2-001
      evidence_class: D2
      based_on: [MCK-C1-001, MCK-C1-002]
      statement: a_human_associated_Machoke_may_use_a_locally_crafted_or_repaired_premodern_power_regulation_girdle
      canon_boundary_note: project_visual_language_uses_leather_textile_wrapping_and_optional_limited_metal_reinforcement_like_a_premodern_martial_or_work_girdle_not_a_modern_championship_belt
    - claim_id: MCK-D2-002
      evidence_class: D2
      based_on: [MCK-C1-002]
      statement: Machoke_humanoid_proportions_can_support_brief_at_a_glance_human_misidentification_when_body_and_face_are_obscured
      canon_boundary_note: this_is_not_transformation_voice_mimicry_perfect_disguise_or_permission_to_pass_close_inspection_and_conversation_checks
    - claim_id: MCK-U-001
      evidence_class: U
      based_on: [MCK-C1-001]
      statement: canonical_belt_maker_material_first_origin_wild_acquisition_path_and_safe_removability_remain_unresolved
      canon_boundary_note: D2_human_crafted_replacement_or_repair_does_not_claim_to_explain_where_every_wild_Machoke_obtains_its_first_belt
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
  calibration_flags: [no_manual_exception, canonical_belt_provenance_unresolved, D2_human_crafted_regulation_girdle_allowed, human_misidentification_is_contextual_not_inherent_stealth, voluntary_labor_not_institution, lifting_not_mass_formula]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, heavy_load_movement_when_authored]
  physical_hazards: [grapple, throw, heavy_strike, uncontrolled_force_if_belt_or_state_is_disrupted_only_when_later_authored]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [self_training, voluntary_heavy_labor_assistance, construction_or_land_clearing_help_in_specific_context, brief_human_misidentification_when_heavily_clothed_or_obscured]
  utility_interaction_capabilities: [move_heavy_goods, clear_obstacles, assist_rescue_or_construction_if_voluntary_and_scene_valid, blend_into_a_human_work_or_martial_silhouette_only_under_low_information_conditions]
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
  notes: [belt_effect_is_source_backed_but_exact_mechanics_are_not, D2_human_craft_only_changes_specific_belt_depiction_and_maintenance_not_species_stats, no_belt_removal_minigame_or_power_bonus_is_defined, labor_is_relationship_state_not_resource_extraction, human_misidentification_never_grants_automatic_social_infiltration]
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
  locality_constraints: [human_work_association_requires_specific_relationship_history_not_normalized_labor_market, human_crafted_regulation_girdle_requires_a_specific_human_relationship_and_local_craft_capacity]
  unsupported_gaps: [diet, group_structure, exact_habitat, canonical_or_wild_belt_origin, prevalence_of_human_work]
human_perception_and_culture:
  ordinary_attitude: [respect_for_strength, gratitude_or_wariness_toward_a_known_helper, caution_around_unknown_individual, possible_brief_confusion_with_a_large_human_when_fully_covered]
  specialist_knowledge_holders: [people_with_direct_work_relationship, builders_or_land_clearers_if_locally_authored, leatherworkers_or_smiths_who_have_maintained_one_specific_regulation_girdle, hunters]
  benefits_and_services: [heavy_goods_movement, construction_help, land_clearing, rescue_lifting_when_voluntary]
  fears_and_avoidance: [accidental_or_hostile_force, fragile_structure_damage, uncertainty_about_wild_belt_origin, disguised_or_misidentified_unknown_humanoid_at_night]
  myths_omens_taboos: [stories_about_tireless_helpers_or_mysterious_wild_belts_may_exist_only_locally_D2]
  practical_customs: [ask_or_signal_task_through_established_relationship_not_command_assumption, keep_clear_work_zone, a_bonded_Machoke_may_have_its_regulation_girdle_repaired_or_replaced_by_local_premodern_craftspeople_with_its_cooperation]
  common_misbeliefs: [helping_means_owned_worker, every_belt_is_human_made, human_repaired_belt_explains_wild_belt_origin, belt_can_be_looted_for_power, humanoid_shape_means_it_can_perfectly_pass_as_human, Force_rating_is_mass_or_damage_formula]
  local_variation_notes: [one_community_may_know_one_voluntary_helper_and_maintain_its_girdle_without_any_general_Pokemon_labor_or_equipment_custom]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [large_muscular_humanoid_Pokemon_wearing_a_premodern_regulation_girdle, cloaked_or_armored_broad_shouldered_figure_mistaken_for_a_human_laborer_guard_or_fighter_at_distance]
  local_aliases_or_titles: none
  identification_evidence: [muscular_body, exposed_face_or_skin, belt_or_girdle, heavy_object_work_or_training, nonhuman_vocalization_or_movement_when_observed_closely]
  initial_knowledge_fragments: [do_not_touch_or_remove_the_belt_and_do_not_assume_help_is_obligation, do_not_assume_a_human_silhouette_is_actually_human_until_close_identification]
  post_identification_knowledge: [source_backed_voluntary_help_with_heavy_work_and_belt_regulation, some_human_associated_individuals_use_locally_repaired_or_replaced_ancient_style_girdles]
  advanced_insights: [canonical_first_belt_provenance_remains_unknown, human_craft_can_explain_specific_replacement_or_maintenance_without_explaining_all_wild_individuals, labor_relationship_is_specific_not_institutional]
  exceptional_individual_knowledge_hooks: [Machoke_known_by_a_specific_road_bridge_or_clearing_it_helped_create, Machoke_known_for_wearing_a_distinctive_locally_made_girdle]
threat_and_encounter:
  baseline_threat_band: high_at_close_range_or_around_heavy_objects
  default_behavior_states: [training, working_voluntarily, resting, observing, warning, grappling, striking, withdrawing, traveling_covered_in_specific_human_associated_context]
  aggression_tendency: unknown_to_contextual
  territoriality: unknown
  avoidance_tendency: moderate
  warning_signs: [stops_working_and_turns_attention, strength_display, blocking_position]
  encounter_triggers: [worksite_contact, training_ground, route_obstruction, mistaken_human_contact_when_covered, threatened_bonded_people_if_authored]
  escalation_triggers: [forced_labor, attack, belt_interference, cornering, threat_to_specific_relationship]
  deescalation_conditions: [stop_interference, clear_space, allow_choice, restore_safe_task_boundary]
  pursuit_profile: moderate_and_contextual
  group_size_effects: [unknown_no_generic_labor_team_bonus]
  ordinary_consequence_categories: [grapple, impact, crush_or_fall, object_displacement, route_change, identification_surprise]
  consequence_ceiling: serious_and_contextually_critical_under_D020
  human_check_hooks:
    - action: coordinate_a_heavy_task_with_a_willing_Machoke_without_treating_it_as_commandable_labor
      relevant_species_axis: none
      relevant_tags: [voluntary_labor, extreme_strength, species_associated_belt]
      relevant_hazard_keys: [machoke-close-strength]
      difficulty_guidance: D024_context_from_existing_relationship_task_clarity_space_human_safety_and_Machoke_willingness
      notes: success_enables_one_authored_task_not_a_permanent_labor_contract_or_free_resource
    - action: identify_a_heavily_clothed_humanoid_as_Machoke_before_close_contact
      relevant_species_axis: none
      relevant_tags: [humanoid_silhouette, obscured_identity, locality_knowledge]
      relevant_hazard_keys: [machoke-close-strength]
      difficulty_guidance: D024_context_from_distance_light_face_visibility_movement_voice_prior_species_knowledge_and_observer_attention
      notes: failure_means_temporary_misidentification_not_mind_control_or_forced_behavior
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [focused, helpful, competitive, independent, defensive]
    condition_variants: [training, working, resting, injured, relationship_stressed]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [long_training_history, survival_history, unusual_work_or_route_experience, long_human_association]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_history_scar_known_task_pattern_or_distinctive_local_girdle]
    warning_or_rumor_hooks: [Machoke_known_for_clearing_a_landslide_route_after_a_local_disaster, supposed_masked_laborer_seen_at_night_is_actually_a_known_Machoke]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, no_forced_labor_or_containment, safe_space_for_strength, respect_for_belt_and_body_boundaries]
  trust_building_paths: [shared_work_with_choice, mutual_rescue, respect_training_and_belt_boundaries, repeated_noncoercive_contact, consensual_help_repairing_or_replacing_a_damaged_regulation_girdle]
  reasons_to_stay: [bond, meaningful_shared_tasks, safe_training_space, reliable_care]
  rejection_or_departure_reasons: [coercion, treating_it_as_equipment_or_worker, unwanted_belt_interference, confinement]
  human_social_costs: [structural_safety, public_expectation_of_free_labor, food_space_and_worksite_management, bespoke_girdle_maintenance_if_the_specific_individual_uses_human_craft]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [large_dry_resting_space]
    space_travel: [requires_space_for_large_body_and_strength]
    settlement_restrictions: [fragile_dense_structures_or_coercive_labor_demands_can_make_presence_unviable]
    special_resources: [human_associated_individual_may_need_local_leather_textile_and_limited_metal_craft_for_girdle_maintenance_but_the_girdle_is_not_generic_player_equipment]
  assistance_capabilities: [heavy_lifting, land_clearing, construction_or_rescue_support_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_labor, no_belt_loot_or_player_equipment, visible_companion_slot_required, disguise_is_contextual_clothing_not_a_free_stealth_power]
  separation_injury_notes: [loss_of_specific_work_relationship_can_change_story_state_not_species_stats]
mechanical_hooks:
  tracking_clues: [cleared_ground, moved_goods, heavy_footprints, known_worksite, distinctive_girdle_or_clothing_if_locally_known]
  avoidance_preparation: [keep_clear_of_heavy_object_paths, never_touch_belt_without_explicit_authored_permission, verify_obscured_humanoid_identity_before_close_approach_when_context_warrants]
  resistance_or_protection: [terrain_barrier_and_safe_work_zone_over_direct_strength_contest]
  combat_approach_permissions: [range_and_positioning_before_close_grapple]
  blocked_or_invalid_approaches: [belt_as_loot, belt_removal_powerup, human_crafted_replacement_as_proof_all_belts_are_human_made, voluntary_help_as_commandable_labor, humanoid_shape_as_automatic_disguise_success, Force_as_structure_damage_formula]
  fear_hooks: [friendly_helper_turns_and_the_same_strength_that_moved_timber_is_now_between_party_and_exit, apparent_human_laborer_lifts_its_head_and_is_not_human]
  injury_hazard_hooks: [machoke-close-strength]
  environmental_state_hooks: [worksite_layout, heavy_goods, belt_state_if_later_authored, relationship_state, light_and_identity_visibility]
  companion_assistance_hooks: [one_specific_heavy_task_or_rescue_when_willing, context_limited_human_silhouette_misidentification_event_when_clothed]
  fortune_spike_opportunities: [Machoke_voluntarily_clears_a_blocked_route_after_players_help_it_or_its_community, local_craftsperson_repairs_a_bonded_Machoke_regulation_girdle]
  trouble_spike_complications: [locals_attempt_to_claim_the_companion_as_free_labor, guards_or_travelers_mistake_a_covered_Machoke_for_a_human_then_panic_on_identification]
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
  enabling_evidence: [source_backed_power_regulation_belt, D2_human_associated_replacement_and_repair_decision]
  human_craft_bridge: [local_leatherworker_weaver_or_smith_may_build_repair_or_reinforce_a_regulation_girdle_for_a_specific_consenting_human_associated_Machoke]
  narrow_domain: bespoke_premodern_species_specific_power_regulation_girdle
  local_dependency: [requires_specific_relationship_Machoke_cooperation_and_local_craft_capacity, suitable_material_palette_is_leather_or_heavy_textile_with_optional_limited_metal_reinforcement, canonical_first_belt_and_wild_acquisition_remain_unexplained]
  scalability_limits: [no_factory_guild_mass_production_trainer_issue_or_modern_industry_can_be_inferred, no_universal_pattern, no_player_crafting_recipe_by_default, no_claim_every_wild_Machoke_uses_human_craft]
  ownership_shortcut_forbidden: true
  evidence_class: D2
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_or_join_a_voluntary_heavy_task_without_turning_it_into_ownership, meet_a_local_craftsperson_repairing_a_known_Machoke_ancient_style_regulation_girdle_with_its_cooperation]
  dangerous: [belt_interference_or_worksite_panic_creates_close_strength_and_falling_object_pressure, apparent_human_figure_is_revealed_as_Machoke_at_too_close_a_distance]
  unusual_or_rare: [wild_Machoke_is_encountered_with_a_regulation_belt_whose_first_origin_no_one_can_explain, a_cloaked_or_armored_Machoke_passes_at_a_glance_as_a_large_human_fighter_or_laborer]
  discovery_insight: [players_learn_that_human_craft_can_explain_a_specific_replacement_or_repair_without_claiming_to_explain_the_species_wide_origin]
  route_environment: [landslide_or_blocked_road_can_be_changed_by_voluntary_help]
  settlement_culture: [one_community_may_treat_a_known_Machoke_as_guest_partner_or_helper_and_maintain_its_girdle_without_establishing_a_labor_or_equipment_institution]
  cross_species: [Machop_training_and_Machamp_multi_arm_combat_do_not_auto_define_Machoke_behavior]
presentation_and_p6_followups:
  initial_bestiary_presentation: powerful_humanoid_Fighting_Pokemon_that_can_voluntarily_help_people_and_wears_a_power_regulation_girdle_whose_canonical_first_origin_is_unknown
  progressive_reveal_notes: [show_human_associated_girdles_as_premodern_martial_or_work_control_gear_not_modern_championship_belts, make_belt_visible_but_never_inventoryable_by_default, distinguish_working_by_choice_from_owned_worker_state, allow_brief_human_misidentification_only_when_face_and_body_are_obscured]
  species_specific_visual_needs: [premodern_leather_or_heavy_textile_regulation_girdle_with_optional_limited_metal_reinforcement, heavy_task_posture, cloak_hood_wrap_or_simple_armor_variants_for_identity_events, safe_work_zone]
  species_specific_audio_needs: [nonhuman_vocalization_can_break_human_misidentification]
  special_ui_or_readability_needs: [girdle_must_not_have_player_equipment_affordance, voluntary_task_state_must_not_look_like_command_menu, disguise_or_misidentification_must_not_present_as_guaranteed_stealth_skill]
  p6_followup_required: true
cross_species_links:
  evolution_family: [machop, machamp]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: [human_laborer_guard_or_fighter_at_a_glance_when_heavily_clothed_or_obscured]
  shared_habitat: []
  cultural_or_material_dependencies: [specific_human_work_relationship_if_authored, local_bespoke_girdle_craft_if_human_associated]
open_questions_and_gates:
  unresolved_sources: [canonical_belt_maker, canonical_belt_material, canonical_belt_first_origin, belt_wild_acquisition_path, belt_removability_and_safe_handling, diet, exact_ancient_range]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [voluntary_task_state, belt_related_event_semantics, contextual_human_misidentification_checks, evolution_condition_mapping]
  deferred_to_p6: [regional_girdle_visual_variants, cloak_or_armor_identity_readability, work_state_readability]
  deferred_to_p7: [species_associated_object_state_relationship_persistence_and_specific_girdle_maintenance_state]
```