# P8.2 Batch 04 Exit Audit — Narrative Motion + Scene Transitions

Date: **2026-08-17**  
Issue: **#118**  
PR: **#120**

## Scope accepted

P8.2 Batch 04 establishes presentation motion before profile, illustration and equipment expansion.

Implemented surfaces:

- reusable progressive narrative reveal;
- tap while revealing => complete the active authored beat immediately;
- tap after a completed beat => advance to the next explicitly authored beat;
- choices stay unavailable while narrative reveal is incomplete, so a text-skip tap cannot also commit a choice;
- synchronous duplicate-action guard prevents rapid/double input from committing the same authoritative choice twice before a render catches up;
- ordinary state presentation uses a short crossfade;
- locality-changing commits are classified as travel and use a stronger fade-out/fade-in treatment;
- `prefers-reduced-motion: reduce` renders text/state immediately without animation delay;
- animation/presentation remains outside gameplay authority.

## Authority boundary

`P8BrowserSession` remains the sole gameplay/save owner.

The application now keeps two snapshots for different responsibilities:

- `snapshot` = latest authoritative session result used by gameplay control flow;
- `presentedSnapshot` = the already-committed result currently being shown by the presentation layer.

A player action executes `P8BrowserSession` first. The authoritative state and save commit therefore happen independently of animation completion. Presentation timers may only delay when the committed snapshot replaces the old visual snapshot; they never select an event, evaluate eligibility, roll RNG, resolve a choice, mutate world state or write a save.

Travel classification is derived from the authoritative locality before/after the already-requested action. It changes animation treatment only.

## Input safety

The previous render-state-only `busy` guard was insufficient against two DOM click events delivered in the same turn before Preact rerendered. Batch 04 adds a synchronous `busyRef` gate at the action dispatcher boundary.

Browser proof fires two native `.click()` calls synchronously against the same enabled choice and verifies that the stored transition advances exactly once.

Narrative clicks call only the reveal cursor and stop propagation. Choices remain disabled until the narrative gate reports ready.

## Reveal performance

The reveal implementation avoids a per-character DOM/component tree.

- one narrative text surface is updated;
- text is segmented once per localized string and reused from a bounded cache;
- the cache is capped at **128** entries and evicts the oldest entry;
- current authored content remains one beat unless the author explicitly inserts a blank-line beat boundary (`\n\n`);
- each beat targets at most roughly **20 reveal ticks**, rather than one render per character;
- no gameplay/event scan runs on reveal ticks;
- compositor `will-change` hints exist only while a scene transition is active, not permanently.

This keeps the foundation compatible with later Batch 07 prose authoring without turning long Korean text into hundreds of DOM nodes or allocating a new segmentation on every frame.

## Reduced motion

`prefers-reduced-motion: reduce`:

- initializes narrative copy fully revealed;
- skips presentation waits;
- removes transition/keyframe animation;
- keeps choices and gameplay fully available;
- produces the same authoritative state as the animated path for the same input sequence.

## Automated evidence

Dedicated workflow: **P8.2 Batch 04 Validation**  
Functional run: **32021373307 — PASS**

Passed stages:

1. `npm ci` from committed lockfile;
2. strict TypeScript integration check;
3. complete deterministic Vitest suite, including narrative cursor/beat semantics;
4. static production PWA build and deployment validation;
5. Chromium + WebKit P8.2 motion browser proof:
   - tap-to-complete does not commit gameplay;
   - synchronous double input commits exactly once;
   - normal motion and reduced motion produce identical authoritative JSON for the tested route;
   - locality-changing travel selects the travel transition and preserves the expected authoritative event path;
6. inherited P8 Chromium phone full-route smoke;
7. inherited P8 Chromium + WebKit backup/save compatibility.

## Guardrails preserved

- event eligibility remains transition-driven;
- no animation timer triggers gameplay state;
- existing deterministic P5/P8 authority remains unchanged;
- IndexedDB/save schema is unchanged;
- no new backend/global-state/router owner is introduced;
- no per-character DOM reveal tree;
- no permanent compositor layer hint;
- reduced-motion is first-class rather than a CSS-only afterthought.

## Deferred intentionally

Batch 04 does **not** add:

- player portrait/profile HUD;
- scene illustration resources;
- the second Korean prose rewrite;
- equipment/combat-readiness model;
- farming/preparation loop.

Those remain P8.2 Batches 05–09 in #118.

## Exit

Batch 04 automated acceptance is complete. The next autonomous continuation item is:

> **P8.2 Batch 05 — player portrait + persistent profile / expedition HUD**

P9 remains blocked until #118 reaches the integrated Batch 10 owner-playtest gate or the owner explicitly changes direction.
