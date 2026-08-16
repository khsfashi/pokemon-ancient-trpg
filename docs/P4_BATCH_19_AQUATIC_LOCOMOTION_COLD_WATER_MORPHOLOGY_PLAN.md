# P4 Batch 19 — Aquatic Locomotion, Cold-Water Ecology, and Defensive Morphology Selection Plan

Status: **SELECTED — source review next**  
Date: **2026-08-16**  
Parent issue: **#5 — P4 Pokémon adaptation + complete Gen-I 151 species dossiers**

## Purpose

Batch 19 selects six remaining `not_started` Generation-I species as one aquatic morphology and locomotion pressure cluster:

- #086 Seel
- #087 Dewgong
- #116 Horsea
- #117 Seadra
- #118 Goldeen
- #119 Seaking

These six are grouped by contract pressure rather than Pokédex adjacency alone. Their current official descriptions combine cold-water and ice interaction, explicit swimming-speed claims, day/night feeding behavior, rapid aquatic escape, tail-assisted balance, ink discharge, poisonous spines, parental care, medicinal-resource wording, seasonal mating, horn use, and riverbed nest construction.

If those claims are flattened into generic Water-type rules, the project could accidentally create unrestricted aquatic traversal, automatic escape, automatic drowning, continuous water-temperature simulation, literal speed formulas, free terrain deletion, guaranteed poison, a normalized biological-harvest economy, or a global breeding calendar.

Batch 19 therefore asks one shared question: **how does the project preserve strongly aquatic bodies and ecology while keeping movement, hazards, terrain interaction, resource use, reproduction, and player agency discrete, species-local, and event-scoped?**

This file is a selection plan only. The authoritative coverage manifest remains unchanged until claim-level source review, full-schema dossier authoring, contradiction checks, deterministic stat reproduction, and the Batch 19 completion audit all pass.

## Selected roster

| Dex | Species | Primary contract pressure |
|---:|---|---|
| #086 | Seel | cold-water preference and ice-bashing anatomy without generic ice destruction, safe polar traversal, continuous temperature simulation, or automatic obstacle bypass |
| #087 | Dewgong | extreme-cold adaptation, day/night feeding pattern, and explicit swim-speed wording without real-time schedule simulation, literal travel formulas, or universal cold immunity |
| #116 | Horsea | fin-driven escape, coiled-tail balance, and ink discharge without guaranteed disengage, unlimited traversal, permanent concealment, or extra action economy |
| #117 | Seadra | paternal care, toxic spines, poison-bearing fins, and medicinal-resource wording without automatic poison, universal contact damage, normalized harvesting, or a medicine economy |
| #118 | Goldeen | developed fins and explicit swim-speed wording without permanent movement buffs, unrestricted current traversal, or turning the “Water Dancer” analogy into a human profession/culture |
| #119 | Seaking | seasonal mating and horn-bored riverbed nests without continuous breeding simulation, universal rock drilling/mining, automatic terrain deletion, or guaranteed egg protection |

Current authoritative coverage remains:

```text
dossier_complete_count == 135
pilot_reviewed_count == 2
not_started_count == 14
draft_count == 0
blocking_p4_gate_count == 0
status_total == 151
```

If all six later pass full authoring, expected coverage becomes `141 complete / 2 pilot_reviewed / 8 not_started`. That promotion is explicitly outside this selection scope.

## Selection evidence

Current primary official Pokémon Pokédex material is sufficient to justify this pressure set before the full claim-level source review:

