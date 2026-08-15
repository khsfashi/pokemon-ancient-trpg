# P4 Batch 16 — #036 Clefable Full-Schema Dossier

Part of `docs/P4_BATCH_16_FULL_SCHEMA_DOSSIERS.md`.

---

## #036 Clefable / 픽시

```yaml
identity:
  national_dex: 36
  species_key: clefable
  official_name_en: Clefable
  official_name_ko: 픽시
  evolution_family_keys:
  - clefairy
  - clefable
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs:
  - SRC-DATA-001
  - OFFICIAL-DEX-CLEFABLE-SG
  - P4_BATCH_16_SOURCE_REVIEW
  official_evidence:
  - claim_id: CLB-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-CLEFABLE-SG
    version_context: current_official_portal__MEASURED
    paraphrase: hearing_can_detect_a_pinlike_sound_from_roughly_1100_yards_away
  - claim_id: CLB-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-CLEFABLE-SG
    version_context: current_official_portal__LEGEND_OR_HEARSAY
    paraphrase: quiet_remote_mountain_habitat_and_moon_kin_listening_are_presented_as_said_or_legendary
  - claim_id: CLB-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__OBSERVED_OR_VERSION_SCOPED_EXTRAORDINARY
    paraphrase: timid_human_avoidance_acuity_and_light_skipping_water_surface_travel_are_supported_in_versioned_entries
  derived_claims:
  - claim_id: CLB-D1-001
    evidence_class: D1
    based_on:
    - CLB-C1-001
    - CLB-C1-003
    statement: extreme_hearing_and_human_wariness_are_real_species_information_channels
    canon_boundary_note: hearing_is_not_omniscience_wall_penetration_perfect_localization_or_automatic_stealth_failure
  - claim_id: CLB-D1-002
    evidence_class: D1
    based_on:
    - CLB-C1-002
    statement: moon_kin_may_exist_as_a_local_belief_because_the_source_supports_the_existence_of_the_legend
    canon_boundary_note: belief_is_not_confirmed_extraterrestrial_origin_space_travel_or_mandatory_moon_location
canonical_source_data:
  types:
  - fairy
  base_stats_raw:
    hp: 95
    attack: 70
    defense: 73
    special_attack: 95
    special_defense: 90
    speed: 60
  abilities_relevant_to_p4:
  - cute_charm_as_modern_context
  - magic_guard_as_modern_context
  - unaware_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4:
  - modern_move_list_is_not_blanket_ancient_capability_permission
  physical_metadata:
    height: 1.3_m
    weight: 40.0_kg
  evolution_source:
    evolves_from: clefairy
    evolves_to: []
    canonical_conditions:
    - Moon_Stone_metadata_is_source_context_only_not_standardized_ancient_inventory_or_menu_command
  other_material_facts:
  - extreme_hearing_with_approximately_1100_yard_pinlike_sound_claim
  - human_avoidance_or_timidity
  - quiet_remote_habitat_reputation
  - version_scoped_light_skipping_and_water_surface_travel
  - moon_kin_is_legend_or_hearsay
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 3
  guard: 3
  potency: 4
  resistance: 4
  speed: 3
  derivation_notes:
    vigor: hp_95
    force: attack_70
    guard: defense_73
    potency: special_attack_95
    resistance: special_defense_90
    speed: speed_60
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - hearing_distance_is_not_derived_from_speed_potency_or_resistance
  - Fairy_typing_does_not_create_lunar_magic_permission
capabilities_and_hazards:
  locomotion:
  - ordinary_ground_movement
  - version_scoped_light_skipping_and_water_surface_travel_under_suitable_authored_conditions
  physical_hazards: []
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities:
  - extreme_hearing
  - strong_human_wariness_and_hiding
  - quiet_place_preference
  utility_interaction_capabilities:
  - long_range_hearing_can_support_detection_when_acoustic_context_allows_it
  immunities_or_approach_invalidators:
  - hearing_does_not_ignore_occlusion_noise_or_information_limits
  - water_surface_travel_does_not_grant_generic_swimming_flight_or_fall_immunity
  hazard_records: []
  notes:
  - six_axis_ratings_are_species_baselines_not_literal_world_formulas
  - modern_type_ability_and_move_labels_are_provenance_context_not_ancient_vocabulary
  - hazard_delivery_or_exposure_is_separate_from_post_exposure_consequence
  - extreme_hearing_is_a_capability_not_an_automatic_initiative_rule
  - moon_kin_is_legend_or_hearsay_and_has_no_hazard_or_origin_system_semantics
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: scarce_knowledge_and_extreme_hearing_can_make_approach_or_tracking_harder_without_any_ancient_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: remote_populations_may_detect_and_avoid_humans_earlier_when_acoustic_conditions_support_it
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling_and_no_unearned_canon_historical_change
ancient_ecology:
  habitat:
  - quiet_remote_mountains_or_deserted_lakes_only_where_source_or_local_D2_authoring_supports_them
  - exact_proto_kanto_range_unknown
  ecological_niche:
  - rare_wary_quiet_habitat_Pokemon_with_extreme_hearing
  activity_pattern:
  - quiet_night_activity_is_supported_by_versioned_context
  - exact_daily_schedule_unknown
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
  - no_map_wide_sound_detection_simulation
  - water_surface_travel_is_discrete_authored_behavior
  observable_signs:
  - widely_spaced_light_steps_or_tracks
  - abrupt_disappearance_after_small_human_noises
  - rare_water_surface_footfall_signs_only_in_authored_version_scoped_behavior
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  - direct_encounterability_somewhere_does_not_equal_equal_abundance_or_universal_presence
  unsupported_gaps:
  - exact_hearing_occlusion_limits
  - exact_water_surface_travel_duration_and_conditions
  - moon_kin_legend_literal_truth
  - baseline_proto_kanto_abundance
human_perception_and_culture:
  ordinary_attitude:
  - rare_and_difficult_to_approach
  - respected_or_mythologized_locally_because_it_is_seldom_seen
  specialist_knowledge_holders:
  - remote_route_guides
  - quiet_hunters_or_trackers
  - local_story_keepers
  benefits_and_services:
  - none_required
  fears_and_avoidance:
  - being_detected_long_before_close_approach
  - wasting_resources_chasing_a_wary_individual
  myths_omens_taboos:
  - moon_kin_listening_tradition_is_source_backed_as_legend_not_truth
  - local_D2_origin_stories_may_vary
  practical_customs:
  - reduce_noise_and_observe_from_distance
  - treat_moon_origin_claims_as_belief_until_better_evidence
  common_misbeliefs:
  - it_hears_everything_everywhere
  - it_can_hear_through_any_wall
  - all_Clefable_are_from_the_moon
  - water_surface_travel_means_flight
  local_variation_notes:
  - no_region_wide_moon_religion_or_hunter_institution_is_implied
identification_and_knowledge:
  baseline_recognition: rare
  unknown_presentation_hooks:
  - a_large_pale_figure_vanishes_from_a_quiet_slope_before_the_party_can_approach
  local_aliases_or_titles: none
  identification_evidence:
  - ear_or_body_silhouette
  - unusually_early_avoidance_after_small_noises
  - source_scoped_light_skipping_signs
  initial_knowledge_fragments:
  - it_is_exceptionally_sensitive_to_quiet_sounds
  - it_prefers_or_is_said_to_prefer_remote_quiet_places
  post_identification_knowledge:
  - measured_hearing_claim_has_a_long_range_but_not_complete_occlusion_or_localization_rules
  - moon_kin_is_a_legend
  advanced_insights:
  - recognize_when_noise_cover_or_barriers_change_detection_context_without_turning_hearing_into_omniscience
  exceptional_individual_knowledge_hooks:
  - an_old_Clefable_that_has_learned_every_approach_route_to_one_remote_lake
threat_and_encounter:
  baseline_threat_band: low_to_moderate
  default_behavior_states:
  - listening
  - hiding
  - skipping
  - withdrawing
  - defending_if_cornered
  aggression_tendency: low
  territoriality: unknown_or_local
  avoidance_tendency: very_high
  warning_signs:
  - encounter_signs_stop_after_small_noises
  - distant_footfall_or_surface_ripple
  - local_accounts_of_impossible_to_approach_individuals
  encounter_triggers:
  - quiet_remote_route
  - authored_night_or_lakeside_event
  - successful_low_noise_tracking
  escalation_triggers:
  - cornering
  - persistent_chase
  - blocking_retreat
  deescalation_conditions:
  - reduce_noise
  - stop_pursuit
  - open_escape_route
  pursuit_profile: normally_none
  group_size_effects:
  - no_colony_assumption_and_no_shared_perfect_awareness
  ordinary_consequence_categories:
  - minor_to_moderate_defensive_contact_injury
  - lost_time_or_route_complication_from_failed_approach
  consequence_ceiling: moderate_for_ordinary_encounters
  human_check_hooks:
  - action: approach_or_observe_a_wary_Clefable_without_treating_extreme_hearing_as_omniscience
    relevant_species_axis: none
    relevant_tags:
    - extreme_hearing
    - human_wariness
    relevant_hazard_keys: []
    difficulty_guidance: D024_context_from_distance_background_noise_occlusion_surface_weather_prior_knowledge_and_escape_space
    notes: hearing_range_is_not_automatic_detection_or_initiative
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - timid
    - watchful
    - curious_at_distance
    - strongly_solitary
    condition_variants:
    - listening
    - hiding
    - crossing_water_if_authored
    - cornered
    local_lineage_variants:
    - none_without_explicit_evidence_or_D2_local_authoring
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes:
    - age
    - long_survival_in_remote_habitat
    - learned_human_avoidance
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history_and_visible_traits
    required_distinctive_traits:
    - distinctive_ear_damage_or_track
    - recognized_retreat_route
    - persistent_local_sighting_pattern
    warning_or_rumor_hooks:
    - a_Clefable_that_has_evaded_every_recorded_human_approach_to_one_lake
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites:
  - rare_individual_voluntary_trust
  - quiet_safe_living_conditions
  - no_forced_display_or_moon_legend_exploitation
  trust_building_paths:
  - long_term_nonintrusive_presence
  - consistent_noise_and_boundary_respect
  - reliable_safe_exit
  reasons_to_stay:
  - unusual_strong_bond
  - trusted_quiet_habitat_or_route
  rejection_or_departure_reasons:
  - crowding
  - loud_or_unpredictable_settlement_pressure
  - forced_pursuit
  - legend_exploitation
  human_social_costs:
  - requires_quiet_space
  - rarity_draws_attention
  - may_depart_if_regularly_disturbed
  logistics:
    food:
    - exact_complete_diet_unknown
    water:
    - regular_access_as_needed
    shelter_temperature:
    - quiet_remote_or_sheltered_rest_site
    space_travel:
    - do_not_assume_water_surface_travel_or_flight_as_transport
    settlement_restrictions:
    - crowded_noisy_settlements_may_be_incompatible
    special_resources:
    - none_fixed
  assistance_capabilities:
  - hearing_based_warning_only_when_acoustic_context_and_voluntary_attention_support_it
  handling_boundaries:
  - no_defeat_to_recruit
  - no_forced_containment
  - no_omniscient_scouting
  - one_visible_companion_slot
  separation_injury_notes:
  - bonded_individual_remains_independent_and_may_leave_if_conditions_fail
mechanical_hooks:
  tracking_clues:
  - early_broken_trail_after_noise
  - light_tracks
  - rare_surface_ripple_if_crossing_water
  avoidance_preparation:
  - reduce_unnecessary_noise
  - use_cover_and_distance
  - do_not_rely_on_moon_legend_as_location_rule
  resistance_or_protection:
  - information_and_escape_space_not_a_soundproof_status
  combat_approach_permissions:
  - ordinary_Clefable_can_be_avoided_or_driven_off_without_scaling
  blocked_or_invalid_approaches:
  - omniscient_hearing
  - automatic_stealth_failure
  - confirmed_moon_origin
  - generic_flight_or_swim_permission
  fear_hooks:
  - the_creature_disappears_before_anyone_hears_the_sound_that_warned_it
  injury_hazard_hooks:
  - defensive_contact_if_cornered
  environmental_state_hooks:
  - background_noise
  - occlusion
  - water_surface
  - night_visibility
  companion_assistance_hooks:
  - voluntary_acoustic_warning_when_scene_valid
  fortune_spike_opportunities:
  - background_noise_masks_the_party_for_a_brief_observation_window
  trouble_spike_complications:
  - a_small_noise_ends_a_rare_tracking_opportunity
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains:
  - ordinary_remains_only_if_event_context_requires
  dangerous_harvesting:
  - no_species_body_material_is_an_automatic_drop_or_crafting_stock
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
  - extreme_hearing_does_not_create_sonar_surveillance_or_region_wide_signal_technology
  - moon_legend_does_not_create_magic_craft
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful:
  - observe_a_Clefable_from_far_across_a_quiet_lake
  dangerous:
  - a_party_cornering_a_wary_Clefable_turns_a_nonviolent_search_into_defensive_contact
  unusual_or_rare:
  - investigate_a_local_moon_kin_story_while_preserving_the_fact_that_it_is_a_story
  discovery_insight:
  - learn_that_extreme_hearing_has_contextual_limits_and_moon_origin_is_unresolved
  route_environment:
  - quiet_remote_route_where_player_noise_changes_observation_opportunity
  settlement_culture:
  - different_villages_hold_different_moon_stories_without_shared_objective_truth
  cross_species:
  - Clefairy_gathering_behavior_is_not_auto_inherited
presentation_and_p6_followups:
  initial_bestiary_presentation: Clefable_as_a_rare_wary_Pokemon_with_measured_extreme_hearing_and_separately_labeled_moon_folklore
  progressive_reveal_notes:
  - show_avoidance_and_acoustic_evidence_before_range_detail
  - label_moon_kin_as_legend
  - do_not_visualize_hearing_as_full_map_reveal
  species_specific_visual_needs:
  - light_step_or_water_surface_cues_if_used
  - rapid_withdrawal_readability
  species_specific_audio_needs:
  - subtle_remote_sound_and_silence_changes
  special_ui_or_readability_needs:
  - hearing_capability_must_not_reveal_hidden_map_omnisciently
  - legend_badge_or_text_treatment_distinct_from_observed_fact
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - clefairy
  - cleffa_post_gen1_reference_only
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies:
  - Clefairy_full_moon_gathering_is_not_auto_inherited
open_questions_and_gates:
  unresolved_sources:
  - exact_hearing_occlusion_limits
  - exact_water_surface_travel_duration_and_conditions
  - moon_kin_legend_literal_truth
  - baseline_proto_kanto_abundance
  contradictions:
  - moon_kin_is_intentionally_unresolved_rather_than_resolved_by_project_extrapolation
  human_design_gates: []
  deferred_to_p5:
  - acoustic_detection_context_and_escape_behavior
  deferred_to_p6:
  - audio_readability_without_omniscient_UI_and_folklore_fact_distinction
  deferred_to_p7: []
```
