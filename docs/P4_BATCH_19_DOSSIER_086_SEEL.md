# P4 Batch 19 — #086 Seel Full-Schema Dossier

Part of `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`.

---

## #086 Seel / 쥬쥬

```yaml
identity:
  national_dex: 86
  species_key: seel
  official_name_en: Seel
  official_name_ko: 쥬쥬
  evolution_family_keys: [seel, dewgong]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SEEL-SG, P4_BATCH_19_SOURCE_REVIEW]
  official_evidence:
  - claim_id: SEE-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-SEEL-SG
    version_context: current_official_portal__OBSERVED_ANATOMY_AND_COLD_WATER_ECOLOGY
    paraphrase: Seel_uses_its_hard_head_protrusion_to_break_ice_and_strongly_prefers_cold_water_among_floating_ice
  - claim_id: SEE-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__LOCOMOTION_BREATHING_AND_COLD_MEASUREMENTS
    paraphrase: historical_entries_add_poor_land_walking_graceful_swimming_nostril_closure_underwater_breathing_hole_behavior_and_extreme_cold_numeric_wording
  derived_claims:
  - claim_id: SEE-D1-001
    evidence_class: D1
    based_on: [SEE-C1-001, SEE-C1-002]
    statement: Seel_is_a_cold_water_specialist_with_localized_ice_breaking_and_meaningful_water_land_asymmetry
    canon_boundary_note: no_universal_ice_destruction_mining_or_continuous_temperature_formula
  - claim_id: SEE-D1-002
    evidence_class: D1
    based_on: [SEE-C1-002]
    statement: underwater_activity_requires_eventually_accessing_air
    canon_boundary_note: no_indefinite_underwater_breathing_or_continuous_oxygen_meter
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 65, attack: 45, defense: 55, special_attack: 45, special_defense: 70, speed: 45}
  abilities_relevant_to_p4: [thick_fat_as_modern_context, hydration_as_modern_context, ice_body_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.1_m, weight: 90.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [dewgong]
    canonical_conditions: [modern_level_34_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [hard_head_protrusion, cold_water_preference, historical_land_walking_limitation, nostril_closure, under_ice_hunting_and_breathing_holes, version_scoped_cold_measurements]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 2
  guard: 2
  potency: 2
  resistance: 3
  speed: 2
  derivation_notes: {vigor: hp_65, force: attack_45, guard: defense_55, potency: special_attack_45, resistance: special_defense_70, speed: speed_45}
  calibration_flags: [no_manual_exception, cold_tolerance_not_encoded_as_immunity, ice_breaking_not_encoded_as_generic_force_permission, aquatic_competence_not_indefinite_breathing]
capabilities_and_hazards:
  locomotion: [strong_aquatic_swimming, poor_or_awkward_land_walking_from_historical_evidence]
  physical_hazards: [localized_head_first_ice_impact, body_collision_in_water]
  elemental_environmental_hazards: [cold_water_specialization]
  anomalous_hazards: []
  behavioral_capabilities: [under_ice_hunting, shallow_seabed_resting_version_scoped, breathing_hole_creation_when_needed]
  utility_interaction_capabilities: [can_break_suitable_local_ice_when_geometry_and_material_allow]
  immunities_or_approach_invalidators: [cold_adaptation_does_not_invalidate_all_cold_or_Ice_hazards, water_competence_does_not_remove_air_requirement]
  hazard_records:
  - hazard_key: seel-ice-impact
    kind: other
    delivery_or_exposure: [close_range_head_impact_or_ice_fragment_displacement]
    prerequisite_or_trigger: [Seel_commits_to_breaking_local_ice_or_defends_itself_with_the_head]
    warning_signs: [visible_head_alignment, repeated_bumps_beneath_ice, cracking_sound, stressed_ice_surface]
    immediate_effects: [blunt_injury_or_local_ice_breakage_and_position_change]
    delayed_or_persistent_effects: [unstable_ice_or_cold_water_exposure_if_the_scene_supports_it]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_confined_thin_ice_or_named_exceptional_context
    countermeasures: [leave_impact_line, use_distance, avoid_standing_on_stressed_ice, provide_an_exit_or_air_hole]
    emergency_consumable_hooks: []
    context_amplifiers: [thin_or_prefractured_ice, confined_under_ice_space, poor_footing]
    context_mitigators: [open_water, visible_cracks, distance, stable_shore]
    governing_species_axes: [force]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SEE-C1-001, SEE-D1-001]
  - hazard_key: seel-under-ice-water-exposure
    kind: drowning
    delivery_or_exposure: [human_or_companion_enters_cold_water_or_becomes_trapped_beneath_ice_during_an_authored_scene]
    prerequisite_or_trigger: [unsafe_water_entry_or_ice_failure]
    warning_signs: [cracking_ice, visible_open_leads, cold_water, limited_air_access]
    immediate_effects: [cold_water_and_breathing_pressure_with_position_loss]
    delayed_or_persistent_effects: [ordinary_cold_or_drowning_consequences_only_if_exposure_continues]
    ordinary_consequence_ceiling: severe
    exceptional_consequence_ceiling: life_threatening_when_escape_or_rescue_is_explicitly_constrained
    countermeasures: [avoid_unsafe_entry, preserve_visible_exit, use_rope_or_shore_support, retreat_or_rescue_through_known_opening]
    emergency_consumable_hooks: []
    context_amplifiers: [under_ice_geometry, darkness, current, lack_of_exit]
    context_mitigators: [shallow_water, visible_air_hole, shore_access, prepared_rescue]
    governing_species_axes: []
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SEE-C1-002, SEE-D1-002]
  notes: [no_continuous_temperature_or_oxygen_simulation, water_entry_never_silently_removes_player_input]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: preindustrial_cold_water_travel_and_rescue_constraints_can_make_ordinary_Seel_ecology_more_consequential_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: local_ice_and_air_access_context_can_raise_environmental_risk
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [cold_coastal_water, floating_ice_or_seasonal_ice_localities_when_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [cold_water_aquatic_forager]
  activity_pattern: [aquatic_foraging, historical_daytime_shallow_seabed_resting_possible]
  seasonal_notes: [cold_conditions_can_support_presence_but_exact_calendar_unknown]
  feeding_and_resource_interaction: [under_ice_hunting_source_backed, exact_prey_mix_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [local_aquatic_food_web_requires_authoring]
  environmental_effects: [localized_breathing_holes_or_broken_ice_when_present]
  observable_signs: [ice_holes, head_impact_marks, tracks_or_drag_marks_near_shore, sightings_among_floating_ice]
  locality_constraints: [cold_water_fit_does_not_mean_every_cold_water_zone_contains_Seel]
  unsupported_gaps: [exact_temperature_range, ice_material_limit, submersion_duration, land_endurance, proto_kanto_abundance]
human_perception_and_culture:
  ordinary_attitude: [caution_and_curiosity_near_cold_water]
  specialist_knowledge_holders: [fishers, winter_route_watchers, coastal_foragers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [unstable_ice_near_activity, close_head_impact, under_ice_entrapment]
  myths_omens_taboos: [local_stories_may_exaggerate_cold_resistance_into_total_invulnerability]
  practical_customs: [watch_for_fresh_ice_holes_and_cracks, keep_shore_exits_visible, do_not_corner_on_land]
  common_misbeliefs: [Seel_never_needs_air, Seel_can_break_any_ice, Seel_is_immobile_on_land]
  local_variation_notes: [no_region_wide_ice_hunting_institution_is_required]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_round_breathing_hole_appears_in_ice_before_the_swimmer_is_seen]
  local_aliases_or_titles: none
  identification_evidence: [hard_head_protrusion, cold_water_presence, awkward_land_motion, recurring_ice_holes]
  initial_knowledge_fragments: [stronger_in_water_than_on_land, ice_impact_is_local_not_arbitrary]
  post_identification_knowledge: [it_still_needs_access_to_air_during_long_under_ice_activity]
  advanced_insights: [predicting_air_hole_or_open_water_routes_can_allow_noncombat_avoidance]
  exceptional_individual_knowledge_hooks: [an_old_Seel_is_known_for_reopening_the_same_winter_ice_leads]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_normally_higher_in_unsafe_ice_or_water_geometry
  default_behavior_states: [swimming, foraging, resting, surfacing, ice_bashing, warning, retreating, defensive]
  aggression_tendency: low_or_defensive_by_default
  territoriality: low_or_unknown
  avoidance_tendency: moderate_when_escape_water_is_available
  warning_signs: [ice_cracks, surfacing, visible_head_alignment, abrupt_water_movement]
  encounter_triggers: [shared_cold_water_route, under_ice_hunting_area, blocked_air_hole, close_approach]
  escalation_triggers: [cornering, blocking_air_access, attack, close_handling]
  deescalation_conditions: [create_space, leave_open_water_or_air_access, stop_pursuit, retreat_to_shore]
  pursuit_profile: capable_in_water_but_not_guaranteed_and_event_bounded
  group_size_effects: [each_Seel_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [blunt_injury, cold_water_exposure, position_loss]
  consequence_ceiling: severe_when_under_ice_escape_or_rescue_is_constrained
  human_check_hooks:
  - action: cross_or_work_near_Seel_ice_activity_safely
    relevant_species_axis: force
    relevant_tags: [ice_impact, aquatic]
    relevant_hazard_keys: [seel-ice-impact, seel-under-ice-water-exposure]
    difficulty_guidance: D024_context_from_ice_condition_distance_exit_visibility_and_warning
    notes: no_numeric_temperature_or_ice_thickness_formula
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, curious, food_focused, defensive_near_air_hole]
    condition_variants: [resting, foraging, fatigued_on_land, injured, cold_water_active]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_size, repeated_winter_survival, persistent_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_ice_route_or_marks, scars_or_size_tell, history]
    warning_or_rumor_hooks: [one_Seel_can_open_a_route_through_ice_others_avoid]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, regular_water_access, safe_cold_water_and_air_access, realistic_land_travel_plan]
  trust_building_paths: [repeat_noncoercive_contact, food_or_rescue_without_capture, respecting_water_exit_and_rest]
  reasons_to_stay: [bond, dependable_shared_route, safe_access_to_water]
  rejection_or_departure_reasons: [forced_dry_travel, blocked_water_access, coercive_combat, neglect]
  human_social_costs: [water_access_and_travel_constraints]
  logistics:
    food: [regular_species_appropriate_food]
    water: [reliable_swimming_access]
    shelter_temperature: [cool_resting_conditions_when_possible_without_treating_cold_as_absolute_requirement]
    space_travel: [awkward_land_travel_requires_route_planning]
    settlement_restrictions: [protect_from_unsafe_heat_or_dry_confinement_and_manage_water_access]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_local_ice_breaking_and_water_route_help_when_voluntary_and_safe]
  handling_boundaries: [no_defeat_to_recruit, no_forced_icebreaker_role, no_assumed_indefinite_underwater_transport, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_aquatic_needs_remain_real]
mechanical_hooks:
  tracking_clues: [fresh_ice_holes, head_impact_marks, surfacing_patterns, shore_drag_marks]
  avoidance_preparation: [keep_shore_exit, inspect_ice, avoid_blocking_air_holes]
  resistance_or_protection: [distance, stable_ice_or_shore, prepared_rescue]
  combat_approach_permissions: [water_land_state_difference, localized_ice_breaking]
  blocked_or_invalid_approaches: [infinite_underwater_breathing, universal_cold_immunity, arbitrary_ice_or_terrain_deletion, continuous_temperature_or_oxygen_simulation]
  fear_hooks: [the_only_visible_air_hole_is_cracking_from_below]
  injury_hazard_hooks: [seel-ice-impact, seel-under-ice-water-exposure]
  environmental_state_hooks: [cold_water, open_water, under_ice, air_hole, shore]
  companion_assistance_hooks: [voluntary_local_ice_breaking_or_water_guidance]
  fortune_spike_opportunities: [identify_the_safe_air_hole_route_before_crossing]
  trouble_spike_complications: [the_short_route_crosses_ice_currently_used_for_under_ice_hunting]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_body_or_cold_adaptation_is_not_a_repeatable_resource_node]
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
  scalability_limits: [ice_breaking_and_cold_adaptation_do_not_create_mining_refrigeration_or_transport_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_Seel_surface_through_a_reused_breathing_hole]
  dangerous: [cross_cracking_ice_without_blocking_the_animal_or_losing_the_shore_exit]
  unusual_or_rare: [an_exceptional_Seel_opens_a_winter_passage_through_local_ice]
  discovery_insight: [learn_that_breathing_holes_reveal_bounded_air_requirements_not_fishlike_indefinite_submersion]
  route_environment: [cold_coast, seasonal_ice_bay, shallow_seabed_rest_site]
  settlement_culture: [local_winter_travelers_mark_active_ice_holes_without_claiming_ownership]
  cross_species: [Dewgong_may_share_cold_water_localities_when_authored]
presentation_and_p6_followups:
  initial_bestiary_presentation: ice_holes_and_awkward_shore_movement_before_numeric_cold_claims
  progressive_reveal_notes: [show_water_land_asymmetry_and_air_access, keep_extreme_temperature_wording_version_scoped]
  species_specific_visual_needs: [head_impact_telegraph, ice_cracks, surfacing_and_land_waddle_readability]
  species_specific_audio_needs: [under_ice_thump, ice_crack, surfacing_breath]
  special_ui_or_readability_needs: [water_and_air_access_state_must_be_clear_without_oxygen_meter]
  p6_followup_required: true
cross_species_links:
  evolution_family: [dewgong]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [dewgong_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_safe_temperature_range, exact_ice_limit, exact_submersion_duration, exact_land_endurance, proto_kanto_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [water_land_state_checks_ice_impact_eligibility_and_under_ice_escape_resolution]
  deferred_to_p6: [ice_crack_air_hole_and_locomotion_readability]
  deferred_to_p7: [cached_water_zone_cold_water_open_water_and_air_access_state_if_runtime_needs_it]
```
