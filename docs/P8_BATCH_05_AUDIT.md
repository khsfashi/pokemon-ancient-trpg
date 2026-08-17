# P8 Batch 05 Audit — Production Browser Proof + Exit Evidence

Date: **2026-08-17**  
Issue: **#8 — First playable vertical slice**  
PR: **#110 — P8 Batch 05 — production browser exit proof**  
Integration contract: **`p8-vertical-slice-v1`**  
Validated functional head before audit/status-only commits: **`4aaaf55c979453314f3ce3999aa26f68c1ef1ed6`**

## Result

**PASS for the Batch 05 implementation boundary.**

Batch 05 adds no new gameplay authority, event executor, resource owner, backend, router or global state layer. It proves the already-integrated P8 slice through the production-built static PWA path in both required phone browser engines, reuses the accepted P7 save/resource/PWA boundaries, and records the final mobile usability review.

The functional head passed **P8 Batch 05 Validation run `32009086550`** end to end.

## Production browser matrix

Playwright uses a `390x844` phone viewport and the production `vite preview` output.

| Proof | Chromium | WebKit |
|---|---:|---:|
| P8 backup export/import compatibility | PASS | PASS |
| full deterministic `0/3` route | PASS | PASS |
| pending-event reload before input | PASS | PASS |
| committed checkpoint reload | PASS | PASS |
| completed-check reload before later input | PASS | PASS |
| optional Pokémon media absent path | PASS | PASS |
| physical-origin-down PWA pending-save resume | PASS | PASS |
| inherited P7 resource browser proof | PASS | PASS |
| inherited P7 save browser proof | PASS | PASS |
| inherited P7 PWA origin-outage/update proof | PASS | PASS |

Browser versions in the accepted workflow:

```text
Chromium = 151.0.7922.34
WebKit   = 26.5
viewport = 390x844
```

## Full-run authoritative proof

`e2e/p8-exit.spec.ts` completes the real Preact flow through production preview in each browser:

```text
new run
→ formative memories 1/2/3
→ background reveal
→ specialization / final sheet
→ first pending event
→ reload + exact pending resume
→ commit first event
→ reload + exact committed resume
→ remaining settlement / relationship / travel / ecology / mixed events
→ ending
→ final IndexedDB authority assertion
```

Both engines finish with the same required authoritative ending state:

```text
transition_seq       = 7
current_locality     = reedbank-settlement
provisions           = 2
companions            = 0/3
direct_interactions  = 3
zero_companion_flag  = true
pending_event        = none
```

Accepted workflow console evidence:

```text
P8_BATCH05_FULL_RUN {"browserName":"chromium","transitionSeq":"7","locality":"reedbank-settlement","provisions":2,"companions":0,"directInteractions":3}
P8_BATCH05_FULL_RUN {"browserName":"webkit","transitionSeq":"7","locality":"reedbank-settlement","provisions":2,"companions":0,"directInteractions":3}
```

The complete route remains valid without recruiting a companion. The final authority also preserves the three direct interactions with Weedle #013, Beedrill #015 and Rattata #019.

## Exact reload boundaries

The production browser proof exercises three separate continuity windows.

### Pending event

The first event is prepared and persisted before player input. Its raw P8 save JSON is captured, the page reloads, `Continue saved run` resumes the same pending event, and the raw saved authority/pending representation is unchanged.

### Committed checkpoint

After the first consequence is committed, the raw save is captured again. Reload resumes a committed checkpoint and does **not** select the next event until the player explicitly presses `Continue journey`.

### Completed check before later input

The route reaches `Weedle at the Crossing`, chooses the checked branch, commits the check result, captures the save, reloads, and verifies the exact same committed transition `5` before any later input.

Accepted evidence:

```text
P8_BATCH05_CHECK_RELOAD {"browserName":"chromium","checkBand":"Check Result: Full","transitionSeq":"5"}
P8_BATCH05_CHECK_RELOAD {"browserName":"webkit","checkBand":"Check Result: Costly Partial","transitionSeq":"5"}
```

The acceptance claim is exact persistence/resume of each browser's committed check state, not that unrelated browser runs must draw the same check result when they start from independently generated run seeds.

## P8 save backup compatibility

`e2e/p8-save-compat.spec.ts` creates an authoritative P8 run through `P8BrowserSession`, prepares the first pending event, then round-trips the state through the existing P7 `exportSaveJson` / `importSaveJson` boundary.

The imported session resumes successfully with the exact canonical backup text and the expected pending event/locality/zero-companion state.

```text
P8_BATCH05_BACKUP {"browserName":"chromium","transitionSeq":"0","pendingEventId":"slice.opening.market_call","backupBytes":2542}
P8_BATCH05_BACKUP {"browserName":"webkit","transitionSeq":"0","pendingEventId":"slice.opening.market_call","backupBytes":2542}
```

No P8-specific backup format was introduced.

## Physical-origin-down PWA proof with an in-progress P8 save

`e2e/p8-pwa-pending.spec.ts` deliberately avoids treating browser network emulation as the exit proof.

For each engine it:

1. starts the built production preview process;
2. waits for the service worker to become active and control the page;
3. creates a P8 run and persists the first pending event;
4. captures the raw pending save JSON;
5. **terminates the preview origin process**;
6. independently confirms the HTTP origin is unreachable;
7. reloads the controlled page from the service-worker shell;
8. resumes the P8 run from IndexedDB;
9. asserts the pending save is unchanged.

