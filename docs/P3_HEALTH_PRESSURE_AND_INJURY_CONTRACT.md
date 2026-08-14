# P3 Health, Pressure, and Injury Contract

Status: **ACTIVE — P3 binding contract**  
Date: **2026-08-15**  
Decision: **P3-HDG-003 / D-025 / owner-approved compact hybrid model**

## 1. Purpose

The human survival model must make dangerous wilderness travel, Pokémon encounters, exhaustion, terror, wounds, treatment, and retreat matter without turning the mobile text RPG into four simultaneous HP bars.

The binding structure is:

- **Vitality (활력)** — one numeric short-term physical buffer;
- **Fatigue (피로)** — a three-stage long-duration pressure state;
- **Fear (공포)** — a three-stage acute psychological pressure state;
- **Injuries (부상)** — discrete persistent wound records with severity;
- **Critical condition / Death** — explicit high-severity states, never implied automatically by ordinary Vitality loss.

This contract implements D-020 serious selective lethality. Ordinary defeat is not automatic death, but sufficiently dangerous circumstances can create lasting injury, critical condition, permanent impairment, or death.

## 2. Design invariant: different state must create different decisions

These systems are separate only because they answer different questions.

- Vitality asks: **Can I keep physically functioning in this immediate scene?**
- Fatigue asks: **How much sustained hardship can I continue to carry through the expedition?**
- Fear asks: **How well can I keep acting while confronting a psychologically overwhelming threat?**
- Injury asks: **What concrete harm has actually happened to my body, and what does it prevent until treated?**

Do not create a new meter if its only effect duplicates one of these four responsibilities.

## 3. Vitality

### 3.1 Definition

Vitality is short-term physical capacity: shock, bruising, windedness, minor pain, near misses, exertion within a dangerous scene, and other recoverable loss of fighting/travel capacity.

Vitality is **not literal blood volume, tissue damage, or life points**. Losing Vitality does not automatically mean the character has received a persistent wound.

### 3.2 Default maximum

Human player-character maximum Vitality is:

`Vitality Max = 4 + Endurance`

With the D-023 attribute range, the normal mechanical envelope is therefore `4–8`.

This formula is intentionally compact. Endurance matters materially without turning a high-Endurance human into a Pokémon-scale damage sponge.

### 3.3 Ordinary harm scale

Default short-term Vitality loss is authored in a small envelope:

- `1` — minor impact, glancing harm, short shock, small exertional cost;
- `2` — solid hit, meaningful fall, hard physical consequence;
- `3` — severe immediate harm that may also justify an Injury depending on the fiction.

Values outside this range require an explicit exceptional rule or species/event contract. Pokémon danger should more often change the **kind of consequence** than inflate human HP arithmetic indefinitely.

### 3.4 Reaching zero

At `0 Vitality`, the character becomes **Incapacitated** for ordinary strenuous action until the scene resolves, aid is received, or an authored recovery opportunity occurs.

`0 Vitality` does **not** mean dead.

If the source that reduced Vitality to zero is physically `injury-capable`, the event must also resolve an Injury consequence appropriate to the fiction. A harmless exhaustion effect can reduce Vitality to zero without creating a cut or broken bone; a horn charge or crushing impact normally cannot.

Further injury-capable physical harm against an already Incapacitated character must escalate the danger rather than merely subtracting negative Vitality.

## 4. Fatigue — three stages

Fatigue tracks accumulated long-duration bodily pressure from travel and survival rather than individual blows.

The stages are:

1. **Ready / 정상**
2. **Tired / 피곤**
3. **Exhausted / 탈진**

### 4.1 Tired

Tired normally applies `-1 Context` only to checks where sustained exertion, endurance, alertness loss, or sleep pressure is actually relevant.

It is not a universal `-1 to everything` debuff.

### 4.2 Exhausted

Exhausted normally applies `-2 Context` to relevant sustained physical checks and makes extreme continued exertion unsafe.

An Exhausted character may still act. The state does not remove player agency. However, force-marching, sprinting for extended periods, repeated heavy labor, or similar actions can require a check or an explicit cost such as Vitality loss, worsening injury, or another authored consequence.

### 4.3 Sources

Typical Fatigue sources include:

- prolonged travel;
- missed sleep;
- hunger or dehydration;
- exposure to harsh heat/cold;
- repeated strenuous labor;
- carrying excessive loads;
- recovery from illness or serious injury where appropriate.

A single ordinary attack should not normally raise Fatigue unless its effect specifically causes sustained exhaustion.

## 5. Fear — three stages

Fear is acute psychological pressure. It is **not a universal sanity meter**, a morality score, or proof of permanent mental illness.

The stages are:

1. **Steady / 안정**
2. **Shaken / 동요**
3. **Panicked / 공황**

### 5.1 Shaken

Shaken normally applies `-1 Context` to checks that directly require confronting, approaching, concentrating on, or resisting the current fear source.

A Shaken character can still perform unrelated tasks normally when the fiction supports it.

### 5.2 Panicked

Panicked means the threat is overwhelming immediate self-control.

