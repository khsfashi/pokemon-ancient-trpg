# P4 Batch 09 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_09_MIND_STATE_AGENCY_HAZARDS_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`, `docs/P3_RARE_PSYCHIC_GIFT_CONTRACT.md`

## 1. Review rule

Batch 09 keeps the established evidence boundary:

- current official Pokémon Pokédex material is C1 evidence for identity, typing, explicit behavior, exposure route and species capability;
- `SRC-DATA-001` is the pinned normalization input for raw six stats plus modern type/ability/evolution/move context;
- modern move/ability records may confirm that a capability family exists, but battle accuracy, power, turn count, status duration and other modern formulas are not copied into the TRPG;
- conservative implications are D1;
- exact ancient locality, culture, encounter placement, remedies and social practice are D2;
- a source-backed sleep, dream, hypnosis, toxin or psychic phenomenon does not automatically prove unrestricted control of another character's choices;
- evolution-family facts remain stage-local unless evidence supports carrying them across stages.

Pinned structured source revision:

```text
PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

No blocking Human Design Gate is exposed. Existing player-agency, pressure, injury and species-local hazard contracts are sufficient.

## 2. Source registry

| Ref | Source | Primary use |
|---|---|---|
| `OFFICIAL-DEX-JIGGLYPUFF-PH` | `https://ph.portal-pokemon.com/play/pokedex/0039` | song-induced sleep/drowsiness, Normal/Fairy identity |
| `OFFICIAL-DEX-WIGGLYTUFF-PH` | `https://ph.portal-pokemon.com/play/pokedex/0040` | inflation/body impact, fur, evolution-stage boundary |
| `OFFICIAL-DEX-VENONAT-PH` | `https://ph.portal-pokemon.com/play/pokedex/0048` | body-oozing poison, nocturnal eye sensing |
| `OFFICIAL-DEX-VENOMOTH-SG` | `https://sg.portal-pokemon.com/play/pokedex/0049` | wing-scale toxic dust and dispersed powder exposure |
| `OFFICIAL-DEX-PSYDUCK-SG` | `https://sg.portal-pokemon.com/play/pokedex/0054` | headache-triggered involuntary power, memory gap |
| `OFFICIAL-DEX-GOLDUCK-SG` | `https://sg.portal-pokemon.com/play/pokedex/0055` | webbed-limb swimming and rough-sea traversal |
| `OFFICIAL-DEX-DROWZEE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0096` | dream consumption, dream-location/content sensing |
| `OFFICIAL-DEX-HYPNO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0097` | eye-contact Hypnosis context, pendulum-induced drowsiness |
| `SRC-DATA-001` | `PokeAPI/api-data@2cda0b56a3a8ad2529d8aac73528225f96d2c848` | raw six stats, types, abilities and modern family/move context |

Long flavor text is not copied. Claims below are paraphrased and version-scoped.

## 3. Canonical stat/rating audit

Pinned `p4-six-axis-v1`:

```text
raw <40     => 1
40..59      => 2
60..79      => 3
80..99      => 4
100..119    => 5
>=120       => 6
```

| Dex | Species | HP | Atk | Def | SpA | SpD | Spe | V/F/G/P/R/S |
|---:|---|---:|---:|---:|---:|---:|---:|---|
| #039 | Jigglypuff | 115 | 45 | 20 | 45 | 25 | 20 | `5/2/1/2/1/1` |
| #040 | Wigglytuff | 140 | 70 | 45 | 85 | 50 | 45 | `6/3/2/4/2/2` |
| #048 | Venonat | 60 | 55 | 50 | 40 | 55 | 45 | `3/2/2/2/2/2` |
| #049 | Venomoth | 70 | 65 | 60 | 90 | 75 | 90 | `3/3/3/4/3/4` |
| #054 | Psyduck | 50 | 52 | 48 | 65 | 50 | 55 | `2/2/2/3/2/2` |
| #055 | Golduck | 80 | 82 | 78 | 95 | 80 | 85 | `4/4/3/4/4/4` |
| #096 | Drowzee | 60 | 48 | 45 | 43 | 90 | 42 | `3/2/2/2/4/2` |
| #097 | Hypno | 85 | 73 | 70 | 73 | 115 | 67 | `4/3/3/3/5/3` |

