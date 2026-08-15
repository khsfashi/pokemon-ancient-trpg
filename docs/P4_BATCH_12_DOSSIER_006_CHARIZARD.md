# P4 Batch 12 — #006 Charizard Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #006 Charizard / 리자몽

```yaml
identity:
  national_dex: 6
  species_key: charizard
  official_name_en: Charizard
  official_name_ko: 리자몽
  evolution_family_keys: [charmander, charmeleon, charizard]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-CHARIZARD-SG]
  official_evidence:
    - claim_id: CHZ-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-CHARIZARD-SG
      version_context: current_official_portal
      paraphrase: Charizard_can_fly_at_high_altitude
    - claim_id: CHZ-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-CHARIZARD-SG
      version_context: current_official_portal
      paraphrase: greater_battle_experience_corresponds_to_hotter_flames
    - claim_id: CHZ-C1-003
      evidence_class: C1
      source_ref: OFFICIAL-DEX-CHARIZARD-SG
      version_context: current_official_portal
      paraphrase: when_truly_angered_the_tail_flame_can_appear_light_blue
  derived_claims:
    - claim_id: CHZ-D1-001
      evidence_class: D1
      based_on: [CHZ-C1-001]
      statement: flight_is_a_species_capability_and_route_pressure_not_a_Speed_formula_or_generic_Flying_rule
      canon_boundary_note: exact_altitude_speed_endurance_and_carrying_capacity_are_not_inferred
    - claim_id: CHZ-D1-002
      evidence_class: D1
      based_on: [CHZ-C1-002, CHZ-C1-003]
      statement: individual_history_and_anger_can_support_persistent_exceptional_traits_and_visual_state
      canon_boundary_note: no_kill_XP_visible_level_repeatable_stat_grind_player_scaling_or_Potency_auto_increase
canonical_source_data:
  types: [fire, flying]
  base_stats_raw: {hp: 78, attack: 84, defense: 78, special_attack: 109, special_defense: 85, speed: 100}
  abilities_relevant_to_p4: [blaze_as_modern_low_HP_context, solar_power_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.7_m, weight: 90.5_kg}
  evolution_source:
    evolves_from: charmeleon
    evolves_to: []
    canonical_conditions: [final_stage_in_mandatory_gen1_chain, modern_level_metadata_is_not_ancient_XP_law]
  other_material_facts: [high_altitude_flight, battle_history_linked_hotter_flames, anger_linked_light_blue_tail_flame]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 3
  potency: 5
  resistance: 4
  speed: 5
  derivation_notes: {vigor: hp_78, force: attack_84, guard: defense_78, potency: special_attack_109, resistance: special_defense_85, speed: speed_100}
  calibration_flags: [no_manual_exception, battle_history_not_XP, flight_not_Speed_formula, anger_flame_not_Charmander_health_signal]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, sustained_flight, high_altitude_access]
  physical_hazards: [large_body_impact, claw_bite_or_tail_strike]
  elemental_environmental_hazards: [high_temperature_flame, open_fire_and_secondary_ignition_when_scene_supports]
  anomalous_hazards: []
  behavioral_capabilities: [persistent_individual_battle_history_can_matter, anger_can_change_visible_tail_flame_appearance]
  utility_interaction_capabilities: [aerial_route_access, aerial_observation_when_voluntary_or_event_valid]
  immunities_or_approach_invalidators: [ground_only_pursuit_or_barrier_may_fail_when_open_air_escape_exists]
  hazard_records:
    - hazard_key: charizard-flame-and-aerial-pressure
      kind: burn
      delivery_or_exposure: [direct_flame, close_fire_contact, secondary_fire, aerial_attack_line_when_authored]
      prerequisite_or_trigger: [hostility_or_escalation]
      warning_signs: [tail_flame, wing_position, altitude_change, heat_or_smoke]
      immediate_effects: [serious_burn_pressure, forced_repositioning, loss_of_safe_open_ground]
      delayed_or_persistent_effects: [secondary_fire_only_when_scene_supports]
      ordinary_consequence_ceiling: critical
      exceptional_consequence_ceiling: critical_or_fatal_only_under_D020_context_not_automatic
      countermeasures: [hard_cover, line_break, sheltered_route, scene_valid_fire_suppression]
      emergency_consumable_hooks: []
      context_amplifiers: [open_ground, dry_fuel, vertical_exposure, blocked_shelter]
      context_mitigators: [caves, dense_hard_cover, wet_nonflammable_ground, successful_disengagement]
      governing_species_axes: [potency, speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [CHZ-C1-001, CHZ-C1-002, CHZ-D1-001, CHZ-D1-002]
  notes: [Charizard_is_not_Dragon_type_in_mandatory_baseline, Mega_and_Gigantamax_forms_are_out_of_scope]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: high_altitude_access_speed_and_fire_make_route_control_severe_in_a_low_technology_world_without_global_ancient_stats
  stat_effect_if_any: none
  behavior_effect_if_any: aerial_positioning_and_scarce_hard_cover_can_raise_encounter_pressure
  canon_boundary_note: no_global_ancient_bonus_or_veteran_level_curve
ancient_ecology:
  habitat: [exact_ancient_range_unknown, cliffs_mountains_or_large_open_territories_only_when_locally_authored_D2]
  ecological_niche: [large_aerial_fire_Pokemon_with_high_altitude_access]
  activity_pattern: [unknown]
  seasonal_notes: [dry_conditions_raise_secondary_fire_risk_without_stat_change]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [scorching, aerial_shadow_or_wing_disturbance, route_denial_when_authored]
  observable_signs: [large_tracks, wing_sign, scorch_marks, distant_aerial_silhouette]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [diet, nesting, social_structure, exact_range, flight_endurance, carrying_capacity]
human_perception_and_culture:
  ordinary_attitude: [fear_and_respect_due_to_size_flight_and_fire]
  specialist_knowledge_holders: [mountain_guides, hunters, firekeepers, sky_watchers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [open_ground_exposure, settlement_fire, aerial_pursuit]
  myths_omens_taboos: [dragon_or_sky_fire_titles_only_if_locally_authored_and_not_type_claims]
  practical_customs: [seek_hard_cover, avoid_dry_open_ground, watch_sky_and_wind]
  common_misbeliefs: [battle_experience_is_visible_level, every_veteran_has_fixed_stat_bonus, light_blue_flame_is_the_same_as_Charmander_health_signal, Charizard_is_Dragon_type]
  local_variation_notes: [named_individual_reputation_can_matter_without_species_wide_scaling]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [large_winged_fire_Pokemon_crossing_high_sky_or_cliff_line]
  local_aliases_or_titles: none
  identification_evidence: [winged_silhouette, tail_flame, body_scale, aerial_behavior]
  initial_knowledge_fragments: [it_can_leave_ground_only_routes_and_attack_from_vertical_space]
  post_identification_knowledge: [greater_battle_history_can_correlate_with_hotter_flames]
  advanced_insights: [history_supports_individual_traits_not_XP_or_auto_scaling]
  exceptional_individual_knowledge_hooks: [named_veteran_Charizard_with_known_scar_route_and_unusually_hot_flame_history]
threat_and_encounter:
  baseline_threat_band: very_high_for_ordinary_humans
  default_behavior_states: [resting, soaring, observing, territorial_if_authored, hostile, aerial_disengagement_or_pursuit]
  aggression_tendency: contextual
  territoriality: moderate_to_high_when_authored
  avoidance_tendency: low_when_holding_airspace_or_territory
  warning_signs: [circling, altitude_drop, wing_bracing, flame_change, repeated_pass]
  encounter_triggers: [entering_nest_or_resting_space_if_authored, damaging_territory, direct_attack]
  escalation_triggers: [trapping, threatening_young_or_rest_site_if_authored, repeated_attack]
  deescalation_conditions: [leave_airspace_or_resting_space, break_contact_under_cover, stop_pursuit]
  pursuit_profile: highly_mobile_and_contextual_but_not_infinite
  group_size_effects: [unknown_no_generic_group_rule]
  ordinary_consequence_categories: [critical_burn_or_physical_injury, fire_spread, aerial_route_denial]
  consequence_ceiling: critical_with_fatality_possible_only_under_serious_D020_context
  human_check_hooks:
    - action: reach_hard_cover_before_an_aerial_pass_closes
      relevant_species_axis: speed
      relevant_tags: [flight, aerial_route_access]
      relevant_hazard_keys: [charizard-flame-and-aerial-pressure]
      difficulty_guidance: D024_context_from_distance_cover_vertical_exposure_and_current_altitude
      notes: Speed_5_does_not_define_exact_flight_velocity_or_map_travel_time
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [aloof, territorial, wary, aggressive, calculating]
    condition_variants: [resting, airborne, injured, angered, exhausted]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_and_history_backed_not_player_scaled
    candidate_causes: [age, survival_history, repeated_battle_history, specialized_territory, conditioning]
    rating_shift_guidance: explicit_axis_deltas_only_and_may_exceed_ordinary_species_expectation
    required_distinctive_traits: [persistent_scar_marking_flame_behavior_route_or_reputation]
    warning_or_rumor_hooks: [veteran_Charizard_known_to_burn_hotter_and_intercept_travelers_from_high_altitude]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_persistent_trust, huge_space_and_fire_safe_logistics, no_forced_containment, acceptance_of_independent_flight]
  trust_building_paths: [long_term_noncoercive_contact, protecting_territory_or_injury_recovery, reliable_resources]
  reasons_to_stay: [deep_bond, shared_history, familiar_territory_or_people]
  rejection_or_departure_reasons: [forced_restraint, denial_of_flight, coercive_combat_use, chronic_crowding]
  human_social_costs: [settlement_fear, fire_risk, enormous_space_food_and_route_requirements]
  logistics:
    food: [exact_diet_unknown_but_large_body_requires_substantial_supply]
    water: [regular_access]
    shelter_temperature: [large_fire_safe_resting_site]
    space_travel: [large_body_and_flight_require_route_and_airspace_planning]
    settlement_restrictions: [dense_or_flammable_settlements_may_refuse_entry]
    special_resources: [none_fixed_by_P4]
  assistance_capabilities: [aerial_observation_or_transport_only_if_specifically_safe_voluntary_and_later_rules_allow]
  handling_boundaries: [no_defeat_to_recruit, no_forced_mount, no_carry_capacity_from_Force_or_weight, no_XP_training_loop]
  separation_injury_notes: [bonded_Charizard_may_leave_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [large_tracks, scorch_marks, aerial_shadow, wing_disturbance]
  avoidance_preparation: [identify_hard_cover, avoid_exposed_dry_ground, monitor_sky]
  resistance_or_protection: [hard_nonflammable_cover, sheltered_route, distance]
  combat_approach_permissions: [persistent_named_veteran_can_be_boss_grade_through_explicit_profile_not_scaling]
  blocked_or_invalid_approaches: [derive_XP_or_level_from_battle_history, infer_Dragon_type, derive_exact_flight_speed_or_carry_mass]
  fear_hooks: [aerial_silhouette_disappears_above_cloud_or_cliff_then_returns_on_a_lower_pass]
  injury_hazard_hooks: [burn, high_impact_injury]
  environmental_state_hooks: [cover, altitude, wind, dryness, airspace]
  companion_assistance_hooks: [aerial_scouting_if_bonded_and_event_rules_allow]
  fortune_spike_opportunities: [stone_overhang_breaks_line_of_attack]
  trouble_spike_complications: [open_dry_field_removes_safe_cover_and_increases_fire_risk]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_fire_or_wings_are_not_resource_shortcuts
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [none_supported]
  taboo_or_protection: [local_reverence_or_hunt_taboo_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [flight_and_hot_flame_do_not_create_air_transport_infrastructure_or_industrial_heat_without_separate_evidence]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_distant_Charizard_route_and_learn_when_hard_cover_is_needed]
  dangerous: [crossing_open_ground_under_aerial_fire_pressure]
  unusual_or_rare: [named_veteran_Charizard_has_persistent_history_and_hotter_flame_without_player_scaling]
  discovery_insight: [battle_experience_can_matter_as_history_without_becoming_XP]
  route_environment: [cliffs_cover_wind_and_dryness_define_counterplay]
  settlement_culture: [sky_watchers_keep_warning_signs_for_one_known_individual]
  cross_species: [Charmander_condition_signal_and_Charmeleon_heat_tendency_are_not_auto_inherited]
presentation_and_p6_followups:
  initial_bestiary_presentation: large_fast_aerial_fire_Pokemon_with_history_sensitive_flame_danger
  progressive_reveal_notes: [distinguish_ordinary_and_exceptional_individuals_through_persistent_traits_not_level_badges]
  species_specific_visual_needs: [winged_scale, altitude, flame_heat_or_anger_variants]
  species_specific_audio_needs: [wing_pass_and_fire_pressure]
  special_ui_or_readability_needs: [no_level_elite_affix_or_auto_Dragon_icon_for_veteran_individuals]
  p6_followup_required: true
cross_species_links:
  evolution_family: [charmander, charmeleon]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_flight_speed_altitude_endurance, carrying_capacity, diet, nesting, exact_ancient_range, battle_history_to_heat_function]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [aerial_route_pressure_and_named_individual_state]
  deferred_to_p6: [aerial_scale_and_exceptional_flame_readability]
  deferred_to_p7: [runtime_aerial_positioning_if_required]
```
