# P4 Batch 14 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_14_SUBTERRANEAN_TERRAIN_LITHIC_BODY_PLAN.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/WORLD_BIBLE.md`

## 1. Review purpose

Batch 14 reviews eight species selected to stress subterranean traversal, terrain integrity, lithic-body semantics, rolling/explosive/boring locomotion and multi-head action economy before any coverage-manifest promotion:

- #027 Sandshrew / #028 Sandslash
- #050 Diglett / #051 Dugtrio
- #074 Geodude / #075 Graveler / #076 Golem
- #095 Onix

The source review confirms that these species support dramatically different interactions with soil, stone, slopes, tunnels and exposed terrain even when several share `Ground` or `Rock` typing. Those interactions therefore remain species-local evidence-backed capabilities and hazards rather than a universal terrain system.

```text
Ground_or_Rock_type_equals_burrowing_permission == false
six_axis_Speed_equals_literal_boring_or_rolling_velocity == false
six_axis_Force_equals_terrain_or_structure_damage == false
rocklike_body_equals_object_or_ore_node == false
rolling_equals_unstoppable_collision_state == false
underground_attack_equals_perfect_stealth_or_unavoidable_surprise == false
shed_body_material_equals_automatic_loot_drop == false
self_explosion_equals_generic_explosive_resource_or_real_world_blast_formula == false
multi_head_count_equals_entity_or_turn_or_HP_count == false
unknown_hidden_body_equals_permission_to_invent_anatomy == false
```

No reviewed claim requires a continuous destructible-terrain simulation, voxel world, physics-derived damage model, generic mining system, generic mount/transport system or new player-facing resource economy.

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

Official Pokédex source registry for this batch:

| Ref | Species | Official source |
|---|---|---|
| `OFFICIAL-DEX-SANDSHREW-SG` | Sandshrew | `https://sg.portal-pokemon.com/play/pokedex/0027` |
| `OFFICIAL-DEX-SANDSLASH-SG` | Sandslash | `https://sg.portal-pokemon.com/play/pokedex/0028` |
| `OFFICIAL-DEX-DIGLETT-SG` | Diglett | `https://sg.portal-pokemon.com/play/pokedex/0050` |
| `OFFICIAL-DEX-DUGTRIO-SG` | Dugtrio | `https://sg.portal-pokemon.com/play/pokedex/0051` |
| `OFFICIAL-DEX-GEODUDE-SG` | Geodude | `https://sg.portal-pokemon.com/play/pokedex/0074` |
| `OFFICIAL-DEX-GRAVELER-SG` | Graveler | `https://sg.portal-pokemon.com/play/pokedex/0075` |
| `OFFICIAL-DEX-GOLEM-SG` | Golem | `https://sg.portal-pokemon.com/play/pokedex/0076` |
| `OFFICIAL-DEX-ONIX-SG` | Onix | `https://sg.portal-pokemon.com/play/pokedex/0095` |

Historical/version-tagged statements are retained with their version context instead of being flattened into timeless physical laws. Alolan forms, Steelix and other later-generation additions remain provenance/context only unless separately needed by a chronology-safe future feature.

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
| Sandshrew | 50/75/85/20/30/40 | 2/3/4/1/1/2 |
| Sandslash | 75/100/110/45/55/65 | 3/5/5/2/2/3 |
| Diglett | 10/55/25/35/45/95 | 1/2/1/1/2/4 |
| Dugtrio | 35/100/50/50/70/120 | 1/5/2/2/3/6 |
| Geodude | 40/80/100/30/30/20 | 2/4/5/1/1/1 |
| Graveler | 55/95/115/45/45/35 | 2/4/5/2/2/1 |
| Golem | 80/120/130/55/65/45 | 4/6/6/2/3/2 |
| Onix | 35/45/160/30/45/70 | 1/2/6/1/2/3 |

```text
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
```

This batch supplies several direct regressions against literal stat interpretation:

