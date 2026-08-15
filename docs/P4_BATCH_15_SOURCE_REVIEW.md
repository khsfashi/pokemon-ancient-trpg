# P4 Batch 15 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-16**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_15_BOTANICAL_CHEMICAL_PREDATION_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 15 reviews six species selected to stress botanical-body semantics, temporary rooting/buried states, chemical attraction, airborne pollen, corrosive digestion, predatory lures and feeding-history biology before any coverage-manifest promotion:

- #043 Oddish / #044 Gloom / #045 Vileplume
- #069 Bellsprout / #070 Weepinbell / #071 Victreebel

The source review confirms that all six are living mobile Pokémon whose plantlike anatomy and chemical ecology create strong species-local encounter hooks. None of the reviewed evidence requires a universal botany, agriculture, perfume, allergy, poison-cloud, corrosion, harvesting or continuous environmental-simulation subsystem.

```text
Grass_or_Poison_type_equals_rooting_or_chemical_permission == false
plantlike_body_equals_scenery_crop_forage_or_resource_node == false
rooted_or_buried_state_equals_generic_burrowing_or_permanent_immobility == false
nectar_or_aroma_attraction_equals_compulsion_or_player_agency_removal == false
allergenic_pollen_equals_generic_poison_status == false
pollen_evidence_equals_constant_aura_or_continuous_dispersion_simulation == false
acid_or_dissolving_wording_equals_universal_material_deletion == false
feeding_history_equals_kill_XP_hidden_level_or_permanent_stat_scaling == false
secretions_pollen_leaves_or_body_material_equals_automatic_loot == false
modern_ability_or_move_text_equals_ancient_physiology_formula == false
```

The correct P4 representation is discrete, authored and evidence-bounded: visible signs, state changes, exposure windows, warning/counterplay, species-local capability permissions and qualitative ecological consequences. Hazard severity remains independent from the six-axis species ratings.

## 2. Source and provenance rule

Evidence classes follow the frozen P4 convention:

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

Official Pokédex source registry for this batch, rechecked 2026-08-16:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-ODDISH-SG` | Oddish | `https://sg.portal-pokemon.com/play/pokedex/0043` |
| `OFFICIAL-DEX-GLOOM-SG` | Gloom | `https://sg.portal-pokemon.com/play/pokedex/0044` |
| `OFFICIAL-DEX-VILEPLUME-SG` | Vileplume | `https://sg.portal-pokemon.com/play/pokedex/0045` |
| `OFFICIAL-DEX-BELLSPROUT-SG` | Bellsprout | `https://sg.portal-pokemon.com/play/pokedex/0069` |
| `OFFICIAL-DEX-WEEPINBELL-SG` | Weepinbell | `https://sg.portal-pokemon.com/play/pokedex/0070` |
| `OFFICIAL-DEX-VICTREEBEL-SG` | Victreebel | `https://sg.portal-pokemon.com/play/pokedex/0071` |

Historical/version-tagged statements are retained with their version context instead of being flattened into timeless physical laws. Hyperbolic wording remains valuable fiction evidence but does not silently become exact real-world physics, chemistry, timing or status formulas.

Bellossom, Sun Stone and other post-Generation-I additions remain clearly labeled provenance/evolution context only. They do not expand the mandatory Gen-I roster or make the later branch part of Vileplume's mandatory P4 realization.

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
| Oddish | 45/50/55/75/65/30 | 2/2/2/3/3/1 |
| Gloom | 60/65/70/85/75/40 | 3/3/3/4/3/2 |
| Vileplume | 75/80/85/110/90/50 | 3/4/4/5/4/2 |
| Bellsprout | 50/75/35/70/30/40 | 2/3/1/3/1/2 |
| Weepinbell | 65/90/50/85/45/55 | 3/4/2/4/2/2 |
| Victreebel | 80/105/65/100/70/70 | 4/5/3/5/3/3 |

```text
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
```

This batch provides several direct regressions against literal stat interpretation:

- Oddish has normalized `Speed 1`, while versioned source text still supports substantial nocturnal root-walking. `Speed` therefore does not define route distance, nocturnal locomotion permission or feet/root biology.
- Bellsprout has normalized `Speed 2`, while historical text calls its prey-catching movement exceptionally fast. Predatory reaction fiction is not a hidden per-round Speed multiplier.
- Vileplume's `Potency 5` does not define pollen radius, airborne concentration, allergy severity, paralysis probability or exposure duration.
- Victreebel's `Force 5` / `Potency 5` do not establish unavoidable restraint, guaranteed ingestion, one-hit lethality or a material-dissolution table.
- Weepinbell's acid and protective-fluid physiology is source-local and does not derive from its six-axis Resistance or Potency values.

