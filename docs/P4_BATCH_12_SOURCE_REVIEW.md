# P4 Batch 12 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_12_FOUNDATIONAL_ELEMENTAL_ANATOMY_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 12 reviews the complete original #001-#009 starter-family roster before any coverage-manifest promotion:

- #001 Bulbasaur / #002 Ivysaur / #003 Venusaur
- #004 Charmander / #005 Charmeleon / #006 Charizard
- #007 Squirtle / #008 Wartortle / #009 Blastoise

The review is deliberately about **boundary ownership**, not starter nostalgia. Official material supports strong body-integrated anatomy, visible condition signals, sunlight relationships, extreme heat/flight descriptions, shell maturation, cultural symbolism, and shell-integrated water-jet anatomy. None of those facts silently create universal equipment, HP, weather, XP, starter-distribution, domestication, technology, or type-physiology systems.

```text
body_integrated_anatomy_equals_equipment == false
condition_signal_equals_numeric_HP_UI == false
ability_low_HP_text_equals_ancient_fixed_threshold_physiology == false
sunlight_fact_equals_generic_Grass_weather_rule == false
battle_experience_equals_kill_XP_or_level_progression == false
shell_nozzle_analogy_equals_human_cannon_or_rocket_technology == false
starter_role_equals_ancient_distribution_or_beginner_safety == false
evolution_family_equals_automatic_capability_inheritance == false
```

## 2. Source and provenance rule

Evidence classes follow the existing P4 convention:

- **C1** — current official Pokémon Pokédex text or official species metadata;
- **C2** — pinned structured source data used for deterministic raw fields;
- **D1** — conservative interpretation directly bounded by one or more source facts;
- **D2** — project-authored ancient-setting extrapolation, never presented as canon;
- **U1** — unresolved detail that must remain unknown rather than be silently invented.

Pinned structured revision remains:

```text
SRC-DATA-001 = PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

The structured source is used for raw base stats, type, ordinary ability context, physical metadata and evolution-family metadata. Modern level, ability, item, machine, battle and starter-selection mechanics are source context rather than automatic ancient-world rules.

Official Pokédex source registry for this batch:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-BULBASAUR-SG` | Bulbasaur | `https://sg.portal-pokemon.com/play/pokedex/0001` |
| `OFFICIAL-DEX-IVYSAUR-SG` | Ivysaur | `https://sg.portal-pokemon.com/play/pokedex/0002` |
| `OFFICIAL-DEX-VENUSAUR-SG` | Venusaur | `https://sg.portal-pokemon.com/play/pokedex/0003` |
| `OFFICIAL-DEX-CHARMANDER-SG` | Charmander | `https://sg.portal-pokemon.com/play/pokedex/0004` |
| `OFFICIAL-DEX-CHARMELEON-SG` | Charmeleon | `https://sg.portal-pokemon.com/play/pokedex/0005` |
| `OFFICIAL-DEX-CHARIZARD-SG` | Charizard | `https://sg.portal-pokemon.com/play/pokedex/0006` |
| `OFFICIAL-DEX-SQUIRTLE-SG` | Squirtle | `https://sg.portal-pokemon.com/play/pokedex/0007` |
| `OFFICIAL-DEX-WARTORTLE-SG` | Wartortle | `https://sg.portal-pokemon.com/play/pokedex/0008` |
| `OFFICIAL-DEX-BLASTOISE-SG` | Blastoise | `https://sg.portal-pokemon.com/play/pokedex/0009` |

The current official portal exposes Overgrow, Blaze and Torrent using modern low-HP battle language. That language is retained as canonical mechanic/context evidence but does not prove a literal ancient physiological threshold, visible percentage, universal desperation state, or project-side damage multiplier.

Mega Evolution, Gigantamax and later form metadata visible on final-stage portal pages remain provenance context only and do not enter the mandatory Gen-I baseline.

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
| Bulbasaur | 45/49/49/65/65/45 | 2/2/2/3/3/2 |
| Ivysaur | 60/62/63/80/80/60 | 3/3/3/4/4/3 |
| Venusaur | 80/82/83/100/100/80 | 4/4/4/5/5/4 |
| Charmander | 39/52/43/60/50/65 | 1/2/2/3/2/3 |
| Charmeleon | 58/64/58/80/65/80 | 2/3/2/4/3/4 |
| Charizard | 78/84/78/109/85/100 | 3/4/3/5/4/5 |
| Squirtle | 44/48/65/50/64/43 | 2/2/3/2/3/2 |
| Wartortle | 59/63/80/65/80/58 | 2/3/4/3/4/2 |
| Blastoise | 79/83/100/85/105/78 | 3/4/5/4/5/3 |

