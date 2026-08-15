# P4 Batch 12 — #005 Charmeleon Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #005 Charmeleon / 리자드

```yaml
identity:
  national_dex: 5
  species_key: charmeleon
  official_name_en: Charmeleon
  official_name_ko: 리자드
  evolution_family_keys: [charmander, charmeleon, charizard]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-CHARMELEON-SG]
  official_evidence:
    - claim_id: CHM-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-CHARMELEON-SG
      version_context: current_official_portal
      paraphrase: swinging_its_burning_tail_can_raise_the_temperature_around_Charmeleon
    - claim_id: CHM-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-CHARMELEON-SG
      version_context: current_official_portal
      paraphrase: Charmeleon_is_hotheaded_seeks_opponents_and_can_remain_aggressive_when_it_has_not_won
  derived_claims:
    - claim_id: CHM-D1-001
      evidence_class: D1
      based_on: [CHM-C1-001]
      statement: local_heat_can_be_an_authored_environmental_pressure_or_warning_state
      canon_boundary_note: no_fixed_temperature_radius_duration_or_generic_Fire_aura_formula
    - claim_id: CHM-D1-002
      evidence_class: D1
      based_on: [CHM-C1-002]
      statement: battle_seeking_is_a_behavior_tendency_not_a_compulsory_duel_or_rage_meter
      canon_boundary_note: behavior_remains_contextual_and_agency_preserving
canonical_source_data:
  types: [fire]
  base_stats_raw: {hp: 58, attack: 64, defense: 58, special_attack: 80, special_defense: 65, speed: 80}
  abilities_relevant_to_p4: [blaze_as_modern_low_HP_context, solar_power_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.1_m, weight: 19.0_kg}
  evolution_source:
    evolves_from: charmander
    evolves_to: [charizard]
    canonical_conditions: [modern_level_36_is_source_context_not_ancient_level_or_XP_law]
  other_material_facts: [local_temperature_rise_from_burning_tail, hotheaded_battle_seeking_tendency]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 3
  guard: 2
  potency: 4
  resistance: 3
  speed: 4
  derivation_notes: {vigor: hp_58, force: attack_64, guard: defense_58, potency: special_attack_80, resistance: special_defense_65, speed: speed_80}
  calibration_flags: [no_manual_exception, local_heat_not_generic_Fire_formula, aggression_not_rage_meter]
capabilities_and_hazards:
  locomotion: [fast_terrestrial_movement]
  physical_hazards: [claw_bite_or_tail_strike_when_hostile]
  elemental_environmental_hazards: [local_heat, open_flame_contact, dry_material_ignition_when_scene_supports]
  anomalous_hazards: []
  behavioral_capabilities: [battle_seeking_tendency, persistent_pressure_after_unresolved_conflict]
  utility_interaction_capabilities: [heat_and_tail_motion_can_telegraph_escalation]
  immunities_or_approach_invalidators: []
  hazard_records:
    - hazard_key: charmeleon-local-heat-fire
      kind: burn
      delivery_or_exposure: [close_tail_flame_contact, sustained_close_heat, secondary_fire_if_materials_support]
      prerequisite_or_trigger: [close_range_or_confined_scene]
      warning_signs: [visible_tail_flame, rising_heat, smoke_or_scorching_when_present]
      immediate_effects: [burn_pressure, forced_repositioning_or_discomfort]
      delayed_or_persistent_effects: [secondary_fire_only_when_scene_supports]
      ordinary_consequence_ceiling: serious
      exceptional_consequence_ceiling: critical_in_severe_confined_or_spreading_fire_context
      countermeasures: [distance, nonflammable_cover, open_space, scene_valid_fire_suppression]
      emergency_consumable_hooks: []
      context_amplifiers: [dry_material, confinement, blocked_escape]
      context_mitigators: [wet_stone, open_space, distance]
      governing_species_axes: [potency, speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [CHM-C1-001, CHM-D1-001]
  notes: [exact_heat_values_are_event_parameters, Charmander_health_flame_semantics_are_not_auto_inherited]
ancient_strength:
  classifications: [similar_to_modern_baseline, behaviorally_harsher, ecologically_more_dangerous]
  evidence_class: D2
  rationale: hotheaded_behavior_plus_open_heat_is_more_dangerous_in_premodern_dry_or_confined_spaces_without_stat_scaling
  stat_effect_if_any: none
  behavior_effect_if_any: conflict_can_persist_longer_and_control_space_when_authored
  canon_boundary_note: no_global_ancient_Fire_bonus_or_rage_stat
ancient_ecology:
  habitat: [exact_ancient_range_unknown, dry_rocky_or_sheltered_localities_only_when_authored_D2]
  ecological_niche: [medium_fast_fire_Pokemon_with_local_heat_and_conflict_seeking_behavior]
  activity_pattern: [unknown]
  seasonal_notes: [dry_conditions_raise_environmental_fire_risk_without_stat_change]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [scorching_or_warmed_rest_sites_when_authored]
  observable_signs: [tracks, claw_marks, scorch_marks, heat_or_smoke]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [diet, denning, social_structure, exact_range, heat_radius_and_duration]
human_perception_and_culture:
  ordinary_attitude: [high_caution_due_to_speed_heat_and_conflict_tendency]
  specialist_knowledge_holders: [hunters, firekeepers, route_guards]
  benefits_and_services: [none_required]
  fears_and_avoidance: [being_pursued_into_dry_or_confined_space, accidental_fire]
  myths_omens_taboos: [duelist_or_fire_spirit_stories_only_if_authored_D2]
  practical_customs: [avoid_contesting_space_unnecessarily, leave_withdrawal_route, clear_dry_fuel]
  common_misbeliefs: [it_must_accept_every_challenge, losing_creates_a_numeric_rage_meter, all_Fire_Pokemon_raise_ambient_temperature]
  local_variation_notes: [actual_behavior_and_recognition_depend_on_local_history]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [lean_bipedal_fire_Pokemon_whose_tail_sweeps_raise_noticeable_heat]
  local_aliases_or_titles: none
  identification_evidence: [body_shape, tail_flame, local_heat, conflict_posture]
  initial_knowledge_fragments: [close_range_can_become_hot_before_contact]
  post_identification_knowledge: [it_has_a_battle_seeking_hotheaded_tendency]
  advanced_insights: [heat_is_species_local_and_behavior_is_not_a_compulsory_duel_rule]
  exceptional_individual_knowledge_hooks: [scarred_Charmeleon_known_to_hold_a_pass_or_reengage_after_retreat]
threat_and_encounter:
  baseline_threat_band: moderate_to_high
  default_behavior_states: [resting, searching, challenging_or_testing_if_authored, wary, hostile, pursuing_short_range]
  aggression_tendency: moderate_to_high_contextual
  territoriality: contextual
  avoidance_tendency: low_to_moderate_after_conflict_starts
  warning_signs: [tail_sweeps, heat_rise, aggressive_posture, repeated_reengagement]
  encounter_triggers: [entering_resting_space, direct_challenge, blocking_route, previous_unresolved_conflict]
  escalation_triggers: [counterattack, trapping, refusing_distance_in_a_challenge_context]
  deescalation_conditions: [break_line_and_distance, leave_contested_space, remove_direct_challenge]
  pursuit_profile: short_to_moderate_contextual_not_infinite
  group_size_effects: [unknown_no_generic_pack_rule]
  ordinary_consequence_categories: [serious_burn_or_physical_injury, fire_spread, forced_route_change]
  consequence_ceiling: serious_ordinary_with_critical_fire_context_possible
  human_check_hooks:
    - action: disengage_from_a_battle_seeking_Charmeleon_without_being_cut_off
      relevant_species_axis: speed
      relevant_tags: [battle_seeking_tendency, local_heat]
      relevant_hazard_keys: [charmeleon-local-heat-fire]
      difficulty_guidance: D024_context_from_distance_cover_route_width_and_dry_material
      notes: disengagement_is_contextual_not_a_rage_meter_check
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [hotheaded, wary, territorial, calculating]
    condition_variants: [resting, agitated, injured, exhausted]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, repeated_battle_history, territory_control]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_scar_route_behavior_or_known_conflict_history]
    warning_or_rumor_hooks: [Charmeleon_that_repeatedly_drives_armed_travelers_from_one_pass]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, no_forced_containment, fire_safe_logistics, handler_can_respect_conflict_tendency]
  trust_building_paths: [long_noncoercive_contact, reliable_resource_support, avoiding_forced_combat_or_restraint]
  reasons_to_stay: [bond, familiar_people_or_territory, reliable_resources]
  rejection_or_departure_reasons: [forced_restraint, punitive_smothering, chronic_crowding_or_forced_retreat]
  human_social_costs: [fire_safe_shelter, higher_conflict_risk, settlement_fear]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [fire_safe_nonflammable_resting_area]
    space_travel: [medium_body_requires_visible_travel_not_inventory]
    settlement_restrictions: [dense_flammable_structures_or_crowds_are_high_risk]
    special_resources: [none_fixed_by_P4]
  assistance_capabilities: [heat_or_intimidation_pressure_only_when_voluntary_and_scene_valid]
  handling_boundaries: [no_defeat_to_recruit, no_forced_duel_command, no_generic_heat_aura]
  separation_injury_notes: [bond_departure_is_behavioral_not_inventory_loss]
mechanical_hooks:
  tracking_clues: [scorch_marks, claw_marks, warmed_stone, disturbed_route]
  avoidance_preparation: [clear_dry_fuel, plan_exit, avoid_direct_challenge]
  resistance_or_protection: [distance_nonflammable_cover_or_wet_ground_when_valid]
  combat_approach_permissions: [terrain_and_line_control_matter_more_than_hidden_heat_numbers]
  blocked_or_invalid_approaches: [apply_fixed_heat_radius, use_rage_meter, assume_every_Fire_type_has_same_aura]
  fear_hooks: [temperature_rises_before_the_Pokemon_steps_into_view]
  injury_hazard_hooks: [burn]
  environmental_state_hooks: [dryness, confinement, distance, escape_route]
  companion_assistance_hooks: [controlled_heat_or_presence_if_bonded_and_safe]
  fortune_spike_opportunities: [open_stone_ground_breaks_fire_spread]
  trouble_spike_complications: [narrow_dry_corridor_turns_disengagement_into_heat_pressure]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_tail_fire_is_not_harvestable_fuel
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [none_supported]
  taboo_or_protection: [local_fire_taboo_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [local_heat_does_not_prove_furnace_power_industrial_heat_or_owned_energy_source]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [watch_a_Charmeleon_from_a_safe_distance_and_learn_its_heat_warning]
  dangerous: [an_unresolved_encounter_reignites_when_it_follows_travelers_into_a_dry_pass]
  unusual_or_rare: [exceptional_Charmeleon_has_a_reputation_for_defeating_better_armed_hunters]
  discovery_insight: [behavior_tendency_and_heat_are_specific_not_global_systems]
  route_environment: [dryness_route_width_and_cover_change_the_encounter]
  settlement_culture: [locals_may_mark_a_pass_as_Charmeleon_contested_without_claiming_ownership]
  cross_species: [Charmander_health_flame_and_Charizard_veteran_heat_are_stage_local]
presentation_and_p6_followups:
  initial_bestiary_presentation: fast_hotheaded_fire_Pokemon_that_can_raise_local_heat_with_its_tail
  progressive_reveal_notes: [show_heat_through_environment_and_animation_not_hidden_radius_numbers]
  species_specific_visual_needs: [tail_sweep_heat_distortion, aggressive_posture]
  species_specific_audio_needs: [heat_fire_and_reengagement_cues]
  special_ui_or_readability_needs: [no_rage_meter_or_generic_Fire_aura_icon]
  p6_followup_required: true
cross_species_links:
  evolution_family: [charmander, charizard]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_heat_radius_temperature_duration, exact_diet, exact_ancient_range, social_structure]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [heat_state_conflict_persistence_and_disengagement_timing]
  deferred_to_p6: [environmental_heat_and_escalation_readability]
  deferred_to_p7: []
```