Six-axis values remain compact battle/contest-oriented species baselines. Capability, hazard severity, sensory influence, environmental permissions and extraordinary Pokédex statements remain separate evidence channels.

## 4. Evolution and modern-mechanic metadata boundary

Pinned `SRC-DATA-001` preserves familiar modern evolution metadata:

```text
Oddish      -> Gloom       level-up min_level 21
Gloom       -> Vileplume   use Leaf Stone
Gloom       -> Bellossom   use Sun Stone       [Generation-II branch/context]

Bellsprout  -> Weepinbell  level-up min_level 21
Weepinbell  -> Victreebel  use Leaf Stone
```

Under D-032 these are source metadata, not ancient kill-XP, visible character levels, guaranteed age thresholds, menu-triggered transformations, standardized evolution-item shops or proof of a region-wide stone economy.

The Bellossom branch is explicit post-Generation-I context. Its existence may be recorded in provenance so future expansion does not contradict the source graph, but this batch does not author Bellossom, Sun Stone culture or a branching evolution system into the mandatory Gen-I baseline.

Pinned modern ability metadata is likewise context rather than literal ancient mechanics:

- Oddish: `Chlorophyll`; hidden `Run Away`;
- Gloom: `Chlorophyll`; hidden `Stench`;
- Vileplume: `Chlorophyll`; hidden `Effect Spore`;
- Bellsprout / Weepinbell / Victreebel: `Chlorophyll`; hidden `Gluttony`.

The current official portal describes abilities in modern battle-system terms. That does **not** establish:

```text
Chlorophyll_equals_fixed_ancient_speed_multiplier_or_generic_photosynthesis_rule == false
Run_Away_equals_guaranteed_escape_from_every_encounter == false
Stench_equals_constant_radius_or_automatic_flinch_faint_memory_loss == false
Effect_Spore_equals_automatic_contact_status == false
Gluttony_equals_ancient_berry_threshold_or_feeding_rate_rule == false
```

Modern move learnsets, TM/TR/tutor/egg metadata and held-item tables are not biological proof. One important exception is evidentiary, not mechanical: some historical Pokédex entries themselves name `POISONPOWDER` and `ACID` when describing Weepinbell's hunting sequence. Those entries support toxic-powder and acid behavior, but they do not import modern move power, accuracy, PP, status odds, turn order or exact battle targeting into the ancient ruleset.

## 5. #043 Oddish evidence packet

### C1 facts retained

Current official material describes Oddish traveling at night on its two roots and remaining quietly underground during the day. Current material also preserves the familiar scientific-name statement and the historical-scale claim of roughly 1,000 feet of nocturnal walking.

Version-tagged evidence adds several useful distinctions:

- Red/Blue: daytime face/body burial and nighttime wandering while sowing seeds;
- Yellow: it can be mistaken for a clump of weeds and reacts dramatically if someone tries to pull it from the ground;
- Gold/Crystal: moonlight-linked nocturnal activity and quiet/cool underground daytime rest;
- Ruby: daytime burial allows nutrient absorption from fertile soil, with leaf condition reflecting soil quality;
- Sapphire: it seeks fertile soil and plants itself; its feet are described as being thought to become rootlike while planted;
- Emerald: daytime burial can leave only the leaves exposed and reduce detection by enemies;
- FireRed: the source supplies the scientific-name wording and the nearly-1,000-foot nocturnal root-walking claim.

### D1 boundaries

```text
oddish_nocturnal_root_walking == source_backed
oddish_daytime_buried_or_planted_state == source_backed
oddish_seed_scattering == version_scoped_source_backed
oddish_soil_nutrient_absorption == version_scoped_source_backed
oddish_low_information_weed_misidentification == version_scoped_source_backed
plantlike_appearance_equals_scenery_or_foraging_object == false
daytime_burial_equals_perfect_concealment == false
daytime_burial_equals_arbitrary_substrate_burrowing == false
moonlight_relation_equals_generic_Grass_type_growth_formula == false
seed_scattering_equals_agriculture_crop_or_free_seed_resource == false
scientific_name_text_equals_ancient_proto_Kanto_taxonomy == false
thousand_foot_claim_equals_route_speed_or_guaranteed_nightly_distance == false
```

