# P4 Batch 16 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_16_FOLKLORE_SUPERNATURAL_HUMANOID_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 16 reviews six species selected to stress the boundary between demonstrable Pokémon capability, observer interpretation, folklore, analogy and modern system metadata before any coverage-manifest promotion:

- #035 Clefairy / #036 Clefable
- #037 Vulpix / #038 Ninetales
- #122 Mr. Mime
- #124 Jynx

The review confirms that the project can retain strange and genuinely supernatural-looking Pokémon phenomena without flattening every Pokédex sentence into equally certain narrator truth or introducing a generic magic, moon, magnetism, curse, telepathy, barrier-construction, humanoid-civilization or language subsystem.

```text
legend_or_saying_equals_objective_system_truth == false
scientist_interpretation_equals_direct_observation == false
appearance_analogy_equals_social_identity == false
modern_type_or_ability_label_equals_ancient_terminology == false
species_local_strange_capability_equals_generic_magic_permission == false
sensory_or_behavioral_influence_equals_player_agency_removal == false
humanoid_shape_equals_human_personhood_or_profession == false
```

The safe representation is claim-level and epistemically explicit: preserve what was observed, what was measured, what was inferred, what was believed, which historical version supplied stronger wording, and what the project itself extrapolates.

## 2. Source and epistemic-provenance rule

Existing P4 provenance classes remain authoritative:

- **C1** — direct official Pokémon Pokédex/species fact;
- **C2** — cross-source official synthesis;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as franchise canon;
- **U1** — unresolved detail deliberately left unknown.

Batch 16 additionally records the **form of a C1/C2 claim** where it materially changes certainty:

- `OBSERVED` — source presents an event/body feature/behavior as occurring;
- `MEASURED` — source supplies a distance, duration, count or other measurement;
- `SCIENTIST_INTERPRETATION` — source explicitly attributes a causal/evolutionary explanation to scientists/researchers;
- `LEGEND_OR_HEARSAY` — source uses legend, rumor, saying, reputation or equivalent attribution;
- `ANALOGY` — source compares appearance/behavior/sound to something without identity equivalence;
- `VERSION_SCOPED_EXTRAORDINARY` — a historical entry makes a stronger extraordinary claim that must remain version-tagged;
- `CROSS_SOURCE_SYNTHESIS` — multiple official statements support a bounded common minimum while differing on explanation;
- `PROJECT_EXTRAPOLATION` — ancient-world content authored by this project and never represented as source fact.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

`SRC-DATA-001` is used for deterministic raw stats, types, abilities, evolution-family metadata and version-tagged Pokédex evidence. Structured data is an evidence carrier, not an independent franchise-canon authority. Current official Pokémon Pokédex pages are the primary current text cross-check.

Official Pokédex source registry, rechecked 2026-08-16:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-CLEFAIRY-SG` | Clefairy | `https://sg.portal-pokemon.com/play/pokedex/0035` |
| `OFFICIAL-DEX-CLEFABLE-SG` | Clefable | `https://sg.portal-pokemon.com/play/pokedex/0036` |
| `OFFICIAL-DEX-VULPIX-SG` | Vulpix | `https://sg.portal-pokemon.com/play/pokedex/0037` |
| `OFFICIAL-DEX-NINETALES-SG` | Ninetales | `https://sg.portal-pokemon.com/play/pokedex/0038` |
| `OFFICIAL-DEX-MR-MIME-PH` | Mr. Mime | `https://ph.portal-pokemon.com/play/pokedex/0122` |
| `OFFICIAL-DEX-JYNX-SG` | Jynx | `https://sg.portal-pokemon.com/play/pokedex/0124` |

When historical entries disagree on mechanism or strength, full-schema authoring must retain the disagreement instead of constructing a synthetic universal law.

## 3. Deterministic stat / rating audit

`p4-six-axis-v1` remains unchanged:

```text
raw <40     => 1
40..59      => 2
60..79      => 3
80..99      => 4
100..119    => 5
>=120       => 6
```

