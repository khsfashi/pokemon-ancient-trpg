# P4 Pilot Evidence and Hazard Packets

Status: **ACTIVE DRAFT — hazard-first evidence pass complete; numeric rating scale remains unpinned**  
Date: **2026-08-15**  
Tracks: **#5**  
Depends on: D-018, D-020, D-024, D-028, D-030, D-031, `docs/P4_POKEMON_DOMAIN_CONTRACT.md`, `docs/P4_SPECIES_DOSSIER_SCHEMA.md`, `docs/P4_HAZARD_SEVERITY_CLARIFICATION.md`, `docs/P4_PILOT_ROSTER_AND_CALIBRATION_PLAN.md`

## 1. Purpose

This is the first source-reviewed hazard packet pass for the eight-species P4 calibration roster.

It deliberately does **not** pin the six-axis `rating_scale_version`. Hazard, behavior, environment, approach invalidation, historical uncertainty, and exceptional-individual semantics must be inspectable before the project compares 5/6/7-tier numeric normalization.

```text
species ratings describe baseline capability
hazard records describe consequence semantics
behavior + environment decide when those semantics matter
human competence/equipment/knowledge decide available approaches
```

No packet below is a final 151-species dossier. Each remains `draft` until numeric calibration, full-schema authoring, provenance review, and cross-species validation are complete.

## 2. Source anchors and evidence classes

### 2.1 Structured normalization source

`SRC-DATA-001` / PokéAPI `api-data`, pinned revision:

`2cda0b56a3a8ad2529d8aac73528225f96d2c848`

Pilot rows:

- `data/api/v2/pokemon/13/index.json`
- `data/api/v2/pokemon/15/index.json`
- `data/api/v2/pokemon/19/index.json`
- `data/api/v2/pokemon/92/index.json`
- `data/api/v2/pokemon/130/index.json`
- `data/api/v2/pokemon/131/index.json`
- `data/api/v2/pokemon/140/index.json`
- `data/api/v2/pokemon/151/index.json`

`SRC-DATA-001` is an `ADAPT` normalization input. Its structured fields preserve raw identifiers, types, base stats, physical metadata, abilities, and evolution-linked data, but **the community dataset is not itself assigned C1/C2 canon authority**.

### 2.2 Current rights-holder descriptive source

Current Pokémon Pokédex pages were rechecked on 2026-08-15:

- `OFFICIAL-DEX-RATTATA` — `https://www.pokemon.com/us/pokedex/rattata`
- `OFFICIAL-DEX-WEEDLE` — `https://www.pokemon.com/us/pokedex/weedle`
- `OFFICIAL-DEX-BEEDRILL` — `https://www.pokemon.com/us/pokedex/beedrill`
- `OFFICIAL-DEX-LAPRAS` — `https://www.pokemon.com/us/pokedex/lapras`
- `OFFICIAL-DEX-GYARADOS` — `https://www.pokemon.com/us/pokedex/gyarados`
- `OFFICIAL-DEX-GASTLY` — `https://www.pokemon.com/us/pokedex/gastly`
- `OFFICIAL-DEX-KABUTO` — `https://www.pokemon.com/us/pokedex/kabuto`
- `OFFICIAL-DEX-MEW` — `https://www.pokemon.com/us/pokedex/mew`

Pokédex prose is paraphrased rather than copied. Version-specific statements remain version-context evidence and do not silently become universal proto-Kanto history.

### 2.3 Evidence classification

This document follows the binding P4 domain contract exactly:

- `C1` — direct official fact;
- `C2` — cross-source official synthesis;
- `D1` — conservative derived inference;
- `D2` — explicit project-authored extrapolation;
- `U` — unsupported / unresolved.

Structured source rows are referenced as `SRC`, not promoted into C1/C2 by themselves.

A type, ability, or move name alone does not establish exact human medical consequences. `Poison` typing does not define venom dosage, fatality rate, duration, antidote, or Injury severity.

---

## 3. #019 Rattata

