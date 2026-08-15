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
  - OFFICIAL-DEX-PIDGEOT-SG
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
    paraphrase: multiple_official_entries_describe_extreme_flight_reaching_mach_2
  - claim_id: PGT-C1-003
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PIDGEOT-SG
    version_context: historical_version_tagged
    paraphrase: an_official_entry_describes_spotting_splashing_prey_while_flying_at_3_300_feet
  - claim_id: PGT-C1-004
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PIDGEOT-SG
    version_context: historical_version_tagged
    paraphrase: powerful_wingbeats_can_create_severe_gusts_and_water_skimming_hunting_is_described
  derived_claims:
  - claim_id: PGT-D1-001
    evidence_class: D1
    based_on:
    - PGT-C1-002
    - PGT-C1-003
    - PGT-C1-004
    statement: pidgeot_is_retained_as_a_genuinely_extreme_aerial_threat
    canon_boundary_note: no_real_time_physics__kinetic_energy_damage__automatic_initiative__or_fast_travel_formula
  - claim_id: PGT-D1-002
    evidence_class: D1
    based_on:
    - PGT-C1-001
    statement: modern_admiration_remains_modern_social_context
    canon_boundary_note: does_not_establish_ancient_breeding__mount__messenger__or_ownership_norms
canonical_source_data:
  types:
  - normal
  - flying
  base_stats_raw:
    hp: 83
    attack: 80
    defense: 75
    special_attack: 70
    special_defense: 70
    speed: 101
  abilities_relevant_to_p4:
  - keen_eye_as_modern_context
  - tangled_feet_as_modern_context
  - big_pecks_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4: []
  physical_metadata:
    height: 1.5_m
    weight: 39.5_kg
  evolution_source:
    evolves_from: pidgeotto
    evolves_to: []
    canonical_conditions:
    - modern_level_36_metadata_is_source_context_only
  other_material_facts:
  - versioned_mach_2_flight
  - versioned_3_300_foot_prey_spotting
  - powerful_wing_gusts
  - waterline_hunting
  - modern_plumage_admiration
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 4
  guard: 3
  potency: 3
  resistance: 3
  speed: 5
  derivation_notes:
    vigor: hp_83
    force: attack_80
    guard: defense_75
    potency: special_attack_70
    resistance: special_defense_70
    speed: speed_101
  calibration_flags:
  - no_manual_exception
  - Speed_is_not_literal_travel_velocity
  - Flying_type_is_not_traversal_permission
  - modern_ability_metadata_not_ancient_fixed_mechanic
capabilities_and_hazards:
  locomotion:
  - terrestrial_movement
  - high_performance_sustained_flight
  - high_altitude_access
  - rapid_aerial_repositioning
  physical_hazards:
  - claw_or_beak_strike
  - high_speed_aerial_impact_without_real_world_energy_formula
  - powerful_wing_gust
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities:
  - high_altitude_observation
  - waterline_hunting
  - rapid_interception
  utility_interaction_capabilities:
  - aerial_observation_only_when_event_valid__no_automatic_fast_travel
  immunities_or_approach_invalidators:
  - species_local_vertical_or_ground_mobility_may_invalidate_some_scene_approaches_but_never_by_type_alone
  hazard_records:
  - hazard_key: pidgeot-extreme-aerial-pressure
    kind: physical_and_environmental
    delivery_or_exposure:
    - high_speed_pass
    - claw_or_beak_strike
    - powerful_wing_gust
    prerequisite_or_trigger:
    - direct_attack
    - defended_airspace_or_nest_intrusion_if_authored
    - prey_hunt_crossing_the_player_route
    warning_signs:
    - high_silhouette
    - sudden_altitude_drop
    - pressure_change
    - vegetation_or_dust_bending_before_a_pass
    immediate_effects:
    - critical_positioning_pressure
    - knockdown_or_displacement_only_when_resolved
    - serious_laceration_or_impact
    delayed_or_persistent_effects:
    - none_automatic_follow_P3_injury_or_event_state
    ordinary_consequence_ceiling: critical_with_fatality_possible_under_serious_d_020_context
    exceptional_consequence_ceiling: fatal_only_under_serious_D020_context_not_automatic
    countermeasures:
    - hard_overhead_cover
    - enclosed_route
    - break_line_of_sight
    - avoid_exposed_ridge_or_waterline
    emergency_consumable_hooks: []
    context_amplifiers:
    - open_exposed_terrain
    - poor_cover
    - ignored_warning_state
    context_mitigators:
    - hard_overhead_cover
    - enclosed_route
    - break_line_of_sight
    - avoid_exposed_ridge_or_waterline
    governing_species_axes:
    - speed
    - force
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - PGT-C1-001
    - PGT-C1-002
    - PGT-C1-003
    - PGT-C1-004
    - PGT-D1-001
    - PGT-D1-002
  notes:
  - no_capability_is_inferred_from_Flying_type_alone
  - modern_abilities_do_not_create_literal_detection_escape_sleep_or_critical_rules
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: large_high_performance_aerial_predator_creates_stronger_practical_pressure_in_a_low_technology_world_without_a_global_ancient_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: species_local_ecology_and_route_context_only
  canon_boundary_note: no_global_ancient_bonus_no_player_scaling_no_hidden_level_curve