The Yellow weed-misidentification entry is especially useful for ancient exploration: a low-information observer may initially mistake leaves for ordinary vegetation, but the encounter remains a Pokémon encounter rather than a hidden herb pickup. Pulling, cutting or gathering without recognition can become an authored mistake/consequence, never an automatic resource interaction.

Sapphire's wording that planted feet are *thought* to become rootlike preserves source uncertainty. Full-schema authoring should not upgrade that phrasing into a proven reversible anatomy-transformation law.

### U1 unresolved

```text
oddish_maximum_burial_depth == unresolved
oddish_substrate_limits == unresolved
oddish_exact_nutrient_absorption_rate == unresolved
oddish_exact_concealment_quality == unresolved
oddish_ancient_local_taxonomic_name == unresolved
```

## 6. #044 Gloom evidence packet

### C1 facts retained

Current official material says the fluid from Gloom's mouth is nectar used to attract prey and separately describes the sticky nectar as sweet while strongly repulsive in smell.

Version-tagged evidence broadens the sensory picture:

- Red/Blue/LeafGreen: mouth fluid is prey-attracting nectar rather than ordinary drool;
- Yellow: the smell is extremely foul, while a tiny minority of people are described as enjoying it;
- Gold: the honey-like fluid is sweet, sticky and stubbornly clings on contact;
- Silver: sweetness and repulsive odor coexist;
- Crystal: odor from syrup and petal pollen is described as capable of making opponents faint;
- Ruby: flower-pistil odor intensifies when Gloom is threatened and can be absent when it feels calm and secure;
- Sapphire: Gloom itself enjoys the noxious fumes and may drool more after smelling them;
- Emerald: a one-whiff memory-loss claim appears, while some people are still described as enjoying the overwhelming smell;
- FireRed and several later entries: extreme distance wording exists for the odor's fainting/nose-curling effect.

### D1 boundaries

```text
gloom_prey_attracting_nectar == source_backed
gloom_sticky_sweet_nectar == version_scoped_source_backed
gloom_extreme_foul_odor == source_backed
gloom_odour_state_changes_with_threat_or_security == version_scoped_source_backed
gloom_human_reaction_is_not_uniform == source_backed
prey_attraction_equals_compulsion == false
odor_equals_universal_disgust_or_fear_status == false
odor_equals_fixed_mile_radius == false
odor_equals_automatic_faint == false
odor_equals_automatic_memory_deletion == false
sticky_nectar_equals_unavoidable_restraint == false
nectar_equals_free_bait_food_medicine_or_harvest_resource == false
```

The source itself disproves a universal reaction rule: prey-attraction language, repulsive odor language and rare human enjoyment all coexist. A later event may therefore author context-sensitive attraction, aversion, curiosity, nausea or tolerance, but P4 does not create a single hidden `smell resistance` formula or remove player agency.

The FireRed distance claim and Emerald memory-loss claim remain version-scoped extraordinary Pokédex fiction. They may support ominous folklore, rare severe exposure or specialist warnings, but not deterministic map-radius effects or automatic memory rewriting.

### U1 unresolved

```text
gloom_exact_scent_radius == unresolved
gloom_susceptible_prey_classes == unresolved
gloom_exact_faint_or_memory_effect_conditions == unresolved
gloom_safe_collection_and_preservation_of_nectar == unresolved
```

## 7. #045 Vileplume evidence packet

### C1 facts retained

Current official material describes Vileplume scattering allergenic and poisonous pollen from its very large petals.

Version-tagged evidence is deliberately not flattened because it distinguishes several hazard presentations:

- Red/Blue: larger petals correspond to more toxic pollen and a heavy head;
- Yellow: broad petal flapping actively scatters poisonous pollen and is audibly loud;
- Gold: walking can shake out heavy clouds of toxic pollen;
- Silver: blooming is followed by allergenic, poisonous pollen dispersal;
- Crystal: petal shaking fills the air with visible yellow toxic pollen;
- Ruby: toxic pollen can trigger severe allergy attacks;
- Sapphire: petals attract prey, toxic spores immobilize it, and Vileplume then catches/devours it;
- Emerald: pollen abundance can be seasonal; heavily produced pollen can turn nearby air yellow and is described as toxic enough to cause paralysis;
- FireRed and several later entries: strongly allergy-causing pollen remains prominent.