```yaml
identity: {national_dex: 19, species_key: rattata, official_name_en: Rattata, dossier_status: draft}
canonical_source_data:
  source_ref: SRC-DATA-001@2cda0b56
  types: [normal]
  base_stats_raw: {hp: 30, attack: 56, defense: 35, special_attack: 25, special_defense: 35, speed: 72}
  physical_metadata: {height_m: 0.3, weight_kg: 3.5}
  abilities_relevant_to_p4: [run-away, guts]
  evolution_source: {evolves_from: none, evolves_to: [raticate]}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence

- `RAT-C1-001` / `OFFICIAL-DEX-RATTATA`: official material describes incisors that keep growing and can gnaw very hard material, including wood.
- `RAT-C1-002` / `OFFICIAL-DEX-RATTATA`: official material treats Rattata as common wildlife that can still be hazardous.
- `RAT-D1-001`: accessible provisions, wooden containers, lashings, or similar expedition material can therefore be legitimate gnaw targets when scene fiction provides access.
- `RAT-D1-002`: common-species recognition is plausible, but local abundance still belongs to locality authoring rather than a universal spawn rule.

### Hazard — `rattata-bite-and-gnaw`

```yaml
kind: other
delivery_or_exposure:
  - close bite after cornering, handling, pursuit, or failed disengagement
  - unattended/reachable supply or equipment gnawing
prerequisite_or_trigger:
  - threatened/cornered individual
  - accessible food, nesting material, or chewable obstruction
warning_signs:
  - visible incisors
  - fresh gnaw damage or small tracks where locally learnable
immediate_effects:
  - localized physical injury on a successful bite
  - damaged/lost exposed supplies when equipment is targeted
delayed_or_persistent_effects: []
ordinary_consequence_ceiling: "normally Light/Serious physical or resource consequence; may become no-roll when the interaction is genuinely routine"
exceptional_consequence_ceiling: "higher only through explicit individual traits, terrain, repeated exposure, or lethal escalation"
countermeasures:
  - distance and clear retreat
  - setting-appropriate protected/raised storage
  - learned recognition of gnaw/track signs
context_amplifiers: [cramped_storage, darkness_or_poor_footing, exposed_food]
context_mitigators: [open_terrain, prepared_storage, suitable_tools]
governing_species_axes: [force, speed]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [RAT-C1-001, RAT-D1-001]
```

### Fixed progression fixture

- Early / poorly prepared: a cramped food-store encounter may require a check because bite, dropped supplies, or provision loss is meaningful.
- Later / experienced / equipped: driving away one ordinary Rattata in open favorable terrain may be routine and require **no roll** under D-024.
- The Rattata species baseline is identical in both scenes.

---

## 4. Named/apex Rattata — `pilot-rattata-apex-01`

This fixture proves the owner-approved `ordinary weak species later becomes routine / rare exceptional individual can remain terrifying` direction without level scaling.

```yaml
individual_id: pilot-rattata-apex-01
species_key: rattata
status: semantic-fixture-no-final-numeric-deltas
evidence_class: D2
persistent_identity: true
player_level_scaling: forbidden
final_stat_deltas: intentionally_unresolved_until_rating_scale_pin
```

### D2 local history

One long-surviving Rattata has repeatedly escaped human food-cache defenses and trap lines in a bounded locality. This does not redefine the species. It explains why **this individual** learned common bait arrangements, approach patterns, blocked exits, and storage habits.

Persistent semantic traits:

- `trap_wary` — ordinary bait placement is not automatically a safe approach;
- `route_memory` — reuses previously successful cover/escape routes while they remain available;
- `supply_raider` — may target provisions/access points instead of accepting frontal combat;
- `false_commitment` — may provoke a premature human action, then withdraw toward cover when fiction supports it.

Learnable warning signature, all D2/local-only:

- one recurring asymmetric track/drag mark or scar-derived sign;
- bait/lashings found gnawed without the expected trap being sprung;
- repeated use of the same narrow escape channel until humans deliberately alter it.

The exact visible scar, epithet, and local folklore are intentionally deferred to later locality content. The player should learn that the individual behaves differently before the encounter is reduced to hidden numeric superiority.

Final stat deltas wait for the pinned rating scale. Selected axes may eventually exceed an ordinary Raticate only if the explicit individual profile earns that exception; this never rewrites Rattata's baseline.

---

## 5. #013 Weedle

```yaml
identity: {national_dex: 13, species_key: weedle, official_name_en: Weedle, dossier_status: draft}
canonical_source_data:
  source_ref: SRC-DATA-001@2cda0b56
  types: [bug, poison]
  base_stats_raw: {hp: 40, attack: 35, defense: 30, special_attack: 20, special_defense: 20, speed: 50}
  physical_metadata: {height_m: 0.3, weight_kg: 3.2}
  abilities_relevant_to_p4: [shield-dust]
  evolution_source: {evolves_from: none, evolves_to: [kakuna]}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence

