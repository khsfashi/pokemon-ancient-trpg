# P4 Batch 13 — #021 Spearow Full-Schema Dossier

Part of `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md`.

---

## #021 Spearow / 깨비참

```yaml
identity:
  national_dex: 21
  species_key: spearow
  official_name_en: Spearow
  official_name_ko: 깨비참
  evolution_family_keys: [spearow, fearow]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SPEAROW-SG]
  official_evidence:
    - claim_id: SPR-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SPEAROW-SG
      version_context: current_official_portal
      paraphrase: short_wings_prevent_long_distance_flight
    - claim_id: SPR-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SPEAROW-SG
      version_context: current_official_portal
      paraphrase: recklessly_defends_territory_even_against_larger_Pokemon
    - claim_id: SPR-C1-003
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SPEAROW-SG
      version_context: historical_version_tagged
      paraphrase: rapid_flapping_supports_quick_local_flight_and_loud_warning_calls
  derived_claims:
    - claim_id: SPR-D1-001
      evidence_class: D1
      based_on: [SPR-C1-001, SPR-C1-003]
      statement: locomotion_is_rapid_local_flight_not_generic_long_range_Flying_type_traversal
      canon_boundary_note: no_altitude_endurance_or_route_bypass_is_inferred_from_type_or_Speed
    - claim_id: SPR-D1-002
      evidence_class: D1
      based_on: [SPR-C1-002, SPR-C1-003]
      statement: territory_and_warning_calls_can_drive_local_alarm_and_defense_events
      canon_boundary_note: not_permanent_berserk_state_perfect_alarm_network_or_fight_to_the_death
canonical_source_data:
  types: [normal, flying]
  base_stats_raw: {hp: 40, attack: 60, defense: 30, special_attack: 31, special_defense: 31, speed: 70}
  abilities_relevant_to_p4: [keen_eye_as_modern_context, sniper_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 0.3_m, weight: 2.0_kg}
  evolution_source:
    evolves_from: null
    evolves_to: [fearow]
    canonical_conditions: [modern_level_20_metadata_is_source_context_only]
  other_material_facts: [short_wing_flight_limit, rapid_local_flight, territorial_defense, warning_call]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 3
  guard: 1
  potency: 1
  resistance: 1
  speed: 3
  derivation_notes: {vigor: hp_40, force: attack_60, guard: defense_30, potency: special_attack_31, resistance: special_defense_31, speed: speed_70}
  calibration_flags: [no_manual_exception, Speed_not_literal_velocity, Flying_type_not_traversal_permission]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, rapid_short_range_flight, low_or_local_aerial_repositioning]
  physical_hazards: [beak_pecking, small_body_aerial_strike]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [territorial_defense, rapid_wingbeats, loud_warning_calls]
  utility_interaction_capabilities: [warning_calls_only_when_event_state_and_nearby_listeners_support_them]
  immunities_or_approach_invalidators: [some_ground_only_pursuit_or_barriers_may_fail_during_local_flight]
  hazard_records:
    - hazard_key: spearow-territorial-alarm-pressure
      kind: other
      delivery_or_exposure: [rapid_short_flight, repeated_pecking, warning_cry]
      prerequisite_or_trigger: [approach_defended_space_if_authored, direct_attack, ignored_warning]
      warning_signs: [repeated_cry, rapid_circling, visible_agitation, answering_calls_if_others_are_present]
      immediate_effects: [puncture_pressure, local_alarm_state_only_if_event_resolution_propagates_it]
      delayed_or_persistent_effects: [none_automatic_follow_P3]
      ordinary_consequence_ceiling: serious
      exceptional_consequence_ceiling: critical_or_fatal_only_under_D020_context_not_automatic
      countermeasures: [leave_defended_area, hard_cover, break_local_approach_line]
      emergency_consumable_hooks: []
      context_amplifiers: [actual_group_presence, open_ground, ignored_warning]
      context_mitigators: [distance, hard_cover, leaving_territory]
      governing_species_axes: [speed, force]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [SPR-C1-001, SPR-C1-002, SPR-C1-003, SPR-D1-001, SPR-D1-002]
  notes: [Flying_type_does_not_supply_long_distance_flight, Keen_Eye_does_not_create_perfect_detection]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: territorial_local_flight_and_alarm_behavior_have_greater_practical_cost_in_a_low_technology_world
  stat_effect_if_any: none
  behavior_effect_if_any: defended_locality_and_group_presence_can_raise_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [exact_ancient_range_unknown, scrub_grassland_forest_edge_or_nesting_ground_only_when_locally_authored_D2]
  ecological_niche: [small_territorial_aerial_forager]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [group_alarm_possible_only_when_actual_conspecifics_are_present]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [repeated_calls, low_circling, feathers, nest_sign]
  observable_signs: [small_feathers, repeated_cries, low_circling, nest_material]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_flight_duration, territory_size, group_coordination, ancient_distribution]
human_perception_and_culture:
  ordinary_attitude: [annoying_to_dangerous_near_defended_ground_despite_small_size]
  specialist_knowledge_holders: [foragers, hunters, route_guides]
  benefits_and_services: [none_required]
  fears_and_avoidance: [puncture_injury, repeated_local_dive_pressure, alarm_escalation]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [leave_defended_area, use_hard_cover, avoid_provoking_a_group]
  common_misbeliefs: [Flying_type_means_any_aerial_route_is_available, territorial_means_attack_on_sight, Keen_Eye_means_stealth_immunity]
  local_variation_notes: [no_normalized_trainer_culture_is_inferred]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [short_wing_rapid_beat, loud_repeated_call]
  local_aliases_or_titles: none
  identification_evidence: [small_body, short_wings, rapid_flapping, warning_call]
  initial_knowledge_fragments: [quick_local_flight, territorial_warning]
  post_identification_knowledge: [long_distance_flight_is_explicitly_limited]
  advanced_insights: [warning_calls_need_real_listeners_and_do_not_create_a_perfect_network]
  exceptional_individual_knowledge_hooks: [scarred_Spearow_known_for_surviving_larger_predators_without_gaining_long_range_flight]
threat_and_encounter:
  baseline_threat_band: moderate_for_ordinary_humans
  default_behavior_states: [foraging, perched, alert, warning, defending, fleeing]
  aggression_tendency: high_in_defended_context_low_elsewhere
  territoriality: high_when_local_territory_is_authored
  avoidance_tendency: moderate
  warning_signs: [loud_repeated_cry, rapid_circling, visible_agitation]
  encounter_triggers: [nest_or_defended_patch_approach_if_authored, direct_attack, ignored_warning]
  escalation_triggers: [continued_intrusion_after_warning, actual_nearby_group_response]
  deescalation_conditions: [leave_territory, stop_pursuit, gain_cover]
  pursuit_profile: short_to_moderate_local_pursuit_not_long_range_flight
  group_size_effects: [no_generic_multiplier_actual_individuals_only]
  ordinary_consequence_categories: [puncture_injury, route_denial, local_group_pressure]
  consequence_ceiling: serious_with_critical_possible_in_compound_or_exceptional_context
  human_check_hooks:
    - action: withdraw_from_a_defended_patch_before_alarm_and_short_dive_pressure_compound
      relevant_species_axis: speed
      relevant_tags: [rapid_short_range_flight, territorial_defense]
      relevant_hazard_keys: [spearow-territorial-alarm-pressure]
      difficulty_guidance: D024_context_from_cover_distance_warning_state_and_actual_group_presence
      notes: Speed_3_does_not_define_literal_flight_velocity_or_endurance
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [skittish, quarrelsome, nest_defensive, unusually_quiet]
    condition_variants: [perched, foraging, nesting, exhausted, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [age, survival_history, specialized_territory, conditioning]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_marking_behavior_route_or_reputation]
    warning_or_rumor_hooks: [scarred_Spearow_known_for_surviving_larger_predators]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [rare_voluntary_trust, free_local_flight_and_roost_access, no_forced_containment]
  trust_building_paths: [long_term_noncoercive_contact, injury_recovery, reliable_resources]
  reasons_to_stay: [deep_bond, familiar_people_or_place]
  rejection_or_departure_reasons: [forced_restraint, coercive_combat_use, chronic_denial_of_flight]
  human_social_costs: [noise, territorial_behavior, limited_long_range_travel]
  logistics:
    food: [species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [safe_roost]
    space_travel: [local_flight_space_required]
    settlement_restrictions: [noise_or_safety_rules_may_limit_entry]
    special_resources: [none_fixed]
  assistance_capabilities: [local_alarm_only_when_voluntary_and_not_treated_as_perfect_detection]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_mount_formula, one_visible_companion_slot]
  separation_injury_notes: [bonded_Spearow_remains_independent_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [small_feathers, repeated_cries, low_circling, nest_material]
  avoidance_preparation: [leave_defended_area, hard_cover, break_local_approach_line]
  resistance_or_protection: [hard_cover, distance]
  combat_approach_permissions: [named_exceptional_individual_may_use_explicit_profile_not_scaling]
  blocked_or_invalid_approaches: [grant_long_distance_flight_from_type, make_warning_call_global, infer_stealth_immunity]
  fear_hooks: [several_answering_calls_begin_after_one_warning_cry]
  injury_hazard_hooks: [puncture_injury]
  environmental_state_hooks: [defended_boundary, cover, actual_group_presence]
  companion_assistance_hooks: [local_warning_only_when_event_valid]
  fortune_spike_opportunities: [dense_cover_breaks_short_dive_lines]
  trouble_spike_complications: [open_ground_and_actual_group_presence_compound_pressure]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [ordinary_feathers_only_if_context_requires_and_not_specialized_loot]
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [none_supported]
  taboo_or_protection: [local_D2_only]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [warning_calls_do_not_create_communications_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [read_warning_calls_and_route_around_a_defended_patch]
  dangerous: [short_local_dive_pressure_compounds_with_real_group_presence]
  unusual_or_rare: [named_small_Spearow_survives_as_a_boss_grade_exception_through_history_not_scaling]
  discovery_insight: [Flying_typing_does_not_override_short_wing_endurance_limits]
  route_environment: [cover_and_distance_define_counterplay]
  settlement_culture: [locals_know_specific_nesting_zones_instead_of_treating_all_Spearow_as_hostile]
  cross_species: [Fearow_endurance_is_a_stage_local_capability_not_auto_inherited_backward]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_fast_territorial_bird_with_explicit_short_range_flight_limit
  progressive_reveal_notes: [alarm_behavior_is_local_and_contextual]
  species_specific_visual_needs: [rapid_short_wingbeat, local_circling, warning_posture]
  species_specific_audio_needs: [distinct_loud_warning_call, answering_calls_when_present]
  special_ui_or_readability_needs: [no_global_alarm_icon, no_unlimited_flight_marker]
  p6_followup_required: true
cross_species_links:
  evolution_family: [fearow]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_flight_duration, territory_size, group_coordination, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [territory_alarm_and_group_event_state]
  deferred_to_p6: [short_wingbeat_and_warning_readability]
  deferred_to_p7: [runtime_flight_representation_if_required]
```
