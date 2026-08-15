# P4 Pilot Evidence and Hazard Packets

Status: **ACTIVE DRAFT — hazard-first evidence pass complete; numeric rating scale remains unpinned**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: D-018, D-020, D-024, D-028, D-030, D-031, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_PILOT_ROSTER_AND_CALIBRATION_PLAN.md`

## 1. Purpose

This document is the first source-reviewed hazard packet pass for the eight-species P4 calibration roster.

It intentionally does **not** pin the six-axis `rating_scale_version`. The point of this pass is to make hazard, behavior, environment, approach-invalidating capability, historical uncertainty, and exceptional-individual semantics inspectable **before** choosing 5/6/7-tier numeric normalization.

The invariant under test is:

```text
species stats describe baseline capability
hazard records describe consequence semantics
behavior + environment decide when those semantics become relevant
human competence/equipment/knowledge decide available approaches
```

No packet below is a final 151-species dossier. Each remains `draft` until the rating scale, full dossier fields, cross-species review, and source audit are complete.

## 2. Shared source anchors

### Structured source

`SRC-DATA-001` / PokéAPI `api-data`, pinned revision:

`2cda0b56a3a8ad2529d8aac73528225f96d2c848`

Exact pilot source rows are read from:

- `data/api/v2/pokemon/13/index.json`
- `data/api/v2/pokemon/15/index.json`
- `data/api/v2/pokemon/19/index.json`
- `data/api/v2/pokemon/92/index.json`
- `data/api/v2/pokemon/130/index.json`
- `data/api/v2/pokemon/131/index.json`
- `data/api/v2/pokemon/140/index.json`
- `data/api/v2/pokemon/151/index.json`

This source carries raw identifiers, types, base stats, physical metadata, abilities and evolution-linked data. It is an `ADAPT` source, not authority for ancient ecology, temperament, medical severity, folklore, or local history.

### Current rights-holder descriptive source

Current Pokémon Pokédex pages are used as C2 descriptive evidence, verified on 2026-08-15:

- Rattata: `https://www.pokemon.com/us/pokedex/rattata`
- Weedle: `https://www.pokemon.com/us/pokedex/weedle`
- Beedrill: `https://www.pokemon.com/us/pokedex/beedrill`
- Lapras: `https://www.pokemon.com/us/pokedex/lapras`
- Gyarados: `https://www.pokemon.com/us/pokedex/gyarados`
- Gastly: `https://www.pokemon.com/us/pokedex/gastly`
- Kabuto: `https://www.pokemon.com/us/pokedex/kabuto`
- Mew: `https://www.pokemon.com/us/pokedex/mew`

Pokédex prose is paraphrased. Version-specific statements remain version-context evidence and do not silently become universal proto-Kanto history.

## 3. Evidence and derivation discipline

For this pilot:

- `C1` = pinned structured source fact used as an input, such as type, size, raw base stat or evolution relationship;
- `C2` = current official/rightsholder descriptive evidence;
- `D1` = bounded project mechanical/ecological interpretation directly supported by cited evidence;
- `D2` = explicitly project-authored ancient-setting or encounter content that is compatible with evidence but not canon;
- `U` = materially unresolved and forbidden from being silently filled.

A type, ability or move name alone does not establish exact human medical consequences. In particular, `Poison` typing does not define a venom dosage, fatality rate, duration, antidote, or Injury severity.

## 4. #019 Rattata packet

```yaml
identity:
  national_dex: 19
  species_key: rattata
  official_name_en: Rattata
  dossier_status: draft
canonical_source_data:
  types: [normal]
  base_stats_raw: {hp: 30, attack: 56, defense: 35, special_attack: 25, special_defense: 35, speed: 72}
  physical_metadata: {height_m: 0.3, weight_kg: 3.5}
  abilities_relevant_to_p4: [run-away, guts]
  evolution_source: {evolves_from: none, evolves_to: [raticate]}
species_stat_profile:
  rating_scale_version: pilot-unpinned
```

### Evidence packet

