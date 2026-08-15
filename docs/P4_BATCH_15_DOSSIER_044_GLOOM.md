# P4 Batch 15 — #044 Gloom Full-Schema Dossier

Part of `docs/P4_BATCH_15_FULL_SCHEMA_DOSSIERS.md`.

---

## #044 Gloom / 냄새꼬

```yaml
identity:
  national_dex: 44
  species_key: gloom
  official_name_en: Gloom
  official_name_ko: 냄새꼬
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
  - OFFICIAL-DEX-GLOOM-SG
  - P4_BATCH_15_SOURCE_REVIEW
  official_evidence:
  - claim_id: GLO-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-GLOOM-SG
    version_context: current_official_portal
    paraphrase: mouth_fluid_is_nectar_used_to_attract_prey_and_is_sweet_sticky_and_strongly_repulsive_in_smell
  - claim_id: GLO-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: Yellow_Gold_Silver_Crystal_Ruby_Sapphire_Emerald_FireRed
    paraphrase: versioned_entries_support_nonuniform_human_reaction_threat_linked_odor_change_and_extreme_faint_or_memory_loss_wording
  derived_claims:
  - claim_id: GLO-D1-001
    evidence_class: D1
    based_on:
    - GLO-C1-001
    - GLO-C1-002
    statement: odor_and_nectar_are_context_sensitive_sensory_ecology
    canon_boundary_note: not_charm_compulsion_fixed_radius_automatic_faint_or_memory_rewrite
  - claim_id: GLO-D1-002
    evidence_class: D1
    based_on:
    - GLO-C1-001
    statement: sticky_nectar_is_biological_material_present_on_a_living_Pokemon
    canon_boundary_note: not_free_bait_food_medicine_or_automatic_harvest
canonical_source_data:
  types:
  - grass
  - poison
  base_stats_raw:
    hp: 60
    attack: 65
    defense: 70
    special_attack: 85
    special_defense: 75
    speed: 40
  abilities_relevant_to_p4:
  - chlorophyll_as_modern_context
  - stench_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4:
  - historical_named_move_terms_are_evidence_context_only_where_source_review_notes_them
  physical_metadata:
    height: 0.8_m
    weight: 8.6_kg
  evolution_source:
    evolves_from: oddish
    evolves_to:
    - vileplume
    - bellossom_external_post_gen1
    canonical_conditions:
    - modern_level_21_from_Oddish_is_context
    - Leaf_Stone_to_Vileplume_is_context
    - Sun_Stone_to_Bellossom_is_post_Gen1_context_only
  other_material_facts:
  - prey_attracting_mouth_nectar
  - sticky_sweet_nectar
  - extreme_foul_odor
  - versioned_threat_linked_odor_change
  - nonuniform_human_reaction
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 3
  guard: 3
  potency: 4
  resistance: 3
  speed: 2
  derivation_notes:
    vigor: hp_60
    force: attack_65
    guard: defense_70
    potency: special_attack_85
    resistance: special_defense_75
    speed: speed_40
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - plantlike_body_not_object_or_resource_semantics
  - modern_move_ability_evolution_metadata_not_ancient_formula
capabilities_and_hazards:
  locomotion:
  - sticky_nectar_contact_can_complicate_close_interaction_without_automatic_restraint
  physical_hazards: []
  elemental_environmental_hazards:
  - strong_odor_and_nectar_sensory_exposure
  anomalous_hazards: []
  behavioral_capabilities:
  - prey_attraction_with_nectar
  - threat_linked_high_odor_state_version_scoped
  - calm_low_odor_state_version_scoped
  utility_interaction_capabilities:
  - odor_state_can_telegraph_emotion_or_threat_context_without_becoming_a_meter
  immunities_or_approach_invalidators:
  - scent_never_forces_choices_or_deletes_memory_automatically
  hazard_records:
  - hazard_key: gloom-odor-and-nectar-exposure
    kind: respiratory
    delivery_or_exposure:
    - close_or_downwind_odor_exposure
    - contact_with_sticky_nectar_when_scene_supports_it
    prerequisite_or_trigger:
    - Gloom_present
    - odor_state_or_nectar_present
    warning_signs:
    - strong_smell
    - visible_drool_or_nectar
    - local_warnings
    - target_behavior_changes
    immediate_effects:
    - nausea_or_distraction_when_authored
    - attraction_aversion_or_curiosity_without_compulsion
    - sticky_contact_complication
    delayed_or_persistent_effects:
    - rare_severe_faint_or_memory_folklore_only_when_explicitly_authored_from_versioned_source
    ordinary_consequence_ceiling: moderate
    exceptional_consequence_ceiling: serious_in_rare_heavy_exposure
    countermeasures:
    - distance
    - upwind_position
    - ventilation
    - avoid_contact_with_nectar
    emergency_consumable_hooks: []
    context_amplifiers:
    - enclosed_space
    - threatened_high_odor_state
    - prolonged_close_exposure
    context_mitigators:
    - open_air
    - distance
    - calm_state
    governing_species_axes:
    - potency
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - GLO-C1-001
    - GLO-C1-002
    - GLO-D1-001
  notes:
  - Grass_or_Poison_typing_does_not_create_universal_rooting_pollen_acid_or_lure_permissions
  - delivery_or_exposure_is_separate_from_consequence
  - source_hyperbole_does_not_become_real_world_chemistry_timing_or_status_math
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: sensory_ecology_can_be_more_dangerous_in_low_ventilation_or_low_knowledge_contexts_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: authored_local_environment_and_low_human_knowledge_can_raise_encounter_pressure_without_stat_scaling
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat:
  - vegetated_humid_or_shaded_localities_only_when_authored_D2
  - exact_ancient_range_unknown
  ecological_niche:
  - plantlike_omnivorous_or_predatory_ecology_with_scent_and_nectar_hooks_without_complete_diet_claim
  activity_pattern:
  - calm_low_odor_state_possible
  - threatened_high_odor_state_versioned
  seasonal_notes:
  - unknown
  feeding_and_resource_interaction:
  - prey_attraction_with_nectar_is_source_backed_but_exact_prey_classes_unknown
  social_structure:
  - unknown
  predator_prey_competitor_links:
  - species_specific_source_backed_predation_only_where_listed
  - other_links_unknown
  environmental_effects:
  - local_signs_only_when_authored_no_continuous_ecosystem_simulation
  observable_signs:
  - heavy_foul_scent
  - sticky_residue
  - droplet_traces
  - disturbed_small_prey_routes
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  - direct_encounterability_somewhere_does_not_equal_equal_abundance_or_universal_presence
  unsupported_gaps:
  - exact_scent_radius
  - susceptible_prey_classes
  - conditions_for_faint_or_memory_effect
  - safe_nectar_collection_and_preservation
human_perception_and_culture:
  ordinary_attitude:
  - avoidance_or_wary_tolerance_varies_by_local_experience_and_individual_scent_tolerance
  specialist_knowledge_holders:
  - foragers
  - hunters
  - healers_or_herbalists_only_as_observers_not_automatic_harvesters
  benefits_and_services:
  - none_required
  fears_and_avoidance:
  - overwhelming_smell
  - sticky_nectar
  - rare_fainting_folklore
  myths_omens_taboos:
  - local_D2_only_if_authored
  practical_customs:
  - stay_upwind
  - do_not_touch_or_collect_nectar_without_explicit_safe_context
  - back_off_if_odor_intensifies
  common_misbeliefs:
  - the_smell_affects_everyone_identically
  - odor_can_control_minds
  - nectar_is_free_bait_or_medicine
  local_variation_notes:
  - no_region_wide_botanical_chemical_or_trainer_institution_is_implied
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - the_smell_strengthens_before_the_creature_itself_becomes_visible
  local_aliases_or_titles: none
  identification_evidence:
  - flower_shape
  - mouth_nectar
  - strong_nonuniform_odor
  - threat_linked_odor_change
  initial_knowledge_fragments:
  - odor_and_sticky_mouth_fluid_are_meaningful_warning_signs
  post_identification_knowledge:
  - source_backed_behavior_and_hazard_signs_can_be_learned_without_revealing_exact_hidden_formulas
  - evolution_stage_does_not_inherit_unevidenced_family_behaviors
  advanced_insights:
  - source_itself_supports_mixed_attraction_repulsion_and_rare_enjoyment_so_no_universal_scent_status_exists
  exceptional_individual_knowledge_hooks:
  - a_Gloom_whose_smell_is_used_as_a_warning_that_an_old_ruin_is_occupied
threat_and_encounter:
  baseline_threat_band: moderate
  default_behavior_states:
  - calm
  - low_odor
  - feeding
  - threatened_high_odor
  - withdrawing
  aggression_tendency: contextual
  territoriality: unknown_or_local
  avoidance_tendency: moderate
  warning_signs:
  - odor_intensifies
  - posture_change
  - sticky_nectar_visible
  encounter_triggers:
  - close_approach
  - threat_or_cornering
  - contact_with_nectar
  escalation_triggers:
  - prolonged_pressure
  - enclosed_exposure
  deescalation_conditions:
  - increase_distance
  - move_upwind
  - stop_threatening
  pursuit_profile: short_or_contextual
  group_size_effects:
  - no_generic_multiplier_and_no_colony_assumption_without_local_evidence
  ordinary_consequence_categories:
  - nausea_or_disorientation
  - sticky_contact
  - exposure_complication
  consequence_ceiling: moderate_to_serious_in_heavy_context
  human_check_hooks:
  - action: approach_or_observe_a_Gloom_without_becoming_overexposed_to_odor_or_sticky_nectar
    relevant_species_axis: none
    relevant_tags:
    - context_sensitive_odor
    - sticky_nectar_present
    relevant_hazard_keys:
    - gloom-odor-and-nectar-exposure
    difficulty_guidance: D024_context_from_distance_visibility_cover_prior_knowledge_current_species_state_and_escape_space
    notes: avoidance_or_detection_difficulty_is_not_the_same_number_as_post_exposure_consequence
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - calm
    - wary
    - threat_sensitive
    - feeding_focused
    condition_variants:
    - low_odor_calm
    - high_odor_threatened
    - nectar_present
    - injured
    local_lineage_variants:
    - none_without_evidence
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes:
    - age
    - repeated_survival_near_enclosed_habitat
    - distinctive_local_feeding_history
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits:
    - recognizable_odor_profile
    - persistent_flower_marking
    - known_rest_site
    warning_or_rumor_hooks:
    - a_Gloom_whose_smell_is_used_as_a_warning_that_an_old_ruin_is_occupied
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites:
  - rare_voluntary_trust
  - ventilated_rest_space
  - human_tolerance_and_local_acceptance
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
  - odor_management
  - social_aversion
  - sticky_nectar_cleanup_without_harvest_assumption
  logistics:
    food:
    - prey_attraction_with_nectar_source_backed_but_complete_diet_unknown
    water:
    - regular_access_as_needed
    shelter_temperature:
    - ventilated_rest_space_away_from_dense_human_sleeping_areas
    space_travel:
    - small_to_medium_body_with_scent_management_cost
    settlement_restrictions:
    - dense_settlement_presence_requires_social_tolerance_and_ventilation
    special_resources:
    - none_fixed
  assistance_capabilities:
  - scent_or_nectar_behavior_can_support_authored_tracking_or_ecology_observation_only_when_voluntary
  handling_boundaries:
  - no_defeat_to_recruit
  - no_scent_exploitation_as_forced_bait
  - no_nectar_harvest_assumption
  - one_visible_companion_slot
  separation_injury_notes:
  - bonded_individual_remains_independent_and_is_not_inventory
mechanical_hooks:
  tracking_clues:
  - distinctive_odor
  - sticky_residue_when_source_context_supports_it
  - resting_site
  avoidance_preparation:
  - upwind_route
  - open_air
  - recognize_odor_escalation
  resistance_or_protection:
  - distance
  - ventilation
  - avoid_direct_nectar_contact
  combat_approach_permissions:
  - space_and_wind_direction_can_matter_without_fixed_scent_radius
  blocked_or_invalid_approaches:
  - treat_odor_as_mind_control
  - fixed_mile_radius
  - automatic_faint_or_memory_delete
  - farm_nectar_as_generic_resource
  fear_hooks:
  - the_smell_strengthens_before_the_creature_itself_becomes_visible
  injury_hazard_hooks:
  - nausea_or_disorientation
  - sticky_contact
  - exposure_complication
  environmental_state_hooks:
  - wind
  - ventilation
  - distance
  - current_emotional_state
  companion_assistance_hooks:
  - sensory_ecology_help_only_when_bonded_and_scene_valid
  fortune_spike_opportunities:
  - wind_shift_opens_a_clean_withdrawal_path
  trouble_spike_complications:
  - a_cramped_shelter_traps_the_group_with_a_threatened_high_odor_Gloom
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
  - observe_a_calm_Gloom_with_reduced_odor_in_a_secure_rest_site
  dangerous:
  - a_narrow_shelter_fills_with_Gloom_odor_after_it_is_startled
  unusual_or_rare:
  - a_local_person_is_unusually_unbothered_or_even_attracted_by_the_smell
  discovery_insight:
  - sensory_attraction_and_aversion_are_not_agency_control
  route_environment:
  - use_discrete_authored_state_changes_and_warning_signs_not_continuous_environment_simulation
  settlement_culture:
  - local_practical_customs_may_form_from_repeated_encounters_without_normalized_ownership_or_trainer_culture
  cross_species:
  - family_stage_capabilities_are_not_inherited_without_separate_evidence
presentation_and_p6_followups:
  initial_bestiary_presentation: Gloom_as_a_living_plantlike_Pokemon_with_species_local_behavior_and_hazard_clues_not_a_resource_node
  progressive_reveal_notes:
  - reveal_hazard_delivery_and_warning_signs_before_exact_outcomes
  - preserve_version_and_uncertainty_boundaries
  - do_not_present_modern_ability_move_or_evolution_metadata_as_ancient_UI_rules
  species_specific_visual_needs:
  - heavy_foul_scent
  - sticky_residue
  - droplet_traces
  species_specific_audio_needs:
  - gloom_species_specific_movement_or_hazard_cue
  special_ui_or_readability_needs:
  - no_charm_status_icon_from_scent_alone
  - odor_state_should_be_signaled_as_context_not_fixed_radius
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - oddish
  - vileplume
  predator_prey:
  - source_backed_prey_relationships_only_where_dossier_states_them
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - exact_scent_radius
  - susceptible_prey_classes
  - conditions_for_faint_or_memory_effect
  - safe_nectar_collection_and_preservation
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - discrete_encounter_state_timing_warning_counterplay_and_consequence_resolution
  deferred_to_p6:
  - visual_audio_and_hazard_readability_without_resource_or_status_shortcuts
  deferred_to_p7: []
```