- Dugtrio's `Speed 6` does not define burrowing mph, per-round subterranean distance or surprise certainty;
- Onix has a version-scoped 50 mph boring claim while normalized `Speed` is only `3`, proving again that P4 Speed is not literal route velocity;
- Golem's `Force 6` and `Guard 6` do not define blast yield, mountain destruction, collision energy or immunity to every hazard;
- Graveler's slow-walking/rolling fiction coexists with `Speed 1` without requiring a collision equation;
- Diglett's low Vigor/Guard does not prevent it from having a strong species-local subterranean survival niche.

Six-axis values remain compact battle/contest-oriented species baselines. Capability, hazard severity, terrain permission and extraordinary source facts remain separate evidence channels.

## 4. Evolution and modern-mechanic metadata boundary

Pinned `SRC-DATA-001` preserves familiar modern evolution metadata including:

```text
Sandshrew -> Sandslash  level-up min_level 22
Diglett   -> Dugtrio    level-up min_level 26
Geodude   -> Graveler   level-up min_level 25
Graveler  -> Golem      trade
Onix      -> Steelix    trade + held Metal Coat  [later-generation evolution context]
```

Under D-032 these are source metadata, not ancient kill-XP, visible character levels, guaranteed age thresholds, menu-triggered evolution rules, mandatory trading institutions or proof that ancient humans possess the later item/technology context implied by modern evolution mechanics.

Modern ability metadata is likewise retained without literal ancient percentages/guarantees:

- Sandshrew / Sandslash: `Sand Veil`; hidden `Sand Rush`;
- Diglett / Dugtrio: `Sand Veil`, `Arena Trap`; hidden `Sand Force`;
- Geodude / Graveler / Golem: `Rock Head`, `Sturdy`; hidden `Sand Veil`;
- Onix: `Rock Head`, `Sturdy`; hidden `Weak Armor`.

The current official portal describes these abilities in modern battle-system language. That does **not** establish:

```text
Sand_Veil_equals_automatic_invisibility_or_fixed_ancient_evasion_bonus == false
Sand_Rush_equals_literal_route_speed_multiplier == false
Arena_Trap_equals_no_possible_escape_from_every_underground_encounter == false
Sand_Force_equals_generic_terrain_damage_bonus == false
Rock_Head_equals_immunity_to_all_collision_or_fall_harm == false
Sturdy_equals_guaranteed_survival_from_any_full_health_lethal_event == false
Weak_Armor_equals_fixed_ancient_defense_speed_exchange == false
```

Modern held-item tables and trade triggers are source context only. They do not create automatic ancient loot, a universal barter-evolution system or a required equipment economy.

## 5. #027 Sandshrew evidence packet

### C1 facts retained

Current official material describes Sandshrew as digging deep burrows for residence and curling into a ball to withstand attacks when threatened. A second current entry says it can survive a fall from a great height by curling into a ball and bouncing.

Version-tagged evidence further places the species in dry/arid habitat, repeatedly associates curling with defense and includes stronger older wording in which attacks are repelled or bounce off while curled.

### D1 boundaries

```text
sandshrew_deep_burrow_dwelling == source_backed
sandshrew_defensive_curl == source_backed
sandshrew_fall_survival_by_curl_and_bounce == source_backed
sandshrew_arid_habitat_tendency == version_scoped_source_backed
Ground_type_equals_burrowing_for_all_ground_species == false
defensive_curl_equals_invulnerability == false
defensive_curl_equals_fixed_armor_multiplier == false
fall_survival_claim_equals_immunity_to_every_fall_or_impact == false
burrow_dwelling_equals_unlimited_depth_or_substrate == false
```

The stronger historical “repel any attack” style wording is preserved as Pokédex fiction rather than converted into mechanical total immunity. Full-schema authoring may represent a strong defensive posture, reduced exposed surface, rolling escape, fall mitigation and context-sensitive resilience, but not an absolute negate-all-damage state.

Burrowing is explicitly species-local. Exact tunnel diameter, maximum depth, rock penetration, long-distance route creation, passenger capacity and tunnel stability are not established by the source.

### U1 unresolved

```text
sandshrew_max_burrow_depth == unresolved
sandshrew_hard_rock_boring_permission == unresolved
sandshrew_tunnel_load_bearing_reliability == unresolved
sandshrew_exact_fall_height_survival_ceiling == unresolved
```

