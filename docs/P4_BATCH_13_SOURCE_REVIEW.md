# P4 Batch 13 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_13_AERIAL_ECOLOGY_TERRITORIALITY_MULTIHEAD_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 13 reviews seven species selected to stress aerial ecology, territoriality, traversal, perception and multi-head control before any coverage-manifest promotion:

- #016 Pidgey / #017 Pidgeotto / #018 Pidgeot
- #021 Spearow / #022 Fearow
- #084 Doduo / #085 Dodrio

The review confirms that official evidence supports sharply different locomotion and behavior envelopes even among Pokémon sharing `Flying` typing. It also confirms that multiple heads and redundant organs are species-local anatomy/cognition facts, not permission to multiply the project's active-entity model.

```text
Flying_type_equals_unlimited_traversal == false
six_axis_Speed_equals_literal_air_or_ground_velocity == false
homing_equals_global_routefinding_or_map_reveal == false
territoriality_equals_generic_aggro_or_perfect_detection == false
food_theft_equals_deterministic_inventory_loss == false
multi_head_count_equals_entity_or_action_or_HP_count == false
modern_ability_text_equals_ancient_fixed_guarantee == false
evolution_family_equals_automatic_capability_inheritance == false
```

## 2. Source and provenance rule

Evidence classes follow the existing P4 convention:

- **C1** — direct official Pokémon Pokédex/species fact;
- **C2** — cross-source official synthesis;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as canon;
- **U1** — unresolved detail that remains unknown rather than being silently invented.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

`SRC-DATA-001` is used for deterministic raw stats, types, ordinary/hidden ability metadata, evolution-family metadata and version-tagged Pokédex evidence. Structured data is an evidence carrier, not franchise canon authority by itself. Current official Pokémon Pokédex pages remain the primary current species-text cross-check.

Official Pokédex source registry for this batch:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-PIDGEY-SG` | Pidgey | `https://sg.portal-pokemon.com/play/pokedex/0016` |
| `OFFICIAL-DEX-PIDGEOTTO-SG` | Pidgeotto | `https://sg.portal-pokemon.com/play/pokedex/0017` |
| `OFFICIAL-DEX-PIDGEOT-SG` | Pidgeot | `https://sg.portal-pokemon.com/play/pokedex/0018` |
| `OFFICIAL-DEX-SPEAROW-SG` | Spearow | `https://sg.portal-pokemon.com/play/pokedex/0021` |
| `OFFICIAL-DEX-FEAROW-SG` | Fearow | `https://sg.portal-pokemon.com/play/pokedex/0022` |
| `OFFICIAL-DEX-DODUO-SG` | Doduo | `https://sg.portal-pokemon.com/play/pokedex/0084` |
| `OFFICIAL-DEX-DODRIO-SG` | Dodrio | `https://sg.portal-pokemon.com/play/pokedex/0085` |

Historical/version-tagged statements are retained with their version context instead of being flattened into one timeless physical-law statement. Later forms such as Mega Pidgeot remain provenance context only and do not enter the mandatory Gen-I baseline.

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
| Pidgey | 40/45/40/35/35/56 | 2/2/2/1/1/2 |
| Pidgeotto | 63/60/55/50/50/71 | 3/3/2/2/2/3 |
| Pidgeot | 83/80/75/70/70/101 | 4/4/3/3/3/5 |
| Spearow | 40/60/30/31/31/70 | 2/3/1/1/1/3 |
| Fearow | 65/90/65/61/61/100 | 3/4/3/3/3/5 |
| Doduo | 35/85/45/35/35/75 | 1/4/2/1/1/3 |
| Dodrio | 60/110/70/60/60/110 | 3/5/3/3/3/5 |

```text
rating_profile_reproducible_count == 7
manual_rating_exception_count == 0
```

The strongest regression example in this batch is Doduo/Dodrio. Current official species text says Dodrio cannot run as fast as Doduo but can run for longer stretches, while the normalized battle-derived `Speed` ratings are Doduo `3` and Dodrio `5`. This is not a contradiction requiring a stat exception. It directly demonstrates the existing contract: **P4 Speed is a compact battle/contest-oriented quickness axis, not a literal top-running-speed or route-distance measurement.**

