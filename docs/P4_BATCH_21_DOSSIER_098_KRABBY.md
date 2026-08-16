# P4 Batch 21 — #098 Krabby Full-Schema Dossier

Part of `docs/P4_BATCH_21_FULL_SCHEMA_DOSSIERS.md`.

---

## #098 Krabby / 크랩

```yaml
identity:
  national_dex: 98
  species_key: krabby
  official_name_en: Krabby
  official_name_ko: 크랩
  evolution_family_keys: [krabby, kingler]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-KRABBY-SG, P4_BATCH_21_SOURCE_REVIEW]
  official_evidence:
  - claim_id: KRA-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-KRABBY-SG
    version_context: current_official_portal__COAST_REGENERATION_DISPLAY
    paraphrase: Krabby_is_found_near_the_sea_its_large_pincers_regrow_after_being_torn_out_and_it_can_cover_itself_in_bubbles_when_danger_approaches
  - claim_id: KRA-C2-001
    evidence_class: C2
    source_ref: SRC-DATA-001
    version_context: historical_versions__PINCER_BALANCE_BURROW_TERRITORY
    paraphrase: historical_entries_support_powerful_pincers_lateral_balance_pincer_loss_and_regrowth_sandy_beach_burrows_and_food_scarcity_territorial_squabbling
  - claim_id: KRA-C2-002
    evidence_class: C2
    source_ref: SRC-DATA-001
    version_context: historical_version_scoped__SAND_NUTRIENT_BEHAVIOR
    paraphrase: one_historical_entry_describes_food_deprived_Krabby_swallowing_sand_to_absorb_nutrients
  derived_claims:
  - claim_id: KRA-D1-001
    evidence_class: D1
    based_on: [KRA-C1-001, KRA-C2-001]
    statement: Krabby_is_a_small_littoral_burrower_whose_pincers_support_close_range_force_and_lateral_balance
    canon_boundary_note: no_generic_crab_locomotion_system_detachable_weapon_semantics_or_extra_pincer_actions
  - claim_id: KRA-D1-002
    evidence_class: D1
    based_on: [KRA-C1-001, KRA-C2-001]
    statement: pincer_loss_and_recovery_may_be_authored_as_discrete_encounter_state_that_changes_pincer_dependent_options
    canon_boundary_note: no_limb_health_pool_instant_regeneration_per_frame_regrowth_or_renewable_weapon_loot
  - claim_id: KRA-D1-003
    evidence_class: D1
    based_on: [KRA-C1-001, KRA-C2-001]
    statement: bubble_display_and_food_scarcity_territorial_behavior_create_readable_contextual_pressure
    canon_boundary_note: no_forced_Fear_free_defensive_action_or_permanent_aggression
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 30, attack: 105, defense: 90, special_attack: 25, special_defense: 25, speed: 50}
  abilities_relevant_to_p4: [hyper_cutter_as_modern_context, shell_armor_as_modern_context, sheer_force_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 0.4_m, weight: 6.5_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [kingler]
    canonical_conditions: [modern_level_28_metadata_is_source_context_not_ancient_progression_law]
  other_material_facts: [large_pincers, lateral_walking_balance, pincer_loss_and_regrowth, bubble_size_display, sandy_beach_burrows, food_scarcity_territoriality, sand_nutrient_behavior_historical]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 5
  guard: 4
  potency: 1
  resistance: 1
  speed: 2
  derivation_notes: {vigor: hp_30, force: attack_105, guard: defense_90, potency: special_attack_25, resistance: special_defense_25, speed: speed_50}
  calibration_flags: [no_manual_exception, pincer_force_not_material_threshold_formula, regrowth_not_encoded_in_axes, bubble_display_not_encoded_as_Fear]
capabilities_and_hazards:
  locomotion: [lateral_ground_movement, shoreline_and_burrow_movement_when_geometry_allows]
  physical_hazards: [pincer_grip, pincer_crush_or_cut_pressure, shell_backed_close_range_collision]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [bubble_threat_display, burrow_use, territorial_squabbling_when_food_or_space_is_contested]
  utility_interaction_capabilities: [pincer_gripping_for_species_scale_objects, digging_or_burrow_maintenance_in_suitable_sand]
  immunities_or_approach_invalidators: [Water_type_does_not_grant_unrestricted_swimming, lost_pincer_does_not_create_total_immobility_by_default]
  hazard_records:
  - hazard_key: krabby-pincer-crush
    kind: other
    delivery_or_exposure: [successful_close_range_pincer_contact_or_grip]
    prerequisite_or_trigger: [credible_target_position, pincer_available, ordinary_action_committed]
    warning_signs: [raised_pincers, lateral_repositioning, bubble_display_or_defensive_posture, contested_burrow_or_food]
    immediate_effects: [pinch_or_crush_injury, grip_pressure, possible_position_loss]
    delayed_or_persistent_effects: [bounded_injury_consequence_when_contact_is_sustained_or_severe]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_for_exceptional_individual_or_constrained_target
    countermeasures: [maintain_distance, avoid_front_or_pincer_arc, break_contact, use_cover, retreat_from_contested_burrow]
    emergency_consumable_hooks: [generic_crush_or_laceration_recovery_hook_deferred_to_P5_item_design]
    context_amplifiers: [confined_space, surprise_from_burrow, target_already_pinned, exceptional_individual]
    context_mitigators: [distance, open_ground, warning_display, escape_route, one_pincer_lost]
    governing_species_axes: [force, speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [KRA-C2-001, KRA-D1-001]
  notes: [two_pincers_never_create_extra_turns_or_entities, pincer_state_may_be_intact_one_lost_or_recovering_as_cached_authored_state, bubble_display_has_no_automatic_Fear_or_status]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: narrow_shoreline_routes_burrows_and_preindustrial_injury_treatment_can_make_fixed_baseline_Krabby_more_consequential_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_food_scarcity_or_burrow_pressure_may_raise_defensive_escalation
  canon_boundary_note: no_global_ancient_bonus_player_level_scaling_or_permanent_hostility
ancient_ecology:
  habitat: [near_sea_shorelines, sandy_beaches, tidal_or_estuarine_edges_when_project_geography_supports_them]
  ecological_niche: [small_littoral_forager, burrow_user, opportunistic_competitor]
  activity_pattern: [foraging, burrow_maintenance, lateral_patrol, warning_display, retreat]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [food_scarcity_can_increase_local_competition, sand_nutrient_behavior_is_historical_version_scoped_not_general_diet]
  social_structure: [mostly_unknown, temporary_competition_or_squabbling_possible]
  predator_prey_competitor_links: [shoreline_food_competitors_are_local_authoring_inputs]
  environmental_effects: [small_sandy_burrows, disturbed_wet_sand, pincer_marks]
  observable_signs: [paired_or_asymmetric_tracks, burrow_holes, disturbed_sand, bubble_display, discarded_food_fragments]
  locality_constraints: [coastal_fit_does_not_mean_every_beach_contains_Krabby, direct_encounterability_does_not_mean_commonness]
  unsupported_gaps: [exact_proto_kanto_abundance, exact_swim_endurance, exact_regrowth_time, exact_pincer_force, exact_sand_nutrient_efficiency]
human_perception_and_culture:
  ordinary_attitude: [caution_near_occupied_shoreline_burrows]
  specialist_knowledge_holders: [shore_foragers, fishers, coastal_guides, healers_familiar_with_crush_injuries]
  benefits_and_services: [none_required]
  fears_and_avoidance: [painful_pincer_contact, sudden_burrow_defense, contested_food_sites]
  myths_omens_taboos: [local_stories_may_exaggerate_regrowth_into_immediate_invulnerability]
  practical_customs: [watch_for_burrow_holes, do_not_reach_into_occupied_sand, treat_bubble_display_as_warning_not_magic]
  common_misbeliefs: [lost_pincers_regrow_instantly, every_Krabby_is_aggressive, broken_pincers_are_free_weapons, Water_type_means_safe_open_water_transport]
  local_variation_notes: [no_region_wide_crab_harvest_industry_is_required]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_small_burrower_raises_two_pincers_and_foams_at_the_mouth_to_appear_larger]
  local_aliases_or_titles: none
  identification_evidence: [compact_crablike_body, prominent_pincers, lateral_gait, shoreline_burrow]
  initial_knowledge_fragments: [dangerous_at_pincer_range, often_associated_with_coastal_sand]
  post_identification_knowledge: [pincers_support_balance, loss_can_change_options, bubble_display_is_warning_not_forced_fear]
  advanced_insights: [reading_pincer_state_and_burrow_pressure_can_reveal_safer_approach_or_escape_routes]
  exceptional_individual_knowledge_hooks: [a_one_clawed_old_Krabby_has_survived_for_years_and_defends_a_distinctive_tidal_burrow]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_normally_higher_in_confined_burrow_or_food_conflict
  default_behavior_states: [foraging, burrowed, warning, contesting, striking, one_pincer_lost, recovering, retreating]
  aggression_tendency: contextual_defensive_or_food_competitive_not_universally_hostile
  territoriality: moderate_when_food_or_burrow_space_is_contested
  avoidance_tendency: moderate_when_escape_to_burrow_or_shoreline_cover_exists
  warning_signs: [raised_pincers, bubble_display, lateral_posturing, disturbed_sand_near_burrow]
  encounter_triggers: [approaching_occupied_burrow, entering_food_contest, blocking_retreat, shoreline_foraging_contact]
  escalation_triggers: [grabbing, cornering, attacking, reaching_into_burrow, competing_for_scarce_food]
  deescalation_conditions: [create_distance, stop_contesting_food, leave_burrow_route_open, retreat]
  pursuit_profile: short_and_contextual_not_infinite
  group_size_effects: [each_Krabby_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [pincer_injury, grip_pressure, position_loss]
  consequence_ceiling: severe_only_when_contact_position_or_exceptional_context_justifies_it
  human_check_hooks:
  - action: cross_an_occupied_shoreline_without_entering_pincer_range
    relevant_species_axis: speed
    relevant_tags: [lateral_movement, warning_display]
    relevant_hazard_keys: [krabby-pincer-crush]
    difficulty_guidance: D024_context_from_open_space_burrow_density_warning_and_route_choice
    notes: no_automatic_attack_or_Fear_resolution
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, food_focused, burrow_defensive, curious]
    condition_variants: [intact, one_pincer_lost, recovering, hungry, injured]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [unusual_size, repeated_survival, unusually_hard_pincers, persistent_territory, learned_ambush_route]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_pincer_or_shell_marking, scars, known_burrow_or_history]
    warning_or_rumor_hooks: [a_scarred_Krabby_has_driven_off_larger_animals_from_one_tidal_channel_for_seasons]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, safe_pincer_handling, appropriate_food, access_to_suitable_resting_ground]
  trust_building_paths: [repeat_calm_contact, feeding_without_capture, respecting_burrow_space, noncoercive_route_assistance]
  reasons_to_stay: [bond, reliable_food, safe_shelter, familiar_shoreline]
  rejection_or_departure_reasons: [rough_handling, forced_harvesting, chronic_food_deprivation, blocked_escape, coercive_combat]
  human_social_costs: [fear_of_pincer_injury_near_children_food_storage_or_small_animals]
  logistics:
    food: [species_appropriate_shoreline_food_or_equivalent]
    water: [ordinary_access_and_species_appropriate_coastal_conditions]
    shelter_temperature: [dry_or_damp_sand_resting_area_appropriate_to_local_climate]
    space_travel: [secure_space_that_does_not_crush_pincers_or_treat_the_Pokemon_as_inventory]
    settlement_restrictions: [prevent_unwanted_burrowing_or_pincer_contact_in_crowded_areas]
    special_resources: [none_fixed]
  assistance_capabilities: [small_object_gripping, sand_disturbance_or_burrow_work_when_voluntary, visible_warning_to_nearby_coastal_threats]
  handling_boundaries: [no_defeat_to_recruit, no_forced_pincer_breaking_or_harvesting, no_extra_pincer_actions, one_visible_companion_slot]
  separation_injury_notes: [pincer_loss_is_not_a_resource_event_and_recovery_remains_species_state_not_inventory_generation]
mechanical_hooks:
  tracking_clues: [burrow_holes, lateral_tracks, pincer_marks, disturbed_sand]
  avoidance_preparation: [scan_for_burrows, leave_retreat_lanes, avoid_food_contests, keep_out_of_pincer_arc]
  resistance_or_protection: [distance, barriers, sturdy_clothing_or_tools_when_fiction_supports_them]
  combat_approach_permissions: [pincer_state_intact_one_lost_or_recovering, warning_display, contested_territory]
  blocked_or_invalid_approaches: [automatic_Fear, detachable_pincer_loot, instant_regeneration, continuous_limb_health, generic_mining, extra_appendage_actions]
  fear_hooks: [bubbles_rise_from_a_burrow_as_the_small_body_suddenly_looks_larger]
  injury_hazard_hooks: [krabby-pincer-crush]
  environmental_state_hooks: [open_shoreline, dense_burrows, contested_food, one_pincer_lost]
  companion_assistance_hooks: [voluntary_gripping_or_burrow_work_within_species_scale]
  fortune_spike_opportunities: [notice_a_recently_lost_pincer_and_choose_a_route_that_avoids_the_remaining_arc]
  trouble_spike_complications: [the_only_dry_path_passes_between_multiple_food_contested_burrows]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: [naturally_lost_pincer_or_shell_fragment_only_when_an_authored_event_produces_it_not_as_guaranteed_drop]
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [deliberately_breaking_pincers_or_exploiting_regrowth_as_a_repeatable_resource_loop_is_forbidden]
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
  scalability_limits: [pincers_and_shell_do_not_create_default_tools_weapons_or_industry]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: [crush_or_laceration_recovery_concept_may_be_authored_in_P5_under_existing_hazard_item_contract]
narrative_and_event_hooks:
  peaceful: [observe_Krabby_maintaining_a_shoreline_burrow_and_back_away_after_its_bubble_warning]
  dangerous: [cross_a_food_scarce_tidal_flat_where_multiple_burrows_are_being_contested]
  unusual_or_rare: [find_a_long_lived_one_clawed_exceptional_Krabby_whose_recovery_history_is_known_locally]
  discovery_insight: [learn_that_pincer_loss_changes_balance_and_attack_options_without_making_the_species_helpless]
  route_environment: [sandy_beach, tidal_flat, estuary_edge]
  settlement_culture: [coastal_households_mark_occupied_burrows_in_frequently_used_foraging_zones]
  cross_species: [Kingler_presence_can_raise_local_pincer_hazard_without_implying_a_shared_hive_or_command_structure]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_coastal_burrower_with_oversized_natural_weapons_and_visible_warning_display
  progressive_reveal_notes: [reveal_lateral_balance_role_after_observation, reveal_regrowth_only_after_trusted_report_or_event, preserve_unknown_exact_regrowth_time]
  species_specific_visual_needs: [clear_pincer_state_readability, lateral_gait, bubble_warning, burrow_entrance]
  species_specific_audio_needs: [shell_or_pincer_clicks, sand_scrape, bubble_foam]
  special_ui_or_readability_needs: [discrete_pincer_state_if_relevant_to_scene_not_a_limb_health_bar]
  p6_followup_required: true
cross_species_links:
  evolution_family: [krabby, kingler]
  predator_prey: []
  competition: [local_shoreline_foragers_when_authored]
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [kingler]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_regrowth_time, exact_pincer_force, exact_lateral_impairment_from_one_lost_pincer, exact_sand_nutrient_efficiency]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_recovery_or_injury_item_design_if_needed]
  deferred_to_p6: [pincer_state_and_bubble_display_readability]
  deferred_to_p7: []
```
