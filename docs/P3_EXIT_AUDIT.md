# P3 Core TRPG Rules Exit Audit

Status: **PASS**  
Date: **2026-08-15**  
Phase: **P3 — Core TRPG rules and character model (#4)**

## 1. Audit question

P3 may close only if the human-side rules are deterministic, internally coherent, compact enough for a mobile text RPG, consistent with the P2 world, and sufficiently specified for P4 Pokémon adaptation and P5 event-engine design.

This audit checks the complete P3 rule surface after D-030.

## 2. Audited binding contracts

- `docs/P3_ATTRIBUTE_CONTRACT.md`
- `docs/P3_DICE_AND_CHECK_CONTRACT.md`
- `docs/P3_HEALTH_PRESSURE_AND_INJURY_CONTRACT.md`
- `docs/P3_CHARACTER_CREATION_CONTRACT.md`
- `docs/P3_PROGRESSION_AND_COMPETENCE_CONTRACT.md`
- `docs/P3_INVENTORY_RESOURCES_AND_ECONOMY_CONTRACT.md`
- `docs/P3_RARE_PSYCHIC_GIFT_CONTRACT.md`
- `docs/P3_FATE_AND_EMERGENCY_CONSUMABLES_CONTRACT.md`

The P2 world, companion, lethality, terminology, technology and killing-ethics decisions remain upstream constraints.

## 3. Exit criteria matrix

| Requirement | Result | Evidence / conclusion |
|---|---|---|
| Character creation is deterministic | PASS | Three fiction-first formative choices deterministically resolve Origin + Learned Practice; explicit specialization follows reveal. |
| Human attributes are frozen | PASS | Seven core attributes with compact `0–4` scale; ordinary creation starts at 1 and spends four increases with starting cap 3. |
| Skills/competences are bounded | PASS | Compact `+0/+1/+2` Competence model; one competence contribution per check; no generic Pokémon-handling skill. |
| Core uncertain-action check is frozen | PASS | `2d6 + Attribute + Competence + Context`, bounded Context, explicit difficulty ladder and four margin bands. |
| Critical/dopamine behavior is deterministic | PASS | Natural `6+6` Fortune Spike and `1+1` Trouble Spike are logged overlays, not automatic success/death. |
| Opposed checks and assistance are expressible | PASS | Existing check contract defines contested resolution, defender/status-quo tie handling and bounded assistance. |
| Health/injury model is compact and serious | PASS | One Vitality pool + staged Fatigue/Fear + max-three concrete Injury records + explicit Critical/death states. |
| Death is causal rather than random punishment | PASS | `0 Vitality != death`; lethal outcomes require lethal fiction, critical escalation or explicit authored consequence under D-020. |
| Recovery channels are distinct | PASS | Vitality, Fatigue, Fear and Injury have different recovery requirements; generic instant-heal economy is rejected. |
| Inventory matters without spreadsheet simulation | PASS | Notable items + three pooled resources + small integer Load; no kilogram/grid simulation or per-frame survival drain. |
| Economy fits the pre-regional world | PASS | Barter, provisioning, favor/debt and locality-specific exchange are supported; no universal Kanto wallet. |
| Pokémon-derived loot is not generic | PASS | Species/context-specific treatment is deferred to P4; defeat never automatically produces materials/money/XP. |
| Progression avoids level/XP grinding | PASS | Milestone advancement + earned eligibility; no kill-XP, use-count XP or generic level. |
| Advancement remains deterministic | PASS | Keyed one-shot milestones, explicit eligibility and checkpoint spending are authoritative state transitions. |
| Psychic play is setting-native and rare | PASS | No psychic class/stat/mana/skill; rare foreshadowing + mandatory authored awakening; one narrow Gift family by default. |
| Non-psychic characters remain complete | PASS | Gift state is optional and rare; no main progression assumes awakening. |
| Fate/reroll ambiguity is resolved | PASS | D-030 explicitly rejects universal rerolls/die replacement/result-upgrade currencies. |
| Players still have emergency agency | PASS | Concrete finite-use emergency consumables may alter legal consequences through preparation/reaction/recovery windows. |
| Emergency items do not undermine dice | PASS | Dice and doubles stay immutable; items modify a causally compatible consequence, not the roll. |
| Human-only `0/3` run remains viable | PASS | Attributes, skills, equipment, preparation, escape, treatment, emergency items and progression do not require a companion. |
| Rules can feed P5 as data | PASS | Checks, injuries, inventory operations, progression transitions, Gift states and item reaction windows have stable conceptual operations/state. |
| Hot/repeated work is avoidable | PASS | State changes are discrete; inventory Load is cached on mutation; no frame polling for hunger/progression/Gifts/emergency items. |

## 4. Modifier-stacking audit

### 4.1 Attribute

Exactly one governing human Attribute normally contributes to a check.

**PASS:** no contract introduces additive secondary Attribute stacking.

### 4.2 Competence

At most one applicable Competence contributes `+0/+1/+2`.

Rare psychic Gifts do not add a hidden psychic Competence. Ordinary skills may help interpretation/preparation only when the fiction supports them.

**PASS:** expertise remains inside the small 2d6 modifier envelope.

### 4.3 Context

Equipment, preparation, injury, fatigue, fear, help, relationship position, environmental state, Gift support and similar temporary factors collapse into the existing bounded Context result, normally `-2..+2`.

A rare emergency item may instead change fictional permission or a consequence directly, which avoids stacking another numeric bonus layer.

**PASS:** there is no uncontrolled additive modifier tower.

## 5. State-overload audit

The ordinary human run carries these recurring state families:

- seven Attributes;
- compact Competences;
- Vitality;
- Fatigue stage;
- Fear stage;
- up to three active Injury records;
- notable items + three resource pools + derived Load;
- advancement points + explicit growth eligibilities;
- Origin/Practice/background flags and relationships;
- optional rare Gift state/facets;
- knowledge/event state owned downstream.

This is non-trivial but each state family answers a distinct gameplay question.

P3 rejected additional meters for:

- Luck/Fate;
- psychic mana/focus;
- universal favor currency;
- item durability bars;
- hunger/hydration clocks;
- character level/XP;
- universal Pokémon handling/bond stat.

**PASS:** the model remains compact relative to the number of decisions it supports.

## 6. Survival and lethality consistency audit

The rules preserve the intended hierarchy:

1. avoid or understand danger;
2. prepare equipment/resources;
3. choose an approach;
4. resolve uncertainty through the bounded 2d6 engine;
5. use legal concrete reactions where carried/prepared;
6. accept or manage the consequence;
7. retreat, stabilize, recover or escalate when necessary.

No single layer bypasses the others:

- high stats do not make structurally impossible actions possible;
- a Fortune Spike does not grant immunity;
- a Trouble Spike does not cause arbitrary death;
- a Remedy is not a healing potion that erases Critical Injury;
- an emergency consumable cannot cancel every failure;
- a psychic Gift is not a universal defensive spell list;
- a companion is not required as a survival tax.

**PASS.**

## 7. Character-build viability audit

### Ordinary human specialist

A normal character can specialize through Attributes, two starting trained Competences, equipment and background hooks while retaining progression headroom.

**PASS.**

### Generalist

The creation budget permits broad `2` ratings and two distinct trained domains rather than requiring one min-maxed role.

**PASS.**

### Human-only `0/3`

Route knowledge, weapons, armor, tools, pooled resources, emergency consumables, healing/escape options, relationships and progression remain available without Pokémon.

**PASS.**

### Companion-assisted

P3 leaves assistance bounded and species-specific rather than creating automatic stacking bonuses. P4 owns exact companion capabilities and burdens.

**PASS for P3 handoff.**

### Psychic-awakened

Psychic awakening is rare, optional, one-family-bounded and pays through existing state/consequence systems rather than a parallel class economy.

**PASS.**

## 8. Reward-loop audit

P3 supplies enough reward channels that the game does not need frequent Pokémon capture or generic XP drops:

- advancement points at authored milestones;
- growth eligibility;
- bestiary/route/local knowledge;
- relationships/reputation/access;
- equipment and specialized tools;
- Provisions/Remedies/Materials;
- rare emergency consumables;
- caches/storage/workshop/healer/transport access;
- discoveries and optional event flags;
- extremely rare psychic awakening/facet growth;
- eventual species-specific resource and companionship opportunities from P4.

**PASS:** reward variety exists without changing the project into a collection treadmill.

## 9. Determinism and replay audit

P3 does not require continuous simulation.

Authoritative randomness is confined to the seeded check/event layer that P5 will define. P3 requires explicit logging/state for:

- individual d6 values and doubles;
- background choices/result IDs;
- inventory/resource mutations;
- Load recomputation after relevant mutation;
- milestones and eligibility grants;
- Gift foreshadowing/awakening transitions;
- emergency-item reaction choice and consumption.

Emergency items explicitly preserve the sequence `roll → outcome/spike → legal reaction → consumption → final consequence`.

**PASS for P5 handoff.**

## 10. Human Design Gate audit

Resolved P3 Human Design Gates:

- P3-HDG-001 / D-023 — seven core human Attributes.
- P3-HDG-002 / D-024 — 2d6 staged checks + rare doubles spikes.
- P3-HDG-003 / D-025 — compact Vitality/Fatigue/Fear/Injury survival model.
- P3-HDG-004 / D-026 — veiled lifepath + free specialization creation.
- P3-HDG-005 / D-027 — milestone + earned-eligibility progression.
- P3-HDG-006 / D-028 — hybrid Load + pooled resources/local economy.
- P3-HDG-007 / D-029 — rare foreshadowing + in-run psychic awakening.
- P3-HDG-008 / D-030 — no Fate/reroll currency; concrete emergency consumables instead.

No unresolved P3-level creative choice blocks P4/P5.

**PASS.**

## 11. Tuning versus architecture

The following remain intentionally tunable without reopening P3 architecture:

- exact Vitality/Load numbers;
- exact item Load and pool amounts;
- individual difficulty values;
- individual emergency consumable effects/scarcity;
- milestone cadence and current `1/2/3` advancement costs;
- exact psychic foreshadowing/awakening run-frequency targets;
- event-specific consequence severity.

These should be tuned by authored content, deterministic simulation and later playtesting.

The following are not mere tuning and require an explicit later rules change if reconsidered:

- replacing 2d6 with another core engine;
- adding an ordinary Fate/reroll currency;
- adding generic class/level/kill-XP progression;
- making Pokémon companionship mandatory;
- adding a generic Pokémon-handling skill;
- turning psychic Gifts into a normal class/spell/mana system;
- replacing hybrid inventory with exhaustive weight/grid simulation;
- adding a universal regional money economy to this baseline era.

## 12. Downstream obligations

### P4

P4 must not force Pokémon into the human seven-Attribute model. It must define species-specific threat/contest hooks, ecology, companionship, resource/harvesting ethics, hazards, ancient-strength treatment, identification and technology/craft implications.

P4 should also identify species/phenomena that can justify exact emergency consumables, remedies or protective materials without inventing pseudo-canon.

### P5

P5 must implement the deterministic event language needed by these contracts, including:

- four check outcome bands + doubles overlays;
- consequence ladders;
- preparation/reaction/recovery item windows;
- state mutations for survival, inventory, progression, knowledge, relationships and Gifts;
- seeded RNG/replay logs;
- explicit `0/3` companion-valid paths.

### P6/P7/P8

Later production phases must preserve mobile readability, cached/transition-based state evaluation and the absence of needless per-frame simulation.

## 13. Final result

**P3 EXIT AUDIT: PASS.**

P3 has a coherent deterministic human TRPG contract that P4 can use to adapt Pokémon and P5 can use to define event execution.

No blocking P3 Human Design Gate remains.

The next core phase is **P4 — Pokémon adaptation + complete Gen-I 151 species dossiers (#5)**. P4 should begin by freezing the shared Pokémon-domain contract and dossier schema before authoring the 151 species in batches.