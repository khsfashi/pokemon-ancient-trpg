# P4 Batch 16 — #038 Ninetales Full-Schema Dossier

Part of `docs/P4_BATCH_16_FULL_SCHEMA_DOSSIERS.md`.

---

## #038 Ninetales / 나인테일

```yaml
identity:
  national_dex: 38
  species_key: ninetales
  official_name_en: Ninetales
  official_name_ko: 나인테일
  evolution_family_keys: [vulpix, ninetales]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-NINETALES-SG, P4_BATCH_16_SOURCE_REVIEW]
  official_evidence:
  - claim_id: NIN-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-NINETALES-SG
    version_context: current_official_portal__OBSERVED_ANATOMY
    paraphrase: has_nine_long_tails_and_golden_glinting_fur
  - claim_id: NIN-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-NINETALES-SG
    version_context: current_official_portal__LEGEND_OR_HEARSAY
    paraphrase: legends_attribute_mystical_tail_powers_and_about_a_millennium_of_life
  - claim_id: NIN-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__VERSION_SCOPED_EXTRAORDINARY
    paraphrase: historical_entries_include_tail_touch_curse_eye_based_total_mind_control_high_intelligence_vengefulness_and_human_speech_understanding
  derived_claims:
  - claim_id: NIN-D1-001
    evidence_class: D1
    based_on: [NIN-C1-002, NIN-C1-003]
    statement: folklore_and_version_scoped_extraordinary_claims_remain_epistemically_separate
    canon_boundary_note: not_nine_guaranteed_powers_not_immortality_not_generic_magic
  - claim_id: NIN-D1-002
    evidence_class: D1
    based_on: [NIN-C1-003]
    statement: curse_or_mental_control_may_only_appear_as_explicitly_authored_high_severity_capabilities
    canon_boundary_note: require_trigger_warning_eligibility_counterplay_and_consequence_never_passive_player_input_removal
canonical_source_data:
  types: [fire]
  base_stats_raw: {hp: 73, attack: 76, defense: 75, special_attack: 81, special_defense: 100, speed: 100}
  abilities_relevant_to_p4: [flash_fire_as_modern_context, drought_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.1_m, weight: 19.9_kg}
  evolution_source:
    evolves_from: vulpix
    evolves_to: []
    canonical_conditions: [Fire_Stone_metadata_is_source_context_only_not_standardized_ancient_inventory_or_menu_command]
  other_material_facts:
  - nine_tail_anatomy
  - mystical_tail_power_and_millennium_life_are_mixed_certainty_claims
  - tail_touch_curse_and_eye_based_control_are_version_scoped_extraordinary_claims
  - human_speech_understanding_is_version_scoped_and_does_not_imply_spoken_fluency
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 3
  guard: 3
  potency: 4
  resistance: 5
  speed: 5
  derivation_notes: {vigor: hp_73, force: attack_76, guard: defense_75, potency: special_attack_81, resistance: special_defense_100, speed: speed_100}
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - potency_and_resistance_do_not_derive_curse_or_mind_control
  - nine_tails_do_not_create_extra_turns_health_pools_or_power_slots
capabilities_and_hazards:
  locomotion: [ordinary_quadruped_ground_movement]
  physical_hazards: []
  elemental_environmental_hazards: []
  anomalous_hazards:
  - version_scoped_tail_touch_curse_evidence
  - version_scoped_eye_based_mental_control_evidence
  behavioral_capabilities:
  - version_scoped_high_intelligence_and_vengefulness
  - version_scoped_human_speech_understanding
  utility_interaction_capabilities:
  - demonstrated_human_speech_understanding_may_support_authored_response_behavior
  immunities_or_approach_invalidators:
  - long_life_does_not_grant_automatic_ancient_memory
  - speech_understanding_does_not_equal_fluent_human_speech
  - nine_tails_remain_one_entity_one_turn_one_health_state
  hazard_records:
  - hazard_key: ninetales-tail-contact-extraordinary-consequence
    kind: other
    delivery_or_exposure: [tail_contact_or_grabbing_in_an_event_that_explicitly_activates_the_version_scoped_claim]
    prerequisite_or_trigger: [authored_extraordinary_capability_state, clear_tail_contact_trigger]
    warning_signs: [visible_tail_display, local_or_prior_warning, individual_reaction_to_tail_approach]
    immediate_effects: [vengeful_escalation, extraordinary_consequence_only_through_explicit_event_resolution]
    delayed_or_persistent_effects: [only_bounded_authored_effects_with_recovery_or_resolution_path]
    ordinary_consequence_ceiling: moderate_for_nonextraordinary_contact
    exceptional_consequence_ceiling: exceptional_severe_but_never_undefined_unavoidable_permanent_debuff
    countermeasures: [do_not_touch_or_grab_tails, heed_warning, withdraw, use_event_specific_resolution_path]
    emergency_consumable_hooks: []
    context_amplifiers: [deliberate_provocation, known_exceptional_individual, ignored_warning]
    context_mitigators: [distance, prior_knowledge, respectful_withdrawal]
    governing_species_axes: [potency]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [NIN-C1-003, NIN-D1-002]
  - hazard_key: ninetales-gaze-mental-control
    kind: psychic
    delivery_or_exposure: [event_defined_visual_exposure_to_an_individual_explicitly_authored_with_the_version_scoped_capability]
    prerequisite_or_trigger: [authored_extraordinary_state, clear_gaze_or_eye_light_trigger, target_eligibility_and_resistance_path_defined]
    warning_signs: [distinctive_eye_focus_or_light, mental_pressure_cue, prior_warning_for_known_individual]
    immediate_effects: [mental_pressure_disorientation_or_compelled_impulse_resolved_through_existing_agency_safe_rules]
    delayed_or_persistent_effects: [no_persistent_control_without_separate_bounded_consequence_and_recovery_path]
    ordinary_consequence_ceiling: serious_only_when_explicitly_authored
    exceptional_consequence_ceiling: exceptional_severe_but_player_input_is_never_silently_removed
    countermeasures: [break_line_of_sight, create_distance_or_cover, use_existing_agency_safe_resistance_or_assistance, retreat]
    emergency_consumable_hooks: []
    context_amplifiers: [close_range, sustained_attention, isolation]
    context_mitigators: [cover, distance, allied_warning, prior_knowledge]
    governing_species_axes: [potency]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [NIN-C1-003, NIN-D1-002]
  notes:
  - curse_and_mind_control_are_not_passive_auras_or_generic_status_subsystems
  - source_claim_strength_and_version_scope_must_be_visible_to_authors
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: low_information_and_local_fear_can_make_old_or_known_individuals_more_dangerous_without_global_ancient_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: exceptional_history_may_change_behavior_only_when_explicitly_authored
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat: [exact_proto_kanto_habitat_unknown, remote_or_taboo_sites_may_be_local_D2]
  ecological_niche: [intelligent_long_lived_or_reputedly_long_lived_fire_species_with_strong_folklore_pressure]
  activity_pattern: [ordinary_activity_pattern_unknown]
  seasonal_notes: [exact_seasonality_unknown]
  feeding_and_resource_interaction: [exact_complete_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [species_specific_links_only_when_evidence_supports_them]
  environmental_effects: [no_generic_curse_zone_magic_field_or_permanent_weather_effect]
  observable_signs: [nine_tail_silhouette, golden_fur_glint, individual_specific_tracks_or_warning_behavior]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034, direct_encounterability_somewhere_does_not_equal_universal_presence]
  unsupported_gaps: [exact_lifespan_distribution, curse_mechanism_duration_and_scope, mind_control_conditions_and_resistance, speech_understanding_population_frequency]
human_perception_and_culture:
  ordinary_attitude: [caution_fear_or_reverence_where_known]
  specialist_knowledge_holders: [local_story_keepers, hunters, route_guides, survivors_of_known_individuals]
  benefits_and_services: [none_required]
  fears_and_avoidance: [tail_contact, focused_gaze_if_locally_documented, vengeance_after_provocation]
  myths_omens_taboos:
  - mystical_tail_and_origin_stories_may_be_repeated_as_belief
  - tail_touch_taboo_can_be_real_local_culture_without_proving_the_curse_as_universal_fact
  practical_customs: [avoid_tail_contact, preserve_line_of_sight_break_options, distinguish_known_individual_warning_from_species_wide_folklore]
  common_misbeliefs: [each_tail_has_one_guaranteed_power, every_Ninetales_is_exactly_a_thousand_years_old, curse_is_unavoidable, all_can_fluently_speak_human_language]
  local_variation_notes: [no_region_wide_curse_religion_magic_profession_or_trainer_institution_implied]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_nine_tailed_golden_figure_matches_both_old_folklore_and_a_recent_survivor_report]
  local_aliases_or_titles: none
  identification_evidence: [nine_tail_anatomy, golden_fur, individual_specific_warning_pattern]
  initial_knowledge_fragments: [nine_tails_are_observed_anatomy, many_supernatural_claims_are_folklore_or_version_scoped_reports]
  post_identification_knowledge: [tail_contact_and_gaze_claims_need_individual_or_event_evidence_before_mechanical_use]
  advanced_insights: [separate_direct_anatomy_from_legend_version_scoped_extraordinary_claim_and_project_D2]
  exceptional_individual_knowledge_hooks: [a_named_old_Ninetales_with_documented_survivor_reports_and_distinct_warning_signs]
threat_and_encounter:
  baseline_threat_band: moderate_to_high
  default_behavior_states: [watching, withdrawing, warning, defending, extraordinary_state_if_explicit]
  aggression_tendency: variable_with_individual_history
  territoriality: unknown_or_local
  avoidance_tendency: moderate
  warning_signs: [nine_tail_display, focused_gaze_if_relevant, reaction_to_tail_approach, local_known_individual_warnings]
  encounter_triggers: [remote_route_or_den, known_old_individual_site, locally_authored_taboo_site]
  escalation_triggers: [tail_grabbing, continued_provocation, ignored_warning, event_specific_gaze_trigger]
  deescalation_conditions: [stop_provocation, increase_distance, break_line_of_sight_if_relevant, respect_retreat]
  pursuit_profile: individual_history_dependent
  group_size_effects: [no_nine_tail_action_multiplier_and_no_generic_pack_power_scaling]
  ordinary_consequence_categories: [serious_defensive_injury, explicit_mental_pressure_if_authored, bounded_extraordinary_consequence_if_authored]
  consequence_ceiling: high_for_explicit_extraordinary_encounters_not_every_ordinary_Ninetales
  human_check_hooks:
  - action: avoid_or_break_an_authored_gaze_based_mental_influence_sequence
    relevant_species_axis: potency
    relevant_tags: [version_scoped_mental_control]
    relevant_hazard_keys: [ninetales-gaze-mental-control]
    difficulty_guidance: D024_plus_existing_P3_agency_safe_mental_influence_contract
    notes: never_silently_remove_player_input
  - action: recognize_and_avoid_tail_contact_escalation
    relevant_species_axis: none
    relevant_tags: [tail_contact_taboo, version_scoped_curse_evidence]
    relevant_hazard_keys: [ninetales-tail-contact-extraordinary-consequence]
    difficulty_guidance: D024_context_from_visibility_prior_warning_history_and_distance
    notes: ordinary_contact_and_extraordinary_consequence_are_not_one_automatic_rule
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [aloof, watchful, vengeful_after_provocation, curious_but_distant]
    condition_variants: [ordinary, guarding, injured, explicit_extraordinary_state]
    local_lineage_variants: [none_without_evidence_or_D2_local_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age_or_reputed_age, persistent_local_history, survival_from_many_conflicts, rare_event_history]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [distinctive_tail_or_fur_marking, recognized_warning_pattern, documented_site_or_survivor_history]
    warning_or_rumor_hooks: [an_old_Ninetales_whose_warning_pattern_is_known_across_generations]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [exceptional_voluntary_trust, respect_for_tail_and_gaze_boundaries, no_folklore_testing]
  trust_building_paths: [long_term_nonintrusive_contact, consistent_boundary_respect, mutual_aid_without_ownership]
  reasons_to_stay: [rare_deep_bond, shared_long_term_history]
  rejection_or_departure_reasons: [tail_grabbing, coercion, folklore_testing, forced_containment]
  human_social_costs: [settlement_fear_or_taboo, risk_of_misreading_folklore, existing_local_history]
  logistics:
    food: [exact_complete_diet_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [species_appropriate_safe_rest_site]
    space_travel: [one_visible_companion_slot_no_special_transport_assumption]
    settlement_restrictions: [local_taboos_or_fear_may_make_entry_difficult]
    special_resources: [none_fixed]
  assistance_capabilities: [communication_or_warning_only_to_the_extent_behaviorally_demonstrated]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_tail_harvest, no_testing_mental_control_on_people, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [nine_tail_silhouette, golden_fur, individual_specific_history_signs]
  avoidance_preparation: [learn_local_warning_without_treating_it_as_certain_fact, avoid_tail_contact, preserve_line_of_sight_break]
  resistance_or_protection: [distance, cover, existing_agency_safe_mental_resistance_or_assistance_when_explicitly_relevant]
  combat_approach_permissions: [ordinary_Ninetales_uses_one_entity_one_turn_one_health_state]
  blocked_or_invalid_approaches: [nine_power_slots, automatic_thousand_year_debuff, passive_mind_control_aura, automatic_player_input_suppression, generic_magic_or_curse_system]
  fear_hooks: [a_survivor_story_matches_the_warning_pattern_of_one_known_individual]
  injury_hazard_hooks: [tail_contact_extraordinary_consequence_if_authored, gaze_mental_influence_if_authored]
  environmental_state_hooks: [line_of_sight, distance, known_individual_state, local_warning_context]
  companion_assistance_hooks: [individual_specific_communication_only_when_observed_and_voluntary]
  fortune_spike_opportunities: [prior_warning_reveals_the_trigger_before_escalation]
  trouble_spike_complications: [someone_assumes_all_folklore_is_false_and_ignores_documented_individual_evidence]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [tails_fur_or_body_parts_are_never_automatic_magic_materials]
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
  scalability_limits: [tail_folklore_does_not_create_enchantment_or_curse_craft, long_life_does_not_create_historical_database]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [trade_distance_and_patience_for_nonviolent_contact_with_a_known_old_individual]
  dangerous: [tail_contact_or_gaze_escalates_only_after_clear_warning_and_agency_safe_resolution]
  unusual_or_rare: [compare_generations_of_records_to_separate_one_individual_history_from_species_folklore]
  discovery_insight: [learn_that_anatomy_version_scoped_extraordinary_claim_and_legend_have_different_truth_status]
  route_environment: [remote_known_individual_site_with_clear_escape_and_line_of_sight_choices]
  settlement_culture: [a_local_tail_taboo_can_be_real_culture_even_when_the_curse_is_unresolved]
  cross_species: [Vulpix_tail_maturation_does_not_gain_Ninetales_folklore_or_extraordinary_capabilities]
presentation_and_p6_followups:
  initial_bestiary_presentation: Ninetales_as_one_nine_tailed_Pokemon_surrounded_by_mixed_certainty_folklore_and_version_scoped_extraordinary_claims
  progressive_reveal_notes: [separate_anatomy_from_legend_and_reports, show_trigger_warning_before_extraordinary_consequence, never_present_nine_tails_as_nine_action_slots]
  species_specific_visual_needs: [nine_tail_readability_as_one_entity, golden_fur_glint, explicit_eye_or_tail_warning_if_used]
  species_specific_audio_needs: [warning_or_focus_cues_tied_to_event_state_not_passive_aura]
  special_ui_or_readability_needs: [epistemic_labels_for_legend_and_version_scoped_report, mental_influence_counterplay_visibility]
  p6_followup_required: true
cross_species_links:
  evolution_family: [vulpix]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: [Vulpix_does_not_inherit_curse_mind_control_or_millennium_lore]
open_questions_and_gates:
  unresolved_sources: [mystical_tail_claim_literal_truth_and_distribution, exact_lifespan_distribution, curse_trigger_mechanism_duration_and_scope, mind_control_conditions_duration_and_resistance, speech_understanding_population_frequency]
  contradictions: [source_versions_vary_in_certainty_and_strength_for_tail_power_lifespan_curse_and_mind_control]
  human_design_gates: []
  deferred_to_p5: [agency_safe_extraordinary_event_trigger_eligibility_resistance_counterplay_and_consequence]
  deferred_to_p6: [epistemic_UI_single_entity_readability_and_extraordinary_warning_cues]
  deferred_to_p7: []
```