## 6. #028 Sandslash evidence packet

### C1 facts retained

Current official material describes Sandslash attacking with hardened-hide back spines and sharp claws while moving rapidly, and curling/rolling to strike foes with those spines.

Version-tagged evidence adds several material claims:

- Red/Blue describe rolling while curled to attack or escape;
- Yellow and Silver describe broken claws/spikes beginning to regrow or growing back within about a day;
- Gold describes rapid movement kicking up a blinding dust storm;
- Crystal describes tree-climbing and dropping/attacking while curled;
- Ruby describes yearly replacement of old hardened-hide spikes;
- Emerald describes curling as protection from daytime heat as well as attacks.

### D1 boundaries

```text
sandslash_hardened_hide_spines == source_backed_anatomy
sandslash_sharp_claws == source_backed_anatomy
sandslash_rolling_attack_or_escape == source_backed
sandslash_fast_claw_spike_regrowth == version_scoped_source_backed
sandslash_tree_climbing == version_scoped_source_backed
sandslash_dust_storm_behavior == version_scoped_source_backed
spines_or_claws_equals_equippable_weapons == false
broken_part_regrowth_equals_free_repeatable_harvest_loop == false
rolling_equals_unavoidable_collision == false
dust_storm_equals_fixed_accuracy_or_blindness_rule == false
tree_climbing_equals_generic_Ground_type_climb_permission == false
```

The regrowth evidence is important but must remain biological recovery, not an automatic resource economy. A deliberately authored culture may make limited use of naturally shed or incidentally broken material if provenance and ethics support it, but P4 does not turn Sandslash into a renewable weapon/armor node.

The annual spike replacement statement and one-day broken-part regrowth statements are not contradictory: they can describe different turnover/recovery contexts. Full-schema authoring should preserve both without inventing a universal numeric regeneration system.

## 7. #050 Diglett evidence packet

### C1 facts retained

Current official material places Diglett roughly one yard underground, feeding on plant roots and only sometimes appearing above ground. Another current entry states that its skin is very thin and that light exposure heats its blood and weakens it.

Version-tagged evidence adds important ecology and social-context claims:

- Yellow emphasizes preference for dark places and underground/cave presence;
- Silver says soil is left well tilled and suitable for planting after Diglett digs through a field;
- Ruby/Sapphire/Emerald go further and state that Diglett are raised on many farms because their burrowing improves soil for crops;
- FireRed describes shallow burrowing leaving raised earth that makes the path easy to notice;
- Crystal links root chewing and surface exposure to conditions where sunlight is not bright.

### D1 boundaries

```text
diglett_shallow_underground_life == source_backed
diglett_root_feeding == source_backed
diglett_light_exposure_weakness == source_backed_species_local
diglett_raised_earth_trail == version_scoped_source_backed
diglett_soil_tilling_effect == version_scoped_source_backed
diglett_modern_farm_raising == version_scoped_social_context
light_weakness_equals_fixed_damage_over_time == false
light_weakness_equals_all_Ground_species_sunlight_penalty == false
raised_earth_trail_equals_perfect_tracking == false
soil_tilling_equals_automatic_crop_yield_bonus == false
modern_farm_raising_equals_ancient_proto_Kanto_domestication_norm == false
```

The farm-raising text is a **positive proof of possible human agricultural use in later/modern social contexts**, not proof that this project's earlier-than-Hisui proto-Kanto has normalized Diglett husbandry. P2/P4 chronology rules already allow the project to preserve the capability while requiring any ancient local practice to be separately authored and justified.

The shallow raised-earth trail is a useful counterweight to “underground = perfect stealth.” Diglett can be difficult to see directly while still producing environmental signs. Detection remains event/state/context dependent.

### U1 hidden-body rule

Official evidence reviewed here does not establish a canonical visible lower-body shape beneath the ground. Therefore:

```text
diglett_hidden_lower_body_shape == intentionally_unresolved
diglett_hidden_limbs == intentionally_unresolved
diglett_total_below_ground_length == intentionally_unresolved
```

Full-schema authoring must not fill this gap with fan art, memes, speculative anatomy or project pseudo-canon.

