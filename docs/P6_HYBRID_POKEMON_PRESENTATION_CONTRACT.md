# P6 Hybrid Pokémon Presentation Contract

Contract version: **p6-hybrid-pokemon-presentation-v1**  
Owner decision: `D-036`  
Owning phase: **P6 / #12**

## Purpose

Freeze the production-facing resource semantics for the owner-approved hybrid Pokémon presentation before P7 chooses a rendering/application architecture.

The product should preserve two different visual jobs:

1. **compact identity** — small, readable Pokémon identity in companion/list/status UI;
2. **direct encounter presence** — animated Pokémon presentation that can remain visually uncertain, obscured or only partly visible until the fiction/player knowledge permits a reveal.

The contract intentionally does not choose a framework, GPU API, CSS strategy, canvas implementation or animation library.

## Resource roles

### `pokemon.compact_identity`

Preferred candidate family: **PokéSprite**.

Intended surfaces:

- three visible companion slots;
- discovered/identified species lists;
- compact relationship/status summaries;
- small identity chips where text alone is not sufficient.

Rules:

- use a deliberately selected compact family, not arbitrary mixed generations/styles;
- exact Gen-I #001-#151 coverage must be audited before adoption;
- do not preload all 151 solely because coverage exists;
- one semantic asset maps to one stable resource ID;
- public distribution remains unapproved until exact files are classified.

### `pokemon.encounter_animation`

Preferred candidate to audit: **B/W-style animated Pokémon sprite-atlas resources exposed by the PokéRogue asset pipeline**.

Current source refresh evidence at the time of this contract:

```text
candidate_repo = pagefaultgames/pokerogue-assets
candidate_branch = beta
observed_revision = 909b43612324622608023b3beb2f24f4ef159c1d
observed_layout = images/pokemon/{pokemon_id}.png + images/pokemon/{pokemon_id}.json
```

The observed `#001` resource uses one PNG texture plus JSON frame metadata with multiple trimmed frame rectangles. This proves technical suitability for a compact frame-atlas encounter candidate; it does **not** prove rights clearance.

P6 Batch 02 must independently verify the exact Gen-I files selected for production and the per-file provenance/license metadata at the frozen revision.

### `encounter.environment`

Project-owned/generated resources may provide:

- location/background art;
- darkness/fog/dust/water/light layers;
- foreground foliage/rock/architecture masks;
- vignette or scene framing;
- exceptional authored story overlays.

These resources must have their own stable IDs and provenance records rather than being embedded as anonymous binary decoration.

## Presentation state

Every encounter presentation exposes one of the following player-safe visual states:

```text
concealed
silhouette
partial_reveal
revealed
identified
```

The state is presentation output derived from authoritative/player-safe game state. It does not own encounter eligibility, species identity, event RNG, bestiary knowledge or relationship state.

### `concealed`

No clean body view is required. Environmental evidence, motion, sound text and authored foreground occlusion may carry the scene.

### `silhouette`

The animation may run while normal sprite color/detail is suppressed. Shape and motion can be visible.

### `partial_reveal`

An authored mask/crop/occluder exposes only part of the animated body or selected readable detail.

### `revealed`

The normal animated sprite can be shown. This does not automatically grant complete species knowledge or force the known species name into UI.

### `identified`

The game may expose the approved compact identity resource and normal known-name presentation when player knowledge allows it.

## Transform model

The base Pokémon source remains immutable. Presentation effects are parameterized/composited around it.

Allowed non-authoritative transforms include:

- alpha/visibility adjustment;
- monochrome/silhouette conversion;
- brightness/contrast/color-grade style shading;
- crop and clip rectangles;
- arbitrary masks where the eventual P7 renderer can support them efficiently;
- foreground occlusion;
- fog/darkness/light/environment overlays;
- reveal interpolation/transitions;
- camera/viewport framing that intentionally places part of the Pokémon off-screen.

The contract does not require a specific blend mode or shader implementation. P7 should choose the cheapest proven implementation that preserves the visible result and mobile budget.

