# P4 Batch 15 — #071 Victreebel Full-Schema Dossier

Part of `docs/P4_BATCH_15_FULL_SCHEMA_DOSSIERS.md`.

---

## #071 Victreebel / 우츠보트

```yaml
identity:
  national_dex: 71
  species_key: victreebel
  official_name_en: Victreebel
  official_name_ko: 우츠보트
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
  - OFFICIAL-DEX-VICTREEBEL-SG
  - P4_BATCH_15_SOURCE_REVIEW
  official_evidence:
  - claim_id: VIC-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-VICTREEBEL-SG
    version_context: current_official_portal
    paraphrase: lures_prey_with_nectar_or_honey_like_aroma_and_dissolves_it_with_digestive_fluid
  - claim_id: VIC-C1-002
    evidence_class: C1
    source_ref: OFFICIAL-DEX-VICTREEBEL-SG
    version_context: current_official_portal
    paraphrase: acid_that_has_dissolved_many_prey_is_described_as_becoming_sweeter_and_more_effective_at_attracting_further_prey
  - claim_id: VIC-C1-003
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: Red_Blue_Yellow_Gold_Silver_Crystal_Ruby_Sapphire_Emerald_FireRed
    paraphrase: versioned_entries_support_vine_visual_decoy_deep_jungle_colony_hearsay_and_extreme_bones_or_hard_object_dissolution_wording
  derived_claims:
  - claim_id: VIC-D1-001
    evidence_class: D1
    based_on:
    - VIC-C1-001
    - VIC-C1-003
    statement: aroma_and_vine_decoy_are_sensory_or_deception_lures
    canon_boundary_note: not_mind_control_forced_pathfinding_input_suppression_or_unavoidable_ingestion
  - claim_id: VIC-D1-002
    evidence_class: D1
    based_on:
    - VIC-C1-001
    - VIC-C1-003
    statement: digestive_dissolution_can_drive_severe_authored_consequences
    canon_boundary_note: not_exact_one_day_timer_matter_deletion_or_global_material_table
  - claim_id: VIC-D1-003
    evidence_class: D1
    based_on:
    - VIC-C1-002
    statement: feeding_history_can_be_a_qualitative_persistent_individual_history_hook
    canon_boundary_note: not_kill_XP_hidden_levels_damage_scaling_recursive_corrosion_scaling_or_farm_loop
canonical_source_data:
  types:
  - grass
  - poison
  base_stats_raw:
    hp: 80
    attack: 105
    defense: 65
    special_attack: 100
    special_defense: 70
    speed: 70
  abilities_relevant_to_p4:
  - chlorophyll_as_modern_context
  - gluttony_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4:
  - historical_named_move_terms_are_evidence_context_only_where_source_review_notes_them
  physical_metadata:
    height: 1.7_m
    weight: 15.5_kg
  evolution_source:
    evolves_from: weepinbell
    evolves_to: []
    canonical_conditions:
    - Leaf_Stone_is_modern_source_context_not_ancient_inventory_or_shop_law
  other_material_facts:
  - aroma_based_prey_lure
  - vine_visual_decoy
  - swallowing_and_digestive_dissolution
  - feeding_history_changes_acid_sweetness
  - versioned_deep_jungle_colony_hearsay
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 5
  guard: 3
  potency: 5
  resistance: 3
  speed: 3
  derivation_notes:
    vigor: hp_80
    force: attack_105
    guard: defense_65
    potency: special_attack_100
    resistance: special_defense_70
    speed: speed_70
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - plantlike_body_not_object_or_resource_semantics
  - modern_move_ability_evolution_metadata_not_ancient_formula
capabilities_and_hazards:
  locomotion:
  - close_capture_or_swallowing
  - vine_decoy_motion
  physical_hazards:
  - close_capture_or_swallowing
  - vine_decoy_motion
  elemental_environmental_hazards:
  - digestive_corrosive_fluid
  anomalous_hazards: []
  behavioral_capabilities:
  - honey_like_scent_lure
  - vine_visual_decoy
  - ambush_predation
  - qualitative_feeding_history
  utility_interaction_capabilities:
  - feeding_history_may_support_persistent_descriptive_individual_history_but_no_numeric_scaling
  immunities_or_approach_invalidators:
  - lure_does_not_remove_agency_and_digestion_does_not_use_a_global_material_table
  hazard_records:
  - hazard_key: victreebel-scent-and-vine-lure
    kind: other
    delivery_or_exposure:
    - smell_honey_like_aroma
    - observe_moving_vine_decoy
    prerequisite_or_trigger:
    - lure_present
    - target_is_unaware_or_investigating
    warning_signs:
    - unnatural_sweet_scent
    - isolated_animal_like_vine_motion
    - missing_small_fauna
    - sticky_or_corrosive_residue
    immediate_effects:
    - attention_or_approach_pressure_without_compulsion
    - ambush_positioning_if_target_chooses_or_fails_to_detect_risk
    delayed_or_persistent_effects:
    - none_automatic
    ordinary_consequence_ceiling: moderate_before_contact
    exceptional_consequence_ceiling: serious_if_lure_enables_close_ambush
    countermeasures:
    - observe_from_distance
    - do_not_follow_scent_blindly
    - check_movement_shape
    - use_local_warning_signs
    emergency_consumable_hooks: []
    context_amplifiers:
    - dense_vegetation
    - low_visibility
    - hunger_or_fatigue
    context_mitigators:
    - distance
    - clear_sight
    - specialist_knowledge
    governing_species_axes: []
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - VIC-C1-001
    - VIC-C1-003
    - VIC-D1-001
  - hazard_key: victreebel-ingestion-and-digestive-fluid
    kind: other
    delivery_or_exposure:
    - close_capture_or_swallowing_sequence
    - contact_with_digestive_fluid
    prerequisite_or_trigger:
    - Victreebel_successfully_closes_distance_or_restrains_target
    warning_signs:
    - open_mouth
    - acid_residue
    - prey_remains
    - failed_escape_space
    immediate_effects:
    - restraint_or_ingestion_risk
    - chemical_burn
    - serious_tissue_or_material_damage
    delayed_or_persistent_effects:
    - continued_digestive_damage_only_while_contact_or_containment_persists
    ordinary_consequence_ceiling: critical
    exceptional_consequence_ceiling: fatal_possible_only_through_authored_consequence_resolution_not_automatic_timer
    countermeasures:
    - avoid_close_mouth_line
    - escape_before_full_capture
    - break_contact
    - rapid_decontamination_when_possible
    emergency_consumable_hooks: []
    context_amplifiers:
    - confined_space
    - surprise
    - prior_entanglement
    context_mitigators:
    - distance
    - open_escape_route
    - early_lure_detection
    governing_species_axes:
    - force
    - potency
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - VIC-C1-001
    - VIC-C1-003
    - VIC-D1-002
  notes:
  - Grass_or_Poison_typing_does_not_create_universal_rooting_pollen_acid_or_lure_permissions
  - delivery_or_exposure_is_separate_from_consequence
  - source_hyperbole_does_not_become_real_world_chemistry_timing_or_status_math
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: ambush_lure_and_digestive_hazard_can_make_an_established_individual_terrifying_without_enemy_scaling_or_kill_based_stat_growth
  stat_effect_if_any: none
  behavior_effect_if_any: authored_local_environment_and_low_human_knowledge_can_raise_encounter_pressure_without_stat_scaling
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat:
  - dense_vegetation_or_jungle_like_localities_only_when_authored_D2
  - exact_baseline_ancient_presence_unknown
  ecological_niche:
  - large_ambush_predator_using_scent_visual_decoy_capture_and_digestive_chemistry
  activity_pattern:
  - lure_present
  - ambush_waiting
  - feeding
  - relocating
  seasonal_notes:
  - unknown
  feeding_and_resource_interaction:
  - prey_dissolution_and_feeding_history_sweetness_relation_source_backed_but_not_numeric
  social_structure:
  - unknown
  predator_prey_competitor_links:
  - species_specific_source_backed_predation_only_where_listed
  - other_links_unknown
  environmental_effects:
  - local_signs_only_when_authored_no_continuous_ecosystem_simulation
  observable_signs:
  - sweet_scent_without_visible_food
  - moving_vine_decoy
  - missing_small_fauna
  - acid_or_sticky_residue
  - partially_dissolved_remains_when_authored
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  - direct_encounterability_somewhere_does_not_equal_equal_abundance_or_universal_presence
  unsupported_gaps:
  - acid_material_limits
  - digestion_time_by_target
  - lure_susceptibility_by_species
  - feeding_count_to_sweetness_change
  - colony_size_and_baseline_local_presence
human_perception_and_culture:
  ordinary_attitude:
  - strong_fear_or_avoidance_where_scent_lure_and_disappearances_are_locally_known
  specialist_knowledge_holders:
  - hunters
  - deep_forest_guides
  - survivors_of_lure_encounters
  benefits_and_services:
  - none_required
  fears_and_avoidance:
  - sweet_scent_leading_into_dense_cover
  - animal_like_vine_decoy
  - ingestion_and_digestive_fluid
  myths_omens_taboos:
  - local_D2_only_if_authored
  practical_customs:
  - do_not_follow_unexplained_sweet_scent
  - observe_moving_vines_from_distance
  - keep_an_open_escape_route
  common_misbeliefs:
  - scent_forces_obedience
  - every_hard_object_dissolves_on_a_fixed_timer
  - feeding_on_prey_levels_it_up
  - colony_hearsay_proves_an_automatic_death_zone
  local_variation_notes:
  - no_region_wide_botanical_chemical_or_trainer_institution_is_implied
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - the_sweetest_smell_in_the_jungle_has_no_visible_flower_source_until_the_vine_moves
  local_aliases_or_titles: none
  identification_evidence:
  - large_pitcherlike_body
  - honey_like_scent
  - animal_like_vine_motion
  - corrosive_residue
  initial_knowledge_fragments:
  - sweet_scent_and_isolated_vine_motion_can_be_an_ambush_warning
  post_identification_knowledge:
  - source_backed_behavior_and_hazard_signs_can_be_learned_without_revealing_exact_hidden_formulas
  - evolution_stage_does_not_inherit_unevidenced_family_behaviors
  advanced_insights:
  - feeding_history_is_qualitative_ecology_and_exceptional_history_not_kill_XP_or_recursive_power_scaling
  exceptional_individual_knowledge_hooks:
  - an_ancient_Victreebel_whose_sweet_scent_marks_a_forest_hollow_where_prey_has_vanished_for_years
threat_and_encounter:
  baseline_threat_band: high
  default_behavior_states:
  - waiting
  - scent_lure_present
  - vine_decoy_present
  - ambushing
  - feeding
  - defending
  aggression_tendency: predatory
  territoriality: unknown_or_local
  avoidance_tendency: low_when_ambush_site_is_favorable
  warning_signs:
  - suspicious_sweet_scent
  - decoy_motion
  - prey_absence
  - open_mouth
  encounter_triggers:
  - investigating_lure
  - close_approach
  - disturbing_feeding_site
  escalation_triggers:
  - failed_escape
  - close_restraint
  - continued_attack
  deescalation_conditions:
  - detect_and_avoid_before_contact
  - break_line_and_leave_ambush_site
  pursuit_profile: short_to_contextual_ambush_focused
  group_size_effects:
  - no_generic_multiplier_and_no_colony_assumption_without_local_evidence
  ordinary_consequence_categories:
  - restraint
  - ingestion_risk
  - chemical_burn
  - critical_injury
  consequence_ceiling: fatal_possible_under_severe_authored_consequence_but_never_automatic
  human_check_hooks:
  - action: detect_and_disengage_from_a_Victreebel_lure_before_close_capture_and_digestive_hazard_compound
    relevant_species_axis: none
    relevant_tags:
    - scent_lure
    - vine_decoy
    - digestive_fluid
    - feeding_history_qualitative
    relevant_hazard_keys:
    - victreebel-scent-and-vine-lure
    - victreebel-ingestion-and-digestive-fluid
    difficulty_guidance: D024_context_from_distance_visibility_cover_prior_knowledge_current_species_state_and_escape_space
    notes: avoidance_or_detection_difficulty_is_not_the_same_number_as_post_exposure_consequence
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - patient_ambusher
    - feeding_focused
    - territorial_if_authored
    - wary_after_failed_ambush
    condition_variants:
    - waiting
    - lure_active
    - ambushing
    - feeding
    - injured
    local_lineage_variants:
    - none_without_evidence
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes:
    - age
    - long_established_ambush_site
    - unusual_feeding_history
    - survival_against_competitors
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits:
    - persistent_vine_damage
    - known_lure_scent_profile
    - recognized_territory_signs
    warning_or_rumor_hooks:
    - an_ancient_Victreebel_whose_sweet_scent_marks_a_forest_hollow_where_prey_has_vanished_for_years
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites:
  - rare_voluntary_persistent_trust
  - strict_predation_safety
  - large_private_space
  - reliable_nonexploitative_feeding_plan
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
  - severe_ambush_and_digestive_hazard
  - social_fear
  - small_animal_safety
  - feeding_logistics
  logistics:
    food:
    - predatory_dissolution_source_backed
    - feeding_history_sweetness_relation_source_backed_without_numeric_count
    water:
    - regular_access_as_needed
    shelter_temperature:
    - large_secluded_rest_or_ambush_site
    space_travel:
    - large_body_and_safe_distance_from_mouth_line_required
    settlement_restrictions:
    - routine_dense_settlement_residence_is_inappropriate_without_exceptional_controls_and_trust
    special_resources:
    - none_fixed
  assistance_capabilities:
  - none_required_beyond_voluntary_scene_valid_help
  handling_boundaries:
  - no_defeat_to_recruit
  - no_forced_baiting_or_feeding_for_power
  - no_acid_harvest_assumption
  - one_visible_companion_slot
  separation_injury_notes:
  - bonded_individual_remains_independent_and_is_not_inventory
mechanical_hooks:
  tracking_clues:
  - sweet_scent
  - missing_small_fauna
  - sticky_or_corrosive_residue
  - unusual_vine_motion
  avoidance_preparation:
  - verify_scent_source
  - maintain_distance
  - keep_escape_route
  - use_local_warnings
  resistance_or_protection:
  - distance
  - cover
  - rapid_escape_from_capture_line
  - decontamination_when_possible
  combat_approach_permissions:
  - never_assume_scent_removes_agency
  - break_contact_before_ingestion_or_sustained_fluid_exposure
  blocked_or_invalid_approaches:
  - scent_as_mind_control
  - forced_pathfinding
  - hard_objects_melt_as_literal_matter_delete
  - one_day_as_exact_timer
  - feeding_history_as_kill_XP_or_stat_scaling
  fear_hooks:
  - the_sweetest_smell_in_the_jungle_has_no_visible_flower_source_until_the_vine_moves
  injury_hazard_hooks:
  - restraint
  - ingestion_risk
  - chemical_burn
  - critical_injury
  environmental_state_hooks:
  - vegetation_density
  - line_of_sight
  - escape_space
  - scent_warning
  - feeding_history_trait_if_exceptional
  companion_assistance_hooks:
  - large_vine_or_ambush_ecology_help_only_when_bonded_and_safely_authored
  fortune_spike_opportunities:
  - the_party_notices_that_the_apparent_small_animal_is_only_a_moving_vine
  trouble_spike_complications:
  - a_sweet_scent_draws_attention_while_dense_growth_hides_the_mouth_line
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
  - observe_a_known_Victreebel_from_a_marked_safe_distance_without_following_its_scent
  dangerous:
  - a_moving_vine_mimics_small_prey_beside_a_sweet_smell_and_leads_into_an_ambush
  unusual_or_rare:
  - a_long_established_Victreebel_has_a_persistent_feeding_history_trait_that_changes_lure_fiction_but_not_generic_stats
  discovery_insight:
  - feeding_history_can_be_persistent_story_state_without_becoming_kill_XP
  route_environment:
  - use_discrete_authored_state_changes_and_warning_signs_not_continuous_environment_simulation
  settlement_culture:
  - local_practical_customs_may_form_from_repeated_encounters_without_normalized_ownership_or_trainer_culture
  cross_species:
  - family_stage_capabilities_are_not_inherited_without_separate_evidence
presentation_and_p6_followups:
  initial_bestiary_presentation: Victreebel_as_a_living_plantlike_Pokemon_with_species_local_behavior_and_hazard_clues_not_a_resource_node
  progressive_reveal_notes:
  - reveal_hazard_delivery_and_warning_signs_before_exact_outcomes
  - preserve_version_and_uncertainty_boundaries
  - do_not_present_modern_ability_move_or_evolution_metadata_as_ancient_UI_rules
  species_specific_visual_needs:
  - sweet_scent_without_visible_food
  - moving_vine_decoy
  - missing_small_fauna
  species_specific_audio_needs:
  - victreebel_species_specific_movement_or_hazard_cue
  special_ui_or_readability_needs:
  - lure_clues_without_compulsion_meter
  - digestive_hazard_telegraph_without_material_delete_icon
  - exceptional_history_trait_shown_as_history_not_level
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - bellsprout
  - weepinbell
  predator_prey:
  - source_backed_prey_relationships_only_where_dossier_states_them
  competition: []
  symbiosis: []
  mimicry_confusion:
  - small_animal_like_motion_from_vine_decoy
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - acid_material_limits
  - digestion_time_by_target
  - lure_susceptibility_by_species
  - feeding_count_to_sweetness_change
  - colony_size_and_baseline_local_presence
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - discrete_encounter_state_timing_warning_counterplay_and_consequence_resolution
  deferred_to_p6:
  - visual_audio_and_hazard_readability_without_resource_or_status_shortcuts
  deferred_to_p7: []
```
