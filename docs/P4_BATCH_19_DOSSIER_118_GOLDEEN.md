# P4 Batch 19 — #118 Goldeen Full-Schema Dossier

Part of `docs/P4_BATCH_19_FULL_SCHEMA_DOSSIERS.md`.

---

## #118 Goldeen / 콘치

```yaml
identity:
  national_dex: 118
  species_key: goldeen
  official_name_en: Goldeen
  official_name_ko: 콘치
  evolution_family_keys: [goldeen, seaking]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-GOLDEEN-SG, P4_BATCH_19_SOURCE_REVIEW]
  official_evidence:
  - claim_id: GOL-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-GOLDEEN-SG
    version_context: current_official_portal__DEVELOPED_FINS_WATER_DANCER_REPUTATION_AND_MEASURED_SWIM_SPEED
    paraphrase: Goldeen_has_strongly_developed_fins_moves_elegantly_enough_for_the_Water_Dancer_reputation_and_current_material_gives_a_five_knot_swim_claim
  - claim_id: GOL-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__HORN_RAMMING_SPAWNING_MIGRATION_FAST_STREAM_ENDURANCE_AND_EXTRAORDINARY_GLASS_BREAKING
    paraphrase: historical_entries_add_horn_counterattacks_spring_or_spawning_migration_up_rivers_and_waterfalls_nonstop_fast_stream_wording_and_an_extraordinary_aquarium_glass_breaking_claim
  derived_claims:
  - claim_id: GOL-D1-001
    evidence_class: D1
    based_on: [GOL-C1-001, GOL-C1-002]
    statement: Goldeen_is_a_strong_elegant_swimmer_with_meaningful_horn_impact_and_seasonal_migration_potential
    canon_boundary_note: five_knots_is_not_turn_distance_initiative_world_travel_or_infinite_stamina
  - claim_id: GOL-D1-002
    evidence_class: D1
    based_on: [GOL-C1-002]
    statement: horn_impact_can_be_serious_in_a_specific_contact_scene
    canon_boundary_note: no_universal_glass_material_or_terrain_destruction
  - claim_id: GOL-D1-003
    evidence_class: D1
    based_on: [GOL-C1-001]
    statement: Water_Dancer_and_Water_Queen_wording_are_analogy_or_reputation
    canon_boundary_note: no_human_profession_title_caste_or_institution_is_implied
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 45, attack: 67, defense: 60, special_attack: 35, special_defense: 50, speed: 63}
  abilities_relevant_to_p4: [swift_swim_as_modern_context, water_veil_as_modern_context, lightning_rod_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 0.6_m, weight: 15.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [seaking]
    canonical_conditions: [modern_level_33_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [developed_fins, five_knot_swimming, Water_Dancer_reputation, historical_Water_Queen_reputation, horn_ramming, spawning_migration, version_scoped_fast_stream_endurance_and_glass_breaking]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 3
  guard: 3
  potency: 1
  resistance: 2
  speed: 3
  derivation_notes: {vigor: hp_45, force: attack_67, guard: defense_60, potency: special_attack_35, resistance: special_defense_50, speed: speed_63}
  calibration_flags: [no_manual_exception, five_knots_not_a_runtime_speed_formula, horn_damage_not_generic_material_destruction, migration_not_infinite_stamina]
capabilities_and_hazards:
  locomotion: [strong_aquatic_swimming, fast_stream_or_upstream_migration_version_scoped, waterfall_ascent_contextual_historical]
  physical_hazards: [sharp_horn_ram_or_counterattack]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [seasonal_spawning_migration, danger_response_horn_counterattack]
  utility_interaction_capabilities: [none_required]
  immunities_or_approach_invalidators: [strong_swimming_does_not_imply_current_immunity_or_universal_waterfall_traversal]
  hazard_records:
  - hazard_key: goldeen-horn-ram
    kind: other
    delivery_or_exposure: [close_range_horn_charge_or_counterattack]
    prerequisite_or_trigger: [Goldeen_is_threatened_cornered_or_commits_to_contact]
    warning_signs: [horn_alignment, abrupt_turn, acceleration, defensive_posture]
    immediate_effects: [puncture_or_blunt_injury_and_position_loss]
    delayed_or_persistent_effects: [ordinary_wound_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_high_speed_confined_or_named_exceptional_context
    countermeasures: [leave_charge_line, use_distance_or_barrier, allow_escape, avoid_cornering]
    emergency_consumable_hooks: []
    context_amplifiers: [confined_pool, poor_visibility, hard_backstop, spawning_stress]
    context_mitigators: [open_water, early_warning, distance, soft_escape_lane]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [GOL-C1-002, GOL-D1-002]
  - hazard_key: goldeen-migration-current
    kind: drowning
    delivery_or_exposure: [human_or_companion_enters_fast_water_while_following_crossing_or_interacting_with_a_migrating_school]
    prerequisite_or_trigger: [authored_fast_stream_waterfall_or_migration_route]
    warning_signs: [upstream_schooling, strong_current, spray, repeated_leaping_or_ascent]
    immediate_effects: [position_loss_or_water_crossing_pressure]
    delayed_or_persistent_effects: [drowning_or_collision_consequences_only_if_exposure_continues]
    ordinary_consequence_ceiling: severe
    exceptional_consequence_ceiling: life_threatening_in_explicit_waterfall_or_rescue_constrained_context
    countermeasures: [do_not_enter_unsafe_current, use_safe_crossing, retreat_to_shore, avoid_using_school_movement_as_proof_of_human_traversability]
    emergency_consumable_hooks: []
    context_amplifiers: [waterfall, flood, slick_rocks, darkness]
    context_mitigators: [shallow_bank, bridge_or_safe_ford, rope_support, early_observation]
    governing_species_axes: []
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [GOL-C1-002, GOL-D1-001]
  notes: [measured_speed_and_migration_are_source_scale_not_runtime_formulas, spawning_behavior_does_not_create_continuous_breeding_simulation]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: preindustrial_river_crossings_and_seasonal_water_routes_can_make_ordinary_migration_more_consequential_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_migration_context_can_raise_current_or_group_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [rivers_streams_and_other_freshwater_or_connected_waterways_when_authored]
  ecological_niche: [active_swimmer_with_seasonal_migration_and_horn_defense]
  activity_pattern: [ordinary_swimming_and_foraging, migration_or_mate_search_when_seasonally_authored]
  seasonal_notes: [spawning_migration_source_backed_but_exact_proto_kanto_calendar_is_project_authored_if_needed]
  feeding_and_resource_interaction: [exact_food_web_unknown]
  social_structure: [schools_may_form_during_migration_context, ordinary_group_structure_unknown]
  predator_prey_competitor_links: [local_river_food_web_requires_authoring]
  environmental_effects: [visible_schooling_and_splashing_during_migration, no_population_simulation]
  observable_signs: [fin_flashes, upstream_schooling, horn_marks_or_collision_damage, seasonal_river_activity]
  locality_constraints: [migration_capability_does_not_mean_every_waterfall_or_stream_is_traversable]
  unsupported_gaps: [exact_current_or_waterfall_limit, endurance_at_five_knots, horn_material_limit, proto_kanto_spawning_route_and_calendar, abundance]
human_perception_and_culture:
  ordinary_attitude: [usually_low_to_moderate_caution_with_respect_for_the_horn]
  specialist_knowledge_holders: [fishers, river_crossing_watchers, seasonal_foragers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [horn_ram_in_confined_water, dangerous_current_during_migration]
  myths_omens_taboos: [Water_Dancer_or_Water_Queen_can_exist_as_descriptive_reputation_only_if_locally_used]
  practical_customs: [avoid_wading_into_migration_routes, give_cornered_Goldeen_an_exit]
  common_misbeliefs: [Goldeen_can_break_any_barrier, nonstop_swimming_means_no_fatigue, Water_Queen_is_a_formal_title]
  local_variation_notes: [analogy_or_reputation_does_not_create_a_region_wide_profession_or_cult]
identification_and_knowledge:
  baseline_recognition: common
  unknown_presentation_hooks: [a_school_moves_upstream_against_water_that_stops_human_crossing]
  local_aliases_or_titles: none
  identification_evidence: [developed_fins, prominent_horn, elegant_swim_pattern, seasonal_schooling]
  initial_knowledge_fragments: [strong_swimmer_and_horn_counterattacker, speed_is_not_infinite_endurance]
  post_identification_knowledge: [migration_route_does_not_prove_safe_human_waterfall_traversal]
  advanced_insights: [seasonal_schooling_can_predict_safe_observation_points_without_entering_current]
  exceptional_individual_knowledge_hooks: [one_large_Goldeen_is_known_for_returning_to_the_same_upstream_pool_with_a_chipped_horn]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_normally_higher_in_confined_water_or_fast_current
  default_behavior_states: [swimming, schooling, migrating, mate_searching, warning, horn_counterattack, retreating]
  aggression_tendency: low_or_defensive_by_default
  territoriality: low_or_contextual_during_spawning
  avoidance_tendency: moderate
  warning_signs: [horn_alignment, abrupt_turn, school_compression, upstream_rush]
  encounter_triggers: [shared_stream, blocked_migration_route, close_approach, spawning_context]
  escalation_triggers: [cornering, attack, blocking_escape_or_migration, repeated_close_contact]
  deescalation_conditions: [create_space, leave_route, stop_pursuit, retreat_to_bank]
  pursuit_profile: strong_swimming_but_not_guaranteed_and_event_bounded
  group_size_effects: [school_size_can_raise_position_or_current_complexity_but_each_Goldeen_remains_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [puncture_or_blunt_injury, position_loss, water_exposure]
  consequence_ceiling: severe_when_fast_water_or_confined_geometry_is_explicit
  human_check_hooks:
  - action: avoid_a_Goldeen_horn_counterattack
    relevant_species_axis: force
    relevant_tags: [horn, aquatic]
    relevant_hazard_keys: [goldeen-horn-ram]
    difficulty_guidance: D024_context_from_distance_visibility_escape_lane_and_water_geometry
    notes: historical_glass_breaking_never_converts_to_a_material_damage_formula
  - action: cross_or_observe_a_migration_route_safely
    relevant_species_axis: none
    relevant_tags: [migration, current]
    relevant_hazard_keys: [goldeen-migration-current]
    difficulty_guidance: D024_context_from_current_safe_crossing_bank_access_and_seasonal_schooling
    notes: school_success_does_not_grant_human_or_companion_waterfall_permission
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [skittish, bold, schooling, unusually_defensive]
    condition_variants: [resting, migrating, spawning, injured, exhausted]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_size, repeated_upstream_migration, persistent_horn_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [horn_or_fin_tell, recurring_route, history]
    warning_or_rumor_hooks: [one_Goldeen_can_force_through_a_rapid_that_stops_the_rest_of_the_school]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, reliable_water_access, safe_transport_between_waterways]
  trust_building_paths: [repeat_noncoercive_contact, food_or_rescue_without_capture, respecting_migration_and_escape]
  reasons_to_stay: [bond, familiar_water_route, safe_habitat_access]
  rejection_or_departure_reasons: [forced_dry_confinement, coercive_combat, denied_water_or_migration_behavior]
  human_social_costs: [water_access_and_horn_safety]
  logistics:
    food: [regular_species_appropriate_food]
    water: [reliable_swimming_area]
    shelter_temperature: [safe_aquatic_shelter]
    space_travel: [waterway_access_or_explicit_safe_transfer_required]
    settlement_restrictions: [protect_people_from_horn_contact_and_manage_water_quality]
    special_resources: [none_fixed]
  assistance_capabilities: [water_scouting_or_current_observation_only_when_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_forced_waterfall_transport, no_horn_as_tool_or_weapon_equipment, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_seasonal_behavior_can_remain_relevant]
mechanical_hooks:
  tracking_clues: [upstream_schooling, fin_flashes, horn_marks, seasonal_water_activity]
  avoidance_preparation: [use_bank_observation, leave_migration_lane, preserve_escape_space]
  resistance_or_protection: [distance, stable_bank, barrier_outside_charge_line]
  combat_approach_permissions: [horn_counterattack, seasonal_migration_state, strong_swimming]
  blocked_or_invalid_approaches: [literal_five_knot_turn_distance, infinite_stamina, universal_waterfall_traversal, generic_material_destruction, continuous_breeding_or_population_simulation]
  fear_hooks: [the_only_ford_fills_with_an_upstream_school_before_the_rain_arrives]
  injury_hazard_hooks: [goldeen-horn-ram, goldeen-migration-current]
  environmental_state_hooks: [river_current, migration_route, spawning_season, open_bank]
  companion_assistance_hooks: [voluntary_water_scouting]
  fortune_spike_opportunities: [recognize_the_migration_before_entering_the_ford]
  trouble_spike_complications: [a_cornered_Goldeen_has_no_exit_except_toward_the_party]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [horn_or_fins_are_not_repeatable_live_resource_nodes]
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
  scalability_limits: [swim_speed_horn_impact_and_migration_do_not_create_transport_mining_or_material_testing_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [watch_a_school_move_upstream_from_a_safe_bank]
  dangerous: [cross_a_ford_during_migration_without_entering_a_horn_charge_or_fast_current]
  unusual_or_rare: [an_exceptional_Goldeen_returns_with_a_distinctive_horn_and_leads_a_school_through_a_rapid]
  discovery_insight: [learn_that_elegant_reputation_and_measured_speed_are_descriptive_evidence_not_profession_or_runtime_formula]
  route_environment: [river_ford, fast_stream, seasonal_upstream_route]
  settlement_culture: [river_watchers_mark_migration_periods_as_local_knowledge_without_a_global_calendar_system]
  cross_species: [Seaking_may_share_or_follow_related_spawning_routes_when_authored]
presentation_and_p6_followups:
  initial_bestiary_presentation: elegant_fins_horn_and_schooling_before_speed_measurement_or_extraordinary_glass_wording
  progressive_reveal_notes: [show_migration_as_contextual_and_horn_as_dangerous_but_bounded]
  species_specific_visual_needs: [horn_alignment, upstream_schooling, current_and_safe_bank_readability]
  species_specific_audio_needs: [water_rush, school_splash, horn_contact_warning]
  special_ui_or_readability_needs: [migration_route_and_current_danger_must_be_clear_without_speed_or_stamina_meter]
  p6_followup_required: true
cross_species_links:
  evolution_family: [seaking]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [seaking_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_current_or_waterfall_limit, exact_endurance_at_five_knots, exact_horn_material_limit, exact_proto_kanto_spawning_route_and_calendar, abundance]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [horn_counterattack_migration_and_fast_water_checks]
  deferred_to_p6: [schooling_horn_alignment_and_current_readability]
  deferred_to_p7: [cached_river_current_migration_route_and_spawning_season_state_if_runtime_needs_it]
```
