# P7 Batch 05 Audit — Resource Loader and Browser Cache Proof

Status: **PASS CANDIDATE**  
Date: **2026-08-17**  
PR: **#104**  
Branch: `agent/p7-batch05-resource-loader-cache`  
Validated code head before documentation finalization: `be4019d6800fe8375599aa17609a7c1f12d41fcd`

## Scope

Batch 05 implements the project-owned runtime resource-loading boundary required by `p7-architecture-v1` while preserving the frozen P6 media, memory and public-distribution constraints.

Implemented ownership:

- generated `resource_id` descriptor lookup remains the registry authority;
- one `ResourceLoader` owns fetch, decode, request reuse, cache admission, eviction and optional fallback;
- concurrent identical loads share one in-flight Promise and therefore one underlying fetch/decode;
- compact Pokémon-icon results use a decoded-byte-bounded LRU;
- Pokémon encounter images use a decoded-byte-bounded LRU plus an individual-resource guard and a hard resident-count guard;
- browser image decode happens once per admitted resource instance and the decoded result is reused until eviction/invalidation;
- deterministic optional-media fallback is cached and remains outside authoritative gameplay state;
- runtime remote HTTP(S), protocol-relative and UNC-like remote locators are rejected before fetch;
- no runtime resize/repack path was introduced;
- no render-path atlas JSON parsing was introduced;
- no new runtime npm dependency was added.

## Frozen P6 guardrails preserved

| Contract | Frozen limit | Runtime enforcement / measured proof |
|---|---:|---:|
| compact icon decoded cache | `<= 384 KiB` | LRU cap `393,216 B`; browser probe resident `15,232 B` |
| per encounter atlas | `<= 2 MiB` | admission guard `2,097,152 B`; unit fixture rejects `2,097,153 B`; largest browser probe `1,638,400 B` |
| resident encounter atlases | `<= 2` | hard LRU entry cap `2`; browser probe ends with exactly `2` resident |
| encounter decoded cache | `<= 4 MiB` | LRU cap `4,194,304 B`; browser probe resident `3,211,264 B` |
| combined optional Pokémon decoded image working set | `<= 4.375 MiB` | browser probe compact + encounter accounting `3,226,496 B <= 4,587,520 B` |
| cache key | `resource_id` | all in-flight/cache/fallback maps keyed by `resource_id` |
| all 151 preloaded | `false` | loader is demand-driven; no preload-all path |
| runtime default resize | `false` | no resize path added |
| runtime atlas repack | `false` | no repack path added |
| missing optional media changes authoritative gameplay | `false` | missing/oversized optional media returns deterministic presentation fallback only |
| Pokémon media in initial/public payload | `0` | production dist validation reports `pokemon_media=0` |

The individual encounter guard is deliberately checked before LRU admission. An oversized decoded optional encounter resource is disposed immediately and resolves through its deterministic fallback instead of temporarily becoming a resident cache entry.

## Resource URL policy

Allowed runtime locations are restricted to project-local paths and browser-local Blob URLs:

```text
/assets/...
./assets/...
../assets/...
blob:...
```

Rejected before fetch:

```text
https://...
http://...
//remote-host/...
/\\remote-host/...
```

This closes the protocol-relative escape case that a simple `startsWith('/')` check would otherwise allow.

## Deterministic unit evidence

Authoritative Batch 05 workflow run:

```text
P7 Batch 05 Validation run 31990707021 == PASS
```

Node/toolchain observed in the run:

```text
Node  v24.19.0
npm   11.17.0
npm ci vulnerabilities == 0
```

Vitest result:

```text
Test Files  11 passed (11)
Tests       38 passed (38)
```

Batch 05 resource fixtures directly prove:

- three concurrent identical loads coalesce to one fetch and one decode;
- compact LRU eviction preserves the 384 KiB cap and disposes the evicted decode;
- encounter LRU preserves the 4 MiB cap and max-two resident guard;
- a `2 MiB + 1 B` encounter decode is rejected/disposed;
- optional missing media returns one cached deterministic fallback object;
- required remote URLs are rejected without invoking fetch;
- a decoded result is reused until explicit invalidation;
- protocol-relative remote locator variants are rejected.

