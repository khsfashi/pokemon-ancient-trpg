# P3 Dice and Check Contract

Status: **ACTIVE — P3 binding contract**  
Date: **2026-08-15**  
Decision: **P3-HDG-002 / D-024 / owner-approved 2d6 staged-outcome model with rare doubles spikes**

## 1. Core resolution

When an uncertain action has meaningful stakes, resolve it with:

`2d6 + Attribute + Competence + Context` versus a target difficulty or opposed value.

The two d6 are always preserved as individual die results in the run log. Their sum alone is not sufficient because natural doubles have special meaning.

Do not roll for actions that are routine, consequence-free, already guaranteed by established fiction, or structurally impossible. The event author should first decide whether a roll is warranted.

The system is deterministic under a saved RNG seed. A replay from the same complete state and seed must reproduce the same dice results unless an explicitly recorded player choice or fate-resource intervention changes the branch.

## 2. Why 2d6 is binding

The project prefers 2d6 because its center-weighted distribution makes ordinary competence more reliable than a flat d20 while preserving rare high and low moments. This supports a mobile text RPG where character expertise should matter and where checks often feed authored consequence ladders rather than only pass/fail gates.

The game should feel uncertain and dangerous without making every competent action a coin-flip. High-stakes excitement should come from consequence, rare doubles, discoveries, scarce resources, and meaningful state change rather than from maximizing raw variance on every roll.

## 3. Modifier envelope

### 3.1 Attribute contribution

Human core attributes use their mechanical rating directly as the primary modifier.

For the initial P3 balance envelope:

- `0` — notably weak/unpracticed innate capability;
- `1` — ordinary adult baseline;
- `2` — capable / above average;
- `3` — exceptional human capability;
- `4` — extraordinary human edge, reserved for later progression, rare traits, or exceptional creation rules rather than assumed at start.

Exact starting allocation and whether a new character may begin at `3` or `4` remain part of character-creation/progression design. The rating scale itself is now the default check scale and should not be inflated without a later rules decision.

### 3.2 Competence contribution

Backgrounds, occupations, learned skills, local expertise, bestiary knowledge, and similar training must not create another large parallel stat stack.

Use the compact competence envelope:

- `+0` — no applicable trained competence;
- `+1` — trained/relevant competence;
- `+2` — expert/specialist competence.

A single check normally receives at most one competence contribution. Multiple narrative reasons for expertise should not stack indefinitely; the most relevant competence applies unless a later contract explicitly defines synergy.

### 3.3 Context contribution

Equipment, preparation, route knowledge, positioning, help, injury, weather, resource expenditure, relationship context, and similar temporary factors form the context modifier.

Default authored context should stay within `-2` to `+2` after all ordinary circumstances are combined.

Use `±3` only for a genuinely overwhelming but still roll-worthy circumstance. Beyond that, prefer changing the fiction, difficulty, available options, or whether a roll is possible rather than stacking more arithmetic.

Pokémon companion assistance is a context/tool/fictional capability when appropriate, not an assumed universal modifier and not a requirement for baseline success. Human-only `0/3` runs remain first-class.

## 4. Difficulty ladder

Use the following default target numbers when a static difficulty is appropriate:

- **Routine:** no roll;
- **Favorable risk — 7:** an ordinary person has a meaningful chance, and a capable character should usually manage it;
- **Standard risk — 9:** uncertain for an ordinary person, reliable enough for trained/capable characters;
- **Hard — 11:** demands strong ability, expertise, preparation, or favorable context;
- **Severe — 13:** beyond casual human competence; usually requires multiple meaningful advantages;
- **Extreme — 15:** exceptional feat territory; should be rare and strongly telegraphed;
- **Impossible:** no roll unless the fiction changes.

These values are design defaults, not content quotas. Event authors should not roll simply to use the ladder.

## 5. Margin-based outcome bands

Let `Result = 2d6 + Attribute + Competence + Context` and `Margin = Result - Difficulty`.

Resolve static checks with four default bands:

- **Setback:** `Margin <= -3` — the intended goal is not achieved and the fiction moves forward with a meaningful consequence, changed position, spent resource, lost opportunity, exposure, or new danger appropriate to the event;
- **Costly / partial success:** `Margin = -2 or -1` — the central goal is achieved incompletely or at a cost, or the character fails the immediate goal but secures a useful opening/information that keeps the branch moving;
- **Full success:** `Margin = 0 to +2` — the intended goal is achieved without an extra mandatory penalty beyond costs already stated before the roll;
- **Exceptional success:** `Margin >= +3` — the goal is achieved and the event may grant an additional advantage, discovery, efficiency gain, state improvement, relationship opening, or future opportunity.

