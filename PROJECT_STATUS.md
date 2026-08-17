# Project Status

Last operational handoff update: **2026-08-17**

This file is the concise operational handoff. Durable authority remains in `docs/DECISIONS.md`, phase contracts and exit audits; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like ordinary material baseline with narrow Pokémon-dependent technology/culture islands.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid complete run.
- Mandatory Generation-I roster is National Pokédex `#001-#151`; every species has a living direct-interaction path somewhere in total content.
- Pokémon use fixed six-axis species baselines plus capability/hazard tags; ordinary Pokémon do not scale with the player.
- P5 deterministic event contracts remain authoritative for event/RNG/state behavior.
- D-036 freezes hybrid Pokémon presentation: **PokéSprite compact identity + animated encounter sprites + non-destructive conceal/reveal/shading/masking/environment layers**.
- Pokémon media remains optional and `metadata_only / not_cleared` for public distribution unless an exact artifact is affirmatively cleared.

## Completed phases

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
P4 Pokémon adaptation + Gen-I 151     COMPLETE
P5 Narrative world-event engine       COMPLETE
P6 Resource/asset/provenance/budget   COMPLETE
```

P4 strict exit evidence: `docs/P4_EXIT_AUDIT.md`.  
P5 strict exit evidence: `docs/P5_EXIT_AUDIT.md`.  
P6 strict exit evidence: `docs/P6_EXIT_AUDIT.md`.

## Frozen P6 handoff

```text
p6_owned_required_initial_resource_payload <= 3 MiB
pokemon_media_initial_payload == 0
compact_icon_decoded_cache <= 384 KiB
per_encounter_atlas_guardrail <= 2 MiB
max_resident_encounter_atlases == 2
encounter_atlas_decoded_cache <= 4 MiB
combined_optional_pokemon_decoded_image_working_set <= 4.375 MiB
cache_key == resource_id
all_151_pokemon_media_preloaded == false
runtime_default_image_resize == false
runtime_atlas_repack == false
missing_optional_media_changes_authoritative_gameplay == false
```

Full pinned P6 production import validated compact `151/151`, animated PNG+JSON `151/151`, every frame bound and SHA-256 evidence without writing Pokémon source media into CI evidence. Maximum measured conservative animated atlas decode remains #085 Dodrio at `673x673 / 1,811,716 B`, below the frozen 2 MiB guardrail.

## Current phase

**P7 — Technical architecture, web/PWA target, save/data/resource pipeline, and tests (#7) is active.**

### P7 Batch 01 — ACCEPTED

PR #100 was squash-merged to `main` as `973978424d0ac7aeb6ae89d43229a6049382ae8e` after `P7 Architecture Validation` passed.

Frozen architecture: `p7-architecture-v1`.

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
PWA cache tooling      = workbox-build
unit tests             = Vitest
browser tests          = Playwright
deployment             = static Vercel-compatible output
Android                = deferred Capacitor wrapper candidate only
```

Correctness boundary:

```text
P5 origin_transition_seq/draw_index = u64
P5 total_weight                      = unsigned 63-bit bounded
runtime authoritative u64/u63        = bigint
save/content wire u64/u63            = validated unsigned decimal string
run_seed                             = 32 lowercase hex
SHA-256                              = Web Crypto HashProvider
```

Do not serialize authoritative u64/u63 values through JavaScript `number` or implicit BigInt JSON conversion.

### P7 Batch 02 — ACCEPTED

PR #101 was squash-merged to `main` as `63455e993197adbbdcafc6c775a2d38a0a5ec25c` after the Node 24 `P7 Batch 02 Validation` gate passed.

Batch 02 provides the executable architecture shell:

```text
Node             = 24.x in CI
Vite             = 8.0.16
TypeScript       = 6.0.3 strict
Preact           = 10.29.7
Vitest           = 4.1.10
Playwright       = 1.62.1 dependency lane reserved
workbox-build    = 7.4.1
package-lock     = committed, lockfileVersion 3
backend          = none
```

Implemented/proven boundaries include the mobile-first static Preact shell, frozen source ownership directories, exact bigint decimal-wire helpers, immutable u64 RNG cursor scaffold, resource registry foundation, Workbox service worker, public-output guard and Node 24 CI lane.

Evidence: `docs/P7_BATCH_02_AUDIT.md`.

