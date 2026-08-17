# P7 Exit Audit — Technical Architecture / Web-PWA / Save / Data / Resource Pipeline

Date: **2026-08-17**  
Issue: **#7**  
Architecture contract: **`p7-architecture-v1`**  
Exit verdict: **PASS**

## Exit question

Does the repository now contain a versioned, implementation-ready technical architecture and executable skeleton that preserves the accepted P1-P6 contracts while proving mobile web/PWA, deterministic runtime, browser persistence, generated data, resource caching, offline behavior and static deployment?

**Yes.**

## Accepted implementation batches

| Batch | Scope | Evidence | Verdict |
|---|---|---|---|
| 01 | architecture/toolchain/data/save/PWA decisions | `docs/P7_TECHNICAL_ARCHITECTURE_CONTRACT.md`, `docs/P7_BATCH_01_AUDIT.md`, PR #100 | PASS |
| 02 | executable static Preact/Vite shell + Workbox + CI | `docs/P7_BATCH_02_AUDIT.md`, PR #101 | PASS |
| 03 | deterministic P5 RNG + exact save/migration/IndexedDB | `docs/P7_BATCH_03_AUDIT.md`, PR #102 | PASS |
| 04 | deterministic generated runtime pack/indexes + Gen-I 151 coverage | `docs/P7_BATCH_04_AUDIT.md`, PR #103 | PASS |
| 05 | runtime resource loader + decoded cache/budget browser proof | `docs/P7_BATCH_05_AUDIT.md`, PR #104 | PASS |
| 06 | PWA origin-outage reload + browser save/backup/update + static deployment proof | `docs/P7_BATCH_06_AUDIT.md`, PR #105 | PASS |

## Frozen production baseline

```text
primary target        = web/PWA
backend               = none
build runtime         = Node 24.x LTS
package manager       = npm + committed lockfile
build tool            = Vite 8.x
language              = strict TypeScript
presentation          = Preact 10.x only
state/router library  = none in baseline
authoritative runtime = framework-independent pure TypeScript
save storage          = IndexedDB
PWA cache tooling     = workbox-build
unit tests             = Vitest
browser tests          = Playwright
deployment             = Vercel-compatible static output
Android                = deferred wrapper candidate only
```

No P7 batch introduced a gameplay backend or made network availability authoritative.

## Correctness boundary carried from P5

The implementation preserves the P5 deterministic authority rules:

```text
origin_transition_seq / draw_index = u64
weighted total                      = unsigned 63-bit bounded
runtime u64/u63                     = bigint
wire/save u64/u63                   = validated unsigned decimal string
run seed                            = 32 lowercase hex
P5 RNG                              = frozen keyed SHA-256 contract
hash provider                       = project-owned interface + Web Crypto implementation
pending event                       = exact choice/roll/reaction persistence
```

All four frozen P5 RNG vectors are executable TypeScript tests. Browser save acceptance additionally proves values beyond `Number.MAX_SAFE_INTEGER` survive IndexedDB/reload/backup/import without precision loss, including `18446744073709551614` and `9007199254740993`.

## Content/data boundary carried from P4-P6

Generated runtime content is build-time owned and deterministic:

```text
content pack id       = p7.contract-fixtures
content pack version  = 1
Gen-I species         = 151 / 151
runtime event entries = 7
runtime triggers      = 4
runtime resources     = 7
semantic adapters     = 92
```

The generated layer strips source/remote locators, exposes deterministic lookup indexes and does not copy uncleared Pokémon media into public production output. Every Generation-I species remains represented in the generated species index; P4's living direct-interaction requirement remains a content obligation for P9 rather than a reason to exclude species from the runtime architecture.

## Resource/performance boundary carried from P6

Frozen P6 limits remain executable in the browser resource owner:

```text
p6_owned_required_initial_resource_payload <= 3 MiB
pokemon_media_initial_payload               == 0
compact_icon_decoded_cache                  <= 384 KiB
per_encounter_atlas_guardrail               <= 2 MiB
max_resident_encounter_atlases              == 2
encounter_atlas_decoded_cache               <= 4 MiB
combined_optional_pokemon_decoded_working   <= 4.375 MiB
cache_key                                    == resource_id
all_151_pokemon_media_preloaded              == false
runtime_default_image_resize                 == false
runtime_atlas_repack                         == false
missing_optional_media_changes_gameplay      == false
```

Phone Chromium and WebKit produce the same Batch 05 decoded accounting. Concurrent identical resource requests coalesce; decoded images are reused; eviction disposes decoded browser objects; missing/oversized optional media reuses a deterministic fallback and does not alter authoritative state.

## Browser persistence and offline boundary

Batch 06 proves the complete browser-owned continuity path in both `390x844` Chromium and WebKit:

```text
initial online load + SW activation       = PASS
real origin process stopped               = confirmed unreachable
controlled reload with origin unavailable = PASS
new-run IndexedDB save/reload              = PASS
pending reaction exact resume              = PASS
completed RNG records preserved            = PASS
canonical backup export/import             = PASS
new service worker waits                   = PASS
old worker remains controller              = PASS
pending authoritative save survives update = PASS
```

The service worker is presentation/offline infrastructure only. It does not own authoritative gameplay state and the application does not force `SKIP_WAITING` during an active run.

## Static deployment boundary

Production output is a static bundle. The build validation rejects backend/serverless roots or server-executable output and requires the shell, manifest and worker.

Latest Batch 06 production proof before this audit commit:

```text
Node                         = 24.19.0
npm                          = 11.17.0
Vite                         = 8.0.16
Vitest                       = 11 files / 40 tests PASS
Workbox precache             = 4 files / 13,968 B
production dist              = 8 files / 181,336 B
serverless                   = 0
backend                      = 0
pokemon_media                = 0
Chromium                     = 151.0.7922.34
WebKit                       = 26.5
resource browser proofs      = PASS / PASS
save browser proofs          = PASS / PASS
PWA browser proofs           = PASS / PASS
```

Workflow evidence: `P7 Batch 06 Validation` run **31998678801**, validated code head `e0c81dfa7f25198aece7fc7766b5bf4b507e38a5`.

## P7 exit criteria

Issue #7 exit criteria are satisfied:

1. **Versioned architecture contract** — `p7-architecture-v1` is frozen and implemented.
2. **Implementation-ready skeleton** — build, generated data, deterministic runtime primitives, save storage, resource ownership, PWA lifecycle and browser tests are executable.
3. **P1-P6 constraints preserved** — accepted setting/rules/event/resource contracts remain authoritative and P6 budgets are enforced rather than replaced.
4. **Mobile-first evidence** — phone-sized Chromium and WebKit gates cover resource, persistence and PWA paths.
5. **No unjustified backend** — static output and validation prove zero backend/serverless requirement.
6. **Offline/update continuity** — a real origin outage and a waiting worker update both preserve the user-visible shell and pending authoritative state.

## Exit verdict

**P7 COMPLETE / PASS.**

The architecture is sufficiently frozen and executable to begin **P8 — vertical-slice gameplay implementation**. P8 must consume these boundaries rather than reopen them casually. Any future change to deterministic authority, save wire format, resource budgets, generated content identity, service-worker activation policy or backend ownership requires an explicit contract decision and regression evidence.