ancient_ecology:
  habitat:
  - exact_ancient_range_unknown
  - cliffs__open_country__coast__or_large_airspace_only_when_locally_authored_under_d_034
  ecological_niche:
  - large_high_performance_aerial_predator
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
  - large_feathers
  - distant_high_silhouette
  - sudden_gust
  - prey_disturbance_near_water
  observable_signs:
  - large_feathers
  - distant_high_silhouette
  - sudden_gust
  - prey_disturbance_near_water
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  unsupported_gaps:
  - exact_acceleration
  - endurance
  - carrying_capacity
  - weather_ceiling
  - ancient_distribution
human_perception_and_culture:
  ordinary_attitude:
  - awe_and_serious_avoidance_due_to_speed__altitude__and_scale
  specialist_knowledge_holders:
  - sky_watchers
  - cliff_guides
  - hunters
  - fishers
  benefits_and_services:
  - none_required_by_P4
  fears_and_avoidance:
  - claw_or_beak_strike
  - high_speed_aerial_impact_without_real_world_energy_formula
  - powerful_wing_gust
  myths_omens_taboos:
  - local_D2_stories_allowed_but_not_promoted_to_canon_or_universal_mechanics
  practical_customs:
  - hard_overhead_cover
  - enclosed_route
  - break_line_of_sight
  - avoid_exposed_ridge_or_waterline
  common_misbeliefs:
  - mach_2_means_an_unavoidable_attack
  - high_altitude_vision_means_omniscience
  - modern_admiration_proves_ancient_domestication
  local_variation_notes:
  - beliefs_and_practices_may_vary_by_locality_without_normalized_trainer_culture
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - extreme_altitude_scale
  local_aliases_or_titles: none
  identification_evidence:
  - large_feathers
  - distant_high_silhouette
  - sudden_gust
  - prey_disturbance_near_water
  - high_silhouette
  - sudden_altitude_drop
  - pressure_change
  - vegetation_or_dust_bending_before_a_pass
  initial_knowledge_fragments:
  - high_altitude_observation
  - terrestrial_movement
  post_identification_knowledge:
  - extreme_source_claims_coexist_with_cover__warning__and_event_counterplay
  advanced_insights:
  - mach_2_means_an_unavoidable_attack
  - high_altitude_vision_means_omniscience
  exceptional_individual_knowledge_hooks:
  - named_veteran_pidgeot_with_a_known_high_altitude_interception_route_and_distinctive_gust_signature__not_a_level_badge
