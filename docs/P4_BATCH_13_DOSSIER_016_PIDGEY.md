# P4 Batch 13 — #016 Pidgey Full-Schema Dossier

Part of `docs/P4_BATCH_13_FULL_SCHEMA_DOSSIERS.md`.

---

## #016 Pidgey / 구구

```yaml
identity:
  national_dex: 16
  species_key: pidgey
  official_name_en: Pidgey
  official_name_ko: 구구
  evolution_family_keys: [pidgey, pidgeotto, pidgeot]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-PIDGEY-SG]
  official_evidence:
    - claim_id: PID-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEY-SG
      version_context: current_official_portal
      paraphrase: exceptionally_sharp_direction_sense_supports_return_to_its_own_nest_after_displacement
    - claim_id: PID-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-PIDGEY-SG
      version_context: historical_version_tagged
      paraphrase: docile_conflict_avoidance_and_defensive_sand_or_dust_kicking_are_repeatedly_described
  derived_claims:
    - claim_id: PID-D1-001
      evidence_class: D1
      based_on: [PID-C1-001]
      statement: homeward_navigation_can_drive_nest_return_and_displacement_events
      canon_boundary_note: not_arbitrary_destination_routefinding_map_reveal_or_guaranteed_disorientation_immunity
    - claim_id: PID-D1-002
      evidence_class: D1
      based_on: [PID-C1-002]
      statement: dust_kicking_can_drive_warning_concealment_or_disengagement_events
      canon_boundary_note: not_a_fixed_accuracy_penalty_radius_or_guaranteed_escape
canonical_source_data:
  types: [normal, flying]
  base_stats_raw: {hp: 40, attack: 45, defense: 40, special_attack: 35, special_defense: 35, speed: 56}
  abilities_relevant_to_p4: [keen_eye_as_modern_context, tangled_feet_as_modern_context, big_pecks_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 0.3_m, weight: 1.8_kg}
  evolution_source:
    evolves_from: null
    evolves_to: [pidgeotto]
    canonical_conditions: [modern_level_18_metadata_is_source_context_only]
  other_material_facts: [nest_homing, defensive_dust_behavior, generally_docile_tendency]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 2
  guard: 2
  potency: 1
  resistance: 1
  speed: 2
  derivation_notes: {vigor: hp_40, force: attack_45, guard: defense_40, potency: special_attack_35, resistance: special_defense_35, speed: speed_56}
  calibration_flags: [no_manual_exception, Speed_not_literal_velocity, Flying_type_not_traversal_permission]
capabilities_and_hazards:
  locomotion: [terrestrial_hopping_and_running, ordinary_local_flight, home_or_nest_oriented_return_navigation]
  physical_hazards: [beak_or_claw_contact, wing_driven_dust_or_sand_when_surface_supports]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [conflict_avoidance_tendency, nest_homing, defensive_dust_kicking]
  utility_interaction_capabilities: [observable_homeward_return_behavior_not_a_human_navigation_service]
  immunities_or_approach_invalidators: [local_flight_may_bypass_some_ground_only_obstacles_when_scene_supports]
  hazard_records:
    - hazard_key: pidgey-dust-disengagement
      kind: other
      delivery_or_exposure: [wing_driven_loose_dust, rapid_local_flight]
      prerequisite_or_trigger: [cornering, direct_attack, nest_pressure_if_authored]
      warning_signs: [wing_bracing, ground_disturbance, abrupt_low_flight]
      immediate_effects: [temporary_visual_pressure, forced_repositioning_or_lost_contact_only_through_event_resolution]
      delayed_or_persistent_effects: [none_automatic_follow_P3]
      ordinary_consequence_ceiling: moderate
      exceptional_consequence_ceiling: serious_or_critical_only_in_compound_or_exceptional_context
      countermeasures: [hard_cover, wet_or_hard_ground, distance, do_not_corner_it]
      emergency_consumable_hooks: []
      context_amplifiers: [loose_ground, poor_cover, ignored_warning]
      context_mitigators: [hard_cover, wet_ground, distance]
      governing_species_axes: [speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [PID-C1-001, PID-C1-002, PID-D1-001, PID-D1-002]
  notes: [Keen_Eye_does_not_create_perfect_detection, Flying_type_does_not_create_unlimited_traversal]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: homeward_navigation_and_local_aerial_mobility_have_greater_practical_value_in_a_low_technology_world
  stat_effect_if_any: none
  behavior_effect_if_any: nest_return_and_route_context_can_raise_or_reduce_encounter_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [exact_ancient_range_unknown, grassland_forest_edge_or_settlement_margin_only_when_locally_authored_D2]
  ecological_niche: [small_aerial_forager_with_homeward_orientation]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [exact_group_or_nest_structure_unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [small_tracks, feathers, repeated_nestward_flight_line, disturbed_dust]
  observable_signs: [small_tracks, feathers, repeated_nestward_flight_line, disturbed_dust]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_homing_distance_ceiling, anomalous_disorientation_limits, nesting_ecology, ancient_distribution]
human_perception_and_culture:
  ordinary_attitude: [usually_wary_or_docile_until_cornered_or_nest_pressure]
  specialist_knowledge_holders: [foragers, bird_watchers, route_scouts]
  benefits_and_services: [none_required]
  fears_and_avoidance: [minor_beak_or_claw_injury, dust_flush_near_bad_terrain]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [do_not_corner_it, use_hard_cover, avoid_loose_ground_when_pressuring_a_nest]
  common_misbeliefs: [Pidgey_can_guide_humans_to_arbitrary_destinations, Keen_Eye_means_perfect_detection, Flying_type_means_unlimited_traversal]
  local_variation_notes: [no_normalized_trainer_culture_is_inferred]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_fast_silhouette, repeated_nestward_return]
  local_aliases_or_titles: none
  identification_evidence: [small_tracks, feathers, repeated_return_line, defensive_dust]
  initial_knowledge_fragments: [generally_avoids_conflict, can_fly_locally]
  post_identification_knowledge: [direction_sense_is_homeward_not_universal]
  advanced_insights: [dust_behavior_is_contextual_not_a_fixed_accuracy_rule]
  exceptional_individual_knowledge_hooks: [scarred_Pidgey_known_to_return_from_extreme_displacement_without_becoming_a_global_compass]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_for_ordinary_humans
  default_behavior_states: [foraging, resting, returning_to_nest, wary, defensive, fleeing]
  aggression_tendency: low_but_contextual
  territoriality: low_to_moderate_near_nest_if_authored
  avoidance_tendency: high
  warning_signs: [wing_bracing, ground_disturbance, abrupt_low_flight]
  encounter_triggers: [cornering, direct_attack, nest_pressure_if_authored]
  escalation_triggers: [continued_intrusion_after_warning]
  deescalation_conditions: [restore_escape_space, stop_pursuit, leave_nest_area]
  pursuit_profile: usually_disengages_rather_than_pursues
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [minor_injury, temporary_visibility_loss, route_confusion_only_in_compound_scene]
  consequence_ceiling: moderate_with_serious_possible_in_compound_or_exceptional_context
  human_check_hooks:
    - action: maintain_orientation_when_a_defensive_dust_flush_breaks_visual_contact
      relevant_species_axis: speed
      relevant_tags: [ordinary_local_flight, defensive_dust_kicking]
      relevant_hazard_keys: [pidgey-dust-disengagement]
      difficulty_guidance: D024_context_from_distance_cover_ground_state_and_warning
      notes: Speed_2_does_not_define_literal_flight_velocity_or_range
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [skittish, calm, nest_focused, unusually_bold]
    condition_variants: [foraging, nesting, displaced, exhausted, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [age, survival_history, unusual_displacement_history, specialized_territory]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_marking_behavior_route_or_reputation]
    warning_or_rumor_hooks: [scarred_Pidgey_known_for_extreme_homeward_returns]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [rare_voluntary_persistent_trust, stable_roost_or_nest_access, no_forced_containment]
  trust_building_paths: [long_term_noncoercive_contact, injury_recovery, reliable_resources]
  reasons_to_stay: [deep_bond, familiar_people_or_place]
  rejection_or_departure_reasons: [forced_restraint, coercive_combat_use, chronic_denial_of_free_flight]
  human_social_costs: [roost_space, limited_direct_combat_value]
  logistics:
    food: [species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [safe_roost]
    space_travel: [local_flight_space_required]
    settlement_restrictions: [local_rules_may_limit_roosting]
    special_resources: [none_fixed]
  assistance_capabilities: [homeward_behavior_or_local_warning_only_when_voluntary_and_event_valid]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_navigation_service, one_visible_companion_slot]
  separation_injury_notes: [bonded_Pidgey_remains_independent_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [small_tracks, feathers, nestward_flight_line, disturbed_dust]
  avoidance_preparation: [hard_cover, wet_or_hard_ground, distance]
  resistance_or_protection: [hard_cover, stable_landmarks]
  combat_approach_permissions: [named_exceptional_individual_may_use_explicit_profile_not_scaling]
  blocked_or_invalid_approaches: [treat_homing_as_map_reveal, derive_exact_flight_range_from_Speed, turn_dust_into_fixed_numeric_debuff]
  fear_hooks: [visual_contact_disappears_in_dust_near_bad_terrain]
  injury_hazard_hooks: [minor_injury, visibility_pressure]
  environmental_state_hooks: [loose_ground, cover, landmarks]
  companion_assistance_hooks: [homeward_behavior_only_when_event_valid]
  fortune_spike_opportunities: [wet_ground_prevents_a_large_dust_flush]
  trouble_spike_complications: [loose_dry_ground_removes_visual_certainty]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [ordinary_feathers_only_if_context_requires]
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
  scalability_limits: [homeward_navigation_does_not_create_navigation_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_repeated_nest_return_behavior]
  dangerous: [lose_visual_contact_during_a_defensive_dust_flush]
  unusual_or_rare: [exceptional_Pidgey_returns_from_an_extreme_displacement]
  discovery_insight: [homeward_navigation_is_not_generic_routefinding]
  route_environment: [loose_ground_cover_and_known_landmarks_define_counterplay]
  settlement_culture: [locals_read_nestward_flight_as_a_qualitative_sign_not_a_map]
  cross_species: [Pidgeotto_patrol_and_Pidgeot_extreme_flight_are_not_inherited_backward]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_aerial_forager_with_homeward_navigation_and_defensive_dust_behavior
  progressive_reveal_notes: [distinguish_homeward_orientation_from_global_navigation]
  species_specific_visual_needs: [small_fast_silhouette, nestward_route_readability, dust_flush_telegraph]
  species_specific_audio_needs: [wing_flutter, alarm_call, dust_scrape]
  special_ui_or_readability_needs: [no_compass_arrow, no_perfect_detection_icon]
  p6_followup_required: true
cross_species_links:
  evolution_family: [pidgeotto, pidgeot]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_homing_distance_ceiling, anomalous_disorientation_limits, nesting_ecology, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [homeward_navigation_and_dust_event_state]
  deferred_to_p6: [nestward_route_and_dust_readability]
  deferred_to_p7: [runtime_flight_representation_if_required]
```
