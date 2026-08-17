# P6 Batch 03 Audit — Production Import Coverage and Exit

Date: **2026-08-17**  
Phase: **P6 — Resource and asset strategy**  
Issue: **#12**  
Status: **PASS**

## 1. Scope

Batch 03 converts the representative Batch 02 resource assumptions into an executable full-production-import proof against the frozen Pokémon source pins. It does not add Pokémon image/audio bytes to the repository.

Validated candidate:

```text
head == 95787eda4c1c04aeb27c4acb0c4256c12206e85b
P6 Resource Validation run == #30
workflow conclusion == success
```

## 2. Compact identity proof

Frozen PokéSprite pin:

```text
c5aaa610ff2acdf7fd8e2dccd181bca8be9fcb3e
```

The successful importer proved:

```text
mapping_ids == 001..151
mapping_boundary_152_present == true
resolved_default_compact_path_count == 151
unique_default_compact_path_count == 151
expected_png_canvas == 68x56
sha256_materialized_for_each_compact_png == true
representative_batch02_hashes_rechecked == true
```

Files are fetched in memory and only metadata evidence is written.

## 3. Animated encounter full-coverage proof

Frozen PokéRogue-assets pin:

```text
909b43612324622608023b3beb2f24f4ef159c1d
```

For every National Pokédex ID `001..151`, the successful importer validated both:

```text
images/pokemon/{id}.png
images/pokemon/{id}.json
```

It checks PNG IHDR dimensions, metadata-declared image/size/format, non-empty frames, unique frame filenames, every frame rectangle, `spriteSourceSize` bounds when present, and SHA-256 for both PNG and JSON.

## 4. Full-data discoveries

### 4.1 Provisional 512 KiB atlas cap was too small

The first live run correctly caught #003 exceeding the provisional Batch 02 `512 KiB` decoded-atlas threshold. Full `001..151` measurement established:

```text
animated_pairs_validated == 151/151
source_atlases_above_old_512_KiB == 25
max_source_atlas == #085
max_source_dimensions == 673x673
max_conservative_RGBA8_bytes == 1,811,716
```

A deterministic source-rectangle dedupe/shelf-repack experiment still left **20** species above `512 KiB`, with #085 still around `1.65 MiB`. P6 therefore rejects custom repacking merely to preserve an invalid sample-derived cap.

### 4.2 Two pinned metadata layouts exist

#047 uses a valid root `frames + meta` Aseprite-style layout instead of the `textures[]` layout observed in the original samples. Full measurement established:

```text
texture-array-v1 == 150
root-frames-meta-v1 == 1
RGBA8888 metadata == 150
I8 metadata == 1
```

The importer supports only those two layouts observed at the frozen pin and validates their declared dimensions/image/format against the actual PNG.

## 5. Final measured mobile budget

```text
p6_owned_required_initial_resource_payload <= 3 MiB
pokemon_media_initial_payload == 0
compact_icon_decoded_cache <= 384 KiB
per_encounter_atlas_guardrail <= 2 MiB
max_resident_encounter_atlases == 2
encounter_atlas_decoded_cache <= 4 MiB
combined_optional_pokemon_decoded_image_working_set <= 4.375 MiB
```

Rationale:

- measured worst pinned Gen-I source atlas: `1,811,716 B`;
- final per-atlas cap: `2,097,152 B`;
- two worst-case measured atlases remain below the `4 MiB` event cache cap;
- all 151 atlases remain on-demand;
- no runtime resize or repack is required;
- no custom build-time repacker is required solely for memory compliance.

## 6. No-media public evidence boundary

```text
network_fetch_mode == memory_only
pokemon_media_written_to_output == false
output_contains_metadata_only == true
source_media_embedded == false
pokemon_media_repo_mode == metadata_only
pokemon_media_public_distribution == not_cleared
```

Run #30 uploaded only `p6-production-import-manifest`, a metadata JSON evidence artifact. Pokémon source PNG bytes are never written by the importer.

## 7. Validator and CI proof

Run #30 completed all workflow stages successfully:

1. static P6 validation;
2. offline importer self-test;
3. live full Gen-I production import;
4. validation of the produced metadata manifest;
5. metadata-only evidence upload.

The produced evidence proves:

- compact `151/151` ordered coverage;
- animated `151/151` ordered coverage;
- exact frozen source pins;
- valid SHA-256 for every fetched artifact;
- unique source paths;
- compact `68x56` dimensions;
- both pinned animated metadata layouts and measured distribution;
- every animated frame/source rectangle is valid;
- exactly 25 pinned atlases exceed the superseded `512 KiB` sample cap;
- pinned maximum remains #085 `673x673 / 1,811,716 B`;
- **zero** atlases exceed the final `2 MiB` guardrail;
- two worst-case atlases fit the `4 MiB` cache cap;
- generated evidence remains metadata-only.

## 8. Performance notes

- no general-purpose image decoder is added merely to read PNG dimensions;
- PNG IHDR is parsed directly and original bytes are hashed;
- network work is bounded to 16 workers with finite timeout/retry behavior;
- Pokémon media is not retained on disk by the importer;
- normal runtime has no upstream network dependency;
- no runtime resize/repack/format conversion is introduced;
- `resource_id` remains the O(1)-equivalent lookup/cache identity;
- all 151 media preload remains forbidden.

## 9. Batch 03 verdict

```text
compact_full_import == PASS
animated_full_import == PASS
full_gen1_budget_measurement == PASS
metadata_only_evidence_boundary == PASS
final_per_atlas_guardrail == 2 MiB
final_encounter_cache_cap == 4 MiB
batch03 == PASS
```

P6 may advance to its exit verdict; P7 may begin only after `docs/P6_EXIT_AUDIT.md` is also `PASS` and #12 is closed.