threat_and_encounter:
  baseline_threat_band: very_high_for_ordinary_humans
  default_behavior_states:
  - soaring_high
  - observing
  - hunting
  - warning
  - intercepting
  - striking
  - disengaging
  aggression_tendency: contextual
  territoriality: moderate_to_high_when_authored
  avoidance_tendency: low_once_committed_but_contextual
  warning_signs:
  - high_silhouette
  - sudden_altitude_drop
  - pressure_change
  - vegetation_or_dust_bending_before_a_pass
  encounter_triggers:
  - direct_attack
  - defended_airspace_or_nest_intrusion_if_authored
  - prey_hunt_crossing_the_player_route
  escalation_triggers:
  - continued_intrusion_or_attack_after_warning
  - threat_to_nest_group_or_escape_path_only_when_context_supports
  deescalation_conditions:
  - reach_hard_cover
  - leave_defended_space
  - cease_pursuit_or_threat
  pursuit_profile: extremely_mobile_but_not_infinite_and_never_defined_by_a_mach_formula
  group_size_effects:
  - no_generic_multiplier_group_pressure_requires_actual_authored_individuals
  ordinary_consequence_categories:
  - critical_laceration_or_impact
  - forced_route_denial
  - fall_risk_in_exposed_terrain
  consequence_ceiling: critical_with_fatality_possible_under_serious_d_020_context
  human_check_hooks:
  - action: reach_hard_cover_before_a_high_altitude_interception_closes
    relevant_species_axis: speed
    relevant_tags:
    - terrestrial_movement
    - high_altitude_observation
    relevant_hazard_keys:
    - pidgeot-extreme-aerial-pressure
    difficulty_guidance: D024_context_from_distance_cover_warning_state_terrain_and_current_behavior
    notes: Speed_rating_does_not_define_literal_kmh_mph_altitude_endurance_or_map_travel_time
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - aloof
    - territorial
    - hunting
    - unusually_bold
    condition_variants:
    - soaring
    - hunting
    - weather_limited
    - fatigued
    - injured
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
    - named_veteran_pidgeot_with_a_known_high_altitude_interception_route_and_distinctive_gust_signature__not_a_level_badge
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites:
  - rare_voluntary_persistent_trust
  - enormous_airspace_and_roost_logistics
  - no_forced_containment_or_mount_expectation
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
  - settlement_fear
  - food_and_space_burden
  - dangerous_takeoff_and_landing_zones
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
  - aerial_scouting_or_transport_only_if_later_explicit_safety_rules_and_voluntary_behavior_allow
  handling_boundaries:
  - no_defeat_to_recruit
  - no_forced_containment
  - no_mount_or_carry_formula_from_stats_or_source_feat
  - one_visible_companion_slot_per_Pokemon_entity
  separation_injury_notes:
  - bonded_Pokemon_remains_an_independent_creature_and_cannot_be_stored
mechanical_hooks:
  tracking_clues:
  - large_feathers
  - distant_high_silhouette
  - sudden_gust
  - prey_disturbance_near_water
  avoidance_preparation:
  - hard_overhead_cover
  - enclosed_route
  - break_line_of_sight
  - avoid_exposed_ridge_or_waterline
  resistance_or_protection:
  - hard_overhead_cover
  - enclosed_route
  - break_line_of_sight
  - avoid_exposed_ridge_or_waterline
  combat_approach_permissions:
  - named_exceptional_individual_may_use_explicit_profile_not_scaling
  blocked_or_invalid_approaches:
  - convert_mach_2_to_damage_or_round_distance
  - derive_perfect_detection_from_altitude_vision
  - assume_mount_or_messenger_service
  fear_hooks:
  - cross_an_open_ridge_under_repeated_high_speed_passes
  injury_hazard_hooks:
  - critical_laceration_or_impact
  - forced_route_denial
  - fall_risk_in_exposed_terrain
  environmental_state_hooks:
  - vertical_cover_and_enclosed_terrain_are_strategic_state
  companion_assistance_hooks:
  - aerial_scouting_or_transport_only_if_later_explicit_safety_rules_and_voluntary_behavior_allow
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
  - watch_a_distant_pidgeot_hunt_over_water_from_safe_cover
  dangerous:
  - cross_an_open_ridge_under_repeated_high_speed_passes
  unusual_or_rare:
  - a_named_veteran_has_a_distinctive_gust_and_interception_pattern_rather_than_a_level_or_elite_affix
  discovery_insight:
  - extreme_source_claims_coexist_with_cover__warning__and_event_counterplay
  route_environment:
  - vertical_cover_and_enclosed_terrain_are_strategic_state
  settlement_culture:
  - sky_watchers_use_qualitative_silhouettes_and_wind_signs_without_measuring_mach_or_exact_altitude
  cross_species:
  - pidgey_homing_and_pidgeotto_prey_carrying_do_not_define_pidgeot_navigation_or_payload_formulas
presentation_and_p6_followups:
  initial_bestiary_presentation: large_high_performance_aerial_predator_with_species_local_traversal_and_behavior_boundaries
  progressive_reveal_notes:
  - extreme_source_claims_coexist_with_cover__warning__and_event_counterplay
  species_specific_visual_needs:
  - extreme_altitude_scale
  - closing_silhouette
  - wing_gust_telegraph
  species_specific_audio_needs:
  - distant_cry
  - pressure_rush
  - heavy_wing_pass
  special_ui_or_readability_needs:
  - no_speedometer_or_mach_damage_label
  - no_guaranteed_detection_icon
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - pidgey
  - pidgeotto
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - exact_acceleration
  - endurance
  - carrying_capacity
  - weather_ceiling
  - ancient_distribution
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - event_state_for_species_local_traversal_detection_territory_or_coordination
  deferred_to_p6:
  - extreme_altitude_scale
  - closing_silhouette
  - wing_gust_telegraph
  deferred_to_p7:
  - runtime_representation_only_if_required_after_event_contract
```
