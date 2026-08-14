# P2 Injury and Lethality Contract

Status: **BINDING P2 CONTRACT**  
Owner gate: **P2-HDG-005 — B: serious selective lethality**  
Date: **2026-08-14**

This document converts the source boundary in `docs/P2_LETHALITY_CANON_RESEARCH.md` into a setting and downstream-design contract.

The intent is to make the ancient world genuinely dangerous without turning ordinary encounter failure into automatic death or making companions disposable attrition resources.

## 1. Core rule

The setting uses **serious selective lethality**.

- Humans can be injured, permanently impaired, and killed.
- Pokémon can be injured and killed.
- A companion Pokémon is not protected by abstract trainer-game invulnerability merely because it occupies a companion slot.
- **Ordinary defeat is not synonymous with death.**
- Death is an explicit high-severity consequence reached through sufficiently dangerous circumstances, accumulated/critical injury, failed rescue or treatment, deliberate lethal action, or another clearly lethal event path.
- Retreat, avoidance, surrender, rescue, abandoning supplies, using terrain, and accepting non-lethal loss are legitimate survival outcomes.

The game should feel as though a person entering a dangerous Pokémon's territory is taking a real risk, not entering a routine sports battle.

## 2. Canon boundary

The project does not claim that Pokémon canon uses this exact injury model.

Official material supports the underlying facts needed for it:

- wild Pokémon can pose direct danger to humans;
- Pokémon can truly die and be mourned/buried;
- humans can kill or hunt Pokémon;
- ordinary franchise battle presentation does not establish that every defeat is lethal.

The exact frequency, thresholds, persistence, and gameplay consequences below are **project-authored design** built within that boundary.

See `docs/P2_LETHALITY_CANON_RESEARCH.md` for source provenance.

## 3. Outcome vocabulary

P3 may choose the exact mechanical health model, numbers, and status names, but later systems must be able to distinguish at least these semantic outcomes.

### 3.1 Escape / disengagement

The character or creature leaves the immediate danger without being defeated.

Possible cost can include:

- fatigue;
- lost time;
- lost supplies;
- route closure;
- worsened position;
- damaged equipment;
- abandoned objective;
- separation from another character or companion.

Escape is a successful survival outcome even when the encounter objective failed.

### 3.2 Incapacitation / non-lethal defeat

The target can no longer continue the current conflict but is not automatically dying.

Examples may include:

- exhaustion;
- shock;
- being stunned or knocked unconscious;
- being pinned/trapped;
- being forced to retreat;
- loss of functional ability to continue fighting.

This is the default conceptual alternative to `defeat = death`.

### 3.3 Recoverable injury

An injury has consequences beyond the current action but is expected to heal with appropriate time, care, supplies, and behavior.

The injury may reduce what the character can safely do for part of the run.

### 3.4 Serious or lasting injury

A major failure can produce an injury that is difficult to treat, has long recovery, causes a lasting limitation, or permanently changes the character/companion.

Permanent impairment is possible, but it should remain a **major event**, not ordinary bookkeeping after every fight.

### 3.5 Critical / life-threatening condition

The subject is at real risk of death without rescue, stabilization, treatment, or removal from the hazard.

A critical state is a useful design boundary because it allows consequences and rescue play between `badly hurt` and `dead`.

### 3.6 Death

Death is real and distinct from fainting, unconsciousness, incapacitation, or temporary defeat.

The baseline setting has **no generic assumption of resurrection or automatic return from death**. Any future exception would require an explicit source/lore/design decision rather than being inferred from Ghost-type Pokémon or other supernatural phenomena.

## 4. What creates lethal stakes

P5 content may reach a lethal outcome when the fiction materially supports it. Examples include:

- confronting a Pokémon whose known capabilities are overwhelming to an exposed human;
- remaining in combat after clear opportunities to flee;
- entering an extreme environmental hazard;
- deliberate lethal attacks by a person or creature;
- continuing to act while critically injured;
- untreated poison, burns, bleeding, exposure, infection-like complications, or species-specific hazards where later rules support them;
- failed rescue or stabilization after a critical event;
- catastrophic event branches;
- explicitly life-or-death occupations, hunts, defenses, disasters, or story climaxes.

This list is illustrative, not a mechanical damage table.

## 5. What must not create routine surprise death

The game must not behave as a hidden permadeath trap.

Unless the fiction has clearly established immediate lethal stakes, later systems should not map ordinary low-severity failure directly to death merely because a random check rolled badly.

Where reasonably possible, danger should be communicated through one or more of:

