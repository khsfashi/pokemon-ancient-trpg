# P4 Batch 15 — #045 Vileplume Full-Schema Dossier

Part of `docs/P4_BATCH_15_FULL_SCHEMA_DOSSIERS.md`.

---

## #045 Vileplume / 라플레시아

```yaml
identity:
  national_dex: 45
  species_key: vileplume
  official_name_en: Vileplume
  official_name_ko: 라플레시아
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
  - OFFICIAL-DEX-VILEPLUME-SG
  - P4_BATCH_15_SOURCE_REVIEW
  official_evidence:
  - claim_id: VIL-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-VILEPLUME-SG
    version_context: current_official_portal
    paraphrase: scatters_allergenic_and_poisonous_pollen_from_very_large_petals
  - claim_id: VIL-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: Red_Blue_Yellow_Gold_Silver_Crystal_Ruby_Sapphire_Emerald_FireRed
    paraphrase: versioned_entries_support_active_cloud_scattering_seasonal_abundance_severe_allergy_and_paralysis_or_immobilization_wording
  derived_claims:
  - claim_id: VIL-D1-001
    evidence_class: D1
    based_on:
    - VIL-C1-001
    - VIL-C1-002
    statement: pollen_is_an_authored_airborne_exposure_hazard_with_separable_allergy_toxicity_and_immobilization_claims
    canon_boundary_note: not_constant_aura_exact_radius_continuous_simulation_or_automatic_paralysis
  - claim_id: VIL-D1-002
    evidence_class: D1
    based_on:
    - VIL-C1-001
    statement: large_petals_are_integrated_anatomy
    canon_boundary_note: not_harvestable_plant_resource_or_loot
canonical_source_data:
  types:
  - grass
  - poison
  base_stats_raw:
    hp: 75
    attack: 80
    defense: 85
    special_attack: 110
    special_defense: 90
    speed: 50
  abilities_relevant_to_p4:
  - chlorophyll_as_modern_context
  - effect_spore_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4:
  - historical_named_move_terms_are_evidence_context_only_where_source_review_notes_them
  physical_metadata:
    height: 1.2_m
    weight: 18.6_kg
  evolution_source:
    evolves_from: gloom
    evolves_to: []
    canonical_conditions:
    - Leaf_Stone_is_modern_source_context_not_ancient_inventory_law
    - Bellossom_branch_exists_only_as_post_Gen1_provenance_context
  other_material_facts:
  - airborne_allergenic_and_poisonous_pollen
  - active_petal_scattering
  - versioned_paralysis_or_immobilization
  - seasonal_pollen_abundance
  - prey_attraction_then_capture
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 4
  potency: 5
  resistance: 4
  speed: 2
  derivation_notes:
    vigor: hp_75
    force: attack_80
    guard: defense_85
    potency: special_attack_110
    resistance: special_defense_90
    speed: speed_50
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - plantlike_body_not_object_or_resource_semantics
  - modern_move_ability_evolution_metadata_not_ancient_formula
capabilities_and_hazards:
  locomotion:
  - large_integrated_petals_can_control_close_space_but_are_not_harvestable_equipment
  physical_hazards: []
  elemental_environmental_hazards:
  - allergenic_airborne_pollen
  - toxic_airborne_pollen
  - versioned_paralysis_or_immobilization_exposure
  anomalous_hazards: []
  behavioral_capabilities:
  - active_petal_scattering
  - seasonally_variable_pollen_abundance_version_scoped
  - predatory_attraction_and_capture_version_scoped
  utility_interaction_capabilities:
  - visible_pollen_and_petals_provide_warning_state_not_continuous_air_simulation
  immunities_or_approach_invalidators:
  - pollen_is_not_a_constant_aura_and_does_not_automatically_paralyze
  hazard_records:
  - hazard_key: vileplume-airborne-pollen-exposure
    kind: respiratory
    delivery_or_exposure:
    - inhalation_or_surface_exposure_to_airborne_pollen
    - close_range_active_petal_scatter
    prerequisite_or_trigger:
    - pollen_present
    - active_scattering_or_high_pollen_season_context
    warning_signs:
    - visible_yellow_pollen
    - petal_shaking_or_flapping
    - local_allergy_warnings
    - irritation_before_heavier_exposure
    immediate_effects:
    - allergic_or_irritant_response
    - toxic_exposure
    - vision_or_breathing_complication_when_authored
    delayed_or_persistent_effects:
    - continued_allergic_or_toxic_effects
    - version_scoped_paralysis_or_immobilization_only_when_explicitly_authored
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: critical_in_heavy_or_vulnerable_exposure
    countermeasures:
    - distance
    - upwind_route
    - cover_face_and_skin_with_available_material
    - leave_visible_pollen_zone
    - shelter_or_ventilation
    emergency_consumable_hooks: []
    context_amplifiers:
    - enclosed_space
    - high_pollen_season
    - downwind_position
    - active_scattering
    context_mitigators:
    - distance
    - upwind_position
    - rain_or_shelter_when_authored
    - early_warning
    governing_species_axes:
    - potency
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - VIL-C1-001
    - VIL-C1-002
    - VIL-D1-001
  notes:
  - Grass_or_Poison_typing_does_not_create_universal_rooting_pollen_acid_or_lure_permissions
  - delivery_or_exposure_is_separate_from_consequence
  - source_hyperbole_does_not_become_real_world_chemistry_timing_or_status_math
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: airborne_pollen_is_more_ecologically_dangerous_where_people_lack_protective_knowledge_but_no_global_ancient_stat_bonus_exists
  stat_effect_if_any: none
  behavior_effect_if_any: authored_local_environment_and_low_human_knowledge_can_raise_encounter_pressure_without_stat_scaling
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat:
  - vegetated_localities_with_authored_pollen_ecology
  - exact_ancient_range_unknown
  ecological_niche:
  - large_flowered_predatory_or_defensive_plantlike_Pokemon_with_airborne_pollen_hazard
  activity_pattern:
  - resting
  - pollen_scattering
  - feeding_or_prey_response_when_authored
  seasonal_notes:
  - pollen_abundance_can_vary_by_season_version_scoped
  feeding_and_resource_interaction:
  - prey_attraction_and_devouring_is_version_scoped_but_does_not_define_all_diet
  social_structure:
  - unknown
  predator_prey_competitor_links:
  - species_specific_source_backed_predation_only_where_listed
  - other_links_unknown
  environmental_effects:
  - local_signs_only_when_authored_no_continuous_ecosystem_simulation
  observable_signs:
  - yellow_pollen_on_surfaces
  - visible_airborne_haze
  - large_petal_tracks_or_disturbed_vegetation
  - local_avoidance_paths
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  - direct_encounterability_somewhere_does_not_equal_equal_abundance_or_universal_presence
  unsupported_gaps:
  - exact_pollen_radius
  - dose_response
  - wind_persistence
  - species_specific_allergen_susceptibility
human_perception_and_culture:
  ordinary_attitude:
  - strong_caution_especially_where_pollen_seasons_or_prior_exposure_are_known
  specialist_knowledge_holders:
  - route_guides
  - seasonal_observers
  - healers_familiar_with_exposure_signs
  benefits_and_services:
  - none_required
  fears_and_avoidance:
  - air_turning_yellow_with_pollen
  - severe_allergic_or_toxic_exposure
  - close_range_petal_scatter
  myths_omens_taboos:
  - local_D2_only_if_authored
  practical_customs:
  - watch_wind_and_visible_pollen
  - avoid_crossing_active_scatter_zone
  - use_distance_and_shelter
  common_misbeliefs:
  - every_pollen_exposure_is_poison_status
  - large_petals_are_valuable_harvest_stock
  - all_Grass_or_Poison_types_create_pollen_clouds
  local_variation_notes:
  - no_region_wide_botanical_chemical_or_trainer_institution_is_implied
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - the_air_turns_yellow_before_the_large_flower_moves
  local_aliases_or_titles: none
  identification_evidence:
  - very_large_flower
  - visible_yellow_pollen
  - petal_scatter_behavior
  initial_knowledge_fragments:
  - visible_pollen_and_petal_motion_are_reason_to_keep_distance
  post_identification_knowledge:
  - source_backed_behavior_and_hazard_signs_can_be_learned_without_revealing_exact_hidden_formulas
  - evolution_stage_does_not_inherit_unevidenced_family_behaviors
  advanced_insights:
  - allergy_toxicity_and_paralysis_wording_are_separate_claims_and_should_not_be_collapsed
  exceptional_individual_knowledge_hooks:
  - an_old_Vileplume_whose_seasonal_bloom_closes_one_forest_pass
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states:
  - resting
  - pollen_low
  - pollen_high
  - actively_scattering
  - feeding
  - defending
  aggression_tendency: contextual
  territoriality: unknown_or_local
  avoidance_tendency: low_to_moderate_when_holding_space
  warning_signs:
  - visible_pollen
  - petal_motion
  - air_color_change
  - allergy_symptoms
  encounter_triggers:
  - close_approach
  - disturbance
  - prey_or_defense_context
  escalation_triggers:
  - remain_downwind
  - cornering
  - prolonged_contact
  deescalation_conditions:
  - withdraw_upwind
  - increase_distance
  - leave_rest_or_feeding_space
  pursuit_profile: contextual_not_required
  group_size_effects:
  - no_generic_multiplier_and_no_colony_assumption_without_local_evidence
  ordinary_consequence_categories:
  - allergic_injury
  - toxic_exposure
  - immobilization_risk
  - route_denial
  consequence_ceiling: critical_possible_under_heavy_exposure_without_automatic_death
  human_check_hooks:
  - action: cross_or_withdraw_from_a_Vileplume_pollen_zone_after_reading_visible_warning_signs
    relevant_species_axis: none
    relevant_tags:
    - airborne_pollen
    - allergenic
    - toxic
    - active_pollen_scatter
    relevant_hazard_keys:
    - vileplume-airborne-pollen-exposure
    difficulty_guidance: D024_context_from_distance_visibility_cover_prior_knowledge_current_species_state_and_escape_space
    notes: avoidance_or_detection_difficulty_is_not_the_same_number_as_post_exposure_consequence
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - calm
    - defensive
    - feeding
    - space_holding
    condition_variants:
    - low_pollen
    - high_pollen
    - actively_scattering
    - injured_or_exhausted
    local_lineage_variants:
    - none_without_evidence
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes:
    - age
    - survival_through_many_pollen_seasons
    - persistent_territory_history
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits:
    - unusual_petal_scarring
    - known_seasonal_rest_site
    - distinctive_pollen_color_or_density_only_if_authored
    warning_or_rumor_hooks:
    - an_old_Vileplume_whose_seasonal_bloom_closes_one_forest_pass
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites:
  - rare_voluntary_trust
  - safe_outdoor_space
  - pollen_management_and_bystander_protection
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
  - airborne_hazard_management
  - settlement_exclusion
  - large_flower_space_and_visibility
  logistics:
    food:
    - predatory_behavior_version_scoped_but_complete_diet_unknown
    water:
    - regular_access_as_needed
    shelter_temperature:
    - large_ventilated_outdoor_rest_site
    space_travel:
    - medium_large_body_plus_safe_pollen_distance
    settlement_restrictions:
    - dense_settlement_residence_is_exceptional_due_to_airborne_hazard
    special_resources:
    - none_fixed
  assistance_capabilities:
  - none_required_beyond_voluntary_species_appropriate_help
  handling_boundaries:
  - no_defeat_to_recruit
  - no_forced_pollen_harvest
  - no_petals_as_resource
  - one_visible_companion_slot
  separation_injury_notes:
  - bonded_individual_remains_independent_and_is_not_inventory
mechanical_hooks:
  tracking_clues:
  - visible_pollen_residue
  - large_plantlike_tracks
  - disturbed_vegetation
  avoidance_preparation:
  - check_wind
  - look_for_visible_pollen
  - choose_sheltered_or_upwind_route
  resistance_or_protection:
  - distance
  - cover_face_and_skin_with_available_material
  - leave_exposure_zone_early
  combat_approach_permissions:
  - avoid_long_close_engagement_in_active_pollen_state
  blocked_or_invalid_approaches:
  - constant_poison_aura
  - continuous_particle_concentration_simulation
  - automatic_paralysis
  - harvest_petals_or_pollen_as_default_loot
  fear_hooks:
  - the_air_turns_yellow_before_the_large_flower_moves
  injury_hazard_hooks:
  - allergic_injury
  - toxic_exposure
  - immobilization_risk
  - route_denial
  environmental_state_hooks:
  - wind
  - shelter
  - season
  - distance
  - visible_pollen_state
  companion_assistance_hooks:
  - environmental_warning_help_only_when_bonded_and_scene_valid
  fortune_spike_opportunities:
  - rain_or_wind_change_reduces_a_current_exposure_window_when_authored
  trouble_spike_complications:
  - a_high_pollen_state_begins_in_a_narrow_route_with_poor_ventilation
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
  - observe_a_low_pollen_Vileplume_from_upwind_distance
  dangerous:
  - a_route_bends_downwind_into_a_visible_pollen_haze
  unusual_or_rare:
  - an_exceptional_Vileplume_has_a_known_seasonal_bloom_site_that_locals_mark_and_avoid
  discovery_insight:
  - allergy_toxin_and_paralysis_claims_are_distinct_and_exposure_is_not_a_constant_aura
  route_environment:
  - use_discrete_authored_state_changes_and_warning_signs_not_continuous_environment_simulation
  settlement_culture:
  - local_practical_customs_may_form_from_repeated_encounters_without_normalized_ownership_or_trainer_culture
  cross_species:
  - family_stage_capabilities_are_not_inherited_without_separate_evidence
presentation_and_p6_followups:
  initial_bestiary_presentation: Vileplume_as_a_living_plantlike_Pokemon_with_species_local_behavior_and_hazard_clues_not_a_resource_node
  progressive_reveal_notes:
  - reveal_hazard_delivery_and_warning_signs_before_exact_outcomes
  - preserve_version_and_uncertainty_boundaries
  - do_not_present_modern_ability_move_or_evolution_metadata_as_ancient_UI_rules
  species_specific_visual_needs:
  - yellow_pollen_on_surfaces
  - visible_airborne_haze
  - large_petal_tracks_or_disturbed_vegetation
  species_specific_audio_needs:
  - vileplume_species_specific_movement_or_hazard_cue
  special_ui_or_readability_needs:
  - visible_airborne_pollen_warning_without_radius_meter
  - separate_allergy_toxin_and_immobilization_consequence_text
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - oddish
  - gloom
  predator_prey:
  - source_backed_prey_relationships_only_where_dossier_states_them
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - exact_pollen_radius
  - dose_response
  - wind_persistence
  - species_specific_allergen_susceptibility
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - discrete_encounter_state_timing_warning_counterplay_and_consequence_resolution
  deferred_to_p6:
  - visual_audio_and_hazard_readability_without_resource_or_status_shortcuts
  deferred_to_p7: []
```
