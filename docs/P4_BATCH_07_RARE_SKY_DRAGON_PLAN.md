# P4 Batch 07 — Rare Sky / Dragon Environmental-Permission Plan

Status: **SELECTED — READY FOR SOURCE REVIEW**  
Date: **2026-08-15**  
Tracks: **#5**

## 1. Selected roster

Batch 07 covers six still-unstarted species:

- #144 Articuno / 프리져
- #145 Zapdos / 썬더
- #146 Moltres / 파이어
- #147 Dratini / 미뇽
- #148 Dragonair / 신뇽
- #149 Dragonite / 망나뇽

## 2. Why this batch now

Batch 01-06 already proved family closure, branching evolution, transformation, multi-head identity, participant-species evolution, composite identity, artificial/noncontemporaneous origins, social ecology, dependent young and explicit exceptional individuals.

Batch 07 therefore targets a different pressure surface:

1. **legendary / extremely rare ecology without assuming uniqueness**;
2. **direct encounterability under D-034 without turning rare species into routine spawns**;
3. **environment-changing permissions** such as snow, thundercloud electricity, fire/volcanic interaction and weather change;
4. **extreme locomotion** including remote-sky access, aquatic concealment and long-range flight;
5. **mythic human recognition distinct from complete factual knowledge**;
6. **rare companionship without defeat/capture ownership**;
7. **weather and route consequences that remain species/event state, not a generic global weather-control subsystem**.

## 3. Selection invariants

```text
selected_species_count == 6
selected_rows_were_not_started == true
legendary_bird_count == 3
dratini_family_closed == true
ordinary_species_player_scaling == false
legendary_equals_unique_singleton == false
legendary_equals_unbeatable == false
rare_equals_indirect_only == false
D034_direct_encounterability_preserved == true
routine_baseline_spawn_required == false
```

A direct encounter may be a rare authored event with restrictive locality/state prerequisites. D-034 does not require a routine random-table spawn.

## 4. Questions the batch must answer

### Legendary-cardinality boundary

Official material identifies Articuno, Zapdos and Moltres as legendary bird Pokémon but does not require P4 to state that only one individual of each can exist. Batch 07 must therefore model rarity and mythic recognition without freezing unsupported global cardinality.

### Environment permission vs flat combat power

Snowfall, thundercloud electricity, flame/magma interaction and weather change can alter approach, travel, exposure and route state. They must not collapse into a second combat-power score or be capped by the six-axis rating.

### Remote ecology vs opening-locality availability

A species may be valid in the total game yet absent from the first settlement-centered locality. Batch 07 must preserve this distinction explicitly.

### Dratini-family evolution

Modern level metadata remains source context under D-032. Dratini -> Dragonair -> Dragonite must be represented as persistent species transformation without kill-XP, a visible level meter or a generic `Evolve` command.

## 5. Required regression outputs

Full-schema authoring must preserve at least these stable hooks:

```text
articuno-wing-chill-snowfall
zapdos-thundercloud-electricity
moltres-fire-and-magma-recovery

dratini-shedding-growth
dragonair-weather-change
dragonite-long-range-flight
```

The exact hazard records may split a hook into exposure and utility records where the schema requires it.

## 6. Human Design Gate assessment

No gate is opened at selection time.

The potentially product-defining question "are legendary birds globally unique singletons?" is not required to complete P4/P5 consumption. The batch can safely preserve:

```text
global_population_cardinality == unknown
encountered_individual_identity == persistent_when_authored
rarity == exceptional
routine_spawn == false
```

If later narrative design requires a global singleton fact, that later content must open a dedicated Human Design Gate rather than retroactively treating this batch as authority.

## 7. Completion target

Batch 07 may promote only #144-#149 after:

- official-source review;
- pinned structured-stat/evolution review;
- all six full-schema dossiers are complete;
- environment/hazard and rarity regressions pass;
- no blocking Human Design Gate remains;
- manifest promotion is atomic for all six rows.
