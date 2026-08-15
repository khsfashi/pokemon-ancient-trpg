# P4 Batch 15 — #070 Weepinbell Full-Schema Dossier

Part of `docs/P4_BATCH_15_FULL_SCHEMA_DOSSIERS.md`.

---

## #070 Weepinbell / 우츠동

```yaml
identity:
  national_dex: 70
  species_key: weepinbell
  official_name_en: Weepinbell
  official_name_ko: 우츠동
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
  - OFFICIAL-DEX-WEEPINBELL-SG
  - P4_BATCH_15_SOURCE_REVIEW
  official_evidence:
  - claim_id: WEE-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-WEEPINBELL-SG
    version_context: current_official_portal
    paraphrase: contains_acid_while_protecting_itself_with_another_fluid_uses_leafy_parts_as_cutters_and_can_spit_extremely_dissolving_fluid
  - claim_id: WEE-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: Red_Blue_Yellow_Gold_Silver_Crystal_Ruby_Sapphire_Emerald_FireRed
    paraphrase: versioned_entries_support_toxic_powder_then_acid_predation_internal_digestion_sharp_leaf_cutting_and_rear_hook_night_roosting
  derived_claims:
  - claim_id: WEE-D1-001
    evidence_class: D1
    based_on:
    - WEE-C1-001
    - WEE-C1-002
    statement: toxic_powder_and_corrosive_or_digestive_fluid_are_distinct_hazard_channels
    canon_boundary_note: not_one_generic_Poison_cloud_or_universal_acid_damage_value
  - claim_id: WEE-D1-002
    evidence_class: D1
    based_on:
    - WEE-C1-001
    statement: sharp_leaves_and_protective_fluid_are_integrated_physiology
    canon_boundary_note: not_detachable_equipment_free_crafting_stock_or_collectible_resistance_item
canonical_source_data:
  types:
  - grass
  - poison
  base_stats_raw:
    hp: 65
    attack: 90
    defense: 50
    special_attack: 85
    special_defense: 45
    speed: 55
  abilities_relevant_to_p4:
  - chlorophyll_as_modern_context
  - gluttony_hidden_as_modern_context
  moves_or_move_families_relevant_to_p4:
  - historical_named_move_terms_are_evidence_context_only_where_source_review_notes_them
  physical_metadata:
    height: 1.0_m
    weight: 6.4_kg
  evolution_source:
    evolves_from: bellsprout
    evolves_to:
    - victreebel
    canonical_conditions:
    - modern_level_21_from_Bellsprout_is_context
    - Leaf_Stone_to_Victreebel_is_context_not_ancient_item_law
  other_material_facts:
  - toxic_powder_then_acid_predation
  - internal_acid
  - protective_or_neutralizing_fluid
  - sharp_leaf_cutting_anatomy
  - versioned_rear_hook_night_roosting
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 4
  guard: 2
  potency: 4
  resistance: 2
  speed: 2
  derivation_notes:
    vigor: hp_65
    force: attack_90
    guard: defense_50
    potency: special_attack_85
    resistance: special_defense_45
    speed: speed_55
  calibration_flags:
  - no_manual_exception
  - hazard_severity_not_capped_by_axes
  - plantlike_body_not_object_or_resource_semantics
  - modern_move_ability_evolution_metadata_not_ancient_formula
capabilities_and_hazards:
  locomotion:
  - sharp_leaf_cutting_anatomy
  - rear_hook_night_roosting_version_scoped
  physical_hazards:
  - sharp_leaf_cutting_anatomy
  elemental_environmental_hazards:
  - toxic_powder
  - corrosive_or_digestive_acid
  - protective_or_neutralizing_internal_fluid
  anomalous_hazards: []
  behavioral_capabilities:
  - powder_then_acid_predation
  - swallowing_or_cutting_larger_prey_version_scoped
  - night_roosting
  utility_interaction_capabilities:
  - protective_fluid_is_internal_physiology_not_a_collectible_resistance_item
  immunities_or_approach_invalidators:
  - extreme_dissolution_wording_is_not_literal_universal_deletion
  hazard_records:
  - hazard_key: weepinbell-toxic-powder-exposure
    kind: toxin
    delivery_or_exposure:
    - airborne_or_contact_exposure_to_toxic_powder_during_predatory_or_defensive_sequence
    prerequisite_or_trigger:
    - Weepinbell_releases_powder
    - target_within_authored_exposure_zone
    warning_signs:
    - visible_powder
    - prey_or_foe_staggering
    - body_posture_before_release
    immediate_effects:
    - toxic_irritation_or_impairment
    - versioned_immobilization_only_when_authored_with_counterplay
    delayed_or_persistent_effects:
    - continued_toxin_effects_when_exposure_warrants
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: critical_in_heavy_or_vulnerable_exposure
    countermeasures:
    - distance
    - avoid_visible_powder
    - cover_or_ventilation_when_available
    emergency_consumable_hooks: []
    context_amplifiers:
    - enclosed_space
    - close_range
    - prior_injury
    context_mitigators:
    - open_air
    - distance
    - early_warning
    governing_species_axes:
    - potency
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - WEE-C1-002
    - WEE-D1-001
  - hazard_key: weepinbell-corrosive-fluid
    kind: other
    delivery_or_exposure:
    - spit_acid
    - ingestion_or_close_contact_with_digestive_fluid_when_authored
    prerequisite_or_trigger:
    - feeding_or_attack_sequence
    - target_in_contact_range
    warning_signs:
    - acid_damage_on_prior_material
    - wet_mouth
    - sharp_leaf_prey_processing
    immediate_effects:
    - chemical_burn
    - serious_material_damage_when_scene_supports_contact
    delayed_or_persistent_effects:
    - continued_corrosion_only_while_contamination_remains
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: critical
    countermeasures:
    - distance
    - avoid_contact
    - remove_or_wash_contaminated_material_when_possible
    emergency_consumable_hooks: []
    context_amplifiers:
    - entanglement
    - prolonged_contact
    - confined_space
    context_mitigators:
    - cover
    - rapid_separation
    - decontamination
    governing_species_axes:
    - potency
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs:
    - WEE-C1-001
    - WEE-C1-002
    - WEE-D1-001
  notes:
  - Grass_or_Poison_typing_does_not_create_universal_rooting_pollen_acid_or_lure_permissions
  - delivery_or_exposure_is_separate_from_consequence
  - source_hyperbole_does_not_become_real_world_chemistry_timing_or_status_math
ancient_strength:
  classifications:
  - similar_to_modern_baseline
  - ecologically_more_dangerous
  evidence_class: D2
  rationale: combined_powder_cutting_and_corrosive_predation_is_severe_in_close_terrain_without_importing_real_world_chemistry_or_global_durability_rules
  stat_effect_if_any: none
  behavior_effect_if_any: authored_local_environment_and_low_human_knowledge_can_raise_encounter_pressure_without_stat_scaling
  canon_boundary_note: no_global_ancient_bonus_no_player_level_scaling
ancient_ecology:
  habitat:
  - vegetated_hunting_sites_and_branch_roosts_only_when_locally_authored_D2
  - exact_ancient_range_unknown
  ecological_niche:
  - ambush_predator_using_toxin_cutting_anatomy_and_digestive_chemistry
  activity_pattern:
  - hunting
  - feeding
  - night_roosting_on_branch_version_scoped
  - sleeping_fall_risk_version_scoped
  seasonal_notes:
  - unknown
  feeding_and_resource_interaction:
  - moving_prey_swallowing_and_cutting_larger_prey_are_version_scoped_source_backed
  social_structure:
  - unknown
  predator_prey_competitor_links:
  - species_specific_source_backed_predation_only_where_listed
  - other_links_unknown
  environmental_effects:
  - local_signs_only_when_authored_no_continuous_ecosystem_simulation
  observable_signs:
  - cut_vegetation
  - small_prey_remains
  - chemical_damage
  - suspended_night_roost_shape
  - toxic_powder_residue_when_authored
  locality_constraints:
  - baseline_natural_presence_requires_authored_local_ecology_under_D034
  - direct_encounterability_somewhere_does_not_equal_equal_abundance_or_universal_presence
  unsupported_gaps:
  - acid_material_limits
  - neutralizing_fluid_chemistry
  - toxic_powder_exposure_response
  - roost_branch_load_or_height
human_perception_and_culture:
  ordinary_attitude:
  - high_caution_due_to_combined_powder_cutting_and_corrosive_hazards
  specialist_knowledge_holders:
  - hunters
  - forest_route_guides
  - healers_familiar_with_toxin_exposure
  benefits_and_services:
  - none_required
  fears_and_avoidance:
  - toxic_powder
  - acid_contact
  - razor_leaf_close_range
  - overhead_roost_surprise
  myths_omens_taboos:
  - local_D2_only_if_authored
  practical_customs:
  - look_above_branches_at_night
  - avoid_visible_powder
  - keep_clear_of_mouth_and_leaf_line
  common_misbeliefs:
  - its_fluid_dissolves_everything_instantly
  - protective_fluid_can_be_bottled_as_immunity
  - leaves_are_free_blades
  - all_Grass_types_can_hang_from_branches
  local_variation_notes:
  - no_region_wide_botanical_chemical_or_trainer_institution_is_implied
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks:
  - a_hanging_plant_opens_its_mouth_and_powder_precedes_the_acid
  local_aliases_or_titles: none
  identification_evidence:
  - bell_shaped_body
  - leaf_cutters
  - rear_hook_when_roosting
  - chemical_damage_signs
  initial_knowledge_fragments:
  - powder_and_acid_are_distinct_hazards_and_close_range_is_dangerous
  post_identification_knowledge:
  - source_backed_behavior_and_hazard_signs_can_be_learned_without_revealing_exact_hidden_formulas
  - evolution_stage_does_not_inherit_unevidenced_family_behaviors
  advanced_insights:
  - self_protection_from_internal_acid_does_not_generalize_to_immunity_or_craftable_resistance
  exceptional_individual_knowledge_hooks:
  - a_Weepinbell_that_has_roosted_over_the_same_forest_crossing_for_years
threat_and_encounter:
  baseline_threat_band: moderate_to_high
  default_behavior_states:
  - resting
  - hunting
  - powder_releasing
  - acid_attacking
  - feeding
  - night_roosting
  aggression_tendency: predatory_contextual
  territoriality: unknown_or_local
  avoidance_tendency: low_to_moderate
  warning_signs:
  - leaf_blades_angle
  - powder_release
  - wet_mouth
  - hooked_roost_position
  encounter_triggers:
  - nearby_prey_or_movement
  - disturb_roost
  - close_approach
  escalation_triggers:
  - entanglement_or_failed_escape
  - continued_pressure
  deescalation_conditions:
  - break_line_and_distance
  - leave_feeding_or_roost_space
  pursuit_profile: short_to_contextual
  group_size_effects:
  - no_generic_multiplier_and_no_colony_assumption_without_local_evidence
  ordinary_consequence_categories:
  - toxic_exposure
  - chemical_burn
  - cutting_injury
  - ingestion_risk
  consequence_ceiling: critical_possible_without_automatic_death
  human_check_hooks:
  - action: avoid_or_escape_a_Weepinbell_predation_sequence_before_powder_and_acid_channels_compound
    relevant_species_axis: none
    relevant_tags:
    - toxic_powder
    - corrosive_fluid
    - sharp_leaf_cutters
    - night_roosting
    relevant_hazard_keys:
    - weepinbell-toxic-powder-exposure
    - weepinbell-corrosive-fluid
    difficulty_guidance: D024_context_from_distance_visibility_cover_prior_knowledge_current_species_state_and_escape_space
    notes: avoidance_or_detection_difficulty_is_not_the_same_number_as_post_exposure_consequence
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants:
    - ambush_focused
    - hungry
    - defensive
    - resting
    condition_variants:
    - hunting
    - powder_ready
    - acid_exposed
    - night_roosting
    - injured
    local_lineage_variants:
    - none_without_evidence
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes:
    - age
    - persistent_ambush_site
    - repeated_survival_in_predator_competition
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits:
    - leaf_scars
    - known_roost_branch
    - recognizable_corrosion_marks_in_territory
    warning_or_rumor_hooks:
    - a_Weepinbell_that_has_roosted_over_the_same_forest_crossing_for_years
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites:
  - rare_voluntary_trust
  - safe_sleeping_support
  - strict_separation_from_bystanders_and_food_animals
  - chemical_hazard_handling
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
  - toxin_and_acid_safety
  - sharp_leaf_contact
  - branch_roost_space
  logistics:
    food:
    - moving_prey_swallowing_and_larger_prey_cutting_are_version_scoped
    water:
    - regular_access_as_needed
    shelter_temperature:
    - branch_roost_or_other_species_appropriate_rest_site_only_when_scene_supports_it
    space_travel:
    - medium_body_with_safe_distance_from_powder_and_acid
    settlement_restrictions:
    - dense_human_residence_is_exceptional_due_to_toxin_and_corrosion_risk
    special_resources:
    - none_fixed
  assistance_capabilities:
  - none_required_beyond_voluntary_scene_valid_anatomical_help
  handling_boundaries:
  - no_defeat_to_recruit
  - no_leaf_detachment_as_weapon_supply
  - no_protective_fluid_harvest
  - one_visible_companion_slot
  separation_injury_notes:
  - bonded_individual_remains_independent_and_is_not_inventory
mechanical_hooks:
  tracking_clues:
  - cut_vegetation
  - chemical_damage
  - overhead_roost_signs
  - prey_remains_when_context_supports_it
  avoidance_preparation:
  - look_for_powder_and_corrosion_signs
  - check_overhead_branches
  - keep_distance
  resistance_or_protection:
  - open_air
  - cover
  - rapid_separation_and_decontamination
  combat_approach_permissions:
  - avoid_powder_then_close_acid_sequence
  - do_not_treat_low_speed_as_low_hazard
  blocked_or_invalid_approaches:
  - dissolves_everything_as_literal_delete
  - protective_fluid_as_collectible_immunity_item
  - sharp_leaves_as_detachable_weapons
  - roosting_as_generic_Grass_climb
  fear_hooks:
  - a_hanging_plant_opens_its_mouth_and_powder_precedes_the_acid
  injury_hazard_hooks:
  - toxic_exposure
  - chemical_burn
  - cutting_injury
  - ingestion_risk
  environmental_state_hooks:
  - branch_height
  - ventilation
  - distance
  - escape_space
  - powder_visibility
  companion_assistance_hooks:
  - cutting_or_vine_help_only_when_bonded_and_safely_authored
  fortune_spike_opportunities:
  - a_roosting_Weepinbell_is_spotted_before_the_party_walks_under_it
  trouble_spike_complications:
  - powder_exposure_blocks_the_safe_line_away_from_the_acid_threat
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
  - observe_a_sleeping_Weepinbell_hooked_to_a_branch_without_disturbing_it
  dangerous:
  - powder_blocks_the_shortest_escape_while_corrosive_fluid_marks_the_ground
  unusual_or_rare:
  - an_exceptional_Weepinbell_has_survived_for_years_at_one_roost_and_locals_know_the_safe_side_of_the_tree
  discovery_insight:
  - toxic_powder_and_acid_are_distinct_channels_and_body_fluids_are_not_resources
  route_environment:
  - use_discrete_authored_state_changes_and_warning_signs_not_continuous_environment_simulation
  settlement_culture:
  - local_practical_customs_may_form_from_repeated_encounters_without_normalized_ownership_or_trainer_culture
  cross_species:
  - family_stage_capabilities_are_not_inherited_without_separate_evidence
presentation_and_p6_followups:
  initial_bestiary_presentation: Weepinbell_as_a_living_plantlike_Pokemon_with_species_local_behavior_and_hazard_clues_not_a_resource_node
  progressive_reveal_notes:
  - reveal_hazard_delivery_and_warning_signs_before_exact_outcomes
  - preserve_version_and_uncertainty_boundaries
  - do_not_present_modern_ability_move_or_evolution_metadata_as_ancient_UI_rules
  species_specific_visual_needs:
  - cut_vegetation
  - small_prey_remains
  - chemical_damage
  species_specific_audio_needs:
  - weepinbell_species_specific_movement_or_hazard_cue
  special_ui_or_readability_needs:
  - separate_powder_and_corrosion_telegraphs
  - no_weapon_or_reagent_loot_icons_on_leaves_or_fluids
  p6_followup_required: true
cross_species_links:
  evolution_family:
  - bellsprout
  - victreebel
  predator_prey:
  - source_backed_prey_relationships_only_where_dossier_states_them
  competition: []
  symbiosis: []
  mimicry_confusion:
  - plantlike_vegetation_at_low_information
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources:
  - acid_material_limits
  - neutralizing_fluid_chemistry
  - toxic_powder_exposure_response
  - roost_branch_load_or_height
  contradictions: []
  human_design_gates: []
  deferred_to_p5:
  - discrete_encounter_state_timing_warning_counterplay_and_consequence_resolution
  deferred_to_p6:
  - visual_audio_and_hazard_readability_without_resource_or_status_shortcuts
  deferred_to_p7: []
```
