# P4 Batch 18 — #126 Magmar Full-Schema Dossier

Part of `docs/P4_BATCH_18_FULL_SCHEMA_DOSSIERS.md`.

---

## #126 Magmar / 마그마

```yaml
identity:
  national_dex: 126
  species_key: magmar
  official_name_en: Magmar
  official_name_ko: 마그마
  evolution_family_keys: [magby_external_post_gen1, magmar, magmortar_external_post_gen1]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-MAGMAR-SG, P4_BATCH_18_SOURCE_REVIEW]
  official_evidence:
  - claim_id: MAG-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-MAGMAR-SG
    version_context: current_official_portal__OBSERVED_AND_MEASURED
    paraphrase: volcanic_habitat_extreme_temperature_wording_and_wavering_body_flames_are_source_backed
  - claim_id: MAG-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-MAGMAR-SG
    version_context: current_official_portal__OBSERVED_RECOVERY
    paraphrase: wounded_Magmar_may_bathe_in_lava_to_recover
  - claim_id: MAG-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__VERSION_SCOPED_FIRE_EFFECTS_AND_BIRTH_WORDING
    paraphrase: historical_entries_add_vegetation_ignition_heat_distortion_cold_environment_heating_and_stronger_volcanic_birth_wording
  derived_claims:
  - claim_id: MAG-D1-001
    evidence_class: D1
    based_on: [MAG-C1-001, MAG-C1-003]
    statement: heat_and_fire_are_severe_species_local_hazards_resolved_through_authored_exposure
    canon_boundary_note: no_continuous_heat_field_real_world_thermodynamics_or_automatic_ignition
  - claim_id: MAG-D1-002
    evidence_class: D1
    based_on: [MAG-C1-002]
    statement: lava_bathing_can_be_an_authored_recovery_behavior
    canon_boundary_note: no_total_lava_immunity_instant_regeneration_or_unlimited_healing
  - claim_id: MAG-D1-003
    evidence_class: D1
    based_on: [MAG-C1-001, MAG-C1-003]
    statement: current_volcanic_birth_wording_is_legend_bounded_despite_stronger_historical_entries
    canon_boundary_note: no_generic_elemental_spontaneous_generation_rule
canonical_source_data:
  types: [fire]
  base_stats_raw: {hp: 65, attack: 95, defense: 57, special_attack: 100, special_defense: 85, speed: 93}
  abilities_relevant_to_p4: [flame_body_as_modern_context, vital_spirit_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.3_m, weight: 44.5_kg}
  evolution_source:
    evolves_from: magby_external_post_gen1
    evolves_to: [magmortar_external_post_gen1]
    canonical_conditions: [later_family_members_and_modern_evolution_conditions_are_post_Gen1_context_only]
  other_material_facts: [volcanic_habitat, extreme_temperature_claim, body_surface_flames, lava_recovery, version_scoped_vegetation_ignition]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 2
  potency: 5
  resistance: 4
  speed: 4
  derivation_notes: {vigor: hp_65, force: attack_95, guard: defense_57, potency: special_attack_100, resistance: special_defense_85, speed: speed_93}
  calibration_flags: [no_manual_exception, potency_5_does_not_define_temperature_radius_or_material_failure, measured_temperature_is_not_a_damage_formula]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, volcanic_terrain_tolerance_is_contextual_not_universal]
  physical_hazards: [close_range_strikes]
  elemental_environmental_hazards: [severe_heat_exposure, flame_contact, authored_vegetation_ignition]
  anomalous_hazards: []
  behavioral_capabilities: [lava_bathing_recovery_when_injured, heat_output_that_can_make_local_conditions_harsher]
  utility_interaction_capabilities: [bounded_heat_or_fire_interaction_only_when_authored]
  immunities_or_approach_invalidators: [lava_recovery_does_not_imply_total_lava_or_fire_immunity]
  hazard_records:
  - hazard_key: magmar-heat-flame-exposure
    kind: burn
    delivery_or_exposure: [direct_flame_contact, close_authored_heat_lane, ignited_vegetation_or_surface_only_when_event_supports_it]
    prerequisite_or_trigger: [Magmar_outputs_heat_or_flame, target_remains_in_exposure_or_burning_environment]
    warning_signs: [visible_body_flames, heat_shimmer, scorched_vegetation, volcanic_heat]
    immediate_effects: [burn_injury, forced_repositioning, local_fire_spread_when_explicitly_authored]
    delayed_or_persistent_effects: [ordinary_burn_or_smoke_consequences_if_the_event_establishes_them]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_explicit_volcanic_fire_or_named_exceptional_context
    countermeasures: [distance, nonflammable_cover, avoid_dry_fuel_lanes, retreat_from_confined_heat, use_event_specific_fire_protection]
    emergency_consumable_hooks: []
    context_amplifiers: [dry_vegetation, confined_space, volcanic_heat, sustained_escalation]
    context_mitigators: [open_distance, nonflammable_barrier, cleared_fuel, water_or_cooling_only_when_contextually_effective]
    governing_species_axes: [potency]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [MAG-C1-001, MAG-C1-003, MAG-D1-001]
  notes: [heat_is_event_triggered_not_per_frame_thermodynamics, body_flames_do_not_auto_ignite_every_nearby_object]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: iron_age_fire_protection_and_volcanic_access_can_make_heat_exposure_more_dangerous_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: volcanic_or_dry_fuel_context_can_raise_authored_hazard_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [volcanic_mouths_and_hot_localities_when_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [large_fire_adapted_organism_with_strong_heat_output]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_unknown, lava_recovery_is_not_food]
  social_structure: [unknown]
  predator_prey_competitor_links: [none_required]
  environmental_effects: [localized_heat_damage_or_vegetation_ignition_when_triggered, no_automatic_wildfire]
  observable_signs: [heat_shimmer, scorched_plants, warm_rock, lava_bathing_signs_when_event_supports_them]
  locality_constraints: [D034_direct_encounterability_does_not_equal_every_volcano_or_region_wide_presence]
  unsupported_gaps: [surface_temperature_distribution, safe_distance, lava_recovery_rate, material_ignition_thresholds, literal_truth_of_volcanic_birth]
human_perception_and_culture:
  ordinary_attitude: [strong_caution_or_avoidance]
  specialist_knowledge_holders: [volcanic_route_guides, repeat_survivors, fire_watchers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [burns, route_fire, volcanic_exposure]
  myths_omens_taboos: [crater_birth_can_exist_as_legend_not_confirmed_cosmology]
  practical_customs: [keep_distance, avoid_dry_fuel_near_encounters, do_not_block_lava_or_retreat_routes]
  common_misbeliefs: [Magmar_is_literally_made_by_every_volcano, it_cannot_be_hurt_by_lava_or_fire, anything_near_it_ignites]
  local_variation_notes: [no_generic_fire_priesthood_forge_industry_or_elemental_creation_institution_implied]
identification_and_knowledge:
  baseline_recognition: rare
  unknown_presentation_hooks: [heat_shimmer_and_scorched_growth_appear_before_the_flame_wreathed_body]
  local_aliases_or_titles: none
  identification_evidence: [body_flames, volcanic_locality, extreme_heat_signs]
  initial_knowledge_fragments: [close_exposure_is_dangerous, dry_vegetation_can_become_secondary_hazard]
  post_identification_knowledge: [injured_individuals_may_seek_lava_for_recovery]
  advanced_insights: [manage_fuel_distance_and_route_geometry_instead_of_treating_temperature_as_a_radius_formula]
  exceptional_individual_knowledge_hooks: [a_scarred_Magmar_is_known_to_return_to_one_lava_pool_after_conflicts]
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states: [resting, moving, warning, flaming, lava_recovering, withdrawing]
  aggression_tendency: context_dependent_not_implied_by_heat
  territoriality: unknown_or_local
  avoidance_tendency: variable
  warning_signs: [heat_shimmer, flame_intensity_change, scorched_path, volcanic_activity_context]
  encounter_triggers: [route_overlap, disturbance, injured_individual_near_lava, resource_or_shelter_overlap]
  escalation_triggers: [close_pressure, blocked_retreat, attack, confinement_near_fuel]
  deescalation_conditions: [increase_distance, clear_retreat_path, stop_pressuring_injured_individual, leave_hot_zone]
  pursuit_profile: event_bounded
  group_size_effects: [each_Magmar_remains_one_entity_and_multiple_flames_do_not_create_extra_actions]
  ordinary_consequence_categories: [burn_injury, route_denial, localized_fire]
  consequence_ceiling: severe_in_explicit_volcanic_fire_or_exceptional_context
  human_check_hooks:
  - action: cross_or_escape_a_heat_exposure_lane
    relevant_species_axis: potency
    relevant_tags: [heat, flame, ignition]
    relevant_hazard_keys: [magmar-heat-flame-exposure]
    difficulty_guidance: D024_context_from_distance_fuel_cover_airflow_and_current_state
    notes: measured_temperature_never_converts_directly_to_roll_or_damage
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, territorial, bold, unusually_tolerant]
    condition_variants: [calm_flame, high_output, injured, lava_recovering]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_heat_output, repeated_volcanic_survival, local_lineage]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_flame_or_scar_pattern, locality_history, warning_sign]
    warning_or_rumor_hooks: [one_Magmar_is_known_by_a_persistent_scorched_route_to_a_lava_pool]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [voluntary_trust, safe_heat_management, settlement_acceptance_of_fire_risk]
  trust_building_paths: [noncoercive_repeat_contact, respecting_lava_recovery_and_retreat, shared_survival]
  reasons_to_stay: [exceptional_bond, stable_shared_history]
  rejection_or_departure_reasons: [forced_labor_or_heating_use, confinement, blocked_lava_access_during_recovery, coercive_combat]
  human_social_costs: [fire_safety_space, heat_risk, restricted_entry_to_dense_or_flammable_areas]
  logistics:
    food: [species_appropriate_food_exact_diet_unknown]
    water: [regular_access_as_needed_but_not_used_as_a_formulaic_weakness]
    shelter_temperature: [heat_safe_nonflammable_rest_area]
    space_travel: [clearance_from_dry_fuel_and_crowds]
    settlement_restrictions: [strict_fire_safe_area_only]
    special_resources: [none_fixed, lava_access_is_not_a_constant_requirement]
  assistance_capabilities: [bounded_heat_or_fire_help_only_when_voluntary_safe_and_authored]
  handling_boundaries: [no_defeat_to_recruit, no_furnace_or_weapon_role, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [heat_shimmer, scorched_growth, warm_rock, lava_route_signs]
  avoidance_preparation: [clear_fuel, plan_distance_and_cover, avoid_confined_hot_routes]
  resistance_or_protection: [fire_resistant_cover_or_clothing_when_available, distance]
  combat_approach_permissions: [discrete_heat_output_state, authored_ignition_event, lava_recovery_state]
  blocked_or_invalid_approaches: [continuous_heat_radius, automatic_ignition, real_world_thermodynamics, total_lava_immunity, generic_volcanic_birth_cosmology]
  fear_hooks: [the_air_bends_before_the_body_is_visible]
  injury_hazard_hooks: [magmar-heat-flame-exposure]
  environmental_state_hooks: [dry_fuel, volcanic_heat, flame_output, lava_recovery]
  companion_assistance_hooks: [voluntary_bounded_heat_or_fire_interaction]
  fortune_spike_opportunities: [spot_a_cleared_nonflammable_lane_before_the_fire_escalates]
  trouble_spike_complications: [dry_growth_between_the_party_and_exit_becomes_an_authored_secondary_fire]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [living_heat_or_flame_is_not_a_repeatable_resource_node]
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
  scalability_limits: [heat_claims_do_not_create_forges_engines_or_energy_systems_by_themselves]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_Magmar_resting_near_a_volcanic_mouth_from_a_safe_route]
  dangerous: [an_injured_Magmar_moves_toward_lava_across_a_dry_route_and_the_party_must_not_corner_it]
  unusual_or_rare: [a_local_legend_claims_crater_birth_while_direct_observation_remains_agnostic]
  discovery_insight: [learn_that_heat_signs_and_fuel_geometry_matter_more_than_a_fixed_temperature_radius]
  route_environment: [volcanic_pass, dry_ash_slope, lava_pool_edge]
  settlement_culture: [nearby_people_use_avoidance_customs_not_a_Magmar_power_industry]
  cross_species: []
presentation_and_p6_followups:
  initial_bestiary_presentation: heat_shimmer_scorched_signs_and_body_flame_before_legend_or_numbers
  progressive_reveal_notes: [separate_measured_temperature_from_gameplay_formula, reveal_lava_recovery_after_observation]
  species_specific_visual_needs: [clear_flame_output_and_heat_shimmer_state_without_full_screen_ambient_damage_implication]
  species_specific_audio_needs: [bounded_flame_and_heat_warning]
  special_ui_or_readability_needs: [authored_fire_lane_and_secondary_ignition_must_be_readable]
  p6_followup_required: true
cross_species_links:
  evolution_family: [magby_external_post_gen1, magmortar_external_post_gen1]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [temperature_distribution, safe_proximity, lava_recovery_rate, ignition_thresholds, literal_truth_of_crater_birth]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_encounter_numbers_fire_state_transitions_and_counterplay_thresholds]
  deferred_to_p6: [heat_flame_and_ignition_readability]
  deferred_to_p7: [event_driven_heat_state_representation_if_runtime_system_needs_it]
```
