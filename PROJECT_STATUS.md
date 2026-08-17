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

## Active P8 handoff

P8 issue: **#8 — First playable vertical slice**.  
Integration contract: **`p8-vertical-slice-v1`**.  
Batch 01 / PR #106 is merged on `main` as `c73a5a103876d1c36e1ec2b48608d3ea66d63c46`.  
Batch 02 / PR #107 is merged on `main` as `cd30ddb4d989b60cf7e2f58a2428a10a524c8ded`.  
Current review: **Batch 03 / PR #108** (`codex/p8-batch03-authored-slice`).

Batch 01 freezes only the implementation/integration envelope. It does not freeze a final major faction identity, exact local canon, or the final P9 species/event breadth.

Required first-slice envelope:

```text
primary settlement                         = 1
meaningfully distinct local/ecology areas >= 2
formative character prompts                = 3
curated Origins                            >= 4
curated Learned Practices                  >= 4
curated Pokémon proving set                = 3..8
visible companion slots                    = 3
zero-companion completion                  = required
all-151 direct-interaction breadth in P8   = false
shared P5 event engine for all pillars     = required
runtime remote Pokémon API                 = forbidden
```

P8 implementation order:

```text
Batch 01 vertical-slice contract/guards                       MERGED
Batch 02 authoritative gameplay runtime                       MERGED
Batch 03 coherent authored slice content + deterministic replay REVIEW #108
→ Batch 04 phone Preact + save/resource integration
→ Batch 05 Chromium/WebKit full-run proof + P8 exit audit
```

### Batch 02 authority foundation

Batch 02 provides the framework-independent authority foundation required before story-specific UI grows:

- exact P3 human seven-Attribute character state and deterministic formative resolver;
- legal four-increase / cap-3 / distinct-competence starting specialization;
- exact P3 `2d6 + Attribute + Competence + Context` static checks using the existing P5 RNG primitive;
- frozen P3 bands: setback `<= -3`, costly `-2..-1`, full `0..+2`, exceptional `>= +3`;
- cached trigger-index P5 candidate lookup and pure no-RNG eligibility;
- deterministic integer-weight event selection with 0/1 candidate no-RNG behavior;
- exact `event.select` subject `eval:<ordinal>` and independent keyed-stream draw indexes;
- deterministic SHA-256-derived pending instance identity plus pinned choice/check/RNG provenance;
- a closed typed P2/P3/P4 command subset with aggregate atomic prevalidation;
- event count/cooldown/recent-history/chain bookkeeping and ordered post-commit triggers;
- headless direct + checked event proof with exact `0 → 1 → 2` transition sequencing;
- frozen P5 weighted-selection and hazardous-check vectors pinned in the production-path tests.

Batch 02 validated functional head before workflow/audit-only commits:

```text
f751238d4ed5d8147adfecec5300e5ad4715b976
P8 Authority Runtime Validation run 32004406948 = PASS
P8 integration guard                              = PASS
strict TypeScript                                 = PASS
all Vitest fixtures                               = PASS
P7-compatible production build regression         = PASS
```

### Batch 03 authored deterministic slice

PR #108 now provides the first coherent authored production-shaped proving pack on the Batch 02 authority surface:

- normalized source: `content/p8/vertical-slice.source.json`;
- local/disposable canon scope with `durableCanonClaims = []`;
- three fiction-first formative prompts with deterministic hidden tags;
- four approved local Origins and four approved local Learned Practices;
- P4-traced proving subset: Weedle #013, Beedrill #015, Rattata #019;
- seven once-per-run P5 events spanning ordinary human pressure, persistent relationships, travel/survival, Pokémon ecology/direct interaction, mixed human motive + ecology, and ending inputs;
- typed `p2.world.commit_locality_transition` rather than direct story-side world mutation;
- build-time generated trigger indexes and content digest;
- reusable cached runtime event catalog initialized once;
- compact headless replay inputs with per-transition pre/post authority SHA-256 evidence;
- complete deterministic `0/3` route and alternate checked branch;
- repeated identical execution yielding equivalent replay checkpoints and serialized authority state;
- no required Pokémon media dependency and no P9 faction identity claim.

Generated content identity:

```text
content_pack_id       = p8.reedbank-slice
content_pack_version  = 1
content_digest_sha256 = d19921e11a6015fdfd7da211d1f813386d23bc8637ecb300f724b6afac81eac5
```

Validated functional head before audit/status-only commits:

```text
a3eb8c828a9129c725eff7a33b2c925a63c64b10
P8 Vertical Slice Validation run 32005741392 = PASS
P8 Authority Runtime Validation run 32005741329 = PASS
P7 Batch 02 Validation run 32005741379 = PASS
P7 Batch 04 Validation run 32005741332 = PASS
source/generated semantic check             = PASS
strict TypeScript                           = PASS
deterministic authority/replay fixtures     = PASS
P7-compatible production build regression   = PASS
```

P8 must consume the frozen P1-P7 contracts instead of reopening them casually. The vertical slice must prove a phone-sized mixed-world loop with:

1. settlement/social pressure;
2. travel/survival;
3. a persistent faction/relationship thread;
4. Pokémon ecology/direct interaction;
5. the complete deterministic event/save/reload path;
6. a valid complete `0/3` companion path;
7. resource presentation through the P6/P7 cache and optional-media boundaries.

P8 must not interpret the current generated proving pack as permission to make any Pokémon permanently unreachable. The long-form P9 content expansion still owns the complete breadth of living direct-interaction paths for all `151/151` species.

Evidence:

- `docs/P8_VERTICAL_SLICE_CONTRACT.md`
- `docs/P8_VERTICAL_SLICE_MANIFEST.json`
- `docs/P8_IMPLEMENTATION_PLAN.md`
- `docs/P8_BATCH_01_AUDIT.md`
- `docs/P8_BATCH_02_AUDIT.md`
- `docs/P8_BATCH_03_AUDIT.md`

## Exact next work

**Finish P8 Batch 03 / PR #108 review and merge. After merge: P8 Batch 04 — phone-sized Preact flow + authoritative save/resource integration.**

Do not move gameplay truth into Preact state. Batch 04 must render derived views and dispatch typed intents, persist normal/pending authority at explicit commit boundaries, and resolve optional Pokémon media only through the frozen P6/P7 resource path.

## Later roadmap

`#1 P0 → #2 P1 → #3 P2 → #4 P3 → #5 P4 → #6 P5 → #12 P6 → #7 P7 → #8 P8 → #9 P9 → #10 P10`

P9 must realize substantive world-content breadth and all 151 living direct-interaction paths. P10 is final audit/polish/release-readiness work.
