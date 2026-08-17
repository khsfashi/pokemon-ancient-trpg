# P8 Owner Playtest Remediation Contract

Date: **2026-08-17**  
Tracking issue: **#114**

This contract exists because automated technical acceptance is necessary but not sufficient for the intended game. P8 technical integration passed; subsequent owner playtests remain the binding player-facing product gate before P9 content multiplication.

## Playtest history

### First owner playtest

Initial verdict: **the build did not read as a finished game**.

Failures included:

- Korean that read like literal/technical translation;
- generic centered web-card presentation;
- too many one-action main-path scenes;
- engineering/proof language leaking into normal play.

P8.1 Batches 01–03 corrected those baseline problems:

- PR #115 — Korean game-copy baseline + game-like presentation shell;
- PR #116 — materially distinct authoritative choices;
- PR #117 — 390x844 player-facing browser acceptance.

Those batches are complete and must not be repeated by a future `next` request.

### Second owner playtest

Second verdict: **clearly improved, but still not the intended game**.

The owner now explicitly requires:

- substantially more image/illustration presence for immersion;
- scene and travel transitions, including fade-like movement presentation;
- progressive text reveal with tap-to-finish and tap-to-advance semantics;
- a persistent player profile and initial portrait/avatar selection;
- visible survival state including health, provisions and stamina/exertion readability;
- clear game-over / incapacitation / lethal-danger communication;
- visible equipment and attack/defense-like combat-readiness information;
- a medieval-fantasy adventurer farming/preparation loop layered under the Pokémon-first setting;
- Pokémon/ecology-related gear and materials where lore permits;
- another Korean rewrite pass, especially novel-like formative/background creation rather than questionnaire wording;
- deeper benchmarking of StudioWheel's `모험가 이야기` screen composition and information hierarchy without copying proprietary assets or layouts.

The binding implementation sequence and detailed acceptance criteria are in:

**`docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`**

## Product identity after the second playtest

The target is now explicitly:

> **A Pokémon-first, pre-modern / medieval-fantasy-feeling adventure RPG with text-adventure presentation, visual scene identity, survival state, equipment, gathering/preparation, human progression, and rare meaningful Pokémon companionship.**

The human-only `0/3` path must be enjoyable as an adventurer game, not merely technically completable.

Pokémon still shape world ecology, routes, technology islands, materials, beliefs and danger. The project must not become a generic medieval loot RPG with Pokémon pasted on top.

## Korean authoring rule

All current and future Korean player-facing content must use the repo-local `.github/skills/korean-game-copy/SKILL.md` workflow.

The target process remains:

1. humanize / rewrite the thought itself in natural Korean;
2. grammar/spacing review;
3. terminology/style consistency;
4. read-aloud review for rhythm and comprehension.

For character creation, begin from **fictional memory/scene prose**, not a mechanical questionnaire. Choices remain concise, but their setup should let the player inhabit a person and past life.

Korean is an authoring-quality target in its own right; do not preserve awkward English syntax merely for translation symmetry.

## `모험가 이야기` benchmark rule

Use StudioWheel's `모험가 이야기` as a strong benchmark for why a compact text game reads immediately as a game.

Benchmark principles include:

- persistent player/status identity;
- prominent scene illustration;
- clear story-text panel;
- multiple meaningful choices;
- visible stat/equipment/readiness surfaces;
- obvious event consequence and risk cues;
- compact mobile composition.

Do **not** copy proprietary artwork, pixel assets, exact layouts, icons, text, music, branding, or a pixel-perfect screen arrangement.

## Player-surface rules

### 1. Scene before implementation

Player-facing screens prioritize:

1. character / critical expedition state;
2. current locality and scene identity;
3. illustration;
4. narrative beat;
5. known risk/cost/check cues;
6. choices;
7. consequence feedback.

Implementation proof/debug data is not part of normal play.

### 2. Text has performance and interaction rhythm

Narrative should support progressive reveal.

- tap during reveal => finish the current beat immediately;
- tap after reveal => advance to the next authored beat where applicable;
- skipping animation cannot commit a choice;
- rapid taps cannot double-submit;
- reduced-motion users can play without waiting for animation.

Animation completion never evaluates or commits an event by itself.

### 3. Movement should feel like movement

Location/travel changes should use a lightweight fade-out/fade-in or equivalent presentation transition.

Authoritative state transitions remain discrete and deterministic; the animation merely presents a state change that is already governed by the runtime.

### 4. The player must understand their condition

The play surface must provide clear access to:

- portrait/avatar and character identity;
- Vitality/HP readability;
- fatigue/stamina/exertion readability;
- food/provisions;
- injuries and other important pressure;
- current location;
- companion occupancy;
- important attributes/competences through profile detail;
- understandable failure/game-over danger.

Existing P3 `Vitality / Fatigue / Fear / Injuries` is authoritative until explicitly revised. Do not create a duplicate numeric stamina system in presentation code.

### 5. Equipment is a first-class RPG surface

The player needs visible weapons, armor/protection, utility gear and Pokémon/ecology-related field equipment.

The UI should expose an understandable **Attack / Defense-like readiness summary**. Exact formulas must stay compatible with the bounded TRPG model rather than creating one universal gear score.

Equipment should meaningfully affect permissions, approaches, context, hazard protection, harm/injury consequences or bounded combat readiness.

### 6. Farming/preparation is a human progression loop

A zero-companion run needs a repeatable loop around:

`prepare -> travel -> explore/gather/risk -> return -> repair/barter/craft/equip -> prepare again`.

Foraging, scavenging, ethical hunting where valid, ordinary materials, repair inputs, barter/service rewards, camping/rest and equipment improvement are desired.

Pokémon-linked materials/equipment are encouraged only where P4 ecology, D-017 technology islands and D-021/D-028 material ethics support them.

No universal kill-XP or automatic Pokémon loot table is permitted.

### 7. Images are now required for product acceptance

Images/illustrations are no longer merely optional polish for the first-impression gate.

The implementation must provide a stable scene illustration system and meaningful visual identity for important early scenes. Resource acquisition remains governed by P6/provenance/IP constraints, and missing optional media must never change gameplay.

## P8.2 sequence

Future autonomous continuation must follow the first incomplete item in `docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`:

1. Batch 04 — narrative motion + scene transitions;
2. Batch 05 — portrait/profile/expedition HUD;
3. Batch 06 — illustration system;
4. Batch 07 — native-Korean / novel-like creation rewrite;
5. Batch 08 — equipment + combat-readiness surface;
6. Batch 09 — farming/preparation vertical loop;
7. Batch 10 — integrated browser + owner product gate.

P9 is blocked until this sequence's integrated owner gate passes or the owner explicitly changes direction.

## Architecture/performance rules

- event eligibility remains transition-driven, never frame-driven;
- UI animations are presentation-only;
- avoid per-character DOM explosions for text reveal;
- prefer cached/chunked text segmentation and compositor-friendly opacity/transform transitions;
- stable resource IDs own image cache identity;
- no all-151 media preload;
- derived Load/combat/HUD summaries recalculate only on relevant state changes and are reused;
- save format changes require version/migration validation;
- current IndexedDB/PWA/offline/deterministic RNG gates remain mandatory.

## Exit judgment

Automated tests remain necessary but are not sufficient.

P8 owner remediation exits only after the integrated owner replay confirms that the first several minutes:

- look and move like an actual game;
- read naturally in Korean;
- clearly communicate player identity, health/exertion/resources and danger;
- provide visual scene immersion;
- provide satisfying equipment/preparation/progression even at `0/3` companions;
- retain Pokémon as the defining causal fabric of the world.
