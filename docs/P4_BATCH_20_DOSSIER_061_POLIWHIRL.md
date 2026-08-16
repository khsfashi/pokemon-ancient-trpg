# P4 Batch 20 — #061 Poliwhirl Full-Schema Dossier

Part of `docs/P4_BATCH_20_FULL_SCHEMA_DOSSIERS.md`.

---

## #061 Poliwhirl / 슈륙챙이

```yaml
identity:
  national_dex: 61
  species_key: poliwhirl
  official_name_en: Poliwhirl
  official_name_ko: 슈륙챙이
  evolution_family_keys: [poliwag, poliwhirl, poliwrath, politoed_external]
  mandatory_gen1_roster: true
  dossier_status: complete
provenance:
  reviewed: true
  source_revision_refs: [SRC-DATA-001, OFFICIAL-DEX-POLIWHIRL-SG, P4_BATCH_20_SOURCE_REVIEW]
  official_evidence:
  - claim_id: PHW-C1-001
    evidence_class: C1
    source_ref: OFFICIAL-DEX-POLIWHIRL-SG
    version_context: current_official_portal__AMPHIBIOUS_PHYSIOLOGY
    paraphrase: Poliwhirl_has_developed_legs_that_support_ground_living_but_it_prefers_water_and_maintains_a_moist_smooth_body_surface
  - claim_id: PHW-C1-002
    evidence_class: C1
    source_ref: SRC-DATA-001
    version_context: historical_versions__SLIPPERY_SKIN_AND_SPIRAL_DROWSINESS
    paraphrase: historical_entries_add_land_sweating_oily_slick_escape_pressure_and_bounded_drowsiness_or_sleep_effects_from_staring_at_the_belly_spiral
  derived_claims:
  - claim_id: PHW-D1-001
    evidence_class: D1
    based_on: [PHW-C1-001, PHW-C1-002]
    statement: Poliwhirl_is_genuinely_amphibious_with_moist_slippery_skin_and_a_visual_drowsiness_hazard
    canon_boundary_note: no_hydration_meter_guaranteed_escape_passive_hypnosis_or_continuous_gaze_polling
  - claim_id: PHW-D1-002
    evidence_class: D1
    based_on: [PHW-C1-002]
    statement: spiral_linked_drowsiness_requires_authored_visual_exposure_and_counterplay
    canon_boundary_note: no_mind_control_or_automatic_player_input_loss
canonical_source_data:
  types: [water]
  base_stats_raw: {hp: 65, attack: 65, defense: 65, special_attack: 50, special_defense: 50, speed: 90}
  abilities_relevant_to_p4: [water_absorb_as_modern_context, damp_as_modern_context, swift_swim_hidden_as_modern_context]
  moves_or_move_families_relevant_to_p4: [modern_move_list_is_not_blanket_ancient_capability_permission]
  physical_metadata: {height: 1.0_m, weight: 20.0_kg}
  evolution_source:
    evolves_from: poliwag
    evolves_to: [poliwrath, politoed_external]
    canonical_conditions: [modern_Water_Stone_context_for_Poliwrath, later_Kings_Rock_trade_context_for_Politoed, neither_is_automatic_ancient_progression_law]
  other_material_facts: [amphibious_living, moist_smooth_skin, historical_land_sweating, oily_slip_escape_pressure, historical_spiral_linked_drowsiness]
species_stat_profile:
  rating_scale_version: p4-six-axis-v1
  vigor: 3
  force: 3
  guard: 3
  potency: 2
  resistance: 2
  speed: 4
  derivation_notes: {vigor: hp_65, force: attack_65, guard: defense_65, potency: special_attack_50, resistance: special_defense_50, speed: speed_90}
  calibration_flags: [no_manual_exception, amphibious_not_generic_Water_type_rule, slippery_skin_not_auto_escape, drowsiness_not_passive_hypnosis]
capabilities_and_hazards:
  locomotion: [competent_swimming, competent_ground_walking, water_preference]
  physical_hazards: [body_strike_or_grapple_escape_pressure_when_scene_supports_it]
  elemental_environmental_hazards: []
  anomalous_hazards: [visual_spiral_drowsiness]
  behavioral_capabilities: [amphibious_retreat, keeping_skin_moist_on_land_historical, using_spiral_as_escape_or_pressure_tool_historical]
  utility_interaction_capabilities: [land_water_route_switching, slippery_body_can_complicate_restraint_without_guaranteeing_escape]
  immunities_or_approach_invalidators: [moist_skin_does_not_create_drying_timer_or_water_immunity, slippery_skin_does_not_invalidate_every_grapple]
  hazard_records:
  - hazard_key: poliwhirl-spiral-drowsiness
    kind: psychic
    delivery_or_exposure: [sustained_or_authored_visual_attention_to_the_belly_spiral]
    prerequisite_or_trigger: [spiral_visible, target_can_see_it, exposure_is_material_to_the_scene]
    warning_signs: [visible_undulating_spiral, growing_heaviness_or_drowsiness, opportunity_to_avert_gaze]
    immediate_effects: [drowsiness_pressure, reduced_readiness_or_need_to_change_approach]
    delayed_or_persistent_effects: [bounded_sleep_or_fatigue_consequence_only_after_resolved_exposure]
    ordinary_consequence_ceiling: serious
    exceptional_consequence_ceiling: severe_if_sleep_occurs_in_an_already_dangerous_environment]
    countermeasures: [avert_gaze, reposition, break_line_of_sight, interrupt_encounter, retreat]
    emergency_consumable_hooks: []
    context_amplifiers: [close_range, fixation, darkness_outside_the_spiral, exceptional_individual]
    context_mitigators: [cover, prior_knowledge, multiple_view_angles, short_exposure]
    governing_species_axes: [potency, resistance]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [PHW-C1-002, PHW-D1-002]
  - hazard_key: poliwhirl-slippery-escape
    kind: entanglement
    delivery_or_exposure: [attempt_to_hold_or_restrain_Poliwhirl_at_close_range]
    prerequisite_or_trigger: [physical_grab_or_restraint_attempt]
    warning_signs: [visibly_wet_or_oily_skin, twisting_body, route_to_water]
    immediate_effects: [grip_loss, position_change, failed_restraint_or_escape_pressure]
    delayed_or_persistent_effects: [none_unless_the_new_position_creates_environmental_risk]
    ordinary_consequence_ceiling: minor_to_serious
    exceptional_consequence_ceiling: serious
    countermeasures: [do_not_rely_on_bare_hand_grappling, control_space_not_body, use_safe_barriers_when_credible, allow_retreat]
    emergency_consumable_hooks: []
    context_amplifiers: [wet_ground, water_edge, poor_footing]
    context_mitigators: [dry_stable_ground, distance, non-grappling_approach]
    governing_species_axes: [speed]
    severity_is_not_capped_by_axis_rating: true
    provenance_or_derivation_refs: [PHW-C1-002, PHW-D1-001]
  notes: [no_continuous_hydration_meter, no_per_frame_gaze_detector, spiral_effect_never_silently_removes_player_input]
ancient_strength:
  classifications: [similar_to_modern_baseline, ecologically_more_dangerous]
  evidence_class: D2
  rationale: amphibious_route_choice_and_visual_drowsiness_can_be_more_consequential_in_preindustrial_travel_without_stat_inflation
  stat_effect_if_any: none
  behavior_effect_if_any: authored_water_escape_and_spiral_exposure_can_change_encounter_risk
  canon_boundary_note: no_global_ancient_bonus_or_player_level_scaling
ancient_ecology:
  habitat: [ponds, streams, marsh_edges, wet_forests_or_fields_when_authored, exact_proto_kanto_distribution_unknown]
  ecological_niche: [amphibious_forager]
  activity_pattern: [swimming, walking_near_water, resting_in_wet_shelter, fleeing_between_land_and_water]
  seasonal_notes: [dry_conditions_may_change_local_presence_but_exact_requirement_unknown]
  feeding_and_resource_interaction: [exact_diet_unknown]
  social_structure: [unknown]
  predator_prey_competitor_links: [local_aquatic_and_shore_food_web_requires_authoring]
  environmental_effects: [wet_tracks, disturbed_bank, slick_marks]
  observable_signs: [wet_footprints, smooth_belly_spiral, splash_to_land_transition, oily_or_slick_handling_reports]
  locality_constraints: [amphibious_capability_does_not_imply_every_waterway_contains_Poliwhirl]
  unsupported_gaps: [exact_out_of_water_duration, exact_moisture_requirement, exact_slip_probability, exact_drowsiness_exposure_time, exact_visual_range]
human_perception_and_culture:
  ordinary_attitude: [cautious_curiosity]
  specialist_knowledge_holders: [fishers, marsh_foragers, handlers, healers_familiar_with_sleep_hazards]
  benefits_and_services: [none_required]
  fears_and_avoidance: [unexpected_drowsiness_near_water, difficult_close_handling]
  myths_omens_taboos: [local_stories_may_exaggerate_the_spiral_into_unavoidable_hypnosis]
  practical_customs: [avoid_staring_when_drowsiness_signs_start, give_water_exit_space, use_non-grappling_handling]
  common_misbeliefs: [it_must_stay_submerged, it_can_escape_any_restraint, looking_once_causes_instant_sleep]
  local_variation_notes: [no_region_wide_hypnosis_cult_or_moisture_ritual_is_required]
identification_and_knowledge:
  baseline_recognition: locality_dependent
  unknown_presentation_hooks: [a_wet_two_legged_shape_steps_ashore_while_the_spiral_seems_to_shift_in_the_viewers_attention]
  local_aliases_or_titles: none
  identification_evidence: [developed_legs, moist_skin, belly_spiral, land_water_switching]
  initial_knowledge_fragments: [can_live_on_land_but_prefers_water, avoid_fixating_on_spiral]
  post_identification_knowledge: [slippery_skin_complicates_grabs_but_does_not_guarantee_escape]
  advanced_insights: [line_of_sight_and_route_control_can_neutralize_both_spiral_and_slip_pressure_without_direct_force]
  exceptional_individual_knowledge_hooks: [a_distinctive_Poliwhirl_is_known_for_holding_attention_long_enough_to_escape_into_a_specific_reed_bed]
threat_and_encounter:
  baseline_threat_band: low_to_moderate_normally_higher_near_water_or_when_visual_exposure_is_mishandled
  default_behavior_states: [swimming, walking, resting, displaying_spiral, slipping_free, retreating]
  aggression_tendency: low_to_defensive_or_escape_oriented
  territoriality: low_or_contextual
  avoidance_tendency: high_when_water_escape_exists
  warning_signs: [body_turns_spiral_forward, slick_skin, repositioning_toward_water, drowsiness_onset]
  encounter_triggers: [shoreline_crossing, handling_attempt, blocked_water_access]
  escalation_triggers: [cornering, prolonged_stare, grabbing, attacking]
  deescalation_conditions: [avert_gaze, create_space, restore_water_exit, stop_grabbing]
  pursuit_profile: usually_escape_oriented_not_persistent
  group_size_effects: [each_Poliwhirl_is_one_entity_with_one_turn_health_state_initiative_presence_and_visible_companion_slot]
  ordinary_consequence_categories: [drowsiness, grip_loss, position_loss, minor_or_moderate_injury]
  consequence_ceiling: severe_only_when_drowsiness_or_position_loss_combines_with_dangerous_environment]
  human_check_hooks:
  - action: contain_or_bypass_Poliwhirl_without_being_drawn_into_spiral_exposure_or_a_bad_water_edge_position
    relevant_species_axis: speed
    relevant_tags: [amphibious, slippery, visual_drowsiness]
    relevant_hazard_keys: [poliwhirl-spiral-drowsiness, poliwhirl-slippery-escape]
    difficulty_guidance: D024_context_from_line_of_sight_distance_footing_and_water_exit
    notes: no_gaze_polling_or_guaranteed_escape_formula
individual_variation:
  ordinary_variation:
    allowed_rating_deltas: normally_one_axis_plus_or_minus_1_if_material_and_authored
    temperament_variants: [shy, curious, playful, defensive, escape_focused]
    condition_variants: [wet_and_active, resting, stranded_from_water, injured, fatigued]
    local_lineage_variants: [none_without_evidence_or_D2_authoring]
  exceptional_individuals:
    allowed: true
    rarity_guidance: rare_history_backed_not_player_scaled
    candidate_causes: [age, unusual_size, repeated_survival, unusually_effective_display_behavior]
    rating_shift_guidance: explicit_axis_deltas_only_with_persistent_history
    required_distinctive_traits: [recognizable_spiral_or_scars, habitual_route, documented_history]
    warning_or_rumor_hooks: [one_Poliwhirl_can_lure_attention_long_enough_to_escape_from_even_experienced_handlers]
  named_apex_examples: []
companionship:
  classification: eligible
  prerequisites: [voluntary_trust, regular_water_access, safe_land_rest_area, noncoercive_handling]
  trust_building_paths: [repeat_contact_near_safe_water, feeding, rescue_without_capture, respecting_escape]
  reasons_to_stay: [bond, safe_water, reliable_food, trusted_handler]
  rejection_or_departure_reasons: [forced_dry_confinement, repeated_grabbing, coercive_use_of_spiral, neglect]
  human_social_costs: [wet_space_requirements_and_public_worry_about_drowsiness]
  logistics:
    food: [species_appropriate_food]
    water: [regular_swimming_access]
    shelter_temperature: [moist_safe_rest_area_without_realtime_hydration_system]
    space_travel: [viable_on_land_but_water_access_remains_preferred]
    settlement_restrictions: [manage_wet_surfaces_and_avoid_using_spiral_on_unconsenting_people]
    special_resources: [none_fixed]
  assistance_capabilities: [amphibious_route_help, voluntary_distraction_or_escape_support_without_mind_control]
  handling_boundaries: [no_defeat_to_recruit, no_forced_hypnosis_role, no_guaranteed_restraint_escape, one_visible_companion_slot]
  separation_injury_notes: [bonded_Poliwhirl_remains_independent_and_can_refuse_display_or_restraint_tasks]
mechanical_hooks:
  tracking_clues: [wet_footprints, slick_marks, repeated_land_water_transition, spiral_sightings]
  avoidance_preparation: [control_line_of_sight, keep_stable_footing, preserve_water_exit]
  resistance_or_protection: [cover, distance, non-grappling_tools_when_credible, stable_ground]
  combat_approach_permissions: [amphibious_state_switch, visual_exposure_state, slippery_escape_pressure]
  blocked_or_invalid_approaches: [automatic_sleep, passive_hypnosis, continuous_gaze_polling, hydration_meter, guaranteed_escape]
  fear_hooks: [the_party_member_nearest_the_water_realizes_the_spiral_has_been_the_only_thing_they_have_watched]
  injury_hazard_hooks: [poliwhirl-spiral-drowsiness, poliwhirl-slippery-escape]
  environmental_state_hooks: [in_water, on_land, wet_skin, visual_spiral_exposure, stable_footing]
  companion_assistance_hooks: [voluntary_amphibious_route_help]
  fortune_spike_opportunities: [break_line_of_sight_with_environment_before_drowsiness_resolves]
  trouble_spike_complications: [a_failed_grab_turns_into_a_slip_toward_deeper_water]
hunting_materials_and_resources:
  killing_treatment: no_generic_loot
  hunting_for_food: none
  shed_or_abandoned_materials: none
  natural_remains: [ordinary_remains_only_if_event_context_requires]
  dangerous_harvesting: [skin_moisture_or_oil_is_not_a_repeatable_default_resource_node]
  taboo_or_protection: [local_D2_only_if_authored]
  exact_notable_material_ids: []
  generic_material_conversion_allowed: false
  conversion_conditions: []
technology_and_craft:
  hook: none
  enabling_evidence: []
  human_craft_bridge: []
  narrow_domain: none
  local_dependency: []
  scalability_limits: [slippery_skin_and_spiral_effect_do_not_create_industrial_lubricant_or_hypnosis_technology]
  ownership_shortcut_forbidden: true
  evidence_class: not_applicable
emergency_consumable_hooks:
  hooks: none
narrative_and_event_hooks:
  peaceful: [watch_Poliwhirl_move_between_land_and_water_without_treating_it_as_a_water_only_creature]
  dangerous: [avoid_drowsiness_and_bad_footing_while_it_uses_its_spiral_to_escape]
  unusual_or_rare: [an_exceptional_Poliwhirl_is_locally_famous_for_a_distinctive_spiral_and_elusive_route]
  discovery_insight: [learn_that_averting_gaze_and_controlling_space_are_more_effective_than_trying_to_grab_it]
  route_environment: [marsh_edge, stream_crossing, pond_bank, wet_forest_path]
  settlement_culture: [handlers_teach_children_not_to_stare_at_the_spiral_or_grab_a_slick_body_near_deep_water]
  cross_species: [Poliwag_has_weaker_land_viability, Poliwrath_has_much_greater_strength_and_endurance]
presentation_and_p6_followups:
  initial_bestiary_presentation: amphibious_footsteps_and_readable_belly_spiral_before_any_sleep_status
  progressive_reveal_notes: [show_visual_exposure_eligibility, show_slip_as_counterable_physics_not_auto_escape]
  species_specific_visual_needs: [clear_spiral_visibility_and_wet_skin_state]
  species_specific_audio_needs: [wet_footsteps_and_water_entry_exit_cues]
  special_ui_or_readability_needs: [drowsiness_must_have_exposure_and_counterplay_feedback]
  p6_followup_required: true
cross_species_links:
  evolution_family: [poliwag, poliwrath, politoed_external]
  predator_prey: []
  competition: []
  symbiosis: []
  mimicry_confusion: []
  shared_habitat: [pond_stream_and_marsh_species_when_authored]
  cultural_or_material_dependencies: []
open_questions_and_gates:
  unresolved_sources: [exact_out_of_water_duration_or_moisture_requirement, exact_slippery_escape_pressure, exact_drowsiness_exposure_time, exact_visual_range_or_occlusion_rule]
  contradictions: []
  human_design_gates: []
  deferred_to_p5: [bounded_drowsiness_condition_and_check_resolution]
  deferred_to_p6: [spiral_exposure_readability_and_wet_skin_state]
  deferred_to_p7: [cached_visual_exposure_and_land_water_flags_without_per_frame_polling]
```

### Completion note

All 20 frozen-schema top-level sections are populated. Poliwhirl's drowsiness and slippery skin are real but event-scoped, counterable hazards; neither becomes passive hypnosis, automatic sleep, guaranteed escape or continuous simulation. No blocking Human Design Gate remains.
