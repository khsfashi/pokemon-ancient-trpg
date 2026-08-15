# P4 Batch 11 — #058 Growlithe Full-Schema Dossier

Part of `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md`.

---

## #058 Growlithe / 가디

```yaml
identity:
  national_dex: 58
  species_key: growlithe
  official_name_en: Growlithe
  official_name_ko: 가디
  evolution_family_keys: [growlithe, arcanine]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-GROWLITHE-SG]
  official_evidence:
    - claim_id: GRO-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-GROWLITHE-SG
      version_context: current_official_portal
      paraphrase: Growlithe_is_brave_trustworthy_and_will_face_larger_stronger_foes
    - claim_id: GRO-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-GROWLITHE-SG
      version_context: current_official_portal
      paraphrase: Growlithe_is_very_friendly_and_faithful_to_people_and_can_repel_enemies_by_barking_and_biting
  derived_claims:
    - claim_id: GRO-D1-001
      evidence_class: D1
      based_on: [GRO-C1-002]
      statement: strong_human_affinity_allows_specific_watch_family_or_bond_relationships_without_normalized_trainer_culture
      canon_boundary_note: friendliness_and_faithfulness_do_not_equal_automatic_companionship_unconditional_obedience_or_friend_foe_detection
    - claim_id: GRO-D2-001
      evidence_class: D2
      based_on: [GRO-C1-001, GRO-C1-002]
      statement: a_bounded_settlement_may_have_one_or_a_few_Growlithe_watch_relationships_when_local_history_supports_them
      canon_boundary_note: this_is_a_local_culture_island_not_a_world_baseline_or_labor_institution
canonical_source_data:
  types: [fire]
  base_stats_raw: {hp: 55, attack: 70, defense: 45, special_attack: 70, special_defense: 50, speed: 60}
  abilities_relevant_to_p4: [intimidate_as_modern_context, flash_fire_as_modern_context, justified_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 0.7_m, weight: 19.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [arcanine]
    canonical_conditions: [modern_fire_stone_item_evolution_is_source_context_and_does_not_define_ancient_availability_or_player_menu]
  other_material_facts: [brave, trustworthy, faces_larger_foes, friendly_to_people, faithful_to_people, barking_and_biting_to_repel_enemies]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 3
  guard: 2
  potency: 3
  resistance: 2
  speed: 3
  derivation_notes: {vigor: hp_55, force: attack_70, guard: defense_45, potency: special_attack_70, resistance: special_defense_50, speed: speed_60}
  calibration_flags: [no_manual_exception, human_affinity_not_automatic_bond, guarding_behavior_not_friend_foe_or_obedience_system]
capabilities_and_hazards:
  locomotion: [terrestrial_running]
  physical_hazards: [bite, body_collision_if_defensive]
  elemental_environmental_hazards: [Fire_type_capability_exists_but_no_specific_hazard_is_authored_without_scene_or_move_evidence]
  anomalous_hazards: []
  behavioral_capabilities: [brave_response_to_larger_foes, barking_warning_or_repel_behavior, human_friendliness_and_faithfulness]
  utility_interaction_capabilities: [watch_or_alarm_support_when_specific_relationship_and_scene_support]
  immunities_or_approach_invalidators: []
  hazard_records:
    - hazard_key: growlithe-defensive-bite
      kind: other
      delivery_or_exposure: [close_range_bite_when_repelling_a_perceived_enemy_or_protecting_a_context]
      prerequisite_or_trigger: [Growlithe_escalates_from_warning_to_physical_repulsion]
      warning_signs: [barking, defensive_posture, blocking_approach]
      immediate_effects: [bite_injury, forced_distance_or_position_loss]
      delayed_or_persistent_effects: [wound_consequence_under_P3_if_injury_occurs]
      ordinary_consequence_ceiling: serious_if_contact_is_effective_and_context_is_bad
      exceptional_consequence_ceiling: critical_or_lethal_only_under_D020_exceptional_or_compound_context
      countermeasures: [stop_advancing, identify_what_it_is_guarding, create_distance, avoid_forced_handling]
      emergency_consumable_hooks: []
      context_amplifiers: [threat_to_bonded_person, cornered_space, pack_or_group_context_if_specifically_authored]
      context_mitigators: [recognized_person, retreat, nonthreatening_posture, established_trust]
      governing_species_axes: [force, speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [GRO-C1-002, GRO-D1-001]
  notes: [friendly_to_people_is_not_safe_with_every_person_or_in_every_state, bark_is_not_infallible_enemy_detection]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: brave_guarding_behavior_and_Fire_affinity_can_be_highly_consequential_in_small_premodern_settlements_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: local_human_relationships_can_create_watch_or_guard_states
  canon_boundary_note: no_generic_ancient_bonus_or_domestication
ancient_ecology:
  habitat: [exact_ancient_natural_range_unknown, settlement_edge_or_open_route_presence_only_when_locally_authored]
  ecological_niche: [terrestrial_predator_or_scavenger_exact_diet_unknown]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [Fire_related_environmental_effects_require_specific_scene_evidence_and_fuel]
  observable_signs: [canid_tracks, barking, guarded_boundary_or_repeated_patrol_if_local_relationship_exists]
  locality_constraints: [human_associated_watch_presence_requires_specific_local_history]
  unsupported_gaps: [diet, denning, group_structure, ancient_range, prevalence_of_human_relationships]
human_perception_and_culture:
  ordinary_attitude: [more_open_to_contact_than_many_Pokemon_but_still_respectful_of_autonomy_and_guarding_behavior]
  specialist_knowledge_holders: [families_with_specific_bonds, night_watchers, travelers]
  benefits_and_services: [alarm, deterrence, companionship, protective_presence_when_voluntary]
  fears_and_avoidance: [bite, defensive_escalation, Fire_risk_if_specific_fire_capability_is_present]
  myths_omens_taboos: [loyal_guard_reputation_may_be_locally_strengthened_but_is_not_universal]
  practical_customs: [let_known_Growlithe_signal_before_approaching_what_it_guards, build_relationship_before_requesting_help]
  common_misbeliefs: [friendly_means_owned, faithful_means_command_obedience, bark_identifies_all_enemies, every_settlement_can_keep_Growlithe]
  local_variation_notes: [one_settlement_may_have_a_rare_watch_relationship_while_another_has_none]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_canid_Fire_Pokemon_that_barks_and_stands_its_ground_against_larger_threats]
  local_aliases_or_titles: none
  identification_evidence: [canid_shape, stripes, bark, brave_guarding_behavior]
  initial_knowledge_fragments: [barking_can_be_a_warning_not_an_attack_command]
  post_identification_knowledge: [species_is_often_friendly_and_faithful_to_people_in_official_evidence]
  advanced_insights: [human_affinity_is_species_tendency_not_owned_status_or_guaranteed_obedience]
  exceptional_individual_knowledge_hooks: [Growlithe_known_to_guard_one_family_or_route]
threat_and_encounter:
  baseline_threat_band: moderate_due_to_bite_Fire_potential_and_bravery
  default_behavior_states: [resting, curious, friendly, watching, barking_warning, guarding, biting, retreating]
  aggression_tendency: low_to_contextual_but_bold_when_guarding
  territoriality: unknown_to_contextual
  avoidance_tendency: moderate
  warning_signs: [barking, blocking_route, lowered_stance, repeated_attention_to_guarded_target]
  encounter_triggers: [approach_to_guarded_person_or_space, settlement_edge_contact, larger_threat_nearby]
  escalation_triggers: [ignore_warning, threaten_bonded_person, forced_restraint, attack]
  deescalation_conditions: [withdraw_from_guarded_target, allow_space, recognized_person_or_prior_trust_when_valid]
  pursuit_profile: contextual_guarding_pursuit_not_assumed_relentless
  group_size_effects: [unknown_no_generic_pack_or_guard_bonus]
  ordinary_consequence_categories: [bite, collision, alarm_escalation, Fire_exposure_if_specific_scene_supports]
  consequence_ceiling: serious_and_contextually_critical_under_D020
  human_check_hooks:
    - action: approach_a_guarding_Growlithe_without_turning_warning_into_attack
      relevant_species_axis: none
      relevant_tags: [human_affinity, guarding_behavior, barking_warning]
      relevant_hazard_keys: [growlithe-defensive-bite]
      difficulty_guidance: D024_context_from_prior_relationship_guarded_target_body_language_distance_and_exit_space
      notes: success_can_reduce_escalation_but_does_not_create_ownership_or_companionship
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [friendly, cautious, brave, guarding, independent]
    condition_variants: [resting, bonded, protecting, injured, frightened_but_standing_ground]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, long_local_relationship, unusual_guarding_history]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_scar_marking_or_known_guarding_history]
    warning_or_rumor_hooks: [Growlithe_that_once_held_a_route_against_a_much_larger_Pokemon]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, meaningful_relationship_not_capture, food_water_shelter, no_forced_containment]
  trust_building_paths: [repeated_safe_contact, mutual_protection, respecting_guarding_boundaries, helping_a_bonded_person_or_Pokemon]
  reasons_to_stay: [bond_to_people, shared_watch_or_travel_role, reliable_care]
  rejection_or_departure_reasons: [abuse, forced_commands, chronic_confinement, betrayal_of_guarded_relationship]
  human_social_costs: [responsibility_for_bite_or_fire_risk, food_and_space, others_may_assume_or_demand_guard_service]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [dry_resting_space_with_fire_safe_constraints_if_needed]
    space_travel: [ground_travel_with_party_when_willing]
    settlement_restrictions: [dense_flammable_or_fearful_settlements_may_limit_access]
    special_resources: []
  assistance_capabilities: [watch_alarm, deterrence, protective_presence]
  handling_boundaries: [no_defeat_to_recruit, no_unconditional_obedience, no_friend_or_foe_sensor, visible_companion_slot_required]
  separation_injury_notes: [separation_from_specific_people_can_change_behavior_but_is_not_a_generic_loyalty_meter]
mechanical_hooks:
  tracking_clues: [canid_tracks, bark_direction, known_watch_route]
  avoidance_preparation: [identify_guarded_boundary, approach_known_person_first, keep_escape_space]
  resistance_or_protection: [distance_and_barrier_against_bite_or_specific_fire]
  combat_approach_permissions: [avoid_threatening_bonded_target_if_deescalation_is_desired]
  blocked_or_invalid_approaches: [friendly_equals_free_companion, faithful_equals_unconditional_command, bark_equals_enemy_scan]
  fear_hooks: [small_Growlithe_refuses_to_retreat_from_a_much_larger_threat]
  injury_hazard_hooks: [growlithe-defensive-bite]
  environmental_state_hooks: [guarded_target, prior_relationship, settlement_fire_risk, escape_space]
  companion_assistance_hooks: [alarm_or_guard_assistance_when_voluntary]
  fortune_spike_opportunities: [recognized_bark_prevents_party_from_walking_into_an_ambush]
  trouble_spike_complications: [Growlithe_defends_someone_the_party_needs_to_confront]
hunting_materials_and_resources:
  killing_treatment: no_special_body_resource_or_guard_dog_drop_logic
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: none
  taboo_or_protection: [killing_a_known_human_associated_individual_can_have_specific_social_consequences]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: [specific_relationship_history_can_enable_watch_practice_but_not_device_or_industry]
  scalability_limits: [human_affinity_does_not_create_breeding_kennel_police_or_guard_institution_by_default]
  ownership_shortcut_forbidden: true
  evidence_class: D2
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [earn_the_trust_of_a_settlement_adjacent_Growlithe_over_repeated_visits]
  dangerous: [Growlithe_blocks_the_party_from_approaching_an_injured_person_it_is_guarding]
  unusual_or_rare: [a_single_Growlithe_maintains_a_watch_relationship_with_a_remote_household]
  discovery_insight: [players_learn_human_affinity_does_not_mean_capture_or_command]
  route_environment: [night_bark_reveals_a_threat_direction_without_identifying_it_infallibly]
  settlement_culture: [one_locality_treats_a_specific_Growlithe_as_a_respected_watch_partner_not_property]
  cross_species: [Arcanine_cultural_awe_does_not_auto_inherit_Growlithe_human_affinity]
presentation_and_p6_followups:
  initial_bestiary_presentation: brave_canid_Fire_Pokemon_with_unusually_strong_human_affinity_but_its_own_will
  progressive_reveal_notes: [show_guarding_relationship_and_companionship_as_specific_state_not_tame_species_flag]
  species_specific_visual_needs: [guarding_posture, friendly_vs_warning_state]
  species_specific_audio_needs: [bark_state_readability_if_audio_is_used]
  special_ui_or_readability_needs: [relationship_target_and_warning_state_must_not_display_as_owned_or_commandable]
  p6_followup_required: true
cross_species_links:
  evolution_family: [arcanine]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_ancient_range, diet, group_structure, prevalence_of_human_relationships, exact_Fire_capability_surface_for_P5]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [guard_target_relationship_state, bark_warning_event_semantics, evolution_condition_mapping]
  deferred_to_p6: [friendly_warning_guarding_readability, bark_audio_if_any]
  deferred_to_p7: [persistent_relationship_state_representation]
```
