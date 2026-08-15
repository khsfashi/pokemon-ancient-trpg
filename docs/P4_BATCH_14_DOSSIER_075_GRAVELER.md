# P4 Batch 14 — #075 Graveler Full-Schema Dossier

Part of `docs/P4_BATCH_14_FULL_SCHEMA_DOSSIERS.md`.

---

## #075 Graveler / 데구리

```yaml
identity:
  national_dex: 75
  species_key: graveler
  official_name_en: Graveler
  official_name_ko: 데구리
  evolution_family_keys: [geodude, graveler, golem]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-GRAVELER-SG, P4_BATCH_14_SOURCE_REVIEW]
  official_evidence:
    - claim_id: GRAV-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-GRAVELER-SG
      version_context: current_official_portal
      paraphrase: slow_walker_uses_rolling_for_movement_and_can_ignore_objects_in_its_path
    - claim_id: GRAV-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-GRAVELER-SG
      version_context: current_official_portal
      paraphrase: eats_large_amounts_of_mossy_rock_lives_in_holes_on_sheer_stone_walls_and_rolls_down_slopes_like_a_rockfall
  derived_claims:
    - claim_id: GRAV-D1-001
      evidence_class: D1
      based_on: [GRAV-C1-001, GRAV-C1-002]
      statement: rolling_and_rock_consumption_define_ecology_and_authored_route_hazards
      canon_boundary_note: not_unstoppable_collision_not_automatic_landslide_not_generic_mining_or_resource_sink
canonical_source_data:
  types: [rock, ground]
  base_stats_raw: {hp: 55, attack: 95, defense: 115, special_attack: 45, special_defense: 45, speed: 35}
  abilities_relevant_to_p4: [rock_head_as_modern_context, sturdy_as_modern_context, sand_veil_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [rolling_and_rock_contact_context]
  physical_metadata: {height: 1.0_m, weight: 105.0_kg}
  evolution_source:
    evolves_from: geodude
    evolves_to: [golem]
    canonical_conditions: [modern_level_25_to_graveler_and_trade_to_golem_metadata_are_source_context_only]
  other_material_facts: [rolling_primary_locomotion, obstacle_disregard_tendency, large_rock_consumption, sheer_wall_hole_dwelling, downhill_rockfall_like_hazard]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 4
  guard: 5
  potency: 2
  resistance: 2
  speed: 1
  derivation_notes: {vigor: hp_55, force: attack_95, guard: defense_115, potency: special_attack_45, resistance: special_defense_45, speed: speed_35}
  calibration_flags: [no_manual_exception, Speed_not_literal_roll_velocity, low_Speed_does_not_cap_route_hazard_severity]
capabilities_and_hazards:
  locomotion: [slow_walking, rolling_primary_movement, access_to_sheer_wall_holes_where_scene_supports]
  physical_hazards: [heavy_rolling_collision, falling_or_downhill_boulder_like_pressure]
  elemental_environmental_hazards: [slope_and_loose_rock_route_pressure]
  anomalous_hazards: []
  behavioral_capabilities: [path_obstacle_disregard_tendency, large_rock_consumption, downhill_rolling]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: [standing_directly_in_roll_line_can_be_invalid_once_commitment_and_warning_are_established]
  hazard_records:
    - hazard_key: graveler-downhill-roll
      kind: other
      delivery_or_exposure: [rolling_body_path, displaced_rocks, slope_route_intersection]
      prerequisite_or_trigger: [slope, rolling_state, authored_route_intersection]
      warning_signs: [stone_rumble, dust, loose_rocks, visible_roll_line]
      immediate_effects: [heavy_impact, forced_evasion_or_repositioning, fall_risk]
      delayed_or_persistent_effects: [blocked_route_or_displaced_stones_only_if_event_state_establishes_it]
      ordinary_consequence_ceiling: serious
      exceptional_consequence_ceiling: critical_or_lethal_in_compound_or_exceptional_context_under_P3
      countermeasures: [leave_roll_line, use_large_hard_cover, climb_to_safe_lateral_position, listen_for_rumble]
      emergency_consumable_hooks: []
      context_amplifiers: [steep_slope, narrow_road, poor_visibility, loose_rock]
      context_mitigators: [wide_escape_space, lateral_cover, flat_ground, early_warning]
      governing_species_axes: [force, guard, speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [GRAV-C1-001, GRAV-C1-002, GRAV-D1-001]
  notes: [rolling_is_not_unstoppable_state, rock_consumption_does_not_define_ore_value_or_daily_resource_mechanics]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: mountain_paths_without_modern_barriers_make_rolling_route_hazards_more_consequential
  stat_effect_if_any: none
  behavior_effect_if_any: slope_and_path_geometry_can_raise_or_lower_hazard_pressure
  canon_boundary_note: no_global_ancient_bonus
ancient_ecology:
  habitat: [rocky_mountains, sheer_stone_walls_with_holes, exact_ancient_distribution_unknown]
  ecological_niche: [large_rock_consuming_mountain_dweller_and_rolling_route_hazard]
  activity_pattern: [walking_or_rolling_contextual]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [moss_covered_or_other_source_supported_rocks, exact_selection_limits_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [eaten_rock_surfaces, roll_tracks, displaced_stones]
  observable_signs: [large_round_tracks, rock_bite_or_consumption_sites, wall_holes, rumble]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [which_minerals_are_edible, exact_daily_intake_relevance, roll_speed, wall_hole_construction_method]
human_perception_and_culture:
  ordinary_attitude: [serious_route_hazard_respect]
  specialist_knowledge_holders: [mountain_guides, hunters, quarry_workers_without_implying_industry]
  benefits_and_services: [none_required]
  fears_and_avoidance: [downhill_rolls, blocked_narrow_paths, heavy_collision]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [listen_for_rumble, keep_lateral_escape_space, do_not_feed_unknown_rock_as_a_control_method]
  common_misbeliefs: [rolling_is_unstoppable, every_rock_is_food, Graveler_can_be_used_as_a_mining_or_road_machine]
  local_variation_notes: [no_generic_mineral_economy]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [rockfall_sound_that_resolves_into_a_rolling_creature]
  local_aliases_or_titles: none
  identification_evidence: [round_body, wall_hole, feeding_marks, repeated_roll_line]
  initial_knowledge_fragments: [moves_by_rolling, eats_rocks]
  post_identification_knowledge: [low_Speed_rating_does_not_make_downhill_hazard_safe]
  advanced_insights: [route_geometry_matters_more_than_real_world_momentum_math]
  exceptional_individual_knowledge_hooks: [old_Graveler_known_to_roll_the_same_switchback_at_dawn]
threat_and_encounter:
  baseline_threat_band: high_on_slopes_moderate_elsewhere
  default_behavior_states: [resting, feeding, walking, rolling, provoked]
  aggression_tendency: contextual
  territoriality: unknown_or_local
  avoidance_tendency: low_during_committed_roll_otherwise_contextual
  warning_signs: [rumble, dust, loose_stones]
  encounter_triggers: [route_crossing, feeding_site_intrusion, provocation]
  escalation_triggers: [narrow_slope, blocked_path, direct_attack]
  deescalation_conditions: [leave_route, provide_space, stop_pursuit]
  pursuit_profile: roll_line_contextual_not_guaranteed_chase
  group_size_effects: [multiple_rollers_require_explicit_event_state_not_multiplier]
  ordinary_consequence_categories: [serious_impact, fall, route_blockage]
  consequence_ceiling: serious_to_critical
  human_check_hooks:
    - action: clear_a_narrow_mountain_road_before_a_downhill_Graveler_roll_reaches_it
      relevant_species_axis: speed
      relevant_tags: [rolling_primary_movement, downhill_rockfall_like_hazard]
      relevant_hazard_keys: [graveler-downhill-roll]
      difficulty_guidance: D024_context_from_slope_distance_cover_visibility_and_warning
      notes: Speed_1_is_not_a_collision_or_travel_velocity_equation
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [placid, route_indifferent, irritable, food_focused]
    condition_variants: [feeding, resting, actively_rolling, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, repeated_cliff_survival, unusual_route_habituation]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [known_roll_line, scars_or_surface_pattern, persistent_behavior]
    warning_or_rumor_hooks: [Graveler_that_rolls_through_storms_when_others_hide]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_trust, safe_open_space, handler_can_manage_mass_and_roll_risk]
  trust_building_paths: [long_term_noncoercive_contact, injury_recovery, stable_feeding_area]
  reasons_to_stay: [bond, reliable_rocky_territory]
  rejection_or_departure_reasons: [forced_restraint, use_as_road_roller_or_mining_tool, chronic_dense_settlement]
  human_social_costs: [mass, food_volume, route_damage_risk]
  logistics:
    food: [large_species_appropriate_rock_supply_without_assuming_every_mineral_is_valid]
    water: [regular_access_as_needed]
    shelter_temperature: [rocky_rest_space]
    space_travel: [portable_storage_forbidden, narrow_routes_high_risk]
    settlement_restrictions: [dense_foot_traffic_and_fragile_structures_may_be_incompatible]
    special_resources: [none_fixed]
  assistance_capabilities: [none_required_beyond_voluntary_scene_specific_strength_or_route_interaction]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_mining_or_transport_service, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [roll_tracks, eaten_rock, wall_holes, rumble]
  avoidance_preparation: [lateral_escape_routes, hard_cover, listening]
  resistance_or_protection: [large_hard_cover, stable_footing]
  combat_approach_permissions: [use_committed_roll_line_for_positioning_if_event_state_supports]
  blocked_or_invalid_approaches: [physics_momentum_formula, automatic_landslide, feed_arbitrary_ore_for_stat_gain]
  fear_hooks: [boulder_sound_is_a_living_Graveler]
  injury_hazard_hooks: [crushing_impact, fall]
  environmental_state_hooks: [slope, road_width, cover, loose_rock]
  companion_assistance_hooks: [scene_specific_heavy_interaction_only]
  fortune_spike_opportunities: [side_alcove_opens_before_the_roll_arrives]
  trouble_spike_complications: [second_loose_rock_fall_blocks_the_expected_escape]
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
  scalability_limits: [rock_consumption_and_rolling_do_not_create_mining_roadbuilding_or_resource_systems]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_Graveler_feeding_on_a_mossy_rock_face]
  dangerous: [a_rolling_Graveler_turns_a_switchback_into_a_timed_escape]
  unusual_or_rare: [an_exceptional_Graveler_has_a_locally_known_annual_roll_route]
  discovery_insight: [hazard_severity_is_not_capped_by_Speed_1]
  route_environment: [slope_and_lateral_cover_define_counterplay]
  settlement_culture: [mountain_guides_build_simple_warning_markers_near_known_roll_lines_without_claiming_control]
  cross_species: [Golem_self_explosion_and_shed_shell_are_not_inherited_backward]
presentation_and_p6_followups:
  initial_bestiary_presentation: heavy_rock_eater_that_moves_by_rolling_and_can_become_a_rockfall_like_route_hazard
  progressive_reveal_notes: [show_roll_line_and_warning_before_impact]
  species_specific_visual_needs: [roll_track, dust, wall_hole, feeding_marks]
  species_specific_audio_needs: [deep_rumble, stone_grind]
  special_ui_or_readability_needs: [clear_roll_line_without_speedometer_or_damage_formula]
  p6_followup_required: true
cross_species_links:
  evolution_family: [geodude, golem]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: [rockfall_or_boulder_at_distance]
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_edible_rock_scope, roll_speed, wall_hole_formation, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [rolling_route_hazard_state]
  deferred_to_p6: [roll_line_and_rumble_telegraph]
  deferred_to_p7: []
```
