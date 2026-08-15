# P4 Batch 12 — #002 Ivysaur Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #002 Ivysaur / 이상해풀

```yaml
identity:
  national_dex: 2
  species_key: ivysaur
  official_name_en: Ivysaur
  official_name_ko: 이상해풀
  evolution_family_keys: [bulbasaur, ivysaur, venusaur]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-IVYSAUR-SG]
  official_evidence:
    - claim_id: IVY-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-IVYSAUR-SG
      version_context: current_official_portal
      paraphrase: stronger_sunlight_causes_more_strength_to_well_up_and_the_back_bud_to_grow_larger
    - claim_id: IVY-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-IVYSAUR-SG
      version_context: current_official_portal
      paraphrase: the_bulb_grows_as_it_absorbs_nutrients_and_produces_a_pleasant_aroma_when_it_blooms
  derived_claims:
    - claim_id: IVY-D1-001
      evidence_class: D1
      based_on: [IVY-C1-001, IVY-C1-002]
      statement: sunlight_and_bud_growth_are_species_stage_local_ecological_inputs_and_observable_state
      canon_boundary_note: no_generic_Grass_weather_multiplier_or_exact_energy_conversion_rule
    - claim_id: IVY-D1-002
      evidence_class: D1
      based_on: [IVY-C1-002]
      statement: bloom_aroma_can_be_observed_without_implying_mind_control_or_guaranteed_lure
      canon_boundary_note: aroma_effects_beyond_source_text_require_scene_specific_authoring
canonical_source_data:
  types: [grass, poison]
  base_stats_raw: {hp: 60, attack: 62, defense: 63, special_attack: 80, special_defense: 80, speed: 60}
  abilities_relevant_to_p4: [overgrow_as_modern_low_HP_context, chlorophyll_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.0_m, weight: 13.0_kg}
  evolution_source:
    evolves_from: bulbasaur
    evolves_to: [venusaur]
    canonical_conditions: [modern_level_32_is_source_context_not_ancient_level_or_XP_law]
  other_material_facts: [sunlight_linked_strength, sunlight_linked_bud_growth, nutrient_absorption, bloom_aroma]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 3
  guard: 3
  potency: 4
  resistance: 4
  speed: 3
  derivation_notes: {vigor: hp_60, force: attack_62, guard: defense_63, potency: special_attack_80, resistance: special_defense_80, speed: speed_60}
  calibration_flags: [no_manual_exception, sunlight_not_generic_weather_formula, aroma_not_mind_control]
capabilities_and_hazards:
  locomotion: [terrestrial_movement]
  physical_hazards: [body_check_or_vine_like_contact_only_if_scene_and_source_support_it]
  elemental_environmental_hazards: [sunlight_linked_strength_state_without_fixed_modifier]
  anomalous_hazards: []
  behavioral_capabilities: [sun_exposure_can_change_bud_growth_and_strength_state]
  utility_interaction_capabilities: [visible_bud_state, bloom_aroma_when_present]
  immunities_or_approach_invalidators: []
  hazard_records: []
  notes: [Overgrow_does_not_define_ancient_low_HP_threshold, Bulbasaur_seed_reserve_is_not_auto_inherited_as_a_separate_rule]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: exposed_sunny_localities_can_make_source_backed_strength_state_more_relevant_without_changing_baseline_ratings
  stat_effect_if_any: none
  behavior_effect_if_any: sunny_scene_state_may_change_authored_pressure_or_behavior
  canon_boundary_note: sunlight_does_not_create_a_global_stat_buff
ancient_ecology:
  habitat: [exact_ancient_range_unknown, sunny_vegetated_localities_only_when_authored_D2]
  ecological_niche: [medium_plant_bearing_terrestrial_Pokemon_with_sunlight_linked_growth]
  activity_pattern: [basking_or_seeking_light_only_when_locally_authored_D2]
  seasonal_notes: [greater_or_lesser_sun_exposure_may_change_bud_state_without_fixed_calendar_formula]
  feeding_and_resource_interaction: [nutrient_absorption_source_backed_but_exact_diet_and_substrate_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [aroma_and_visible_bud_state_can_mark_recent_presence]
  observable_signs: [tracks, disturbed_vegetation, visible_bud, pleasant_aroma_if_blooming]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_diet, social_structure, sunlight_thresholds, bloom_cycle, exact_range]
human_perception_and_culture:
  ordinary_attitude: [respectful_caution_toward_a_larger_plant_bearing_Pokemon]
  specialist_knowledge_holders: [foragers, herbalists, hunters, seasonal_observers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [approaching_a_stronger_individual_in_open_sun, mistaking_bud_for_harvestable_crop]
  myths_omens_taboos: [bloom_or_sun_omens_only_if_locally_authored_D2]
  practical_customs: [avoid_cutting_or_pulling_back_bud, use_shade_and_distance_for_safe_observation]
  common_misbeliefs: [sunlight_gives_exact_known_power_multiplier, aroma_guarantees_charm_or_sleep, bud_is_a_crop]
  local_variation_notes: [knowledge_depends_on_actual_local_presence_and_season]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [stout_quadruped_with_a_large_living_bud_on_its_back]
  local_aliases_or_titles: none
  identification_evidence: [body_shape, integrated_bud, aroma_when_blooming]
  initial_knowledge_fragments: [sun_and_bud_state_are_linked]
  post_identification_knowledge: [greater_sunlight_can_support_more_strength_and_bud_growth]
  advanced_insights: [sunlight_fact_is_species_local_and_not_a_generic_Grass_weather_rule]
  exceptional_individual_knowledge_hooks: [old_Ivysaur_known_for_unusually_large_bud_or_sun_exposed_territory]
threat_and_encounter:
  baseline_threat_band: moderate
  default_behavior_states: [resting, basking_if_authored, wary, territorial_if_authored, fleeing, defending]
  aggression_tendency: low_to_contextual
  territoriality: contextual
  avoidance_tendency: moderate
  warning_signs: [body_tension, turning_back_bud_away_or_toward_threat, movement_to_hold_space]
  encounter_triggers: [entering_resting_or_basking_space, touching_bud, blocking_escape]
  escalation_triggers: [cutting_or_grabbing_bud, repeated_threatening_approach]
  deescalation_conditions: [restore_distance, leave_basking_or_resting_space, stop_contact]
  pursuit_profile: short_and_contextual
  group_size_effects: [unknown_no_generic_herd_rule]
  ordinary_consequence_categories: [serious_physical_or_elemental_injury, route_denial]
  consequence_ceiling: serious_under_ordinary_context
  human_check_hooks:
    - action: cross_a_sunny_resting_area_without_provoking_defense
      relevant_species_axis: potency
      relevant_tags: [sunlight_linked_strength_state, integrated_bud]
      relevant_hazard_keys: []
      difficulty_guidance: D024_context_from_light_cover_distance_escape_space_and_prior_observation
      notes: sunlight_changes_context_not_a_hidden_numeric_weather_bonus
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [calm, wary, defensive, curious]
    condition_variants: [shade_resting, sun_exposed, injured, blooming]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, unusually_favorable_light_or_nutrient_history]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_bud_state_marking_or_behavior_history]
    warning_or_rumor_hooks: [an_old_Ivysaur_controls_a_sunlit_clearing_without_player_scaling]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, no_forced_containment, reliable_food_water_space_and_light_access]
  trust_building_paths: [repeated_noncoercive_contact, respecting_bud, safe_shelter_and_light_access]
  reasons_to_stay: [bond, familiar_place_or_people, reliable_resources]
  rejection_or_departure_reasons: [forced_restraint, bud_damage, chronic_denial_of_needed_environment]
  human_social_costs: [larger_space_requirement, need_for_outdoor_light_access, plant_body_misunderstanding]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [appropriate_shelter_plus_outdoor_light_opportunity]
    space_travel: [medium_body_not_portable_inventory]
    settlement_restrictions: [crowded_or_dark_settlements_may_be_poor_fit]
    special_resources: [sun_access_is_ecological_need_not_a_consumable_meter]
  assistance_capabilities: [limited_route_or_plant_interaction_only_when_voluntary_and_scene_valid]
  handling_boundaries: [no_defeat_to_recruit, no_bud_harvest, no_generic_weather_bonus]
  separation_injury_notes: [bond_departure_is_behavioral_not_inventory_loss]
mechanical_hooks:
  tracking_clues: [tracks, disturbed_vegetation, bloom_aroma]
  avoidance_preparation: [use_cover_or_shade, preserve_distance, avoid_touching_bud]
  resistance_or_protection: [ordinary_cover_and_distance_when_valid]
  combat_approach_permissions: [use_terrain_and_light_to_change_positioning_without_applying_a_universal_weather_stat_formula]
  blocked_or_invalid_approaches: [harvest_bud, assume_aroma_is_mind_control, apply_Grass_type_photosynthesis_table]
  fear_hooks: [large_bud_slowly_turns_toward_the_sun_while_the_body_holds_ground]
  injury_hazard_hooks: []
  environmental_state_hooks: [sun_exposure, shade, vegetation_density, escape_space]
  companion_assistance_hooks: [read_local_light_or_plant_conditions_if_bonded_and_event_valid]
  fortune_spike_opportunities: [passing_cloud_or_shade_changes_the_encounter_window]
  trouble_spike_complications: [open_sun_removes_safe_approach_cover]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_integrated_bud_is_not_a_special_drop
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [bud_or_bulb_removal_not_supported]
  taboo_or_protection: [local_bloom_taboo_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [sunlight_relation_and_bud_do_not_prove_agriculture_energy_storage_or_perfume_industry]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_bud_growth_and_bloom_aroma_across_a_sunny_site]
  dangerous: [travelers_try_to_cut_the_bud_and_trigger_defense]
  unusual_or_rare: [exceptional_Ivysaur_holds_a_long_used_basking_ground]
  discovery_insight: [sunlight_relationship_is_real_but_not_a_type_wide_weather_formula]
  route_environment: [sun_and_shade_change_encounter_pressure]
  settlement_culture: [locals_tell_conflicting_stories_about_blooming_as_an_omen]
  cross_species: [Bulbasaur_seed_reserve_and_Venusaur_summer_power_are_not_auto_copied]
presentation_and_p6_followups:
  initial_bestiary_presentation: medium_quadruped_with_a_large_integrated_bud_and_sun_linked_state
  progressive_reveal_notes: [show_bud_growth_and_aroma_without_resource_or_status_bar_affordance]
  species_specific_visual_needs: [bud_scale, bloom_state, sun_or_shade_readability]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [sunlight_state_must_not_render_as_a_generic_Grass_buff_icon]
  p6_followup_required: true
cross_species_links:
  evolution_family: [bulbasaur, venusaur]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_sunlight_thresholds, nutrient_source, bloom_cycle, exact_diet, exact_ancient_range]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [sun_and_bud_encounter_state_timing]
  deferred_to_p6: [bud_bloom_and_sun_state_visual_readability]
  deferred_to_p7: []
```