- `RAT-C1-001`: Rattata is a small Normal-type species with a raw profile whose strongest pilot-relevant contrast is Speed relative to its low durability/potency values.
- `RAT-C2-001`: official Pokédex material describes continuously growing incisors and the ability to gnaw hard material including wood.
- `RAT-C2-002`: official material presents Rattata as common wildlife that can still be hazardous rather than as a harmless pet baseline.
- `RAT-D1-001`: bite/gnaw pressure can therefore threaten exposed provisions, wooden containers, lashings or similar ordinary expedition material when the fiction provides access.
- `RAT-D1-002`: its common-species role permits ordinary humans to have recognition/avoidance knowledge, but actual local abundance remains locality-dependent rather than universally assumed.

### Hazard record — `rattata-bite-and-gnaw`

```yaml
kind: other
delivery_or_exposure:
  - close bite after cornering, handling, pursuit or failed disengagement
  - unattended or reachable supply/equipment gnawing
prerequisite_or_trigger:
  - threatened/cornered individual
  - accessible food, nesting material or chewable obstruction
warning_signs:
  - visible incisors
  - fresh gnaw damage or small tracks where locally learnable
immediate_effects:
  - localized physical injury on a successful bite
  - damaged/lost exposed supplies when the target is equipment rather than a person
delayed_or_persistent_effects: []
ordinary_consequence_ceiling: "normally Light/Serious physical or resource consequence; routine interactions may require no roll once the human has sufficient competence, equipment and favorable context"
exceptional_consequence_ceiling: "may exceed ordinary ceiling only through explicit individual traits, terrain, repeated exposure or lethal escalation"
countermeasures:
  - distance and a clear retreat path
  - protected/raised supplies and containers appropriate to local technology
  - prior recognition of gnaw/track signs
context_amplifiers:
  - cramped storage or burrow access
  - darkness/poor footing
  - exposed food or damaged containers
context_mitigators:
  - open terrain
  - prepared storage
  - experienced human with suitable tools
 governing_species_axes: [force, speed]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [RAT-C2-001, RAT-D1-001]
```

### Progression calibration example

- **Early / poorly prepared:** crossing a cramped food store after signs of nesting can still require a check because a bite, dropped supplies or damaged provisions is meaningful.
- **Later / experienced / equipped:** driving one ordinary Rattata away in open favorable terrain may become routine under D-024 and require **no roll**.
- The Rattata baseline does not change between those scenes.

## 5. Named/apex fixture — `pilot-rattata-apex-01`

This fixture tests the approved `ordinary weak species later becomes routine / rare exceptional member can still be terrifying` direction.

```yaml
individual_id: pilot-rattata-apex-01
species_key: rattata
status: semantic-fixture-no-final-numeric-deltas
evidence_class: D2
persistent_identity: true
player_level_scaling: forbidden
final_stat_deltas: intentionally_unresolved_until_rating_scale_pin
```

### Project-authored history and distinction

This individual is a long-surviving Rattata that has repeatedly escaped human food-cache defenses and trap lines in one bounded locality. Survival did not transform the whole species; it taught this one animal how humans usually arrange bait, approach storage, and block exits.

Required persistent traits:

- `trap_wary`: does not treat ordinary bait placement as an automatic safe approach;
- `route_memory`: uses previously successful cover/escape paths when they remain available;
- `supply_raider`: may attack expedition resources or access points instead of entering a fair frontal fight;
- `false_commitment`: may approach far enough to provoke a premature human action before retreating toward cover when fiction supports it.

Learnable warning signature, all **D2/local-only**:

- one recurring asymmetric track/drag mark or scar-derived sign;
- bait or lashings found gnawed without the expected trap being sprung;
- repeated use of the same narrow escape channel until humans deliberately change the environment.

The exact visual scar/title/folklore epithet remains deferred to later locality content. The fixture must be dangerous because the player can learn that **this individual behaves differently**, not because an invisible `elite +N` affix appears.

Numeric deltas are assigned only after rating calibration. Selected axes may eventually exceed an ordinary Raticate if the final individual profile explicitly earns that exception; doing so must not redefine Rattata's species baseline.

## 6. #013 Weedle packet

