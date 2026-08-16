# P6 Resource and Asset Strategy

Status: **P6 Batch 01 foundation complete; one Human Design Gate remains before exact visual-family selection**  
Owner phase: **#12 — P6 Resource and asset strategy, sourcing, provenance, and mobile budget**  
Contract version: `p6-resource-strategy-v1`  
Manifest schema: `docs/P6_RESOURCE_MANIFEST_SCHEMA.json` (`p6-resource-manifest-v1`)  
Last verified: **2026-08-16**

This document converts the finished P2-P5 product contracts into a production resource contract without choosing the P7 application/runtime architecture.

The game is a mobile-first **text RPG/TRPG**. Resources support readability, state recognition, atmosphere and Pokémon identity; they must not silently turn the product into a sprite-collection interface or make visual/audio media a prerequisite for deterministic gameplay.

---

## 1. Binding principles

1. **Gameplay state is authoritative; presentation resources are not.** Missing optional imagery/audio must never change event eligibility, checks, choices, consequences, save state or RNG.
2. **The public-safe baseline must remain fully playable without uncleared Pokémon image/audio bundles.** Pokémon media may be an optional enrichment layer until redistribution is actually cleared.
3. **Repository/package licenses and underlying Pokémon IP are separate rights layers.** A permissive repository license is not blanket permission to redistribute Pokémon designs, artwork or cries.
4. **Every production resource has one stable `resource_id`.** Runtime lookup, cache identity, validation and provenance all use that ID rather than raw paths or URLs.
5. **Normalize once at build time.** Resize, crop, conversion, subsetting, palette work, indexing and metadata extraction belong in a reproducible build/import step whenever possible.
6. **Load once, reuse many times.** The runtime must coalesce duplicate requests and reuse a cached decoded/downloaded resource instead of constructing duplicate instances for repeated UI/event use.
7. **Preload narrowly.** Initial/common UI plus a bounded current-region/event working set is preferred over loading the whole Gen-I corpus.
8. **No invented mobile budget numbers.** Final payload/memory/cache limits are frozen only after representative selected artifacts are measured.
9. **Do not atlas by habit.** Atlas/index only if measured request/decode/render overhead justifies it for the selected platform/runtime.
10. **Creative presentation choices stay behind Human Design Gates.** P6 may prove technical and rights constraints objectively, but it must not pretend those constraints uniquely determine the game's visual identity.

---

## 2. Product-derived resource requirements

The inventory below is derived from the already frozen product contracts: text-first mobile presentation, deterministic event/check flow, visible `0/3..3/3` companion state, character/resource/status visibility, mixed human/environment/faction/Pokémon events, and a phone-sized first playable slice.

### 2.1 Required for the first production-capable presentation

| Asset class | Requirement | Why it exists | Minimum fallback | Notes |
|---|---|---|---|---|
| Korean + Latin UI font | **REQUIRED** | Long-form Korean text, choices, sheets and logs must render predictably | system sans stack | Self-hosted deterministic subset preferred once measured |
| Generic action/navigation icons | **REQUIRED** | Compact phone UI for back/close/confirm/settings/log where text alone is inefficient | text labels / project CSS marks | Include only icons actually used |
| Dice/check/outcome marks | **REQUIRED** | P3 checks, Fortune/Trouble spikes and result bands need fast recognition | text labels | Prefer project-owned SVG/CSS semantics |
| Human state/resource/status marks | **REQUIRED** | Fatigue, Injury, pooled resources and notable state need compact recognition | text labels | Domain-specific marks should be project-owned where practical |
| Companion-slot presentation | **REQUIRED** | D-013 requires exactly three visible slots including normal empty slots | labeled empty/occupied text blocks | Slot UI itself is project-owned; Pokémon art inside it is separately optional |
| Missing-resource/fallback presentation | **REQUIRED** | Optional resources may be omitted, unavailable or rights-gated | deterministic text/CSS fallback | Failure may not mutate gameplay |

