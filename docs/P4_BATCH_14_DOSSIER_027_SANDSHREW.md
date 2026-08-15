# P4 Batch 14 — #027 Sandshrew Full-Schema Dossier

Part of `docs/P4_BATCH_14_FULL_SCHEMA_DOSSIERS.md`.

---

## #027 Sandshrew / 모래두지

```yaml
identity:
  national_dex: 27
  species_key: sandshrew
  official_name_en: Sandshrew
  official_name_ko: 모래두지
  evolution_family_keys: [sandshrew, sandslash]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-SANDSHREW-SG, P4_BATCH_14_SOURCE_REVIEW]
  official_evidence:
    - claim_id: SAND-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SANDSHREW-SG
      version_context: current_official_portal
      paraphrase: digs_deep_burrows_for_residence_and_curls_into_a_ball_when_threatened
    - claim_id: SAND-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-SANDSHREW-SG
      version_context: current_and_historical_version_tagged
      paraphrase: curled_ball_posture_can_mitigate_attacks_and_high_falls_and_arid_habitat_is_repeatedly_associated
  derived_claims:
    - claim_id: SAND-D1-001
      evidence_class: D1
      based_on: [SAND-C1-001, SAND-C1-002]
      statement: burrowing_and_defensive_curl_are_species_local_capabilities_that_can_change_approach_and_escape_options
      canon_boundary_note: not_unlimited_substrate_boring_not_invulnerability_not_fixed_armor_or_fall_immunity
canonical_source_data:
  types: [ground]
  base_stats_raw: {hp: 50, attack: 75, defense: 85, special_attack: 20, special_defense: 30, speed: 40}
  abilities_relevant_to_p4: [sand_veil_as_modern_context, sand_rush_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [burrowing_and_curling_families_as_capability_context]
  physical_metadata: {height: 0.6_m, weight: 12.0_kg}
  evolution_source:
    evolves_from: null
    evolves_to: [sandslash]
    canonical_conditions: [modern_level_22_metadata_is_source_context_only]
  other_material_facts: [deep_burrow_dwelling, defensive_curl, fall_mitigation_by_curl_and_bounce, arid_habitat_version_context]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 2
  force: 3
  guard: 4
  potency: 1
  resistance: 1
  speed: 2
  derivation_notes: {vigor: hp_50, force: attack_75, guard: defense_85, potency: special_attack_20, resistance: special_defense_30, speed: speed_40}
  calibration_flags: [no_manual_exception, Speed_not_literal_burrowing_velocity, Guard_not_invulnerability]
capabilities_and_hazards:
  locomotion: [surface_running, species_local_soil_burrowing, curled_rolling_or_bouncing_escape_when_context_supports]
  physical_hazards: [claw_contact, curled_body_impact]
  elemental_environmental_hazards: [loose_soil_displacement]
  anomalous_hazards: []
  behavioral_capabilities: [burrow_dwelling, defensive_curl, conflict_avoidance_or_escape_when_possible]
  utility_interaction_capabilities: [small_burrow_excavation_only_in_suitable_substrate]
  immunities_or_approach_invalidators: [curl_can_reduce_exposed_surface_and_change_some_direct_attack_options]
  hazard_records:
    - hazard_key: sandshrew-defensive-curl-and-burrow
      kind: other
      delivery_or_exposure: [curled_body_contact, loose_soil_displacement, sudden_retreat_into_burrow]
      prerequisite_or_trigger: [threatened, cornered, attacked_near_burrow]
      warning_signs: [body_tucking, clawing_at_loose_ground, soil_shift]
      immediate_effects: [harder_direct_contact, repositioning_pressure, possible_minor_or_moderate_impact]
      delayed_or_persistent_effects: [none_automatic_follow_P3]
      ordinary_consequence_ceiling: moderate
      exceptional_consequence_ceiling: serious_in_compound_fall_slope_or_named_individual_context
      countermeasures: [do_not_corner, maintain_distance, stable_footing, avoid_reaching_into_unknown_burrow]
      emergency_consumable_hooks: []
      context_amplifiers: [loose_slope, confined_space, unstable_footing]
      context_mitigators: [open_escape_space, hard_nonburrowable_surface, distance]
      governing_species_axes: [guard, force, speed]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [SAND-C1-001, SAND-C1-002, SAND-D1-001]
  notes: [Ground_type_does_not_grant_generic_burrowing, historical_repel_any_attack_wording_does_not_create_total_immunity]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: burrows_and_defensive_curl_have_greater_route_and_shelter_value_in_a_low_infrastructure_world
  stat_effect_if_any: none
  behavior_effect_if_any: suitable_soil_and_burrow_networks_can_make_disengagement_or_tracking_harder
  canon_boundary_note: no_global_ancient_bonus_or_player_scaling
ancient_ecology:
  habitat: [dry_or_arid_soil_where_locally_supported_D2, exact_ancient_proto_Kanto_distribution_unknown]
  ecological_niche: [small_subterranean_forager_and_burrow_dweller]
  activity_pattern: [surface_activity_contextual, burrow_refuge_common]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [exact_diet_not_bound_here]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [small_burrow_mouths, displaced_soil, compact_tracks]
  observable_signs: [burrow_opening, fresh_spoil_pile, curled_body_tracks_or_scuffs]
  locality_constraints: [baseline_natural_presence_requires_authored_local_ecology_under_D034]
  unsupported_gaps: [maximum_burrow_depth, hard_rock_boring_permission, tunnel_load_bearing_reliability, exact_fall_survival_ceiling]
human_perception_and_culture:
  ordinary_attitude: [wary_respect_near_active_burrows]
  specialist_knowledge_holders: [foragers, diggers, hunters, route_scouts]
  benefits_and_services: [none_required]
  fears_and_avoidance: [hidden_burrow_holes, sudden_rolling_escape, claw_injury]
  myths_omens_taboos: [local_D2_only]
  practical_customs: [probe_loose_ground, leave_escape_space, do_not_reach_into_active_burrows]
  common_misbeliefs: [curl_makes_it_invulnerable, Ground_type_means_it_can_bore_any_material]
  local_variation_notes: [no_normalized_ownership_or_training_institution_inferred]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [fresh_spoil_pile, round_scuffed_track, small_armored_silhouette]
  local_aliases_or_titles: none
  identification_evidence: [burrow_shape, tracks, curled_defense, body_plates]
  initial_knowledge_fragments: [burrow_dweller, curls_when_threatened]
  post_identification_knowledge: [curl_is_strong_defense_but_not_total_immunity]
  advanced_insights: [substrate_and_escape_space_define_burrowing_value]
  exceptional_individual_knowledge_hooks: [ancient_scarred_sandshrew_with_unusually_dense_plates_and_deep_local_burrow_history]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_for_prepared_adults
  default_behavior_states: [burrowed, foraging, wary, curled_defense, fleeing]
  aggression_tendency: low_to_contextual
  territoriality: low_to_moderate_near_burrow_if_authored
  avoidance_tendency: high
  warning_signs: [soil_shift, body_tucking, claw_scrape]
  encounter_triggers: [disturb_burrow, cornering, direct_attack]
  escalation_triggers: [block_escape, continue_attack]
  deescalation_conditions: [restore_escape_space, leave_burrow_area, stop_pursuit]
  pursuit_profile: usually_disengages_rather_than_long_pursuit
  group_size_effects: [no_generic_multiplier]
  ordinary_consequence_categories: [minor_to_moderate_injury, fall_or_footing_complication]
  consequence_ceiling: moderate_normally_serious_in_compound_or_exceptional_context
  human_check_hooks:
    - action: avoid_or_control_contact_when_a_cornered_sandshrew_curls_and_repositions
      relevant_species_axis: guard
      relevant_tags: [defensive_curl, species_local_soil_burrowing]
      relevant_hazard_keys: [sandshrew-defensive-curl-and-burrow]
      difficulty_guidance: D024_context_from_space_surface_slope_warning_and_escape_routes
      notes: Guard_4_is_not_an_absolute_damage_negation_state
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [skittish, defensive, curious, burrow_focused]
    condition_variants: [resting, displaced, dehydrated, injured, recently_curled]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_history_backed_not_player_scaled
    candidate_causes: [age, harsh_substrate_survival, repeated_predator_escape, unusual_lineage]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_markings, unusual_plate_density_or_burrow_behavior, known_history]
    warning_or_rumor_hooks: [old_burrower_that_survived_repeated_cliff_falls]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [rare_voluntary_trust, safe_burrowing_or_shelter_access, no_forced_containment]
  trust_building_paths: [noncoercive_feeding, injury_recovery, repeated_safe_contact]
  reasons_to_stay: [bond, secure_shelter, familiar_territory]
  rejection_or_departure_reasons: [forced_restraint, chronic_denial_of_burrowing, coercive_combat_use]
  human_social_costs: [burrow_damage_to_floors_or_fields_if_unmanaged]
  logistics:
    food: [species_appropriate_supply_exact_amount_unknown]
    water: [regular_access]
    shelter_temperature: [dry_shelter_and_suitable_soil_if_possible]
    space_travel: [cannot_assume_portable_storage_or_long_subterranean_transport]
    settlement_restrictions: [burrowing_may_be_restricted_near_structures]
    special_resources: [none_fixed]
  assistance_capabilities: [small_scale_soil_excavation_only_when_voluntary_and_substrate_valid]
  handling_boundaries: [no_defeat_to_recruit, no_forced_containment, no_universal_tunneling_service, one_visible_companion_slot]
  separation_injury_notes: [bonded_individual_remains_independent_and_cannot_be_stored]
mechanical_hooks:
  tracking_clues: [fresh_spoil, burrow_mouth, claw_marks, disturbed_dry_soil]
  avoidance_preparation: [stable_footwear, probing_loose_ground, leaving_escape_space]
  resistance_or_protection: [distance, hard_cover, stable_footing]
  combat_approach_permissions: [wait_out_defensive_posture, force_reposition_only_through_scene_logic]
  blocked_or_invalid_approaches: [treat_curl_as_invulnerability, derive_burrow_speed_from_Speed, assume_hard_rock_boring]
  fear_hooks: [ground_shifts_beneath_a_narrow_route]
  injury_hazard_hooks: [claw_contact, curled_body_impact, fall_complication]
  environmental_state_hooks: [soil_compaction, slope, burrow_openings]
  companion_assistance_hooks: [small_excavation_or_warning_only_when_event_valid]
  fortune_spike_opportunities: [hard_ground_blocks_escape_tunnel]
  trouble_spike_complications: [loose_slope_turns_a_defensive_roll_into_route_pressure]
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
  scalability_limits: [burrowing_does_not_create_mining_or_transport_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [observe_a_sandshrew_maintaining_its_burrow]
  dangerous: [cornered_sandshrew_curls_and_bounces_toward_a_slope_escape]
  unusual_or_rare: [exceptional_old_sandshrew_has_survived_a_high_fall_and_is_locally_feared]
  discovery_insight: [curl_is_contextual_defense_not_invulnerability]
  route_environment: [active_burrows_destabilize_a_small_patch_of_loose_ground_without_becoming_a_destructible_terrain_system]
  settlement_culture: [locals_mark_active_burrows_near_paths]
  cross_species: [Sandslash_regrowth_and_spines_are_not_inherited_backward]
presentation_and_p6_followups:
  initial_bestiary_presentation: small_armored_burrow_dweller_that_curls_into_a_ball_under_threat
  progressive_reveal_notes: [show_burrow_signs_before_full_contact, distinguish_defense_from_immunity]
  species_specific_visual_needs: [fresh_spoil, curl_transition, ball_bounce_or_roll_telegraph]
  species_specific_audio_needs: [claw_scrape, soil_shift, shell_scuff]
  special_ui_or_readability_needs: [no_invulnerability_icon, substrate_readability]
  p6_followup_required: true
cross_species_links:
  evolution_family: [sandslash]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [maximum_burrow_depth, hard_rock_boring_permission, tunnel_stability, exact_fall_survival_ceiling]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [burrow_state_and_curl_encounter_resolution]
  deferred_to_p6: [substrate_and_curl_readability]
  deferred_to_p7: [runtime_route_or_burrow_representation_if_needed]
```
