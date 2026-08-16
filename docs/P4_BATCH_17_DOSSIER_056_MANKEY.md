# P4 Batch 17 — #056 Mankey Full-Schema Dossier

Part of `docs/P4_BATCH_17_FULL_SCHEMA_DOSSIERS.md`.

---

## #056 Mankey / 망키

```yaml
identity:
  national_dex: 56
  species_key: mankey
  official_name_en: Mankey
  official_name_ko: 망키
  evolution_family_keys: [mankey, primeape, annihilape_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-MANKEY-SG, P4_BATCH_17_SOURCE_REVIEW]
  official_evidence:
  - claim_id: MNK-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-MANKEY-SG
    version_context: current_official_portal__OBSERVED_SOCIAL_BEHAVIOR
    paraphrase: lives_in_groups_in_treetops_and_separation_from_the_group_can_trigger_anger
  - claim_id: MNK-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-MANKEY-SG
    version_context: current_official_portal__OBSERVED_TEMPERAMENT
    paraphrase: can_shift_abruptly_from_docile_behavior_to_violent_thrashing
  - claim_id: MNK-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__VERSION_SCOPED_EXTRAORDINARY
    paraphrase: historical_entries_add_shaking_and_rough_breathing_warning_signs_friend_foe_confusion_and_colony_wide_escalation
  derived_claims:
  - claim_id: MNK-D1-001
    evidence_class: D1
    based_on: [MNK-C1-001, MNK-C1-002, MNK-C1-003]
    statement: Mankey_is_a_high_volatility_social_species_whose_escalation_should_be_authored_as_readable_encounter_states
    canon_boundary_note: quick_temper_does_not_create_a_universal_rage_meter_or_permanent_hostility
  - claim_id: MNK-D1-002
    evidence_class: D1
    based_on: [MNK-C1-003]
    statement: severe_no_time_to_flee_wording_supports_pressure_but_not_a_species_wide_no_escape_rule
    canon_boundary_note: player_agency_remains_governed_by_explicit_state_transitions_and_existing_P3_resolution
  - claim_id: MNK-D2-001
    evidence_class: D2
    based_on: [MNK-C1-001, MNK-D1-001]
    statement: ancient_local_encounters_may_use_group_separation_and_visible_anger_cues_as_route_or_social_pressure
    canon_boundary_note: local_encounter_authoring_is_project_setting_content_not_franchise_canon
canonical_source_data:
  types: [fighting]
  base_stats_raw: {hp: 40, attack: 80, defense: 35, special_attack: 35, special_defense: 45, speed: 70}
  abilities_relevant_to_p4: [vital_spirit_as_modern_context, anger_point_as_modern_context, defiant_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 0.5_m, weight: 28.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [primeape]
    canonical_conditions: [current_level_28_metadata_is_source_context_not_an_ancient_level_system, annihilape_is_post_Gen1_context]
  other_material_facts:
  - treetop_group_living
  - separation_linked_anger
  - abrupt_quick_temper
  - version_scoped_visible_anger_warning_signs
  - version_scoped_group_escalation_and_friend_foe_confusion
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 4
  guard: 1
  potency: 1
  resistance: 2
  speed: 3
  derivation_notes: {vigor: hp_40, force: attack_80, guard: defense_35, potency: special_attack_35, resistance: special_defense_45, speed: speed_70}
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - quick_temper_is_behavior_not_a_stat_multiplier
  - group_escalation_does_not_create_shared_actions_or_health
capabilities_and_hazards:
  locomotion: [agile_ground_movement, species_supported_treetop_movement]
  physical_hazards: [rapid_close_range_thrashing_and_striking]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [abrupt_escalation, separation_linked_anger, group_escalation_candidate, version_scoped_friend_foe_confusion_when_enraged]
  utility_interaction_capabilities: [visible_anger_cues_can_be_learned_and_read]
  immunities_or_approach_invalidators:
  - no_universal_sleep_immunity_from_Vital_Spirit
  - no_universal_no_flee_state
  - no_pack_telepathy_or_extra_turns
  hazard_records:
  - hazard_key: mankey-volatility-escalation
    kind: other
    delivery_or_exposure: [close_proximity_during_an_authored_anger_transition, interference_with_a_group_or_isolated_member]
    prerequisite_or_trigger: [explicit_encounter_escalation_state, separation_pressure_or_other_authored_provocation]
    warning_signs: [shaking, rough_nasal_breathing, sudden_posture_change, nearby_group_members_becoming_agitated]
    immediate_effects: [rapid_physical_aggression, reduced_time_for_some_low_commitment_options, possible_group_escalation_when_authored]
    delayed_or_persistent_effects: [none_automatic_after_distance_or_deescalation]
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_in_group_or_compound_context
    countermeasures: [notice_warning_signs, create_distance_early, stop_interference, avoid_separating_group_members, use_cover_or_route_geometry, allow_retreat]
    emergency_consumable_hooks: []
    context_amplifiers: [isolated_group_member, confined_space, multiple_agitated_Mankey, ignored_warning_signs]
    context_mitigators: [distance, cover, intact_group_contact, clear_retreat_path, prior_local_knowledge]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [MNK-C1-001, MNK-C1-002, MNK-C1-003, MNK-D1-001, MNK-D1-002]
  notes:
  - escalation_is_discrete_authored_state_not_continuous_rage_simulation
  - one_Mankey_is_one_entity_one_turn_one_health_state_one_visible_companion_slot
  - historical_absolute_escape_wording_never_silently_removes_player_resolution
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: lower_information_and_harder_route_conditions_can_make_volatile_group_encounters_more_dangerous_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_group_and_separation_states_can_raise_encounter_pressure
  canon_boundary_note: no_global_ancient_bonus_and_no_player_level_scaling
ancient_ecology:
  habitat: [wooded_or_treetop_localities_when_locally_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [small_agile_social_forager_with_high_defensive_or_social_volatility]
  activity_pattern: [ordinary_activity_pattern_unresolved]
  seasonal_notes: [exact_seasonality_unknown]
  feeding_and_resource_interaction: [exact_complete_diet_unknown]
  social_structure: [group_living_source_backed, exact_group_size_and_hierarchy_unknown]
  predator_prey_competitor_links: [species_specific_links_only_when_evidence_or_local_authoring_supports_them]
  environmental_effects: [agitated_groups_can_temporarily_make_a_local_route_or_canopy_unsafe]
  observable_signs: [treetop_movement, clustered_tracks_or_droppings_when_authored, shaking_and_rough_breathing_near_escalation]
  locality_constraints: [D034_direct_encounterability_somewhere_does_not_equal_common_or_region_wide_presence]
  unsupported_gaps: [exact_group_size, separation_distance_or_duration, escalation_signal_chain, warning_window, complete_diet]
human_perception_and_culture:
  ordinary_attitude: [wary_where_groups_are_known, neutral_or_unfamiliar_elsewhere]
  specialist_knowledge_holders: [repeat_local_travelers, foragers, hunters_or_observers_with_noncoercive_contact]
  benefits_and_services: [none_required]
  fears_and_avoidance: [sudden_escalation, provoking_a_group_by_separating_one_member]
  myths_omens_taboos: [local_D2_stories_may_exaggerate_inescapable_rage_but_are_not_species_rules]
  practical_customs: [watch_breathing_and_posture, do_not_corner_or_split_a_group, leave_space_before_escalation]
  common_misbeliefs: [every_Mankey_is_always_hostile, anger_is_supernatural, one_angry_member_controls_the_whole_group]
  local_variation_notes: [no_region_wide_trainer_or_fighting_institution_implied]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_primate_like_creatures_shift_in_the_canopy_then_one_begins_shaking_and_breathing_harshly]
  local_aliases_or_titles: none
  identification_evidence: [body_shape, group_treetop_behavior, recognizable_anger_cues]
  initial_knowledge_fragments: [groups_can_become_dangerous_quickly, visible_agitation_is_meaningful]
  post_identification_knowledge: [separation_can_be_a_trigger_and_some_group_escalations_propagate]
  advanced_insights: [differentiate_warning_state_from_active_attack_and_preserve_retreat_before_commitment]
  exceptional_individual_knowledge_hooks: [a_Mankey_known_for_remaining_calm_longer_than_its_group_until_a_specific_separation_trigger]
threat_and_encounter:
  baseline_threat_band: moderate
  default_behavior_states: [group_foraging, observing, wary, warning, enraged, withdrawing]
  aggression_tendency: highly_variable_with_fast_escalation_not_permanent_hostility
  territoriality: local_or_group_specific
  avoidance_tendency: variable
  warning_signs: [shaking, rough_breathing, sudden_stillness_or_posture_change, group_agitation]
  encounter_triggers: [route_crossing, treetop_group_contact, isolated_member, competition_for_space_or_food]
  escalation_triggers: [separation_pressure, cornering, continued_interference_after_warning, group_member_escalation_when_event_authors_it]
  deescalation_conditions: [restore_distance, stop_interference, allow_group_reconnection, leave_route_or_cover_line]
  pursuit_profile: short_to_moderate_and_event_bounded_unless_an_exceptional_individual_is_authored
  group_size_effects: [more_members_raise_angle_and_escalation_pressure_without_extra_turns_per_entity_or_shared_health]
  ordinary_consequence_categories: [blunt_or_slashing_contact_injury, lost_position, route_denial, social_escalation]
  consequence_ceiling: serious_in_explicit_group_or_compound_context
  human_check_hooks:
  - action: notice_and_act_before_anger_escalates
    relevant_species_axis: speed
    relevant_tags: [visible_anger_cues, abrupt_escalation]
    relevant_hazard_keys: [mankey-volatility-escalation]
    difficulty_guidance: D024_context_from_distance_visibility_prior_knowledge_and_current_warning_state
    notes: failure_advances_authored_state_or_cost_it_does_not_install_a_global_no_flee_rule
  - action: disengage_from_an_agitated_group
    relevant_species_axis: speed
    relevant_tags: [group_escalation_candidate]
    relevant_hazard_keys: [mankey-volatility-escalation]
    difficulty_guidance: D024_plus_route_geometry_group_position_and_available_cover
    notes: success_and_failure_resolve_current_situation_not_permanent_species_AI
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [social, wary, unusually_patient, hair_trigger]
    condition_variants: [calm, isolated, warning, enraged, exhausted]
    local_lineage_variants: [none_without_evidence_or_D2_local_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, repeated_conflict, unusual_social_history, injury, long_term_isolation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_behavioral_tell, persistent_history, encounter_specific_reason]
    warning_or_rumor_hooks: [an_old_Mankey_whose_calm_state_is_mistaken_for_safety_until_a_known_group_trigger_occurs]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [rare_voluntary_trust, respect_for_social_group_needs, reliable_deescalation_and_space]
  trust_building_paths: [noncoercive_repeat_contact, food_or_shelter_aid_without_capture, predictable_respect_for_warning_signs]
  reasons_to_stay: [social_bond, safety, familiar_group_or_human_relationship]
  rejection_or_departure_reasons: [forced_separation, coercion, repeated_cornering, deliberate_rage_testing]
  human_social_costs: [settlement_worry_about_volatility, need_for_clear_space_and_warning_protocols]
  logistics:
    food: [species_appropriate_food_exact_complete_diet_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [safe_rest_site_with_vertical_or_private_space_when_possible]
    space_travel: [avoid_forced_confined_transport_and_group_separation_pressure]
    settlement_restrictions: [maintain_distance_from_crowds_when_agitated]
    special_resources: [none_fixed]
  assistance_capabilities: [agile_climbing_or_treetop_access_only_when_individually_cooperative_and_context_allows]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_rage_exploitation, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_separation_can_be_behaviorally_material]
mechanical_hooks:
  tracking_clues: [canopy_movement, grouped_signs, visible_anger_cues]
  avoidance_preparation: [identify_group_routes, preserve_escape_space, avoid_splitting_members]
  resistance_or_protection: [distance, cover, early_deescalation, ordinary_physical_protection]
  combat_approach_permissions: [ordinary_Mankey_remains_one_entity_one_turn_one_health_state]
  blocked_or_invalid_approaches: [universal_rage_meter, automatic_hostility, global_no_flee, pack_telepathy, anger_based_damage_multiplier_without_authored_rule]
  fear_hooks: [one_small_creature_begins_shaking_and_the_canopy_around_it_answers_with_movement]
  injury_hazard_hooks: [rapid_close_range_thrashing]
  environmental_state_hooks: [group_cohesion, vertical_route_space, distance, cover, isolation]
  companion_assistance_hooks: [agile_access_when_voluntarily_cooperative]
  fortune_spike_opportunities: [recognize_rough_breathing_early_enough_to_leave_before_group_escalation]
  trouble_spike_complications: [a_character_accidentally_blocks_reconnection_between_an_isolated_Mankey_and_its_group]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_body_parts_are_not_automatic_materials]
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
  scalability_limits: [agility_or_anger_behavior_does_not_create_a_technology_or_martial_institution]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_group_without_splitting_it_and_learn_the_difference_between_resting_and_warning_behavior]
  dangerous: [an_isolated_member_begins_shaking_while_other_Mankey_close_in_through_the_canopy]
  unusual_or_rare: [an_exceptionally_old_individual_has_a_documented_trigger_and_a_reputation_for_surviving_prior_conflicts]
  discovery_insight: [rough_breathing_and_shaking_are_actionable_warning_information_not_flavor_only]
  route_environment: [a_treetop_group_temporarily_controls_a_narrow_wooded_passage]
  settlement_culture: [local_travelers_teach_spacing_and_deescalation_without_normalizing_ownership]
  cross_species: [none_required]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_social_tree_dweller_with_unusually_abrupt_and_readable_anger_escalation
  progressive_reveal_notes: [reveal_group_sociality_before_extreme_historical_rage_claims, distinguish_warning_from_active_attack]
  species_specific_visual_needs: [shaking_posture, breathing_or_snout_motion, group_canopy_readability]
  species_specific_audio_needs: [rough_breathing_and_group_agitation_cues]
  special_ui_or_readability_needs: [clear_warning_to_escalation_state_transition_without_numeric_rage_meter]
  p6_followup_required: true
cross_species_links:
  evolution_family: [primeape, annihilape_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_group_size, exact_separation_threshold, exact_warning_window, friend_foe_confusion_frequency]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [discrete_group_separation_pressure_and_escalation_state_representation]
  deferred_to_p6: [anger_warning_visual_audio_readability]
  deferred_to_p7: [cache_authored_encounter_state_and_group_relationships_do_not_run_continuous_rage_or_pack_scans]
```