```text
rating_profile_reproducible_count == 9
manual_rating_exception_count == 0
```

Photosynthetic behavior, tail-flame readability, ambient heat, flight permission, shell maturation, longevity symbolism, water-jet recoil and technological analogy are not derived from these six ratings.

## 4. Evolution / modern-mechanic metadata boundary

Pinned `SRC-DATA-001` retains the familiar modern evolution metadata:

```text
Bulbasaur -> Ivysaur   level-up min_level 16
Ivysaur   -> Venusaur  level-up min_level 32
Charmander -> Charmeleon level-up min_level 16
Charmeleon -> Charizard  level-up min_level 36
Squirtle -> Wartortle  level-up min_level 16
Wartortle -> Blastoise level-up min_level 36
```

Under D-032 these numbers are **metadata, not ancient progression law**.

```text
modern_min_level_equals_character_level == false
modern_min_level_equals_kill_XP_threshold == false
modern_min_level_equals_visible_progress_meter == false
repeated_battle_equals_guaranteed_evolution_progress == false
maturation_equals_evolution == false
```

Full-schema authoring may use the sequence and relative developmental ordering as source context while keeping actual ancient evolution triggers species-specific and contract-safe.

Overgrow, Blaze and Torrent receive the same treatment. Their current official low-HP text proves a modern battle-mechanic relationship; it does not define P3 human Vitality, exact Pokémon injury thresholds, automatic move multipliers, visible UI, or a shared biological reflex across every member of the three families.

## 5. #001 Bulbasaur evidence packet

### C1 facts retained

Current official material establishes Bulbasaur as Grass/Poison and describes the seed on its back as present from birth. The seed grows with the body, and nutrients stored in it support growth for a period after birth.

### D1 boundaries

```text
bulbasaur_seed_present_from_birth == source_backed
bulbasaur_seed_nutrient_reserve == source_backed
bulbasaur_seed_grows_with_body == source_backed
seed_equals_carried_item == false
seed_equals_removable_equipment == false
seed_equals_generic_harvestable_resource == false
Grass_type_equals_seed_or_plant_organ == false
```

The seed is treated as body-integrated persistent anatomy/state. The source does not establish safe removal, replacement, transplantation, ordinary harvesting, a detachable inventory object, or a generic plant-symbiote subsystem.

### U1 unresolved

```text
seed_safe_removability == unresolved
seed_loss_survivability == unresolved
seed_regrowth_or_replacement == unresolved
seed_exact_biological_origin == unresolved
```

P4 does not need to invent answers to those questions to author a usable dossier.

## 6. #002 Ivysaur evidence packet

### C1 facts retained

Current official material establishes Ivysaur as Grass/Poison, states that greater sunlight causes more strength to well up within it and allows the back bud to grow larger, and separately describes the bulb growing as it absorbs nutrients and producing a pleasant aroma when it blooms.

### D1 boundaries

```text
ivysaur_sunlight_linked_strength == source_backed
ivysaur_sunlight_linked_bud_growth == source_backed
ivysaur_bloom_aroma == source_backed
sunlight_equals_generic_Grass_type_bonus == false
sunlight_equals_fixed_weather_multiplier == false
bloom_aroma_equals_mind_control_or_guaranteed_lure == false
```

Sunlight is a species/stage-local ecological input. P5 may author basking behavior, exposed sunny habitat preference, seasonal opportunity, or observable bud state, but P4 does not create a universal weather table or exact per-hour energy conversion.

Bulbasaur's nutrient reserve is not automatically copied to Ivysaur, and Venusaur's stronger solar-energy statements are not backfilled into Ivysaur beyond what its own page supports.

## 7. #003 Venusaur evidence packet

### C1 facts retained

Current official material establishes Venusaur as Grass/Poison and describes it converting sunlight into energy. It can become more powerful in summer, and its broad flower petals catch sunlight that fills its body with power.

### D1 boundaries

```text
venusaur_solar_energy_conversion == source_backed
venusaur_summer_power_relationship == source_backed
venusaur_broad_flower_sun_capture == source_backed
summer_equals_global_stat_buff == false
sunlight_equals_unlimited_energy == false
flower_equals_detachable_loot_or_ordinary_herb_resource == false
```