## 8. #051 Dugtrio evidence packet

### C1 facts retained

Current official material describes three heads moving separately up and down to loosen nearby soil and make burrowing easier. It also describes Dugtrio digging through the ground in battle and striking an unsuspecting foe from an unexpected direction.

Version-tagged evidence contains unusually extreme historical claims:

- Red/Blue describe huge earthquakes associated with burrowing 60 miles underground;
- Yellow describes burrowing above 60 mph and being mistaken for an earthquake;
- Silver and several later entries describe reaching depths over 60 miles, including hard/tough ground;
- Crystal explicitly says no one knows what it is like at those depths;
- Ruby/Sapphire/Emerald describe the three as triplets from one body who think alike and cooperate in burrowing.

### D1 boundaries

```text
dugtrio_three_head_soil_loosening == source_backed
dugtrio_unexpected_direction_underground_attack == source_backed
dugtrio_extreme_depth_claim == version_scoped_source_backed
dugtrio_extreme_burrowing_speed_claim == version_scoped_source_backed
dugtrio_earthquake_association == version_scoped_source_backed
dugtrio_triplet_one_body_claim == version_scoped_source_backed
dugtrio_entity_count == 1
dugtrio_ordinary_turn_count == 1
dugtrio_health_state_count == 1
dugtrio_visible_companion_slot_cost_if_applicable == 1
underground_attack_equals_perfect_stealth == false
unexpected_direction_equals_unavoidable_surprise == false
extreme_depth_equals_safe_human_route_creation == false
earthquake_claim_equals_generic_structure_damage_formula == false
```

The extreme historical depth and speed claims are preserved rather than weakened to fit real-world geology. The correct regression is to **not** derive per-round movement, pressure tolerance, tunnel stability, oxygen rules, blast-equivalent seismic damage or guaranteed infrastructure collapse from them.

The three heads are one Pokémon. The historical “triplets” wording is retained as anatomy/origin description, not three entities, three initiative entries, three independent HP pools or three companion slots. This is compatible with the existing Magneton and Doduo/Dodrio precedents.

The unexpected-direction attack wording supports authored ambush pressure, but a future event should still use observable terrain signs, prior knowledge, detection checks, counterplay and substrate context where appropriate. `Arena Trap` does not override that contract.

## 9. #074 Geodude evidence packet

### C1 facts retained

Current official material describes a resting Geodude as looking like an ordinary rock closely enough that a person may step on it accidentally. It also says many may go unnoticed, places the species in mountainous regions and describes it climbing harsh mountain roads using its arms. Careless stepping or kicking can provoke an angry chase/attack response.

### D1 boundaries

```text
geodude_rocklike_low_information_misidentification == source_backed
geodude_mountain_habitat == source_backed
geodude_arm_based_climbing == source_backed
geodude_contact_provoked_aggression == source_backed_tendency
looks_like_rock_equals_object_state == false
looks_like_rock_equals_automatic_invisibility == false
looks_like_rock_equals_inventory_pickup_or_ore_node == false
provocation_equals_unconditional_permanent_aggro == false
Rock_or_Ground_type_equals_wall_climbing == false
```

Geodude is a direct resource/object-semantics regression. A creature that resembles terrain is still a creature with agency and biological state. Low-information misidentification can support encounter design, but the engine must not silently reclassify Geodude as scenery, loot or harvestable stone.

Its arm-based climbing is also a positive control against type-derived traversal. Geodude can climb because the species text says it does so, not because all Rock/Ground species gain a wall-climb flag.

## 10. #075 Graveler evidence packet

### C1 facts retained

Current official material describes Graveler as a slow walker that rolls to move and ignores objects in its path. It eats moss-covered rocks, with one current entry giving an intake of more than a ton per day. It lives in holes in sheer stone walls and enjoys rolling down slopes like a boulder in a rockfall, creating a mountain-road hazard.

### D1 boundaries

