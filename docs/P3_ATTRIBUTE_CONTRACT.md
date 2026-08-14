# P3 Core Attribute Contract

Status: **ACTIVE — P3 binding contract**  
Date: **2026-08-15**  
Decision: **P3-HDG-001 / D-023 / owner-approved seven-attribute model**

## 1. Binding attribute set

Human player characters use exactly seven core attributes:

1. **Strength (근력)**
2. **Endurance (체력)**
3. **Agility (기민)**
4. **Sense (감각)**
5. **Intellect (지성)**
6. **Will (의지)**
7. **Presence (존재감)**

These are broad human capabilities, not classes, skills, occupations, Pokémon types, or morality/personality scores.

The seven-attribute count is intentional. The mobile text-RPG format should remain compact, but the project needs enough differentiation for human-only survival, exploration, social play, craft/knowledge, and dangerous physical conflict to support distinct character builds.

## 2. Attribute responsibilities

### 2.1 Strength — 근력

Strength represents raw physical force and power application.

Primary uses include:

- lifting, carrying, dragging, pushing, breaking, forcing, and bracing;
- grappling, restraining, wrestling free, or physically controlling space;
- force-heavy melee actions where raw power is the material differentiator;
- handling equipment or obstacles whose main challenge is weight or resistance.

Strength is **not** the general health or endurance stat.

### 2.2 Endurance — 체력

Endurance represents stamina, bodily resilience, and sustained physical tolerance.

Primary uses include:

- prolonged exertion, marching, climbing, swimming, sleep deprivation, hunger, thirst, and exposure;
- resisting poison, disease, exhaustion, cold, heat, blood loss, or similar bodily stress where constitution matters;
- surviving and recovering from physical hardship where raw muscular force is not the main issue;
- contributing to later derived health/fatigue/recovery mechanics where P3 explicitly defines formulas.

Endurance is **not** a synonym for Strength and must not collapse back into a single `Body` stat.

### 2.3 Agility — 기민

Agility represents reflex, coordination, precision, balance, and controlled movement.

Primary uses include:

- dodging, fast repositioning, balance, jumping, climbing technique, and narrow-footing movement;
- stealth and careful physical approach where movement control is decisive;
- hand precision, quick manipulation, and dexterity-sensitive tool or weapon actions;
- reacting to sudden hazards when noticing the hazard is already resolved separately.

Agility does not replace Sense: seeing danger and physically reacting to danger are separate capabilities.

### 2.4 Sense — 감각

Sense represents perception, situational awareness, tracking, and immediate environmental reading.

Primary uses include:

- noticing movement, tracks, calls, smells, disturbed terrain, weather signs, ambush cues, and hidden hazards;
- reading Pokémon traces and behavior when the challenge is observation rather than stored knowledge;
- tracking and route reading;
- detecting immediate danger before a physical response is attempted.

Sense is intentionally separate from Intellect so an experienced tracker or scout can be perceptive without also being the group's scholar, healer, or crafter.

### 2.5 Intellect — 지성

Intellect represents learned knowledge, reasoning, planning, craft understanding, medicine, and deliberate problem solving.

Primary uses include:

- recalling or applying acquired knowledge;
- medicine, diagnosis, crafting, repair, construction reasoning, and technical planning;
- interpreting records, testimony, patterns, ecology, and researched Pokémon knowledge;
- devising plans or solving problems where deliberate analysis matters more than immediate perception.

Intellect does not automatically grant information the character has never learned. Bestiary identification and run knowledge remain constrained by D-019 and the P2 terminology/identification contract.

### 2.6 Will — 의지

Will represents self-control, conviction, mental resilience, pain/fear tolerance, and resistance to hostile mental influence.

Primary uses include:

- resisting fear, panic, despair, coercive pressure, and loss of composure;
- maintaining action under pain, shock, intimidation, or psychologically overwhelming circumstances;
- resisting Psychic/Ghost-related mental effects when the challenge is internal resistance;
- contributing to bounded psychic discipline if a rare gifted character actually possesses an approved psychic faculty.

Will does **not** itself grant psychic powers. D-015 still requires rare, narrow, setting-native anomalous gifts rather than a universal magic system.

### 2.7 Presence — 존재감

Presence represents the character's ability to project conviction, authority, trustworthiness, menace, leadership, or social force.

Primary uses include:

- persuasion, command, intimidation, negotiation, rallying, and public leadership where personal impact is materially relevant;
- establishing confidence or authority in unfamiliar social situations;
- ritual/social gravitas when the fiction makes personal bearing important.

Presence is **not physical beauty**, attractiveness, moral goodness, popularity, or a universal `win dialogue` button.