- `WEE-C1-001` / `OFFICIAL-DEX-WEEDLE`: official material explicitly warns about the sharp stinger on Weedle's head.
- `WEE-C1-002` / `OFFICIAL-DEX-WEEDLE`: official material places Weedle hiding in grass/bushes while eating leaves; current entries also describe strong smell-based food detection.
- `WEE-C1-003` / `OFFICIAL-DEX-WEEDLE`: official source identifies Weedle as Bug/Poison.
- `WEE-U-001`: reviewed evidence does **not** provide a human venom dose, fatality rate, duration, or deterministic Injury ceiling. Those values must not be inferred from typing, BST, Force, or Potency.

### Hazard — `weedle-stinger-exposure`

```yaml
kind: venom
delivery_or_exposure:
  - direct contact with the head stinger
  - accidental contact while moving through concealed vegetation
prerequisite_or_trigger:
  - human closes distance, handles, steps into concealment, or otherwise allows stinger contact
warning_signs:
  - visible head stinger when the individual is seen
  - vegetation/habitat signs only when authored and locally supported
immediate_effects:
  - puncture/contact exposure
  - poison consequence possible; exact human medical severity remains U
delayed_or_persistent_effects:
  - intentionally_unresolved_pending_hazard_evidence
ordinary_consequence_ceiling: intentionally_unresolved_pending_hazard_evidence
exceptional_consequence_ceiling: "may rise under repeated exposure or explicit exceptional context, never because of stat inflation"
countermeasures:
  - distance and avoidance of blind handling
  - protective equipment only where actual item fiction blocks contact
emergency_consumable_hooks:
  - future matching poison-response item allowed only after evidence-backed semantics exist
context_amplifiers: [dense_vegetation, poor_visibility, repeated_exposure_opportunities]
context_mitigators: [clear_visibility, deliberate_distance]
governing_species_axes: [speed]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [WEE-C1-001, WEE-U-001]
```

**Calibration invariant:** Weedle must remain capable of a serious hazard model even if all six numeric ratings are low. The post-exposure medical ceiling is intentionally unresolved rather than fabricated.

---

## 6. #015 Beedrill

```yaml
identity: {national_dex: 15, species_key: beedrill, official_name_en: Beedrill, dossier_status: draft}
canonical_source_data:
  source_ref: SRC-DATA-001@2cda0b56
  types: [bug, poison]
  base_stats_raw: {hp: 65, attack: 90, defense: 40, special_attack: 45, special_defense: 80, speed: 75}
  physical_metadata: {height_m: 1.0, weight_kg: 29.5}
  abilities_relevant_to_p4: [swarm]
  evolution_source: {evolves_from: kakuna, evolves_to: []}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence

- `BEE-C1-001` / `OFFICIAL-DEX-BEEDRILL`: official material characterizes Beedrill as highly territorial around its nest.
- `BEE-C1-002` / `OFFICIAL-DEX-BEEDRILL`: official material explicitly describes angered Beedrill attacking as a furious swarm/group.
- `BEE-D1-001`: colony pressure should therefore use repeated exposure, pursuit, route denial, and time pressure rather than a generic `swarm +N stats` bonus.
- `BEE-U-001`: exact human venom severity remains separate from territorial/swarm evidence unless stronger direct evidence is later adopted.

### Hazard — `beedrill-colony-pressure`

```yaml
kind: other
delivery_or_exposure:
  - repeated close attack opportunities from multiple individuals
  - pursuit/route denial around a protected nest or colony area
prerequisite_or_trigger:
  - territory intrusion or authored escalation that angers the colony
warning_signs:
  - visible nest/colony activity where discoverable
  - increasing territorial approaches
