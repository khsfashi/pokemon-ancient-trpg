# P8 Vertical Slice Implementation Plan

Status: **ACTIVE — Batch 01 sequencing contract**  
Date: **2026-08-17**  
Issue: **#8**

## Goal

Implement one coherent production-path mobile run without hiding missing systems behind bespoke demo code.

The batch order is intentionally authority-first:

```text
Batch 01 contract/guards
→ Batch 02 authoritative gameplay runtime
→ Batch 03 authored slice content + deterministic replay
→ Batch 04 mobile presentation + save/resource integration
→ Batch 05 browser full-run proof + P8 exit audit
```

Do not move UI or content breadth ahead of a missing authoritative runtime contract.

## Batch 01 — vertical-slice integration contract and guards

Deliverables:

- `docs/P8_VERTICAL_SLICE_CONTRACT.md`;
- `docs/P8_VERTICAL_SLICE_MANIFEST.json`;
- this implementation plan;
- `tools/validate_p8_vertical_slice.py`;
- P8 contract-validation workflow;
- `docs/P8_BATCH_01_AUDIT.md`;
- operational `PROJECT_STATUS.md` handoff.

Exit gate:

- the issue #8 loop is mapped to explicit production-path obligations;
- no Human Design Gate is crossed;
- P5/P6/P7 constraints are machine-checked as inherited, not rewritten;
- Batch 02 has a bounded implementation target.

## Batch 02 — authoritative gameplay runtime foundation

Purpose: create the first real gameplay authority on top of the P7 technical skeleton before authoring presentation-heavy content.

Required work:

1. Define normalized pure-TypeScript authoritative run/domain types needed by the slice.
2. Implement a deterministic character-creation resolver for stable formative answer IDs/tags → Origin + Learned Practice.
3. Implement legal P3 starting specialization validation:
   - seven attributes begin at `1`;
   - exactly four increases;
   - starting cap `3`;
   - Practice competence `+1`;
   - one distinct personal competence `+1`.
4. Implement the P5 runtime subset required for the slice:
   - trigger-index candidate lookup;
   - pure eligibility evaluation;
   - weighted deterministic event selection using the existing P5 RNG primitives;
   - persisted pending-event creation;
   - direct-choice resolution;
   - P3-bound static check resolution;
   - outcome/effect-plan prevalidation;
   - atomic typed domain-command/P5 effect commit;
   - count/cooldown/recent-history/chain indexes;
   - ordered post-commit triggers.
5. Implement typed semantic adapter boundaries for only the P2/P3/P4 operations actually needed by the first slice. Do not expose raw state setters as an authoring escape hatch.
6. Add unit tests that prove UI independence, deterministic selection, no RNG during eligibility, exact transition sequencing, and failed-command atomicity.
7. Keep `src/app` presentation-only; no story-specific branching in components.

Performance requirements:

- event lookup starts from a generated/cached trigger index;
- semantic registries/maps are initialized once and reused;
- no whole-catalog scan per render/frame;
- avoid repeated JSON parse/normalization in gameplay hot paths;
- authoritative integer boundaries continue to use exact P7/P5 representations.

Batch 02 exit evidence:

- strict TypeScript passes;
- pure runtime tests pass;
- existing P5/P6/P7 validation remains green;
- a headless fixture can create a character, emit a trigger, resolve at least one direct event and one checked event, and serialize the resulting authoritative state without any Preact dependency.

## Batch 03 — authored vertical-slice content pack and replay fixture

Purpose: prove the runtime with coherent mixed-world content rather than isolated technical fixtures.

Required work:

1. Author the first local slice content as production-shaped normalized source records, clearly separating disposable/local authored details from durable world canon.
2. Curate:
   - at least four approved Origins;
   - at least four approved Learned Practices;
   - three formative prompts with fiction-first answers and deterministic hidden tags;
   - `3..8` Pokémon species selected from existing P4-approved records.
3. Author one coherent event chain covering:
   - ordinary human/social pressure with no Pokémon as immediate cause;
   - travel/survival;
   - a persistent relationship or faction-lane thread;
   - Pokémon ecology/direct interaction;
   - mixed human motive + Pokémon ecology;
   - ending inputs.
