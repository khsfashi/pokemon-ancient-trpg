# P4 Hazard Severity Clarification

Status: **BINDING P4 CLARIFICATION**  
Date: **2026-08-15**  
Owner direction: a Pokémon may be physically/statistically weak and still be seriously dangerous because of the thing it *does* — for example, a small venom-bearing species can threaten a human through a successful envenomation.

This clarification refines D-031 and `docs/P4_POKEMON_DOMAIN_CONTRACT.md`. It does not replace the six-axis species profile; it defines what those axes are **not allowed to imply** about hazards.

## 1. Core rule

**Species stats do not cap hazard severity.**

The six P4 ratings describe broad bodily/combat capabilities:

- Vigor
- Force
- Guard
- Potency
- Resistance
- Speed

They are not a universal measure of how dangerous the species is to an exposed human.

A low-Force, low-Vigor or low-Potency Pokémon may still create a severe or potentially lethal encounter when a species-specific capability has a dangerous exposure pathway or consequence.

Examples of stat-independent or only partially stat-dependent danger include:

- venom or toxin delivered by a bite, sting, spine, barb or contact;
- paralysis, sleep, spores, pollen or respiratory exposure;
- electrical discharge around water, metal, confined spaces or vulnerable equipment;
- fire, heat, cold, corrosion or environmental contamination;
- constriction, adhesion, entanglement, drowning or forced displacement;
- swarm/pack action where the danger comes from repeated exposure or loss of safe movement;
- Psychic/Ghost phenomena that invalidate ordinary physical approaches;
- disease-like, contamination-like or delayed consequences where explicitly supported by the species dossier.

A stat may influence whether the Pokémon lands, sustains or resists an action. It does **not** automatically determine the medical or environmental consequence after a hazard successfully applies.

## 2. No hidden combat-power reconstruction

Do not recreate a universal challenge rating by informally combining stats and hazard severity.

Threat remains authored from:

`stats + hazard mechanism + exposure likelihood + behavior + group context + environment + available countermeasures + consequence severity`

Two creatures with similar six-axis ratings may therefore have radically different human encounter profiles.

Likewise, a physically stronger creature may be easier to coexist with than a weak but easily triggered venomous, contagious, swarming or anomalous species.

## 3. Hazard records need their own semantics

A meaningful hazard in a species dossier should be representable with the following conceptual fields:

```yaml
hazard:
  hazard_key: stable-key
  kind: venom | toxin | burn | electrical | respiratory | entanglement | drowning | psychic | ghost | other
  delivery_or_exposure: []
  prerequisite_or_trigger: []
  warning_signs: []
  immediate_effects: []
  delayed_or_persistent_effects: []
  ordinary_consequence_ceiling: string
  exceptional_consequence_ceiling: string-or-none
  countermeasures: []
  emergency_consumable_hooks: []
  context_amplifiers: []
  context_mitigators: []
  governing_species_axes: []
  severity_is_not_capped_by_axis_rating: true
  provenance_or_derivation_refs: []
```

Not every hazard needs every field populated, but the authoring model must distinguish **how the hazard is delivered** from **what happens after exposure**.

## 4. Human consequence rule

P4 hazard design must remain compatible with D-020 serious selective lethality.

Therefore:

- ordinary contact is not automatically death;
- a clearly dangerous successful exposure may create Injury, Critical state, urgent treatment needs, route pressure or death risk even when the attacking species has low raw stats;
- delayed hazards may escalate after the immediate encounter if untreated;
- known hazards should normally be learnable or foreshadowable through bestiary knowledge, local warnings, visible anatomy, environmental traces, prior symptoms or specialist knowledge where fiction permits;
- suitable preparation may convert a severe hazard into a manageable one without changing the species' stats.

This makes knowledge, clothing, armor, antidotes, barriers, route choice and emergency consumables meaningful survival tools rather than flat stat boosts.

## 5. Weedle-style calibration example

A small venom-bearing Pokémon is the canonical design test for this rule.

Its physical profile can remain weak enough that an experienced prepared human may have little trouble avoiding, driving away or physically overpowering one in a favorable situation.

However, the dossier may still define its sting/venom hazard as medically serious because:

- the danger is carried by successful exposure rather than large impact force;
- an unprotected or surprised human may fail to avoid the sting;
- multiple individuals or repeated stings can raise exposure severity;
- wilderness distance from treatment can turn a manageable injury into a critical expedition problem;
- knowledge and appropriate protection can sharply reduce risk.

The exact toxin effects and severity must still come from reviewed source evidence plus explicitly labeled project derivation. This clarification does not grant license to invent arbitrary lethal poisons for every Poison-type Pokémon.

## 6. Pilot implication

The P4 pilot must validate **hazard semantics before freezing the stat-rating thresholds**.

The previous A/B/C rating-scale choice is therefore deferred rather than rejected. The calibration order becomes:

1. author representative species with raw canonical data, provisional six-axis ratings and explicit hazards;
2. test whether low-stat/high-hazard, high-stat/low-aggression, swarm, large-body, elemental and anomalous cases all remain distinct;
3. verify that human checks and consequence ladders do not infer hazard severity solely from stat rating;
4. only then choose the smallest numeric rating scale that preserves useful species differences.

The pilot should include at least one **small venomous species** specifically to test this rule. Weedle is the preferred case because it exposes the failure mode cleanly.

## 7. Schema and downstream requirements

P4 species dossiers must be able to express:

- capability existence;
- delivery/exposure route;
- consequence severity;
- prevention/countermeasure knowledge;
- group/environment amplification;
- delayed/persistent effects;
- whether a human action contests a species axis, a hazard permission, or both.

P5 must consume these as authored encounter/consequence rules rather than assuming `low stat = harmless` or `high stat = lethal`.

P7/P8 should normalize and cache static species hazard definitions just like other species data. Runtime work should evaluate only state-dependent exposure/trigger conditions instead of recomputing immutable hazard definitions every frame.

## 8. Non-goals

This clarification does **not** establish:

- a universal poison damage table;
- exact medical durations;
- one severity tier for all moves of a type;
- automatic lethality for Poison, Fire, Electric, Psychic or Ghost typing;
- a new universal combat-power score;
- player-level scaling;
- arbitrary hazard invention unsupported by canon/derivation rules.

Exact species effects remain dossier-owned and evidence-reviewed.