### 2.2 Optional presentation enrichment

| Asset class | Requirement | Intended value | Default fallback |
|---|---|---|---|
| Pokémon encounter image | **OPTIONAL** | Stronger species identity during a meaningful direct encounter | species name + text description |
| Pokémon compact companion/list icon | **OPTIONAL** | Faster recognition in the three slots or bestiary/list UI | name/initial + project mark |
| Location/region background | **OPTIONAL** | Atmosphere and location identity | project color/texture/CSS treatment |
| Event illustration | **OPTIONAL** | Selected high-value story beats | text-only event card |
| UI SFX | **OPTIONAL** | Choice/check/transition feedback | silence + visual feedback |
| Ambient audio | **OPTIONAL** | Settlement/travel/ecology atmosphere | silence |
| BGM | **OPTIONAL** | Long-session mood | silence |
| Type/status/item pictograms | **OPTIONAL** | Scanability where repeated textual labels become noisy | text badges |

### 2.3 Deferred until a measured product need exists

- animated Pokémon battle sprites;
- back sprites;
- shiny sprite families as a baseline requirement;
- Pokémon cries;
- large item-art catalogs;
- full Pokédex-style graphical collection grids;
- whole third-party icon fonts or complete icon packs;
- broad ambience/SFX/music libraries;
- large background/illustration corpora;
- per-event unique illustrations as a default authoring requirement.

`DEFERRED` does not mean forbidden. It means P6 currently lacks a gameplay/presentation benefit large enough to justify the rights, payload, memory, maintenance and authoring cost.

---

## 3. Public-safe baseline and optional local enrichment

### 3.1 Public repository / public build baseline

The public repository may contain:

- project-authored CSS/SVG/UI marks;
- project-owned/generated assets with retained provenance and any required model/source metadata;
- third-party fonts/icons/audio/art only when the exact artifact's license and attribution obligations are explicitly compatible with repository/public distribution;
- provenance manifests, source locators and hashes for Pokémon media whose public redistribution is not cleared.

The public-safe application must remain complete enough to play through the intended loop when every Pokémon visual/cry resource is absent.

### 3.2 Pokémon media default policy

Until a later P6 record proves otherwise for an exact artifact:

```text
pokemon_media_repo_mode == metadata_only
pokemon_media_public_distribution == not_cleared
pokemon_media_is_gameplay_required == false
```

A local developer/owner build may support **explicit optional enrichment** by:

- user-supplied files, or
- an intentional build-time fetch step for a pinned source.

Such a path must keep the source pin and content hash, must not silently upload those resources into public artifacts, and must not be described as blanket legal clearance. Runtime hotlinking is not the default distribution strategy.

---

## 4. P6 source decisions after refresh

P6 refreshes only the P1 shortlist. It does not repeat broad ecosystem discovery.

### 4.1 Pokémon visuals — PokéAPI `sprites`

**P6 decision:** `ADAPT`  
**Role:** optional local encounter/compact-image source candidate, exact family pending `P6-HDG-001`  
**Refreshed upstream head:** `c10459b9b0129eaca5c5d9b1cac65336debb1d08`  
**Public repository default:** metadata only  
**Public distribution default:** not cleared

Why retain it:

- broad machine-addressable Pokémon visual coverage;
- stable species-oriented paths are convenient for deterministic import;
- exact files can be pinned and normalized at build time.

Why it is not simply `ADOPT` for public bundling:

- the repository itself distinguishes its repository licensing from Pokémon image copyrights;
- sprite families combine different provenance layers and styles;
- P6 still needs the owner to choose how much Pokémon imagery the product should display.

If chosen after the Human Design Gate, import only the minimum #001-#151 family needed by the approved presentation. Do not copy the entire upstream repository.

### 4.2 Pokémon compact visuals — PokéSprite