## No derivative explosion

The following model is rejected:

```text
species_015_normal.png
species_015_dark.png
species_015_silhouette.png
species_015_partial_1.png
species_015_partial_2.png
...
```

unless a measured build-time optimization proves a particular precomputed derivative materially cheaper and the manifest records it explicitly.

Default model:

```text
base encounter atlas cached once
+ small reusable presentation parameters/resources
= multiple reveal states
```

This preserves cache reuse and avoids storage/decode duplication.

## Animation behavior

- Animation is presentation-only and must not advance authoritative game time or RNG.
- Reopening/re-rendering the same pending event must not mutate gameplay state merely because animation restarts.
- Frame timing is not a simulation clock for attack cadence, hazard timing or species behavior.
- The renderer may pause animation while off-screen/backgrounded.
- A reduced-motion or static fallback may select a representative frame without changing gameplay semantics.

## Loading/cache contract

```text
all_151_encounter_animations_preloaded == false
all_151_compact_icons_preloaded_by_default == false
resource_cache_identity == resource_id
duplicate_long_lived_decoded_instances_for_same_resource_id == false
runtime_source_format_conversion == false
presentation_transform_creates_new_authoritative_resource_id == false
```

Recommended lifecycle semantics for P7:

1. authoritative P5 transition resolves/continues an event;
2. player-safe presentation determines required resource IDs;
3. loader reuses resident/in-flight resources when present;
4. missing encounter resources are loaded on demand or through a bounded region/event preload;
5. presentation state applies masks/shading/overlays non-destructively;
6. region/event caches become eviction-eligible according to the P6 budget later frozen from measurements.

## Hidden-state safety

Presentation must never reveal a species, visual feature or identity icon simply because debug/authoritative state knows it.

A renderer receives only the player-safe visual mode and approved resource reference. Hidden P5 eligibility predicates, event weights, unrevealed names and debug traces remain outside presentation input.

## Fallbacks

Pokémon-derived media is optional to authoritative play.

Required fallbacks:

- missing compact identity → text/project-owned generic mark;
- missing animated encounter resource → text-first encounter with project-owned atmosphere/placeholder framing;
- animation unsupported/reduced motion → representative static frame when permitted, otherwise text fallback;
- missing background/overlay → neutral project-owned presentation.

Fallback selection cannot alter event outcome, checks, knowledge, companion eligibility or progression.

## Provenance gate

No Pokémon visual candidate is production-approved merely by appearing in PokéSprite, PokéRogue, PokéAPI, Smogon or another public repository.

Before adoption, each selected artifact record must include:

- stable `resource_id`;
- exact upstream project and canonical locator;
- exact commit/tag/content hash;
- SHA-256 of selected source bytes;
- author/rights holder where known;
- license label applying to the selected file/material where determinable;
- explicit Pokémon-IP boundary;
- public repository mode;
- build/distribution mode;
- preprocessing recipe;
- runtime/fallback policy.

If the file-level rights chain cannot be classified confidently, the default remains metadata-only / not-cleared and the public-safe build must continue without it.

## Batch 02 acceptance work

P6 Batch 02 must now:

1. audit and pin one coherent PokéSprite compact family with Gen-I #001-#151 coverage evidence;
2. audit the PokéRogue/B/W-style animated candidate for #001-#151 coverage, atlas shape and per-file provenance/rights metadata;
3. select a small representative species set spanning materially different sprite bounds/frame counts rather than measuring all 151 first;
4. pin exact Pretendard and Lucide artifacts required by the baseline UI;
5. produce concrete `p6-resource-manifest-v1` records with hashes and redistribution decisions;
6. measure encoded payload, decoded texture working set and representative encounter resource load size;
7. measure the incremental cost of compact identity + one encounter animation + normal overlays;
8. freeze numeric mobile payload/cache/decoded-memory budgets only after those measurements;
9. add executable validation for duplicate IDs, source hashes, manifest structure, required fallbacks and illegal public-bundle classifications;
10. keep P7 blocked until P6 exit passes.
