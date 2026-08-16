# P4 Final Promotion — #151 Mew Full-Schema Dossier

Status: **COMPLETE**  
Date: **2026-08-16**  
Tracks: **#5**  
Promotes the reviewed pilot entry from `docs/P4_PILOT_FULL_SCHEMA_DOSSIERS.md` against the final frozen P4 schema and D-034.

The pilot evidence remains authoritative for `MEW-*` claim IDs. The old pilot's indirect-presence fixture predates D-034 and remains useful for rarity/knowledge presentation, but indirect evidence alone no longer satisfies final roster encounter coverage. This dossier adds exactly one narrow project-authored guarantee: a rare authored event chain must be able to culminate in an actual living Mew voluntarily remaining observable long enough for a meaningful direct player interaction choice. This does not create a routine spawn, natural population claim, capture path, companionship path, or unlimited Psychic capability.

---

## #151 Mew / 뮤

```yaml
identity:
  national_dex: 151
  species_key: mew
  official_name_en: Mew
  official_name_ko: 뮤
  evolution_family_keys: [mew]
  mandatory_gen1_roster: true
  dossier_status: complete

provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001@2cda0b56, OFFICIAL-DEX-MEW, P4_PILOT_EVIDENCE_AND_HAZARD_PACKETS, D-034]
  official_evidence:
  - claim_id: MEW-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-MEW
    version_context: reviewed_official_portal_context
    paraphrase: official_material_presents_the_all_Pokemon_genetic_composition_claim_with_epistemic_qualification_rather_than_as_project_omniscience
  - claim_id: MEW-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-MEW
    version_context: reviewed_official_portal_context
    paraphrase: official_material_describes_Mew_as_able_to_make_itself_invisible_and_avoid_notice_even_near_people
  derived_claims:
  - claim_id: MEW-D1-001
    evidence_class: D1
    based_on: [MEW-C1-002]
    statement: ordinary_visual_tracking_or_encounter_discovery_cannot_be_assumed_to_work_when_Mew_chooses_to_avoid_observation
    canon_boundary_note: invalid_visual_access_is_a_permission_state_not_an_infinite_TN_or_generic_psychic_power
  - claim_id: MEW-U-001
    evidence_class: U
    based_on: [MEW-C1-001]
    statement: Psychic_typing_broad_move_access_or_the_qualified_genetic_claim_does_not_define_an_unbounded_can_do_anything_psychically_package
    canon_boundary_note: specific_capabilities_require_specific_evidence_or_explicit_D2_event_authoring
  - claim_id: MEW-D2-034
    evidence_class: D2
    based_on: [MEW-C1-002]
    statement: final_total_game_coverage_uses_a_rare_authored_stateful_chain_that_can_culminate_in_a_living_Mew_voluntarily_remaining_visible_long_enough_for_the_player_to_make_a_meaningful_noncoercive_direct_interaction_choice
    canon_boundary_note: this_is_a_game_content_guarantee_not_proof_of_commonness_natural_population_friendliness_capture_companionship_or_unlimited_power

canonical_source_data:
  types: [psychic]
  base_stats_raw: {hp: 100, attack: 100, defense: 100, special_attack: 100, special_defense: 100, speed: 100}
  abilities_relevant_to_p4: [synchronize_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_access_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 0.4_m, weight: 4.0_kg}
  evolution_source:
    evolves_from: none
    evolves_to: []
    canonical_conditions: []
  other_material_facts: [epistemically_qualified_genetic_composition_claim, voluntary_invisibility_or_observation_avoidance]

species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 5
  force: 5
  guard: 5
  potency: 5
  resistance: 5
  speed: 5
  derivation_notes: {vigor: hp_100, force: attack_100, guard: defense_100, potency: special_attack_100, resistance: special_defense_100, speed: speed_100}
  calibration_flags: [no_manual_exception, mythical_access_is_not_stat_inflation, Psychic_type_is_not_unbounded_permission]

capabilities_and_hazards:
  locomotion: [exceptional_mobile_behavior_but_exact_modes_not_invented]
  physical_hazards: []
  elemental_environmental_hazards: []
  anomalous_hazards: [observation_evasion, psychic_capability_bounded_by_specific_evidence]
  behavioral_capabilities: [voluntary_invisibility_or_concealment]
  utility_interaction_capabilities: []
  immunities_or_approach_invalidators: [ordinary_visual_tracking_can_be_invalid_when_Mew_chooses_to_hide]
  hazard_records:
  - hazard_key: mew-observation-evasion
    kind: other
    delivery_or_exposure: []
    prerequisite_or_trigger: [Mew_chooses_to_avoid_observation]
    warning_signs: []
    immediate_effects: [ordinary_visual_confirmation_or_tracking_may_become_invalid, encounter_access_can_collapse_to_traces_or_lost_contact]
    delayed_or_persistent_effects: []
    ordinary_consequence_ceiling: knowledge_or_access_consequence_not_automatic_bodily_harm
    exceptional_consequence_ceiling: none
    countermeasures: [no_generic_countermeasure, only_event_specific_evidence_or_conditions_may_restore_valid_observation]
    emergency_consumable_hooks: [none]
    context_amplifiers: []
    context_mitigators: [Mew_voluntarily_allows_observation_during_the_authored_direct_encounter_state]
    governing_species_axes: []
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [MEW-C1-002, MEW-D1-001]
  notes: [broad_move_access_or_Psychic_type_never_means_can_do_anything, D034_does_not_disable_voluntary_concealment_outside_the_direct_encounter_state]

ancient_strength:
  classifications: [unresolved]
  evidence_class: U
  rationale: no_reviewed_basis_for_claiming_ancient_Mew_is_stronger_or_weaker_than_the_preserved_source_baseline
  stat_effect_if_any: none
  behavior_effect_if_any: none_species_wide
  canon_boundary_note: Mythical_rarity_and_access_are_not_stat_modifiers

ancient_ecology:
  habitat: [intentionally_unresolved]
  ecological_niche: [intentionally_unresolved]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [intentionally_unresolved]
  environmental_effects: [none_invented]
  observable_signs: [event_specific_trace_or_fleeting_observation_only_until_the_final_reveal_state]
  locality_constraints: [baseline_era_natural_population_is_unresolved, no_routine_spawn_table, D034_direct_encounter_is_a_singular_or_exceptional_authored_content_route_and_does_not_prove_population]
  unsupported_gaps: [distribution, ecology, diet, population, ordinary_behavior]

human_perception_and_culture:
  ordinary_attitude: [most_people_may_have_no_reliable_direct_knowledge]
  specialist_knowledge_holders: [rare_witnesses_or_scholars_only_where_event_history_supports]
  benefits_and_services: []
  fears_and_avoidance: [uncertainty_and_unreliable_testimony_may_shape_local_reactions_without_becoming_universal_fear]
  myths_omens_taboos: [rumor_and_myth_are_valid_presentation_but_not_facts]
  practical_customs: [none_universal]
  common_misbeliefs: [every_Mew_story_is_true, direct_pursuit_should_always_work, Psychic_type_means_unlimited_power, direct_encounter_means_capture_or_bond]
  local_variation_notes: [stories_can_conflict_without_one_becoming_global_truth]

identification_and_knowledge:
  baseline_recognition: mythical
  unknown_presentation_hooks: [fleeting_small_unknown_figure, unexplained_trace, testimony_without_confirmation]
  local_aliases_or_titles: none
  identification_evidence: [rare_multi_source_observation_or_event_specific_direct_confirmation]
  initial_knowledge_fragments: [uncertain_witness_account_or_trace]
  post_identification_knowledge: [Mew_can_deliberately_avoid_observation]
  advanced_insights: [epistemic_limits_must_be_preserved, qualified_genetic_claim_does_not_grant_omniscience, a_direct_sighting_does_not_reveal_ecology_population_or_full_capability]
  exceptional_individual_knowledge_hooks: [Mew_itself_is_the_singular_or_exceptional_presence_for_gameplay_purposes]

threat_and_encounter:
  baseline_threat_band: access_and_knowledge_challenge_not_default_combat_threat
  default_behavior_states: [unseen, observing, fleetingly_visible, voluntarily_revealed, avoidant, retreating]
  aggression_tendency: not_presumed
  territoriality: unknown
  avoidance_tendency: potentially_extreme_when_it_chooses_concealment
  warning_signs: [none_required]
  encounter_triggers: [rare_authored_condition_chain, evidence_confirmation_threshold, deterministic_event_state_or_seed_gate_when_procedural_selection_is_used]
  escalation_triggers: [coercive_pursuit, attack, attempt_to_force_capture_or_restraint]
  deescalation_conditions: [stop_pursuit, restore_distance, allow_departure]
  pursuit_profile: direct_human_pursuit_may_fail_by_permission_when_Mew_hides
  group_size_effects: [not_applicable, Mew_is_not_a_swarm_or_generic_population_encounter]
  ordinary_consequence_categories: [lost_access, failed_confirmation, misinformation, event_chain_reset_or_branch_only_when_P5_authors_it]
  consequence_ceiling: no_automatic_bodily_harm_from_baseline_presence
  human_check_hooks:
  - action: visually_track_Mew_after_it_chooses_invisibility
    relevant_species_axis: speed
    relevant_tags: [observation_evasion]
    relevant_hazard_keys: [mew-observation-evasion]
    difficulty_guidance: impossible_unless_event_supplies_a_valid_counter_condition_or_Mew_voluntarily_restores_access
    notes: do_not_use_TN_inflation_for_an_invalid_observation_plan
  - action: respond_during_the_D034_voluntary_reveal_state
    relevant_species_axis: none
    relevant_tags: [voluntary_visibility, mythical_access]
    relevant_hazard_keys: []
    difficulty_guidance: meaningful_player_choice_or_context_resolution_not_a_forced_combat_check
    notes: player_may_hold_position_approach_noncoercively_or_withdraw_and_Mew_may_remain_or_leave_according_to_authored_state; no_capture_or_companionship_reward_is_implied

individual_variation:
  ordinary_variation:
    allowed_rating_deltas: none_required
    temperament_variants: [unknown]
    condition_variants: [unknown]
    local_lineage_variants: [not_applicable_in_baseline]
  exceptional_individuals:
    allowed: false
    rarity_guidance: Mew_itself_is_already_exceptional_mythical_presence_do_not_stack_generic_elite_logic
    candidate_causes: []
    rating_shift_guidance: none
    required_distinctive_traits: []
    warning_or_rumor_hooks: []
  named_apex_examples: []

companionship:
  classification: inappropriate_or_impossible_baseline
  prerequisites: []
  trust_building_paths: []
  reasons_to_stay: []
  rejection_or_departure_reasons: [ordinary_companionship_path_is_not_authored, Mew_may_leave_after_direct_confirmation]
  human_social_costs: [routine_companionship_would_break_the_mythical_access_contract]
  logistics:
    food: [unknown]
    water: [unknown]
    shelter_temperature: [unknown]
    space_travel: [unknown]
    settlement_restrictions: [routine_settlement_companionship_forbidden_in_baseline]
    special_resources: []
  assistance_capabilities: []
  handling_boundaries: [no_capture, no_routine_bond, no_portable_containment, no_direct_encounter_to_companion_shortcut]
  separation_injury_notes: []

mechanical_hooks:
  tracking_clues: [event_specific_indirect_trace, witness_conflict, brief_visual_confirmation]
  avoidance_preparation: [avoid_coercive_pursuit_if_the_goal_is_to_preserve_access]
  resistance_or_protection: []
  combat_approach_permissions: [none_assumed]
  blocked_or_invalid_approaches: [ordinary_direct_visual_pursuit_when_invisibility_is_active, capture_or_restraint_as_default_completion]
  fear_hooks: []
  injury_hazard_hooks: []
  environmental_state_hooks: [observation_access_state, evidence_chain_state, voluntary_reveal_state]
  companion_assistance_hooks: []
  fortune_spike_opportunities: [rare_valid_confirmation_or_extra_observation_window_when_event_state_supports]
  trouble_spike_complications: [false_positive, lost_trace, coercive_action_ends_visibility]

hunting_materials_and_resources:
  killing_treatment: inappropriate_as_baseline_content
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: none
  dangerous_harvesting: none
  taboo_or_protection: locality_myth_only_not_global_rule
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []

technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [no_Mew_based_industry_lab_technology_or_repeatable_harvest_loop]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable

emergency_consumable_hooks:
  hooks: none

narrative_and_event_hooks:
  peaceful: [rare_authored_chain_culminates_in_an_actual_living_Mew_voluntarily_remaining_visible_long_enough_for_the_player_to_choose_noncoercive_direct_interaction]
  dangerous: [coercive_pursuit_or_attack_can_end_access_without_Mew_needing_to_become_a_default_combat_boss]
  unusual_or_rare: [multi_event_trace_chain_moves_from_rumor_to_fleeting_observation_to_optional_direct_confirmation]
  discovery_insight: [distinguish_rumor_from_supported_observation_and_direct_confirmation_without_claiming_complete_knowledge]
  route_environment: [brief_unexplained_trace_or_visibility_window_is_stateful_content_not_a_random_spawn]
  settlement_culture: [conflicting_myths_and_witness_accounts_remain_local_and_unreliable]
  cross_species: []

presentation_and_p6_followups:
  initial_bestiary_presentation: rumor_or_unconfirmed_trace
  progressive_reveal_notes: [support_unconfirmed_partial_confirmed_and_directly_encountered_states_without_a_modern_Pokedex_dump]
  species_specific_visual_needs: [fleeting_partial_and_voluntary_full_visibility]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [uncertainty_and_observation_access_state_must_be_explicit]
  p6_followup_required: true

cross_species_links:
  evolution_family: []
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []

open_questions_and_gates:
  unresolved_sources: [ecology, distribution, population, exact_breadth_of_Psychic_capability]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [rare_trace_confirmation_and_voluntary_reveal_event_chain, exact_deterministic_gate_conditions]
  deferred_to_p6: [partial_visibility_uncertainty_and_direct_confirmation_presentation]
  deferred_to_p7: []
```

## Final completion note

Mew now satisfies D-034 without flattening the mythical fixture. The required total-game route is a **rare, authored, stateful direct encounter with a living Mew**. The meaningful interaction is the player's noncoercive response during Mew's voluntary reveal state; Mew may remain or leave according to authored event state. Nothing requires a random spawn, a common population, defeat, capture, portable containment, routine companionship, or a reusable time-travel/psychic shortcut.