The game must not silently choose one humiliating action for the player. An authored Panicked situation should instead present protective responses such as retreat, seek cover, freeze/observe, call for help, or attempt to hold ground.

Attempting to continue a directly fear-confronting action can require a Will-based check or an explicit cost. A successful check enables controlled action; a poor result produces a context-appropriate protective/hesitation consequence rather than arbitrary character rewriting.

### 5.3 Sources

Fear can come from:

- encountering a vastly stronger Pokémon;
- witnessing severe injury or death;
- Psychic/Ghost phenomena;
- being trapped, hunted, isolated, or surrounded;
- culturally significant taboos or terrifying signs;
- species-specific effects established in P4.

Fear should be authored from actual circumstance. A common harmless creature should not generate Fear merely because the system has a Fear track.

## 6. Injuries — persistent concrete harm

Injuries are not a numeric bar. Each active Injury is a named record representing something that actually happened.

Examples:

- `Deep cut — right forearm`
- `Sprained ankle`
- `Cracked ribs`
- `Venomous puncture`
- `Burned left hand`

An Injury record contains at minimum:

- severity;
- body/location or functional domain where relevant;
- source/cause;
- current treatment/stabilization state;
- mechanical limitation;
- recovery condition or required follow-up.

## 7. Injury severity

### 7.1 Light Injury / 경상

A Light Injury is painful and persistent but not normally life-threatening.

Default mechanical treatment:

- one concrete functional limitation;
- typically `-1 Context` when the injury directly matters;
- may block a narrow action if fiction makes it impossible;
- can usually be stabilized with basic first aid and time.

### 7.2 Serious Injury / 중상

A Serious Injury materially changes the run until treated.

Default treatment:

- strong action restriction or `-2 Context` in directly affected actions;
- ordinary safe rest alone is insufficient for quick removal;
- requires appropriate treatment, substantial time, or a species-specific supported healing effect;
- can worsen to Critical if repeatedly stressed, untreated under dangerous conditions, or hit by an explicit escalation event.

### 7.3 Critical Injury / 치명상

A Critical Injury is life-threatening.

A Critical character must have an explicit **stabilization state** and an authored rescue/treatment window. The game must communicate the danger and what can still be done.

Critical Injury may cause unconsciousness, inability to travel unaided, severe bleeding, organ trauma, overwhelming venom, or another fiction-specific emergency.

Death can result from unresolved Critical Injury, an explicitly lethal event, deliberate lethal action, failed rescue/treatment under sufficiently dangerous circumstances, or another D-020-compatible path.

Critical Injury is not produced by an ordinary low-stakes failed check merely because the dice were poor.

## 8. Bounded injury list

For mobile readability, a human player character may have at most **three simultaneously active mechanical Injury records**.

This cap is a UI/rules bound, not immunity to a fourth wound.

If a new injury would exceed the cap, the event must do one of the following according to fiction:

- merge it into a related existing Injury and worsen that record;
- escalate an existing Injury by one severity tier;
- replace a resolved/non-material record with the new one;
- represent the extra harm through an explicit Critical-state consequence.

The system must never silently discard serious harm merely because the list is full.

## 9. Creating an Injury

An Injury can be created by:

- an explicitly injury-capable event consequence;
- severe physical harm that reaches Incapacitated state;
- a dangerous fall, trap, weapon, venom, burn, crushing effect, or species-specific attack;
- worsening an existing Injury through misuse or lack of treatment;
- an authored Trouble Spike consequence only when the underlying situation was already capable of causing that injury severity.

A natural `1+1` Trouble Spike is **not permission to invent a permanent injury from a harmless scene**.

Likewise a natural `6+6` Fortune Spike cannot erase an already established catastrophic wound without fictionally valid treatment.

## 10. Recovery channels stay distinct

### 10.1 Vitality recovery

Vitality is the fastest-recovering track.

Default recovery:

- a genuinely safe short rest can restore `2 Vitality` once the immediate scene has ended;
- a safe full sleep with adequate food/water normally restores Vitality to maximum;
- Serious/Critical Injury, illness, poison, exposure, or bad shelter may limit that recovery when explicitly stated.

This is not magical regeneration. Vitality recovery represents recovering breath, shock tolerance, confidence of movement, and short-term physical capacity.

### 10.2 Fatigue recovery

Fatigue requires actual survival needs to be addressed.

- a meal, hydration, shelter, and several hours of rest can reduce Fatigue by one stage when appropriate;
- a safe full sleep normally returns ordinary Tired state to Ready;
- Exhausted may require a genuinely restorative rest period rather than a brief pause;
- continued deprivation prevents recovery even if Vitality is full.

### 10.3 Fear recovery

Fear recovery depends on psychological safety rather than calories or bandages.

Distance from the threat, reliable shelter, reassurance, successful understanding of the danger, support from trusted people/companions, or an authored victory/escape can reduce Fear.

Fear normally reduces after the acute scene if the threat is actually gone. Persistent trauma is not created automatically; if a lasting psychological consequence exists, it should be a specific authored condition rather than permanently filling the Fear track.

### 10.4 Injury recovery

Injuries require cause-appropriate treatment and time.

