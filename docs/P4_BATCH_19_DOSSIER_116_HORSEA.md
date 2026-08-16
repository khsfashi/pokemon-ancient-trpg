# P4 Batch 19 — #116 Horsea Full-Schema Dossier

Part of `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`.

---

## #116 Horsea / 쏘드라

```yaml
identity:
  national_dex: 116
  species_key: horsea
  official_name_en: Horsea
  official_name_ko: 쏘드라
  evolution_family_keys: [horsea, seadra, kingdra_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-HORSEA-SG, P4_BATCH_19_SOURCE_REVIEW]
  official_evidence:
  - claim_id: HOR-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-HORSEA-SG
    version_context: current_official_portal__AQUATIC_ESCAPE_BALANCE_AND_INK
    paraphrase: Horsea_uses_its_developed_dorsal_fin_to_swim_rapidly_toward_safety_uses_its_coiled_tail_for_balance_and_can_spray_ink_from_its_mouth
  - claim_id: HOR-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__MULTIDIRECTIONAL_SWIMMING_TAIL_ANCHORING_PRECISION_INK_AND_FEEDING
    paraphrase: historical_entries_add_backward_or_multidirectional_swimming_tail_anchoring_in_fast_current_precision_ink_hunting_dense_escape_ink_and_small_insect_or_moss_feeding
  derived_claims:
  - claim_id: HOR-D1-001
    evidence_class: D1
    based_on: [HOR-C1-001, HOR-C1-002]
    statement: Horsea_is_a_nimble_aquatic_organism_with_tail_assisted_stability_and_multidirectional_escape_options
    canon_boundary_note: no_guaranteed_flee_generic_grapple_unrestricted_traversal_or_extra_appendage_action
  - claim_id: HOR-D1-002
    evidence_class: D1
    based_on: [HOR-C1-001, HOR-C1-002]
    statement: ink_is_a_finite_event_scoped_defensive_or_hunting_capability
    canon_boundary_note: no_automatic_blindness_input_loss_permanent_concealment_or_always_on_field
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 30, attack: 40, defense: 70, special_attack: 70, special_defense: 25, speed: 60}
  abilities_relevant_to_p4: [swift_swim_as_modern_context, sniper_as_modern_context, damp_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 0.4_m, weight: 8.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [seadra]
    canonical_conditions: [modern_level_32_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [fin_driven_escape, coiled_tail_balance, multidirectional_swimming, tail_anchoring, ink_discharge, version_scoped_precision_ink_hunting, small_insect_and_moss_feeding]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 2
  guard: 3
  potency: 3
  resistance: 1
  speed: 3
  derivation_notes: {vigor: hp_30, force: attack_40, guard: defense_70, potency: special_attack_70, resistance: special_defense_25, speed: speed_60}
  calibration_flags: [no_manual_exception, low_vigor_does_not_remove_escape_capability, ink_hazard_not_capped_by_low_resistance, aquatic_control_not_unrestricted_traversal]
capabilities_and_hazards:
  locomotion: [nimble_aquatic_swimming, backward_and_multidirectional_swimming_historical, tail_anchoring_in_current_historical]
  physical_hazards: [small_body_water_jet_or_impact_pressure_when_escalated]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [rapid_escape_attempt, ink_discharge, precision_surface_hunting_version_scoped]
  utility_interaction_capabilities: [tail_stability_or_anchoring_on_suitable_rock_or_coral]
  immunities_or_approach_invalidators: [aquatic_agility_does_not_guarantee_escape_or_current_immunity]
  hazard_records:
  - hazard_key: horsea-ink-obscuration
    kind: other
    delivery_or_exposure: [ink_discharge_into_local_water_or_toward_a_nearby_target]
    prerequisite_or_trigger: [Horsea_uses_ink_during_escape_defense_or_hunting]
    warning_signs: [mouth_orientation, agitation, sudden_water_positioning]
    immediate_effects: [temporary_local_visibility_loss_or_targeting_pressure]
    delayed_or_persistent_effects: [none_unless_the_scene_authors_a_short_lingering_cloud]
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_only_when_obscuration_combines_with_dangerous_water_or_other_hazards
    countermeasures: [leave_cloud, change_angle_or_distance, use_nonvisual_cues, allow_escape]
    emergency_consumable_hooks: []
    context_amplifiers: [murky_water, confined_pool, darkness]
    context_mitigators: [clear_current, open_water, distance, strong_nonvisual_tracking]
    governing_species_axes: [potency]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [HOR-C1-001, HOR-C1-002, HOR-D1-002]
  - hazard_key: horsea-current-escape-positioning
    kind: other
    delivery_or_exposure: [rapid_direction_change_or_escape_through_shared_water_space]
    prerequisite_or_trigger: [Horsea_attempts_to_flee_or_anchor_in_current]
    warning_signs: [fin_motion, tail_repositioning, current_side_alignment]
    immediate_effects: [position_change_or_pursuit_complication]
    delayed_or_persistent_effects: []
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_when_the_water_environment_itself_is_hazardous
    countermeasures: [do_not_corner, use_route_prediction, preserve_safe_exit, avoid_chasing_into_current]
    emergency_consumable_hooks: []
    context_amplifiers: [fast_current, coral_or_rock_maze, poor_visibility]
    context_mitigators: [open_water, shore_control, visible_route]
    governing_species_axes: [speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [HOR-C1-001, HOR-C1-002, HOR-D1-001]
  notes: [one_Horsea_one_turn_one_health_state_one_initiative_presence, no_continuous_ink_current_or_aquatic_pathfinding_simulation]
ancient_strength:
  classifications: [similar_to_modern_baseline]
  evidence_class: D2
  rationale: no_source_requires_an_ancient_stat_bonus_and_environmental_danger_can_be_authored_through_water_context
  stat_effect_if_any: none
  behavior_effect_if_any: none_beyond_local_context
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [coastal_or_shallow_marine_water, coral_or_rock_current_shelter_when_authored]
  ecological_niche: [small_aquatic_forager_and_escape_specialist]
  activity_pattern: [foraging, resting_in_shelter, rapid_escape_when_threatened]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [small_insects_and_moss_historical, exact_proto_kanto_food_web_unknown]
  social_structure: [safe_location_tail_tangling_historical_context_without_global_social_rule]
  predator_prey_competitor_links: [small_aquatic_prey_or_insect_feeding_requires_local_authoring]
  environmental_effects: [temporary_ink_cloud_only_when_used]
  observable_signs: [small_ink_clouds, tail_anchor_marks_or_resting_positions, fin_driven_wake]
  locality_constraints: [aquatic_habitat_fit_does_not_guarantee_presence_in_every_water_zone]
  unsupported_gaps: [ink_capacity_and_recovery, visibility_duration, current_anchor_limit, exact_escape_success_rate, proto_kanto_distribution]
human_perception_and_culture:
  ordinary_attitude: [low_fear_but_respect_for_its_escape_and_ink_capability]
  specialist_knowledge_holders: [fishers, reef_foragers, coastal_observers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [losing_visibility_in_dangerous_water, chasing_into_current]
  myths_omens_taboos: [none_required]
  practical_customs: [leave_escape_routes, do_not_chase_into_ink_clouds]
  common_misbeliefs: [Horsea_always_escapes, ink_always_blinds, tail_can_grapple_any_target]
  local_variation_notes: [no_generic_aquatic_transport_role_or_ink_trade_is_assumed]
identification_and_knowledge:
  baseline_recognition: specialist
  unknown_presentation_hooks: [a_dense_ink_cloud_appears_around_a_small_fin_driven_silhouette]
  local_aliases_or_titles: none
  identification_evidence: [coiled_tail, fin_driven_multidirectional_movement, mouth_ink_discharge]
  initial_knowledge_fragments: [escape_is_fast_but_not_guaranteed, ink_is_temporary_and_local]
  post_identification_knowledge: [tail_can_anchor_to_suitable_structure_in_current]
  advanced_insights: [predicting_anchor_points_or_escape_lanes_can_avoid_a_pursuit]
  exceptional_individual_knowledge_hooks: [one_Horsea_is_known_for_using_the_same_current_shelter_and_unusually_precise_ink_shots]
threat_and_encounter:
  baseline_threat_band: low_normally_moderate_in_dangerous_water_or_confined_visibility
  default_behavior_states: [foraging, hovering, anchored, warning, ink_escape, fleeing, defensive]
  aggression_tendency: low_by_default
  territoriality: low_or_unknown
  avoidance_tendency: high_when_threatened
  warning_signs: [fin_acceleration, tail_release, mouth_orientation, sudden_ink]
  encounter_triggers: [close_approach, shared_current_shelter, feeding_overlap]
  escalation_triggers: [cornering, persistent_pursuit, attack, blocking_escape]
  deescalation_conditions: [allow_escape, stop_chase, create_open_water_space]
  pursuit_profile: escape_oriented_and_event_bounded
  group_size_effects: [each_Horsea_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [temporary_obscuration, position_loss, water_environment_complication]
  consequence_ceiling: serious_only_when_local_water_hazards_amplify_the_encounter
  human_check_hooks:
  - action: maintain_orientation_or_escape_after_Horsea_ink
    relevant_species_axis: potency
    relevant_tags: [ink, obscuration]
    relevant_hazard_keys: [horsea-ink-obscuration]
    difficulty_guidance: D024_context_from_water_clarity_current_exit_and_nonvisual_cues
    notes: failure_does_not_equal_automatic_blindness_or_input_lock
  - action: predict_or_cut_off_an_escape_route_without_cornering
    relevant_species_axis: speed
    relevant_tags: [aquatic_escape, current_anchor]
    relevant_hazard_keys: [horsea-current-escape-positioning]
    difficulty_guidance: D024_context_from_route_geometry_current_and_visible_anchor_points
    notes: no_guaranteed_capture_or_flee_result
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [shy, curious, skittish, unusually_bold]
    condition_variants: [resting, feeding, anchored, exhausted, injured]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_current_experience, injury_adaptation, repeated_predator_escape]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_mark, unusual_escape_route_or_ink_pattern, history]
    warning_or_rumor_hooks: [one_Horsea_can_hold_position_in_a_current_that_sweeps_others_away]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, reliable_water_access, safe_transport_between_water_sites]
  trust_building_paths: [repeat_noncoercive_contact, rescue, food_without_capture, respecting_escape_behavior]
  reasons_to_stay: [bond, safe_habitat_access, familiar_route]
  rejection_or_departure_reasons: [forced_dry_confinement, coercive_combat, denied_water, repeated_cornering]
  human_social_costs: [water_access_and_small_aquatic_transport_logistics]
  logistics:
    food: [small_species_appropriate_food]
    water: [reliable_clean_swimming_area]
    shelter_temperature: [safe_aquatic_shelter]
    space_travel: [requires_water_container_or_route_only_if_voluntary_and_safe_no_portable_containment_shortcut]
    settlement_restrictions: [water_quality_and_space_need_management]
    special_resources: [none_fixed]
  assistance_capabilities: [temporary_ink_screen_or_small_water_scouting_only_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_ink_tool, no_generic_grapple_or_mount, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_water_needs_remain_real]
mechanical_hooks:
  tracking_clues: [ink_cloud, fin_wake, anchor_site, small_feeding_signs]
  avoidance_preparation: [leave_escape_lane, watch_current, avoid_confined_chase]
  resistance_or_protection: [distance, open_water, nonvisual_orientation]
  combat_approach_permissions: [temporary_ink_obscuration, current_anchoring, multidirectional_swimming]
  blocked_or_invalid_approaches: [automatic_blindness, guaranteed_flee, generic_tail_grapple, unrestricted_passenger_traversal, continuous_current_or_ink_simulation]
  fear_hooks: [the_water_turns_black_just_before_the_current_forks]
  injury_hazard_hooks: [horsea-ink-obscuration, horsea-current-escape-positioning]
  environmental_state_hooks: [open_water, current, anchor_site, ink_cloud, coral_shelter]
  companion_assistance_hooks: [voluntary_ink_screen_or_water_scouting]
  fortune_spike_opportunities: [spot_the_anchor_point_before_the_escape]
  trouble_spike_complications: [ink_hides_a_separate_water_hazard_not_Horsea_itself]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [ink_or_tail_function_is_not_a_repeatable_resource_node]
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
  scalability_limits: [ink_and_tail_anchoring_do_not_create_ink_industry_grappling_gear_or_water_transport_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [watch_Horsea_anchor_to_rock_in_a_fast_current]
  dangerous: [navigate_a_temporary_ink_cloud_without_chasing_the_fleeing_animal]
  unusual_or_rare: [an_exceptional_Horsea_uses_precise_ink_to_hunt_above_the_surface]
  discovery_insight: [learn_that_escape_and_ink_are_capabilities_not_guaranteed_outcomes_or_status_locks]
  route_environment: [coral_shelter, fast_current_channel, shallow_coast]
  settlement_culture: [fishers_teach_not_to_chase_small_swimmers_into_murky_current_as_local_practice]
  cross_species: [Seadra_family_observation_can_reveal_later_defensive_morphology]
presentation_and_p6_followups:
  initial_bestiary_presentation: coiled_tail_fin_control_and_ink_before_any_modern_ability_names
  progressive_reveal_notes: [show_backward_swimming_and_anchor_behavior_through_observation]
  species_specific_visual_needs: [tail_anchor, fin_direction, ink_cloud_extent]
  species_specific_audio_needs: [small_water_jet, fin_swish, ink_discharge_cue]
  special_ui_or_readability_needs: [temporary_obscuration_boundary_and_escape_lane_must_remain_readable]
  p6_followup_required: true
cross_species_links:
  evolution_family: [seadra, kingdra_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [seadra_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_ink_capacity_and_recovery, exact_ink_visibility_duration, exact_current_anchor_limit, exact_escape_success_rate, proto_kanto_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [ink_obscuration_and_aquatic_escape_check_resolution]
  deferred_to_p6: [ink_cloud_tail_anchor_and_escape_telegraph_readability]
  deferred_to_p7: [cached_water_zone_current_anchor_and_ink_cloud_state_if_runtime_needs_it]
```
