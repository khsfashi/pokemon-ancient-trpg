# P4 Batch 11 — #068 Machamp Full-Schema Dossier

Part of `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md`.

---

## #068 Machamp / 괴력몬

```yaml
identity:
  national_dex: 68
  species_key: machamp
  official_name_en: Machamp
  official_name_ko: 괴력몬
  evolution_family_keys: [machop, machoke, machamp]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-MACHAMP-SG]
  official_evidence:
    - claim_id: MCP-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-MACHAMP-SG
      version_context: current_official_portal
      paraphrase: Machamp_has_four_arms_and_can_launch_punches_and_chops_from_multiple_angles
    - claim_id: MCP-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-MACHAMP-SG
      version_context: current_official_portal
      paraphrase: Machamp_arms_are_described_as_reacting_faster_than_conscious_thought_and_delivering_extremely_high_close_range_strike_cadence
  derived_claims:
    - claim_id: MCP-D1-001
      evidence_class: D1
      based_on: [MCP-C1-001, MCP-C1-002]
      statement: four_arms_and_extreme_strike_cadence_create_close_range_multi_angle_pressure
      canon_boundary_note: four_arms_do_not_equal_four_turns_or_four_standard_actions_and_high_strike_count_does_not_equal_hundreds_or_thousands_of_attack_rolls
    - claim_id: MCP-D1-002
      evidence_class: D1
      based_on: [MCP-C1-002]
      statement: local_arm_reaction_and_strike_cadence_are_capabilities_not_a_contradiction_with_normalized_Speed_2
      canon_boundary_note: six_axis_Speed_is_not_literal_animation_frequency_reaction_count_or_action_economy
canonical_source_data:
  types: [fighting]
  base_stats_raw: {hp: 90, attack: 130, defense: 80, special_attack: 65, special_defense: 85, speed: 55}
  abilities_relevant_to_p4: [guts_as_modern_context, no_guard_as_modern_context, steadfast_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.6_m, weight: 130.0_kg}
  evolution_source:
    evolves_from: machoke
    evolves_to: []
    canonical_conditions: [modern_trade_evolution_is_source_context_not_an_ancient_trade_requirement_or_generic_evolution_menu]
  other_material_facts: [four_arms, multi_angle_punches_and_chops, very_fast_arm_reactions, extreme_close_range_strike_cadence]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 6
  guard: 4
  potency: 3
  resistance: 4
  speed: 2
  derivation_notes: {vigor: hp_90, force: attack_130, guard: defense_80, potency: special_attack_65, resistance: special_defense_85, speed: speed_55}
  calibration_flags: [no_manual_exception, four_arms_not_extra_turns, strike_cadence_not_Speed_formula, close_range_pressure_not_roll_count]
capabilities_and_hazards:
  locomotion: [terrestrial_movement]
  physical_hazards: [four_arm_grapple, multi_angle_striking, close_range_guard_breaking_pressure, heavy_throw_or_crush_if_scene_supports]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [rapid_multi_angle_arm_reactions, overwhelming_close_range_attack_cadence]
  utility_interaction_capabilities: [multi_arm_manipulation_only_when_authored_and_never_as_free_action_count]
  immunities_or_approach_invalidators: [ordinary_single_angle_close_guard_can_be_inadequate_against_multi_angle_pressure]
  hazard_records:
    - hazard_key: machamp-multi-angle-close-pressure
      kind: other
      delivery_or_exposure: [close_range_multi_arm_striking_grappling_or_guard_breaking_pressure]
      prerequisite_or_trigger: [target_remains_within_effective_close_range_of_hostile_Machamp]
      warning_signs: [four_arm_attack_posture, route_cutoff, rapid_arm_motion, attempted_encirclement_or_grapple]
      immediate_effects: [guard_overload, impact, grapple, position_loss, forced_retreat]
      delayed_or_persistent_effects: [fracture_crush_or_other_P3_injury_if_effective_contact_occurs]
      ordinary_consequence_ceiling: serious_or_critical_close_range_injury_when_context_supports
      exceptional_consequence_ceiling: lethal_only_under_D020_extreme_force_or_compound_context_not_from_action_count
      countermeasures: [maintain_distance, control_approach_lane, use_terrain_or_barrier, avoid_grapple_and_encirclement, retreat_before_close_range_is_established]
      emergency_consumable_hooks: []
      context_amplifiers: [narrow_room, cornered_target, unstable_ground, multiple_vulnerable_targets_in_reach]
      context_mitigators: [range, choke_point_that_limits_body_access, solid_barrier, escape_lane]
      governing_species_axes: [force, guard, speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [MCP-C1-001, MCP-C1-002, MCP-D1-001, MCP-D1-002]
  notes: [resolve_close_range_pressure_as_bounded_actions_or_hazards_not_one_roll_per_arm_or_punch, exact_simultaneous_target_count_reaction_time_and_stamina_cost_remain_undefined]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: extreme_close_range_force_and_multi_angle_control_are_catastrophic_in_premodern_combat_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: terrain_and_distance_have_greater_importance_than_attack_count_simulation
  canon_boundary_note: no_generic_ancient_bonus_or_extra_action_rule
ancient_ecology:
  habitat: [exact_ancient_natural_range_unknown, open_or_rocky_training_space_only_when_authored_D2]
  ecological_niche: [large_humanoid_Fighting_Pokemon_exact_feeding_ecology_unknown]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [close_force_can_displace_objects_only_when_specific_scene_supports, no_generic_structure_damage]
  observable_signs: [large_humanoid_tracks, damaged_training_surfaces_or_multi_point_impact_marks_if_authored]
  locality_constraints: [presence_should_be_deliberate_due_to_high_threat_and_rarity_context]
  unsupported_gaps: [diet, group_structure, exact_habitat, training_behavior, strike_frequency, stamina_cost]
human_perception_and_culture:
  ordinary_attitude: [extreme_caution_and_respect, avoid_close_challenge]
  specialist_knowledge_holders: [experienced_hunters, fighters, route_guides, survivors]
  benefits_and_services: [none_required]
  fears_and_avoidance: [four_arm_grapple, overwhelming_close_strikes, crushing_force]
  myths_omens_taboos: [stories_exaggerating_arm_count_or_strike_numbers_may_exist_but_are_not_mechanics]
  practical_customs: [never_assume_low_normalized_Speed_means_slow_arms, preserve_distance_and_escape_lane]
  common_misbeliefs: [four_arms_mean_four_turns, every_arm_is_independent_action, strike_count_text_is_literal_roll_count, Speed_2_means_close_attacks_are_slow]
  local_variation_notes: [communities_with_direct_survivor_accounts_may_have_better_close_range_avoidance_customs]
identification_and_knowledge:
  baseline_recognition: rare
  unknown_presentation_hooks: [large_four_armed_humanoid_Pokemon_whose_arms_move_too_quickly_for_simple_one_direction_guarding]
  local_aliases_or_titles: none
  identification_evidence: [four_arms, body_shape, multi_angle_strike_pattern, relation_to_Machoke_when_known]
  initial_knowledge_fragments: [do_not_enter_close_range_and_do_not_count_arms_as_turns]
  post_identification_knowledge: [extreme_force_and_rapid_arm_reaction_are_source_backed]
  advanced_insights: [normalized_Speed_and_action_economy_are_abstractions_that_do_not_simulate_arm_reaction_frequency]
  exceptional_individual_knowledge_hooks: [Machamp_known_for_a_specific_grapple_or_multi_angle_fighting_pattern]
threat_and_encounter:
  baseline_threat_band: very_high_at_close_range
  default_behavior_states: [resting, observing, training_if_authored, warning, closing, grappling, multi_angle_striking, withdrawing]
  aggression_tendency: unknown_to_contextual
  territoriality: unknown
  avoidance_tendency: moderate_when_not_committed
  warning_signs: [four_arm_attack_posture, closing_angle, arms_spreading_to_control_escape]
  encounter_triggers: [rare_route_overlap, training_site, confrontation, threat_to_specific_bond_or_space_if_authored]
  escalation_triggers: [enter_close_range, attack, cornering, grapple_attempt]
  deescalation_conditions: [restore_distance, leave_space, stop_attack, create_uncontested_exit]
  pursuit_profile: exact_long_range_pursuit_unknown_but_close_range_reaction_is_extreme
  group_size_effects: [multiple_Machamp_not_assumed_and_no_extra_action_multiplier]
  ordinary_consequence_categories: [impact, grapple, crush, guard_break, position_loss]
  consequence_ceiling: critical_or_lethal_possible_under_D020_close_force_context
  human_check_hooks:
    - action: avoid_being_closed_and_overwhelmed_by_Machamp_multi_angle_pressure
      relevant_species_axis: force
      relevant_tags: [four_arms, multi_angle_pressure, extreme_strike_cadence]
      relevant_hazard_keys: [machamp-multi-angle-close-pressure]
      difficulty_guidance: D024_context_from_distance_route_width_barriers_escape_lane_and_existing_injury
      notes: one_resolution_represents_pressure_and_positioning_not_each_arm_or_each_strike
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [calm, focused, competitive, defensive, aggressive]
    condition_variants: [resting, training_if_authored, injured_arm, fatigued, guarding]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: very_rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, unusual_training_or_fighting_history, local_lineage]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_arm_injury_stance_history_or_known_tactic]
    warning_or_rumor_hooks: [Machamp_with_one_damaged_arm_that_remains_exceptionally_dangerous_through_adapted_three_arm_grappling]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [exceptional_voluntary_persistent_trust, large_safe_space, substantial_food_and_travel_support, no_forced_containment_or_labor]
  trust_building_paths: [long_noncoercive_relationship, mutual_rescue, respect_for_training_or_space, refusing_to_treat_strength_as_resource]
  reasons_to_stay: [rare_personal_bond, shared_history, safe_space_and_autonomy]
  rejection_or_departure_reasons: [forced_fighting, forced_labor, confinement, treating_four_arms_as_tools]
  human_social_costs: [major_safety_fear, structural_risk, substantial_provisioning, settlement_access_limits]
  logistics:
    food: [exact_diet_unknown_but_large_body_requires_substantial_provision]
    water: [regular_access]
    shelter_temperature: [large_dry_resting_space]
    space_travel: [wide_routes_preferred, not_inventory]
    settlement_restrictions: [dense_fragile_or_fearful_settlements_may_refuse_entry]
    special_resources: []
  assistance_capabilities: [extreme_lifting_or_multi_arm_manipulation_only_when_voluntary_and_specific_task_supports]
  handling_boundaries: [no_defeat_to_recruit, no_four_action_companion_turn, no_forced_labor_or_combat, visible_companion_slot_required]
  separation_injury_notes: [arm_injury_or_separation_history_is_persistent_individual_state_if_authored]
mechanical_hooks:
  tracking_clues: [large_tracks, multi_point_impact_marks, survivor_reports_of_close_pressure]
  avoidance_preparation: [preserve_range, control_approach_lane, choose_terrain_with_escape]
  resistance_or_protection: [solid_barrier_and_positioning_over_action_count_simulation]
  combat_approach_permissions: [ranged_or_indirect_approach_before_close_range, terrain_denial]
  blocked_or_invalid_approaches: [four_turns, one_attack_roll_per_arm, thousand_attack_rolls, Speed_2_as_slow_arm_reaction]
  fear_hooks: [four_arms_begin_moving_from_different_angles_before_the_body_has_fully_closed]
  injury_hazard_hooks: [machamp-multi-angle-close-pressure]
  environmental_state_hooks: [range, route_width, barrier_integrity, escape_lane]
  companion_assistance_hooks: [bounded_multi_arm_or_heavy_task_assistance_not_extra_turns]
  fortune_spike_opportunities: [terrain_forces_Machamp_through_a_single_narrow_approach_and_reduces_multi_angle_pressure]
  trouble_spike_complications: [party_is_split_and_multiple_vulnerable_targets_enter_close_reach]
hunting_materials_and_resources:
  killing_treatment: no_generic_body_resource_or_strength_trophy_system
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: none
  taboo_or_protection: [none_required_but_named_individual_may_have_local_social_history]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [four_arms_and_strength_do_not_create_multi_arm_machinery_labor_institution_or_structure_damage_formula]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_distant_Machamp_training_or_moving_through_open_ground_without_entering_close_range]
  dangerous: [narrow_ruin_forces_party_to_solve_range_and_escape_before_Machamp_closes]
  unusual_or_rare: [injured_arm_Machamp_has_adapted_a_distinctive_three_arm_fighting_pattern]
  discovery_insight: [players_learn_action_economy_is_not_anatomy_simulation]
  route_environment: [open_ground_barriers_and_chokepoints_radically_change_close_pressure]
  settlement_culture: [survivor_stories_exaggerate_strike_count_but_correctly_warn_against_close_range]
  cross_species: [Machoke_voluntary_labor_does_not_auto_apply_to_Machamp]
presentation_and_p6_followups:
  initial_bestiary_presentation: four_armed_Fighting_Pokemon_with_extreme_close_range_force_and_multi_angle_strike_pressure
  progressive_reveal_notes: [show_many_arm_movements_as_one_readable_threat_pattern_not_extra_turn_tokens]
  species_specific_visual_needs: [four_arm_silhouette, multi_angle_attack_posture, range_readability]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [never_surface_per_arm_action_counters_or_literal_strike_count]
  p6_followup_required: true
cross_species_links:
  evolution_family: [machop, machoke]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_ancient_range, diet, group_structure, simultaneous_target_count, exact_strike_frequency, per_arm_independence, reaction_time, stamina_cost]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [bounded_multi_angle_pressure_resolution, close_range_counterplay, evolution_condition_mapping]
  deferred_to_p6: [multi_arm_motion_and_range_readability]
  deferred_to_p7: [hazard_or_action_representation_without_per_arm_actions]
```
