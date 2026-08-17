# P7 Batch 06 Audit — PWA/offline, browser save, and deployment evidence

Date: **2026-08-17**  
Issue: **#7**  
PR: **#105**  
Architecture contract: **`p7-architecture-v1`**  
Verdict: **PASS**

## Scope

Batch 06 closes the remaining browser/deployment proof required by `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`. It does not begin P8 gameplay/content work and does not add a backend or runtime dependency.

## Acceptance results

| Required proof | Result | Evidence |
|---|---|---|
| online load + service-worker installation | PASS | production `sw.js` reaches `activated` in phone Chromium and WebKit |
| reload after required shell is cached while origin is unavailable | PASS | the Vite preview process is actually stopped, Node confirms the origin is unreachable, then the controlled page reloads successfully from the installed worker in both browsers |
| new run -> save -> reload through browser storage | PASS | real IndexedDB `SaveStore` round trip in both browsers |
| pending event resumes without authoritative reroll/reselection | PASS | `awaiting_reaction`, two completed RNG draw records, u64 values beyond JS safe integer, and full wire equality survive reload |
| backup export/import round trip | PASS | canonical UTF-8 JSON export/import preserves the exact wire envelope; measured fixture backup is 2,428 B |
| update/reload does not force replacement during pending transition | PASS | a byte-changed worker enters `waiting`; the previous active worker remains controller and the pending IndexedDB envelope is unchanged before/after reload |
| Vercel-compatible static output, no backend/serverless | PASS | `vercel.json` uses Vite; static validator reports `serverless=0 / backend=0` |
| phone-sized Chromium + WebKit | PASS | both acceptance projects use `390x844` viewport |

## Save and backup boundary

`src/saves/saveStore.ts` now exposes canonical backup export over the existing validated runtime/wire boundary:

```text
runtime authoritative u64/u63 = bigint
wire authoritative u64/u63    = validated decimal string
backup encoding                = canonical UTF-8 JSON + trailing newline
import write count             = exactly one replacement after full validation
invalid import                 = zero replacement writes
```

Browser acceptance proves these representative values survive IndexedDB, reload, export and import without conversion through JavaScript `number`:

```text
transition_seq_u64        = 18446744073709551614
origin_transition_seq_u64 = 9007199254740993
pending phase             = awaiting_reaction
completed RNG draw count  = 2
backup bytes              = 2428
```

## PWA/update boundary

Production registration is isolated in `src/platform/serviceWorker.ts` and runs only for production builds after page load.

Frozen safety behavior remains:

```text
service-worker scope       = /
updateViaCache             = none
application SKIP_WAITING   = absent
forced clientsClaim        = absent
pending authoritative save = browser IndexedDB, not service-worker state
```

The offline proof deliberately does **not** depend on browser-network emulation. The acceptance test owns the Vite preview process, verifies it is reachable for initial installation, terminates it and confirms the origin is unreachable, then reloads the already-controlled page. Only after the cached-shell reload succeeds is the preview process restarted for the update test. This gives the same fail-closed origin-outage condition to Chromium and WebKit.

For update safety, the test then mutates the built `sw.js` bytes, calls `registration.update()`, waits for the new worker to enter `waiting`, verifies the old active worker remains the page controller, reloads, and verifies both the waiting worker and the pending authoritative save remain intact.

## Static deployment boundary

`vercel.json` declares the Vite static target. `tools/validate-static-deployment.mjs` rejects known backend/serverless roots and server-executable output, then requires the production shell/manifest/service worker in `dist/`.

Validated production output:

```text
Vite                         = 8.0.16
Workbox precache             = 4 files / 13,968 B
production dist              = 8 files / 181,336 B
backend                      = none
serverless                   = 0
pokemon_media                = 0
```

No runtime dependency was added in Batch 06.

## Final PR-head validation evidence before audit commit

Workflow: **P7 Batch 06 Validation**  
Run: **31998678801**  
Validated head: **`e0c81dfa7f25198aece7fc7766b5bf4b507e38a5`**

```text
Ubuntu                       = 24.04.4
Node                         = 24.19.0
npm                          = 11.17.0
npm ci                       = 366 packages / 0 vulnerabilities
strict TypeScript            = PASS
Vitest                       = 11 files / 40 tests PASS
production build             = PASS
static deployment validation = PASS
Chromium                     = 151.0.7922.34 / Playwright v1234
WebKit                       = 26.5 / Playwright v2336
resource browser proofs      = 2/2 PASS
save browser proofs          = 2/2 PASS
PWA browser proofs           = 2/2 PASS
```

PWA proof records:

```text
chromium = firstInstall activated / originOutageReload PASS / waitingUpdate true / pendingSavePreserved true
webkit   = firstInstall activated / originOutageReload PASS / waitingUpdate true / pendingSavePreserved true
```

The existing Batch 05 decoded-resource measurements also re-ran identically in both browsers, so Batch 06 did not regress the frozen P6 cache/resource boundary.

## Batch 06 verdict

**PASS.** All eight frozen Batch 06 acceptance requirements are executable and green on phone-sized Chromium and WebKit. The static/PWA/save/update boundaries remain backend-free and preserve the P5/P6 correctness constraints.

This satisfies the final implementation-skeleton batch required before the P7 exit audit.