### P7 Batch 03 — ACCEPTED

PR #102 was squash-merged to `main` as `50bbd06a2040f0c0bddc9331afdbfaf357674111` after the final PR head passed the Node 24 validation lane and had no unresolved review thread.

Batch 03 implements the deterministic runtime/save foundation:

- project-owned `HashProvider` plus Web Crypto SHA-256 provider;
- exact frozen `p5-rng-v1` encoder with ASCII/NUL separators, 16-byte seed and big-endian bigint u64 fields;
- all four frozen P5 vectors ported to TypeScript with byte, digest, raw-u64 and bounded-result equality;
- rejection sampling records rejected/accepted raw draws and advances only the keyed stream draw index;
- production `SaveEnvelopeV1` runtime/wire conversion with canonical decimal-string u64 fields;
- strict pending-event persistence for choice, roll and reaction wait states, including recorded RNG/check/reaction data;
- sequential one-version-at-a-time fail-closed migration registry;
- native IndexedDB `save_slots` adapter with full-envelope `readwrite` replacement transactions;
- import validates JSON, version/migration, ranges/schema and content-pack identity before exactly one replacement;
- no new npm/runtime dependency.

Final PR-head workflow run `31987081988` passed before merge.

Evidence: `docs/P7_BATCH_03_AUDIT.md`.

### P7 Batch 04 — PASS CANDIDATE

PR: **#103**  
Branch: `agent/p7-batch04-generated-runtime-pack`  
Validated code head before documentation finalization: `737af1367513b798a81693c4c2a371cf294a5633`

Batch 04 implements the generated content/index boundary:

- build-time `tools/build_p7_runtime_pack.py` consumes only validated project-owned P4/P5/P6 contracts/data;
- existing P5/P6 Python validators remain the prerequisite gates instead of being rewritten;
- committed `src/generated/runtime-pack.json` is regenerated deterministically and checked byte-for-byte;
- pack identity is `p7.contract-fixtures` version `1`, SHA-256 `9c830e0b58d41089470594d263c16ba7e92377f6998b3f07785eb7708a059b2c`;
- generated cardinalities are 7 events, 4 triggers, 7 resources, 151 Gen-I species and 92 semantic adapters;
- deterministic `trigger_id -> ordered event IDs`, `resource_id -> descriptor`, `species_id -> dossier descriptor`, and semantic-adapter ID lookup are exposed from `src/generated`;
- string lookups use own-property checks; dense species `1..151` uses one prebuilt 152-entry array to avoid repeated padded-key or `Map` allocation;
- missing-trigger lookup reuses one frozen empty array;
- generated resource descriptors strip remote/source locators and fail generation on forbidden remote markers;
- uncleared Pokémon media remains `optional_local_only` metadata with deterministic fallback and no copied source binary;
- no new npm/runtime dependency.

Validated code head passed both overlapping lanes:

```text
P7 Batch 02 Validation run 31988847464 == PASS
P7 Batch 04 Validation run 31988847470 == PASS
```

Evidence: `docs/P7_BATCH_04_AUDIT.md`.

## Exact next work — after P7 Batch 04 merges

P7 Batch 05 — resource loader and measured browser cache proof:

1. implement one owner for resource loading with O(1)-equivalent `resource_id` registry access;
2. coalesce in-flight requests so concurrent identical loads share one underlying request;
3. implement a byte-bounded compact-icon LRU under the frozen 384 KiB cap;
4. implement a byte-bounded encounter-atlas LRU under the frozen 4 MiB cap;
5. enforce the max-two resident encounter guard;
6. implement deterministic optional-media fallback without changing authoritative gameplay;
7. keep atlas JSON out of render-path reparsing and avoid default resize/repack;
8. use representative public-safe images for committed tests and keep optional Pokémon enrichment local-only;
9. measure actual decoded/browser behavior on phone-sized Chromium and WebKit and compare it with the conservative P6 caps.

P8 remains blocked until Batch 05 resource-cache/measurement and Batch 06 offline/phone-browser gates pass.

Full sequence remains frozen in `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a phone-sized mixed-world loop with settlement/social pressure, travel/survival, a persistent faction/relationship thread, Pokémon ecology/direct interaction and a complete `0/3` path. P9 must realize substantive world-content breadth and all 151 living direct-interaction paths.