immediate_effects:
  - movement/escape pressure
  - repeated physical/sting exposure opportunities
  - loss of safe position/equipment during retreat
delayed_or_persistent_effects:
  - venom persistence belongs to a separate evidence-bounded venom consequence
ordinary_consequence_ceiling: "Serious harm/resource loss plausible; Critical/death requires explicit prolonged/blocked lethal escalation under D-020"
exceptional_consequence_ceiling: "higher only through explicit colony scale, environment, or exceptional individual"
countermeasures:
  - identify and withdraw from nest territory
  - preserve escape instead of assuming mandatory combat
context_amplifiers: [narrow_terrain, failed_retreat, nest_proximity]
context_mitigators: [early_recognition, distance, open_retreat]
governing_species_axes: [force, speed]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [BEE-C1-001, BEE-C1-002, BEE-D1-001]
```

**Evolution-family invariant:** Weedle → Kakuna → Beedrill can share family evidence, but Beedrill's explicit territorial swarm behavior does **not** create a rule that every Weedle encounter is an aggressive swarm.

---

## 7. #131 Lapras

```yaml
identity: {national_dex: 131, species_key: lapras, official_name_en: Lapras, dossier_status: draft}
canonical_source_data:
  source_ref: SRC-DATA-001@2cda0b56
  types: [water, ice]
  base_stats_raw: {hp: 130, attack: 85, defense: 80, special_attack: 85, special_defense: 95, speed: 60}
  physical_metadata: {height_m: 2.5, weight_kg: 220.0}
  abilities_relevant_to_p4: [water-absorb, shell-armor]
  evolution_source: {evolves_from: none, evolves_to: []}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence

- `LAP-C1-001` / `OFFICIAL-DEX-LAPRAS`: official material depicts Lapras as highly intelligent and able to understand human speech.
- `LAP-C1-002` / `OFFICIAL-DEX-LAPRAS`: official material depicts Lapras carrying people across water/on its back under favorable circumstances.
- `LAP-D1-001`: cooperation/communication is therefore a legal encounter approach, but the evidence does **not** establish routine ancient ownership, guaranteed friendliness, or universal ferry service.
- `LAP-D1-002`: a large aquatic interaction can produce severe crossing consequences through environment without hostile intent.

### Hazard — `lapras-open-water-dependence`

```yaml
kind: drowning
delivery_or_exposure:
  - human becomes separated from shore/craft/support in deep or dangerous water
  - sudden movement or conditions cause loss of stable footing/support
prerequisite_or_trigger:
  - open-water interaction where human safety depends on position, support, or cooperation
warning_signs:
  - visible water/weather conditions
  - distance from safe footing
immediate_effects:
  - displacement, immersion, lost equipment, or separation
  - P3 Fatigue/Injury/Fear consequences as scene fiction warrants
delayed_or_persistent_effects:
  - cold/exposure only where authored environment supports it
ordinary_consequence_ceiling: "may become Critical/lethal through explicit drowning/exposure fiction even when Lapras is non-hostile"
exceptional_consequence_ceiling: none
countermeasures:
  - safe route/craft/tethering or other setting-appropriate crossing preparation
  - establish cooperation rather than assume control
context_amplifiers: [cold_water, storm, far_from_shore, heavy_load]
context_mitigators: [calm_water, shoreline_access, prepared_crossing_equipment]
governing_species_axes: [vigor, force]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [LAP-C1-002, LAP-D1-002]
```

**Calibration invariant:** high capability does not create aggression. A cooperative Lapras scene may be dominated by environmental risk rather than an opposed attack.

---

## 8. #130 Gyarados

