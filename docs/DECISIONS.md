# Decision Log

This file records durable owner-approved product/design decisions so future agents do not repeatedly ask the same questions or silently replace them.

Statuses:

- `ACTIVE` — current authority,
- `SUPERSEDED` — intentionally replaced by a later decision,
- `PROVISIONAL` — direction is useful but must be confirmed before an expensive commitment.

## D-001 — Project purpose and distribution

**Status:** ACTIVE  
**Date:** 2026-08-14

The project is an unofficial, non-commercial Pokémon fan project intended primarily for the owner's personal play. Limited sharing with friends is acceptable. The GitHub repository is public; people discovering it are not intentionally blocked.

The repository must not imply that non-commercial status itself grants permission to use Pokémon IP.

## D-002 — Core format

**Status:** ACTIVE  
**Date:** 2026-08-14

The target game is a mobile-friendly text RPG/TRPG with character creation, stats, dice rolls/checks, random insights/discoveries, conditional events, branching choices, and persistent run state.

The feel should be closer to an event-driven adventure story than a conventional graphical Pokémon collection game.

## D-003 — Setting direction

**Status:** ACTIVE  
**Date:** 2026-08-14

The world is pre-modern / ancient in tone. Humans and Pokémon are **not** already living together in the normalized modern Pokémon relationship.

Pokémon may be perceived as dangerous creatures/monsters/wildlife depending on later setting decisions. Forming a relationship with or acquiring multiple Pokémon should not be assumed to be easy or commonplace.

The exact era, terminology, social structure, and severity are intentionally unresolved until P2.

## D-004 — Occupation fantasy

**Status:** ACTIVE  
**Date:** 2026-08-14

Occupations/backgrounds should emerge from the Pokémon setting and pre-modern society. Generic fantasy-magic classes such as a conventional wizard should not be introduced merely because the game uses a medieval-like aesthetic.

A role based on animal/Pokémon communication or similar setting-native expertise is directionally more appropriate, subject to P2/P3 design.

## D-005 — Autonomous repository workflow

**Status:** ACTIVE  
**Date:** 2026-08-14

The owner wants the project to advance from short commands such as `다음 작업 진행해줘`.

Agents should recover state, choose the next fixed-roadmap task, research factual uncertainty, execute one coherent scope, validate it, update status, and publish a scoped PR without requiring the owner to restate project context.

## D-006 — Human Design Gate

**Status:** ACTIVE  
**Date:** 2026-08-14

If a material product/world/rules choice has multiple reasonable creative answers and cannot be objectively resolved from evidence, the agent must ask the owner before freezing it.

The agent should provide concise options, a recommendation, and downstream impact. Researchable technical/factual questions should be investigated by the agent instead of delegated to the owner.

Approved decisions must be written back to this log.

## D-007 — Implementation timing

**Status:** ACTIVE  
**Date:** 2026-08-14

Reference/API/data/IP research and game-design contracts should be established before the production implementation architecture is frozen.

The production resource/asset contract must also be established after core game design and before technical architecture, so framework/runtime choices do not silently dictate asset policy and late asset decisions do not force avoidable architecture rewrites.

Early executable experiments are allowed only as bounded evidence for a specific uncertainty.

## D-008 — Mobile delivery direction

**Status:** PROVISIONAL  
**Date:** 2026-08-14

A conveniently accessible mobile experience is required. A web/PWA build hosted through a service such as Vercel is acceptable if it provides a good phone experience. APK installation is desirable only if it does not impose disproportionate complexity.

The exact technical stack and packaging route are deferred to P7 after current primary-source research, game-design contracts, and the P6 resource/asset strategy.

## D-009 — Two-pass resource and asset planning

**Status:** ACTIVE  
**Date:** 2026-08-14

Resource planning is a first-class project phase and intentionally happens in two passes.

**P1** performs broad resource-source reconnaissance. It should discover and assess Pokémon sprite/icon/audio sources and relevant font/UI/audio/background ecosystems, recording provenance, license/IP boundaries, maintenance/pinning characteristics, and `ADOPT / ADAPT / REJECT / DEFER` decisions. When final usefulness depends on unfinished design, the source should be marked for `REVISIT IN P6` rather than prematurely selected.

**P6 (#12)** occurs after P2-P5. It owns the final production resource contract: required/optional/deferred asset inventory; source versus project-created/generated strategy; provenance/attribution/redistribution classification; public-repository inclusion versus build-time fetch/generation; stable resource IDs/manifests; preprocessing/validation; and mobile payload/decode/audio/cache budgets.

P6 precedes P7 Technical Architecture. Later phases must preserve the resource contract rather than bypassing it with one-off asset handling.