An event may intentionally collapse bands when only a binary answer makes sense, but must not silently turn every roll into pass/fail. P5 event data should be able to author all four outcomes.

`Partial success` does not mean the same generic penalty everywhere. The consequence must be specific to the fiction: time, supplies, position, fatigue, fear, injury risk, damaged gear, reputation, lost secrecy, a hard choice, or another relevant state.

## 6. Rare doubles spikes

Natural doubles are a separate overlay read from the two physical/digital d6 before modifiers.

### 6.1 Double six — Fortune Spike

Natural `6 + 6` occurs with probability `1/36` and creates a rare high-emotion moment.

Rules:

- it does not make a structurally impossible action possible;
- if the action is roll-worthy and success is possible, resolve the normal total first;
- then upgrade the narrative reward by one meaningful step where the fiction supports it;
- an already exceptional result should receive an **extra opportunity** rather than meaningless over-success.

Preferred Fortune Spike rewards include:

- hidden or unusually valuable information;
- a bestiary insight or stronger identification clue;
- discovery of a safer route, hidden location, resource cache, rare trace, or environmental secret;
- a new optional event/quest flag;
- an unusually favorable relationship opening;
- reduced cost or preserved resource;
- a species/context-specific exceptional opportunity authored in P4/P5.

A Fortune Spike should not automatically award a Pokémon companion, unique artifact, permanent stat increase, or other campaign-scale reward unless the surrounding authored event independently supports that consequence.

### 6.2 Double one — Trouble Spike

Natural `1 + 1` also occurs with probability `1/36` and marks a rare complication spike.

Rules:

- resolve the normal total first;
- then worsen the narrative complication by one meaningful step where appropriate;
- it may reveal a hidden hazard, create an additional cost, expose the character, worsen position, consume time/resources, or open a dangerous event branch;
- it is **not** automatic death, automatic permanent injury, automatic companion loss, or arbitrary campaign destruction.

D-020 serious selective lethality remains authoritative: lethal outcomes require sufficiently lethal circumstances and authored causal escalation. A Trouble Spike may move a character closer to such danger, but cannot bypass warning/context and simply execute the player.

### 6.3 Doubles and outcome bands

Natural doubles are not a replacement for margin. The check always retains both:

1. its normal outcome band; and
2. its Fortune/Trouble Spike overlay when applicable.

This lets a double-six on an extreme challenge remain narratively exciting without pretending that every impossible feat succeeds, and lets a double-one during an easy task create a memorable complication without necessarily erasing the underlying success.

## 7. Discovery and dopamine contract

The game's reward cadence must not depend primarily on frequent Pokémon acquisition. Companions are rare and consequential under D-013.

Checks therefore support multiple reward channels:

- immediate success and resource preservation;
- exceptional-success benefits;
- Fortune Spike opportunities;
- bestiary knowledge and identification progress;
- route/map knowledge;
- new event flags and optional branches;
- crafting/medicine/ecology insight;
- reputation or relationship openings;
- rare resource/material access where P4 ecology supports it;
- progression resources defined later in P3.

The purpose is not to make every roll dispense loot. Routine rolls should remain routine. High-emotion rewards should be sparse enough that a player remembers them, while ordinary competence still feels satisfying.

## 8. Knowledge and insight safeguards

A successful Intellect or Sense check cannot invent knowledge the character has no possible source for. D-019 and the bestiary knowledge model remain authoritative.

Exceptional results and Fortune Spikes may:

- notice more evidence;
- connect already available clues;
- infer a bounded conclusion;
- unlock an opportunity to investigate;
- record an insight based on observed behavior.

They may not reveal omniscient Pokédex facts solely because the dice were high.

## 9. Opposed checks

When two active actors directly contest the same immediate outcome, each side rolls using the same check structure when both actors have compatible mechanical stats.

Compare final results:

- higher result wins the contest;
- tie favors the current status quo / defender unless the event explicitly establishes another fair tie rule;
- the winning margin maps to the same `0–2 full / 3+ exceptional` distinction;
- a losing side within `1–2` may still receive a costly/partial branch if the event supports it.

Do not force Pokémon into the human seven-attribute schema. P4 must define how Pokémon contest values or derived difficulty profiles plug into this contract. Until then, a dangerous wild Pokémon can be represented by a static difficulty/contest value rather than a fake human-shaped stat block.

