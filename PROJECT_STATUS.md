# Project Status

Last operational handoff update: **2026-08-17 23:11 KST**

This file is the concise operational handoff. Durable authority remains in `docs/DECISIONS.md`, phase contracts, owner-playtest contracts, and live GitHub state. If this file and live state disagree, reconcile this file before advancing.

## Current continuation command

The repository owner intentionally advances work with short requests such as:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
```

For that request, **do not ask the owner to repeat context**. Read `AGENTS.md`, this file, live PR/issue state, active issue **#118**, and `docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`, then finish the first incomplete unblocked P8.2 batch.

## Binding product direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG.
- Pre-regional-civilization proto-Kanto with an iron-age / medieval-fantasy-like ordinary material baseline and narrow Pokémon-dependent technology/culture islands.
- Exactly three visible companion slots; `0/3` remains a valid and fully playable complete run.
- The human player must have a satisfying adventurer loop without a Pokémon companion: preparation, equipment, survival, exploration, gathering, repair, barter, risk management and return-to-settlement progression.
- Pokémon remain the setting's defining world force, not generic fantasy monsters.
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
P8.2 second owner remediation         BATCHES 04-08 IMPLEMENTED+VALIDATED / PR #124 READY / BATCH 09 NEXT AFTER MERGE / #118 / BLOCKING P9
P9 Content expansion                  BLOCKED
P10 Mobile/release                    QUEUED
```

## P8.2 owner remediation

Active issue: **#118 — Owner playtest expansion: visuals, motion, profile, equipment and adventurer loop**.

The owner replay requires the first several minutes to look and move like a real game, read naturally in Korean, communicate player/survival state clearly, use illustrations for immersion, support equipment/preparation/progression at `0/3` companions, and still feel fundamentally Pokémon-shaped.

Implemented and validated work — do not repeat:

- **PR #120 / Batch 04** — progressive narrative reveal, tap-to-complete/advance isolation, rapid-submit guard, scene/travel transitions, reduced-motion parity.
- **PR #121 / Batch 05** — portrait selection, persistent expedition/profile HUD, Vitality/Fatigue/Fear/Injuries/resources/Load/locality/companions, danger semantics.
- **PR #122 / Batch 06** — stable on-demand scene illustrations, existing P6 loader/cache reuse, missing-media fallback, first-run visual identities.
- **PR #123 / Batch 07** — three formative memory scenes, concise action choices, second native-Korean pass, stable-ID/lifepath preservation, questionnaire/proof-language regression guards.
- **PR #124 / Batch 08** — stable notable equipment IDs, five slots, D-028 carried Load integration, bounded Attack/Defense/Field readiness, cached derived projection, `p8-authority-v2` save migration, Korean equipment HUD. PR is validated and ready for review; merge before starting Batch 09 on `main`.

Audits:

- `docs/P8_2_BATCH_04_AUDIT.md`
- `docs/P8_2_BATCH_05_AUDIT.md`
- `docs/P8_2_BATCH_06_AUDIT.md`
- `docs/P8_2_BATCH_07_AUDIT.md`
- `docs/P8_2_BATCH_08_AUDIT.md`

### Batch 08 validation

Dedicated workflow **`P8.2 Batch 08 Validation`** run **`32038047344`**: **PASS**.

Verified:

- strict TypeScript + full deterministic unit suite + production PWA build;
- authoritative stable equipment inventory plus five slot assignments;
- deterministic guard-item swap changes only declared readiness/effect surfaces while carried Load remains unchanged;
- D-028 notable-item + pooled-resource Load accounting and cached projection reuse;
- explicit `p8-authority-v1 -> p8-authority-v2` migration and v2 round-trip;
- Chromium/WebKit phone HUD shows Attack/Defense/Field readiness, five equipped items and carried spare gear;
- Korean equipment/readiness copy and 390px overflow acceptance;
- P8 backup/save-resume compatibility and inherited zero-companion phone smoke;
- inherited P8 Authority Runtime and P7 architecture validations remain green.

## Exact next work

### Batch 09 — medieval-fantasy farming / preparation loop — NEXT AFTER PR #124 MERGE

```text
settlement preparation
-> choose equipment/provisions
-> travel/explore
-> gather / forage / salvage / hunt when valid
-> encounter human/Pokémon/environmental risk
-> spend health/stamina/resources or gain materials/knowledge
-> return to settlement
-> repair / barter / craft / improve equipment / prepare again
```

Must include ordinary materials, provisions, repair/crafting input, barter/service reward, an equipment improvement choice, at least one Pokémon-linked opportunity justified by P4/D-021/D-028, and camp/rest/recovery. No generic kill-XP or automatic Pokémon loot.

### Batch 10 — integrated automated + owner product gate

- Chromium + WebKit 390x844 full run;
- animation skip/advance/reduced-motion/transition safety;
- portrait/profile/equipment/resources persistence;
- illustration fallback;
- PWA offline pending-save regression;
- owner replay confirms the combined experience is ready for P9 multiplication.

## Architecture / performance guardrails

- No per-frame event scans.
- No gameplay transition triggered by animation completion alone.
- Avoid per-character DOM trees for typewriter text; segment once/cache/reuse.
- Prefer opacity/transform transitions; `will-change` only while needed.
- Stable resource ID owns image cache identity; do not preload all 151 Pokémon media.
- Missing optional media cannot change gameplay.
- Derived Load/combat/HUD summaries update only on relevant authoritative state mutation and should be cached/reused.
- Save schema changes require explicit versioning/migration coverage.
- Rapid taps must not double-commit authoritative choices.

## Key rule compatibility

- `Vitality 0` means **Incapacitated**, not automatic death.
- Fatigue/Fear/Injuries remain existing P3 survival pressure state.
- Equipment belongs to the D-028 individual-item + Load model; expand it rather than creating a parallel inventory.
- Defeating/killing Pokémon grants no universal XP or generic loot.
- Ordinary Pokémon do not scale with player equipment/progression.
- Pokémon companions remain physical relational partners, never inventory.

## Core technical handoff

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

Key references:

- `docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`
- `docs/PLAYTEST_REMEDIATION.md`
- `docs/P8_EXIT_AUDIT.md`
- `docs/P7_EXIT_AUDIT.md`
- `docs/P6_EXIT_AUDIT.md`

Roadmap remains:

`#1 P0 -> #2 P1 -> #3 P2 -> #4 P3 -> #5 P4 -> #6 P5 -> #12 P6 -> #7 P7 -> #8 P8 -> #114 P8.1 -> #118 P8.2 owner acceptance -> #9 P9 -> #10 P10`

P9 resumes only after **#118 closes** or the owner explicitly changes direction.