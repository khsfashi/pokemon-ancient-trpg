# P4 Batch 14 — #074 Geodude Full-Schema Dossier

Part of `docs/P4_BATCH_14_FULL_SCHEMA_DOSSIERS.md`.

---

## #074 Geodude / 꼬마돌

```yaml
identity:
  national_dex: 74
  species_key: geodude
  official_name_en: Geodude
  official_name_ko: 꼬마돌
  evolution_family_keys: [geodude, graveler, golem]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-GEODUDE-SG, P4_BATCH_14_SOURCE_REVIEW]
  official_evidence:
    - claim_id: GEO-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-GEODUDE-SG
      version_context: current_official_portal
      paraphrase: resting_Geodude_can_be_mistaken_for_an_ordinary_rock_and_many_may_go_unnoticed
    - claim_id: GEO-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-GEODUDE-SG
      version_context: current_official_portal
      paraphrase: mountain_dweller_climbs_harsh_roads_with_its_arms_and_can_react_aggressively_when_stepped_on_or_kicked
  derived_claims:
    - claim_id: GEO-D1-001
      evidence_class: D1
      based_on: [GEO-C1-001, GEO-C1-002]
      statement: rocklike_misidentification_and_arm_climbing_are_species_local_encounter_permissions
      canon_boundary_note: not_object_state_not_automatic_invisibility_not_ore_or_pickup_not_generic_Rock_or_Ground_climbing
canonical_source_data:
  types: [rock, ground]
  base_stats_raw: {hp: 40, attack: 80, defense: 100, special_attack: 30, special_defense: 30, speed: 20}
  abilities_relevant_to_p4: [rock_head_as_modern_context, sturdy_as_modern_context, sand_veil_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [rock_contact_and_climbing_context]
  physical_metadata: {height: 0.4_m, weight: 20.0_kg}
  evolution_source:
    evolves_from: null
    evolves_to: [graveler]
    canonical_conditions: [modern_level_25_metadata_is_source_context_only]
  other_material_facts: [rocklike_low_information_misidentification, mountain_habitat, arm_based_climbing, contact_provoked_aggression]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 4
  guard: 5
  potency: 1
  resistance: 1
  speed: 1
  derivation_notes: {vigor: hp_40, force: attack_80, guard: defense_100, potency: special_attack_30, resistance: special_defense_30, speed: speed_20}
  calibration_flags: [no_manual_exception, rocklike_body_not_object_semantics, Guard_not_universal_immunity]
capabilities_and_hazards:
  locomotion: [ground_movement, source_backed_arm_climbing_on_mountain_routes]
  physical_hazards: [dense_body_impact, arm_grab_or_strike]
  elemental_environmental_hazards: []
  anomalous_hazards: []
  behavioral_capabilities: [resting_stillness, contact_provoked_chase_or_attack_tendency]
  utility_interaction_capabilities: [climbing_only_where_grip_and_scene_support_it]
  immunities_or_approach_invalidators: [rocklike_appearance_can_defeat_casual_visual_classification_but_not_deliberate_inspection]
  hazard_records:
    - hazard_key: geodude-rock-misidentification-contact
      kind: other
      delivery_or_exposure: [accidental_step_or_kick, close_contact_after_low_information_misidentification]
      prerequisite_or_trigger: [resting_among_similar_rocks, careless_contact]
      warning_signs: [subtle_body_shape, arm_or_eye_movement, local_knowledge]
      immediate_effects: [provoked_attack_or_chase, impact_injury]
      delayed_or_persistent_effects: [none_automatic]
      ordinary_consequence_ceiling: moderate
      exceptional_consequence_ceiling: serious_in_compound_or_exceptional_context
      countermeasures: [inspect_footing, use_tools_or_distance_to_check_suspect_rocks, avoid_kicking_unknown_stones]
      emergency_consumable_hooks: []
      context_amplifiers: [rock_field, poor_light, narrow_mountain_path]
      context_mitigators: [clear_light, deliberate_inspection, known_route]
      governing_species_axes: [force, guard]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [GEO-C1-001, GEO-C1-002, GEO-D1-001]
  notes: [looks_like_rock_not_inventory_or_ore, Rock_Head_and_Sturdy_do_not_create_absolute_immunities]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: low_information_mountain_routes_make_accidental_contact_more_likely
  stat_effect_if_any: none
  behavior_effect_if_any: poor_visibility_and_rock_clutter_raise_misidentification_pressure
  canon_boundary_note: no_global_ancient_bonus
ancient_ecology:
  habitat: [mountainous_and_rocky_routes, exact_ancient_distribution_unknown]
  ecological_niche: [small_lithic_bodied_mountain_dweller]
  activity_pattern: [resting_stillness_and_climbing_contextual]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [small_climbing_marks, displaced_pebbles]
  observable_signs: [arm_scrapes, unusual_rock_position, movement_among_stones]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [exact_camouflage_success_rate, exact_climbing_limit, ancient_range]
human_perception_and_culture:
  ordinary_attitude: [cautious_annoyance_or_respect_on_rocky_paths]
  specialist_knowledge_holders: [mountain_guides, hunters, quarry_workers_without_implying_industry]
  benefits_and_services: [none_required]
  fears_and_avoidance: [accidental_step_then_attack, dense_body_collision]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [do_not_kick_unknown_rocks, inspect_handholds_and_footing]
  common_misbeliefs: [Geodude_is_a_stone_object, rocklike_body_is_harvestable_ore, all_Rock_types_climb]
  local_variation_notes: [no_object_or_resource_classification]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [ordinary_rock_shape_that_moves_after_contact]
  local_aliases_or_titles: none
  identification_evidence: [arms, facial_features, climbing_motion, provoked_response]
  initial_knowledge_fragments: [can_look_like_a_rock, can_climb_with_arms]
  post_identification_knowledge: [misidentification_is_contextual_not_invisibility]
  advanced_insights: [creature_state_and_agency_never_convert_to_scenery_or_loot]
  exceptional_individual_knowledge_hooks: [old_Geodude_known_to_rest_in_the_same_pass_like_a_landmark]
threat_and_encounter:
  baseline_threat_band: moderate
  default_behavior_states: [resting, climbing, wary, provoked, chasing]
  aggression_tendency: low_until_contact_provoked
  territoriality: unknown_or_local
  avoidance_tendency: moderate
  warning_signs: [subtle_motion, arm_brace, eye_opening]
  encounter_triggers: [step_on, kick, block_route_if_authored]
  escalation_triggers: [repeat_contact, pursuit_or_attack]
  deescalation_conditions: [back_off, stop_contact, leave_path]
  pursuit_profile: short_contextual_chase
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [impact_injury, stumble_or_fall]
  consequence_ceiling: moderate_to_serious
  human_check_hooks:
    - action: distinguish_a_resting_Geodude_from_surrounding_rocks_before_contact
      relevant_species_axis: none
      relevant_tags: [rocklike_low_information_misidentification]
      relevant_hazard_keys: [geodude-rock-misidentification-contact]
      difficulty_guidance: D024_context_from_light_clutter_prior_knowledge_and_distance
      notes: no_automatic_camouflage_or_detection_formula
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [placid, irritable, route_tolerant, chase_prone]
    condition_variants: [resting, climbing, recently_disturbed, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, repeated_mountain_survival, unusual_body_texture]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_shape_or_marking, known_resting_site]
    warning_or_rumor_hooks: [landmark_Geodude_that_people_keep_mistaking_for_a_boundary_stone]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [rare_voluntary_trust, safe_route_and_shelter, no_objectification]
  trust_building_paths: [repeated_noncoercive_contact, injury_recovery, shared_route]
  reasons_to_stay: [bond, familiar_terrain]
  rejection_or_departure_reasons: [forced_restraint, treating_it_as_material_or_tool]
  human_social_costs: [weight, accidental_contact_risk]
  logistics:
    food: [species_appropriate_supply_unknown]
    water: [regular_access_as_needed]
    shelter_temperature: [rocky_rest_space]
    space_travel: [portable_storage_forbidden]
    settlement_restrictions: [foot_traffic_requires_clear_handling]
    special_resources: [none_fixed]
  assistance_capabilities: [climbing_or_rocky_route_help_only_when_voluntary_and_scene_valid]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_use_as_ore_or_projectile, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [arm_scrapes, displaced_pebbles, repeated_resting_site]
  avoidance_preparation: [light, deliberate_footing_checks]
  resistance_or_protection: [stable_footwear, distance]
  combat_approach_permissions: [use_space_and_deescalation_after_contact]
  blocked_or_invalid_approaches: [pick_up_as_item, mine_for_material, assume_invisibility, generic_wall_climb_from_type]
  fear_hooks: [a_stepped_on_rock_opens_its_eyes]
  injury_hazard_hooks: [impact, fall]
  environmental_state_hooks: [rock_clutter, slope, light]
  companion_assistance_hooks: [route_help_only_when_voluntary]
  fortune_spike_opportunities: [sunlight_reveals_arm_shape_before_contact]
  trouble_spike_complications: [poor_light_makes_the_safe_stepping_stone_move]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_context_requires]
  dangerous_harvesting: none
  taboo_or_protection: [local_D2_only]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [rocklike_body_does_not_create_quarry_or_tool_supply]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [watch_Geodude_climb_a_harsh_mountain_path_with_its_arms]
  dangerous: [traveler_steps_on_a_resting_Geodude_and_must_deescalate_before_a_cliff_edge]
  unusual_or_rare: [an_old_Geodude_has_become_a_false_landmark_in_local_route_lore]
  discovery_insight: [rocklike_appearance_never_changes_creature_semantics]
  route_environment: [rock_clutter_and_light_define_misidentification]
  settlement_culture: [guides_teach_children_never_to_kick_unknown_stones]
  cross_species: [Graveler_rolling_and_Golem_shell_shedding_are_not_inherited_backward]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_rocklike_mountain_creature_that_can_be_mistaken_for_terrain_until_it_moves
  progressive_reveal_notes: [preserve_low_information_confusion_without_invisibility]
  species_specific_visual_needs: [subtle_arm_eye_shape, climbing_motion, resting_pose]
  species_specific_audio_needs: [stone_scrape, sudden_grunt]
  special_ui_or_readability_needs: [no_item_outline_or_ore_marker]
  p6_followup_required: true
cross_species_links:
  evolution_family: [graveler, golem]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: [ordinary_rocks]
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_climbing_limits, exact_ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [misidentification_and_contact_event_state]
  deferred_to_p6: [rocklike_readability_without_loot_semantics]
  deferred_to_p7: []
```
