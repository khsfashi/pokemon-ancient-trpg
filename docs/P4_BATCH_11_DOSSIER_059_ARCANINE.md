# P4 Batch 11 — #059 Arcanine Full-Schema Dossier

Part of `docs/P4_BATCH_11_FULL_SCHEMA_DOSSIERS.md`.

---

## #059 Arcanine / 윈디

```yaml
identity:
  national_dex: 59
  species_key: arcanine
  official_name_en: Arcanine
  official_name_ko: 윈디
  evolution_family_keys: [growlithe, arcanine]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-ARCANINE-SG]
  official_evidence:
    - claim_id: ARC-C1-001
      evidence_class: C1
      source_ref: OFFICIAL-DEX-ARCANINE-SG
      version_context: current_official_portal
      paraphrase: an_ancient_picture_scroll_depicts_people_captivated_by_Arcanine_running_across_prairies
    - claim_id: ARC-C1-002
      evidence_class: C1
      source_ref: OFFICIAL-DEX-ARCANINE-SG
      version_context: current_official_portal
      paraphrase: Arcanine_bark_is_described_as_so_majestic_that_listeners_instinctively_grovel
  derived_claims:
    - claim_id: ARC-D1-001
      evidence_class: D1
      based_on: [ARC-C1-001]
      statement: old_human_cultural_observation_of_Arcanine_is_source_backed
      canon_boundary_note: picture_scroll_does_not_fix_project_date_region_polity_literacy_or_art_tradition
    - claim_id: ARC-D1-002
      evidence_class: D1
      based_on: [ARC-C1-002]
      statement: bark_can_support_awe_intimidation_or_hesitation_pressure
      canon_boundary_note: grovel_description_is_not_hypnosis_domination_forced_player_action_or_personality_rewrite
canonical_source_data:
  types: [fire]
  base_stats_raw: {hp: 90, attack: 110, defense: 80, special_attack: 100, special_defense: 80, speed: 95}
  abilities_relevant_to_p4: [intimidate_as_modern_context, flash_fire_as_modern_context, justified_as_modern_context]
  moves_or_move_families_relevant_to_p4: []
  physical_metadata: {height: 1.9_m, weight: 155.0_kg}
  evolution_source:
    evolves_from: growlithe
    evolves_to: []
    canonical_conditions: [modern_fire_stone_item_evolution_is_source_context_and_does_not_define_ancient_availability_or_player_menu]
  other_material_facts: [ancient_picture_scroll_observation, prairie_running, majestic_bark, intense_human_awe, Hisuian_form_is_later_context_only]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 4
  force: 5
  guard: 4
  potency: 5
  resistance: 4
  speed: 4
  derivation_notes: {vigor: hp_90, force: attack_110, guard: defense_80, potency: special_attack_100, resistance: special_defense_80, speed: speed_95}
  calibration_flags: [no_manual_exception, cultural_awe_not_mind_control, ancient_scroll_not_project_chronology, human_affinity_not_auto_inherited_from_Growlithe]
capabilities_and_hazards:
  locomotion: [powerful_terrestrial_running, prairie_route_traversal_when_scene_supports]
  physical_hazards: [large_body_collision, bite_or_close_combat_if_hostile]
  elemental_environmental_hazards: [Fire_type_capability_exists_but_specific_fire_hazards_require_authored_evidence_or_scene]
  anomalous_hazards: [majestic_bark_social_or_fear_pressure]
  behavioral_capabilities: [awe_inspiring_running, majestic_bark]
  utility_interaction_capabilities: [long_ground_route_assistance_only_if_voluntary_and_later_authored]
  immunities_or_approach_invalidators: [close_range_against_hostile_large_Arcanine_can_be_unsafe_even_without_specific_fire]
  hazard_records:
    - hazard_key: arcanine-majestic-bark-pressure
      kind: other
      delivery_or_exposure: [hearing_a_close_or_salient_majestic_bark_in_an_authored_social_or_threat_context]
      prerequisite_or_trigger: [Arcanine_uses_bark_as_display_warning_or_presence]
      warning_signs: [visible_large_Arcanine, posture, inhalation_or_rising_vocal_display_if_authored]
      immediate_effects: [awe, intimidation, hesitation_or_fear_pressure]
      delayed_or_persistent_effects: [none_by_default]
      ordinary_consequence_ceiling: temporary_action_pressure_or_social_hesitation_without_forced_behavior
      exceptional_consequence_ceiling: serious_panic_context_only_if_P3_rules_and_scene_support_not_mind_control
      countermeasures: [distance, prior_knowledge, secure_position, agency_preserving_Will_or_context_check_if_P5_authors]
      emergency_consumable_hooks: []
      context_amplifiers: [surprise, enclosed_echoing_space, prior_fear, visible_size_or_charge]
      context_mitigators: [distance, prior_familiarity, barrier, calm_preparation]
      governing_species_axes: [potency]
      severity_is_not_capped_by_axis_rating: true
      provenance_or_derivation_refs: [ARC-C1-002, ARC-D1-002]
  notes: [bark_pressure_never_selects_player_action, running_capability_does_not_create_mount_or_travel_formula]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: large_body_speed_fire_affinity_and_awe_pressure_are_already_major_premodern_route_threats_without_any_stat_bonus
  stat_effect_if_any: none
  behavior_effect_if_any: culturally_recognized_individuals_may_trigger_local_awe_or_taboo_states
  canon_boundary_note: no_claim_that_ancient_Arcanine_were_intrinsically_stronger
ancient_ecology:
  habitat: [prairie_context_supported_by_ancient_picture_scroll, exact_project_ancient_range_unknown]
  ecological_niche: [large_terrestrial_predator_or_roaming_Pokemon_exact_diet_unknown]
  activity_pattern: [unknown]
  seasonal_notes: [unknown]
  feeding_and_resource_interaction: [unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [unknown]
  environmental_effects: [large_fast_movement_can_clear_or_disrupt_route_space, Fire_effects_require_specific_scene_support]
  observable_signs: [large_canid_tracks, distant_bark, trampled_prairie_route_if_authored]
  locality_constraints: [prairie_or_open_land_is_preferred_for_source_backed_running_scene, opening_locality_presence_not_required]
  unsupported_gaps: [diet, group_structure, denning, migration, exact_ancient_range, cultural_scroll_distribution]
human_perception_and_culture:
  ordinary_attitude: [awe_fear_and_respect_can_coexist]
  specialist_knowledge_holders: [travelers, storytellers, old_image_or_scroll_keepings_only_if_locally_authored, hunters]
  benefits_and_services: [none_required]
  fears_and_avoidance: [large_body, speed, bark_pressure, Fire_potential]
  myths_omens_taboos: [majestic_or_sacred_reputation_may_arise_locally_D2_but_is_not_region_wide_canon]
  practical_customs: [do_not_interpret_awe_as_obedience, leave_clear_route_space, avoid_forcing_close_contact]
  common_misbeliefs: [ancient_scroll_proves_this_settlement_knows_Arcanine, majestic_bark_controls_minds, Growlithe_friendliness_means_all_Arcanine_are_domesticated, large_size_implies_ride_permission]
  local_variation_notes: [some_groups_may_know_only_rumors_or_old_images_while_others_have_direct_encounter_memory]
identification_and_knowledge:
  baseline_recognition: rare
  unknown_presentation_hooks: [very_large_canid_Fire_Pokemon_moving_with_striking_grace_and_a_commanding_bark]
  local_aliases_or_titles: none
  identification_evidence: [large_canid_body, mane, prairie_running, majestic_bark, relation_to_Growlithe_when_known]
  initial_knowledge_fragments: [its_bark_can_overwhelm_composure_but_does_not_take_control]
  post_identification_knowledge: [old_official_human_observation_exists_somewhere_but_not_necessarily_here]
  advanced_insights: [cultural_memory_encounterability_and_companionship_are_separate]
  exceptional_individual_knowledge_hooks: [locally_revered_Arcanine_known_by_route_or_bark]
threat_and_encounter:
  baseline_threat_band: high_due_to_size_force_speed_and_possible_Fire_pressure
  default_behavior_states: [roaming, observing, warning_bark, awe_display, defensive, charging_or_closing, withdrawing]
  aggression_tendency: contextual_unknown
  territoriality: unknown
  avoidance_tendency: moderate_when_uncommitted
  warning_signs: [bark, body_orientation, route_interception, raised_posture]
  encounter_triggers: [prairie_route_overlap, approach_to_specific_individual_or_site, rare_authored_event]
  escalation_triggers: [cornering, attack, threatening_bond_or_site_if_authored]
  deescalation_conditions: [open_route, retreat, stop_threatening, respect_distance]
  pursuit_profile: potentially_fast_and_dangerous_but_exact_persistence_unknown
  group_size_effects: [unknown_no_generic_pack_rule]
  ordinary_consequence_categories: [collision, bite_or_close_combat, awe_or_fear_pressure, route_denial, Fire_exposure_if_authored]
  consequence_ceiling: critical_or_lethal_possible_under_D020_severe_context
  human_check_hooks:
    - action: hold_composure_and_choose_a_response_under_Arcanine_bark_pressure
      relevant_species_axis: potency
      relevant_tags: [majestic_bark, awe_pressure]
      relevant_hazard_keys: [arcanine-majestic-bark-pressure]
      difficulty_guidance: D024_context_from_distance_surprise_prior_knowledge_safety_and_personal_fear
      notes: even_failure_must_preserve_player_agency_and_never_force_kneeling_or_specific_action
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [aloof, watchful, bold, tolerant, territorial]
    condition_variants: [resting, roaming, protecting, injured, bonded]
    local_lineage_variants: [none_without_evidence]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_explicit_not_player_scaled
    candidate_causes: [age, survival_history, unusual_route_dominance, long_human_or_cultural_history]
    rating_shift_guidance: explicit_axis_deltas_only
    required_distinctive_traits: [persistent_marking_route_or_rumor_history]
    warning_or_rumor_hooks: [Arcanine_whose_bark_is_known_across_a_specific_prairie]
  named_apex_examples: []
companionship:
  classification: exceptional_only
  prerequisites: [exceptional_voluntary_persistent_trust, large_space_and_food_support, Fire_safe_logistics, no_forced_containment, no_assumption_from_Growlithe_affinity]
  trust_building_paths: [long_noncoercive_relationship, mutual_rescue_or_route_history, respect_for_autonomy]
  reasons_to_stay: [rare_personal_bond, shared_route_or_protective_history, reliable_care]
  rejection_or_departure_reasons: [attempted_ownership, coercive_riding, crowding, exploitation_of_reputation]
  human_social_costs: [food_and_space, public_awe_or_fear, settlement_fire_and_safety_constraints, attention_from_authorities_or_cults_if_locally_authored]
  logistics:
    food: [exact_diet_unknown_but_large_body_requires_substantial_provision]
    water: [regular_access]
    shelter_temperature: [large_fire_safe_resting_space]
    space_travel: [open_routes_preferred, riding_not_automatic]
    settlement_restrictions: [dense_or_fearful_settlements_may_refuse_entry]
    special_resources: []
  assistance_capabilities: [powerful_ground_travel_alongside_party, deterrence, route_presence_if_voluntary]
  handling_boundaries: [no_defeat_to_recruit, no_mount_right_from_bond, no_bark_mind_control, visible_companion_slot_required]
  separation_injury_notes: [separation_from_a_rare_bond_is_story_state_not_inventory_loss]
mechanical_hooks:
  tracking_clues: [large_tracks, distant_bark, trampled_open_route]
  avoidance_preparation: [keep_open_escape_space, prepare_for_awe_pressure, avoid_close_interception]
  resistance_or_protection: [distance_barrier_and_agency_preserving_composure_measures]
  combat_approach_permissions: [terrain_and_range_before_close_engagement]
  blocked_or_invalid_approaches: [forced_kneeling, mind_control_from_bark, auto_mount, ancient_scroll_as_exact_project_history]
  fear_hooks: [majestic_bark_rolls_across_open_grass_before_the_body_is_seen]
  injury_hazard_hooks: [arcanine-majestic-bark-pressure]
  environmental_state_hooks: [open_prairie, echo_space, visibility, route_width, cultural_reputation]
  companion_assistance_hooks: [deterrence_and_open_route_support_if_voluntary]
  fortune_spike_opportunities: [old_local_image_allows_identification_before_a_rare_encounter]
  trouble_spike_complications: [crowd_panics_or_kneels_while_player_agency_remains_intact]
hunting_materials_and_resources:
  killing_treatment: no_generic_special_material_or_trophy_economy
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: none
  taboo_or_protection: [locally_revered_individual_may_have_major_social_consequence_if_harmed]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [old_picture_scroll_is_cultural_evidence_not_transport_police_military_or_mount_infrastructure]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [discover_an_old_local_image_that_may_or_may_not_depict_Arcanine]
  dangerous: [majestic_bark_and_large_body_turn_an_open_route_encounter_into_composure_and_spacing_pressure]
  unusual_or_rare: [direct_encounter_with_a_culturally_remembered_but_rare_Arcanine]
  discovery_insight: [players_separate_official_old_human_observation_from_this_locality_history]
  route_environment: [open_prairie_allows_visible_running_pressure_while_narrow_routes_remove_safe_spacing]
  settlement_culture: [competing_local_interpretations_of_an_old_Arcanine_image]
  cross_species: [Growlithe_human_affinity_is_not_auto_inherited_as_Arcanine_domestication]
presentation_and_p6_followups:
  initial_bestiary_presentation: rare_large_Fire_canid_associated_with_awe_fast_running_and_old_human_cultural_memory
  progressive_reveal_notes: [separate_local_myth_or_image_from_confirmed_direct_observation]
  species_specific_visual_needs: [large_scale, running_silhouette, bark_or_awe_posture]
  species_specific_audio_needs: [majestic_bark_if_audio_budget_allows]
  special_ui_or_readability_needs: [awe_pressure_must_not_display_as_mind_control_or_forced_action]
  p6_followup_required: true
cross_species_links:
  evolution_family: [growlithe]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: []
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_ancient_range, diet, group_structure, exact_scroll_date_and_place, bark_effect_parameters, rider_or_load_capacity]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [awe_pressure_resolution, rare_encounter_state, evolution_condition_mapping]
  deferred_to_p6: [scale_running_and_bark_readability]
  deferred_to_p7: [agency_preserving_mental_pressure_state_representation]
```
