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
  evolution_family_keys:
  - pidgey
  - pidgeotto
  - pidgeot
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs:
  - SRC-DATA-001
  - OFFICIAL-DEX-PIDGEOTTO-SG
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
    paraphrase: aerial_search__circular_patrol__and_strong_vision_support_active_predation
  - claim_id: PGO-C1-003
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PIDGEOTTO-SG
    version_context: historical_version_tagged
    paraphrase: appropriate_prey_such_as_exeggcute_can_be_carried_more_than_60_miles_to_a_nest
  derived_claims:
  - claim_id: PGO-D1-001
    evidence_class: D1
    based_on:
    - PGO-C1-001
    - PGO-C1-002
    statement: territory_may_use_warning_zones__patrol_signs__and_escalating_intrusion_events
    canon_boundary_note: not_continuous_surveillance__perfect_detection__or_generic_aggro
  - claim_id: PGO-D1-002
    evidence_class: D1
    based_on:
    - PGO-C1-003
    statement: long_distance_prey_transport_is_retained_as_a_species_local_feat
    canon_boundary_note: not_human_passenger_service__unrestricted_payload__or_a_route_time_formula
canonical_source_data:
  types:
  - normal
  - flying
  base_stats_raw:
    hp: 63
    attack: 60
    defense: 55
    special_attack: 50
    special_defense: 50
    speed: 71
  abilities_relevant_to_p4:
  - keen_eye_as_modern_context
  - tangled_feet_as_modern_context
  - big_pecks_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4: []
  physical_metadata:
    height: 1.1_m
    weight: 30.0_kg
  evolution_source:
    evolves_from: pidgey
    evolves_to:
    - pidgeot
    canonical_conditions:
    - modern_levels_18_and_36_are_source_metadata_only
  other_material_facts:
  - large_territory
  - aerial_patrol
  - sharp_claw_predation
  - versioned_long_distance_prey_carrying
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 3
  guard: 2
  potency: 2
  resistance: 2
  speed: 3
  derivation_notes:
    vigor: hp_63
    force: attack_60
    guard: defense_55
    potency: special_attack_50
    resistance: special_defense_50
    speed: speed_71
  calibration_flags:
  - no_manual_exception
  - Speed_is_not_literal_travel_velocity
  - Flying_type_is_not_traversal_permission
  - modern_ability_metadata_not_ancient_fixed_mechanic
capabilities_and_hazards:
  locomotion:
  - terrestrial_movement
  - sustained_local_and_regional_flight
  - aerial_patrol
  physical_hazards:
  - sharp_claw_strikes
  - beak_contact
  - prey_grappling_and_aerial_interception
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities:
  - territorial_patrol
  - aerial_prey_search
  - nest_transport_of_appropriate_prey
  utility_interaction_capabilities:
  - aerial_observation_only_when_event_valid
  - carrying_only_with_explicit_scale_and_safety_constraints
  immunities_or_approach_invalidators:
  - species_local_vertical_or_ground_mobility_may_invalidate_some_scene_approaches_but_never_by_type_alone
  hazard_records:
  - hazard_key: pidgeotto-territorial-aerial-strike
    kind: physical_and_positioning
    delivery_or_exposure:
    - dive_or_pass
    - claw_grapple
    - patrol_interception
    prerequisite_or_trigger:
    - cross_a_warning_boundary
    - approach_a_nest_if_authored
    - handle_exposed_prey_like_resources
    - direct_attack
    warning_signs:
    - circling
    - repeated_passes
    - claw_display
    - alarm_calls
    immediate_effects:
    - serious_laceration_pressure
    - forced_repositioning
    - drop_or_separation_only_when_an_authored_event_resolves_it
    delayed_or_persistent_effects:
    - none_automatic_follow_P3_injury_or_event_state
    ordinary_consequence_ceiling: critical_with_fatality_possible_only_under_serious_d_020_context
    exceptional_consequence_ceiling: fatal_only_under_serious_D020_context_not_automatic
    countermeasures:
    - leave_defended_space
    - hard_cover
    - break_line_of_sight
    - avoid_nest_approach
    emergency_consumable_hooks: []
    context_amplifiers:
    - open_exposed_terrain
    - poor_cover
    - ignored_warning_state
    context_mitigators:
    - leave_defended_space
    - hard_cover
    - break_line_of_sight
    - avoid_nest_approach
    governing_species_axes:
    - speed
    - force
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - PGO-C1-001
    - PGO-C1-002
    - PGO-C1-003
    - PGO-D1-001
    - PGO-D1-002
  notes:
  - no_capability_is_inferred_from_Flying_type_alone
  - modern_abilities_do_not_create_literal_detection_escape_sleep_or_critical_rules
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: territorial_aerial_predator_and_patroller_creates_stronger_practical_pressure_in_a_low_technology_world_without_a_global_ancient_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: species_local_ecology_and_route_context_only
  canon_boundary_note: no_global_ancient_bonus_no_player_scaling_no_hidden_level_curve
