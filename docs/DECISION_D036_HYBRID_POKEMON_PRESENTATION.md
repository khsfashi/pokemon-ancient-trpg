# D-036 — Hybrid Pokémon presentation: compact identity + animated concealed encounters

**Status:** ACTIVE  
**Date:** 2026-08-16  
**Human Design Gate:** P6-HDG-001  
**Owner choice:** refined hybrid direction (`E`), superseding the unresolved A–D menu from P6 Batch 01

## Decision

The game will use a **hybrid Pokémon presentation model** rather than choosing one visual family for every surface.

### Compact identity surfaces

Pokémon identity in compact UI surfaces — companion slots, discovered-species lists, relationship/status summaries and similar small-footprint views — should use **PokéSprite-style compact sprites/icons** when the exact selected artifacts pass P6 provenance and redistribution classification.

This is a presentation choice, not permission to vendor PokéSprite wholesale. Exact files, source revision, hashes and rights boundaries remain P6 Batch 02 work.

### Direct encounter presentation

Meaningful direct encounters should use **animated Pokémon sprite assets** rather than a static full-body image by default. The preferred candidate family to audit in P6 is the B/W-style animated-sprite lineage exposed by the current PokéRogue asset pipeline, because it provides a compact sprite-atlas presentation suitable for mobile encounters.

PokéRogue is a provenance/reference path, **not a blanket asset license**. P6 must classify every selected source/file and distinguish franchise-owned source imagery from community-created or transformed material before deciding public-repository or distribution mode.

### Unknown-creature reveal

An encounter must not be forced to reveal a clean, fully lit sprite immediately. The presentation layer may non-destructively transform the same loaded encounter resource to support the intended unknown-creature feeling:

- full silhouette;
- darkening / shading / color grading;
- clipping, cropping and masking;
- foreground occlusion so only part of the body is visible;
- fog, darkness, foliage, water, dust, light and other environmental overlays;
- partial reveal;
- progressive reveal as the event or player knowledge justifies it;
- emphasis on selected visible features where authored presentation calls for it.

These are **presentation transforms**, not new Pokémon forms and not authoritative gameplay mutations.

## Non-destructive resource rule

Do not create a separate derived Pokémon image for every conceal/reveal state merely for convenience.

Preferred model:

```text
one pinned base encounter resource
+ one stable resource_id
+ parameterized presentation state
+ reusable mask/overlay/background resources
= rendered encounter state
```

A renderer may cache compiled/decoded representations where useful, but semantically identical source resources must not be downloaded or decoded into duplicate long-lived instances under different reveal-state names.

## Reveal-state contract

P6 freezes the presentation vocabulary below for downstream implementation:

```text
concealed
silhouette
partial_reveal
revealed
identified
```

- `concealed`: Pokémon body may be wholly occluded; environmental evidence can still be shown.
- `silhouette`: body shape/motion may be visible without normal surface detail.
- `partial_reveal`: only an authored subset of the body/detail is visible.
- `revealed`: normal encounter sprite may be shown, but the player-facing name/knowledge need not be fully resolved.
- `identified`: player-facing identity may use the approved compact identity resource and known name where game state permits.

The exact transition between these modes is owned by event/knowledge state. Presentation must consume **player-safe state only** and must not expose hidden P5 predicates, hidden weights, undiscovered identity, or other debug-authority data.

## Environment and special scenes

Project-owned or generated resources are appropriate for location backgrounds, atmosphere, foreground masks and exceptional scene illustration. They should carry retained generation/authoring provenance where applicable.

Generated full Pokémon illustrations are **not** the default 151-species requirement. A rare bespoke story image may be authored later when justified, but ordinary direct encounters remain based on the hybrid sprite presentation above.

## Mobile/runtime constraints handed forward

- Do not preload animated media for all 151 species.
- Resolve the encounter first, then load the bounded resource set required for that encounter/region.
- Reuse decoded resources by stable `resource_id`.
- Masks, shading and overlays should normally be composited at presentation time instead of materializing many persistent derivative images.
- Build-time normalization remains preferred for source-format conversion, atlas validation and metadata indexing.
- Missing optional Pokémon media must degrade to text/project-owned presentation without changing authoritative gameplay.
- P7 may choose the rendering technology, but it must preserve these resource-identity, caching, conceal/reveal and provenance semantics.

## Rights / public-repository boundary

This decision does not change the P6 Batch 01 default:

```text
pokemon_media_repo_mode_default == metadata_only
pokemon_media_public_distribution_default == not_cleared
```

PokéSprite and animated Pokémon encounter candidates depict or contain Pokémon IP. Open-source code or metadata around an asset does not automatically relicense the underlying Pokémon imagery.

P6 Batch 02 must record exact source revision, file locator, content hash, rights holder/author where known, license label, Pokémon-IP boundary, redistribution mode and fallback before a candidate becomes production-approved.

## Consequence

`P6-HDG-001` is **resolved**. P6 may now continue to exact artifact selection, provenance verification, representative preprocessing and mobile measurement. P7 remains blocked until the full P6 exit audit passes.