The project may represent stronger summer/sun exposure through authored ecology, state or encounter pressure, but exact numbers, recharge rates, starvation rules, weather multipliers and type-wide inheritance remain undefined.

Mega Venusaur and Gigantamax Venusaur are outside the mandatory baseline and do not backfill later-form anatomy or mechanics.

## 8. #004 Charmander evidence packet

### C1 facts retained

Current official material establishes Charmander as Fire type and explicitly links the tail flame to life-force/condition: the flame burns weakly when Charmander is weak and vigorously when healthy. The current page also states that a healthy flame does not simply go out from a small amount of water exposure.

### D1 boundaries

```text
charmander_tail_flame_condition_signal == source_backed
charmander_healthy_flame_resists_minor_wetting == source_backed
flame_size_equals_exact_HP == false
flame_state_equals_fixed_percentage_threshold == false
flame_visual_equals_complete_injury_diagnosis == false
minor_wetting_resistance_equals_water_immunity == false
Fire_type_equals_visible_health_flame == false
```

The flame is a **qualitative diegetic signal**. An observer may learn that a Charmander looks weak or healthy without learning exact internal values, remaining attacks, death probability, or numerical Vigor.

### Extinguishing / death boundary

The reviewed current page supports a life-force relationship but does not by itself justify a project rule that every temporary flame loss is an instantaneous binary death switch under all circumstances.

```text
tail_flame_extinguished_equals_automatic_instant_death == unresolved_not_assumed
```

If later event authoring needs explicit extinguishing outcomes, it must use additional source review or a narrowly owned rule rather than converting folklore-like wording into universal battle automation.

## 9. #005 Charmeleon evidence packet

### C1 facts retained

Current official material establishes Charmeleon as Fire type, describes its burning tail raising the temperature around it as it swings the tail, and describes a hotheaded temperament that continually seeks opponents and remains aggressive when it has not won.

### D1 boundaries

```text
charmeleon_tail_can_raise_local_temperature == source_backed
charmeleon_hotheaded_battle_seeking_tendency == source_backed
ambient_heat_equals_fixed_temperature_formula == false
Fire_type_equals_heat_aura == false
aggression_equals_compulsory_duel_rule == false
aggression_equals_rage_meter == false
```

The heat statement supports scene-local hazard/counterplay such as discomfort, intimidation, dry-material risk or retreat pressure when authored. Exact temperature, radius, ignition probability and duration remain event parameters rather than six-axis derivatives.

Charmeleon's behavioral tendency is not automatically inherited by Charmander or Charizard.

## 10. #006 Charizard evidence packet

### C1 facts retained

Current official material establishes Charizard as Fire/Flying, supports high-altitude flight, states that greater battle experience corresponds to flames burning at higher temperature, and separately describes a light-blue tail flame when truly angered.

### D1 boundaries

```text
charizard_flight == source_backed
charizard_battle_history_can_correlate_with_hotter_flames == source_backed
charizard_anger_can_change_tail_flame_appearance == source_backed
battle_experience_equals_kill_XP == false
battle_experience_equals_visible_level == false
battle_experience_equals_repeatable_stat_grind == false
hotter_flames_equals_Potency_auto_increase == false
anger_flame_signal_equals_Charmander_health_signal == false
```

Charizard is an important positive control for D-031: a specific individual may have dangerous persistent history, conditioning, techniques or exceptional traits without ordinary species scaling to the player and without introducing generic elite affixes.

The source permits stronger veteran individuals, but P4 does not create an infinite training loop, XP reward track or encounter-count formula.

Charizard's baseline remains Fire/Flying. Mega Charizard X's Dragon typing and all Mega/Gigantamax rules remain outside mandatory baseline provenance.

## 11. #007 Squirtle evidence packet

### C1 facts retained

Current official material establishes Squirtle as Water type and describes its shell as soft immediately after birth before rapidly hardening into a resilient shell. It also describes potent foam sprayed from the mouth.

### D1 boundaries

```text
squirtle_shell_hardens_after_birth == source_backed
squirtle_mouth_foam == source_backed
shell_hardening_equals_biological_maturation == true
shell_hardening_equals_evolution == false
shell_equals_equippable_armor == false
shell_equals_human_smithing == false
Water_type_equals_shell_or_foam == false
```

This is a clean maturation/evolution separation case. A very young Squirtle can have a softer shell state without being a separate evolution stage, and no armor-slot or repair-crafting subsystem is implied.