ancient_ecology:
  habitat:
  - exact_ancient_range_unknown
  - forest_edge__open_country__or_nest_cliffs_only_when_locally_authored_under_d_034
  ecological_niche:
  - territorial_aerial_predator_and_patroller
  activity_pattern:
  - exact_pattern_contextual_or_unresolved
  seasonal_notes:
  - unknown_unless_local_scene_authors_weather_or_season_context
  feeding_and_resource_interaction:
  - exact_diet_unresolved
  - food_or_prey_behavior_only_where_source_or_local_ecology_supports
  social_structure:
  - exact_group_or_nest_structure_unresolved
  predator_prey_competitor_links:
  - no_mandatory_local_link_unless_source_review_or_local_ecology_supports
  environmental_effects:
  - circling_routes
  - feathers
  - claw_marked_prey
  - repeated_nestward_carry_line
  observable_signs:
  - circling_routes
  - feathers
  - claw_marked_prey
  - repeated_nestward_carry_line
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  unsupported_gaps:
  - exact_proto_kanto_territory_size
  - payload_ceiling
  - passenger_safety
  - exact_ancient_range
human_perception_and_culture:
  ordinary_attitude:
  - respected_and_avoided_near_known_territory
  specialist_knowledge_holders:
  - hunters
  - shepherds
  - sky_watchers
  - route_guides
  benefits_and_services:
  - none_required_by_P4
  fears_and_avoidance:
  - sharp_claw_strikes
  - beak_contact
  - prey_grappling_and_aerial_interception
  myths_omens_taboos:
  - local_D2_stories_allowed_but_not_promoted_to_canon_or_universal_mechanics
  practical_customs:
  - leave_defended_space
  - hard_cover
  - break_line_of_sight
  - avoid_nest_approach
  common_misbeliefs:
  - patrol_means_it_sees_everything
  - prey_carrying_proves_safe_human_transport
  - keen_eye_negates_stealth
  local_variation_notes:
  - beliefs_and_practices_may_vary_by_locality_without_normalized_trainer_culture
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - circling_patrol_states
  local_aliases_or_titles: none
  identification_evidence:
  - circling_routes
  - feathers
  - claw_marked_prey
  - repeated_nestward_carry_line
  - circling
  - repeated_passes
  - claw_display
  - alarm_calls
  initial_knowledge_fragments:
  - territorial_patrol
  - terrestrial_movement
  post_identification_knowledge:
  - patrol_is_contextual__legible__and_avoidable_rather_than_omniscient
  advanced_insights:
  - patrol_means_it_sees_everything
  - prey_carrying_proves_safe_human_transport
  exceptional_individual_knowledge_hooks:
  - named_pidgeotto_that_patrols_a_cliff_corridor_and_carries_unusually_large_prey_without_becoming_a_mount