4. Preserve the valid zero-companion route from creation through ending.
5. Use only the shared P5 event records and typed adapters; no event-specific executable scripts.
6. Generate the runtime content pack, trigger indexes, stable digest, and any presentation/resource references from source records rather than hand-editing generated artifacts.
7. Add deterministic replay fixtures for at least:
   - one complete `0/3` path;
   - one alternate choice/check branch;
   - repeated execution from identical starting state/action sequence producing byte/semantic-equivalent authoritative results.
8. Audit that the authored slice does not imply a final P9 faction identity or pseudo-canonical ancient Kanto history.

Batch 03 exit evidence:

- content/schema validation passes;
- replay fixtures pass;
- every required mixed-world pillar is represented in one coherent chain;
- exact authored species subset is traceable to P4 records;
- all content remains playable when optional Pokémon media is absent.

## Batch 04 — phone-sized Preact flow and production resource/save integration

Purpose: make the authoritative slice playable without moving gameplay truth into UI state.

Required screens/states:

1. formative prompt 1/2/3;
2. background reveal;
3. compact specialization and final sheet confirmation;
4. settlement/event scene;
5. choice/check result flow;
6. travel/local-context transition;
7. Pokémon direct-interaction presentation;
8. ending/run summary;
9. load/resume surface for an existing run.

Implementation rules:

- Preact renders derived views and dispatches typed intents only;
- authoritative state is not duplicated as an independently mutable component-store copy;
- pending events remain authoritative after refresh;
- save writes occur on explicit committed boundaries, not every render;
- resource lookups go through the P7 `ResourceLoader`/registry path;
- optional Pokémon media failure falls back without changing gameplay;
- no runtime image resize/repack or per-render atlas metadata parse;
- layout is touch-friendly at phone width without requiring dense desktop tables.

Batch 04 exit evidence:

- typecheck/unit/build pass;
- manual dev build can complete the full slice;
- reload resumes normal and pending states exactly;
- optional-media-off mode remains fully playable;
- resource-cache tests remain within P6/P7 caps.

## Batch 05 — production browser proof and P8 exit audit

Purpose: prove issue #8 end to end on the production-intended browser/PWA path.

Automated browser requirements:

- Chromium phone viewport full `0/3` run;
- WebKit phone viewport full `0/3` run;
- deterministic expected authoritative ending state;
- reload after committed transition;
- reload while a choice is pending;
- reload after a completed check before later input if the authored slice includes such a waiting window;
- export/import or existing P7 save boundary remains compatible with the P8 state;
- optional Pokémon media absent/failure path remains playable;
- PWA/offline shell behavior remains compatible with an in-progress P8 save;
- no backend dependency;
- production static build validation.

Manual mobile usability review:

- formative choices are understandable without exposing hidden mappings;
- reveal/specialization is readable and not excessively dense;
- event choices have comfortable touch targets;
- check/consequence presentation is understandable;
- Pokémon presentation does not block progress when media is unavailable;
- ending communicates enough accumulated consequence to prove the run was stateful.

Final P8 exit audit must map every acceptance criterion in issue #8 to concrete code/test/browser evidence and explicitly confirm:

```text
mixed_world_loop_proven == true
shared_event_engine_proven == true
deterministic_save_reload_proven == true
zero_companion_completion_proven == true
phone_chromium_webkit_proven == true
p6_resource_boundaries_preserved == true
p7_architecture_preserved == true
p9_151_breadth_not_prematurely_claimed == true
```

## Scope-control rules for all P8 batches

Do not:

- add a backend to simplify local state;
- add a global state library because gameplay state becomes larger;
- add a router before the baseline actually requires one;
- create special faction/Pokémon event executors;
- hard-code story truth into Preact components;
- use optional media availability as gameplay state;
- preload all 151 Pokémon resources;
- freeze a final major faction merely to give the slice a name;
- expand to many settlements/species/events before the first coherent run is deterministic and testable.

If a later P8 batch encounters a true owner-authored persistent canon choice, stop at the smallest Human Design Gate instead of embedding an accidental permanent answer in implementation.