The source does not define exact hardening duration, armor values, repair rules or projectile statistics for the foam.

## 12. #008 Wartortle evidence packet

### C1 facts retained

Current official material establishes Wartortle as Water type, says its long furry tail is a symbol of longevity and makes the species popular among older people, and separately describes hiding in water to stalk prey while using its ears for balance during fast swimming.

### D1 boundaries

```text
wartortle_tail_longevity_symbolism == source_backed
wartortle_popularity_among_older_people == source_backed
wartortle_aquatic_stalking == source_backed
wartortle_ear_balance_during_swimming == source_backed
symbolism_equals_proven_extended_human_lifespan == false
popularity_equals_common_pet_ownership == false
tail_symbolism_equals_harvestable_charm == false
Water_type_equals_stealth_or_balancing_ears == false
```

The source proves cultural valuation somewhere in official fiction, not a setting-wide ancient institution. A future-Kanto settlement may have local stories, carvings or status associations if authored, but P4 does not infer routine ownership, elderly-care companionship, tail trade, talisman production, lifespan transfer or blessing mechanics.

Exact biological lifespan relative to Squirtle/Blastoise remains outside the reviewed evidence and should not be invented from the word `longevity` alone.

## 13. #009 Blastoise evidence packet

### C1 facts retained

Current official material establishes Blastoise as Water type, says it deliberately increases its body weight to withstand recoil from water jets, and describes shell-integrated jet nozzles used to propel/charge the body with rocket-like force.

### D1 boundaries

```text
blastoise_shell_jet_nozzles == source_backed
blastoise_recoil_management_via_body_weight == source_backed
blastoise_jet_propulsion_or_charge == source_backed
nozzles_equals_detachable_weapon == false
cannon_or_jet_or_rocket_analogy_equals_human_technology_proof == false
body_weight_behavior_equals_fixed_knockback_formula == false
Water_type_equals_high_pressure_nozzles == false
water_jets_equals_unlimited_water_generation == false
```

The shell nozzles are species anatomy, not player equipment. Words translated or localized as cannon/jet/rocket describe function or force; they do not establish that project-era humans possess cannon founding, pressure vessels, rockets, industrial metallurgy or equivalent infrastructure.

P5 may author recoil, bracing, line-of-fire, terrain anchoring and charge telegraphs as encounter counterplay. Exact pressure, projectile speed, water volume, structure damage and mass-shift mechanism remain undefined unless an owning phase needs them.

Mega Blastoise and Gigantamax Blastoise remain outside the mandatory baseline.

## 14. Cross-family regression review

### 14.1 Body-integrated anatomy versus resource/equipment systems

Batch 12 adds multiple positive controls for anatomy that visually resembles a carried object or weapon:

```text
Bulbasaur seed      -> integrated growth anatomy/state
Ivysaur bud/bulb    -> integrated growth anatomy/state
Venusaur flower     -> integrated anatomy/state
Charmander tail fire -> persistent species condition signal
Squirtle shell      -> biological anatomy with maturation
Blastoise nozzles   -> shell-integrated anatomy
```

None of these become loot, armor slots, weapon slots or safe harvest targets merely because humans could describe them using familiar object words.

### 14.2 Condition signal versus battle UI

Charmander is the strongest current case where external appearance carries genuine condition information. The project preserves that advantage without turning diegetic observation into omniscient UI:

```text
qualitative_condition_readability == allowed
exact_HP_readability == false
fixed_low_HP_threshold_from_flame == false
automatic_death_prediction == false
```

The modern Blaze/Overgrow/Torrent low-HP text remains mechanically separate from Charmander's source-backed visible life-force signal.

### 14.3 Environmental input versus universal type formula

Ivysaur/Venusaur sunlight, Charmeleon local heat and Blastoise recoil are all species-local facts.

```text
Grass_type -> generic photosynthesis rule == false
Fire_type  -> generic ambient heat aura == false
Water_type -> generic jet propulsion rule == false
```

P5 can consume explicit capability/state tags without introducing hidden type-derived subsystems.

### 14.4 Battle history versus progression

Charizard's battle-experience wording is compatible with D-031 only if history remains individual and bounded.

Allowed later representations include:

- named veteran individuals with persistent authored history;
- an exceptional specimen whose flames or technique exceed the ordinary baseline;
- ecology/training history as narrative cause for an explicit exceptional trait.

Not allowed by this evidence alone:

