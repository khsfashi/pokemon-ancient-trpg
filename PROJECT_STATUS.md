# Project Status

Last operational handoff update: **2026-08-19 10:55 KST**

This file is the concise operational handoff. Durable authority remains in owner decisions/contracts and live GitHub state. If this file disagrees with live state, reconcile it before advancing.

## Current continuation command

The owner intentionally advances work with short requests such as:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
```

For that request, **do not ask the owner to repeat context**. Read `AGENTS.md`, this file, issue **#139**, draft PR **#140**, issue **#128**, issue **#118**, and `docs/P8_3_PRODUCT_ACCEPTANCE_AND_FIRST_PLAY.md`, then inspect live PR/CI state.

Do **not** resume P9 merely because automated gates are green. The former P8.2 automated gate passed and the owner still rejected the product experience.

## Binding product direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG.
- Pre-regional-civilization proto-Kanto; local craft/culture may be sophisticated while regional integration remains primitive.
- Exactly three visible companion slots; `0/3` remains a valid and fully playable complete run.
- Human-only adventurer play must be satisfying through preparation, equipment, survival, exploration, gathering, repair, barter, risk management and return-to-settlement progression.
- Pokémon remain the setting's defining world force, not generic fantasy monsters or names pasted onto a generic medieval RPG.
- Narrative prose is a primary gameplay production system, but Narrative Factory infrastructure is only a means to ship good content.
- Visual direction is a coherent high-resolution pixel-art language that reads immediately as medieval/pre-modern game presentation.
- Typography must preserve multi-minute Korean reading comfort.

## Acceptance model — binding owner rule

The project has two separate gates.

### Engineering gate

Examples: crash/parse safety, deterministic state parity, save correctness, viewport/input regression, resource/provenance validity and CI/build green.

### Product gate

Owner-visible questions: does it look like a game, is Korean natural/readable, is HUD state glanceable, is scene composition coherent, do choices create pressure/consequence, does Pokémon ecology feel physical/dangerous, does growth motivate another run, and does the player want to continue.

> **Engineering PASS + Product FAIL = FAIL.**

Automated validation may protect implementation safety. It cannot approve product feel.

See `docs/P8_3_PRODUCT_ACCEPTANCE_AND_FIRST_PLAY.md`.

## Phase status

```text
P0 Governance                         COMPLETE
P1 Reference/API/data/resource/IP     COMPLETE
P2 World bible and setting contract   COMPLETE
P3 Core TRPG rules/character model    COMPLETE
P4 Pokémon adaptation + Gen-I 151     COMPLETE
P5 Narrative world-event engine       COMPLETE
P6 Resource/asset/provenance/budget   COMPLETE
P7 Technical architecture / web-PWA   COMPLETE AS MIGRATION ORACLE
P8 First playable vertical slice      TECHNICAL COMPLETE
P8.1 first owner remediation          COMPLETE / #114 CLOSED
P8.2 second owner remediation         AUTOMATED GATE COMPLETE / OWNER REPLAY REJECTED / #118 OPEN
P8.3 product-feel reset               ACTIVE / #128 / #139 / #140 / BLOCKING P9
P9 Content expansion                  BLOCKED
P10 Mobile/release                    QUEUED
```

## Why P8.3 remains active

The owner replay after P8.2 rejected the product despite green browser tests. Binding problems included:

1. first screen reading like a PowerPoint/web presentation rather than a game,
2. tangled/non-native Korean prose and unattractive typography/line breaking,
3. scroll-heavy text-only HUD rather than glanceable game hierarchy,
4. opening `Load 7/5 overloaded` rules/usability defect,
5. overly clean/modern transitions and readability conflicts,
6. presentation-like imagery instead of coherent pixel-medieval scene composition,
7. weak prepare/risk/return/grow motivation and insufficient gates/route pressure,
8. Pokémon ecology/threat not concrete enough in posture/motion/sound/distance/environment reaction,
9. first several minutes not compelling enough to continue.

These are product failures, not closed merely by technical regression passes.

## Current exact gate — #139 / PR #140 Godot architecture spike

PR #140 intentionally implements only two 390×844 owner-review surfaces:

- opening/title,
- `slice.mixed.orchard_boundary` windbreak/Beedrill.

It preserves TypeScript authority as the migration oracle and proves representative parity/save behavior. The real P6 Beedrill resource remains a separately composed runtime layer; project-owned environment/human/foreground/UI resources remain recomposable.

### Stop rule before architecture decision

Do not add another broad presentation shell, Narrative Factory subsystem, P9 content lane or full Godot campaign port before the owner reviews these two real Godot surfaces.

The remaining question is product/architecture fit, not more CI infrastructure.

### Architecture decision

If Godot is materially better:

- adopt Godot as the production game client,
- keep TypeScript/web temporarily as deterministic migration oracle and retained negative/reference evidence,
- port authority in bounded parity slices,
- converge to **one gameplay authority** once the required runtime/save/content contracts are covered,
- do not maintain TypeScript gameplay and Godot gameplay as two permanent independently evolving authorities.

If Godot is rejected, preserve the spike as evidence and continue the web path with the learned presentation constraints.

A hybrid is allowed only when web is tooling/preview/convenience distribution, not a second gameplay authority.

## First-play product lane after the architecture decision

The previous phase-count roadmap is no longer sufficient to judge P8.3. The next product milestones are owner-visible time slices:

```text
#139 / PR #140 architecture owner gate
 -> #144 First 3 Minutes
 -> #145 First 10 Minutes
 -> #146 First 30 Minutes
 -> owner decision to unblock P9