The same rule prevents Pidgeot's historical Mach-number claims, Spearow's short-wing flight, Fearow's flight endurance and Pidgeotto's prey-carrying feat from being reconstructed from the six-axis profile.

## 4. Evolution and modern-mechanic metadata boundary

Pinned `SRC-DATA-001` preserves the familiar modern evolution metadata:

```text
Pidgey   -> Pidgeotto  level-up min_level 18
Pidgeotto -> Pidgeot   level-up min_level 36
Spearow  -> Fearow     level-up min_level 20
Doduo    -> Dodrio     level-up min_level 31
```

Under D-032 these are source metadata, not ancient kill-XP, visible character levels, guaranteed age thresholds or menu-triggered evolution rules.

Modern ability metadata is also retained without literal ancient percentages/guarantees:

- Pidgey / Pidgeotto / Pidgeot: `Keen Eye`, `Tangled Feet`; hidden `Big Pecks`;
- Spearow / Fearow: `Keen Eye`; hidden `Sniper`;
- Doduo / Dodrio: `Run Away`, `Early Bird`; hidden `Tangled Feet`.

The current official portal presents ability effects in modern battle-system language. That does **not** establish:

```text
Keen_Eye_equals_perfect_vision_or_stealth_immunity == false
Tangled_Feet_equals_fixed_ancient_evasion_modifier == false
Run_Away_equals_guaranteed_escape_from_every_ancient_encounter == false
Early_Bird_equals_literal_halved_sleep_duration_in_fiction == false
Sniper_equals_universal_critical_hit_rule == false
Big_Pecks_equals_generic_armor_rule == false
```

Likewise, modern held-item tables such as `Sharp Beak` are game metadata. They do not authorize automatic ancient loot drops, harvesting, or inventory generation, and the item name must not be confused with the Pokémon's anatomical beak.

## 5. #016 Pidgey evidence packet

### C1 facts retained

Current official material describes Pidgey as having an exceptionally sharp sense of direction and being able to return to its own nest even after being removed far from familiar surroundings.

Version-tagged official Pokédex evidence also repeatedly describes a generally docile/conflict-avoidant tendency, defensive sand or dust kicking, and—in some versions—using wing-driven dust to expose small insect prey.

### D1 boundaries

```text
pidgey_homeward_navigation == source_backed
pidgey_defensive_sand_kicking == source_backed
pidgey_general_docility == source_backed_tendency
homing_equals_global_navigation == false
homing_equals_human_routefinding_service == false
homing_equals_map_revelation == false
sand_behavior_equals_fixed_accuracy_debuff == false
docile_equals_harmless_or_never_retaliates == false
```

The navigation claim is specifically strongest for returning **home to its nest**. Full-schema authoring may therefore use nest-returning, displacement recovery, familiar-area orientation and observable homing behavior. It must not silently convert that into perfect navigation to arbitrary destinations, a human escort compass, immunity to every disorientation hazard or automatic discovery of unknown routes.

The sand behavior can support scene-local concealment, disengagement, warning or prey-flushing hooks where authored. Exact radius, duration and numerical accuracy penalties are not source facts.

### U1 unresolved

```text
pidgey_exact_homing_distance_ceiling == unresolved
pidgey_required_nest_attachment_strength == unresolved
pidgey_weather_or_anomalous_disorientation_limits == unresolved
```

## 6. #017 Pidgeotto evidence packet

### C1 facts retained

Current official material establishes a large claimed territory, active aerial patrol and severe claw-based punishment when its living space is violated. Historical/version-tagged entries also describe repeated prey-search flights, outstanding aerial vision, circular search behavior and carrying prey such as Exeggcute more than 60 miles to a nest.

### D1 boundaries

