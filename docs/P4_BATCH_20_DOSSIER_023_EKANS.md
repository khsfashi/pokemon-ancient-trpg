# P4 Batch 20 — #023 Ekans Full-Schema Dossier

Part of `docs/P4_BATCH_20_FULL_SCHEMA_DOSSIERS.md`.

---

## #023 Ekans / 아보

```yaml
identity:
  national_dex: 23
  species_key: ekans
  official_name_en: Ekans
  official_name_ko: 아보
  evolution_family_keys: [ekans, arbok]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-EKANS-SG, P4_BATCH_20_SOURCE_REVIEW]
  official_evidence:
  - claim_id: EKA-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-EKANS-SG
    version_context: current_official_portal__FEEDING_AND_SENSING
    paraphrase: Ekans_can_open_its_jaw_widely_to_swallow_large_prey_and_uses_its_tongue_to_sense_nearby_danger
  - claim_id: EKA-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__STEALTH_AGE_AND_VENOM_CONTEXT
    paraphrase: historical_entries_add_silent_approach_egg_predation_age_related_body_length_tree_resting_and_newborn_nonvenomous_bites
  derived_claims:
  - claim_id: EKA-D1-001
    evidence_class: D1
    based_on: [EKA-C1-001, EKA-C1-002]
    statement: Ekans_is_a_low_profile_ambush_predator_with_tongue_assisted_sensing_and_context_sensitive_venom
    canon_boundary_note: no_invisibility_omniscient_scan_or_automatic_poison
  - claim_id: EKA-D1-002
    evidence_class: D1
    based_on: [EKA-C1-001]
    statement: large_prey_swallowing_can_create_a_post_feeding_mobility_disadvantage
    canon_boundary_note: no_instant_kill_swallowing_or_arbitrary_target_storage
canonical_source_data:
  types: [poison]
  base_stats_raw: {hp: 35, attack: 60, defense: 44, special_attack: 40, special_defense: 54, speed: 55}
  abilities_relevant_to_p4: [intimidate_as_modern_context, shed_skin_as_modern_context, unnerve_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 2.0_m, weight: 6.9_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [arbok]
    canonical_conditions: [modern_level_22_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [expandable_jaw, tongue_sensing, stealthy_approach, egg_predation_historical, age_related_length_historical, newborn_nonvenomous_bite_historical]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 3
  guard: 2
  potency: 2
  resistance: 2
  speed: 2
  derivation_notes: {vigor: hp_35, force: attack_60, guard: defense_44, potency: special_attack_40, resistance: special_defense_54, speed: speed_55}
  calibration_flags: [no_manual_exception, venom_severity_not_capped_by_axis_rating, stealth_not_encoded_as_invisibility, sensing_range_not_formulaized]
capabilities_and_hazards:
  locomotion: [serpentine_ground_movement, climbing_or_branch_resting_only_when_geometry_allows]
  physical_hazards: [bite, body_coil_pressure, large_prey_swallow_attempt_when_target_scale_and_state_are_credible]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [low_profile_ambush, tongue_assisted_sensing, silent_approach, coiled_multidirectional_rest_response]
  utility_interaction_capabilities: [sensing_nearby_danger_or_prey_clues_when_airborne_chemical_or_motion_context_supports_it]
  immunities_or_approach_invalidators: [stealth_does_not_make_Ekans_invisible, tongue_sensing_does_not_ignore_cover_distance_or_context]
  hazard_records:
  - hazard_key: ekans-bite-venom
    kind: venom
    delivery_or_exposure: [successful_bite_with_venom_capable_individual]
    prerequisite_or_trigger: [bite_contact, venom_capability_present, consequence_resolved_after_exposure]
    warning_signs: [visible_strike_posture, hissing_or_body_tension_when_detected, ambush_clues_in_grass_or_nest_area]
    immediate_effects: [puncture_injury, possible_venom_exposure]
    delayed_or_persistent_effects: [bounded_venom_consequence_if_exposure_is_confirmed]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_for_named_or_unusually_venomous_individual_or_delayed_treatment
    countermeasures: [avoid_strike_range, protective_barrier_or_clothing_when_fiction_supports_it, disengage, treat_confirmed_exposure]
    emergency_consumable_hooks: [generic_venom_recovery_hook_deferred_to_P5_item_design]
    context_amplifiers: [surprise, confined_space, delayed_treatment, exceptional_individual]
    context_mitigators: [distance, warning, cover, rapid_retreat, treatment_access]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [EKA-C1-002, EKA-D1-001]
  - hazard_key: ekans-swallowing-pressure
    kind: other
    delivery_or_exposure: [close_range_feeding_or_restraint_sequence_against_plausibly_small_target]
    prerequisite_or_trigger: [target_scale_and_position_are_credible, Ekans_commits_its_action_to_the_attempt]
    warning_signs: [jaw_opening, close_body_alignment, target_already_pinned_or_injured]
    immediate_effects: [position_loss, severe_close_range_pressure, possible_incapacitation_if_scene_fiction_supports_it]
    delayed_or_persistent_effects: [post_feeding_mobility_penalty_for_Ekans_when_a_large_meal_is_completed]
    ordinary_consequence_ceiling: severe
    exceptional_consequence_ceiling: life_threatening_only_in_explicitly_constrained_scene
    countermeasures: [keep_distance, break_alignment, free_the_target, exploit_post_feeding_immobility, retreat]
    emergency_consumable_hooks: []
    context_amplifiers: [small_target, confined_space, prior_restraint]
    context_mitigators: [open_space, allies, distance, target_too_large]
    governing_species_axes: [force]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [EKA-C1-001, EKA-D1-002]
  notes: [newborn_nonvenomous_wording_is_version_scoped_and_does_not_require_continuous_age_simulation, no_passive_proximity_poison]
ancient_strength:
  classifications: [similar_to_modern_baseline, behaviorally_harsher]
  evidence_class: D2
  rationale: low_visibility_grass_nests_and_preindustrial_treatment_limits_can_make_ordinary_Ekans_more_consequential_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_ambush_context_can_raise_exposure_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [grassland, brush, field_edges, branch_rest_sites_when_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [small_predator, egg_and_small_prey_hunter]
  activity_pattern: [ambush_foraging, coiled_resting, historical_night_branch_resting_possible]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [bird_egg_predation_historical, large_meal_can_reduce_mobility]
  social_structure: [mostly_unknown]
  predator_prey_competitor_links: [bird_nests_and_small_preys_are_local_authoring_inputs]
  environmental_effects: [flattened_grass_or_coil_marks_near_resting_site]
  observable_signs: [shed_skin_if_event_context_supports_it, egg_shells, serpentine_tracks, disturbed_grass, coiled_rest_marks]
  locality_constraints: [grassland_fit_does_not_mean_every_field_contains_Ekans]
  unsupported_gaps: [exact_sensory_range, exact_venom_maturation, exact_swallow_limit, proto_kanto_abundance]
human_perception_and_culture:
  ordinary_attitude: [caution_near_grass_and_nesting_areas]
  specialist_knowledge_holders: [foragers, field_watchers, healers_familiar_with_bites]
  benefits_and_services: [none_required]
  fears_and_avoidance: [hidden_bites, egg_raids, close_body_contact]
  myths_omens_taboos: [local_stories_may_exaggerate_tongue_sensing_into_supernatural_detection]
  practical_customs: [probe_dense_grass_before_reaching_in, watch_for_tracks_and_shells, treat_bites_as_exposure_events_not_assumed_poison]
  common_misbeliefs: [Ekans_can_detect_anyone_anywhere, every_bite_is_venomous, any_target_can_be_swallowed]
  local_variation_notes: [no_region_wide_snake_cult_or_venom_industry_is_required]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [grass_moves_without_a_visible_body_before_a_tongue_flick_or_coil_is_seen]
  local_aliases_or_titles: none
  identification_evidence: [serpentine_body, tongue_flicking, coiled_resting, ambush_tracks]
  initial_knowledge_fragments: [dangerous_at_close_range, stronger_ambush_pressure_in_dense_cover]
  post_identification_knowledge: [tongue_sensing_is_contextual_not_omniscient, large_meals_can_slow_it]
  advanced_insights: [reading_recent_feeding_or_nest_signs_can_turn_an_ambush_into_an_avoidable_encounter]
  exceptional_individual_knowledge_hooks: [an_old_long_Ekans_is_known_by_a_distinctive_scar_and_unusually_patient_ambush_route]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_normally_higher_when_ambush_or_venom_treatment_is_constrained
  default_behavior_states: [hidden, foraging, coiled_resting, warning, striking, feeding, retreating]
  aggression_tendency: opportunistic_predatory_or_defensive_not_universally_hostile
  territoriality: low_or_contextual_near_nest_or_rest_site
  avoidance_tendency: moderate_when_escape_cover_exists
  warning_signs: [tracks, disturbed_grass, egg_shells, hiss_or_tongue_flick_after_detection]
  encounter_triggers: [entering_ambush_lane, disturbing_rest_site, approaching_food_or_nest]
  escalation_triggers: [cornering, grabbing, attacking, blocking_retreat]
  deescalation_conditions: [create_distance, stop_pressing, leave_food_or_rest_site, allow_escape_cover]
  pursuit_profile: short_or_contextual_pursuit_not_infinite_and_not_perfect_tracking
  group_size_effects: [each_Ekans_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [bite_injury, venom_exposure, position_loss, restraint_pressure]
  consequence_ceiling: severe_when_close_range_escape_or_treatment_is_explicitly_constrained
  human_check_hooks:
  - action: cross_dense_grass_without_entering_an_Ekans_ambush_lane
    relevant_species_axis: speed
    relevant_tags: [ambush, sensing]
    relevant_hazard_keys: [ekans-bite-venom]
    difficulty_guidance: D024_context_from_cover_warning_distance_and_route_choice
    notes: no_passive_detection_or_surprise_formula
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, patient_ambusher, food_focused, defensive]
    condition_variants: [hungry, recently_fed_and_slowed, resting, injured, juvenile]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [advanced_age, unusual_size, persistent_territory, repeated_survival, unusual_venom_history]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_length_or_marking, scars, territory_or_history]
    warning_or_rumor_hooks: [one_old_Ekans_has_ambushed_travelers_from_the_same_reed_channel_for_years]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, safe_handling_distance, appropriate_food, noncoercive_contact]
  trust_building_paths: [repeat_calm_contact, feeding_without_forced_capture, respecting_escape_space]
  reasons_to_stay: [bond, reliable_food, safe_resting_place]
  rejection_or_departure_reasons: [rough_handling, starvation, coercive_combat, constant_exposure_without_cover]
  human_social_costs: [fear_of_venomous_snake_near_children_or_food_storage]
  logistics:
    food: [species_appropriate_small_prey_or_equivalent]
    water: [ordinary_access]
    shelter_temperature: [dry_hidden_resting_space_appropriate_to_local_climate]
    space_travel: [secure_noncrushing_space_and_escape_control_without_treating_it_as_inventory]
    settlement_restrictions: [prevent_unwanted_nest_or_livestock_access]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_scent_or_danger_clue_following_when_context_supports_it, low_profile_scouting_without_invisibility]
  handling_boundaries: [no_defeat_to_recruit, no_forced_venom_harvesting, no_omniscient_scout_role, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_can_refuse_risky_ambush_use]
mechanical_hooks:
  tracking_clues: [serpentine_tracks, egg_shells, disturbed_grass, coiled_rest_marks]
  avoidance_preparation: [route_around_dense_cover, probe_grass, keep_distance, prepare_bite_treatment]
  resistance_or_protection: [distance, barriers, protective_clothing_when_credible, rapid_treatment]
  combat_approach_permissions: [ambush_state, post_feeding_slow_state, contextual_tongue_sensing]
  blocked_or_invalid_approaches: [automatic_poison, invisibility, perfect_detection, instant_kill_swallowing, continuous_age_or_scent_simulation]
  fear_hooks: [the_grass_track_ends_beside_a_freshly_emptied_nest]
  injury_hazard_hooks: [ekans-bite-venom, ekans-swallowing-pressure]
  environmental_state_hooks: [dense_grass, branch_rest, open_ground, recently_fed]
  companion_assistance_hooks: [voluntary_low_profile_scouting_or_clue_sensing]
  fortune_spike_opportunities: [spot_that_the_Ekans_has_recently_fed_and_is_slow_to_reposition]
  trouble_spike_complications: [the_safe_path_narrows_into_cover_with_no_easy_side_step]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [shed_skin_only_when_an_authored_event_produces_it_not_as_guaranteed_drop]
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [live_venom_extraction_is_not_a_repeatable_default_resource_loop]
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
  scalability_limits: [venom_and_shed_skin_do_not_create_a_default_industry_or_technology_island]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: [bite_or_venom_recovery_concept_may_be_authored_in_P5_under_existing_hazard_item_contract_without_universal_antidote_semantics]
narrative_and_event_hooks:
  peaceful: [observe_an_Ekans_flicking_its_tongue_from_a_safe_distance_while_it_tracks_a_local_scent]
  dangerous: [cross_dense_grass_after_finding_signs_of_an_egg_raiding_ambush_predator]
  unusual_or_rare: [an_exceptional_old_Ekans_controls_a_long_used_reed_channel_and_has_outgrown_local_expectations]
  discovery_insight: [learn_that_a_recent_large_meal_reduces_mobility_and_changes_the_safest_approach]
  route_environment: [grassland, brush_path, field_edge, low_tree_rest_site]
  settlement_culture: [field_watchers_mark_fresh_tracks_and_nest_raids_without_claiming_every_Ekans_is_hostile]
  cross_species: [Arbok_shares_family_but_has_distinct_intimidation_constriction_and_pursuit_pressure]
presentation_and_p6_followups:
  initial_bestiary_presentation: grass_motion_tongue_flick_and_coiled_silhouette_before_venom_assumptions
  progressive_reveal_notes: [reveal_tongue_sensing_limits, feeding_mobility_tradeoff, age_or_venom_uncertainty]
  species_specific_visual_needs: [readable_coiled_hidden_and_recently_fed_states]
  species_specific_audio_needs: [subtle_grass_rustle_and_hiss_cues]
  special_ui_or_readability_needs: [hidden_state_must_still_offer_fair_authored_clues]
  p6_followup_required: true
cross_species_links:
  evolution_family: [arbok]
  predator_prey: [bird_egg_and_small_prey_relationships_are_local_authoring_not_mandatory_species_rows]
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [grassland_species_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_tongue_sensory_range, exact_swallowable_target_limit, exact_venom_maturation_timing, exact_post_feeding_mobility_duration]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_check_difficulty_and_bounded_venom_condition_timing, optional_emergency_item_definition]
  deferred_to_p6: [ambush_clue_readability, recently_fed_visual_state]
  deferred_to_p7: [cached_encounter_flags_and_event_triggered_venom_resolution]
```

### Completion note

All 20 frozen-schema top-level sections are populated. Ekans remains directly encounterable under D-034 without implying universal abundance, and ordinary weak individuals may become routine for advanced humans while rare history-backed exceptional Ekans may still be boss-grade under D-031. No blocking Human Design Gate remains.
