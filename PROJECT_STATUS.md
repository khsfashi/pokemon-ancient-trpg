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

### P7 Batch 03 — PASS CANDIDATE

PR: **#102**  
Branch: `agent/p7-batch03-runtime-save-foundation`  
Validated head before documentation finalization: `3ab95789ec9cf72363e8be4ab45ed4caf3416103`

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

Node 24 workflow run `31986880398` passed `npm ci`, strict TypeScript 6 typecheck, all Vitest fixtures and the production Vite/Workbox static build on PR #102.

Evidence: `docs/P7_BATCH_03_AUDIT.md`.

## Exact next work — after P7 Batch 03 merges

P7 Batch 04 — generated content/index boundary:

1. add a build-time runtime-pack generator that consumes validated project contracts/data;
2. emit deterministic `trigger_id -> ordered event IDs` lookup;
3. emit deterministic `resource_id -> runtime descriptor` lookup;
4. emit deterministic `species_id -> runtime species/dossier descriptor` lookup;
5. emit deterministic `semantic adapter ID -> registered runtime adapter` lookup;
6. stabilize ordering before hashing and emit content pack id/version/SHA-256 digest;
7. keep remote Pokémon APIs, authoring-schema parsing and uncleared Pokémon media out of runtime/public artifacts;
8. keep the proven P5/P6 Python validators instead of rewriting them without a concrete benefit.

P8 remains blocked until Batch 04 generated-index, Batch 05 resource-cache/measurement and Batch 06 offline/phone-browser gates all pass.

Full sequence remains frozen in `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a phone-sized mixed-world loop with settlement/social pressure, travel/survival, a persistent faction/relationship thread, Pokémon ecology/direct interaction and a complete `0/3` path. P9 must realize substantive world-content breadth and all 151 living direct-interaction paths.