```text
pidgeotto_large_territory_and_patrol == source_backed
pidgeotto_aerial_prey_search == source_backed
pidgeotto_sharp_claw_predation == source_backed
pidgeotto_long_distance_prey_carrying == version_scoped_source_backed
patrol_equals_continuous_map_surveillance == false
territoriality_equals_automatic_detection == false
territoriality_equals_unconditional_combat == false
prey_carrying_equals_human_passenger_transport == false
prey_carrying_equals_generic_payload_formula == false
vision_equals_omniscience_or_stealth_immunity == false
```

The territory claim may author warning zones, nest approaches, patrol signs, escalating intrusion states and predator-prey relationships. It does not make every Pidgeotto hostile outside its own defended context and does not reveal every intruder automatically.

The historical prey-carrying distance proves a strong species-local transport feat for an appropriate prey load. It does not establish safe saddling, routine human riding, settlement messenger service, unrestricted cargo capacity or a route-time equation.

## 7. #018 Pidgeot evidence packet

### C1 facts retained

Current official material establishes the mature Normal/Flying form and modern trainer attraction to its glossy, striking plumage.

Version-tagged official Pokédex evidence additionally includes:

- hunting by skimming close to water;
- Mach-2 flight wording in Yellow, Silver, FireRed and SoulSilver contexts;
- viewing splashing prey while flying at 3,300 feet in Crystal;
- powerful wingbeats able to create severe gusts in several versions.

### D1 boundaries

```text
pidgeot_high_performance_flight == source_backed
pidgeot_Mach_2_claim == version_scoped_source_backed
pidgeot_high_altitude_prey_spotting == version_scoped_source_backed
pidgeot_powerful_wing_gusts == version_scoped_source_backed
modern_trainer_plumage_attraction == source_backed_modern_context
Mach_2_equals_per_round_distance == false
Mach_2_equals_real_world_kinetic_damage_formula == false
Mach_2_equals_reaction_impossibility == false
Mach_2_equals_map_fast_travel_formula == false
high_altitude_vision_equals_perfect_detection == false
trainer_attraction_equals_ancient_ownership_norm == false
```

Pidgeot may be authored as a genuinely extreme aerial threat. The project should preserve the extraordinary source statement rather than weakening it merely because realistic physics would be inconvenient. The correct boundary is instead to avoid importing real-world kinetic-energy calculations, exact acceleration, sonic-boom damage, unavoidable initiative or deterministic travel times that the source never defines.

Modern admiration and trainer-selection text proves modern social context only. It does not establish ancient breeding, mount culture, messenger institutions or settlement-common companionship.

## 8. #021 Spearow evidence packet

### C1 facts retained

Current official material explicitly says Spearow's short wings prevent long-distance flight and separately describes reckless defense of its territory even against larger Pokémon.

Historical/version-tagged entries reinforce the short-wing constraint: Spearow must flap rapidly to stay airborne, is poor at flying high, and uses quick local flight around defended territory. Other entries describe loud cries carrying over roughly half a mile and being used to warn one another of danger.

### D1 boundaries

```text
spearow_short_wing_flight_limit == source_backed
spearow_rapid_local_flight == source_backed
spearow_territorial_defense == source_backed
spearow_long_range_warning_cry == version_scoped_source_backed
Flying_type_equals_long_distance_flight == false
territoriality_equals_permanent_berserk_state == false
warning_cry_equals_perfect_group_alarm_network == false
```

Spearow is a direct positive control for the traversal contract: `Flying` typing does not imply unlimited endurance, high-altitude access or long-distance route bypass. Its authored locomotion should emphasize rapid short/local flight and active wing use, not generic long-range aerial travel.

Territorial aggression is context and tendency, not proof that every Spearow attacks every visible human or fights to the death.

## 9. #022 Fearow evidence packet

### C1 facts retained

Current official material describes a dangerous tendency to snatch food found within its territory and, in Alola-context text, circling above the ocean while searching for fish Pokémon.

Version-tagged official evidence also gives Fearow unusually strong sustained-flight statements: broad/large wings can keep it aloft for very long periods, with several versions explicitly describing all-day flight without landing. Other entries support sudden high-altitude dives and a long beak adapted for prey in soil or water.

