# P4 Batch 12 — #008 Wartortle Full-Schema Dossier

Part of `docs/P4_BATCH_12_FULL_SCHEMA_DOSSIERS.md`.

---

## #008 Wartortle / 어니부기

```yaml
identity:
  national_dex: 8
  species_key: wartortle
  official_name_en: Wartortle
  official_name_ko: 어니부기
  evolution_family_keys: [squirtle, wartortle, blastoise]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-WARTORTLE-SG]
  official_evidence:
    - claim_id: WAR-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-WARTORTLE-SG
      version_context: current_official_portal
      paraphrase: its_long_furry_tail_is_a_symbol_of_longevity_and_makes_the_species_popular_among_older_people
    - claim_id: WAR-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-WARTORTLE-SG
      version_context: current_official_portal
      paraphrase: Wartortle_hides_in_water_to_stalk_prey_and_uses_its_ears_for_balance_during_fast_swimming
  derived_claims:
    - claim_id: WAR-D1-001
      evidence_class: D1
      based_on: [WAR-C1-001]
      statement: longevity_symbolism_is_cultural_evidence_not_proof_of_human_lifespan_extension_or_common_pet_ownership
      canon_boundary_note: no_tail_harvest_talisman_blessing_or_eldercare_institution_is_implied
    - claim_id: WAR-D1-002
      evidence_class: D1
      based_on: [WAR-C1-002]
      statement: aquatic_stalking_and_ear_balance_are_species_local_capabilities
      canon_boundary_note: Water_type_does_not_auto_grant_stealth_or_balancing_anatomy
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 59, attack: 63, defense: 80, special_attack: 65, special_defense: 80, speed: 58}
  abilities_relevant_to_p4: [torrent_as_modern_low_HP_context, rain_dish_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.0_m, weight: 22.5_kg}
  evolution_source:
    evolves_from: squirtle
    evolves_to: [blastoise]
    canonical_conditions: [modern_level_36_is_source_context_not_ancient_level_or_XP_law]
  other_material_facts: [longevity_symbol_tail, popularity_among_older_people, aquatic_stalking, ear_balance_during_fast_swimming]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 3
  guard: 4
  potency: 3
  resistance: 4
  speed: 2
  derivation_notes: {vigor: hp_59, force: attack_63, guard: defense_80, potency: special_attack_65, resistance: special_defense_80, speed: speed_58}
  calibration_flags: [no_manual_exception, symbolism_not_lifespan_mechanic, popularity_not_domestication, swimming_not_generic_Water_rule]
capabilities_and_hazards:
  locomotion: [terrestrial_movement, fast_aquatic_movement]
  physical_hazards: [bite_shell_or_body_contact_when_hostile]
  elemental_environmental_hazards: [water_pressure_or_aquatic_positioning_only_when_event_supports]
  anomalous_hazards: []
  behavioral_capabilities: [aquatic_stalking]
  utility_interaction_capabilities: [ears_support_balance_during_fast_swimming, water_hiding_can_reduce_visual_detection_when_scene_supports]
  immunities_or_approach_invalidators: []
  hazard_records: []
  notes: [tail_symbolism_has_no_biological_lifespan_transfer_effect, popularity_among_older_people_is_not_ancient_ownership_baseline]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: aquatic_ambush_and_high_guard_resistance_can_be_dangerous_in_low_visibility_water_without_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: water_cover_can_enable_stalking_or_escape_when_authored
  canon_boundary_note: no_generic_ancient_bonus_or_Water_stealth_formula
ancient_ecology:
  habitat: [exact_ancient_range_unknown, freshwater_or_coastal_water_only_when_locally_authored_D2]
  ecological_niche: [aquatic_stalker_with_fast_swimming_balance]
  activity_pattern: [water_hiding_and_stalking_when_hunting_or_wary]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [prey_stalking_source_backed_but_exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [prey_relationship_exists_in_general_but_species_links_unknown]
  environmental_effects: [water_surface_disturbance_or_hidden_approach]
  observable_signs: [wet_tracks, shell_scrapes, brief_ear_or_tail_silhouette_at_waterline]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_prey, exact_lifespan, social_structure, exact_range, aquatic_endurance]
human_perception_and_culture:
  ordinary_attitude: [caution_near_water, curiosity_or_reverence_where_longevity_symbolism_is_known]
  specialist_knowledge_holders: [fishers, river_guides, hunters, elders_in_localities_with_actual_cultural_history]
  benefits_and_services: [none_required]
  fears_and_avoidance: [hidden_water_approach, false_belief_that_tail_grants_luck_or_long_life]
  myths_omens_taboos: [longevity_symbolism_source_backed_as_a_cultural_fact_somewhere_but_project_local_expression_requires_authoring]
  practical_customs: [watch_waterline, do_not_harvest_tail, distinguish_symbol_from_effect]
  common_misbeliefs: [tail_extends_human_life, tail_is_a_charm_material, popularity_means_common_pet, all_Water_types_can_stalk_this_way]
  local_variation_notes: [a_settlement_may_have_no_longevity_tradition_even_if_species_is_present]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [turtle_like_water_Pokemon_with_long_furry_tail_and_ear_fins]
  local_aliases_or_titles: none
  identification_evidence: [tail, ears, shell, swimming_posture]
  initial_knowledge_fragments: [it_can_hide_in_water_and_swim_fast]
  post_identification_knowledge: [ears_help_balance_and_tail_has_longevity_symbolism_in_some_human_context]
  advanced_insights: [symbolism_does_not_prove_lifespan_transfer_pet_ownership_or_harvest_value]
  exceptional_individual_knowledge_hooks: [old_Wartortle_with_distinct_tail_and_known_ambush_route]
threat_and_encounter:
  baseline_threat_band: moderate
  default_behavior_states: [resting, swimming, submerged_or_hiding, stalking, wary, fleeing, defending]
  aggression_tendency: contextual
  territoriality: contextual
  avoidance_tendency: moderate_with_water_escape
  warning_signs: [surface_ripple, brief_tail_or_ear_sighting, sudden_direction_change]
  encounter_triggers: [entering_water_hunt_area, approaching_rest_site, blocking_water_exit]
  escalation_triggers: [cornering_in_shallow_water, touching_tail_or_shell, attacking]
  deescalation_conditions: [leave_waterline, restore_escape_route, stop_contact]
  pursuit_profile: strong_in_water_and_contextual_on_land
  group_size_effects: [unknown_no_generic_group_rule]
  ordinary_consequence_categories: [serious_bite_or_body_injury, water_displacement, route_loss]
  consequence_ceiling: serious_ordinary_with_environmental_drowning_risk_owned_by_scene_not_species_axis
  human_check_hooks:
    - action: detect_and_avoid_a_Wartortle_stalking_from_water
      relevant_species_axis: speed
      relevant_tags: [aquatic_stalking, water_hiding]
      relevant_hazard_keys: []
      difficulty_guidance: D024_context_from_water_clarity_light_noise_and_prior_signs
      notes: success_or_failure_does_not_create_a_generic_Water_stealth_modifier
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [wary, patient, territorial, curious]
    condition_variants: [resting, submerged, injured, exhausted]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, repeated_hunting_success, territory_mastery]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_tail_shell_marking_route_or_behavior_history]
    warning_or_rumor_hooks: [old_Wartortle_known_to_stalk_one_ford_and_escape_every_hunt]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, no_forced_containment, reliable_food_water_and_aquatic_access]
  trust_building_paths: [repeated_noncoercive_contact, respecting_water_escape, safe_resource_support]
  reasons_to_stay: [bond, familiar_water_and_people, reliable_resources]
  rejection_or_departure_reasons: [forced_restraint, tail_harvest_attempts, chronic_denial_of_water_access]
  human_social_costs: [aquatic_route_requirements, cultural_attention_or_superstition]
  logistics:
    food: [exact_prey_and_diet_unknown]
    water: [regular_suitable_water_access]
    shelter_temperature: [safe_resting_area_near_water]
    space_travel: [medium_body_not_portable_inventory]
    settlement_restrictions: [water_access_and_superstition_can_complicate_stays]
    special_resources: [none_fixed_by_P4]
  assistance_capabilities: [aquatic_scouting_or_balance_help_only_when_voluntary_and_later_rules_allow]
  handling_boundaries: [no_defeat_to_recruit, no_tail_charm_harvest, no_common_pet_assumption]
  separation_injury_notes: [bond_departure_is_behavioral_not_inventory_loss]
mechanical_hooks:
  tracking_clues: [water_ripples, wet_tracks, shell_scrapes, brief_tail_sighting]
  avoidance_preparation: [watch_waterline, use_clear_crossing, keep_exit_routes_open]
  resistance_or_protection: [distance_and_stable_footing_near_water]
  combat_approach_permissions: [control_water_access_without_assuming_Speed_is_swim_speed_formula]
  blocked_or_invalid_approaches: [harvest_tail_for_longevity, infer_pet_status, derive_stealth_from_Water_type]
  fear_hooks: [only_the_furry_tail_breaks_the_surface_before_the_body_disappears_again]
  injury_hazard_hooks: [water_environment_can_complicate_injury_without_new_species_hazard_record]
  environmental_state_hooks: [water_clarity, depth, current, escape_bank]
  companion_assistance_hooks: [water_scouting_if_bonded_and_scene_valid]
  fortune_spike_opportunities: [clear_shallow_water_reveals_the_approach]
  trouble_spike_complications: [murky_water_hides_position_until_close_range]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_tail_is_not_a_longevity_drop
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: [tail_harvest_not_supported]
  taboo_or_protection: [local_longevity_taboo_or_protection_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [cultural_symbolism_does_not_create_talisman_industry_or_lifespan_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [learn_why_some_people_value_the_tail_as_a_symbol_without_claiming_magic]
  dangerous: [a_hidden_Wartortle_stalks_a_murky_crossing]
  unusual_or_rare: [old_Wartortle_becomes_a_local_omen_because_of_survival_history_not_lifespan_transfer]
  discovery_insight: [culture_fact_and_mechanical_effect_are_separate]
  route_environment: [water_clarity_depth_and_bank_shape_control_contact]
  settlement_culture: [older_people_may_value_images_or_sightings_without_owning_the_species]
  cross_species: [Squirtle_maturation_and_Blastoise_nozzles_are_stage_local]
presentation_and_p6_followups:
  initial_bestiary_presentation: fast_swimming_turtle_like_Pokemon_with_a_longevity_symbol_tail_and_aquatic_stalking_behavior
  progressive_reveal_notes: [separate_tail_symbolism_from_any_magic_or_item_affordance]
  species_specific_visual_needs: [tail_and_ear_balance_readability, waterline_stealth]
  species_specific_audio_needs: [subtle_water_movement]
  special_ui_or_readability_needs: [no_longevity_buff_charm_or_pet_badge]
  p6_followup_required: true
cross_species_links:
  evolution_family: [squirtle, blastoise]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_biological_lifespan, exact_prey, exact_ancient_range, aquatic_endurance, social_structure]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [aquatic_stalking_detection_and_route_state]
  deferred_to_p6: [tail_symbolism_and_waterline_readability]
  deferred_to_p7: []
```
