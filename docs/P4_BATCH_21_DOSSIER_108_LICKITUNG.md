# P4 Batch 21 — #108 Lickitung Full-Schema Dossier

Part of `docs/P4_BATCH_21_FULL_SCHEMA_DOSSIERS.md`.

---

## #108 Lickitung / 내루미

```yaml
identity:
  national_dex: 108
  species_key: lickitung
  official_name_en: Lickitung
  official_name_ko: 내루미
  evolution_family_keys: [lickitung, lickilicky_external]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-LICKITUNG-SG, P4_BATCH_21_SOURCE_REVIEW]
  official_evidence:
  - claim_id: LIC-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-LICKITUNG-SG
    version_context: current_official_portal__CONTACT_SENSING_RASH_CLEANING
    paraphrase: Lickitung_checks_surrounding_things_by_licking_them_licked_skin_can_develop_a_rash_if_not_cleaned_and_it_can_lick_filth_away_while_leaving_an_unpleasant_smell
  - claim_id: LIC-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-LICKITUNG-SG
    version_context: current_official_portal__HISUI_LATER_ERA_DEXTERITY_AND_ADHESIVE
    paraphrase: Hisui_era_text_describes_the_long_tongue_as_deftly_wielded_like_an_arm_and_collected_viscous_saliva_as_boiled_into_a_strong_useful_adhesive
  - claim_id: LIC-C2-001
    evidence_class: C2
    source_ref: SRC-DATA-001
    version_context: historical_versions__TONGUE_REACH_CONTROL_TEXTURE_TASTE_STICKINESS_CONTACT_EFFECTS
    paraphrase: historical_entries_support_a_very_long_highly_innervated_tongue_fine_control_food_grabbing_attack_texture_and_taste_memory_sticky_saliva_and_contact_tingling_with_stronger_paralysis_or_irritation_wording_in_some_versions
  - claim_id: LIC-C2-002
    evidence_class: C2
    source_ref: SRC-DATA-001
    version_context: historical_versions__TAIL_TONGUE_RESEARCHER_POSSIBILITY
    paraphrase: some_entries_note_tail_quivering_when_the_tongue_extends_but_present_their_connection_as_a_possibility_not_a_confirmed_mechanism
  derived_claims:
  - claim_id: LIC-D1-001
    evidence_class: D1
    based_on: [LIC-C1-001, LIC-C2-001]
    statement: Lickitung_is_a_slow_durable_contact_oriented_species_that_can_manipulate_nearby_objects_and_learn_texture_or_taste_cues_through_actual_tongue_contact
    canon_boundary_note: no_generic_hands_unrestricted_tools_remote_scan_or_omniscient_identification
  - claim_id: LIC-D1-002
    evidence_class: D1
    based_on: [LIC-C1-001, LIC-C2-001]
    statement: sticky_saliva_and_lick_contact_can_create_bounded_exposure_hazards_with_cleaning_and_other_counterplay
    canon_boundary_note: no_automatic_paralysis_rash_itch_grapple_or_permanent_condition_on_every_lick
  - claim_id: LIC-D1-003
    evidence_class: D1
    based_on: [LIC-C1-002]
    statement: saliva_has_source_backed_adhesive_potential_when_collected_and_processed_in_later_Hisui_context
    canon_boundary_note: no_proto_kanto_recipe_industry_market_routine_live_harvest_or_companion_production_loop
  - claim_id: LIC-U-001
    evidence_class: U
    based_on: [LIC-C2-002]
    statement: exact_tail_tongue_mechanism_remains_unresolved
    canon_boundary_note: researcher_possibility_must_not_be_presented_as_confirmed_anatomy
canonical_source_data:
  types: [normal]
  base_stats_raw: {hp: 90, attack: 55, defense: 75, special_attack: 60, special_defense: 75, speed: 30}
  abilities_relevant_to_p4: [own_tempo_as_modern_context, oblivious_as_modern_context, cloud_nine_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission, rollout_is_later_evolution_metadata_context_only]
  physical_metadata: {height: 1.2_m, weight: 65.5_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [lickilicky_external]
    canonical_conditions: [post_Gen1_Diamond_Pearl_known_Rollout_plus_level_up_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [very_long_tongue, fine_tongue_control, tongue_tip_nerves, texture_taste_memory, sticky_saliva, contact_tingling_or_irritation, cleaning_behavior, Hisui_processed_saliva_adhesive_later_era, tail_connection_researcher_possibility]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 2
  guard: 3
  potency: 3
  resistance: 3
  speed: 1
  derivation_notes: {vigor: hp_90, force: attack_55, guard: defense_75, potency: special_attack_60, resistance: special_defense_75, speed: speed_30}
  calibration_flags: [no_manual_exception, tongue_reach_not_encoded_as_speed_or_force_override, contact_information_not_encoded_as_omniscience, irritation_severity_not_capped_by_axes]
capabilities_and_hazards:
  locomotion: [slow_ground_movement]
  physical_hazards: [tongue_strike_or_grab_pressure_when_contact_and_target_scale_are_credible]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [licking_unfamiliar_objects, self_or_object_cleaning_by_licking, contact_based_texture_and_taste_memory]
  utility_interaction_capabilities: [fine_nearby_object_manipulation_with_tongue, contact_accessible_surface_cue_sensing, sticky_saliva_attachment_when_material_context_supports_it]
  immunities_or_approach_invalidators: [tongue_contact_does_not_reveal_hidden_identity_or_remote_state, sticky_saliva_does_not_attach_every_material, modern_ability_metadata_does_not_grant_weather_control_or_universal_mental_immunity]
  hazard_records:
  - hazard_key: lickitung-saliva-contact-irritation
    kind: other
    delivery_or_exposure: [actual_tongue_or_saliva_contact_with_skin_or_other_vulnerable_surface]
    prerequisite_or_trigger: [contact_occurs, exposure_is_material_to_scene, consequence_resolved_after_exposure]
    warning_signs: [visible_tongue_extension, habitual_licking_of_unfamiliar_objects, sticky_residue, prior_local_knowledge]
    immediate_effects: [wet_or_sticky_contamination, possible_tingling_or_local_irritation]
    delayed_or_persistent_effects: [rash_or_intense_itch_if_exposure_is_left_uncleaned_when_authored, temporary_impairment_in_stronger_source_scoped_incident]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_temporary_impairment_only_when_exposure_and_authored_resolution_justify_it
    countermeasures: [avoid_contact, interpose_cover, wash_or_clean_exposed_area, disengage, seek_treatment_if_symptoms_escalate]
    emergency_consumable_hooks: [generic_contact_irritation_recovery_hook_deferred_to_P5_item_design]
    context_amplifiers: [prolonged_contact, sensitive_surface, delayed_cleanup, exceptional_individual]
    context_mitigators: [distance, warning, prompt_cleaning, protective_barrier, limited_contact]
    governing_species_axes: [potency, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [LIC-C1-001, LIC-C2-001, LIC-D1-002]
  - hazard_key: lickitung-tongue-grip-pressure
    kind: entanglement
    delivery_or_exposure: [successful_tongue_contact_and_wrap_or_sticky_grip_against_a_plausible_target]
    prerequisite_or_trigger: [target_within_authored_reach, contact_established, ordinary_action_committed, material_or_body_position_supports_grip]
    warning_signs: [tongue_extension, body_alignment, visible_sticky_residue]
    immediate_effects: [temporary_grip_or_position_pressure]
    delayed_or_persistent_effects: [none_without_separate_injury_or_exposure_resolution]
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_when_environment_or_exceptional_individual_supports_it
    countermeasures: [break_contact, move_out_of_reach, use_cover, clean_or_reduce_adhesion_when_relevant]
    emergency_consumable_hooks: []
    context_amplifiers: [confined_space, sticky_surface, target_already_off_balance]
    context_mitigators: [distance, slick_or_unsuitable_surface, allies, cover]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [LIC-C2-001, LIC-D1-001]
  notes: [tongue_is_not_a_second_action_channel, contact_sensing_requires_actual_contact, paralysis_wording_is_historical_version_scoped_and_never_automatic, no_continuous_contamination_polling]
ancient_strength:
  classifications: [similar_to_modern_baseline, behaviorally_harsher]
  evidence_class: D2
  rationale: close_contact_curiosity_and_limited_preindustrial_cleanup_or_treatment_can_make_fixed_baseline_Lickitung_more_consequential_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_curiosity_or_contact_context_can_raise_exposure_pressure
  canon_boundary_note: no_global_ancient_bonus_player_level_scaling_or_automatic_status_application
ancient_ecology:
  habitat: [exact_proto_kanto_distribution_unknown, terrestrial_routes_and_sheltered_foraging_areas_when_authored]
  ecological_niche: [contact_explorer, opportunistic_forager]
  activity_pattern: [slow_foraging, licking_unfamiliar_surfaces, resting, cleaning]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [texture_and_taste_memory_can_shape_repeat_foraging_choices, sour_aversion_is_historical_context]
  social_structure: [mostly_unknown]
  predator_prey_competitor_links: [local_food_competitors_are_authoring_inputs]
  environmental_effects: [licked_clean_surfaces, sticky_or_smelly_residue, disturbed_food_or_objects]
  observable_signs: [broad_lick_marks, viscous_saliva_residue, cleaned_but_smelly_object_surface, slow_tracks]
  locality_constraints: [direct_encounterability_does_not_mean_commonness_or_every_route_presence]
  unsupported_gaps: [exact_proto_kanto_abundance, exact_tongue_reach_per_individual_beyond_source_scale, exact_adhesion_strength_by_material, exact_contact_information_precision, exact_irritation_probability, exact_cleanup_or_recovery_time, tail_tongue_mechanism]
human_perception_and_culture:
  ordinary_attitude: [mixed_curiosity_and_caution_about_unwanted_contact]
  specialist_knowledge_holders: [foragers, healers, handlers_familiar_with_saliva_irritation, material_workers_only_if_local_D2_discovery_exists]
  benefits_and_services: [surface_cleaning_or_contact_clue_assistance_only_when_voluntary_and_safely_authored]
  fears_and_avoidance: [unexpected_lick_contact, sticky_residue, rash_or_tingling]
  myths_omens_taboos: [local_stories_may_exaggerate_its_tongue_into_a_truth_detector_or_paralyzing_touch]
  practical_customs: [keep_unknown_objects_out_of_tongue_reach, clean_exposed_skin_promptly, do_not_assume_contact_identification_is_infallible]
  common_misbeliefs: [Lickitung_can_identify_anything_by_licking, every_lick_paralyzes, its_tongue_is_a_full_human_hand, saliva_is_a_ready_made_universal_glue]
  local_variation_notes: [Hisui_processing_knowledge_is_not_baseline_proto_kanto_culture]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_slow_round_bodied_species_tests_nearby_objects_with_an_impossibly_long_tongue_and_leaves_sticky_residue]
  local_aliases_or_titles: none
  identification_evidence: [very_long_tongue, slow_body, repeated_licking, sticky_saliva_residue]
  initial_knowledge_fragments: [learns_about_surfaces_through_contact, avoid_unwanted_licks]
  post_identification_knowledge: [contact_yields_texture_taste_or_residue_cues_not_hidden_truth, prompt_cleaning_can_matter_after_exposure]
  advanced_insights: [safe_contact_sampling_can_distinguish_surface_residue_or_texture_without_becoming_chemical_omniscience]
  exceptional_individual_knowledge_hooks: [one_old_Lickitung_recognizes_a_specific_route_by_surface_residues_and_has_a_distinctive_scarred_tongue_tip]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_normally_higher_when_contact_or_cleanup_is_constrained
  default_behavior_states: [foraging, curious, licking, manipulating, warning_or_recoiling, gripping, retreating]
  aggression_tendency: curious_contact_pressure_or_defensive_behavior_not_universally_hostile
  territoriality: low_or_unknown
  avoidance_tendency: moderate_when_startled_or_contact_is_denied
  warning_signs: [tongue_extension, body_alignment, repeated_licking, sticky_residue]
  encounter_triggers: [approaching_unfamiliar_object_or_food, blocking_route, provoking_defensive_contact]
  escalation_triggers: [cornering, grabbing_tongue_or_body, attacking, repeated_intrusion]
  deescalation_conditions: [create_distance, remove_food_or_object_pressure, allow_retreat, stop_forcing_contact]
  pursuit_profile: short_or_contextual_not_infinite
  group_size_effects: [each_Lickitung_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [contact_irritation, sticky_contamination, temporary_grip_or_position_pressure]
  consequence_ceiling: severe_temporary_impairment_only_when_actual_exposure_eligibility_and_authored_resolution_justify_it
  human_check_hooks:
  - action: inspect_an_object_near_a_Lickitung_without_allowing_unwanted_tongue_contact
    relevant_species_axis: speed
    relevant_tags: [long_tongue, contact_sensing, sticky_saliva]
    relevant_hazard_keys: [lickitung-saliva-contact-irritation, lickitung-tongue-grip-pressure]
    difficulty_guidance: D024_context_from_distance_warning_cover_object_interest_and_escape_space
    notes: no_forced_contact_cutscene_or_automatic_status
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [curious, food_focused, wary, calm_contact_explorer]
    condition_variants: [rested, hungry, irritated, recently_exposed_to_strong_taste, injured]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [unusual_tongue_control, persistent_route_memory, repeated_survival, unusual_saliva_property, learned_contact_routine]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_tongue_marking_or_scar, known_behavior, territory_or_history]
    warning_or_rumor_hooks: [one_old_Lickitung_can_recognize_a_caravan_route_by_residue_patterns_but_still_requires_direct_contact]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, safe_contact_habits, appropriate_food, space_for_tongue_use_without_forced_restraint]
  trust_building_paths: [repeat_calm_contact, feeding_without_capture, allowing_safe_exploration, respecting_refusal_and_distance]
  reasons_to_stay: [bond, reliable_food, safe_shelter, interesting_but_safe_contact_environment]
  rejection_or_departure_reasons: [forced_saliva_collection, coercive_tool_use, punishment_for_licking, chronic_contact_denial_without_alternative_enrichment]
  human_social_costs: [sanitation_concerns_unwanted_licking_and_sticky_residue_in_dense_settlements]
  logistics:
    food: [species_appropriate_food_or_equivalent]
    water: [ordinary_access]
    shelter_temperature: [dry_safe_resting_area_appropriate_to_local_climate]
    space_travel: [clearance_for_tongue_use_without_treating_the_Pokemon_as_inventory]
    settlement_restrictions: [protect_food_storage_sensitive_surfaces_and_people_who_cannot_risk_saliva_contact]
    special_resources: [cleaning_water_or_cloth_for_contact_hygiene_when_needed]
  assistance_capabilities: [voluntary_contact_sampling_of_surface_cues, nearby_object_manipulation, bounded_cleaning_of_suitable_objects]
  handling_boundaries: [no_defeat_to_recruit, no_forced_saliva_harvesting, no_omniscient_scout_role, no_generic_tool_hand_or_grapple_role, one_visible_companion_slot]
  separation_injury_notes: [tongue_injury_or_irritation_is_authored_health_context_not_a_separate_limb_health_pool]
mechanical_hooks:
  tracking_clues: [lick_marks, sticky_residue, cleaned_but_smelly_surfaces, slow_tracks]
  avoidance_preparation: [keep_distance, protect_sensitive_surfaces, prepare_prompt_cleanup, use_cover_for_object_inspection]
  resistance_or_protection: [distance, barriers, washable_covering, prompt_cleaning]
  combat_approach_permissions: [contact_target, sticky_residue_present, tongue_extended, grip_established]
  blocked_or_invalid_approaches: [generic_hands_or_tool_proficiency, unrestricted_grapple_or_traversal, omniscient_identification, remote_sensing, automatic_paralysis_rash_or_itch, universal_adhesion, continuous_contamination_scan]
  fear_hooks: [a_long_tongue_slides_around_cover_and_leaves_a_shining_residue_on_the_only_handhold]
  injury_hazard_hooks: [lickitung-saliva-contact-irritation, lickitung-tongue-grip-pressure]
  environmental_state_hooks: [clean_surface, contaminated_surface, sticky_residue, safe_contact_sample]
  companion_assistance_hooks: [voluntary_contact_accessible_clue_sampling_or_nearby_manipulation]
  fortune_spike_opportunities: [a_safe_lick_reveals_a_sour_or_sticky_residue_that_changes_the_investigation_without_identifying_its_hidden_source]
  trouble_spike_complications: [the_only_safe_route_requires_touching_a_surface_already_coated_in_viscous_saliva]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [saliva_residue_only_when_an_authored_event_produces_it_not_as_guaranteed_resource]
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [routine_live_saliva_collection_or_companion_production_loop_is_forbidden]
  taboo_or_protection: [local_D2_only_if_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: [Hisui_era_official_evidence_that_collected_viscous_saliva_can_be_boiled_into_strong_adhesive]
  human_craft_bridge: []
  narrow_domain: none_in_proto_kanto_baseline
  local_dependency: []
  scalability_limits: [later_era_processing_evidence_does_not_supply_proto_kanto_recipe_specialists_market_or_industry, any_earlier_D2_discovery_must_be_narrow_and_nonindustrial]
  ownership_shortcut_forbidden: true
  evidence_class: C1
emergency_consumable_hooks:
  hooks: [contact_irritation_cleanup_or_recovery_concept_may_be_authored_in_P5_under_existing_hazard_item_contract]
narrative_and_event_hooks:
  peaceful: [allow_a_calm_Lickitung_to_sample_a_safe_surface_and_compare_texture_or_taste_cues]
  dangerous: [navigate_a_tight_storage_room_where_unwanted_tongue_contact_and_delayed_cleanup_can_create_real_exposure]
  unusual_or_rare: [find_a_local_experimenter_who_independently_notices_raw_saliva_stickiness_without_possessing_the_later_Hisui_processing_recipe]
  discovery_insight: [learn_that_contact_sensing_is_useful_but_only_reports_cues_available_at_the_touched_surface]
  route_environment: [sheltered_route, food_storage_edge, rocky_or_wooded_foraging_area]
  settlement_culture: [handlers_keep_wash_water_and_teach_children_not_to_treat_the_tongue_as_a_harmless_petting_behavior]
  cross_species: [contact_residue_from_other_species_can_be_sampled_but_never_identified_with_automatic_certainty]
presentation_and_p6_followups:
  initial_bestiary_presentation: slow_durable_contact_explorer_defined_by_an_extremely_long_deft_tongue_and_sticky_saliva
  progressive_reveal_notes: [show_actual_contact_requirement_before_information_reveal, distinguish_sticky_grip_from_guaranteed_restraint, preserve_tail_connection_as_unresolved]
  species_specific_visual_needs: [tongue_reach_contact_point_sticky_residue_and_cleanup_state_readability]
  species_specific_audio_needs: [tongue_flick, wet_contact, sticky_release, slow_body_movement]
  special_ui_or_readability_needs: [event_scoped_contact_or_exposure_fact_only_not_continuous_scan_or_contamination_meter]
  p6_followup_required: true
cross_species_links:
  evolution_family: [lickitung, lickilicky_external]
  predator_prey: []
  competition: [local_food_competitors_when_authored]
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: [later_Hisui_processed_saliva_adhesive_is_external_later_era_provenance_only]
open_questions_and_gates:
  unresolved_sources: [exact_tongue_max_reach_per_individual_beyond_source_scale, exact_adhesion_strength_by_material, exact_contact_information_precision, exact_irritation_or_paralysis_probability, exact_cleanup_or_recovery_time, exact_tail_tongue_mechanism]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [contact_irritation_cleanup_or_recovery_item_design_if_needed]
  deferred_to_p6: [tongue_contact_residue_grip_and_cleanup_readability]
  deferred_to_p7: []
```