```text
graveler_rolling_primary_locomotion == source_backed
graveler_path_obstacle_disregard == source_backed_tendency
graveler_large_rock_consumption == source_backed
graveler_sheer_wall_hole_dwelling == source_backed
graveler_downhill_rockfall_like_hazard == source_backed
rolling_equals_unstoppable_state == false
rolling_equals_guaranteed_collision == false
rolling_equals_automatic_landslide == false
rock_consumption_equals_every_rock_or_mineral_is_food == false
rock_consumption_equals_generic_resource_sink_or_mining_system == false
cliff_hole_dwelling_equals_proof_Graveler_excavates_every_such_hole == false
```

The rock-consumption fact supports ecology, feeding traces and resource competition. It does not establish ore valuation, mineral identification, player-fed stat growth, deterministic daily resource drain or an economy based on feeding Graveler arbitrary stone.

The rockfall-like downhill behavior can be a severe authored route hazard even though normalized Speed is low. Hazard severity remains independent of the six-axis stat ceiling. Future events may use slope, line of travel, warning noise, visibility and escape routes rather than real-world momentum calculations.

## 11. #076 Golem evidence packet

### C1 facts retained

Current official material describes Golem as enclosed in a rugged rocklike shell, shedding skin once per year as it grows. It also states that Golem deliberately blows itself up and uses the explosive force to jump from mountain to mountain. Another current entry says the shed rocklike shell crumbles into soil that can be spread on fields to promote crop growth.

Version-tagged evidence adds several high-pressure claims:

- Red/Blue and multiple later entries say its boulderlike body can withstand dynamite blasts without damage;
- Yellow describes the body as tender/whitish immediately after shedding, then hardening on exposure to air;
- Silver carries the self-explosive mountain-to-mountain locomotion claim;
- Gold says the discarded shell hardens and crumbles;
- Ruby describes groups rolling downhill after large earthquakes;
- Sapphire describes human-made mountain grooves used to divert rolling Golem away from downhill homes;
- Emerald places Golem in volcanic craters and reiterates annual shedding/soil return.

### D1 boundaries

```text
golem_rocklike_shell == source_backed_anatomy
golem_annual_shedding == source_backed
golem_post_shed_tender_state == version_scoped_source_backed
golem_shed_shell_becomes_crop_helping_soil == source_backed_material_path
golem_self_explosive_mountain_movement == source_backed
golem_dynamite_resistance_claim == version_scoped_source_backed
golem_downhill_group_hazard == version_scoped_source_backed
golem_human_diversion_grooves == version_scoped_social_infrastructure_context
shed_shell_equals_automatic_loot_drop == false
shed_shell_equals_universal_fertilizer_economy == false
shed_shell_equals_ownership_right == false
self_explosion_equals_death_or_full_heal == false
self_explosion_equals_infinite_repeatability == false
self_explosion_equals_player_manufacturable_explosive == false
dynamite_text_equals_ancient_proto_Kanto_dynamite_technology == false
Force_or_Guard_rating_equals_blast_yield_or_explosion_immunity == false
```

Golem is the strongest batch example of why canon fiction must not be converted directly into a physics engine. The source clearly supports extraordinary explosion-related durability/propulsion behavior, so the dossier should preserve that threat. It should **not** compute TNT equivalents, pressure waves, crater radii, structure-damage tables or self-damage from real-world chemistry/physics.

The dynamite wording is a later-version comparison/context statement. It does not authorize dynamite as common technology in this project's iron-age / medieval-like ancient setting.

The shed shell is a uniquely strong, nonlethal biological resource path. It may support rare local agriculture, ritual or trade if later authored, but annual shedding and crop value do not imply that every Golem automatically drops collectible material on encounter completion or that humans possess a normalized farming industry around the species.

The Sapphire diversion-groove statement proves that humans in at least one version context can engineer terrain around Golem hazards. In this project, a locally dug trench/groove or old diversion earthwork is therefore a chronology-compatible **possibility** when independently authored with local means; the source does not force a setting-wide institution.

## 12. #095 Onix evidence packet

### C1 facts retained

Current official material describes Onix absorbing hard objects while digging, contributing to the solidity of its body. It also states that Onix can bore through the ground at 50 mph by squirming and twisting its massive body, and that deep burrowing while feeding on boulders causes tremors at the surface.

