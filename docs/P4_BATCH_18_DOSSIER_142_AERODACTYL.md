# P4 Batch 18 — #142 Aerodactyl Full-Schema Dossier

Part of `docs/P4_BATCH_18_FULL_SCHEMA_DOSSIERS.md`.

---

## #142 Aerodactyl / 프테라

```yaml
identity:
  national_dex: 142
  species_key: aerodactyl
  official_name_en: Aerodactyl
  official_name_ko: 프테라
  evolution_family_keys: [aerodactyl, mega_aerodactyl_external_later_mechanic]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-AERODACTYL-SG, P4_BATCH_18_SOURCE_REVIEW]
  official_evidence:
  - claim_id: AER-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-AERODACTYL-SG
    version_context: current_official_portal__RESTORATION_SCOPED_THREAT
    paraphrase: an_amber_DNA_restored_specimen_showed_greater_than_expected_ferocity_and_casualties_occurred
  - claim_id: AER-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-AERODACTYL-SG
    version_context: current_official_portal__OBSERVED_LOCOMOTION
    paraphrase: ancient_aerial_life_was_highly_mobile_while_ground_walking_is_weak_and_slow
  - claim_id: AER-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__PREDATION_FLIGHT_EXTINCTION_AND_RESTORATION
    paraphrase: historical_entries_add_serrated_fang_predation_gliding_free_flight_extinction_and_amber_genetic_restoration_context
  derived_claims:
  - claim_id: AER-D1-001
    evidence_class: D1
    based_on: [AER-C1-001, AER-C1-003]
    statement: severe_predatory_threat_is_real_but_restoration_casualties_do_not_define_every_individual_as_permanently_berserk
    canon_boundary_note: no_unavoidable_combat_or_death_on_contact
  - claim_id: AER-D1-002
    evidence_class: D1
    based_on: [AER-C1-002]
    statement: airborne_and_grounded_can_be_discrete_authored_locomotion_states
    canon_boundary_note: no_unrestricted_fast_travel_passenger_carrying_or_general_flight_physics
  - claim_id: AER-D2-001
    evidence_class: D2
    based_on: [AER-C1-002, AER-C1-003]
    statement: D034_is_satisfied_by_one_exceptionally_isolated_aerial_relict_locality_with_a_tiny_self_sustaining_lineage
    canon_boundary_note: project_authored_lineage_continuity_not_single_individual_prehistoric_lifespan_restoration_lab_or_time_travel
canonical_source_data:
  types: [rock, flying]
  base_stats_raw: {hp: 80, attack: 105, defense: 65, special_attack: 60, special_defense: 75, speed: 130}
  abilities_relevant_to_p4: [rock_head_as_modern_context, pressure_as_modern_context, unnerve_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.8_m, weight: 59.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: []
    canonical_conditions: [Mega_Aerodactyl_is_later_temporary_form_context_not_an_evolution_or_ancient_institution]
  other_material_facts: [ancient_aerial_ecology, weak_slow_ground_walking, serrated_fang_predation, restoration_scoped_casualties, amber_DNA_restoration_modern_context]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 5
  guard: 3
  potency: 3
  resistance: 3
  speed: 6
  derivation_notes: {vigor: hp_80, force: attack_105, guard: defense_65, potency: special_attack_60, resistance: special_defense_75, speed: speed_130}
  calibration_flags: [no_manual_exception, speed_6_does_not_grant_auto_initiative_pursuit_or_fast_travel, grounded_state_is_not_a_second_stat_profile]
capabilities_and_hazards:
  locomotion: [airborne_fast_flight_or_glide, weak_slow_grounded_walk]
  physical_hazards: [serrated_fang_attack, aerial_dive_or_swoop, body_collision]
  elemental_environmental_hazards: [height_and_fall_exposure_when_aerial_geometry_is_material]
  anomalous_hazards: []
  behavioral_capabilities: [predatory_aerial_observation_and_attack]
  utility_interaction_capabilities: [airborne_repositioning_only_within_authored_encounter_or_route_permissions]
  immunities_or_approach_invalidators: [flight_does_not_make_all_ground_approaches_invalid_or_guarantee_escape]
  hazard_records:
  - hazard_key: aerodactyl-aerial-swoop
    kind: other
    delivery_or_exposure: [target_is_exposed_below_or_near_an_airborne_Aerodactyl, Aerodactyl_commits_to_a_swoop_or_bite]
    prerequisite_or_trigger: [airborne_state, valid_attack_lane, predatory_or_defensive_escalation]
    warning_signs: [shadow_or_wing_sound, circling, altitude_change, exposed_route, serrated_jaw_display]
    immediate_effects: [serious_bite_or_collision_injury, position_loss, separation_or_fall_risk_if_terrain_supports_it]
    delayed_or_persistent_effects: [ordinary_injury_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_explicit_predatory_cliff_or_named_exceptional_context
    countermeasures: [move_under_hard_cover, deny_clean_attack_lane, use_confined_geometry_to_force_grounded_or_abort_state, avoid_exposed_cliff_edges]
    emergency_consumable_hooks: []
    context_amplifiers: [open_sky, cliff_edge, isolated_target, clear_dive_lane]
    context_mitigators: [hard_overhead_cover, narrow_geometry, grounded_state, dense_obstacles]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [AER-C1-001, AER-C1-002, AER-C1-003, AER-D1-001, AER-D1-002]
  notes: [airborne_and_grounded_are_discrete_states_not_continuous_flight_physics, restoration_scoped_casualties_do_not_force_aggression]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous, local_stronger_lineage]
  evidence_class: D2
  rationale: isolated_aerial_refuge_and_low_anti_air_capability_can_make_encounters_more_dangerous_without_stat_inflation
  stat_effect_if_any: none_by_default
  behavior_effect_if_any: open_sky_and_height_can_make_airborne_attack_pressure_more_relevant
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [one_exceptionally_isolated_aerial_relict_refuge, ancient_open_aerial_habitat_context]
  ecological_niche: [large_fast_aerial_predator]
  activity_pattern: [unknown]
  seasonal_notes: [locality_specific_and_unknown]
  feeding_and_resource_interaction: [predatory_feeding_is_source_backed, exact_prey_roster_unknown]
  social_structure: [tiny_self_sustaining_lineage_requires_local_viability_but_exact_structure_unknown]
  predator_prey_competitor_links: [prey_links_require_local_authoring]
  environmental_effects: [nest_or_roost_pressure_only_when_authored]
  observable_signs: [large_shadows, wing_or_glide_sounds, bite_or_predation_marks, inaccessible_roost_signs]
  locality_constraints: [one_exceptional_aerial_relict_content_chain, no_ordinary_region_wide_sky_spawns, no_restoration_or_time_travel]
  unsupported_gaps: [air_speed_endurance, ground_mobility_penalty, aggression_distribution, relict_population_size_and_exact_geography]
human_perception_and_culture:
  ordinary_attitude: [mythic_or_extreme_caution_outside_the_refuge, fear_after_direct_sighting]
  specialist_knowledge_holders: [rare_survivors, cliff_or_sea_route_trackers, fossil_or_amber_find_interpreters]
  benefits_and_services: [none_required]
  fears_and_avoidance: [aerial_ambush, severe_bite, exposed_height]
  myths_omens_taboos: [king_of_the_skies_or_ancient_monster_stories_may_exist_as_reputation_or_D2_not_measurement]
  practical_customs: [use_overhead_cover, avoid_exposed_roost_routes, read_shadows_and_wing_sounds]
  common_misbeliefs: [every_Aerodactyl_is_berserk, flight_means_unavoidable_pursuit, ancient_people_can_revive_amber]
  local_variation_notes: [relict_refuge_knowledge_is_content_gated]
identification_and_knowledge:
  baseline_recognition: mythical
  unknown_presentation_hooks: [a_huge_shadow_crosses_a_route_before_a_previously_fossil_known_body_is_seen_alive]
  local_aliases_or_titles: none
  identification_evidence: [winged_reptilian_silhouette, serrated_fangs, fossil_or_amber_similarity, ground_air_state_difference]
  initial_knowledge_fragments: [open_sky_is_dangerous, cover_changes_the_attack_lane]
  post_identification_knowledge: [restoration_exists_only_as_later_context_and_living_presence_is_a_relict_lineage]
  advanced_insights: [grounding_or_forcing_tight_geometry_changes_mobility_without_changing_the_species_stat_profile]
  exceptional_individual_knowledge_hooks: [one_Aerodactyl_is_known_by_a_damaged_wing_edge_and_a_particular_cliff_route]
threat_and_encounter:
  baseline_threat_band: very_high_in_open_aerial_context
  default_behavior_states: [distant_airborne, circling, warning, swooping, grounded, feeding, withdrawing_to_roost]
  aggression_tendency: predatory_or_defensive_context_dependent_not_permanent_berserk
  territoriality: unknown_or_local
  avoidance_tendency: variable
  warning_signs: [shadow, wing_sound, circling, roost_signs, sudden_altitude_change]
  encounter_triggers: [relict_refuge_entry, prey_context, roost_disturbance, exposed_route_crossing]
  escalation_triggers: [approach_to_roost, attack, isolated_exposed_target, blocked_retreat]
  deescalation_conditions: [reach_cover, leave_roost_or_hunting_lane, stop_pursuit_or_threat, allow_withdrawal]
  pursuit_profile: high_pressure_but_event_bounded
  group_size_effects: [each_Aerodactyl_is_one_entity_with_one_ordinary_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [bite_injury, aerial_collision, position_loss, height_or_route_denial]
  consequence_ceiling: severe_in_explicit_predatory_height_or_exceptional_context
  human_check_hooks:
  - action: evade_or_break_an_aerial_swoop_lane
    relevant_species_axis: speed
    relevant_tags: [airborne, swoop, predation]
    relevant_hazard_keys: [aerodactyl-aerial-swoop]
    difficulty_guidance: D024_context_from_cover_lane_height_grounded_state_and_prior_warning
    notes: Speed_6_is_not_auto_hit_or_auto_initiative
  - action: survive_or_escape_close_fang_pressure
    relevant_species_axis: force
    relevant_tags: [serrated_fangs]
    relevant_hazard_keys: [aerodactyl-aerial-swoop]
    difficulty_guidance: D024_context_from_position_cover_allies_and_Aerodactyl_state
    notes: restoration_casualties_preserve_severity_not_unavoidability
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, territorial, predatory, unusually_tolerant]
    condition_variants: [airborne, grounded, feeding, injured, roosting]
    local_lineage_variants: [relict_lineage_traits_require_explicit_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: exceptionally_rare_inside_an_already_tiny_lineage
    candidate_causes: [age, flight_history, unusual_size, old_injury_adaptation, local_lineage]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_wing_fang_or_scar_pattern, roost_or_hunting_history]
    warning_or_rumor_hooks: [one_Aerodactyl_is_known_by_a_torn_wing_edge_and_a_repeated_shadow_route]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_trust, safe_space_for_large_flight_and_ground_rest, conservation_safe_relationship]
  trust_building_paths: [noncoercive_repeat_contact, mutual_survival, respecting_roost_and_retreat]
  reasons_to_stay: [exceptional_bond_only]
  rejection_or_departure_reasons: [forced_riding, restraint, roost_denial, coercive_combat_or_transport]
  human_social_costs: [extreme_fear, large_space_need, predatory_risk, refuge_conservation_pressure]
  logistics:
    food: [species_appropriate_prey_or_food_exact_mix_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [safe_large_roost_or_rest_site]
    space_travel: [requires_large_clearance_and_does_not_imply_passenger_flight]
    settlement_restrictions: [dense_settlements_are_poor_fit]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_scouting_or_aerial_presence_only_when_voluntary_and_route_permissions_allow]
  handling_boundaries: [no_defeat_to_recruit, no_riding_or_fast_travel_assumption, no_amber_restoration_role, one_visible_companion_slot]
  separation_injury_notes: [removal_from_tiny_lineage_can_be_an_ecological_cost]
mechanical_hooks:
  tracking_clues: [shadows, wing_sound, roost_signs, predation_marks]
  avoidance_preparation: [overhead_cover, route_timing, avoid_exposed_cliff_lanes]
  resistance_or_protection: [hard_cover, confined_geometry, distance_from_edges]
  combat_approach_permissions: [discrete_airborne_and_grounded_states, authored_swoop_lanes]
  blocked_or_invalid_approaches: [auto_initiative, unlimited_pursuit, unrestricted_fast_travel, passenger_carrying_assumption, permanent_berserk_state, ancient_amber_lab]
  fear_hooks: [the_shadow_arrives_before_the_cry]
  injury_hazard_hooks: [aerodactyl-aerial-swoop]
  environmental_state_hooks: [open_sky, overhead_cover, cliff_edge, airborne, grounded, roost]
  companion_assistance_hooks: [bounded_voluntary_scouting_without_passenger_transport]
  fortune_spike_opportunities: [reach_tight_cover_and_force_the_attack_lane_to_break]
  trouble_spike_complications: [the_route_opens_into_a_cliff_expanse_while_the_Aerodactyl_is_airborne]
hunting_materials_and_resources:
  killing_treatment: strongly_discouraged_by_tiny_relict_population_and_no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_or_amber_fossil_context_only_when_event_provenance_supports_them]
  dangerous_harvesting: [living_fangs_wings_or_body_parts_are_not_repeatable_resource_nodes]
  taboo_or_protection: [local_conservation_pressure_is_valid_D2]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [amber_DNA_restoration_is_modern_context_and_cannot_be_backported_to_proto_kanto]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_distant_Aerodactyl_gliding_to_a_roost_without_entering_its_attack_lane]
  dangerous: [cross_an_exposed_cliff_route_under_a_circling_Aerodactyl_and_reach_cover]
  unusual_or_rare: [discover_a_tiny_living_relict_lineage_where_only_amber_and_fossils_were_expected]
  discovery_insight: [learn_that_grounded_and_airborne_states_change_counterplay_without_changing_stats]
  route_environment: [isolated_cliff_basin_sea_stack_or_equivalent_aerial_refuge_exact_geography_deferred]
  settlement_culture: [distant_reports_are_treated_as_mything_or_disputed_until_direct_evidence]
  cross_species: []
presentation_and_p6_followups:
  initial_bestiary_presentation: shadow_wing_sound_and_swoop_lane_before_full_body_or_restoration_context
  progressive_reveal_notes: [reveal_grounded_weakness_through_observation, keep_restoration_scoped_casualties_separate_from_species_wide_aggression]
  species_specific_visual_needs: [clear_airborne_grounded_attack_lane_and_cover_readability]
  species_specific_audio_needs: [directional_wing_and_cry_warning]
  special_ui_or_readability_needs: [Speed_6_must_not_look_like_unavoidable_or_extra_turn_behavior]
  p6_followup_required: true
cross_species_links:
  evolution_family: [mega_aerodactyl_external_later_mechanic]
  predator_prey: [exact_prey_requires_local_authoring]
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_air_speed_endurance, exact_ground_penalty, restoration_casualty_context, species_wide_aggression_distribution, relict_population_size_and_geography]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [airborne_grounded_transition_rules_and_relict_encounter_chain]
  deferred_to_p6: [swoop_cover_shadow_and_grounded_readability]
  deferred_to_p7: [cached_airborne_grounded_and_locality_eligibility_state_if_runtime_needs_it]
```
