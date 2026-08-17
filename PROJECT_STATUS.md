# Project Status

Last operational handoff update: **2026-08-17**

This file is the concise operational handoff. Durable authority remains in `docs/DECISIONS.md`, phase contracts and exit audits; live GitHub state wins if this file is stale.

## Binding direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG for primarily personal play and limited sharing.
- Setting is earlier than Hisui, in future-Kanto territory before mature regional civilization.
- Iron-age / medieval-fantasy-like ordinary material baseline with narrow Pokémon-dependent technology/culture islands.
- No normalized trainer culture, routine ownership, portable containment, Poké Balls or PC storage.
- Exactly three visible companion slots; `0/3` remains a valid complete run.
- Mandatory Generation-I roster is National Pokédex `#001-#151`; every species must remain encounterable / have a living direct-interaction path somewhere in total content by P9 exit.
- Pokémon use fixed six-axis species baselines plus capability/hazard tags; ordinary Pokémon do not scale with the player.
- P5 deterministic event contracts remain authoritative for event/RNG/state behavior.
- D-036 freezes hybrid Pokémon presentation: PokéSprite compact identity + animated encounter sprites + non-destructive conceal/reveal/shading/masking/environment layers.
- Pokémon media remains optional and `metadata_only / not_cleared` for public distribution unless an exact artifact is affirmatively cleared.

## Blocking owner playtest gate — P8.1

Issue: **#114 — Playtest remediation: natural Korean, game-like UI, meaningful choices**.

P8's technical integration/architecture exit remains valid, but the **player-facing product acceptance was rejected by the owner on 2026-08-17** after the first real playtest.

Observed blockers:

- Korean reads like literal/technical translation rather than native Korean game prose;
- the current centered-card presentation does not read as a finished game UI;
- the playable route feels incomplete;
- too many main-path scenes expose only one effective action;
- implementation/proof wording leaks into normal player-facing copy.

Therefore:

```text
p8_technical_exit              == PASS
p8_owner_product_acceptance    == FAIL / REOPENED AS P8.1
p9_bulk_content_expansion      == BLOCKED UNTIL #114 CLOSES
```

Owner-approved presentation direction:

- benchmark native-Korean editing/humanization practices and enforce a repo-local Korean game-copy skill;
- use StudioWheel's `모험가 이야기` as an information-hierarchy/text-adventure-feel benchmark without copying proprietary assets/layouts;
- ordinary gameplay events should normally present `2+` materially distinct choices where fiction permits;
- single-action buttons are reserved for genuine acknowledgement/transition moments;
- the first several minutes must read immediately as a game at the accepted phone viewport.

