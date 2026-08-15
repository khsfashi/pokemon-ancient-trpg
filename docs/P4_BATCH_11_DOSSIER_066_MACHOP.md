# P4 Batch 11 — #066 Machop Full-Schema Dossier

Part of `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md`.

---

## #066 Machop / 알통몬

```yaml
identity:
  national_dex: 66
  species_key: machop
  official_name_en: Machop
  official_name_ko: 알통몬
  evolution_family_keys: [machop, machoke, machamp]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-MACHOP-SG]
  official_evidence:
    - claim_id: MCH-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-MACHOP-SG
      version_context: current_official_portal
      paraphrase: Machop_body_is_almost_entirely_muscle_and_source_text_describes_extreme_throwing_and_lifting_strength_despite_small_body_size
    - claim_id: MCH-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-MACHOP-SG
      version_context: current_official_portal
      paraphrase: Machop_trains_by_lifting_boulders_and_one_entry_describes_carrying_Graveler_as_training
  derived_claims:
    - claim_id: MCH-D1-001
      evidence_class: D1
      based_on: [MCH-C1-001, MCH-C1-002]
      statement: extreme_strength_supports_authored_heavy_object_and_grappling_permissions_without_a_kilogram_or_structure_damage_formula
      canon_boundary_note: Force_4_does_not_convert_to_fixed_mass_or_terrain_damage
    - claim_id: MCH-D1-002
      evidence_class: D1
      based_on: [MCH-C1-002]
      statement: self_directed_training_can_change_individual_history_conditioning_or_technique_without_importing_level_XP_or_repeatable_stat_grind
      canon_boundary_note: ordinary_species_baseline_stays_fixed_and_no_player_scaled_enemy_growth_is_created
canonical_source_data:
  types: [fighting]
  base_stats_raw: {hp: 70, attack: 80, defense: 50, special_attack: 35, special_defense: 35, speed: 35}
  abilities_relevant_to_p4: [guts_as_modern_context, no_guard_as_modern_context, steadfast_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 0.8_m, weight: 19.5_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [machoke]
    canonical_conditions: [modern_level_threshold_is_source_context_not_kill_XP_or_visible_level_rule]
  other_material_facts: [muscular_body, extreme_lifting_and_throwing, boulder_training, Graveler_carrying_training]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 2
  potency: 1
  resistance: 1
  speed: 1
  derivation_notes: {vigor: hp_70, force: attack_80, guard: defense_50, potency: special_attack_35, resistance: special_defense_35, speed: speed_35}
  calibration_flags: [no_manual_exception, extreme_lifting_is_species_capability_not_mass_formula, training_not_XP_or_enemy_scaling]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, stable_heavy_load_movement_when_authored]
  physical_hazards: [grapple, throw, strike, heavy_object_displacement]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [self_directed_strength_training, boulder_lifting, cross_species_training_with_Graveler]
  utility_interaction_capabilities: [move_heavy_objects_when_scene_geometry_and_object_integrity_allow, assist_with_leverage_or_rescue_if_voluntary]
  immunities_or_approach_invalidators: [human_size_does_not_imply_human_scale_strength]
  hazard_records:
    - hazard_key: machop-grapple-throw
      kind: other
      delivery_or_exposure: [close_range_grapple_lift_throw_or_heavy_strike]
      prerequisite_or_trigger: [hostile_or_training_contact_becomes_physically_committed]
      warning_signs: [grappling_stance, reaching_for_target_or_heavy_object, visible_training_display]
      immediate_effects: [restraint, position_loss, impact, fall_or_collision]
      delayed_or_persistent_effects: [fracture_or_other_P3_injury_if_context_supports]
      ordinary_consequence_ceiling: serious_injury_due_to_extreme_strength_even_from_small_body
      exceptional_consequence_ceiling: critical_or_lethal_only_under_D020_severe_throw_crush_or_environmental_context
      countermeasures: [maintain_distance, avoid_grapple_line, use_terrain_and_barriers, do_not_contest_lifting_strength_directly_without_reason]
      emergency_consumable_hooks: []
      context_amplifiers: [cliff_edge, heavy_loose_objects, narrow_space, vulnerable_companion]
      context_mitigators: [distance, open_escape_lane, obstacle, voluntary_training_context]
      governing_species_axes: [force, vigor]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [MCH-C1-001, MCH-D1-001]
  notes: [low_Speed_does_not_make_close_grapple_safe, training_behavior_does_not_raise_species_baseline_automatically]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: extraordinary_strength_has_greater_route_and_injury_consequence_in_premodern_infrastructure_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: self_training_sites_can_create_heavy_object_hazards_or_distinctive_local_history
  canon_boundary_note: no_generic_ancient_strength_bonus
ancient_ecology:
  habitat: [rocky_upland_boulder_field_or_quarrylike_natural_site_only_when_authored_D2, exact_ancient_range_unknown]
  ecological_niche: [small_humanoid_Fighting_Pokemon_with_self_training_behavior_exact_feeding_ecology_unknown]
  activity_pattern: [training_activity_supported, exact_daily_pattern_unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [moves_boulders_and_may_carry_Graveler_for_training_not_food]
  social_structure: [unknown]
  predator_prey_competitor_links: [Graveler_training_interaction_is_not_predation_or_ownership]
  environmental_effects: [moved_boulders_or_disturbed_training_ground_if_event_authors, no_generic_structure_destruction]
  observable_signs: [repeatedly_moved_stones, worn_training_ground, unusually_displaced_boulders]
  locality_constraints: [natural_presence_requires_suitable_space_and_authored_ecology]
  unsupported_gaps: [diet, group_structure, exact_habitat, training_frequency, relationship_to_Graveler]
human_perception_and_culture:
  ordinary_attitude: [surprise_at_strength_from_small_body, caution_about_close_contact_and_loose_heavy_objects]
  specialist_knowledge_holders: [miners_or_laborers_only_if_local_encounters_exist, hunters, route_guides]
  benefits_and_services: [heavy_object_or_rescue_assistance_only_if_individual_voluntarily_cooperates]
  fears_and_avoidance: [being_grabbed_thrown_or_crushed_by_moved_object]
  myths_omens_taboos: [strength_tests_or_boulder_legends_may_exist_only_if_locally_authored_D2]
  practical_customs: [do_not_measure_safety_by_body_size, keep_clear_of_training_object_paths]
  common_misbeliefs: [small_means_weak, training_means_level_system, repeated_training_can_be_farmed_for_stat_growth, Force_rating_is_a_kilogram_table]
  local_variation_notes: [communities_near_training_sites_may_know_safe_distance_and_moved_stone_patterns]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_humanoid_Pokemon_lifting_or_moving_objects_far_beyond_human_expectation]
  local_aliases_or_titles: none
  identification_evidence: [muscular_body, training_behavior, heavy_object_displacement]
  initial_knowledge_fragments: [body_size_badly_understates_strength]
  post_identification_knowledge: [self_directed_boulder_training_and_extreme_lifting]
  advanced_insights: [training_is_behavioral_history_not_visible_level_or_auto_scaling]
  exceptional_individual_knowledge_hooks: [Machop_known_for_a_specific_training_site_or_unusual_technique]
threat_and_encounter:
  baseline_threat_band: moderate_due_to_extreme_close_strength_despite_low_speed
  default_behavior_states: [training, carrying_object, resting, curious, wary, grappling, defending, withdrawing]
  aggression_tendency: unknown_to_contextual
  territoriality: unknown
  avoidance_tendency: moderate
  warning_signs: [lifting_object, grappling_stance, blocking_path, deliberate_approach]
  encounter_triggers: [crossing_training_ground, disturbing_boulder_or_partner, attempted_grapple_or_capture]
  escalation_triggers: [interfere_with_training, cornering, attack, threaten_training_partner_if_authored]
  deescalation_conditions: [leave_training_space, stop_competing_or_reaching, create_clear_path]
  pursuit_profile: limited_by_low_baseline_speed_but_close_contact_is_still_dangerous
  group_size_effects: [unknown_no_generic_training_group_bonus]
  ordinary_consequence_categories: [grapple, throw, impact, crush_or_fall_from_moved_object, route_obstruction]
  consequence_ceiling: serious_and_contextually_critical_under_D020
  human_check_hooks:
    - action: escape_or_avoid_a_Machop_grapple_near_heavy_objects
      relevant_species_axis: force
      relevant_tags: [extreme_strength, grapple, heavy_object_interaction]
      relevant_hazard_keys: [machop-grapple-throw]
      difficulty_guidance: D024_context_from_distance_leverage_terrain_object_mass_escape_lane_and_prior_warning
      notes: contesting_Force_does_not_define_exact_mass_or_damage
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [focused, curious, competitive, cautious, defensive]
    condition_variants: [training, fatigued, injured, carrying_load]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [long_training_history, unusual_terrain, survival_history, technique]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_training_history_or_technique_or_marking]
    warning_or_rumor_hooks: [Machop_that_moves_a_specific_boulder_no_other_local_individual_can_shift]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, safe_space_for_training_and_movement, no_forced_labor_or_containment]
  trust_building_paths: [respect_training_space, mutual_rescue, voluntary_shared_physical_task, repeated_noncoercive_contact]
  reasons_to_stay: [bond, access_to_safe_training_space, shared_travel_or_tasks]
  rejection_or_departure_reasons: [forced_work, abuse, treating_training_as_exploitation, chronic_confinement]
  human_social_costs: [heavy_object_damage_risk, food_and_space, fear_of_strength]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [ordinary_dry_shelter_exact_needs_unknown]
    space_travel: [requires_safe_space_for_strength_and_training]
    settlement_restrictions: [fragile_dense_spaces_may_limit_training_or_presence]
    special_resources: []
  assistance_capabilities: [heavy_object_movement, rescue_lifting, physical_training_context_only_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_labor, no_repeatable_stat_grind, visible_companion_slot_required]
  separation_injury_notes: [loss_of_training_space_or_partner_can_change_behavior_but_not_species_stats_automatically]
mechanical_hooks:
  tracking_clues: [moved_boulders, worn_training_ground, footprints_near_heavy_objects]
  avoidance_preparation: [avoid_loose_heavy_object_lines, maintain_distance, identify_training_area]
  resistance_or_protection: [terrain_and_barriers_over_direct_strength_contest]
  combat_approach_permissions: [range_and_positioning_before_close_grapple]
  blocked_or_invalid_approaches: [Force_as_mass_formula, training_as_XP, body_size_as_threat_cap, forced_labor_from_companion]
  fear_hooks: [small_figure_lifts_a_boulder_that_humans_cannot_move]
  injury_hazard_hooks: [machop-grapple-throw]
  environmental_state_hooks: [heavy_object_positions, cliff_edges, training_state, escape_lane]
  companion_assistance_hooks: [voluntary_heavy_lift_or_rescue]
  fortune_spike_opportunities: [moved_boulder_opens_a_route_without_combat]
  trouble_spike_complications: [training_object_rolls_or_falls_into_party_route]
hunting_materials_and_resources:
  killing_treatment: no_generic_muscle_material_or_training_drop
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: none
  taboo_or_protection: [none_required]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [strength_does_not_create_cranes_quarries_or_labor_institutions_without_authored_human_bridge]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_Machop_training_and_learn_safe_distance_from_moved_stones]
  dangerous: [party_is_caught_between_a_training_throw_and_a_cliff_or_fragile_route]
  unusual_or_rare: [Machop_repeatedly_carries_a_Graveler_as_part_of_an_unexplained_training_relationship]
  discovery_insight: [players_learn_self_training_exists_without_level_XP_or_enemy_scaling]
  route_environment: [boulder_field_changes_grapple_and_throw_consequences]
  settlement_culture: [locals_tell_strength_stories_without_claiming_ownership_or_work_crews]
  cross_species: [Graveler_training_interaction_is_behavior_not_domestication]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_muscular_Fighting_Pokemon_with_strength_far_beyond_human_scale_and_a_drive_to_train
  progressive_reveal_notes: [show_training_history_without_level_meter_or_stat_progress_bar]
  species_specific_visual_needs: [heavy_object_scale_and_training_state]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [heavy_object_permission_must_not_display_as_universal_mass_or_damage_number]
  p6_followup_required: true
cross_species_links:
  evolution_family: [machoke, machamp]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [graveler_only_if_locally_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [diet, exact_ancient_range, group_structure, training_frequency, exact_mass_limits, Graveler_relationship]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [heavy_object_interaction_context, training_history_event_state]
  deferred_to_p6: [heavy_object_scale_readability]
  deferred_to_p7: [persistent_training_history_without_level_system]
```
