# P8.3 Product Acceptance and First-Play Milestones

## Core rule

The project now has two separate acceptance layers:

### Engineering gate

Examples:

- no crash / parse failure,
- deterministic gameplay/state parity,
- save/load contract correctness,
- no viewport overflow/input regression,
- resource/provenance validity,
- build/CI green.

### Product gate

Owner-visible questions:

- does it look like a game rather than a web page/presentation slide,
- is Korean prose natural and comfortable to read,
- is important HUD state glanceable,
- is scene composition coherent and readable,
- do choices create understandable pressure/consequence,
- does Pokémon ecology feel physical and dangerous,
- does progression create a reason to continue,
- does the player want to make the next input/choice.

Binding rule:

> **Engineering PASS + Product FAIL = FAIL.**

Automated tests can establish engineering safety. They cannot approve product feel.

## Current architecture gate

Finish #139 / PR #140 before additional presentation infrastructure or P9 content breadth.

The owner reviews exactly the Godot opening and windbreak/Beedrill surfaces with the real P6 Pokémon path.

Decision:

- if Godot is materially better, adopt Godot as production game client;
- keep TypeScript/web temporarily as deterministic migration oracle and negative/reference evidence;
- port authority in bounded slices and converge to **one gameplay authority** once required parity is proven;
- do not maintain TypeScript gameplay runtime and Godot gameplay runtime as two permanent independently evolving authorities;
- if Godot is rejected, preserve the spike and return to web presentation with the evidence learned.

Do not add more architecture/factory infrastructure merely to avoid making this visual/product decision.

## Product milestone A — First 3 Minutes

The first three minutes must form one coherent playable introduction:

```text
title / resume
 -> character/world introduction
 -> first movement/travel action
 -> concrete Pokémon danger/ecology signal
 -> first consequential choice
```

Owner product acceptance must verify:

- opening immediately reads as a game,
- controls/next action are obvious,
- Korean introduction is natural rather than questionnaire/exposition prose,
- HUD is compact and glanceable,
- first Pokémon-related tension appears quickly,
- the player wants to continue past the first choice.

Do not expand broad content before this is accepted.

## Product milestone B — First 10 Minutes

Create one complete small expedition loop:

```text
prepare
 -> depart / route pressure
 -> windbreak / Beedrill encounter
 -> meaningful risk/loss/reward
 -> return
 -> equipment/resource/growth change
 -> clear reason for another expedition
```

Acceptance requires that the player can explain what changed because of their decisions and why the next expedition is desirable.

## Product milestone C — First 30 Minutes

Extend only after the first 10 minutes are accepted:

- second expedition with a meaningfully different route/pressure,
- at least one new location/ecology presentation,
- another Pokémon encounter pattern rather than a reskinned first event,
- visible benefit from prior preparation/growth,
- stronger world/settlement progression,
- credible possibility of future Pokémon relationship/companionship without making collection routine.

The goal is retention and world interest, not content count.

## Narrative Factory demand-driven rule

The existing Narrative Factory remains a production tool, not a product goal.

Do not add a new factory schema, dependency-analysis feature, provider handoff layer or orchestration abstraction because a future large corpus might need it.

A factory extension requires a **retained real authoring failure**, for example:

- revising session `s034` actually breaks downstream continuity in `s038`,
- a real multi-session topic exceeds context budget in a way the current digest cannot handle,
- a provider handoff actually loses stable session identity,
- current QA repeatedly misses a concrete Korean-language defect class.

Then fix only the smallest recurring production problem.

## Scope priority

Until the First 10 Minutes product milestone is accepted, priority order is:

1. product feel and readability,
2. actual gameplay/progression motivation,
3. content quality,
4. engineering defects blocking those goals,
5. production tooling only when a real content-production failure justifies it.

Architecture completeness, factory completeness and green automation are not substitutes for this order.
