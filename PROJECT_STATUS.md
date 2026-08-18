# Project Status

Last operational handoff update: **2026-08-18 14:20 KST**

This file is the concise operational handoff. Durable authority remains in owner decisions/contracts and live GitHub state. If this file disagrees with live state, reconcile it before advancing.

## Current continuation command

The owner intentionally advances work with short requests such as:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
```

For that request, **do not ask the owner to repeat context**. Read `AGENTS.md`, this file, issue **#128**, issue **#118**, D-037 and the P8.3 contracts, then inspect live PR/CI state and continue the first incomplete P8.3 slice.

Do **not** resume P9 merely because the former P8.2 automated gate was green. The final owner replay explicitly rejected the deployed product experience.

## Binding product direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG.
- Pre-regional-civilization proto-Kanto; local craft/culture may be sophisticated while regional integration remains primitive.
- Exactly three visible companion slots; `0/3` remains a valid and fully playable complete run.
- Human-only adventurer play must be satisfying through preparation, equipment, survival, exploration, gathering, repair, barter, risk management and return-to-settlement progression.
- Pokémon remain the setting's defining world force, not generic fantasy monsters or names pasted onto a generic medieval RPG.
- Narrative prose is now treated as a **primary gameplay production system**. Large content jobs must use bounded, reviewable authoring sessions rather than giant one-shot generation.
- Visual direction is now a coherent **high-resolution pixel-art language that still reads strongly medieval/pre-modern**, including illustrations, portraits, Pokémon presentation, items/equipment, HUD icons and ornament.
- Typography should visually belong to that pixel-game language while preserving multi-minute Korean reading comfort.

## Phase status

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
P4 Pokémon adaptation + Gen-I 151     COMPLETE
P5 Narrative world-event engine       COMPLETE
P6 Resource/asset/provenance/budget   COMPLETE
P7 Technical architecture / web-PWA   COMPLETE
P8 First playable vertical slice      TECHNICAL COMPLETE
P8.1 first owner remediation          COMPLETE / #114 CLOSED
P8.2 second owner remediation         AUTOMATED GATE COMPLETE / OWNER REPLAY REJECTED / #118 OPEN
P8.3 product-feel + authoring reset   ACTIVE / #128 / BLOCKING P9
P9 Content expansion                  BLOCKED
P10 Mobile/release                    QUEUED
```

## What P8.2 already implemented — do not blindly repeat

- PR #120 / Batch 04 — progressive narrative reveal, tap isolation, rapid-submit guard, scene/travel transitions, reduced motion.
- PR #121 / Batch 05 — portrait selection and expedition/profile HUD.
- PR #122 / Batch 06 — stable on-demand scene illustrations and fallbacks.
- PR #123 / Batch 07 — fiction-first creation and second Korean copy pass.
- PR #124 / Batch 08 — equipment slots, Load integration and bounded readiness projection.
- PR #125 / Batch 09 — bounded preparation/risk/camp/return/improvement/barter loop.
- PR #126 — P8 runtime CI consolidation.
- PR #127 / Batch 10 — integrated product-gate regression; final automated gate passed.

The owner replay after #127 nevertheless rejected the product feel. Green browser tests are therefore **not sufficient evidence** for P8.3 exit.

## Owner replay rejection — binding problems

1. First screen feels like a PowerPoint opening slide rather than a game.
2. Korean prose remains tangled/non-native/translation-like; typography and line breaking are unattractive.
3. HUD is scroll-heavy, text-only and not glanceable. `모험가 이야기` hierarchy/reference was not materially reflected. Important state needs icon language and a controlled narrative scroll region.
4. Opening `Load 7/5 overloaded` is a bug/rules-mismatch candidate that must be audited.
5. Transitions are too clean/modern/fast; scene art/text shadow layering can reduce text readability.
6. Current imagery is too clean/modern/presentation-like.
7. The prepare/risk/return/grow loop does not yet create compelling advancement motivation; choices lack sufficient requirements/gates and route/destination pressure.
8. Pokémon ecology/threat is not vivid enough in prose. Physical posture, motion, sound, distance, environment reaction and danger must be concretely described.
9. The first several minutes are not compelling enough to continue.

## Active issue — #128 P8.3

Issue #128 owns both the product-feel reset and the reusable narrative production system.

Binding decision: `docs/DECISION_D037_NARRATIVE_FACTORY_AND_PIXEL_ART.md`.

Key contracts:

- `docs/P8_3_NARRATIVE_AUTHORING_FACTORY.md`
- `docs/P8_3_AUTHORING_CANON_DIGEST.md`
- `docs/P8_3_PIXEL_ART_AND_TYPOGRAPHY_DIRECTION.md`

