# P4 Batch 18 — #143 Snorlax Full-Schema Dossier

Part of `docs/P4_BATCH_18_FULL_SCHEMA_DOSSIERS.md`.

---

## #143 Snorlax / 잠만보

```yaml
identity:
  national_dex: 143
  species_key: snorlax
  official_name_en: Snorlax
  official_name_ko: 잠만보
  evolution_family_keys: [munchlax_external_post_gen1, snorlax]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SNORLAX-SG, P4_BATCH_18_SOURCE_REVIEW]
  official_evidence:
  - claim_id: SNO-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-SNORLAX-SG
    version_context: current_official_portal__OBSERVED_AND_MEASURED_APPETITE
    paraphrase: Snorlax_spends_most_waking_time_eating_and_current_material_gives_a_nearly_900_pound_daily_food_claim
  - claim_id: SNO-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-SNORLAX-SG
    version_context: current_official_portal__OBSERVED_DIGESTION
    paraphrase: digestion_tolerates_ground_or_spoiled_food_and_can_handle_poisonous_material_better_than_ordinary_expectation
  - claim_id: SNO-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__HISUI_RESOURCE_DISASTER_SLEEP_AND_DOCILITY_CONTEXT
    paraphrase: historical_entries_add_eat_sleep_cycle_full_belly_lethargy_Hisui_granary_disaster_and_later_social_docility_examples
  derived_claims:
  - claim_id: SNO-D1-001
    evidence_class: D1
    based_on: [SNO-C1-001, SNO-C1-003]
    statement: appetite_can_create_severe_authored_local_resource_pressure
    canon_boundary_note: no_continuous_calorie_inventory_or_settlement_economy_ledger_and_no_automatic_settlement_targeting
  - claim_id: SNO-D1-002
    evidence_class: D1
    based_on: [SNO-C1-002]
    statement: digestive_resilience_is_real_but_bounded
    canon_boundary_note: no_universal_poison_disease_or_status_immunity
  - claim_id: SNO-D1-003
    evidence_class: D1
    based_on: [SNO-C1-003]
    statement: sleep_and_full_belly_lethargy_support_discrete_behavior_states
    canon_boundary_note: sleep_is_not_invulnerability_forced_time_skip_or_per_frame_hunger_pathfinding
canonical_source_data:
  types: [normal]
  base_stats_raw: {hp: 160, attack: 110, defense: 65, special_attack: 65, special_defense: 110, speed: 30}
  abilities_relevant_to_p4: [immunity_as_modern_context, thick_fat_as_modern_context, gluttony_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 2.1_m, weight: 460.0_kg}
  evolution_source:
    evolves_from: munchlax_external_post_gen1
    evolves_to: []
    canonical_conditions: [Munchlax_and_modern_friendship_evolution_context_are_post_Gen1_metadata_only]
  other_material_facts: [large_daily_food_claim, eat_sleep_cycle, spoiled_food_tolerance, digestive_poison_resilience, version_scoped_full_belly_lethargy, Hisui_granary_disaster_context]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 6
  force: 5
  guard: 3
  potency: 3
  resistance: 5
  speed: 1
  derivation_notes: {vigor: hp_160, force: attack_110, guard: defense_65, potency: special_attack_65, resistance: special_defense_110, speed: speed_30}
  calibration_flags: [no_manual_exception, vigor_6_does_not_make_sleep_invulnerable, resistance_5_does_not_create_poison_immunity, food_measurement_is_not_an_economy_formula]
capabilities_and_hazards:
  locomotion: [slow_terrestrial_movement, large_body_route_occupation]
  physical_hazards: [large_body_collision_or_crush_pressure_when_escalated, powerful_close_range_force]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [intense_feeding, long_or_frequent_sleep_state, full_belly_lethargy]
  utility_interaction_capabilities: [can_consume_many_food_types_but_not_a_generic_waste_disposal_service]
  immunities_or_approach_invalidators: [digestive_resilience_does_not_invalidate_all_toxin_disease_or_food_hazards]
  hazard_records:
  - hazard_key: snorlax-resource-depletion
    kind: other
    delivery_or_exposure: [Snorlax_enters_or_remains_in_an_authored_food_store_crop_or_supply_area]
    prerequisite_or_trigger: [large_food_access_is_available_and_feeding_state_is_active]
    warning_signs: [missing_food, heavy_tracks, disturbed_storage, repeated_feeding_route, loud_hunger_or_sleep_signs]
    immediate_effects: [rapid_local_food_loss, route_or_storage_disruption, conflict_pressure]
    delayed_or_persistent_effects: [shortage_or_social_consequence_only_when_the_event_authors_it]
    ordinary_consequence_ceiling: serious_local_resource_loss
    exceptional_consequence_ceiling: severe_settlement_crisis_in_explicit_granary_or_isolated_supply_context
    countermeasures: [redirect_or_protect_food_access, use_distance_and_noncoercive_route_management, secure_critical_stores, avoid_cornering_a_feeding_individual]
    emergency_consumable_hooks: []
    context_amplifiers: [single_critical_granary, isolated_winter_supply, easy_food_access]
    context_mitigators: [distributed_stores, protected_food, alternate_route_or_food_source, early_detection]
    governing_species_axes: [vigor]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SNO-C1-001, SNO-C1-003, SNO-D1-001]
  - hazard_key: snorlax-large-body-contact
    kind: other
    delivery_or_exposure: [close_range_collision, being_pinned_by_body_or_route_geometry_only_when_event_authors_it]
    prerequisite_or_trigger: [Snorlax_moves_or_rolls_through_occupied_space_or_defends_itself]
    warning_signs: [large_body_position, slow_visible_movement, blocked_route]
    immediate_effects: [serious_blunt_injury_or_position_loss]
    delayed_or_persistent_effects: [ordinary_injury_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_explicit_crush_or_named_exceptional_context
    countermeasures: [do_not_enter_pinning_geometry, maintain_exit_space, use_distance_and_route_planning]
    emergency_consumable_hooks: []
    context_amplifiers: [narrow_passage, unstable_slope, confined_storage]
    context_mitigators: [open_space, visible_exit, sleeping_position_with_safe_clearance]
    governing_species_axes: [force, vigor]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [SNO-D1-003]
  notes: [offscreen_Snorlax_never_requires_continuous_calorie_simulation, appetite_and_sleep_use_discrete_authored_states]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: preindustrial_food_security_can_make_one_large_feeding_incident_more_serious_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: critical_local_store_context_can_raise_resource_consequence_ceiling
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [food_rich_or_resting_localities_when_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [very_large_generalist_feeder_with_low_activity_between_feeding_periods]
  activity_pattern: [eat_sleep_cycle_source_backed, exact_duration_unknown]
  seasonal_notes: [food_scarcity_can_amplify_authored_incidents_but_exact_seasonality_unknown]
  feeding_and_resource_interaction: [very_large_food_demand, broad_digestive_tolerance, no_continuous_ledger]
  social_structure: [unknown]
  predator_prey_competitor_links: [food_competition_with_humans_or_other_species_requires_local_authoring]
  environmental_effects: [large_tracks_and_local_food_depletion_when_present]
  observable_signs: [heavy_tracks, stripped_food_patch_or_storage, resting_site, snore_or_hunger_rumble_reports]
  locality_constraints: [Hisui_granary_example_does_not_establish_proto_kanto_rice_economy_or_automatic_village_targeting]
  unsupported_gaps: [wild_food_mix, feeding_periodicity, toxin_limits, sleep_duration_and_wake_trigger, settlement_incident_frequency]
human_perception_and_culture:
  ordinary_attitude: [caution_mixed_with_recognition_of_usually_low_activity_behavior]
  specialist_knowledge_holders: [foragers, storekeepers, route_watchers, repeat_observers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [food_loss, blocked_routes, dangerous_close_contact_if_startled]
  myths_omens_taboos: [local_stories_about_endless_hunger_may_exaggerate_real_food_demand]
  practical_customs: [secure_critical_food, keep_sleeping_clearance, redirect_routes_before_feeding_escalates]
  common_misbeliefs: [Snorlax_cannot_be_poisoned_or_injured, every_Snorlax_raids_villages, sleep_makes_it_safe_to_climb_or_handle]
  local_variation_notes: [later_child_playing_or_Hisui_granary_examples_do_not_define_proto_kanto_social_norms]
identification_and_knowledge:
  baseline_recognition: specialist
  unknown_presentation_hooks: [a_food_store_empties_and_a_massive_sleeping_shape_blocks_the_route]
  local_aliases_or_titles: none
  identification_evidence: [very_large_body, feeding_and_sleep_cycle, heavy_tracks, characteristic_resting_site]
  initial_knowledge_fragments: [food_access_is_the_main_pressure, slow_movement_does_not_mean_low_force]
  post_identification_knowledge: [digestive_resilience_is_broad_but_not_universal_immunity]
  advanced_insights: [early_route_and_food_management_prevents_a_resource_incident_without_needing_combat]
  exceptional_individual_knowledge_hooks: [one_old_Snorlax_is_known_by_a_repeat_seasonal_route_and_distinctive_resting_tree]
threat_and_encounter:
  baseline_threat_band: moderate_normally_high_when_food_or_confined_geometry_is_critical
  default_behavior_states: [sleeping, waking, feeding, full_and_lethargic, warning, moving_on, defensive]
  aggression_tendency: low_or_defensive_by_default
  territoriality: low_or_unknown
  avoidance_tendency: low_activity_not_the_same_as_avoidance
  warning_signs: [food_disappearance, heavy_tracks, snoring_or_hunger_rumbling, visible_route_blockage]
  encounter_triggers: [food_store_access, route_blockage, resting_site_overlap, sudden_waking_or_disturbance]
  escalation_triggers: [food_denial_without_exit, close_handling, attack, confinement]
  deescalation_conditions: [create_space, redirect_food_or_route_when_safe, stop_harassment, allow_rest_or_departure]
  pursuit_profile: normally_low_and_event_bounded
  group_size_effects: [each_Snorlax_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [resource_loss, route_denial, blunt_injury, social_conflict]
  consequence_ceiling: severe_when_a_critical_food_supply_or_confined_crush_context_is_explicit
  human_check_hooks:
  - action: prevent_a_feeding_incident_from_becoming_a_supply_crisis
    relevant_species_axis: vigor
    relevant_tags: [appetite, resource_pressure]
    relevant_hazard_keys: [snorlax-resource-depletion]
    difficulty_guidance: D024_context_from_food_access_early_warning_alternate_routes_and_local_supply_resilience
    notes: food_mass_measurement_never_converts_to_a_continuous_inventory_drain
  - action: move_safely_around_or_escape_large_body_pressure
    relevant_species_axis: force
    relevant_tags: [large_body]
    relevant_hazard_keys: [snorlax-large-body-contact]
    difficulty_guidance: D024_context_from_space_exit_visibility_and_current_sleep_or_wake_state
    notes: low_speed_does_not_make_close_crush_geometry_harmless
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [docile, food_fixated, wary_when_awakened, unusually_tolerant]
    condition_variants: [sleeping, hungry, feeding, full_and_lethargic, injured]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_size, long_migration_or_feeding_history, persistent_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_route_or_resting_site, scars_or_size_tell, history]
    warning_or_rumor_hooks: [one_Snorlax_returns_to_the_same_valley_before_food_shortage_each_year]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [voluntary_trust, sustainable_food_logistics, safe_space_for_large_body_and_sleep]
  trust_building_paths: [noncoercive_repeat_contact, reliable_food_without_forced_labor, respecting_sleep_and_departure]
  reasons_to_stay: [exceptional_bond, stable_shared_history]
  rejection_or_departure_reasons: [food_deprivation_as_control, forced_movement, crowding, coercive_combat]
  human_social_costs: [very_high_food_burden, large_space_need, settlement_store_pressure]
  logistics:
    food: [very_large_food_requirement_requires_explicit_sustainable_plan_not_per_frame_tracking]
    water: [regular_access_as_needed]
    shelter_temperature: [large_safe_rest_site]
    space_travel: [large_clearance_and_slow_route_planning]
    settlement_restrictions: [critical_food_stores_and_narrow_routes_need_management]
    special_resources: [none_fixed]
  assistance_capabilities: [large_body_or_force_help_only_when_voluntary_safe_and_explicit]
  handling_boundaries: [no_defeat_to_recruit, no_forced_pack_animal_or_waste_disposal_role, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_food_logistics_remain_real]
mechanical_hooks:
  tracking_clues: [heavy_tracks, missing_food, resting_sites, snore_or_hunger_reports]
  avoidance_preparation: [secure_critical_stores, keep_clear_routes, plan_noncombat_redirection]
  resistance_or_protection: [distance, open_space, protected_food_storage]
  combat_approach_permissions: [discrete_sleeping_hungry_feeding_full_states]
  blocked_or_invalid_approaches: [sleep_invulnerability, universal_poison_immunity, continuous_hunger_or_economy_simulation, automatic_village_targeting, forced_time_skip]
  fear_hooks: [the_granary_is_empty_before_the_massive_sleeping_body_is_found]
  injury_hazard_hooks: [snorlax-large-body-contact]
  environmental_state_hooks: [sleeping, hungry, feeding, full_and_lethargic, critical_food_store, narrow_route]
  companion_assistance_hooks: [bounded_voluntary_large_body_or_force_help]
  fortune_spike_opportunities: [find_the_feeding_route_early_and_protect_the_only_critical_store]
  trouble_spike_complications: [the_available_food_is_the_same_supply_a_remote_settlement_needs]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_body_or_digestive_capacity_is_not_a_repeatable_resource_node]
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
  scalability_limits: [digestive_resilience_and_food_demand_do_not_create_waste_processing_food_industry_or_economy_systems]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_Snorlax_finish_feeding_and_settle_without_disturbance]
  dangerous: [protect_a_critical_food_store_without_cornering_or_forcing_combat]
  unusual_or_rare: [a_local_food_crisis_is_caused_by_one_exceptional_route_change_not_a_species_wide_village_targeting_rule]
  discovery_insight: [learn_that_early_food_and_route_management_is_more_effective_than_treating_appetite_as_a_global_meter]
  route_environment: [fruit_rich_valley, storehouse_edge, narrow_pass_blocked_by_sleeping_body]
  settlement_culture: [local_food_storage_customs_can_adapt_after_a_specific_incident_without_becoming_universal_proto_kanto_economy]
  cross_species: []
presentation_and_p6_followups:
  initial_bestiary_presentation: tracks_missing_food_and_sleeping_mass_before_numeric_food_claim
  progressive_reveal_notes: [show_sleep_feeding_full_state_changes, keep_Hisui_and_later_docility_context_provenance_scoped]
  species_specific_visual_needs: [clear_sleeping_waking_feeding_and_route_occupation_readability]
  species_specific_audio_needs: [snore_hunger_rumble_and_wake_warning]
  special_ui_or_readability_needs: [resource_crisis_must_be_event_scoped_not_presented_as_a_global_meter]
  p6_followup_required: true
cross_species_links:
  evolution_family: [munchlax_external_post_gen1]
  predator_prey: []
  competition: [food_competition_requires_local_authoring]
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [wild_food_mix, feeding_periodicity, deliberate_toxin_limit, sleep_duration_and_wake_trigger, proto_kanto_settlement_incident_frequency]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [resource_incident_thresholds_sleep_wake_state_rules_and_noncombat_redirection]
  deferred_to_p6: [sleep_feeding_large_body_and_resource_event_readability]
  deferred_to_p7: [cached_appetite_sleep_and_local_resource_event_state_if_runtime_needs_it]
```