| Species | Raw HP/Atk/Def/SpA/SpD/Spe | Vigor/Force/Guard/Potency/Resistance/Speed |
|---|---|---|
| Clefairy | 70/45/48/60/65/35 | 3/2/2/3/3/1 |
| Clefable | 95/70/73/95/90/60 | 4/3/3/4/4/3 |
| Vulpix | 38/41/40/50/65/65 | 1/2/2/2/3/3 |
| Ninetales | 73/76/75/81/100/100 | 3/3/3/4/5/5 |
| Mr. Mime | 40/45/65/100/120/90 | 2/2/3/5/6/4 |
| Jynx | 65/50/35/115/95/95 | 3/2/1/5/4/4 |

```text
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
```

This batch is a direct regression against literal stat interpretation:

- Clefairy's normalized `Speed 1` does not forbid source-backed floating or historical versioned flight wording.
- Clefable's hearing distance is a sensory capability and is not derived from `Speed`, `Potency` or `Resistance`.
- Ninetales folklore, curse wording and historical mind-control wording do not derive from `Potency 4` or `Resistance 5`.
- Mr. Mime's `Resistance 6` does not make every invisible barrier indestructible or permanently persistent.
- Jynx's rhythmic influence wording is not an automatic contest result derived from `Potency 5`.

Six-axis ratings remain compact species baselines. Capability, hazard severity, information quality, sensory range and extraordinary source claims remain separate channels.

## 4. Evolution and modern-mechanic metadata boundary

Pinned/current metadata records the modern family relationships:

```text
Cleffa        -> Clefairy   [post-Generation-I pre-evolution context]
Clefairy      -> Clefable   Moon Stone metadata

Vulpix        -> Ninetales  Fire Stone metadata

Mime Jr.      -> Mr. Mime   [post-Generation-I pre-evolution context]
Smoochum      -> Jynx       [post-Generation-I pre-evolution context]
```

Under D-032, Moon Stone/Fire Stone relationships are source metadata, not proof of standardized ancient items, shops, guaranteed inventory availability, menu-triggered evolution or a region-wide evolution-stone economy. Cleffa, Mime Jr. and Smoochum remain later-generation provenance context and do not expand the mandatory Gen-I 151 dossier roster.

Modern regional forms are likewise context only:

- Alolan Vulpix / Ninetales;
- Galarian Mr. Mime and Mr. Rime lineage context.

They do not establish ancient proto-Kanto migration, Ice/Fairy ecology, Mr. Rime presence or a form-switching mechanic.

Pinned modern ability metadata remains context rather than literal ancient formulas:

- Clefairy: `Cute Charm`, `Magic Guard`; hidden `Friend Guard`;
- Clefable: `Cute Charm`, `Magic Guard`; hidden `Unaware`;
- Vulpix / Ninetales: `Flash Fire`; hidden `Drought`;
- Mr. Mime: `Soundproof`, `Filter`; hidden `Technician`;
- Jynx: `Oblivious`, `Forewarn`; hidden `Dry Skin`.

```text
Cute_Charm_equals_automatic_infatuation_or_agency_loss == false
Magic_Guard_equals_world_hazard_immunity == false
Drought_equals_permanent_weather_or_map_climate_control == false
Flash_Fire_equals_fixed_ancient_absorption_percentage == false
Soundproof_equals_total_diegetic_deafness == false
Filter_equals_universal_damage_formula == false
Forewarn_equals_mind_reading_or_full_enemy_action_reveal == false
Dry_Skin_equals_real_world_skin_or_water_formula == false
```

Modern Fairy typing for Clefairy/Clefable/Mr. Mime and modern move/ability labels remain provenance context rather than ancient terminology or proof of a shared magic organ/system.

## 5. #035 Clefairy evidence packet

### C1/C2 facts retained

Current official material supplies three distinct phenomena:

- `OBSERVED`: Clefairy gather on full-moon nights and dance;
- `OBSERVED`: bathing in moonlight is associated with floating;
- `OBSERVED`: another current entry says a gathering is surrounded by an abnormal magnetic field;
- `OBSERVED / ANATOMY`: tiny faintly glowing wings are visible.