- visible environmental signs;
- local warnings or rumors;
- bestiary knowledge;
- observed Pokémon behavior;
- injury escalation;
- explicit choice wording;
- a prior failed check that worsens the situation;
- recognizable `critical` state;
- known scarcity of rescue/treatment.

Unknown hazards may still exist. The requirement is that their consequences follow world logic and authored evidence rather than arbitrary punishment.

## 6. Player-character contract

A human-only run remains a first-class path under D-013, so the player character must have meaningful survival tools that do not depend on a companion.

P3/P5 should therefore support human survival through combinations of:

- preparation;
- equipment;
- protective clothing/armor;
- route knowledge;
- observation;
- stealth;
- positioning;
- traps or barriers;
- negotiation/appeasement where relevant;
- first aid and medicine;
- allies;
- retreat.

The player may still die when a lethal outcome is reached. The exact run-ending/checkpoint/meta-progression handling of player death belongs to later rules/implementation phases; P2 only requires that a `death` result be treated as genuinely different from ordinary defeat.

## 7. Companion contract

Companion Pokémon can be wounded, critically injured, separated, voluntarily depart, and potentially die.

However:

- companion death must not be routine attrition;
- an ordinary random encounter loss must not automatically erase a hard-earned companion;
- high-severity companion loss should arise from an appropriately dangerous chain of circumstances or explicit lethal context;
- species durability and vulnerability must be handled in P4 rather than assuming that all 151 species receive identical injury consequences;
- care burden is part of companionship: food, rest, shelter, treatment, safe terrain, and species-specific needs can matter;
- preserving a companion may justify retreating, abandoning an objective, spending scarce resources, or accepting another consequence.

The visible three-slot UI is a capacity contract, not three expendable `lives`.

## 8. NPC and community consequences

The same world rules apply to NPCs and settlements.

Pokémon attacks, failed journeys, hunting accidents, disease/poison, disasters, and conflict can leave:

- injured survivors;
- missing people;
- disability or changed occupation;
- deaths and mourning;
- route closures;
- new taboos or warnings;
- fear/revenge toward a species;
- rescue/recovery obligations;
- shortages caused by lost workers or specialists.

Death should therefore produce social consequences rather than functioning only as combat flavor text.

## 9. Medicine relationship

Because there is no universal Pokémon Center infrastructure, severe injury creates actual logistical pressure.

Later medicine rules may distinguish:

- immediate stabilization;
- field treatment;
- safe transport;
- specialist care;
- rest/recovery time;
- scarce remedies;
- local Pokémon-derived medical techniques where source-backed under D-017/D-018.

P2 does not freeze exact healing numbers, recovery durations, disease simulation, or permanent-injury tables.

## 10. Battle and encounter implications

Later battle/event rules must preserve the following separation:

`encounter failure != combat defeat != incapacitation != critical injury != death`

A confrontation may resolve through:

- avoidance;
- escape;
- deterrence;
- driving the Pokémon away;
- forcing the human away;
- capture/restraint for a non-companion purpose where fiction permits;
- negotiation/appeasement;
- injury;
- incapacitation;
- rescue;
- deliberate killing;
- accidental death;
- death caused by the Pokémon;
- another species-specific outcome.

P5 should author consequence ladders rather than reducing all dangerous encounters to HP depletion.

## 11. Relationship to killing Pokémon

This contract establishes that Pokémon **can die**. It does **not** decide when humans consider killing a Pokémon acceptable.

The social, ethical, subsistence, religious, ecological, and species-specific treatment of:

- defensive killing;
- hunting for food;
- hunting for materials;
- culling a dangerous population;
- mercy killing;
- killing a companion;
- killing sacred/rare/intelligent Pokémon;
- killing for prestige or sport

is a separate P2 Human Design Gate.

## 12. Downstream requirements

### P3

Must create a deterministic health/consequence model capable of representing non-lethal defeat, persistent injury, critical condition, and death without making death the automatic zero-HP state.

### P4

Each species dossier must identify exceptional lethality/durability factors where canon evidence or project derivation makes them meaningful.

### P5

Events must support escape, injury escalation, rescue, treatment, and explicit lethal branches. Danger must be content-authored rather than a universal `failed roll = death` rule.

### P7/P8

The UI must distinguish temporary defeat/injury/critical danger/death clearly enough that the player can understand the stakes. Exact visual treatment is deferred.

## 13. Non-goals

This contract does not yet decide:

- exact HP/wound numbers;
- exact injury tier count;
- whether the player has checkpoints, saves, meta-progression, or roguelike restart after death;
- exact permanent-injury tables;
- detailed disease/infection simulation;
- resurrection exceptions;
- the ethics/cultural rules for killing Pokémon;
- gore/visual-content intensity;
- species-specific durability.

Those belong to later gates or phases.