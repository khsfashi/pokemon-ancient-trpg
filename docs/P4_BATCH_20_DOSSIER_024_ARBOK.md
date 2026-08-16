# P4 Batch 20 — #024 Arbok Full-Schema Dossier

Part of `docs/P4_BATCH_20_FULL_SCHEMA_DOSSIERS.md`.

---

## #024 Arbok / 아보크

```yaml
identity:
  national_dex: 24
  species_key: arbok
  official_name_en: Arbok
  official_name_ko: 아보크
  evolution_family_keys: [ekans, arbok]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-ARBOK-SG, P4_BATCH_20_SOURCE_REVIEW]
  official_evidence:
  - claim_id: ARB-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-ARBOK-SG
    version_context: current_official_portal__INTIMIDATION_AND_PURSUIT
    paraphrase: Arbok_uses_a_frightening_belly_pattern_that_can_drive_weak_foes_away_and_pursues_selected_prey_with_extreme_tenacity
  - claim_id: ARB-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__CONSTRICTION_POISON_AND_PATTERN_VARIATION
    paraphrase: historical_entries_add_binding_and_poisoning_extreme_constriction_air_expulsion_sounds_and_region_or_version_scoped_belly_pattern_variation
  derived_claims:
  - claim_id: ARB-D1-001
    evidence_class: D1
    based_on: [ARB-C1-001, ARB-C1-002]
    statement: Arbok_is_a_high_pressure_predator_whose_display_pursuit_constriction_and_venom_are_severe_but_counterable
    canon_boundary_note: no_forced_Fear_permanent_restraint_infinite_chase_or_automatic_poison
  - claim_id: ARB-D1-002
    evidence_class: D1
    based_on: [ARB-C1-002]
    statement: extreme_crushing_language_is_capability_scale_evidence_not_generic_material_destruction
    canon_boundary_note: no_mining_structural_deletion_or_force_formula
canonical_source_data:
  types: [poison]
  base_stats_raw: {hp: 60, attack: 95, defense: 69, special_attack: 65, special_defense: 79, speed: 80}
  abilities_relevant_to_p4: [intimidate_as_modern_context, shed_skin_as_modern_context, unnerve_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 3.5_m, weight: 65.0_kg}
  evolution_source:
    evolves_from: ekans
    evolves_to: []
    canonical_conditions: [modern_level_22_metadata_for_Ekans_evolution_is_context_not_ancient_progression_law]
  other_material_facts: [frightening_belly_pattern, persistent_pursuit, constriction, venomous_binding_sequence_historical, air_expulsion_sound_historical, belly_pattern_variation_historical]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 3
  potency: 3
  resistance: 3
  speed: 4
  derivation_notes: {vigor: hp_60, force: attack_95, guard: defense_69, potency: special_attack_65, resistance: special_defense_79, speed: speed_80}
  calibration_flags: [no_manual_exception, constriction_severity_not_direct_force_formula, intimidation_not_forced_input_loss, pursuit_not_encoded_as_infinite_tracking]
capabilities_and_hazards:
  locomotion: [strong_serpentine_ground_movement, sustained_pursuit_when_scene_supports_it]
  physical_hazards: [bite, constriction, body_impact]
  elemental_environmental_hazards: []
  anomalous_hazards: [intimidation_display_as_behavioral_fear_pressure_not_mind_control]
  behavioral_capabilities: [belly_pattern_display, persistent_prey_pursuit, binding_sequence, threatening_air_expulsion_sound_historical]
  utility_interaction_capabilities: [body_can_apply_high_localized_pressure_to_suitable_objects_without_generic_destruction_permission]
  immunities_or_approach_invalidators: [warning_display_does_not_force_flee, constriction_does_not_remove_escape_options_by_default]
  hazard_records:
  - hazard_key: arbok-constriction
    kind: entanglement
    delivery_or_exposure: [successful_close_range_coil_after_positioning_or_prior_contact]
    prerequisite_or_trigger: [Arbok_reaches_and_wraps_target, target_scale_and_geometry_are_credible]
    warning_signs: [chest_spread, body_coiling, closing_distance, target_route_becoming_narrow]
    immediate_effects: [restraint_pressure, breathing_or_mobility_pressure, position_loss]
    delayed_or_persistent_effects: [escalating_injury_or_respiratory_risk_only_if_restraint_is_sustained]
    ordinary_consequence_ceiling: severe
    exceptional_consequence_ceiling: life_threatening_in_confined_or_named_exceptional_context
    countermeasures: [avoid_close_wrap, use_space_or_obstacles, break_or_interrupt_coil, exploit_allies, escape_or_force_disengagement]
    emergency_consumable_hooks: []
    context_amplifiers: [confined_space, surprise, isolated_target, exceptional_individual]
    context_mitigators: [open_ground, allies, barriers, prior_warning, escape_route]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [ARB-C1-002, ARB-D1-001]
  - hazard_key: arbok-bite-venom
    kind: venom
    delivery_or_exposure: [successful_bite_or_source_backed_binding_and_poisoning_sequence]
    prerequisite_or_trigger: [eligible_contact_and_confirmed_exposure]
    warning_signs: [visible_bite_attempt, coiled_restraint, fangs, threat_display]
    immediate_effects: [puncture_injury, possible_venom_exposure]
    delayed_or_persistent_effects: [bounded_venom_consequence_if_exposure_is_confirmed]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_with_delayed_treatment_or_exceptional_individual
    countermeasures: [avoid_bite_line, escape_restraint, protective_barrier_when_credible, prompt_treatment]
    emergency_consumable_hooks: [generic_venom_recovery_hook_deferred_to_P5_item_design]
    context_amplifiers: [restraint, repeated_exposure, delayed_treatment]
    context_mitigators: [distance, armor_or_barrier_when_fiction_supports_it, treatment_access]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [ARB-C1-002, ARB-D1-001]
  - hazard_key: arbok-intimidation-pursuit
    kind: other
    delivery_or_exposure: [visible_belly_display_and_or_persistent_chase_in_an_authored_encounter]
    prerequisite_or_trigger: [Arbok_commits_to_warning_or_pursuit_and_target_can_perceive_the_display_or_chase]
    warning_signs: [expanded_chest_pattern, eerie_air_sound, repeated_route_following, refusal_to_disengage]
    immediate_effects: [fear_pressure, route_denial, lost_position_or_need_to_change_approach]
    delayed_or_persistent_effects: [continued_chase_pressure_until_a_bounded_disengagement_condition_is_met]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_when_chase_drives_target_into_other_hazards]
    countermeasures: [break_line_or_route, exploit_terrain, create_distance, cease_contesting_prey_or_space_when_fiction_allows, coordinated_escape]
    emergency_consumable_hooks: []
    context_amplifiers: [narrow_route, darkness, exhausted_target, exceptional_individual]
    context_mitigators: [multiple_exits, obstacles, allies, prior_knowledge]
    governing_species_axes: [speed, resistance]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [ARB-C1-001]
  notes: [historical_no_escape_wording_is_not_a_universal_rule, no_frame_by_frame_squeeze_or_chase_simulation]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: preindustrial_routes_and_limited_venom_care_can_raise_encounter_consequence_without_any_global_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: pursuit_and_constriction_can_be_more_consequential_when_escape_routes_are_sparse
  canon_boundary_note: no_player_scaled_Arbok_or_global_ancient_buff
ancient_ecology:
  habitat: [grassland, brush, forest_edges, rocky_or_ruined_shelter_when_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [medium_predator, ambush_and_pursuit_hunter]
  activity_pattern: [foraging, warning_display, pursuit, coiled_resting]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [prey_hunting, no_region_wide_livestock_assumption]
  social_structure: [unknown_or_solitary_leaning_without_binding_rule]
  predator_prey_competitor_links: [local_prey_web_requires_authoring]
  environmental_effects: [compressed_vegetation_or_coil_marks, route_avoidance_by_local_people]
  observable_signs: [large_serpentine_tracks, shed_skin_if_event_context_supports_it, prey_drag_or_coil_marks, repeated_sightings_along_chase_route]
  locality_constraints: [direct_encounterability_does_not_mean_common_abundance]
  unsupported_gaps: [exact_constriction_force, exact_pursuit_limit, exact_pattern_taxonomy, exact_venom_dose]
human_perception_and_culture:
  ordinary_attitude: [strong_caution_or_fear]
  specialist_knowledge_holders: [hunters, route_watchers, healers, animal_handlers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [constriction, venom, long_pursuit, belly_display]
  myths_omens_taboos: [local_stories_may_claim_the_pattern_freezes_or_compels_any_viewer]
  practical_customs: [keep_escape_space, avoid_narrowing_routes, read_display_as_warning, prepare_bite_treatment]
  common_misbeliefs: [once_seen_escape_is_impossible, Arbok_can_crush_any_structure, every_display_forces_flight]
  local_variation_notes: [belly_pattern_variation_may_support_local_recognition_without_a_global_taxonomy]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_face_like_pattern_rises_above_grass_before_the_full_body_is_visible]
  local_aliases_or_titles: none
  identification_evidence: [large_serpentine_body, chest_pattern, coiling, persistent_route_following]
  initial_knowledge_fragments: [do_not_allow_close_wrap, display_is_warning_pressure_not_magic]
  post_identification_knowledge: [pursuit_is_tenacious_but_can_be_bounded_by_scene_and_terrain]
  advanced_insights: [pattern_and_route_history_can_reveal_a_specific_individuals_usual_warning_or_chase_behavior]
  exceptional_individual_knowledge_hooks: [a_scarred_Arbok_with_a_distinct_pattern_is_known_for_returning_to_the_same_pass]
threat_and_encounter:
  baseline_threat_band: moderate_to_high_due_to_combined_restraint_venom_and_pursuit_pressure
  default_behavior_states: [resting, hunting, warning_display, pursuing, coiling, biting, disengaging]
  aggression_tendency: predatory_or_defensive_contextual_not_permanently_hostile
  territoriality: moderate_when_food_rest_site_or_route_is_contested
  avoidance_tendency: low_to_moderate_once_a_pursuit_is_committed_but_not_zero
  warning_signs: [belly_display, air_expulsion_sound, coiling, repeated_following]
  encounter_triggers: [prey_selection, route_crossing, cornering, disturbance]
  escalation_triggers: [continued_close_approach, attack, blocked_escape, failed_warning]
  deescalation_conditions: [create_distance, leave_contested_space, break_route_or_line, interrupt_pursuit, stop_threatening_when_fiction_supports_it]
  pursuit_profile: tenacious_and_longer_than_Ekans_but_event_bounded_without_perfect_tracking
  group_size_effects: [each_Arbok_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [restraint, bite_injury, venom_exposure, fear_pressure, route_loss]
  consequence_ceiling: life_threatening_when_restraint_or_venom_treatment_is_explicitly_constrained
  human_check_hooks:
  - action: escape_an_Arbok_pursuit_without_being_forced_into_constriction_range
    relevant_species_axis: speed
    relevant_tags: [pursuit, intimidation, constriction]
    relevant_hazard_keys: [arbok-intimidation-pursuit, arbok-constriction]
    difficulty_guidance: D024_context_from_route_options_distance_warning_and_target_condition
    notes: no_infinite_chase_or_forced_flee_rule
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, dominant_display, patient_hunter, relentless_when_committed]
    condition_variants: [resting, hunting, injured, recently_fed, exhausted_after_bounded_chase]
    local_lineage_variants: [pattern_variation_may_be_visual_only_unless_D2_history_justifies_more]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_size, repeated_conflict_survival, locally_feared_hunting_history]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_pattern, scars, territory_or_pursuit_history]
    warning_or_rumor_hooks: [one_Arbok_has_driven_even_experienced_hunters_from_a_narrow_pass]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, safe_space, experienced_handling, noncoercive_contact]
  trust_building_paths: [repeat_respectful_contact, food_without_forced_capture, honoring_warning_display_and_retreat_space]
  reasons_to_stay: [bond, reliable_food, secure_rest_site]
  rejection_or_departure_reasons: [forced_restraint_use, starvation, constant_provocation, coercive_combat]
  human_social_costs: [strong_public_fear, settlement_safety_constraints, venom_concern]
  logistics:
    food: [substantial_species_appropriate_food]
    water: [ordinary_access]
    shelter_temperature: [secure_resting_space_matching_local_climate]
    space_travel: [large_body_requires_route_and_rest_space]
    settlement_restrictions: [avoid_uncontrolled_access_to_children_livestock_or_tight_common_areas]
    special_resources: [none_fixed]
  assistance_capabilities: [warning_display, guarding_presence, bounded_tracking_or_pursuit_help_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_interrogation_by_constriction, no_automatic_fear_aura, one_visible_companion_slot]
  separation_injury_notes: [bonded_Arbok_remains_independent_and_can_refuse_close_restraint_tasks]
mechanical_hooks:
  tracking_clues: [large_tracks, repeated_chase_route_signs, shed_skin_when_authored, compressed_vegetation]
  avoidance_preparation: [keep_multiple_exits, avoid_confined_wrap_range, plan_venom_response]
  resistance_or_protection: [distance, obstacles, allies, protective_barriers_when_credible, treatment_access]
  combat_approach_permissions: [warning_display, pursuit_state, coiled_restraint_state, post_pursuit_fatigue_if_authored]
  blocked_or_invalid_approaches: [forced_Fear, automatic_poison, permanent_grapple, infinite_pursuit, structural_deletion_from_steel_drum_claim]
  fear_hooks: [the_same_chest_pattern_appears_again_at_the_next_turn_in_the_pass]
  injury_hazard_hooks: [arbok-constriction, arbok-bite-venom, arbok-intimidation-pursuit]
  environmental_state_hooks: [open_route, narrow_pass, dense_cover, blocked_exit]
  companion_assistance_hooks: [voluntary_guarding_or_tracking_without_forced_fear]
  fortune_spike_opportunities: [identify_a_second_escape_route_before_the_pursuit_commits]
  trouble_spike_complications: [the_only_clear_escape_path_is_too_narrow_to_prevent_a_close_wrap]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [shed_skin_only_when_authored_not_guaranteed_drop]
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [venom_extraction_is_not_a_default_repeatable_resource_loop]
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
  scalability_limits: [constriction_force_venom_and_pattern_do_not_create_mining_weapon_or_fear_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: [bite_or_venom_recovery_concept_may_be_authored_in_P5_under_existing_hazard_item_contract_without_universal_antidote_semantics]
narrative_and_event_hooks:
  peaceful: [observe_a_known_Arbok_display_and_withdraw_after_people_respect_its_space]
  dangerous: [escape_a_bounded_pursuit_through_a_route_where_being_coiled_would_be_catastrophic]
  unusual_or_rare: [a_named_exceptional_Arbok_with_a_unique_pattern_controls_a_historic_pass]
  discovery_insight: [learn_that_the_display_is_a_readable_warning_and_the_pursuit_has_terrain_dependent_limits]
  route_environment: [grassland_pass, brush_route, ruin_edge, rocky_corridor]
  settlement_culture: [route_watchers_record_distinctive_patterns_and_chase_routes_without_assuming_magical_compulsion]
  cross_species: [Ekans_shares_family_but_is_smaller_and_more_ambush_oriented]
presentation_and_p6_followups:
  initial_bestiary_presentation: readable_chest_pattern_body_coil_and_route_reappearance_before_any_status_icon
  progressive_reveal_notes: [separate_warning_pressure_from_forced_fear, show_constriction_eligibility, show_bounded_pursuit]
  species_specific_visual_needs: [clear_coiled_restraint_and_chest_display_states]
  species_specific_audio_needs: [air_expulsion_or_hiss_cue_without_supernatural_implication]
  special_ui_or_readability_needs: [restraint_and_pursuit_must_show_counterplay_and_exit_information]
  p6_followup_required: true
cross_species_links:
  evolution_family: [ekans]
  predator_prey: [local_prey_relationships_are_authored]
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [grassland_and_brush_species_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_constriction_force, exact_pursuit_distance_or_duration, exact_belly_pattern_taxonomy, exact_venom_delivery_or_dose]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_restraint_escape_checks_fear_pressure_and_venom_condition_timing]
  deferred_to_p6: [pattern_readability_coil_state_and_pursuit_cues]
  deferred_to_p7: [cached_pursuit_and_restraint_state_event_triggered_venom_and_no_per_frame_squeeze_simulation]
```

### Completion note

All 20 frozen-schema top-level sections are populated. Arbok remains a severe ordinary predator without forced Fear, unavoidable restraint, automatic poison or infinite pursuit. Rare persistent-history individuals may exceed the ordinary baseline under D-031 without player-relative scaling. No blocking Human Design Gate remains.
