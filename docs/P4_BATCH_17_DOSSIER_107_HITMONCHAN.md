# P4 Batch 17 — #107 Hitmonchan Full-Schema Dossier

Part of `docs/P4_BATCH_17_FULL_SCHEMA_DOSSIERS.md`.

---

## #107 Hitmonchan / 홍수몬

```yaml
identity:
  national_dex: 107
  species_key: hitmonchan
  official_name_en: Hitmonchan
  official_name_ko: 홍수몬
  evolution_family_keys: [tyrogue_external_post_gen1, hitmonlee, hitmonchan, hitmontop_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-HITMONCHAN-SG, P4_BATCH_17_SOURCE_REVIEW]
  official_evidence:
  - claim_id: HMC-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-HITMONCHAN-SG
    version_context: current_official_portal__OBSERVED_COMBAT_BEHAVIOR
    paraphrase: corners_opponents_with_combinations_of_punches_from_both_sides
  - claim_id: HMC-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-HITMONCHAN-SG
    version_context: current_official_portal__MEASURED_EXTREME_NUMERIC_WORDING
    paraphrase: a_finishing_straight_punch_is_described_as_exceeding_300_mph
  - claim_id: HMC-C1-003
    evidence_class: C1
    source_ref: OFFICIAL-DEX-HITMONCHAN-SG
    version_context: current_official_portal__OBSERVED_ANATOMY_AND_RECOVERY_CADENCE
    paraphrase: fists_are_dense_muscle_and_after_roughly_three_minutes_of_fighting_it_pauses_to_steady_breathing_and_mood
  - claim_id: HMC-C1-004
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__ANALOGY_LEGEND_AND_VERSION_SCOPED_EXTRAORDINARY
    paraphrase: historical_entries_add_concrete_damage_air_slicing_graze_burn_and_boxer_or_bullet_train_comparisons
  derived_claims:
  - claim_id: HMC-D1-001
    evidence_class: D1
    based_on: [HMC-C1-001]
    statement: a_punch_combination_can_be_one_authored_action_and_effect
    canon_boundary_note: combinations_and_two_fists_do_not_create_extra_turns_or_free_followups
  - claim_id: HMC-D1-002
    evidence_class: D1
    based_on: [HMC-C1-002, HMC-C1-004]
    statement: extreme_strike_speed_is_real_source_pressure_but_should_remain_claim_level_capability_evidence
    canon_boundary_note: do_not_convert_mph_or_bullet_train_analogy_into_initiative_travel_kinetic_energy_or_damage_formulas
  - claim_id: HMC-D1-003
    evidence_class: D1
    based_on: [HMC-C1-003]
    statement: prolonged_fights_may_expose_an_authored_recovery_opening
    canon_boundary_note: roughly_three_minutes_is_cadence_fiction_not_a_global_real_time_timer_or_round_length
canonical_source_data:
  types: [fighting]
  base_stats_raw: {hp: 50, attack: 105, defense: 79, special_attack: 35, special_defense: 110, speed: 76}
  abilities_relevant_to_p4: [keen_eye_as_modern_context, iron_fist_as_modern_context, inner_focus_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.4_m, weight: 50.2_kg}
  evolution_source:
    evolves_from: tyrogue_external_post_gen1
    evolves_to: []
    canonical_conditions: [Tyrogue_and_stat_comparison_evolution_metadata_are_post_Gen1_context_only]
  other_material_facts:
  - bilateral_combination_punching
  - dense_muscular_fists
  - current_over_300_mph_finishing_punch_wording
  - roughly_three_minute_recovery_cadence
  - version_scoped_concrete_air_slicing_and_graze_burn_claims
  - boxer_world_champion_and_bullet_train_language_is_analogy_or_reputation
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 5
  guard: 3
  potency: 1
  resistance: 5
  speed: 3
  derivation_notes: {vigor: hp_50, force: attack_105, guard: defense_79, potency: special_attack_35, resistance: special_defense_110, speed: speed_76}
  calibration_flags:
  - no_manual_exception
  - punch_speed_wording_does_not_override_speed_3_or_create_real_world_physics
  - combination_punching_does_not_create_extra_action_economy
  - one_entity_one_turn_one_health_state_one_visible_companion_slot
capabilities_and_hazards:
  locomotion: [ordinary_bipedal_ground_movement, close_range_footwork]
  physical_hazards: [rapid_combination_punches, high_force_finishing_punch, version_scoped_graze_burn_or_air_slicing_pressure]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [prolonged_fight_recovery_opening_candidate]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators:
  - Keen_Eye_does_not_grant_omniscient_perception
  - Iron_Fist_does_not_create_a_fixed_diegetic_damage_multiplier
  - punch_speed_does_not_grant_automatic_first_action_or_auto_hit
  hazard_records:
  - hazard_key: hitmonchan-combination-strike
    kind: other
    delivery_or_exposure: [remaining_in_close_or_authored_striking_range_during_a_combination_action]
    prerequisite_or_trigger: [Hitmonchan_commits_to_a_punch_sequence_or_finishing_strike]
    warning_signs: [guard_change, arm_rotation_or_set, rapid_bilateral_feints, audible_air_displacement_when_authored]
    immediate_effects: [major_contact_injury, guard_or_position_pressure, possible_version_scoped_heat_or_air_cutting_effect_if_event_explicitly_supports_it]
    delayed_or_persistent_effects: [ordinary_injury_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_compound_or_exceptional_context
    countermeasures: [keep_distance_or_cover, deny_a_clean_striking_lane, exploit_recovery_or_mood_reset_opening_when_authored, use_ordinary_physical_protection]
    emergency_consumable_hooks: []
    context_amplifiers: [confined_space, clean_line_to_target, prolonged_exchange, target_misreads_combination_as_multiple_turns]
    context_mitigators: [solid_cover, distance, disrupted_stance, authored_recovery_opening]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [HMC-C1-001, HMC-C1-002, HMC-C1-003, HMC-D1-001, HMC-D1-002]
  notes:
  - combination_is_one_action_fiction_unless_P3_otherwise_grants_actions_for_independent_reasons
  - three_minute_wording_is_not_a_real_time_engine_timer
  - concrete_and_bullet_train_language_does_not_create_destructible_world_or_kinetic_energy_simulation
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: iron_age_protection_and_low_familiarity_with_extreme_strike_speed_can_raise_danger_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_prolonged_fights_can_reveal_a_recovery_opening
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat: [exact_proto_kanto_habitat_and_abundance_unknown]
  ecological_niche: [specialized_physical_combatant_or_defender_without_implied_human_boxing_role]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_complete_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [species_specific_only_when_evidence_or_D2_authoring_supports_them]
  environmental_effects: [no_generic_concrete_structure_or_terrain_destruction]
  observable_signs: [dense_repeated_impact_marks, rapid_bilateral_strike_patterns, post_exchange_recovery_behavior_when_observed]
  locality_constraints: [D034_direct_encounterability_somewhere_does_not_equal_common_or_culturally_normalized_presence]
  unsupported_gaps: [exact_wild_habitat, punch_speed_distribution, recovery_duration_after_cadence_break, material_limits, graze_burn_mechanism, boxer_spirit_literal_truth]
human_perception_and_culture:
  ordinary_attitude: [wary_or_fascinated_where_known]
  specialist_knowledge_holders: [repeat_observers, survivors_who_recognize_combo_and_recovery_patterns]
  benefits_and_services: [none_required]
  fears_and_avoidance: [strikes_too_fast_to_read_cleanly, being_cornered_by_combinations]
  myths_omens_taboos: [local_D2_stories_may_compare_it_to_human_fighters_but_cannot_establish_a_formal_ancient_boxing_institution]
  practical_customs: [do_not_count_each_punch_as_a_separate_turn, keep_exit_space, watch_for_prolonged_fight_recovery]
  common_misbeliefs: [Hitmonchan_is_a_human_trained_boxer, 300_mph_means_it_always_moves_that_fast, it_can_destroy_any_wall]
  local_variation_notes: [world_champion_and_pro_boxer_spirit_claims_remain_legend_or_reputation]
identification_and_knowledge:
  baseline_recognition: rare
  unknown_presentation_hooks: [a_bipedal_creature_drives_a_target_backward_with_punches_that_blur_together_then_suddenly_pauses_to_breathe]
  local_aliases_or_titles: none
  identification_evidence: [distinctive_fists, bilateral_combination_pattern, recovery_pause]
  initial_knowledge_fragments: [multiple_punches_may_belong_to_one_attack_sequence, apparent_speed_does_not_equal_travel_speed]
  post_identification_knowledge: [prolonged_engagement_can_create_a_recovery_window]
  advanced_insights: [separate_extreme_strike_speed_from_whole_body_speed_and_from_real_world_energy_math]
  exceptional_individual_knowledge_hooks: [a_Hitmonchan_is_known_for_a_specific_finishing_straight_and_a_predictable_breathing_reset_after_long_exchanges]
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states: [observing, guarding, combination_attacking, finishing_strike, recovering, withdrawing]
  aggression_tendency: variable_and_not_implied_by_fighting_type_or_boxer_analogy
  territoriality: unknown_or_local
  avoidance_tendency: variable
  warning_signs: [guard_set, repeated_feints, arm_rotation, closing_angle, breathing_change_in_prolonged_exchange]
  encounter_triggers: [route_crossing, defensive_conflict, event_specific_competition_or_threat]
  escalation_triggers: [attack, cornering, ignored_warning, prolonged_exchange]
  deescalation_conditions: [distance, stop_interference, allow_withdrawal, recovery_or_mood_reset_state]
  pursuit_profile: unknown_or_individual_specific
  group_size_effects: [each_Hitmonchan_is_independent_and_two_fists_never_mean_two_initiative_slots]
  ordinary_consequence_categories: [major_blunt_injury, being_cornered, position_loss, temporary_opening_after_prolonged_exchange]
  consequence_ceiling: severe_only_when_explicit_context_supports_it
  human_check_hooks:
  - action: avoid_or_defend_against_a_combination
    relevant_species_axis: speed
    relevant_tags: [combination_punching, extreme_strike_speed]
    relevant_hazard_keys: [hitmonchan-combination-strike]
    difficulty_guidance: D024_context_from_distance_cover_guard_position_and_prior_observation
    notes: one_combination_resolves_as_one_action_effect_not_multiple_turns
  - action: endure_or_redirect_a_finishing_punch
    relevant_species_axis: force
    relevant_tags: [high_force_finishing_punch]
    relevant_hazard_keys: [hitmonchan-combination-strike]
    difficulty_guidance: D024_plus_protection_stance_and_current_strike_commitment
    notes: numeric_speed_wording_never_becomes_kinetic_energy_math
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [reserved, reactive, persistent, unusually_cautious]
    condition_variants: [fresh, combination_active, finishing, winded, recovering, injured]
    local_lineage_variants: [none_without_evidence_or_D2_local_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_body_development, repeated_survival, distinctive_combat_history, persistent_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_combination_or_finisher, persistent_history, readable_recovery_pattern]
    warning_or_rumor_hooks: [one_Hitmonchan_is_known_for_a_three_stage_combination_that_ends_with_a_visible_breathing_reset]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_trust, noncoercive_repeat_contact, no_forced_fighting_or_performance]
  trust_building_paths: [mutual_aid, respecting_space, predictable_nonviolent_interaction]
  reasons_to_stay: [exceptional_bond, stable_shared_history]
  rejection_or_departure_reasons: [forced_combat_training, public_spectacle, coercion, treating_it_as_a_boxer_or_weapon]
  human_social_costs: [settlement_fear_of_fast_strikes, space_and_crowd_management]
  logistics:
    food: [exact_complete_diet_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [species_appropriate_safe_rest_site_exact_preference_unknown]
    space_travel: [room_for_safe_arm_movement]
    settlement_restrictions: [avoid_dense_crowds_when_agitated]
    special_resources: [none_fixed]
  assistance_capabilities: [individual_specific_physical_help_only_when_safe_and_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_training, no_boxing_role, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [dense_repeated_impact_marks, paired_strike_patterns, recovery_rest_site]
  avoidance_preparation: [preserve_distance_and_cover, avoid_being_cornered, learn_recovery_pattern]
  resistance_or_protection: [solid_cover, ordinary_physical_protection, spacing]
  combat_approach_permissions: [one_action_may_contain_a_combo_sequence, optional_authored_recovery_opening_in_prolonged_fight]
  blocked_or_invalid_approaches: [extra_turns_per_fist, global_three_minute_timer, initiative_from_300_mph, kinetic_energy_damage, automatic_structure_destruction, ancient_boxing_league]
  fear_hooks: [the_punches_are_too_fast_to_count_but_the_creature_remains_one_combatant]
  injury_hazard_hooks: [combination_and_finishing_punch]
  environmental_state_hooks: [distance, cover, cornering, prolonged_exchange, recovery]
  companion_assistance_hooks: [contextual_physical_help_only]
  fortune_spike_opportunities: [recognize_the_breathing_reset_and_create_distance]
  trouble_spike_complications: [a_confined_space_turns_the_combination_into_cornering_pressure]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [fists_muscle_and_other_living_anatomy_are_not_automatic_materials]
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
  scalability_limits: [extreme_punch_speed_and_dense_fists_do_not_create_a_physics_engine_boxing_industry_or_craft_material]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_the_recovery_cadence_without_forcing_a_fight_or_claiming_human_boxing_training]
  dangerous: [a_combination_drives_the_party_toward_a_wall_until_they_create_a_lateral_exit]
  unusual_or_rare: [an_exceptional_individual_has_a_famous_finisher_but_also_a_known_recovery_tell]
  discovery_insight: [300_mph_is_strike_speed_evidence_not_whole_body_movement_or_damage_math]
  route_environment: [a_narrow_corridor_amplifies_cornering_pressure]
  settlement_culture: [local_survivors_describe_combo_and_recovery_patterns_without_creating_a_boxing_school]
  cross_species: [Hitmonlee_and_later_Tyrogue_family_context_do_not_transfer_species_specific_strike_geometry]
presentation_and_p6_followups:
  initial_bestiary_presentation: rare_bipedal_Pokemon_whose_two_fists_form_extremely_fast_single_action_combinations_with_a_prolonged_fight_recovery_cadence
  progressive_reveal_notes: [separate_strike_speed_from_travel_speed, label_boxer_and_bullet_train_language_as_analogy_or_reputation]
  species_specific_visual_needs: [combo_as_one_action, finisher_commitment, breathing_recovery_tell]
  species_specific_audio_needs: [rapid_punch_air_cues_and_recovery_breathing]
  special_ui_or_readability_needs: [avoid_presenting_each_punch_as_an_action_or_real_time_timer]
  p6_followup_required: true
cross_species_links:
  evolution_family: [tyrogue_external_post_gen1, hitmonlee, hitmontop_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_punch_speed_distribution_and_measurement_context, recovery_duration, material_limits, graze_burn_mechanism, boxer_spirit_literal_truth]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [combo_sequence_as_single_action_and_optional_prolonged_fight_recovery_opening]
  deferred_to_p6: [combo_finisher_and_recovery_readability]
  deferred_to_p7: [cache_action_and_recovery_state_do_not_run_real_time_three_minute_timer_or_kinetic_energy_simulation]
```