- Light Injury: first aid plus ordinary recovery time;
- Serious Injury: skilled treatment and significant downtime, potentially days/weeks depending on the wound;
- Critical Injury: immediate stabilization plus advanced/rare treatment and an explicit survival path.

There is no generic potion economy that instantly deletes wounds. P4 may define source-backed Pokémon-assisted medicine or technology islands, but those effects must follow D-018 and species-specific evidence.

## 11. Interaction with Endurance and Will

### 11.1 Endurance

Endurance:

- raises maximum Vitality through `4 + Endurance`;
- can be the relevant Attribute for exposure, poison, disease, exhaustion, and physical survival checks;
- does not automatically reduce every incoming damage value;
- does not make Serious/Critical Injury irrelevant.

### 11.2 Will

Will:

- is the primary internal-resistance Attribute for fear and hostile mental pressure;
- can enable controlled action while Shaken/Panicked;
- does not eliminate Fear as a meaningful system;
- does not grant psychic powers by itself.

## 12. Armor, equipment, and preparation

Equipment should usually alter **fictional eligibility, Context, harm category, or Injury severity**, not inflate a second defensive HP system.

Examples:

- a shield may make a charge blockable at all;
- protective clothing may convert a burn that would create a Serious Injury into Vitality loss plus a Light Injury;
- rope/route preparation may prevent a fall consequence;
- antidote knowledge may change a venom event from escalating Injury to recoverable pressure.

P5 authors consequences; P4 supplies species-specific hazard facts; P6 later binds asset/resource representation; P7 implements the stable rule fields.

## 13. Companion separation

This contract defines the human player-character survival model.

Pokémon companions must not automatically use `4 + Endurance`, the human Fatigue/Fear stages, or the exact human Injury list. P4 owns a Pokémon-appropriate adaptation model based on species biology, danger, resilience, size, behavior, and companionship requirements.

However, companion state must preserve D-020: ordinary defeat is not automatic death, while serious injury and rare high-impact death remain possible.

## 14. Failure and lethal-state rules

The following are binding:

1. `Vitality 0` = Incapacitated, **not dead**.
2. Fatigue 2 / Exhausted = severe expedition pressure, **not dead**.
3. Fear 2 / Panicked = acute loss of composure, **not insanity and not automatic loss of player agency**.
4. Injury severity is explicit and persistent.
5. Death requires a D-020-compatible lethal path; it is never a hidden side effect of ordinary HP arithmetic.
6. Companion presence cannot be required to survive baseline main progression; human-only `0/3` runs remain valid.
7. Recovery resources and safe routes must matter, but the game should reward avoiding danger as much as winning fights.

## 15. Event-authoring consequence ladder

When a P5 event can harm a human, authors should prefer this order of escalation:

1. resource/time/position cost;
2. Vitality loss;
3. Fatigue or Fear increase when contextually appropriate;
4. Light Injury;
5. Serious Injury;
6. Critical Injury;
7. Death only when telegraphed/contextually justified.

This is not a mandatory sequence for every event. A fall from a cliff or lethal attack can bypass lower levels. The ladder exists to stop routine bad luck from turning into arbitrary permadeath.

## 16. Data contract fields

P7 should be able to represent at minimum:

```text
HumanSurvivalState
  vitalityCurrent
  vitalityMax
  fatigueStage: 0..2
  fearStage: 0..2
  injuries[]: max 3
    id
    label
    severity: light | serious | critical
    source
    functionalTags[]
    contextPenalty
    stabilized
    recoveryState
  incapacitated
  criticalDeadlineOrTrigger?  // only when authored
```

Do not derive death from `vitalityCurrent <= 0`. Death is its own explicit terminal state/event result.

## 17. Tuning boundary

The following are initial P3 balance values and may be tuned in data without reopening P3-HDG-003 if their roles remain intact:

- `Vitality Max = 4 + Endurance`;
- ordinary Vitality harm `1–3`;
- safe short-rest restore `2`;
- contextual penalties of approximately `-1` for first-stage pressure and `-2` for severe-stage pressure.

Changing the architecture — e.g. merging Fear and Fatigue, removing discrete Injuries, making Vitality zero equal death, or adding multiple new universal meters — requires a later explicit rules decision.

## 18. Downstream obligations

### P3 remaining

- bind character creation/background competence allocation;
- bind progression philosophy;
- bind inventory/resource/economy abstraction;
- bind rare psychic-gift mechanics within the same check/survival system;
- audit the complete P3 ruleset for modifier stacking and state overload.

### P4

- define species-specific human hazards and companion survivability adaptations;
- identify poison, burn, crushing, psychic, fear, disease, and other exceptional hooks only where species evidence supports them;
- do not force Pokémon into the human seven-attribute or human survival model.

### P5

- author telegraphed consequence ladders;
- use Vitality/Fatigue/Fear/Injury according to their distinct meanings;
- provide retreat, preparation, treatment, and human-only survival branches;
- never use Trouble Spike as arbitrary instant death.

### P7/P8

- keep the mobile presentation compact: one visible Vitality number/bar, two small three-stage pressure indicators, and up to three named Injury records;
- make recovery requirements and dangerous Critical states legible without requiring the player to inspect hidden formulas.