### D1 boundaries

```text
fearow_food_snatching_behavior == source_backed
fearow_aerial_prey_search == source_backed_region_context
fearow_all_day_flight_endurance == version_scoped_source_backed
fearow_long_beak_predation == source_backed
food_theft_equals_arbitrary_inventory_deletion == false
food_theft_equals_awareness_of_hidden_inventory == false
all_day_flight_equals_infinite_flight_without_condition == false
prey_search_equals_omniscient_ocean_detection == false
Alola_ecology_equals_proto_Kanto_baseline_presence_fact == false
```

Full-schema authoring may make visible food, exposed provisions, camps or prey handling relevant encounter triggers. Any actual player loss must be resolved through an authored event state with warning/counterplay/consequence semantics rather than silently deleting inventory because a Fearow exists nearby.

Fearow is also the positive endurance contrast to Spearow. The family transformation supports a materially different traversal envelope, but exact daily distance, passenger payload and weather performance remain unresolved rather than calculated from `Speed`.

The Alola prey-search text supports species capability/ecology in that regional context; it is not automatic evidence that the same fish relationship is ordinary in every proto-Kanto locality.

## 10. #084 Doduo evidence packet

### C1 facts retained

Current official material describes Doduo's two heads as having the same genes, acting in very close synchronization in battle and alternating sleep so that one head remains awake as lookout.

Historical/version-tagged official evidence adds:

- poor/difficult flight associated with short wings and compensation through fast terrestrial running;
- running around or above 60 mph in several versions;
- head movement contributing to balance while running;
- usually identical brains, with rare reported individuals having different brain sets;
- the two brains appearing to communicate emotions through a telepathic power.

### D1 boundaries

```text
doduo_ground_running_primary == source_backed
doduo_flight_is_poor_or_difficult == source_backed
doduo_high_running_speed == version_scoped_source_backed
doduo_head_synchronization == source_backed
doduo_alternating_sleep_watch == source_backed
doduo_between_head_emotional_telepathy == version_scoped_source_backed
doduo_entity_count == 1
doduo_action_count_multiplier_from_heads == 1
doduo_HP_pool_count_multiplier_from_heads == 1
internal_telepathy_equals_external_mind_reading == false
lookout_rotation_equals_perfect_awareness == false
```

Doduo is another direct counterexample to type-derived traversal: despite Normal/Flying typing, official evidence repeatedly frames terrestrial running as the important locomotion mode and flight as poor/difficult.

Its two heads remain one Pokémon/entity, one initiative-bearing actor and one visible companion slot if companionship ever applies. Synchronization can explain efficient single-creature behavior; it does not grant two ordinary turns, two default attack rolls or two independent reaction pools.

Alternating sleep/watch can support a state-specific reduced vulnerability to ordinary surprise when the fiction and event state justify it. It does not establish immunity to sleep effects, distraction, stealth, Psychic/Ghost phenomena or simultaneous danger from multiple directions.

The telepathic statement is narrowly retained as **between-head emotional communication**. It does not create external human telepathy, mind reading, truth detection, Psychic typing or a general psychic subsystem. Rare differing-brain individuals can become explicit individual variation without requiring a two-character control model.

## 11. #085 Dodrio evidence packet

### C1 facts retained

Current official material describes Dodrio as having three hearts and three sets of lungs, being capable of longer sustained running than Doduo while not running as fast, and having a strongest head that becomes leader and gains primary control of the body.

Historical/version-tagged evidence additionally describes:

- three brains used for complex planning;
- one head remaining awake while the other two sleep;
- an evolution description in which one Doduo head splits into two;
- nearly 40 mph running in several versions;
- possible overthinking leading to temporary immobility;
- head-to-head squabbling and guard behavior;
- a version-specific association of the three heads with joy, sadness and anger.

### D1 boundaries