Version-tagged evidence adds several material claims:

- Red/Blue say stone portions of the body harden with growth to become similar to black-colored diamond;
- Yellow says the tunnels left by high-speed boring can be used as homes by Diglett;
- Gold describes the loud roar of tunneling carrying a long distance;
- Silver/FireRed/Diamond-era entries retain 50 mph underground movement language;
- Ruby/Sapphire/Emerald describe a magnet in Onix's brain acting as a compass while tunneling;
- Black 2/White 2 describe ingesting large quantities of soil and creating long tunnels.

### D1 boundaries

```text
onix_high_speed_boring == source_backed
onix_50_mph_boring_claim == version_scoped_and_currently_repeated_source_backed
onix_surface_tremor_generation == source_backed
onix_hard_object_or_boulder_consumption == source_backed
onix_long_tunnel_creation == version_scoped_source_backed
onix_internal_magnetic_navigation == version_scoped_source_backed
onix_tunnels_can_be_used_by_Diglett == version_scoped_cross_species_ecology
onix_body_hardening_with_growth == version_scoped_source_backed
Speed_rating_equals_50_mph == false
50_mph_equals_per_round_distance_or_fast_travel == false
surface_tremor_equals_automatic_structure_collapse == false
long_tunnel_equals_safe_or_permanent_human_route == false
internal_magnet_equals_harvestable_compass_item == false
black_diamond_comparison_equals_ordinary_gem_or_ore_node == false
```

The 50 mph claim is preserved as extraordinary species-local fiction. It does not make Onix a deterministic transport service, guarantee escape, define combat initiative or imply that riders/cargo can safely accompany the movement.

The Diglett-use-of-Onix-tunnels statement is useful cross-species ecology. It supports the possibility that old Onix passages can become habitat for smaller burrowers, but it does not guarantee tunnel stability, safety, connectivity or occupancy in every location.

The internal magnet/compass statement is species-local anatomy/navigation evidence. It does not create a generic magnetic navigation system for Rock/Ground Pokémon and does not authorize harvesting an Onix for a compass resource.

## 13. Cross-species subterranean / terrain capability matrix

| Species | Evidence-backed terrain/traversal pressure | Explicit non-inference |
|---|---|---|
| Sandshrew | deep burrow dwelling; defensive curl/roll | not universal Ground tunneling or invulnerability |
| Sandslash | scurrying, claws/spines, rolling attack; versioned climbing/regrowth | not detachable equipment, harvest loop or collision formula |
| Diglett | shallow underground life, root feeding, light weakness, visible raised-earth trail | not hidden-body pseudo-canon, perfect stealth or universal sunlight rule |
| Dugtrio | cooperative deep burrowing, unexpected-direction attack, extreme versioned depth/speed | not three entities, unavoidable ambush or earthquake damage formula |
| Geodude | rocklike misidentification, arm climbing, mountain-road ecology | not scenery, ore node, automatic invisibility or generic Rock climbing |
| Graveler | rolling locomotion, slope rockfall-like hazard, rock eating, cliff-hole dwelling | not unstoppable motion, automatic landslide or generic mineral system |
| Golem | rocklike shell, annual shed soil, explosive propulsion, exceptional durability claims | not loot drops, real-world blast math, ancient dynamite tech or infinite self-explosion |
| Onix | deep/high-speed boring, tremors, boulder consumption, long-tunnel and navigation claims | not map fast travel, guaranteed collapse, safe route creation or literal Speed conversion |

This matrix is the batch's principal shared result: **terrain permissions are species-local evidence, not type flags or stat-derived formulas.**

## 14. Terrain integrity / detection / event-state regression

The reviewed species can create strong route and exploration pressure without a global destructible-terrain architecture.

```text
burrower_present_equals_map_geometry_mutation == false
tremor_present_equals_structure_collapse == false
roller_present_equals_collision_guaranteed == false
rocklike_species_present_equals_stealth_auto_success == false
underground_species_present_equals_player_detection_impossible == false
terrain_sign_present_equals_perfect_tracking == false
```

P5 may later consume P4 capability evidence through authored event states such as:

