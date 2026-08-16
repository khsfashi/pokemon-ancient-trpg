# P4 Batch 17 — #106 Hitmonlee Full-Schema Dossier

Part of `docs/P4_BATCH_17_FULL_SCHEMA_DOSSIERS.md`.

---

## #106 Hitmonlee / 시라소몬

```yaml
identity:
  national_dex: 106
  species_key: hitmonlee
  official_name_en: Hitmonlee
  official_name_ko: 시라소몬
  evolution_family_keys: [tyrogue_external_post_gen1, hitmonlee, hitmonchan, hitmontop_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-HITMONLEE-SG, P4_BATCH_17_SOURCE_REVIEW]
  official_evidence:
  - claim_id: HML-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-HITMONLEE-SG
    version_context: current_official_portal__OBSERVED_PHYSIOLOGY
    paraphrase: hardens_the_muscles_of_its_sole_at_the_moment_of_impact
  - claim_id: HML-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-HITMONLEE-SG
    version_context: current_official_portal__MEASURED_PHYSIOLOGY
    paraphrase: controls_leg_ligaments_to_extend_effective_kicking_reach_to_roughly_twice_ordinary_length
  - claim_id: HML-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__OBSERVED_AND_VERSION_SCOPED_EXTRAORDINARY
    paraphrase: historical_entries_add_exceptional_balance_successive_kicks_post_battle_leg_care_and_stronger_sole_hardness_language
  derived_claims:
  - claim_id: HML-D1-001
    evidence_class: D1
    based_on: [HML-C1-001, HML-C1-002, HML-C1-003]
    statement: Hitmonlee_has_species_local_flexible_melee_reach_and_impact_hardening_that_can_be_represented_as_discrete_strike_states
    canon_boundary_note: no_continuous_limb_physics_infinite_reach_or_generic_traversal_permission_is_required
  - claim_id: HML-D1-002
    evidence_class: D1
    based_on: [HML-C1-003]
    statement: repeated_kicking_and_balance_support_complex_single_action_fiction_without_extra_turns
    canon_boundary_note: two_legs_never_mean_two_entities_or_action_slots
  - claim_id: HML-D1-003
    evidence_class: D1
    based_on: [HML-C1-001, HML-C1-003]
    statement: extreme_hardness_and_destructive_wording_support_severe_strike_capability
    canon_boundary_note: no_universal_armor_penetration_material_deletion_or_joule_formula
canonical_source_data:
  types: [fighting]
  base_stats_raw: {hp: 50, attack: 120, defense: 53, special_attack: 35, special_defense: 110, speed: 87}
  abilities_relevant_to_p4: [limber_as_modern_context, reckless_as_modern_context, unburden_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.5_m, weight: 49.8_kg}
  evolution_source:
    evolves_from: tyrogue_external_post_gen1
    evolves_to: []
    canonical_conditions: [Tyrogue_and_stat_comparison_evolution_metadata_are_post_Gen1_context_only]
  other_material_facts:
  - controlled_leg_extension_and_contraction
  - approximately_double_kicking_reach
  - impact_time_sole_hardening
  - version_scoped_exceptional_balance_and_successive_kicks
  - version_scoped_post_battle_leg_fatigue_care
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 6
  guard: 2
  potency: 1
  resistance: 5
  speed: 4
  derivation_notes: {vigor: hp_50, force: attack_120, guard: defense_53, potency: special_attack_35, resistance: special_defense_110, speed: speed_87}
  calibration_flags:
  - no_manual_exception
  - force_6_does_not_equal_joules_armor_penetration_or_structure_damage
  - extended_reach_is_species_capability_not_speed_or_force_formula
  - bilateral_legs_do_not_create_extra_actions
capabilities_and_hazards:
  locomotion: [balanced_bipedal_ground_movement, species_local_leg_extension_during_kicking]
  physical_hazards: [long_reach_kicks, impact_hardened_sole_strikes, successive_kick_sequences_within_one_action]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [post_conflict_leg_fatigue_and_recovery_candidate]
  utility_interaction_capabilities: [precise_leg_reach_may_interact_with_nearby_objects_only_when_authored_and_not_as_generic_grapple_or_traversal]
  immunities_or_approach_invalidators:
  - no_universal_paralysis_immunity_from_Limber
  - sole_hardening_does_not_ignore_all_armor_or_materials
  - extension_does_not_grant_rope_grapple_passenger_transport_or_infinite_reach
  hazard_records:
  - hazard_key: hitmonlee-extended-kick
    kind: other
    delivery_or_exposure: [entering_or_remaining_within_an_authored_extended_kick_lane]
    prerequisite_or_trigger: [Hitmonlee_commits_to_a_kick_or_successive_kick_action, body_position_allows_extension]
    warning_signs: [stance_change, leg_drawback_or_extension, balance_shift, prior_observation_of_unusual_reach]
    immediate_effects: [high_force_contact_injury, surprise_from_reach_beyond_ordinary_humanoid_expectation, position_loss]
    delayed_or_persistent_effects: [ordinary_injury_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_compound_or_named_exceptional_context
    countermeasures: [respect_extended_reach, use_cover_or_obstacles, attack_from_angles_that_break_stance, exploit_post_action_or_fatigue_openings_when_authored]
    emergency_consumable_hooks: []
    context_amplifiers: [open_striking_lane, target_misreads_reach, confined_space_without_side_exit]
    context_mitigators: [solid_cover, disrupted_balance, distance_beyond_authored_extension, fatigue_or_injury]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [HML-C1-001, HML-C1-002, HML-D1-001]
  notes:
  - leg_extension_is_a_discrete_capability_state_not_skeletal_simulation
  - successive_kicks_can_be_one_action_effect
  - body_integrated_feet_and_legs_are_not_equipment_or_harvest_nodes
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: limited_protective_technology_and_low_familiarity_with_unusual_reach_can_raise_encounter_danger_without_species_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: unfamiliar_reach_geometry_can_raise_first_contact_pressure
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat: [exact_proto_kanto_habitat_and_abundance_unknown]
  ecological_niche: [highly_specialized_mobile_physical_combatant_or_defender_without_implied_human_training_role]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_complete_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [species_specific_only_when_evidence_or_D2_authoring_supports_them]
  environmental_effects: [no_generic_structure_breaking_or_terrain_destruction]
  observable_signs: [distinctive_long_stride_or_kick_marks_when_authored, repeated_high_reach_impact_signs, post_conflict_resting_behavior]
  locality_constraints: [D034_direct_encounterability_somewhere_does_not_equal_common_or_culturally_normalized_presence]
  unsupported_gaps: [exact_wild_habitat, extension_speed_and_joint_geometry, maximum_non_kick_reach, sole_material_limits, recovery_duration, complete_diet]
human_perception_and_culture:
  ordinary_attitude: [wary_or_fascinated_where_known_because_reach_is_easy_to_misjudge]
  specialist_knowledge_holders: [repeat_observers, hunters_or_survivors_who_have_measured_safe_distance]
  benefits_and_services: [none_required]
  fears_and_avoidance: [unexpected_extended_kick_range, high_impact_strikes]
  myths_omens_taboos: [local_D2_names_or_stories_about_impossible_reach_may_exist_without_creating_a_martial_school]
  practical_customs: [do_not_use_human_leg_length_to_estimate_safe_distance, watch_balance_and_stance]
  common_misbeliefs: [Hitmonlee_was_taught_by_human_martial_artists, every_kick_breaks_any_armor, legs_can_stretch_without_limit]
  local_variation_notes: [Kick_Master_language_is_reputation_or_analogy_not_proof_of_a_proto_kanto_dojo_or_profession]
identification_and_knowledge:
  baseline_recognition: rare
  unknown_presentation_hooks: [a_tall_biped_strikes_from_farther_away_than_its_body_geometry_seems_to_allow]
  local_aliases_or_titles: none
  identification_evidence: [distinctive_body_shape, controlled_leg_extension, impact_posture]
  initial_knowledge_fragments: [ordinary_melee_distance_is_unreliable]
  post_identification_knowledge: [extension_is_bounded_and_tied_to_kicking_physiology]
  advanced_insights: [stance_balance_and_fatigue_can_make_reach_more_predictable_without_needing_exact_physics]
  exceptional_individual_knowledge_hooks: [an_old_Hitmonlee_is_known_for_a_distinctive_long_range_rising_kick_and_a_visible_recovery_habit]
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states: [observing, mobile, warning, striking, successive_kick_action, recovering, withdrawing]
  aggression_tendency: variable_and_not_implied_by_fighting_type_or_humanoid_shape
  territoriality: unknown_or_local
  avoidance_tendency: variable
  warning_signs: [stance_change, balance_set, leg_extension, repeated_testing_steps]
  encounter_triggers: [route_crossing, defensive_conflict, explicitly_authored_competition_or_threat]
  escalation_triggers: [cornering, attack, ignored_warning, event_specific_threat]
  deescalation_conditions: [distance, stop_interference, allow_withdrawal, exploit_nonaggressive_pause]
  pursuit_profile: unknown_or_individual_specific
  group_size_effects: [each_Hitmonlee_is_an_independent_entity_with_one_ordinary_turn]
  ordinary_consequence_categories: [major_blunt_injury, knockdown_or_position_loss, reach_based_denial]
  consequence_ceiling: severe_only_when_explicit_context_supports_it
  human_check_hooks:
  - action: stay_outside_or_cross_an_extended_kick_lane
    relevant_species_axis: speed
    relevant_tags: [extended_kick_reach, impact_hardened_sole]
    relevant_hazard_keys: [hitmonlee-extended-kick]
    difficulty_guidance: D024_context_from_distance_cover_stance_prior_observation_and_current_action_commitment
    notes: reach_is_authored_geometry_not_continuous_limb_simulation
  - action: withstand_or_deflect_a_kick
    relevant_species_axis: force
    relevant_tags: [high_force_kick]
    relevant_hazard_keys: [hitmonlee-extended-kick]
    difficulty_guidance: D024_plus_protection_position_and_strike_context
    notes: Force_6_does_not_mean_automatic_armor_penetration
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [reserved, reactive, disciplined_looking_without_human_training_implication, aggressive]
    condition_variants: [fresh, striking, extended, fatigued, recovering, injured]
    local_lineage_variants: [none_without_evidence_or_D2_local_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_body_development, repeated_survival, persistent_injury_adaptation, local_lineage]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_reach_or_stance, persistent_history, clear_warning_traits]
    warning_or_rumor_hooks: [one_Hitmonlee_has_a_documented_reach_pattern_that_local_people_mark_with_stones_along_a_pass]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_trust, noncoercive_repeat_contact, safe_space_for_body_motion]
  trust_building_paths: [mutual_aid, respecting_warning_distance, never_using_forced_training_or_restraint]
  reasons_to_stay: [exceptional_bond, stable_shared_history]
  rejection_or_departure_reasons: [forced_combat_training, restraint_of_legs, treating_it_as_equipment_or_labor]
  human_social_costs: [settlement_space_needs, fear_of_long_reach, need_for_clear_handling_rules]
  logistics:
    food: [exact_complete_diet_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [species_appropriate_safe_rest_site_exact_preference_unknown]
    space_travel: [room_to_move_and_extend_legs_safely]
    settlement_restrictions: [avoid_dense_crowds_or_narrow_shared_spaces_when_agitated]
    special_resources: [none_fixed]
  assistance_capabilities: [individual_specific_reach_or_physical_help_only_when_safe_and_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_training, no_body_as_tool, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [unusually_distant_impact_marks, long_stride_signs, post_conflict_rest_site]
  avoidance_preparation: [increase_expected_melee_clearance, use_solid_cover, watch_stance]
  resistance_or_protection: [cover, ordinary_physical_protection, angle_and_distance]
  combat_approach_permissions: [discrete_extended_reach_state, one_action_can_describe_successive_kicks]
  blocked_or_invalid_approaches: [infinite_leg_reach, grapple_rope_traversal, passenger_transport, extra_turns, universal_armor_penetration, kinetic_energy_formula]
  fear_hooks: [a_kick_lands_from_a_distance_everyone_thought_was_safe]
  injury_hazard_hooks: [extended_high_force_kick]
  environmental_state_hooks: [stance, reach_lane, cover, fatigue, balance]
  companion_assistance_hooks: [contextual_reach_help_only]
  fortune_spike_opportunities: [spot_the_posture_that_precedes_extension_and_move_before_the_strike]
  trouble_spike_complications: [a_narrow_route_forces_the_party_into_the_extended_kick_lane]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [feet_legs_ligaments_and_muscle_are_not_live_harvest_resources]
  taboo_or_protection: [local_D2_only_if_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [specialized_physiology_does_not_create_a_generic_spring_material_martial_school_or_machine_design]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [measure_safe_distance_from_repeated_noncombat_observation_without_forcing_a_demonstration]
  dangerous: [a_long_reach_kick_turns_an_apparently_safe_corridor_into_a_strike_lane]
  unusual_or_rare: [an_exceptional_individual_has_a_recognizable_reach_and_recovery_pattern_recorded_by_local_survivors]
  discovery_insight: [the_legs_extend_for_kicking_but_do_not_function_as_arbitrary_tendrils_or_travel_tools]
  route_environment: [cover_placement_and_side_exits_matter_more_than_literal_speed_math]
  settlement_culture: [local_people_keep_extra_clearance_without_creating_formal_martial_institutions]
  cross_species: [Tyrogue_Hitmonchan_and_Hitmontop_relationships_do_not_transfer_species_specific_physiology]
presentation_and_p6_followups:
  initial_bestiary_presentation: rare_bipedal_Pokemon_with_controlled_leg_extension_and_impact_hardening_that_breaks_normal_melee_distance_expectations
  progressive_reveal_notes: [reveal_reach_and_balance_before_extreme_material_claims, keep_Kick_Master_language_as_reputation]
  species_specific_visual_needs: [clear_leg_extension_silhouette, stance_and_balance_cues, sole_impact_readability]
  species_specific_audio_needs: [extension_or_impact_cues_if_needed]
  special_ui_or_readability_needs: [show_discrete_extended_reach_state_without_numeric_real_world_length_simulation]
  p6_followup_required: true
cross_species_links:
  evolution_family: [tyrogue_external_post_gen1, hitmonchan, hitmontop_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [extension_speed_and_joint_geometry, maximum_non_kick_reach, sole_hardness_material_limits, fatigue_accumulation_and_recovery_duration, literal_scope_of_every_known_kick]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [discrete_extended_kick_reach_and_optional_fatigue_recovery_states]
  deferred_to_p6: [reach_lane_stance_and_impact_readability]
  deferred_to_p7: [cache_reach_state_and_action_resolution_do_not_run_continuous_skeletal_or_collision_physics]
```
