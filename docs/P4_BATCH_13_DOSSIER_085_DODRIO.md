# P4 Batch 13 — #085 Dodrio Full-Schema Dossier

Part of `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md`.

---

## #085 Dodrio / 두트리오

```yaml
identity:
  national_dex: 85
  species_key: dodrio
  official_name_en: Dodrio
  official_name_ko: 두트리오
  evolution_family_keys: [doduo, dodrio]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-DODRIO-SG]
  official_evidence:
    - claim_id: DDR-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DODRIO-SG
      version_context: current_official_portal
      paraphrase: three_hearts_and_three_sets_of_lungs_support_longer_sustained_running_than_Doduo
    - claim_id: DDR-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DODRIO-SG
      version_context: current_official_portal
      paraphrase: Dodrio_cannot_run_as_fast_as_Doduo_but_can_run_for_longer_stretches
    - claim_id: DDR-C1-003
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DODRIO-SG
      version_context: current_official_portal
      paraphrase: strongest_head_becomes_leader_and_gains_primary_control_of_the_body
    - claim_id: DDR-C1-004
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DODRIO-SG
      version_context: historical_version_tagged
      paraphrase: three_brains_can_support_complex_planning_and_one_head_can_remain_awake_while_two_sleep
  derived_claims:
    - claim_id: DDR-D1-001
      evidence_class: D1
      based_on: [DDR-C1-001, DDR-C1-002]
      statement: redundant_organs_support_endurance_not_multiple_health_entities
      canon_boundary_note: no_three_lives_three_HP_pools_or_automatic_survival_from_lethal_injury
    - claim_id: DDR-D1-002
      evidence_class: D1
      based_on: [DDR-C1-003, DDR-C1-004]
      statement: three_heads_support_internal_leadership_planning_and_guard_state_with_one_Pokemon_entity
      canon_boundary_note: no_extra_turns_three_independent_characters_or_arbitrary_player_control_loss
    - claim_id: DDR-D1-003
      evidence_class: D1
      based_on: [DDR-C1-002]
      statement: normalized_Speed_5_remains_battle_quickness_and_does_not_override_source_text_that_Doduo_runs_faster
      canon_boundary_note: no_literal_ground_speed_formula_from_six_axis_rating
canonical_source_data:
  types: [normal, flying]
  base_stats_raw: {hp: 60, attack: 110, defense: 70, special_attack: 60, special_defense: 60, speed: 110}
  abilities_relevant_to_p4: [run_away_as_modern_context, early_bird_as_modern_context, tangled_feet_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.8_m, weight: 85.2_kg}
  evolution_source:
    evolves_from: doduo
    evolves_to: []
    canonical_conditions: [modern_level_31_metadata_is_source_context_only]
  other_material_facts: [three_heads, three_hearts, three_lung_sets, endurance_running, head_leadership, complex_planning, lookout_rotation]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 5
  guard: 3
  potency: 3
  resistance: 3
  speed: 5
  derivation_notes: {vigor: hp_60, force: attack_110, guard: defense_70, potency: special_attack_60, resistance: special_defense_60, speed: speed_110}
  calibration_flags: [no_manual_exception, Speed_not_literal_ground_velocity, Dodrio_Speed_5_not_a_claim_that_it_outruns_Doduo, multi_head_and_multi_organ_not_entity_multipliers]
capabilities_and_hazards:
  locomotion: [powerful_terrestrial_running, endurance_oriented_long_duration_running, poor_or_limited_flight_not_inferred_beyond_source_family_context]
  physical_hazards: [heavy_kick, high_speed_body_impact, multi_direction_head_strike_or_peck]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [strongest_head_leadership, complex_multi_brain_planning, lookout_rotation, possible_overthinking_or_head_squabbling_as_version_scoped_behavior]
  utility_interaction_capabilities: [long_ground_endurance_and_guard_behavior_only_when_event_valid]
  immunities_or_approach_invalidators: [one_head_guard_state_may_reduce_simple_surprise_but_does_not_create_perfect_awareness]
  hazard_records:
    - hazard_key: dodrio-endurance-charge-and-head-control
      kind: physical_and_coordination
      delivery_or_exposure: [long_ground_pursuit, heavy_kick, body_impact, multi_direction_peck]
      prerequisite_or_trigger: [panic_or_hostility, blocked_route, direct_attack, territory_or_rest_site_pressure_if_authored]
      warning_signs: [leader_head_focus, coordinated_body_turn, heavy_footbeats, heads_scanning_different_directions]
      immediate_effects: [critical_collision_or_kick_pressure, forced_route_change, difficult_disengagement_on_open_ground]
      delayed_or_persistent_effects: [continued_pursuit_only_while_scene_conditions_and_endurance_state_support_it]
      ordinary_consequence_ceiling: critical
      exceptional_consequence_ceiling: critical_or_fatal_only_under_D020_context_not_automatic
      countermeasures: [hard_lateral_cover, broken_terrain, avoid_long_open_chase_lane, exploit_route_obstacles_not_head_count]
      emergency_consumable_hooks: []
      context_amplifiers: [long_open_track, poor_side_cover, repeated_pursuit, blocked_escape]
      context_mitigators: [broken_terrain, narrow_obstacles_that_reduce_full_stride, hard_side_cover, deescalation]
      governing_species_axes: [force, speed, vigor]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [DDR-C1-001, DDR-C1-002, DDR-C1-003, DDR-C1-004, DDR-D1-001, DDR-D1-002, DDR-D1-003]
  notes: [one_entity_one_turn_one_HP_pool, three_hearts_and_lungs_are_not_extra_lives, strongest_head_does_not_authorize_arbitrary_player_control_override]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: large_endurance_runner_with_complex_internal_coordination_is_severe_in_a_low_technology_world_without_a_global_ancient_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: sustained_ground_pressure_and_guard_state_can_raise_encounter_difficulty
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [exact_ancient_range_unknown, broad_plain_dry_grassland_or_long_ground_corridor_only_when_locally_authored_D2]
  ecological_niche: [large_endurance_oriented_three_headed_runner]
  activity_pattern: [one_head_can_guard_while_two_sleep_in_version_scoped_evidence]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [internal_head_leadership_is_source_backed_but_group_structure_unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [heavy_tracks, long_pursuit_lines, disturbed_ground, multi_direction_scan]
  observable_signs: [large_three_toed_tracks, long_stride, repeated_head_scan, heavily_disturbed_open_route]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_top_speed, exact_endurance_distance, flight_capability, organ_injury_function, ancient_distribution]
human_perception_and_culture:
  ordinary_attitude: [formidable_large_runner_that_can_keep_pressure_on_open_routes]
  specialist_knowledge_holders: [trackers, hunters, caravaners, open_country_guides]
  benefits_and_services: [none_required]
  fears_and_avoidance: [heavy_kick, prolonged_pursuit, difficult_flanking_due_to_multiple_head_attention]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [avoid_long_open_chase_lane, use_broken_ground_and_lateral_cover, watch_leader_head_before_committing]
  common_misbeliefs: [three_heads_mean_three_turns, three_hearts_mean_three_lives, Speed_5_means_faster_ground_speed_than_Doduo]
  local_variation_notes: [head_leadership_or_squabbling_can_vary_by_individual_without_three_character_UI]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [three_heads_with_one_dominant_leader_posture, heavy_long_stride]
  local_aliases_or_titles: none
  identification_evidence: [three_heads, large_body, heavy_stride, leader_head_control]
  initial_knowledge_fragments: [endurance_running, one_head_may_lead_body_control]
  post_identification_knowledge: [its_battle_Speed_rating_does_not_claim_it_outruns_Doduo]
  advanced_insights: [multiple_organs_and_brains_change_behavior_and_endurance_not_entity_resource_count]
  exceptional_individual_knowledge_hooks: [old_Dodrio_whose_leader_head_has_a_distinct_scar_and_known_overthinking_pattern]
threat_and_encounter:
  baseline_threat_band: high_to_very_high_for_ordinary_humans
  default_behavior_states: [foraging_unknown, scanning, resting_with_guard_head, traveling, pursuing, defensive, internally_discordant]
  aggression_tendency: contextual
  territoriality: unknown_or_locally_authored
  avoidance_tendency: moderate
  warning_signs: [leader_head_focus, heavy_footbeats, body_alignment, discordant_head_calls]
  encounter_triggers: [blocked_route, cornering, direct_attack, rest_or_nest_pressure_if_authored]
  escalation_triggers: [continued_attack, forced_confinement, prolonged_chase]
  deescalation_conditions: [leave_route, break_line_with_terrain, stop_pursuit_or_threat]
  pursuit_profile: long_ground_endurance_but_not_infinite_and_not_derived_from_Speed_rating
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [critical_kick_or_collision, prolonged_route_denial, forced_exhausting_detour]
  consequence_ceiling: critical_with_fatality_possible_only_under_serious_D020_context
  human_check_hooks:
    - action: reach_broken_ground_before_a_Dodrio_turns_an_open_route_into_a_long_pursuit
      relevant_species_axis: speed
      relevant_tags: [endurance_oriented_long_duration_running, strongest_head_leadership]
      relevant_hazard_keys: [dodrio-endurance-charge-and-head-control]
      difficulty_guidance: D024_context_from_route_length_cover_obstacles_warning_state_and_current_condition
      notes: Speed_5_is_battle_quickness_not_literal_top_ground_speed
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [disciplined, argumentative, watchful, overthinking]
    condition_variants: [traveling, resting_with_guard, exhausted, injured, head_discordant]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [age, survival_history, specialized_open_route, unusual_head_hierarchy]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [leader_head_marking_behavior_route_or_reputation]
    warning_or_rumor_hooks: [old_Dodrio_whose_leader_head_has_a_distinct_scar_and_known_overthinking_pattern]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_persistent_trust, large_ground_route_and_rest_space, acceptance_of_internal_head_state, no_forced_containment]
  trust_building_paths: [long_term_noncoercive_contact, injury_recovery, reliable_resources]
  reasons_to_stay: [deep_bond, familiar_people_or_route]
  rejection_or_departure_reasons: [forced_restraint, coercive_mount_use, chronic_confinement]
  human_social_costs: [large_body, difficult_dense_settlement_handling, substantial_food_and_space_burden]
  logistics:
    food: [substantial_species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [large_safe_rest_site]
    space_travel: [long_ground_route_and_turning_space_required]
    settlement_restrictions: [dense_streets_may_be_unsafe]
    special_resources: [none_fixed]
  assistance_capabilities: [long_ground_travel_or_guard_behavior_only_if_voluntary_and_later_rules_allow]
  handling_boundaries: [no_defeat_to_recruit, no_forced_mount, no_endurance_formula_from_stats, one_visible_companion_slot]
  separation_injury_notes: [bonded_Dodrio_remains_one_independent_Pokemon_entity_with_one_health_state]
mechanical_hooks:
  tracking_clues: [large_tracks, long_stride, repeated_scan, leader_head_behavior]
  avoidance_preparation: [identify_broken_ground, avoid_open_chase_lane, keep_lateral_cover]
  resistance_or_protection: [hard_side_cover, obstacles, route_break]
  combat_approach_permissions: [named_exceptional_individual_may_use_explicit_profile_not_scaling]
  blocked_or_invalid_approaches: [add_turns_for_heads, add_HP_pools_for_organs, infer_three_lives, convert_Speed_to_top_ground_velocity]
  fear_hooks: [the_leader_head_turns_and_the_other_two_align_before_the_body_commits_to_a_long_chase]
  injury_hazard_hooks: [kick, collision, trampling_pressure]
  environmental_state_hooks: [open_route_length, side_cover, broken_ground]
  companion_assistance_hooks: [guard_or_ground_travel_if_event_valid]
  fortune_spike_opportunities: [broken_rocky_ground_disrupts_full_stride]
  trouble_spike_complications: [long_flat_corridor_allows_endurance_pressure_to_compound]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_redundant_organs_are_not_extra_resource_drops
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
  scalability_limits: [endurance_running_does_not_create_mount_transport_infrastructure_or_breeding_institution]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_head_leadership_and_guard_rotation_from_safe_distance]
  dangerous: [open_route_turns_into_a_long_ground_pursuit]
  unusual_or_rare: [one_exceptional_Dodrio_has_a_persistent_leader_head_scar_and_overthinking_pattern]
  discovery_insight: [three_heads_organs_and_brains_do_not_multiply_active_entity_resources]
  route_environment: [open_distance_and_broken_ground_define_counterplay]
  settlement_culture: [guides_warn_that_Dodrio_can_outlast_a_fleeing_person_even_when_Doduo_may_have_the_higher_top_running_speed]
  cross_species: [current_source_text_preserves_Doduo_faster_top_run_vs_Dodrio_longer_endurance_without_stat_exception]
presentation_and_p6_followups:
  initial_bestiary_presentation: large_endurance_runner_with_three_head_leadership_and_one_entity_control
  progressive_reveal_notes: [show_head_roles_without_three_character_UI]
  species_specific_visual_needs: [leader_head_posture, guard_rotation, synchronized_long_stride]
  species_specific_audio_needs: [three_head_call_layering, heavy_footbeats]
  special_ui_or_readability_needs: [one_entity_one_turn_one_health_state, no_three_lives_icon]
  p6_followup_required: true
cross_species_links:
  evolution_family: [doduo]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_top_speed, exact_endurance_distance, flight_capability, organ_injury_function, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [long_pursuit_head_leadership_and_guard_event_state]
  deferred_to_p6: [multi_head_and_leader_readability_without_multi_entity_UI]
  deferred_to_p7: [runtime_multi_head_state_if_required]
```
