# P4 Batch 14 — #050 Diglett Full-Schema Dossier

Part of `docs/P4_BATCH_14_FULL_SCHEMA_DOSSIERS.md`.

---

## #050 Diglett / 디그다

```yaml
identity:
  national_dex: 50
  species_key: diglett
  official_name_en: Diglett
  official_name_ko: 디그다
  evolution_family_keys: [diglett, dugtrio]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-DIGLETT-SG, P4_BATCH_14_SOURCE_REVIEW]
  official_evidence:
    - claim_id: DIG-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DIGLETT-SG
      version_context: current_official_portal
      paraphrase: lives_shallowly_underground_feeds_on_plant_roots_and_is_weakened_by_bright_light_exposure
    - claim_id: DIG-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-DIGLETT-SG
      version_context: historical_version_tagged
      paraphrase: shallow_burrowing_can_leave_raised_earth_and_later_contexts_describe_soil_tilling_and_farm_raising
  derived_claims:
    - claim_id: DIG-D1-001
      evidence_class: D1
      based_on: [DIG-C1-001, DIG-C1-002]
      statement: underground_presence_can_be_inferred_from_environmental_signs_and_later_agricultural_use_proves_possibility_not_ancient_norm
      canon_boundary_note: hidden_lower_body_remains_intentionally_unresolved_and_no_automatic_crop_bonus_or_domestication_institution_is_created
canonical_source_data:
  types: [ground]
  base_stats_raw: {hp: 10, attack: 55, defense: 25, special_attack: 35, special_defense: 45, speed: 95}
  abilities_relevant_to_p4: [sand_veil_as_modern_context, arena_trap_as_modern_context, sand_force_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [burrowing_and_earth_displacement_families_as_capability_context]
  physical_metadata: {height: 0.2_m, weight: 0.8_kg}
  evolution_source:
    evolves_from: null
    evolves_to: [dugtrio]
    canonical_conditions: [modern_level_26_metadata_is_source_context_only]
  other_material_facts: [roughly_one_yard_underground_current_context, root_feeding, thin_skin_light_weakness, raised_earth_trail, later_soil_tilling_and_farm_raising_context]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 1
  force: 2
  guard: 1
  potency: 1
  resistance: 2
  speed: 4
  derivation_notes: {vigor: hp_10, force: attack_55, guard: defense_25, potency: special_attack_35, resistance: special_defense_45, speed: speed_95}
  calibration_flags: [no_manual_exception, Speed_not_literal_burrow_velocity, low_vigor_does_not_remove_subterranean_capability]
capabilities_and_hazards:
  locomotion: [species_local_shallow_burrowing, brief_surface_emergence]
  physical_hazards: [sudden_ground_emergence, small_scale_soil_displacement]
  elemental_environmental_hazards: [bright_light_exposure_is_species_local_weakness]
  anomalous_hazards: []
  behavioral_capabilities: [root_feeding, dark_place_preference, shallow_subsurface_movement]
  utility_interaction_capabilities: [soil_tilling_possible_in_later_or_separately_authored_contexts]
  immunities_or_approach_invalidators: [direct_line_of_sight_may_be_unavailable_while_subsurface_but_tracking_signs_can_exist]
  hazard_records:
    - hazard_key: diglett-shallow-burrow-emergence
      kind: other
      delivery_or_exposure: [raised_earth_path, sudden_surface_break, loose_soil_shift]
      prerequisite_or_trigger: [movement_through_suitable_soil, disturbance, feeding_or_escape]
      warning_signs: [raised_earth, root_damage, fresh_soil_ridge]
      immediate_effects: [surprise_pressure_only_if_event_state_earns_it, minor_footing_or_contact_hazard]
      delayed_or_persistent_effects: [none_automatic]
      ordinary_consequence_ceiling: moderate
      exceptional_consequence_ceiling: serious_only_in_compound_or_exceptional_context
      countermeasures: [watch_ground_signs, hard_surface, distance_from_fresh_ridges, avoid_root_zone_disturbance]
      emergency_consumable_hooks: []
      context_amplifiers: [loose_soil, poor_visibility, root_dense_ground]
      context_mitigators: [hard_surface, bright_exposure_for_Diglett_only_if_scene_safe_and_noncruel, known_trail]
      governing_species_axes: [speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [DIG-C1-001, DIG-C1-002, DIG-D1-001]
  notes: [underground_does_not_equal_perfect_stealth, Arena_Trap_does_not_guarantee_escape_denial, lower_body_anatomy_is_not_authored]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: shallow_subsurface_movement_and_ground_signs_matter_more_where_routes_and_agriculture_are_hand_maintained
  stat_effect_if_any: none
  behavior_effect_if_any: root_zones_and_loose_soil_can_create_route_or_crop_pressure
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [dark_or_subsurface_soil_and_caves_where_locally_supported, exact_ancient_distribution_unknown]
  ecological_niche: [small_root_feeding_subterranean_forager]
  activity_pattern: [mostly_subsurface, surface_exposure_contextual]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [plant_roots, soil_disturbance]
  social_structure: [unknown]
  predator_prey_competitor_links: [Onix_tunnels_may_be_used_in_version_scoped_context]
  environmental_effects: [raised_earth, tilled_soil, root_damage_or_disturbance]
  observable_signs: [fresh_ridge, disturbed_roots, small_surface_opening]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [hidden_lower_body_shape, hidden_limbs, total_below_ground_length, exact_burrow_depth_range]
human_perception_and_culture:
  ordinary_attitude: [useful_or_troublesome_depends_on_fields_and_roots]
  specialist_knowledge_holders: [farmers, foragers, diggers, route_scouts]
  benefits_and_services: [later_context_soil_tilling_proves_possible_benefit]
  fears_and_avoidance: [root_damage, unseen_ground_movement]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [read_raised_earth, protect_sensitive_root_beds, do_not_assume_empty_ground]
  common_misbeliefs: [underground_means_invisible, Arena_Trap_means_escape_is_impossible, modern_farm_raising_proves_ancient_domestication]
  local_variation_notes: [any_ancient_agricultural_relationship_requires_separate_local_authorship]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [moving_soil_ridge, root_chewing_signs, brief_head_only_surface_view]
  local_aliases_or_titles: none
  identification_evidence: [raised_earth, root_damage, repeated_shallow_emergence]
  initial_knowledge_fragments: [lives_shallowly_underground, bright_light_is_bad_for_it]
  post_identification_knowledge: [ground_trail_can_reveal_direction_without_revealing_exact_position]
  advanced_insights: [later_farm_use_is_not_a_baseline_proto_Kanto_norm]
  exceptional_individual_knowledge_hooks: [old_Diglett_known_for_crossing_a_field_without_breaking_surface_except_for_a_single_soil_ridge]
threat_and_encounter:
  baseline_threat_band: low_to_moderate
  default_behavior_states: [burrowed, feeding, wary, emerging, fleeing]
  aggression_tendency: low_to_contextual
  territoriality: low_or_unknown
  avoidance_tendency: high
  warning_signs: [raised_earth, fresh_root_damage, soil_shift]
  encounter_triggers: [root_zone_disturbance, pursuit, accidental_step_near_emergence]
  escalation_triggers: [continued_intrusion, blocked_escape]
  deescalation_conditions: [leave_soil_patch, stop_pursuit]
  pursuit_profile: usually_subsurface_disengagement
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [minor_injury, footing_or_route_complication, crop_or_root_damage]
  consequence_ceiling: moderate_normally
  human_check_hooks:
    - action: infer_a_Diglett_path_from_raised_earth_without_claiming_exact_position
      relevant_species_axis: speed
      relevant_tags: [shallow_subsurface_movement, raised_earth_path]
      relevant_hazard_keys: [diglett-shallow-burrow-emergence]
      difficulty_guidance: D024_context_from_soil_condition_light_recentness_and_route_clutter
      notes: Speed_4_does_not_set_mph_or_stealth_certainty
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [shy, curious, field_tolerant, root_aggressive]
    condition_variants: [light_stressed, feeding, displaced, injured]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [unusual_soil_history, age, survival_under_exposure, specialized_route]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_route_or_surface_mark, known_history]
    warning_or_rumor_hooks: [field_Diglett_whose_ridge_always_appears_before_dawn]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [rare_voluntary_trust, access_to_suitable_soil_or_dark_shelter, no_forced_surface_exposure]
  trust_building_paths: [noncoercive_field_contact, protection_from_harm, reliable_root_safe_food]
  reasons_to_stay: [bond, safe_soil, stable_resources]
  rejection_or_departure_reasons: [forced_bright_exposure, containment, chronic_denial_of_burrowing]
  human_social_costs: [field_or_floor_disruption, root_management]
  logistics:
    food: [species_appropriate_plant_root_or_substitute_supply]
    water: [regular_access]
    shelter_temperature: [dark_soil_or_shelter]
    space_travel: [portable_storage_forbidden, travel_requires_suitable_ground_or_carried_rest_context_not_defined]
    settlement_restrictions: [fields_and_structures_may_restrict_burrowing]
    special_resources: [none_fixed]
  assistance_capabilities: [soil_tilling_only_when_voluntary_locally_authored_and_not_a_numeric_crop_bonus]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_bright_light_coercion, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent]
mechanical_hooks:
  tracking_clues: [raised_earth, root_damage, fresh_soil]
  avoidance_preparation: [hard_paths, visual_ground_scan, root_zone_markers]
  resistance_or_protection: [stable_footing]
  combat_approach_permissions: [use_environmental_signs_to_anticipate_emergence]
  blocked_or_invalid_approaches: [invent_hidden_body, grant_perfect_stealth, apply_fixed_sunlight_damage, grant_auto_crop_bonus]
  fear_hooks: [soil_ridge_moves_toward_a_character]
  injury_hazard_hooks: [minor_contact, footing_loss]
  environmental_state_hooks: [soil_softness, roots, light, hard_surface]
  companion_assistance_hooks: [bounded_soil_work_if_voluntary]
  fortune_spike_opportunities: [fresh_ridge_reveals_a_safe_detour]
  trouble_spike_complications: [root_damage_threatens_a_valuable_crop_patch]
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
  hook: present
  enabling_evidence: [version_scoped_soil_tilling_and_later_farm_raising]
  human_craft_bridge: [small_local_field_practice_may_accommodate_or_invite_Diglett_only_if_separately_authored]
  narrow_domain: local_soil_management
  local_dependency: [suitable_soil, voluntary_or_ecological_presence, chronology_safe_local_practice]
  scalability_limits: [no_normalized_husbandry, no_automatic_crop_multiplier, no_trainer_institution]
  ownership_shortcut_forbidden: true
  evidence_class: D2
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [farmer_follows_fresh_Diglett_ridges_to_find_well_tilled_soil]
  dangerous: [root_damage_and_moving_ground_create_a_choice_between_crop_protection_and_nonlethal_deterrence]
  unusual_or_rare: [a_locally_tolerated_Diglett_returns_to_the_same_field_each_season_without_being_owned]
  discovery_insight: [raised_earth_breaks_the_perfect_stealth_assumption]
  route_environment: [hard_surface_interrupts_a_shallow_burrow_path]
  settlement_culture: [later_farm_evidence_inspires_bounded_local_practice_not_a_global_norm]
  cross_species: [Dugtrio_extreme_depth_and_speed_are_not_inherited_backward]
presentation_and_p6_followups:
  initial_bestiary_presentation: tiny_shallow_burrower_known_more_by_raised_earth_and_root_signs_than_full_body_visibility
  progressive_reveal_notes: [never_reveal_unsupported_lower_body_anatomy]
  species_specific_visual_needs: [moving_soil_ridge, root_disturbance, brief_surface_head]
  species_specific_audio_needs: [soft_soil_scrape, root_snap]
  special_ui_or_readability_needs: [ground_signs_not_xray_outline, light_stress_without_damage_meter]
  p6_followup_required: true
cross_species_links:
  evolution_family: [dugtrio]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [onix_tunnel_context_version_scoped]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [hidden_lower_body_shape, hidden_limbs, total_below_ground_length, exact_ancient_distribution]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [raised_earth_tracking_and_field_events]
  deferred_to_p6: [hidden_body_safe_visual_presentation]
  deferred_to_p7: [subsurface_state_representation_if_needed]
```