- **Seel:** current official material describes a hardened head protrusion used against thick ice and emphasizes that colder water suits it particularly well. This supports cold-water and ice-interaction pressure without proving arbitrary ice destruction or generic cold immunity.
- **Dewgong:** current official material describes frigid-water adaptation, a day/night activity pattern, retained thermal energy, and an explicit swimming-speed statement. These claims stress authored environmental state and narrative scale versus continuous temperature, metabolism, schedule, and velocity simulation.
- **Horsea:** current official material describes escaping from even large attackers through swimming, maintaining balance with its coiled tail, and spraying ink. These are species-local capabilities that must not become guaranteed disengage, automatic stealth, or extra movement/actions.
- **Seadra:** current official material describes males caring for young, toxic spines used defensively during that period, poison from fin tips, and fins/bones being valued as herbal-medicine ingredients. This directly stresses player-agency-safe poison, parental context, biological-resource provenance, and anti-harvest/economy boundaries.
- **Goldeen:** current official material describes highly developed fins and gives an explicit swimming-speed statement while also using a performance-like “Water Dancer” reputation. This is useful pressure for separating observed locomotion from literal speed formulas and analogy from human institutions.
- **Seaking:** current official material describes seasonal mating preparation and use of the horn to bore into riverbed rock for nests that protect eggs from being swept away. This stresses seasonal ecology and localized terrain interaction without a breeding simulator or universal drilling permission.

Official selection pointers, verified 2026-08-16:

- Seel: https://sg.portal-pokemon.com/play/pokedex/0086
- Dewgong: https://sg.portal-pokemon.com/play/pokedex/0087
- Horsea: https://sg.portal-pokemon.com/play/pokedex/0116
- Seadra: https://sg.portal-pokemon.com/play/pokedex/0117
- Goldeen: https://sg.portal-pokemon.com/play/pokedex/0118
- Seaking: https://sg.portal-pokemon.com/play/pokedex/0119

The next source-review pass must still inventory historical/version-tagged Pokédex evidence and preserve the actual epistemic strength of observation, measurement, analogy, researcher interpretation, folklore, game-version wording, and project extrapolation.

## Pinned structured-data verification

`SRC-DATA-001` remains the pinned PokéAPI `api-data` baseline at revision:

```text
2cda0b56a3a8ad2529d8aac73528225f96d2c848
```

The selected records were checked at that exact revision. Current base-stat order remains:

```text
HP / Attack / Defense / Special Attack / Special Defense / Speed
```

Applying unchanged `p4-six-axis-v1` thresholds (`<40 => 1`, `40..59 => 2`, `60..79 => 3`, `80..99 => 4`, `100..119 => 5`, `>=120 => 6`) yields:

```text
Seel     65/45/55/45/70/45 -> 3/2/2/2/3/2
Dewgong  90/70/80/70/95/70 -> 4/3/4/3/4/3
Horsea   30/40/70/70/25/60 -> 1/2/3/3/1/3
Seadra   55/65/95/95/45/85 -> 2/3/4/4/2/4
Goldeen  45/67/60/35/50/63 -> 2/3/3/1/2/3
Seaking  80/92/65/65/80/68 -> 4/4/3/3/4/3
```

All six are deterministic reproductions with **zero manual rating exceptions**. These ratings remain species baselines rather than player-relative encounter levels; hazard severity and authored environmental advantage remain separate from the six-axis values.

## Why these six now

After Batch 18, the remaining 14 species are:

```text
#023 Ekans       #024 Arbok
#060 Poliwag     #061 Poliwhirl    #062 Poliwrath
#086 Seel        #087 Dewgong
#098 Krabby      #099 Kingler
#108 Lickitung
#116 Horsea      #117 Seadra
#118 Goldeen     #119 Seaking
```

The selected six form the strongest remaining pure-aquatic pressure cluster. Handling them together creates a clean regression surface around:

1. **aquatic competence versus generic traversal** — being strongly adapted to water does not automatically grant safe transport for human riders, infinite underwater endurance, current immunity, or access to every body of water;
2. **water dependence versus automatic drowning rules** — a dossier may establish habitat and locomotion constraints without inventing a universal oxygen timer or silently killing/restraining a character because they entered water;
3. **cold adaptation versus continuous thermodynamics** — Seel/Dewgong may thrive in cold water without requiring per-frame body-temperature propagation or generic Ice/Water immunity;
4. **explicit speed wording versus action/travel formulas** — knots or comparative swimming claims are narrative/source evidence, not direct initiative, tiles-per-turn, pursuit, damage, or world-travel equations;
5. **localized terrain interaction versus universal deletion** — ice bashing and horn-bored nesting sites can create authored obstacle/ecology hooks without universal mining, drilling, excavation, or map destruction;
6. **ink and defensive spines versus automatic conditions** — obscuration and poison must have warning, eligibility, counterplay, bounded consequences, and ordinary action-economy handling;
7. **parental/mating behavior versus a breeding simulator** — care of young, seasonal mating, eggs, and nests are ecological hooks rather than continuous reproduction state for every off-screen specimen;
8. **biological resources versus normalized exploitation** — medicinal-value wording can inform local stakes and ethical conflict without creating automatic loot drops, live harvesting, standardized recipes, or a region-wide trade economy;
9. **species anatomy versus repeated actions** — fins, spines, horns, and tails remain parts of one Pokémon with one health state and ordinary turn;
10. **runtime cost discipline** — aquatic state, temperature opportunity, nest season, concealment, poison eligibility, and terrain interaction should later resolve through coarse/cached authored state and event-triggered consequences rather than continuous fluid, pathfinding, temperature, feeding, or breeding simulation.

The eight species left after eventual Batch 19 completion form a coherent final pressure pool around constriction/venom, amphibious body plans, claws/grapples, unusual tongues/feeding, and water-to-land locomotion: #023-#024, #060-#062, #098-#099, and #108. This is only a planning observation; Batch 20 is not selected by this file.

## Binding boundaries

Batch 19 consumes existing P2/P3/P4 contracts. It does not introduce a generic swimming subsystem, oxygen simulator, water-current physics layer, temperature model, poison engine, breeding simulation, mining system, or biological-resource economy.

The selection must preserve these invariants:

1. `Water` or `Ice` typing does not itself grant unrestricted swimming, underwater breathing, cold immunity, ice breaking, ink, poison, nest building, terrain drilling, or safe passenger transport.
2. D-034 remains binding: all six must be directly encounterable somewhere in total content, but direct encounterability remains separate from commonness, ordinary companionship, and baseline-era abundance.
3. Ordinary Pokémon do not scale with the player. Exceptional Seel, Dewgong, Horsea, Seadra, Goldeen, or Seaking require explicit persistent history/traits rather than hidden elite scaling.
4. All six remain one Pokémon = one ordinary turn, one health state, one initiative presence, and one visible companion slot regardless of fins, spines, horns, tails, or other repeated anatomy.
5. Aquatic locomotion is species-local and encounter-contextual. It cannot silently become a universal `Water type = perfect swimmer` rule.
6. Strong swimming evidence does not guarantee disengagement, pursuit success, first action, evasion, crossing success, or immunity to currents, obstacles, exhaustion, injury, or authored environmental danger.
7. Explicit swim-speed quantities are retained as source-scale evidence. They are not converted directly into turn distance, map speed, initiative, chase odds, damage, or fast-travel duration.
8. Water entry does not automatically trigger drowning, immobilization, lost input, or forced movement. Dangerous water must expose authored warning, eligibility, counterplay, checks/options, and bounded consequences under P2/P3 agency rules.
9. Conversely, Water typing does not prove indefinite underwater breathing or total independence from air; source review must preserve what is actually supported rather than filling gaps with a generic physiology rule.
10. Seel's head protrusion may support localized ice interaction where appropriate, but it does not grant universal ice-wall destruction, tunneling, mining, or obstacle bypass.
11. Seel/Dewgong cold adaptation does not imply immunity to every cold exposure, freezing effect, Ice-type capability, blizzard, hypothermia-like narrative hazard, or temperature extreme.
12. Dewgong's thermal-energy wording and activity pattern do not create a continuous body-temperature meter, real-time circadian scheduler, or off-screen feeding simulation.
13. Horsea's rapid escape wording does not grant guaranteed flee, untargetability, free reaction movement, or action-economy exceptions.
14. Horsea ink is a finite authored capability/event, not an infinite ammunition pool, permanent blindness field, global stealth toggle, or automatic player-input denial.
15. Horsea tail-assisted balance is species-local anatomy and does not create a generic grapple appendage, independent action, or unrestricted anchoring mechanic without evidence.
16. Seadra's toxic spines/fins can justify severe contact or attack hazards, but poison is never automatic merely because proximity/contact occurred. Trigger, warning, eligibility, counterplay, resolution, and consequence must remain explicit.
17. Seadra's repeated spines are not independent weapons/entities and do not add attacks, reactions, turns, initiative slots, or health pools.
18. Seadra medicinal-resource wording does not establish automatic corpse loot, live harvesting permission, standardized medicine recipes, guaranteed curative effects, merchant pricing, or a region-wide extraction industry.
19. Any biological-resource hook must preserve injury/lethality/ethics contracts and distinguish naturally shed/recovered material, remains, trade, coercion, and live extraction instead of treating a living Pokémon as an inventory node.
20. Male parental-care evidence is contextual species ecology. It does not mean every male is always guarding young, every encounter is a nest encounter, or every approach automatically triggers combat.
21. Goldeen's “Water Dancer” wording remains analogy/reputation unless source review proves a narrower factual claim. It cannot create human dance institutions, professions, ceremonies, or fluent performance culture in proto-Kanto.
22. Goldeen/Seaking fin development and swimming competence do not create generic traversal bonuses for other Water species or mandatory real-time swimming physics.
23. Seaking seasonal mating and nesting behavior may create authored seasonal/ecological scenes without a continuous regional breeding calendar, population simulator, fertility system, or mandatory egg-generation mechanic.
24. Seaking's horn-boring behavior is species-local and context-bounded. It does not grant universal rock destruction, mining, ore discovery, construction labor, or arbitrary terrain editing.
25. A nest's protective design does not guarantee egg survival, player access denial, or forced hostility. Observation, avoidance, retreat, environmental change, predation, and other authored outcomes remain possible.
26. Kingdra is later-generation family context for Horsea/Seadra and remains provenance context under D-032; its existence does not silently create Dragon Scale items, trade evolution, or normalized Kingdra presence in the mandatory Gen-I baseline.
27. Modern abilities such as Thick Fat, Hydration, Ice Body, Swift Swim, Sniper, Damp, Water Veil, Lightning Rod, and similar structured-source metadata remain evidence context; exact battle trigger percentages/semantics are not automatically diegetic ancient rules.
28. Numeric, mechanical, or modern-source wording must retain provenance. No battle percentage, velocity, game item, researcher label, or later-generation mechanic is back-projected into proto-Kanto without independent support.
29. No claim in this batch requires continuous per-frame simulation. Preferred later representation is coarse/cached habitat and encounter state with event-triggered water, concealment, poison, season, temperature, and terrain consequences.
30. No new Human Design Gate is required at selection time. A gate should be raised only if claim-level source review finds a genuine product choice that cannot be resolved under existing contracts.

## Aquatic runtime/performance interpretation target

P4 defines behavior contracts; P7 will own implementation. This batch should nevertheless avoid creating requirements that force expensive runtime work.

Preferred later representations are:

- authored water-zone capability/eligibility tags instead of continuous buoyancy or fluid simulation;
- cached/coarse `cold_water`, `open_water`, `river_current`, `nest_site`, or similar encounter-state facts instead of per-frame environmental fields;
- event-triggered ice impact, ink release, poison exposure, and horn-boring consequences instead of constant collision/material processing;
- authored chase resolution using ordinary P3 checks and species capabilities instead of frame-by-frame aquatic path races;
- coarse seasonal/nest eligibility flags instead of simulating reproduction for off-screen populations;
- static or cached resource provenance entries instead of continuously tracking biological market supply;
- one active entity per Pokémon regardless of repeated fins/spines/horn anatomy.

