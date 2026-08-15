# P4 Batch 16 — #037 Vulpix Full-Schema Dossier

Part of `docs/P4_BATCH_16_FULL_SCHEMA_DOSSIERS.md`.

---

## #037 Vulpix / 식스테일

```yaml
identity:
  national_dex: 37
  species_key: vulpix
  official_name_en: Vulpix
  official_name_ko: 식스테일
  evolution_family_keys:
  - vulpix
  - ninetales
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs:
  - SRC-DATA-001
  - OFFICIAL-DEX-VULPIX-SG
  - P4_BATCH_16_SOURCE_REVIEW
  official_evidence:
  - claim_id: VLP-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-VULPIX-SG
    version_context: current_official_portal__OBSERVED_MATURATION
    paraphrase: young_Vulpix_begins_with_one_white_tail_that_splits_into_six_as_it_matures
  - claim_id: VLP-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-VULPIX-SG
    version_context: current_official_portal__OBSERVED_PHYSIOLOGY
    paraphrase: a_fire_burns_in_its_belly_and_it_can_expel_fireballs
  - claim_id: VLP-C1-003
    evidence_class: C1
    source_ref: OFFICIAL-DEX-VULPIX-SG
    version_context: current_official_portal__OBSERVED_BEHAVIOR
    paraphrase: it_may_feign_injury_and_escape_when_facing_a_stronger_enemy
  - claim_id: VLP-C1-004
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__VERSION_SCOPED_OR_CONFLICTING
    paraphrase: entries_add_heat_regulation_pre_evolution_tail_heat_and_conflicting_six_to_more_tail_wording
  derived_claims:
  - claim_id: VLP-D1-001
    evidence_class: D1
    based_on:
    - VLP-C1-001
    statement: one_to_six_tail_change_is_ordinary_within_stage_maturation
    canon_boundary_note: not_evolution_not_level_threshold_not_kill_XP_not_player_transform_command
  - claim_id: VLP-D1-002
    evidence_class: D1
    based_on:
    - VLP-C1-002
    - VLP-C1-003
    statement: belly_fire_fireball_expulsion_and_feigned_injury_are_species_local_capabilities
    canon_boundary_note: not_generic_Fire_organ_formula_and_feint_never_guarantees_deception_or_escape
  - claim_id: VLP-D1-003
    evidence_class: D1
    based_on:
    - VLP-C1-004
    statement: conflicting_extra_tail_wording_remains_version_scoped_and_unresolved
    canon_boundary_note: do_not_invent_hidden_multi_tail_progression
canonical_source_data:
  types:
  - fire
  base_stats_raw:
    hp: 38
    attack: 41
    defense: 40
    special_attack: 50
    special_defense: 65
    speed: 65
  abilities_relevant_to_p4:
  - flash_fire_as_modern_context
  - drought_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4:
  - modern_move_list_is_not_blanket_ancient_capability_permission
  physical_metadata:
    height: 0.6_m
    weight: 9.9_kg
  evolution_source:
    evolves_from: none
    evolves_to:
    - ninetales
    canonical_conditions:
    - Fire_Stone_metadata_is_source_context_only_not_standardized_ancient_inventory_or_menu_command
  other_material_facts:
  - one_white_tail_splits_into_six_during_ordinary_maturation
  - fire_burns_in_belly_and_fireballs_can_be_expelled
  - feigned_injury_escape_behavior
  - version_scoped_heat_regulation_fire_release
  - version_scoped_pre_evolution_tail_heat
  - historically_conflicting_extra_tail_wording_not_systematized
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 2
  guard: 2
  potency: 2
  resistance: 3
  speed: 3
  derivation_notes:
    vigor: hp_38
    force: attack_41
    guard: defense_40
    potency: special_attack_50
    resistance: special_defense_65
    speed: speed_65
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - vigor_1_does_not_make_fire_hazard_harmless
  - ordinary_maturation_is_separate_from_evolution
capabilities_and_hazards:
  locomotion:
  - ordinary_quadruped_ground_movement
  physical_hazards: []
  elemental_environmental_hazards:
  - belly_fire_and_fireball_expulsion
  anomalous_hazards: []
  behavioral_capabilities:
  - feigned_injury_escape_behavior
  - one_to_six_tail_maturation
  - version_scoped_heat_regulation_fire_release
  utility_interaction_capabilities:
  - controlled_fire_orbs_can_be_an_authored_capability_but_not_a_generic_tool_without_context
  immunities_or_approach_invalidators:
  - feigned_injury_does_not_force_belief_or_guarantee_escape
  - internal_fire_does_not_grant_universal_fire_immunity_or_heat_formula
  hazard_records:
  - hazard_key: vulpix-fire-expulsion
    kind: burn
    delivery_or_exposure:
    - direct_fireball_contact
    - close_exposure_to_authored_fire_release
    prerequisite_or_trigger:
    - defensive_fire_expulsion
    - escape_attempt
    - event_specific_heat_release
    warning_signs:
    - belly_or_mouth_heat_cues
    - posture_before_expulsion
    - visible_fire_orb_or_flame
    immediate_effects:
    - burn_or_ignition_risk
    - forced_distance_or_cover_response
    delayed_or_persistent_effects:
    - burn_injury_can_persist_until_treated_if_the_event_resolution_establishes_it
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_in_close_range_compound_or_exceptional_context
    countermeasures:
    - keep_distance
    - use_cover
    - avoid_cornering
    - use_scene_valid_fire_protection_or_extinguishing_measures
    emergency_consumable_hooks: []
    context_amplifiers:
    - dry_combustible_environment
    - confined_space
    - cornered_individual
    context_mitigators:
    - open_space
    - wet_or_noncombustible_surroundings
    - clear_retreat_route
    governing_species_axes:
    - potency
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - VLP-C1-002
    - VLP-D1-002
  notes:
  - six_axis_ratings_are_species_baselines_not_literal_world_formulas
  - modern_type_ability_and_move_labels_are_provenance_context_not_ancient_vocabulary
  - hazard_delivery_or_exposure_is_separate_from_post_exposure_consequence
  - belly_fire_is_species_local_not_a_generic_Fire_type_anatomy_model
  - historical_extra_tail_wording_is_not_turned_into_a_progression_system
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - behaviorally_harsher
  evidence_class: D2
  rationale: a_small_fire_capable_animal_can_be_locally_dangerous_under_low_infrastructure_without_receiving_global_ancient_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: wild_populations_may_be_less_habituated_to_humans_and_use_escape_or_defensive_fire_earlier_when_authored
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling_and_no_unearned_canon_historical_change
ancient_ecology:
  habitat:
  - dry_rocky_or_sheltered_sites_only_when_locally_authored_D2
  - exact_proto_kanto_range_unknown
  ecological_niche:
  - small_fire_capable_predator_or_omnivore_niche_unresolved_beyond_source_backed_behavior
  activity_pattern:
  - ordinary_activity_pattern_unknown
  - young_and_maturing_states_can_be_visibly_distinct_by_tail_count
  seasonal_notes:
  - exact_ancient_seasonality_unknown
  feeding_and_resource_interaction:
  - exact_complete_diet_unknown
  social_structure:
  - unknown
  predator_prey_competitor_links:
  - species_specific_links_only_when_source_or_later_authored_evidence_supports_them
  - otherwise_unknown
  environmental_effects:
  - localized_ignition_is_possible_when_an_authored_fire_hazard_actually_contacts_combustible_material
  - no_automatic_weather_or_heat_simulation
  observable_signs:
  - small_canid_tracks
  - singed_spots_after_fire_release
  - tail_count_and_color_as_maturation_clues
  - brief_heat_or_fire_orb_signs
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  - direct_encounterability_somewhere_does_not_equal_equal_abundance_or_universal_presence
  unsupported_gaps:
  - exact_age_or_time_for_tail_split
  - exact_tail_split_sequence_between_one_and_six
  - conflicting_extra_tail_wording_literal_scope
  - exact_internal_fire_temperature_or_fuel
  - exact_feint_success_conditions
human_perception_and_culture:
  ordinary_attitude:
  - cautious_interest_due_to_small_size_and_visible_fire_capability
  - young_one_tailed_individuals_may_be_misclassified_by_inexperienced_observers
  specialist_knowledge_holders:
  - hunters
  - fire_watchers
  - animal_handlers_with_local_knowledge
  benefits_and_services:
  - none_required
  fears_and_avoidance:
  - close_fire_expulsion
  - misreading_feigned_injury
  - cornering_a_small_but_dangerous_animal
  myths_omens_taboos:
  - local_D2_tales_about_tail_splitting_may_exist_but_must_not_resolve_historical_source_conflict
  practical_customs:
  - count_and_observe_tails_without_treating_tail_count_as_character_level
  - give_escape_space_to_reduce_defensive_fire
  common_misbeliefs:
  - one_tail_means_different_species
  - six_tails_must_split_again_before_evolution
  - feigned_injury_is_always_fake
  - Flash_Fire_or_Drought_are_literal_ancient_formulas
  local_variation_notes:
  - no_normalized_pet_breeding_trainer_or_fire_service_institution_implied
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - a_small_white_tailed_canid_like_Pokemon_shows_heat_before_anyone_recognizes_its_mature_six_tailed_form
  local_aliases_or_titles: none
  identification_evidence:
  - tail_count_and_color
  - canid_silhouette
  - belly_or_mouth_heat
  - fire_orb_expulsion
  - feigned_injury_followed_by_escape
  initial_knowledge_fragments:
  - tail_number_can_change_during_ordinary_growth_without_being_evolution
  - it_can_expel_fire
  post_identification_knowledge:
  - source_backed_one_to_six_maturation_is_distinct_from_Vulpix_to_Ninetales_evolution
  - historical_entries_conflict_on_extra_tail_wording
  advanced_insights:
  - recognize_feigned_injury_as_possible_behavior_without_assuming_every_injury_is_false
  exceptional_individual_knowledge_hooks:
  - a_scarred_Vulpix_with_unusually_precise_fire_orbs_and_a_known_decades_long_escape_history_without_Ninetales_powers
threat_and_encounter:
  baseline_threat_band: low_to_moderate
  default_behavior_states:
  - foraging_or_resting
  - observing
  - feigning_injury
  - fleeing
  - defensive_fire
  aggression_tendency: low_to_moderate_when_cornered
  territoriality: unknown_or_local
  avoidance_tendency: high_against_stronger_threats
  warning_signs:
  - heat_or_glow_near_mouth
  - defensive_posture
  - sudden_apparent_limp_or_injury_during_escape_context
  - singed_ground
  encounter_triggers:
  - route_crossing
  - den_or_rest_site
  - young_individual_misidentification
  escalation_triggers:
  - cornering
  - blocking_escape
  - close_pursuit_after_feigned_injury
  deescalation_conditions:
  - open_escape_route
  - increase_distance
  - stop_pursuit
  pursuit_profile: normally_escape_oriented_not_long_pursuit
  group_size_effects:
  - multiple_fire_sources_raise_scene_complexity_without_linear_stat_multiplier_or_pack_assumption
  ordinary_consequence_categories:
  - burn
  - minor_to_moderate_contact_injury
  - local_ignition_if_environment_supports_it
  consequence_ceiling: serious_in_compound_fire_context_but_ordinary_individuals_remain_low_to_moderate_threat
  human_check_hooks:
  - action: avoid_or_cover_from_a_defensive_fireball
    relevant_species_axis: potency
    relevant_tags:
    - fireball_expulsion
    relevant_hazard_keys:
    - vulpix-fire-expulsion
    difficulty_guidance: D024_context_from_distance_cover_warning_state_environment_and_escape_space
    notes: potency_affects_contest_not_burn_severity_ceiling
  - action: judge_possible_feigned_injury_without_erasing_real_injury_possibility
    relevant_species_axis: none
    relevant_tags:
    - feigned_injury_escape
    relevant_hazard_keys: []
    difficulty_guidance: D024_context_from_prior_behavior_distance_visibility_and_local_knowledge
    notes: failure_does_not_force_belief_or_guarantee_escape
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - timid
    - clever_escape_oriented
    - bold
    - den_attached
    condition_variants:
    - young_one_tailed
    - maturing_multi_tailed
    - mature_six_tailed
    - injured_or_feigning
    local_lineage_variants:
    - none_without_explicit_evidence_or_D2_local_authoring
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes:
    - age
    - long_survival_in_fire_prone_habitat
    - learned_escape_history
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history_and_visible_traits
    required_distinctive_traits:
    - distinctive_tail_pattern
    - old_burn_or_injury_marks
    - recognizable_fire_orb_control
    warning_or_rumor_hooks:
    - a_small_unevolved_Vulpix_that_has_survived_many_hunts_by_turning_feigned_injury_and_fire_into_a_signature_escape_pattern
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites:
  - voluntary_trust
  - safe_fire_handling
  - respect_for_escape_behavior
  - no_forced_evolution_or_tail_manipulation
  trust_building_paths:
  - repeated_noncoercive_contact
  - safe_food_water_and_shelter
  - allowing_withdrawal
  reasons_to_stay:
  - bond
  - stable_safe_den_or_route
  rejection_or_departure_reasons:
  - forced_restraint
  - tail_grabbing_or_maturation_exploitation
  - unsafe_fire_conditions
  - forced_evolution_attempt
  human_social_costs:
  - fire_risk
  - young_tail_count_misunderstanding
  - settlement_safety_rules
  logistics:
    food:
    - exact_complete_diet_unknown
    water:
    - regular_access_as_needed
    shelter_temperature:
    - safe_nonflammable_rest_site
    space_travel:
    - small_body_but_requires_safe_fire_clearance
    settlement_restrictions:
    - open_flame_and_defensive_fire_require_safe_space
    special_resources:
    - none_fixed
  assistance_capabilities:
  - small_controlled_fire_only_when_voluntary_scene_valid_and_safe
  handling_boundaries:
  - no_defeat_to_recruit
  - no_forced_containment
  - no_tail_cutting_or_growth_meter
  - no_forced_evolution
  - one_visible_companion_slot
  separation_injury_notes:
  - bonded_individual_remains_independent
mechanical_hooks:
  tracking_clues:
  - small_canid_tracks
  - singed_spots
  - tail_count_sightings
  avoidance_preparation:
  - leave_escape_route
  - use_nonflammable_cover
  - do_not_approach_apparent_injury_carelessly
  resistance_or_protection:
  - distance
  - cover
  - scene_valid_fire_protection_or_extinguishing
  combat_approach_permissions:
  - ordinary_Vulpix_can_become_routine_late_game_without_scaling
  blocked_or_invalid_approaches:
  - kill_XP_or_level_from_tail_growth
  - forced_evolution
  - guaranteed_feint_success
  - generic_Fire_immunity_or_weather_control
  fear_hooks:
  - a_one_tailed_youngster_expels_a_fireball_then_runs
  injury_hazard_hooks:
  - burn
  - local_ignition
  environmental_state_hooks:
  - combustibility
  - cover
  - escape_space
  - maturation_state
  companion_assistance_hooks:
  - small_fire_utility_only_when_scene_valid
  fortune_spike_opportunities:
  - a_visible_heat_cue_warns_before_fire_expulsion
  trouble_spike_complications:
  - an_apparent_injury_lures_a_pursuer_into_close_fire_range_without_forcing_their_choice
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains:
  - ordinary_remains_only_if_event_context_requires
  dangerous_harvesting:
  - tail_fur_body_heat_or_internal_fire_are_never_automatic_resources
  taboo_or_protection:
  - local_D2_only_if_authored
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits:
  - belly_fire_does_not_create_portable_fuel_or_industrial_heat_source
  - companionship_does_not_shortcut_fire_craft_ownership
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks:
  - item_concept:
      hazard_tags:
      - burn
      timing: recovery
      effect_boundary: species_local_fire_hazard_can_use_existing_generic_burn_recovery_consumable_framework_if_P5_authors_it
      exclusions:
      - no_fire_immunity
      - no_failed_roll_cancel
      - no_Vulpix_specific_farm_loop
      source_or_material_basis:
      - existing_P3_emergency_consumable_policy_not_Vulpix_body_material
      evidence_class: D1
narrative_and_event_hooks:
  peaceful:
  - observe_tail_count_changes_across_known_young_and_mature_individuals_without_calling_it_evolution
  dangerous:
  - a_cornered_Vulpix_uses_fireballs_to_open_an_escape_route
  unusual_or_rare:
  - track_a_scarred_unevolved_Vulpix_known_for_signature_feigned_injury_escapes
  discovery_insight:
  - prove_that_tail_growth_is_ordinary_maturation_and_historical_extra_tail_wording_is_not_a_hidden_level_system
  route_environment:
  - dry_cover_and_escape_space_change_fire_hazard_pressure
  settlement_culture:
  - local_people_may_have_practical_tail_count_terms_without_modern_level_or_breeding_systems
  cross_species:
  - Ninetales_folklore_and_mind_control_claims_do_not_back_propagate_to_Vulpix
presentation_and_p6_followups:
  initial_bestiary_presentation: Vulpix_as_a_small_fire_capable_Pokemon_whose_tail_growth_is_ordinary_maturation_not_evolution
  progressive_reveal_notes:
  - show_tail_count_as_observable_biology_not_progress_bar
  - telegraph_fire_release
  - do_not_mark_feigned_injury_as_guaranteed_lie
  species_specific_visual_needs:
  - one_to_six_tail_maturation_variants_as_content_requires
  - mouth_or_belly_heat_cue
  - fire_orb_readability
  species_specific_audio_needs:
  - pre_fire_cue
  - escape_or_distress_cue
  special_ui_or_readability_needs:
  - no_level_or_tail_progress_meter
  - injury_information_must_allow_uncertainty_without_deceptive_UI_cheat
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - ninetales
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies:
  - Ninetales_extraordinary_claims_are_not_inherited
open_questions_and_gates:
  unresolved_sources:
  - exact_tail_split_age_and_sequence
  - historical_extra_tail_wording_literal_scope
  - internal_fire_temperature_or_fuel
  - feint_success_conditions
  contradictions:
  - historical_entries_disagree_on_tail_growth_beyond_six_and_are_not_flattened
  human_design_gates: []
  deferred_to_p5:
  - fire_hazard_timing_feint_information_and_maturation_state
  deferred_to_p6:
  - maturation_variants_fire_telegraphs_and_injury_information_readability
  deferred_to_p7: []
```