Historical/version-tagged evidence adds important epistemic distinctions:

- Red/Blue: Clefairy is rare and described with magical/cute appeal; `magical` here is descriptive reputation rather than a defined system term;
- Gold/HeartGold: moonlight stored in the wings is presented as the apparent reason it can float, making the causal explanation weaker than the observed floating itself;
- Crystal: it becomes easier to spot for some reason on full-moon nights, without a mechanism claim;
- Ruby/Sapphire/Emerald: groups play on full-moon nights and later retreat to quiet mountain locations;
- Pearl: stronger version-scoped wording describes flying with its wings to collect moonlight;
- Platinum and later reused text: seeing a full-moon gathering is said to bring happiness, clearly folklore/reputation rather than a guaranteed status effect.

### D1 boundaries

```text
clefairy_full_moon_gathering == source_backed
clefairy_moonlight_associated_floating == source_backed
clefairy_abnormal_magnetic_field_at_gathering == source_backed
clefairy_small_faintly_glowing_wings == source_backed
moonlight_storage_as_exact_float_mechanism == source_attributed_apparent_explanation
clefairy_stronger_flight_wording == version_scoped_source_backed
seeing_gathering_brings_happiness == legend_or_saying_not_system_fact
full_moon_gathering_equals_guaranteed_monthly_spawn == false
full_moon_equals_species_stat_buff == false
floating_equals_unrestricted_flight_or_passenger_transport == false
floating_equals_fall_immunity == false
magnetic_field_equals_continuous_electromagnetic_simulation == false
magnetic_field_equals_automatic_compass_or_equipment_failure == false
Fairy_type_equals_lunar_magic_permission == false
```

The stable minimum is that Clefairy can participate in unusual full-moon gathering/floating phenomena and that an abnormal magnetic field has been observed around at least some gatherings. Exact field range, duration, causal chain and effects on equipment remain unresolved unless an authored event explicitly supplies them.

### U1 unresolved

```text
clefairy_exact_float_altitude_duration_and_control == unresolved
clefairy_exact_magnetic_field_range_strength_and_effects == unresolved
clefairy_moonlight_storage_physiology == unresolved
clefairy_flight_vs_float_capability_boundary == version_scoped_not_universalized
clefairy_full_moon_gathering_frequency_by_population == unresolved
```

## 6. #036 Clefable evidence packet

### C1/C2 facts retained

Current official material preserves three different evidence forms:

- `LEGEND_OR_HEARSAY / HABITAT`: it is said to live in quiet remote mountains and strongly avoids being seen;
- `MEASURED`: it can hear a pin-like sound from roughly 1,100 yards away;
- `LEGEND_OR_HEARSAY`: on clear quiet nights, legend says it listens for kin living on the moon.

Historical evidence broadens the observed-behavior side without proving the moon-origin tradition:

- Red/Blue/LeafGreen: a timid Clefable hides when it senses people;
- Gold/Silver and later reuse: acute hearing and preference for quiet places;
- Ruby/Sapphire/Emerald: light skipping aided by its wings can let it cross water on quiet moonlit nights;
- FireRed and several later versions: long-distance pin-drop hearing receives a concrete distance claim;
- Diamond: deserted-lake/full-moon attraction is itself phrased as something said about the species.

### D1 boundaries

```text
clefable_extreme_hearing == source_backed
clefable_human_avoidance_or_wariness == source_backed
clefable_light_skipping_and_water_surface_travel == version_scoped_source_backed
clefable_moon_kin == legend_or_hearsay
hearing_distance_equals_omniscient_detection == false
hearing_distance_equals_wall_penetration_or_perfect_localization == false
hearing_distance_equals_automatic_initiative_or_stealth_failure == false
human_avoidance_equals_invisibility_or_impossible_tracking == false
water_surface_travel_equals_generic_swimming_or_flight_permission == false
moon_kin_legend_equals_confirmed_extraterrestrial_origin == false
moon_kin_legend_equals_space_travel_or_moon_location_requirement == false
```