```yaml
identity: {national_dex: 130, species_key: gyarados, official_name_en: Gyarados, dossier_status: draft}
canonical_source_data:
  source_ref: SRC-DATA-001@2cda0b56
  types: [water, flying]
  base_stats_raw: {hp: 95, attack: 125, defense: 79, special_attack: 60, special_defense: 100, speed: 81}
  physical_metadata: {height_m: 6.5, weight_kg: 235.0}
  abilities_relevant_to_p4: [intimidate]
  evolution_source: {evolves_from: magikarp, evolves_to: []}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence

- `GYA-C1-001` / `OFFICIAL-DEX-GYARADOS`: official material repeatedly describes destructive rampage behavior once Gyarados becomes enraged.
- `GYA-C1-002` / `OFFICIAL-DEX-GYARADOS`: some version-context entries describe settlement-scale destruction and destructive beam/fire-like imagery; those entries remain contextual evidence rather than universal proto-Kanto history.
- `GYA-D1-001`: its official size plus rampage evidence supports body collision, water displacement, debris, terrain damage, and escape-route consequences independent of HP subtraction.

### Hazard — `gyarados-rampage-zone`

```yaml
kind: other
delivery_or_exposure:
  - body collision, tail/body movement, debris, water displacement, or direct attack
  - loss of safe route/cover through environmental destruction
prerequisite_or_trigger:
  - explicit enraged/rampaging state; high ratings alone never create hostility
warning_signs:
  - visible large-body disturbance/destruction
  - authored escalation signs where the event permits them
immediate_effects:
  - major displacement
  - destroyed cover/equipment/route
  - Serious/Critical physical consequences when directly exposed
delayed_or_persistent_effects:
  - location damage, stranded state, or resource loss as authored
ordinary_consequence_ceiling: "Critical/lethal legal only with explicit D-020 lethal fiction; avoidance/evacuation remains first-class"
exceptional_consequence_ceiling: "settlement-scale consequences require authored context, not a generic species combat rule"
countermeasures:
  - early evacuation/avoidance
  - fictionally valid robust cover/high ground/escape route
context_amplifiers: [confined_shoreline, fragile_structures, blocked_retreat]
context_mitigators: [distance, valid_high_ground, open_escape]
governing_species_axes: [vigor, force, speed, potency]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [GYA-C1-001, GYA-D1-001]
```

**Calibration invariant:** Gyarados can be catastrophic because scale, behavior, and environment reshape the encounter; it does not need to be reduced to a conventional boss HP sponge.

---

## 9. #092 Gastly

```yaml
identity: {national_dex: 92, species_key: gastly, official_name_en: Gastly, dossier_status: draft}
canonical_source_data:
  source_ref: SRC-DATA-001@2cda0b56
  types: [ghost, poison]
  base_stats_raw: {hp: 30, attack: 35, defense: 30, special_attack: 100, special_defense: 35, speed: 80}
  physical_metadata: {height_m: 1.3, weight_kg: 0.1}
  abilities_relevant_to_p4: [levitate]
  evolution_source: {evolves_from: none, evolves_to: [haunter]}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence

- `GAS-C1-001` / `OFFICIAL-DEX-GASTLY`: official material describes a gas-like/impalpable body capable of enveloping targets.
- `GAS-C1-002` / `OFFICIAL-DEX-GASTLY`: version-context official descriptions include skin-contact poisoning/weakening and inhalation/suffocation or fainting risk.
- `GAS-D1-001`: ordinary grabbing/restraint may therefore be an invalid approach rather than merely a difficult physical check.
- `GAS-U-001`: exact human dose, duration, long-term toxicity, and death probability remain unresolved. Official evidence supports danger/fainting, not a universal automatic-death rule.

### Hazard — `gastly-toxic-envelopment`

```yaml
kind: respiratory
delivery_or_exposure:
  - inhalation while inside/too close to the gaseous body
  - skin exposure during envelopment where the official description supports it
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
  - intentionally_unresolved beyond ordinary P3 recovery unless later evidence supports more
ordinary_consequence_ceiling: "Incapacitated/Serious mapping is supportable; Critical/lethal requires additional explicit scene evidence under D-020"
exceptional_consequence_ceiling: "higher only through exceptional individual/context or prolonged exposure"
countermeasures:
  - avoid inhalation/contact and break envelopment
  - preparation that supplies an actually valid barrier/escape method
context_amplifiers: [enclosed_space, poor_escape_route, prolonged_exposure]
context_mitigators: [open_escape_space, early_recognition, maintained_distance]
governing_species_axes: [potency, speed]
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [GAS-C1-001, GAS-C1-002, GAS-U-001]
```

### Approach invalidator — `gastly-impalpable-body`

