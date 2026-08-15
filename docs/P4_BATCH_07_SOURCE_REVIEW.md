# P4 Batch 07 — Source Review

Status: **SOURCE REVIEW COMPLETE — NO BLOCKING HUMAN DESIGN GATE / READY FOR FULL-SCHEMA AUTHORING**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: `docs/P4_BATCH_07_RARE_SKY_DRAGON_PLAN.md`, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_EVOLUTION_AND_MATURATION_CONTRACT.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`

## 1. Review rule

Batch 07 keeps the established evidence boundary:

- current official Pokémon Pokédex material is C1 evidence for original-form identity, typing, explicit capabilities and explicit ecological statements;
- `SRC-DATA-001` is the pinned normalization input for raw six stats and modern evolution metadata;
- conservative implications are D1;
- exact ancient locality, culture and encounter placement are D2;
- unsupported global population cardinality remains `unknown`;
- Galarian forms do not substitute for the mandatory original Articuno/Zapdos/Moltres rows;
- environmental capability never authorizes a generic global weather system or a flat combat-power bonus.

Pinned structured source revision:

```text
PokeAPI/api-data @ 2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

No blocking Human Design Gate is exposed.

## 2. Source registry

| Ref | Source | Primary use |
|---|---|---|
| `OFFICIAL-DEX-ARTICUNO-SG` | `https://sg.portal-pokemon.com/play/pokedex/0144` | original Articuno identity; legendary bird; ice control; wing-driven chill/snow |
| `OFFICIAL-DEX-ZAPDOS-SG` | `https://sg.portal-pokemon.com/play/pokedex/0145` | original Zapdos identity; legendary bird; thundercloud habitat; electricity/lightning interaction |
| `OFFICIAL-DEX-MOLTRES-SG` | `https://sg.portal-pokemon.com/play/pokedex/0146` | original Moltres identity; legendary bird; fire control; magma recovery statement |
| `OFFICIAL-DEX-DRATINI-SG` | `https://sg.portal-pokemon.com/play/pokedex/0147` | Dratini identity; shedding/growth; waterfall protection during shedding |
| `OFFICIAL-DEX-DRAGONAIR-SG` | `https://sg.portal-pokemon.com/play/pokedex/0148` | Dragonair identity; weather-changing aura/body-brightening statement |
| `OFFICIAL-DEX-DRAGONITE-SG` | `https://sg.portal-pokemon.com/play/pokedex/0149` | Dragonite identity; remote ocean-island aggregation statement; globe-circling flight statement |
| `SRC-DATA-001` | `PokeAPI/api-data@2cda0b56...` | raw six stats, types, modern evolution-chain metadata |
| `SRC-DATA-DRATINI-EVO-76` | `data/api/v2/evolution-chain/76/index.json` at pinned revision | Red/Blue level metadata 30 and 55 for Dratini family |

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
| #144 | Articuno | 90 | 85 | 100 | 95 | 125 | 85 | `4/4/5/4/6/4` |
| #145 | Zapdos | 90 | 90 | 85 | 125 | 90 | 100 | `4/4/4/6/4/5` |
| #146 | Moltres | 90 | 100 | 90 | 125 | 85 | 90 | `4/5/4/6/4/4` |
| #147 | Dratini | 41 | 64 | 45 | 50 | 50 | 50 | `2/3/2/2/2/2` |
| #148 | Dragonair | 61 | 84 | 65 | 70 | 70 | 70 | `3/4/3/3/3/3` |
| #149 | Dragonite | 91 | 134 | 95 | 100 | 100 | 80 | `4/6/4/5/5/4` |

No manual rating exception is required.

Ratings do not cap cold exposure, electrical discharge, fire, weather disruption, falling, drowning, collision or route-denial consequences.

## 4. Legendary-bird evidence packet

### Articuno — C1

- original Articuno is Ice/Flying and is explicitly categorized as a legendary bird Pokémon;
- it can control ice;
- wing movement chills surrounding air strongly enough that its flight is associated with snowfall.

### Zapdos — C1

- original Zapdos is Electric/Flying and is explicitly categorized as a legendary bird Pokémon;
- it can control electricity;
- it usually lives in thunderclouds;
- lightning striking it is described as increasing its power.

### Moltres — C1

- original Moltres is Fire/Flying and is explicitly categorized as a legendary bird Pokémon;
- it can control fire;
- injured Moltres is described as entering molten volcanic magma to burn/heal its body.