This keeps the design compatible with the project's later preference for deterministic, cached, event-scoped systems while preserving the fiction that these species are genuinely specialized aquatic organisms.

## Source-review questions

The next claim-level review must answer at least:

### Seel / Dewgong

- Which ice/cold claims are direct observation, measurement, analogy, or version-scoped wording?
- What exactly is supported about cold tolerance versus cold immunity?
- How should explicit swimming-speed wording be preserved without turning it into a universal movement formula?
- Does any source materially constrain land movement, breathing, feeding, or sleep in ways that need authored encounter state?

### Horsea / Seadra

- Which locomotion, escape, balance, ink, poison, spine, and parental-care claims are stable across official descriptions?
- What poison exposure is actually evidenced, and what is battle-mechanics-only context?
- How should medicinal-resource wording be represented without normalizing live harvesting or industrial medicine production?
- Which Kingdra/evolution references are later-generation provenance only under D-032?

### Goldeen / Seaking

- Which speed, fin, horn, nesting, seasonal, and egg-protection claims are direct observation versus analogy or version-specific wording?
- What material interaction does Seaking's horn actually support, and what must remain an authored local consequence rather than a generic drilling rule?
- How can nesting/mating behavior produce encounter hooks without implying permanent hostility or continuous population simulation?

### Shared

- Are all six baseline-era natural presence assumptions chronology-safe?
- Does any claim require a Human Design Gate rather than a bounded dossier-local interpretation?
- Can every hazard preserve warning, eligibility, counterplay, escape/avoidance, and player input?
- Can all runtime implications remain discrete/event-scoped and compatible with later caching?

## Required next artifact

Create:

`docs/P4_BATCH_19_SOURCE_REVIEW.md`

That review must:

1. verify the six current official species pages again at review time;
2. inventory relevant historical/version-tagged Pokédex wording at claim level without copying long copyrighted text;
3. inspect pinned `SRC-DATA-001` species/type/base-stat/ability/evolution records for all six;
4. preserve the deterministic profiles above or document a data-verification problem rather than introducing manual rating exceptions;
5. separate observation, numeric statement, analogy, researcher interpretation, mechanics metadata, later-generation provenance, and project extrapolation;
6. audit aquatic locomotion, land/water exposure, cold, ink, poison, biological resources, parental care, seasonal nesting, terrain interaction, and player agency;
7. check P2/P3/P4 contradictions and blocking Human Design Gates;
8. leave `docs/P4_SPECIES_COVERAGE_MANIFEST.yaml` unchanged;
9. hand off to six frozen-schema dossiers only if the review passes;
10. not begin P5.

## Selection validation

```text
selected_species_count == 6
selected_species == [86, 87, 116, 117, 118, 119]
selected_species_all_not_started_on_main == true
current_official_species_pages_verified == 6
pinned_src_data_001_revision == 2cda0b56a3a8ad2529d8aac73528225f96d2c848
pinned_species_records_reviewed == 6
rating_profile_reproducible_count == 6
manual_rating_exception_count == 0
coverage_manifest_changed == false
blocking_human_design_gate_count == 0
continuous_simulation_requirement_count == 0
next_step == batch19_claim_level_source_review
```

## Selection result

**PASS — Batch 19 is selected as #086 Seel, #087 Dewgong, #116 Horsea, #117 Seadra, #118 Goldeen, and #119 Seaking.**

The selection binds only the pressure surface and deterministic baseline profiles. It does not promote coverage, invent new global systems, or settle claims whose epistemic strength belongs to the source-review pass.

P5 remains blocked until the mandatory `151/151` P4 exit audit passes.