```yaml
identity: {national_dex: 13, species_key: weedle, official_name_en: Weedle, dossier_status: draft}
canonical_source_data:
  types: [bug, poison]
  base_stats_raw: {hp: 40, attack: 35, defense: 30, special_attack: 20, special_defense: 20, speed: 50}
  physical_metadata: {height_m: 0.3, weight_kg: 3.2}
  abilities_relevant_to_p4: [shield-dust]
  evolution_source: {evolves_from: none, evolves_to: [kakuna]}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence packet

- `WEE-C2-001`: official material explicitly warns of the sharp stinger on Weedle's head.
- `WEE-C2-002`: official material places it hiding in grass/bushes while eating leaves and describes strong smell-based food detection in some current entries.
- `WEE-C1-001`: structured source identifies Bug/Poison typing.
- `WEE-U-001`: the reviewed current evidence does **not** establish a human venom dosage, fatality rate, duration, or deterministic Injury ceiling. Those values must not be reverse-engineered from type, BST, Force or Potency.

### Hazard record — `weedle-stinger-exposure`

```yaml
kind: venom
delivery_or_exposure:
  - direct contact with the head stinger
  - accidental contact while moving through concealed vegetation
prerequisite_or_trigger:
  - human closes distance, handles, steps into concealed position or otherwise allows stinger contact
warning_signs:
  - visible head stinger when the individual is seen
  - vegetation/habitat signs only when authored and locally supportable
immediate_effects:
  - puncture/contact exposure
  - poison consequence is possible, but exact human severity remains U pending stronger evidence/bounded gameplay calibration
delayed_or_persistent_effects:
  - intentionally_unresolved_pending_hazard_evidence
ordinary_consequence_ceiling: intentionally_unresolved_pending_hazard_evidence
exceptional_consequence_ceiling: "may be higher under repeated exposure or exceptional individual/context, but cannot be inferred from stats"
countermeasures:
  - distance and avoiding blind handling
  - protective clothing/tools only where actual item fiction covers contact
  - hazard-specific remedy only after P4/P5 defines evidence-backed item semantics
emergency_consumable_hooks:
  - matching anti-venom/poison-response item class is allowed as a future authored hook, not yet instantiated
context_amplifiers:
  - dense vegetation and poor visibility
  - repeated/group exposure opportunities
context_mitigators:
  - clear visibility
  - distance and deliberate path choice
governing_species_axes: [speed]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [WEE-C2-001, WEE-C1-001, WEE-U-001]
```

### Calibration result

Weedle is the required proof that **low six-axis ratings cannot imply low hazard severity**. The pilot deliberately leaves the post-exposure medical ceiling unresolved rather than fabricating it; rating calibration must still work even with this hazard held outside the stat scale.

## 7. #015 Beedrill packet

```yaml
identity: {national_dex: 15, species_key: beedrill, official_name_en: Beedrill, dossier_status: draft}
canonical_source_data:
  types: [bug, poison]
  base_stats_raw: {hp: 65, attack: 90, defense: 40, special_attack: 45, special_defense: 80, speed: 75}
  physical_metadata: {height_m: 1.0, weight_kg: 29.5}
  abilities_relevant_to_p4: [swarm]
  evolution_source: {evolves_from: kakuna, evolves_to: []}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence packet

- `BEE-C2-001`: official Pokédex material characterizes Beedrill as highly territorial around its nest.
- `BEE-C2-002`: official material explicitly describes angered Beedrill attacking as a furious swarm/group.
- `BEE-D1-001`: colony pressure should therefore be modeled as repeated exposure opportunities, pursuit, denied routes and time pressure rather than a generic `swarm +N stats` modifier.
- `BEE-U-001`: exact human venom severity remains separate from the official territorial/swarm evidence.

### Hazard record — `beedrill-colony-pressure`

```yaml
kind: other
delivery_or_exposure:
  - repeated close attack opportunities from multiple individuals
  - pursuit or route denial around a protected nest/colony area
prerequisite_or_trigger:
  - nest/territory intrusion or an authored escalation that angers the colony
warning_signs:
  - visible nest/colony activity where discoverable
  - increasing number of Beedrill or repeated territorial approach
immediate_effects:
  - movement/escape pressure
  - repeated physical/sting exposure opportunities
  - loss of safe positioning or equipment during retreat
delayed_or_persistent_effects:
  - any venom persistence is owned by a separate venom record and remains evidence-bounded
ordinary_consequence_ceiling: "Serious harm/resource loss is plausible when escape is contested; Critical/death requires explicit prolonged/blocked lethal escalation under D-020"
exceptional_consequence_ceiling: "higher only through explicit colony scale, environment or exceptional individuals"
countermeasures:
  - avoid/withdraw from identified nest territory
  - preserve an escape route instead of treating the encounter as mandatory combat
  - protective preparation only when the item actually covers the exposure
context_amplifiers:
  - narrow terrain
  - failed retreat
  - proximity to nest/young
context_mitigators:
  - early recognition
  - distance
  - open retreat corridor
governing_species_axes: [force, speed]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [BEE-C2-001, BEE-C2-002, BEE-D1-001]
```