Natural doubles still apply to the actor who rolled them. If both sides produce spike results, resolve the numerical contest first and then apply only compatible narrative overlays rather than canceling them mechanically by default.

## 10. Assistance

One meaningful helper may normally provide one of:

- a context bonus;
- access to an otherwise unavailable approach;
- reduction of a specific consequence;
- an event-specific alternate branch.

Do not grant a generic stacking bonus for every companion/NPC present. Assistance requires relevant capability, physical access, willingness, and narrative feasibility.

Pokémon assistance must preserve species-specific capability and relationship logic. A companion is not a universal `+1` token.

## 11. Rerolls, Luck, and fate resources

Luck remains outside the seven core attributes per D-023.

This contract intentionally does **not** yet grant universal rerolls. A later P3 progression/resource decision may introduce a scarce fate/insight resource that changes a roll, but it must:

- be explicitly recorded in deterministic run state;
- consume a real limited resource or trigger a defined cost;
- avoid turning rare natural doubles into something players can farm trivially;
- state whether rerolling one die or both dice preserves/replaces a doubles spike.

Until such a decision exists, base checks do not reroll.

## 12. Display and event-authoring requirements

The player-facing result should be explainable in one compact line, for example:

`2d6 (4+5) + Sense 2 + Tracking 1 - Storm 1 = 11 vs 9 → Exceptional Success`

The UI may simplify this presentation initially, but the full components must remain inspectable for trust/debugging.

A doubles spike must be visually/textually distinct from an ordinary exceptional result. Exact animation, sound, haptics, color, and timing belong to P6/P8, not this rules contract.

P5 event data must be able to encode:

- check attribute;
- applicable competence/tag requirements;
- difficulty or opposed target;
- context modifiers and prerequisites;
- outcome branches for setback / partial / full / exceptional;
- optional Fortune Spike branch/reward;
- optional Trouble Spike branch/consequence;
- knowledge/relationship/resource state mutations;
- deterministic RNG consumption.

## 13. Probability and balance notes

Unmodified 2d6 has an average sum of `7`, and natural double-six/double-one each occur `1/36` of the time.

The chosen difficulty/modifier envelope is intentionally small. A `+1` is meaningful on 2d6 and should not be handed out casually. Content should prefer fictional positioning and branch changes over modifier inflation.

Representative success probabilities before outcome-band nuance:

- ordinary `+1` character vs difficulty `7`: about 72%;
- ordinary `+1` character vs difficulty `9`: about 42%;
- capable/trained total `+3` vs difficulty `9`: about 72%;
- capable/trained total `+3` vs difficulty `11`: about 42%;
- strong specialist total `+5` vs difficulty `11`: about 72%;
- strong specialist total `+5` vs difficulty `13`: about 42%.

This illustrates the intended ladder: expertise shifts a character roughly one difficulty tier without making every severe challenge automatic.

Exact balance can be tuned in data later, but changing the core 2d6 shape, four outcome bands, or natural doubles spike philosophy requires an explicit rules decision rather than incidental content tuning.

## 14. Downstream requirements

### P3

- character creation and progression must respect the compact attribute/competence envelope;
- health/fatigue/fear/injury rules must consume check outcomes without making every setback lethal;
- any fate/insight resource must integrate with deterministic roll history and doubles rules;
- psychic gifts use this same resolution engine unless a later owner-approved exception exists.

### P4

- species dossiers define relevant static difficulties, contest hooks, exceptional danger/durability, knowledge rewards, and species-specific Fortune/Trouble opportunities;
- Pokémon need not use human attributes.

### P5

- event consequences must support four outcome bands plus optional doubles-spike overlays;
- success should frequently create information, route, relationship, or state rewards instead of relying on creature acquisition;
- seeded RNG consumption must be deterministic and logged.

### P7/P8

- runtime exposes individual dice, modifiers, target, margin, outcome band, spike state, and resulting state mutations;
- mobile UI keeps the roll legible and gives rare spikes stronger presentation without obscuring the underlying deterministic calculation.

## 15. Explicitly unresolved

This contract does not yet decide:

- starting attribute allocation;
- exact background/occupation catalog;
- progression cadence and attribute/competence advancement;
- universal fate/insight resource rules;
- health/fatigue/fear/injury track representation;
- exact Pokémon mechanical stat/profile model;
- combat turn structure;
- final UI presentation.

The next blocking P3 taste decision is the health/fatigue/fear/injury representation. Everything above can be consumed by that decision without reopening P3-HDG-002.