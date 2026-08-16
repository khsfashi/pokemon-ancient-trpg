# P4 Batch 19 — #087 Dewgong Full-Schema Dossier

Part of `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`.

---

## #087 Dewgong / 쥬레곤

```yaml
identity:
  national_dex: 87
  species_key: dewgong
  official_name_en: Dewgong
  official_name_ko: 쥬레곤
  evolution_family_keys: [seel, dewgong]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-DEWGONG-SG, P4_BATCH_19_SOURCE_REVIEW]
  official_evidence:
  - claim_id: DEW-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-DEWGONG-SG
    version_context: current_official_portal__COLD_PHYSIOLOGY_DAY_NIGHT_ECOLOGY_AND_MEASURED_SWIM_SPEED
    paraphrase: Dewgong_stores_thermal_energy_resists_cold_sleeps_in_shallow_ocean_water_by_day_and_seeks_food_at_night_while_current_material_gives_an_eight_knot_swim_claim
  - claim_id: DEW-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__TAIL_TURNING_SNOW_CONCEALMENT_LOW_DRAG_AND_EXTRAORDINARY_COLD_WORDING
    paraphrase: historical_entries_add_streamlining_tail_assisted_turning_increasing_activity_as_temperature_drops_snow_concealment_and_stronger_cold_resistance_wording
  derived_claims:
  - claim_id: DEW-D1-001
    evidence_class: D1
    based_on: [DEW-C1-001, DEW-C1-002]
    statement: Dewgong_is_a_highly_cold_adapted_swimmer_with_strong_but_bounded_aquatic_mobility
    canon_boundary_note: eight_knots_is_source_scale_not_turn_distance_fast_travel_or_fluid_physics
  - claim_id: DEW-D1-002
    evidence_class: D1
    based_on: [DEW-C1-002]
    statement: white_coat_can_support_context_sensitive_snow_concealment
    canon_boundary_note: no_permanent_invisibility_or_automatic_stealth
canonical_source_data:
  types: [water, ice]
  base_stats_raw: {hp: 90, attack: 70, defense: 80, special_attack: 70, special_defense: 95, speed: 70}
  abilities_relevant_to_p4: [thick_fat_as_modern_context, hydration_as_modern_context, ice_body_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.7_m, weight: 120.0_kg}
  evolution_source:
    evolves_from: seel
    evolves_to: []
    canonical_conditions: [modern_level_34_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [cold_adaptation, thermal_energy_storage_wording, day_sleep_night_feeding_pattern, eight_knot_swim_claim, tail_assisted_turning, snow_concealment_version_scoped]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 3
  guard: 4
  potency: 3
  resistance: 4
  speed: 3
  derivation_notes: {vigor: hp_90, force: attack_70, guard: defense_80, potency: special_attack_70, resistance: special_defense_95, speed: speed_70}
  calibration_flags: [no_manual_exception, eight_knots_not_a_speed_formula, cold_adaptation_not_universal_immunity, snow_concealment_not_invisibility]
capabilities_and_hazards:
  locomotion: [strong_aquatic_swimming, rapid_direction_change_supported_by_historical_tail_wording]
  physical_hazards: [large_aquatic_body_collision]
  elemental_environmental_hazards: [cold_water_specialization]
  anomalous_hazards: []
  behavioral_capabilities: [daytime_shallow_water_resting, colder_night_feeding_activity, snow_concealment_when_context_supports]
  utility_interaction_capabilities: [bounded_water_route_guidance_when_voluntary]
  immunities_or_approach_invalidators: [cold_adaptation_does_not_invalidate_every_cold_or_Ice_hazard]
  hazard_records:
  - hazard_key: dewgong-aquatic-charge-or-collision
    kind: other
    delivery_or_exposure: [close_range_collision_or_forceful_passage_in_water]
    prerequisite_or_trigger: [Dewgong_defends_itself_or_moves_through_confined_shared_water]
    warning_signs: [visible_turning_body, wake, acceleration, narrowed_passage]
    immediate_effects: [blunt_injury_or_position_loss]
    delayed_or_persistent_effects: [cold_water_or_separation_consequences_only_if_scene_state_supports]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_confined_cold_water_or_named_exceptional_context
    countermeasures: [leave_swim_line, use_open_water_or_shore, preserve_exit, avoid_cornering]
    emergency_consumable_hooks: []
    context_amplifiers: [confined_channel, cold_water, poor_visibility, ice_edge]
    context_mitigators: [open_water, shore_exit, early_detection, distance]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [DEW-C1-001, DEW-D1-001]
  - hazard_key: dewgong-snow-concealment-ambush-pressure
    kind: other
    delivery_or_exposure: [reduced_detection_in_snow_or_ice_background_when_Dewgong_is_resting_or_moving]
    prerequisite_or_trigger: [snow_or_ice_visual_context_and_line_of_sight_conditions_support_concealment]
    warning_signs: [tracks, breathing, disturbed_snow, silhouette_change]
    immediate_effects: [late_detection_or_surprise_position_pressure_not_automatic_first_action]
    delayed_or_persistent_effects: []
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_if_combined_with_unsafe_ice_or_water_geometry
    countermeasures: [track_signs, slow_observation, use_sound_and_route_spacing]
    emergency_consumable_hooks: []
    context_amplifiers: [snow_glare, dusk, blowing_snow]
    context_mitigators: [clear_outline, close_tracks, open_water_contrast]
    governing_species_axes: []
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [DEW-C1-002, DEW-D1-002]
  notes: [no_continuous_fluid_temperature_or_schedule_simulation, measured_swim_speed_is_metadata_for_authoring_not_runtime_math]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: cold_water_travel_and_detection_constraints_can_raise_local_risk_in_a_preindustrial_setting_without_species_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: cold_night_or_snow_context_can_change_encounter_state
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [cold_coastal_or_offshore_water, shallow_resting_water, seasonal_ice_or_snow_localities_when_authored]
  ecological_niche: [large_cold_water_swimmer_and_forager]
  activity_pattern: [daytime_shallow_water_sleeping_and_colder_night_feeding_source_backed]
  seasonal_notes: [colder_conditions_can_increase_activity_but_exact_proto_kanto_schedule_unknown]
  feeding_and_resource_interaction: [night_feeding_source_backed, exact_prey_mix_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [local_marine_food_web_requires_authoring]
  environmental_effects: [visible_wake_and_resting_sites, no_continuous_current_simulation]
  observable_signs: [broad_wake, shallow_rest_site, tracks_or_body_marks_in_snow, night_sightings]
  locality_constraints: [cold_habitat_fit_does_not_guarantee_presence_in_every_cold_water_zone]
  unsupported_gaps: [exact_cold_injury_threshold, acceleration_or_turn_radius, day_night_rigidity, snow_concealment_resolution, proto_kanto_abundance]
human_perception_and_culture:
  ordinary_attitude: [respectful_caution_due_to_size_and_cold_water_context]
  specialist_knowledge_holders: [fishers, coastal_watchers, winter_travelers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [collision_in_cold_water, hidden_resting_body_near_snow_or_ice]
  myths_omens_taboos: [mermaid_like_misidentification_may_exist_only_as_local_story_if_authored]
  practical_customs: [watch_wakes_and_tracks, avoid_disturbing_shallow_rest_sites]
  common_misbeliefs: [Dewgong_is_unharmed_by_every_cold_hazard, eight_knots_means_unavoidable_pursuit, white_coat_means_invisibility]
  local_variation_notes: [historical_mermaid_wording_does_not_establish_region_wide_mermaid_cosmology]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_white_shape_is_mistaken_for_ice_until_it_breathes_or_turns]
  local_aliases_or_titles: none
  identification_evidence: [large_white_body, tail_turning, broad_wake, cold_water_and_shallow_resting_context]
  initial_knowledge_fragments: [excellent_swimmer, more_active_in_colder_conditions]
  post_identification_knowledge: [cold_resistance_is_strong_but_not_absolute, concealment_depends_on_context]
  advanced_insights: [day_rest_and_night_feeding_patterns_can_support_avoidance_without_real_time_scheduling]
  exceptional_individual_knowledge_hooks: [one_old_Dewgong_is_known_by_a_distinctive_scar_and_recurring_winter_cove]
threat_and_encounter:
  baseline_threat_band: moderate_normally_higher_in_confined_cold_water
  default_behavior_states: [resting, swimming, feeding, concealed_in_snow, warning, retreating, defensive]
  aggression_tendency: low_or_defensive_by_default
  territoriality: low_or_unknown
  avoidance_tendency: moderate
  warning_signs: [wake, body_turn, surfacing, snow_tracks, disturbed_rest_site]
  encounter_triggers: [shared_water_route, food_area, rest_site_overlap, close_approach]
  escalation_triggers: [cornering, attack, blocking_water_exit, disturbing_rest_at_close_range]
  deescalation_conditions: [create_space, allow_departure, move_to_shore_or_open_water, stop_pursuit]
  pursuit_profile: strong_in_water_but_not_guaranteed_and_event_bounded
  group_size_effects: [each_Dewgong_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [blunt_injury, position_loss, cold_water_exposure, late_detection]
  consequence_ceiling: severe_when_cold_water_escape_or_rescue_is_constrained
  human_check_hooks:
  - action: avoid_or_escape_a_Dewgong_in_confined_cold_water
    relevant_species_axis: speed
    relevant_tags: [aquatic, cold_water]
    relevant_hazard_keys: [dewgong-aquatic-charge-or-collision]
    difficulty_guidance: D024_context_from_open_water_shore_exit_visibility_and_current_scene_state
    notes: eight_knot_source_measurement_is_not_converted_into_a_check_modifier_or_distance_formula
  - action: detect_a_resting_or_moving_Dewgong_against_snow
    relevant_species_axis: none
    relevant_tags: [concealment]
    relevant_hazard_keys: [dewgong-snow-concealment-ambush-pressure]
    difficulty_guidance: D024_context_from_tracks_light_weather_and_background_contrast
    notes: detection_failure_never_forces_a_free_attack_or_input_loss
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, curious, food_focused, tolerant]
    condition_variants: [resting, feeding, cold_active, injured, fatigued]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_size, repeated_long_distance_swimming, persistent_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [scar_or_color_tell, recurring_route, history]
    warning_or_rumor_hooks: [one_Dewgong_crosses_a_winter_channel_others_avoid]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, sustained_water_access, safe_cold_water_route_and_resting_space]
  trust_building_paths: [repeat_noncoercive_contact, rescue_or_food_without_capture, respecting_rest_and_departure]
  reasons_to_stay: [bond, dependable_shared_route, safe_habitat_access]
  rejection_or_departure_reasons: [forced_labor_or_transport, denied_water_access, coercive_combat, crowding]
  human_social_costs: [large_water_and_space_requirement]
  logistics:
    food: [regular_species_appropriate_food]
    water: [reliable_large_swimming_area]
    shelter_temperature: [cool_conditions_preferred_without_universal_cold_requirement]
    space_travel: [water_routes_preferred_and_land_transport_not_assumed]
    settlement_restrictions: [large_body_and_water_access_require_planning]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_water_route_help_when_voluntary_and_safe]
  handling_boundaries: [no_defeat_to_recruit, no_forced_mount_or_ferry_role, no_fast_travel_from_eight_knot_claim, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_aquatic_needs_remain_real]
mechanical_hooks:
  tracking_clues: [broad_wake, shallow_rest_sites, snow_tracks, night_feeding_signs]
  avoidance_preparation: [observe_from_shore, preserve_open_exit, track_before_crossing_snow]
  resistance_or_protection: [distance, open_water_or_shore, visibility]
  combat_approach_permissions: [cold_active_state, snow_concealment_opportunity, strong_aquatic_mobility]
  blocked_or_invalid_approaches: [universal_cold_immunity, literal_eight_knot_turn_distance, fluid_physics, permanent_invisibility, real_time_day_night_scheduler]
  fear_hooks: [the_white_shape_under_the_snow_moves_toward_the_only_open_channel]
  injury_hazard_hooks: [dewgong-aquatic-charge-or-collision, dewgong-snow-concealment-ambush-pressure]
  environmental_state_hooks: [cold_water, open_water, shallow_rest_site, snow_cover, night_feeding]
  companion_assistance_hooks: [voluntary_water_guidance]
  fortune_spike_opportunities: [spot_tracks_before_the_concealed_rest_site]
  trouble_spike_complications: [the_safe_shore_route_passes_between_a_resting_Dewgong_and_open_water]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_body_cold_adaptation_or_blubber_is_not_a_repeatable_resource_node]
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
  scalability_limits: [cold_adaptation_swim_speed_and_body_shape_do_not_create_refrigeration_transport_or_fluid_engineering]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_daytime_shallow_water_sleep_and_depart_before_night_feeding]
  dangerous: [escape_a_confined_cold_channel_without_treating_speed_as_guaranteed_pursuit]
  unusual_or_rare: [a_snow_concealed_Dewgong_is_mistaken_for_ice_or_a_local_legend]
  discovery_insight: [learn_that_measured_speed_and_cold_resistance_describe_scale_not_runtime_formulas]
  route_environment: [cold_bay, shallow_resting_cove, snowy_shore, night_feeding_channel]
  settlement_culture: [coastal_watchers_mark_rest_sites_and_winter_crossing_times_as_local_practice_only]
  cross_species: [Seel_may_share_cold_water_localities_when_authored]
presentation_and_p6_followups:
  initial_bestiary_presentation: wake_tracks_and_white_shape_before_eight_knot_or_extreme_cold_wording
  progressive_reveal_notes: [show_day_rest_night_feeding_and_contextual_concealment, keep_absolute_cold_wording_version_scoped]
  species_specific_visual_needs: [broad_turning_body, wake, snow_outline_and_resting_state]
  species_specific_audio_needs: [surfacing_breath, water_displacement, snow_or_ice_movement]
  special_ui_or_readability_needs: [concealment_and_water_state_must_be_clear_without_speed_meter_or_schedule_clock]
  p6_followup_required: true
cross_species_links:
  evolution_family: [seel]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [seel_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_cold_threshold, exact_acceleration_turn_radius_and_current_limit, exact_day_night_rigidity, exact_snow_concealment_resolution, proto_kanto_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [aquatic_chase_and_snow_detection_resolution]
  deferred_to_p6: [wake_rest_state_and_concealment_readability]
  deferred_to_p7: [cached_cold_water_open_water_rest_site_and_concealment_opportunity_state_if_runtime_needs_it]
```
