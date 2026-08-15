# P4 Batch 14 — #028 Sandslash Full-Schema Dossier

Part of `docs/P4_BATCH_14_FULL_SCHEMA_DOSSIERS.md`.

---

## #028 Sandslash / 고지

```yaml
identity:
  national_dex: 28
  species_key: sandslash
  official_name_en: Sandslash
  official_name_ko: 고지
  evolution_family_keys: [sandshrew, sandslash]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SANDSLASH-SG, P4_BATCH_14_SOURCE_REVIEW]
  official_evidence:
    - claim_id: SLASH-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SANDSLASH-SG
      version_context: current_official_portal
      paraphrase: hardened_back_spines_and_sharp_claws_are_used_in_fast_attacks_and_curled_rolling_strikes
    - claim_id: SLASH-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SANDSLASH-SG
      version_context: historical_version_tagged
      paraphrase: broken_claws_or_spikes_regrow_quickly_yearly_spike_turnover_tree_climbing_dust_kicking_and_heat_protective_curl_are_described
  derived_claims:
    - claim_id: SLASH-D1-001
      evidence_class: D1
      based_on: [SLASH-C1-001, SLASH-C1-002]
      statement: spines_claws_rolling_climbing_and_regrowth_are_species_local_biology_and_behavior
      canon_boundary_note: not_equipment_not_automatic_harvest_not_unavoidable_collision_not_fixed_blindness_or_regeneration_formula
canonical_source_data:
  types: [ground]
  base_stats_raw: {hp: 75, attack: 100, defense: 110, special_attack: 45, special_defense: 55, speed: 65}
  abilities_relevant_to_p4: [sand_veil_as_modern_context, sand_rush_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [claw_spine_roll_and_burrow_families_as_capability_context]
  physical_metadata: {height: 1.0_m, weight: 29.5_kg}
  evolution_source:
    evolves_from: sandshrew
    evolves_to: []
    canonical_conditions: [modern_level_22_metadata_is_source_context_only]
  other_material_facts: [hardened_hide_spines, sharp_claws, curled_rolling_attack_or_escape, rapid_part_regrowth_version_context, annual_spike_turnover, tree_climbing_version_context, dust_storm_behavior]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 5
  guard: 5
  potency: 2
  resistance: 2
  speed: 3
  derivation_notes: {vigor: hp_75, force: attack_100, guard: defense_110, potency: special_attack_45, resistance: special_defense_55, speed: speed_65}
  calibration_flags: [no_manual_exception, Speed_not_literal_roll_velocity, regeneration_not_stat_recovery_formula]
capabilities_and_hazards:
  locomotion: [surface_running, species_local_burrowing, curled_rolling, version_scoped_tree_climbing]
  physical_hazards: [sharp_claw_slashes, hardened_spine_contact, curled_spine_roll_collision]
  elemental_environmental_hazards: [dust_cloud_generation_on_suitable_ground]
  anomalous_hazards: []
  behavioral_capabilities: [fast_close_attack, defensive_curl, rolling_attack_or_escape, climbing_drop_attack_version_context]
  utility_interaction_capabilities: [small_scale_excavation_in_suitable_substrate]
  immunities_or_approach_invalidators: [spines_make_unsafe_grappling_or_body_contact_contextually_invalid]
  hazard_records:
    - hazard_key: sandslash-spine-roll-and-dust
      kind: other
      delivery_or_exposure: [claw_or_spine_contact, curled_roll_path, loose_dust_kicked_by_fast_movement]
      prerequisite_or_trigger: [threatened, pursuing_or_escape_state, suitable_loose_ground]
      warning_signs: [body_curl, raised_spines, claw_brace, dust_lift]
      immediate_effects: [cut_or_puncture_injury, impact_or_repositioning, temporary_visual_pressure]
      delayed_or_persistent_effects: [bleeding_or_wound_state_only_if_P3_resolution_establishes_it]
      ordinary_consequence_ceiling: serious
      exceptional_consequence_ceiling: critical_in_compound_or_named_individual_context
      countermeasures: [distance, hard_cover, lateral_escape_from_roll_line, hard_or_wet_ground, avoid_grappling]
      emergency_consumable_hooks: []
      context_amplifiers: [narrow_route, steep_slope, loose_dry_ground, overhead_tree_position]
      context_mitigators: [open_space, hard_cover, wet_ground, early_warning]
      governing_species_axes: [force, guard, speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [SLASH-C1-001, SLASH-C1-002, SLASH-D1-001]
  notes: [Ground_type_does_not_grant_tree_climbing, broken_part_regrowth_is_biology_not_a_resource_loop]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: hardened_spines_claws_and_route_mobility_are_more_dangerous_where_humans_lack_modern_protection_and_infrastructure
  stat_effect_if_any: none
  behavior_effect_if_any: slopes_trees_and_loose_ground_can_make_authored_encounters_more_severe
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [dry_or_rough_ground_when_locally_authored_D2, exact_ancient_distribution_unknown]
  ecological_niche: [armored_burrower_and_mobile_terrestrial_predator_or_forager_role_unresolved]
  activity_pattern: [heat_avoidance_or_curling_version_context, otherwise_unknown]
  seasonal_notes: [annual_spike_turnover_exists_but_exact_season_unknown]
  feeding_and_resource_interaction: [exact_diet_not_bound_here]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [burrow_signs, claw_marks, disturbed_dust, naturally_shed_spikes_if_present]
  observable_signs: [deep_claw_scars, roll_tracks, fresh_dust_plume, shed_spike]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_regrowth_conditions, exact_annual_shedding_season, maximum_burrow_depth, tree_height_limits]
human_perception_and_culture:
  ordinary_attitude: [dangerous_when_cornered_or_charging]
  specialist_knowledge_holders: [hunters, route_scouts, herbalists_or_crafters_only_if_local_shed_material_use_is_authored]
  benefits_and_services: [none_required]
  fears_and_avoidance: [spine_roll, claw_wounds, dust_blinding, overhead_drop]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [do_not_grapple, step_off_roll_line, watch_tree_trunks_and_dust]
  common_misbeliefs: [spines_are_weapons_that_can_be_farmed_daily, regrowth_makes_injury_irrelevant, Ground_type_implies_all_climbing_or_burrowing]
  local_variation_notes: [limited_use_of_naturally_shed_material_requires_separate_local_authorship]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [spined_ball_silhouette, deep_claw_marks, dust_plume]
  local_aliases_or_titles: none
  identification_evidence: [hardened_spines, long_claws, roll_track, tree_claw_marks]
  initial_knowledge_fragments: [sharp_spines_and_claws, curls_and_rolls]
  post_identification_knowledge: [broken_parts_can_regrow_but_are_not_a_free_harvest_resource]
  advanced_insights: [annual_turnover_and_injury_regrowth_are_distinct_biological_contexts]
  exceptional_individual_knowledge_hooks: [old_sandslash_with_blackened_regrown_spines_and_known_cliffside_hunting_route]
threat_and_encounter:
  baseline_threat_band: moderate_to_high
  default_behavior_states: [burrowed, foraging, wary, defensive, rolling_escape, aggressive_charge]
  aggression_tendency: contextual_but_dangerous_when_escalated
  territoriality: locality_dependent
  avoidance_tendency: moderate
  warning_signs: [curling, spine_raise, claw_scrape, dust_lift]
  encounter_triggers: [burrow_intrusion, cornering, direct_attack, route_collision]
  escalation_triggers: [continued_pursuit, blocking_escape, close_grapple]
  deescalation_conditions: [restore_space, break_line_of_contact, leave_territory]
  pursuit_profile: short_to_moderate_contextual_pursuit
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [cut_or_puncture_injury, impact, temporary_visual_loss, fall_complication]
  consequence_ceiling: serious_normally_critical_in_compound_or_exceptional_context
  human_check_hooks:
    - action: evade_a_curled_spine_roll_on_a_constrained_route
      relevant_species_axis: speed
      relevant_tags: [curled_rolling, hardened_spine_contact]
      relevant_hazard_keys: [sandslash-spine-roll-and-dust]
      difficulty_guidance: D024_context_from_slope_width_cover_warning_and_surface
      notes: Speed_3_does_not_define_literal_roll_mph_or_unavoidable_contact
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [avoidant, territorial, bold, tree_using, burrow_focused]
    condition_variants: [recently_injured_claw, regrowing_spine, annual_turnover, exhausted, heat_stressed]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [age, repeated_regrowth, harsh_route_survival, specialized_climbing_behavior]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_spine_pattern_or_scars, known_route, unusual_behavior]
    warning_or_rumor_hooks: [ancient_sandslash_that_rolls_between_cliff_trees_and_has_repeatedly_regrown_broken_spines]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_long_term_voluntary_trust, safe_space_for_burrowing_and_spines, handler_understands_contact_hazard]
  trust_building_paths: [noncoercive_repeated_contact, injury_recovery, protection_of_burrow_or_young_if_authored]
  reasons_to_stay: [deep_bond, reliable_territory_and_resources]
  rejection_or_departure_reasons: [forced_restraint, spine_harvesting, coercive_combat_use, unsuitable_dense_settlement]
  human_social_costs: [spine_contact_risk, structural_or_field_disruption_from_burrowing]
  logistics:
    food: [species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [dry_shelter_and_heat_avoidance_access]
    space_travel: [cannot_assume_portable_storage_or_safe_mounting]
    settlement_restrictions: [close_quarters_and_children_or_livestock_raise_risk]
    special_resources: [none_fixed]
  assistance_capabilities: [small_excavation_or_route_pressure_only_when_voluntary_and_safe]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_spine_harvest_right, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_regrowth_does_not_remove_care_requirements]
mechanical_hooks:
  tracking_clues: [claw_scars, roll_tracks, dust, shed_spike]
  avoidance_preparation: [lateral_space, hard_cover, wet_or_hard_ground, overhead_awareness]
  resistance_or_protection: [puncture_resistant_layers_if_setting_appropriate, hard_cover]
  combat_approach_permissions: [attack_after_roll_line_commits_only_if_scene_state_supports]
  blocked_or_invalid_approaches: [grapple_without_hazard_resolution, farm_regrowing_parts, convert_roll_to_physics_damage_formula]
  fear_hooks: [spined_ball_accelerates_down_a_narrow_slope]
  injury_hazard_hooks: [deep_cuts, punctures, impact]
  environmental_state_hooks: [slope, trees, loose_dust, burrow_mouth]
  companion_assistance_hooks: [excavation_or_spine_deterrence_only_when_voluntary]
  fortune_spike_opportunities: [rain_suppresses_dust_and_softens_a_roll_path]
  trouble_spike_complications: [tree_position_turns_ground_scan_into_overhead_threat]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [naturally_shed_annual_spikes_if_found_in_context]
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [deliberate_breakage_or_live_harvesting_forbidden_as_default_resource_logic]
  taboo_or_protection: [local_D2_only]
  exact_notable_material_ids: [sandslash-naturally-shed-spike]
  generic_material_conversion_allowed: false
  conversion_conditions: [only_explicit_found_shed_material_with_provenance_and_local_ethics]
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [regrowth_and_shedding_do_not_create_a_weapon_or_armor_industry]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [find_a_naturally_shed_spike_near_an_old_burrow_without_seeing_the_sandslash]
  dangerous: [sandslash_rolls_down_a_confined_dry_slope_and_kicks_up_dust]
  unusual_or_rare: [scarred_exceptional_sandslash_uses_tree_trunks_as_drop_attack_positions]
  discovery_insight: [regrowth_is_biology_not_an_infinite_harvest_loop]
  route_environment: [roll_line_slope_cover_and_surface_define_counterplay]
  settlement_culture: [local_people_may_value_found_shed_spikes_but_do_not_own_or_farm_the_species_by_default]
  cross_species: [Sandshrew_defensive_curl_is_related_but_does_not_inherit_Sandslash_spine_hazards]
presentation_and_p6_followups:
  initial_bestiary_presentation: armored_spined_burrower_with_dangerous_claws_and_a_curled_rolling_attack_or_escape
  progressive_reveal_notes: [show_regrowing_or_shed_spines_as_biological_state_not_loot_marker]
  species_specific_visual_needs: [spine_raise, curl_roll_telegraph, dust_plume, tree_claw_marks]
  species_specific_audio_needs: [claw_scrape, spine_rattle, rolling_stone_like_thud, dust_rush]
  special_ui_or_readability_needs: [roll_line_and_overhead_threat_readability, no_loot_glow_on_spines]
  p6_followup_required: true
cross_species_links:
  evolution_family: [sandshrew]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_regrowth_conditions, exact_annual_turnover_season, burrow_depth, climbing_limits]
  contradictions: [annual_spike_turnover_and_rapid_broken_part_regrowth_are_distinct_contexts_not_a_required_conflict]
  human_design_gates: []
  deferred_to_p5: [roll_line_dust_and_regrowth_state_events]
  deferred_to_p6: [spine_material_and_roll_telegraph_assets]
  deferred_to_p7: [runtime_burrow_or_climb_representation_if_required]
```
