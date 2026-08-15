# P4 Batch 13 — #018 Pidgeot Full-Schema Dossier

Part of `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md`.

---

## #018 Pidgeot / 피죤투

```yaml
identity:
  national_dex: 18
  species_key: pidgeot
  official_name_en: Pidgeot
  official_name_ko: 피죤투
  evolution_family_keys: [pidgey, pidgeotto, pidgeot]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-PIDGEOT-SG]
  official_evidence:
    - claim_id: PGT-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEOT-SG
      version_context: current_official_portal
      paraphrase: mature_form_has_striking_glossy_plumage_admired_in_modern_trainer_context
    - claim_id: PGT-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEOT-SG
      version_context: historical_version_tagged
      paraphrase: multiple_official_entries_describe_extreme_flight_reaching_Mach_2
    - claim_id: PGT-C1-003
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEOT-SG
      version_context: historical_version_tagged
      paraphrase: an_official_entry_describes_spotting_splashing_prey_while_flying_at_3300_feet
    - claim_id: PGT-C1-004
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEOT-SG
      version_context: historical_version_tagged
      paraphrase: powerful_wingbeats_can_create_severe_gusts_and_water_skimming_hunting_is_described
  derived_claims:
    - claim_id: PGT-D1-001
      evidence_class: D1
      based_on: [PGT-C1-002, PGT-C1-003, PGT-C1-004]
      statement: Pidgeot_is_retained_as_a_genuinely_extreme_aerial_threat
      canon_boundary_note: no_real_time_physics_kinetic_energy_damage_automatic_initiative_or_fast_travel_formula
    - claim_id: PGT-D1-002
      evidence_class: D1
      based_on: [PGT-C1-001]
      statement: modern_admiration_remains_modern_social_context
      canon_boundary_note: does_not_establish_ancient_breeding_mount_messenger_or_ownership_norms
canonical_source_data:
  types: [normal, flying]
  base_stats_raw: {hp: 83, attack: 80, defense: 75, special_attack: 70, special_defense: 70, speed: 101}
  abilities_relevant_to_p4: [keen_eye_as_modern_context, tangled_feet_as_modern_context, big_pecks_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.5_m, weight: 39.5_kg}
  evolution_source:
    evolves_from: pidgeotto
    evolves_to: []
    canonical_conditions: [modern_level_36_metadata_is_source_context_only]
  other_material_facts: [versioned_Mach_2_flight, versioned_3300_foot_prey_spotting, powerful_wing_gusts, waterline_hunting, modern_plumage_admiration]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 4
  guard: 3
  potency: 3
  resistance: 3
  speed: 5
  derivation_notes: {vigor: hp_83, force: attack_80, guard: defense_75, potency: special_attack_70, resistance: special_defense_70, speed: speed_101}
  calibration_flags: [no_manual_exception, Speed_not_literal_velocity, Mach_claim_not_a_Speed_formula, Flying_type_not_traversal_permission]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, high_performance_sustained_flight, high_altitude_access, rapid_aerial_repositioning]
  physical_hazards: [claw_or_beak_strike, high_speed_aerial_impact_without_real_world_energy_formula, powerful_wing_gust]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [high_altitude_observation, waterline_hunting, rapid_interception]
  utility_interaction_capabilities: [aerial_observation_only_when_event_valid_no_automatic_fast_travel]
  immunities_or_approach_invalidators: [open_air_escape_and_vertical_position_can_invalidate_some_ground_only_approaches]
  hazard_records:
    - hazard_key: pidgeot-extreme-aerial-pressure
      kind: other
      delivery_or_exposure: [high_speed_pass, claw_or_beak_strike, powerful_wing_gust]
      prerequisite_or_trigger: [direct_attack, defended_airspace_if_authored, prey_hunt_crossing_route]
      warning_signs: [high_silhouette, sudden_altitude_drop, pressure_change, vegetation_or_dust_bending_before_pass]
      immediate_effects: [critical_positioning_pressure, knockdown_or_displacement_only_when_resolved, serious_laceration_or_impact]
      delayed_or_persistent_effects: [none_automatic_follow_P3]
      ordinary_consequence_ceiling: critical
      exceptional_consequence_ceiling: critical_or_fatal_only_under_D020_context_not_automatic
      countermeasures: [hard_overhead_cover, enclosed_route, break_line_of_sight, avoid_exposed_ridge_or_waterline]
      emergency_consumable_hooks: []
      context_amplifiers: [open_ground, cliff_edge, waterline_exposure, poor_overhead_cover]
      context_mitigators: [hard_cover, enclosed_route, successful_disengagement]
      governing_species_axes: [speed, force]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [PGT-C1-002, PGT-C1-003, PGT-C1-004, PGT-D1-001]
  notes: [Mach_2_is_preserved_as_version_scoped_source_evidence_without_physics_simulation, high_altitude_vision_is_not_perfect_detection]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: extreme_aerial_access_speed_and_gust_pressure_are_severe_in_a_low_technology_world_without_global_ancient_stats
  stat_effect_if_any: none
  behavior_effect_if_any: aerial_positioning_and_scarce_hard_cover_raise_route_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [exact_ancient_range_unknown, cliffs_open_country_coast_or_large_airspace_only_when_locally_authored_D2]
  ecological_niche: [large_high_performance_aerial_predator]
  activity_pattern: [unknown]
  seasonal_notes: [weather_may_change_scene_access_without_a_generic_stat_formula]
  feeding_and_resource_interaction: [waterline_hunting_is_source_backed_but_exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [large_feathers, distant_high_silhouette, sudden_gust, prey_disturbance_near_water]
  observable_signs: [large_feathers, high_silhouette, sudden_gust, waterline_prey_disturbance]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_acceleration, endurance, carrying_capacity, weather_ceiling, ancient_distribution]
human_perception_and_culture:
  ordinary_attitude: [awe_and_serious_avoidance_due_to_speed_altitude_and_scale]
  specialist_knowledge_holders: [sky_watchers, cliff_guides, hunters, fishers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [aerial_interception, gust_displacement, cliff_or_open_ground_exposure]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [use_hard_overhead_cover, avoid_exposed_ridges, watch_sky_and_wind]
  common_misbeliefs: [Mach_2_means_an_unavoidable_attack, high_altitude_vision_means_omniscience, modern_admiration_proves_ancient_domestication]
  local_variation_notes: [modern_trainer_attraction_does_not_define_ancient_social_norms]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [extreme_altitude_scale, closing_silhouette, sudden_gust]
  local_aliases_or_titles: none
  identification_evidence: [large_winged_silhouette, altitude, gust_signature, waterline_hunting]
  initial_knowledge_fragments: [can_operate_far_above_ground_routes, can_close_distance_extremely_fast_in_source_context]
  post_identification_knowledge: [extreme_source_claims_still_require_event_warning_and_counterplay]
  advanced_insights: [Mach_2_does_not_define_damage_round_distance_or_map_time]
  exceptional_individual_knowledge_hooks: [named_veteran_Pidgeot_with_known_high_altitude_interception_route_and_distinctive_gust_signature]
threat_and_encounter:
  baseline_threat_band: very_high_for_ordinary_humans
  default_behavior_states: [soaring_high, observing, hunting, warning, intercepting, striking, disengaging]
  aggression_tendency: contextual
  territoriality: moderate_to_high_when_authored
  avoidance_tendency: low_once_committed_but_contextual
  warning_signs: [high_silhouette, sudden_altitude_drop, pressure_change, vegetation_bending]
  encounter_triggers: [direct_attack, defended_airspace_if_authored, prey_hunt_crossing_route]
  escalation_triggers: [continued_intrusion_or_attack_after_warning]
  deescalation_conditions: [reach_hard_cover, leave_defended_space, cease_pursuit_or_threat]
  pursuit_profile: extremely_mobile_but_not_infinite_and_never_defined_by_a_Mach_formula
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [critical_laceration_or_impact, forced_route_denial, fall_risk_in_exposed_terrain]
  consequence_ceiling: critical_with_fatality_possible_only_under_serious_D020_context
  human_check_hooks:
    - action: reach_hard_cover_before_a_high_altitude_interception_closes
      relevant_species_axis: speed
      relevant_tags: [high_performance_sustained_flight, high_altitude_observation]
      relevant_hazard_keys: [pidgeot-extreme-aerial-pressure]
      difficulty_guidance: D024_context_from_distance_cover_vertical_exposure_warning_and_current_altitude
      notes: Speed_5_does_not_define_literal_Mach_value_round_distance_or_map_time
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [aloof, territorial, hunting, unusually_bold]
    condition_variants: [soaring, hunting, weather_limited, fatigued, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [age, survival_history, specialized_territory, repeated_battle_history]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_marking_behavior_route_or_reputation]
    warning_or_rumor_hooks: [named_veteran_Pidgeot_with_known_interception_route]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_persistent_trust, enormous_airspace_and_roost_logistics, no_forced_containment_or_mount_expectation]
  trust_building_paths: [long_term_noncoercive_contact, injury_recovery, reliable_resources]
  reasons_to_stay: [deep_bond, familiar_people_or_territory]
  rejection_or_departure_reasons: [forced_restraint, coercive_transport_or_combat_use, chronic_denial_of_flight]
  human_social_costs: [settlement_fear, substantial_food_and_space_burden, dangerous_takeoff_and_landing_zones]
  logistics:
    food: [substantial_species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [large_safe_roost]
    space_travel: [major_airspace_required]
    settlement_restrictions: [dense_or_fearful_settlements_may_refuse_entry]
    special_resources: [none_fixed]
  assistance_capabilities: [aerial_scouting_or_transport_only_if_later_explicit_safety_rules_and_voluntary_behavior_allow]
  handling_boundaries: [no_defeat_to_recruit, no_forced_mount, no_carry_formula_from_stats_or_source_feat, one_visible_companion_slot]
  separation_injury_notes: [bonded_Pidgeot_remains_independent_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [large_feathers, high_silhouette, sudden_gust, waterline_prey_disturbance]
  avoidance_preparation: [identify_hard_overhead_cover, avoid_exposed_ridges, monitor_sky_and_wind]
  resistance_or_protection: [hard_overhead_cover, enclosed_route, distance]
  combat_approach_permissions: [named_exceptional_individual_may_use_explicit_profile_not_scaling]
  blocked_or_invalid_approaches: [convert_Mach_2_to_damage_or_round_distance, derive_perfect_detection_from_altitude_vision, assume_mount_or_messenger_service]
  fear_hooks: [high_silhouette_vanishes_then_returns_on_a_low_pass]
  injury_hazard_hooks: [laceration, impact, fall_risk]
  environmental_state_hooks: [vertical_cover, open_ground, cliff_edge, wind]
  companion_assistance_hooks: [aerial_scouting_only_when_event_valid]
  fortune_spike_opportunities: [rock_overhang_breaks_the_attack_line]
  trouble_spike_complications: [open_ridge_removes_overhead_cover]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [ordinary_feathers_only_if_context_requires]
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [none_supported]
  taboo_or_protection: [local_D2_only]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [extreme_flight_does_not_create_transport_or_surveillance_infrastructure_without_separate_evidence]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [watch_a_distant_Pidgeot_hunt_over_water_from_safe_cover]
  dangerous: [cross_an_open_ridge_under_repeated_high_speed_passes]
  unusual_or_rare: [named_veteran_has_a_distinctive_gust_and_interception_pattern_not_a_level_affix]
  discovery_insight: [extreme_source_claims_coexist_with_cover_warning_and_event_counterplay]
  route_environment: [vertical_cover_and_enclosed_terrain_are_strategic_state]
  settlement_culture: [sky_watchers_use_qualitative_silhouettes_and_wind_signs_without_measuring_Mach_or_exact_altitude]
  cross_species: [Pidgey_homing_and_Pidgeotto_prey_carrying_do_not_define_Pidgeot_navigation_or_payload_formulas]
presentation_and_p6_followups:
  initial_bestiary_presentation: extreme_high_performance_aerial_predator_without_real_time_physics_simulation
  progressive_reveal_notes: [preserve_extraordinary_source_claims_without_turning_them_into_hidden_formulas]
  species_specific_visual_needs: [extreme_altitude_scale, closing_silhouette, wing_gust_telegraph]
  species_specific_audio_needs: [distant_cry, pressure_rush, heavy_wing_pass]
  special_ui_or_readability_needs: [no_speedometer_or_Mach_damage_label, no_guaranteed_detection_icon]
  p6_followup_required: true
cross_species_links:
  evolution_family: [pidgey, pidgeotto]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_acceleration, endurance, carrying_capacity, weather_ceiling, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [extreme_aerial_route_pressure_and_warning_state]
  deferred_to_p6: [altitude_scale_closing_silhouette_and_gust_readability]
  deferred_to_p7: [runtime_aerial_representation_if_required]
```