### D1 boundaries

```text
vileplume_airborne_pollen_hazard == source_backed
vileplume_allergenic_effect == source_backed
vileplume_toxic_effect == source_backed
vileplume_paralysis_or_immobilization_wording == version_scoped_source_backed
vileplume_active_petal_scattering == source_backed
vileplume_pollen_abundance_can_vary_by_season == version_scoped_source_backed
allergy_equals_generic_poison_status == false
toxicity_equals_automatic_paralysis == false
pollen_equals_constant_passive_aura == false
pollen_equals_unavoidable_area_denial == false
pollen_equals_exact_radius_concentration_or_wind_formula == false
large_petals_equals_harvestable_plant_resource == false
Grass_or_Poison_type_equals_pollen_permission == false
```

Full-schema authoring should treat allergy, irritation/toxic exposure and paralysis/immobilization as distinguishable source claims. One event may choose an appropriate exposure route and consequence ladder based on season, visible pollen, wind/shelter, distance and prior warning, without building a continuous atmospheric simulation.

The prey-attraction/immobilization sequence is species behavior, not proof that every target automatically approaches or loses all counterplay.

### U1 unresolved

```text
vileplume_exact_pollen_radius == unresolved
vileplume_exact_dose_response == unresolved
vileplume_exact_wind_persistence == unresolved
vileplume_exact_species_specific_allergen_susceptibility == unresolved
```

## 8. #069 Bellsprout evidence packet

### C1 facts retained

Current official material describes Bellsprout reacting immediately to nearby movement with its vines and planting its feet deeply underground to replenish moisture, becoming unable to flee while rooted.

Version-tagged evidence adds:

- Red/Blue: carnivorous predation on bugs and root-foot moisture absorption;
- Yellow: preference for hot, humid places and vine capture of tiny insects;
- Gold: an extremely skinny body paired with exceptionally fast prey-catching movement;
- Silver: deep rooting to replenish water explicitly prevents escape while the state lasts;
- Crystal: noticed movement prompts an immediate vine response;
- Ruby/Sapphire/Emerald: the flexible body is described with exaggerated evade-any-attack wording, and mouth fluid is corrosive enough to melt iron;
- FireRed: its face-like bud is associated with a rumor that it is a legendary mandrake plant.

### D1 boundaries

```text
bellsprout_carnivorous_bug_predation == source_backed
bellsprout_root_foot_moisture_absorption == source_backed
bellsprout_rooted_rehydration_prevents_escape == source_backed
bellsprout_movement_reaction_with_vines == source_backed
bellsprout_fast_prey_capture == version_scoped_source_backed
bellsprout_iron_corroding_fluid == version_scoped_source_backed
bellsprout_mandrake_association == version_scoped_rumor
movement_detection_equals_omniscient_awareness == false
movement_detection_equals_automatic_initiative_or_reaction_attack == false
rooting_equals_automatic_healing == false
rooting_equals_generic_forced_movement_immunity == false
rooting_equals_permanent_immobility == false
avoid_any_attack_wording_equals_invulnerability == false
iron_melting_equals_universal_material_deletion == false
mandrake_rumor_equals_canonical_botanical_taxonomy == false
```

The Silver rooted state is a useful explicit tradeoff: access to moisture comes with loss of escape mobility. It can be represented as a discrete state without introducing a generic root system.

The Ruby/Sapphire/Emerald “avoid any attack” style phrase is preserved as agility fiction, not an absolute defense. Likewise, iron-corrosion evidence proves severe species-local chemical capability but does not establish real-world pH, reaction time, volume, armor durability or a universal acid-resistance subsystem.

The mandrake statement is explicitly rumor-shaped source text. Ancient people may form analogous folklore only as a clearly D2 local interpretation; P4 does not import a modern/real-world mandrake taxonomy into proto-Kanto.

### U1 unresolved

```text
bellsprout_motion_detection_range_and_mechanism == unresolved
bellsprout_exact_rooting_time == unresolved
bellsprout_exact_corrosion_rate_and_material_limits == unresolved
bellsprout_mandrake_rumor_truth == intentionally_unresolved
```

## 9. #070 Weepinbell evidence packet

### C1 facts retained

Current official material describes Weepinbell containing acid while protecting itself with another fluid, using leafy parts as cutters and spitting an extremely dissolving fluid.

Version-tagged evidence adds several distinct hunting and resting claims:

- Red/Blue/LeafGreen: toxic powder immobilizes prey/foes before an acid spray finishes the sequence;
- Yellow: when hungry it swallows moving prey and strong internal acids melt the prey;
- Gold/HeartGold: internal acid does not melt Weepinbell because it produces a neutralizing/protective fluid;
- Silver/SoulSilver: prey larger than its mouth may be cut up with sharp leaves before being eaten;
- Crystal: hungry Weepinbell swings razor-sharp leaves at nearby objects as food targets;
- Ruby/Sapphire/Emerald: a rear hook anchors it to a tree branch for nighttime sleep, with a possible fall if it moves in its sleep;
- FireRed: leafy parts act as cutters and the expelled fluid receives the strongest “dissolves everything” wording;
- Diamond/Pearl and later entries: it may visually appear plantlike and captures unwary prey with toxic powder.

### D1 boundaries

```text
weepinbell_toxic_powder_then_acid_predation == source_backed
weepinbell_internal_acid == source_backed
weepinbell_protective_or_neutralizing_fluid == source_backed
weepinbell_sharp_leaf_cutting_anatomy == source_backed
weepinbell_rear_hook_night_roosting == version_scoped_source_backed
weepinbell_plantlike_visual_misidentification == version_scoped_source_backed
toxic_powder_equals_automatic_immobilization_of_every_target == false
acid_equals_universal_material_deletion == false
protective_fluid_equals_generic_acid_immunity == false
protective_fluid_equals_collectible_resistance_item == false
sharp_leaves_equals_detachable_equipment_or_free_crafting_stock == false
night_roosting_equals_generic_Grass_climbing_or_hanging_permission == false
plantlike_appearance_equals_scenery_or_harvest_node == false
```

The source establishes at least two distinct chemical channels: external toxic powder and corrosive/internal digestive fluid. They should not be collapsed into one generic Poison-type cloud or one universal `acid damage` value.

The “dissolves everything” phrase is retained as extreme corrosive fiction. Full-schema authoring may justify serious equipment/body/environment danger in specifically authored outcomes, but not automatic deletion, guaranteed lethality, exact real-world chemistry, terrain erasure or a global durability system.

The roosting evidence supplies a useful state-specific traversal/rest hook: a sleeping Weepinbell can be suspended from a branch yet may fall if it moves. This is not proof of universal vine-climbing or perfect anchoring.

### U1 unresolved

```text
weepinbell_exact_acid_material_limits == unresolved
weepinbell_exact_neutralizing_fluid_chemistry == unresolved
weepinbell_exact_toxic_powder_exposure_response == unresolved
weepinbell_exact_roost_branch_load_or_height == unresolved
```

## 10. #071 Victreebel evidence packet

### C1 facts retained

Current official material describes Victreebel luring prey with a nectar-like/honey-like aroma and dissolving prey with digestive fluid. Current material also preserves the feeding-history statement that acid which has dissolved many prey becomes sweeter and more effective at attracting further prey.

Version-tagged evidence adds:

- Red/Blue/LeafGreen: it is *said* to live in huge colonies deep in jungles, with ominous “no one returned” framing;
- Yellow: sweet honey aroma lures prey, which can be swallowed whole and dissolved over roughly a day, bones included;
- Gold/HeartGold: repeated prey dissolution is associated with sweeter, more attractive acid;
- Silver/SoulSilver: aromatic honey attraction and mouth-based melting predation;
- Crystal: ingested hard objects receive extreme “melt into nothing” wording;
- Ruby/Sapphire/Emerald: the long head vine is waved like a living animal as a visual lure/decoy, drawing unsuspecting prey close enough to swallow;
- FireRed: honey-like aroma, “helpless prey” language and dissolving fluid;
- Diamond/Pearl and later entries: the honey-scented mouth fluid is itself described as acid with extreme dissolving language.

### D1 boundaries

```text
victreebel_aroma_based_prey_lure == source_backed
victreebel_vine_visual_decoy == version_scoped_source_backed
victreebel_swallowing_and_digestive_dissolution == source_backed
victreebel_feeding_history_changes_acid_sweetness == source_backed
victreebel_deep_jungle_colony_claim == version_scoped_hearsay_shaped_source_text
aroma_attraction_equals_mind_control == false
aroma_attraction_equals_forced_pathfinding_or_player_input_suppression == false
unsuspecting_or_helpless_wording_equals_no_counterplay_for_every_target == false
one_day_bones_and_all_wording_equals_exact_universal_digestion_timer == false
hardest_object_melts_wording_equals_literal_matter_deletion == false
feeding_history_equals_damage_scaling_or_corrosion_scaling == false
feeding_history_equals_kill_XP_hidden_level_or_permanent_stat_growth == false
sweeter_acid_equals_farmable_feeding_or_harvest_loop == false
colony_no_one_returns_wording_equals_confirmed_population_count_or_automatic_death_zone == false
```

