# P8 Batch 04 Audit — Phone Flow + Save/Resource Integration

Date: **2026-08-17**  
Issue: **#8 — First playable vertical slice**  
PR: **#109 — P8 Batch 04 — phone flow and save/resource integration**  
Integration contract: **`p8-vertical-slice-v1`**  
Validated functional head before audit/status-only commits: **`55ba252e5da98a7f660bf4ae5357b9407a2abecb`**

## Result

**PASS for the Batch 04 implementation boundary.**

The P8 authored slice is now playable through a phone-sized Preact flow while gameplay authority remains framework-independent TypeScript. P7 IndexedDB save semantics and P7 ResourceLoader ownership are reused rather than duplicated in the UI.

Batch 05 still owns the final dual-browser production/PWA exit proof and manual mobile usability review. Batch 04 deliberately does not claim final P8 completion.

## Implemented player flow

The phone flow now covers every Batch 04 required presentation state:

1. three fiction-first formative prompts;
2. deterministic Origin / Learned Practice reveal;
3. compact starting-specialization selection;
4. final starting-sheet confirmation;
5. settlement/social event presentation;
6. choice and checked-result consequence presentation;
7. travel/locality transitions;
8. Pokémon direct-interaction presentation;
9. ending/run summary;
10. existing-run load/resume surface.

The seven authored events are not reimplemented in Preact. `src/app/App.tsx` renders the active presentation plus an immutable session snapshot and dispatches player choices into the shared P8/P5 runtime.

## Authority ownership

Gameplay truth remains outside Preact.

```text
Preact local state
  = view mode
  + formative draft answers before run creation
  + selected starting specialization before run creation
  + busy/error/result-ack presentation state

P8BrowserSession
  = current authoritative P8 state
  + transition sequence
  + authoritative pending event
  + run seed/save metadata

P8/P5 event runtime
  = event selection
  + pending preparation
  + checks/RNG evidence
  + atomic consequence commit
```

`src/platform/p8BrowserSession.ts` is the UI-facing integration boundary. It does not invent alternative event mechanics. Selection goes through `selectP8Event`, pending creation through `prepareP8PendingEvent`, and committed choices through `resolveP8EventChoice`.

No global state library or router was added. No independently mutable Preact gameplay-store copy exists.

## Explicit save boundaries

The single P8 vertical-slice save slot uses the existing P7 `IndexedDbSaveStore` and save envelope.

Writes happen only at explicit gameplay boundaries:

1. **new run committed** — character + initial world/survival state is saved;
2. **event prepared** — exact pending event identity, resolved choice view and precommit evidence are saved before input;
3. **choice resolved** — authority + incremented transition sequence are atomically saved and pending is removed.

A normal committed checkpoint resumes without selecting the next event merely because the app reloaded. The player must explicitly continue before the next trigger is evaluated.

A pending checkpoint resumes the exact saved `pending_event_instance`; it is not reselected.

`src/domain/p8AuthorityJson.ts` strictly reconstructs P8 authority from the existing JSON save boundary, including canonical direct-interaction identities and bigint transition provenance.

## Automated save/reload proof

`tests/p8-phone-session.test.ts` runs the complete authored `0/3` replay through the browser-session adapter using an in-memory P7-compatible `SaveStore`.

For **every** authored transition it proves both boundaries:

```text
prepare pending
→ persist pending
→ construct a new P8BrowserSession
→ resume exact pending instance / unchanged precommit authority
→ resolve choice
→ persist committed authority / clear pending
→ construct another P8BrowserSession
→ resume exact committed authority / transition sequence
```

The completed restore result proves:

```text
transition_seq     = 7
current_locality   = reedbank-settlement
provisions         = 2
companion_slots    = [null, null, null]
zero_companion     = true
direct_interaction = Weedle + Beedrill + Rattata
```

## Phone Chromium full-flow proof

Batch 04 additionally replaces the weaker “manual dev build can finish” confidence check with a repeatable Chromium phone smoke at the existing `390x844` Playwright viewport.

`e2e/p8-phone-flow.spec.ts` performs the real Preact UI path:

```text
new run
→ formative prompt 1/2/3
→ background reveal
→ specialization / final sheet
→ first event prepared
→ reload while pending
→ exact pending resume
→ first event committed
→ reload at committed checkpoint
→ explicit continue
→ complete remaining authored events
→ ending summary
→ re-open IndexedDB through P8BrowserSession
→ assert final authoritative state
```

Functional-head evidence:

```text
P8 Batch 04 Validation run 32007630319 = PASS
Chromium                              = 151.0.7922.34
phone viewport                        = 390x844
Playwright P8 phone smoke             = 1/1 PASS
transition_seq                        = 7
current_locality                      = reedbank-settlement
provisions                            = 2
companions                            = 0
Pokémon direct interactions           = 3
```

Console proof emitted by the browser test:

