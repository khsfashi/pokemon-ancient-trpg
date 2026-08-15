# P4 Batch 14 — #095 Onix Full-Schema Dossier

Part of `docs/P4_BATCH_14_FULL_SCHEMA_DOSSIERS.md`.

---

## #095 Onix / 롱스톤

```yaml
identity:
  national_dex: 95
  species_key: onix
  official_name_en: Onix
  official_name_ko: 롱스톤
  evolution_family_keys: [onix]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-ONIX-SG, P4_BATCH_14_SOURCE_REVIEW]
  official_evidence:
    - claim_id: ONX-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-ONIX-SG
      version_context: current_official_portal
      paraphrase: bores_through_ground_at_extreme_source_stated_speed_while_twisting_large_body_and_surface_tremors_can_follow_deep_burrowing_and_boulder_feeding
    - claim_id: ONX-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-ONIX-SG
      version_context: historical_version_tagged
      paraphrase: long_tunnel_creation_hard_object_or_soil_consumption_body_hardening_internal_magnetic_navigation_and_Diglett_use_of_tunnels_are_preserved_as_versioned_context
  derived_claims:
    - claim_id: ONX-D1-001
      evidence_class: D1
      based_on: [ONX-C1-001, ONX-C1-002]
      statement: Onix_has_species_local_high_speed_boring_tremor_and_navigation_capabilities
      canon_boundary_note: not_fast_travel_not_per_round_mph_not_guaranteed_collapse_not_safe_permanent_tunnel_not_harvestable_magnet_or_gem
canonical_source_data:
  types: [rock, ground]
  base_stats_raw: {hp: 35, attack: 45, defense: 160, special_attack: 30, special_defense: 45, speed: 70}
  abilities_relevant_to_p4: [rock_head_as_modern_context, sturdy_as_modern_context, weak_armor_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [boring_rock_and_ground_pressure_context]
  physical_metadata: {height: 8.8_m, weight: 210.0_kg}
  evolution_source:
    evolves_from: null
    evolves_to: [steelix_external_nonmandatory]
    canonical_conditions: [later_generation_trade_plus_metal_coat_metadata_is_source_context_only]
  other_material_facts: [high_speed_boring, source_stated_50_mph_claim, surface_tremors, hard_object_and_boulder_consumption, long_tunnels_version_context, internal_magnetic_navigation_version_context, body_hardening_with_growth_version_context]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 2
  guard: 6
  potency: 1
  resistance: 2
  speed: 3
  derivation_notes: {vigor: hp_35, force: attack_45, guard: defense_160, potency: special_attack_30, resistance: special_defense_45, speed: speed_70}
  calibration_flags: [no_manual_exception, Speed_not_50_mph_runtime_value, Guard_not_absolute_immunity, Force_not_tunnel_damage_formula]
capabilities_and_hazards:
  locomotion: [massive_surface_serpentine_movement, species_local_high_speed_boring_in_suitable_substrate]
  physical_hazards: [massive_body_impact, ground_emergence, tunnel_or_fall_pressure_only_when_scene_state_supports]
  elemental_environmental_hazards: [surface_tremors_from_deep_burrowing]
  anomalous_hazards: [internal_magnetic_navigation_version_context]
  behavioral_capabilities: [hard_object_or_boulder_consumption, long_tunnel_creation_version_context]
  utility_interaction_capabilities: [existing_tunnels_can_shape_routes_or_ecology_but_are_not_safe_fast_travel_infrastructure]
  immunities_or_approach_invalidators: [close_narrow_space_can_become_invalid_when_massive_body_or_boring_line_is_committed]
  hazard_records:
    - hazard_key: onix-boring-and-tremor
      kind: other
      delivery_or_exposure: [subsurface_boring_path, sudden_emergence, surface_tremor, displaced_rock_or_soil_if_authored]
      prerequisite_or_trigger: [burrowing_or_feeding, suitable_ground, route_intersection]
      warning_signs: [deep_rumble, repeated_surface_tremor, dust_or_ground_shift, old_tunnel_signs]
      immediate_effects: [forced_escape_or_cover, impact_or_fall_pressure, route_interruption]
      delayed_or_persistent_effects: [tunnel_or_route_change_only_when_explicitly_authored]
      ordinary_consequence_ceiling: critical
      exceptional_consequence_ceiling: lethal_under_P3_in_compound_or_named_context
      countermeasures: [leave_boring_line, move_to_stable_open_ground, use_large_hard_cover, heed_tremor_patterns]
      emergency_consumable_hooks: []
      context_amplifiers: [narrow_tunnel, cliff_edge, loose_rock, poor_visibility]
      context_mitigators: [open_surface, lateral_escape, known_tunnel_map_based_on_observation_not_magnetic_copy]
      governing_species_axes: [guard, speed, force]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [ONX-C1-001, ONX-C1-002, ONX-D1-001]
  notes: [50_mph_is_source_fiction_not_runtime_speed_formula, tremor_is_not_automatic_structure_collapse, internal_magnetic_navigation_is_not_a_harvestable_compass]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: enormous_body_and_boring_pressure_are_more_dangerous_without_reinforced_routes_or_modern_surveying
  stat_effect_if_any: none
  behavior_effect_if_any: known_tunnel_and_tremor_patterns_can_create_local_avoidance_customs
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [rocky_subsurface_and_mountain_or_cave_regions_where_locally_supported, exact_ancient_distribution_unknown]
  ecological_niche: [massive_boring_rock_consuming_subterranean_megafauna]
  activity_pattern: [burrowing_and_feeding_contextual]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [hard_objects_boulders_or_large_soil_intake_as_source_context]
  social_structure: [unknown]
  predator_prey_competitor_links: [Diglett_can_use_Onix_tunnels_in_version_scoped_context]
  environmental_effects: [long_tunnels, tremors, displaced_ground, consumed_rock]
  observable_signs: [large_tunnel_bore, deep_scrape, rumble, surface_crack_or_soil_shift_only_when_authored]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [tunnel_stability, exact_boring_substrate_limits, safe_route_duration, exact_magnetic_navigation_mechanism]
human_perception_and_culture:
  ordinary_attitude: [major_route_and_cave_hazard_respect]
  specialist_knowledge_holders: [cave_guides, diggers, hunters, route_scouts]
  benefits_and_services: [existing_abandoned_tunnels_may_shape_routes_but_no_safe_service_is_assumed]
  fears_and_avoidance: [tremor, sudden_emergence, tunnel_intersection, massive_body]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [listen_for_deep_rumble, mark_known_bores, avoid_sleeping_in_active_tunnels]
  common_misbeliefs: [Onix_tunnel_is_safe_fast_travel, 50_mph_is_runtime_speed, internal_magnet_is_a_collectible_compass, Guard_6_means_invulnerable]
  local_variation_notes: [no_mining_or_transport_institution_is_inferred]
identification_and_knowledge:
  baseline_recognition: specialist
  unknown_presentation_hooks: [earthquake_like_rumble_followed_by_massive_segmented_stone_body]
  local_aliases_or_titles: none
  identification_evidence: [large_bore, segmented_body_marks, tremor_pattern, feeding_sites]
  initial_knowledge_fragments: [massive_burrower, causes_surface_tremors]
  post_identification_knowledge: [source_speed_does_not_define_runtime_distance]
  advanced_insights: [old_tunnels_can_be_ecological_corridors_without_being_safe_human_roads]
  exceptional_individual_knowledge_hooks: [ancient_Onix_known_by_a_tunnel_network_that_other_species_reuse]
threat_and_encounter:
  baseline_threat_band: severe_environmental_and_physical_hazard
  default_behavior_states: [burrowing, feeding, resting_in_tunnel, moving_surface, provoked]
  aggression_tendency: contextual
  territoriality: locality_dependent
  avoidance_tendency: low_once_large_body_route_commits
  warning_signs: [deep_rumble, tremor, dust, tunnel_signs]
  encounter_triggers: [active_tunnel_entry, route_crossing, feeding_site_disturbance]
  escalation_triggers: [continued_pursuit, confinement, direct_attack]
  deescalation_conditions: [leave_bore_path, stop_pursuit, move_to_open_safe_ground]
  pursuit_profile: dangerous_route_intersection_not_generic_relentless_chase
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [critical_impact, fall_or_crush_risk, route_blockage_or_ground_shift]
  consequence_ceiling: critical_to_lethal
  human_check_hooks:
    - action: evacuate_a_tunnel_or_surface_zone_after_reading_Onix_tremor_signs
      relevant_species_axis: speed
      relevant_tags: [high_speed_boring, surface_tremors]
      relevant_hazard_keys: [onix-boring-and-tremor]
      difficulty_guidance: D024_context_from_distance_tremor_pattern_cover_exit_routes_and_substrate
      notes: Speed_3_does_not_conflict_with_50_mph_source_claim_because_the_axis_is_not_literal_velocity
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [placid, territorial, migratory, feeding_focused]
    condition_variants: [actively_boring, resting, recently_fed, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [great_age, body_hardening_history, unusual_substrate_exposure, persistent_tunnel_network]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [known_tunnel_route, surface_pattern_or_scars, persistent_rumor]
    warning_or_rumor_hooks: [old_Onix_whose_tunnels_cross_three_valleys]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [extraordinary_voluntary_bond, enormous_safe_space, route_and_settlement_acceptance]
  trust_building_paths: [long_term_noncoercive_contact, repeated_safe_coexistence, aid_when_injured_or_trapped]
  reasons_to_stay: [deep_bond, stable_large_territory]
  rejection_or_departure_reasons: [forced_containment, use_as_mining_transport_or_fast_travel_tool, chronic_confinement]
  human_social_costs: [enormous_space, route_damage_risk, food_and_settlement_logistics]
  logistics:
    food: [large_species_appropriate_hard_material_or_food_supply_exact_need_unresolved]
    water: [regular_access_as_needed]
    shelter_temperature: [large_cave_or_open_rocky_rest_space]
    space_travel: [portable_storage_forbidden, conventional_transport_impossible]
    settlement_restrictions: [dense_settlements_generally_incompatible]
    special_resources: [none_fixed]
  assistance_capabilities: [route_or_excavation_help_only_when_voluntary_and_explicitly_safe_in_scene]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_fast_travel_or_mining_service, one_visible_companion_slot]
  separation_injury_notes: [bonded_Onix_remains_independent_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [large_bore, tremor, scrape_marks, consumed_rock]
  avoidance_preparation: [known_exit_routes, large_hard_cover, tremor_watch]
  resistance_or_protection: [distance, stable_open_ground]
  combat_approach_permissions: [use_large_body_commitment_and_route_geometry_only_when_event_state_supports]
  blocked_or_invalid_approaches: [50_mph_runtime_math, guaranteed_collapse, safe_tunnel_fast_travel, magnetic_compass_harvest]
  fear_hooks: [the_ground_rumbles_and_a_wall_of_stone_body_moves_beneath_it]
  injury_hazard_hooks: [crush, impact, fall]
  environmental_state_hooks: [tunnel_width, substrate, tremor, exits]
  companion_assistance_hooks: [rare_scene_specific_excavation]
  fortune_spike_opportunities: [old_side_tunnel_provides_lateral_escape]
  trouble_spike_complications: [abandoned_tunnel_is_reused_by_Diglett_and_misread_as_inactive]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [no_internal_magnet_gem_or_body_stone_harvest_is_source_authorized]
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
  scalability_limits: [tunnels_do_not_create_mining_transport_or_navigation_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [study_an_old_abandoned_Onix_bore_now_used_by_smaller_species]
  dangerous: [surface_tremors_force_a_party_to_leave_a_cave_before_Onix_crosses_it]
  unusual_or_rare: [ancient_Onix_is_known_for_a_vast_tunnel_network_and_unusual_direction_sense]
  discovery_insight: [50_mph_and_magnetic_navigation_are_source_facts_without_becoming_runtime_speed_or_compass_items]
  route_environment: [old_tunnels_are_paths_with_unknown_stability_not_fast_travel_nodes]
  settlement_culture: [locals_mark_active_Onix_bores_and_sleep_away_from_them]
  cross_species: [Diglett_can_reuse_some_Onix_tunnels_in_version_scoped_ecology_without_sharing_Onix_boring_power]
presentation_and_p6_followups:
  initial_bestiary_presentation: enormous_segmented_stone_burrower_whose_tunneling_can_make_the_surface_tremble
  progressive_reveal_notes: [separate_source_extreme_speed_from_game_clock_and_show_warning_tremors]
  species_specific_visual_needs: [huge_bore, segmented_body_motion, tremor_and_dust_telegraph]
  species_specific_audio_needs: [deep_grinding_rumble, stone_scrape]
  special_ui_or_readability_needs: [tunnel_exit_and_boring_line_readability, no_speedometer_or_compass_item_semantics]
  p6_followup_required: true
cross_species_links:
  evolution_family: [steelix_external_nonmandatory]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [diglett_version_scoped_tunnel_reuse]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [tunnel_stability, exact_substrate_limits, magnetic_navigation_mechanism, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [tremor_boring_and_tunnel_state_events]
  deferred_to_p6: [massive_body_tunnel_and_tremor_readability]
  deferred_to_p7: [runtime_large_subsurface_entity_representation_if_required]
```
