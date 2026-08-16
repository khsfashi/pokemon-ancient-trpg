# P4 Batch 21 — #099 Kingler Full-Schema Dossier

Part of `docs/P4_BATCH_21_FULL_SCHEMA_DOSSIERS.md`.

---

## #099 Kingler / 킹크랩

```yaml
identity:
  national_dex: 99
  species_key: kingler
  official_name_en: Kingler
  official_name_ko: 킹크랩
  evolution_family_keys: [krabby, kingler]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-KINGLER-SG, P4_BATCH_21_SOURCE_REVIEW]
  official_evidence:
  - claim_id: KIN-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-KINGLER-SG
    version_context: current_official_portal__EXTREME_PINCER_FORCE_AND_UNWIELDINESS
    paraphrase: Kinglers_large_hard_pincer_is_described_with_extreme_10000_horsepower_scale_but_is_so_large_that_it_is_difficult_to_move_and_gets_in_the_way_outside_battle
  - claim_id: KIN-C2-001
    evidence_class: C2
    source_ref: SRC-DATA-001
    version_context: historical_versions__AIM_BALANCE_COMMUNICATION_FATIGUE
    paraphrase: historical_entries_support_one_massively_enlarged_pincer_with_aim_difficulty_balance_stagger_pressure_claw_waving_communication_and_rapid_fatigue_from_its_weight
  derived_claims:
  - claim_id: KIN-D1-001
    evidence_class: D1
    based_on: [KIN-C1-001, KIN-C2-001]
    statement: Kingler_is_a_heavily_armored_high_force_pincer_user_whose_oversized_claw_can_create_severe_eligible_consequences
    canon_boundary_note: source_scale_force_is_not_literal_damage_energy_or_material_threshold_math
  - claim_id: KIN-D1-002
    evidence_class: D1
    based_on: [KIN-C1-001, KIN-C2-001]
    statement: oversized_claw_mass_creates_real_aim_balance_and_fatigue_counterweights_that_can_be_authored_as_discrete_encounter_state
    canon_boundary_note: no_continuous_stamina_torque_load_or_real_time_physics_simulation
  - claim_id: KIN-D1-003
    evidence_class: D1
    based_on: [KIN-C2-001]
    statement: claw_waving_can_function_as_species_specific_signaling
    canon_boundary_note: no_human_language_free_action_or_extra_appendage_action
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 55, attack: 130, defense: 115, special_attack: 50, special_defense: 50, speed: 75}
  abilities_relevant_to_p4: [hyper_cutter_as_modern_context, shell_armor_as_modern_context, sheer_force_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.3_m, weight: 60.0_kg}
  evolution_source:
    evolves_from: krabby
    evolves_to: []
    canonical_conditions: [modern_level_28_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [massively_enlarged_pincer, extreme_source_scale_crushing_strength, unwieldiness, aiming_difficulty, balance_stagger_pressure, claw_signaling, heavy_claw_fatigue]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 6
  guard: 5
  potency: 2
  resistance: 2
  speed: 3
  derivation_notes: {vigor: hp_55, force: attack_130, guard: defense_115, potency: special_attack_50, resistance: special_defense_50, speed: speed_75}
  calibration_flags: [no_manual_exception, extreme_pincer_wording_not_literalized, aim_balance_fatigue_not_axis_overrides, high_force_does_not_imply_aggression]
capabilities_and_hazards:
  locomotion: [ground_and_shoreline_movement_consistent_with_body_plan, lateral_repositioning_when_geometry_allows]
  physical_hazards: [oversized_pincer_grip, severe_crush_pressure, armored_body_collision]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [claw_waving_species_signal, deliberate_heavy_claw_commitment, recovery_or_repositioning_after_overextension]
  utility_interaction_capabilities: [strong_gripping_or_crushing_of_authored_species_scale_targets_when_material_and_position_are_suitable]
  immunities_or_approach_invalidators: [Water_type_does_not_grant_unrestricted_swimming, shell_armor_metadata_does_not_grant_invulnerability, high_force_does_not_grant_generic_material_deletion]
  hazard_records:
  - hazard_key: kingler-severe-pincer-crush
    kind: other
    delivery_or_exposure: [successful_oversized_pincer_contact_grip_or_crush]
    prerequisite_or_trigger: [credible_target_position, oversized_claw_ready, ordinary_action_committed, target_or_material_suitability_authored]
    warning_signs: [oversized_claw_raise, lateral_or_body_alignment, heavy_commitment_posture, prior_claw_signal_or_defensive_display]
    immediate_effects: [severe_crush_or_laceration_pressure, forced_position_change_or_restraint_pressure_when_fiction_supports_it]
    delayed_or_persistent_effects: [bounded_injury_consequence_if_severe_contact_is_resolved, Kingler_may_be_overextended_or_fatigued_after_heavy_commitment]
    ordinary_consequence_ceiling: severe
    exceptional_consequence_ceiling: life_threatening_for_named_exceptional_individual_or_explicitly_constrained_scene
    countermeasures: [avoid_oversized_claw_arc, exploit_aim_difficulty, force_repositioning, break_contact, use_cover, disengage_after_overextension]
    emergency_consumable_hooks: [generic_crush_or_laceration_recovery_hook_deferred_to_P5_item_design]
    context_amplifiers: [confined_space, target_already_pinned, stable_bracing, surprise, exceptional_individual]
    context_mitigators: [distance, open_space, warning, awkward_angle, forced_fast_lift, recent_overextension_or_fatigue]
    governing_species_axes: [force, guard, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [KIN-C1-001, KIN-C2-001, KIN-D1-001, KIN-D1-002]
  notes: [one_oversized_claw_never_creates_a_second_turn_entity_health_pool_or_initiative, 10000_horsepower_is_source_scale_evidence_not_physics_math, fatigue_is_event_triggered_not_continuous_meter]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: fixed_high_force_and_guard_can_be_more_consequential_in_narrow_shore_routes_or_preindustrial_injury_context_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: authored_terrain_and_position_can_make_the_oversized_claw_more_or_less_dangerous
  canon_boundary_note: no_global_ancient_bonus_player_level_scaling_or_automatic_boss_status
ancient_ecology:
  habitat: [coastal_shorelines, sandy_or_rocky_littoral_zones, estuarine_edges_when_project_geography_supports_them]
  ecological_niche: [large_littoral_forager_or_competitor, armored_shoreline_threat]
  activity_pattern: [foraging, resting, signaling, territorial_or_defensive_posturing_when_context_requires]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_and_resource_pressure_are_local_authoring_inputs]
  social_structure: [mostly_unknown, claw_waving_supports_species_specific_social_signaling_without_known_language]
  predator_prey_competitor_links: [Krabby_and_other_shoreline_competitors_are_contextual_not_mandatory]
  environmental_effects: [large_tracks, disturbed_shore_material, localized_crushed_or_shifted_objects_only_when_material_is_authored_as_suitable]
  observable_signs: [deep_lateral_tracks, large_pincer_marks, shell_scrapes, claw_waving_at_distance]
  locality_constraints: [coastal_fit_does_not_mean_every_beach_contains_Kingler, direct_encounterability_does_not_mean_commonness]
  unsupported_gaps: [exact_proto_kanto_abundance, exact_swim_endurance, exact_pincer_force_in_physical_units, exact_material_break_thresholds, exact_claw_signal_vocabulary, exact_fatigue_recovery]
human_perception_and_culture:
  ordinary_attitude: [strong_caution_around_the_oversized_claw]
  specialist_knowledge_holders: [coastal_guides, fishers, hunters, healers_familiar_with_crush_injuries]
  benefits_and_services: [none_required]
  fears_and_avoidance: [severe_crush_injury, being_cornered_against_rock_or_burrow, unpredictable_heavy_claw_commitment]
  myths_omens_taboos: [local_stories_may_turn_extreme_force_wording_into_claims_that_Kingler_can_break_anything]
  practical_customs: [stay_outside_the_large_claw_arc, watch_for_heavy_lift_and_balance_loss, use_open_space_and_escape_routes]
  common_misbeliefs: [10000_horsepower_is_literal_damage_math, shell_means_invulnerable, strong_claw_means_perfect_aim, every_Kingler_is_aggressive]
  local_variation_notes: [no_region_wide_mining_construction_or_power_infrastructure_is_created_from_Kingler_strength]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_heavy_armored_shore_species_raises_one_grossly_oversized_claw_but_struggles_to_reposition_it]
  local_aliases_or_titles: none
  identification_evidence: [large_crablike_body, highly_asymmetric_oversized_claw, heavy_lateral_or_shoreline_repositioning]
  initial_knowledge_fragments: [extremely_dangerous_in_claw_range, heavy_claw_is_not_easy_to_move]
  post_identification_knowledge: [aim_balance_and_fatigue_are_real_counterweights, high_force_is_not_universal_destruction_permission]
  advanced_insights: [forcing_a_fast_lift_or_bad_angle_can_create_a_readable_overextension_window]
  exceptional_individual_knowledge_hooks: [a_scarred_Kingler_with_a_chipped_oversized_claw_has_crushed_boat_timbers_only_at_one_known_tidal_choke_point]
threat_and_encounter:
  baseline_threat_band: moderate_to_high_when_close_contact_is_possible_lower_when_space_allows_avoidance
  default_behavior_states: [foraging, resting, signaling, warning, claw_ready, committed_crush, overextended, fatigued, retreating]
  aggression_tendency: contextual_defensive_or_competitive_not_inferred_from_force_rating
  territoriality: moderate_or_local_when_food_space_or_rest_site_is_contested
  avoidance_tendency: moderate_when_not_cornered_or_committed
  warning_signs: [claw_raise, signal_wave, body_alignment, heavy_bracing, shell_scrape]
  encounter_triggers: [entering_close_claw_range, disturbing_rest_or_food_site, blocking_escape, attacking]
  escalation_triggers: [cornering, grabbing, repeated_pressure, entering_a_confined_choke_point]
  deescalation_conditions: [create_distance, stop_contesting_space, leave_retreat_lane, disengage_after_warning]
  pursuit_profile: short_or_contextual_not_infinite_and_limited_by_heavy_claw_handling
  group_size_effects: [each_Kingler_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [severe_crush_injury, laceration, restraint_pressure, position_loss]
  consequence_ceiling: severe_with_life_threatening_outcomes_reserved_for_explicit_eligibility_and_exceptional_or_constrained_context
  human_check_hooks:
  - action: pass_a_Kingler_controlled_choke_point_without_entering_the_oversized_claw_arc
    relevant_species_axis: speed
    relevant_tags: [heavy_claw, aim_difficulty, overextension]
    relevant_hazard_keys: [kingler-severe-pincer-crush]
    difficulty_guidance: D024_context_from_distance_cover_escape_space_claw_state_and_warning
    notes: exposure_difficulty_and_post_exposure_consequence_remain_separate
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, territorial, food_focused, calm_signal_user]
    condition_variants: [rested, overextended, fatigued, injured, off_balance]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [unusual_size, persistent_territory, repeated_survival, unusually_hard_or_large_pincer, learned_positioning]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_claw_shape_or_damage, scars, known_territory_or_history]
    warning_or_rumor_hooks: [one_old_Kingler_has_held_a_narrow_tidal_crossing_for_years_and_is_known_by_a_split_shell]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, safe_space_for_oversized_claw, appropriate_food, noncoercive_handling]
  trust_building_paths: [repeat_calm_contact, feeding_without_forced_capture, respecting_signal_and_escape_space, avoiding_strength_exploitation]
  reasons_to_stay: [bond, reliable_food, safe_resting_area, familiar_coastal_route]
  rejection_or_departure_reasons: [forced_labor, deliberate_overexertion, pincer_harvest_attempts, coercive_combat, confined_transport]
  human_social_costs: [fear_of_crush_injury_and_space_requirements_in_dense_settlements]
  logistics:
    food: [species_appropriate_food_or_equivalent]
    water: [ordinary_access_and_species_appropriate_coastal_conditions]
    shelter_temperature: [secure_resting_ground_with_room_for_oversized_claw]
    space_travel: [large_clearance_and_route_planning_without_treating_the_Pokemon_as_inventory]
    settlement_restrictions: [avoid_crowded_passages_fragile_storage_and_uncontrolled_close_contact]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_heavy_gripping_or_object_movement_when_target_suitability_and_voluntary_effort_are_authored]
  handling_boundaries: [no_defeat_to_recruit, no_forced_mining_construction_or_crushing_labor, no_extra_claw_action, one_visible_companion_slot]
  separation_injury_notes: [heavy_claw_fatigue_or_injury_requires_rest_and_care_as_authored_state_not_a_stamina_meter]
mechanical_hooks:
  tracking_clues: [deep_lateral_tracks, oversized_pincer_marks, shell_scrapes, disturbed_shore_material]
  avoidance_preparation: [use_open_space, identify_large_claw_side, preserve_escape_lane, avoid_fragile_choke_points]
  resistance_or_protection: [distance, heavy_cover_when_credible, positioning_that_denies_clean_claw_contact]
  combat_approach_permissions: [claw_ready, committed_crush, off_balance, overextended, fatigued]
  blocked_or_invalid_approaches: [literal_horsepower_damage_math, generic_mining, arbitrary_material_or_armor_deletion, automatic_hit, guaranteed_restraint, continuous_stamina_or_torque_simulation, extra_appendage_actions]
  fear_hooks: [a_single_claw_rises_above_the_shoreline_cover_and_the_body_visibly_braces_under_its_weight]
  injury_hazard_hooks: [kingler-severe-pincer-crush]
  environmental_state_hooks: [open_shore, narrow_choke_point, stable_bracing_ground, unstable_footing]
  companion_assistance_hooks: [voluntary_heavy_grip_or_shift_on_authored_suitable_targets]
  fortune_spike_opportunities: [the_Kingler_lifts_too_fast_staggers_and_opens_a_safe_escape_window]
  trouble_spike_complications: [the_route_narrows_where_the_oversized_claw_can_brace_against_rock]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [shell_or_pincer_fragment_only_when_an_authored_event_produces_it_not_as_guaranteed_drop]
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [live_pincer_breaking_or_strength_exploitation_is_not_a_repeatable_default_resource_loop]
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
  scalability_limits: [extreme_pincer_strength_does_not_create_mining_construction_power_or_weapon_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: [crush_or_laceration_recovery_concept_may_be_authored_in_P5_under_existing_hazard_item_contract]
narrative_and_event_hooks:
  peaceful: [observe_two_Kingler_exchange_claw_signals_from_outside_contact_range]
  dangerous: [cross_a_tidal_choke_point_where_a_Kingler_can_brace_its_oversized_claw_against_rock]
  unusual_or_rare: [meet_a_boss_grade_exceptional_Kingler_known_for_one_persistent_territory_and_distinctive_split_shell]
  discovery_insight: [learn_that_forcing_bad_angle_or_fast_lift_can_turn_extreme_force_into_an_overextension_window]
  route_environment: [rocky_shore, tidal_channel, estuary_edge]
  settlement_culture: [coastal_guides_teach_travelers_to_read_claw_side_and_signal_posture_before_crossing]
  cross_species: [Krabby_and_Kingler_may_share_shoreline_pressure_without_forming_a_generic_crab_faction]
presentation_and_p6_followups:
  initial_bestiary_presentation: armored_coastal_species_defined_by_one_extremely_powerful_but_unwieldy_oversized_claw
  progressive_reveal_notes: [show_force_through_authored_consequence_not_numeric_damage, reveal_aim_balance_and_fatigue_counterweights_through_observation]
  species_specific_visual_needs: [clear_large_claw_side, bracing, off_balance_stagger, overextension_or_fatigue_readability]
  species_specific_audio_needs: [heavy_shell_steps, claw_snap, bracing_scrape, signal_clicks]
  special_ui_or_readability_needs: [coarse_claw_state_if_scene_relevant_not_stamina_or_torque_bars]
  p6_followup_required: true
cross_species_links:
  evolution_family: [krabby, kingler]
  predator_prey: []
  competition: [local_shoreline_foragers_when_authored]
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [krabby]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_pincer_force_in_physical_units, exact_aim_penalty, exact_fatigue_duration_or_recovery, exact_material_break_thresholds, exact_claw_signal_vocabulary]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_crush_injury_or_recovery_item_design_if_needed]
  deferred_to_p6: [large_claw_side_signal_overextension_and_fatigue_readability]
  deferred_to_p7: []
```
