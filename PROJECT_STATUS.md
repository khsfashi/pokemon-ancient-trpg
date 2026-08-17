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

### P7 Batch 01 candidate

Branch: `agent/p7-batch01-architecture-contract`

Architecture candidate: `p7-architecture-v1`.

Frozen baseline after the Batch 01 PR merges green:

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

Important correctness boundary discovered/frozen in Batch 01:

```text
P5 origin_transition_seq/draw_index = u64
P5 total_weight                      = unsigned 63-bit bounded
runtime authoritative u64/u63        = bigint
save/content wire u64/u63            = validated unsigned decimal string
run_seed                             = 32 lowercase hex
SHA-256                              = Web Crypto HashProvider
```

Do not serialize authoritative u64/u63 values through JavaScript `number` or implicit BigInt JSON conversion.

Runtime/content/resource separation:

- Preact is presentation only; UI is never authoritative.
- event eligibility remains committed-transition-driven with generated trigger indexes, never per frame/render.
- remote Pokémon APIs remain build/import-only; runtime consumes generated normalized packs.
- IndexedDB owns versioned content-pinned saves and fail-closed migrations/imports.
- generated `resource_id` indexes provide O(1)-equivalent lookup.
- duplicate resource loads coalesce and decoded cache instances are reused under the frozen P6 byte caps.
- service-worker precache contains only public-safe app shell/required core resources; current Pokémon media is never public-preloaded.

Batch 01 evidence:

- `docs/P7_ARCHITECTURE_MANIFEST.json`
- `docs/P7_TECHNICAL_ARCHITECTURE_CONTRACT.md`
- `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`
- `docs/P7_BATCH_01_AUDIT.md`
- `tools/validate_p7_architecture.py`
- `.github/workflows/p7-architecture-validation.yml`

Batch 01 is accepted only after the final PR head reports `P7 Architecture Validation` green.

## Exact next work — P7 Batch 02

After Batch 01 merges:

1. create the Node 24/npm/Vite 8/strict-TypeScript/Preact 10 executable skeleton and committed lockfile;
2. create the frozen `src/app`, `runtime`, `domain`, `events`, `content`, `saves`, `resources`, `platform`, `ui`, `generated` ownership boundaries;
3. add the first Vitest deterministic integer/RNG/save/resource fixtures;
4. add a valid web app manifest and `workbox-build` public-safe service-worker build;
5. prove `npm ci`, typecheck, unit tests and production static build in CI;
6. prove the output contains no Pokémon source media and requires no backend;
7. keep P8 blocked until later P7 batches prove IndexedDB reload/migration, P5 RNG vectors, generated indexes, resource cache behavior and phone-sized offline browser E2E.

Implementation sequence for the rest of P7 is frozen in `docs/P7_IMPLEMENTATION_SKELETON_PLAN.md`.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P8 must prove a phone-sized mixed-world loop with settlement/social pressure, travel/survival, a persistent faction/relationship thread, Pokémon ecology/direct interaction and a complete `0/3` path. P9 must realize substantive world-content breadth and all 151 living direct-interaction paths.
