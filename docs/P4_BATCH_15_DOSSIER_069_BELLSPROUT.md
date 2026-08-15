# P4 Batch 15 — #069 Bellsprout Full-Schema Dossier

Part of `docs/P4_BATCH_15_FULL_SCHEMA_DOSSIERS.md`.

---

## #069 Bellsprout / 모다피

```yaml
identity:
  national_dex: 69
  species_key: bellsprout
  official_name_en: Bellsprout
  official_name_ko: 모다피
  evolution_family_keys:
  - bellsprout
  - weepinbell
  - victreebel
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs:
  - SRC-DATA-001
  - OFFICIAL-DEX-BELLSPROUT-SG
  - P4_BATCH_15_SOURCE_REVIEW
  official_evidence:
  - claim_id: BEL-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-BELLSPROUT-SG
    version_context: current_official_portal
    paraphrase: reacts_immediately_to_nearby_movement_with_vines_and_plants_feet_deep_to_replenish_moisture_becoming_unable_to_flee_while_rooted
  - claim_id: BEL-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: Red_Blue_Yellow_Gold_Silver_Crystal_Ruby_Sapphire_Emerald_FireRed
    paraphrase: versioned_entries_support_bug_predation_fast_prey_capture_flexible_body_and_iron_corroding_mouth_fluid
  derived_claims:
  - claim_id: BEL-D1-001
    evidence_class: D1
    based_on:
    - BEL-C1-001
    statement: rooted_rehydration_is_a_species_local_temporary_state_with_mobility_cost
    canon_boundary_note: not_generic_healing_forced_movement_immunity_or_permanent_immobility
  - claim_id: BEL-D1-002
    evidence_class: D1
    based_on:
    - BEL-C1-002
    statement: corrosive_fluid_is_severe_species_local_chemistry
    canon_boundary_note: not_universal_material_deletion_pH_formula_or_automatic_equipment_destruction
canonical_source_data:
  types:
  - grass
  - poison
  base_stats_raw:
    hp: 50
    attack: 75
    defense: 35
    special_attack: 70
    special_defense: 30
    speed: 40
  abilities_relevant_to_p4:
  - chlorophyll_as_modern_context
  - gluttony_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4:
  - historical_named_move_terms_are_evidence_context_only_where_source_review_notes_them
  physical_metadata:
    height: 0.7_m
    weight: 4.0_kg
  evolution_source:
    evolves_from: none
    evolves_to:
    - weepinbell
    canonical_conditions:
    - modern_level_21_metadata_is_source_context_only
  other_material_facts:
  - carnivorous_bug_predation
  - root_foot_moisture_absorption
  - rooted_rehydration_prevents_escape
  - movement_reaction_with_vines
  - versioned_iron_corroding_fluid
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 3
  guard: 1
  potency: 3
  resistance: 1
  speed: 2
  derivation_notes:
    vigor: hp_50
    force: attack_75
    guard: defense_35
    potency: special_attack_70
    resistance: special_defense_30
    speed: speed_40
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - plantlike_body_not_object_or_resource_semantics
  - modern_move_ability_evolution_metadata_not_ancient_formula
capabilities_and_hazards:
  locomotion:
  - vine_capture_or_strike
  - flexible_body
  - rooted_state_prevents_fleeing
  physical_hazards:
  - vine_capture_or_strike
  elemental_environmental_hazards:
  - corrosive_mouth_fluid_version_scoped
  anomalous_hazards: []
  behavioral_capabilities:
  - immediate_reaction_to_nearby_movement
  - small_bug_predation
  - rooted_rehydration
  utility_interaction_capabilities:
  - rooting_is_a_discrete_water_access_tradeoff_not_a_generic_heal_action
  immunities_or_approach_invalidators:
  - motion_reaction_is_not_omniscient_detection_or_free_initiative
  hazard_records:
  - hazard_key: bellsprout-corrosive-mouth-fluid
    kind: other
    delivery_or_exposure:
    - spit_or_close_contact_with_corrosive_mouth_fluid_when_authored
    prerequisite_or_trigger:
    - feeding_or_defensive_sequence
    - target_within_scene_valid_range
    warning_signs:
    - wet_mouth_or_spit
    - damaged_surface_from_prior_contact
    - predatory_posture
    immediate_effects:
    - chemical_burn_or_material_damage_when_contact_occurs
    delayed_or_persistent_effects:
    - continued_tissue_or_material_damage_only_if_scene_authors_unremoved_exposure
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: critical_in_unprotected_or_prolonged_contact
    countermeasures:
    - distance
    - avoid_fluid_contact
    - wash_or_remove_contaminated_material_when_scene_resources_allow
    emergency_consumable_hooks: []
    context_amplifiers:
    - confined_space
    - immobilized_target
    - prolonged_contact
    context_mitigators:
    - distance
    - cover
    - rapid_decontamination
    governing_species_axes:
    - potency
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - BEL-C1-002
    - BEL-D1-002
  notes:
  - Grass_or_Poison_typing_does_not_create_universal_rooting_pollen_acid_or_lure_permissions
  - delivery_or_exposure_is_separate_from_consequence
  - source_hyperbole_does_not_become_real_world_chemistry_timing_or_status_math
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: rooting_tradeoff_and_predatory_reactivity_make_local_encounters_dangerous_without_speed_or_force_becoming_literal_reaction_formulas
  stat_effect_if_any: none
  behavior_effect_if_any: authored_local_environment_and_low_human_knowledge_can_raise_encounter_pressure_without_stat_scaling
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat:
  - hot_humid_or_well_watered_localities_only_when_authored_D2
  - exact_ancient_range_unknown
  ecological_niche:
  - small_carnivorous_plantlike_Pokemon_that_captures_small_prey_and_can_root_for_moisture
  activity_pattern:
  - mobile_hunting
  - rooted_rehydrating_state
  - reactive_to_nearby_movement
  seasonal_notes:
  - unknown
  feeding_and_resource_interaction:
  - small_bug_predation_source_backed
  - rooted_moisture_absorption_source_backed
  social_structure:
  - unknown
  predator_prey_competitor_links:
  - species_specific_source_backed_predation_only_where_listed
  - other_links_unknown
  environmental_effects:
  - local_signs_only_when_authored_no_continuous_ecosystem_simulation
  observable_signs:
  - small_insect_remains
  - vine_marks
  - deep_narrow_root_holes
  - local_corrosion_marks_when_explicitly_authored
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  - direct_encounterability_somewhere_does_not_equal_equal_abundance_or_universal_presence
  unsupported_gaps:
  - motion_detection_range_and_mechanism
  - exact_rooting_time
  - corrosion_rate_and_material_limits
  - mandrake_rumor_truth
human_perception_and_culture:
  ordinary_attitude:
  - common_caution_near_wet_vegetation_if_local_people_know_its_movement_reaction
  specialist_knowledge_holders:
  - hunters
  - foragers
  - wetland_or_humid_route_guides
  benefits_and_services:
  - none_required
  fears_and_avoidance:
  - sudden_vine_reaction
  - corrosive_spit
  - being_near_a_rooted_individual_that_is_cornered
  myths_omens_taboos:
  - local_D2_only_if_authored
  practical_customs:
  - move_slowly_near_suspected_rest_sites
  - do_not_assume_a_rooted_Bellsprout_is_helpless
  - avoid_corrosive_fluid_contact
  common_misbeliefs:
  - it_detects_all_movement_everywhere
  - rooting_heals_all_injury
  - iron_corrosion_means_every_material_disappears
  - mandrake_rumor_is_taxonomic_fact
  local_variation_notes:
  - no_region_wide_botanical_chemical_or_trainer_institution_is_implied
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - a_thin_plant_snaps_its_vines_toward_the_smallest_movement
  local_aliases_or_titles: none
  identification_evidence:
  - vine_reaction
  - rootlike_feet
  - slender_body
  - rooted_cannot_flee_state
  initial_knowledge_fragments:
  - nearby_movement_can_trigger_a_fast_vine_response
  post_identification_knowledge:
  - source_backed_behavior_and_hazard_signs_can_be_learned_without_revealing_exact_hidden_formulas
  - evolution_stage_does_not_inherit_unevidenced_family_behaviors
  advanced_insights:
  - rooted_rehydration_trades_mobility_for_water_access_and_does_not_create_generic_regeneration
  exceptional_individual_knowledge_hooks:
  - a_Bellsprout_that_survived_a_long_drought_by_guarding_one_hidden_spring
threat_and_encounter:
  baseline_threat_band: low_to_moderate
  default_behavior_states:
  - mobile
  - hunting
  - rooted_rehydrating
  - rooted_cannot_flee
  - startled
  - defending
  aggression_tendency: predatory_toward_small_prey_contextual_toward_humans
  territoriality: unknown_or_local
  avoidance_tendency: moderate_when_mobile_none_while_rooted
  warning_signs:
  - vine_orientation_toward_motion
  - feet_pressing_into_soil
  - wet_mouth
  encounter_triggers:
  - nearby_movement
  - feeding_opportunity
  - threat_while_rooted
  escalation_triggers:
  - close_contact
  - blocking_escape_after_unrooting
  - continued_attack
  deescalation_conditions:
  - increase_distance
  - stop_movement_pressure
  - leave_rooting_site
  pursuit_profile: short_contextual_when_mobile
  group_size_effects:
  - no_generic_multiplier_and_no_colony_assumption_without_local_evidence
  ordinary_consequence_categories:
  - vine_entanglement_or_strike
  - chemical_burn
  - minor_to_serious_injury
  consequence_ceiling: serious_for_ordinary_encounters
  human_check_hooks:
  - action: pass_a_motion_sensitive_Bellsprout_or_exploit_its_rooted_rehydration_tradeoff_without_treating_it_as_helpless
    relevant_species_axis: none
    relevant_tags:
    - motion_reaction
    - rooted_rehydrating
    - rooted_cannot_flee
    - corrosive_fluid
    relevant_hazard_keys:
    - bellsprout-corrosive-mouth-fluid
    difficulty_guidance: D024_context_from_distance_visibility_cover_prior_knowledge_current_species_state_and_escape_space
    notes: avoidance_or_detection_difficulty_is_not_the_same_number_as_post_exposure_consequence
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - skittish
    - ambush_focused
    - water_seeking
    - defensive_when_rooted
    condition_variants:
    - mobile
    - rooted_rehydrating
    - hungry
    - injured
    local_lineage_variants:
    - none_without_evidence
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes:
    - age
    - survival_in_a_dry_season
    - persistent_hunting_site_history
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits:
    - vine_scars
    - known_rooting_site
    - unusual_reaction_pattern
    warning_or_rumor_hooks:
    - a_Bellsprout_that_survived_a_long_drought_by_guarding_one_hidden_spring
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites:
  - voluntary_trust
  - reliable_water_and_soil_access
  - safe_handling_around_vines_and_fluid
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
  - rooting_breaks_travel_tempo
  - corrosive_fluid_safety
  - predatory_reactivity_near_small_animals
  logistics:
    food:
    - small_bug_predation_source_backed
    water:
    - rooted_moisture_absorption_source_backed
    - regular_safe_water_access
    shelter_temperature:
    - humid_or_species_appropriate_rest_site
    space_travel:
    - small_body_but_rooting_site_must_not_be_constantly_disturbed
    settlement_restrictions:
    - rooting_in_busy_paths_is_unsafe
    special_resources:
    - none_fixed
  assistance_capabilities:
  - movement_warning_or_vine_help_only_when_voluntary_and_scene_valid
  handling_boundaries:
  - no_defeat_to_recruit
  - no_use_as_living_trap
  - no_fluid_harvest_assumption
  - one_visible_companion_slot
  separation_injury_notes:
  - bonded_individual_remains_independent_and_is_not_inventory
mechanical_hooks:
  tracking_clues:
  - small_vine_marks
  - rooting_holes
  - insect_remains_when_context_supports_it
  avoidance_preparation:
  - watch_for_vine_movement
  - keep_distance_from_mouth
  - do_not_rush_rooted_individual
  resistance_or_protection:
  - distance
  - cover
  - rapid_decontamination_after_contact_when_possible
  combat_approach_permissions:
  - rooted_state_can_limit_escape_without_becoming_a_free_hit_or_forced_movement_immunity
  blocked_or_invalid_approaches:
  - omniscient_motion_detection
  - automatic_initiative
  - rooting_as_heal_button
  - evade_any_attack_as_invulnerability
  - iron_corrosion_as_matter_delete
  fear_hooks:
  - a_thin_plant_snaps_its_vines_toward_the_smallest_movement
  injury_hazard_hooks:
  - vine_entanglement_or_strike
  - chemical_burn
  - minor_to_serious_injury
  environmental_state_hooks:
  - soil_moisture
  - rooting_state
  - cover
  - movement_visibility
  companion_assistance_hooks:
  - vine_or_local_water_site_help_only_when_bonded_and_scene_valid
  fortune_spike_opportunities:
  - a_rooted_state_creates_a_nonviolent_bypass_window_if_the_party_does_not_provoke_it
  trouble_spike_complications:
  - a_sudden_movement_in_dense_growth_triggers_a_vine_response
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
  - watch_a_Bellsprout_root_deeply_and_trade_escape_for_rehydration
  dangerous:
  - a_traveler_moves_near_a_hidden_feeding_site_and_vines_react_before_the_creature_is_fully_seen
  unusual_or_rare:
  - local_mandrake_like_folklore_forms_around_an_exceptional_old_Bellsprout_without_claiming_taxonomic_truth
  discovery_insight:
  - rooting_is_a_discrete_tradeoff_not_a_generic_Grass_mechanic
  route_environment:
  - use_discrete_authored_state_changes_and_warning_signs_not_continuous_environment_simulation
  settlement_culture:
  - local_practical_customs_may_form_from_repeated_encounters_without_normalized_ownership_or_trainer_culture
  cross_species:
  - family_stage_capabilities_are_not_inherited_without_separate_evidence
presentation_and_p6_followups:
  initial_bestiary_presentation: Bellsprout_as_a_living_plantlike_Pokemon_with_species_local_behavior_and_hazard_clues_not_a_resource_node
  progressive_reveal_notes:
  - reveal_hazard_delivery_and_warning_signs_before_exact_outcomes
  - preserve_version_and_uncertainty_boundaries
  - do_not_present_modern_ability_move_or_evolution_metadata_as_ancient_UI_rules
  species_specific_visual_needs:
  - small_insect_remains
  - vine_marks
  - deep_narrow_root_holes
  species_specific_audio_needs:
  - bellsprout_species_specific_movement_or_hazard_cue
  special_ui_or_readability_needs:
  - rooted_state_readable_without_heal_icon
  - motion_reaction_not_shown_as_automatic_interrupt
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - weepinbell
  - victreebel
  predator_prey:
  - source_backed_prey_relationships_only_where_dossier_states_them
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - motion_detection_range_and_mechanism
  - exact_rooting_time
  - corrosion_rate_and_material_limits
  - mandrake_rumor_truth
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - discrete_encounter_state_timing_warning_counterplay_and_consequence_resolution
  deferred_to_p6:
  - visual_audio_and_hazard_readability_without_resource_or_status_shortcuts
  deferred_to_p7: []
```
