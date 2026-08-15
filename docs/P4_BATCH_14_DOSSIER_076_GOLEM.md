# P4 Batch 14 — #076 Golem Full-Schema Dossier

Part of `docs/P4_BATCH_14_FULL_SCHEMA_DOSSIERS.md`.

---

## #076 Golem / 딱구리

```yaml
identity:
  national_dex: 76
  species_key: golem
  official_name_en: Golem
  official_name_ko: 딱구리
  evolution_family_keys: [geodude, graveler, golem]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-GOLEM-SG, P4_BATCH_14_SOURCE_REVIEW]
  official_evidence:
    - claim_id: GOL-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-GOLEM-SG
      version_context: current_official_portal
      paraphrase: rugged_rocklike_shell_is_shed_about_once_per_year_and_crumbling_shed_shell_can_improve_field_soil
    - claim_id: GOL-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-GOLEM-SG
      version_context: current_and_historical_version_tagged
      paraphrase: deliberately_self_explodes_to_jump_between_mountains_with_other_entries_describing_post_shed_tenderness_dynamite_resistance_downhill_group_hazards_and_human_diversion_grooves
  derived_claims:
    - claim_id: GOL-D1-001
      evidence_class: D1
      based_on: [GOL-C1-001, GOL-C1-002]
      statement: shed_shell_is_a_nonlethal_material_path_and_self_explosion_is_an_extraordinary_species_hazard
      canon_boundary_note: no_auto_loot_no_universal_fertilizer_economy_no_real_world_blast_math_no_dynamite_technology_import
canonical_source_data:
  types: [rock, ground]
  base_stats_raw: {hp: 80, attack: 120, defense: 130, special_attack: 55, special_defense: 65, speed: 45}
  abilities_relevant_to_p4: [rock_head_as_modern_context, sturdy_as_modern_context, sand_veil_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [self_explosive_and_rolling_context]
  physical_metadata: {height: 1.4_m, weight: 300.0_kg}
  evolution_source:
    evolves_from: graveler
    evolves_to: []
    canonical_conditions: [modern_trade_evolution_metadata_is_source_context_only]
  other_material_facts: [rugged_shell, annual_shedding, crop_helping_shed_shell_soil, self_explosive_mountain_movement, post_shed_tender_state_version_context, dynamite_resistance_version_context, downhill_group_hazard_version_context, human_diversion_groove_version_context]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 6
  guard: 6
  potency: 2
  resistance: 3
  speed: 2
  derivation_notes: {vigor: hp_80, force: attack_120, guard: defense_130, potency: special_attack_55, resistance: special_defense_65, speed: speed_45}
  calibration_flags: [no_manual_exception, Force_not_blast_yield, Guard_not_dynamite_or_universal_immunity, Speed_not_explosive_jump_velocity]
capabilities_and_hazards:
  locomotion: [heavy_ground_movement, rolling_contextual, source_backed_self_explosive_jump_between_mountain_positions]
  physical_hazards: [massive_body_impact, rolling_collision, falling_or_landing_pressure]
  elemental_environmental_hazards: [self_explosive_blast_like_event_pressure_without_real_world_yield]
  anomalous_hazards: []
  behavioral_capabilities: [annual_shell_shedding, self_explosive_repositioning, downhill_group_movement_version_context]
  utility_interaction_capabilities: [shed_shell_can_become_crop_helping_soil_if_collected_after_natural_shedding]
  immunities_or_approach_invalidators: [close_presence_during_an_earned_self_explosion_warning_can_be_an_invalid_approach_without_cover_or_escape]
  hazard_records:
    - hazard_key: golem-self-explosive-reposition
      kind: other
      delivery_or_exposure: [self_explosive_blast_like_event, debris_or_ground_pressure_if_authored, heavy_landing]
      prerequisite_or_trigger: [self_repositioning_behavior, escalated_encounter, authored_event_state]
      warning_signs: [body_brace, local_rumble_or_shell_motion, behavior_pattern, local_knowledge]
      immediate_effects: [severe_blast_like_pressure, forced_cover_or_escape, heavy_landing_hazard]
      delayed_or_persistent_effects: [terrain_or_fire_effects_only_if_explicitly_authored_and_not_inferred_from_real_world_explosives]
      ordinary_consequence_ceiling: critical
      exceptional_consequence_ceiling: lethal_under_P3_when_scene_evidence_supports
      countermeasures: [distance, hard_cover, leave_predicted_line_or_landing_zone, heed_local_warning_signs]
      emergency_consumable_hooks: []
      context_amplifiers: [confined_pass, cliff_edge, group_roll, unstable_ground]
      context_mitigators: [large_hard_cover, open_escape_space, known_diversion_earthworks]
      governing_species_axes: [force, guard]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [GOL-C1-002, GOL-D1-001]
  notes: [self_explosion_does_not_create_TNT_equivalence, dynamite_wording_does_not_establish_ancient_dynamite, annual_shed_shell_not_encounter_drop]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: extreme_mass_and_self_explosive_movement_are_more_dangerous_around_unreinforced_routes_and_settlements
  stat_effect_if_any: none
  behavior_effect_if_any: local_diversion_earthworks_and_known_movement_routes_can_materially_change_risk
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [mountainous_and_rocky_regions, exact_ancient_distribution_unknown]
  ecological_niche: [massive_lithic_bodied_mountain_dweller_and_route_hazard]
  activity_pattern: [unknown_beyond_source_behaviors]
  seasonal_notes: [annual_shedding_exists_exact_season_unknown]
  feeding_and_resource_interaction: [exact_diet_not_bound_here]
  social_structure: [downhill_group_behavior_version_context_not_a_default_pack_rule]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [shed_shell_fragments, heavy_tracks, possible_known_roll_or_jump_routes]
  observable_signs: [large_rocklike_shell_fragments, deep_tracks, damaged_or_diverted_ground_only_when_authored]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_shedding_season, blast_physics, jump_distance, universal_post_shed_duration]
human_perception_and_culture:
  ordinary_attitude: [strong_avoidance_and_respect]
  specialist_knowledge_holders: [mountain_guides, farmers_who_know_shed_shell_soil, earthwork_builders]
  benefits_and_services: [naturally_shed_shell_can_support_rare_local_field_use]
  fears_and_avoidance: [self_explosion, downhill_mass, heavy_collision]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [leave_known_routes_clear, use_simple_diversion_grooves_where_locally_feasible, collect_only_abandoned_shed_shell]
  common_misbeliefs: [killing_Golem_is_required_for_shell_material, every_Golem_drops_fertilizer, Force_6_gives_blast_yield, dynamite_wording_proves_dynamite_exists]
  local_variation_notes: [source_backed_human_diversion_works_are_possible_but_not_setting_wide_infrastructure]
identification_and_knowledge:
  baseline_recognition: specialist
  unknown_presentation_hooks: [massive_round_rocklike_form, unusually_light_or_tender_post_shed_appearance_if_seen]
  local_aliases_or_titles: none
  identification_evidence: [body_scale, shell_pattern, shed_fragments, known_route]
  initial_knowledge_fragments: [very_heavy_rocklike_body, can_self_explode_to_move]
  post_identification_knowledge: [annual_shell_shedding_is_nonlethal_material_source]
  advanced_insights: [diversion_earthworks_and_warning_routes_manage_risk_without_taming_or_owning_Golem]
  exceptional_individual_knowledge_hooks: [old_Golem_whose_shed_shell_marks_a_long_known_mountain_cycle]
threat_and_encounter:
  baseline_threat_band: severe
  default_behavior_states: [resting, moving, rolling, shedding_cycle, escalated_self_reposition]
  aggression_tendency: contextual_but_consequences_high
  territoriality: locality_dependent
  avoidance_tendency: moderate
  warning_signs: [rumble, route_signs, body_brace, local_warning_markers]
  encounter_triggers: [route_crossing, provocation, group_descent_if_authored]
  escalation_triggers: [continued_attack, confinement, blocked_route]
  deescalation_conditions: [leave_route, give_space, use_known_diversion_path]
  pursuit_profile: movement_pattern_contextual_not_generic_chase
  group_size_effects: [multiple_Golem_are_an_authored_catastrophic_route_state_not_a_numeric_multiplier]
  ordinary_consequence_categories: [critical_impact_or_blast_like_injury, fall, route_destruction_only_if_authored]
  consequence_ceiling: critical_to_lethal
  human_check_hooks:
    - action: reach_hard_cover_or_leave_a_known_landing_zone_before_Golem_self_repositions
      relevant_species_axis: force
      relevant_tags: [self_explosive_repositioning, heavy_landing]
      relevant_hazard_keys: [golem-self-explosive-reposition]
      difficulty_guidance: D024_context_from_warning_cover_distance_route_knowledge_and_terrain
      notes: Force_6_and_Guard_6_do_not_define_explosive_energy_or_absolute_survival
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [placid, territorial, route_habituated, easily_provoked]
    condition_variants: [pre_shed, post_shed_tender, recovered_shell, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [great_age, repeated_mountain_survival, unusual_shell_cycle, long_local_history]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [distinctive_shell_pattern, known_route_or_shed_site, persistent_reputation]
    warning_or_rumor_hooks: [ancient_Golem_whose_annual_shell_is_found_beside_the_same_high_field]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [extremely_rare_voluntary_trust, large_safe_territory, community_acceptance, no_material_exploitation]
  trust_building_paths: [long_term_noncoercive_contact, repeated_safe_coexistence, protection_during_vulnerable_post_shed_state]
  reasons_to_stay: [deep_bond, stable_territory]
  rejection_or_departure_reasons: [forced_restraint, shell_harvesting, use_as_explosive_or_heavy_tool]
  human_social_costs: [enormous_mass, route_and_structure_risk, settlement_space]
  logistics:
    food: [species_appropriate_supply_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [large_rocky_rest_space]
    space_travel: [portable_storage_forbidden, conventional_transport_impractical]
    settlement_restrictions: [dense_settlement_often_incompatible]
    special_resources: [none_fixed]
  assistance_capabilities: [none_required_beyond_rare_voluntary_scene_specific_strength]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_explosive_transport_service, one_visible_companion_slot]
  separation_injury_notes: [post_shed_state_may_require_special_care_if_authored]
mechanical_hooks:
  tracking_clues: [shed_shell, deep_tracks, route_markers, rumble]
  avoidance_preparation: [hard_cover, route_knowledge, diversion_earthworks]
  resistance_or_protection: [large_hard_cover, distance]
  combat_approach_permissions: [exploit_post_shed_vulnerability_only_if_source_state_is_present_and_ethically_authored]
  blocked_or_invalid_approaches: [TNT_math, automatic_loot, universal_fertilizer_trade, assume_dynamite_technology]
  fear_hooks: [mountain_rumble_is_Golem_preparing_to_launch]
  injury_hazard_hooks: [blast_like_pressure, crushing_impact, fall]
  environmental_state_hooks: [cover, slope, landing_zone, diversion_groove]
  companion_assistance_hooks: [rare_scene_specific_heavy_interaction]
  fortune_spike_opportunities: [old_diversion_groove_redirects_a_roll_line]
  trouble_spike_complications: [post_shed_material_draws_people_into_a_known_hazard_route]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_nonlethal_shed_path_preferred
  hunting_for_food: none
  shed_or_abandoned_materials: [annual_rocklike_shell_fragments_that_crumble_into_crop_helping_soil]
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [approaching_active_or_vulnerable_Golem_for_material_is_not_default_safe_or_ethical]
  taboo_or_protection: [local_D2_only]
  exact_notable_material_ids: [golem-naturally-shed-shell-soil]
  generic_material_conversion_allowed: false
  conversion_conditions: [only_explicit_naturally_shed_abandoned_material_with_local_provenance]
technology_and_craft:
  hook: present
  enabling_evidence: [crop_helping_shed_shell_soil, version_scoped_human_diversion_grooves]
  human_craft_bridge: [local_hand_dug_diversion_earthworks_and_small_scale_field_application_are_chronology_compatible_when_separately_authored]
  narrow_domain: mountain_hazard_diversion_and_local_soil_amendment
  local_dependency: [known_Golem_route, local_labor, naturally_shed_material]
  scalability_limits: [no_industrial_blasting, no_normalized_Golem_farming, no_automatic_fertilizer_economy]
  ownership_shortcut_forbidden: true
  evidence_class: D2
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [find_last_years_crumbling_shell_far_from_the_Golem_and_decide_whether_a_village_may_collect_it]
  dangerous: [Golem_prepares_a_self_explosive_jump_across_a_mountain_pass]
  unusual_or_rare: [post_shed_Golem_is_temporarily_tender_and_a_settlement_must_choose_protection_over_exploitation]
  discovery_insight: [shed_shell_is_nonlethal_resource_path_while_self_explosion_is_not_real_world_blast_math]
  route_environment: [old_diversion_grooves_show_people_can_adapt_to_Golem_without_taming_it]
  settlement_culture: [field_use_of_found_shell_can_be_rare_local_custom]
  cross_species: [Graveler_rolling_ecology_does_not_imply_Golem_self_explosion_and_Geodude_rocklike_body_does_not_imply_shedding]
presentation_and_p6_followups:
  initial_bestiary_presentation: massive_rock_shelled_mountain_creature_that_sheds_annually_and_can_self_explode_to_reposition
  progressive_reveal_notes: [separate_shed_material_from_combat_loot_and_source_fiction_from_physics]
  species_specific_visual_needs: [shell_cycle_states, self_launch_telegraph, abandoned_shell_fragments, diversion_grooves]
  species_specific_audio_needs: [deep_shell_grind, warning_rumble, blast_like_boom_without_technology_semantics]
  special_ui_or_readability_needs: [no_TNT_value, no_loot_marker, clear_landing_zone]
  p6_followup_required: true
cross_species_links:
  evolution_family: [geodude, graveler]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: [large_boulder_at_distance]
  shared_habitat: []
  cultural_or_material_dependencies: [local_field_use_of_naturally_shed_shell]
open_questions_and_gates:
  unresolved_sources: [exact_shed_season, post_shed_duration, blast_and_jump_geometry, ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [self_explosive_event_and_shed_material_state]
  deferred_to_p6: [shell_cycle_and_hazard_telegraph_assets]
  deferred_to_p7: [runtime_large_body_route_representation_if_required]
```