### Narrative factory

GitHub is the durable remote queue. The owner must be able to trigger work without touching the local terminal.

Target flow:

```text
remote GitHub authoring request
  -> owner self-hosted runner
  -> local orchestrator
  -> fresh Codex CLI process for planning/session unit
  -> schema + deterministic QA
  -> commit/push that unit immediately
  -> next fresh session
```

If Codex reaches a recognized usage/rate/credit limit:

```text
current stable session -> awaiting_chatgpt
completed prior sessions stay committed
ChatGPT @GitHub continuation -> completes the same session ID/context
local Codex may resume later at the next session
```

Provider changes never create a new story identity.

Default authoring envelopes:

- ordinary scene: ~2,500–4,500 Korean characters;
- connected encounter arc slice: ~4,000–6,500;
- worldbuilding slice: ~4,500–7,500;
- hard default ceiling: 8,000 player-facing Korean characters per session.

A ~200k-character topic should become many sessions. Context injection uses compact canon/style context + continuity ledger + dependency summaries; full prior prose is included only when dependency relevance requires it.

A rejected individual session must be independently revisable while preserving its stable ID and auditing downstream continuity impact.

### Pixel-art / typography direction

The `모험가 이야기` reference means more than “pixel graphics”: **detailed/high-quality pixel graphics should still make the medieval-fantasy atmosphere immediately obvious**.

Unify:

- scene/key illustrations;
- locality/travel art;
- Pokémon presentation;
- human portraits;
- equipment/items/resources;
- HUD icons/borders/ornament;
- relevant effects.

Avoid pixel Pokémon pasted over smooth painterly/vector/photographic scenes and avoid modern glass/card UI around medieval content.

Initial font candidates for licensed evaluation:

- NeoDunggeunmo / Neo둥근모 — HUD, buttons, headings, compact state;
- NeoDunggeunmo Pro / Neo둥근모 Pro — longer Korean prose candidate.

Both candidates require P6 provenance/version pinning and actual 390px phone readability tests before final adoption.

## Exact P8.3 implementation sequence

1. **Factory contract + schemas + local orchestrator skeleton + lightweight validation.**
2. **Remote GitHub issue queue -> self-hosted runner -> local Codex worker**, with per-unit push and graceful failure state.
3. **ChatGPT fallback/handoff implementation** for `awaiting_chatgpt` and plan/session completion using the same files.
4. **Revision/dependency-impact commands** so one bad session can be regenerated without throwing away an entire topic.
5. **Pilot topic** through multiple sessions; measure Korean quality, context size and handoff behavior.
6. **UI/HUD/typography reset** toward game-like, icon-first, pixel-medieval presentation and controlled narrative scrolling.
7. **Load 7/5 audit/fix** and other owner-replay usability defects.
8. **Transition + high-resolution pixel illustration pipeline remediation**, including image/text layer separation and generated-art normalization/provenance.
9. **Progression/gating loop reinforcement**: prepare -> risk -> return -> improve -> unlock with clearer conditions, route pressure and growth motivation.
10. **Rewrite/regenerate the opening vertical slice through the new authoring factory.**
11. New owner replay. Only a positive owner decision may close #118/#128 and unblock P9.

## ChatGPT continuation rule for authoring

When a ChatGPT `@GitHub` request mentions an authoring topic or generic continuation:

- first inspect active #128 implementation PRs;
- then inspect active `authoring/<topic-id>` branches/issues;
- if a topic contains `awaiting_chatgpt_plan` or a session contains `awaiting_chatgpt`, finish that exact pending unit before inventing a new one;
- preserve IDs, dependency structure, size budget and context bundle;
- write the same authoring artifacts and QA metadata expected from Codex;
- do not regenerate already accepted sessions unless the owner asked for revision/cascade.

## Core technical handoff

```text
primary target        = web/PWA
backend               = none
build runtime         = Node 24.x LTS
package manager       = npm + committed lockfile
build tool            = Vite 8.x
language              = strict TypeScript
presentation          = Preact 10.x only
authoritative runtime = framework-independent pure TypeScript
save storage          = IndexedDB
unit tests            = Vitest
browser tests         = Playwright
local authoring       = Python stdlib orchestrator + Codex CLI
remote authoring      = GitHub issues/actions + owner self-hosted runner
```

Architecture/performance guardrails from P7/P8 remain binding: no per-frame event scans, no animation-owned gameplay commits, explicit save migration, bounded caches, stable resource IDs and no all-151 media preload.

P9 resumes only after **#118/#128 owner acceptance** or an explicit owner direction change.
