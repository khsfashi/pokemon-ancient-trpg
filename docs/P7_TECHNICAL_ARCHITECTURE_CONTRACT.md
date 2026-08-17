# P7 Technical Architecture Contract

Status: **ACTIVE CANDIDATE — P7 Batch 01**  
Date: **2026-08-17**  
Phase: **P7 — Technical architecture (#7)**  
Contract version: `p7-architecture-v1`  
Machine-readable mirror: `docs/P7_ARCHITECTURE_MANIFEST.json`

## 1. Purpose

This contract freezes the minimum production architecture required to implement the already-approved P2-P6 game, event and resource contracts without allowing framework choices to become gameplay authority.

The baseline is deliberately small:

```text
mobile browser / installed PWA
  -> Preact presentation shell
  -> pure TypeScript authoritative runtime
  -> generated normalized content/indexes
  -> IndexedDB versioned saves
  -> public-safe resource provider + bounded decoded caches
```

There is **no backend requirement** in the baseline. Static deployment is sufficient because authoritative play is local, deterministic and offline-capable.

## 2. Current primary-source evidence

Technical facts were rechecked on 2026-08-17 under `docs/REFERENCE_PROTOCOL.md`.

| Source | Evidence used | P7 decision |
|---|---|---|
| Node.js 24 release/archive — https://nodejs.org/en/download/archive/v24 | 24.x is an LTS line and remains supported; 26.x is Current before its later LTS transition | **ADOPT 24.x LTS** for build/test tooling |
| Vite 8.1 announcement — https://main.vite.dev/blog/announcing-vite8-1 | Vite 8 is the current unified Rolldown-based line; 8.1 released 2026-06-23 | **ADOPT Vite 8.x** |
| Vite guide — https://vite.dev/guide/ | maintained web build/dev pipeline and first-party Preact/TypeScript templates | **ADOPT** |
| Preact guide — https://preactjs.com/guide/v10/getting-started/ | Preact recommends Vite; component model without requiring a larger application framework | **ADOPT Preact 10.x** |
| Preact home — https://preactjs.com/ | small DOM abstraction, modern component API | **ADOPT** for presentation only |
| TypeScript compiler options — https://www.typescriptlang.org/docs/handbook/compiler-options.html | `strict` enables the strict type-checking family | **ADOPT strict TypeScript** |
| MDN IndexedDB — https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API | asynchronous transactional browser persistence suitable for structured data and offline use | **ADOPT** for authoritative local saves |
| MDN BigInt — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt | exact integers beyond `Number.MAX_SAFE_INTEGER`; native JSON stringify does not serialize BigInt | **ADAPT**: runtime `bigint`, wire decimal strings |
| MDN SubtleCrypto.digest — https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest | SHA-256 is widely available in secure contexts and returns deterministic digest bytes | **ADOPT** through a small hash-provider interface |
| MDN PWA installability — https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable | manifest + HTTPS install path; service workers provide offline behavior | **ADOPT** |
| MDN Service Worker API — https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API | request interception/cache lifecycle supports offline app shell | **ADOPT**, never as gameplay authority |
| Workbox — https://developer.chrome.com/docs/workbox/what-is-workbox | maintained service-worker caching abstractions | **ADOPT `workbox-build`** |
| Workbox precaching — https://developer.chrome.com/docs/workbox/precaching-with-workbox | build-generated revisioned precache avoids hand-maintained asset revision lists | **ADOPT `generateSW` baseline** |
| Vitest guide — https://vitest.dev/guide/ | Vite-native unit-test runner | **ADOPT** |
| Playwright install/docs — https://playwright.dev/docs/intro | Chromium/WebKit/Firefox browser automation and mobile emulation | **ADOPT** |
| Vercel Vite docs — https://vercel.com/docs/frameworks/frontend/vite | Vite static applications are directly deployable | **ADOPT** as first deployment target |
| Capacitor docs — https://capacitorjs.com/docs | web-first application can later be wrapped for Android/native access | **DEFER** to P10 unless installable PWA is insufficient |

No source above grants rights to Pokémon media. P6 provenance and redistribution classification remains authoritative.

## 3. Candidate comparison

### 3.1 Vanilla TypeScript + Vite

Advantages: minimum framework runtime and complete DOM control.

Rejected as the production baseline because the game already requires persistent event views, choice/check/reaction states, settings, save management, three companion slots, offline/update UI and later content-heavy presentation. Hand-managed DOM lifecycle would save a very small dependency while increasing custom presentation state code and regression surface.

### 3.2 React + Vite

Technically sufficient and well proven.

Rejected as the baseline because this project does not need React-specific ecosystem features, server rendering, a backend framework, or a large application state ecosystem. The authoritative game runtime must remain framework-independent anyway.

### 3.3 Preact + Vite — selected

Preact provides the small component/view layer needed by the phone UI while Vite provides the current production build path. Preact is intentionally limited to presentation and ephemeral UI state.

**Binding boundary:** importing Preact from `runtime/`, `domain/`, `content/`, `save/` migration logic or deterministic RNG code is an architecture violation.

## 4. Toolchain and dependency policy

Baseline:

```text
Node.js          24.x LTS
package manager  npm, committed package-lock.json
build/dev        Vite 8.x
language         TypeScript, strict=true
UI               Preact 10.x
state library    none
router library   none initially
unit tests       Vitest
browser/E2E      Playwright
PWA cache build  workbox-build
```

Exact package patch versions are locked by `package-lock.json` when the implementation skeleton is created. CI uses the same supported Node 24 line and `npm ci`.

Do not add Redux/Zustand/signals/router/UI-framework dependencies merely for convenience. Add a dependency only when a measured or clearly recurring requirement exceeds a small project-owned abstraction.

Recommended compiler safety floor:

```text
strict = true
noUncheckedIndexedAccess = true
noImplicitOverride = true
noFallthroughCasesInSwitch = true
useUnknownInCatchVariables = true
```

## 5. Source layout and ownership

The implementation skeleton must converge on this ownership shape:

```text
src/
  app/                 # Preact composition and navigation/view state
  runtime/             # authoritative transition coordinator
  domain/              # P2/P3/P4 typed state + command adapters
  events/              # P5 evaluator, pending instances, RNG integration
  content/             # generated-pack readers and indexes
  saves/               # wire schema, IndexedDB adapter, migrations, import/export
  resources/           # resource registry/providers/cache/decoder boundary
  platform/            # WebCrypto, clocks only for non-authoritative metadata, browser APIs
  ui/                  # Preact components and CSS
  generated/           # generated types/index metadata; never hand-authored truth
```

Rules:

- `ui/` and `app/` may read player-safe projections, not raw hidden state.
- authoritative mutations enter through runtime/domain commands only;
- event definitions do not contain executable arbitrary scripts;
- static content/resource contracts are loaded/indexed once, not reparsed per render;
- wall-clock, locale, focus state and animation state never affect authoritative event/RNG results.

## 6. Authoritative transition runtime

One `GameSession`-equivalent runtime owns the current authoritative run state. UI sends typed intents; it does not mutate state directly.

```text
UI intent
 -> runtime command validation
 -> authoritative transition
 -> typed domain effects
 -> P5 trigger evaluation / pending event handling
 -> atomic commit
 -> immutable/read-only player projection
 -> UI render
```

P5 invariants remain binding:

- eligibility only on committed transitions;
- no per-frame/per-render event scanning;
- trigger-indexed candidate lookup;
- O(1)-equivalent event count / last-resolved lookup;
- recent event ring remains bounded at maximum 64;
- no runtime reparse of static schemas/event definitions in render paths.

A small subscription interface is sufficient for UI updates. A general-purpose global state library is not part of the baseline.

## 7. Integer and RNG correctness boundary

P5 encodes `origin_transition_seq` and `draw_index` as unsigned 64-bit big-endian values and permits `total_weight` through unsigned 63-bit range. JavaScript `number` cannot exactly represent that entire range.

Therefore:

```text
runtime authoritative u64/u63 arithmetic -> bigint
save/content wire values that may exceed safe integer -> unsigned decimal strings
run_seed -> exactly 32 lowercase hex characters
SHA-256 -> Web Crypto SubtleCrypto behind HashProvider
```

Never cast an authoritative u64/u63 value to `number` unless validation first proves `<= Number.MAX_SAFE_INTEGER` and the target field is explicitly a bounded presentation/index value.

`JSON.stringify(bigint)` is not used as a hidden global convention. Wire conversion is explicit by field/schema so import validation is unambiguous and allocation remains bounded.

The TypeScript port of the frozen `p5-rng-v1` vectors is a P7 exit gate. Production WebCrypto and Node test WebCrypto must reproduce the existing P5 byte vectors exactly.

## 8. Save/storage architecture

### 8.1 IndexedDB ownership

IndexedDB is the authoritative browser persistence store. `localStorage` may later hold non-authoritative tiny preferences only; it may never become the run/save source of truth. Cache Storage/service-worker caches are never authoritative save storage.

Recommended stores:

```text
save_slots       key = slot_id
settings         key = setting_id, non-authoritative
local_resources  optional later, only when local enrichment import is implemented
```

### 8.2 Save envelope v1

A save envelope must include at least:

```text
save_schema_version = 1
architecture_contract_version = p7-architecture-v1
content_pack_id
content_pack_version
content_digest_sha256
p5_contract_version
run_seed_hex
transition_seq_u64            # decimal string on wire
created_at_iso                 # metadata only, never gameplay input
updated_at_iso                 # metadata only, never gameplay input
authoritative_state
pending_event_instance?
```

Any nested u64/u63-capable values use explicitly typed decimal-string fields in the wire schema and become `bigint` only after validation.

### 8.3 Transactions and resume safety

One authoritative transition that changes a save must persist one complete post-commit envelope transaction. Pending event state must be persisted at every P5-required wait point so reload cannot reroll/reselect.

Do not debounce authoritative commits in a way that can lose a resolved choice/check. Rendering and cosmetic preference writes may be batched independently.

### 8.4 Migration

Migration registry:

```text
v1 -> v2 -> v3 -> ...
```

Each step is deterministic, pure over validated input where practical, covered by fixtures, and writes only after the complete target envelope validates. Unknown future versions fail closed. Content-pack incompatibility also fails closed unless an explicit migration exists.

### 8.5 Backup/export/import

Export is versioned UTF-8 JSON using the same wire representation as persistence. Import performs:

1. parse;
2. schema/version validation;
3. integer/range validation;
4. content-pack compatibility check;
5. migration if explicitly supported;
6. full target validation;
7. one atomic write to a selected/new slot.

Malformed imports never partially mutate an existing save.

## 9. Generated content/data pipeline

Runtime gameplay does not call PokéAPI, Pokémon Showdown or another remote Pokémon API.

```text
pinned external/source inputs
 -> existing Python provenance/contract validators
 -> normalization/import step
 -> project-owned generated runtime pack
 -> SHA-256 digest + compact indexes
 -> Vite production artifact
```

Existing Python P5/P6 validation tooling is retained rather than rewritten solely to make the repository single-language.

Generated runtime pack requirements:

- stable content-pack id/version/digest;
- stable species/event/resource IDs;
- trigger -> event candidate index;
- species/resource lookup indexes;
- no runtime schema inference from authoring documents;
- deterministic stable ordering before digesting;
- no uncleared Pokémon source media copied into public artifacts.

P9-scale content may later be split into immutable hashed chunks. The core index may point to chunks, but routine gameplay must not scan every chunk to answer a local lookup.

## 10. Resource loading architecture

P6 remains binding.

At startup, load a compact generated `resource_id -> descriptor` index once. Resource resolution is O(1)-equivalent.

One `ResourceLoader` owns:

```text
inflight[resource_id] -> Promise
compact_icon_cache    -> byte-bounded LRU
encounter_atlas_cache -> byte-bounded LRU + resident-count guard
```

Required behavior:

- concurrent requests for the same `resource_id` share one in-flight load;
- one successful decoded base instance is reused;
- eviction is by measured/conservative decoded byte cost, not only item count;
- masks/shading/conceal/reveal reference the cached base texture rather than materializing duplicate persistent source textures;
- optional media failure returns deterministic text/placeholder presentation and never changes gameplay.

Frozen caps:

```text
compact decoded cache             <= 393,216 B
one encounter atlas decoded       <= 2,097,152 B
resident encounter atlases        <= 2
encounter atlas decoded cache     <= 4,194,304 B
combined optional Pokemon decoded <= 4,587,520 B
P6 required initial resources     <= 3,145,728 B
Pokemon media initial payload     == 0 B
```

Runtime default resize, atlas repack and per-render atlas JSON parsing remain forbidden. P8 must remeasure actual browser/GPU behavior before these conservative estimates are treated as observed runtime memory.

## 11. Public-safe resources and optional enrichment

The public PWA contains only resources whose P6 distribution mode allows that artifact plus project-owned/generated resources.

Pokémon media currently remains `metadata_only / not_cleared`; therefore:

- it is not committed as a public runtime bundle;
- it is not in the service-worker precache;
- it is not required to begin or complete a run;
- a later local enrichment provider may accept user-local resources without changing save/gameplay semantics;
- public-safe text/mark fallback is always valid.

The service worker must never turn a metadata-only source URL into an implicit redistribution/fetch policy.

## 12. PWA and offline contract

Required PWA baseline:

- valid web app manifest;
- HTTPS production deployment;
- service worker generated from build outputs;
- offline app shell + required core content after first successful load;
- versioned/fingerprinted cached build assets;
- no Pokémon media precache;
- no forced app replacement in the middle of an authoritative transition/pending interaction.

Workbox `generateSW` is the baseline because requirements are currently simple. If later custom service-worker behavior is genuinely required, move to `injectManifest`; do not add custom SW code preemptively.

Service worker code performs networking/cache duties only. It does not own run state, RNG, event evaluation or save migrations.

## 13. Deployment and Android

Primary deployment is static Vercel hosting of Vite `dist/`. No serverless functions, database, auth service or API are introduced by default.

The application must also remain host-agnostic static output; Vercel is deployment convenience, not a runtime dependency.

Android packaging is deferred. If P10 proves installable PWA insufficient, Capacitor is the preferred first wrapper candidate because it can host the same web build. A native fork or second gameplay runtime is not allowed without new evidence and an explicit architecture revision.

## 14. Test architecture and CI gates

### Existing gates retained

- all P5 Python contract/RNG validators;
- all P6 static/full resource validation appropriate to the workflow.

### TypeScript unit/integration gates

Vitest must cover at minimum:

- frozen P5 SHA-256/RNG vectors;
- u64 decimal-string encode/decode and range rejection;
- trigger-index lookup behavior;
- save envelope validation;
- each save migration step;
- pending-event reload at choice/roll/reaction boundaries;
- resource request coalescing;
- byte-budget LRU eviction and two-atlas resident guard;
- optional-media fallback not changing authoritative state.

### Browser gates

Playwright must exercise phone-sized Chromium and WebKit projects for:

- new run -> save -> reload exact state;
- pending event reload without reroll;
- offline reload after initial cache population;
- backup export/import round trip;
- service-worker update does not corrupt active save;
- compact resource loader remains within contract under representative fixtures.

Firefox may be added as an additional compatibility lane, but Chromium + WebKit are the minimum mobile-risk pair.

### Build gates

```text
npm ci
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

The exact scripts land with the implementation skeleton. P7 does not invent a hard total JS bundle limit before representative code exists; CI should record compressed/uncompressed application sizes so P8 can set an evidence-backed cap if needed.

## 15. Performance and allocation rules

Binding rules:

- no gameplay work on animation frames unless animation itself requires it;
- no full event/resource/species scans on render;
- generated or startup-built maps/indexes are reused;
- no repeated JSON/schema parse in hot render paths;
- no duplicate decoded media instance per `resource_id`;
- avoid copying authoritative state merely to feed UI; expose stable read-only projections;
- use bounded queues/rings/caches;
- content and save hashing occurs on discrete build/save/transition operations, never per frame;
- CSS/Preact animation is presentation-only.

## 16. Explicit non-goals

P7 baseline does not introduce:

- backend/database server;
- multiplayer/cloud sync/account auth;
- SSR/server components;
- remote runtime Pokémon API dependency;
- Redux/Zustand or another app-wide state package;
- mandatory Pokémon images/audio;
- native Android gameplay fork;
- continuous ecology simulation;
- per-frame survival/event polling.

These require a concrete later product need and architecture revision.

## 17. Versioning/change rule

`p7-architecture-v1` may be changed only with evidence when a selected platform/tool cannot meet a frozen P2-P6 invariant or a later approved product requirement genuinely needs a new capability.

Package patch upgrades inside the frozen major/tool family do not change the architecture contract if lockfile tests remain green. Changing authoritative storage semantics, integer representation, runtime ownership, backend requirement, resource cache policy, or PWA/public-resource boundary requires an explicit contract revision.