threat_and_encounter:
  baseline_threat_band: moderate_to_high_for_ordinary_humans
  default_behavior_states:
  - soaring
  - patrolling
  - hunting
  - warning
  - attacking
  - carrying_prey
  - returning_to_nest
  aggression_tendency: contextual_high_in_defended_space
  territoriality: high_near_authored_home_range
  avoidance_tendency: moderate_outside_defended_context
  warning_signs:
  - circling
  - repeated_passes
  - claw_display
  - alarm_calls
  encounter_triggers:
  - cross_a_warning_boundary
  - approach_a_nest_if_authored
  - handle_exposed_prey_like_resources
  - direct_attack
  escalation_triggers:
  - continued_intrusion_or_attack_after_warning
  - threat_to_nest_group_or_escape_path_only_when_context_supports
  deescalation_conditions:
  - retreat_beyond_defended_space
  - break_contact_under_cover
  - stop_threatening_the_nest
  pursuit_profile: strong_inside_defended_context_but_not_infinite
  group_size_effects:
  - no_generic_multiplier_group_pressure_requires_actual_authored_individuals
  ordinary_consequence_categories:
  - laceration
  - forced_route_change
  - separation_or_dropped_gear_only_by_event_resolution
  consequence_ceiling: critical_with_fatality_possible_only_under_serious_d_020_context
  human_check_hooks:
  - action: cross_or_withdraw_from_a_patrolled_open_zone_without_being_forced_into_a_dive_line
    relevant_species_axis: speed
    relevant_tags:
    - terrestrial_movement
    - territorial_patrol
    relevant_hazard_keys:
    - pidgeotto-territorial-aerial-strike
    difficulty_guidance: D024_context_from_distance_cover_warning_state_terrain_and_current_behavior
    notes: Speed_rating_does_not_define_literal_kmh_mph_altitude_endurance_or_map_travel_time
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - wary
    - intensely_territorial
    - efficient_hunter
    - nest_focused
    condition_variants:
    - patrolling
    - feeding
    - nesting
    - injured
    - carrying_prey
    local_lineage_variants:
    - none_without_evidence
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_and_not_player_scaled
    candidate_causes:
    - age
    - survival_history
    - specialized_territory_or_behavior
    - conditioning
    rating_shift_guidance: explicit_axis_deltas_only_may_exceed_ordinary_expectation
    required_distinctive_traits:
    - persistent_marking_behavior_route_history_or_reputation
    warning_or_rumor_hooks:
    - named_pidgeotto_that_patrols_a_cliff_corridor_and_carries_unusually_large_prey_without_becoming_a_mount
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites:
  - rare_voluntary_trust
  - large_roost_and_flight_space
  - acceptance_of_territorial_independence
  trust_building_paths:
  - long_term_noncoercive_contact
  - injury_recovery_or_mutual_protection
  - reliable_resources_without_capture_logic
  reasons_to_stay:
  - deep_or_persistent_bond
  - familiar_people_place_or_route
  - reliable_safe_resources
  rejection_or_departure_reasons:
  - forced_restraint
  - coercive_combat_or_transport_use
  - chronic_denial_of_species_local_needs
  human_social_costs:
  - predatory_food_logistics
  - settlement_fear
  - large_space_requirement
  logistics:
    food:
    - species_appropriate_supply_exact_amount_unresolved
    water:
    - regular_access
    shelter_temperature:
    - safe_rest_or_roost_site_appropriate_to_local_ecology
    space_travel:
    - species_local_mobility_needs_must_be_respected
    settlement_restrictions:
    - local_fear_space_and_safety_may_limit_entry
    special_resources:
    - none_fixed_by_P4
  assistance_capabilities:
  - aerial_scouting_or_carrying_only_if_explicitly_safe__voluntary__and_later_rules_allow
  handling_boundaries:
  - no_defeat_to_recruit
  - no_forced_containment
  - no_mount_or_carry_formula_from_stats_or_source_feat
  - one_visible_companion_slot_per_Pokemon_entity
  separation_injury_notes:
  - bonded_Pokemon_remains_an_independent_creature_and_cannot_be_stored
