# P4 Batch 19 — #117 Seadra Full-Schema Dossier

Part of `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`.

---

## #117 Seadra / 시드라

```yaml
identity:
  national_dex: 117
  species_key: seadra
  official_name_en: Seadra
  official_name_ko: 시드라
  evolution_family_keys: [horsea, seadra, kingdra_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SEADRA-SG, P4_BATCH_19_SOURCE_REVIEW]
  official_evidence:
  - claim_id: SEA-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-SEADRA-SG
    version_context: current_official_portal__PATERNAL_CARE_TOXIC_SPINES_AND_MEDICINAL_RESOURCE_PROVENANCE
    paraphrase: male_Seadra_raise_young_use_toxic_spines_against_intruders_fin_tips_leak_poison_and_fins_or_bones_are_valued_as_herbal_medicine_ingredients
  - claim_id: SEA-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__CONTACT_NUMBNESS_FAINTING_CORAL_ANCHORING_WHIRLPOOL_AND_RESEARCH_CONTEXT
    paraphrase: historical_entries_add_contact_numbness_or_fainting_tail_hook_sleeping_coral_harvester_stings_extraordinary_whirlpool_wording_and_a_modern_cell_gene_research_claim
  derived_claims:
  - claim_id: SEA-D1-001
    evidence_class: D1
    based_on: [SEA-C1-001, SEA-C1-002]
    statement: Seadra_has_credible_severe_poison_or_contact_pressure_with_contextual_nest_defense
    canon_boundary_note: no_automatic_poison_fainting_proximity_aura_or_unavoidable_combat
  - claim_id: SEA-D1-002
    evidence_class: D1
    based_on: [SEA-C1-001]
    statement: medicinal_value_is_resource_provenance_and_story_pressure_not_a_recipe_market_or_live_harvest_permission
    canon_boundary_note: living_Pokemon_remains_an_entity_not_an_inventory_node
  - claim_id: SEA-D1-003
    evidence_class: D1
    based_on: [SEA-C1-002]
    statement: historical_whirlpool_wording_can_support_a_rare_authored_current_hazard
    canon_boundary_note: no_continuous_fluid_simulation_automatic_boat_destruction_forced_movement_or_player_input_removal
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 55, attack: 65, defense: 95, special_attack: 95, special_defense: 45, speed: 85}
  abilities_relevant_to_p4: [poison_point_as_modern_context, sniper_as_modern_context, damp_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.2_m, weight: 25.0_kg}
  evolution_source:
    evolves_from: horsea
    evolves_to: [kingdra_external_post_gen1]
    canonical_conditions: [modern_level_32_Horsea_to_Seadra_metadata_is_context, Kingdra_and_Dragon_Scale_trade_evolution_are_post_Gen1_context_only]
  other_material_facts: [toxic_spines, poisonous_fin_tips, paternal_care, medicinal_value_of_fins_and_bones, historical_contact_numbness_or_fainting, coral_sleep_anchoring, version_scoped_whirlpool_claim]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 3
  guard: 4
  potency: 4
  resistance: 2
  speed: 4
  derivation_notes: {vigor: hp_55, force: attack_65, guard: defense_95, potency: special_attack_95, resistance: special_defense_45, speed: speed_85}
  calibration_flags: [no_manual_exception, poison_severity_not_capped_by_ratings, spines_do_not_add_turns_or_entities, whirlpool_claim_not_a_fluid_formula]
capabilities_and_hazards:
  locomotion: [strong_aquatic_swimming, backward_swimming_historical, tail_hook_or_anchor_on_suitable_coral_historical]
  physical_hazards: [sharp_body_spines, close_range_body_contact]
  elemental_environmental_hazards: [rare_authored_current_or_whirlpool_pressure_from_version_scoped_evidence]
  anomalous_hazards: []
  behavioral_capabilities: [paternal_care, nest_or_young_defense_when_contextual]
  utility_interaction_capabilities: [none_required]
  immunities_or_approach_invalidators: [poisonous_spines_do_not_poison_by_proximity, multiple_spines_do_not_create_extra_reactions_or_turns]
  hazard_records:
  - hazard_key: seadra-poisonous-spine-contact
    kind: venom
    delivery_or_exposure: [direct_contact_with_poisonous_spines_or_fin_tips, explicit_sting_or_barb_exposure]
    prerequisite_or_trigger: [contact_geometry_and_exposure_are_established]
    warning_signs: [visible_spines, defensive_posture, protected_young_or_nest, prior_sting_reports]
    immediate_effects: [pain_numbness_disorientation_or_poison_pressure_at_authored_severity]
    delayed_or_persistent_effects: [bounded_poison_or_recovery_consequences_if_exposure_is_confirmed]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_or_life_threatening_only_when_a_specific_exposure_context_supports_it
    countermeasures: [avoid_spine_contact, use_distance_and_protective_barriers, retreat_from_defended_young, seek_recovery_after_confirmed_exposure]
    emergency_consumable_hooks: []
    context_amplifiers: [multiple_confirmed_stings, confined_water, delayed_recovery_access]
    context_mitigators: [distance, visible_spines, protective_clothing_or_tool, immediate_retreat_and_care]
    governing_species_axes: [potency]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SEA-C1-001, SEA-C1-002, SEA-D1-001]
  - hazard_key: seadra-whirlpool-current
    kind: drowning
    delivery_or_exposure: [authored_local_rotating_or_forceful_water_created_or_exploited_by_Seadra]
    prerequisite_or_trigger: [rare_or_explicit_Seadra_current_use_and_suitable_water_geometry]
    warning_signs: [abnormal_surface_rotation, debris_motion, visible_current_change, Seadra_positioning]
    immediate_effects: [position_loss, swimming_or_boat_control_pressure, separation]
    delayed_or_persistent_effects: [cold_water_drowning_or_collision_consequences_only_if_exposure_continues]
    ordinary_consequence_ceiling: severe
    exceptional_consequence_ceiling: life_threatening_in_confined_open_water_or_named_exceptional_context
    countermeasures: [avoid_entry, break_line_or_leave_current, use_shore_or_anchor_support, retreat_before_full_rotation_forms]
    emergency_consumable_hooks: []
    context_amplifiers: [confined_channel, poor_boat_control, rocks, darkness]
    context_mitigators: [shore_access, early_detection, open_escape_lane, prepared_anchor_or_rescue]
    governing_species_axes: [potency]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SEA-C1-002, SEA-D1-003]
  notes: [one_Seadra_one_turn_one_health_state_one_initiative_presence_despite_many_spines, poison_and_current_require_warning_trigger_eligibility_counterplay_and_bounded_resolution]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: limited_preindustrial_antidote_rescue_and_water_control_can_raise_contextual_risk_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: defended_young_or_confined_water_can_raise_consequence_ceiling
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [coastal_or_shallow_marine_water, coral_or_structured_aquatic_shelter, nest_or_young_rearing_sites_when_authored]
  ecological_niche: [spined_aquatic_predator_or_defender_with_contextual_paternal_care]
  activity_pattern: [swimming, resting_anchored_to_structure_historical, guarding_young_when_contextual]
  seasonal_notes: [parental_period_exact_timing_unknown]
  feeding_and_resource_interaction: [prey_ecology_not_fixed_by_review, medicinal_interest_is_human_resource_pressure_not_ecological_feed]
  social_structure: [male_parental_care_source_backed_contextually, broader_group_structure_unknown]
  predator_prey_competitor_links: [local_aquatic_food_web_requires_authoring]
  environmental_effects: [rare_local_current_disturbance_when_explicitly_used]
  observable_signs: [spine_shed_marks_or_injury_reports_if_authored, guarded_young_site, abnormal_current, tail_hook_resting_position]
  locality_constraints: [parental_care_does_not_mean_every_male_is_always_guarding_a_nest]
  unsupported_gaps: [toxin_dose_duration_and_fatality, exact_whirlpool_radius_strength_duration, medicinal_processing_effect, parental_period_and_aggression_probability, proto_kanto_distribution]
human_perception_and_culture:
  ordinary_attitude: [high_caution_due_to_visible_spines_and_sting_risk]
  specialist_knowledge_holders: [fishers, coral_foragers, healers_who_know_only_local_resource_lore, coastal_watchers]
  benefits_and_services: [no_required_service_role]
  fears_and_avoidance: [poisonous_contact, defended_young, dangerous_current]
  myths_omens_taboos: [medicinal_reputation_can_generate_local_harvesting_conflict_or_exaggerated_cure_claims]
  practical_customs: [avoid_touching_spines, identify_guarded_sites_before_harvesting_nearby_resources, treat_medicine_claims_as_unverified_without_processing_knowledge]
  common_misbeliefs: [any_touch_always_causes_fainting, proximity_is_poisonous, Seadra_parts_are_a_guaranteed_cure, every_nest_is_hostile]
  local_variation_notes: [medicinal_value_does_not_establish_a_region_wide_market_or_standard_recipe]
identification_and_knowledge:
  baseline_recognition: specialist
  unknown_presentation_hooks: [a_coral_forager_is_found_numb_near_a_spined_swimmer_guarding_a_small_site]
  local_aliases_or_titles: none
  identification_evidence: [prominent_spines, tail_hooking, guarded_young_context, reported_contact_effects]
  initial_knowledge_fragments: [do_not_touch_visible_spines, nest_defense_is_contextual]
  post_identification_knowledge: [medicinal_value_is_provenance_not_safe_processing_or_cure_knowledge]
  advanced_insights: [warning_and_young_position_can_predict_when_avoidance_is_better_than_combat]
  exceptional_individual_knowledge_hooks: [one_old_Seadra_is_known_for_creating_a_dangerous_current_in_the_same_narrow_channel]
threat_and_encounter:
  baseline_threat_band: moderate_to_high_when_contact_or_defended_young_is_relevant
  default_behavior_states: [swimming, resting_anchored, tending_young, warning, defensive_spine_use, retreating, rare_current_escalation]
  aggression_tendency: low_to_moderate_normally_high_only_in_explicit_defense_context
  territoriality: contextual_around_young_or_nest
  avoidance_tendency: moderate_outside_defense_context
  warning_signs: [spines_presented, body_turn, guarded_area, abnormal_current, repeated_intruder_reaction]
  encounter_triggers: [close_approach, nest_or_young_overlap, accidental_contact, resource_harvesting_near_rest_site]
  escalation_triggers: [touching_or_cornering, approaching_young_after_warning, attack, blocking_retreat]
  deescalation_conditions: [withdraw_from_young, create_distance, stop_harvest_or_contact, leave_current_zone]
  pursuit_profile: contextual_and_event_bounded_not_guaranteed
  group_size_effects: [each_Seadra_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [sting_or_poison, numbness, position_loss, drowning_or_collision_pressure]
  consequence_ceiling: severe_with_life_threatening_exception_only_for_explicit_high_exposure_or_water_context
  human_check_hooks:
  - action: avoid_or_resolve_Seadra_spine_exposure
    relevant_species_axis: potency
    relevant_tags: [venom, spines, contact]
    relevant_hazard_keys: [seadra-poisonous-spine-contact]
    difficulty_guidance: D024_context_from_distance_visibility_protection_prior_warning_and_contact_geometry
    notes: consequence_after_exposure_is_separate_from_the_check_to_avoid_contact
  - action: escape_a_rare_Seadra_current_hazard
    relevant_species_axis: potency
    relevant_tags: [current, aquatic]
    relevant_hazard_keys: [seadra-whirlpool-current]
    difficulty_guidance: D024_context_from_shore_access_current_geometry_anchors_and_early_warning
    notes: historical_boat_engulfing_wording_never_becomes_automatic_boat_destruction_or_forced_input
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, calm, intensely_parental, unusually_tolerant]
    condition_variants: [resting, guarding_young, injured, exhausted, recently_disturbed]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusually_potent_venom, current_adaptation, repeated_nest_defense_history, persistent_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [spine_or_scar_tell, known_site_or_current_pattern, history]
    warning_or_rumor_hooks: [one_Seadra_has_driven_boats_from_a_narrow_channel_for_years]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [voluntary_trust, safe_water_access, handler_understands_spine_contact_and_parental_boundaries]
  trust_building_paths: [noncoercive_repeat_contact, respecting_young, rescue_without_extraction, safe_distance]
  reasons_to_stay: [exceptional_bond, reliable_habitat_and_mutual_history]
  rejection_or_departure_reasons: [forced_harvesting, coercive_combat, interference_with_young, denied_water_access]
  human_social_costs: [significant_contact_safety_and_water_habitat_burden]
  logistics:
    food: [regular_species_appropriate_food]
    water: [reliable_large_swimming_area]
    shelter_temperature: [safe_aquatic_shelter]
    space_travel: [water_route_or_safe_transfer_requires_explicit_plan]
    settlement_restrictions: [spine_contact_safety_and_public_water_access_require_management]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_water_scouting_or_defense_only_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_venom_or_medicine_harvest, no_extra_actions_from_spines, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_harvesting_never_becomes_a_bond_entitlement]
mechanical_hooks:
  tracking_clues: [guarded_aquatic_site, sting_reports, tail_anchor_rest_site, unusual_current]
  avoidance_preparation: [observe_spines_and_young, use_distance, plan_shore_exit]
  resistance_or_protection: [protective_barrier_or_clothing, distance, open_escape_lane]
  combat_approach_permissions: [contact_venom_hazard, contextual_parental_defense, rare_authored_current_hazard]
  blocked_or_invalid_approaches: [automatic_poison_by_proximity, forced_fainting, automatic_whirlpool_movement, continuous_fluid_simulation, live_harvest_loop, ancient_genetics_technology]
  fear_hooks: [the_only_safe_water_route_passes_beside_a_guarded_nursery]
  injury_hazard_hooks: [seadra-poisonous-spine-contact, seadra-whirlpool-current]
  environmental_state_hooks: [open_water, guarded_young_site, coral_anchor, current_hazard, poison_exposure_eligible]
  companion_assistance_hooks: [voluntary_water_scouting_or_defensive_support]
  fortune_spike_opportunities: [recognize_parental_warning_before_crossing_the_nursery]
  trouble_spike_complications: [a_healer_requests_material_from_a_species_currently_guarding_young]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [only_if_a_specific_authored_case_establishes_naturally_lost_material]
  natural_remains: [fins_or_bones_may_have_medicinal_resource_provenance_only_from_existing_remains_or_explicit_trade_context]
  dangerous_harvesting: [live_extraction_is_not_normalized_and_requires_explicit_ethics_consequence_and_agency]
  taboo_or_protection: [local_protection_or_taboo_is_D2_only_if_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: present
  enabling_evidence: [SEA-C1-001]
  human_craft_bridge: [local_healers_may_recognize_that_some_processed_Seadra_remains_have_medicinal_value]
  narrow_domain: uncertain_local_herbal_medicine_provenance
  local_dependency: [processing_method_and_effect_are_unresolved, supply_must_come_from_authored_nonautomatic_sources]
  scalability_limits: [no_guaranteed_cure_recipe_price_market_live_farm_or_mass_harvest, no_ancient_genetics_from_cell_gene_wording]
  ownership_shortcut_forbidden: true
  evidence_class: C1
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_male_Seadra_tending_young_from_a_safe_distance]
  dangerous: [cross_a_nursery_edge_without_contacting_spines_or_triggering_current_escalation]
  unusual_or_rare: [a_local_healer_seeks_verified_old_remains_while_refusing_live_harvest]
  discovery_insight: [learn_that_medicinal_value_does_not_equal_safe_recipe_or_ownership]
  route_environment: [coral_nursery, narrow_current_channel, shallow_coastal_rest_site]
  settlement_culture: [local_healers_debate_ethics_and_provenance_without_creating_a_region_wide_market]
  cross_species: [Horsea_family_observation_can_reveal_parental_and_morphological_change]
presentation_and_p6_followups:
  initial_bestiary_presentation: visible_spines_guarded_young_and_contact_warning_before_severe_historical_wording
  progressive_reveal_notes: [separate_common_spine_hazard_from_rare_whirlpool_claim_and_medicine_provenance]
  species_specific_visual_needs: [spine_contact_geometry, parental_warning, current_rotation_and_exit_readability]
  species_specific_audio_needs: [defensive_water_motion, current_building_cue, contact_warning]
  special_ui_or_readability_needs: [poison_exposure_eligibility_and_escape_options_must_be_clear_without_automatic_status]
  p6_followup_required: true
cross_species_links:
  evolution_family: [horsea, kingdra_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [horsea_when_authored]
  cultural_or_material_dependencies: [local_healer_interest_only_if_authored]
open_questions_and_gates:
  unresolved_sources: [exact_toxin_dose_duration_and_fatality, exact_whirlpool_radius_strength_duration, exact_medicinal_processing_or_effect, exact_parental_period_and_aggression_probability, proto_kanto_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [venom_exposure_resolution_parental_escalation_and_rare_current_checks]
  deferred_to_p6: [spine_contact_current_and_parental_warning_readability]
  deferred_to_p7: [cached_water_zone_nest_site_poison_exposure_eligible_and_current_hazard_state_if_runtime_needs_it]
```
