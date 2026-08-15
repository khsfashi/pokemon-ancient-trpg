# P4 Batch 12 — #004 Charmander Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #004 Charmander / 파이리

```yaml
identity:
  national_dex: 4
  species_key: charmander
  official_name_en: Charmander
  official_name_ko: 파이리
  evolution_family_keys: [charmander, charmeleon, charizard]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-CHARMANDER-SG]
  official_evidence:
    - claim_id: CHA-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-CHARMANDER-SG
      version_context: current_official_portal
      paraphrase: tail_flame_is_linked_to_life_force_and_burns_weakly_when_weak_and_vigorously_when_healthy
    - claim_id: CHA-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-CHARMANDER-SG
      version_context: current_official_portal
      paraphrase: a_healthy_tail_flame_does_not_simply_go_out_from_minor_water_exposure
  derived_claims:
    - claim_id: CHA-D1-001
      evidence_class: D1
      based_on: [CHA-C1-001, CHA-C1-002]
      statement: tail_flame_is_a_qualitative_diegetic_condition_signal_with_some_minor_wetting_resilience
      canon_boundary_note: no_exact_HP_fixed_threshold_complete_injury_readout_or_water_immunity
    - claim_id: CHA-U-001
      evidence_class: U
      based_on: [CHA-C1-001]
      statement: exact_outcome_of_temporary_total_flame_extinguishing_is_unresolved
      canon_boundary_note: do_not_create_automatic_instant_death_switch_without_additional_evidence_or_owned_rule
canonical_source_data:
  types: [fire]
  base_stats_raw: {hp: 39, attack: 52, defense: 43, special_attack: 60, special_defense: 50, speed: 65}
  abilities_relevant_to_p4: [blaze_as_modern_low_HP_context, solar_power_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 0.6_m, weight: 8.5_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [charmeleon]
    canonical_conditions: [modern_level_16_is_source_context_not_ancient_level_or_XP_law]
  other_material_facts: [tail_flame_condition_signal, healthy_flame_minor_wetting_resilience]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 2
  guard: 2
  potency: 3
  resistance: 2
  speed: 3
  derivation_notes: {vigor: hp_39, force: attack_52, guard: defense_43, potency: special_attack_60, resistance: special_defense_50, speed: speed_65}
  calibration_flags: [no_manual_exception, tail_flame_not_HP_UI, Blaze_not_ancient_threshold]
capabilities_and_hazards:
  locomotion: [small_terrestrial_movement]
  physical_hazards: [bite_or_claw_if_cornered_or_hostile]
  elemental_environmental_hazards: [persistent_tail_flame_can_ignite_or_heat_susceptible_material_when_contact_and_scene_support_it]
  anomalous_hazards: []
  behavioral_capabilities: [tail_flame_visibly_tracks_broad_condition]
  utility_interaction_capabilities: [qualitative_observation_of_weak_or_healthy_state]
  immunities_or_approach_invalidators: []
  hazard_records:
    - hazard_key: charmander-tail-fire-contact
      kind: burn
      delivery_or_exposure: [direct_tail_flame_contact, nearby_dry_material_ignition_when_authored]
      prerequisite_or_trigger: [close_contact_or_environmental_exposure]
      warning_signs: [visible_tail_flame, heat, smoke_or_scorching_when_present]
      immediate_effects: [burn_or_ignition_pressure]
      delayed_or_persistent_effects: [secondary_fire_only_when_scene_materials_support_it]
      ordinary_consequence_ceiling: serious
      exceptional_consequence_ceiling: critical_if_fire_spreads_in_severe_context
      countermeasures: [distance, nonflammable_barrier_when_available, scene_valid_water_or_smothering_for_environmental_fire]
      emergency_consumable_hooks: []
      context_amplifiers: [dry_fuel, confined_space, panic]
      context_mitigators: [wet_ground, stone_space, open_escape_route]
      governing_species_axes: [potency]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [CHA-C1-001, CHA-D1-001]
  notes: [minor_wetting_resilience_is_not_water_immunity, tail_flame_visual_is_not_exact_injury_meter]
ancient_strength:
  classifications: [similar_to_modern_baseline, behaviorally_harsher]
  evidence_class: D2
  rationale: open_flame_is_more_dangerous_in_premodern_shelter_and_dry_material_contexts_without_any_species_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: environment_can_raise_fire_consequence_or_avoidance_pressure
  canon_boundary_note: no_generic_ancient_Fire_bonus
ancient_ecology:
  habitat: [exact_ancient_range_unknown, dry_or_sheltered_localities_only_when_locally_authored_D2]
  ecological_niche: [small_terrestrial_fire_Pokemon_with_persistent_visible_tail_flame]
  activity_pattern: [unknown]
  seasonal_notes: [dry_conditions_raise_environmental_fire_risk_without_changing_base_stats]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [small_scorch_marks_or_warm_resting_sites_when_authored]
  observable_signs: [small_tracks, faint_scorching, visible_night_flame]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [diet, denning, social_structure, exact_range, total_extinguishing_outcome]
human_perception_and_culture:
  ordinary_attitude: [caution_due_to_open_flame, concern_when_flame_is_visibly_weak]
  specialist_knowledge_holders: [hunters, firekeepers, travelers_who_have_seen_the_species]
  benefits_and_services: [none_required]
  fears_and_avoidance: [accidental_fire, mistaking_visible_flame_for_safe_touch]
  myths_omens_taboos: [life_flame_superstitions_only_if_locally_authored_D2]
  practical_customs: [keep_dry_fuel_away, read_flame_only_as_broad_condition, preserve_escape_space]
  common_misbeliefs: [flame_height_equals_exact_HP, any_water_means_instant_death, every_Fire_type_has_a_health_flame, starter_role_means_domesticated]
  local_variation_notes: [knowledge_depends_on_actual_local_contact_not_modern_starter_familiarity]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_bipedal_reptile_like_Pokemon_with_a_persistent_tail_flame]
  local_aliases_or_titles: none
  identification_evidence: [tail_flame, body_shape, tracks_and_scorch_context]
  initial_knowledge_fragments: [tail_flame_state_reflects_broad_condition]
  post_identification_knowledge: [weak_flame_can_signal_weakness_and_healthy_flame_burns_vigorously]
  advanced_insights: [flame_is_not_exact_HP_UI_and_minor_wetting_resilience_is_not_immunity]
  exceptional_individual_knowledge_hooks: [Charmander_with_persistent_scar_or_unusual_fire_control_history]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_but_fire_context_sensitive
  default_behavior_states: [resting, wary, curious_if_authored, fleeing, cornered, defending]
  aggression_tendency: low_to_contextual
  territoriality: unknown_to_contextual
  avoidance_tendency: moderate_to_high_when_escape_exists
  warning_signs: [body_tension, turning_tail_away_or_toward_space, flare_change_only_as_broad_state]
  encounter_triggers: [close_approach, blocking_escape, entering_resting_space]
  escalation_triggers: [cornering, grabbing_tail, threatening_a_weak_or_injured_individual]
  deescalation_conditions: [restore_distance, open_escape_route, remove_flammable_pressure]
  pursuit_profile: none_by_default
  group_size_effects: [unknown_no_generic_group_rule]
  ordinary_consequence_categories: [minor_to_serious_burn_or_physical_injury, environmental_fire, route_delay]
  consequence_ceiling: serious_ordinary_with_critical_environmental_escalation_possible
  human_check_hooks:
    - action: approach_an_injured_Charmander_without_causing_fire_or_defensive_escalation
      relevant_species_axis: speed
      relevant_tags: [tail_flame_condition_signal]
      relevant_hazard_keys: [charmander-tail-fire-contact]
      difficulty_guidance: D024_context_from_flammability_space_condition_and_escape_route
      notes: observing_weakness_does_not_reveal_exact_HP_or_guarantee_safe_handling
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [skittish, curious, defensive, calm]
    condition_variants: [healthy_flame, weak_flame, injured, exhausted]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, repeated_fire_exposure, unusual_training_or_battle_history]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_scar_flame_behavior_or_history]
    warning_or_rumor_hooks: [scarred_Charmander_whose_small_size_leads_hunters_to_underestimate_it]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, no_forced_containment, safe_fire_aware_shelter, reliable_food_water]
  trust_building_paths: [repeated_noncoercive_contact, fire_safe_rest_support, protecting_escape_space]
  reasons_to_stay: [bond, familiar_people_or_place, reliable_resources]
  rejection_or_departure_reasons: [forced_restraint, tail_grabbing_or_smothering, unsafe_or_neglectful_shelter]
  human_social_costs: [fire_safe_sleeping_and_travel_arrangements, settlement_fear]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access_with_tail_flame_safety_context]
    shelter_temperature: [dry_fire_safe_area_without_flammable_tail_contact]
    space_travel: [small_body_not_inventory_or_portable_containment]
    settlement_restrictions: [fire_risk_in_dense_wood_or_thatch_structures]
    special_resources: [none_fixed_by_P4]
  assistance_capabilities: [light_or_heat_help_only_when_voluntary_and_scene_safe]
  handling_boundaries: [no_defeat_to_recruit, no_tail_flame_as_tool_on_command, no_starter_distribution_shortcut]
  separation_injury_notes: [bond_departure_is_behavioral_not_inventory_loss]
mechanical_hooks:
  tracking_clues: [small_tracks, scorch_marks, night_flame]
  avoidance_preparation: [clear_dry_fuel, maintain_distance, preserve_escape_route]
  resistance_or_protection: [ordinary_fire_safe_barrier_or_wet_ground_when_valid]
  combat_approach_permissions: [ordinary_Charmander_can_become_routine_later_without_enemy_scaling]
  blocked_or_invalid_approaches: [read_exact_HP_from_flame, apply_fixed_low_HP_Blaze_threshold, assume_water_immunity_or_instant_death_from_any_extinguishing]
  fear_hooks: [weak_tail_flame_flickers_in_a_dark_shelter_while_dry_material_surrounds_it]
  injury_hazard_hooks: [burn]
  environmental_state_hooks: [dry_fuel, wetness, confined_space, flame_condition]
  companion_assistance_hooks: [controlled_light_or_warmth_if_bonded_and_scene_valid]
  fortune_spike_opportunities: [stone_or_wet_ground_stops_secondary_fire]
  trouble_spike_complications: [dry_thatch_turns_a_small_contact_into_a_larger_fire_problem]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_tail_flame_is_not_a_harvestable_resource
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [tail_flame_or_body_part_harvest_not_supported]
  taboo_or_protection: [local_life_flame_taboo_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [persistent_tail_fire_does_not_create_owned_furnace_fuel_or_industrial_heat_source]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [learn_to_read_healthy_vs_weak_tail_flame_without_numeric_UI]
  dangerous: [a_frightened_Charmander_in_a_dry_shelter_creates_fire_and_escape_pressure]
  unusual_or_rare: [exceptional_scarred_Charmander_is_far_more_dangerous_than_size_suggests]
  discovery_insight: [condition_signal_is_qualitative_and_species_local]
  route_environment: [wet_stone_dry_grass_and_shelter_material_change_fire_risk]
  settlement_culture: [locals_may_tell_conflicting_life_flame_stories]
  cross_species: [Charmeleon_heat_and_Charizard_battle_history_are_not_auto_inherited]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_fire_Pokemon_with_a_tail_flame_that_visibly_reflects_broad_condition
  progressive_reveal_notes: [show_broad_weak_or_healthy_flame_state_without_numbers]
  species_specific_visual_needs: [tail_flame_condition_variants, fire_contact_readability]
  species_specific_audio_needs: [small_flame_and_stress_audio_if_needed]
  special_ui_or_readability_needs: [never_map_flame_size_to_exact_HP_bar_or_percentage]
  p6_followup_required: true
cross_species_links:
  evolution_family: [charmeleon, charizard]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [temporary_total_flame_extinguishing_outcome, exact_diet, exact_ancient_range, social_structure]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [qualitative_flame_state_and_fire_spread_event_timing]
  deferred_to_p6: [tail_flame_condition_visualization]
  deferred_to_p7: []
```
