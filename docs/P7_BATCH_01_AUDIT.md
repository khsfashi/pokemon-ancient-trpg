# P7 Batch 01 Audit — Technical Architecture Freeze

Date: **2026-08-17**  
Issue: **#7**  
Architecture: `p7-architecture-v1`  
Candidate branch: `agent/p7-batch01-architecture-contract`  
Verdict: **PASS CANDIDATE — requires final PR-head CI**

## 1. Batch objective

P7 Batch 01 had to resolve the researchable architecture questions left open by P1-P6 and freeze a minimum implementation boundary without inventing a backend, native fork, remote runtime data dependency, or resource behavior that contradicts P6.

## 2. Selected architecture

```text
primary delivery      = web/PWA
build runtime         = Node 24.x LTS
package lock          = npm package-lock.json
build tool            = Vite 8.x
language              = strict TypeScript
presentation          = Preact 10.x
authoritative runtime = pure TypeScript, framework-independent
save storage          = IndexedDB
PWA cache tooling      = workbox-build
unit tests             = Vitest
browser tests          = Playwright
deployment             = static Vercel-compatible output
backend required       = false
Android                = deferred; Capacitor wrapper candidate only if later justified
```

The machine-readable freeze is `docs/P7_ARCHITECTURE_MANIFEST.json`.

## 3. Candidate evaluation

| Candidate | Result | Reason |
|---|---|---|
| Vanilla TypeScript + Vite | REJECT baseline | smallest runtime, but unnecessary custom DOM/view lifecycle burden for the known persistent choice/save/settings/companion/offline UI surface |
| React + Vite | REJECT baseline | fully capable but the project does not need its larger ecosystem/runtime boundary; authoritative runtime is framework-independent |
| Preact + Vite | ADOPT | small presentation layer, current official Vite path, sufficient component model without making UI gameplay authority |
| packaged-native first | REJECT baseline | no native-only requirement exists and it would duplicate packaging complexity before PWA evidence |
| backend/server database | REJECT baseline | no current gameplay/product requirement; local deterministic offline state is sufficient |

## 4. Precision / determinism defect prevented

P5 freezes:

```text
U64_BE(origin_transition_seq)
U64_BE(draw_index)
total_weight <= unsigned 63-bit
```

JavaScript `number` cannot exactly represent the full required integer range. Batch 01 therefore explicitly freezes:

```text
runtime authoritative u64/u63 = bigint
save/content wire u64/u63      = validated unsigned decimal string
run_seed                       = 32 lowercase hex
SHA-256                        = Web Crypto behind HashProvider
```

This avoids silent loss of RNG/replay identity in JSON or browser runtime arithmetic. The later TypeScript implementation must reproduce all frozen P5 RNG vectors byte-for-byte.

## 5. Save / reload audit

The frozen save boundary preserves P5 pending-event semantics:

- IndexedDB owns authoritative browser persistence;
- service-worker cache and localStorage do not own runs;
- every save is versioned and content-pack pinned;
- pending choice/roll/reaction state persists before presentation waits;
- migration is sequential and fail-closed;
- backup import validates completely before one atomic write;
- unknown future save/content versions do not silently coerce.

Result: **PASS architecture boundary**.

## 6. P5 performance audit

```text
per_frame_event_scan == false
per_render_event_scan == false
trigger_index_required == true
eligibility_evaluated_on_committed_transition == true
static_contract_reparse_on_render == false
bounded_recent_history_preserved == true
UI_is_authoritative == false
```

Result: **PASS**.

## 7. P6 resource audit

Frozen P7 manifest reproduces the P6 caps exactly:

```text
Pokemon media initial payload       = 0 B
compact icon decoded cache          <= 393,216 B
per encounter atlas decoded         <= 2,097,152 B
resident encounter atlas count      <= 2
encounter atlas decoded cache       <= 4,194,304 B
combined optional Pokemon decoded   <= 4,587,520 B
P6-owned required initial resources <= 3,145,728 B
```

Runtime rules also preserve:

```text
lookup key = resource_id
lookup = O(1)-equivalent generated index
in-flight duplicate loads coalesce
long-lived decoded duplicates forbidden
all-151 preload forbidden
runtime default resize/repack forbidden
atlas JSON render reparse forbidden
missing optional media changes gameplay == false
```

Pokémon media remains `metadata_only / not_cleared` and is excluded from public PWA precache/output by default.

Result: **PASS**.

## 8. Data/import audit

The architecture keeps the existing P1/P4/P5/P6 source-normalization model:

```text
external pinned source
 -> existing validation/provenance tooling
 -> normalized generated runtime pack
 -> SHA-256 + generated indexes
 -> static app artifact
```

Runtime remote Pokémon API count is zero. Existing proven Python validators remain rather than being rewritten solely for language uniformity.

Result: **PASS**.

## 9. Offline/deployment audit

The selected baseline is installable/offline web delivery with a build-generated service worker and static host output. The service worker owns cache/network behavior only and cannot own gameplay state.

Vercel is a deployment target, not an application runtime dependency. Static output may move to another compliant host.

Android packaging remains deferred until PWA evidence demonstrates a concrete deficit.

Result: **PASS**.

## 10. Executable contract gate

`tools/validate_p7_architecture.py` checks the manifest and fails on drift in:

- P7 contract version and selected delivery/toolchain;
- P5 transition/RNG/u64/63-bit anchors;
- save ownership and fail-closed migration/import policy;
- no-runtime-remote-API rule;
- PWA/public-resource boundary;
- exact P6 byte/cache caps;
- resource lookup/coalescing/no-duplicate invariants;
- required future TypeScript/browser test gates.

`.github/workflows/p7-architecture-validation.yml` executes this gate on the relevant PR and main changes.

Final Batch 01 acceptance requires the final PR head to report this workflow green.

## 11. Human Design Gate audit

No owner-level creative choice is required. Framework, storage, PWA caching and deployment are researchable engineering choices under the already-approved mobile text-RPG direction and P6 resource contract.

```text
blocking_human_design_gate_count == 0
```

## 12. Next work after merge

P7 remains active. Batch 01 freezes the architecture but does not claim P7 exit.

Next: **P7 Batch 02 — executable web/PWA skeleton** from `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`:

- committed Node/npm lock boundary;
- Vite + strict TypeScript + Preact shell;
- source ownership directories;
- first Vitest fixtures;
- web app manifest + public-safe Workbox service-worker build;
- static production build proof;
- no Pokémon source media in `dist/`;
- no backend.

## 13. Verdict

**P7 Batch 01: PASS CANDIDATE**, conditional on final PR-head `P7 Architecture Validation` success.

P7 does not close with this batch. P8 remains blocked until the later executable P7 exit audit proves the architecture in browser/runtime code.