**P6 decision:** `ADAPT`  
**Role:** alternative compact companion/list-icon candidate  
**Refreshed upstream head:** `c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e`  
**Maintenance signal:** current head remains the 2022 documentation state  
**Public repository default:** metadata only  
**Public distribution default:** not cleared

PokéSprite remains technically attractive for compact fixed-size icon/list presentation and machine-readable mappings. Its Pokémon sprite images, however, have an explicit Nintendo / Creatures / GAME FREAK copyright boundary; the MIT license on project code/non-sprite work does not convert those image rights into MIT assets.

If selected, pin exact files and hashes. Do not depend on future upstream maintenance.

### 4.3 Pokémon cries — PokéAPI `cries`

**P6 decision:** `DEFER`  
**Refreshed upstream head:** `ef687b18f0ce17169b4b4c09175819f7ade92f0f`

Cries are technically easy to index by Pokémon ID, but they are not necessary for the text-first deterministic loop and introduce both Pokémon-audio rights complexity and a large recurring audio payload. Revisit only after the visual/mobile slice proves a clear UX value.

### 4.4 Primary UI font — Pretendard

**P6 decision:** `ADOPT` as the primary candidate, **final artifact still measurement-gated**  
**Observed release family:** `1.3.9`  
**License:** SIL Open Font License 1.1

Use Pretendard as the first Korean/Latin candidate because the product is Korean-first and text-heavy. P6 Batch 02 must still measure the actual selected WOFF2/subset deployment and verify the exact license/notice packaging before marking concrete font files `commit_allowed`.

Default direction:

- self-host rather than runtime CDN dependence;
- subset only to the actually supported corpus/character policy when reproducible;
- avoid shipping multiple redundant full font families;
- select the smallest weight set that preserves hierarchy/readability.

### 4.5 Font fallback / coverage baseline — Noto Sans CJK/Korean

**P6 decision:** `ADAPT`  
**License:** SIL Open Font License 1.1

Use Noto Sans CJK/Korean as the coverage and rendering fallback/reference, not as an automatic second full bundled family. If system fallback or Pretendard coverage is sufficient, avoid the duplicate payload.

### 4.6 Generic UI icons — Lucide

**P6 decision:** `ADOPT` for a **small per-icon SVG subset**, subject to exact file pinning  
**Current refresh note:** P1's observed `1.16.0` release is no longer current; P6 observed the `1.27.0` release line.  
**License:** ISC for Lucide work with retained MIT notices for listed Feather-derived work.

Use Lucide only for truly generic interface actions where a familiar icon improves phone usability. Do not use it to define Pokémon/world-specific visual language.

Rules:

- no complete icon-font bundle;
- select only used SVGs;
- normalize SVGs at build time;
- retain required notices;
- pin exact release/files/content hashes in the manifest.

### 4.7 Material Symbols

**P6 decision:** `DEFER` as breadth/reference alternative  
**License:** Apache-2.0

It offers broad coverage and subsetting options, but a second generic icon ecosystem provides little value if a tiny Lucide subset plus project-owned marks satisfies the first playable UI. Reopen only if an actual missing semantic icon justifies it.

### 4.8 Project-owned CSS/SVG

**P6 decision:** `ADOPT` as the default for domain-specific UI marks

Use project-owned marks for dice/check semantics, companion slots, game-specific resources and other concepts where a generic modern icon library would weaken the ancient-world presentation or create needless dependency/provenance surface.

### 4.9 Kenney individual packs

**P6 decision:** `DEFER` pending a concrete asset gap

Kenney remains a low-friction CC0 ecosystem, but importing a pack merely because it is permissively licensed would create unused visual payload and could determine art direction accidentally. Adopt only an exact pack/file after a concrete missing requirement is identified and hash the source archive/extracted files.

### 4.10 Freesound

**P6 decision:** `DEFER` as an individual-sound discovery source only

