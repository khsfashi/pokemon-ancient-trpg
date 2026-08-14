# Roadmap

This roadmap defines the default core progression lane. The owner may explicitly reorder or replace phases, but agents must not do so opportunistically.

## Fixed phase order

| Phase | Issue | Purpose | Exit condition |
|---|---:|---|---|
| P0 | #1 | Project governance and autonomous continuation | A fresh agent can recover state, select next work, respect Human Design Gates, and leave a deterministic handoff. |
| P1 | #2 | Reference, API, data-source, resource-source, and IP research | Current primary-source registry with provenance, risks, ADOPT/ADAPT/REJECT/DEFER decisions, and a resource-candidate revisit list for P6. |
| P2 | #3 | World bible | Minimum durable setting contract is owner-approved; unresolved canon questions are explicit. |
| P3 | #4 | Core TRPG rules | Character/check/injury/progression contracts are deterministic and sufficiently frozen for downstream systems. |
| P4 | #5 | Pokémon adaptation + complete Gen-I species dossiers | Shared Pokémon-domain rules are stable and all National Pokédex #001-#151 species have substantive, reviewed ancient-setting dossiers. |
| P5 | #6 | Narrative event engine | Data-driven event/condition/choice/outcome/seeded-run contract is implementation-ready. |
| P6 | #12 | Resource and asset strategy | Exact asset inventory, sourcing/provenance/redistribution rules, production pipeline, and mobile resource budget are frozen from the P2-P5 design. |
| P7 | #7 | Technical architecture | Current, proven implementation stack plus save/data/resource/test/deployment architecture are frozen and satisfy P6 constraints. |
| P8 | #8 | First playable vertical slice | One coherent mobile-sized run works end-to-end using production-intended gameplay and resource paths. |
| P9 | #9 | Content expansion + complete Gen-I realization | Replayable content breadth exists and all #001-#151 species have at least one meaningful gameplay presence consistent with their P4 dossiers. |
| P10 | #10 | Mobile/release | PWA/distribution path is reproducible; resource notices/bundling rules are preserved; optional APK exists only if justified. |

## Why specification and resource planning come first

This project is content-, rules-, and presentation-heavy. A premature application skeleton can encode assumptions about stats, events, Pokémon ownership, data formats, saves, UI flow, art density, asset layout, or loading behavior before those choices have been made.

Therefore P1-P5 are allowed to produce mostly research, decisions, schemas, examples, and testable contracts. P1 performs broad resource-source reconnaissance but deliberately does not freeze the final asset set while game design is unfinished.

P6 runs **after the core design contracts P2-P5**. It converts the finished design into an exact resource plan: what the game needs, which sources or production methods are acceptable, what may be redistributed in the public repository/build, how assets are normalized, and what mobile payload/memory/loading constraints the implementation must obey.

P7 is the point at which production implementation architecture is intentionally frozen. This prevents the framework/runtime from silently dictating asset policy and prevents a late resource investigation from forcing avoidable architecture rewrites.

Small executable prototypes are permitted earlier only when they answer a bounded technical uncertainty and are clearly disposable evidence rather than production architecture.

## P1 vs P6 resource boundary

### P1 — reconnaissance

P1 answers questions such as:

- what Pokémon sprite/icon/audio sources exist,
- what metadata and provenance each source exposes,
- what licenses/notices apply to repository code/data versus the underlying Pokémon assets,
- whether a source is maintained, pinnable, fetchable, and worth revisiting,
- what font/UI/audio/background ecosystems may be relevant,
- what candidates should be `ADOPT`, `ADAPT`, `REJECT`, `DEFER`, or explicitly `REVISIT IN P6`.

P1 must not prematurely freeze art direction, illustration density, exact runtime asset classes, repository bundling, or mobile memory budgets when those depend on later design.

### P6 — production resource contract

P6 revisits viable P1 candidates with P2-P5 in hand and freezes:

- required / optional / deferred asset inventory,
- Pokémon-facing sprite/icon/audio choices,
- project-owned background/UI/illustration/audio production needs,
- source/provenance/attribution/redistribution classification,
- public-repository inclusion versus build-time fetch/generation policy,
- stable resource IDs and manifest design,
- preprocessing and validation rules,
- runtime preload/cache/eviction expectations,
- initial payload, decoded-image/audio memory, and other mobile resource budgets,
- explicit constraints handed to P7 architecture.

## Generation I 151-species coverage contract

Owner decision D-011 adds a hard breadth requirement without changing the phase order.

### P4 — design all 151 species

P4 must first freeze the shared Pokémon-domain contract, then author a detailed dossier for **every original National Pokédex species #001-#151**. The dossier schema and authoring/validation sequence are defined in `docs/GEN1_SPECIES_COVERAGE_PLAN.md`.

P4 closure requires a manifest proving `151 / 151` substantive dossiers. A row containing only imported source data, a generic one-line description, or a placeholder does not count.

The dossiers must remain compatible with the pre-Hisui world direction, P2 setting rules, P3 mechanics, and P5 event inputs. They should distinguish source-backed facts from project-authored ancient-setting interpretation and preserve unresolved questions rather than silently inventing pseudo-canon.

### P8 — prove the pipeline with a curated subset

The first vertical slice does **not** need all 151 species active. P8 should prove that the production pipeline can faithfully realize a representative subset without special-case architecture.

### P9 — realize all 151 species in authored content

P9 completes breadth. By P9 exit, every #001-#151 species must have at least one meaningful gameplay presence consistent with its P4 dossier: direct encounter, conditional event, ecological trace, bestiary discovery, cultural relationship, quest/rumor chain, environmental consequence, or similarly substantive presence.

This requirement does not imply equal spawn rates, universal catchability, or a `catch all 151` objective. Species rarity, ecology, danger, legendary/mythical status, and bond rules remain authoritative.

Post-Generation-I additions are outside the mandatory baseline unless explicitly added by a later owner decision.

## Phase dependency rules

- P0 gates all later autonomous work.
- P1 informs P2-P7 wherever external data, Pokémon canon, resource candidates, APIs, provenance, or licenses matter.
- P2 must define the setting constraints that P3 occupations, P4 Pokémon relationships, P4 species dossiers, and P6 art/presentation needs depend on.
- P3 and P4 provide state/rule inputs to P5.
- P4 must complete the shared Pokémon contract before scaling species dossiers, then close only after the #001-#151 dossier audit passes.
- P5 defines the authoritative gameplay/content execution shape and presentation needs that P6 must account for.
- P6 owns the production resource/asset contract and mobile resource budget; it does **not** choose the application framework.
- P7 owns framework/runtime/storage/resource-integration/deployment choices while preserving P6 constraints.
- P8 proves the complete loop with a curated representative species subset before P9 scales content and resources.
- P9 owns the final #001-#151 authored gameplay-presence audit.
- P10 packages a proven game rather than becoming a second implementation track.

## Human Design Gate policy

A later phase may be blocked by a design decision. That is not permission to skip to the next phase.

When blocked:

1. present the smallest decision needed,
2. provide 2-4 options and one recommendation,
3. explain downstream impact briefly,
4. record the owner's decision in `docs/DECISIONS.md`,
5. resume the same active phase.

P6 must use the same rule. Researchable questions such as format support, provenance, licensing notices, memory cost, and source availability are agent research. Material presentation choices such as overall art direction or illustration density become Human Design Gates only when multiple valid directions remain after P2-P5.

## Roadmap mutation

Roadmap mutations require explicit owner intent. When changed:

- update this file,
- update `PROJECT_STATUS.md`,
- update affected issues/contracts,
- record a decision entry if the change is product/design-significant.
