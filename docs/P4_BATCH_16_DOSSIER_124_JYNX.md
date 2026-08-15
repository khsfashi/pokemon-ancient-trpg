# P4 Batch 16 — #124 Jynx Full-Schema Dossier

Part of `docs/P4_BATCH_16_FULL_SCHEMA_DOSSIERS.md`.

---

## #124 Jynx / 루주라

```yaml
identity:
  national_dex: 124
  species_key: jynx
  official_name_en: Jynx
  official_name_ko: 루주라
  evolution_family_keys: [jynx]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-JYNX-SG, P4_BATCH_16_SOURCE_REVIEW]
  official_evidence:
  - claim_id: JYX-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-JYNX-SG
    version_context: current_official_portal__OBSERVED_BEHAVIOR
    paraphrase: sways_its_hips_to_a_distinctive_rhythm
  - claim_id: JYX-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-JYNX-SG
    version_context: current_official_portal__ANALOGY
    paraphrase: cries_sound_like_human_language_without_proving_understandable_human_speech
  - claim_id: JYX-C1-003
    evidence_class: C1
    source_ref: OFFICIAL-DEX-JYNX-SG
    version_context: current_world_social_evidence
    paraphrase: some_modern_musicians_compose_songs_for_Jynx_to_sing
  - claim_id: JYX-C1-004
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__VERSION_SCOPED_EXTRAORDINARY
    paraphrase: historical_entries_support_emotion_linked_rhythm_multiple_cry_patterns_and_strong_compelled_dancing_wording_while_later_entries_keep_semantics_uncertain
  derived_claims:
  - claim_id: JYX-D1-001
    evidence_class: D1
    based_on: [JYX-C1-001, JYX-C1-002, JYX-C1-004]
    statement: structured_expressive_rhythm_and_vocalization_are_better_supported_than_fluent_mutual_human_language
    canon_boundary_note: human_sounding_cries_do_not_imply_literacy_personhood_or_complete_translation
  - claim_id: JYX-D1-002
    evidence_class: D1
    based_on: [JYX-C1-004]
    statement: dance_influence_is_preserved_as_version_scoped_extraordinary_sensory_or_mental_pressure
    canon_boundary_note: never_automatic_compulsion_forced_movement_or_player_input_suppression
  - claim_id: JYX-D1-003
    evidence_class: D1
    based_on: [JYX-C1-003]
    statement: modern_song_collaboration_is_current_world_social_evidence_only
    canon_boundary_note: does_not_create_ancient_musician_profession_stage_culture_or_domestication
canonical_source_data:
  types: [ice, psychic]
  base_stats_raw: {hp: 65, attack: 50, defense: 35, special_attack: 115, special_defense: 95, speed: 95}
  abilities_relevant_to_p4: [oblivious_as_modern_context, forewarn_as_modern_context, dry_skin_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.4_m, weight: 40.6_kg}
  evolution_source:
    evolves_from: none_gen1_roster__smoochum_is_post_gen1_context
    evolves_to: []
    canonical_conditions: [Smoochum_is_post_Gen1_provenance_context_only]
  other_material_facts:
  - distinctive_rhythmic_movement
  - human_sounding_vocalization_is_analogy_not_fluent_language_fact
  - rhythm_can_vary_with_emotion_in_versioned_entries
  - multiple_cry_patterns_may_carry_meaning_in_versioned_entries
  - dance_influence_is_version_scoped_extraordinary_claim
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 2
  guard: 1
  potency: 5
  resistance: 4
  speed: 4
  derivation_notes: {vigor: hp_65, force: attack_50, guard: defense_35, potency: special_attack_115, resistance: special_defense_95, speed: speed_95}
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - potency_5_does_not_make_dance_influence_an_automatic_contest_result
  - humanoid_shape_does_not_create_human_social_identity
capabilities_and_hazards:
  locomotion: [ordinary_bipedal_ground_movement, rhythmic_swaying_and_dancing]
  physical_hazards: []
  elemental_environmental_hazards: []
  anomalous_hazards: [version_scoped_rhythmic_dance_influence]
  behavioral_capabilities:
  - distinctive_rhythm
  - emotion_linked_rhythm_in_versioned_entries
  - patterned_vocalization_with_partially_unresolved_semantics
  utility_interaction_capabilities:
  - learned_individual_patterns_may_support_partial_species_specific_communication
  immunities_or_approach_invalidators:
  - human_sounding_cries_do_not_grant_fluent_language_or_translation
  - dance_influence_does_not_force_player_movement_or_actions
  hazard_records:
  - hazard_key: jynx-rhythmic-influence
    kind: psychic
    delivery_or_exposure: [sustained_visual_or_auditory_attention_to_an_explicitly_authored_rhythmic_influence_sequence]
    prerequisite_or_trigger: [version_scoped_extraordinary_capability_enabled_for_the_event, perceptible_rhythm_or_movement, target_eligibility_and_counterplay_defined]
    warning_signs: [distinctive_repeated_rhythm, observers_begin_matching_tempo_or_feeling_motor_pressure, prior_local_or_individual_warning]
    immediate_effects: [sensory_or_mental_pressure_to_match_the_rhythm_resolved_through_existing_agency_safe_rules]
    delayed_or_persistent_effects: [none_automatic_after_exposure_ends]
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_in_compound_or_exceptional_context_but_never_silent_input_suppression
    countermeasures: [break_visual_attention, create_distance_or_cover, disrupt_or_leave_the_rhythm_source, use_existing_agency_safe_assistance_or_resistance]
    emergency_consumable_hooks: []
    context_amplifiers: [close_range, sustained_attention, confined_space, fatigue]
    context_mitigators: [distance, cover, prior_warning, allied_interruption]
    governing_species_axes: [potency]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [JYX-C1-004, JYX-D1-002]
  notes:
  - expressive_communication_and_mental_influence_are_separate_channels
  - no_generic_dance_charm_or_language_subsystem_is_created
  - current_world_musicians_are_not_ancient_world_institution_evidence
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: unfamiliar_communication_and_version_scoped_influence_can_raise_information_pressure_without_ancient_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: ancient_human_misinterpretation_can_change_encounter_context_without_making_Jynx_more_powerful_by_default
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat: [exact_proto_kanto_habitat_and_abundance_unknown, cold_or_sheltered_localities_only_when_evidence_or_D2_authoring_supports_them]
  ecological_niche: [humanoid_shaped_expressive_Pokemon_with_rhythmic_and_vocal_communication_pressure]
  activity_pattern: [ordinary_activity_pattern_unknown]
  seasonal_notes: [exact_seasonality_unknown]
  feeding_and_resource_interaction: [exact_complete_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [species_specific_links_only_when_evidence_supports_them]
  environmental_effects: [no_continuous_charm_aura_or_music_field]
  observable_signs: [distinctive_tracks, repeated_rhythmic_motion, recurring_cry_patterns, group_or_individual_tempo_changes_if_observed]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034, direct_encounterability_somewhere_does_not_equal_universal_presence]
  unsupported_gaps: [vocal_semantics_and_translation_coverage, human_language_comprehension, influence_trigger_range_duration_and_resistance, ancient_human_contact_frequency, exact_rhythm_to_emotion_mapping]
human_perception_and_culture:
  ordinary_attitude: [uncertain_or_wary_because_humanlike_sound_and_shape_encourage_overinterpretation]
  specialist_knowledge_holders: [local_observers, rhythm_pattern_recorders, people_with_repeat_contact]
  benefits_and_services: [none_required]
  fears_and_avoidance: [unwanted_rhythmic_influence, mistaking_species_signals_for_human_speech]
  myths_omens_taboos: [local_D2_stories_may_form_around_humanlike_cries_but_must_not_be_presented_as_translation_fact]
  practical_customs: [observe_repeated_patterns_before_assigning_meaning, keep_distance_if_rhythm_begins_affecting_attention_or_movement]
  common_misbeliefs: [Jynx_speaks_fluid_human_language, every_cry_has_known_translation, humanoid_shape_means_human_personhood, dancing_is_always_a_ritual_or_spell]
  local_variation_notes: [no_region_wide_stage_profession_music_institution_or_humanoid_social_caste_implied]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_humanoid_figure_calls_in_humanlike_syllables_while_moving_to_a_repeating_rhythm_nobody_can_translate]
  local_aliases_or_titles: none
  identification_evidence: [distinctive_body_shape, rhythmic_hip_motion, repeated_cry_patterns, emotion_linked_tempo_if_individually_observed]
  initial_knowledge_fragments: [vocalizations_sound_humanlike_but_meaning_is_uncertain, rhythm_is_behaviorally_significant]
  post_identification_knowledge: [some_cry_patterns_may_carry_meaning_and_some_historical_accounts_report_influence_on_observers]
  advanced_insights: [partial_pattern_learning_is_allowed_without_complete_dictionary_or_human_language_claim]
  exceptional_individual_knowledge_hooks: [a_Jynx_whose_recurring_call_and_dance_sequence_has_been_partially_decoded_by_one_local_group]
threat_and_encounter:
  baseline_threat_band: moderate
  default_behavior_states: [observing, vocalizing, dancing, withdrawing, defensive, influence_state_if_explicit]
  aggression_tendency: variable_and_not_implied_by_humanoid_shape
  territoriality: unknown_or_local
  avoidance_tendency: moderate
  warning_signs: [repeating_tempo, matched_observer_movement, escalating_attention_pressure, distinctive_call_sequence]
  encounter_triggers: [route_crossing, locally_authored_habitat, repeated_untranslated_calls]
  escalation_triggers: [close_pursuit, ignored_warning, event_specific_sustained_rhythm_exposure]
  deescalation_conditions: [increase_distance, break_attention, stop_interference, allow_retreat]
  pursuit_profile: unknown_or_individual_specific
  group_size_effects: [multiple_rhythms_raise_information_complexity_without_linear_compulsion_or_stat_multiplier]
  ordinary_consequence_categories: [minor_to_moderate_contact_injury, sensory_or_mental_pressure_if_explicitly_authored, navigation_or_coordination_complication]
  consequence_ceiling: serious_only_in_explicit_compound_or_exceptional_influence_context
  human_check_hooks:
  - action: resist_or_disengage_from_an_authored_rhythmic_influence_sequence
    relevant_species_axis: potency
    relevant_tags: [version_scoped_rhythmic_influence]
    relevant_hazard_keys: [jynx-rhythmic-influence]
    difficulty_guidance: D024_plus_existing_P3_agency_safe_mental_or_sensory_influence_rules
    notes: failure_never_silently_turns_player_input_into_forced_dancing
  - action: infer_partial_meaning_from_repeated_Jynx_calls_or_rhythm
    relevant_species_axis: none
    relevant_tags: [patterned_vocalization, expressive_rhythm]
    relevant_hazard_keys: []
    difficulty_guidance: D024_context_from_repetition_prior_observation_emotional_context_and_local_knowledge
    notes: success_reveals_bounded_pattern_meaning_not_a_complete_language_dictionary
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [curious, reserved, expressive, defensive]
    condition_variants: [calm, vocalizing, dancing, agitated, explicit_influence_state]
    local_lineage_variants: [none_without_evidence_or_D2_local_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, long_human_contact, unusual_local_history, repeated_signal_learning]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_call_pattern, distinctive_rhythm, documented_history]
    warning_or_rumor_hooks: [one_Jynx_uses_a_call_sequence_local_people_can_partially_answer_without_anyone_claiming_fluent_translation]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_trust, respect_for_communication_uncertainty, no_forced_performance_or_influence_testing]
  trust_building_paths: [repeated_noncoercive_contact, learning_individual_patterns, safe_mutual_aid]
  reasons_to_stay: [rare_bond, familiar_communication_partner_or_group]
  rejection_or_departure_reasons: [forced_performance, coercion, deliberate_exposure_tests, treating_humanlike_shape_as_ownership_or_personhood_shortcut]
  human_social_costs: [settlement_fear_or_fascination, communication_misinterpretation, need_for_space_when_rhythmic_behavior_escalates]
  logistics:
    food: [exact_complete_diet_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [species_appropriate_safe_rest_site_exact_preference_unknown]
    space_travel: [humanoid_shape_does_not_remove_normal_companion_logistics]
    settlement_restrictions: [avoid_forced_public_performance_or_crowd_exposure]
    special_resources: [none_fixed]
  assistance_capabilities: [individual_specific_patterned_communication_only_to_observed_extent]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_forced_performance, no_compulsion_testing, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [distinctive_tracks, repeated_calls, rhythmic_movement_signs]
  avoidance_preparation: [keep_distance, preserve_cover_or_attention_break, record_patterns_without_assuming_translation]
  resistance_or_protection: [distance, cover, allied_interruption, existing_agency_safe_resistance_when_relevant]
  combat_approach_permissions: [ordinary_Jynx_remains_one_entity_one_turn_one_health_state]
  blocked_or_invalid_approaches: [automatic_dance_compulsion, player_input_suppression, complete_human_translation, generic_charm_or_music_magic, human_profession_assumption]
  fear_hooks: [a_humanlike_call_repeats_with_a_rhythm_that_several_observers_begin_matching]
  injury_hazard_hooks: [rhythmic_sensory_or_mental_pressure_only_when_explicitly_authored]
  environmental_state_hooks: [distance, line_of_sight, acoustic_context, crowd_density, attention]
  companion_assistance_hooks: [partial_pattern_communication_only_when_individually_learned]
  fortune_spike_opportunities: [a_known_call_pattern_warns_of_escalation_before_the_influence_sequence]
  trouble_spike_complications: [a_character_assumes_a_humanlike_phrase_has_a_human_meaning_and_misreads_the_encounter]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [body_hair_or_other_anatomy_are_not_automatic_materials]
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
  scalability_limits: [patterned_vocalization_does_not_create_translation_technology, modern_musician_evidence_does_not_create_ancient_music_industry]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [learn_one_recurring_call_or_rhythm_pattern_from_repeat_contact_without_claiming_full_translation]
  dangerous: [a_strong_rhythmic_influence_sequence_builds_after_clear_warning_and_can_be_broken_by_distance_or_attention_change]
  unusual_or_rare: [compare_several_Jynx_call_patterns_to_identify_partial_species_specific_semantics]
  discovery_insight: [human_sounding_is_an_analogy_while_patterned_communication_can_still_be_real]
  route_environment: [visibility_acoustics_and_escape_space_change_information_and_influence_pressure]
  settlement_culture: [local_interpretations_can_diverge_without_modern_musician_or_stage_culture]
  cross_species: [Mr_Mime_and_Jynx_humanoid_analogies_do_not_create_shared_human_social_rules]
presentation_and_p6_followups:
  initial_bestiary_presentation: Jynx_as_a_humanoid_shaped_expressive_Pokemon_with_partially_meaningful_patterns_and_version_scoped_rhythmic_influence
  progressive_reveal_notes: [distinguish_human_sounding_from_translated_language, telegraph_influence_before_consequence, preserve_partial_and_fallible_interpretation]
  species_specific_visual_needs: [rhythmic_body_motion, readable_tempo_or_emotion_change_without_compulsion_meter]
  species_specific_audio_needs: [distinct_call_patterns_without_fake_human_dialogue_translation]
  special_ui_or_readability_needs: [no_complete_dialogue_subtitles_without_authored_translation, influence_warning_and_counterplay_must_be_visible]
  p6_followup_required: true
cross_species_links:
  evolution_family: [smoochum_post_gen1_reference_only]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: [human_shape_and_human_sounding_voice_are_analogy_only]
  shared_habitat: []
  cultural_or_material_dependencies: [Mr_Mime_humanoid_shape_does_not_create_shared_personhood_profession_or_civilization_rules]
open_questions_and_gates:
  unresolved_sources: [vocal_semantics_and_translation_coverage, human_language_comprehension, dance_influence_trigger_range_duration_and_resistance, ancient_human_contact_frequency, exact_rhythm_to_emotion_mapping]
  contradictions: [historical_entries_support_meaningful_patterns_but_later_sources_keep_human_understandability_unresolved]
  human_design_gates: []
  deferred_to_p5: [agency_safe_influence_timing_partial_communication_and_information_resolution]
  deferred_to_p6: [vocal_pattern_audio_rhythm_readability_and_noncoercive_influence_UI]
  deferred_to_p7: []
```
