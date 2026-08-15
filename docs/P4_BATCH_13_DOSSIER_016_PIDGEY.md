# P4 Batch 13 — #016 Pidgey Full-Schema Dossier

Part of `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md`.

---

## #016 Pidgey / 구구

```yaml
identity:
  national_dex: 16
  species_key: pidgey
  official_name_en: Pidgey
  official_name_ko: 구구
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
  - OFFICIAL-DEX-PIDGEY-SG
  official_evidence:
  - claim_id: PID-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PIDGEY-SG
    version_context: current_official_portal
    paraphrase: exceptionally_sharp_direction_sense_supports_return_to_its_own_nest_after_displacement
  - claim_id: PID-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PIDGEY-SG
    version_context: historical_version_tagged
    paraphrase: generally_docile_conflict_avoidance_and_defensive_sand_or_dust_kicking_are_repeatedly_described
  derived_claims:
  - claim_id: PID-D1-001
    evidence_class: D1
    based_on:
    - PID-C1-001
    statement: homeward_navigation_may_drive_nest_return_and_displacement_events
    canon_boundary_note: not_arbitrary_destination_routefinding__map_reveal__or_guaranteed_immunity_to_disorientation
  - claim_id: PID-D1-002
    evidence_class: D1
    based_on:
    - PID-C1-002
    statement: dust_kicking_may_drive_warning__concealment__disengagement__or_prey_flushing_events
    canon_boundary_note: not_a_fixed_accuracy_penalty__fixed_radius__or_guaranteed_escape
canonical_source_data:
  types:
  - normal
  - flying
  base_stats_raw:
    hp: 40
    attack: 45
    defense: 40
    special_attack: 35
    special_defense: 35
    speed: 56
  abilities_relevant_to_p4:
  - keen_eye_as_modern_context
  - tangled_feet_as_modern_context
  - big_pecks_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4: []
  physical_metadata:
    height: 0.3_m
    weight: 1.8_kg
  evolution_source:
    evolves_from: null
    evolves_to:
    - pidgeotto
    canonical_conditions:
    - modern_level_18_metadata_only
  other_material_facts:
  - nest_homing
  - defensive_dust_behavior
  - generally_docile_tendency
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 2
  guard: 2
  potency: 1
  resistance: 1
  speed: 2
  derivation_notes:
    vigor: hp_40
    force: attack_45
    guard: defense_40
    potency: special_attack_35
    resistance: special_defense_35
    speed: speed_56
  calibration_flags:
  - no_manual_exception
  - Speed_is_not_literal_travel_velocity
  - Flying_type_is_not_traversal_permission
  - modern_ability_metadata_not_ancient_fixed_mechanic
capabilities_and_hazards:
  locomotion:
  - terrestrial_hopping_and_running
  - ordinary_local_flight
  - home_or_nest_oriented_return_navigation
  physical_hazards:
  - beak_or_claw_contact
  - wing_driven_dust_or_sand_when_local_surface_supports_it
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities:
  - conflict_avoidance_tendency
  - nest_homing
  - defensive_dust_kicking
  utility_interaction_capabilities:
  - observable_homeward_return_behavior__not_a_human_navigation_service
  immunities_or_approach_invalidators:
  - species_local_vertical_or_ground_mobility_may_invalidate_some_scene_approaches_but_never_by_type_alone
  hazard_records:
  - hazard_key: pidgey-dust-disengagement
    kind: visibility_and_positioning
    delivery_or_exposure:
    - wing_driven_loose_dust
    - rapid_local_flight
    prerequisite_or_trigger:
    - cornering
    - direct_attack
    - nest_or_young_pressure_if_authored
    warning_signs:
    - wing_bracing
    - ground_disturbance
    - abrupt_low_flight
    immediate_effects:
    - temporary_visual_pressure
    - forced_repositioning_or_lost_contact_only_through_authored_event_resolution
    delayed_or_persistent_effects:
    - none_automatic_follow_P3_injury_or_event_state
    ordinary_consequence_ceiling: moderate_ordinary__serious_only_in_compound_terrain_or_explicit_exceptional_individual_context
    exceptional_consequence_ceiling: fatal_only_under_serious_D020_context_not_automatic
    countermeasures:
    - hard_cover
    - wet_or_hard_ground
    - distance
    - do_not_corner_it
    emergency_consumable_hooks: []
    context_amplifiers:
    - open_exposed_terrain
    - poor_cover
    - ignored_warning_state
    context_mitigators:
    - hard_cover
    - wet_or_hard_ground
    - distance
    - do_not_corner_it
    governing_species_axes:
    - speed
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - PID-C1-001
    - PID-C1-002
    - PID-D1-001
    - PID-D1-002
  notes:
  - no_capability_is_inferred_from_Flying_type_alone
  - modern_abilities_do_not_create_literal_detection_escape_sleep_or_critical_rules
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: small_aerial_forager_with_strong_homeward_orientation_creates_stronger_practical_pressure_in_a_low_technology_world_without_a_global_ancient_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: species_local_ecology_and_route_context_only
  canon_boundary_note: no_global_ancient_bonus_no_player_scaling_no_hidden_level_curve
ancient_ecology:
  habitat:
  - exact_ancient_range_unknown
  - grassland__forest_edge__or_settlement_margin_only_when_locally_authored_under_d_034
  ecological_niche:
  - small_aerial_forager_with_strong_homeward_orientation
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
  - small_tracks
  - feathers
  - repeated_nestward_flight_line
  - disturbed_dust
  observable_signs:
  - small_tracks
  - feathers
  - repeated_nestward_flight_line
  - disturbed_dust
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  unsupported_gaps:
  - exact_homing_distance_ceiling
  - weather_or_anomaly_disorientation_limits
  - nesting_ecology
  - exact_ancient_range
human_perception_and_culture:
  ordinary_attitude:
  - usually_wary_or_docile_until_cornered_or_nest_pressure_is_authored
  specialist_knowledge_holders:
  - foragers
  - bird_watchers
  - route_scouts
  benefits_and_services:
  - none_required_by_P4
  fears_and_avoidance:
  - beak_or_claw_contact
  - wing_driven_dust_or_sand_when_local_surface_supports_it
  myths_omens_taboos:
  - local_D2_stories_allowed_but_not_promoted_to_canon_or_universal_mechanics
  practical_customs:
  - hard_cover
  - wet_or_hard_ground
  - distance
  - do_not_corner_it
  common_misbeliefs:
  - pidgey_can_guide_humans_to_arbitrary_destinations
  - keen_eye_means_perfect_detection
  - flying_typing_means_unlimited_traversal
  local_variation_notes:
  - beliefs_and_practices_may_vary_by_locality_without_normalized_trainer_culture
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - small_fast_silhouette
  local_aliases_or_titles: none
  identification_evidence:
  - small_tracks
  - feathers
  - repeated_nestward_flight_line
  - disturbed_dust
  - wing_bracing
  - ground_disturbance
  - abrupt_low_flight
  initial_knowledge_fragments:
  - conflict_avoidance_tendency
  - terrestrial_hopping_and_running
  post_identification_knowledge:
  - its_direction_sense_is_homeward_rather_than_universal
  advanced_insights:
  - pidgey_can_guide_humans_to_arbitrary_destinations
  - keen_eye_means_perfect_detection
  exceptional_individual_knowledge_hooks:
  - scarred_pidgey_known_to_return_from_extreme_displacement_without_becoming_a_global_compass
threat_and_encounter:
  baseline_threat_band: low_to_moderate_for_ordinary_humans
  default_behavior_states:
  - foraging
  - resting
  - returning_to_nest
  - wary
  - defensive
  - fleeing
  aggression_tendency: low_but_contextual
  territoriality: low_to_moderate_near_nest_if_authored
  avoidance_tendency: high
  warning_signs:
  - wing_bracing
  - ground_disturbance
  - abrupt_low_flight
  encounter_triggers:
  - cornering
  - direct_attack
  - nest_or_young_pressure_if_authored
  escalation_triggers:
  - continued_intrusion_or_attack_after_warning
  - threat_to_nest_group_or_escape_path_only_when_context_supports
  deescalation_conditions:
  - restore_escape_space
  - stop_pursuit
  - leave_nest_area
  pursuit_profile: usually_disengages_rather_than_pursues
  group_size_effects:
  - no_generic_multiplier_group_pressure_requires_actual_authored_individuals
  ordinary_consequence_categories:
  - minor_injury
  - temporary_visibility_loss
  - route_confusion_only_in_compound_scene
  consequence_ceiling: moderate_ordinary__serious_only_in_compound_terrain_or_explicit_exceptional_individual_context
  human_check_hooks:
  - action: maintain_orientation_when_a_defensive_dust_flush_breaks_visual_contact
    relevant_species_axis: speed
    relevant_tags:
    - terrestrial_hopping_and_running
    - conflict_avoidance_tendency
    relevant_hazard_keys:
    - pidgey-dust-disengagement
    difficulty_guidance: D024_context_from_distance_cover_warning_state_terrain_and_current_behavior
    notes: Speed_rating_does_not_define_literal_kmh_mph_altitude_endurance_or_map_travel_time
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - skittish
    - calm
    - nest_focused
    - unusually_bold
    condition_variants:
    - foraging
    - nesting
    - displaced
    - exhausted
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
    - scarred_pidgey_known_to_return_from_extreme_displacement_without_becoming_a_global_compass
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites:
  - rare_voluntary_persistent_trust
  - stable_roost_or_nest_access
  - no_forced_containment
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
  - need_for_roost_and_free_local_flight
  - limited_direct_combat_value
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
  - local_warning_or_homeward_behavior_only_when_voluntary_and_event_valid
  handling_boundaries:
  - no_defeat_to_recruit
  - no_forced_containment
  - no_mount_or_carry_formula_from_stats_or_source_feat
  - one_visible_companion_slot_per_Pokemon_entity
  separation_injury_notes:
  - bonded_Pokemon_remains_an_independent_creature_and_cannot_be_stored
mechanical_hooks:
  tracking_clues:
  - small_tracks
  - feathers
  - repeated_nestward_flight_line
  - disturbed_dust
  avoidance_preparation:
  - hard_cover
  - wet_or_hard_ground
  - distance
  - do_not_corner_it
  resistance_or_protection:
  - hard_cover
  - wet_or_hard_ground
  - distance
  - do_not_corner_it
  combat_approach_permissions:
  - named_exceptional_individual_may_use_explicit_profile_not_scaling
  blocked_or_invalid_approaches:
  - treat_homing_as_map_reveal
  - derive_exact_flight_range_from_speed
  - turn_dust_into_a_fixed_numerical_debuff
  fear_hooks:
  - lose_visual_contact_during_a_defensive_dust_flush_near_bad_terrain
  injury_hazard_hooks:
  - minor_injury
  - temporary_visibility_loss
  - route_confusion_only_in_compound_scene
  environmental_state_hooks:
  - loose_ground__cover__and_known_landmarks_define_counterplay
  companion_assistance_hooks:
  - local_warning_or_homeward_behavior_only_when_voluntary_and_event_valid
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
  - observe_repeated_nest_return_behavior_from_a_safe_position
  dangerous:
  - lose_visual_contact_during_a_defensive_dust_flush_near_bad_terrain
  unusual_or_rare:
  - an_exceptional_pidgey_returns_from_an_implausibly_long_displacement_without_revealing_arbitrary_routes
  discovery_insight:
  - its_direction_sense_is_homeward_rather_than_universal
  route_environment:
  - loose_ground__cover__and_known_landmarks_define_counterplay
  settlement_culture:
  - local_travelers_may_read_repeated_nestward_flight_as_a_qualitative_sign__not_a_map
  cross_species:
  - pidgeotto_territorial_patrol_and_pidgeot_extreme_flight_are_not_inherited_backward
presentation_and_p6_followups:
  initial_bestiary_presentation: small_aerial_forager_with_strong_homeward_orientation_with_species_local_traversal_and_behavior_boundaries
  progressive_reveal_notes:
  - its_direction_sense_is_homeward_rather_than_universal
  species_specific_visual_needs:
  - small_fast_silhouette
  - nestward_route_readability
  - dust_flush_telegraph
  species_specific_audio_needs:
  - wing_flutter
  - alarm_call
  - dust_scrape
  special_ui_or_readability_needs:
  - no_compass_arrow
  - no_perfect_detection_icon
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - pidgeotto
  - pidgeot
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - exact_homing_distance_ceiling
  - weather_or_anomaly_disorientation_limits
  - nesting_ecology
  - exact_ancient_range
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - event_state_for_species_local_traversal_detection_territory_or_coordination
  deferred_to_p6:
  - small_fast_silhouette
  - nestward_route_readability
  - dust_flush_telegraph
  deferred_to_p7:
  - runtime_representation_only_if_required_after_event_contract
```
