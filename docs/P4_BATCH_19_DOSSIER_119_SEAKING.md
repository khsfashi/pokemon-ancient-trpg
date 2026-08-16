# P4 Batch 19 — #119 Seaking Full-Schema Dossier

Part of `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`.

---

## #119 Seaking / 왕콘치

```yaml
identity:
  national_dex: 119
  species_key: seaking
  official_name_en: Seaking
  official_name_ko: 왕콘치
  evolution_family_keys: [goldeen, seaking]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SEAKING-SG, P4_BATCH_19_SOURCE_REVIEW]
  official_evidence:
  - claim_id: SEK-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-SEAKING-SG
    version_context: current_official_portal__AUTUMN_MATING_BOULDER_NEST_AND_EGG_PROTECTION
    paraphrase: autumn_mating_preparation_increases_body_fat_and_color_while_Seaking_uses_its_horn_to_bore_into_riverbed_boulders_and_make_nests_that_protect_eggs_from_current
  - claim_id: SEK-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__UPSTREAM_MIGRATION_COURTSHIP_PARENTAL_GUARDING_AND_SEVERE_NEST_DEFENSE
    paraphrase: historical_entries_add_powerful_autumn_upstream_migration_courtship_behavior_seasonal_aggregation_male_or_biparental_egg_guarding_and_severe_horn_defense_near_family
  derived_claims:
  - claim_id: SEK-D1-001
    evidence_class: D1
    based_on: [SEK-C1-001, SEK-C1-002]
    statement: Seaking_is_a_strongly_seasonal_river_spawner_with_localized_boulder_nest_construction_and_contextual_family_defense
    canon_boundary_note: no_continuous_breeding_population_simulation_or_guaranteed_hostility
  - claim_id: SEK-D1-002
    evidence_class: D1
    based_on: [SEK-C1-001]
    statement: horn_boring_is_a_localized_nest_construction_capability
    canon_boundary_note: no_generic_mining_arbitrary_terrain_deletion_or_construction_infrastructure
  - claim_id: SEK-D1-003
    evidence_class: D1
    based_on: [SEK-C1-002]
    statement: long_guarding_period_and_parental_defense_are_contextual_ecology
    canon_boundary_note: no_real_time_scheduler_no_retreat_rule_or_automatic_combat
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 80, attack: 92, defense: 65, special_attack: 65, special_defense: 80, speed: 68}
  abilities_relevant_to_p4: [swift_swim_as_modern_context, water_veil_as_modern_context, lightning_rod_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.3_m, weight: 39.0_kg}
  evolution_source:
    evolves_from: goldeen
    evolves_to: []
    canonical_conditions: [modern_level_33_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [autumn_spawning_ecology, seasonal_color_and_body_fat_change, horn_bored_boulder_nests, egg_current_protection, upstream_migration, courtship_dance, parental_guarding, severe_family_defense]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 4
  guard: 3
  potency: 3
  resistance: 4
  speed: 3
  derivation_notes: {vigor: hp_80, force: attack_92, guard: defense_65, potency: special_attack_65, resistance: special_defense_80, speed: speed_68}
  calibration_flags: [no_manual_exception, horn_boring_not_generic_mining, seasonal_behavior_not_real_time_scheduler, parental_defense_not_permanent_aggression]
capabilities_and_hazards:
  locomotion: [strong_river_swimming, powerful_upstream_migration_context]
  physical_hazards: [large_horn_ram_or_stab, localized_horn_boring_into_suitable_boulder_nest_sites]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [seasonal_courtship, nest_construction, egg_or_offspring_guarding]
  utility_interaction_capabilities: [can_create_a_local_nest_cavity_in_suitable_riverbed_boulder_when_contextual]
  immunities_or_approach_invalidators: [nest_defense_does_not_remove_retreat_observation_or_nonviolent_resolution]
  hazard_records:
  - hazard_key: seaking-horn-defense
    kind: other
    delivery_or_exposure: [close_range_horn_charge_stab_or_defensive_collision]
    prerequisite_or_trigger: [Seaking_defends_itself_its_mate_eggs_or_nest_or_is_cornered]
    warning_signs: [horn_alignment, patrolling, nest_positioning, color_or_behavioral_intensity, repeated_warning_passes]
    immediate_effects: [puncture_or_blunt_injury_and_position_loss]
    delayed_or_persistent_effects: [ordinary_wound_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_near_a_defended_nest_or_in_confined_water
    countermeasures: [withdraw_from_nest, leave_charge_line, use_distance_or_cover, do_not_block_retreat_or_guard_path]
    emergency_consumable_hooks: []
    context_amplifiers: [defended_eggs, narrow_channel, poor_visibility, repeated_intrusion]
    context_mitigators: [distance, clear_retreat, observation_from_bank, leaving_the_nest_area]
    governing_species_axes: [force]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SEK-C1-002, SEK-D1-001, SEK-D1-003]
  - hazard_key: seaking-boulder-nest-interaction
    kind: other
    delivery_or_exposure: [localized_horn_boring_displaces_stone_fragments_or_changes_small_nest_geometry]
    prerequisite_or_trigger: [suitable_riverbed_boulder_and_active_nest_construction]
    warning_signs: [repeated_horn_contact, stone_debris, occupied_nest_site, seasonal_activity]
    immediate_effects: [local_debris_or_small_geometry_change]
    delayed_or_persistent_effects: [nest_cavity_remains_as_authored_environmental_state]
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_only_if_fragments_or_water_geometry_create_a_specific_hazard
    countermeasures: [keep_distance_from_active_boring, use_bank_route, wait_or_go_around]
    emergency_consumable_hooks: []
    context_amplifiers: [unstable_stones, confined_water, crowded_nest_site]
    context_mitigators: [stable_bank, clear_observation, inactive_site]
    governing_species_axes: [force]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SEK-C1-001, SEK-D1-002]
  notes: [nest_construction_is_localized_and_event_scoped, no_arbitrary_map_edit_mining_or_continuous_population_simulation]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: seasonal_river_crossings_and_critical_nest_sites_can_make_ordinary_Seaking_more_consequential_in_a_preindustrial_setting_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: explicit_nest_or_spawning_context_can_raise_defensive_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [rivers_and_upstream_spawning_routes, riverbed_boulder_nest_sites_when_authored]
  ecological_niche: [large_river_spawner_with_localized_nest_construction_and_parental_guarding]
  activity_pattern: [ordinary_swimming, seasonal_upstream_migration, courtship_and_guarding_when_contextual]
  seasonal_notes: [autumn_mating_preparation_strongly_source_backed_but_exact_proto_kanto_calendar_may_be_authored_coarsely]
  feeding_and_resource_interaction: [exact_food_web_unknown]
  social_structure: [seasonal_aggregation_and_parental_guarding_contextual, ordinary_structure_unknown]
  predator_prey_competitor_links: [nest_predation_pressure_may_exist_locally_but_exact_species_links_require_authoring]
  environmental_effects: [localized_boulder_nest_cavities, visible_seasonal_aggregation]
  observable_signs: [fresh_boulder_holes, stone_debris, patrolling_parent, autumn_color_intensity, upstream_schooling]
  locality_constraints: [seasonal_spawning_does_not_mean_presence_only_during_one_real_world_calendar_window]
  unsupported_gaps: [exact_boulder_hardness_or_excavation_rate, nest_dimensions_and_reuse, guarding_duration_frequency, proto_kanto_spawning_calendar_and_abundance]
human_perception_and_culture:
  ordinary_attitude: [moderate_caution_higher_near_known_spawning_or_nest_sites]
  specialist_knowledge_holders: [fishers, river_watchers, ford_keepers, seasonal_foragers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [horn_defense, blocked_fords_or_narrow_channels_during_spawning, stone_debris_near_active_nest]
  myths_omens_taboos: [seasonal_red_river_or_courtship_sightings_may_generate_local_stories_without_region_wide_institutions]
  practical_customs: [mark_active_nest_sites, avoid_crossing_between_parent_and_nest, use_alternate_ford_during_peak_activity]
  common_misbeliefs: [Seaking_can_drill_any_rock, every_nest_is_immediately_hostile, month_long_guarding_requires_exact_real_time_tracking]
  local_variation_notes: [mate_or_courtship_wording_does_not_create_human_marriage_or_proposal_institutions]
identification_and_knowledge:
  baseline_recognition: common
  unknown_presentation_hooks: [fresh_round_holes_appear_in_riverbed_boulders_before_the_patrolling_parent_is_seen]
  local_aliases_or_titles: none
  identification_evidence: [large_horn, seasonal_color, upstream_movement, boulder_nest_cavity, guarding_route]
  initial_knowledge_fragments: [avoid_the_space_between_guard_and_nest, horn_boring_is_localized]
  post_identification_knowledge: [seasonal_behavior_is_contextual_not_permanent_aggression]
  advanced_insights: [old_nest_sites_and_patrol_routes_can_reveal_safe_bypass_timing_or_paths]
  exceptional_individual_knowledge_hooks: [one_old_Seaking_reuses_a_distinctive_boulder_nest_and_patrols_a_longer_route]
threat_and_encounter:
  baseline_threat_band: moderate_normally_high_near_a_defended_nest_or_confined_channel
  default_behavior_states: [swimming, migrating, courtship, nest_boring, guarding, warning_patrol, horn_defense, retreating]
  aggression_tendency: low_to_moderate_normally_high_only_in_explicit_family_defense_context
  territoriality: contextual_around_nest_or_eggs
  avoidance_tendency: moderate_outside_guarding_context
  warning_signs: [patrol_passes, horn_alignment, occupied_nest, seasonal_aggregation, abrupt_turn]
  encounter_triggers: [shared_river_route, nest_site_overlap, close_approach_to_eggs, blocked_migration]
  escalation_triggers: [entering_guarded_space_after_warning, attacking, touching_nest_or_eggs, cornering]
  deescalation_conditions: [withdraw_from_nest, move_to_bank, stop_pursuit, leave_guard_path_clear]
  pursuit_profile: contextual_and_event_bounded_not_guaranteed
  group_size_effects: [seasonal_aggregation_can_raise_route_complexity_but_each_Seaking_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [puncture_or_blunt_injury, route_denial, water_position_loss, local_debris]
  consequence_ceiling: severe_when_guarded_nest_or_confined_water_is_explicit
  human_check_hooks:
  - action: pass_a_Seaking_nest_without_triggering_horn_defense
    relevant_species_axis: force
    relevant_tags: [horn, nest_defense, aquatic]
    relevant_hazard_keys: [seaking-horn-defense]
    difficulty_guidance: D024_context_from_distance_guard_path_nest_visibility_and_alternate_routes
    notes: observation_retreat_and_nonviolent_resolution_remain_available_when_fiction_allows
  - action: move_safely_near_active_boulder_nest_construction
    relevant_species_axis: none
    relevant_tags: [terrain_interaction, nest]
    relevant_hazard_keys: [seaking-boulder-nest-interaction]
    difficulty_guidance: D024_context_from_debris_stability_bank_access_and_activity_state
    notes: horn_boring_never_grants_generic_mining_or_arbitrary_terrain_edit_permission
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [calm, wary, courtship_focused, strongly_parental]
    condition_variants: [migrating, spawning, guarding, exhausted, injured]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_size, repeated_long_migration, exceptional_horn_wear_or_injury_adaptation, long_nest_history]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [horn_or_color_tell, known_nest_or_patrol_route, history]
    warning_or_rumor_hooks: [one_Seaking_has_reused_the_same_boulder_nest_for_many_seasons_and_drives_off_large_predators]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [voluntary_trust, reliable_water_access, handler_respects_seasonal_nesting_and_independence]
  trust_building_paths: [noncoercive_repeat_contact, rescue_without_capture, respecting_nest_or_migration, safe_distance]
  reasons_to_stay: [exceptional_bond, reliable_water_route_and_mutual_history]
  rejection_or_departure_reasons: [forced_labor_or_mining, interference_with_spawning_or_nest, coercive_combat, denied_water]
  human_social_costs: [large_water_space_horn_safety_and_seasonal_behavior_burden]
  logistics:
    food: [regular_species_appropriate_food]
    water: [reliable_large_swimming_area]
    shelter_temperature: [safe_aquatic_shelter]
    space_travel: [waterway_access_or_explicit_safe_transfer_required]
    settlement_restrictions: [horn_and_nest_behavior_require_space_and_public_safety_planning]
    special_resources: [none_fixed]
  assistance_capabilities: [bounded_water_scouting_or_local_horn_force_only_when_voluntary_safe_and_explicit]
  handling_boundaries: [no_defeat_to_recruit, no_forced_mining_excavation_or_mount_role, no_automatic_nest_abandonment_for_party_travel, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_seasonal_nest_behavior_may_require_departure_or_local_stay]
mechanical_hooks:
  tracking_clues: [boulder_nest_holes, stone_debris, patrol_routes, seasonal_color_and_upstream_aggregation]
  avoidance_preparation: [use_bank_observation, identify_nest_and_guard_path, choose_alternate_ford]
  resistance_or_protection: [distance, cover_outside_charge_line, safe_bank]
  combat_approach_permissions: [contextual_nest_defense, horn_charge, localized_nest_boring]
  blocked_or_invalid_approaches: [generic_mining, arbitrary_terrain_deletion, permanent_hostility, real_time_month_guard_scheduler, continuous_breeding_or_population_simulation]
  fear_hooks: [the_only_ford_runs_between_a_patrolling_Seaking_and_freshly_cut_boulder_nest]
  injury_hazard_hooks: [seaking-horn-defense, seaking-boulder-nest-interaction]
  environmental_state_hooks: [river_current, nest_site, nest_season, guarding, courtship, safe_bank]
  companion_assistance_hooks: [voluntary_water_scouting_or_local_force]
  fortune_spike_opportunities: [recognize_an_old_inactive_nest_as_a_safe_bypass]
  trouble_spike_complications: [the_route_is_safe_only_if_the_party_does_not_cross_between_guard_and_eggs]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [horn_or_body_is_not_a_repeatable_live_resource_node]
  taboo_or_protection: [local_D2_only_if_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [horn_boring_does_not_create_mining_quarrying_construction_or_terrain_edit_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_parental_guarding_from_a_safe_bank_without_entering_the_nest_space]
  dangerous: [reach_an_upstream_crossing_while_a_Seaking_patrols_fresh_eggs]
  unusual_or_rare: [an_exceptional_Seaking_reuses_a_historic_boulder_nest_and_has_a_known_patrol_route]
  discovery_insight: [learn_that_horn_boring_is_nest_behavior_not_a_mining_permission]
  route_environment: [riverbed_boulder_field, autumn_spawning_channel, guarded_nest_ford]
  settlement_culture: [local_river_watchers_reroute_travel_around_active_nests_without_claiming_control_over_the_species]
  cross_species: [Goldeen_migration_can_foreshadow_Seaking_spawning_activity]
presentation_and_p6_followups:
  initial_bestiary_presentation: fresh_boulder_nest_patrol_and_seasonal_color_before_any_mining_like_interpretation
  progressive_reveal_notes: [show_courtship_guarding_and_local_boring_as_contextual_states]
  species_specific_visual_needs: [nest_cavity_horn_alignment_guard_path_and_seasonal_color]
  species_specific_audio_needs: [horn_on_stone, river_patrol_splash, warning_water_motion]
  special_ui_or_readability_needs: [nest_boundary_guard_path_and_safe_retreat_must_be_clear_without_hostility_meter]
  p6_followup_required: true
cross_species_links:
  evolution_family: [goldeen]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [goldeen_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_boulder_hardness_or_excavation_rate, nest_dimensions_and_reuse, guarding_duration_frequency, exact_proto_kanto_spawning_calendar_and_abundance]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [nest_defense_horn_contact_and_seasonal_route_resolution]
  deferred_to_p6: [nest_boundary_patrol_horn_and_seasonal_state_readability]
  deferred_to_p7: [cached_river_current_nest_site_nest_season_and_guarding_state_if_runtime_needs_it]
```
