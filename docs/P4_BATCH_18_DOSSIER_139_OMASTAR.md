# P4 Batch 18 — #139 Omastar Full-Schema Dossier

Part of `docs/P4_BATCH_18_FULL_SCHEMA_DOSSIERS.md`.

---

## #139 Omastar / 암스타

```yaml
identity:
  national_dex: 139
  species_key: omastar
  official_name_en: Omastar
  official_name_ko: 암스타
  evolution_family_keys: [omanyte, omastar]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-OMASTAR-SG, P4_BATCH_18_SOURCE_REVIEW]
  official_evidence:
  - claim_id: OMS-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-OMASTAR-SG
    version_context: current_official_portal__OBSERVED_PREDATION
    paraphrase: Omastar_wraps_prey_with_tentacles_and_uses_sharp_fangs_after_capture_or_restraint
  - claim_id: OMS-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-OMASTAR-SG
    version_context: current_official_portal__SCIENTIST_INTERPRETATION
    paraphrase: heavy_shell_is_thought_to_have_contributed_to_the_species_dying_out
  - claim_id: OMS-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__EXTINCTION_RESTRAINT_AND_ANCESTRY_CONTEXT
    paraphrase: historical_entries_vary_from_direct_to_theory_like_shell_extinction_wording_and_include_extraordinary_never_release_restraint_language
  derived_claims:
  - claim_id: OMS-D1-001
    evidence_class: D1
    based_on: [OMS-C1-001]
    statement: tentacle_capture_and_fang_predation_support_a_real_restraint_hazard
    canon_boundary_note: restraint_requires_warning_eligibility_counterplay_and_escape_and_never_removes_player_input_automatically
  - claim_id: OMS-D1-002
    evidence_class: D1
    based_on: [OMS-C1-002, OMS-C1-003]
    statement: heavy_shell_mobility_burden_is_source_backed_but_extinction_causality_remains_theory_or_version_scoped
    canon_boundary_note: no_fixed_speed_stamina_penalty_formula_or_unbreakable_shell
  - claim_id: OMS-D2-001
    evidence_class: D2
    based_on: [OMS-C1-002, OMS-C1-003]
    statement: D034_is_satisfied_by_the_same_exceptionally_isolated_marine_relict_locality_as_Omanyte_with_a_tiny_self_sustaining_lineage
    canon_boundary_note: project_authored_locality_not_ordinary_abundance_restoration_or_time_travel
canonical_source_data:
  types: [rock, water]
  base_stats_raw: {hp: 70, attack: 60, defense: 125, special_attack: 115, special_defense: 70, speed: 55}
  abilities_relevant_to_p4: [swift_swim_as_modern_context, shell_armor_as_modern_context, weak_armor_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.0_m, weight: 35.0_kg}
  evolution_source:
    evolves_from: omanyte
    evolves_to: []
    canonical_conditions: [modern_level_condition_is_metadata_not_kill_XP_or_visible_leveling]
  other_material_facts: [tentacle_capture, fang_predation, heavy_shell_mobility_burden, theory_scoped_extinction_explanation, Octillery_distant_ancestry_as_later_context]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 3
  guard: 6
  potency: 5
  resistance: 3
  speed: 2
  derivation_notes: {vigor: hp_70, force: attack_60, guard: defense_125, potency: special_attack_115, resistance: special_defense_70, speed: speed_55}
  calibration_flags: [no_manual_exception, guard_6_does_not_mean_unbreakable_shell, speed_2_is_not_a_fixed_heavy_shell_penalty_formula]
capabilities_and_hazards:
  locomotion: [aquatic_movement, heavy_shell_burden_is_contextual]
  physical_hazards: [tentacle_restraint, fang_predation, shell_body_collision]
  elemental_environmental_hazards: [aquatic_environment_dependency]
  anomalous_hazards: []
  behavioral_capabilities: [prey_capture_and_restraint]
  utility_interaction_capabilities: [bounded_aquatic_movement]
  immunities_or_approach_invalidators: [high_guard_does_not_invalidate_all_attacks_or_escape_attempts]
  hazard_records:
  - hazard_key: omastar-tentacle-restraint
    kind: entanglement
    delivery_or_exposure: [close_range_tentacle_contact_after_positioning_or_attack, prey_is_cornered_or_reachable]
    prerequisite_or_trigger: [Omastar_commits_to_capture_or_predation, target_is_in_a_valid_close_range_state]
    warning_signs: [tentacle_reach, closing_distance, blocked_water_or_shore_exit, predatory_orientation]
    immediate_effects: [restrained_or_partially_restrained_position, fang_attack_exposure, loss_of_easy_movement]
    delayed_or_persistent_effects: [continued_restraint_only_while_encounter_state_and_counterplay_support_it]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_explicit_predatory_or_named_exceptional_context
    countermeasures: [maintain_distance, keep_exit_space, break_line_or_leverage, use_allies_or_environment_to_create_escape_opportunity]
    emergency_consumable_hooks: []
    context_amplifiers: [confined_water, cornered_position, failed_distance_management]
    context_mitigators: [open_space, hard_cover, distance, available_escape_route]
    governing_species_axes: [force, guard]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [OMS-C1-001, OMS-D1-001]
  - hazard_key: omastar-aquatic-pursuit
    kind: drowning
    delivery_or_exposure: [human_follows_or_flees_through_deep_or_confined_water]
    prerequisite_or_trigger: [aquatic_terrain_is_material_to_the_encounter]
    warning_signs: [deep_water, restricted_surface_access, Omastar_retains_aquatic_mobility]
    immediate_effects: [position_loss, drowning_or_exhaustion_exposure]
    delayed_or_persistent_effects: [ordinary_environmental_consequences_only]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_in_explicit_deep_water_context
    countermeasures: [do_not_overcommit_into_unsafe_water, preserve_surface_and_shore_access, use_route_specific_water_safety]
    emergency_consumable_hooks: []
    context_amplifiers: [deep_water, current, confined_cave_pool]
    context_mitigators: [stable_shore, shallow_water, secured_exit]
    governing_species_axes: [speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [OMS-D2-001]
  notes: [multiple_tentacles_never_create_extra_turns_health_pools_or_entities, restraint_never_silently_removes_player_agency]
ancient_strength:
  classifications: [similar_to_modern_baseline, local_stronger_lineage]
  evidence_class: D2
  rationale: relict_locality_conditions_may_make_shell_and_restraint_pressure_more_relevant_without_global_stat_inflation
  stat_effect_if_any: none_by_default
  behavior_effect_if_any: confined_aquatic_geometry_can_strengthen_authored_restraint_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [one_exceptionally_isolated_marine_relict_locality, ancient_sea_context]
  ecological_niche: [armored_aquatic_predator]
  activity_pattern: [unknown]
  seasonal_notes: [locality_specific_and_unknown]
  feeding_and_resource_interaction: [prey_capture_is_source_backed, exact_relict_prey_roster_unknown]
  social_structure: [tiny_self_sustaining_lineage_requires_local_viability_but_exact_structure_unknown]
  predator_prey_competitor_links: [prey_relationships_require_local_authoring, Shellder_claim_is_version_scoped, Octillery_ancestry_is_later_context]
  environmental_effects: [none_required]
  observable_signs: [predation_marks_or_shell_tracks_only_when_event_supports_them]
  locality_constraints: [same_bounded_relict_content_chain_as_Omanyte, no_ordinary_regional_abundance, no_restoration_or_time_travel]
  unsupported_gaps: [exact_extinction_cause, tentacle_grip_force, release_conditions, relict_population_size_and_geography, Octillery_ancestry_mechanism]
human_perception_and_culture:
  ordinary_attitude: [unknown_or_disbelieving_outside_relict_locality, strong_caution_after_direct_predatory_evidence]
  specialist_knowledge_holders: [relict_locality_survivors_or_observers, fossil_interpreters]
  benefits_and_services: [none_required]
  fears_and_avoidance: [restraint, fangs, unsafe_water]
  myths_omens_taboos: [shell_extinction_stories_may_be_told_as_theory_or_D2_not_certain_history]
  practical_customs: [keep_distance, preserve_escape_route, never_assume_shell_or_speed_behavior_from_one_number]
  common_misbeliefs: [wrapped_preys_can_never_escape, shell_is_indestructible, all_old_coasts_contain_Omastar]
  local_variation_notes: [knowledge_is_content_gated_by_relict_discovery]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_large_spiral_shell_moves_and_tentacles_close_on_prey_in_a_hidden_marine_refuge]
  local_aliases_or_titles: none
  identification_evidence: [large_spiral_shell, tentacles, fangs, fossil_similarity]
  initial_knowledge_fragments: [close_range_can_become_a_restraint_problem, shell_is_highly_defensive_not_invulnerable]
  post_identification_knowledge: [extinction_explanations_are_theory_scoped_and_the_lineage_is_exceptional]
  advanced_insights: [distance_and_escape_geometry_preserve_agency_against_restraint]
  exceptional_individual_knowledge_hooks: [one_old_Omastar_is_recognized_by_shell_damage_and_a_specific_hunting_cove]
threat_and_encounter:
  baseline_threat_band: high_in_close_aquatic_context
  default_behavior_states: [resting, observing, stalking, closing, restraining, biting, withdrawing]
  aggression_tendency: predatory_or_defensive_context_dependent
  territoriality: unknown_or_local
  avoidance_tendency: variable
  warning_signs: [tentacle_orientation, closing_distance, prey_signs, blocked_exit_geometry]
  encounter_triggers: [relict_locality_discovery, prey_overlap, route_crossing, disturbance]
  escalation_triggers: [close_approach, cornering, prey_behavior, harm_to_lineage]
  deescalation_conditions: [create_distance, leave_hunting_space, stop_pressure, restore_retreat_or_water_route]
  pursuit_profile: event_bounded_and_environment_dependent
  group_size_effects: [each_Omastar_is_one_entity_and_each_individual_uses_one_ordinary_turn_health_state_and_initiative_presence]
  ordinary_consequence_categories: [restraint, bite_injury, water_position_loss]
  consequence_ceiling: severe_in_explicit_predatory_or_exceptional_context
  human_check_hooks:
  - action: avoid_or_escape_tentacle_restraint
    relevant_species_axis: force
    relevant_tags: [tentacle_restraint, predation]
    relevant_hazard_keys: [omastar-tentacle-restraint]
    difficulty_guidance: D024_context_from_distance_leverage_cover_allies_and_current_restraint_state
    notes: extraordinary_never_release_wording_is_not_auto_failure
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, territorial, predatory, unusually_tolerant]
    condition_variants: [resting, hunting, restraining, injured]
    local_lineage_variants: [relict_lineage_traits_require_explicit_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: exceptionally_rare_inside_an_already_tiny_lineage
    candidate_causes: [age, shell_growth_or_damage, hunting_history, local_lineage]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_shell_damage, hunting_history, behavior_tell]
    warning_or_rumor_hooks: [one_Omastar_is_known_by_a_broken_shell_ridge_and_repeated_hunting_ground]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [voluntary_trust, conservation_safe_relationship, reliable_aquatic_habitat, restraint_safety]
  trust_building_paths: [noncoercive_repeat_contact, protecting_habitat, respecting_predation_and_retreat_boundaries]
  reasons_to_stay: [exceptional_bond_only]
  rejection_or_departure_reasons: [forced_collection, habitat_denial, shell_harvesting, coercive_restraint_use]
  human_social_costs: [extreme_rarity, predatory_restraint_risk, aquatic_habitat_requirement]
  logistics:
    food: [species_appropriate_prey_or_food_exact_mix_unknown]
    water: [reliable_suitable_water_required]
    shelter_temperature: [locality_appropriate_aquatic_conditions]
    space_travel: [water_transport_without_portable_containment_is_difficult]
    settlement_restrictions: [ordinary_dense_dry_settlement_life_is_poor_fit]
    special_resources: [stable_aquatic_habitat]
  assistance_capabilities: [bounded_aquatic_or_grip_assistance_only_when_voluntary_and_safe]
  handling_boundaries: [no_defeat_to_recruit, no_restraint_labor_role, no_shell_harvest, one_visible_companion_slot]
  separation_injury_notes: [removal_from_tiny_lineage_can_be_an_ecological_cost]
mechanical_hooks:
  tracking_clues: [shell_tracks_or_predation_signs, disturbed_water, fossil_similarity]
  avoidance_preparation: [maintain_distance, preserve_hard_cover_and_exit, water_safety]
  resistance_or_protection: [distance, cover, leverage_and_escape_help]
  combat_approach_permissions: [discrete_restraint_state, aquatic_positioning]
  blocked_or_invalid_approaches: [automatic_immobilization, multiple_actions_from_tentacles, unbreakable_shell, fixed_heavy_shell_speed_formula, ordinary_coastal_abundance]
  fear_hooks: [the_tentacles_close_before_the_large_shell_has_to_move_far]
  injury_hazard_hooks: [omastar-tentacle-restraint, omastar-aquatic-pursuit]
  environmental_state_hooks: [open_water, confined_water, shoreline_exit, restraint_state, relict_habitat_integrity]
  companion_assistance_hooks: [bounded_voluntary_aquatic_or_grip_help]
  fortune_spike_opportunities: [use_cover_and_leverage_to_open_an_escape_window]
  trouble_spike_complications: [the_only_easy_exit_moves_into_deeper_water_during_a_restraint_attempt]
hunting_materials_and_resources:
  killing_treatment: strongly_discouraged_by_tiny_relict_population_and_no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none_without_explicit_biological_evidence
  natural_remains: [fossils_or_shell_remains_only_when_specific_event_provenance_supports_them]
  dangerous_harvesting: [living_shell_and_tentacles_are_not_repeatable_resource_nodes]
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
  scalability_limits: [fossil_or_shell_evidence_does_not_create_restoration_craft_or_generic_armor_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_Omastar_hunting_or_resting_without_disturbing_the_relict_lineage]
  dangerous: [escape_a_tentacle_restraint_without_following_the_predator_into_unsafe_water]
  unusual_or_rare: [discover_Omanyte_and_Omastar_as_a_living_lineage_in_one_exceptional_refuge]
  discovery_insight: [learn_that_the_shell_extinction_story_is_theory_scoped_and_restraint_has_counterplay]
  route_environment: [isolated_marine_cave_or_equivalent_relict_ecosystem_exact_geography_deferred]
  settlement_culture: [reports_of_a_living_Omastar_remain_rare_and_contested]
  cross_species: [Omanyte_shares_the_same_relict_lineage]
presentation_and_p6_followups:
  initial_bestiary_presentation: large_shell_tentacle_reach_and_escape_geometry_before_extinction_theory
  progressive_reveal_notes: [show_restraint_counterplay_visibly, reveal_relict_lineage_as_project_extrapolation]
  species_specific_visual_needs: [tentacle_reach_restraint_state_and_shell_damage_readability]
  species_specific_audio_needs: [water_and_shell_movement_warning]
  special_ui_or_readability_needs: [restrained_state_must_preserve_clear_available_actions_and_escape_routes]
  p6_followup_required: true
cross_species_links:
  evolution_family: [omanyte]
  predator_prey: [shellder_version_scoped_claim_only, other_prey_requires_local_authoring]
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [omanyte]
  cultural_or_material_dependencies: [octillery_external_post_gen1_ancestry_context_only]
open_questions_and_gates:
  unresolved_sources: [exact_extinction_cause, tentacle_grip_force, release_conditions, relict_population_size_and_geography, Octillery_ancestry_mechanism]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [restraint_resolution_numbers_and_relict_encounter_chain]
  deferred_to_p6: [tentacle_counterplay_shell_and_water_state_readability]
  deferred_to_p7: [cached_restraint_and_locality_eligibility_state_if_runtime_needs_it]
```
