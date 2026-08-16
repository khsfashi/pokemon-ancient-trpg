# P4 Batch 17 — #123 Scyther Full-Schema Dossier

Part of `docs/P4_BATCH_17_FULL_SCHEMA_DOSSIERS.md`.

---

## #123 Scyther / 스라크

```yaml
identity:
  national_dex: 123
  species_key: scyther
  official_name_en: Scyther
  official_name_ko: 스라크
  evolution_family_keys: [scyther, scizor_external_post_gen1, kleavor_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SCYTHER-SG, P4_BATCH_17_SOURCE_REVIEW]
  official_evidence:
  - claim_id: SCT-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-SCYTHER-SG
    version_context: current_official_portal__OBSERVED_ANATOMY_AND_PREDATION
    paraphrase: sharp_forearm_scythes_are_body_integrated_weapons_used_to_cut_vegetation_hard_objects_and_prey
  - claim_id: SCT-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-SCYTHER-SG
    version_context: current_official_portal__OBSERVED_SPEED_PERCEPTION
    paraphrase: movement_can_be_too_fast_for_the_human_eye_to_track_cleanly
  - claim_id: SCT-C1-003
    evidence_class: C1
    source_ref: OFFICIAL-DEX-SCYTHER-SG
    version_context: current_official_portal__OBSERVED_MAINTENANCE
    paraphrase: cutting_hard_objects_can_make_the_forearm_scythes_sharper
  - claim_id: SCT-C1-004
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__ANALOGY_AND_VERSION_SCOPED_EXTRAORDINARY
    paraphrase: historical_entries_add_grass_camouflage_blur_multiple_image_impressions_thick_log_cutting_rare_flight_and_ninja_comparisons
  derived_claims:
  - claim_id: SCT-D1-001
    evidence_class: D1
    based_on: [SCT-C1-001, SCT-C1-003]
    statement: scythes_are_living_anatomy_with_species_local_cutting_and_edge_condition_capability
    canon_boundary_note: they_are_not_detachable_equipment_durability_slots_or_live_harvest_resources
  - claim_id: SCT-D1-002
    evidence_class: D1
    based_on: [SCT-C1-002, SCT-C1-004]
    statement: Scyther_can_create_extreme_visual_tracking_pressure_and_contextual_grass_camouflage
    canon_boundary_note: blur_or_invisible_wording_does_not_create_teleportation_permanent_invisibility_auto_evasion_or_extra_entities
  - claim_id: SCT-D1-003
    evidence_class: D1
    based_on: [SCT-C1-001, SCT-C1-004]
    statement: severe_material_cutting_claims_support_authored_obstacle_and_injury_pressure
    canon_boundary_note: no_universal_material_deletion_destructible_world_or_one_hit_rule
canonical_source_data:
  types: [bug, flying]
  base_stats_raw: {hp: 70, attack: 110, defense: 80, special_attack: 55, special_defense: 80, speed: 105}
  abilities_relevant_to_p4: [swarm_as_modern_context, technician_as_modern_context, steadfast_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.5_m, weight: 56.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [scizor_external_post_gen1, kleavor_external_post_gen1]
    canonical_conditions: [Scizor_Kleavor_and_their_trade_item_or_regional_conditions_are_post_Gen1_context_only]
  other_material_facts:
  - body_integrated_forearm_scythes
  - extreme_visual_relative_speed
  - hard_object_cutting_can_sharpen_scythes
  - predatory_use_of_scythes
  - version_scoped_grass_camouflage_and_rare_flight
  - version_scoped_thick_log_cutting_and_nearly_impossible_parry_language
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 5
  guard: 4
  potency: 2
  resistance: 4
  speed: 5
  derivation_notes: {vigor: hp_70, force: attack_110, guard: defense_80, potency: special_attack_55, resistance: special_defense_80, speed: speed_105}
  calibration_flags:
  - no_manual_exception
  - speed_5_does_not_grant_auto_initiative_evasion_or_teleportation
  - cutting_capability_is_species_local_and_not_a_material_deletion_formula
  - two_scythes_do_not_create_extra_actions_or_entities
capabilities_and_hazards:
  locomotion: [very_fast_ground_and_leaping_movement, version_scoped_rare_winged_flight]
  physical_hazards: [body_integrated_scythe_strikes, ambush_cutting_pressure, predatory_pursuit]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [rapid_ambush, prey_pursuit, context_dependent_grass_camouflage]
  utility_interaction_capabilities: [species_local_cutting_of_supported_vegetation_or_objects_when_an_authored_material_interaction_allows_it]
  immunities_or_approach_invalidators:
  - camouflage_does_not_create_permanent_invisibility
  - fast_motion_does_not_create_extra_entities_or_guaranteed_first_action
  - rare_flight_does_not_grant_unrestricted_travel_or_passenger_transport
  hazard_records:
  - hazard_key: scyther-scythe-ambush
    kind: other
    delivery_or_exposure: [entering_close_or_mid_range_of_a_hidden_or_fast_approaching_Scyther, remaining_in_a_clear_scythe_lane]
    prerequisite_or_trigger: [Scyther_commits_to_attack_or_predation, terrain_and_position_support_the_approach]
    warning_signs: [cut_vegetation, brief_blur_or_movement, disturbed_grass, reflected_scythe_edge, prior_local_signs]
    immediate_effects: [serious_cutting_injury, position_loss, sudden_visual_tracking_failure]
    delayed_or_persistent_effects: [ordinary_injury_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_explicit_predatory_compound_or_named_apex_context
    countermeasures: [deny_ambush_cover, use_solid_cover_or_distance, watch_indirect_signs_not_only_the_body, avoid_clear_scythe_lanes, exploit_terrain_that_reduces_speed]
    emergency_consumable_hooks: []
    context_amplifiers: [tall_grass, low_visibility, open_attack_lane, target_fixates_on_visual_tracking_only]
    context_mitigators: [cleared_space, solid_cover, indirect_detection, confined_geometry_that_limits_swing_or_speed]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SCT-C1-001, SCT-C1-002, SCT-C1-004, SCT-D1-001, SCT-D1-002]
  notes:
  - scythe_edge_condition_can_be_a_discrete_authored_state_without_equipment_durability_simulation
  - thick_log_wording_does_not_imply_every_material_can_be_cut
  - visual_blur_and_camouflage_are_contextual_information_pressure_not_hidden_auto_hit
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: dense_vegetation_low_information_and_iron_age_protection_can_make_fast_predatory_scythe_encounters_more_dangerous_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: suitable_terrain_can_make_ambush_and_tracking_pressure_more_relevant
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat: [vegetated_hunting_localities_when_locally_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [fast_blade_armed_predator_or_competitor]
  activity_pattern: [exact_daily_pattern_unknown]
  seasonal_notes: [exact_seasonality_unknown]
  feeding_and_resource_interaction: [prey_use_is_source_backed, complete_diet_and_prey_roster_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [prey_relationships_require_species_specific_authoring]
  environmental_effects: [cut_vegetation_and_marks_can_create_local_signs_but_not_generic_terrain_destruction]
  observable_signs: [clean_cut_vegetation, sharpened_or_scored_hard_objects_when_authored, blur_or_disturbed_grass, prey_remains_only_when_event_context_supports_them]
  locality_constraints: [D034_direct_encounterability_somewhere_does_not_equal_commonness_or_everywhere_presence]
  unsupported_gaps: [exact_scythe_material_and_regrowth, camouflage_effectiveness, visual_tracking_threshold, flight_duration_load_frequency, material_cutting_limits, pursuit_abandonment]
human_perception_and_culture:
  ordinary_attitude: [strong_caution_where_known]
  specialist_knowledge_holders: [hunters, trackers, repeat_survivors_who_read_cut_signs_and_grass_movement]
  benefits_and_services: [none_required]
  fears_and_avoidance: [ambush, unreadable_speed, severe_cutting_injury]
  myths_omens_taboos: [ninja_like_or_invisible_stories_may_be_repeated_as_analogy_or_D2_exaggeration_not_human_training_history]
  practical_customs: [read_cut_signs, clear_sightlines, avoid_chasing_into_tall_grass, use_cover]
  common_misbeliefs: [Scyther_teleports, each_blur_is_another_entity, scythes_can_be_harvested_as_normal_weapons, any_material_can_be_cut]
  local_variation_notes: [no_human_ninja_school_or_weapon_guild_is_implied]
identification_and_knowledge:
  baseline_recognition: rare
  unknown_presentation_hooks: [vegetation_is_cut_cleanly_before_a_green_blur_crosses_the_gap]
  local_aliases_or_titles: none
  identification_evidence: [forearm_scythes, distinctive_body_shape, cut_signs, extreme_motion]
  initial_knowledge_fragments: [direct_visual_tracking_is_unreliable, tall_grass_can_hide_approach]
  post_identification_knowledge: [scythes_are_body_parts_and_hard_cutting_can_affect_edge_condition]
  advanced_insights: [indirect_signs_and_terrain_control_are_more_reliable_than_trying_to_match_speed]
  exceptional_individual_knowledge_hooks: [an_old_Scyther_is_recognized_by_a_distinctive_notch_and_a_pattern_of_unusually_clean_cut_marks]
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states: [hidden_or_observing, stalking, warning, striking, pursuing, withdrawing, rare_flight_if_explicit]
  aggression_tendency: predatory_or_defensive_context_dependent
  territoriality: unknown_or_local
  avoidance_tendency: variable
  warning_signs: [fresh_cut_marks, grass_movement, momentary_blur, scythe_reflection_or_sound]
  encounter_triggers: [hunting_ground_crossing, prey_context, route_ambush, disturbance]
  escalation_triggers: [close_pursuit, threat, prey_chase, ignored_warning]
  deescalation_conditions: [leave_hunting_area, create_hard_cover_or_distance, stop_pursuit, allow_withdrawal]
  pursuit_profile: high_pressure_but_event_bounded
  group_size_effects: [each_Scyther_remains_an_independent_entity_and_blur_never_duplicates_actions]
  ordinary_consequence_categories: [serious_cutting_injury, ambush_position_loss, route_denial, pursuit_pressure]
  consequence_ceiling: severe_in_explicit_predatory_or_exceptional_context
  human_check_hooks:
  - action: detect_or_avoid_a_grass_ambush
    relevant_species_axis: speed
    relevant_tags: [visual_blur, grass_camouflage, ambush]
    relevant_hazard_keys: [scyther-scythe-ambush]
    difficulty_guidance: D024_context_from_terrain_indirect_signs_visibility_and_prior_knowledge
    notes: success_can_use_tracks_and_cut_signs_without_visually_tracking_the_body
  - action: defend_against_or_escape_a_scythe_strike
    relevant_species_axis: force
    relevant_tags: [body_integrated_scythes]
    relevant_hazard_keys: [scyther-scythe-ambush]
    difficulty_guidance: D024_plus_cover_distance_stance_and_current_attack_lane
    notes: nearly_impossible_to_parry_wording_is_not_auto_hit_or_auto_failure
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, territorial, predatory, unusually_tolerant]
    condition_variants: [hidden, stalking, striking, edge_worn_or_freshly_sharpened_when_authored, injured]
    local_lineage_variants: [none_without_evidence_or_D2_local_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_scythe_growth_or_wear, long_hunting_history, local_lineage, persistent_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_scythe_marks, route_history, behavior_or_visual_tell]
    warning_or_rumor_hooks: [one_Scyther_leaves_a_distinctive_pair_of_cut_heights_and_has_survived_many_hunting_seasons]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_trust, noncoercive_repeat_contact, safe_space_for_scythes_and_speed]
  trust_building_paths: [mutual_survival, respecting_hunting_and_retreat_boundaries, no_attempt_to_remove_or_use_scythes]
  reasons_to_stay: [exceptional_bond, stable_shared_history]
  rejection_or_departure_reasons: [forced_restraint, live_harvest_attempt, coercive_combat_use, crowding]
  human_social_costs: [fear_of_body_integrated_blades, need_for_wide_space_and_settlement_rules]
  logistics:
    food: [species_appropriate_food_with_pre_carnivorous_or_predatory_needs_exact_diet_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [species_appropriate_safe_rest_site_exact_preference_unknown]
    space_travel: [clearance_for_scythes_and_fast_movement]
    settlement_restrictions: [avoid_dense_crowds_and_tight_shared_spaces]
    special_resources: [none_fixed]
  assistance_capabilities: [species_local_cutting_only_when_voluntary_safe_and_material_context_is_explicit]
  handling_boundaries: [no_defeat_to_recruit, no_scythe_removal, no_live_harvesting, no_passenger_flight_assumption, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [clean_cut_vegetation, disturbed_grass, high_speed_tracks_or_blur_reports]
  avoidance_preparation: [clear_sightlines, use_indirect_detection, preserve_solid_cover]
  resistance_or_protection: [solid_cover, distance, ordinary_cut_resistant_protection_when_available, terrain_control]
  combat_approach_permissions: [contextual_camouflage, discrete_scythe_edge_condition, rare_flight_only_when_event_supports_it]
  blocked_or_invalid_approaches: [permanent_invisibility, auto_evasion, teleportation, duplicate_entities_from_blur, universal_material_deletion, detachable_scythe_weapons, automatic_live_harvest]
  fear_hooks: [the_cut_mark_appears_before_anyone_gets_a_clear_view_of_what_made_it]
  injury_hazard_hooks: [ambush_scythe_strike]
  environmental_state_hooks: [tall_grass, cleared_space, cover, attack_lane, edge_condition]
  companion_assistance_hooks: [bounded_cutting_help_only]
  fortune_spike_opportunities: [spot_a_fresh_cut_pattern_and_avoid_the_ambush_lane]
  trouble_spike_complications: [the_route_enters_tall_grass_where_visual_tracking_is_least_reliable]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_scythes_are_not_detachable_or_repeatable_harvest_nodes]
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
  scalability_limits: [body_integrated_scythes_and_cutting_performance_do_not_create_a_weapon_supply_chain_or_generic_material_cutting_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [track_a_Scyther_by_cut_signs_without_forcing_direct_contact]
  dangerous: [a_grass_ambush_turns_visual_tracking_into_the_wrong_problem_and_the_party_must_reach_hard_cover]
  unusual_or_rare: [an_exceptional_individual_is_known_by_scythe_wear_and_a_long_local_hunting_history]
  discovery_insight: [the_blur_is_one_fast_body_and_the_scythes_are_living_anatomy_not_weapons_to_collect]
  route_environment: [tall_grass_and_cleared_corridors_change_information_and_attack_pressure]
  settlement_culture: [local_people_read_cut_heights_and_keep_clear_verges_without_normalizing_hunting_or_ownership]
  cross_species: [Scizor_and_Kleavor_are_post_Gen1_context_and_do_not_back_propagate_material_or_evolution_rules]
presentation_and_p6_followups:
  initial_bestiary_presentation: very_fast_predatory_bug_Pokemon_with_body_integrated_scythes_contextual_grass_camouflage_and_severe_cutting_pressure
  progressive_reveal_notes: [show_cut_signs_and_visual_tracking_pressure_before_extraordinary_material_claims, label_ninja_language_as_analogy]
  species_specific_visual_needs: [single_body_blur_readability, scythe_edge_and_cut_signs, camouflage_without_true_invisibility]
  species_specific_audio_needs: [vegetation_cut_and_fast_approach_cues]
  special_ui_or_readability_needs: [indirect_detection_clues_and_contextual_camouflage_state]
  p6_followup_required: true
cross_species_links:
  evolution_family: [scizor_external_post_gen1, kleavor_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [scythe_material_properties_and_regrowth, camouflage_effectiveness, visual_tracking_threshold, flight_duration_load_frequency, one_stroke_material_limits, pursuit_abandonment]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [contextual_camouflage_ambush_discrete_scythe_edge_condition_and_rare_flight_event_states]
  deferred_to_p6: [blur_camouflage_cut_sign_and_single_entity_readability]
  deferred_to_p7: [cache_terrain_and_edge_states_do_not_run_per_frame_visibility_material_fracture_or_motion_simulation]
```