```text
dodrio_three_hearts_and_lung_sets == source_backed
dodrio_endurance_running == source_backed
dodrio_slower_top_running_than_doduo == source_backed_current
dodrio_head_leadership_and_primary_body_control == source_backed
dodrio_complex_multi_brain_planning == version_scoped_source_backed
dodrio_entity_count == 1
dodrio_action_count_multiplier_from_heads == 1
dodrio_HP_pool_count_multiplier_from_organs == 1
head_leadership_equals_arbitrary_player_control_override == false
three_brains_equals_three_independent_characters == false
three_emotions_equals_fixed_three_personality_system == false
overthinking_equals_automatic_stun_mechanic == false
```

The organ multiplicity is anatomy/endurance evidence, not three lives, three separate injury tracks or permission to survive otherwise lethal damage automatically.

The strongest-head leadership claim is useful internal control-state evidence. A dossier or future event may expose disagreement, guard orientation, leadership shifts or overthinking as authored behavior, but P4 does not create a universal three-character dialogue engine or arbitrary control-loss mechanic.

The older joy/sadness/anger wording is retained as version-scoped evidence, not promoted into a mandatory fixed personality assignment for every Dodrio.

## 12. Cross-species traversal matrix

| Species | Evidence-backed locomotion/perception pressure | Explicit non-inference |
|---|---|---|
| Pidgey | reliable return to own nest after displacement | not arbitrary destination routefinding or map reveal |
| Pidgeotto | large aerial patrol territory; historical long-distance prey carrying | not continuous surveillance, passenger service or payload formula |
| Pidgeot | high-performance flight; versioned Mach-2/altitude/gust claims | not real-time physics, kinetic damage or fast-travel formula |
| Spearow | short-wing rapid local flight; long-distance limitation | not generic Flying-type long-range travel |
| Fearow | strong sustained/all-day flight evidence | not infinite endurance, automatic route bypass or perfect search |
| Doduo | poor/difficult flight; very fast terrestrial running | not Flying-type sustained flight or literal Speed-rating conversion |
| Dodrio | endurance-oriented running; current text slower than Doduo | not battle Speed rating as top-ground-speed measurement |

This matrix is the batch's principal shared result: traversal permissions are **species-local capabilities supported by source evidence**, never a direct consequence of type or six-axis Speed alone.

## 13. Territoriality, detection and player-state regression

The reviewed species support rich encounter pressure without a universal aerial-aggro subsystem.

```text
territorial_species_present_equals_auto_combat == false
aerial_patrol_present_equals_auto_detection == false
Keen_Eye_present_equals_stealth_invalidated == false
prey_search_present_equals_hidden_target_known == false
food_theft_tendency_equals_inventory_mutation_permission == false
```

P5 may later use territory boundaries, warning signs, nest proximity, visible provisions, exposed prey, lookout states, current line of sight, weather, cover and player behavior as explicit event conditions. P4 only supplies the evidence-backed tendencies/capabilities and consequence ceilings.

## 14. Multi-head / action-economy regression

Doduo and Dodrio remain compatible with the existing one-Pokémon entity model:

```text
active_entity_count_per_doduo == 1
active_entity_count_per_dodrio == 1
visible_companion_slot_cost_if_applicable == 1
ordinary_initiative_entries == 1
ordinary_turns_per_round == 1
independent_HP_pools == 1
```

Multiple heads can change observation, warning behavior, internal coordination and narrative state. They do not multiply generic mechanical resources unless a later explicit species action is authored for a specific reason. That distinction mirrors the existing Magneton precedent: visible/anatomical multiplicity and active-entity count are separate concepts.

## 15. P2 / P3 / P4 contradiction audit

**PASS.** No reviewed claim requires changing an existing shared contract.

- No source fact requires a universal mount, passenger-flight or fast-travel system.
- No navigation/vision/patrol claim requires omniscience, automatic detection or removal of human stealth/routefinding checks.
- No territorial claim requires unconditional combat or player-level scaling.
- No theft claim requires deterministic inventory deletion.
- No high-speed claim requires real-world kinetic-energy damage, exact travel-time equations or automatic reaction failure.
- No multi-head/organ claim requires extra turns, extra initiative slots, extra companion slots, multiple independent entities or multiple HP pools.
- No modern ability/evolution metadata requires literal modern battle mechanics in ancient-world fiction.
- D-031 exceptional individuals remain available for source-compatible named/apex birds or runners without changing ordinary species baselines.
- D-034 direct encounterability remains separate from baseline-era natural presence and ordinary regional abundance.

