# Project Status

Last operational handoff update: **2026-08-17**

This file is the concise operational handoff. Durable authority remains in `docs/DECISIONS.md`, phase contracts and exit audits; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like ordinary material baseline with narrow Pokémon-dependent technology/culture islands.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid complete run.
- Mandatory Generation-I roster is National Pokédex `#001-#151`; **every species must remain encounterable / have a living direct-interaction path somewhere in total content**.
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
P7 Technical architecture / web-PWA   COMPLETE
```

Strict exit evidence:

- P4: `docs/P4_EXIT_AUDIT.md`
- P5: `docs/P5_EXIT_AUDIT.md`
- P6: `docs/P6_EXIT_AUDIT.md`
- P7: `docs/P7_EXIT_AUDIT.md`

## Frozen P6 resource handoff

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

Full pinned P6 production import validated compact `151/151`, animated PNG+JSON `151/151`, every frame bound and SHA-256 evidence without writing Pokémon source media into CI evidence. Maximum measured conservative animated atlas decode remains #085 Dodrio at `673x673 / 1,811,716 B`, below the frozen 2 MiB guardrail.

## Frozen P7 architecture handoff

Architecture contract: **`p7-architecture-v1`**.

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
Android                = deferred wrapper candidate only
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

### P7 accepted batches

- **Batch 01 / PR #100** — froze architecture/toolchain/data/save/PWA decisions.
- **Batch 02 / PR #101** — executable mobile-first static Preact/Vite/Workbox shell and CI.
- **Batch 03 / PR #102** — exact frozen P5 RNG, Web Crypto hash provider, save envelope/migrations/IndexedDB exact pending resume.
- **Batch 04 / PR #103** — deterministic generated runtime pack/indexes, including all `151/151` Generation-I species.
- **Batch 05 / PR #104** — runtime resource owner, coalescing, bounded decoded caches and phone Chromium/WebKit resource proof. PR #104 is merged on `main` as `9fa7859c4884ae49101b6f4c7c9e981a012c9e93`.
- **Batch 06 / PR #105** — browser save/backup round trip, production service-worker lifecycle, real-origin-outage reload, update waiting safety and Vercel-compatible static deployment proof.

Batch 06 final validated code head before audit-only commits: `e0c81dfa7f25198aece7fc7766b5bf4b507e38a5`.

```text
P7 Batch 06 Validation run 31998678801 = PASS
Node                                  = 24.19.0
npm                                   = 11.17.0
Vitest                                = 11 files / 40 tests PASS
Workbox precache                      = 4 files / 13,968 B
production dist                       = 8 files / 181,336 B
backend                               = 0
serverless                            = 0
pokemon_media                         = 0
Chromium                              = 151.0.7922.34
WebKit                                = 26.5
resource browser proofs               = PASS / PASS
save browser proofs                   = PASS / PASS
PWA origin-outage/update proofs       = PASS / PASS
```

Browser save proof preserves `transition_seq_u64=18446744073709551614`, `origin_transition_seq_u64=9007199254740993`, pending phase `awaiting_reaction`, two completed RNG draws and a 2,428 B canonical backup across reload/export/import in both browsers.

PWA proof physically stops the production preview origin before reload rather than relying on browser offline emulation. Chromium and WebKit both reload the cached shell with the origin unreachable. A byte-changed service worker then remains `waiting`, the old worker stays controller, and the pending authoritative IndexedDB save remains unchanged.

Evidence:

- `docs/P7_BATCH_01_AUDIT.md`
- `docs/P7_BATCH_02_AUDIT.md`
- `docs/P7_BATCH_03_AUDIT.md`
- `docs/P7_BATCH_04_AUDIT.md`
- `docs/P7_BATCH_05_AUDIT.md`
- `docs/P7_BATCH_06_AUDIT.md`
- `docs/P7_EXIT_AUDIT.md`

## Exact next work

**P8 — Vertical-slice gameplay implementation (#8).**

P8 must consume the frozen P1-P7 contracts instead of reopening them casually. The vertical slice must prove a phone-sized mixed-world loop with:

1. settlement/social pressure;
2. travel/survival;
3. a persistent faction/relationship thread;
4. Pokémon ecology/direct interaction;
5. the complete deterministic event/save/reload path;
6. a valid complete `0/3` companion path;
7. resource presentation through the P6/P7 cache and optional-media boundaries.

P8 must not interpret the current generated fixture pack as permission to make any Pokémon permanently unreachable. The long-form P9 content expansion still owns the complete breadth of living direct-interaction paths for all `151/151` species.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P9 must realize substantive world-content breadth and all 151 living direct-interaction paths. P10 is final audit/polish/release-readiness work.