Ancient communities may hold moon-origin traditions as D2 local beliefs because official canon supports the existence of such a legend. The project must label those beliefs as beliefs unless a later source/owner decision explicitly establishes stronger narrator truth.

### U1 unresolved

```text
clefable_exact_hearing_occlusion_limits == unresolved
clefable_exact_water_surface_travel_duration_and_conditions == unresolved
clefable_moon_kin_legend_literal_truth == intentionally_unresolved
clefable_baseline_proto_kanto_abundance == unresolved
```

## 7. #037 Vulpix evidence packet

### C1/C2 facts retained

Current official material supports three clean capability/biology channels:

- `OBSERVED / MATURATION`: a young Vulpix begins with one white tail and the tail splits into six as it matures;
- `OBSERVED / PHYSIOLOGY`: a fire burns in its belly and it expels fireballs;
- `OBSERVED / BEHAVIOR`: against a stronger enemy it may feign injury and escape.

Historical/version-tagged material must not be flattened because tail-count wording varies:

- Red/Blue/LeafGreen and Gold/HeartGold strongly support one tail at birth/development followed by splitting into six;
- Silver/SoulSilver supports feigned injury against a stronger opponent;
- Ruby ties the one-to-six tail change to receiving plenty of love from a trainer, which is a version-specific causal/social statement and not evidence that ancient trainer culture is required;
- Sapphire describes an internal flame that does not go out and heat-regulation fire release in hot daytime conditions;
- Emerald describes fire-orb control and tails becoming hot immediately before evolution;
- FireRed and Diamond/Pearl/Platinum contain stronger/inconsistent wording in which already-six tails gain or split into additional tails as it grows.

The current official portal returns to the one-tail-to-six ordinary maturation model. Full-schema authoring should preserve the historical inconsistency rather than inventing a hidden multi-tail progression system.

### D1 boundaries

```text
vulpix_one_tail_to_six_ordinary_maturation == current_and_multi_version_source_backed
vulpix_belly_fire_and_fireball_expulsion == source_backed
vulpix_feigned_injury_escape_behavior == source_backed
vulpix_heat_regulation_fire_release == version_scoped_source_backed
vulpix_pre_evolution_tail_heat == version_scoped_source_backed
six_tails_splitting_into_more_before_evolution == conflicting_version_scoped_wording
ordinary_tail_maturation_equals_evolution == false
ordinary_tail_maturation_equals_level_up_or_kill_XP == false
trainer_love_wording_equals_required_ancient_domestication == false
feigned_injury_equals_guaranteed_deception_or_escape == false
belly_fire_equals_generic_Fire_type_organ_model == false
Flash_Fire_equals_ancient_absorption_formula == false
```

Vulpix is an important D-032 regression: visible biological maturation happens inside one species stage and must not be represented as a separate evolution, hidden level threshold or player-issued transform command.

### U1 unresolved

```text
vulpix_exact_age_or_time_for_tail_split == unresolved
vulpix_exact_tail_split_sequence_between_one_and_six == unresolved
vulpix_conflicting_extra_tail_wording_literal_scope == unresolved_and_not_systematized
vulpix_exact_internal_fire_temperature_or_fuel == unresolved
vulpix_exact_feint_success_conditions == unresolved
```

## 8. #038 Ninetales evidence packet

### C1/C2 facts retained

Current official material is intentionally folklore-heavy:

- `LEGEND_OR_HEARSAY`: some legends claim each of the nine tails has a distinct mystical power;
- `OBSERVED / ANATOMY`: it has nine long tails and golden-glinting fur;
- `LEGEND_OR_HEARSAY`: it is said to live for about a millennium and to store sacred power in its tails.

Historical entries include much stronger wording and must remain version-scoped:

