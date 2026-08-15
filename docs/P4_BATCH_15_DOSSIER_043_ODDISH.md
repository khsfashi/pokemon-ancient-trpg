# P4 Batch 15 — #043 Oddish Full-Schema Dossier

Part of `docs/P4_BATCH_15_FULL_SCHEMA_DOSSIERS.md`.

---

## #043 Oddish / 뚜벅쵸

```yaml
identity:
  national_dex: 43
  species_key: oddish
  official_name_en: Oddish
  official_name_ko: 뚜벅쵸
  evolution_family_keys:
  - oddish
  - gloom
  - vileplume
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs:
  - SRC-DATA-001
  - OFFICIAL-DEX-ODDISH-SG
  - P4_BATCH_15_SOURCE_REVIEW
  official_evidence:
  - claim_id: ODD-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-ODDISH-SG
    version_context: current_official_portal
    paraphrase: travels_at_night_on_two_rootlike_feet_and_remains_quietly_underground_by_day
  - claim_id: ODD-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: Red_Blue_Yellow_Gold_Crystal_Ruby_Sapphire_Emerald_FireRed
    paraphrase: versioned_entries_support_seed_scattering_fertile_soil_planting_weed_misidentification_and_nearly_1000_foot_nocturnal_walking
  derived_claims:
  - claim_id: ODD-D1-001
    evidence_class: D1
    based_on:
    - ODD-C1-001
    - ODD-C1-002
    statement: burial_and_root_walking_are_species_local_states
    canon_boundary_note: not_generic_Grass_burrowing_not_perfect_stealth_not_route_speed_formula
  - claim_id: ODD-D1-002
    evidence_class: D1
    based_on:
    - ODD-C1-002
    statement: weedlike_low_information_misidentification_can_trigger_an_authored_recognition_mistake
    canon_boundary_note: never_scenery_crop_forage_or_automatic_herb_pickup
canonical_source_data:
  types:
  - grass
  - poison
  base_stats_raw:
    hp: 45
    attack: 50
    defense: 55
    special_attack: 75
    special_defense: 65
    speed: 30
  abilities_relevant_to_p4:
  - chlorophyll_as_modern_context
  - run_away_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4:
  - historical_named_move_terms_are_evidence_context_only_where_source_review_notes_them
  physical_metadata:
    height: 0.5_m
    weight: 5.4_kg
  evolution_source:
    evolves_from: none
    evolves_to:
    - gloom
    canonical_conditions:
    - modern_level_21_metadata_is_source_context_only
  other_material_facts:
  - nocturnal_root_walking
  - daytime_buried_or_planted_state
  - versioned_seed_scattering
  - versioned_soil_nutrient_absorption
  - low_information_weed_misidentification
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 2
  guard: 2
  potency: 3
  resistance: 3
  speed: 1
  derivation_notes:
    vigor: hp_45
    force: attack_50
    guard: defense_55
    potency: special_attack_75
    resistance: special_defense_65
    speed: speed_30
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - plantlike_body_not_object_or_resource_semantics
  - modern_move_ability_evolution_metadata_not_ancient_formula
capabilities_and_hazards:
  locomotion:
  - rootlike_feet_or_roots_for_source_backed_nocturnal_movement
  physical_hazards: []
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities:
  - daytime_burial_or_planting
  - nighttime_wandering
  - versioned_seed_scattering
  utility_interaction_capabilities:
  - fertile_soil_state_is_observable_but_not_a_generic_agriculture_bonus
  immunities_or_approach_invalidators:
  - burial_does_not_grant_perfect_concealment_or_arbitrary_substrate_access
  hazard_records:
  - hazard_key: oddish-misidentification-pull-provocation
    kind: other
    delivery_or_exposure:
    - attempt_to_pull_cut_or_gather_a_buried_Oddish_mistaken_for_vegetation
    prerequisite_or_trigger:
    - daytime_burial_or_low_information_vegetation_confusion
    warning_signs:
    - paired_leaves_with_unusual_spacing
    - subtle_body_or_root_movement
    - local_warning_about_moving_weeds
    immediate_effects:
    - startled_or_defensive_reaction
    - close_contact_scramble_or_minor_injury
    delayed_or_persistent_effects:
    - none_automatic
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_in_compound_or_exceptional_context
    countermeasures:
    - inspect_before_harvesting
    - avoid_grabbing_unknown_vegetation
    - observe_at_dusk_or_night
    emergency_consumable_hooks: []
    context_amplifiers:
    - poor_light
    - dense_groundcover
    - fatigue
    context_mitigators:
    - clear_light
    - local_knowledge
    - deliberate_observation
    governing_species_axes:
    - speed
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - ODD-C1-001
    - ODD-C1-002
    - ODD-D1-002
  notes:
  - Grass_or_Poison_typing_does_not_create_universal_rooting_pollen_acid_or_lure_permissions
  - delivery_or_exposure_is_separate_from_consequence
  - source_hyperbole_does_not_become_real_world_chemistry_timing_or_status_math
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: small_nocturnal_plantlike_Pokemon_whose_buried_state_can_create_recognition_pressure_without_any_global_ancient_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: authored_local_environment_and_low_human_knowledge_can_raise_encounter_pressure_without_stat_scaling
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat:
  - fertile_soil_and_vegetated_ground_only_when_locally_authored_D2
  - exact_ancient_range_unknown
  ecological_niche:
  - small_nocturnal_soil_associated_plantlike_Pokemon
  activity_pattern:
  - daytime_buried_or_planted
  - nighttime_wandering
  seasonal_notes:
  - exact_seasonality_unknown
  feeding_and_resource_interaction:
  - soil_nutrient_absorption_is_version_scoped_support_not_complete_diet
  social_structure:
  - unknown
  predator_prey_competitor_links:
  - species_specific_source_backed_predation_only_where_listed
  - other_links_unknown
  environmental_effects:
  - local_signs_only_when_authored_no_continuous_ecosystem_simulation
  observable_signs:
  - small_rootlike_tracks_at_night
  - disturbed_soil
  - paired_leaves_emerging_from_ground
  - scattered_seeds_when_context_supports_it
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  - direct_encounterability_somewhere_does_not_equal_equal_abundance_or_universal_presence
  unsupported_gaps:
  - maximum_burial_depth
  - substrate_limits
  - nutrient_absorption_rate
  - exact_concealment_quality
  - ancient_local_taxonomic_name
human_perception_and_culture:
  ordinary_attitude:
  - usually_ignored_or_mistaken_for_vegetation_until_local_people_learn_the_signs
  specialist_knowledge_holders:
  - foragers
  - night_watchers
  - local_route_guides
  benefits_and_services:
  - none_required
  fears_and_avoidance:
  - accidentally_pulling_a_living_Pokemon_from_the_ground
  myths_omens_taboos:
  - local_D2_only_if_authored
  practical_customs:
  - inspect_suspicious_leaf_clusters_before_cutting_or_gathering
  - leave_known_daytime_rest_patches_undisturbed
  common_misbeliefs:
  - it_is_an_ordinary_weed
  - its_seeds_are_free_crop_stock
  - all_Grass_types_can_burrow
  local_variation_notes:
  - no_region_wide_botanical_chemical_or_trainer_institution_is_implied
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - a_patch_of_weeds_pulls_itself_out_of_the_ground_after_sunset
  local_aliases_or_titles: none
  identification_evidence:
  - paired_leaves
  - soil_shift
  - rootlike_night_tracks
  - movement_at_dusk
  initial_knowledge_fragments:
  - it_may_be_buried_by_day_and_mobile_at_night
  post_identification_knowledge:
  - source_backed_behavior_and_hazard_signs_can_be_learned_without_revealing_exact_hidden_formulas
  - evolution_stage_does_not_inherit_unevidenced_family_behaviors
  advanced_insights:
  - plantlike_appearance_and_burial_never_change_creature_agency_or_resource_semantics
  exceptional_individual_knowledge_hooks:
  - an_old_Oddish_that_walks_the_same_long_moonlit_path_each_night
threat_and_encounter:
  baseline_threat_band: low_to_moderate
  default_behavior_states:
  - buried
  - planted
  - wandering
  - startled
  - fleeing_or_defending
  aggression_tendency: low_until_disturbed
  territoriality: unknown_or_local
  avoidance_tendency: high
  warning_signs:
  - leaf_twitch
  - soil_shift
  - sudden_root_motion
  encounter_triggers:
  - attempted_harvest
  - stepping_or_pulling_near_buried_body
  escalation_triggers:
  - continued_grabbing_or_cutting
  - cornering
  deescalation_conditions:
  - release_and_back_away
  - open_escape_route
  pursuit_profile: brief_or_none
  group_size_effects:
  - no_generic_multiplier_and_no_colony_assumption_without_local_evidence
  ordinary_consequence_categories:
  - minor_to_moderate_contact_injury
  - stumble_or_alarm
  consequence_ceiling: moderate_for_ordinary_encounters
  human_check_hooks:
  - action: recognize_a_buried_Oddish_before_treating_it_as_vegetation
    relevant_species_axis: none
    relevant_tags:
    - daytime_buried
    - low_information_vegetation_misidentification
    relevant_hazard_keys:
    - oddish-misidentification-pull-provocation
    difficulty_guidance: D024_context_from_distance_visibility_cover_prior_knowledge_current_species_state_and_escape_space
    notes: avoidance_or_detection_difficulty_is_not_the_same_number_as_post_exposure_consequence
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - timid
    - curious_at_night
    - startle_prone
    - soil_site_attached
    condition_variants:
    - buried
    - wandering
    - recently_disturbed
    - exhausted
    local_lineage_variants:
    - none_without_evidence
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes:
    - age
    - long_survival_in_one_soil_patch
    - unusual_nocturnal_route_history
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits:
    - persistent_leaf_damage_or_coloration
    - known_day_rest_site
    - recognizable_root_tracks
    warning_or_rumor_hooks:
    - an_old_Oddish_that_walks_the_same_long_moonlit_path_each_night
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites:
  - voluntary_trust
  - safe_soil_and_rest_access
  - no_harvest_or_objectification
  trust_building_paths:
  - repeated_noncoercive_contact
  - safe_resource_or_rest_support
  - reliable_withdrawal_and_boundary_respect
  reasons_to_stay:
  - bond
  - familiar_safe_route_or_rest_site
  rejection_or_departure_reasons:
  - forced_restraint
  - resource_harvesting
  - chronic_hazard_exploitation
  - unsafe_settlement_pressure
  human_social_costs:
  - day_night_routine
  - soil_access
  - settlement_confusion_if_it_is_mistaken_for_a_plant
  logistics:
    food:
    - exact_complete_diet_unknown
    - fertile_soil_nutrient_absorption_is_version_scoped
    water:
    - regular_access_as_needed
    - soil_moisture_when_locally_relevant
    shelter_temperature:
    - loose_safe_soil_or_other_species_appropriate_rest_site
    space_travel:
    - small_body_but_day_night_routine_requires_rest_access
    settlement_restrictions:
    - known_burial_area_should_not_be_mistaken_for_a_garden_bed
    special_resources:
    - none_fixed
  assistance_capabilities:
  - soil_or_vegetation_observation_only_when_voluntary_and_event_valid
  handling_boundaries:
  - no_defeat_to_recruit
  - no_forced_containment
  - no_harvesting_leaves_seeds_or_body
  - one_visible_companion_slot
  separation_injury_notes:
  - bonded_individual_remains_independent_and_is_not_inventory
mechanical_hooks:
  tracking_clues:
  - small_rootlike_tracks
  - disturbed_soil
  - paired_leaf_clusters
  avoidance_preparation:
  - inspect_groundcover
  - observe_at_dusk
  - avoid_blind_harvesting
  resistance_or_protection:
  - distance_and_deliberate_recognition
  combat_approach_permissions:
  - ordinary_Oddish_may_become_routine_late_game_without_scaling
  blocked_or_invalid_approaches:
  - treat_as_crop_or_herb
  - assume_perfect_burrowing
  - use_1000_foot_claim_as_route_speed
  - harvest_seeds_as_automatic_drop
  fear_hooks:
  - a_patch_of_weeds_pulls_itself_out_of_the_ground_after_sunset
  injury_hazard_hooks:
  - minor_to_moderate_contact_injury
  - stumble_or_alarm
  environmental_state_hooks:
  - time_of_day
  - soil_fertility
  - groundcover
  - light
  companion_assistance_hooks:
  - night_route_or_soil_sign_help_only_when_bonded_and_scene_valid
  fortune_spike_opportunities:
  - a_leaf_cluster_moves_before_the_forager_cuts_it
  trouble_spike_complications:
  - a_buried_Oddish_is_mistaken_for_food_or_medicine_in_bad_light
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains:
  - ordinary_remains_only_if_event_context_requires
  dangerous_harvesting:
  - secretions_pollen_leaves_seeds_or_body_material_require_explicit_later_context_and_are_never_automatic_drops
  taboo_or_protection:
  - local_D2_only
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
  - chemical_or_botanical_source_facts_do_not_create_industry_agriculture_perfume_poison_or_reagent_economies
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful:
  - observe_an_Oddish_emerge_at_dusk_and_begin_root_walking
  dangerous:
  - a_forager_grabs_leaves_that_belong_to_a_buried_Oddish
  unusual_or_rare:
  - an_old_Oddish_returns_to_the_same_fertile_soil_patch_each_day
  discovery_insight:
  - plantlike_body_and_burial_never_change_creature_agency_or_resource_semantics
  route_environment:
  - use_discrete_authored_state_changes_and_warning_signs_not_continuous_environment_simulation
  settlement_culture:
  - local_practical_customs_may_form_from_repeated_encounters_without_normalized_ownership_or_trainer_culture
  cross_species:
  - family_stage_capabilities_are_not_inherited_without_separate_evidence
presentation_and_p6_followups:
  initial_bestiary_presentation: Oddish_as_a_living_plantlike_Pokemon_with_species_local_behavior_and_hazard_clues_not_a_resource_node
  progressive_reveal_notes:
  - reveal_hazard_delivery_and_warning_signs_before_exact_outcomes
  - preserve_version_and_uncertainty_boundaries
  - do_not_present_modern_ability_move_or_evolution_metadata_as_ancient_UI_rules
  species_specific_visual_needs:
  - small_rootlike_tracks_at_night
  - disturbed_soil
  - paired_leaves_emerging_from_ground
  species_specific_audio_needs:
  - oddish_species_specific_movement_or_hazard_cue
  special_ui_or_readability_needs:
  - no_herb_pickup_marker_while_unidentified
  - buried_state_must_still_allow_creature_readability_after_clues
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - gloom
  - vileplume
  predator_prey:
  - source_backed_prey_relationships_only_where_dossier_states_them
  competition: []
  symbiosis: []
  mimicry_confusion:
  - ordinary_weeds_or_ground_vegetation
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - maximum_burial_depth
  - substrate_limits
  - nutrient_absorption_rate
  - exact_concealment_quality
  - ancient_local_taxonomic_name
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - discrete_encounter_state_timing_warning_counterplay_and_consequence_resolution
  deferred_to_p6:
  - visual_audio_and_hazard_readability_without_resource_or_status_shortcuts
  deferred_to_p7: []
```
