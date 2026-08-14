# Design Principles

These principles guide design choices but do not replace explicit owner decisions in `docs/DECISIONS.md`.

## 1. Adventure first, collection second

The game should create memorable runs and personal stories. Pokémon are part of the world and may become companions, but the core loop is not assumed to be collecting a complete roster.

A single meaningful Pokémon relationship can be more valuable than frequent acquisition.

## 2. Pokémon are part of ecology, not reward vending machines

Encounters should arise from habitat, season, danger, territory, human activity, prior events, and world state where relevant.

A Pokémon's appearance should be able to function as:

- wildlife,
- a local threat,
- an omen,
- a resource competitor,
- a sacred or culturally significant creature,
- a recurring individual,
- a possible companion,
- or simply an observed creature.

Do not reduce every encounter to combat/capture.

## 3. Pre-modern Pokémon world, not generic fantasy

The setting may use medieval/ancient material culture, but it is still a Pokémon world.

Avoid importing fantasy conventions by default: magic schools, spell slots, cleric miracles, mana systems, or wizard professions require explicit owner approval.

Prefer roles grounded in survival, travel, craft, medicine, observation, trade, hunting, animal/Pokémon handling, communication, scholarship, social influence, and local institutions that P2 actually establishes.

## 4. Rules should create story decisions

TRPG mechanics exist to make choices uncertain and consequential, not to reproduce tabletop complexity for its own sake.

Prefer a compact rule that unlocks many event outcomes over many narrow subsystems.

## 5. Failure should generate content when possible

A failed check should often create a cost, complication, injury, relationship change, lost opportunity, or altered event path instead of only producing `nothing happens`.

The exact failure/partial-success philosophy is a P3 Human Design Gate.

## 6. Conditions make the world remember

Events should be able to react to:

- attributes and derived state,
- items/resources,
- background/occupation,
- prior choices,
- event flags/history,
- region/location,
- time/weather/season if adopted,
- Pokémon presence and relationship state,
- reputation/social relationships,
- injuries/fear/fatigue,
- hidden discoveries/insights.

This statefulness is a core source of replayability.

## 7. Randomness is authoritative but inspectable

Randomness should create uncertainty without making debugging impossible.

Use seeded/reproducible authoritative RNG where practical. Record enough information to understand why an event/check result happened without exposing every hidden value to the player UI.

## 8. Curated regional ecology

Owning/importing data for all generations does not mean every Pokémon belongs in every playable area.

Each region should intentionally choose species based on ecology, tone, danger, story, and gameplay needs. Rarity should preserve discovery and mystery.

## 9. Separate canonical source data from project interpretation

Keep externally sourced Pokémon facts distinguishable from project-owned derived fields such as threat class, local folklore, event tags, relationship difficulty, or regional role.

This makes updates, provenance, testing, and later reinterpretation safer.

## 10. Mobile reading quality is a core feature

The primary interaction is reading and choosing. Phone ergonomics therefore matter as much as conventional game UI polish:

- short readable passages,
- obvious choice hierarchy,
- good resume/save behavior,
- minimal input friction,
- no unnecessary loading or animation blocking text flow.

Exact UI direction is deferred until its owning phase.

## 11. Content must obey contracts

Do not solve one event by adding a one-off gameplay rule in UI or bespoke engine code.

If content needs a new reusable concept, decide whether the owning schema/rule should gain that concept. If it changes durable design, invoke a Human Design Gate.

## 12. Do not fabricate canon silently

Agents may write local flavor within approved boundaries, but durable lore must be explicit.

If a generated fact would constrain future writers or change how the world works, it belongs in P2/P3/P4 contracts and potentially `docs/DECISIONS.md`.

## 13. Resources are part of product design, not late decoration

Sprites, backgrounds, icons, typography, sound, ambience, and illustrations affect readability, tone, performance, distribution, and IP/provenance risk. They should not be left as an unbounded cleanup task after implementation.

Use a two-pass process:

- P1 discovers credible sources and records provenance/risks without prematurely committing the game to them.
- P6, after P2-P5, freezes the actual production resource inventory, source/creation strategy, redistribution boundary, preprocessing pipeline, and mobile resource budget.

Prefer a smaller coherent resource set that reinforces the world and remains cheap to load/cache over visual breadth that adds little to the text-first experience. Do not repeatedly decode, resize, convert, fetch, or duplicate resources at runtime when build-time normalization and cached ownership can solve the problem.
