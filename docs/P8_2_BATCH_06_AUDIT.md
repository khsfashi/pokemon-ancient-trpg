# P8.2 Batch 06 Audit — Illustration System

Date: 2026-08-17
Issue: #118
Scope: stable scene illustrations, fallback, cache/provenance guardrails, phone acceptance

## Implemented contract

- Five stable scene illustration resource IDs cover the required opening, travel, Weedle, orchard and return identities.
- The event-to-resource mapping is presentation-only and is derived from the existing stable authored event ID embedded in `NarrativeReveal.presentationKey`.
- `P8SceneIllustration` supports event/locality/NPC/Pokémon/item/equipment slot taxonomy even though this batch only instantiates event/locality/Pokémon subjects.
- Pending scene narration uses a full hero illustration; committed consequence narration can reuse the same cached resource in a compact inline treatment.
- Missing or failed optional media renders a deterministic field-record fallback card and never mutates authority, save data, choice eligibility or RNG state.
- All five current images are repository-authored original SVG placeholders. They intentionally do not copy official Pokémon game art, third-party artwork, proprietary layout, icons or branding.

## P6 resource/cache/budget compatibility

- Stable `resource_id` remains the cache identity.
- Illustrations use the existing P6 full-scene image cache class rather than introducing a parallel cache.
- Current SVGs declare 960x540 intrinsic dimensions. BrowserImageDecoder therefore projects `960 * 540 * 4 = 2,073,600` decoded bytes per image, below the frozen 2 MiB per-resource full-scene cap (`2,097,152`).
- The inherited full-scene cache remains 4 MiB total / maximum two resident entries.
- Illustrations load only when their authored event is being presented. There is no all-151 media preload.
- Base-path resolution uses Vite `BASE_URL`, preserving GitHub Pages subpath deployment.

## Validation added

- `tests/p8-illustrations.test.ts`
  - unique stable resource IDs;
  - provenance and optional/fallback metadata;
  - five required scene identities remain distinct;
  - scene and consequence presentation-key mapping remains authority-independent.
- `e2e/p8-2-illustrations.spec.ts`
  - 390x844 phone opening illustration load;
  - Chromium/WebKit image rendering;
  - no horizontal overflow;
  - forced image-request failure falls back without locking the first authoritative choice.
- `.github/workflows/p8-2-batch06-validation.yml`
  - typecheck;
  - full deterministic unit suite;
  - production PWA build/static validation;
  - Chromium + WebKit illustration acceptance;
  - inherited P8 phone smoke;
  - inherited P8 save compatibility.

## Automated result

Pending PR validation. Record the final GitHub Actions run here before merge.

## Exit decision

Batch 06 can close after the dedicated workflow is green and the inherited P8 regressions remain green. Batch 07 then becomes the first incomplete unblocked P8.2 batch.
