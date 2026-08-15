# P4 Batch 09 — Full-Schema Dossiers

Status: **REVIEW COMPLETE — ready for Batch 09 audit**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_09_SOURCE_REVIEW.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`, `docs/P3_RARE_PSYCHIC_GIFT_CONTRACT.md`

## 1. Review boundary

All eight Batch 09 species use the frozen P4 dossier schema and `p4-six-axis-v1` with no manual stat exception.

This batch keeps mind-state, information access, toxin delivery and traversal permissions species-specific instead of creating universal status, mind-control, poison-cloud or swim-stat systems.

```text
generic_mental_status_subsystem_created == false
generic_mind_control_rule_created == false
silent_player_action_rewriting_created == false
generic_dream_mind_reading_created == false
generic_Poison_type_exposure_rule_created == false
one_universal_mental_save_created == false
Speed_to_Swim_formula_created == false
hazard_severity_capped_by_six_axis == false
evolution_stage_capabilities_auto_inherited == false
```

## 2. Dossier set

| Dex | Species | Full-schema dossier |
|---:|---|---|
| #039 | Jigglypuff / 푸린 | `docs/P4_BATCH_09_DOSSIER_039_JIGGLYPUFF.md` |
| #040 | Wigglytuff / 푸크린 | `docs/P4_BATCH_09_DOSSIER_040_WIGGLYTUFF.md` |
| #048 | Venonat / 콘팡 | `docs/P4_BATCH_09_DOSSIER_048_VENONAT.md` |
| #049 | Venomoth / 도나리 | `docs/P4_BATCH_09_DOSSIER_049_VENOMOTH.md` |
| #054 | Psyduck / 고라파덕 | `docs/P4_BATCH_09_DOSSIER_054_PSYDUCK.md` |
| #055 | Golduck / 골덕 | `docs/P4_BATCH_09_DOSSIER_055_GOLDUCK.md` |
| #096 | Drowzee / 슬리프 | `docs/P4_BATCH_09_DOSSIER_096_DROWZEE.md` |
| #097 | Hypno / 슬리퍼 | `docs/P4_BATCH_09_DOSSIER_097_HYPNO.md` |

Every document contains the shared required sections:

```text
identity
provenance
canonical_source_data
species_stat_profile
capabilities_and_hazards
ancient_strength
ancient_ecology
human_perception_and_culture
identification_and_knowledge
threat_and_encounter
individual_variation
companionship
mechanical_hooks
hunting_materials_and_resources
technology_and_craft
emergency_consumable_hooks
narrative_and_event_hooks
presentation_and_p6_followups
cross_species_links
open_questions_and_gates
```

## 3. Mind-state separation matrix

```text
Jigglypuff:
  route = audible_song
  warning = growing_drowsiness
  ceiling = induced_sleep_plus_contextual_secondary_risk
  arbitrary_command = false

Drowzee:
  route = sleeping_dreaming_target
  information = subjective_dream_content_and_sleeper_location
  waking_mind_reading = false
  objective_truth = false
  waking_memory_theft = false

Hypno:
  route = pendulum_attention_or_eye_contact
  warning = visible_rhythm_plus_drowsiness
  ceiling = sleep_or_disorientation_plus_contextual_secondary_risk
  arbitrary_command = false
  personality_rewrite = false
```

Drowsiness is a warning/pressure state; actual induced sleep can temporarily remove ordinary conscious action eligibility. Neither state grants the engine permission to choose a player character's actions.

## 4. Player-agency regression

```text
failed_mental_pressure_check_equals_GM_command == false
hypnosis_equals_domination == false
sleep_equals_player_action_rewrite == false
dream_access_equals_hidden_state_inspection == false
Will_may_resist_hostile_mental_pressure == true
Will_is_universal_immunity == false
exposure_prevention_can_precede_resistance_check == true
```

P3 remains authoritative for human checks and player agency. P5 may author event-specific timing and recovery without inventing a second mental ruleset.

## 5. Exposure-route matrix

| Species | Primary route | Required distinction |
|---|---|---|
| Jigglypuff | audible song | hearing/exposure, not proximity mind control |
| Venonat | toxin-bearing body contact | contact/handling, not inherited airborne cloud |
| Venomoth | dispersed toxic scales/powder | airborne/environmental exposure, not contact-only |
| Psyduck | headache/distress-triggered manifestation | involuntary bounded psychic event, not random spell table |
| Drowzee | sleeping/dreaming target | subjective dream access, not waking mind reading |
| Hypno | pendulum attention / eye contact | hypnosis/drowsiness, not arbitrary command |

```text
exposure_route_equals_consequence == false
avoid_exposure_check_equals_post_exposure_resistance == false
physical_toxin_requires_Will == false
all_Poison_type_species_share_delivery_route == false
```

## 6. Evolution-stage inheritance regression

```text
Jigglypuff_sleep_song_auto_inherited_by_Wigglytuff == false
Wigglytuff_inflation_body_impact_stage_local == true

Venonat_contact_toxin_auto_becomes_Venomoth_contact_only == false
Venomoth_dispersed_scale_cloud_stage_local == true

Psyduck_headache_manifestation_auto_inherited_by_Golduck == false
Golduck_rough_water_swimming_stage_local == true

Drowzee_dream_sensing_equals_Hypno_unrestricted_mind_reading == false
Hypno_pendulum_hypnosis_stage_local == true
```

Family relationship remains useful context, but each material capability or hazard is authored at the stage actually supported by evidence.

## 7. Psyduck involuntary-power boundary

```text
headache_triggered_manifestation == present
manifestation_can_be_involuntary == true
post_episode_Psyduck_memory_gap == supported
random_psychic_catastrophe_table == false
automatic_target_amnesia == false
pain_farming_for_repeatable_power == false
```

The dossier preserves observable trigger/warning state while requiring any actual manifestation to be bounded by authored event capability.

## 8. Golduck traversal boundary

```text
rough_water_swimming_permission == true
high_wave_traversal_permission == true
species_Speed_equals_Swim == false
human_follows_Golduck_equals_safe_route == false
forehead_glow_equals_navigation_system == false
```

Golduck proves that a route permission can be stronger than what the normalized Speed axis alone expresses without adding a seventh Pokémon movement stat.

## 9. Companionship state

Frozen schema classifications:

```text
Jigglypuff eligible
Wigglytuff eligible
Venonat    eligible
Venomoth   eligible
Psyduck    eligible
Golduck    eligible
Drowzee    eligible
Hypno      eligible
```

`eligible` does not mean common or easy. Every dossier requires voluntary persistent trust and preserves species-specific safety/logistics boundaries. None use defeat/capture, portable storage, coercive psychic control or automatic resource ownership as recruitment.

## 10. Completion state

```text
full_schema_dossier_count == 8
dossier_status_complete_count == 8
required_section_count_per_dossier == 20
manual_stat_exception_count == 0
blocking_human_design_gate_count == 0
```

No Batch 09 dossier introduces a blocking Human Design Gate. The batch is ready for completion audit and atomic manifest promotion validation.
