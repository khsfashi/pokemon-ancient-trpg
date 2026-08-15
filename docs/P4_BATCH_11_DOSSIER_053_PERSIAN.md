# P4 Batch 11 — #053 Persian Full-Schema Dossier

Part of `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md`.

---

## #053 Persian / 페르시온

```yaml
identity:
  national_dex: 53
  species_key: persian
  official_name_en: Persian
  official_name_ko: 페르시온
  evolution_family_keys: [meowth, persian]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-PERSIAN-SG]
  official_evidence:
    - claim_id: PER-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PERSIAN-SG
      version_context: current_official_portal
      paraphrase: Persian_fur_is_admired_and_the_species_can_be_raised_as_a_pet_but_is_difficult_because_of_fickle_meanness
    - claim_id: PER-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PERSIAN-SG
      version_context: current_official_portal
      paraphrase: Persian_raises_its_tail_straight_as_a_warning_before_pouncing_and_biting
  derived_claims:
    - claim_id: PER-D1-001
      evidence_class: D1
      based_on: [PER-C1-001]
      statement: pet_raising_is_possible_but_does_not_establish_common_ancient_domestication_or_bypass_companionship_rules
      canon_boundary_note: pet_evidence_is_possibility_not_prevalence_or_trainer_culture
    - claim_id: PER-D1-002
      evidence_class: D1
      based_on: [PER-C1-002]
      statement: straight_raised_tail_is_a_readable_pre_attack_telegraph
      canon_boundary_note: recognizing_the_telegraph_does_not_grant_automatic_dodge_initiative_or_deescalation
canonical_source_data:
  types: [normal]
  base_stats_raw: {hp: 65, attack: 70, defense: 60, special_attack: 65, special_defense: 65, speed: 115}
  abilities_relevant_to_p4: [limber_as_modern_context, technician_as_modern_context, unnerve_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.0_m, weight: 32.0_kg}
  evolution_source:
    evolves_from: meowth
    evolves_to: []
    canonical_conditions: [modern_Meowth_level_threshold_is_source_context_not_kill_XP_or_visible_level_rule]
  other_material_facts: [admired_fur, difficult_pet_raising, fickle_meanness, straight_tail_attack_warning, pounce_and_bite]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 3
  guard: 3
  potency: 3
  resistance: 3
  speed: 5
  derivation_notes: {vigor: hp_65, force: attack_70, guard: defense_60, potency: special_attack_65, resistance: special_defense_65, speed: speed_115}
  calibration_flags: [no_manual_exception, pet_evidence_not_domestication, fur_admiration_not_resource_economy, tail_warning_not_bonus]
capabilities_and_hazards:
  locomotion: [fast_terrestrial_pursuit, agile_pounce]
  physical_hazards: [pounce, bite, clawing_if_scene_supports]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [straight_tail_pre_attack_warning, fickle_or_mean_temperament_context, human_associated_pet_possibility]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: [close_approach_after_tail_warning_can_become_immediately_unsafe]
  hazard_records:
    - hazard_key: persian-pounce-bite
      kind: other
      delivery_or_exposure: [rapid_pounce_followed_by_bite_or_claw_contact]
      prerequisite_or_trigger: [hostile_or_escalating_Persian_closes_distance]
      warning_signs: [tail_raised_straight, attack_posture, fixed_attention]
      immediate_effects: [impact, bite_or_claw_injury, position_loss]
      delayed_or_persistent_effects: [wound_consequence_under_P3_if_injury_occurs]
      ordinary_consequence_ceiling: serious_injury_if_contact_is_effective
      exceptional_consequence_ceiling: critical_or_lethal_only_under_D020_exceptional_or_compound_context
      countermeasures: [respect_warning, maintain_space, use_barrier_or_escape_lane, stop_provocation]
      emergency_consumable_hooks: []
      context_amplifiers: [cornered_space, surprise, protecting_a_bonded_person_or_resource_if_authored]
      context_mitigators: [distance, visible_warning_recognized_early, solid_barrier, open_escape_route]
      governing_species_axes: [speed, force]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [PER-C1-002, PER-D1-002]
  notes: [tail_warning_is_information_not_free_action_economy, pet_history_does_not_guarantee_friendliness]
ancient_strength:
  classifications: [similar_to_modern_baseline, behaviorally_harsher]
  evidence_class: D2
  rationale: speed_and_unreliable_temperament_are_more_dangerous_in_dense_premodern_settlements_or_routes_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: human_associated_individual_history_can_change_tolerance_without_species_wide_domestication
  canon_boundary_note: no_generic_ancient_bonus
ancient_ecology:
  habitat: [exact_ancient_natural_range_unknown, human_associated_presence_possible_only_when_local_history_supports]
  ecological_niche: [medium_feline_predator_or_scavenger_is_plausible_D2_but_exact_diet_unknown]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: []
  observable_signs: [large_feline_tracks, claw_marks_if_authored, straight_tail_attack_posture]
  locality_constraints: [pet_or_household_association_requires_specific_authored_history_not_world_baseline]
  unsupported_gaps: [diet, group_structure, natural_habitat, prevalence_of_pet_raising, ancient_human_association]
human_perception_and_culture:
  ordinary_attitude: [admiration_mixed_with_distrust, caution_even_around_human_associated_individuals]
  specialist_knowledge_holders: [handlers_of_specific_bonded_individuals, hunters, settlement_watchers]
  benefits_and_services: [companionship_or_watch_presence_only_when_specific_relationship_supports]
  fears_and_avoidance: [fast_pounce, unpredictable_meanness, bite]
  myths_omens_taboos: [beautiful_fur_status_associations_may_exist_only_if_locally_authored_D2]
  practical_customs: [read_tail_warning, do_not_assume_pet_history_equals_safe_touch]
  common_misbeliefs: [admired_fur_implies_safe_harvesting, pet_means_tame, warning_tail_guarantees_enough_time_to_escape]
  local_variation_notes: [one_household_may_have_a_long_relationship_without_normalized_pet_culture]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [sleek_fast_feline_Pokemon_with_highly_readable_tail_posture]
  local_aliases_or_titles: none
  identification_evidence: [sleek_body, speed, tail_warning, evolved_relation_to_Meowth_when_known]
  initial_knowledge_fragments: [raised_straight_tail_means_attack_is_imminent]
  post_identification_knowledge: [some_people_can_raise_Persian_but_it_remains_difficult_and_fickle]
  advanced_insights: [pet_history_is_individual_context_and_fur_admiration_is_not_a_resource_license]
  exceptional_individual_knowledge_hooks: [Persian_with_known_household_or_hunting_history]
threat_and_encounter:
  baseline_threat_band: moderate_to_high_at_close_range_due_to_speed
  default_behavior_states: [resting, observing, tolerant_of_known_human, aloof, warning, pouncing, biting, withdrawing]
  aggression_tendency: contextual_and_individually_variable
  territoriality: unknown
  avoidance_tendency: moderate
  warning_signs: [tail_raised_straight, crouched_pounce_posture, fixed_attention]
  encounter_triggers: [close_approach, territory_or_resource_overlap, meeting_a_human_associated_individual]
  escalation_triggers: [ignoring_tail_warning, grabbing, cornering, threatening_known_person_or_space_if_authored]
  deescalation_conditions: [back_away_before_pounce, stop_touch_or_restraint_attempt, allow_exit]
  pursuit_profile: fast_short_to_medium_pursuit_when_motivated
  group_size_effects: [unknown_no_generic_pack_rule]
  ordinary_consequence_categories: [pounce, bite_or_claw_injury, position_loss, relationship_break]
  consequence_ceiling: serious_and_contextually_critical_under_D020
  human_check_hooks:
    - action: recognize_and_act_on_Persian_attack_warning_before_close_range_escalation
      relevant_species_axis: speed
      relevant_tags: [tail_warning, pounce]
      relevant_hazard_keys: [persian-pounce-bite]
      difficulty_guidance: D024_context_from_visibility_distance_attention_prior_knowledge_and_escape_space
      notes: successful_recognition_provides_information_not_an_automatic_dodge_or_bonus
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [aloof, mean, tolerant_of_specific_people, territorial, avoidant]
    condition_variants: [resting, injured, bonded, stressed]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, long_human_relationship, unusual_territory]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_marking_relationship_or_attack_pattern]
    warning_or_rumor_hooks: [old_Persian_known_to_tolerate_one_family_but_attack_strangers]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, demonstrated_tolerance_beyond_pet_possibility, no_forced_containment, safe_space]
  trust_building_paths: [consistent_boundaries, repeated_noncoercive_contact, respecting_warning_signals]
  reasons_to_stay: [bond_to_specific_people_or_place, reliable_food_and_shelter, autonomy]
  rejection_or_departure_reasons: [forced_handling, ignored_warning_signals, confinement, attempts_to_exploit_fur]
  human_social_costs: [public_distrust, bite_risk, need_for_space_and_clear_boundaries]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [dry_secure_resting_area]
    space_travel: [must_move_voluntarily_not_as_inventory]
    settlement_restrictions: [may_be_restricted_where_strangers_or_children_cannot_avoid_close_contact]
    special_resources: []
  assistance_capabilities: [fast_watch_or_hunting_support_only_if_specific_bond_and_event_support]
  handling_boundaries: [no_defeat_to_recruit, no_pet_status_slot_bypass, no_assumption_of_unconditional_obedience]
  separation_injury_notes: [breaking_a_long_human_relationship_can_change_behavior_but_is_not_a_generic_morale_stat]
mechanical_hooks:
  tracking_clues: [large_feline_tracks, known_resting_place, witness_reports_of_tail_warning]
  avoidance_preparation: [maintain_space, read_tail, avoid_cornering]
  resistance_or_protection: [barrier_or_protective_clothing_when_valid]
  combat_approach_permissions: [range_and_obstacle_use_before_pounce]
  blocked_or_invalid_approaches: [pet_equals_tame, fur_equals_harvest_drop, warning_equals_free_dodge]
  fear_hooks: [beautiful_still_Persian_suddenly_raises_tail_straight]
  injury_hazard_hooks: [persian-pounce-bite]
  environmental_state_hooks: [visibility, distance, escape_space, known_person_presence]
  companion_assistance_hooks: [fast_positioning_or_watchfulness_if_voluntary]
  fortune_spike_opportunities: [player_notices_tail_warning_early_enough_to_end_the_escalation]
  trouble_spike_complications: [crowded_room_removes_safe_retreat_space]
hunting_materials_and_resources:
  killing_treatment: admired_fur_does_not_create_a_pelt_drop_or_trade_rule
  hunting_for_food: none
  shed_or_abandoned_materials: [ordinary_shed_fur_only_if_later_source_or_event_supports_no_material_value_assumed]
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [fur_harvesting_as_an_industry_not_supported]
  taboo_or_protection: [human_associated_individual_may_have_specific_social_consequences]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [pet_raising_and_fur_admiration_do_not_establish_breeding_pelting_or_luxury_trade_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [meet_a_Persian_that_accepts_one_household_but_not_the_player]
  dangerous: [tail_warning_precedes_a_fast_pounce_in_a_tight_settlement_lane]
  unusual_or_rare: [former_human_associated_Persian_now_living_independently_near_ruins]
  discovery_insight: [players_learn_pet_possibility_is_not_domestication_or_safe_handling]
  route_environment: [narrow_paths_or_rooms_make_pounce_telegraph_more_urgent]
  settlement_culture: [locals_disagree_whether_keeping_one_is_status_pride_or_recklessness]
  cross_species: [Meowth_shiny_interest_is_not_required_for_Persian]
presentation_and_p6_followups:
  initial_bestiary_presentation: sleek_fast_feline_Pokemon_whose_straight_raised_tail_warns_of_a_pounce
  progressive_reveal_notes: [show_individual_human_tolerance_separately_from_species_tameness]
  species_specific_visual_needs: [tail_warning_posture, pounce_readability]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [human_associated_history_must_not_display_as_owned_or_safe]
  p6_followup_required: true
cross_species_links:
  evolution_family: [meowth]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_ancient_habitat, pet_prevalence, diet, group_structure, fur_use_in_project_cultures]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [warning_to_attack_state_timing, individual_human_relationship_state]
  deferred_to_p6: [tail_warning_and_relationship_readability]
  deferred_to_p7: [persistent_relationship_history_representation]
```