## 16. Chronology / regional contamination audit

**PASS with explicit provenance boundaries.**

- Modern trainer-attraction text for Pidgeot is retained as modern social evidence only; ancient trainer culture is not inferred.
- Fearow's Alola-specific prey-search statement remains regional ecology/capability context rather than proto-Kanto abundance proof.
- Historical Pokédex numerical statements are retained with version context rather than presented as modern measurement systems available to ancient humans.
- Mega Pidgeot and other later-form/addition metadata remain outside the mandatory Gen-I baseline.
- Modern held-item and battle-ability tables remain structured-game context rather than ancient social, biological or loot rules.

## 17. Human Design Gate result

**No blocking Human Design Gate is required.**

The potentially difficult claims—Mach-2 Pidgeot, all-day Fearow flight, Doduo high running speed, Doduo between-head telepathy, Dodrio redundant organs and Dodrio primary-head control—can all be preserved without freezing a new universal product rule. Existing contracts already distinguish:

- canonical statement from real-world physics simulation;
- type/stat metadata from capability permissions;
- encounter tendency from deterministic player-state outcome;
- body-part count from entity/action count;
- modern mechanics from ancient diegetic interpretation;
- ordinary species baselines from explicitly exceptional individuals.

## 18. Coverage discipline

The authoritative manifest remains unchanged during source review:

```text
dossier_complete_count == 96
pilot_reviewed_count == 2
not_started_count == 53
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

Do not promote these rows yet:

```text
#016 pidgey    = not_started
#017 pidgeotto = not_started
#018 pidgeot   = not_started
#021 spearow   = not_started
#022 fearow    = not_started
#084 doduo     = not_started
#085 dodrio    = not_started
```

If all seven later pass full-schema authoring and Batch 13 completion audit, the expected authoritative state is `103 complete / 2 pilot_reviewed / 46 not_started`.

## 19. Full-schema authoring handoff

The seven dossiers are ready for frozen-schema authoring. Each dossier must:

1. preserve current official evidence and material historical/version-tagged claims at claim level without large verbatim copying;
2. reproduce the seven `p4-six-axis-v1` profiles above with no manual stat exceptions;
3. author locomotion from species-local evidence rather than `Flying` type or raw Speed;
4. preserve Pidgey homing as home/nest-oriented capability rather than generic routefinding;
5. preserve Pidgeotto territory/patrol/predation without generic aggro or perfect detection;
6. preserve Pidgeot's versioned extreme-speed/altitude/gust evidence without real-time physics formulas;
7. preserve Spearow's explicit short-wing limitation and Fearow's strong endurance contrast;
8. represent Fearow theft as an authored encounter attempt/consequence with counterplay, never arbitrary inventory deletion;
9. represent Doduo/Dodrio multi-head cognition as one entity with internal state/coordination rather than multiplied action economy;
10. keep Doduo between-head telepathy internal and species-local unless separate official evidence supports anything broader;
11. keep Dodrio organ redundancy as endurance/anatomy rather than multiple health pools;
12. preserve evolution claims stage-locally and modern level/ability/item metadata as source context;
13. keep D-034 direct encounterability separate from baseline-era natural presence;
14. run schema, provenance, P2/P3/P4 contradiction, evolution-family and cross-species regression checks before promotion.

## 20. Validation summary

```text
reviewed_species_count == 7
current_official_species_page_count == 7
rating_profile_reproducible_count == 7
manual_rating_exception_count == 0
blocking_human_design_gate_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

## Exact next work

Author the seven frozen-schema Batch 13 dossiers for #016-#018, #021-#022 and #084-#085, then run the Batch 13 regression/completion audit. Only after that audit passes may the seven manifest rows be promoted atomically to `complete`.

Do not begin P5.