`grab it / pin it / strike it as ordinary flesh` can be fictionally invalid before a roll. Knowledge or another capability must first establish a meaningful interaction path. This is a permission rule, not `Defense +2`.

---

## 10. #140 Kabuto

```yaml
identity: {national_dex: 140, species_key: kabuto, official_name_en: Kabuto, dossier_status: draft}
canonical_source_data:
  source_ref: SRC-DATA-001@2cda0b56
  types: [rock, water]
  base_stats_raw: {hp: 30, attack: 80, defense: 90, special_attack: 55, special_defense: 45, speed: 55}
  physical_metadata: {height_m: 0.5, weight_kg: 11.5}
  abilities_relevant_to_p4: [swift-swim, battle-armor]
  evolution_source: {evolves_from: none, evolves_to: [kabutops]}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence

- `KAB-C1-001` / `OFFICIAL-DEX-KABUTO`: official material places Kabuto deep in prehistory, commonly around a 300-million-year scale.
- `KAB-C1-002` / `OFFICIAL-DEX-KABUTO`: official material allows exceptionally rare living specimens in limited places while describing the species as extinct almost everywhere.
- `KAB-C1-003` / `OFFICIAL-DEX-KABUTO`: the shell is explicitly protective/hard.
- `KAB-U-001`: none of this proves that living Kabuto inhabit the opening proto-Kanto locality.

### Historical/locality invariant

Mechanically valid future realizations include fossil/remain evidence, an exceptionally rare living relict in a specifically justified locality, or specialist rumor whose truth remains uncertain.

Forbidden shortcut:

`Kabuto is Gen I, therefore it routinely spawns in ancient Kanto.`

### Capability — `kabuto-hard-shell`

The shell can support high Guard derivation and invalidate trivial bare-handed assumptions, but it is not an absolute immunity. Exact protection belongs to the pinned rating scale plus scene-specific tools/approaches.

No bodily-harm hazard is invented merely to populate a template.

---

## 11. #151 Mew

```yaml
identity: {national_dex: 151, species_key: mew, official_name_en: Mew, dossier_status: draft}
canonical_source_data:
  source_ref: SRC-DATA-001@2cda0b56
  types: [psychic]
  base_stats_raw: {hp: 100, attack: 100, defense: 100, special_attack: 100, special_defense: 100, speed: 100}
  physical_metadata: {height_m: 0.4, weight_kg: 4.0}
  abilities_relevant_to_p4: [synchronize]
  evolution_source: {evolves_from: none, evolves_to: []}
species_stat_profile: {rating_scale_version: pilot-unpinned}
```

### Evidence

- `MEW-C1-001` / `OFFICIAL-DEX-MEW`: official material presents the claim that Mew contains the genetic composition of all Pokémon with explicit epistemic wording such as `said to`, rather than as a project-owned omniscience rule.
- `MEW-C1-002` / `OFFICIAL-DEX-MEW`: official material explicitly describes voluntary invisibility and avoidance of notice even near people.
- `MEW-D1-001`: ordinary visual tracking/encounter discovery therefore cannot be assumed to work merely because a Mew event is present in content data.
- `MEW-U-001`: Psychic typing or broad move access does not justify an undefined `can do anything psychically` power package.

### Anomalous capability — `mew-observation-evasion`

```yaml
kind: other
delivery_or_exposure: []
prerequisite_or_trigger:
  - Mew chooses to avoid observation
warning_signs: []
immediate_effects:
  - ordinary visual confirmation/tracking may become invalid
  - encounter may resolve through traces, indirect evidence, or a fleeting exceptional observation
delayed_or_persistent_effects: []
ordinary_consequence_ceiling: "knowledge/access consequence, not automatic bodily harm"
exceptional_consequence_ceiling: none
countermeasures:
  - no generic countermeasure; event-specific evidence/conditions must justify successful observation