- raised earth, disturbed roots, loose soil, tunnel mouths, hollow-sounding ground;
- slope grooves, rockfall noise, dust, rolling trajectories and safe lateral escape paths;
- fresh shed-shell soil, newly tender Golem states or old hardened fragments;
- subterranean rumbling, tremor escalation and unstable-looking local structures;
- Onix tunnels reused by smaller species;
- Geodude low-information rock misidentification;
- Dugtrio unexpected-direction attack setup with warnings/counterplay where fiction permits.

These are discrete authored conditions/consequences. They do not require persistent centimeter-scale terrain deformation, real-time fluid/soil simulation or physics-derived damage.

## 15. Body / resource / regeneration semantics regression

Batch 14 has three distinct material cases that must not be collapsed:

1. **body-integrated anatomy** — Sandslash claws/spines, Geodude/Golem/Onix rocklike body descriptions;
2. **regrowing or replacing anatomy** — Sandslash broken claw/spike regrowth and yearly spike turnover;
3. **naturally shed nonlethal material** — Golem's yearly shell which crumbles into crop-helping soil.

```text
anatomy_equals_loot == false
regrowth_equals_permission_to_harvest_repeatedly == false
natural_shedding_equals_combat_drop_table == false
resource_value_equals_setting_wide_industry == false
rocklike_material_equals_ordinary_geology == false
```

Future cultures may use naturally available material when source and local practice support it. Killing, mutilation, theft, husbandry, consent/agency, rarity and social consequence remain separate authored questions rather than automatic inventory operations.

## 16. Action-economy / hidden-body regression

Dugtrio and Diglett pressure two different representation risks:

```text
dugtrio_active_entity_count == 1
dugtrio_ordinary_initiative_entries == 1
dugtrio_ordinary_turns_per_round == 1
dugtrio_independent_HP_pools == 1
dugtrio_visible_companion_slot_cost_if_applicable == 1

diglett_unseen_body_detail_count_authored_without_source == 0
```

Three visible heads may change attack vectors, observation and narrative coordination, but they do not multiply generic mechanical resources. Conversely, an unseen body does not grant permission to invent exact anatomy to satisfy rendering or combat convenience.

If a later visual implementation needs to represent Diglett below ground, the safe baseline is an occluded/unknown body volume rather than fabricated canonical legs, feet or tail.

## 17. P2 / P3 / P4 contradiction audit

**PASS.** No reviewed claim requires changing an existing shared contract.

- No source fact requires a universal burrowing, tunneling, mining or terrain-destruction system.
- No source fact requires six-axis Speed or Force to become real-world velocity, momentum, blast or structure-damage math.
- No underground attack claim requires perfect stealth, automatic surprise or impossible escape.
- No rocklike body claim requires scenery/object/ore semantics.
- No regeneration or shedding claim requires a generic harvest/drop economy.
- No Golem explosion claim requires real-world explosives simulation, ancient dynamite technology or a new self-destruct resource system.
- No Diglett/Dugtrio anatomy claim requires invented hidden anatomy or multiplied turns/HP/entities.
- No modern ability/evolution metadata requires literal modern battle mechanics in ancient-world fiction.
- D-031 exceptional individuals remain available for named/apex Sandshrew, Dugtrio, Golem, Onix or other species without scaling ordinary baselines to player growth.
- D-034 direct encounterability remains separate from baseline-era natural presence and ordinary regional abundance.

## 18. Chronology / regional / later-form contamination audit

**PASS with explicit provenance boundaries.**

- Ruby/Sapphire/Emerald Diglett farm-raising statements prove later/other-context human agricultural use, not normalized ancient proto-Kanto domestication.
- Golem dynamite comparisons prove extraordinary durability wording, not the presence of dynamite technology in the project's ancient setting.
- Golem diversion-groove statements prove human hazard engineering is possible in some version context, not a mandatory ancient regional institution.
- Alolan Sandshrew/Sandslash, Alolan Diglett/Dugtrio and Alolan Geodude/Graveler/Golem remain outside the mandatory Gen-I baseline.
- Steelix is a later-generation evolution/context branch and does not change #095 Onix's mandatory Gen-I dossier identity.
- Historical numerical speed/depth statements are preserved as source claims, not measurement infrastructure available to ancient characters.
- Modern ability, held-item and trade-evolution metadata remain structured-game context rather than direct ancient mechanics.

