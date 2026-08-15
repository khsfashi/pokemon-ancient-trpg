# P4 Batch 13 — #084 Doduo Full-Schema Dossier

Part of `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md`.

---

## #084 Doduo / 두두

```yaml
identity:
  national_dex: 84
  species_key: doduo
  official_name_en: Doduo
  official_name_ko: 두두
  evolution_family_keys: [doduo, dodrio]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-DODUO-SG]
  official_evidence:
    - claim_id: DDU-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DODUO-SG
      version_context: current_official_portal
      paraphrase: two_heads_share_genetic_identity_and_act_in_close_synchronization
    - claim_id: DDU-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DODUO-SG
      version_context: current_official_portal
      paraphrase: the_heads_alternate_sleep_so_one_can_remain_as_lookout
    - claim_id: DDU-C1-003
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DODUO-SG
      version_context: historical_version_tagged
      paraphrase: flight_is_poor_or_difficult_while_fast_ground_running_is_emphasized
    - claim_id: DDU-C1-004
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DODUO-SG
      version_context: historical_version_tagged
      paraphrase: rare_brain_variation_and_between_head_emotional_telepathy_are_described
  derived_claims:
    - claim_id: DDU-D1-001
      evidence_class: D1
      based_on: [DDU-C1-001, DDU-C1-002]
      statement: two_heads_are_internal_coordination_and_lookout_state_with_one_Pokemon_entity
      canon_boundary_note: no_extra_turns_initiative_slots_HP_pools_or_companion_slots
    - claim_id: DDU-D1-002
      evidence_class: D1
      based_on: [DDU-C1-003]
      statement: ground_running_is_the_primary_traversal_capability
      canon_boundary_note: Flying_type_does_not_grant_sustained_flight_and_Speed_rating_is_not_mph
    - claim_id: DDU-D1-003
      evidence_class: D1
      based_on: [DDU-C1-004]
      statement: telepathy_is_between_heads_and_species_local
      canon_boundary_note: not_external_mind_reading_truth_detection_Psychic_typing_or_generic_psychic_rules
canonical_source_data:
  types: [normal, flying]
  base_stats_raw: {hp: 35, attack: 85, defense: 45, special_attack: 35, special_defense: 35, speed: 75}
  abilities_relevant_to_p4: [run_away_as_modern_context, early_bird_as_modern_context, tangled_feet_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.4_m, weight: 39.2_kg}
  evolution_source:
    evolves_from: null
    evolves_to: [dodrio]
    canonical_conditions: [modern_level_31_metadata_is_source_context_only]
  other_material_facts: [two_heads, synchronized_behavior, alternating_sleep_watch, poor_flight, fast_ground_running, internal_emotional_telepathy]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 4
  guard: 2
  potency: 1
  resistance: 1
  speed: 3
  derivation_notes: {vigor: hp_35, force: attack_85, guard: defense_45, potency: special_attack_35, resistance: special_defense_35, speed: speed_75}
  calibration_flags: [no_manual_exception, Speed_not_literal_running_velocity, Flying_type_not_sustained_flight_permission, multi_head_not_action_multiplier]
capabilities_and_hazards:
  locomotion: [very_fast_terrestrial_running, poor_or_difficult_flight, rapid_balance_through_head_and_body_coordination]
  physical_hazards: [high_speed_body_impact, pecking_or_kicking, trampling_or_collision_in_confined_route]
  elemental_environmental_hazards: []
  anomalous_hazards: [between_head_emotional_telepathy_only]
  behavioral_capabilities: [head_synchronization, alternating_sleep_watch, one_body_multi_head_coordination]
  utility_interaction_capabilities: [lookout_rotation_can_reduce_ordinary_surprise_only_when_state_is_authored]
  immunities_or_approach_invalidators: [some_simple_approaches_may_be_harder_against_an_active_lookout_but_never_impossible]
  hazard_records:
    - hazard_key: doduo-running-and-lookout-pressure
      kind: physical_and_awareness
      delivery_or_exposure: [rapid_ground_charge, kick_or_peck, abrupt_route_crossing]
      prerequisite_or_trigger: [panic_escape, territory_or_nest_pressure_if_authored, direct_attack]
      warning_signs: [alternating_head_focus, foot_drumming, body_alignment, sudden_acceleration]
      immediate_effects: [serious_collision_or_kick_pressure, route_block_or_forced_repositioning]
      delayed_or_persistent_effects: [none_automatic_follow_P3]
      ordinary_consequence_ceiling: serious
      exceptional_consequence_ceiling: critical_or_fatal_only_under_D020_context_not_automatic
      countermeasures: [avoid_open_charge_lane, use_hard_lateral_cover, do_not_assume_both_heads_are_asleep]
      emergency_consumable_hooks: []
      context_amplifiers: [narrow_track, poor_side_cover, panic, ignored_warning]
      context_mitigators: [wide_escape_space, hard_side_cover, calm_nonthreatening_approach]
      governing_species_axes: [speed, force]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [DDU-C1-001, DDU-C1-002, DDU-C1-003, DDU-D1-001, DDU-D1-002]
  notes: [one_entity_one_turn_one_HP_pool, alternating_watch_is_not_perfect_awareness, Run_Away_is_not_guaranteed_escape]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: fast_ground_running_and_lookout_rotation_raise_route_and_camp_pressure_in_a_low_technology_world
  stat_effect_if_any: none
  behavior_effect_if_any: fast_terrestrial_escape_or_charge_and_observation_state
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [exact_ancient_range_unknown, open_grassland_dry_plain_or_broad_route_only_when_locally_authored_D2]
  ecological_niche: [fast_terrestrial_two_headed_runner]
  activity_pattern: [alternating_sleep_watch_can_support_rest_with_one_head_alert]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [exact_group_structure_unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [paired_head_tracks_or_sign, heavy_running_tracks, dust_line, lookout_behavior]
  observable_signs: [long_running_tracks, repeated_two_direction_head_scan, disturbed_dry_ground]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_top_speed_context, flight_ceiling, sleep_rotation_limits, ancient_distribution]
human_perception_and_culture:
  ordinary_attitude: [dangerous_fast_runner_more_like_a_large_wild_animal_than_a_flying_mount]
  specialist_knowledge_holders: [trackers, hunters, caravaners]
  benefits_and_services: [none_required]
  fears_and_avoidance: [charge_collision, kick, failed_stealth_due_to_active_lookout]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [approach_from_good_side_cover, leave_runout_space, verify_which_head_is_alert]
  common_misbeliefs: [two_heads_mean_two_turns, Flying_type_means_sustained_flight, telepathy_means_human_mind_reading]
  local_variation_notes: [rare_different_brain_sets_can_be_individual_variation_without_two_character_control]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [two_heads_scanning_different_directions, sudden_ground_sprint]
  local_aliases_or_titles: none
  identification_evidence: [two_heads, long_legs, running_tracks, alternating_attention]
  initial_knowledge_fragments: [fast_ground_runner, one_head_may_watch_while_the_other_rests]
  post_identification_knowledge: [poor_flight_is_compatible_with_Flying_typing]
  advanced_insights: [between_head_telepathy_is_internal_not_external]
  exceptional_individual_knowledge_hooks: [rare_Doduo_with_unusually_different_head_temperaments_and_explicit_history]
threat_and_encounter:
  baseline_threat_band: moderate_to_high_for_ordinary_humans
  default_behavior_states: [grazing_or_foraging_unknown, scanning, resting_with_one_head_alert, running, panicked, defensive]
  aggression_tendency: contextual
  territoriality: unknown_or_locally_authored
  avoidance_tendency: high_when_escape_route_exists
  warning_signs: [foot_drumming, head_alignment, rapid_direction_change, repeated_scan]
  encounter_triggers: [blocking_run_route, cornering, direct_attack, rest_site_intrusion_if_authored]
  escalation_triggers: [continued_blocking_or_attack]
  deescalation_conditions: [open_escape_route, stop_pursuit, increase_distance]
  pursuit_profile: strong_ground_mobility_not_generic_aerial_pursuit
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [collision, kick_or_peck_injury, route_disruption]
  consequence_ceiling: serious_with_critical_possible_in_compound_or_exceptional_context
  human_check_hooks:
    - action: clear_a_narrow_track_before_a_panicked_Doduo_accelerates_through_it
      relevant_species_axis: speed
      relevant_tags: [very_fast_terrestrial_running, head_synchronization]
      relevant_hazard_keys: [doduo-running-and-lookout-pressure]
      difficulty_guidance: D024_context_from_distance_side_cover_route_width_and_behavior_state
      notes: Speed_3_is_not_a_literal_mph_conversion
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, nervous, coordinated, occasionally_head_discordant]
    condition_variants: [resting, one_head_alert, running, exhausted, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [rare_brain_difference, age, survival_history, specialized_terrain]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_head_behavior_marking_route_or_reputation]
    warning_or_rumor_hooks: [rare_Doduo_whose_heads_show_unusually_distinct_planning_roles]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [rare_voluntary_trust, wide_ground_route_and_rest_space, no_forced_containment]
  trust_building_paths: [long_term_noncoercive_contact, injury_recovery, reliable_resources]
  reasons_to_stay: [deep_bond, familiar_people_or_route]
  rejection_or_departure_reasons: [forced_restraint, blocked_running, coercive_mount_use]
  human_social_costs: [space_requirement, collision_risk, difficult_dense_settlement_handling]
  logistics:
    food: [species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [safe_rest_site]
    space_travel: [wide_terrestrial_routes_preferred]
    settlement_restrictions: [dense_streets_may_be_unsafe]
    special_resources: [none_fixed]
  assistance_capabilities: [lookout_or_fast_ground_movement_only_when_voluntary_and_later_rules_allow]
  handling_boundaries: [no_defeat_to_recruit, no_forced_mount, no_speed_based_transport_formula, one_visible_companion_slot]
  separation_injury_notes: [bonded_Doduo_remains_one_independent_Pokemon_entity]
mechanical_hooks:
  tracking_clues: [long_running_tracks, dust_line, alternating_scan_sign]
  avoidance_preparation: [leave_runout_space, use_side_cover, avoid_cornering]
  resistance_or_protection: [hard_side_cover, distance]
  combat_approach_permissions: [named_exceptional_individual_may_use_explicit_profile_not_scaling]
  blocked_or_invalid_approaches: [add_extra_turn_for_second_head, create_two_HP_pools, infer_external_telepathy, grant_sustained_flight_from_type]
  fear_hooks: [one_head_opens_its_eyes_while_the_other_never_stops_sleeping]
  injury_hazard_hooks: [collision, kick, peck]
  environmental_state_hooks: [route_width, side_cover, escape_lane]
  companion_assistance_hooks: [lookout_or_ground_mobility_if_event_valid]
  fortune_spike_opportunities: [wide_side_space_allows_safe_pass]
  trouble_spike_complications: [narrow_route_turns_escape_into_a_charge_lane]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none_fixed
  shed_or_abandoned_materials: [none_fixed]
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
  scalability_limits: [fast_running_does_not_create_transport_infrastructure_or_mount_culture]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_alternating_sleep_watch_without_assuming_perfect_awareness]
  dangerous: [narrow_route_becomes_a_charge_lane_during_panicked_escape]
  unusual_or_rare: [rare_different_brain_sets_create_distinctive_head_roles_without_extra_actions]
  discovery_insight: [Flying_type_does_not_override_poor_flight_and_two_heads_do_not_multiply_entity_resources]
  route_environment: [ground_width_and_escape_lanes_define_counterplay]
  settlement_culture: [trackers_distinguish_Doduo_sprints_from_flying_bird_passage]
  cross_species: [Dodrio_three_head_control_is_not_two_more_turns_and_Dodrio_endurance_does_not_retroactively_change_Doduo]
presentation_and_p6_followups:
  initial_bestiary_presentation: fast_ground_runner_with_two_head_coordination_and_poor_flight
  progressive_reveal_notes: [show_one_entity_with_internal_head_state]
  species_specific_visual_needs: [two_head_scan, alternating_sleep, ground_sprint_balance]
  species_specific_audio_needs: [paired_calls, heavy_footbeats]
  special_ui_or_readability_needs: [one_entity_marker, no_two_turn_or_two_HP_UI]
  p6_followup_required: true
cross_species_links:
  evolution_family: [dodrio]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_top_speed_context, flight_ceiling, sleep_rotation_limits, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [lookout_and_ground_charge_event_state]
  deferred_to_p6: [multi_head_readability_without_multi_entity_UI]
  deferred_to_p7: [runtime_multi_head_state_if_required]
```