context_amplifiers: []
context_mitigators: []
governing_species_axes: []
severity_is_not_capped_by_axis_rating: true
provenance_or_derivation_refs: [MEW-C1-002, MEW-D1-001]
```

**Mythical invariant:** Mew can satisfy P4/P9 through indirect or singular authored presence. Nothing here creates routine spawning, ownership, capture, or encounter grinding.

---

## 12. Cross-pilot validation matrix

| Requirement | Fixture | Invariant |
|---|---|---|
| ordinary weak species later becomes routine | Rattata | human competence/context changes; species baseline does not |
| terrifying weak-species exception | `pilot-rattata-apex-01` | persistent authored identity/history, never level-scaled elite affix |
| low stat / high hazard | Weedle | venom consequence is not encoded by Potency/BST |
| group pressure | Beedrill | repeated exposure + route denial, not swarm stat bonus |
| high capability / no presumed aggression | Lapras | cooperation is legal; environment may still be lethal |
| large destructive escalation | Gyarados | scale/rampage changes permissions/environment, not only HP damage |
| anomalous approach invalidation | Gastly | invalid plans fail permission check before numeric contest |
| historical uncertainty | Kabuto | direct locality occurrence may remain `U` |
| Mythical indirect treatment | Mew | access/observation can be the challenge; routine spawn not required |

## 13. Consequence-ceiling audit

The pilot deliberately preserves three different outcomes instead of forcing all species onto one danger ladder:

1. **Evidence supports severe consequence semantics:** Gyarados destructive exposure, Gastly envelopment/fainting pressure, and open-water drowning context around Lapras.
2. **A hazard exists but exact medical ceiling remains unresolved:** Weedle venom and any specific human venom consequence attached to Beedrill stings.
3. **No mandatory bodily-harm hazard is needed:** Kabuto and Mew can exercise history/access/knowledge mechanics without invented lethality.

If a rating candidate only feels correct after inflating Weedle's Potency or assigning artificial danger values to Kabuto/Mew, the candidate fails the `no hazard leakage` test.

## 14. Fixed encounter fixtures for numeric calibration

These semantics must stay unchanged while 5/6/7-tier numeric candidates are compared.

- **E1 — ordinary Rattata / early human:** close quarters, exposed supplies, poor preparation; a meaningful check may exist.
- **E2 — ordinary Rattata / experienced human:** open route, good equipment, recognized behavior, clear retreat; same species baseline may become no-roll.
- **E3 — `pilot-rattata-apex-01`:** learned trap avoidance and supply-targeting remain visible; later explicit deltas never depend on player level.
- **E4 — Weedle in dense brush:** exposure prevention is primary; successful stinger contact transitions into separate hazard consequence semantics.
- **E5 — Beedrill nest boundary:** early warning permits withdrawal; deep intrusion creates repeated exposure/escape pressure; defeating one member does not erase colony semantics.
- **E6 — cooperative Lapras crossing:** high capability does not generate hostility; open water, Load, cold, and support can dominate risk.
- **E7 — rampaging Gyarados at constrained water route:** evacuation, route, cover, and displacement matter more than mandatory frontal combat.
- **E8 — Gastly in enclosed structure:** ordinary grab/weapon plans may be invalid; breathable space and escape are first-class approaches.
- **E9 — Kabuto evidence without confirmed living population:** fossil/remain/specialist evidence can advance knowledge without inventing a local spawn table.
- **E10 — Mew indirect observation:** traces/fleeting observation are valid while direct pursuit may fail through deliberate invisibility.

## 15. Findings before numeric selection

This evidence pass exposes **no new owner-level Human Design Gate**.

D-031 remains coherent:

- stats and hazards stay separate;
- aggression is not inferred from stat magnitude;
- group/environment/anomalous permissions need explicit semantics;
- a rare weak-species apex works without player-level scaling;
- unsupported medical/history claims can remain unresolved without breaking the schema.

The next work is therefore mechanical calibration rather than a new lore choice.

## 16. Exact next work

1. Define reproducible candidate mappings for the preserved **5-tier, 6-tier, and 7-tier** six-axis scales from the same raw source values.
2. Run all ten fixed encounter fixtures against each candidate without changing hazard/behavior semantics.
3. Compare monotonicity, useful differentiation, saturation, D-024 translation pressure, and manual-exception pressure.
4. Pin the **smallest useful** `rating_scale_version` only if one candidate passes all pilot invariants.
5. Assign final six-axis pilot profiles and numeric deltas for `pilot-rattata-apex-01`.
6. Run P2/P3/provenance/schema-completeness review before any bulk 151-species authoring.