```

### #144 — First 3 Minutes

Must deliver one coherent flow:

```text
title/resume
 -> character/world introduction
 -> first movement/travel action
 -> concrete Pokémon danger/ecology signal
 -> first consequential choice
```

Owner acceptance asks whether it immediately reads as a game, Korean is natural, HUD/next action are glanceable, tension appears quickly and the player wants to continue.

### #145 — First 10 Minutes

Must deliver one complete expedition loop:

```text
prepare
 -> depart / route pressure
 -> windbreak / Beedrill encounter
 -> meaningful risk/loss/reward
 -> return
 -> equipment/resource/growth change
 -> clear reason for another expedition
```

The player should be able to explain what their decision changed and why a second expedition is desirable.

### #146 — First 30 Minutes

Extend only after #145 acceptance with a second meaningfully different expedition, new location/ecology, another Pokémon encounter pattern, visible payoff from prior growth, stronger settlement/world progression and credible future Pokémon relationship potential without turning collection routine.

The goal is retention and world interest, not raw content count.

## Narrative Factory — demand-driven freeze

The existing authoring factory, bounded sessions, stable IDs, continuity ledger and provider handoff remain available. They are production tools, not the product goal.

Do **not** add a new factory schema, dependency-analysis feature, provider handoff layer or orchestration abstraction because a future ~200k-character corpus might need it.

A factory extension now requires a retained real production failure, for example:

- revising a real accepted/rejected session actually breaks downstream continuity,
- a real multi-session topic exceeds context budget under the current digest strategy,
- an actual provider handoff loses stable session identity,
- current QA repeatedly misses a concrete Korean-language defect class.

Then fix only the smallest recurring problem and return to product/content work.

## Product priority until #145 acceptance

Priority order is:

1. product feel and readability,
2. actual gameplay/progression motivation,
3. player-facing content quality,
4. engineering defects blocking those goals,
5. production tooling only when a retained real authoring failure justifies it.

Architecture completeness, factory completeness and green automation are not substitutes for this order.

## Visual/resource direction

The `모험가 이야기` reference means more than pixel graphics: detailed/high-quality pixel graphics must still make the medieval/pre-modern atmosphere immediately obvious.

Unify scene art, locality/travel art, Pokémon presentation, human portraits, items/equipment, HUD icons/borders/ornament and relevant effects. Avoid pixel Pokémon pasted over smooth painterly/vector/photographic scenes and avoid modern glass/card UI around medieval content.

Godot composition remains layered:

```text
environment/background
 -> human/adventurer
 -> P6 Pokémon sprite/animation
 -> foreground occlusion/weather/atmosphere
 -> game UI / narrative / choices
 -> transition overlay
```

Do not bake Pokémon + background + UI + localized text into a single generated production screen.

## Core technical handoff during architecture decision

```text
production client     = PENDING #139 OWNER DECISION
Godot spike           = Godot 4.x / GDScript / 390x844 mobile composition
migration oracle      = existing pure TypeScript runtime + save/content fixtures
legacy web client     = retained until Godot adoption/parity decision
legacy build runtime  = Node 24.x LTS / Vite 8 / strict TypeScript / Preact 10
legacy save           = IndexedDB
engineering tests     = Vitest + Playwright + Godot parity/visual-contract smoke
narrative authoring   = Python stdlib orchestrator + Codex/ChatGPT handoff
```

Performance/architecture guardrails remain binding: no per-frame event scans, no animation-owned gameplay commits, explicit save migration, bounded caches, stable resource IDs and no all-151 media preload.

## Continuation rule

On the next `@GitHub pokemon-ancient-trpg 다음 작업 진행해줘`:

1. inspect PR #140 and #139 first;
2. do not invent a new presentation/factory lane while the two-screen owner gate is unresolved;
3. finish only work required to produce/review the real-P6 Godot owner evidence and make the architecture decision;
4. after the decision, proceed through #144 -> #145 -> #146 with owner product acceptance at each boundary;
5. P9 remains blocked until #146 acceptance or an explicit owner direction change.