```text
P8_BATCH04_PHONE_SMOKE {"browserName":"chromium","transitionSeq":"7","locality":"reedbank-settlement","provisions":2,"companions":0,"directInteractions":3}
```

Batch 05 still owns the symmetric Chromium + WebKit full-run production/PWA proof; this Batch 04 smoke is intentionally Chromium-only.

## Optional Pokémon media / P6-P7 resource boundary

The current public P8 proving pack has no affirmatively cleared Pokémon media locations, so all curated species have `optionalResourceRef = null`.

The presentation layer therefore does **not** synthesize URLs, directly fetch media, preload all 151 species or copy a resource cache into Preact.

`src/resources/p8PokemonPresentation.ts` defines the only P8 media adapter:

```text
no authored resource ref
→ deterministic text-only `not_configured` presentation
→ zero ResourceLoader request

future authored resource ref
→ P7 createRuntimeResourceLoader / ResourceLoader
→ registry policy + cache owner
→ decoded BrowserImageResource OR deterministic optional fallback
→ no authority mutation
```

`tests/p8-pokemon-presentation.test.ts` proves every currently curated P8 species remains playable with media absent and that no loader lookup occurs for an absent ref.

Existing P7 resource guardrails remain the owner of cache caps, coalescing, two-resident-atlas policy and optional-resource fallback. Batch 04 does not add another cache or decoded-media owner.

## Presentation data boundary

Non-authoritative scene copy and labels live in `content/p8/vertical-slice.presentation.json`, not inside event-resolution code.

`tools/validate_p8_phone_presentation.py` cross-checks this presentation source against the generated P8 authority pack and fails if it drifts on:

- content pack identity/version;
- event coverage;
- authored trigger membership;
- exact choice IDs;
- exact outcome IDs;
- curated species IDs;
- starting-specialization Attribute legality/cap rules.

This allows the UI to render story copy without making presentation JSON an authority source for outcomes or state mutations.

## Performance / ownership notes

The integration keeps the frozen P6/P7 performance shape:

- one module-level browser session for the app lifetime;
- one module-level P7-backed Pokémon media loader/cache owner;
- event catalog remains cached and initialized once;
- event-scene lookup uses a prebuilt map rather than repeated content scans;
- no per-render atlas metadata parse;
- no runtime image resize or repack;
- no all-151 preload;
- no save write on render;
- no polling loop or background authority synchronization;
- phone controls use 50 px minimum touch height and a 480 px maximum content width.

The production build remains backend-free and contains no Pokémon media payload.

Functional-head build evidence:

```text
Node                    = 24.19.0
npm                     = 11.17.0
Vitest                   = 15 files / 58 tests PASS
Vite transformed modules = 36
Workbox precache          = 4 files / 206,132 B
production dist           = 8 files / 373,500 B
backend                   = 0
serverless                = 0
pokemon_media             = 0
```

## Batch 04 acceptance matrix

| Requirement | Evidence | Result |
|---|---|---|
| formative prompts 1/2/3 | Preact flow + Chromium smoke | PASS |
| background reveal | Preact flow + Chromium smoke | PASS |
| specialization / final sheet | Preact flow + Chromium smoke | PASS |
| settlement/event scene | authored presentation + shared runtime + smoke | PASS |
| choice/check result flow | pending choice view + consequence/check-band presentation | PASS |
| travel/local-context transition | shared authored commands + complete run | PASS |
| Pokémon direct interaction | Weedle/Beedrill/Rattata presentation + final authority | PASS |
| ending/run summary | complete `0/3` browser route | PASS |
| existing-run load/resume | pending + committed browser reload | PASS |
| Preact does not own gameplay truth | `P8BrowserSession` integration boundary | PASS |
| pending exact after refresh | unit full-route + browser pending reload | PASS |
| writes only at explicit boundaries | start / pending / committed session persistence | PASS |
| optional media through P7 path only | P8 media adapter + P7 loader | PASS |
| media absence does not affect gameplay | no-ref fixture + full browser route with 0 Pokémon media | PASS |
| no runtime resize/repack/per-render metadata parse | unchanged P7 resource owner; no new path | PASS |
| phone touch layout | 390x844 Chromium flow, 50 px controls | PASS |
| typecheck/unit/build | Batch 04 CI | PASS |
| resource cache caps preserved | unchanged P7 owner + P7 regression workflows | PASS |

## Scope intentionally left to Batch 05

Batch 04 does **not** claim the final P8 exit criteria. Batch 05 must still provide:

- complete Chromium **and WebKit** phone full-run proof on the production-intended path;
- production PWA/offline compatibility with an in-progress P8 save;
- final save/export/import compatibility evidence for P8 authority;
- manual mobile usability review;
- final issue #8 acceptance mapping and `P8_EXIT_AUDIT.md`.

It also remains false that P8 itself covers all 151 direct-interaction paths; that breadth belongs to P9.
