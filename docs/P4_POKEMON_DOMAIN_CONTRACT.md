# P4 Pokémon Domain Contract

Status: **ACTIVE — P4 shared domain contract**  
Date: **2026-08-15**  
Decision: **P4-HDG-001 / D-031 — fixed species stats + individual variation + rare exceptional individuals + capability/hazard tags**

## 1. Purpose

P4 must translate canonical Pokémon evidence into a reusable game-domain model before the project authors 151 separate species dossiers.

This contract defines the shared model for:

- source-backed canonical fields versus project-owned derived fields;
- Pokémon mechanical stats without forcing the human seven-Attribute model onto Pokémon;
- ordinary individual variation and rare exceptional individuals;
- non-scaling encounter difficulty so player growth can turn ordinary weak species into genuine low-threat encounters;
- capability/hazard tags that represent powers and biology that cannot be reduced to raw numbers;
- encounter behavior states and threat profiles;
- progressive identification/knowledge;
- companionship eligibility and logistics;
- evolution, ancient-strength, materials, technology, and emergency-item hooks;
- Legendary/Mythical exceptional handling;
- stable dossier keys for later machine validation and P5 consumption.

This contract is intentionally domain-focused. Exact runtime classes, serialization format, importer implementation, UI, and event syntax belong to P7/P8 after P4-P6 are stable.

## 2. Canon boundary and source ownership

P4 follows D-018 and `docs/P2_CANON_DERIVATION_AND_TECH_ISLAND_CONTRACT.md`.

Every material claim remains classifiable as:

- **C1** — direct official fact;
- **C2** — cross-source official synthesis;
- **D1** — conservative derived inference;
- **D2** — project-authored extrapolation;
- **U** — unsupported / unresolved.

Structured community datasets are evidence carriers and normalization inputs, not franchise canon authorities by themselves.

The project keeps two conceptual layers:

### 2.1 Canonical source layer

Source-backed fields may include, when relevant and properly versioned:

- National Pokédex identity;
- official species/form identity;
- typing;
- canonical six base-stat values (`hp`, `attack`, `defense`, `special_attack`, `special_defense`, `speed`);
- abilities and historical ability data;
- move associations / learnset evidence;
- evolution-family relationships and canonical evolution conditions;
- height/weight and other physical metadata;
- version-tagged Pokédex statements and other official evidence;
- generation/version context for any mechanic that changed over time.

Raw canonical values are preserved as provenance-bearing evidence. They are **not** copied directly into the human 2d6 formula.

### 2.2 Project-owned derived layer

P4 owns:

- normalized Pokémon species ratings;
- capability/hazard tags;
- threat and consequence profiles;
- ancient-era ecology and locality treatment;
- behavior-state transitions;
- identification and bestiary progression hooks;
- companionship treatment;
- individual-variation templates;
- exceptional-individual traits;
- ancient-strength treatment;
- materials / hunting / technology-island / emergency-item hooks;
- narrative hooks and P5-consumable content tags.

Derived data must never be presented as official canon merely because it was numerically seeded from canonical data.

## 3. Pokémon do not use the human seven-Attribute model

D-023 remains human-specific.

Pokémon use a separate six-axis internal species profile that deliberately preserves the distinctions carried by the canonical six base stats while translating them into a compact TRPG-scale domain model.

The stable internal axes are:

1. **Vigor** — sustained bodily reserve / capacity to remain active; canon anchor: HP.
2. **Force** — direct physical force and impact potential; canon anchor: Attack.
3. **Guard** — resistance to ordinary physical force; canon anchor: Defense.
4. **Potency** — strength of non-ordinary / elemental / ranged / psychic-like offensive phenomena where applicable; canon anchor: Special Attack.
5. **Resistance** — resistance to non-ordinary / elemental / psychic-like effects where applicable; canon anchor: Special Defense.
6. **Speed** — movement, reaction, pursuit and initiative-relevant quickness; canon anchor: Speed.

These are **project ratings**, not renamed claims that the main-series base-stat values literally measure ancient-world physics.

### 3.1 Preserve raw stats; derive small ratings

Every species dossier keeps the raw canonical six-stat source values separately from the P4 ratings.