The source describes more than one lure channel: honey-like aroma and a moving vine that resembles an animal. These are sensory/deception ecology, not agency control. A P5 event can telegraph suspicious scent, movement, tracks, missing fauna, sticky residue or specialist warnings and then offer observation, avoidance, resistance, escape or consequence choices.

The strongest dissolution claims remain extraordinary versioned fiction. They justify fear and severe authored consequences without importing a material database, exact timer, pH math, armor deletion or guaranteed instant death.

The feeding-history claim is qualitative and especially important for the project's exceptional-individual contract. A well-fed or long-established Victreebel may have a persistent descriptive/history trait affecting lure fiction, but ordinary specimens do not gain generic combat stats from kills and the player cannot farm prey to level an acid resource.

### U1 unresolved

```text
victreebel_exact_acid_material_limits == unresolved
victreebel_exact_digestion_time_by_target == unresolved
victreebel_exact_lure_susceptibility_by_species == unresolved
victreebel_exact_feeding_count_to_sweetness_change == unresolved
victreebel_colony_size_and_baseline_local_presence == unresolved
```

## 11. Cross-species contract regressions

| Evidence pressure | Safe P4 interpretation | Forbidden automatic rule |
|---|---|---|
| Oddish buried/planted states | species-local rest/concealment/nutrient state | `Grass -> burrow`, scenery, herb pickup, perfect stealth |
| Gloom nectar/odor | context-sensitive sensory attraction/aversion | charm, mind control, universal smell status, fixed mile radius |
| Vileplume pollen | authored airborne exposure with warning/consequence ladder | permanent poison aura, continuous particle simulation, automatic paralysis |
| Bellsprout rooting | temporary rehydration state with mobility cost | generic healing, root immunity, permanent immobility |
| Bellsprout/Weepinbell/Victreebel corrosion | strong species-local digestive/corrosive capability | matter deletion, real-world chemistry, automatic equipment/terrain deletion |
| Weepinbell leaves | dangerous integrated anatomy | detachable blades, automatic crafting loot |
| Victreebel lure | scent/visual-deception predation | forced movement, input suppression, unavoidable ingestion |
| Victreebel feeding history | qualitative persistent ecology/individual-history hook | kill-XP, permanent stat scaling, recursive corrosion scaling, farm loop |
| all secretions/pollen | hazardous biological material whose collection requires explicit context | automatic drops, generic reagent economy |

Evolution-family inheritance remains stage-local. Oddish's buried daytime behavior is not silently copied to Gloom/Vileplume. Gloom's nectar/odor presentation is not automatically Vileplume's. Bellsprout's rooted rehydration is not automatically Weepinbell/Victreebel behavior. Weepinbell's rear-hook roost is not inherited unless separately evidenced.

## 12. P2 / P3 / P4 contradiction and chronology audit

### Ancient-world chronology

No reviewed fact requires modern agriculture, botanical science, chemical industry, perfume manufacture, poison processing, standardized reagent trade or institutional Pokémon husbandry.

- Oddish's official scientific-name text is source evidence but does not imply that proto-Kanto has modern scientific nomenclature.
- Bellsprout's mandrake comparison is rumor-shaped source text and does not import a real-world botanical tradition as project canon.
- Leaf Stone evolution metadata proves a modern source relationship, not common ancient inventory access or a region-wide evolution-item market.
- Bellossom/Sun Stone remains later-generation provenance context only.

### Agency and mental-state rules

Gloom/Victreebel attraction remains sensory influence rather than domination. P3's existing agency-preserving rules remain sufficient. No new charm, compulsion, forced-path or mind-control subsystem is required.

### Hazard semantics

Vileplume pollen, Weepinbell toxic powder and corrosive fluids are compatible with the existing hazard contract:

```text
hazard_delivery_or_exposure != automatic_consequence
hazard_severity != capped_by_species_axis_rating
source_hyperbole != literal_global_formula
```

