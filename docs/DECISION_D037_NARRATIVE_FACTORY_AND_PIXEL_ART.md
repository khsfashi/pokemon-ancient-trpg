# D-037 — Bounded dual-worker narrative factory + high-resolution medieval pixel-art direction

**Status:** ACTIVE  
**Date:** 2026-08-18  
**Owner source:** P8.2 final owner replay / P8.3 #128

## Decision

Narrative prose is a primary gameplay system for Pokémon Ancient TRPG and must not be produced as giant one-shot generation jobs. Large topics are partitioned into bounded, independently persisted authoring sessions with explicit character/paragraph targets, dependency summaries, continuity artifacts, QA and owner-review identity.

The same authoring-session contract must be executable by both:

- a **local Codex CLI worker** running on the owner's computer through a self-hosted GitHub runner; and
- **ChatGPT through GitHub** as a fallback/alternate worker.

Changing worker must never change the stable topic/session identity or implicitly re-plan/reroll already-authored story state. GitHub repository state is the durable handoff boundary between products.

Remote authoring requests must be possible without the owner touching the local terminal. GitHub issues/actions act as the initial durable queue. Each completed local authoring unit is committed/pushed before the next begins so PC shutdown, runner failure or provider usage exhaustion cannot erase prior completed sessions.

When Codex reaches a recognized usage/rate/credit limit, the current unit becomes `awaiting_chatgpt`; previously completed units remain valid. ChatGPT continuation must finish that same pending session using its saved spec/context, not invent a replacement session.

Individual bad sessions must be independently revisable. Revision preserves session ID, increments revision, refreshes summary/continuity and marks only affected downstream dependencies for continuity review unless an explicit cascade regeneration is requested.

## Default authoring-size direction

Initial production envelopes are deliberately conservative:

- ordinary scene: roughly 2,500–4,500 player-facing Korean characters;
- encounter/connected arc slice: roughly 4,000–6,500;
- worldbuilding slice: roughly 4,500–7,500;
- default hard ceiling: 8,000 player-facing Korean characters per authoring session unless an explicit profile overrides it.

These are quality-control defaults, not lore rules, and may be tuned from measured owner review. A ~200k-character topic should normally become many fresh sessions rather than a few oversized generations.

## Korean prose direction

Player-facing Korean must read as native Korean rather than translationese. Prefer clear sentence structure, controlled mobile paragraphs, concrete geography and physical causality. Choices should read as actions rather than questionnaire answers. Pokémon threats should be described through posture, movement, sound, distance, environmental response and viable counterplay rather than merely naming the species.

## Visual direction

The owner additionally freezes a coherent **high-resolution pixel-art** direction.

The `모험가 이야기` reference is specifically valued because its dot/pixel graphics can be detailed/high-quality while still conveying a strong medieval-fantasy atmosphere. Pokémon Ancient TRPG should pursue that principle without copying proprietary artwork, exact layouts, icons, text, frames, music or branding.

Opening/key art, locality/travel scenes, encounter illustrations, human portraits, Pokémon presentation, equipment/items, HUD icons and ornaments should converge on one pixel-rendering language. Existing Pokémon pixel resources should feel native to surrounding art rather than pasted over smooth painterly/vector/photographic backgrounds.

“Pixel” does not mean crude low-resolution 8-bit output. Detailed lighting, material, environmental storytelling and larger high-resolution pixel compositions are allowed and desired as long as pixel boundaries/rendering remain intentional and coherent.

The medieval/pre-modern proto-Kanto feeling must be carried through material, lighting, clothing, tools, architecture, vegetation, weather, settlement scale and Pokémon-shaped ecology — not merely parchment colors or a post-process pixelation filter.

## Typography

Typography must visually belong to the pixel-game language while preserving long-form Korean readability. Public/free fonts with verified licenses are required.

Initial candidates approved for evaluation are:

- **NeoDunggeunmo / Neo둥근모** for strong pixel-identity HUD, labels, buttons, headings and compact numeric state;
- **NeoDunggeunmo Pro / Neo둥근모 Pro** as a proportional pixel-derived candidate for longer Korean narrative text.

Both are distributed by their official project under SIL Open Font License 1.1. Final inclusion must still follow P6 provenance/version pinning and phone readability validation. Pixel identity must not override readable multi-minute prose.

## Consequences

- P9 content multiplication remains blocked until P8.3 owner acceptance.
- P8.3 first establishes the authoring factory and art/typography contract, then uses them to rewrite/regenerate the opening vertical slice and remediate the game frame/HUD/motion/progression loop.
- Generated imagery is permitted only as a production aid; accepted output must be normalized/validated into the pixel-art resource contract with provenance tracked.
- Runtime gameplay authority remains separate from authoring provenance and presentation workers.

Binding implementation documents:

- `docs/P8_3_NARRATIVE_AUTHORING_FACTORY.md`
- `docs/P8_3_AUTHORING_CANON_DIGEST.md`
- `docs/P8_3_PIXEL_ART_AND_TYPOGRAPHY_DIRECTION.md`
- issue #128