- Red/Blue/LeafGreen: the species is described as highly intelligent/vengeful and touching or grabbing a tail could bring a thousand-year curse;
- Yellow: an enduring legend says nine noble beings were united/reincarnated as Ninetales;
- Gold/Crystal: mystical/supernatural power is attributed to the nine tails, often explicitly through legend or saying language;
- Silver/SoulSilver: wondrous tail energy is linked to thousand-year longevity;
- Ruby: sinister eye-light is described as gaining total control over a foe's mind, while the lifespan remains something said about the species;
- Sapphire: the nine-wizard origin is explicitly legendary, while the same entry separately describes high intelligence and understanding human speech;
- Emerald and later entries repeat enchanted-tail and long-life traditions with varying certainty.

### D1 boundaries

```text
ninetales_nine_tails == source_backed_anatomy
ninetales_high_intelligence_or_vengeful_behavior == version_scoped_source_backed
ninetales_mystical_tail_power == primarily_legend_or_hearsay_with_version_variation
ninetales_thousand_year_lifespan == source_scoped_claim_with_mixed_certainty
ninetales_tail_touch_curse == version_scoped_extraordinary_claim
ninetales_eye_based_total_mind_control == version_scoped_extraordinary_claim
ninetales_understands_human_speech == version_scoped_source_backed
nine_tails_equals_nine_entities_turns_health_pools_or_minds == false
nine_tails_equals_nine_guaranteed_discrete_powers == false
curse_wording_equals_unavoidable_permanent_debuff_or_generic_spell == false
mind_control_wording_equals_automatic_player_input_suppression == false
understands_human_speech_equals_speaks_fluent_human_language == false
thousand_year_claim_equals_exact_age_detection_or_immortality == false
long_life_equals_automatic_ancient_memory_access == false
```

The Ruby mind-control statement cannot be ignored, but neither should it override P3 agency rules. Full-schema authoring may record **high-severity mental influence/control as version-scoped extraordinary capability evidence** and require explicit telegraphing, eligibility, resistance/counterplay and consequence handling whenever a later event uses it. It must not become a passive aura or automatic player-command removal.

Similarly, the curse tradition is usable setting evidence for taboos, fear and exceptional authored consequences without establishing a generic curse spell list or universal morality system.

### U1 unresolved

```text
ninetales_mystical_tail_claim_literal_truth_and_distribution == intentionally_unresolved
ninetales_exact_lifespan_distribution == unresolved
ninetales_curse_trigger_mechanism_duration_and_scope == unresolved
ninetales_mind_control_conditions_duration_and_resistance == unresolved
ninetales_human_speech_understanding_population_frequency == unresolved
```

## 9. #122 Mr. Mime evidence packet

### C1/C2 facts retained

Current official material deliberately mixes interpretation and direct capability:

- `SCIENTIST_INTERPRETATION`: many scientists believe its broad palms became enlarged specifically for pantomime;
- `OBSERVED / BEHAVIOR`: it is highly skilled at pantomime-like behavior;
- `OBSERVED / CAPABILITY`: force/aura emitted from its fingers creates invisible walls capable of protection;
- `ANALOGY`: clown-like or mime-like description concerns appearance/behavior, not human occupation.

Historical evidence provides multiple explanatory models:

- Red/Blue: interruption during miming can trigger broad-handed retaliation;
- Yellow: pantomime can make enemies believe a nonexistent object is present;
- Gold: invisible-object capability is described as developing with maturation;
- Silver/Crystal: fingertip force hardens/solidifies air into an actual invisible wall;
- Ruby/Sapphire/Emerald: once an unseen mimed object is believed, it is described as becoming real;
- FireRed: wall creation by miming is phrased as something said about the species;
- Diamond/Pearl: invisible solid walls and fingertip emanations are directly described;
- Platinum and reused later text: fingertip vibration/air-molecule wording gives a more mechanistic explanation for wall formation.

These statements agree on a stable minimum — **Mr. Mime can produce genuinely resisting invisible barriers** — while differing on whether pantomime belief, fingertip force, air solidification or a molecule-level explanation describes the mechanism.

### D1 boundaries

