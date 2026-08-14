# Roadmap

This roadmap defines the default core progression lane. The owner may explicitly reorder or replace phases, but agents must not do so opportunistically.

## Fixed phase order

| Phase | Issue | Purpose | Exit condition |
|---|---:|---|---|
| P0 | #1 | Project governance and autonomous continuation | A fresh agent can recover state, select next work, respect Human Design Gates, and leave a deterministic handoff. |
| P1 | #2 | Reference, API, data-source, and IP research | Current primary-source registry with provenance, risks, and ADOPT/ADAPT/REJECT/DEFER decisions. |
| P2 | #3 | World bible | Minimum durable setting contract is owner-approved; unresolved canon questions are explicit. |
| P3 | #4 | Core TRPG rules | Character/check/injury/progression contracts are deterministic and sufficiently frozen for downstream systems. |
| P4 | #5 | Pokémon adaptation | Source-data boundary, ecology, encounter, threat, bond, and companionship rules are stable. |
| P5 | #6 | Narrative event engine | Data-driven event/condition/choice/outcome/seeded-run contract is implementation-ready. |
| P6 | #7 | Technical architecture | Current, proven implementation stack and save/data/test/deployment architecture are frozen. |
| P7 | #8 | First playable vertical slice | One coherent mobile-sized run works end-to-end using production-intended paths. |
| P8 | #9 | Content expansion | Replayable regional/content breadth exists without one-off rule forks. |
| P9 | #10 | Mobile/release | PWA/distribution path is reproducible; optional APK exists only if justified. |

## Why specification comes first

This project is content- and rules-heavy. A premature application skeleton can encode assumptions about stats, events, Pokémon ownership, data formats, saves, or UI flow before those choices have been made.

Therefore P1–P5 are allowed to produce mostly research, decisions, schemas, examples, and testable contracts. P6 is the point at which the implementation architecture is intentionally frozen.

Small executable prototypes are permitted earlier only when they answer a bounded technical uncertainty and are clearly disposable evidence rather than production architecture.

## Phase dependency rules

- P0 gates all later autonomous work.
- P1 informs P2–P6 wherever external data, Pokémon canon, assets, APIs, or licenses matter.
- P2 must define the setting constraints that P3 occupations and P4 Pokémon relationships depend on.
- P3 and P4 provide state/rule inputs to P5.
- P5 defines the authoritative gameplay/content execution shape that P6 must support.
- P6 owns framework/runtime/storage/deployment choices.
- P7 proves the complete loop before P8 scales content.
- P9 packages a proven game rather than becoming a second implementation track.

## Human Design Gate policy

A later phase may be blocked by a design decision. That is not permission to skip to the next phase.

When blocked:

1. present the smallest decision needed,
2. provide 2–4 options and one recommendation,
3. explain downstream impact briefly,
4. record the owner's decision in `docs/DECISIONS.md`,
5. resume the same active phase.

## Roadmap mutation

Roadmap mutations require explicit owner intent. When changed:

- update this file,
- update `PROJECT_STATUS.md`,
- update affected issues/contracts,
- record a decision entry if the change is product/design-significant.
