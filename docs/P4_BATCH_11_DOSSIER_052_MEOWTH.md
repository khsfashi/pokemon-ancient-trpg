# P4 Batch 11 — #052 Meowth Full-Schema Dossier

Part of `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md`.

---

## #052 Meowth / 나옹

```yaml
identity:
  national_dex: 52
  species_key: meowth
  official_name_en: Meowth
  official_name_ko: 나옹
  evolution_family_keys: [meowth, persian]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-MEOWTH-SG]
  official_evidence:
    - claim_id: MEO-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-MEOWTH-SG
      version_context: current_official_portal
      paraphrase: Meowth_sleeps_during_day_and_patrols_its_territory_at_night_with_glowing_eyes
    - claim_id: MEO-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-MEOWTH-SG
      version_context: current_official_portal
      paraphrase: Meowth_is_attracted_to_shiny_objects_and_the_coinlike_forehead_feature_shines_when_it_sees_them
  derived_claims:
    - claim_id: MEO-D1-001
      evidence_class: D1
      based_on: [MEO-C1-001, MEO-C1-002]
      statement: nocturnal_patrol_and_shiny_object_interest_can_drive_encounter_state_without_implying_human_affinity_or_guaranteed_theft
      canon_boundary_note: Pickup_does_not_become_an_ancient_loot_generation_rule
    - claim_id: MEO-U-001
      evidence_class: U
      based_on: [MEO-C1-002]
      statement: forehead_coin_origin_material_removability_and_replacement_are_unresolved
      canon_boundary_note: coinlike_feature_must_not_become_currency_proof_or_harvestable_loot
canonical_source_data:
  types: [normal]
  base_stats_raw: {hp: 40, attack: 45, defense: 35, special_attack: 40, special_defense: 40, speed: 90}
  abilities_relevant_to_p4: [pickup_as_modern_context, technician_as_modern_context, unnerve_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 0.4_m, weight: 4.2_kg}
  evolution_source:
    evolves_from: none
    evolves_to: [persian]
    canonical_conditions: [modern_level_threshold_is_source_context_not_kill_XP_or_visible_level_rule]
  other_material_facts: [day_sleep, nocturnal_territory_patrol, shiny_object_interest, coinlike_forehead_feature]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 2
  guard: 1
  potency: 2
  resistance: 2
  speed: 4
  derivation_notes: {vigor: hp_40, force: attack_45, guard: defense_35, potency: special_attack_40, resistance: special_defense_40, speed: speed_90}
  calibration_flags: [no_manual_exception, shiny_interest_not_economy, forehead_coin_not_resource]
capabilities_and_hazards:
  locomotion: [agile_terrestrial_movement, nocturnal_patrol]
  physical_hazards: [scratch_or_bite_if_cornered_or_hostile]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [territory_patrol, shiny_object_attention, unattended_small_object_interaction_when_authored]
  utility_interaction_capabilities: [shiny_object_can_redirect_attention_if_scene_supports]
  immunities_or_approach_invalidators: []
  hazard_records: []
  notes: [shiny_interest_is_not_currency_literacy, Pickup_is_not_a_drop_table, forehead_coin_is_species_associated_state_with_unknown_provenance]
ancient_strength:
  classifications: [similar_to_modern_baseline, behaviorally_harsher]
  evidence_class: D2
  rationale: nocturnal_patrol_and_low_light_route_conditions_can_make_a_small_fast_species_more_intrusive_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: night_patrol_and_resource_attention_can_raise_encounter_frequency_where_locally_authored
  canon_boundary_note: no_generic_ancient_bonus
ancient_ecology:
  habitat: [exact_ancient_range_unknown, settlement_edge_ruins_or_rocky_shelter_only_when_locally_authored_D2]
  ecological_niche: [small_nocturnal_territorial_forager_or_scavenger_is_project_safe_but_exact_diet_unknown]
  activity_pattern: [day_sleep, night_patrol]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [shiny_object_interest_does_not_establish_food_or_currency_use]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [may_move_or_collect_small_unattended_objects_if_event_authors]
  observable_signs: [small_pawprints, nighttime_eye_shine, disturbed_shiny_objects]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology]
  unsupported_gaps: [diet, den_structure, group_size, exact_range, forehead_coin_origin]
human_perception_and_culture:
  ordinary_attitude: [annoyance_or_curiosity_if_objects_go_missing, caution_about_cornering_a_fast_nocturnal_Pokemon]
  specialist_knowledge_holders: [night_watchers, scavengers, settlement_edge_travelers]
  benefits_and_services: [none_required]
  fears_and_avoidance: [nighttime_scratching_or_biting, loss_or_displacement_of_small_shiny_items]
  myths_omens_taboos: [coin_or_luck_superstitions_may_exist_only_if_locally_authored_D2]
  practical_customs: [secure_small_reflective_objects, observe_patrol_routes_before_sleeping_outdoors]
  common_misbeliefs: [Meowth_understands_currency, forehead_coin_is_safe_to_remove, every_Meowth_steals_valuables, Pickup_means_free_items]
  local_variation_notes: [human_association_can_vary_by_local_food_waste_and_shelter_without_becoming_domestication]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [small_catlike_Pokemon_with_glowing_night_eyes_and_a_coinlike_forehead_feature]
  local_aliases_or_titles: none
  identification_evidence: [body_shape, forehead_feature, nocturnal_eye_shine, shiny_object_attention]
  initial_knowledge_fragments: [it_patrols_at_night_and_notices_reflective_objects]
  post_identification_knowledge: [day_sleep_and_shiny_object_interest]
  advanced_insights: [coinlike_feature_does_not_prove_currency_and_object_interest_is_not_guaranteed_theft]
  exceptional_individual_knowledge_hooks: [Meowth_known_to_revisit_one_cache_or_watch_route]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_but_fast_and_contextual
  default_behavior_states: [sleeping, patrolling, observing_shiny_object, wary, scavenging, fleeing, cornered]
  aggression_tendency: low_to_contextual
  territoriality: moderate_when_patrolling
  avoidance_tendency: high_when_escape_exists
  warning_signs: [fixed_stare, crouch, hissing_or_swiping_if_authored, repeated_patrol_passes]
  encounter_triggers: [night_travel, entering_resting_or_patrol_space, exposed_shiny_object]
  escalation_triggers: [cornering, grabbing, threatening_den_or_escape_route]
  deescalation_conditions: [restore_escape_space, stop_reaching, remove_or_cover_attention_object]
  pursuit_profile: short_and_territorial_unless_specific_individual_history_says_otherwise
  group_size_effects: [unknown_no_generic_pack_rule]
  ordinary_consequence_categories: [minor_to_serious_scratch_or_bite, lost_or_moved_object, sleep_or_route_disruption]
  consequence_ceiling: serious_only_when_context_escalates_under_D020
  human_check_hooks:
    - action: pass_through_a_Meowth_patrol_without_triggering_conflict_or_object_loss
      relevant_species_axis: speed
      relevant_tags: [nocturnal_patrol, shiny_object_attention]
      relevant_hazard_keys: []
      difficulty_guidance: D024_context_from_light_escape_space_exposed_objects_and_prior_observation
      notes: noticing_interest_does_not_mean_the_player_can_command_or_befriend_it
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [bold, skittish, curious, territorial, scavenging]
    condition_variants: [sleeping, hungry, injured, guarding_cache_if_authored]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, learned_human_avoidance, unusual_cache_behavior]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_route_or_marking_or_behavior_history]
    warning_or_rumor_hooks: [old_Meowth_known_to_lure_travelers_with_reflections_or_revisit_hidden_caches]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_persistent_trust, reliable_food_and_shelter, no_forced_containment, tolerance_for_nocturnal_behavior]
  trust_building_paths: [repeated_noncoercive_contact, returning_moved_objects_without_force, safe_food_or_shelter_support_if_authored]
  reasons_to_stay: [bond, familiar_territory_or_people, reliable_resources]
  rejection_or_departure_reasons: [forced_restraint, chronic_denial_of_escape, attempts_to_remove_forehead_feature, punitive_response_to_shiny_interest]
  human_social_costs: [protecting_small_valuables, nocturnal_activity, settlement_distrust]
  logistics:
    food: [exact_diet_unknown]
    water: [regular_access]
    shelter_temperature: [dry_secure_resting_place]
    space_travel: [small_body_but_not_inventory_or_containment]
    settlement_restrictions: [may_be_unwelcome_where_small_goods_are_exposed]
    special_resources: []
  assistance_capabilities: [night_watchfulness_or_small_object_attention_only_when_voluntary_and_scene_valid]
  handling_boundaries: [no_defeat_to_recruit, no_currency_detection_power, no_forehead_coin_harvest]
  separation_injury_notes: [bond_departure_is_behavioral_not_inventory_loss]
mechanical_hooks:
  tracking_clues: [night_pawprints, eye_shine, disturbed_reflective_objects]
  avoidance_preparation: [cover_small_shiny_items, preserve_escape_space, observe_patrol timing]
  resistance_or_protection: [ordinary_clothing_or_distance_against_scratch_or_bite_when_valid]
  combat_approach_permissions: [deny_escape_only_if_consequences_are_intended_not_as_default_capture_method]
  blocked_or_invalid_approaches: [use_Pickup_as_loot_generation, treat_coinlike_feature_as_currency, harvest_forehead_feature, auto_bond_from_food]
  fear_hooks: [eyes_flashing_around_a_sleeping_camp_while_small_objects_shift]
  injury_hazard_hooks: []
  environmental_state_hooks: [light_level, exposed_shiny_object, escape_space, patrol_state]
  companion_assistance_hooks: [notice_small_moved_objects_or_night_activity_if_bonded]
  fortune_spike_opportunities: [reflective_scrap_redirects_attention_long_enough_to_escape]
  trouble_spike_complications: [important_small_tool_is_moved_into_a_patrolled_gap]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot_and_no_special_coin_drop
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [forehead_coinlike_feature_removal_not_supported]
  taboo_or_protection: [local_superstitions_possible_only_when_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [coinlike_feature_and_shiny_interest_do_not_prove_minting_trade_or_detection_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_Meowth_patrol_and_learn_its_route_without_contact]
  dangerous: [cornered_Meowth_turns_a_night_search_into_fast_close_range_scratching_and_object_loss]
  unusual_or_rare: [an_exceptional_Meowth_maintains_a_cache_of_nonvaluable_but_reflective_objects]
  discovery_insight: [players_learn_shiny_attention_is_behavior_not_currency_knowledge]
  route_environment: [moonlight_or_firelight_changes_what_objects_draw_attention]
  settlement_culture: [locals_secure_small_reflective_goods_but_disagree_on_luck_superstitions]
  cross_species: [Persian_pet_evidence_does_not_auto_apply_to_Meowth]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_fast_nocturnal_catlike_Pokemon_drawn_to_shiny_objects
  progressive_reveal_notes: [keep_forehead_feature_visually_coinlike_without_presenting_it_as_inventory_or_money]
  species_specific_visual_needs: [night_eye_shine, shiny_object_attention, forehead_feature_readability]
  species_specific_audio_needs: []
  special_ui_or_readability_needs: [object_attention_state_must_not_look_like_guaranteed_loot_or_theft]
  p6_followup_required: true
cross_species_links:
  evolution_family: [persian]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [forehead_coin_origin, forehead_coin_material, forehead_coin_removability, forehead_coin_replacement, diet, exact_ancient_range]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [object_attention_and_patrol_state_timing]
  deferred_to_p6: [forehead_feature_and_night_eye_readability]
  deferred_to_p7: [small_object_interaction_state_if_runtime_needs_it]
```
