# P4 Batch 13 — #017 Pidgeotto Full-Schema Dossier

Part of `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md`.

---

## #017 Pidgeotto / 피죤

```yaml
identity:
  national_dex: 17
  species_key: pidgeotto
  official_name_en: Pidgeotto
  official_name_ko: 피죤
  evolution_family_keys: [pidgey, pidgeotto, pidgeot]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-PIDGEOTTO-SG]
  official_evidence:
    - claim_id: PGO-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEOTTO-SG
      version_context: current_official_portal
      paraphrase: large_claimed_territory_is_patrolled_from_the_air_and_intrusion_can_provoke_severe_claw_attacks
    - claim_id: PGO-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEOTTO-SG
      version_context: historical_version_tagged
      paraphrase: aerial_search_circular_patrol_and_strong_vision_support_active_predation
    - claim_id: PGO-C1-003
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEOTTO-SG
      version_context: historical_version_tagged
      paraphrase: appropriate_prey_such_as_Exeggcute_can_be_carried_more_than_60_miles_to_a_nest
  derived_claims:
    - claim_id: PGO-D1-001
      evidence_class: D1
      based_on: [PGO-C1-001, PGO-C1-002]
      statement: territory_can_use_warning_zones_patrol_signs_and_escalating_intrusion_events
      canon_boundary_note: not_continuous_surveillance_perfect_detection_or_generic_aggro
    - claim_id: PGO-D1-002
      evidence_class: D1
      based_on: [PGO-C1-003]
      statement: long_distance_prey_transport_is_retained_as_a_species_local_feat
      canon_boundary_note: not_human_passenger_service_unrestricted_payload_or_route_time_formula
canonical_source_data:
  types: [normal, flying]
  base_stats_raw: {hp: 63, attack: 60, defense: 55, special_attack: 50, special_defense: 50, speed: 71}
  abilities_relevant_to_p4: [keen_eye_as_modern_context, tangled_feet_as_modern_context, big_pecks_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.1_m, weight: 30.0_kg}
  evolution_source:
    evolves_from: pidgey
    evolves_to: [pidgeot]
    canonical_conditions: [modern_levels_18_and_36_are_source_context_only]
  other_material_facts: [large_territory, aerial_patrol, sharp_claw_predation, versioned_long_distance_prey_carrying]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 3
  guard: 2
  potency: 2
  resistance: 2
  speed: 3
  derivation_notes: {vigor: hp_63, force: attack_60, guard: defense_55, potency: special_attack_50, resistance: special_defense_50, speed: speed_71}
  calibration_flags: [no_manual_exception, Speed_not_literal_velocity, Flying_type_not_traversal_permission]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, sustained_local_and_regional_flight, aerial_patrol]
  physical_hazards: [sharp_claw_strikes, beak_contact, prey_grappling_and_aerial_interception]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [territorial_patrol, aerial_prey_search, nest_transport_of_appropriate_prey]
  utility_interaction_capabilities: [aerial_observation_only_when_event_valid, carrying_only_with_explicit_scale_and_safety_constraints]
  immunities_or_approach_invalidators: [vertical_mobility_can_invalidate_some_ground_only_approaches_when_scene_supports]
  hazard_records:
    - hazard_key: pidgeotto-territorial-aerial-strike
      kind: other
      delivery_or_exposure: [dive_or_pass, claw_grapple, patrol_interception]
      prerequisite_or_trigger: [cross_warning_boundary, approach_nest_if_authored, direct_attack]
      warning_signs: [circling, repeated_passes, claw_display, alarm_calls]
      immediate_effects: [serious_laceration_pressure, forced_repositioning, separation_only_through_event_resolution]
      delayed_or_persistent_effects: [none_automatic_follow_P3]
      ordinary_consequence_ceiling: critical
      exceptional_consequence_ceiling: critical_or_fatal_only_under_D020_context_not_automatic
      countermeasures: [leave_defended_space, hard_cover, break_line_of_sight, avoid_nest_approach]
      emergency_consumable_hooks: []
      context_amplifiers: [open_ground, ignored_warning, defended_nest_space]
      context_mitigators: [hard_cover, leaving_territory, line_break]
      governing_species_axes: [speed, force]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [PGO-C1-001, PGO-C1-002, PGO-C1-003, PGO-D1-001, PGO-D1-002]
  notes: [patrol_is_not_perfect_detection, prey_carrying_does_not_define_human_payload]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: territorial_aerial_predation_has_greater_route_cost_in_a_low_technology_world
  stat_effect_if_any: none
  behavior_effect_if_any: defended_airspace_and_patrol_can_raise_encounter_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [exact_ancient_range_unknown, forest_edge_open_country_or_nest_cliffs_only_when_locally_authored_D2]
  ecological_niche: [territorial_aerial_predator_and_patroller]
  activity_pattern: [patrol_and_prey_search_when_context_supports]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [prey_transport_is_source_backed_but_exact_diet_unknown]
  social_structure: [exact_group_or_nest_structure_unknown]
  predator_prey_competitor_links: [Exeggcute_prey_feat_is_version_scoped_not_a_universal_local_ecology_rule]
  environmental_effects: [circling_routes, feathers, claw_marked_prey, repeated_nestward_carry_line]
  observable_signs: [circling_routes, feathers, claw_marked_prey, nestward_carry_line]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_proto_Kanto_territory_size, payload_ceiling, passenger_safety, ancient_distribution]
human_perception_and_culture:
  ordinary_attitude: [respected_and_avoided_near_known_territory]
  specialist_knowledge_holders: [hunters, shepherds, sky_watchers, route_guides]
  benefits_and_services: [none_required]
  fears_and_avoidance: [claw_attack, aerial_interception, nest_defense]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [mark_patrol_boundaries, use_cover, avoid_nest_approach]
  common_misbeliefs: [patrol_means_it_sees_everything, prey_carrying_proves_safe_human_transport, Keen_Eye_negates_stealth]
  local_variation_notes: [no_normalized_trainer_or_messenger_culture_is_inferred]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [circling_patrol_silhouette, repeated_nestward_carry]
  local_aliases_or_titles: none
  identification_evidence: [circling_route, claws, feathers, repeated_patrol_pass]
  initial_knowledge_fragments: [defends_authored_territory, searches_from_air]
  post_identification_knowledge: [patrol_is_contextual_and_does_not_reveal_every_intruder]
  advanced_insights: [prey_carrying_is_a_species_local_feat_not_a_payload_formula]
  exceptional_individual_knowledge_hooks: [named_Pidgeotto_known_for_patrolling_one_cliff_corridor_and_carrying_unusually_large_prey]
threat_and_encounter:
  baseline_threat_band: moderate_to_high_for_ordinary_humans
  default_behavior_states: [soaring, patrolling, hunting, warning, attacking, carrying_prey, returning_to_nest]
  aggression_tendency: contextual_high_in_defended_space
  territoriality: high_near_authored_home_range
  avoidance_tendency: moderate_outside_defended_context
  warning_signs: [circling, repeated_passes, claw_display, alarm_calls]
  encounter_triggers: [cross_warning_boundary, approach_nest_if_authored, direct_attack]
  escalation_triggers: [continued_intrusion_after_warning, threat_to_nest_if_authored]
  deescalation_conditions: [retreat_beyond_defended_space, break_contact_under_cover, stop_threatening_nest]
  pursuit_profile: strong_inside_defended_context_but_not_infinite
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [laceration, forced_route_change, separation_only_by_event_resolution]
  consequence_ceiling: critical_with_fatality_possible_only_under_serious_D020_context
  human_check_hooks:
    - action: cross_or_withdraw_from_a_patrolled_open_zone_without_being_forced_into_a_dive_line
      relevant_species_axis: speed
      relevant_tags: [aerial_patrol, territorial_patrol]
      relevant_hazard_keys: [pidgeotto-territorial-aerial-strike]
      difficulty_guidance: D024_context_from_cover_boundary_warning_state_and_current_altitude
      notes: Speed_3_does_not_define_literal_flight_velocity_or_map_time
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, intensely_territorial, efficient_hunter, nest_focused]
    condition_variants: [patrolling, feeding, nesting, injured, carrying_prey]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [age, survival_history, specialized_territory, conditioning]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_marking_behavior_route_or_reputation]
    warning_or_rumor_hooks: [named_Pidgeotto_that_patrols_a_cliff_corridor]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [rare_voluntary_trust, large_roost_and_flight_space, no_forced_containment]
  trust_building_paths: [long_term_noncoercive_contact, injury_recovery, reliable_resources]
  reasons_to_stay: [deep_bond, familiar_people_or_place]
  rejection_or_departure_reasons: [forced_restraint, coercive_transport_or_combat_use, chronic_denial_of_flight]
  human_social_costs: [predatory_food_logistics, settlement_fear, large_space_requirement]
  logistics:
    food: [species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [large_safe_roost]
    space_travel: [substantial_flight_space_required]
    settlement_restrictions: [dense_or_fearful_settlements_may_limit_entry]
    special_resources: [none_fixed]
  assistance_capabilities: [aerial_scouting_or_carrying_only_if_explicitly_safe_voluntary_and_later_rules_allow]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_mount_or_payload_formula, one_visible_companion_slot]
  separation_injury_notes: [bonded_Pidgeotto_remains_independent_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [circling_routes, feathers, claw_marked_prey, nestward_carry_line]
  avoidance_preparation: [leave_defended_space, hard_cover, break_line_of_sight]
  resistance_or_protection: [hard_cover, route_around_patrol]
  combat_approach_permissions: [named_exceptional_individual_may_use_explicit_profile_not_scaling]
  blocked_or_invalid_approaches: [patrol_as_perfect_detection, derive_passenger_capacity_from_prey_feat, derive_exact_range_from_Speed]
  fear_hooks: [repeated_aerial_intercepts_over_open_ground]
  injury_hazard_hooks: [laceration, forced_repositioning]
  environmental_state_hooks: [cover, patrol_boundary, current_altitude]
  companion_assistance_hooks: [aerial_scouting_only_when_event_valid]
  fortune_spike_opportunities: [dense_cover_breaks_the_next_intercept]
  trouble_spike_complications: [open_ground_removes_line_break_options]
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
  scalability_limits: [prey_carrying_and_patrol_do_not_create_transport_or_surveillance_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_patrol_boundaries_and_leave_before_escalation]
  dangerous: [cross_open_ground_under_repeated_patrol_interception]
  unusual_or_rare: [exceptional_individual_carries_unusually_heavy_prey_along_one_known_route]
  discovery_insight: [patrol_is_contextual_not_omniscient]
  route_environment: [cover_boundary_markers_and_current_altitude_define_counterplay]
  settlement_culture: [locals_mark_no_cross_roost_lines_instead_of_treating_all_Pidgeotto_as_hostile]
  cross_species: [Pidgey_homing_and_Pidgeot_extreme_flight_are_stage_local]
presentation_and_p6_followups:
  initial_bestiary_presentation: territorial_aerial_predator_with_patrol_and_prey_carrying_pressure
  progressive_reveal_notes: [distinguish_patrol_from_perfect_detection]
  species_specific_visual_needs: [circling_patrol_states, claw_dive_telegraph, prey_carry_scale]
  species_specific_audio_needs: [warning_calls, wing_pass, claw_impact]
  special_ui_or_readability_needs: [no_guaranteed_detection_cone, no_mount_icon]
  p6_followup_required: true
cross_species_links:
  evolution_family: [pidgey, pidgeot]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_proto_Kanto_territory_size, payload_ceiling, passenger_safety, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [patrol_boundary_and_aerial_interception_event_state]
  deferred_to_p6: [patrol_and_dive_readability]
  deferred_to_p7: [runtime_aerial_representation_if_required]
```