```text
mr_mime_pantomime_behavior == source_backed
mr_mime_real_invisible_barrier_capability == cross_source_source_backed
mr_mime_enlarged_palms_for_pantomime == scientist_interpretation_not_direct_fact
mr_mime_belief_makes_object_real == version_scoped_explanatory_wording
mr_mime_air_solidification_or_molecule_stop == version_scoped_explanatory_wording
stable_minimum_real_invisible_barrier == source_backed
pantomime_equals_human_profession_or_civilization_role == false
invisible_barrier_equals_permanent_map_geometry == false
invisible_barrier_equals_indestructible_wall == false
invisible_barrier_equals_arbitrary_object_creation_or_reality_editing == false
barrier_invisibility_equals_unavoidable_collision_or_information_denial == false
molecule_wording_equals_continuous_physics_simulation == false
Psychic_or_Fairy_type_equals_generic_barrier_permission == false
```

Where an invisible barrier matters to play, a later event must author discoverability/counterplay: prior gestures, dust/rain/contact cues, probing, specialist knowledge, collision feedback, duration/state change or another fair signal. The dossier should authorize barrier creation without forcing a persistent voxel/map-edit architecture.

### U1 unresolved

```text
mr_mime_barrier_exact_size_shape_duration_and_count == unresolved
mr_mime_barrier_exact_force_limit == unresolved
mr_mime_belief_requirement_literal_truth == unresolved_due_to_versioned_models
mr_mime_barrier_material_or_molecular_mechanism == unresolved_and_not_simulated
mr_mime_capability_development_timeline == unresolved
```

## 10. #124 Jynx evidence packet

### C1/C2 facts retained

Current official material supports expressive behavior while carefully stopping short of proven human-language fluency:

- `OBSERVED / BEHAVIOR`: Jynx sways its hips to a distinctive rhythm;
- `ANALOGY`: its cries sound like human language;
- `CURRENT_WORLD_SOCIAL_EVIDENCE`: some modern musicians compose songs for Jynx to sing.

Historical entries add stronger but internally cautionary evidence:

- Red/Blue/LeafGreen: its movement can cause people to dance in unison;
- Yellow: it appears to move to its own rhythm;
- Gold/HeartGold: body rhythm seems to change with its feelings;
- Silver/SoulSilver: it uses something similar to human language, but dancing also appears communicative;
- Crystal: multiple cry patterns seem to carry different meanings;
- Ruby/Sapphire/Emerald: visual rhythm is described with unusually strong compelled-dancing wording;
- FireRed: its human-sounding language is still under research to determine what is actually being said;
- Diamond/Pearl/Platinum and later reuse: cries sound like human speech but their meaning cannot be determined.

The source therefore supports **structured expressive vocal/rhythmic communication** more strongly than it supports fluent mutual human conversation.

### D1 boundaries

```text
jynx_distinctive_rhythmic_movement == source_backed
jynx_rhythm_can_vary_with_emotion == version_scoped_source_backed
jynx_multiple_cry_patterns_may_have_meaning == version_scoped_source_backed
jynx_human_sounding_vocalization == source_backed_analogy
jynx_dance_influence_on_observers == version_scoped_extraordinary_claim
jynx_modern_musician_song_interaction == current_world_social_evidence
human_sounding_cry_equals_fluent_human_language == false
cry_patterns_have_meaning_equals_complete_translation == false
modern_song_performance_equals_ancient_profession_or_domestication == false
dance_influence_equals_automatic_compulsion_or_input_suppression == false
human_shape_category_equals_human_social_identity == false
rhythmic_behavior_equals_automatic_ritual_significance == false
```

The strong Ruby/Sapphire/Emerald compelled-dancing wording remains meaningful capability evidence, but a later event must translate it through existing agency-safe mental/sensory influence rules rather than silently forcing player actions. The source disagreement on understandability is itself valuable: Jynx may communicate in meaningful species-specific patterns while human interpretation remains partial and fallible.

### U1 unresolved

```text
jynx_vocal_semantics_and_translation_coverage == unresolved
jynx_human_language_comprehension == unresolved
jynx_dance_influence_trigger_range_duration_and_resistance == unresolved
jynx_ancient_proto_kanto_human_contact_frequency == unresolved
jynx_specific_rhythm_to_emotion_mapping == unresolved
```

