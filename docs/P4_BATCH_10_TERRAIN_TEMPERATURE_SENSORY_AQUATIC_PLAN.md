# P4 Batch 10 — Terrain, Temperature, Sensory, and Aquatic Physiology Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-15**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 10 selects the next compact P4 authoring roster after Batch 09. It targets four still-underrepresented boundaries that do not map cleanly onto the six-axis species ratings: terrain-changing movement, heat/contact semantics, nonvisual navigation and sensory weakness, and aquatic physiology/exposure.

The goal is to prove that spectacular movement or environmental interaction remains a species-specific fictional permission or hazard rather than becoming a hidden universal stat formula such as `Force = terrain damage`, `Potency = ambient temperature`, `Speed = mount speed`, `Flying type = perfect navigation`, or `Water type = amphibious safety`.

This file is a selection plan only. The authoritative coverage manifest remains unchanged until source review, full-schema authoring, contradiction checks, and the completion audit pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #041 | Zubat | ultrasonic navigation, blindness, sunlight exposure vulnerability |
| #042 | Golbat | blood-feeding hazard, carried-body burden affecting flight, family-stage sensory inheritance |
| #072 | Tentacool | shallow-sea drift, tide/beach stranding, dehydration exposure |
| #073 | Tentacruel | extendible venomous tentacles, prey restraint, outbreak-scale local ecology |
| #077 | Ponyta | fiery-body contact safety gated by acceptance, growth/maturation of locomotion |
| #078 | Rapidash | extreme overland speed, herd leadership, travel permission distinct from normalized Speed |
| #111 | Rhyhorn | unstoppable charge, poor turning/stopping, collision-driven terrain breach |
| #112 | Rhydon | bipedal terrain expansion, bedrock boring, volcanic/lava-heat tolerance |

Current coverage stays:

```text
dossier_complete_count == 72
pilot_reviewed_count == 2
not_started_count == 77
draft_count == 0
```

If all eight later pass full authoring, the expected state is `80 complete / 2 pilot_reviewed / 69 not_started`. That promotion is not part of this selection scope.

## Selection evidence

Current official Pokémon Pokédex material is sufficient to justify the pressure set before full source review:

- **Zubat:** current official entries describe it as eyeless/blind and navigating through ultrasonic or sound waves emitted while flying; its thin skin is also described as vulnerable to sunlight.
- **Golbat:** current official entries describe blood feeding through hollow fangs and note that overfeeding can leave it too heavy to fly, providing a direct state-dependent flight-permission case.
- **Tentacool:** current official entries place it drifting in shallow seas and describe low-tide beach stranding/desiccation, providing a Water-type counterexample to automatic dry-land tolerance.
- **Tentacruel:** current official entries describe extendible tentacles with venomous tips used to entrap prey and rare large outbreaks that alter surrounding fish-Pokémon presence.
- **Ponyta:** current official entries describe weak running in newborns, stronger legs through running with others, herd life, and a burning mane that ceases to be hot to the touch for an accepted person.
- **Rapidash:** current official entries describe very high overland speed and herd leadership by the fastest runner, including long-distance traversal evidence.
- **Rhyhorn:** current official entries describe a run that is difficult or impossible to stop normally, poor turning, collisions through boulders, and territory/habitat consequences from that behavior.
- **Rhydon:** current official entries describe bipedal evolution expanding habitat onto steep mountains, horn-driven bedrock boring, and armorlike hide allowing movement in volcanic/lava-heat environments.

Official selection pointers:

- Zubat: https://ph.portal-pokemon.com/play/pokedex/0041
- Golbat: https://sg.portal-pokemon.com/play/pokedex/0042
- Tentacool: https://ph.portal-pokemon.com/play/pokedex/0072
- Tentacruel: https://sg.portal-pokemon.com/play/pokedex/0073
- Ponyta: https://sg.portal-pokemon.com/play/pokedex/0077
- Rapidash: https://sg.portal-pokemon.com/play/pokedex/0078
- Rhyhorn: https://ph.portal-pokemon.com/play/pokedex/0111
- Rhydon: https://sg.portal-pokemon.com/play/pokedex/0112

These are selection pointers only. Full Batch 10 source review must still inventory versioned entries, structured data, move/ability context, contradictions, and chronology-safe interpretation before stronger claims are authored.

## Why these eight

Completed batches already prove stat normalization, stat-independent hazards, exceptional individuals, branching/reversible evolution, transformation, composite identity, chronology-safe non-presence, social encounter units, legendary rarity, biological-resource semantics, regeneration, mind-state/agency boundaries, toxin-delivery distinctions, and one explicit rough-water traversal case.

Batch 10 adds four paired pressure families that remain mechanically distinct:

1. **nonvisual sensory navigation and state-dependent flight** — Zubat / Golbat;
2. **aquatic body-state and local ecological exposure** — Tentacool / Tentacruel;
3. **heat/contact semantics plus overland companionship logistics** — Ponyta / Rapidash;
4. **massive terrestrial movement, collision and terrain alteration** — Rhyhorn / Rhydon.

