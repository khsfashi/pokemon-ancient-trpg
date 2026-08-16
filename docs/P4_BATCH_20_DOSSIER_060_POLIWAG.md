# P4 Batch 20 — #060 Poliwag Full-Schema Dossier

Part of `docs/P4_BATCH_20_FULL_SCHEMA_DOSSIERS.md`.

---

## #060 Poliwag / 발챙이

```yaml
identity:
  national_dex: 60
  species_key: poliwag
  official_name_en: Poliwag
  official_name_ko: 발챙이
  evolution_family_keys: [poliwag, poliwhirl, poliwrath, politoed_external]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-POLIWAG-SG, P4_BATCH_20_SOURCE_REVIEW]
  official_evidence:
  - claim_id: POW-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-POLIWAG-SG
    version_context: current_official_portal__ANATOMY_AND_LOCOMOTION
    paraphrase: Poliwag_has_visible_internal_spiral_anatomy_and_newly_grown_legs_that_are_poor_at_walking_compared_with_swimming
  - claim_id: POW-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__THIN_SKIN_FLEXIBILITY_AND_SPIRAL_VARIATION
    paraphrase: historical_entries_add_thin_damp_flexible_skin_resistance_to_sharp_fangs_and_area_or_scientist_interpretations_of_spiral_direction
  derived_claims:
  - claim_id: POW-D1-001
    evidence_class: D1
    based_on: [POW-C1-001, POW-C1-002]
    statement: Poliwag_is_a_strongly_aquatic_juvenile_form_with_meaningful_land_water_asymmetry_and_thin_flexible_anatomy
    canon_boundary_note: no_continuous_growth_hydration_or_body_simulation
  - claim_id: POW-D1-002
    evidence_class: D1
    based_on: [POW-C1-002]
    statement: historical_fang_resistance_is_narrow_anatomical_evidence_not_universal_puncture_immunity
    canon_boundary_note: no_armor_multiplier_or_damage_immunity
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 40, attack: 50, defense: 40, special_attack: 40, special_defense: 40, speed: 90}
  abilities_relevant_to_p4: [water_absorb_as_modern_context, damp_as_modern_context, swift_swim_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 0.6_m, weight: 12.4_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [poliwhirl]
    canonical_conditions: [modern_level_25_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [visible_internal_spiral, newly_developed_legs, poor_land_walking, strong_swimming_preference, thin_damp_flexible_skin, historical_spiral_direction_variation]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 2
  guard: 2
  potency: 2
  resistance: 2
  speed: 4
  derivation_notes: {vigor: hp_40, force: attack_50, guard: defense_40, potency: special_attack_40, resistance: special_defense_40, speed: speed_90}
  calibration_flags: [no_manual_exception, aquatic_speed_not_unrestricted_traversal, thin_skin_not_puncture_immunity, development_not_real_time_growth]
capabilities_and_hazards:
  locomotion: [strong_swimming, poor_or_awkward_land_walking]
  physical_hazards: [small_body_collision_or_tail_body_strike_only_when_scene_supports_it]
  elemental_environmental_hazards: [water_environment_dependency_can_raise_route_or_drowning_pressure_for_humans_without_harming_Poliwag_by_default]
  anomalous_hazards: []
  behavioral_capabilities: [water_preference, feeding_linked_spiral_visibility]
  utility_interaction_capabilities: [small_aquatic_route_access_when_water_geometry_allows]
  immunities_or_approach_invalidators: [thin_flexible_skin_does_not_create_puncture_immunity, Water_type_does_not_grant_unrestricted_aquatic_or_land_traversal]
  hazard_records:
  - hazard_key: poliwag-water-route-pressure
    kind: drowning
    delivery_or_exposure: [human_or_companion_follows_or_pursues_Poliwag_into_unsafe_water_or_loses_footing_near_its_route]
    prerequisite_or_trigger: [unsafe_water_entry_or_unstable_bank_geometry]
    warning_signs: [deep_or_fast_water, poor_shore_access, Poliwag_remaining_mobile_where_humans_are_not]
    immediate_effects: [position_loss, separation, water_exposure]
    delayed_or_persistent_effects: [ordinary_drowning_or_cold_consequences_only_if_exposure_continues]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_when_exit_or_rescue_is_explicitly_constrained
    countermeasures: [stay_on_safe_bank, use_known_crossing, preserve_exit, do_not_follow_into_unknown_depth]
    emergency_consumable_hooks: []
    context_amplifiers: [current, darkness, steep_bank, lack_of_exit]
    context_mitigators: [shallow_water, visible_shore, rope_or_allies, known_route]
    governing_species_axes: [speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [POW-C1-001, POW-D1-001]
  notes: [poor_land_walking_is_a_relative_limitation_not_automatic_immobilization, no_continuous_moisture_or_maturation_timer]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: ordinary_Poliwag_remains_weak_but_unsafe_water_geometry_can_make_its_ecology_consequential_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: route_choice_and_land_water_state_can_change_encounter_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [ponds, slow_streams, marsh_edges, shallow_water, exact_proto_kanto_distribution_unknown]
  ecological_niche: [small_aquatic_forager]
  activity_pattern: [swimming, feeding, resting_near_water]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [feeding_can_make_visible_spiral_more_distinct, exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [local_aquatic_food_web_requires_authoring]
  environmental_effects: [small_ripples_tracks_or_bank_disturbance]
  observable_signs: [small_water_ripples, shallow_water_tracks, visible_spiral_when_seen_close, awkward_land_motion]
  locality_constraints: [water_habitat_fit_does_not_mean_every_pond_contains_Poliwag]
  unsupported_gaps: [exact_land_speed, exact_skin_puncture_limit, exact_spiral_direction_cause, exact_development_timing, proto_kanto_abundance]
human_perception_and_culture:
  ordinary_attitude: [low_fear_curiosity_or_food_web_interest]
  specialist_knowledge_holders: [fishers, marsh_foragers, healers_or_naturalists_with_local_knowledge]
  benefits_and_services: [none_required]
  fears_and_avoidance: [unsafe_water_pursuit_more_than_direct_combat]
  myths_omens_taboos: [local_stories_may_overinterpret_spiral_direction]
  practical_customs: [do_not_chase_small_aquatic_Pokemon_into_unknown_depth, use_spiral_and_leg_shape_for_identification]
  common_misbeliefs: [Poliwag_cannot_move_at_all_on_land, thin_skin_means_fragile_or_invulnerable, spiral_direction_proves_a_global_cosmic_rule]
  local_variation_notes: [spiral_direction_variation_does_not_require_region_wide_institutions]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_small_round_body_with_a_visible_spiral_moves_faster_in_water_than_its_new_legs_suggest]
  local_aliases_or_titles: none
  identification_evidence: [belly_spiral, tail, newly_developed_legs, aquatic_preference]
  initial_knowledge_fragments: [stronger_in_water_than_on_land, not_a_serious_direct_threat_normally]
  post_identification_knowledge: [thin_flexible_skin_does_not_equal_general_armor, following_it_into_water_can_be_the_real_hazard]
  advanced_insights: [land_water_transition_points_can_predict_safe_noncombat_capture_or_observation_without_forced_pursuit]
  exceptional_individual_knowledge_hooks: [an_unusually_old_or_large_Poliwag_is_known_by_a_distinct_spiral_and_bold_land_crossing]
threat_and_encounter:
  baseline_threat_band: very_low_to_low_directly_but_environment_can_raise_consequence
  default_behavior_states: [swimming, feeding, resting, awkward_land_moving, fleeing]
  aggression_tendency: low
  territoriality: low_or_unknown
  avoidance_tendency: high_when_water_escape_exists
  warning_signs: [rapid_retreat_to_water, splashing, bank_movement]
  encounter_triggers: [shoreline_observation, shallow_water_crossing, accidental_net_or_route_conflict]
  escalation_triggers: [cornering, grabbing, blocking_water_access]
  deescalation_conditions: [create_space, restore_water_exit, stop_chasing]
  pursuit_profile: usually_escape_oriented_not_persistent
  group_size_effects: [each_Poliwag_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [minor_contact_injury, position_loss, unsafe_water_exposure]
  consequence_ceiling: severe_only_when_environmental_escape_or_rescue_is_explicitly_constrained
  human_check_hooks:
  - action: follow_or_interact_with_Poliwag_near_water_without_entering_unsafe_route_state
    relevant_species_axis: speed
    relevant_tags: [aquatic, poor_land_walking]
    relevant_hazard_keys: [poliwag-water-route-pressure]
    difficulty_guidance: D024_context_from_depth_current_bank_exit_and_warning
    notes: no_swim_speed_formula_or_auto_drowning
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [shy, curious, food_focused, bold_near_shallow_water]
    condition_variants: [feeding, resting, recently_stranded, injured, energetic]
    local_lineage_variants: [spiral_direction_visual_variation_only_unless_D2_history_justifies_more]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [unusual_age, size, repeated_survival, local_lineage]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_spiral, size_or_scars, persistent_local_history]
    warning_or_rumor_hooks: [one_Poliwag_is_surprisingly_fast_and_bold_even_across_muddy_land]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, reliable_water_access, gentle_handling, appropriate_food]
  trust_building_paths: [repeat_noncoercive_contact, rescue_from_stranding, feeding_without_forced_capture]
  reasons_to_stay: [bond, safe_water, reliable_food]
  rejection_or_departure_reasons: [forced_dry_travel, blocked_water_access, rough_handling]
  human_social_costs: [need_for_water_access_and_care]
  logistics:
    food: [species_appropriate_food]
    water: [regular_clean_swimming_access]
    shelter_temperature: [moist_safe_rest_area_without_continuous_hydration_meter]
    space_travel: [land_travel_may_need_pacing_or_safe_carry_solution_without_inventory_abstraction]
    settlement_restrictions: [protect_from_drying_confinement_and_unsafe_water_channels]
    special_resources: [none_fixed]
  assistance_capabilities: [small_water_route_scouting_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_bait_role, no_generic_Water_type_traversal_permission, one_visible_companion_slot]
  separation_injury_notes: [bonded_Poliwag_remains_independent_and_water_needs_remain_real]
mechanical_hooks:
  tracking_clues: [small_ripples, bank_marks, spiral_sightings, awkward_land_tracks]
  avoidance_preparation: [inspect_water_route, preserve_shore_exit, avoid_forced_pursuit]
  resistance_or_protection: [safe_bank, known_shallow_crossing, rope_or_allies]
  combat_approach_permissions: [land_water_state_asymmetry, high_relative_speed_in_water]
  blocked_or_invalid_approaches: [automatic_land_immobilization, universal_puncture_immunity, continuous_growth_or_moisture_simulation, generic_Water_type_traversal]
  fear_hooks: [the_small_target_slips_into_water_that_is_far_deeper_than_it_looked]
  injury_hazard_hooks: [poliwag-water-route-pressure]
  environmental_state_hooks: [in_water, shallow_bank, on_land, safe_exit]
  companion_assistance_hooks: [voluntary_shallow_water_route_scouting]
  fortune_spike_opportunities: [spot_a_safe_shallow_transition_point_before_interacting]
  trouble_spike_complications: [the_Poliwag_flees_toward_a_steep_bank_with_no_easy_return]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [thin_skin_or_internal_anatomy_is_not_a_resource_node]
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
  scalability_limits: [anatomy_and_swimming_do_not_create_material_or_transport_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_Poliwag_feeding_until_its_spiral_becomes_more_visible]
  dangerous: [a_harmless_looking_chase_leads_toward_unsafe_water]
  unusual_or_rare: [an_exceptional_Poliwag_is_known_for_crossing_muddy_land_far_more_confidently_than_expected]
  discovery_insight: [learn_that_water_route_geometry_not_combat_power_is_the_main_encounter_risk]
  route_environment: [pond_edge, marsh_path, slow_stream, flooded_field]
  settlement_culture: [children_or_foragers_are_taught_not_to_follow_small_water_Pokemon_into_unknown_depth]
  cross_species: [Poliwhirl_shows_the_same_family_after_substantially_improved_land_viability]
presentation_and_p6_followups:
  initial_bestiary_presentation: visible_spiral_and_water_land_movement_contrast_before_any_type_based_assumption
  progressive_reveal_notes: [show_poor_land_gait, stronger_swimming, thin_skin_without_invulnerability]
  species_specific_visual_needs: [clear_land_vs_water_locomotion_states]
  species_specific_audio_needs: [small_splash_and_wet_land_movement_cues]
  special_ui_or_readability_needs: [route_risk_should_be_environmental_not_hidden_stat_formula]
  p6_followup_required: true
cross_species_links:
  evolution_family: [poliwhirl, poliwrath, politoed_external]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [pond_and_stream_species_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_land_speed_or_endurance, exact_skin_puncture_limit, exact_spiral_direction_cause, exact_developmental_timing]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_land_water_check_difficulty_and_environmental_consequence_resolution]
  deferred_to_p6: [locomotion_state_readability]
  deferred_to_p7: [discrete_land_water_state_and_cached_capability_lookup]
```

### Completion note

All 20 frozen-schema top-level sections are populated. Poliwag stays an ordinary weak species that may become routine with progression; danger comes mainly from authored water geometry rather than hidden scaling or universal Water-type rules. No blocking Human Design Gate remains.