### D1 / D2 boundary

```text
legendary_rarity_supported == true
global_singleton_cardinality_supported == false
routine_random_spawn_required == false
direct_rare_authored_encounter_allowed == true
weather_or_elemental_environment_can_change_approach_state == true
environmental_change_equals_flat_species_stat_bonus == false
Galarian_forms_substitute_original_forms == false
```

A P5 event may instantiate a persistent encountered individual without asserting that no other individual exists globally.

## 5. Dratini-family evidence packet

### Dratini — C1

- Dratini is Dragon type;
- it repeatedly sheds skin while growing;
- current official material associates the shedding process with protection by a rapid waterfall.

### Dragonair — C1

- Dragonair is Dragon type;
- current official material states that an emitted aura / body-brightening phenomenon can immediately change weather.

### Dragonite — C1

- Dragonite is Dragon/Flying;
- current official material describes a remote ocean island where Dragonite gather and no other Pokémon live;
- it can fly despite its bulky body and is described as circling the globe in sixteen hours.

### Evolution metadata

Pinned structured Red/Blue metadata records:

```text
Dratini -> Dragonair: trigger=level-up, min_level=30
Dragonair -> Dragonite: trigger=level-up, min_level=55
```

Under D-032 these values remain modern-game metadata. They do not create kill-XP, visible ancient levels or a generic evolution command.

## 6. Baseline-era presence conclusion

No reviewed source gives these six original species an artificial or explicitly noncontemporaneous origin.

Therefore baseline presence is `plausible-derived`, while exact ancient future-Kanto locality remains D2.

```text
chronology_anomaly_required == false
opening_locality_presence_required == false
total_game_direct_encounterability_required_by_D034 == true
```

For the legendary birds, `direct encounterable` means a rare authored state/event can produce an actual encounter. It does not require routine ecology-table frequency.

## 7. Required environment / hazard records

Full-schema authoring must include at least:

- `articuno-wing-chill-snowfall` — cold/snow route-state and exposure permission;
- `zapdos-thundercloud-electricity` — electrical exposure and storm-state permission;
- `moltres-fire-plume` — burn/fire exposure permission;
- `moltres-magma-recovery-boundary` — species-local recovery/environment interaction, not a player healing recipe;
- `dratini-shedding-growth` — persistent maturation clue and vulnerable/protected shedding state;
- `dragonair-weather-change` — event-scoped weather-state permission, not arbitrary global climate control;
- `dragonite-long-range-flight` — extreme traversal capability;
- `dragonite-mass-flight-collision` — large-body flight/impact/fall risk when a scene creates it.

## 8. Mythic recognition / knowledge boundary

The batch must distinguish:

```text
myth_or_legend_recognition != exact_species_knowledge
hearsay != confirmed_local_presence
rare_track_or_weather_sign != direct_visual_identification
legendary_status != automatic_hostility
legendary_status != automatic_companionship_impossibility
```

Ordinary people may know omens or descriptions while lacking confirmed identity, behavior or cardinality.

## 9. Companionship boundary

No reviewed source requires defeat-to-recruit or routine ownership.

Recommended P4 classifications:

```text
Articuno  exceptional_only
Zapdos    exceptional_only
Moltres   exceptional_only
Dratini   exceptional_only
Dragonair exceptional_only
Dragonite exceptional_only
```

This classification reflects rarity, environmental/logistical burden and project tone; it does not mean impossible. A voluntary authored bond may still exist under the three-slot contract.

## 10. Cross-system contradiction review

```text
portable_containment_assumed == false
capture_equals_companionship == false
visible_companion_slots == 3
kill_XP_created == false
generic_evolution_menu_created == false
generic_legendary_singleton_rule_created == false
generic_weather_control_subsystem_created == false
legendary_player_scaling_created == false
hazard_severity_capped_by_species_stats == false
opening_locality_forced_spawn_created == false
```

Result: **PASS**.

## 11. Source-review outcome

```text
species_reviewed == 6
source_review == PASS
rating_profiles_reproducible == 6
manual_rating_exception_count == 0
evolution_metadata_review == PASS
legendary_cardinality_boundary == PASS
environment_permission_boundary == PASS
D034_direct_encounterability_boundary == PASS
blocking_human_design_gate_count == 0
```

Batch 07 is ready for full-schema authoring.
