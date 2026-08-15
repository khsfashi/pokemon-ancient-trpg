# P4 Batch 12 — #001 Bulbasaur Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #001 Bulbasaur / 이상해씨

```yaml
identity:
  national_dex: 1
  species_key: bulbasaur
  official_name_en: Bulbasaur
  official_name_ko: 이상해씨
  evolution_family_keys: [bulbasaur, ivysaur, venusaur]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-BULBASAUR-SG]
  official_evidence:
    - claim_id: BUL-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-BULBASAUR-SG
      version_context: current_official_portal
      paraphrase: Bulbasaur_has_a_seed_on_its_back_from_birth_and_the_seed_grows_with_the_body
    - claim_id: BUL-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-BULBASAUR-SG
      version_context: current_official_portal
      paraphrase: stored_nutrients_in_the_seed_support_growth_for_a_period_after_birth
  derived_claims:
    - claim_id: BUL-D1-001
      evidence_class: D1
      based_on: [BUL-C1-001, BUL-C1-002]
      statement: back_seed_is_body_integrated_persistent_anatomy_and_growth_state
      canon_boundary_note: seed_is_not_equipment_inventory_or_generic_harvest_resource
    - claim_id: BUL-U-001
      evidence_class: U
      based_on: [BUL-C1-001]
      statement: safe_seed_removal_loss_survivability_regrowth_and_exact_origin_are_unresolved
      canon_boundary_note: do_not_invent_detachment_or_replacement_mechanics
canonical_source_data:
  types: [grass, poison]
  base_stats_raw: {hp: 45, attack: 49, defense: 49, special_attack: 65, special_defense: 65, speed: 45}
  abilities_relevant_to_p4: [overgrow_as_modern_low_HP_context, chlorophyll_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 0.7_m, weight: 6.9_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [ivysaur]
    canonical_conditions: [modern_level_16_is_source_context_not_ancient_level_or_XP_law]
  other_material_facts: [seed_present_from_birth, seed_grows_with_body, seed_nutrient_reserve]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 2
  guard: 2
  potency: 3
  resistance: 3
  speed: 2
  derivation_notes: {vigor: hp_45, force: attack_49, guard: defense_49, potency: special_attack_65, resistance: special_defense_65, speed: speed_45}
  calibration_flags: [no_manual_exception, integrated_seed_not_equipment, Overgrow_not_ancient_threshold]
capabilities_and_hazards:
  locomotion: [small_terrestrial_movement]
  physical_hazards: [body_check_or_bite_if_cornered_or_hostile]
  elemental_environmental_hazards: [plant_or_spore_related_pressure_only_when_event_and_source_support_it]
  anomalous_hazards: []
  behavioral_capabilities: [seed_supported_early_growth]
  utility_interaction_capabilities: [body_integrated_plant_anatomy_can_be_observed_for_condition_or_development]
  immunities_or_approach_invalidators: []
  hazard_records: []
  notes: [Grass_or_Poison_typing_does_not_auto_generate_photosynthesis_venom_or_harvest_rules, seed_is_not_a_carried_item]
ancient_strength:
  classifications: [similar_to_modern_baseline]
  evidence_class: D2
  rationale: no_reviewed_evidence_supports_a_global_ancient_stat_bonus_for_Bulbasaur
  stat_effect_if_any: none
  behavior_effect_if_any: local_ecology_may_make_encounters_harsher_without_changing_species_baseline
  canon_boundary_note: no_generic_ancient_bonus
ancient_ecology:
  habitat: [exact_ancient_range_unknown, vegetated_shelter_or_sunny_clearings_only_when_locally_authored_D2]
  ecological_niche: [small_plant_bearing_terrestrial_Pokemon_with_early_growth_supported_by_internal_seed_reserve]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [seed_nutrient_reserve_is_not_an_infinite_food_source]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [minor_vegetation_interaction_only_when_authored]
  observable_signs: [small_tracks, low_vegetation_disturbance, visible_back_seed]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_diet, social_structure, denning, seed_origin, safe_seed_removal]
human_perception_and_culture:
  ordinary_attitude: [caution_toward_unknown_plant_bearing_Pokemon, curiosity_about_integrated_seed]
  specialist_knowledge_holders: [foragers, herbalists, hunters_who_have_observed_the_species]
  benefits_and_services: [none_required]
  fears_and_avoidance: [misidentifying_seed_as_harvestable_plant_or_container]
  myths_omens_taboos: [local_seed_growth_myths_only_if_authored_D2]
  practical_customs: [do_not_cut_or_pull_integrated_seed, observe_before_approach]
  common_misbeliefs: [seed_is_a_pack_or_crop, every_Grass_type_has_the_same_organ, starter_role_means_safe_for_children]
  local_variation_notes: [recognition_and_attitude_depend_on_actual_local_presence]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_quadruped_with_a_large_seed_integrated_into_its_back]
  local_aliases_or_titles: none
  identification_evidence: [body_shape, integrated_back_seed, Grass_Poison_family_features]
  initial_knowledge_fragments: [the_seed_is_part_of_the_body_not_a_pack]
  post_identification_knowledge: [seed_is_present_from_birth_and_grows_with_the_body]
  advanced_insights: [stored_seed_nutrients_support_early_growth_but_do_not_define_adult_diet_or_harvest_rules]
  exceptional_individual_knowledge_hooks: [unusually_old_or_battle_scarred_Bulbasaur_with_distinct_seed_growth_history]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_contextual
  default_behavior_states: [resting, foraging_or_searching_if_authored, wary, fleeing, cornered]
  aggression_tendency: low_to_contextual
  territoriality: unknown_to_contextual
  avoidance_tendency: moderate_to_high_when_escape_exists
  warning_signs: [posture_change, backing_away, body_tension]
  encounter_triggers: [entering_resting_space, blocking_escape, interacting_with_body_seed]
  escalation_triggers: [grabbing_seed, cornering, repeated_threatening_approach]
  deescalation_conditions: [restore_escape_space, stop_contact, reduce_noise_and_pressure]
  pursuit_profile: none_by_default
  group_size_effects: [unknown_no_generic_pack_rule]
  ordinary_consequence_categories: [minor_to_serious_physical_injury, route_delay]
  consequence_ceiling: serious_when_context_escalates_under_D020
  human_check_hooks:
    - action: approach_without_triggering_defensive_escalation
      relevant_species_axis: speed
      relevant_tags: [body_integrated_seed, wary_state]
      relevant_hazard_keys: []
      difficulty_guidance: D024_context_from_distance_escape_space_visibility_and_prior_observation
      notes: success_does_not_create_bond_or_capture
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [calm, skittish, curious, defensive]
    condition_variants: [young, well_fed, injured, exhausted]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, unusual_growth_conditions, repeated_conflict]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [visible_seed_or_body_history, persistent_behavior_or_scar]
    warning_or_rumor_hooks: [old_Bulbasaur_survives_in_a_harsh_locality_despite_species_baseline]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, no_forced_containment, reliable_food_water_and_safe_rest]
  trust_building_paths: [repeated_noncoercive_contact, protecting_escape_space, safe_resource_support_if_authored]
  reasons_to_stay: [bond, familiar_people_or_place, reliable_resources]
  rejection_or_departure_reasons: [forced_restraint, seed_handling_or_cutting_attempts, chronic_neglect]
  human_social_costs: [space_and_food_logistics, misunderstanding_body_seed_as_resource]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [species_safe_shelter_with_access_to_appropriate_outdoor_conditions]
    space_travel: [small_body_but_not_inventory_or_portable_containment]
    settlement_restrictions: [local_fear_or_resource_misunderstanding_possible]
    special_resources: [none_fixed_by_P4]
  assistance_capabilities: [limited_plant_or_route_interaction_only_when_individually_trained_and_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_seed_harvest, no_starter_distribution_shortcut]
  separation_injury_notes: [bond_departure_is_behavioral_not_inventory_loss]
mechanical_hooks:
  tracking_clues: [small_tracks, vegetation_disturbance]
  avoidance_preparation: [preserve_escape_route, avoid_touching_back_seed]
  resistance_or_protection: [ordinary_distance_and_cover_when_valid]
  combat_approach_permissions: [late_game_ordinary_Bulbasaur_may_become_routine_without_scaling]
  blocked_or_invalid_approaches: [remove_seed_as_loot, treat_seed_as_equipment, apply_generic_Grass_photosynthesis_or_harvest_rule]
  fear_hooks: [unknown_living_seed_visibly_moves_with_the_body]
  injury_hazard_hooks: []
  environmental_state_hooks: [light, vegetation_density, escape_space]
  companion_assistance_hooks: [observe_plant_or_route_changes_if_bonded_and_scene_valid]
  fortune_spike_opportunities: [terrain_or_vegetation_offers_noncombat_escape]
  trouble_spike_complications: [someone_attempts_to_harvest_the_seed_and_provokes_defense]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_integrated_seed_is_not_a_special_drop
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [seed_removal_not_supported]
  taboo_or_protection: [local_protection_or_taboo_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [integrated_seed_does_not_create_agriculture_storage_or_transplant_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_Bulbasaur_and_learn_that_the_seed_is_anatomy_not_baggage]
  dangerous: [a_harvester_attempts_to_cut_the_seed_and_triggers_a_defensive_encounter]
  unusual_or_rare: [exceptional_Bulbasaur_survives_in_a_locality_where_it_should_be_easy_to_dismiss]
  discovery_insight: [players_separate_visible_plant_anatomy_from_loot_or_equipment]
  route_environment: [vegetation_and_escape_space_shape_contact]
  settlement_culture: [locals_disagree_whether_the_back_seed_is_sacred_dangerous_or_useful]
  cross_species: [Ivysaur_and_Venusaur_have_stage_local_sunlight_and_flower_facts_not_auto_inherited]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_quadruped_with_a_living_seed_integrated_into_its_back
  progressive_reveal_notes: [make_seed_body_integration_clear_before_any_resource_association]
  species_specific_visual_needs: [seed_body_connection, age_or_condition_variation]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [never_render_seed_as_inventory_equipment_or_loot_slot]
  p6_followup_required: true
cross_species_links:
  evolution_family: [ivysaur, venusaur]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [seed_safe_removability, seed_loss_survivability, seed_regrowth_or_replacement, seed_exact_origin, exact_ancient_range, diet]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [exact_encounter_states_and_any_plant_capability_timing]
  deferred_to_p6: [seed_body_integration_visual_readability]
  deferred_to_p7: []
```