## 19. Human Design Gate result

**No blocking Human Design Gate is required.**

The potentially difficult claims—Diglett farm raising, Sandslash rapid regrowth, Dugtrio 60-mile/60-mph underground statements, Golem dynamite resistance and self-explosive propulsion, Golem shed-shell agriculture and Onix 50-mph boring/internal magnetic navigation—can all be preserved without freezing a new universal product rule.

Existing contracts already distinguish:

- source fact from ancient-setting prevalence;
- type/stat metadata from species-local capability permissions;
- extraordinary Pokédex fiction from real-world physics simulation;
- anatomy from equipment/loot/resource semantics;
- natural shedding/regrowth from repeatable harvesting;
- body-part count from entity/action count;
- modern mechanics/technology language from ancient diegetic interpretation;
- ordinary species baselines from explicitly exceptional individuals.

## 20. Coverage discipline

The authoritative manifest remains unchanged during source review:

```text
dossier_complete_count == 103
pilot_reviewed_count == 2
not_started_count == 46
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

Do not promote these rows yet:

```text
#027 sandshrew = not_started
#028 sandslash  = not_started
#050 diglett    = not_started
#051 dugtrio    = not_started
#074 geodude    = not_started
#075 graveler   = not_started
#076 golem      = not_started
#095 onix       = not_started
```

If all eight later pass full-schema authoring and the Batch 14 completion audit, the expected authoritative state is `111 complete / 2 pilot_reviewed / 38 not_started`.

## 21. Full-schema authoring handoff

The eight dossiers are ready for frozen-schema authoring. Each dossier must:

1. preserve current official evidence and material historical/version-tagged claims at claim level without large verbatim copying;
2. reproduce the eight `p4-six-axis-v1` profiles above with no manual stat exceptions;
3. author burrowing/climbing/rolling/boring permissions from species-local evidence rather than `Ground`/`Rock` type or raw Speed/Force;
4. preserve Sandshrew curling as strong species-local defense/fall mitigation without absolute immunity;
5. preserve Sandslash hardened-hide anatomy, versioned regrowth and rolling/climbing behaviors without equipment or renewable-harvest semantics;
6. preserve Diglett shallow subterranean ecology, light weakness and soil-tilling capability while keeping hidden anatomy unresolved and later farm-raising context chronology-scoped;
7. preserve Dugtrio's extreme historical depth/speed/earthquake claims without a terrain/physics subsystem and keep one entity/turn/health state/companion slot;
8. preserve Geodude rocklike misidentification as low-information encounter fiction, not object/ore status;
9. preserve Graveler rolling/rock consumption as ecology/hazard fiction without unstoppable collision or generic mineral systems;
10. preserve Golem annual shed material and post-shed state separately from combat drops, while preserving explosion/durability claims without TNT/structure-damage formulas or ancient dynamite assumptions;
11. preserve Onix 50-mph boring, tremors, long-tunnel and internal-navigation evidence without literal Speed conversion, fast travel, guaranteed collapse or harvestable compass/gem semantics;
12. preserve evolution claims stage-locally and modern ability/trade/item metadata as source context;
13. keep D-034 direct encounterability separate from baseline-era natural presence;
14. run schema, provenance, P2/P3/P4 contradiction, evolution-family, chronology/later-form and cross-species terrain/resource/action-economy regression checks before promotion.

## 22. Validation summary

```text
reviewed_species_count == 8
current_official_species_page_count == 8
rating_profile_reproducible_count == 8
manual_rating_exception_count == 0
blocking_human_design_gate_count == 0
coverage_manifest_changed == false
ready_for_full_schema_authoring == true
```

## Exact next work

Author the eight frozen-schema Batch 14 dossiers for #027-#028, #050-#051, #074-#076 and #095, then run the Batch 14 terrain/resource/action-economy regression and completion audit. Only after that audit passes may the eight manifest rows be promoted atomically to `complete`.

Do not begin P5.
