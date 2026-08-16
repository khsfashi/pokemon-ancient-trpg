# P4 Batch 18 — #138 Omanyte Full-Schema Dossier

Part of `docs/P4_BATCH_18_FULL_SCHEMA_DOSSIERS.md`.

---

## #138 Omanyte / 암나이트

```yaml
identity:
  national_dex: 138
  species_key: omanyte
  official_name_en: Omanyte
  official_name_ko: 암나이트
  evolution_family_keys: [omanyte, omastar]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-OMANYTE-SG, P4_BATCH_18_SOURCE_REVIEW]
  official_evidence:
  - claim_id: OMY-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-OMANYTE-SG
    version_context: current_official_portal__DEEP_TIME_AND_RESTORATION_SCOPED
    paraphrase: Omanyte_lived_in_ancient_seas_and_current_material_places_living_restoration_in_a_fossil_context
  - claim_id: OMY-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-OMANYTE-SG
    version_context: current_official_portal__FOSSIL_PREDATION_EVIDENCE
    paraphrase: some_fossils_show_bite_marks_attributed_to_Archeops_predation
  - claim_id: OMY-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__EXTINCTION_SWIMMING_BUOYANCY_AND_DEFENSE
    paraphrase: historical_entries_add_long_extinction_ten_tentacle_swimming_shell_air_buoyancy_plankton_feeding_and_shell_withdrawal
  derived_claims:
  - claim_id: OMY-D1-001
    evidence_class: D1
    based_on: [OMY-C1-001, OMY-C1-003]
    statement: fossil_restoration_is_modern_context_and_does_not_define_ancient_human_technology
    canon_boundary_note: no_fossil_revive_device_recipe_or_time_travel
  - claim_id: OMY-D1-002
    evidence_class: D1
    based_on: [OMY-C1-003]
    statement: swimming_buoyancy_and_shell_withdrawal_are_species_local_capabilities
    canon_boundary_note: ten_tentacles_do_not_add_turns_and_shell_withdrawal_is_not_invulnerability
  - claim_id: OMY-D2-001
    evidence_class: D2
    based_on: [OMY-C1-001, OMY-C1-003]
    statement: D034_is_satisfied_by_one_exceptionally_isolated_marine_relict_locality_with_a_tiny_self_sustaining_lineage
    canon_boundary_note: project_authored_locality_not_franchise_canon_and_not_ordinary_proto_kanto_coastal_abundance
canonical_source_data:
  types: [rock, water]
  base_stats_raw: {hp: 35, attack: 40, defense: 100, special_attack: 90, special_defense: 55, speed: 35}
  abilities_relevant_to_p4: [swift_swim_as_modern_context, shell_armor_as_modern_context, weak_armor_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 0.4_m, weight: 7.5_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [omastar]
    canonical_conditions: [modern_level_condition_is_metadata_not_kill_XP_or_visible_leveling]
  other_material_facts: [ancient_sea_provenance, ten_tentacle_swimming, version_scoped_shell_air_buoyancy, shell_withdrawal, plankton_feeding]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 2
  guard: 5
  potency: 4
  resistance: 2
  speed: 1
  derivation_notes: {vigor: hp_35, force: attack_40, guard: defense_100, potency: special_attack_90, resistance: special_defense_55, speed: speed_35}
  calibration_flags: [no_manual_exception, guard_5_does_not_make_shell_unbreakable, speed_1_does_not_remove_aquatic_mobility_permissions]
capabilities_and_hazards:
  locomotion: [aquatic_ten_tentacle_swimming, version_scoped_buoyancy_control]
  physical_hazards: [shell_body_collision_or_tentacle_contact_when_escalated]
  elemental_environmental_hazards: [aquatic_environment_dependency]
  anomalous_hazards: []
  behavioral_capabilities: [plankton_feeding, shell_withdrawal_defense]
  utility_interaction_capabilities: [bounded_aquatic_movement_and_buoyancy]
  immunities_or_approach_invalidators: [shell_withdrawal_does_not_create_invulnerability]
  hazard_records:
  - hazard_key: omanyte-aquatic-contact
    kind: drowning
    delivery_or_exposure: [human_enters_deep_or_confined_water_during_encounter, route_requires_following_Omanyte_into_unsafe_water]
    prerequisite_or_trigger: [aquatic_terrain_is_material_to_the_scene]
    warning_signs: [deep_water, current, narrow_submerged_passage, Omanyte_remaining_mobile_where_humans_are_not]
    immediate_effects: [position_loss, drowning_exposure_or_separation_if_the_human_overcommits]
    delayed_or_persistent_effects: [ordinary_drowning_or_exhaustion_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_explicit_deep_water_or_storm_context
    countermeasures: [do_not_chase_into_unsafe_water, use_route_specific_water_safety, maintain_exit_and_surface_access]
    emergency_consumable_hooks: []
    context_amplifiers: [deep_water, current, confined_cave_pool]
    context_mitigators: [shallow_water, stable_shoreline, secured_exit]
    governing_species_axes: [speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [OMY-C1-003, OMY-D1-002]
  notes: [aquatic_advantage_is_environmental_not_a_second_stat_profile, shell_state_can_be_discrete]
ancient_strength:
  classifications: [similar_to_modern_baseline, local_stronger_lineage]
  evidence_class: D2
  rationale: the_relict_lineage_may_be_locally_adapted_only_if_authored_but_no_global_ancient_stat_bonus_is_required
  stat_effect_if_any: none_by_default
  behavior_effect_if_any: isolated_locality_can_make_aquatic_escape_and_shell_defense_more_relevant
  canon_boundary_note: lineage_continuity_does_not_establish_commonness_or_player_scaled_strength
ancient_ecology:
  habitat: [one_exceptionally_isolated_marine_relict_locality, ancient_sea_context]
  ecological_niche: [small_aquatic_plankton_feeder_with_shell_defense]
  activity_pattern: [unknown]
  seasonal_notes: [locality_specific_and_unknown]
  feeding_and_resource_interaction: [plankton_feeding_version_scoped_source_backed, relict_food_web_must_be_authored_locally]
  social_structure: [tiny_self_sustaining_lineage_requires_local_viability_but_exact_group_structure_unknown]
  predator_prey_competitor_links: [Archeops_bite_marks_are_deep_time_evidence_only_not_present_locality_requirement]
  environmental_effects: [none_required]
  observable_signs: [shell_fragments_or_fossils_only_when_authored, tentacle_tracks_in_shallow_silt, plankton_grazing_signs_if_readable]
  locality_constraints: [exactly_one_exceptional_relict_content_chain_by_default, no_ordinary_coastal_population, no_human_restoration]
  unsupported_gaps: [extinction_timing_relative_to_project_calendar, exact_buoyancy_mechanism, shell_failure_limits, relict_population_size_and_geography]
human_perception_and_culture:
  ordinary_attitude: [unknown_or_disbelieving_outside_the_relict_locality]
  specialist_knowledge_holders: [rare_fossil_find_interpreters, relict_locality_discoverers_if_any]
  benefits_and_services: [none_required]
  fears_and_avoidance: [dangerous_water_and_unknown_ancient_organism_more_than_inherent_aggression]
  myths_omens_taboos: [local_fossil_or_old_sea_stories_may_exist_as_D2_not_region_wide_fact]
  practical_customs: [do_not_damage_the_tiny_relict_population, avoid_chasing_into_unsafe_water]
  common_misbeliefs: [every_fossil_can_be_revived, Omanyte_is_common_on_old_coasts, the_relict_lineage_requires_time_travel]
  local_variation_notes: [relict_locality_knowledge_is_content_gated]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_living_spiral_shelled_creature_moves_in_water_where_only_fossils_were_expected]
  local_aliases_or_titles: none
  identification_evidence: [spiral_shell, tentacles, aquatic_movement, fossil_similarity]
  initial_knowledge_fragments: [it_is_alive_and_water_capable, shell_withdrawal_changes_approach]
  post_identification_knowledge: [ancient_sea_provenance_and_extinction_restoration_context]
  advanced_insights: [living_presence_is_a_project_authored_relict_lineage_not_evidence_of_restoration_technology]
  exceptional_individual_knowledge_hooks: [an_old_shell_pattern_identifies_one_long_observed_relict_individual]
threat_and_encounter:
  baseline_threat_band: low_to_moderate
  default_behavior_states: [feeding, drifting_or_swimming, withdrawing_into_shell, fleeing_through_water, defensive_contact]
  aggression_tendency: low_or_defensive_by_default
  territoriality: unknown_or_local
  avoidance_tendency: high_when_threatened
  warning_signs: [shell_withdrawal, movement_toward_deeper_water]
  encounter_triggers: [relict_locality_discovery, shoreline_or_pool_crossing, food_web_observation]
  escalation_triggers: [cornering, handling, blocking_water_escape, harm_to_lineage]
  deescalation_conditions: [back_away, restore_water_exit, stop_handling, leave_feeding_area]
  pursuit_profile: low
  group_size_effects: [each_Omanyte_is_one_entity_and_tentacles_do_not_add_actions]
  ordinary_consequence_categories: [minor_or_serious_contact_injury, water_position_loss, ecological_damage_if_population_is_harmed]
  consequence_ceiling: serious_normally_severe_only_from_environment_or_exceptional_context
  human_check_hooks:
  - action: approach_or_observe_without_driving_it_into_unsafe_water
    relevant_species_axis: speed
    relevant_tags: [aquatic_mobility, shell_withdrawal]
    relevant_hazard_keys: [omanyte-aquatic-contact]
    difficulty_guidance: D024_context_from_water_depth_exit_access_visibility_and_current_state
    notes: low_speed_rating_does_not_make_human_water_chase_safe
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, calm, defensive]
    condition_variants: [feeding, swimming, shell_withdrawn, injured]
    local_lineage_variants: [relict_lineage_traits_require_explicit_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: exceptionally_rare_inside_an_already_tiny_lineage
    candidate_causes: [age, shell_growth, unusual_buoyancy_control, persistent_injury_adaptation]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_shell_pattern_or_damage, observed_history]
    warning_or_rumor_hooks: [one_large_old_shell_is_seen_only_in_the_deepest_pool]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [voluntary_trust, conservation_safe_removal_or_locality_compatible_life, reliable_aquatic_habitat]
  trust_building_paths: [noncoercive_repeat_contact, protection_of_relict_habitat, food_and_space_without_capture]
  reasons_to_stay: [exceptional_bond_only]
  rejection_or_departure_reasons: [forced_collection, habitat_denial, shell_damage, coercive_combat]
  human_social_costs: [extreme_rarity_and_conservation_pressure, need_for_aquatic_habitat]
  logistics:
    food: [plankton_or_species_appropriate_aquatic_food_exact_mix_unknown]
    water: [reliable_suitable_water_required]
    shelter_temperature: [locality_appropriate_aquatic_conditions]
    space_travel: [water_transport_without_portable_containment_is_difficult]
    settlement_restrictions: [ordinary_dry_settlement_life_is_poor_fit]
    special_resources: [stable_aquatic_habitat]
  assistance_capabilities: [bounded_aquatic_observation_or_movement_only]
  handling_boundaries: [no_defeat_to_recruit, no_fossil_collection_logic_for_living_individuals, one_visible_companion_slot]
  separation_injury_notes: [removal_from_tiny_lineage_can_be_an_ecological_cost]
mechanical_hooks:
  tracking_clues: [living_shell_tracks, water_movement, fossil_similarity]
  avoidance_preparation: [water_safety, nonintrusive_observation, preserve_exit_routes]
  resistance_or_protection: [ordinary_water_safety_and_distance]
  combat_approach_permissions: [discrete_shell_withdrawn_state, aquatic_buoyancy_or_escape_state]
  blocked_or_invalid_approaches: [shell_invulnerability, ten_actions_for_ten_tentacles, fossil_revive_crafting, ordinary_coastal_abundance]
  fear_hooks: [the_fossil_shape_moves]
  injury_hazard_hooks: [omanyte-aquatic-contact]
  environmental_state_hooks: [shallow_water, deep_water, shell_withdrawn, relict_habitat_integrity]
  companion_assistance_hooks: [bounded_aquatic_help]
  fortune_spike_opportunities: [recognize_a_safe_shallow_observation_point]
  trouble_spike_complications: [a_frightened_Omanyte_retreats_toward_water_the_party_cannot_safely_follow]
hunting_materials_and_resources:
  killing_treatment: strongly_discouraged_by_tiny_relict_population_and_no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [fossils_or_shell_remains_only_when_specific_event_provenance_supports_them]
  dangerous_harvesting: [living_individuals_are_not_fossil_or_shell_resource_nodes]
  taboo_or_protection: [local_conservation_pressure_is_valid_D2]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [modern_fossil_restoration_is_explicitly_not_an_ancient_technology_bridge]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_tiny_relict_lineage_feeding_without_revealing_or_damaging_the_site]
  dangerous: [a_water_chase_temptation_turns_the_environment_into_the_primary_hazard]
  unusual_or_rare: [discover_a_living_Omanyte_where_fossil_evidence_suggested_only_extinction]
  discovery_insight: [learn_that_direct_encounterability_does_not_mean_commonness_or_restoration]
  route_environment: [isolated_marine_cave_or_equivalent_relict_ecosystem_exact_geography_deferred]
  settlement_culture: [outside_people_may_treat_living_reports_as_unverified]
  cross_species: [Omastar_shares_the_same_relict_lineage_and_locality]
presentation_and_p6_followups:
  initial_bestiary_presentation: fossil_like_silhouette_and_aquatic_behavior_before_relict_explanation
  progressive_reveal_notes: [reveal_relict_lineage_as_project_authored_content_not_canon_restoration]
  species_specific_visual_needs: [shell_withdrawal_and_tentacle_swimming_readability]
  species_specific_audio_needs: [subtle_water_and_shell_contact_cues]
  special_ui_or_readability_needs: [relict_rarity_and_habitat_state_must_not_imply_collectible_spawn_farming]
  p6_followup_required: true
cross_species_links:
  evolution_family: [omastar]
  predator_prey: [archeops_external_post_gen1_deep_time_evidence_only]
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [omastar]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [extinction_timing, buoyancy_mechanism, shell_failure_limits, exact_relict_population_size_and_geography]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [relict_content_chain_encounter_numbers_and_water_state_rules]
  deferred_to_p6: [shell_swimming_and_relict_rarity_readability]
  deferred_to_p7: [cached_locality_population_or_encounter_eligibility_if_runtime_needs_it]
```