## 11. Cross-species contract regressions

| Evidence pressure | Safe P4 interpretation | Forbidden automatic rule |
|---|---|---|
| Clefairy full-moon gathering | authored social/ecological event eligibility | guaranteed monthly spawn, map-wide synchronized event, lunar stat buff |
| Clefairy floating / magnetic anomaly | species-local discrete phenomenon | generic Fairy flight, magnetic simulation, automatic equipment failure |
| Clefable hearing | extreme source-backed sensory capability | omniscience, wall-penetrating perfect detection, automatic initiative |
| Clefable moon-kin tradition | canon evidence that a legend exists | confirmed extraterrestrial origin or mandatory moon location |
| Vulpix tail growth | ordinary within-stage maturation | evolution, hidden level, kill-XP or player-issued transform |
| Vulpix feigned injury | authored deception behavior | guaranteed false read or guaranteed escape |
| Ninetales curse / mystical powers | versioned folklore/extraordinary capability hooks | generic curse system, nine powers, permanent unavoidable debuff |
| Ninetales mind-control wording | high-severity version-scoped mental influence evidence | passive aura or automatic player-command removal |
| Mr. Mime barrier | real species-local invisible resisting effect | permanent map editing, arbitrary architecture, indestructible geometry |
| Mr. Mime pantomime | species behavior/analogy | human profession or proof of normalized entertainment culture |
| Jynx vocalization | meaningful-looking/human-sounding communication evidence | fluent human speech, literacy or guaranteed translation |
| Jynx rhythmic influence | authored sensory/mental pressure with counterplay | compulsory dance input, universal charm status |
| modern musicians / scientists | current-world provenance examples | ancient institutions automatically existing in proto-Kanto |

Evolution-stage inheritance remains evidence-gated. Clefairy's full-moon grouping is not silently copied to Clefable. Vulpix feigned-injury behavior is not silently copied to Ninetales. Ninetales curse/mind-control claims are not back-propagated to Vulpix. Mr. Mime and Jynx humanlike analogies do not create a shared humanoid social ruleset.

## 12. P2 / P3 / P4 contradiction and chronology audit

### Ancient-world chronology

No reviewed claim requires modern science, musicians, formal performance professions, evolution-item shops, standardized trainer culture, modern taxonomy or institutional Pokémon entertainment.

- scientist explanations on the current Mr. Mime page establish modern interpretation provenance, not ancient scientific institutions;
- modern musicians composing songs for Jynx establish current-world interaction, not ancient stage culture;
- trainer-love wording in one Vulpix entry does not establish normalized ancient trainer ownership;
- Moon Stone/Fire Stone metadata does not establish standardized ancient inventory supply;
- Fairy typing and ability names are modern classification/mechanic context;
- later pre-evolutions and regional forms remain provenance only.

D2 ancient folklore is allowed when clearly labeled as project-authored local belief. The existence of official Ninetales/Clefable folklore can justify believable ancient taboos or stories, but the project must not falsely present its invented local legend text as official canon.

### Agency and mental-state rules

Ninetales mind-control wording and Jynx compelled-dancing wording are the strongest P3 pressure in this batch. Existing agency-safe handling remains sufficient:

```text
source_supports_mental_influence_or_control != automatic_player_input_removal
extraordinary_capability != passive_unavoidable_aura
use_in_play_requires_authored_trigger_warning_counterplay_and_consequence
```

No new generic charm, curse, domination or dance-status subsystem is required.

### Invisible / low-information hazard rules

Mr. Mime barriers are genuinely invisible but cannot become unfair invisible geometry. P4 can grant the capability while P5 later authors cues and consequence handling. Clefairy magnetic anomalies likewise remain discrete event-state information rather than hidden continuous simulation.

### One-entity / action economy rules

Ninetales remains one Pokémon, one ordinary turn, one health state and one visible companion slot despite nine tails. Mr. Mime does not receive extra turns because it can sustain/shape barriers unless a later authored exceptional state explicitly changes ordinary action economy under existing rules.