The P4 ratings must use a small bounded integer scale suitable for deriving difficulties and contest values. The exact normalization thresholds are a **pilot calibration value**, not a world-lore decision. They may be tuned after the pilot set without changing this six-axis architecture.

Raw values must never be added directly to `2d6 + Attribute + Competence + Context`.

### 3.2 No single combat-power score

Do not collapse the species into one universal `combat power`, `challenge rating`, or base-stat-total ladder.

A Pokémon can be:

- fast but fragile;
- slow but almost impossible to physically move;
- physically weak but extremely dangerous through venom, fire, Psychic pressure or Ghost phenomena;
- individually modest but dangerous because of swarming, ambush or terrain control;
- statistically formidable but normally avoidant/non-aggressive.

Threat is therefore derived from **stats + capabilities + behavior + context + consequence**, not from one summed number.

## 4. Non-scaling world rule

Pokémon species and individual profiles do **not** automatically scale upward because the player character advanced.

An ordinary Rattata remains an ordinary Rattata whether the player meets it at the beginning or late in a run.

The intended progression effect is:

- early characters may need to respect and roll against ordinary low-tier wildlife;
- later competent, well-equipped and knowledgeable humans can make many of those same interactions routine;
- when the fiction has become routine and consequence-free, D-024 says to skip the roll rather than preserve fake difficulty;
- dangerous circumstances can still make a normally weak species relevant through numbers, terrain, hunger, disease, ambush, swarm behavior, protection of young, environmental collapse or another authored condition.

The project must not use hidden player-level matching, automatic enemy-level inflation, or `same species, arbitrarily higher stats because the player is stronger` as its normal difficulty-control mechanism.

Difficulty progression instead comes from:

- more dangerous species;
- harsher ecology and routes;
- more complex objectives;
- multiple interacting hazards;
- stronger/rarer individuals with actual world reasons;
- resource pressure;
- incomplete knowledge;
- exceptional authored encounters.

## 5. Species baseline versus individual profile

Every encountered Pokémon conceptually resolves from two layers:

`Species Baseline + Individual Profile`

### 5.1 Species baseline

The species baseline contains:

- six P4 ratings;
- capability/hazard tags;
- ordinary behavior tendencies;
- baseline threat/consequence profile;
- ordinary size/logistics characteristics;
- default identification hooks;
- ordinary companionship plausibility;
- ordinary ancient-strength treatment for the local population being authored.

The baseline describes a typical relevant individual, not every member of the species with biological precision.

### 5.2 Ordinary individual variation

Ordinary individuals may differ modestly in:

- one or more ratings;
- age/maturity;
- condition;
- temperament;
- learned behavior;
- injury/scarring;
- hunger/fear;
- local-lineage traits;
- social role within a group.

Most ordinary encounters should **not** require a dense list of random modifiers. Variation exists to support fiction and deterministic seeded diversity, not to create loot-game affix spam.

### 5.3 Exceptional individuals

The setting explicitly permits rare Pokémon that are dramatically more dangerous, capable or experienced than their species baseline.

An exceptional individual may exist because of an authored combination such as:

- extreme longevity / survival history;
- unusually strong ancient lineage;
- harsh-environment adaptation;
- territorial dominance;
- learned anti-human or anti-predator behavior;
- unusual diet/resource exposure where source/setting evidence supports it;
- repeated battles and accumulated experience;
- rare physical development;
- an anomalous but explicitly authored condition;
- another species-specific cause.

A special individual is not merely `Elite +30% HP`.

It should normally have at least one **behavioral/capability distinction** in addition to any stat shift so the encounter explains why this creature survived long enough to become exceptional.

### 5.4 Named / apex individuals

A named or locally notorious individual may function as a route, settlement or regional-scale boss even when its species is normally weak.

This permits the intended fiction where:

- ordinary Rattata eventually become routine for an experienced adventurer;
- one scarred, ancient, trap-wise Rattata that generations of hunters recognize can remain genuinely frightening;
- a rare base-form individual can outperform an ordinary evolved-form specimen in selected axes without changing the species' canonical evolution relationship.

Named/apex status is authored history and ecology, not a generic rarity color.

### 5.5 Exceptional-individual invariants