Accepted evidence:

```text
P8_BATCH05_PWA_PENDING {"browserName":"chromium","originDown":true,"pendingPreserved":true}
P8_BATCH05_PWA_PENDING {"browserName":"webkit","originDown":true,"pendingPreserved":true}
```

This reuses the P7 architecture: the service worker owns offline presentation assets, while IndexedDB remains the authoritative run storage.

## Optional Pokémon media remains non-authoritative

The current public P8 proving pack intentionally ships with no cleared Pokémon media payload. The production build reports `pokemon_media=0`.

The complete route passes through the Weedle and Beedrill presentation states in both browsers. At the Weedle scene the test explicitly observes the text fallback:

```text
No redistributable media is configured for this slice. Text presentation remains authoritative.
```

Progress remains enabled and final gameplay authority is unaffected. No synthetic resource URL or P8-owned cache is introduced.

## Manual mobile usability review

The Batch 05 plan requires a manual usability review. This audit performs that review against the actual Preact presentation source and CSS, with the accepted `390x844` Chromium/WebKit runs used as execution evidence. This is **not** a claim of separate physical-device touch-latency testing.

| Review item | Evidence reviewed | Verdict |
|---|---|---|
| formative choices understandable without hidden mappings | `App.tsx` explicitly says “Choose the answer that fits the person, not the stats. The mapping stays hidden.”; rendered buttons contain only fiction-first answer text | PASS |
| reveal/specialization readable and not excessively dense | reveal is one Origin + one Learned Practice; specialization options are label + one-sentence description; final sheet is separated into compact grids/tags | PASS |
| event choices have comfortable touch targets | `.primary`, `.secondary`, `.choice` have `min-height: 50px`, full width and `touch-action: manipulation`; browser gate also measures every visible button at `>=44x44` | PASS |
| check/consequence presentation understandable | committed result is separated by `Committed consequence`, transition identity, optional `Check result:` band, outcome copy and one explicit Continue action | PASS |
| Pokémon presentation does not block progress without media | deterministic explanatory fallback is rendered beside the direct interaction; both full browser routes finish with `pokemon_media=0` | PASS |
| ending communicates accumulated stateful consequence | ending shows locality/status, companions, direct interactions, provisions, committed-event count, observed Pokémon, remembered relationships and zero-companion completion | PASS |

The browser gate additionally checks at representative initial-event, media-fallback and ending states that:

```text
document scroll width <= phone viewport width
all visible button width  >= 44 px
all visible button height >= 44 px
```

The accepted full runs therefore backstop the source-level review with real browser layout/execution rather than relying only on CSS intent.

## Production build / inherited regression evidence

Accepted Batch 05 workflow:

```text
P8 Batch 05 Validation run = 32009086550
Node                       = 24.19.0
npm                        = 11.17.0
Vitest                     = 15 files / 58 tests PASS
Vite                       = 8.0.16
Workbox precache           = 4 files / 206,132 B
production dist            = 8 files / 373,500 B
backend                    = 0
serverless                 = 0
pokemon_media              = 0
P8 backup tests            = 2/2 PASS
P8 full/check tests        = 4/4 PASS
P8 origin-down PWA tests   = 2/2 PASS
P7 resource regression     = 2/2 PASS
P7 save regression         = 2/2 PASS
P7 PWA regression          = 2/2 PASS
```

Inherited P7 resource evidence remains inside the frozen decoded-cache limits: compact cache `15,232 B`, encounter cache `3,211,264 B`, exactly two resident encounter images after eviction, request coalescing preserved, and deterministic fallback preserved in both engines.

Inherited P7 save evidence still round-trips values beyond JavaScript safe-integer range with two completed RNG draws and canonical backup output. Inherited P7 PWA evidence still proves real-origin-outage reload plus waiting-update safety in both engines.

## Batch 05 acceptance matrix

| Requirement | Evidence | Result |
|---|---|---|
| Chromium phone full `0/3` run | production preview full route | PASS |
| WebKit phone full `0/3` run | production preview full route | PASS |
| expected authoritative ending | transition 7 / Reedbank / provisions 2 / companions 0 / interactions 3 | PASS |
| reload after committed transition | exact raw save comparison + explicit checkpoint continue | PASS |
| reload while choice pending | exact raw pending save comparison | PASS |
| reload after completed check | transition-5 exact committed save comparison | PASS |
| P7 save boundary compatible with P8 | export/import canonical backup in both browsers | PASS |
| optional Pokémon media absent path playable | full production route with `pokemon_media=0` | PASS |
| PWA/offline shell compatible with P8 save | physical origin stopped; exact pending resume both engines | PASS |
| no backend dependency | static build validation `backend=0`, `serverless=0` | PASS |
| production static build | build/dist/static deployment validators | PASS |
| manual mobile usability review | source-level presentation review + browser layout backstop | PASS |
| P6 resource boundaries preserved | inherited P7 resource proof rerun | PASS |
| P7 architecture preserved | inherited save/PWA/resource proofs rerun; no runtime architecture fork | PASS |

## Scope preserved for P9

Batch 05 does not convert the three-species proving set into a false all-151 content claim. P9 still owns substantive world breadth, persistent major faction realization and a living authored direct-interaction path for every National Pokédex `#001-#151` species.