### Evolution-family invariant

Weedle → Kakuna → Beedrill may share poison/stinger-related family evidence, but **Beedrill's explicit territorial swarm behavior does not propagate backward into a rule that every Weedle encounter is an aggressive swarm**.

## 8. #131 Lapras packet

```yaml
identity: {national_dex: 131, species_key: lapras, official_name_en: Lapras, dossier_status: draft}
canonical_source_data:
  types: [water, ice]
  base_stats_raw: {hp: 130, attack: 85, defense: 80, special_attack: 85, special_defense: 95, speed: 60}
  physical_metadata: {height_m: 2.5, weight_kg: 220.0}
  abilities_relevant_to_p4: [water-absorb, shell-armor]
  evolution_source: {evolves_from: none, evolves_to: []}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence packet

- `LAP-C2-001`: official material depicts Lapras as highly intelligent and able to understand human speech.
- `LAP-C2-002`: official material depicts it carrying people across water/on its back and enjoying such swimming in favorable circumstances.
- `LAP-D1-001`: those claims justify negotiation/cooperation as a legal approach, but do **not** establish routine ancient ownership, automatic friendliness, or universal ferry service.
- `LAP-D1-002`: its large aquatic body and environment can create severe crossing consequences without any hostile intent.

### Hazard record — `lapras-open-water-dependence`

```yaml
kind: drowning
delivery_or_exposure:
  - human becomes separated from stable shore/craft/support in deep or dangerous water
  - sudden movement/cold conditions create loss of footing or safe position
prerequisite_or_trigger:
  - open-water interaction where human safety depends on position, support or cooperation
warning_signs:
  - environmental water/weather conditions
  - visible distance from safe footing
immediate_effects:
  - displacement, immersion, lost equipment or separation
  - possible Fatigue/Injury/Fear consequences according to P3 and scene fiction
delayed_or_persistent_effects:
  - cold/exposure consequences only where the authored environment actually supports them
ordinary_consequence_ceiling: "can become Critical/lethal through explicit drowning/exposure fiction even when Lapras is non-hostile"
exceptional_consequence_ceiling: none
countermeasures:
  - safe route/craft/tethering or other setting-appropriate crossing preparation
  - establish cooperation rather than assuming control
context_amplifiers:
  - cold water, storm, distance from shore, heavy Load
context_mitigators:
  - calm water, shoreline access, prepared crossing equipment
governing_species_axes: [vigor, force]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [LAP-C2-002, LAP-D1-002]
```

### Calibration result

Lapras is the mandatory **high-capability does not imply aggression** case. Rating scale selection must not add hostility or encounter DC merely because several raw stats are high.

## 9. #130 Gyarados packet

```yaml
identity: {national_dex: 130, species_key: gyarados, official_name_en: Gyarados, dossier_status: draft}
canonical_source_data:
  types: [water, flying]
  base_stats_raw: {hp: 95, attack: 125, defense: 79, special_attack: 60, special_defense: 100, speed: 81}
  physical_metadata: {height_m: 6.5, weight_kg: 235.0}
  abilities_relevant_to_p4: [intimidate]
  evolution_source: {evolves_from: magikarp, evolves_to: []}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence packet

- `GYA-C2-001`: official material repeatedly characterizes Gyarados rampages as destructive and difficult to stop once enraged.
- `GYA-C2-002`: some official version-context text links Gyarados to settlement-scale destruction and destructive beam/fire-like imagery; this remains version-specific evidence rather than a universal proto-Kanto historical event.
- `GYA-D1-001`: its 6.5 m / 235 kg aquatic body plus explicit rampage evidence supports displacement, collision, terrain destruction and escape-route consequences independent of hit-point attrition.