No site-wide adoption. Any future sound record must pin its stable sound ID, uploader, exact content license, source URL, file hash and attribution/derivative requirements. Prefer CC0 or straightforward compatible attribution terms where equivalent candidates exist. Do not add a runtime Freesound API dependency.

### 4.11 OpenGameArt

**P6 decision:** `DEFER` as an individual-asset discovery source only

OpenGameArt mixes materially different licenses. A collection/search result is never a production license class. Every selected artifact must be individually checked for source provenance, license, attribution/share-alike/derivative implications and final distribution compatibility.

### 4.12 Project-created / generated world presentation

**P6 decision:** `ADOPT` as a production method, not as a blanket asset set

Project-owned backgrounds, textures, event illustrations and UI decoration are preferred where they materially strengthen the proto-Kanto/ancient presentation and third-party reuse would create a style/provenance mismatch.

For generated resources, retain enough metadata to identify the generator/model/tool, source inputs where relevant, creation revision/date and subsequent human edits. P6 does not freeze exact art style or illustration density in Batch 01.

---

## 5. Stable resource identity and provenance manifest

Machine contract: `docs/P6_RESOURCE_MANIFEST_SCHEMA.json`.

Every concrete production artifact gets one semantic ID. Paths, hashes and upstream URLs are attributes of the ID, not the identity itself.

Examples:

```text
font.ui.primary.ko-latn
ui.icon.action.confirm
ui.icon.action.back
ui.mark.check.fortune-spike
ui.mark.check.trouble-spike
ui.mark.companion-slot.empty
ui.mark.companion-slot.occupied
pokemon.025.encounter.front.default
pokemon.025.companion.icon.default
location.proto-kanto.starting-village.background
```

A manifest record must include:

- `resource_id`;
- asset class and required/optional/deferred class;
- source ID / source kind;
- canonical upstream locator;
- exact pin/version and content SHA-256 where a file exists;
- rights holder / author or uploader where applicable;
- exact license label and Pokémon-IP boundary;
- attribution/notice reference;
- repository and public-distribution classification;
- build/fetch/generation mode;
- reproducible preprocessing recipe/version;
- normalized output format/dimensions;
- preload/cache/eviction behavior;
- encoded and decoded-byte measurements once available;
- deterministic fallback.

Unknown rights, missing required provenance or an unknown schema version must fail closed in production validation.

---

## 6. Build-time preprocessing contract

### 6.1 General rules

```text
runtime_resize_as_default == false
runtime_format_conversion == false
runtime_font_conversion == false
runtime_source_manifest_parsing_for_hot_paths == false
duplicate_download_for_same_resource_id == false
duplicate_decoded_instance_for_same_resource_id == false
```

Build/import tooling should emit normalized production assets plus a compact indexed manifest suitable for direct runtime lookup.

### 6.2 Pixel/sprite resources

If `P6-HDG-001` selects sprite use:

- preserve source pixel-grid semantics;
- use integer/nearest-neighbor treatment for actual pixel art unless the selected family explicitly requires a different method;
- crop/pad to a deterministic display box at build time;
- retain source dimensions and normalized dimensions in generated metadata;
- compare lossless PNG and suitable lossless WebP only after representative assets are measured;
- do not generate every unused variation (back/shiny/animated/etc.) merely because the source has it.

### 6.3 Illustration/background resources

- resize to bounded phone presentation classes at build time;
- compare modern compressed formats using representative device/browser support and measured decode behavior in Batch 02;
- preserve one source/master outside runtime payload when edits/rebuilds require it;
- do not preload a region-wide illustration library when only one or two cards are visible.

### 6.4 SVG/icons

- include only the used glyph files;
- sanitize/normalize at build time;
- use project-owned CSS/SVG for domain-specific semantics where practical;
- do not ship a whole icon font for a handful of controls.

### 6.5 Fonts