Binding remediation contract: `docs/PLAYTEST_REMEDIATION.md`.

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
P8 First playable vertical slice      TECHNICAL COMPLETE
P8.1 Owner playtest product gate      IN PROGRESS (#114)
```

Strict exit evidence:

- P4: `docs/P4_EXIT_AUDIT.md`
- P5: `docs/P5_EXIT_AUDIT.md`
- P6: `docs/P6_EXIT_AUDIT.md`
- P7: `docs/P7_EXIT_AUDIT.md`
- P8 technical exit: `docs/P8_EXIT_AUDIT.md`

## Frozen P6 resource boundary

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

P6's full pinned import proved compact `151/151`, animated PNG+JSON `151/151`, bound frames and SHA-256 evidence without copying Pokémon source media into public CI evidence. Maximum measured conservative animated-atlas decode remains #085 Dodrio at `1,811,716 B`, below the 2 MiB guardrail.

## Frozen P7 architecture boundary

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
PWA cache tooling     = workbox-build
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

P7 browser acceptance physically stops the preview origin for offline proof, keeps gameplay state in IndexedDB, keeps a new service worker waiting during an active run, preserves exact pending authority, and enforces the P6 decoded-resource caps in Chromium/WebKit.

Evidence: `docs/P7_BATCH_01_AUDIT.md` through `docs/P7_BATCH_06_AUDIT.md` and `docs/P7_EXIT_AUDIT.md`.

## Frozen P8 vertical-slice handoff

Integration contract: **`p8-vertical-slice-v1`**.  
Issue: **#8 — First playable vertical slice**.  
Accepted batches: PRs **#106, #107, #108, #109, #110**.

P8 proves one bounded production-shaped Reedbank run without pretending to provide P9 breadth:

```text
primary settlement                         = 1
meaningfully distinct local/ecology areas >= 2
formative character prompts                = 3
curated Origins                            >= 4
curated Learned Practices                  >= 4
curated Pokémon proving set                = 3
visible companion slots                    = 3
zero-companion completion                  = proven
shared P5 event engine for all pillars     = proven
runtime remote Pokémon API                 = forbidden
backend dependency                         = none
all-151 direct-interaction breadth in P8   = false
```

The coherent route contains:

1. three fiction-first formative memories and deterministic Origin/Learned Practice resolution;
2. a legal P3 starting specialization;
3. ordinary settlement/social pressure whose immediate cause is not a Pokémon;
4. a persistent millkeeper relationship promise;
5. travel/survival pressure and provision cost;
6. P5 event eligibility/pending/choice/consequence through one shared runtime;
7. Weedle direct ecology with a P3/P5 checked branch;
8. a mixed orchard-keeper motive + Beedrill/Rattata ecology event;
9. a saved return ending with a valid complete `0/3` companion path.

### P8 production browser exit evidence

Validated functional head before final audit/status-only commits:

```text
4aaaf55c979453314f3ce3999aa26f68c1ef1ed6
P8 Batch 05 Validation run 32009086550 = PASS
```

Accepted proof:

```text
Node                       = 24.19.0
npm                        = 11.17.0
Vitest                     = 15 files / 58 tests PASS
Vite                       = 8.0.16
Workbox precache           = 4 files / 206,132 B
production dist            = 8 files / 373,500 B
backend / serverless       = 0 / 0
pokemon_media              = 0
Chromium                   = 151.0.7922.34
WebKit                     = 26.5
phone viewport             = 390x844
P8 backup proofs           = 2/2 PASS
P8 full/check proofs       = 4/4 PASS
P8 physical-offline proofs = 2/2 PASS
P7 resource regression     = 2/2 PASS
P7 save regression         = 2/2 PASS
P7 PWA regression          = 2/2 PASS
```

Both browsers finish the real production Preact route at:

```text
transition_seq       = 7
current_locality     = reedbank-settlement
provisions           = 2
companions           = 0/3
direct_interactions  = 3
zero_companion_flag  = true
```

P8 also proves exact pending reload, committed reload, completed-check reload before later input, canonical P7 backup export/import compatibility, optional-media absence, and exact in-progress P8 pending-save recovery while the production preview origin is physically stopped.

Manual mobile usability evidence is recorded in `docs/P8_BATCH_05_AUDIT.md`: actual presentation source/CSS was reviewed against the six Batch 05 criteria and backed by real `390x844` Chromium/WebKit execution plus automated no-horizontal-overflow and `>=44x44` visible-control measurements. This is not presented as separate physical-device touch-latency certification, and the 2026-08-17 owner playtest proves that those technical usability checks did **not** establish game-like presentation quality.

Final technical invariants:

```text
mixed_world_loop_proven == true
shared_event_engine_proven == true
deterministic_save_reload_proven == true
zero_companion_completion_proven == true
phone_chromium_webkit_proven == true
p6_resource_boundaries_preserved == true
p7_architecture_preserved == true
p9_151_breadth_not_prematurely_claimed == true
```

Evidence:

- `docs/P8_VERTICAL_SLICE_CONTRACT.md`
- `docs/P8_VERTICAL_SLICE_MANIFEST.json`
- `docs/P8_IMPLEMENTATION_PLAN.md`
- `docs/P8_BATCH_01_AUDIT.md`
- `docs/P8_BATCH_02_AUDIT.md`
- `docs/P8_BATCH_03_AUDIT.md`
- `docs/P8_BATCH_04_AUDIT.md`
- `docs/P8_BATCH_05_AUDIT.md`
- `docs/P8_EXIT_AUDIT.md`

## Exact next work

**Finish P8.1 / issue #114 before resuming P9.**

Active sequence:

1. **Batch 01 — Korean game-copy + presentation shell**
   - install the project-owned `.github/skills/korean-game-copy/SKILL.md` rules;
   - rewrite all current Korean prompts/scenes/choices/outcomes/player UI strings;
   - remove P7/P8/authority/determinism/IndexedDB/resource-cache proof language from the player surface;
   - replace the generic centered-card web presentation with a game-like phone HUD / scene / choice hierarchy;
   - retain the P6/P7/P8 technical invariants and rerun full validation.
2. **Batch 02 — meaningful-choice density**
   - audit all current scenes;
   - add `2+` materially distinct choices to ordinary gameplay events where fiction permits;
   - leave one-action buttons only for genuine acknowledgement/transition scenes;
   - use existing P5/P8 authoritative choices/outcomes, never UI-only fake branches.
3. **Batch 03 — player-facing acceptance**
   - rerun Chromium/WebKit phone gates;
   - deploy the corrected build;
   - require another owner playtest before closing #114.

P9 / issue #9 remains queued immediately after #114 passes. Do **not** bulk-author P9 content before then.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #114 P8.1 → #9 P9 → #10 P10`

P10 remains final audit/polish/release-readiness work after P9 content realization.