### Hazard record — `gyarados-rampage-zone`

```yaml
kind: other
delivery_or_exposure:
  - body collision, tail/body movement, debris, water displacement or direct attack in an active rampage zone
  - loss of stable route/cover caused by environmental destruction
prerequisite_or_trigger:
  - authored enraged/rampaging state; high stats alone do not create this state
warning_signs:
  - visible large-body disturbance/destruction
  - authored escalation signs before close engagement when the event permits them
immediate_effects:
  - major displacement
  - destroyed cover/equipment/route
  - Serious/Critical physical consequences when directly exposed
delayed_or_persistent_effects:
  - location damage, stranded travel state or lost resources as authored
ordinary_consequence_ceiling: "Critical or lethal is legal only with explicit D-020 lethal fiction; escape/avoidance should usually be a first-class approach"
exceptional_consequence_ceiling: "settlement-scale consequences require authored evidence/context rather than a generic species combat rule"
countermeasures:
  - early evacuation/avoidance
  - terrain/cover that actually survives the described threat
  - do not require frontal combat as the default solution
context_amplifiers:
  - confined shoreline/water route
  - fragile structures
  - blocked retreat
context_mitigators:
  - distance
  - robust high ground/escape route where fiction supports it
governing_species_axes: [vigor, force, speed, potency]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [GYA-C2-001, GYA-D1-001]
```

### Calibration result

Gyarados proves that large-body force and explicit destructive behavior can make an encounter catastrophic **without** translating the species into a conventional boss HP sponge.

## 10. #092 Gastly packet

```yaml
identity: {national_dex: 92, species_key: gastly, official_name_en: Gastly, dossier_status: draft}
canonical_source_data:
  types: [ghost, poison]
  base_stats_raw: {hp: 30, attack: 35, defense: 30, special_attack: 100, special_defense: 35, speed: 80}
  physical_metadata: {height_m: 1.3, weight_kg: 0.1}
  abilities_relevant_to_p4: [levitate]
  evolution_source: {evolves_from: none, evolves_to: [haunter]}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence packet

- `GAS-C2-001`: official material describes Gastly as a gas-like/impalpable body capable of enveloping targets.
- `GAS-C2-002`: official material describes skin-contact poisoning/weakening and inhalation/suffocation or fainting risks in version-specific entries.
- `GAS-D1-001`: ordinary physical grabbing/restraint may therefore be an invalid approach rather than merely a high-Defense check.
- `GAS-U-001`: exact human dose, duration, long-term toxicity and death probability remain unresolved; the official text supports danger/fainting, not a universal deterministic death rule.

### Hazard record — `gastly-toxic-envelopment`

```yaml
kind: respiratory
delivery_or_exposure:
  - inhalation while inside/too close to the gaseous body
  - skin exposure during envelopment where supported by the official description
prerequisite_or_trigger:
  - Gastly successfully surrounds or remains in contact with the target
warning_signs:
  - visible gaseous body when observable
  - loss of safe distance during envelopment
immediate_effects:
  - weakening/poison exposure
  - fainting/incapacitation risk
  - breathing restriction/suffocation pressure
delayed_or_persistent_effects:
  - intentionally_unresolved beyond ordinary P3 recovery unless later evidence justifies more
ordinary_consequence_ceiling: "Incapacitated/Serious consequence is directly supportable; Critical/lethal escalation requires additional explicit scene evidence under D-020"
exceptional_consequence_ceiling: "higher only through exceptional individual/context or prolonged environmental exposure"
countermeasures:
  - avoid inhalation/contact and break envelopment
  - knowledge/preparation that actually provides a fictionally valid barrier/escape method
context_amplifiers:
  - enclosed space
  - poor escape route
  - repeated/prolonged exposure
context_mitigators:
  - open escape space
  - early recognition and maintained distance
