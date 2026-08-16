# P4 Batch 20 — #062 Poliwrath Full-Schema Dossier

Part of `docs/P4_BATCH_20_FULL_SCHEMA_DOSSIERS.md`.

---

## #062 Poliwrath / 강챙이

```yaml
identity:
  national_dex: 62
  species_key: poliwrath
  official_name_en: Poliwrath
  official_name_ko: 강챙이
  evolution_family_keys: [poliwag, poliwhirl, poliwrath, politoed_external]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-POLIWRATH-SG, P4_BATCH_20_SOURCE_REVIEW]
  official_evidence:
  - claim_id: PWR-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-POLIWRATH-SG
    version_context: current_official_portal__WHOLE_BODY_SWIMMING_AND_WATER_SURFACE_BURST
    paraphrase: Poliwrath_is_a_powerful_whole_body_swimmer_that_lives_on_dry_land_and_can_run_across_the_water_surface_for_a_split_second
  - claim_id: PWR-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__EXTREME_ENDURANCE_AND_HUMAN_SWIMMER_COMPARISONS
    paraphrase: historical_entries_compare_its_swimming_to_top_humans_and_use_extreme_ocean_crossing_or_never_tiring_language
  derived_claims:
  - claim_id: PWR-D1-001
    evidence_class: D1
    based_on: [PWR-C1-001, PWR-C1-002]
    statement: Poliwrath_is_a_powerful_amphibious_combat_capable_swimmer_with_exceptional_but_bounded_endurance
    canon_boundary_note: no_infinite_stamina_literal_world_travel_formula_or_permanent_water_walking
  - claim_id: PWR-D1-002
    evidence_class: D1
    based_on: [PWR-C1-001]
    statement: water_surface_running_is_a_brief_burst_permission_that_depends_on_position_and_momentum
    canon_boundary_note: no_passenger_fast_travel_or_free_extra_movement
canonical_source_data:
  types: [water, fighting]
  base_stats_raw: {hp: 90, attack: 95, defense: 95, special_attack: 70, special_defense: 90, speed: 70}
  abilities_relevant_to_p4: [water_absorb_as_modern_context, damp_as_modern_context, swift_swim_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.3_m, weight: 54.0_kg}
  evolution_source:
    evolves_from: poliwhirl
    evolves_to: []
    canonical_conditions: [modern_Water_Stone_metadata_is_source_context_not_automatic_ancient_progression_law]
  other_material_facts: [whole_body_swimming, dry_land_living, brief_water_surface_running, historical_ocean_crossing_and_tirelessness_scale_language, modern_Fighting_type_does_not_imply_human_martial_institution]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 4
  guard: 4
  potency: 3
  resistance: 4
  speed: 3
  derivation_notes: {vigor: hp_90, force: attack_95, guard: defense_95, potency: special_attack_70, resistance: special_defense_90, speed: speed_70}
  calibration_flags: [no_manual_exception, endurance_not_infinite_resource, swimming_scale_not_travel_formula, water_surface_burst_not_permanent_traversal]
capabilities_and_hazards:
  locomotion: [strong_ground_movement, exceptional_swimming, brief_water_surface_burst_when_start_state_and_space_allow]
  physical_hazards: [powerful_body_strikes, grappling_or_close_combat_pressure_without_extra_actions]
  elemental_environmental_hazards: [water_route_advantage]
  anomalous_hazards: []
  behavioral_capabilities: [whole_body_swimming, sustained_but_bounded_endurance, dry_land_viability]
  utility_interaction_capabilities: [strong_swimming_assistance_when_voluntary, brief_surface_crossing_without_passenger_fast_travel]
  immunities_or_approach_invalidators: [extreme_endurance_does_not_mean_exhaustion_immunity, Water_type_does_not_mean_drowning_immunity_for_others, Fighting_type_does_not_create_formal_martial_training]
  hazard_records:
  - hazard_key: poliwrath-close-combat-pressure
    kind: other
    delivery_or_exposure: [successful_close_range_strike_grapple_or_body_check]
    prerequisite_or_trigger: [Poliwrath_enters_close_range_and_commits_an_ordinary_action]
    warning_signs: [powerful_limb_set, closing_distance, braced_stance, water_exit_intercept]
    immediate_effects: [blunt_injury, knockback_or_position_loss, possible_restraint]
    delayed_or_persistent_effects: [ordinary_injury_consequences_if_sustained]
    ordinary_consequence_ceiling: severe
    exceptional_consequence_ceiling: life_threatening_for_named_exceptional_individual_or_hazardous_environment_combo
    countermeasures: [maintain_distance, use_terrain, avoid_contesting_in_water, coordinated_escape, interrupt_grapple]
    emergency_consumable_hooks: []
    context_amplifiers: [deep_water, confined_space, isolated_target, exceptional_individual]
    context_mitigators: [distance, obstacles, stable_ground, allies]
    governing_species_axes: [force, guard, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [PWR-C1-001, PWR-D1-001]
  - hazard_key: poliwrath-water-route-pressure
    kind: drowning
    delivery_or_exposure: [human_or_companion_is_forced_or_lured_into_water_where_Poliwrath_has_major_locomotion_advantage]
    prerequisite_or_trigger: [unsafe_water_entry_or_loss_of_shore_position]
    warning_signs: [deep_water, current, Poliwrath_repositioning_through_water, limited_exit]
    immediate_effects: [separation, position_loss, difficult_escape]
    delayed_or_persistent_effects: [drowning_or_exhaustion_pressure_only_if_exposure_continues]
    ordinary_consequence_ceiling: severe
    exceptional_consequence_ceiling: life_threatening_when_exit_or_rescue_is_explicitly_constrained
    countermeasures: [preserve_shore_exit, avoid_water_contest, use_rope_or_allies, retreat_to_stable_ground]
    emergency_consumable_hooks: []
    context_amplifiers: [current, darkness, long_distance_from_shore, injured_target]
    context_mitigators: [shallow_water, multiple_exits, prepared_rescue, stable_bank]
    governing_species_axes: [vigor, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [PWR-C1-001, PWR-D1-001]
  notes: [one_Poliwrath_still_has_one_turn_and_one_health_state, no_stamina_meter_or_continuous_swimming_physics_required]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: exceptional_aquatic_endurance_and_preindustrial_water_rescue_limits_raise_contextual_risk_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_water_control_and_route_pressure_can_make_encounters_formidable
  canon_boundary_note: no_global_ancient_bonus_or_player_relative_scaling
ancient_ecology:
  habitat: [rivers, lakes, marshes, wet_lowlands, dry_land_rest_or_foraging_routes_near_water, exact_proto_kanto_distribution_unknown]
  ecological_niche: [large_amphibious_forager_or_predator_competitor_contextual]
  activity_pattern: [swimming, ground_travel, resting, training_like_repetitive_motion_only_if_observed_not_institutionalized]
  seasonal_notes: [water_conditions_can_change_local_routes_but_exact_calendar_unknown]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [local_aquatic_food_web_and_competitors_require_authoring]
  environmental_effects: [strong_wake, disturbed_banks, repeated_water_exit_tracks]
  observable_signs: [powerful_swim_wake, deep_bank_footprints, repeated_crossing_points, brief_surface_splash_pattern]
  locality_constraints: [strong_swimming_does_not_mean_every_ocean_or_waterway_has_Poliwrath]
  unsupported_gaps: [exact_endurance_limit, exact_swimming_speed, exact_surface_run_distance, exact_passenger_or_cargo_capability, proto_kanto_abundance]
human_perception_and_culture:
  ordinary_attitude: [respect_and_caution]
  specialist_knowledge_holders: [fishers, ferrymen, route_watchers, handlers]
  benefits_and_services: [voluntary_water_rescue_or_route_help_possible_but_not_required_institution]
  fears_and_avoidance: [being_dragged_or_outmaneuvered_in_water, close_combat_force]
  myths_omens_taboos: [stories_may_literalize_ocean_crossing_or_never_tiring_wording_into_infinite_stamina]
  practical_customs: [do_not_contest_a_Poliwrath_in_deep_water_without_exit_plan, use_land_and_obstacles, respect_warning_and_space]
  common_misbeliefs: [it_never_tires, it_can_run_on_water_indefinitely, owning_one_guarantees_fast_travel]
  local_variation_notes: [no_region_wide_swim_school_or_martial_order_is_required]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_heavy_humanoid_shape_crosses_open_water_with_a_wake_that_does_not_match_its_land_build]
  local_aliases_or_titles: none
  identification_evidence: [large_muscular_body, spiral, strong_swimming, dry_land_viability]
  initial_knowledge_fragments: [formidable_in_water_and_at_close_range, can_still_fight_or_move_on_land]
  post_identification_knowledge: [endurance_is_exceptional_but_not_infinite, water_surface_running_is_momentary]
  advanced_insights: [forcing_route_choice_back_to_stable_land_can_reduce_its_locomotion_advantage_without_removing_its_strength]
  exceptional_individual_knowledge_hooks: [a_scarred_old_Poliwrath_is_known_for_crossing_a_flood_channel_others_cannot]
threat_and_encounter:
  baseline_threat_band: high_when_hostile_or_when_water_geometry_favors_it_but_not_assumed_aggressive
  default_behavior_states: [swimming, ground_travel, resting, warning, close_combat, water_repositioning, retreating]
  aggression_tendency: contextual_not_inferred_from_high_stats_or_Fighting_type
  territoriality: moderate_or_unknown_by_locality
  avoidance_tendency: moderate_if_not_committed_and_space_exists
  warning_signs: [braced_stance, water_intercept, repeated_wake, closing_distance]
  encounter_triggers: [shared_water_route, blocked_rest_site, resource_or_space_conflict, attack]
  escalation_triggers: [cornering, continued_attack, threat_to_bonded_group_or_site_when_authored]
  deescalation_conditions: [create_space, leave_contested_water_or_bank, stop_attack, provide_retreat]
  pursuit_profile: capable_on_land_and_water_but_event_bounded_and_not_infinite
  group_size_effects: [each_Poliwrath_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [blunt_injury, restraint, position_loss, drowning_pressure]
  consequence_ceiling: life_threatening_when_close_combat_or_water_escape_is_explicitly_constrained
  human_check_hooks:
  - action: disengage_from_Poliwrath_without_being_forced_into_deep_water_or_close_combat
    relevant_species_axis: force
    relevant_tags: [amphibious, close_combat, endurance]
    relevant_hazard_keys: [poliwrath-close-combat-pressure, poliwrath-water-route-pressure]
    difficulty_guidance: D024_context_from_distance_water_depth_exit_options_and_prior_warning
    notes: no_infinite_stamina_or_swim_speed_formula
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [calm, protective, competitive, wary, forceful_when_cornered]
    condition_variants: [resting, swimming, fatigued_after_exceptional_exertion, injured, guarding]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_training_history_without_human_institution_assumption, repeated_flood_survival, unusual_size]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_scars_or_build, route_history, persistent_reputation]
    warning_or_rumor_hooks: [one_old_Poliwrath_has_crossed_a_flooded_gorge_for_years_and_is_far_stronger_than_local_baseline]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, ample_food_and_water_access, respectful_handling, realistic_space]
  trust_building_paths: [repeat_shared_route_or_rescue, noncoercive_training_like_activity, food_and_rest, respecting_independence]
  reasons_to_stay: [bond, dependable_companionship, access_to_water_and_space]
  rejection_or_departure_reasons: [coercive_combat_use, confinement, neglect, forced_exhaustion]
  human_social_costs: [large_strong_companion_requires_space_and_public_safety_expectations]
  logistics:
    food: [substantial_species_appropriate_food]
    water: [regular_swimming_access]
    shelter_temperature: [safe_rest_area_on_land_near_water_when_possible]
    space_travel: [viable_on_land_but_large_body_and_water_needs_affect_routes]
    settlement_restrictions: [manage_close_combat_strength_and_water_access]
    special_resources: [none_fixed]
  assistance_capabilities: [voluntary_water_rescue, strong_swimming_support, heavy_physical_help_within_authored_material_limits]
  handling_boundaries: [no_defeat_to_recruit, no_infinite_swim_transport, no_passenger_water_running, no_extra_actions_from_whole_body_swimming, one_visible_companion_slot]
  separation_injury_notes: [bonded_Poliwrath_remains_independent_and_can_refuse_exhausting_or_dangerous_tasks]
mechanical_hooks:
  tracking_clues: [strong_wake, deep_bank_tracks, repeated_crossing_points, surface_burst_splashes]
  avoidance_preparation: [keep_stable_ground_exit, avoid_deep_water_contest, use_distance_and_obstacles]
  resistance_or_protection: [shore_access, barriers, allies, prepared_rescue]
  combat_approach_permissions: [land_water_state_difference, strong_close_combat, brief_surface_burst]
  blocked_or_invalid_approaches: [infinite_stamina, permanent_water_walking, passenger_fast_travel, exact_ocean_crossing_formula, Fighting_type_martial_institution]
  fear_hooks: [the_only_shore_exit_is_already_between_the_party_and_the_Poliwrath]
  injury_hazard_hooks: [poliwrath-close-combat-pressure, poliwrath-water-route-pressure]
  environmental_state_hooks: [in_water, on_land, deep_water, stable_bank, surface_burst_eligible]
  companion_assistance_hooks: [voluntary_water_rescue_or_bounded_heavy_help]
  fortune_spike_opportunities: [reach_stable_ground_before_it_can_control_the_water_route]
  trouble_spike_complications: [a_flooded_section_turns_a_land_encounter_into_its_best_environment]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [muscle_or_skin_is_not_a_repeatable_resource_node]
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
  scalability_limits: [swimming_strength_does_not_create_transport_infrastructure_or_mechanical_power_grid]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_Poliwrath_switch_between_land_rest_and_powerful_swimming]
  dangerous: [cross_a_flooded_route_where_a_hostile_or_defensive_Poliwrath_controls_the_best_exit]
  unusual_or_rare: [an_exceptional_Poliwrath_is_known_for_surviving_and_crossing_a_seasonal_flood_channel]
  discovery_insight: [learn_that_extreme_endurance_is_scale_evidence_not_an_infinite_action_resource]
  route_environment: [river_crossing, flooded_lowland, lake_edge, marsh_route]
  settlement_culture: [ferrymen_respect_known_Poliwrath_crossings_without_building_a_required_transport_guild_around_them]
  cross_species: [Poliwhirl_is_more_escape_and_drowsiness_oriented, Poliwag_is_much_weaker_and_more_aquatic]
presentation_and_p6_followups:
  initial_bestiary_presentation: whole_body_swim_power_and_land_viability_before_any_infinite_endurance_claim
  progressive_reveal_notes: [show_bounded_exertion, brief_surface_burst, dangerous_water_positioning]
  species_specific_visual_needs: [clear_swim_land_and_surface_burst_states]
  species_specific_audio_needs: [strong_wake_body_impact_and_land_step_cues]
  special_ui_or_readability_needs: [water_route_advantage_and_escape_options_must_be_readable]
  p6_followup_required: true
cross_species_links:
  evolution_family: [poliwag, poliwhirl, politoed_external]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [river_lake_and_marsh_species_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_endurance_limit, exact_swimming_speed, exact_water_surface_run_distance, exact_passenger_or_cargo_capability]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_close_combat_and_water_route_check_resolution]
  deferred_to_p6: [land_water_surface_burst_readability]
  deferred_to_p7: [discrete_locomotion_modes_cached_capability_lookup_and_no_stamina_or_fluid_simulator]
```

### Completion note

All 20 frozen-schema top-level sections are populated. Poliwrath is formidable without assumed aggression, and extraordinary endurance remains bounded capability evidence rather than infinite stamina, travel math or permanent water walking. No blocking Human Design Gate remains.