mechanical_hooks:
  tracking_clues:
  - circling_routes
  - feathers
  - claw_marked_prey
  - repeated_nestward_carry_line
  avoidance_preparation:
  - leave_defended_space
  - hard_cover
  - break_line_of_sight
  - avoid_nest_approach
  resistance_or_protection:
  - leave_defended_space
  - hard_cover
  - break_line_of_sight
  - avoid_nest_approach
  combat_approach_permissions:
  - named_exceptional_individual_may_use_explicit_profile_not_scaling
  blocked_or_invalid_approaches:
  - patrol_as_perfect_detection
  - derive_passenger_capacity_from_prey_feat
  - derive_exact_range_from_speed
  fear_hooks:
  - cross_open_ground_while_a_territorial_pidgeotto_repeatedly_intercepts
  injury_hazard_hooks:
  - laceration
  - forced_route_change
  - separation_or_dropped_gear_only_by_event_resolution
  environmental_state_hooks:
  - cover__boundary_markers__and_current_altitude_define_counterplay
  companion_assistance_hooks:
  - aerial_scouting_or_carrying_only_if_explicitly_safe__voluntary__and_later_rules_allow
  fortune_spike_opportunities:
  - terrain_or_cover_creates_species_specific_escape_window
  trouble_spike_complications:
  - ignored_warning_or_open_terrain_removes_counterplay
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_anatomy_is_not_safe_harvest_shortcut
  hunting_for_food: none_fixed
  shed_or_abandoned_materials:
  - none_fixed_by_review
  natural_remains:
  - ordinary_remains_only_if_context_requires
  dangerous_harvesting:
  - none_supported_as_default
  taboo_or_protection:
  - local_D2_taboo_or_protection_possible_only_when_authored
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits:
  - species_capability_does_not_establish_human_transport_surveillance_weapon_or_navigation_infrastructure
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful:
  - observe_patrol_boundaries_and_leave_before_escalation
  dangerous:
  - cross_open_ground_while_a_territorial_pidgeotto_repeatedly_intercepts
  unusual_or_rare:
  - an_exceptional_individual_carries_unusually_heavy_prey_along_one_known_route_without_generalizing_payload_rules
  discovery_insight:
  - patrol_is_contextual__legible__and_avoidable_rather_than_omniscient
  route_environment:
  - cover__boundary_markers__and_current_altitude_define_counterplay
  settlement_culture:
  - locals_may_mark_no_cross_roost_lines_rather_than_treat_all_pidgeotto_as_hostile
  cross_species:
  - pidgey_homing_is_not_pidgeotto_global_navigation__pidgeot_extreme_flight_is_not_auto_inherited
presentation_and_p6_followups:
  initial_bestiary_presentation: territorial_aerial_predator_and_patroller_with_species_local_traversal_and_behavior_boundaries
  progressive_reveal_notes:
  - patrol_is_contextual__legible__and_avoidable_rather_than_omniscient
  species_specific_visual_needs:
  - circling_patrol_states
  - claw_dive_telegraph
  - prey_carry_scale
  species_specific_audio_needs:
  - warning_calls
  - wing_pass
  - claw_impact
  special_ui_or_readability_needs:
  - no_guaranteed_detection_cone
  - no_mount_icon
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - pidgey
  - pidgeot
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - exact_proto_kanto_territory_size
  - payload_ceiling
  - passenger_safety
  - exact_ancient_range
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - event_state_for_species_local_traversal_detection_territory_or_coordination
  deferred_to_p6:
  - circling_patrol_states
  - claw_dive_telegraph
  - prey_carry_scale
  deferred_to_p7:
  - runtime_representation_only_if_required_after_event_contract
```
