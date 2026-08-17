# Project Status

Last operational handoff update: **2026-08-17 19:17 KST**

This file is the concise operational handoff. Durable authority remains in `docs/DECISIONS.md`, phase contracts, owner-playtest contracts, and live GitHub state. If this file and live state disagree, reconcile the file before advancing.

## Current continuation command

The repository owner intentionally advances work with short requests such as:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
```

For that request, **do not ask the owner to repeat context**. Read `AGENTS.md`, this file, live PR/issue state, active issue **#118**, and `docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`, then execute the first incomplete unblocked P8.2 batch.

## Binding product direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG.
- Pre-regional-civilization proto-Kanto; earlier than the normalized Hisui-era human/Pokémon relationship.
- Iron-age / medieval-fantasy-like ordinary material baseline with narrow Pokémon-dependent technology/culture islands.
- Exactly three visible companion slots; `0/3` remains a valid and fully playable complete run.
- Mandatory Generation-I roster is National Pokédex `#001-#151`; P9 still owns total authored living direct-interaction breadth.
- Pokémon remain the setting's defining world force and must not become generic fantasy monsters.
- The human player must also have a satisfying **adventurer loop without a Pokémon companion**: preparation, equipment, survival, exploration, gathering, repair, barter, risk management and return-to-settlement progression.
- P5 deterministic event/state/RNG rules remain authoritative.
- P6/P7 resource, cache, PWA, save and mobile performance boundaries remain binding unless explicitly revised with measured evidence.

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
P8.1 first owner remediation          BATCHES 01-03 COMPLETE / #114 CLOSED
P8.2 second owner remediation         ACTIVE / #118 / BLOCKING P9
P9 Content expansion                  BLOCKED
P10 Mobile/release                    QUEUED
```

## P8.1 work already completed — do not repeat

Closed issue: **#114**.

The first owner playtest rejected the original P8 as too technical, poorly localized, web-card-like and choice-light.

Completed remediation:

- **PR #115 / Batch 01** — native-Korean rewrite baseline + game-like phone presentation shell;
- **PR #116 / Batch 02** — ordinary scenes expanded to materially distinct authoritative choices;
- **PR #117 / Batch 03** — 390x844 player-facing browser acceptance for game framing/HUD/choices/touch sizing/no implementation jargon;
- Chromium/WebKit, deterministic save/reload, bilingual presentation, PWA/offline and inherited P7 regressions passed;
- public GitHub Pages deployment was updated after #117.

Do **not** restart these batches on a generic `next` request.

## P8.2 — second owner playtest active blockers

Active issue: **#118 — Owner playtest expansion: visuals, motion, profile, equipment and adventurer loop**.

The 2026-08-17 second owner replay judged P8.1 materially better but still below the intended game experience.

Owner feedback now requires all of the following:

1. **More visual immersion**
   - current image density is insufficient;
   - important scenes need illustration identity;
   - inline illustrations between narrative beats are desirable where useful;
   - player should choose an initial portrait/avatar.

2. **Better Korean / novel-like creation**
   - some Korean remains awkward or hard to understand;
   - creation prompts feel too questionnaire-like;
   - formative memories/background selection should read like short fiction scenes;
   - Korean should be authored for natural rhythm, not translated from English syntax.

3. **Text and scene motion**
   - narrative text progressively reveals;
   - tap during reveal = immediately finish current beat;
   - tap after reveal = advance to the next sentence/beat when authored;
   - travel/location transitions should use lightweight fade-out/fade-in or equivalent;
   - reduced-motion support remains mandatory;
   - animation must never become authoritative gameplay state.

4. **Persistent player profile / state readability**
   - portrait and identity should remain visible or one tap away;
   - health/HP readability, food/provisions, stamina/exertion readability, attributes/current values and danger/game-over conditions must be understandable;
   - existing P3 `Vitality / Fatigue / Fear / Injuries` remains authoritative until explicitly revised; do not add a duplicate stamina authority silently.

5. **Equipment and RPG stats**
   - visible weapons, armor, utility/accessory and Pokémon/ecology-related equipment are desired;
   - attack/defense-like player-facing combat readiness should be visible;
   - exact formulas must preserve the existing bounded TRPG model and must not create an MMO gear-score treadmill or player-scaled wild Pokémon.

6. **Medieval-fantasy adventurer farming/preparation loop**
   - gathering, foraging, scavenging, valid hunting, repair, crafting inputs, barter, provisioning, camp/rest and equipment improvement should form a repeatable human loop;
   - Pokémon-linked equipment/materials are encouraged when justified by P4 ecology / D-017 technology islands;
   - defeating Pokémon must not automatically produce generic loot or XP.

7. **Deeper `모험가 이야기` benchmarking**
   - benchmark scene illustration hierarchy, persistent character/status area, readable narrative panel, visible equipment/stats, choices and consequence cues;
   - do not copy proprietary art/assets/text/branding or pixel-perfect layouts.

Binding full plan: **`docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`**.

## Exact next work

**P9 must not start. The first incomplete P8.2 batch in #118 owns the autonomous continuation lane.**

Default sequence:

1. **Batch 04 — narrative motion + scene-transition foundation**
   - typewriter/reveal beats;
   - tap-to-complete and tap-to-advance semantics;
   - rapid-tap / double-submit protection;
   - fade travel transitions and light scene crossfades;
   - reduced-motion path;
   - no timer/frame-driven event evaluation.

2. **Batch 05 — player portrait + persistent profile / expedition HUD**
   - initial avatar selection;
   - portrait + Origin/Practice/specialization;
   - Vitality current/max;
   - Fatigue presented with clear stamina/exertion meaning;
   - Fear/Injuries when relevant;
   - Provisions/Remedies/Materials;
   - Load, locality, companion slots;
   - expandable seven-attribute/competence profile;
   - understandable incapacitation/critical-injury/death danger help.

3. **Batch 06 — illustration system + scene visual identity**
   - stable illustration resource IDs;
   - event/locality/NPC/Pokémon/item illustration slot;
   - optional inline art beats;
   - missing-media fallback;
   - P6 provenance/cache/budget compliance;
   - opening/travel/Weedle/orchard-return scenes receive distinct visual identity or deliberate placeholders.

4. **Batch 07 — native-Korean narrative pass + novel-like creation**
   - rewrite three formative prompts as short narrative memory scenes;
   - second full Korean game-copy pass;
   - read-aloud naturalness review;
   - short idiomatic choice labels;
   - preserve deterministic hidden lifepath mapping unless explicitly revised.

5. **Batch 08 — equipment slots + combat-readiness summary**
   - authoritative stable item/equipment IDs;
   - weapon/body armor/accessory or protective wearable/utility/Pokémon-field gear surfaces;
   - attack/defense-like derived readiness;
   - bounded formulas from human stats/competence/equipment/preparation/context;
   - Load/save/cache integration.

6. **Batch 09 — medieval-fantasy farming / preparation loop**
   - settlement preparation -> travel -> gather/forage/salvage/hunt where valid -> risk -> return -> repair/barter/craft/equip -> depart again;
   - ordinary materials, provisions path, repair/material path, exchange/service reward, equipment improvement and at least one Pokémon-linked opportunity;
   - camp/rest/recovery tied to existing survival rules;
   - no generic kill-XP or automatic Pokémon loot.

7. **Batch 10 — integrated automated + owner playtest gate**
   - Chromium/WebKit 390x844;
   - animation skip/advance/reduced-motion/transition safety;
   - profile/equipment/resources persistence;
   - illustration fallback;
   - PWA offline pending-save regression;
   - owner verifies that the combined first several minutes finally feel like the intended game.

## Performance / architecture guardrails for P8.2

- No per-frame event scans.
- No gameplay transition triggered by animation completion alone.
- Avoid per-character DOM trees for typewriter text; segment once and reuse.
- Prefer compositor-friendly opacity/transform for motion.
- Derived Load/combat/HUD summaries update on relevant state mutation and are cached/reused.
- Stable resource ID owns image cache identity; repeated portraits/icons/equipment images reuse cached instances.
- Do not preload all 151 Pokémon media.
- Missing optional media cannot change gameplay.
- Save schema changes require explicit versioning/migration coverage.
- Rapid taps must not double-commit authoritative choices.

## Key existing rule compatibility

Do not accidentally replace these while implementing the owner's new UX direction:

- `Vitality 0` means **Incapacitated**, not automatic death.
- Fatigue/Fear/Injuries are existing P3 survival pressure state.
- Equipment already belongs to the D-028 individual-item + Load model; expand it rather than inventing a parallel inventory.
- Defeating/killing Pokémon grants no universal XP or generic loot.
- Ordinary Pokémon do not scale with player equipment/progression.
- Pokémon companions remain physical relational partners, never inventory.

If the desired player-facing stamina or attack/defense model truly requires changing an existing P3/P4 contract, update the relevant contract and `docs/DECISIONS.md` explicitly before implementation rather than hiding the change in UI code.

## Core technical handoff still frozen

Architecture contract: `p7-architecture-v1`.

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
```

Resource boundaries and exact P8 technical evidence remain in:

- `docs/P6_EXIT_AUDIT.md`
- `docs/P7_EXIT_AUDIT.md`
- `docs/P8_EXIT_AUDIT.md`
- `docs/PLAYTEST_REMEDIATION.md`
- `docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`

## Later roadmap

`#1 P0 -> #2 P1 -> #3 P2 -> #4 P3 -> #5 P4 -> #6 P5 -> #12 P6 -> #7 P7 -> #8 P8 -> #114 P8.1 -> #118 P8.2 owner acceptance -> #9 P9 -> #10 P10`

P9 resumes only after **#118 closes** or the owner explicitly changes the roadmap.