- XP from kills;
- a visible level meter;
- automatic stat increments after N fights;
- player-scaled wild Charizard;
- infinite repeatable training for guaranteed numerical growth.

### 14.5 Stage-local capability inheritance

The three complete families demonstrate why family membership cannot be used as a shortcut:

- Bulbasaur seed nutrition is not automatically Venusaur's active rule;
- Ivysaur sunlight-linked bud growth and Venusaur summer/solar power are related but separately evidenced;
- Charmander's condition-readable flame is not the same fact as Charmeleon's heat or Charizard's anger/battle-history flame statements;
- Squirtle's newborn shell hardening is not Wartortle's cultural symbolism or Blastoise's jet anatomy;
- final-stage capabilities do not backfill to prior stages without explicit evidence.

## 15. Starter-meta / chronology boundary

The three families are franchise-famous starter choices in modern games, but that role is not evidence for this project's ancient world.

```text
modern_starter_selection_equals_ancient_institution == false
starter_familiarity_equals_beginner_safety == false
starter_familiarity_equals_common_settlement_presence == false
starter_familiarity_equals_routine_breeding == false
starter_familiarity_equals_free_companion_recruitment == false
mandatory_dossier_equals_baseline_spawn_authorization == false
D034_direct_encounterability_equals_baseline_natural_presence == false
```

If a later content phase wants a Bulbasaur, Charmander or Squirtle near the opening settlement, it must justify that encounter through ecology, displacement, local history, a rare relationship, chronology anomaly or another authored path. The species' modern marketing/game role cannot do that work.

No reviewed source requires normalized trainer culture, Poké Ball containment, professor distribution, starter breeding programs or institutional beginner companions.

## 16. Contradiction / Human Design Gate audit

P2/P3/P4 contradictions found: **none blocking**.

The reviewed material fits existing contracts:

- anatomy can remain species-local state/capability;
- hazards can remain stat-independent;
- qualitative health signals do not override P3/P4 condition rules;
- environmental effects can remain explicit capability/event parameters;
- evolution metadata can remain modern context under D-032;
- individual battle history fits D-031 exceptional-individual handling;
- human cultural admiration can remain locality-specific without trainer culture;
- technology analogy can remain descriptive without advancing the setting baseline;
- D-034 direct encounterability remains separate from natural-presence authorization.

```text
blocking_human_design_gate_count == 0
ready_for_full_schema_authoring == true
coverage_manifest_changed == false
```

## 17. Full-schema authoring handoff

Author all nine frozen-schema dossiers next, then create the Batch 12 dossier index/regression summary and completion audit.

Authoring must preserve at minimum:

1. body-integrated seed/bud/flower/shell/nozzle anatomy is not ordinary equipment or loot;
2. Charmander's tail flame is qualitative condition information, not numeric HP/death UI;
3. Overgrow/Blaze/Torrent low-HP semantics remain modern mechanic context unless a narrower dossier-local consequence is independently sourced;
4. Ivysaur/Venusaur sunlight relationships remain species/stage-local and do not create a generic Grass weather subsystem;
5. Charmeleon heat remains scene-local capability/hazard, not a Fire-type temperature formula;
6. Charizard battle history can justify explicit individual history/exceptional traits but not kill-XP, levels or grindable scaling;
7. Squirtle shell hardening is maturation, not evolution or armor crafting;
8. Wartortle longevity symbolism is culture evidence, not domestication, harvesting or transferable lifespan;
9. Blastoise nozzle/recoil anatomy does not prove ancient human cannon/rocket technology or a generic mass/knockback formula;
10. modern starter familiarity never substitutes for ancient ecology, encounter or companionship justification;
11. stage-local evidence is not automatically inherited across evolution families;
12. Mega/Gigantamax/later mechanics remain provenance-only unless a later explicit scope decision adds them.

Do **not** promote the nine manifest rows until all nine dossiers, contradiction checks and `P4_BATCH_12_COMPLETION_AUDIT` pass atomically.

Current coverage remains:

```text
dossier_complete_count == 87
pilot_reviewed_count == 2
not_started_count == 62
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

Expected state only after clean Batch 12 completion:

```text
dossier_complete_count == 96
pilot_reviewed_count == 2
not_started_count == 53
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

## Exact next work

Create the nine Batch 12 full-schema species dossiers, the batch dossier index/regression summary and `P4_BATCH_12_COMPLETION_AUDIT`. Promote exactly #001-#009 to `complete` only if every required schema/provenance/contradiction regression passes.

Do not begin P5.