governing_species_axes: [potency, speed]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [GAS-C2-001, GAS-C2-002, GAS-U-001]
```

### Approach invalidator — `gastly-impalpable-body`

A conventional `grab it / pin it / strike the body as if it were ordinary flesh` plan can be fictionally invalid before any roll. Knowledge or another capability must first establish an approach that can interact meaningfully with a gaseous Ghost body.

This is a permissions rule, not `+N Defense`.

## 11. #140 Kabuto packet

```yaml
identity: {national_dex: 140, species_key: kabuto, official_name_en: Kabuto, dossier_status: draft}
canonical_source_data:
  types: [rock, water]
  base_stats_raw: {hp: 30, attack: 80, defense: 90, special_attack: 55, special_defense: 45, speed: 55}
  physical_metadata: {height_m: 0.5, weight_kg: 11.5}
  abilities_relevant_to_p4: [swift-swim, battle-armor]
  evolution_source: {evolves_from: none, evolves_to: [kabutops]}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence packet

- `KAB-C2-001`: official material places Kabuto deep in prehistory, commonly around the 300-million-year scale.
- `KAB-C2-002`: official material also allows that exceptionally rare living specimens may still exist in limited places while the species is extinct almost everywhere.
- `KAB-C2-003`: its shell is explicitly protective/hard.
- `KAB-U-001`: none of that evidence establishes that living Kabuto inhabit the opening proto-Kanto locality.

### Historical/locality rule

Kabuto is the pilot's proof that a dossier can be mechanically complete while a direct-spawn claim remains `U`.

Legal later realizations include:

- fossil/remain/knowledge evidence;
- an exceptionally rare living relict encounter in a specifically justified locality;
- specialist rumor whose truth is intentionally uncertain.

Illegal shortcut:

- `Kabuto is Gen I, therefore it routinely spawns in ancient Kanto.`

### Capability record — `kabuto-hard-shell`

The shell supports high physical protection/Guard derivation and may invalidate trivial bare-handed damage assumptions, but it is **not** an absolute immunity tag. Exact protection belongs to the pinned rating scale plus scene-specific tools/approaches.

No separate high-severity hazard is required merely to fill the schema.

## 12. #151 Mew packet

```yaml
identity: {national_dex: 151, species_key: mew, official_name_en: Mew, dossier_status: draft}
canonical_source_data:
  types: [psychic]
  base_stats_raw: {hp: 100, attack: 100, defense: 100, special_attack: 100, special_defense: 100, speed: 100}
  physical_metadata: {height_m: 0.4, weight_kg: 4.0}
  abilities_relevant_to_p4: [synchronize]
  evolution_source: {evolves_from: none, evolves_to: []}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence packet

- `MEW-C2-001`: official material phrases Mew's all-Pokémon genetic composition as a reported/said claim rather than turning it into omniscient setting proof.
- `MEW-C2-002`: official material explicitly describes voluntary invisibility and the ability to avoid notice even near people.
- `MEW-D1-001`: ordinary visual tracking/encounter discovery therefore cannot be assumed to work simply because a Mew event is present in content data.
- `MEW-U-001`: Psychic typing or broad move availability does not authorize an undefined `can do anything psychically` ancient-world power package.

### Anomalous capability — `mew-observation-evasion`

```yaml
kind: other
delivery_or_exposure: []
prerequisite_or_trigger:
  - Mew chooses to avoid observation
warning_signs: []
immediate_effects:
  - ordinary visual confirmation/tracking may become invalid
  - encounter may resolve through traces, indirect evidence or a fleeting exceptional observation rather than direct confrontation
delayed_or_persistent_effects: []
ordinary_consequence_ceiling: "knowledge/access consequence, not automatic bodily harm"
exceptional_consequence_ceiling: none
countermeasures:
  - no generic countermeasure is granted; event-specific evidence/conditions must justify any successful observation