Social outcomes must also consider relationship, reputation, local custom, leverage, evidence, role/background, prior conduct, and the actual approach taken. Some social situations should require no attribute roll, and some may use Intellect, Will, Sense, or another attribute instead of Presence when that better matches the approach.

## 3. Cross-attribute separation rules

The following distinctions are binding because they justify the seven-stat model:

- **Strength vs Endurance:** force now versus sustained bodily resilience.
- **Agility vs Sense:** reacting/moving versus noticing/reading.
- **Sense vs Intellect:** immediate observation versus learned/analytical understanding.
- **Intellect vs Presence:** reasoning/evidence versus personal social projection.
- **Will vs Presence:** internal resolve versus outward influence.

Rules/content must not routinely call two attributes interchangeable. If later playtests show an attribute has no distinct gameplay role, P3 must address that explicitly rather than silently merging checks in practice while keeping seven cosmetic numbers.

## 4. Skills, occupations, knowledge, and context

Core attributes are only one layer of a check.

Later P3 design should allow outcomes to depend on some combination of:

- one relevant core attribute;
- occupation/background competence;
- learned skill or specialty, if the final skill model includes one;
- equipment and preparation;
- run knowledge/bestiary knowledge;
- social relationship/reputation;
- environment and local conditions;
- Pokémon-specific facts or relationship state;
- difficulty and consequence context.

A high attribute must not make all specialists interchangeable. For example:

- high Intellect alone does not make a character a trained healer or smith;
- high Sense alone does not grant species knowledge that has never been learned;
- high Presence alone does not override local taboos or erase hostile history;
- high Strength alone does not make a character resistant to poison or a long march.

## 5. Pokémon interactions

The seven attributes are the **human player-character core attribute contract**.

P4 is not required to represent Pokémon with an identical seven-attribute stat block. Pokémon may need a different or derived mechanical model appropriate to species-scale capabilities.

When a human interacts with a Pokémon, the relevant attribute depends on the action:

- spotting tracks may use Sense;
- interpreting known behavior may use Intellect plus knowledge;
- holding a gate against impact may use Strength;
- surviving poison or exposure may use Endurance;
- escaping a strike may use Agility;
- resisting terror or psychic intrusion may use Will;
- projecting calm, authority, or intent may involve Presence **only when the fiction supports that approach**.

A companion bond is not reducible to Presence. Species-specific ecology, prior actions, trust, learned knowledge, and individual relationship state remain authoritative.

## 6. No Luck or Bond core attribute

**Luck** is not an eighth core attribute. If P3 later uses fate, reroll, insight, or luck-like resources, they must be modeled separately from innate human capability.

**Bond** is not an eighth core attribute. Pokémon companionship/relationship is individual and relational under D-013. Any bond/trust mechanics belong to the relationship with a specific Pokémon, not to a universal human stat.

## 7. Derived stats are downstream of the check/health contracts

This decision does not yet freeze:

- attribute numeric range;
- point-buy or generation method;
- exact modifier conversion;
- dice type or probability curve;
- difficulty scale;
- opposed-check formula;
- health, fatigue, fear, injury, carrying-capacity, initiative, defense, recovery, or other derived-stat formulas.

Those values depend on the next P3 dice/check and health/fear/injury decisions. Derived stats may use one or more of the seven attributes, but they must not create an unofficial eighth general-purpose attribute through a derived number.

## 8. Downstream requirements

### P3

- Character creation must allocate/derive all seven attributes without forcing every character toward the same spread.
- The check model must explain how attributes combine with background/skill/context.
- Health/fatigue/fear mechanics must preserve the conceptual separation between Endurance and Will.
- Social rules must preserve the contextual limits on Presence.
- Psychic rules must require an actual rare gift; Will alone cannot produce psychic phenomena.

### P4

- Species dossiers should identify which human attributes commonly matter when interacting with that species only where useful.
- Pokémon mechanics must not be forced into this human stat block if that damages species fidelity.

### P5

- Event checks must specify the fictional approach before selecting an attribute.
- Events should avoid repetitive single-stat funnels, especially `Sense for every exploration`, `Intellect for every Pokémon`, or `Presence for every dialogue`.
- Consequences may reference relationship, knowledge, equipment, and preparation separately from attributes.

### P7/P8

- The data model must store seven stable human attribute keys separately from derived stats and relationship data.
- Mobile presentation should keep the seven attributes legible without requiring a tabletop-style dense character sheet.

## 9. Stable attribute keys

Until P7 chooses a concrete serialization format, the conceptual stable keys are:

- `strength`
- `endurance`
- `agility`
- `sense`
- `intellect`
- `will`
- `presence`

Display localization may use Korean labels while the underlying semantic identity remains stable.