No manual rating exception is required.

Important domain separation:

```text
Jigglypuff_Vigor_5 != sleep_resistance_or_sleep_severity
Hypno_Resistance_5 != universal_mind_control
Venomoth_Potency_4 != generic_Poison_type_powder_rule
Psyduck_Potency_3 != random_psychic_explosion_table
Golduck_Speed_4 != Swim_stat_or_rough_water_formula
dream_access != waking_memory_access
hazard_delivery != hazard_consequence
```

## 4. Mind-state semantic boundary

Batch 09 requires three different mind-state concepts to remain separate.

### Drowsiness

Drowsiness is a warning/exposure state or pressure signal. It can reduce safe action options or indicate that continued exposure may lead to sleep, but it does not itself authorize the engine to choose a character's actions.

### Induced sleep

Source-backed induced sleep may make ordinary conscious action temporarily unavailable. This is not merely renamed Fear/Fatigue when the fiction says the subject actually falls asleep. Recovery timing and check windows belong to P5 encounter authoring under the existing injury/pressure architecture rather than a new universal mental-status subsystem.

### Hypnosis / psychic mental pressure

Hypnosis evidence supports a species-specific exposure and effect family. It does **not** by itself prove arbitrary commands, long-duration domination, personality rewriting, waking-memory theft, automatic truth detection or unrestricted remote control.

```text
drowsiness_equals_sleep == false
sleep_equals_fear == false
sleep_equals_fatigue == false
hypnosis_equals_command_permission == false
mental_pressure_may_use_Will == true
Will_is_universal_immunity == false
```

## 5. Jigglypuff / Wigglytuff evidence packet

### Jigglypuff — C1

- Jigglypuff is Normal/Fairy;
- current official material describes its soothing song as lulling opponents to sleep;
- another current entry states that its prolonged lullaby can make an audience drowsy;
- the exposure is therefore auditory and song-dependent rather than generic proximity mind control.

Narrow conclusion:

```text
jigglypuff_auditory_sleep_capability == true
sound_or_song_exposure_required == true
drowsiness_warning_semantics_supported == true
arbitrary_command_after_sleep == false
unrestricted_psychic_mind_control == false
sleep_severity_derived_from_Potency == false
```

Required authoring record: `jigglypuff-lullaby-sleep` with explicit hearing/song exposure, warning signs, interruption/avoidance counterplay and an induced-sleep consequence ceiling independent of six-axis rating.

### Wigglytuff — C1

- Wigglytuff is Normal/Fairy;
- current official material emphasizes exceptionally fine fur;
- when angered it can inflate its body and strike with a body impact;
- the reviewed current entries do not repeat Jigglypuff's sleep-song claim.

Narrow conclusion:

```text
wigglytuff_inflation_body_impact_supported == true
wigglytuff_fur_fact_supported == true
jigglypuff_sleep_claim_auto_inherited == false
shared_family_sleep_hazard_required == false
modern_move_context_may_inform_capability_but_not_override_stage_local_dex_evidence == true
```

Wigglytuff is the batch's evolution-inheritance control. Full authoring must not clone every Jigglypuff hazard into the evolved stage merely because the species share a family.

## 6. Venonat / Venomoth evidence packet

### Venonat — C1

- Venonat is Bug/Poison;
- current official material states that poison oozes from all over its body;
- it is active catching small bug Pokémon at night;
- its eyes function as radar-like sensing in darkness and can also emit powerful beams in the reviewed material.

Conservative boundary:

```text
body_surface_toxin_source_supported == true
contact_handling_exposure_is_conservative_D1 == true
airborne_cloud_from_Venonat_body == false
eye_radar_equals_human_radar_technology == false
night_sensing_capability_supported == true
```

Required authoring record: `venonat-body-contact-toxin`. Exposure should be framed around touching/handling toxin-bearing body surfaces or contamination supported by the scene; exact dose, duration and medical formula remain unproven.

### Venomoth — C1

- Venomoth is Bug/Poison;
- current official material describes dustlike scales covering its wings;
- wing movement releases highly toxic dust;
- another current entry describes attacks that scatter poisonous powder broadly around it.

Narrow conclusion:

```text
wing_scale_toxic_dust_supported == true
dispersed_airborne_environmental_exposure_supported == true
body_contact_is_not_the_only_route == true
persistent_cloud_duration == unknown
all_Poison_type_species_share_powder_rule == false
```

Required authoring record: `venomoth-toxic-scale-cloud` with airborne/dispersed exposure, visible wing/powder warnings, positioning/cover/airflow/protective-equipment hooks where context supports them, and consequence severity separate from Potency.

The pair deliberately preserves different delivery routes:

```text
Venonat_primary_review_route = body_surface_contact
Venomoth_primary_review_route = dispersed_toxic_scale_or_powder
```

## 7. Psyduck / Golduck evidence packet

### Psyduck — C1

- Psyduck is Water type;
- it suffers persistent headaches;
- severe headache episodes are linked to mysterious/latent power manifestation;
- current official material states that it may not remember an episode afterward;
- the Hisui-context entry explicitly frames the latent-power eruption as contrary to Psyduck's own intent.

Narrow conclusion:

```text
headache_triggered_psychic_manifestation_supported == true
manifestation_can_be_involuntary == true
post_episode_memory_gap_supported == true
Psyduck_deliberately_chooses_every_manifestation == false
unbounded_random_effect_table_supported == false
headache_is_permission_to_roll_random_catastrophe == false
```

Required authoring record: `psyduck-involuntary-psychic-manifestation`. It needs a headache/distress trigger, observable warning signs and bounded event-authored effects. The source establishes involuntariness, not a license to invent arbitrary psychic outcomes.

### Golduck — C1

- Golduck is Water type;
- current official material describes long webbed limbs used for full-speed swimming;
- its strong body and webbed hands/feet let it cross rough seas and high waves;
- forehead glow during full-speed swimming is described, but no technology or psychic-navigation system follows from that fact.

Narrow conclusion:

```text
strong_rough_water_swimming_supported == true
aquatic_route_permission_supported == true
rough_water_permission_equals_Speed_formula == false
forehead_glow_equals_navigation_beacon_system == false
Golduck_psychic_identity_inferred_from_Psyduck_family == false
```

Golduck's main Batch 09 contribution is a utility/traversal permission, not a mental hazard. Full authoring should expose dangerous-water route access as a capability while keeping human drowning/environment checks and companion voluntariness intact.

## 8. Drowzee / Hypno evidence packet

### Drowzee — C1

- Drowzee is Psychic type;
- current official material states that it remembers dreams it has eaten;
- it can identify where someone is sleeping and what that person is dreaming about through its nose-based sensing behavior;
- the reviewed evidence is specifically tied to sleep/dream state.

Narrow conclusion:

```text
dream_consumption_supported == true
dream_content_sensing_supported == true
sleeping_target_location_sensing_supported == true
waking_thought_reading_supported == false
objective_truth_from_dream_supported == false
waking_memory_theft_supported == false
hidden_game_state_inspection_supported == false
```

Required authoring records/capabilities: `drowzee-dream-sensing` and `drowzee-dream-consumption-boundary`. Dream information can reveal subjective dream content when the target is sleeping; it cannot silently become omniscient investigation.

### Hypno — C1

- Hypno is Psychic type;
- current official material states that it can lock eyes with an enemy and then use psychic moves including Hypnosis and Confusion;
- its pendulum's steady rhythm can cause drowsiness in nearby people or Pokémon;
- these are gaze/attention/proximity exposure cues, not proof of arbitrary command authority.

Narrow conclusion:

```text
eye_contact_hypnosis_context_supported == true
pendulum_rhythm_drowsiness_supported == true
nearby_exposure_supported_for_drowsiness == true
arbitrary_command_compulsion_supported == false
persistent_personality_rewrite_supported == false
waking_memory_theft_supported == false
```

Required authoring record: `hypno-pendulum-hypnosis` distinguishing visible pendulum/rhythm drowsiness from stronger hypnosis resolution. Breaking gaze/attention, leaving effective proximity or otherwise interrupting exposure are legitimate counterplay concepts; exact ranges and durations remain encounter-authored.

## 9. Evolution-family inheritance review

The four pairs are reviewed stage by stage.

