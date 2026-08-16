# P4 Batch 18 — #125 Electabuzz Full-Schema Dossier

Part of `docs/P4_BATCH_18_FULL_SCHEMA_DOSSIERS.md`.

---

## #125 Electabuzz / 에레브

```yaml
identity:
  national_dex: 125
  species_key: electabuzz
  official_name_en: Electabuzz
  official_name_ko: 에레브
  evolution_family_keys: [elekid_external_post_gen1, electabuzz, electivire_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-ELECTABUZZ-SG, P4_BATCH_18_SOURCE_REVIEW]
  official_evidence:
  - claim_id: ELB-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-ELECTABUZZ-SG
    version_context: current_official_portal__OBSERVED_PHYSIOLOGY
    paraphrase: electrical_charge_and_discharge_are_present_across_the_body_surface_with_readable_static_effects
  - claim_id: ELB-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-ELECTABUZZ-SG
    version_context: current_official_portal__OBSERVED_ECOLOGY
    paraphrase: electrical_energy_is_food_and_storm_conditions_can_prompt_high_tree_lightning_feeding_behavior
  - claim_id: ELB-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__MODERN_INFRASTRUCTURE_AND_RESEARCH_CONTEXT
    paraphrase: historical_entries_add_power_facility_blackouts_lightning_rod_use_current_contact_communication_and_lightning_storage_research
  derived_claims:
  - claim_id: ELB-D1-001
    evidence_class: D1
    based_on: [ELB-C1-001]
    statement: body_surface_electricity_can_create_discrete_warning_and_exposure_states
    canon_boundary_note: no_permanent_damage_field_or_automatic_paralysis_aura
  - claim_id: ELB-D1-002
    evidence_class: D1
    based_on: [ELB-C1-002, ELB-C1-003]
    statement: storm_feeding_is_a_species_local_ecology_opportunity
    canon_boundary_note: no_weather_control_guaranteed_lightning_attraction_or_electrical_source_immunity
  - claim_id: ELB-D2-001
    evidence_class: D2
    based_on: [ELB-C1-003]
    statement: ancient_people_may_learn_to_avoid_or_observe_electrical_warning_signs_without_an_energy_institution
    canon_boundary_note: modern_grids_batteries_lightning_rods_and_storage_research_do_not_exist_by_implication
canonical_source_data:
  types: [electric]
  base_stats_raw: {hp: 65, attack: 83, defense: 57, special_attack: 95, special_defense: 85, speed: 105}
  abilities_relevant_to_p4: [static_as_modern_context, vital_spirit_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.1_m, weight: 30.0_kg}
  evolution_source:
    evolves_from: elekid_external_post_gen1
    evolves_to: [electivire_external_post_gen1]
    canonical_conditions: [later_family_members_and_modern_evolution_conditions_are_post_Gen1_context_only]
  other_material_facts: [body_surface_electricity, electrical_energy_feeding, storm_high_place_behavior, version_scoped_current_contact_communication]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 2
  potency: 4
  resistance: 4
  speed: 5
  derivation_notes: {vigor: hp_65, force: attack_83, guard: defense_57, potency: special_attack_95, resistance: special_defense_85, speed: speed_105}
  calibration_flags: [no_manual_exception, speed_5_is_not_lightning_reaction_speed, potency_4_does_not_define_voltage_radius_or_damage]
capabilities_and_hazards:
  locomotion: [fast_terrestrial_movement, tree_climbing_when_context_supports_it]
  physical_hazards: [close_range_strikes]
  elemental_environmental_hazards: [electrical_discharge, contact_or_near_contact_static_exposure]
  anomalous_hazards: []
  behavioral_capabilities: [storm_high_place_seeking, electrical_energy_feeding]
  utility_interaction_capabilities: [readable_charge_or_static_signs, version_scoped_current_contact_communication_between_individuals]
  immunities_or_approach_invalidators: [electrical_feeding_does_not_imply_universal_electrical_immunity]
  hazard_records:
  - hazard_key: electabuzz-electrical-discharge
    kind: electrical
    delivery_or_exposure: [direct_contact, close_authored_discharge_lane, charged_surface_or_object_only_when_event_authored]
    prerequisite_or_trigger: [Electabuzz_is_charged_and_discharges, contact_or_position_exposes_target]
    warning_signs: [hair_rising, visible_static, faint_glow_or_crackle, storm_high_place_behavior]
    immediate_effects: [shock_injury, startle_or_position_loss, severe_electrical_injury_when_explicitly_escalated]
    delayed_or_persistent_effects: [ordinary_injury_consequences_only_unless_event_authors_more]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_explicit_high_charge_or_named_exceptional_context
    countermeasures: [keep_distance, break_contact, use_dry_nonconductive_cover_when_available, avoid_exposed_high_places_during_storm_feeding]
    emergency_consumable_hooks: []
    context_amplifiers: [storm_charge_opportunity, wet_or_conductive_authored_environment, confined_contact]
    context_mitigators: [distance, solid_nonconductive_barrier, visible_discharge_recovery_or_deescalation_state]
    governing_species_axes: [potency, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [ELB-C1-001, ELB-C1-002, ELB-D1-001]
  notes: [charge_is_discrete_or_cached_state_not_per_frame_field, proximity_static_is_warning_not_auto_paralysis]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: low_insulation_knowledge_and_storm_exposure_can_make_encounters_more_dangerous_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_storm_or_charge_state_can_raise_local_exposure_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [electrically_active_or_storm_exposed_localities_when_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [mobile_electrical_energy_feeder_and_competitor_for_storm_high_points]
  activity_pattern: [storm_opportunity_can_change_behavior, ordinary_daily_pattern_unknown]
  seasonal_notes: [storm_frequency_may_affect_authored_encounters_but_exact_seasonality_unknown]
  feeding_and_resource_interaction: [electrical_energy_feeding_source_backed, ordinary_non_electrical_diet_unknown]
  social_structure: [unknown, version_scoped_current_contact_between_individuals]
  predator_prey_competitor_links: [none_required]
  environmental_effects: [localized_discharge_marks_or_static_signs_when_event_supports_them]
  observable_signs: [char_or_scorch_like_electrical_marks_only_when_authored, static_hair_or_crackle, repeated_use_of_exposed_high_points]
  locality_constraints: [D034_direct_encounterability_does_not_equal_commonness_or_modern_power_facility_presence]
  unsupported_gaps: [exact_charge_capacity, discharge_radius_voltage, lightning_survival_limit, storm_selection_mechanism, communication_range]
human_perception_and_culture:
  ordinary_attitude: [caution_around_visible_static_and_storm_high_places]
  specialist_knowledge_holders: [repeat_survivors, trackers, weather_exposed_foragers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [shock, storm_exposure, sudden_discharge]
  myths_omens_taboos: [local_D2_storm_omens_may_exist_but_are_not_region_wide_canon]
  practical_customs: [avoid_touching_charged_individuals, give_high_places_space_during_storms, read_static_signs]
  common_misbeliefs: [Electabuzz_controls_storms, every_nearby_person_is_paralyzed, villages_can_store_its_power_like_a_battery]
  local_variation_notes: [no_power_grid_energy_market_or_formal_lightning_rod_institution_implied]
identification_and_knowledge:
  baseline_recognition: rare
  unknown_presentation_hooks: [static_builds_and_an_exposed_tree_is_repeatedly_approached_before_thunder]
  local_aliases_or_titles: none
  identification_evidence: [yellow_black_body_pattern, electrical_crackle_or_glow, storm_high_place_behavior]
  initial_knowledge_fragments: [close_contact_can_be_dangerous, visible_static_is_meaningful]
  post_identification_knowledge: [electrical_energy_can_be_food_and_storms_can_change_behavior]
  advanced_insights: [charge_opportunities_can_be_avoided_or_waited_out_without_assuming_a_constant_field]
  exceptional_individual_knowledge_hooks: [one_individual_is_known_by_a_repeated_lightning_scarred_tree_route_and_distinctive_discharge_pattern]
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states: [foraging, observing, charged_warning, storm_seeking, discharging, withdrawing]
  aggression_tendency: context_dependent_not_implied_by_electricity
  territoriality: unknown_or_local
  avoidance_tendency: variable
  warning_signs: [static, crackle, glow, repeated_high_place_movement]
  encounter_triggers: [route_crossing, electrical_food_opportunity, storm_high_place_overlap, disturbance]
  escalation_triggers: [forced_contact, blocked_retreat, threat_during_charge_or_feeding]
  deescalation_conditions: [increase_distance, leave_high_place_or_feeding_site, stop_contact_pressure, allow_withdrawal]
  pursuit_profile: event_bounded
  group_size_effects: [each_Electabuzz_remains_one_entity_and_contact_communication_does_not_share_turns_or_health]
  ordinary_consequence_categories: [shock_injury, position_loss, route_denial]
  consequence_ceiling: severe_only_in_explicit_high_charge_or_exceptional_context
  human_check_hooks:
  - action: read_and_avoid_an_imminent_discharge
    relevant_species_axis: potency
    relevant_tags: [electrical_discharge, static_warning]
    relevant_hazard_keys: [electabuzz-electrical-discharge]
    difficulty_guidance: D024_context_from_distance_charge_signs_environment_and_prior_knowledge
    notes: success_changes_position_or_exposure_and_does_not_cancel_all_electricity
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, bold, territorial, unusually_tolerant]
    condition_variants: [uncharged, charged, storm_seeking, injured]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, repeated_storm_exposure, unusual_charge_tolerance, local_lineage]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_scar_or_discharge_pattern, route_history, warning_sign]
    warning_or_rumor_hooks: [one_Electabuzz_returns_to_the_same_storm_struck_ridge_and_leaves_distinctive_marks]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [voluntary_trust, safe_distance_and_contact_protocol, reliable_discharge_warning_response]
  trust_building_paths: [noncoercive_repeat_contact, shared_survival, respecting_feeding_and_retreat_boundaries]
  reasons_to_stay: [exceptional_bond, stable_shared_history]
  rejection_or_departure_reasons: [forced_contact, coercive_energy_use, restraint, repeated_ignored_warning]
  human_social_costs: [shock_risk, settlement_space_and_fire_sensitive_area_rules]
  logistics:
    food: [electrical_energy_need_is_source_backed_but_exact_ancient_supply_method_is_not_an_institution]
    water: [regular_access_as_needed]
    shelter_temperature: [dry_safe_rest_site_when_possible]
    space_travel: [room_to_avoid_accidental_contact]
    settlement_restrictions: [keep_clear_of_crowded_or_highly_conductive_areas_when_charged]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_electrical_interaction_only_when_voluntary_and_authored]
  handling_boundaries: [no_defeat_to_recruit, no_battery_or_generator_role, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [static_signs, localized_discharge_marks, repeated_storm_high_place_use]
  avoidance_preparation: [distance_plan, nonconductive_cover, storm_route_choice]
  resistance_or_protection: [ordinary_insulation_or_cover_when_available, dry_distance]
  combat_approach_permissions: [discrete_charged_state, authored_discharge_lane]
  blocked_or_invalid_approaches: [permanent_damage_aura, automatic_paralysis, weather_control, ancient_grid_or_battery_assumption]
  fear_hooks: [static_rises_before_the_body_is_visible]
  injury_hazard_hooks: [electabuzz-electrical-discharge]
  environmental_state_hooks: [storm_opportunity, charged, discharged_or_recovering, wet_or_conductive_authored_area]
  companion_assistance_hooks: [voluntary_bounded_electrical_interaction]
  fortune_spike_opportunities: [recognize_a_charge_warning_and_leave_the_lane_before_discharge]
  trouble_spike_complications: [a_storm_turns_an_exposed_route_into_a_feeding_opportunity]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_electrical_discharge_is_not_a_repeatable_resource_node]
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
  scalability_limits: [modern_lightning_storage_and_power_facility_context_cannot_be_backported]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_an_Electabuzz_waiting_beneath_storm_clouds_without_interfering]
  dangerous: [cross_an_exposed_route_while_a_charged_individual_uses_the_same_high_ground]
  unusual_or_rare: [witness_version_scoped_current_contact_between_two_individuals]
  discovery_insight: [learn_that_static_and_high_place_behavior_predict_exposure_better_than_assuming_constant_hostility]
  route_environment: [storm_ridge, isolated_tall_tree, wet_rocky_pass]
  settlement_culture: [local_people_avoid_specific_storm_sites_without_possessing_a_power_grid]
  cross_species: []
presentation_and_p6_followups:
  initial_bestiary_presentation: visible_static_and_storm_behavior_before_full_species_explanation
  progressive_reveal_notes: [reveal_electrical_feeding_after_observation, keep_modern_research_context_out_of_ancient_knowledge]
  species_specific_visual_needs: [clear_charged_vs_uncharged_static_readability]
  species_specific_audio_needs: [bounded_crackle_or_discharge_warning]
  special_ui_or_readability_needs: [charge_state_must_not_look_like_a_permanent_damage_aura]
  p6_followup_required: true
cross_species_links:
  evolution_family: [elekid_external_post_gen1, electivire_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_charge_storage, discharge_radius_voltage, lightning_survival_limit, storm_tree_selection, current_communication_range]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_encounter_numbers_and_state_transition_timing]
  deferred_to_p6: [charge_static_visual_audio_readability]
  deferred_to_p7: [cached_charge_state_representation_if_runtime_system_needs_it]
```
