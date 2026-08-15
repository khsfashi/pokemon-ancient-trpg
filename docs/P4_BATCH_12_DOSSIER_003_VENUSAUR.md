# P4 Batch 12 — #003 Venusaur Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #003 Venusaur / 이상해꽃

```yaml
identity:
  national_dex: 3
  species_key: venusaur
  official_name_en: Venusaur
  official_name_ko: 이상해꽃
  evolution_family_keys: [bulbasaur, ivysaur, venusaur]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-VENUSAUR-SG]
  official_evidence:
    - claim_id: VEN-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-VENUSAUR-SG
      version_context: current_official_portal
      paraphrase: Venusaur_converts_sunlight_into_energy_and_its_broad_flower_petals_catch_sunlight
    - claim_id: VEN-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-VENUSAUR-SG
      version_context: current_official_portal
      paraphrase: Venusaur_can_become_more_powerful_in_summer
  derived_claims:
    - claim_id: VEN-D1-001
      evidence_class: D1
      based_on: [VEN-C1-001, VEN-C1-002]
      statement: solar_input_and_season_can_drive_species_local_state_or_encounter_pressure
      canon_boundary_note: no_global_summer_buff_no_unlimited_energy_and_no_generic_Grass_weather_formula
    - claim_id: VEN-D1-002
      evidence_class: D1
      based_on: [VEN-C1-001]
      statement: flower_is_body_integrated_anatomy_and_not_an_ordinary_herb_resource
      canon_boundary_note: no_detachable_loot_or_safe_harvest_rule
canonical_source_data:
  types: [grass, poison]
  base_stats_raw: {hp: 80, attack: 82, defense: 83, special_attack: 100, special_defense: 100, speed: 80}
  abilities_relevant_to_p4: [overgrow_as_modern_low_HP_context, chlorophyll_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 2.0_m, weight: 100.0_kg}
  evolution_source:
    evolves_from: ivysaur
    evolves_to: []
    canonical_conditions: [final_stage_in_mandatory_gen1_chain, modern_level_metadata_is_not_ancient_XP_law]
  other_material_facts: [solar_energy_conversion, broad_flower_sun_capture, summer_power_relationship]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 4
  guard: 4
  potency: 5
  resistance: 5
  speed: 4
  derivation_notes: {vigor: hp_80, force: attack_82, guard: defense_83, potency: special_attack_100, resistance: special_defense_100, speed: speed_80}
  calibration_flags: [no_manual_exception, sunlight_not_weather_formula, flower_not_resource]
capabilities_and_hazards:
  locomotion: [large_terrestrial_movement]
  physical_hazards: [large_body_impact_or_trampling_when_hostile_or_displaced]
  elemental_environmental_hazards: [solar_energy_state_can_amplify_authored_encounter_pressure_without_fixed_multiplier]
  anomalous_hazards: []
  behavioral_capabilities: [sun_exposure_and_season_linked_power_state]
  utility_interaction_capabilities: [large_flower_and_light_orientation_are_observable_state]
  immunities_or_approach_invalidators: []
  hazard_records: []
  notes: [Overgrow_is_modern_context_not_ancient_threshold, solar_energy_is_not_infinite_fuel, hazard_severity_not_capped_by_axes]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: a_large_high_axis_species_with_source_backed_solar_state_can_control_space_more_severely_in_exposed_localities_without_any_global_ancient_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: sun_and_season_may_shift_authored_state_or_route_pressure
  canon_boundary_note: no_summer_or_sun_flat_stat_modifier
ancient_ecology:
  habitat: [exact_ancient_range_unknown, broad_sunny_vegetated_areas_only_when_locally_authored_D2]
  ecological_niche: [large_plant_bearing_terrestrial_Pokemon_with_source_backed_solar_energy_relationship]
  activity_pattern: [sun_oriented_resting_and_movement_only_when_authored_D2]
  seasonal_notes: [summer_relationship_source_backed_but_exact_calendar_thresholds_unknown]
  feeding_and_resource_interaction: [sunlight_contributes_energy_but_does_not_define_complete_diet_or_remove_food_water_needs]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [large_body_and_flower_can_shape_small_clearings_or_route_access_when_authored]
  observable_signs: [large_tracks, compressed_vegetation, broad_flower_silhouette, sun_facing_rest_site]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_diet, social_structure, range, solar_conversion_rate, summer_threshold]
human_perception_and_culture:
  ordinary_attitude: [strong_caution_and_distance_due_to_size_and_power]
  specialist_knowledge_holders: [experienced_hunters, route_guides, seasonal_observers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [being_cut_off_in_open_sun, large_body_collision, provoking_integrated_flower_damage]
  myths_omens_taboos: [summer_or_bloom_omens_only_if_locally_authored_D2]
  practical_customs: [observe_from_cover, avoid_blocking_route_or_rest_site, never_cut_integrated_flower]
  common_misbeliefs: [flower_is_harvestable_medicine, sunlight_makes_it_invincible, summer_is_a_known_numeric_buff]
  local_variation_notes: [cultural_status_depends_on_actual_local_history_not_modern_starter_familiarity]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [massive_quadruped_supporting_a_broad_flower_that_turns_toward_light]
  local_aliases_or_titles: none
  identification_evidence: [large_body, integrated_flower, sun_orientation]
  initial_knowledge_fragments: [open_sun_is_relevant_to_its_state]
  post_identification_knowledge: [it_converts_sunlight_into_energy_and_can_be_stronger_in_summer]
  advanced_insights: [source_backed_solar_relation_does_not_define_generic_type_weather_rules_or_infinite_energy]
  exceptional_individual_knowledge_hooks: [old_Venusaur_with_a_known_seasonal_route_and_unusual_battle_history]
threat_and_encounter:
  baseline_threat_band: high_for_ordinary_humans
  default_behavior_states: [resting, sun_exposed, moving_between_sites, wary, territorial_if_authored, defending]
  aggression_tendency: contextual
  territoriality: moderate_when_local_ecology_authors_it
  avoidance_tendency: low_to_moderate_when_holding_ground
  warning_signs: [body_bracing, route_blocking, flower_orientation_change, heavy_step_toward_intruder]
  encounter_triggers: [entering_resting_space, damaging_or_touching_flower, blocking_movement]
  escalation_triggers: [sustained_attack, fire_or_cutting_near_flower, trapping]
  deescalation_conditions: [withdraw_from_space, stop_contact, open_route]
  pursuit_profile: short_to_contextual_due_to_large_body_and_locality
  group_size_effects: [unknown_no_generic_herd_rule]
  ordinary_consequence_categories: [serious_to_critical_physical_or_elemental_injury, route_denial, equipment_damage]
  consequence_ceiling: critical_possible_under_severe_context_without_automatic_death
  human_check_hooks:
    - action: disengage_from_a_sun_exposed_Venusaur_without_crossing_its_body_line
      relevant_species_axis: speed
      relevant_tags: [solar_energy_state, large_body_space_control]
      relevant_hazard_keys: []
      difficulty_guidance: D024_context_from_cover_distance_route_width_and_current_state
      notes: no_flat_sun_modifier_is_applied
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [calm, territorial, wary, dominant]
    condition_variants: [shade_resting, sun_exposed, injured, exhausted]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, unusual_site_control, repeated_conflict, exceptional_solar_environment_history]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_flower_or_body_marking, known_route_or_behavior_history]
    warning_or_rumor_hooks: [ancient_Venusaur_that_returns_to_one_summer_clearing_and_dominates_it]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [rare_voluntary_persistent_trust, extensive_space_and_resource_capacity, no_forced_containment]
  trust_building_paths: [long_term_noncoercive_contact, protecting_resting_or_sun_access, demonstrated_reliability]
  reasons_to_stay: [deep_bond, stable_territory_shared_with_humans, reliable_resources]
  rejection_or_departure_reasons: [forced_travel, crowding, flower_damage, chronic_environmental_denial]
  human_social_costs: [very_large_space_requirement, settlement_fear, route_and_food_water_logistics]
  logistics:
    food: [exact_non_solar_diet_unknown]
    water: [regular_access]
    shelter_temperature: [large_shelter_or_outdoor_rest_site]
    space_travel: [large_body_requires_route_planning]
    settlement_restrictions: [dense_settlements_may_not_safely_accommodate_it]
    special_resources: [reliable_outdoor_sun_access_without_numeric_energy_meter]
  assistance_capabilities: [large_body_space_control_or_plant_related_help_only_when_voluntary_and_scene_valid]
  handling_boundaries: [no_defeat_to_recruit, no_flower_harvest, no_mount_or_burden_assumption, no_starter_shortcut]
  separation_injury_notes: [loss_of_bond_is_not_inventory_loss_and_forced_retention_is_invalid]
mechanical_hooks:
  tracking_clues: [large_tracks, flattened_vegetation, sun_oriented_rest_site]
  avoidance_preparation: [route_around_open_resting_space, use_cover, leave_clear_withdrawal_path]
  resistance_or_protection: [distance_and_terrain_cover_when_valid]
  combat_approach_permissions: [ordinary_Venusaur_can_remain_high_threat_without_player_scaling]
  blocked_or_invalid_approaches: [harvest_flower, infer_infinite_solar_energy, apply_global_summer_or_Grass_weather_buff]
  fear_hooks: [huge_flower_turns_toward_sun_as_the_body_blocks_the_path]
  injury_hazard_hooks: []
  environmental_state_hooks: [sun_exposure, season_context, route_width, cover]
  companion_assistance_hooks: [large_space_control_if_bonded_and_event_allows]
  fortune_spike_opportunities: [terrain_or_cloud_cover_opens_a_withdrawal_window]
  trouble_spike_complications: [midday_open_ground_removes_safe_cover]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_integrated_flower_is_not_a_special_drop
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [flower_or_plant_structure_removal_not_supported]
  taboo_or_protection: [local_reverence_or_avoidance_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [solar_energy_relation_does_not_create_human_solar_technology_or_harvestable_power_source]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_Venusaur_reorient_toward_sun_without_interfering]
  dangerous: [a_route_crosses_an_open_summer_resting_ground_and_requires_noncombat_withdrawal_or_detour]
  unusual_or_rare: [exceptional_old_Venusaur_has_a_persistent_seasonal_territory]
  discovery_insight: [solar_power_is_real_but_not_a_universal_weather_stat_system]
  route_environment: [sun_cover_and_route_width_control_contact]
  settlement_culture: [locals_may_mark_its_summer_ground_as_forbidden_without_owning_it]
  cross_species: [Bulbasaur_seed_and_Ivysaur_bud_rules_do_not_auto_define_Venusaur_diet_or_mechanics]
presentation_and_p6_followups:
  initial_bestiary_presentation: massive_quadruped_with_a_body_integrated_flower_and_sun_linked_power_state
  progressive_reveal_notes: [show_scale_and_solar_orientation_without_buff_bar_or_resource_icon]
  species_specific_visual_needs: [flower_body_integration, large_scale, sun_or_shade_state]
  species_specific_audio_needs: [heavy_step_and_body_presence]
  special_ui_or_readability_needs: [no_generic_summer_or_Grass_buff_icon]
  p6_followup_required: true
cross_species_links:
  evolution_family: [bulbasaur, ivysaur]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_solar_conversion_rate, exact_diet, summer_threshold, exact_ancient_range, social_structure]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [solar_state_and_large_body_space_control_timing]
  deferred_to_p6: [scale_flower_and_sun_state_visualization]
  deferred_to_p7: []
```