- self-host the selected deterministic artifacts;
- subset/weight-reduce at build time only through a reproducible recipe;
- keep OFL notices and upstream version/pin;
- avoid two resident full Korean font families unless measured fallback requirements justify them.

### 6.6 Audio

If audio is later adopted:

- normalize sample format/codec/volume policy at build time;
- keep short UI SFX small and reusable;
- stream or on-demand load longer ambience/BGM rather than decoding the entire catalog into memory;
- do not preload all Pokémon cries;
- store per-file duration, encoded bytes and runtime policy in generated metadata.

---

## 7. Runtime lookup, cache and eviction contract

The P7 implementation must preserve these P6 semantics regardless of framework:

1. `resource_id` is the canonical cache key.
2. Concurrent requests for one uncached ID are coalesced into one in-flight load.
3. Once decoded/loaded, repeated consumers share the cached instance according to the runtime's safe ownership model.
4. Required common UI assets may remain resident.
5. Region/event enrichment uses bounded region/event LRU-style lifetime rather than a permanent session-wide accumulation.
6. Leaving a region/event makes non-resident optional resources eligible for eviction; exact thresholds come from Batch 02 measurement.
7. Gameplay state stores semantic resource IDs or domain IDs, never runtime object handles.
8. A missing optional resource returns its manifest fallback and records diagnostics; it does not branch authoritative gameplay.
9. Production runtime should not make remote upstream asset APIs part of the ordinary render path.

Expected complexity:

```text
resource_manifest_lookup == O(1) or equivalent indexed lookup
resource_cache_lookup == O(1) average
per_render_full_manifest_scan == false
per_render_full_species_asset_scan == false
```

---

## 8. Mobile budget methodology

Batch 01 freezes **how budgets are measured**, not imaginary targets.

### 8.1 Initial payload

Measure from the actual production output after preprocessing:

- application code/data separately from resources;
- primary font bytes;
- required common UI bytes;
- first-screen / first-route resources;
- optional enrichment excluded and included as separate scenarios.

Final P6 budgets must report both compressed transfer/package bytes and the resource class that caused them.

### 8.2 Decoded image memory

For an RGBA8 image, use this as a conservative first-order calculation:

```text
decoded_bytes_estimate = width * height * 4
```

Then measure representative real browser/device behavior because decoder surfaces, color formats, animation frames and GPU uploads may differ from the simple estimate.

The Batch 02 report must separate:

- encoded asset size;
- CPU-side decoded/image-object estimate where measurable;
- GPU-side/upload implications where the selected P7 route exposes them;
- simultaneously resident working-set size.

Do not sum all 151 species files as resident memory when the runtime never needs them simultaneously.

### 8.3 Audio memory

Track separately:

- compressed/packaged bytes;
- short resident decoded SFX where applicable;
- streamed/on-demand long-form audio buffers;
- concurrent playback working set.

### 8.4 Preload scope

The default preload model is:

```text
initial = required common UI + current-screen essentials
region = bounded current-region recurring resources
near_future = only explicitly known next/event resources when beneficial
all_151_pokemon_media_preloaded = false
full_audio_catalog_preloaded = false
```

### 8.5 Cache lifetime

Final numerical cache limits must be justified by measured representative devices and content. The policy must expose at least:

- resident common set;
- bounded region LRU;
- smaller event/on-demand LRU;
- explicit eviction diagnostics/test hooks.

---

## 9. Validation contract

P6 Batch 02/exit validation must reject at least:

- duplicate `resource_id` values;
- unknown manifest schema versions;
- missing source/provenance fields for production resources;
- missing exact pin/hash where an imported concrete file should be pinned;
- unknown or internally contradictory rights classifications;
- Pokémon media marked `commit_allowed` / public `allowed` without an explicit reviewed justification;
- required resources whose fallback is unusable;
- optional resources whose absence changes authoritative gameplay;
- two different canonical cache IDs unintentionally pointing at the same logical artifact;
- one logical `resource_id` producing duplicate runtime loads when a cache hit should occur;
- runtime-resize/reconversion requirements that could have been removed by the approved preprocessing recipe;
- unbounded preload lists or full-corpus preload as a convenience default.

