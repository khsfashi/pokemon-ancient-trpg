# P4 Batch 17 — #057 Primeape Full-Schema Dossier

Part of `docs/P4_BATCH_17_FULL_SCHEMA_DOSSIERS.md`.

---

## #057 Primeape / 성원숭

```yaml
identity:
  national_dex: 57
  species_key: primeape
  official_name_en: Primeape
  official_name_ko: 성원숭
  evolution_family_keys: [mankey, primeape, annihilape_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-PRIMEAPE-SG, P4_BATCH_17_SOURCE_REVIEW]
  official_evidence:
  - claim_id: PRM-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PRIMEAPE-SG
    version_context: current_official_portal__OBSERVED_TEMPERAMENT_AND_PURSUIT
    paraphrase: perceived_gaze_or_attention_can_trigger_fury_and_a_chase
  - claim_id: PRM-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PRIMEAPE-SG
    version_context: current_official_portal__SCIENTIST_INTERPRETATION_MODERN_CONTAINMENT
    paraphrase: some_researchers_theorize_that_anger_can_persist_even_inside_a_Poke_Ball
  - claim_id: PRM-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__VERSION_SCOPED_EXTRAORDINARY
    paraphrase: historical_entries_add_extreme_pursuit_sleep_interruption_chase_and_fury_linked_strength_and_judgment_changes
  derived_claims:
  - claim_id: PRM-D1-001
    evidence_class: D1
    based_on: [PRM-C1-001, PRM-C1-003]
    statement: Primeape_supports_severe_perception_linked_escalation_and_tenacious_but_bounded_pursuit
    canon_boundary_note: pursuit_never_becomes_infinite_pathfinding_or_an_unavoidable_species_rule
  - claim_id: PRM-D1-002
    evidence_class: D1
    based_on: [PRM-C1-003]
    statement: fury_can_be_authored_as_a_behavioral_tradeoff_with_greater_physical_pressure_and_poorer_judgment
    canon_boundary_note: no_fixed_damage_multiplier_or_total_loss_of_self_preservation_is_implied
  - claim_id: PRM-D1-003
    evidence_class: D1
    based_on: [PRM-C1-002]
    statement: Poke_Ball_persistent_anger_is_researcher_theory_in_modern_context_only
    canon_boundary_note: does_not_authorize_ancient_portable_containment_or_make_the_theory_certain
canonical_source_data:
  types: [fighting]
  base_stats_raw: {hp: 65, attack: 105, defense: 60, special_attack: 60, special_defense: 70, speed: 95}
  abilities_relevant_to_p4: [vital_spirit_as_modern_context, anger_point_as_modern_context, defiant_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.0_m, weight: 32.0_kg}
  evolution_source:
    evolves_from: mankey
    evolves_to: [annihilape_external_post_gen1]
    canonical_conditions: [Mankey_current_level_28_metadata_is_source_context_not_ancient_level_law, Annihilape_and_its_move_use_condition_are_post_Gen1_context]
  other_material_facts:
  - gaze_or_attention_linked_fury
  - persistent_pursuit_behavior
  - version_scoped_sleep_interruption_chase
  - version_scoped_fury_strength_and_judgment_change
  - modern_researcher_theory_about_containment_anger
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 5
  guard: 3
  potency: 3
  resistance: 3
  speed: 4
  derivation_notes: {vigor: hp_65, force: attack_105, guard: defense_60, potency: special_attack_60, resistance: special_defense_70, speed: speed_95}
  calibration_flags:
  - no_manual_exception
  - pursuit_severity_is_not_derived_from_speed_4
  - fury_is_not_a_numeric_stat_multiplier
  - one_entity_one_turn_one_health_state_one_visible_companion_slot
capabilities_and_hazards:
  locomotion: [fast_ground_pursuit, agile_close_range_movement]
  physical_hazards: [powerful_close_range_striking, tenacious_pursuit_pressure]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [gaze_linked_escalation, bounded_pursuit, version_scoped_fury_judgment_tradeoff]
  utility_interaction_capabilities: [learnable_warning_and_deescalation_patterns_when_an_individual_is_observed_repeatedly]
  immunities_or_approach_invalidators:
  - gaze_trigger_does_not_grant_omnidirectional_or_wall_penetrating_detection
  - pursuit_does_not_remove_escape_resolution
  - Vital_Spirit_does_not_create_universal_sleep_immunity_in_world_fiction
  hazard_records:
  - hazard_key: primeape-bounded-pursuit
    kind: other
    delivery_or_exposure: [perceived_attention_or_eye_contact_followed_by_authored_escalation, pursuit_after_a_target_breaks_contact_or_runs]
    prerequisite_or_trigger: [Primeape_has_perceived_a_relevant_target_and_entered_an_explicit_pursuit_state]
    warning_signs: [fixed_attention, rising_agitation, aggressive_posture, immediate_route_commitment]
    immediate_effects: [high_speed_chase_pressure, close_range_injury_risk, reduced_safety_of_simple_straight_line_flight]
    delayed_or_persistent_effects: [pursuit_may_continue_across_multiple_authored_route_states_but_never_without_exit_conditions]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_for_a_named_history_backed_pursuer_or_compound_route_hazard
    countermeasures: [break_line_of_sight, use_route_geometry_or_barriers, stop_escalating_behavior_when_possible, exploit_competing_goals_or_environment, reach_a_pre_authored_safe_boundary]
    emergency_consumable_hooks: []
    context_amplifiers: [open_ground, target_running_in_plain_view, prior_provocation, Primeape_already_enraged]
    context_mitigators: [cover, vertical_or_narrow_terrain, hard_barriers, competing_threats, injury_or_exhaustion, explicit_deescalation_state]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [PRM-C1-001, PRM-C1-003, PRM-D1-001]
  notes:
  - extreme_distance_wording_is_reputation_or_version_scoped_pressure_not_literal_distance
  - fleeing_can_be_dangerous_in_some_states_without_being_globally_forbidden
  - no_continuous_infinite_pursuit_pathfinding_is_required
ancient_strength:
  classifications: [similar_to_modern_baseline, behaviorally_harsher, ecologically_more_dangerous]
  evidence_class: D2
  rationale: sparse_safe_infrastructure_and_limited_information_make_tenacious_pursuit_more_dangerous_without_changing_the_species_baseline
  stat_effect_if_any: none
  behavior_effect_if_any: route_level_pursuit_states_may_have_fewer_safe_boundaries_in_remote_localities
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat: [exact_proto_kanto_distribution_unknown, habitats_compatible_with_Mankey_family_only_when_locally_authored]
  ecological_niche: [aggressive_mobile_forager_or_competitor_with_high_pursuit_pressure]
  activity_pattern: [ordinary_pattern_unknown, sleep_interruption_chase_is_version_scoped]
  seasonal_notes: [exact_seasonality_unknown]
  feeding_and_resource_interaction: [exact_complete_diet_unknown]
  social_structure: [not_automatically_inherited_from_Mankey_group_behavior]
  predator_prey_competitor_links: [species_specific_only_when_supported_or_authored]
  environmental_effects: [active_pursuit_can_temporarily_turn_open_routes_into_high_risk_spaces]
  observable_signs: [tracks, disturbed_route_edges, aggressive_vocal_or_posture_cues, repeated_chase_reports]
  locality_constraints: [D034_direct_encounterability_somewhere_does_not_equal_commonness_or_everywhere_presence]
  unsupported_gaps: [pursuit_abandonment_distance, gaze_detection_mechanism, calm_state_frequency, fury_strength_change_magnitude, complete_diet]
human_perception_and_culture:
  ordinary_attitude: [strong_caution_where_known]
  specialist_knowledge_holders: [local_route_guides, hunters, observers_with_repeat_survival_experience]
  benefits_and_services: [none_required]
  fears_and_avoidance: [eye_contact_or_attention_escalation, long_pursuit, enraged_close_combat]
  myths_omens_taboos: [stories_of_a_Primeape_that_never_stops_chasing_may_exist_as_D2_without_becoming_engine_truth]
  practical_customs: [avoid_staring_or_provoking, keep_cover_options, know_safe_boundaries_before_crossing_known_territory]
  common_misbeliefs: [Primeape_can_track_anyone_anywhere, running_always_fails, fury_makes_it_invincible, modern_Poke_Ball_theory_proves_ancient_containment]
  local_variation_notes: [no_normalized_trainer_or_fighting_institution_implied]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_stocky_primate_like_creature_holds_a_stare_then_commits_to_a_chase_far_beyond_expected_territory]
  local_aliases_or_titles: none
  identification_evidence: [body_shape, gaze_linked_escalation, persistent_route_pursuit]
  initial_knowledge_fragments: [attention_can_be_dangerous, breaking_contact_does_not_always_end_the_encounter]
  post_identification_knowledge: [pursuit_is_severe_but_terrain_and_state_bounded]
  advanced_insights: [recognize_when_fury_has_reduced_judgment_and_when_route_geometry_can_create_a_safe_exit]
  exceptional_individual_knowledge_hooks: [a_named_or_rumored_Primeape_has_a_documented_multi_route_pursuit_history_and_known_abandonment_trigger]
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states: [calm_or_solitary, watching, warning, furious, pursuing, recovering_or_disengaging]
  aggression_tendency: high_when_attention_or_provocation_triggers_apply_but_not_permanent
  territoriality: unknown_or_local
  avoidance_tendency: low_once_in_an_explicit_pursuit_state
  warning_signs: [sustained_stare, agitation, route_commitment, ignored_distractions]
  encounter_triggers: [route_crossing, perceived_attention, sleep_disturbance_when_version_scoped_content_uses_it]
  escalation_triggers: [eye_contact_or_perceived_staring, fleeing_in_plain_view, prior_defeat_or_provocation_when_authored]
  deescalation_conditions: [line_of_sight_break, hard_route_boundary, competing_goal, exhaustion_or_injury, authored_calming_or_disengagement_state]
  pursuit_profile: severe_but_event_bounded
  group_size_effects: [multiple_Primeape_are_independent_entities_and_never_gain_shared_health_or_free_actions]
  ordinary_consequence_categories: [major_physical_injury, route_displacement, resource_loss_during_escape, forced_change_of_plan]
  consequence_ceiling: severe_in_explicit_compound_or_exceptional_context
  human_check_hooks:
  - action: avoid_triggering_or_escalating_attention
    relevant_species_axis: none
    relevant_tags: [gaze_linked_escalation]
    relevant_hazard_keys: [primeape-bounded-pursuit]
    difficulty_guidance: D024_context_from_visibility_distance_behavior_and_prior_local_knowledge
    notes: this_is_situation_reading_not_a_global_eye_contact_subsystem
  - action: escape_an_active_pursuit
    relevant_species_axis: speed
    relevant_tags: [bounded_pursuit]
    relevant_hazard_keys: [primeape-bounded-pursuit]
    difficulty_guidance: D024_plus_route_geometry_cover_barriers_exhaustion_and_current_pursuit_state
    notes: failure_changes_current_consequence_or_position_not_player_control_permissions_globally
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [watchful, volatile, relentlessly_focused, unusually_avoidant]
    condition_variants: [calm, agitated, furious, pursuing, exhausted, injured]
    local_lineage_variants: [none_without_evidence_or_D2_local_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, long_conflict_history, unusual_territorial_memory, persistent_injury_or_loss, repeated_human_contact]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_marks_or_behavior, documented_pursuit_history, known_trigger_or_goal]
    warning_or_rumor_hooks: [one_Primeape_is_said_to_have_followed_the_same_caravan_across_multiple_landmarks_but_always_stops_at_a_specific_river_boundary]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_trust, proven_deescalation, long_noncoercive_history, safe_space_and_no_forced_containment]
  trust_building_paths: [repeat_contact_without_staring_or_cornering, mutual_survival, respecting_retreat_and_boundaries]
  reasons_to_stay: [exceptional_bond, familiar_protective_relationship, stable_individual_history]
  rejection_or_departure_reasons: [coercion, deliberate_fury_testing, forced_confinement, repeated_provocation]
  human_social_costs: [fear_in_settlements, route_and_space_planning, high_consequence_if_agitation_is_ignored]
  logistics:
    food: [species_appropriate_food_exact_complete_diet_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [safe_private_rest_site]
    space_travel: [avoid_confined_crowds_and_forced_restraint]
    settlement_restrictions: [strict_spacing_and_exit_plan_when_agitated]
    special_resources: [none_fixed]
  assistance_capabilities: [high_physical_pressure_only_when_voluntarily_cooperative_and_safe]
  handling_boundaries: [no_defeat_to_recruit, no_Poke_Ball_assumption, no_fury_exploitation, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_can_leave_if_trust_breaks]
mechanical_hooks:
  tracking_clues: [persistent_tracks_across_route_boundaries, disturbed_cover, local_chase_reports]
  avoidance_preparation: [minimize_staring, plan_cover_and_barriers, learn_known_safe_boundaries]
  resistance_or_protection: [route_geometry, cover, hard_barriers, ordinary_physical_protection]
  combat_approach_permissions: [fury_can_create_judgment_tradeoffs_only_when_explicitly_authored, one_turn_per_entity]
  blocked_or_invalid_approaches: [infinite_pursuit, omnidetection, global_no_flee, fixed_fury_multiplier, ancient_Poke_Ball_inference]
  fear_hooks: [the_chase_continues_after_the_party_reaches_the_next_landmark]
  injury_hazard_hooks: [high_force_close_range_attack_during_pursuit]
  environmental_state_hooks: [line_of_sight, barriers, open_ground, route_boundaries, exhaustion]
  companion_assistance_hooks: [individual_specific_physical_assistance_only]
  fortune_spike_opportunities: [a_known_terrain_boundary_breaks_the_pursuit]
  trouble_spike_complications: [the_apparent_escape_route_is_open_ground_and_the_Primeape_has_not_disengaged]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_body_parts_are_not_automatic_materials]
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
  scalability_limits: [pursuit_and_fury_do_not_create_martial_training_or_containment_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_solitary_Primeape_from_cover_without_crossing_its_attention_threshold]
  dangerous: [a_glance_becomes_a_chase_and_the_party_must_use_authored_route_features_to_end_it]
  unusual_or_rare: [a_history_backed_Primeape_has_a_known_multi_route_pursuit_pattern_and_a_specific_reason_for_stopping]
  discovery_insight: [tenacity_is_not_infinite_and_local_terrain_knowledge_can_matter_more_than_raw_speed]
  route_environment: [open_ground_between_two_cover_clusters_becomes_the_core_risk_of_a_pursuit_scene]
  settlement_culture: [local_people_mark_routes_where_staring_or_running_in_plain_view_has_repeatedly_triggered_chases]
  cross_species: [Mankey_family_relationship_does_not_auto_inherit_group_behavior]
presentation_and_p6_followups:
  initial_bestiary_presentation: powerful_volatile_primate_with_attention_linked_fury_and_unusually_tenacious_pursuit
  progressive_reveal_notes: [show_pursuit_behavior_before_historical_absolute_claims, label_Poke_Ball_statement_as_modern_researcher_theory]
  species_specific_visual_needs: [stare_and_agitation_transition, chase_commitment, fatigue_or_judgment_change_readability]
  species_specific_audio_needs: [agitation_and_pursuit_cues]
  special_ui_or_readability_needs: [bounded_pursuit_state_and_known_exit_conditions_without_hidden_no_flee_flag]
  p6_followup_required: true
cross_species_links:
  evolution_family: [mankey, annihilape_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_gaze_detection_mechanism, pursuit_distance_and_abandonment_conditions, fury_strength_change_magnitude, calm_state_frequency, Poke_Ball_theory_literal_truth]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [discrete_gaze_linked_escalation_bounded_pursuit_and_optional_fury_judgment_states]
  deferred_to_p6: [pursuit_warning_exit_and_fury_tradeoff_readability]
  deferred_to_p7: [cache_route_and_pursuit_state_do_not_run_infinite_pathfinding_or_per_frame_species_rule_scans]
```
