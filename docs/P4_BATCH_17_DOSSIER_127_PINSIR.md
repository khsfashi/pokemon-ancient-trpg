# P4 Batch 17 — #127 Pinsir Full-Schema Dossier

Part of `docs/P4_BATCH_17_FULL_SCHEMA_DOSSIERS.md`.

---

## #127 Pinsir / 쁘사이저

```yaml
identity:
  national_dex: 127
  species_key: pinsir
  official_name_en: Pinsir
  official_name_ko: 쁘사이저
  evolution_family_keys: [pinsir]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-PINSIR-SG, P4_BATCH_17_SOURCE_REVIEW]
  official_evidence:
  - claim_id: PNS-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PINSIR-SG
    version_context: current_official_portal__OBSERVED_ANATOMY
    paraphrase: large_pincers_are_powerful_body_integrated_natural_weapons
  - claim_id: PNS-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PINSIR-SG
    version_context: current_official_portal__OBSERVED_ECOLOGY
    paraphrase: handles_cold_poorly_and_changes_rest_or_shelter_behavior_in_cold_conditions
  - claim_id: PNS-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__MEASURED_AND_VERSION_SCOPED_EXTRAORDINARY
    paraphrase: historical_entries_add_roughly_twice_body_weight_lifting_difficult_release_sleep_burrowing_and_thick_log_shattering
  - claim_id: PNS-C1-004
    evidence_class: C1
    source_ref: OFFICIAL-DEX-PINSIR-SG
    version_context: later_region_current_social_evidence
    paraphrase: Alola_material_describes_region_specific_Vikavolt_disputes_and_a_friendlier_Heracross_relationship
  derived_claims:
  - claim_id: PNS-D1-001
    evidence_class: D1
    based_on: [PNS-C1-001, PNS-C1-003]
    statement: pincers_support_severe_close_range_restraint_crushing_and_throwing_pressure
    canon_boundary_note: no_automatic_grapple_fixed_force_equation_or_universal_structure_damage
  - claim_id: PNS-D1-002
    evidence_class: D1
    based_on: [PNS-C1-002, PNS-C1-003]
    statement: cold_can_be_an_authored_species_local_state_that_changes_activity_and_shelter_behavior
    canon_boundary_note: no_exact_global_temperature_threshold_or_type_wide_cold_rule
  - claim_id: PNS-D1-003
    evidence_class: D1
    based_on: [PNS-C1-004]
    statement: later_region_social_relationships_are_provenance_context_only
    canon_boundary_note: do_not_copy_Alolan_ecology_into_proto_Kanto_without_independent_support_or_D2_authoring
canonical_source_data:
  types: [bug]
  base_stats_raw: {hp: 65, attack: 125, defense: 100, special_attack: 55, special_defense: 70, speed: 85}
  abilities_relevant_to_p4: [hyper_cutter_as_modern_context, mold_breaker_as_modern_context, moxie_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.5_m, weight: 55.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: []
    canonical_conditions: [Mega_Pinsir_is_later_temporary_form_context_not_ordinary_evolution_or_baseline_flight_permission]
  other_material_facts:
  - powerful_body_integrated_pincers
  - cold_intolerance_or_sluggishness
  - version_scoped_sleep_burrowing_and_cover_seeking
  - version_scoped_roughly_twice_body_weight_lift_claim
  - version_scoped_thick_log_shattering_and_difficult_release_claims
  - later_region_social_relationships_not_baseline_proto_kanto_facts
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 6
  guard: 5
  potency: 2
  resistance: 3
  speed: 4
  derivation_notes: {vigor: hp_65, force: attack_125, guard: defense_100, potency: special_attack_55, resistance: special_defense_70, speed: speed_85}
  calibration_flags:
  - no_manual_exception
  - force_6_and_guard_5_do_not_create_grapple_carry_or_structure_formulas
  - cold_response_is_contextual_ecology_not_exact_temperature_simulation
  - pincers_are_body_integrated_and_not_equipment
capabilities_and_hazards:
  locomotion: [strong_ground_movement, version_scoped_shallow_or_sleep_burrowing_only_when_authored]
  physical_hazards: [pincer_restraint, crushing_pressure, swinging_or_throwing_a_gripped_target_when_position_allows]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [cold_sluggish_state, shelter_seeking_in_cold, difficult_release_after_secure_grip]
  utility_interaction_capabilities: [limited_burrow_or_object_interaction_only_when_event_and_material_context_support_it]
  immunities_or_approach_invalidators:
  - Hyper_Cutter_does_not_make_pincers_unbreakable
  - Mold_Breaker_does_not_grant_rule_bypass
  - Moxie_does_not_create_kill_XP_or_permanent_growth
  - sleep_burrowing_does_not_grant_generic_mining_or_subterranean_travel
  hazard_records:
  - hazard_key: pinsir-pincer-restraint
    kind: other
    delivery_or_exposure: [entering_pincer_reach_and_being_caught_in_an_authored_grip]
    prerequisite_or_trigger: [Pinsir_has_position_and_leverage_to_close_its_pincers_on_the_target]
    warning_signs: [pincers_spread_or_angle_toward_target, charge_or_close_range_commitment, nearby_crushed_or_displaced_material_signs]
    immediate_effects: [restraint, crushing_injury_pressure, possible_swing_or_throw_when_authored]
    delayed_or_persistent_effects: [continued_restraint_only_while_grip_and_position_state_persist]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_compound_or_named_exceptional_context
    countermeasures: [avoid_pincer_lane, use_distance_or_cover, disrupt_leverage_or_body_position, exploit_cold_sluggishness_when_contextually_present, assist_the_gripped_target]
    emergency_consumable_hooks: []
    context_amplifiers: [close_confined_space, target_already_off_balance, secure_leverage, warm_active_conditions]
    context_mitigators: [distance, solid_cover, disrupted_leverage, cold_sluggish_state, terrain_that_limits_pincer_angle]
    governing_species_axes: [force, guard]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [PNS-C1-001, PNS-C1-003, PNS-D1-001]
  notes:
  - difficult_escape_wording_is_restraint_pressure_not_automatic_capture_or_agency_removal
  - body_weight_ratio_is_evidence_not_a_generic_carry_capacity_formula
  - material_breaking_claims_do_not_create_universal_destructible_terrain
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: iron_age_protection_and_shelter_constraints_can_make_pincer_and_cold_ecology_encounters_more_consequential_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: seasonal_or_weather_context_can_shift_activity_and_shelter_location
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat: [warm_or_sheltered_localities_when_supported_by_local_authoring, exact_proto_kanto_distribution_unknown]
  ecological_niche: [powerful_bug_competitor_or_predator_with_temperature_sensitive_activity]
  activity_pattern: [cold_conditions_can_reduce_activity_or_change_shelter_behavior]
  seasonal_notes: [cold_seasons_may_shift_rest_sites_under_D2_but_exact_thresholds_are_unknown]
  feeding_and_resource_interaction: [prey_gripping_is_source_backed_in_historical_entries, complete_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [Alolan_Vikavolt_and_Heracross_relationships_are_later_region_context_only]
  environmental_effects: [sleep_burrows_or_disturbed_cover_can_be_local_signs_not_generic_tunneling_networks]
  observable_signs: [pincer_marks, displaced_or_crushed_wood_when_explicitly_supported, shallow_shelter_or_burrow_signs, cold_weather_absence_from_exposed_ground]
  locality_constraints: [D034_direct_encounterability_somewhere_does_not_equal_commonness_or_region_wide_presence]
  unsupported_gaps: [exact_pincer_force_and_material_limits, exact_cold_threshold, burrow_depth_and_traversability, grip_release_conditions, proto_kanto_cross_species_relationships, complete_diet]
human_perception_and_culture:
  ordinary_attitude: [strong_caution_where_known]
  specialist_knowledge_holders: [foragers, trackers, hunters_or_observers_who_read_pincer_and_shelter_signs]
  benefits_and_services: [none_required]
  fears_and_avoidance: [being_caught_between_pincers, close_range_crushing, shelter_conflict_in_cold_weather]
  myths_omens_taboos: [local_D2_stories_may_exaggerate_unbreakable_horns_or_unescapable_grips]
  practical_customs: [keep_out_of_pincer_lane, avoid_blocking_shelter_sites, expect_lower_activity_or_different_resting_places_in_cold]
  common_misbeliefs: [Pinsir_can_crush_any_material, every_grip_is_inescapable, burrowing_makes_it_a_miner, Mega_Pinsir_proves_ordinary_flight]
  local_variation_notes: [later_Alolan_relationships_are_not_assumed_in_proto_Kanto]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [large_pincer_marks_and_a_shallow_shelter_site_appear_where_the_creature_itself_is_absent_in_the_cold]
  local_aliases_or_titles: none
  identification_evidence: [large_pincers, body_shape, grip_marks, cold_shelter_behavior]
  initial_knowledge_fragments: [close_range_between_the_pincers_is_extremely_dangerous, cold_changes_activity]
  post_identification_knowledge: [burrowing_is_shelter_behavior_not_proof_of_unrestricted_tunneling]
  advanced_insights: [position_and_leverage_define_restraint_pressure_more_reliably_than_fixed_force_math]
  exceptional_individual_knowledge_hooks: [a_large_old_Pinsir_has_a_known_winter_refuge_and_distinctive_pincer_scarring]
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states: [foraging_or_roaming, sheltering, warning, closing, gripping, withdrawing, cold_sluggish]
  aggression_tendency: variable_and_context_dependent
  territoriality: local_or_shelter_specific
  avoidance_tendency: variable_and_potentially_higher_when_cold_or_disadvantaged
  warning_signs: [pincer_orientation, body_charge, shelter_defense, disturbed_wood_or_ground]
  encounter_triggers: [route_crossing, shelter_overlap, food_or_preylike_context, close_approach]
  escalation_triggers: [cornering, shelter_intrusion, attack, continued_close_proximity]
  deescalation_conditions: [increase_distance, leave_shelter_area, stop_interference, allow_withdrawal]
  pursuit_profile: short_to_moderate_or_individual_specific
  group_size_effects: [each_Pinsir_is_independent_and_pincer_count_does_not_change_action_economy]
  ordinary_consequence_categories: [restraint, crushing_injury, throw_or_position_loss, route_or_shelter_denial]
  consequence_ceiling: severe_in_explicit_grip_or_compound_context
  human_check_hooks:
  - action: avoid_or_break_a_pincer_grip
    relevant_species_axis: force
    relevant_tags: [pincer_restraint, leverage]
    relevant_hazard_keys: [pinsir-pincer-restraint]
    difficulty_guidance: D024_context_from_position_leverage_cover_allied_help_and_current_grip_state
    notes: force_6_is_not_automatic_grapple_success_and_failure_does_not_remove_future_agency
  - action: use_cold_or_terrain_context_to_disengage
    relevant_species_axis: speed
    relevant_tags: [cold_sluggish_state]
    relevant_hazard_keys: [pinsir-pincer-restraint]
    difficulty_guidance: D024_context_only_when_the_authored_weather_state_supports_reduced_activity
    notes: there_is_no_universal_temperature_threshold_or_cold_damage_rule
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, territorial, predatory, shelter_defensive, unusually_tolerant]
    condition_variants: [active_warm, warning, gripping, cold_sluggish, sheltering, injured]
    local_lineage_variants: [none_without_evidence_or_D2_local_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_pincer_growth, long_territorial_history, winter_survival, persistent_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_pincers_or_scars, persistent_refuge_or_route_history, clear_warning_traits]
    warning_or_rumor_hooks: [one_old_Pinsir_returns_to_the_same_winter_refuge_and_has_thrown_multiple_large_intruders_from_the_entrance]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_trust, safe_space_for_pincers, respect_for_temperature_and_shelter_needs]
  trust_building_paths: [noncoercive_repeat_contact, mutual_aid, respecting_rest_and_shelter_boundaries]
  reasons_to_stay: [exceptional_bond, stable_shared_history, safe_shelter_relationship]
  rejection_or_departure_reasons: [forced_restraint, live_harvest_attempt, pincer_use_as_equipment_or_labor, repeated_shelter_disruption]
  human_social_costs: [settlement_fear_of_pincers, space_requirements, cold_weather_shelter_planning]
  logistics:
    food: [species_appropriate_food_exact_complete_diet_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [protected_rest_site_with_cold_avoidance_when_needed]
    space_travel: [clearance_for_large_pincers]
    settlement_restrictions: [avoid_dense_crowds_and_fragile_spaces_when_agitated]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_lifting_or_object_control_only_when_voluntary_and_contextual_never_from_fixed_two_times_body_weight_formula]
  handling_boundaries: [no_defeat_to_recruit, no_live_harvest, no_generic_carry_mount_or_mining_role, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [pincer_marks, disturbed_wood_or_ground, cold_weather_shelter_signs]
  avoidance_preparation: [keep_pincer_clearance, identify_shelter_sites, use_distance_and_cover]
  resistance_or_protection: [solid_cover, spacing, allied_help_against_restraint, contextual_cold_sluggishness]
  combat_approach_permissions: [explicit_grip_state, leverage_sensitive_throw_or_crush, discrete_cold_sluggish_state]
  blocked_or_invalid_approaches: [automatic_grapple, fixed_crushing_force, body_weight_carry_formula, universal_structure_damage, generic_mining, exact_temperature_simulation, detachable_pincer_weapons]
  fear_hooks: [a_pincer_closes_and_the_problem_becomes_position_and_leverage_not_a_single_damage_number]
  injury_hazard_hooks: [pincer_restraint_and_crushing]
  environmental_state_hooks: [distance, leverage, shelter, temperature_context, terrain_clearance]
  companion_assistance_hooks: [bounded_object_handling_only_when_safe]
  fortune_spike_opportunities: [cold_weather_or_bad_leverage_creates_a_real_disengagement_window]
  trouble_spike_complications: [the_party_enters_the_only_dry_shelter_and_finds_it_already_occupied]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_pincers_and_horns_are_not_detachable_or_repeatable_harvest_nodes]
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
  scalability_limits: [pincer_strength_and_burrowing_do_not_create_generic_cranes_mining_technology_or_weapon_supply]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_Pinsir_selecting_a_shelter_site_as_temperature_drops_without_intruding]
  dangerous: [a_close_route_encounter_becomes_a_pincer_restraint_problem_where_leverage_and_allied_help_matter]
  unusual_or_rare: [an_exceptional_winter_refuge_holder_has_a_long_local_history_and_distinctive_pincer_scars]
  discovery_insight: [cold_sluggishness_and_sleep_burrowing_are_ecological_states_not_type_wide_temperature_or_mining_rules]
  route_environment: [warm_open_ground_and_cold_sheltered_spaces_change_where_encounters_are_likely]
  settlement_culture: [local_people_leave_known_winter_refuges_undisturbed_without_normalizing_companionship]
  cross_species: [Alolan_Vikavolt_and_Heracross_relationships_remain_later_region_context]
presentation_and_p6_followups:
  initial_bestiary_presentation: powerful_bug_Pokemon_with_body_integrated_pincers_severe_restraint_pressure_and_cold_sensitive_shelter_behavior
  progressive_reveal_notes: [show_leverage_and_temperature_context_before_extraordinary_log_or_weight_claims, separate_Alolan_evidence]
  species_specific_visual_needs: [pincer_lane_and_grip_state, leverage_readability, cold_sluggish_and_shelter_states]
  species_specific_audio_needs: [pincer_close_or_strain_and_ground_shelter_cues_if_needed]
  special_ui_or_readability_needs: [explicit_grip_state_with_counterplay_without_unavoidable_capture_language]
  p6_followup_required: true
cross_species_links:
  evolution_family: []
  predator_prey: []
  competition: [vikavolt_external_later_region_context_only]
  symbiosis: [heracross_external_later_region_context_only]
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_pincer_force_and_material_limits, exact_cold_temperature_threshold, burrow_depth_and_traversability, grip_release_conditions, proto_kanto_relationships]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [explicit_pincer_grip_leverage_and_discrete_cold_sluggish_states]
  deferred_to_p6: [grip_counterplay_and_temperature_shelter_readability]
  deferred_to_p7: [cache_grip_and_weather_state_do_not_run_continuous_force_material_or_temperature_simulation]
```
