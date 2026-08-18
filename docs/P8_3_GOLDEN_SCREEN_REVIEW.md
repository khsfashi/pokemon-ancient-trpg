# P8.3 Windbreak Golden Screen Review

Status: **owner visual review required**. P9 remains blocked.

This batch intentionally redesigns one 390×844 play screen only: `slice.mixed.orchard_boundary` (the windbreak/Beedrill scene). It must not be treated as permission to propagate the presentation language to the rest of the product before owner review.

## Binding references

The visual hierarchy uses two explicit references:

1. the owner-supplied 390×844 AI mock, for scene-first composition, restrained persistent HUD, dark medieval framing, narrative/choice placement, and authored pixel-icon expectations;
2. `모험가 이야기 (Life in Adventure)` as a quality/density reference for a mobile text-RPG that reads as a game rather than a form or slide deck: compact survival information, strong illustration priority, parchment/medieval material cues, and selective pixel typography.

No proprietary UI layout or external game artwork is copied. The windbreak scene is a project-owned raster adaptation created from the owner-supplied reference image for this bounded review.

## Golden-screen contract

At 390×844 the intended priority is:

`scene artwork > current event / narrative > two player choices > persistent HUD`

The golden screen keeps the persistent HUD around 60–80px and exposes only identity, vitality, fatigue/stamina, injury state, and one immediately useful resource (provisions). Attack/Defense/Field readiness, the full resource grid, equipment, attributes, competences, companions, and lethal-state rules are not persistent chrome. Existing deeper profile information remains presentation-only and does not change authority.

The visible windbreak illustration is now a **384×276 PNG raster pixel asset**. The previous SVG remains in the repository as retained pre-golden history but is no longer the active resource for this event. A nearest-neighbour 2× preview is committed beside the evidence for owner inspection.

Long Korean prose uses the production-safe system Korean font stack (`Apple SD Gothic Neo`, `Malgun Gothic`, `Noto Sans KR` fallback chain) while the existing pixel font remains focused on headings, short labels, numbers, and choices.

## Evidence

Native scene asset:

- `public/illustrations/windbreak-orchard.png` — 384×276

Enlarged review preview:

- `docs/evidence/p8-3-golden-screen/windbreak-orchard-preview-2x.png` — 768×552, nearest-neighbour upscale

Authored HUD sprites:

- `src/assets/p8-golden/hud-vitality.png`
- `src/assets/p8-golden/hud-stamina.png`
- `src/assets/p8-golden/hud-injury.png`
- `src/assets/p8-golden/hud-provisions.png`

The `P8.3 Golden Screen Review` GitHub Actions workflow runs the actual browser flow to the orchard at 390×844, asserts the hierarchy/geometry/raster dimensions/icon bindings, and uploads the captured viewport screenshot as `p8-3-windbreak-golden-screen-390x844`.

## Safety boundary

No gameplay/domain/save/narrative authority is changed. Existing functional/browser regressions remain enabled. The new golden-screen test adds assertions rather than weakening or skipping existing acceptance coverage.

After the screenshot artifact is green, stop and wait for owner visual approval or rejection. Do not continue into P9 or expand this design to other screens automatically.