Allergy, toxin exposure, immobilization/paralysis and corrosion can remain separately authored consequence types. No new continuous simulation is required.

### Resource / remains semantics

This batch does not create automatic collection rights or renewable crafting nodes. Nectar, pollen, acid, protective fluid, seeds and leafy anatomy require explicit encounter safety, consent/ethics where relevant, preservation method, ownership/culture and later P6 resource/provenance decisions before becoming usable items.

### Encounterability and presence

D-034 remains unchanged:

```text
all_151_directly_encounterable_somewhere_in_total_content == true
baseline_era_natural_presence_everywhere == false
regional_abundance_equalization == false
```

All six Batch 15 species can receive direct authored encounters somewhere without making them common, universally catchable, safe companions or natural residents of every region.

### Ordinary versus exceptional individuals

No reviewed claim changes D-031. Ordinary species baselines remain fixed. Named/exceptional individuals may acquire authored persistent history/traits — including unusual feeding history, scars, territory knowledge or locally observed chemical behavior — but not generic player-level scaling or elite multipliers.

```text
p2_contradiction_count == 0
p3_contradiction_count == 0
p4_contract_contradiction_count == 0
blocking_human_design_gate_count == 0
```

## 13. P5 / P6 handoff implications

Batch 15 deliberately produces discrete hooks that a later event engine can consume without per-frame/per-tick ecological simulation. Example state/tag directions for dossier authoring include:

```text
oddish.daytime_buried
oddish.nocturnal_wandering
oddish.low_information_vegetation_misidentification

gloom.calm_low_odor
gloom.threatened_high_odor
gloom.sticky_nectar_present

vileplume.pollen_low_or_high_season
vileplume.active_pollen_scatter
vileplume.visible_airborne_pollen_warning

bellsprout.rooted_rehydrating
bellsprout.rooted_cannot_flee
bellsprout.motion_reaction_ready

weepinbell.toxic_powder_exposure
weepinbell.acid_exposure
weepinbell.night_roosting

victreebel.scent_lure_present
victreebel.vine_decoy_present
victreebel.feeding_history_qualitative
```

These are dossier/content directions, not frozen engine field names. P5 should evaluate them on discrete game-state transitions and authored event eligibility rather than continuously scanning environments.

P6 must not assume any secretion or anatomical material is a redistributable/harvestable gameplay resource merely because P4 records it. If a later content design wants pollen, nectar or acid as an item, it must separately define safe acquisition, containment, degradation/preservation, ethical/social consequences, presentation and resource-pipeline implications.

## 14. Human Design Gate result

**No blocking Human Design Gate is required.**

Every material ambiguity can be resolved conservatively under existing owner-approved contracts:

- botanical resemblance does not make Pokémon scenery/resources;
- temporary rooting/burial remains species-local;
- sensory attraction preserves agency;
- pollen/toxin/corrosion remain authored hazards rather than universal simulation;
- hyperbolic dissolution and extreme odor statements remain version-scoped fiction;
- secretions/body parts do not create automatic loot;
- qualitative feeding history does not create kill-XP or scaling;
- Bellossom/Sun Stone remains later-generation context;
- D-034 direct encounterability remains separate from baseline natural presence.

```text
blocking_human_design_gate_count == 0
ready_for_full_schema_authoring == true
```

## 15. Coverage discipline and promotion gate

This source review deliberately does **not** mutate `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml`.

Authoritative coverage remains:

```text
dossier_complete_count == 111
pilot_reviewed_count == 2
not_started_count == 38
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

Do not change these rows yet:

```text
#043 oddish      = not_started
#044 gloom       = not_started
#045 vileplume   = not_started
#069 bellsprout  = not_started
#070 weepinbell  = not_started
#071 victreebel  = not_started
```

Expected state **only after** all six frozen-schema dossiers, provenance/contradiction checks, evolution-family inheritance checks, botanical-body/chemical-hazard/lure-predation regressions and `P4_BATCH_15_COMPLETION_AUDIT` pass atomically:

```text
dossier_complete_count == 117
pilot_reviewed_count == 2
not_started_count == 32
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

## Exact next work

Author the six Batch 15 frozen full-schema dossiers for Oddish, Gloom, Vileplume, Bellsprout, Weepinbell and Victreebel. Create the Batch 15 dossier index/regression summary and completion audit. Promote exactly those six coverage rows only if every dossier and regression check passes.

Do not begin P5.