### Encounterability and presence

D-034 remains unchanged:

```text
all_151_directly_encounterable_somewhere_in_total_content == true
baseline_era_natural_presence_everywhere == false
regional_abundance_equalization == false
```

All six Batch 16 species can receive direct authored encounters somewhere without making them common, easy to locate, culturally normalized or naturally present in every area.

### Ordinary versus exceptional individuals

No reviewed claim changes D-031. Ordinary species baselines remain fixed. Named/exceptional individuals may receive persistent authored histories — e.g. an unusually old Ninetales with a local curse reputation, a Clefairy group associated with a known magnetic anomaly, or a Mr. Mime that repeatedly maintains a specific barrier site — but folklore does not become a generic elite-stat multiplier.

```text
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
```

## 13. P5 / P6 handoff implications

Batch 16 intentionally yields discrete hooks rather than continuous world simulation requirements. Example dossier/content directions include:

```text
clefairy.full_moon_gathering_candidate
clefairy.moonlight_float_state
clefairy.local_magnetic_anomaly_present

clefable.extreme_hearing_alert
clefable.human_avoidance_behavior
clefable.local_moon_kin_legend_known

vulpix.juvenile_tail_stage
vulpix.feigned_injury_attempt
vulpix.heat_regulation_fire_release

ninetales.local_curse_reputation
ninetales.mental_influence_event_candidate
ninetales.exceptional_age_reputation

mr_mime.invisible_barrier_active
mr_mime.barrier_discovery_cue
mr_mime.pantomime_display

jynx.rhythm_expression_state
jynx.humanlike_cry_interpretation
jynx.dance_influence_event_candidate
```

These are content directions, not frozen engine field names. P5 should evaluate them on discrete event eligibility/state transitions and cache stable authored objects where appropriate. No per-frame moon, electromagnetic, barrier-molecule, language-decoder or mind-control simulation is required.

P6 must not infer automatic harvestable resources from Clefairy wings, Ninetales tails, Vulpix fur or humanoid-like anatomy. Any later item/resource use requires separate acquisition, ethics, ownership, preservation and consequence decisions.

## 14. Human Design Gate result

**No blocking Human Design Gate is required.**

Existing owner-approved contracts can conservatively resolve every material ambiguity:

- epistemic wording stays explicit rather than flattened;
- folklore remains meaningful without mandatory literal truth;
- extraordinary species-local capabilities do not create generic magic;
- maturation stays distinct from evolution;
- humanlike appearance/sound/behavior does not create human identity or institutions;
- mental influence preserves authored player counterplay;
- invisible barriers remain bounded authored effects rather than permanent map editing;
- current-world scientists/musicians and later forms/pre-evolutions remain chronology-safe provenance context;
- D-034 direct encounterability remains separate from baseline natural presence.

```text
blocking_human_design_gate_count == 0
ready_for_full_schema_authoring == true
```

## 15. Coverage discipline and promotion gate

This source review deliberately does **not** mutate `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`.

Authoritative coverage remains:

```text
dossier_complete_count == 117
pilot_reviewed_count == 2
not_started_count == 32
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

Do not change these rows yet:

```text
#035 clefairy  = not_started
#036 clefable  = not_started
#037 vulpix    = not_started
#038 ninetales = not_started
#122 mr-mime   = not_started
#124 jynx      = not_started
```

Expected state **only after** all six frozen-schema dossiers, provenance/contradiction checks, epistemic-status regressions, evolution-family inheritance checks, player-agency checks and `P4_BATCH_16_COMPLETION_AUDIT` pass atomically:

```text
dossier_complete_count == 123
pilot_reviewed_count == 2
not_started_count == 26
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

## Exact next work

Author the six Batch 16 frozen full-schema dossiers for Clefairy, Clefable, Vulpix, Ninetales, Mr. Mime and Jynx. Create the Batch 16 dossier index/regression summary and completion audit. Promote exactly those six coverage rows only if every dossier and regression check passes.

Do not begin P5.