A future validator should operate on generated manifests before packaging and should be runnable in CI without downloading rights-gated Pokémon media.

---

## 10. Human Design Gate — P6-HDG-001 Pokémon visual density/family

Technical evidence does not uniquely determine how much Pokémon imagery this **text-first ancient-world RPG** should show. This is a material presentation decision, so Batch 01 stops at this smallest owner gate rather than silently choosing a sprite family.

### Option A — Encounter sprite + compact companion icon (**recommended**)

- meaningful direct encounters display one static Pokémon image;
- the three companion slots / compact list may use a small icon;
- ordinary narrative remains text-first;
- no default animation/back/shiny family.

**Why recommended:** Pokémon identity remains visually immediate without making the product a graphical collector or forcing large image working sets. It also creates a concrete enough Batch 02 sample set to measure both encounter-card and compact-slot paths.

### Option B — Compact icon only

- Pokémon visuals appear only in companion/list/status-scale contexts;
- encounters remain primarily prose/UI marks.

**Tradeoff:** lowest Pokémon-media footprint, but major direct encounters may feel visually underpowered.

### Option C — No Pokémon-derived visual media in v1

- public-safe text/CSS presentation is also the intended v1 presentation;
- Pokémon identity is conveyed through names, prose and project-owned marks.

**Tradeoff:** simplest rights/resource path and smallest payload, but leaves significant presentation value unused in a Pokémon fan project.

### Option D — Project-created/generated encounter illustrations

- replace/reinterpret sprite presentation with project-created/generated illustrations for selected encounters.

**Tradeoff:** strongest bespoke art-direction potential but highest authoring/provenance/style-consistency cost. Not recommended for the first playable resource baseline.

The owner's choice must be recorded in `docs/DECISIONS.md` before P6 freezes exact Pokémon visual files, dimensions and production family.

---

## 11. P7 handoff constraints already frozen by Batch 01

P7 may choose technology only after P6 exit, and its architecture must be capable of:

- semantic `resource_id` lookup independent of raw upstream paths;
- build-time generated/indexed resource manifests;
- deterministic fallbacks;
- self-hosted approved resources;
- optional rights-gated local enrichment without making it mandatory for gameplay;
- coalesced asynchronous load + cache reuse;
- bounded region/event eviction;
- no per-frame manifest/species scans;
- no routine runtime image/font/audio conversion;
- testable loading/memory diagnostics needed to enforce the final P6 budgets.

This document deliberately does **not** choose React, another web framework, PWA packaging, native wrappers, storage architecture or save implementation.

---

## 12. Exact next P6 work after P6-HDG-001

Run **P6 Batch 02 — exact artifact selection + measurement**:

1. record the owner's visual-density decision;
2. select the exact Pretendard artifact/weights/subset plan and verify license packaging;
3. pin the exact Lucide release and only the used icon SVGs;
4. select/project-author the required domain-specific SVG/CSS marks;
5. if Pokémon visuals are selected, choose the exact source family/files for a representative Gen-I sample and classify them as public-safe vs optional local enrichment;
6. generate file SHA-256 values and concrete `p6-resource-manifest-v1` records;
7. run reproducible preprocessing on representative font/icon/image candidates;
8. measure initial resource payload and representative decoded working sets rather than estimating final limits from source catalogs;
9. compare candidate output formats/dimensions using measured encoded/decode/render behavior;
10. freeze numeric initial payload, decoded-image, audio (if any), preload and cache budgets only from those measurements;
11. add executable manifest/rights/duplicate/fallback validation;
12. keep #12 open and P7 blocked until the full P6 exit audit passes.

P6 Batch 01 does not authorize P7 implementation.