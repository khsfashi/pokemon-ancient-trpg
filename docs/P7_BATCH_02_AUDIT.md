# P7 Batch 02 Audit — Executable Web/PWA Skeleton

Date: **2026-08-17**  
Issue: **#7**  
PR: **#101**  
Architecture: `p7-architecture-v1`  
Candidate branch: `agent/p7-batch02-executable-skeleton`  
Verdict: **PASS CANDIDATE — requires final PR-head CI**

## Objective

Turn the Batch 01 architecture contract into the smallest executable application and test/build lane without pulling later P7 responsibilities forward.

## Locked executable toolchain

```text
Node CI line      = 24.x
npm lock          = committed package-lock.json / lockfileVersion 3
Vite              = 8.0.16
TypeScript        = 6.0.3
Preact            = 10.29.7
Vitest            = 4.1.10
Playwright        = 1.62.1
workbox-build     = 7.4.1
```

No router or global state dependency was added.

## Executable ownership boundaries

```text
src/app/
src/runtime/
src/domain/
src/events/
src/content/
src/saves/
src/resources/
src/platform/
src/ui/
src/generated/
tests/
e2e/
```

Preact owns presentation only. The deterministic helpers and resource registry remain framework-independent TypeScript.

## First deterministic fixtures

Batch 02 proves only the minimum reusable boundaries needed before Batch 03:

- canonical unsigned decimal parsing/formatting for exact u63/u64 values;
- values beyond `Number.MAX_SAFE_INTEGER` round-trip without precision loss;
- unsigned 63-bit weight maximum is accepted and maximum + 1 is rejected;
- non-canonical/signed decimal strings fail closed;
- immutable RNG cursor increments exact u64 `draw_index` and rejects overflow;
- non-production save probe serializes authoritative integer fields only as decimal strings;
- `resource_id` registry is constructed once as a `Map`, returns the original descriptor identity, and rejects duplicate IDs.

The RNG cursor is not the production `p5-rng-v1` generator. SHA-256 byte encoding and frozen P5 vectors remain Batch 03.

## PWA/static public-output proof

The production build sequence is:

```text
strict TypeScript typecheck
Vite static build
workbox-build generateSW
static dist validation
```

The Batch 02 dist validator requires `index.html`, `manifest.webmanifest`, and `sw.js`; rejects raster/audio binary media; rejects known runtime PokéAPI/PokéSprite/PokéRogue source origins; and fails if the complete static shell exceeds the inherited 3 MiB required-initial resource cap.

This is intentionally stronger than the minimum Pokémon-media rule for the empty skeleton: Batch 02 emits no binary media at all.

## Lockfile bootstrap evidence

Initial executable commit:

`0dbbd7b58a3375a2b55cc77cb63fa927275e02d2`

Node 24 PR validation run `31984482446` completed successfully through:

```text
package-lock generation == PASS
npm ci                  == PASS
strict typecheck        == PASS
Vitest fixtures         == PASS
Vite/Workbox build      == PASS
dist validation         == PASS
```

The matching branch-push lane committed the generated lockfile as:

`7d2fae3cae6e9979a89f6b563c15c89c61cbc29b`

The final workflow is then reduced to read-only validation: committed lockfile required, `npm ci` only, no CI-authored source mutation.

## Scope intentionally deferred

Batch 02 does not claim any of the following:

- Web Crypto `HashProvider` or exact `p5-rng-v1` byte/hash vectors;
- production `SaveEnvelopeV1`;
- IndexedDB persistence/migrations/import atomics;
- generated trigger/species/resource/semantic-adapter indexes;
- resource request coalescing or byte-bounded LRU caches;
- browser decoded-memory measurement;
- phone Chromium/WebKit offline E2E;
- Vercel deployment evidence.

These remain Batch 03–06 work in `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`.

## Acceptance gate

Batch 02 is accepted only if the final PR head has `P7 Batch 02 Validation == success` using the already committed `package-lock.json`, with no unresolved review thread and no Pokémon source media added to the repository/public output.
