# P6 Resource Budget and Pipeline Contract

Status: **ACTIVE — P6 Batch 02 measured contract**  
Verified: **2026-08-17**  
Owner phase: **#12 — P6 Resource and asset strategy**  
Manifest: `docs/P6_RESOURCE_MANIFEST.json`

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

Pinned PokéSprite Gen-8 regular samples use a **68×56** canvas.

```text
RGBA8 decoded estimate per icon = 68 * 56 * 4 = 15,232 bytes
three visible companion icons = 45,696 bytes
24-entry decoded LRU = 365,568 bytes
hard compact-icon decoded cache cap = 384 KiB = 393,216 bytes
```

`pokemon_icon` is `on_demand + region_lru`. Do not preload all 151. Reuse one decoded instance per `resource_id`; integer/nearest-neighbor scaling is allowed only when pixel scaling requires it.

## 3. Animated direct-encounter budget

Representative pinned PokéRogue candidate atlases:

| Sample | Atlas | Encoded PNG | RGBA8 estimate |
|---|---:|---:|---:|
| #001 Bulbasaur | 181×181 | 3,157 B | 131,044 B |
| #151 Mew | 225×225 | pinned Git blob | 202,500 B |

These samples do not prove the maximum of all 151. Instead every imported encounter texture must satisfy:

```text
decoded budget per encounter atlas <= 512 KiB
maximum concurrently resident encounter atlases = 2
encounter-atlas decoded cache cap = 1 MiB
```

A source exceeding 512 KiB decoded is not silently resized at runtime. Build/import must normalize reproducibly, select another artifact, or reject that optional enrichment record. Atlas JSON is import input: validate and compile it once; do not reparse it per render.

## 4. Combined optional Pokémon working set

```text
compact icon cache cap     = 384 KiB
encounter atlas cache cap  = 1 MiB
combined decoded image cap = 1.375 MiB
```

Silhouette, shading, cropping, masking and environmental conceal/reveal must reuse the cached base texture. They may not create persistent duplicate Pokémon source textures.

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
7. normalize once at build/import time;
8. validate image dimensions and atlas frame bounds;
9. emit compact indexed runtime metadata keyed by `resource_id`;
10. coalesce duplicate requests and cache one decoded instance.

A hash-late `build_time_fetch` may start from immutable Git-blob/byte-length evidence, but it may not become a distributable `bundled` artifact before SHA-256 is materialized. `metadata_only` Pokémon resources may not become public-bundled merely because a fetch succeeds.

## 7. P7 handoff invariants

```text
resource_lookup = indexed O(1)-equivalent by resource_id
duplicate_downloads = forbidden
duplicate_long_lived_decoded_instances = forbidden
runtime_font_conversion = forbidden
runtime_default_image_resize = forbidden
runtime_atlas_json_reparse_on_render = forbidden
all_151_media_preload = forbidden
pokemon_media_initial_payload = 0
compact_icon_decoded_cache <= 384 KiB
encounter_atlas_decoded_cache <= 1 MiB
p6_owned_initial_resource_payload <= 3 MiB
```

P7 must remeasure on its selected mobile runtime because browser/GPU memory accounting can differ from the conservative RGBA8 estimate. Exceeding a P6 guardrail requires evidence and an explicit contract update rather than silent drift.