```text
Jigglypuff -> Wigglytuff:
  sleep_song_auto_inheritance = false
  Wigglytuff_body_inflation_impact = stage_local_supported

Venonat -> Venomoth:
  poison_identity_shared = true
  primary_delivery_route_auto_shared = false
  Venonat_contact_vs_Venomoth_dispersed = preserve

Psyduck -> Golduck:
  Water_identity_shared = true
  Psyduck_headache_involuntary_manifestation_auto_shared = false
  Golduck_rough_water_swimming = stage_local_supported

Drowzee -> Hypno:
  Psychic_identity_shared = true
  dream_related_family_context = relevant
  exact_dream_sensing_and_hypnosis_routes = stage_local_authoring_required
```

Later-generation relatives do not expand the mandatory P4 roster.

## 10. Resistance / counterplay ownership

Batch 09 does not create one resistance roll for all eight species.

- hostile psychic pressure or hypnosis can use **Will** where an active human resistance check is appropriate under P3;
- auditory sleep exposure may be avoided or interrupted through hearing protection, distance, silence/interruption, positioning or event-specific checks before a Will test is even relevant;
- physical toxin or respiratory exposure may instead depend on **Endurance**, equipment, distance, airflow, contact avoidance and medical/recovery state;
- dream access requires a sleeping/dreaming target and cannot target arbitrary waking knowledge;
- Golduck traversal is permission/capability and does not require a mental resistance subsystem.

```text
one_universal_mental_save == false
one_universal_status_track == false
one_universal_toxin_save == false
exposure_prevention_and_post_exposure_consequence_are_separate == true
```

## 11. Baseline-era presence conclusion

No reviewed source requires any of these eight original species to be artificially created or absent from the ancient baseline.

Therefore baseline presence remains `plausible-derived`, while exact ancient future-Kanto locality is D2.

```text
chronology_anomaly_required == false
opening_locality_presence_required == false
total_game_direct_encounterability_required_by_D034 == true
```

## 12. Required full-schema records

Full-schema authoring must include at least:

- `jigglypuff-lullaby-sleep` — auditory drowsiness/induced-sleep exposure without command control;
- Wigglytuff stage-local inflation/body-impact capability and an explicit non-inheritance note for Jigglypuff's reviewed sleep claim;
- `venonat-body-contact-toxin` — body-surface toxin/contact exposure;
- `venomoth-toxic-scale-cloud` — dispersed toxic-scale/powder exposure;
- `psyduck-involuntary-psychic-manifestation` — headache/distress-triggered bounded manifestation;
- Golduck rough-water swimming route permission separate from Speed;
- `drowzee-dream-sensing` — sleep-state dream location/content access without waking mind reading;
- `drowzee-dream-consumption-boundary` — dream consumption without invented memory theft or truth extraction;
- `hypno-pendulum-hypnosis` — visible gaze/pendulum exposure with drowsiness/hypnosis boundary and no arbitrary command permission.

## 13. Cross-system contradiction review

```text
portable_containment_assumed == false
capture_equals_companionship == false
visible_companion_slots == 3
kill_XP_created == false
generic_mental_status_subsystem_created == false
generic_mind_control_rule_created == false
silent_player_action_rewriting_created == false
generic_dream_mind_reading_created == false
generic_Poison_type_exposure_rule_created == false
Will_as_universal_immunity_created == false
Speed_to_Swim_formula_created == false
hazard_severity_capped_by_six_axis == false
stage_local_evolution_facts_preserved == true
later_generation_relatives_expand_mandatory_roster == false
blocking_human_design_gate_count == 0
```

Result: **PASS**.

## 14. Source-review outcome

```text
species_reviewed == 8
source_review == PASS
rating_profiles_reproducible == 8
manual_rating_exception_count == 0
mind_state_semantic_boundary == PASS
player_agency_boundary == PASS
exposure_route_separation == PASS
involuntary_psychic_manifestation_boundary == PASS
dream_information_boundary == PASS
aquatic_route_permission_boundary == PASS
evolution_stage_inheritance_review == PASS
blocking_human_design_gate_count == 0
```

Batch 09 is ready for full-schema authoring. The coverage manifest remains unchanged until all eight dossiers and the Batch 09 completion audit pass.