context_amplifiers: []
context_mitigators: []
governing_species_axes: []
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [MEW-C2-002, MEW-D1-001]
```

### Mythical treatment invariant

Mew can satisfy P4/P9 through indirect/singular authored presence. Nothing in this packet creates routine spawning, ownership, capture or encounter-grinding logic.

## 13. Cross-pilot hazard matrix

| Pilot requirement | Species proving it | Required invariant |
|---|---|---|
| ordinary weak species later becomes routine | Rattata | player competence/context changes; species baseline does not |
| weak-species terrifying exception | `pilot-rattata-apex-01` | persistent authored identity/history, never level-scaled elite affix |
| low stat / high hazard | Weedle | venom consequence not encoded by Potency/BST |
| group pressure | Beedrill | repeated exposure + route denial, not swarm stat bonus |
| high capability / low presumed aggression | Lapras | cooperation can be legal; environment can still be lethal |
| large physical/destructive escalation | Gyarados | scale/rampage alters permissions and environment, not just HP damage |
| anomalous approach invalidation | Gastly | invalid plans fail permission check before numeric contest |
| historical uncertainty | Kabuto | direct locality occurrence may remain `U` |
| Mythical indirect treatment | Mew | access/observation can be the challenge; routine spawn not required |

## 14. Consequence-ceiling audit

This pass intentionally produces three different evidence outcomes instead of forcing every species into the same threat ladder:

1. **Evidence-supported severe consequence:** Gyarados destructive exposure, Gastly envelopment/fainting risk, open-water drowning context around Lapras.
2. **Hazard exists but exact medical ceiling is unresolved:** Weedle venom and the venom component of Beedrill stings.
3. **No mandatory bodily-harm hazard:** Kabuto and Mew can exercise history/access/knowledge mechanics without invented lethality.

This distinction is required for the later numeric calibration. If a candidate rating scale only feels correct after inflating Weedle's Potency or assigning artificial danger numbers to Kabuto/Mew, that scale has failed the hazard-leakage test.

## 15. Encounter examples to carry into numeric calibration

These examples are the fixed semantic test fixtures for the 5/6/7-tier comparison.

### E1 — ordinary Rattata, early human

Close quarters, exposed supplies, poor preparation. A meaningful check may exist because failure can cost injury or provisions.

### E2 — ordinary Rattata, experienced human

Open route, good equipment, recognized behavior, clear retreat. Same species baseline; interaction may be routine/no-roll.

### E3 — `pilot-rattata-apex-01`

The player recognizes abnormal trap avoidance and repeated supply-targeting. Danger comes from persistent learned behavior plus later explicit stat deltas, never hidden level matching.

### E4 — Weedle in dense brush

The important question is exposure prevention. Successful stinger contact transitions into a separate hazard consequence record whose exact medical ceiling is not a stat lookup.

### E5 — Beedrill nest boundary

Early warning allows withdrawal. Deep intrusion converts the scene into repeated exposure and escape-route pressure; defeating one Beedrill does not dissolve colony semantics.

### E6 — cooperative Lapras crossing

High species capability does not generate hostility. The main severe risk can be open water, Load, cold and loss of support rather than an opposed attack.

### E7 — rampaging Gyarados near a constrained water route

The key actions are evacuation, route choice, cover and avoiding displacement/destruction. A frontal combat solution is not assumed.

### E8 — Gastly in an enclosed structure

A normal weapon/grapple plan may be invalid before the roll. Maintaining breathable space and escaping envelopment are first-class approaches.

### E9 — Kabuto evidence without confirmed living population

A fossil/remain/specialist report can advance knowledge without silently proving a local living spawn table.

### E10 — Mew indirect observation

A rare chain may produce traces or a fleeting observation while direct visual pursuit fails because Mew can deliberately avoid notice.

## 16. Pilot findings before rating selection

The evidence pass exposes **no new owner-level Human Design Gate**.

The existing D-031 direction remains coherent:

- stats and hazards must stay separate;
- aggression cannot be inferred from stat magnitude;
- group/environment/anomalous permissions need explicit semantics;
- an exceptional weak-species individual works without player-level scaling;
- unsupported medical/history claims can remain unresolved without blocking the whole schema.

The next coherent work is therefore mechanical calibration, not another lore choice.

## 17. Exact next work

1. Define reproducible candidate mappings for the preserved **5-tier, 6-tier and 7-tier** six-axis scales using the same raw source values.
2. Run all ten encounter fixtures against each candidate without changing their hazard/behavior semantics.
3. Compare monotonicity, useful differentiation, saturation, D-024 translation pressure and exception pressure.
4. Pin the **smallest useful** `rating_scale_version` only if one candidate passes all pilot invariants.
5. Then assign final six-axis pilot profiles and numeric deltas for `pilot-rattata-apex-01`.
6. Run the P2/P3/provenance/schema-completeness review before any bulk 151-species authoring.
