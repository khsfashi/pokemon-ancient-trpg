# P6 Resource Budget and Pipeline Contract

Status: **ACTIVE — P6 Batch 03 full-coverage measured contract**  
Verified: **2026-08-17**  
Owner phase: **#12 — P6 Resource and asset strategy**  
Manifest: `docs/P6_RESOURCE_MANIFEST.json`  
Full Pokémon source measurement: `docs/P6_POKEMON_RESOURCE_SOURCE_MAP.json`

This contract converts the P6 strategy and D-036 into numeric resource guardrails without choosing the P7 framework. These are resource-pipeline budgets, not claims about total application bundle size or exact browser/GPU accounting.

## 1. Frozen baseline payload

The public-safe initial presentation has a hard **3 MiB (3,145,728 byte)** P6-owned resource budget.

Measured fixed inputs:

| Resource | Exact source bytes |
|---|---:|
| Pretendard Variable WOFF2 v1.3.9 | 2,057,688 |
| Lucide back + confirm + settings + close | 1,347 |
| Pokémon image/audio initial preload | 0 |

The cap leaves more than 1 MiB headroom for normalized project-owned marks, notices and packaging overhead while preventing a second full Korean/CJK font or whole icon pack from entering by convenience.

Rules:

- one Pretendard variable WOFF2 is the baseline Korean/Latin font;
- Noto remains fallback/reference, not a second full bundled family by default;
- only the four pinned Lucide SVGs are generic baseline icons;
- game-domain marks are project-owned deterministic CSS/SVG resources;
- Pokémon visuals/cries are never initial preload or required public-bundle resources.

## 2. Compact Pokémon identity budget

Pinned PokéSprite Gen-8 regular files for National Pokédex `001..151` use a **68×56** canvas.

```text
RGBA8 decoded estimate per icon = 68 * 56 * 4 = 15,232 bytes
three visible companion icons = 45,696 bytes
24-entry decoded LRU = 365,568 bytes
hard compact-icon decoded cache cap = 384 KiB = 393,216 bytes
```

`pokemon_icon` is `on_demand + region_lru`. Do not preload all 151. Reuse one decoded instance per `resource_id`; integer/nearest-neighbor scaling is allowed only when pixel scaling requires it.

## 3. Animated direct-encounter budget

### 3.1 Why the Batch 02 sample cap changed

Batch 02 measured only #001 and #151 and explicitly warned that those samples did **not** prove the maximum across all 151. Its provisional 512 KiB per-atlas cap was therefore a hypothesis to test in Batch 03, not a reason to discard valid source coverage.

Batch 03 fetched and structurally validated every pinned Gen-I PNG+JSON pair. Results:

```text
animated ids validated = 151/151
metadata layout distribution = texture-array-v1: 150, root-frames-meta-v1: 1
metadata format distribution = RGBA8888: 150, I8: 1
source atlases above old 512 KiB estimate = 25
maximum source atlas = #085 Dodrio
maximum source dimensions = 673x673
maximum conservative RGBA8 decoded estimate = 1,811,716 bytes
```

A trial deduplicating shelf-repack still left 20 species above 512 KiB, so adopting a custom repacker merely to defend the provisional sample cap would add complexity without solving the real constraint cleanly. P6 therefore chooses the simpler evidence-backed policy: use the validated source atlas directly and size the bounded runtime cache from the complete measurement.

### 3.2 Final animated budget

```text
decoded budget per encounter atlas <= 2 MiB = 2,097,152 bytes
maximum concurrently resident encounter atlases = 2
encounter-atlas decoded cache cap = 4 MiB = 4,194,304 bytes
```

The measured maximum has about 285 KiB of headroom below the 2 MiB guardrail. Two worst-case measured atlases fit below the 4 MiB cache cap.

This removes the need for runtime resize, runtime atlas repack, or a custom build-time repacker solely for memory compliance. Atlas JSON is import input: validate it once and compile/index what the selected P7 renderer needs; do not reparse it per render.

If a later source revision exceeds 2 MiB decoded, it must be rejected, normalized reproducibly, or accompanied by a new measured contract update. Silent budget drift is forbidden.

## 4. Combined optional Pokémon working set

```text
compact icon cache cap     = 384 KiB
encounter atlas cache cap  = 4 MiB
combined decoded image cap = 4.375 MiB = 4,587,520 bytes
```

Silhouette, shading, cropping, masking and environmental conceal/reveal must reuse the cached base texture. They may not create persistent duplicate Pokémon source textures.

This is still a bounded working set: all 151 atlases remain on-demand and at most two encounter atlases may be resident simultaneously.

## 5. Currently omitted classes

Baseline budgets remain zero for classes not required by the first production-capable presentation:

```text
initial Pokemon media payload = 0
Pokemon cry payload = 0
BGM payload = 0
ambience payload = 0
UI-SFX payload = 0
required raster location/event illustration payload = 0
```

Location/event raster art remains optional project-owned/generated enrichment. Adoption requires representative measurement before it can enter the required baseline or resident cache.

## 6. Build/import pipeline

For every external resource:

1. resolve semantic `resource_id`;
2. resolve exact canonical repository + frozen commit/tag + path;
3. fetch only selected files, not whole corpora by default;
4. verify recorded content hash or immutable Git-blob evidence;
5. compute SHA-256 before producing a distributable bundled artifact;
6. verify rights/provenance before changing public-distribution mode;
7. normalize only when measurement proves normalization is necessary;
8. validate image dimensions, metadata layout and every atlas frame bound;
9. emit compact indexed runtime metadata keyed by `resource_id`;
10. coalesce duplicate requests and cache one decoded instance.

A hash-late `build_time_fetch` may start from immutable Git-blob/byte-length evidence, but it may not become a distributable `bundled` artifact before SHA-256 is materialized. `metadata_only` Pokémon resources may not become public-bundled merely because a fetch succeeds.

For the current pinned Gen-I animated family, Batch 03 proves that **no resize/repack is required for the final 2 MiB per-atlas budget**. Avoid preprocessing work that has no measured benefit.

## 7. P7 handoff invariants

```text
resource_lookup = indexed O(1)-equivalent by resource_id
duplicate_downloads = forbidden
duplicate_long_lived_decoded_instances = forbidden
runtime_font_conversion = forbidden
runtime_default_image_resize = forbidden
runtime_atlas_repack = forbidden
runtime_atlas_json_reparse_on_render = forbidden
all_151_media_preload = forbidden
pokemon_media_initial_payload = 0
compact_icon_decoded_cache <= 384 KiB
per_encounter_atlas_decoded <= 2 MiB
max_resident_encounter_atlases = 2
encounter_atlas_decoded_cache <= 4 MiB
combined_optional_pokemon_decoded_image_working_set <= 4.375 MiB
p6_owned_initial_resource_payload <= 3 MiB
```

P7 must remeasure on its selected mobile runtime because browser/GPU memory accounting can differ from the conservative RGBA8 estimate. Exceeding a P6 guardrail requires evidence and an explicit contract update rather than silent drift.