The overlapping architecture regression lane also passed on the same code head:

```text
P7 Batch 02 Validation run 31990707020 == PASS
```

## Production-build evidence

From run `31990707021`:

```text
Vite                         8.0.16
workbox precache             4 files / 13,901 bytes
dist validation              PASS
dist files                   8
dist total                   181,269 bytes
backend                      none
pokemon_media                0
```

Browser measurement SVGs are not stored under `public/` and are not copied into `dist/` or the service-worker precache. Playwright supplies those public-safe geometric fixtures only inside the test process through request interception.

## Phone-browser measurement

Configuration:

```text
viewport             390 x 844
Chromium             Chrome for Testing 151.0.7922.34
Playwright Chromium  v1234
WebKit               26.5
Playwright WebKit    v2336
```

Both engines produced the same logical measurement and both tests passed.

### Chromium

```json
{
  "fetchCount": 4,
  "compactCoalescedIdentity": true,
  "fallbackIdentity": true,
  "fallbackKind": "fallback",
  "loadedDimensions": [
    {"id":"probe.compact","width":68,"height":56,"encodedBytes":231,"decodedBytes":15232},
    {"id":"probe.encounter.a","width":512,"height":512,"encodedBytes":288,"decodedBytes":1048576},
    {"id":"probe.encounter.b","width":640,"height":640,"encodedBytes":239,"decodedBytes":1638400},
    {"id":"probe.encounter.c","width":768,"height":512,"encodedBytes":259,"decodedBytes":1572864}
  ],
  "stats": {
    "compactEntries": 1,
    "compactBytes": 15232,
    "encounterEntries": 2,
    "encounterBytes": 3211264,
    "residentEntries": 0,
    "fallbackEntries": 1,
    "inFlightRequests": 0
  },
  "encounterAResident": false,
  "encounterBResident": true,
  "encounterCResident": true
}
```

### WebKit

WebKit returned the same dimensions, byte-accounting values, identities, cache statistics and final residency set as Chromium.

Interpretation:

- two simultaneous compact requests yielded one object identity and only one underlying request;
- four present resources generated exactly four fetches total;
- optional missing media generated no network fetch and reused one cached fallback;
- encounter A was evicted after B/C admission, leaving exactly two residents;
- measured encounter accounting stayed below the frozen 4 MiB total cap;
- every individual encounter probe stayed below the frozen 2 MiB per-resource guard.

### Accounting caveat

`decodedBytes` is intentionally conservative RGBA8 accounting derived from the dimensions returned by the real browser decode (`naturalWidth * naturalHeight * 4`). Chromium/WebKit do not expose a stable cross-browser API for exact decoded heap allocation or GPU texture residency, so this audit does **not** claim exact browser-heap or GPU-byte measurement.

The browser-level proof is instead that both engines actually decode the resources, report the expected natural dimensions, reuse/coalesce the decoded result, execute the bounded LRU policy and deterministic fallback, and produce the measured conservative accounting used by the frozen P6 budget contract.

## Exit result

Batch 05 acceptance conditions are satisfied on validated code head `be4019d6800fe8375599aa17609a7c1f12d41fcd`:

```text
resource_request_coalescing              == PASS
compact_cache_cap_preserved              == true
per_encounter_atlas_guardrail_preserved  == true
encounter_cache_cap_preserved            == true
max_two_resident_encounters              == true
optional_media_fallback                  == PASS
runtime_remote_resource_fetch            == blocked
pokemon_media_initial_payload            == 0
public_build_uncleared_pokemon_media      == 0
runtime_resize_repack                     == absent
phone_chromium_resource_proof             == PASS
phone_webkit_resource_proof               == PASS
production_static_build                   == PASS
```

P8 remains blocked. The exact next work is P7 Batch 06: offline/PWA and deployment evidence, including service-worker installation/offline reload, save/reload and pending-event no-reroll behavior, backup export/import, safe update/reload behavior, and Vercel-compatible static deployment proof on phone Chromium and WebKit.
