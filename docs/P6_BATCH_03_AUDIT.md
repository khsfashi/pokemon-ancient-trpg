# P6 Batch 03 Audit — Production Import Coverage and Exit Candidate

Date: **2026-08-17**  
Phase: **P6 — Resource and asset strategy**  
Issue: **#12**  
Status: **implementation complete; final verdict depends on the final PR-head CI run**

## Scope

Batch 03 closes the gap intentionally left by Batch 02: representative source measurements are converted into an executable production-import proof against the frozen Pokémon source map.

This batch does not begin P7 and does not add Pokémon image/audio bytes to the repository.

## Implemented production-import proof

`tools/build_p6_production_import_manifest.py` performs the explicit live-source validation step.

### Compact identity — PokéSprite

Frozen pin:

```text
c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e
```

Required proof:

```text
mapping_ids == 001..151
mapping_boundary_152_present == true
resolved_default_compact_path_count == 151
unique_default_compact_path_count == 151
expected_png_canvas == 68x56
sha256_materialized_for_each_fetched_compact_png == true
representative_batch02_hashes_rechecked == true
```

The importer resolves `slug.eng` through the pinned `data/pokemon.json`, fetches only the required default `pokemon-gen8/regular/{slug}.png` files, parses PNG IHDR dimensions without a general-purpose image decoder, and computes SHA-256 in memory.

### Animated encounter candidate — PokéRogue

Frozen pin:

```text
909b43612324622608023b3beb2f24f4ef159c1d
```

Final P6 CI requests `001..151` and requires both:

```text
images/pokemon/{id}.png
images/pokemon/{id}.json
```

For every selected ID the importer validates:

- PNG signature/IHDR and positive dimensions;
- exactly one atlas texture entry naming `{id}.png`;
- atlas `RGBA8888` format;
- metadata texture size equals actual PNG dimensions;
- non-empty frame array;
- unique frame filenames;
- positive integer frame rectangles;
- every frame rectangle stays inside the texture;
- `spriteSourceSize` stays inside `sourceSize` when both are present;
- decoded RGBA8 estimate stays at or below the frozen 512 KiB per-atlas guardrail;
- SHA-256 for both PNG and JSON.

The validator does not reinterpret animation frames as authoritative game time or state.

## No-media public evidence boundary

The production importer deliberately separates **validation input** from **published evidence**:

```text
network_fetch_mode == memory_only
pokemon_media_written_to_output == false
output_contains_metadata_only == true
source_media_embedded == false
pokemon_media_repo_mode == metadata_only
pokemon_media_public_distribution == not_cleared
```

Only the JSON evidence manifest is eligible for the short-lived CI artifact. Pokémon source PNG bytes are not written to the build output by the importer and therefore are not included in that artifact.

## Validator integration

`tools/validate_p6_resources.py` now accepts:

```bash
python tools/validate_p6_resources.py \
  --production-import-manifest build/p6-production-import-manifest.json
```

The produced evidence must prove:

- compact `151/151` ordered coverage;
- animated `151/151` ordered coverage for P6 exit;
- exact frozen source pins;
- valid SHA-256 for every fetched artifact;
- unique compact/animated source paths;
- frozen compact dimensions and representative hashes;
- positive encoded sizes;
- decoded-memory guardrails;
- successful frame-bound validation;
- metadata-only redistribution boundary.

The existing manifest/schema/rights/cache/budget checks remain in the same validation run.

## CI contract

`.github/workflows/p6-resource-validation.yml` now executes, in order:

1. frozen P6 static resource validation;
2. offline importer self-test;
3. live full Gen-I production import using frozen pins;
4. policy validation of the generated metadata-only import manifest;
5. upload of only `build/p6-production-import-manifest.json` as temporary evidence.

The workflow has no write permission to repository contents and has a bounded timeout.

## Performance/implementation notes

- Standard-library implementation; no Pillow/image-decoder dependency is added merely to read PNG dimensions.
- The importer reads only PNG IHDR for dimensions and hashes the original bytes.
- Remote fetches are bounded to at most 16 workers with finite timeout/retry behavior.
- Fetched Pokémon media is not retained on disk by the importer.
- Runtime architecture is still untouched; this is build/validation tooling only.

## Historical strategy reconciliation

`docs/RESOURCE_STRATEGY.md` is updated so it no longer treats `P6-HDG-001` as unresolved or Batch 02 as future work. It now records:

- D-036 as the binding compact + animated encounter presentation decision;
- exact Batch 02 source pins and measured budgets;
- production-import validation semantics;
- final P7 resource/cache handoff constraints.

## Batch 03 gate

Implementation-side Batch 03 requirements are present. The batch is not allowed to declare P6 complete until the final PR-head GitHub Actions run proves the live `151/151` compact and animated checks under the exact frozen pins.

```text
batch03_implementation_ready == true
p6_exit_verdict_before_final_ci == PENDING
p7_may_begin_before_p6_exit == false
```