All four are evolution pairs, allowing the source review to distinguish stage-local ecology/capabilities from safely inherited family traits without inventing a generic evolution rule.

Later-generation relatives or forms — Crobat, Galarian Ponyta/Rapidash, and Rhyperior — remain context only and do not expand the mandatory #001-#151 roster.

## Binding boundaries

Batch 10 consumes existing contracts instead of creating parallel universal systems.

`P4_POKEMON_DOMAIN_CONTRACT` and D-031 already separate six-axis ratings from capabilities/hazards. `P4_HAZARD_SEVERITY_CLARIFICATION` already allows environmental, contact, restraint, collision, heat and exposure hazards to exceed what a flat rating alone would imply. D-032 already distinguishes maturation from evolution.

Therefore the batch must preserve these invariants:

1. `Force` does not automatically determine whether a species can shatter boulders, bore bedrock, alter terrain, knock down structures, or create a passable route;
2. `Potency` does not encode ambient body temperature, safe touch conditions, lava tolerance, wildfire generation, or heat immunity;
3. `Speed` does not become mount speed, travel distance per unit time, perfect turning, braking distance, flight endurance, or navigation quality;
4. Flying type does not imply sight, echolocation, dark-navigation competence, sunlight tolerance, carrying capacity, or unconditional flight eligibility;
5. Water type does not imply amphibious respiration, dehydration immunity, safe beaching, drowning immunity for companions, or universal ocean-route permission;
6. species-specific state can temporarily remove a capability without rewriting base ratings — e.g. overfed Golbat may be unable to fly while remaining the same species;
7. Ponyta acceptance/contact semantics do not establish a universal `bonded Pokémon cannot hurt allies` rule;
8. Rhyhorn's poor turning/stopping remains a behavioral/locomotion constraint rather than a hidden global movement minigame;
9. Rhydon's volcanic/lava-heat evidence is species-local and does not grant generic Fire/Ground/Rock environmental immunity to related types;
10. Tentacruel outbreak ecology does not create a generic swarm-size multiplier or prove permanent ecosystem exclusion;
11. later-generation evolution/form data remains provenance context only unless a claim directly clarifies the Gen-I species without expanding mandatory gameplay scope;
12. evolution-family claims remain stage-local unless source evidence supports inheritance.

## Human Design Gate test

**No Human Design Gate is required for Batch 10 selection.** Existing owner-approved P2/P3/P4 contracts already support species-specific traversal, hazards, ecology, bond requirements and persistent state without a new universal subsystem.

Raise a new Human Design Gate during source review/full authoring only if credible official evidence forces a durable player-facing rule that cannot be represented conservatively under existing contracts — for example, a general mounted-travel system that changes companion-slot accounting, a universal underwater-breathing rule, or terrain destruction that requires a setting-wide map-persistence contract before P5/P7.

The default is narrower: author a species capability/hazard plus event or route permission, record any future engine-facing persistence need as a later-phase follow-up, and avoid turning one Pokédex statement into a universal mechanic.

## Source-review work package

For each selected species, the next scope must:

1. inventory current official Pokédex/version evidence relevant to locomotion, heat/contact, sensory navigation, feeding, aquatic exposure and terrain interaction;
2. inspect pinned structured species/type/base-stat/ability/evolution data under the existing provenance strategy;
3. use move/ability evidence as capability context rather than copying modern battle formulas;
4. classify each material claim as direct official fact, cross-source synthesis, conservative inference, project extrapolation, or unresolved;
5. draft hazard/capability semantics with explicit trigger, warning, fictional permission, counterplay, environmental consequence, and consequence ceiling;
6. separate ordinary movement from exceptional route permission, and momentary hazard from persistent terrain/world-state mutation;
7. distinguish maturation facts from evolution-stage changes and later-generation family context;
8. run P2/P3/P4 contradiction checks and chronology-safe ancient-world interpretation;
9. raise a Human Design Gate only if the criteria above are actually reached.

## Promotion gate

Do not change these rows yet:

```text
#041 zubat       = not_started
#042 golbat      = not_started
#072 tentacool   = not_started
#073 tentacruel  = not_started
#077 ponyta      = not_started
#078 rapidash    = not_started
#111 rhyhorn     = not_started
#112 rhydon      = not_started
```

Manifest promotion requires a Batch 10 source review, complete schema-compliant dossiers for all eight species, provenance and contradiction audits, evolution-family consistency review, environmental/traversal/hazard review, refreshed manifest audit, and `P4_BATCH_10_COMPLETION_AUDIT` = PASS.

## Exact next work

Create **P4 Batch 10 source review** for these eight species and establish evidence-backed boundaries for ultrasonic navigation and blindness, flight eligibility under body-state changes, shoreline dehydration, extendible venomous restraint, acceptance-gated fiery contact, extreme overland travel, collision-driven terrain breach, bedrock boring, and volcanic/lava-heat tolerance.

Do not create universal mount, terrain-destruction, amphibious-respiration, or type-based environmental-immunity systems. Do not promote the manifest yet. Do not begin P5.