- Exceptional individuals are rare enough that ordinary species baselines remain meaningful.
- They are never spawned simply to keep pace with player power.
- Their additional ratings/traits are explicit and inspectable in authoring data.
- Procedurally selected exceptional individuals must be deterministic from authoritative seed/state.
- Authored named individuals keep stable identity across relevant events.
- A player should be able to learn warning signs, rumors, tracks or history before/after meeting important named individuals where the fiction allows it.

## 6. Capability and hazard tags

Stats answer `how strong/fast/resistant is this creature?`.

Tags answer `what can this creature do, and what approaches does that enable or invalidate?`.

Common tag families may include:

- **locomotion:** `flight`, `burrow`, `aquatic`, `climb`, `amphibious`, exceptional leap/mobility;
- **physical hazard:** `venom`, `spines`, `constriction`, `crush`, `bite`, `horn_charge`, `adhesive`, `web`;
- **elemental/environmental:** heat/fire, cold, electrical discharge, corrosive effects, smoke/spores/pollen, sand/wind/water pressure;
- **anomalous:** Psychic intrusion, telekinesis, illusion, sleep/dream effects, Ghost intangibility/possession-like phenomena only where supported;
- **behavioral:** `pack`, `swarm`, `ambush`, `territorial`, `protective_parent`, `persistent_pursuit`, `trap_wary`;
- **interaction/utility:** carrying, digging, sensing, cutting, lighting, heat generation, water movement, tool interaction, etc., only where evidence supports it.

Tags are not automatically `+1` modifiers.

A tag may instead:

- make an approach possible or impossible;
- change the relevant human Attribute/Competence;
- change the static difficulty;
- alter the consequence type or ceiling;
- create a Fear trigger;
- require protection/equipment/knowledge;
- permit an emergency-consumable reaction;
- unlock a companion-assistance option;
- change route/environment state.

This prevents phenomena such as Ghost intangibility from becoming merely `Defense +2`.

## 7. Human checks against Pokémon

The human check engine remains:

`2d6 + Attribute + Competence + Context`

P4 supplies species/individual values that P5 can convert into authored difficulties, opposed targets, permissions and consequences.

### 7.1 Default integration shape

A human action against or around a Pokémon should use:

1. the relevant Pokémon stat axis or capability as an input;
2. the current behavior/position/environment state;
3. the player's preparation, knowledge and equipment;
4. an authored target difficulty / contest value within the D-024 scale;
5. species-specific consequence data for setback/partial/full/exceptional outcomes.

The exact formula translating normalized P4 ratings into `7/9/11/13/15` difficulty steps is a pilot balance calibration and later P5 authoring concern.

The architecture is binding: **Pokémon stats influence difficulty; they are not appended as a second giant modifier stack to the human roll.**

### 7.2 Triviality through growth is valid

When player capability, preparation and knowledge make an interaction genuinely routine, no roll is required.

This is how an ordinary weak species can become `goblin-like` low-threat content later without rewriting that species' stats.

### 7.3 Pokémon-versus-Pokémon

P4 ratings must be usable later for companion-versus-wild contests, but P4 does not yet freeze a separate Pokémon dice engine.

P5/P7 may derive contest values from the same six axes rather than introducing a second incompatible stat model.

## 8. Threat profile is separate from stats

Each species/individual has an authored threat profile containing at minimum:

- **baseline encounter threat** — qualitative authoring band, not a single combat-power formula;
- aggression / avoidance / territorial tendencies;
- warning signs;
- likely escalation triggers;
- likely de-escalation / retreat conditions;
- relevant capability/hazard tags;
- consequence categories and maximum plausible consequence in ordinary context;
- escape/pursuit pressure where relevant;
- group-size effects where relevant.

A high-stat Pokémon can be low encounter threat when peaceful and avoidant. A lower-stat venomous swarm can be severe because the situation creates dangerous consequences.

## 9. Shared encounter behavior states

P5 may implement event-specific substates, but P4 dossiers should be able to describe transitions using this shared vocabulary:

- **unaware** — has not meaningfully detected the human/current actor;
- **observing** — aware but not committed to approach or avoidance;
- **avoidant** — prefers distance/escape;
- **wary** — alert and evaluating danger;
- **warning** — actively signaling a boundary or threat;
- **engaged** — committed to direct interaction/conflict;
- **pursuing** — actively following/chasing after disengagement begins;
- **retreating** — attempting to break contact;
- **incapacitated** — unable to continue ordinary action, not automatically dead.

