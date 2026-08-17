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

### P7 Batch 02 candidate

PR: **#101**  
Branch: `agent/p7-batch02-executable-skeleton`

Batch 02 now provides the executable architecture shell:

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

Implemented/proven boundaries:

- mobile-first static Preact shell with no router/global-state dependency;
- frozen `src/app`, `runtime`, `domain`, `events`, `content`, `saves`, `resources`, `platform`, `ui`, `generated` ownership directories;
- exact u63/u64 `bigint` ↔ canonical unsigned-decimal-string conversion with fail-closed range validation;
- immutable RNG cursor scaffold preserving u64 `draw_index` without claiming the Batch 03 SHA-256 algorithm yet;
- explicitly non-production save JSON probe proving authoritative integers are not serialized through `number`;
- one constructed `Map`-backed `resource_id` registry with duplicate-ID rejection and O(1)-equivalent lookup;
- valid web app manifest and Workbox-generated service worker;
- build-time public output guard that rejects binary media, known runtime Pokémon source/API origins, missing PWA shell files, and a required static shell above the inherited 3 MiB cap;
- Node 24 CI requires the committed lockfile and runs `npm ci`, strict typecheck, Vitest, and the production Vite + Workbox static build.

Batch 02 intentionally does **not** claim completion for production P5 SHA-256 RNG, IndexedDB/migrations, generated runtime packs, resource load coalescing/LRU eviction, or phone Chromium/WebKit offline E2E. Those remain later P7 batches.

Evidence: `docs/P7_BATCH_02_AUDIT.md`.

## Exact next work — after P7 Batch 02 merges

P7 Batch 03 — deterministic runtime and save foundation:

1. add a `HashProvider` backed by Web Crypto SHA-256;
2. implement the exact frozen `p5-rng-v1` byte encoder with `bigint` u64 fields;
3. port every frozen P5 RNG vector to TypeScript and require byte-for-byte equality;
4. implement production `SaveEnvelopeV1` wire/runtime conversion with validated decimal-string u64 values;
5. implement the native IndexedDB adapter and sequential pure fail-closed migration registry;
6. prove atomic save/import replacement and pending-event reload for mid-choice, mid-roll, and mid-reaction states;
7. keep P8 blocked until the remaining generated-index/resource-cache/offline-browser P7 gates also pass.

Full sequence remains frozen in `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a phone-sized mixed-world loop with settlement/social pressure, travel/survival, a persistent faction/relationship thread, Pokémon ecology/direct interaction and a complete `0/3` path. P9 must realize substantive world-content breadth and all 151 living direct-interaction paths.
