# P4 Batch 14 — #051 Dugtrio Full-Schema Dossier

Part of `docs/P4_BATCH_14_FULL_SCHEMA_DOSSIERS.md`.

---

## #051 Dugtrio / 닥트리오

```yaml
identity:
  national_dex: 51
  species_key: dugtrio
  official_name_en: Dugtrio
  official_name_ko: 닥트리오
  evolution_family_keys: [diglett, dugtrio]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-DUGTRIO-SG, P4_BATCH_14_SOURCE_REVIEW]
  official_evidence:
    - claim_id: DUG-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DUGTRIO-SG
      version_context: current_official_portal
      paraphrase: three_heads_move_separately_to_loosen_soil_and_support_burrowing_and_can_attack_from_unexpected_directions_underground
    - claim_id: DUG-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DUGTRIO-SG
      version_context: historical_version_tagged
      paraphrase: extreme_depth_speed_and_earthquake_associations_and_triplet_one_body_wording_are_preserved_as_extraordinary_versioned_fiction
  derived_claims:
    - claim_id: DUG-D1-001
      evidence_class: D1
      based_on: [DUG-C1-001, DUG-C1-002]
      statement: Dugtrio_is_one_entity_with_species_local_extreme_burrowing_and_authored_ambush_pressure
      canon_boundary_note: one_turn_one_health_state_one_companion_slot_no_perfect_stealth_no_real_world_seismic_or_velocity_formula
canonical_source_data:
  types: [ground]
  base_stats_raw: {hp: 35, attack: 100, defense: 50, special_attack: 50, special_defense: 70, speed: 120}
  abilities_relevant_to_p4: [sand_veil_as_modern_context, arena_trap_as_modern_context, sand_force_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [burrowing_ambush_and_ground_displacement_families_as_capability_context]
  physical_metadata: {height: 0.7_m, weight: 33.3_kg}
  evolution_source:
    evolves_from: diglett
    evolves_to: []
    canonical_conditions: [modern_level_26_metadata_is_source_context_only]
  other_material_facts: [three_head_soil_loosening, unexpected_direction_attack, extreme_depth_and_speed_version_claims, earthquake_association, triplet_one_body_version_claim]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 5
  guard: 2
  potency: 2
  resistance: 3
  speed: 6
  derivation_notes: {vigor: hp_35, force: attack_100, guard: defense_50, potency: special_attack_50, resistance: special_defense_70, speed: speed_120}
  calibration_flags: [no_manual_exception, Speed_not_literal_burrow_mph, Force_not_seismic_damage_formula, multi_head_not_action_multiplier]
capabilities_and_hazards:
  locomotion: [species_local_subterranean_burrowing, rapid_repositioning_in_suitable_ground]
  physical_hazards: [unexpected_direction_ground_attack, soil_displacement, collapse_or_fall_risk_only_if_authored_terrain_state_supports]
  elemental_environmental_hazards: [tremor_or_earthquake_like_pressure_in_extraordinary_version_scoped_context]
  anomalous_hazards: []
  behavioral_capabilities: [three_head_soil_loosened_burrowing, coordinated_single_entity_attack, subterranean_ambush]
  utility_interaction_capabilities: [deep_excavation_exists_in_source_fiction_but_is_not_a_safe_route_service]
  immunities_or_approach_invalidators: [direct_surface_line_of_sight_may_not_apply_while_burrowed_but_signs_and_counterplay_remain_possible]
  hazard_records:
    - hazard_key: dugtrio-subterranean-ambush
      kind: other
      delivery_or_exposure: [subsurface_reposition, unexpected_direction_emergence, soil_or_tremor_signs]
      prerequisite_or_trigger: [suitable_ground, pursuit_or_combat_state, authored_ambush_conditions]
      warning_signs: [soil_vibration, disturbed_ground, prior_burrow_signs, local_knowledge]
      immediate_effects: [high_pressure_close_attack, forced_repositioning, footing_complication]
      delayed_or_persistent_effects: [terrain_damage_only_if_explicitly_authored_never_implied_by_stat]
      ordinary_consequence_ceiling: serious
      exceptional_consequence_ceiling: critical_or_lethal_in_compound_or_named_extreme_context_under_P3
      countermeasures: [hard_ground_or_barrier, spread_out, read_tremor_signs, leave_substrate, prepared_escape]
      emergency_consumable_hooks: []
      context_amplifiers: [loose_or_deep_soil, confined_route, ignored_signs]
      context_mitigators: [hard_surface, elevation, known_pattern, multiple_escape_routes]
      governing_species_axes: [force, speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [DUG-C1-001, DUG-C1-002, DUG-D1-001]
  notes: [Arena_Trap_not_absolute_escape_denial, three_heads_do_not_create_three_actions, extreme_depth_claim_does_not_create_geology_simulation]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: subterranean_ambush_and_ground_disturbance_are_more_consequential_on_unreinforced_routes_and_structures
  stat_effect_if_any: none
  behavior_effect_if_any: suitable_ground_can_raise_encounter_pressure_without_player_scaling
  canon_boundary_note: no_global_ancient_bonus
ancient_ecology:
  habitat: [subsurface_soil_and_hard_ground_where_source_or_local_authorship_supports, exact_ancient_distribution_unknown]
  ecological_niche: [powerful_subterranean_excavator]
  activity_pattern: [mostly_subsurface_contextual]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [three_heads_are_one_entity, broader_group_ecology_unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [deep_or_fast_burrow_signs, tremors, displaced_soil]
  observable_signs: [vibration, fresh_ground_breaks, repeated_emergence_points]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [safe_tunnel_dimensions, oxygen_or_pressure_limits, stable_human_route_use, exact_extreme_claim_frequency]
human_perception_and_culture:
  ordinary_attitude: [high_caution_where_ground_signs_are_known]
  specialist_knowledge_holders: [diggers, miners_without_implying_industry, hunters, route_scouts]
  benefits_and_services: [none_required]
  fears_and_avoidance: [unexpected_below_ground_attack, route_tremors, unstable_footing]
  myths_omens_taboos: [earthquake_association_can_support_local_D2_fear_or_omens]
  practical_customs: [watch_tremors, move_to_hard_ground, avoid_clustered_stance]
  common_misbeliefs: [three_heads_mean_three_Pokemon, underground_means_undetectable, Arena_Trap_means_no_escape, source_mph_means_runtime_speed]
  local_variation_notes: [no_normalized_excavation_labor_institution]
identification_and_knowledge:
  baseline_recognition: specialist
  unknown_presentation_hooks: [triple_emergence_silhouette, synchronized_ground_breaks, localized_tremor]
  local_aliases_or_titles: none
  identification_evidence: [three_heads_one_body_behavior, soil_loosened_in_multiple_points, extreme_burrow_signs]
  initial_knowledge_fragments: [fast_subterranean_attacker, three_heads_work_together]
  post_identification_knowledge: [one_entity_one_turn_one_health_state]
  advanced_insights: [extreme_depth_and_speed_claims_are_not_safe_route_or_damage_formulas]
  exceptional_individual_knowledge_hooks: [old_Dugtrio_known_by_a_distinctive_three_point_tremor_pattern]
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states: [burrowed, moving, wary, ambushing, disengaging]
  aggression_tendency: contextual_to_high_when_escalated
  territoriality: locality_dependent
  avoidance_tendency: moderate
  warning_signs: [tremor, fresh_soil, repeated_unexpected_emergence]
  encounter_triggers: [territory_intrusion_if_authored, direct_attack, pursuit]
  escalation_triggers: [continued_surface_pursuit, blocking_burrow_route]
  deescalation_conditions: [leave_area, move_to_nonviable_substrate, stop_pursuit]
  pursuit_profile: dangerous_short_to_medium_subsurface_pursuit_contextual
  group_size_effects: [three_heads_do_not_count_as_group_size]
  ordinary_consequence_categories: [serious_impact_or_puncture, footing_loss, route_disruption]
  consequence_ceiling: serious_to_critical
  human_check_hooks:
    - action: react_to_an_unexpected_direction_Dugtrio_emergence_after_readable_ground_signs
      relevant_species_axis: speed
      relevant_tags: [subterranean_ambush, three_head_soil_loosened_burrowing]
      relevant_hazard_keys: [dugtrio-subterranean-ambush]
      difficulty_guidance: D024_context_from_substrate_warning_prior_knowledge_spacing_and_escape_routes
      notes: Speed_6_is_compact_baseline_not_literal_60mph_plus_movement_rule
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [avoidant, territorial, highly_coordinated, surface_bold]
    condition_variants: [exhausted, injured, displaced, actively_burrowing]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_hard_ground_survival, extreme_tunnel_history, repeated_human_conflict]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_tremor_pattern, scars_or_head_markings, known_route]
    warning_or_rumor_hooks: [Dugtrio_whose_tremor_precedes_it_by_three_beats]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [very_rare_voluntary_trust, suitable_ground_access, handler_can_manage_high_route_risk]
  trust_building_paths: [long_term_noncoercive_contact, protection, shared_territory]
  reasons_to_stay: [deep_bond, stable_safe_burrowing_area]
  rejection_or_departure_reasons: [forced_containment, use_as_excavation_machine, coercive_combat]
  human_social_costs: [major_route_and_structure_risk_near_settlements]
  logistics:
    food: [species_appropriate_supply_unknown]
    water: [regular_access]
    shelter_temperature: [subsurface_refuge]
    space_travel: [portable_storage_forbidden, route_requires_substrate_and_event_support]
    settlement_restrictions: [dense_structures_may_be_incompatible]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_excavation_or_ground_warning_only_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_fast_travel_tunnel_service, one_visible_companion_slot]
  separation_injury_notes: [three_heads_share_one_entity_state]
mechanical_hooks:
  tracking_clues: [tremor, disturbed_ground, emergence_pattern]
  avoidance_preparation: [hard_surface, elevation, spacing, local_tremor_knowledge]
  resistance_or_protection: [stable_footing, barriers_where_substrate_blocks_burrowing]
  combat_approach_permissions: [counter_ambush_only_after_earned_warning_or_pattern_read]
  blocked_or_invalid_approaches: [three_turns, three_HP_pools, guaranteed_Arena_Trap, calculate_seismic_damage_from_Force]
  fear_hooks: [ground_attack_arrives_from_the_wrong_side_of_cover]
  injury_hazard_hooks: [serious_contact, falls, terrain_complication]
  environmental_state_hooks: [substrate, hard_surface, tremor, route_width]
  companion_assistance_hooks: [bounded_excavation_or_warning]
  fortune_spike_opportunities: [stone_floor_breaks_the_predicted_burrow_line]
  trouble_spike_complications: [loose_ground_hides_which_emergence_point_is_real]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: none
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
  scalability_limits: [extreme_burrowing_does_not_create_transport_mining_or_seismic_engineering_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [study_a_three_point_tremor_pattern_from_a_safe_rock_shelf]
  dangerous: [Dugtrio_attacks_from_an_unexpected_direction_after_warning_signs_are_missed]
  unusual_or_rare: [an_exceptional_Dugtrio_is_rumored_to_cross_impossibly_hard_ground]
  discovery_insight: [three_heads_are_one_entity_and_extreme_source_claims_do_not_define_runtime_physics]
  route_environment: [substrate_changes_where_burrowing_is_possible]
  settlement_culture: [old_ground_markers_warn_of_known_Dugtrio_routes]
  cross_species: [Diglett_shallow_raised_earth_tracking_is_not_a_complete_model_for_Dugtrio_extreme_burrowing]
presentation_and_p6_followups:
  initial_bestiary_presentation: three_headed_single_entity_subterranean_attacker_with_extreme_source_fiction_but_readable_ground_pressure
  progressive_reveal_notes: [make_one_entity_state_clear, show_tremor_signs_before_unfair_ambush]
  species_specific_visual_needs: [triple_head_emergence, tremor_rings_without_real_world_scale_claim, soil_breaks]
  species_specific_audio_needs: [three_phase_rumble, soil_burst]
  special_ui_or_readability_needs: [single_health_state_and_turn, substrate_state]
  p6_followup_required: true
cross_species_links:
  evolution_family: [diglett]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [safe_tunnel_geometry, extreme_claim_frequency, deep_burrow_environmental_limits]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [ambush_tremor_and_substrate_event_states]
  deferred_to_p6: [single_entity_multi_head_readability]
  deferred_to_p7: [subsurface_runtime_representation_if_required]
```