Species do not need to use every state and may transition nonlinearly.

`warning → engaged` for a territorial species and `wary → retreating` for an avoidant species should feel different even at similar ratings.

## 10. Pokémon injury / survival boundary

Pokémon do not automatically use human `Vitality = 4 + Endurance`, human Fatigue, human Fear, or the exact three-Injury UI.

P4 species profiles must instead provide enough data for later Pokémon/companion survivability to preserve these D-020 invariants:

- ordinary defeat does not automatically equal death;
- species can be incapacitated, injured, critically harmed or killed when the fiction supports it;
- body scale/materiality/capability can change what kinds of harm are meaningful;
- companion death is rare/high-impact rather than ordinary attrition;
- a weak human should not defeat a giant/inhumanly durable species merely by repeating tiny HP subtraction.

The exact Pokémon damage/injury arithmetic remains a pilot/P5/P7 follow-up after the six-axis profile is validated across diverse species.

## 11. Identification and bestiary progression

D-019 remains binding.

Every dossier separates:

- stable system species identity;
- current player-character recognition;
- diegetic local terminology;
- post-identification knowledge.

Minimum authoring states remain conceptually:

`unidentified → partially recognized → identified`

Identification does not reveal the complete dossier.

P4 must provide observable clues and knowledge fragments for ecology, behavior, danger signs, abilities, weaknesses/avoidance, companionship, materials and local cultural knowledge as applicable.

Exceptional named individuals can have a separate individual-knowledge track such as rumors, scars, tracks, habits or local epithets without replacing the stable species identity.

## 12. Companionship model boundary

Companionship remains rare, physical and voluntary under D-013.

Every species dossier must classify:

- `eligible`, `exceptional_only`, or `inappropriate/impossible_in_baseline` companionship treatment;
- trust/bond prerequisites;
- reasons the Pokémon might stay;
- reasons it may leave or reject association;
- food/water/shelter/environment needs;
- settlement/social burden;
- travel/space/load implications;
- danger to the human or others;
- assistance capabilities;
- separation/injury concerns.

A companion retains its Pokémon species and individual profile. Becoming a companion does not convert it into an inventory item, obedient summon, universal `+1`, or human-stat follower.

## 13. Evolution boundary

P4 preserves canonical evolution-family identity while adapting mechanisms that do not fit the era.

Each relevant dossier must record:

- canonical evolution relationship and source context;
- whether the canonical mechanism is directly usable in the setting;
- ancient-era interpretation when adaptation is needed;
- whether the rule is species-wide, lineage/locality-specific, exceptional, unknown or deliberately unresolved.

Evolution does not erase individual identity/history by default.

An exceptional unevolved individual may exceed ordinary evolved specimens in selected ratings, but this must not become a blanket rule that evolution is mechanically meaningless.

## 14. Ancient-strength treatment

D-016 remains species-specific.

Each species/local population receives one or more explicitly justified classifications such as:

- `canon_historical_change`;
- `stronger_ancient_lineage`;
- `local_stronger_lineage`;
- `behaviorally_harsher`;
- `ecologically_more_dangerous`;
- `similar_to_modern_baseline`;
- `unchanged`;
- `unresolved`.

The dossier must preserve evidence class and canon boundary.

Do not silently convert the owner's ancient-danger direction into `all ancient Pokémon have +N stats`.

## 15. Hunting, materials, technology and emergency consumables

Every dossier explicitly audits, with `none` allowed:

- hunting/food relationship;
- shed/abandoned material;
- natural remains;
- dangerous harvesting;
- taboo/protection/sacred treatment;
- technology/craft hook under D-017;
- medicine/antidote/protection hook;
- D-030 emergency-consumable hook.

Defeat never automatically grants loot or generic Materials.

Species-derived emergency consumables require an exact item mechanism, matching hazard/timing window and evidence/setting justification. They cannot become disguised Fate/reroll items.

## 16. Legendary and Mythical species

The same source/provenance and six-axis model may describe Legendary/Mythical species internally, but ordinary encounter assumptions do not apply.

Their dossiers must explicitly classify:

- whether direct encounter is possible in the opening/broader game;
- whether presence is primarily myth, trace, environmental consequence, event chain or singular meeting;
- identification difficulty;
- companionship treatment;
- whether ordinary individual variation is meaningful;
- whether a singular/named identity supersedes normal population assumptions.

High ratings alone are insufficient to describe a Legendary/Mythical encounter.

## 17. Stable P4 dossier domain keys

Every substantive Gen-I dossier must be representable using these stable conceptual sections:

```text
identity
provenance
canonical_source_data
species_stat_profile
capabilities_and_hazards
ancient_strength
ancient_ecology
human_perception_and_culture
identification_and_knowledge
threat_and_encounter
individual_variation
companionship
mechanical_hooks
hunting_materials_and_resources
technology_and_craft
emergency_consumable_hooks
narrative_and_event_hooks
presentation_and_p6_followups
cross_species_links
open_questions_and_gates
```

Exact serialization belongs later, but P4 authoring must not invent incompatible one-off section names per species.

## 18. Pilot validation requirements

Before scaling to all 151 species, P4 must test this contract on a deliberately diverse pilot that collectively exercises:

- ordinary small wildlife that should eventually become low-threat;
- insect/swarm or colony behavior;
- aquatic movement and environmental dependence;
- large physical threat;
- strong elemental capability;
- Psychic/Ghost capability that cannot be represented by raw defense alone;
- human-adjacent/intelligent or tool-capable behavior where relevant;
- fossil/extinction/history ambiguity;
- Legendary/Mythical exceptional handling;
- at least one rare exceptional/named individual profile.

Pilot review must specifically ask:

1. Do the six axes preserve useful species differences without importing main-series battle math wholesale?
2. Can player growth make ordinary weak species genuinely routine without level scaling?
3. Can a rare exceptional weak-species individual remain dangerous for comprehensible reasons?
4. Do tags prevent anomalous abilities from collapsing into numeric modifiers?
5. Can P3 human checks consume the profile without modifier inflation?
6. Can P5 later author encounter states and consequence ladders without bespoke species code?
7. Does each dossier preserve canon/project boundaries?

If the pilot reveals contradictions, revise the shared domain contract before large-scale 151 authoring.

## 19. Explicitly tunable versus architecture-changing

The following are balance/data tuning and may change during the pilot without reopening P4-HDG-001:

- exact normalization thresholds from canonical base stats to P4 ratings;
- exact integer rating range, provided it remains small/bounded and does not use raw base-stat arithmetic;
- exact static-difficulty mapping;
- ordinary variation envelopes;
- frequency tuning for procedurally eligible exceptional individuals;
- qualitative threat-band labels.

The following require a new explicit design decision because they change the approved architecture:

- removing Pokémon numeric stats entirely;
- forcing Pokémon into the human seven Attributes;
- replacing the six-axis profile with one universal combat-power number;
- automatic player-level enemy scaling;
- making exceptional individuals common affix/rarity-tier loot-game enemies;
- forbidding exceptional low-species individuals from surpassing ordinary evolved specimens in selected capabilities;
- making all ancient Pokémon universally stronger through an unqualified global stat bonus.

## 20. Downstream ownership

### P4

- calibrate the small numeric rating scale on the pilot;
- finalize the machine-checkable dossier schema;
- author and validate all 151 dossiers;
- define species-specific threat, capability, companion, ecology, material and knowledge hooks;
- maintain the 151/151 coverage manifest.

### P5

- consume stable P4 tags/ratings in deterministic event eligibility, checks, behavior transitions and consequence branches;
- preserve valid 0/3 companion runs;
- use named-individual state deterministically.

### P6

- derive resource/asset needs from dossier presentation requirements without changing game-domain semantics.

### P7/P8

- implement normalized generated data, indexes/caches, save identity and mobile presentation;
- avoid per-frame recomputation of static species definitions;
- cache derived/runtime lookup structures and recompute only mutation-sensitive individual state where needed.

## 21. Authority

This contract is binding for P4 unless a later owner-approved decision explicitly supersedes it.

The immediate next work is to freeze the companion dossier schema/validation shape against this contract, select a diverse pilot species set, then author the pilot before scaling to all 151.
