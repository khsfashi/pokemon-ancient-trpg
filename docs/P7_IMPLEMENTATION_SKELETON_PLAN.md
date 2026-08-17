# P7 Implementation Skeleton Plan

Status: **READY AFTER BATCH 01 MERGE**  
Date: **2026-08-17**  
Architecture: `p7-architecture-v1`

This is the implementation sequence for the architecture frozen in `docs/P7_TECHNICAL_ARCHITECTURE_CONTRACT.md`. It intentionally avoids building gameplay content before the runtime/save/resource boundaries have executable tests.

## Batch 02 — executable web/PWA skeleton

Create the minimum application and CI skeleton:

```text
package.json
package-lock.json
tsconfig*.json
vite.config.ts
index.html
public/manifest.webmanifest
src/main.tsx
src/app/App.tsx
src/runtime/
src/domain/
src/events/
src/content/
src/saves/
src/resources/
src/platform/
src/ui/
tests/
e2e/
```

Use Node 24 LTS, Vite 8.x, strict TypeScript, Preact 10.x, Vitest, Playwright and `workbox-build`. Do not add a router or global state dependency.

Required Batch 02 proof:

1. `npm ci` succeeds from the committed lockfile;
2. `npm run typecheck` succeeds under strict settings;
3. `npm run test` executes the first deterministic runtime/save/resource fixtures;
4. `npm run build` produces a static `dist/`;
5. a web manifest is present;
6. the service-worker build precaches only public-safe required output;
7. no Pokémon source media appears in `dist/`;
8. the built shell can be served as a static application with no backend.

## Batch 03 — deterministic runtime and save foundation

Implement the first production-intended authoritative foundation before broad UI work:

- `HashProvider` using Web Crypto SHA-256;
- exact `p5-rng-v1` byte encoder using `bigint` for u64 values;
- port every frozen P5 RNG vector to TypeScript and require byte-for-byte equality;
- `SaveEnvelopeV1` wire model with decimal-string u64 fields;
- explicit wire <-> runtime conversion with range validation;
- native IndexedDB adapter;
- sequential migration registry;
- atomic save/import replacement behavior;
- pending-event choice/roll/reaction reload fixtures.

No gameplay UI should be allowed to mutate these structures directly.

## Batch 04 — generated content/index boundary

Add a build-time runtime-pack generator that consumes validated project contracts/data and emits only normalized runtime artifacts.

Required generated indexes:

```text
trigger_id -> ordered event IDs
resource_id -> runtime descriptor
species_id -> runtime species/dossier descriptor
semantic adapter ID -> registered runtime adapter
```

Requirements:

- stable ordering before hashing;
- content pack id/version/SHA-256 digest;
- no remote Pokémon API in runtime code;
- no authoring-schema parse in render paths;
- no uncleared Pokémon media copied to public artifacts.

Keep the existing P5/P6 Python validators. Do not rewrite proven validation tooling without a concrete maintenance or performance benefit.

## Batch 05 — resource loader and measured browser cache proof

Implement one owner for resource loading:

- O(1)-equivalent `resource_id` registry;
- in-flight request coalescing;
- compact icon byte-bounded LRU;
- encounter atlas byte-bounded LRU;
- max-two resident encounter guard;
- deterministic optional-media fallback;
- no runtime atlas JSON reparse on render;
- no default resize/repack.

Use representative public-safe test images first. If local optional Pokémon enrichment is exercised, test it without committing or redistributing the source media.

Measure actual decoded/browser behavior on phone-sized Chromium and WebKit. Compare it with the P6 conservative caps rather than assuming RGBA8 estimates equal browser/GPU accounting.

## Batch 06 — PWA/offline + deployment evidence

Add browser-level proof:

- initial online load;
- service-worker installation;
- offline reload;
- new run/save/reload;
- pending-event reload without reroll;
- backup export/import round trip;
- update/reload path that never forces replacement during an authoritative pending transition;
- Vercel-compatible static build with no serverless/backend dependency.

Playwright minimum browser projects: phone-sized Chromium and WebKit.

## P7 exit audit

P7 may close only when all of the following are true:

```text
architecture_contract_version == p7-architecture-v1
node_lts_toolchain_locked == true
vite_preact_typescript_skeleton_builds == true
backend_required == false
p5_rng_vectors_match_in_typescript == true
u64_precision_loss_fixture_count == 0
indexeddb_save_reload_and_migration == PASS
pending_event_resume_mid_choice_mid_roll_mid_reaction == PASS
generated_content_trigger_index == PASS
runtime_remote_pokemon_api_count == 0
resource_request_coalescing == PASS
compact_cache_cap_preserved == true
encounter_cache_cap_preserved == true
pokemon_media_initial_payload == 0
public_build_uncleared_pokemon_media_count == 0
offline_reload == PASS
phone_chromium_webkit_e2e == PASS
production_static_build == PASS
```

Only after that audit should P8 begin the first playable mixed-world vertical slice.
