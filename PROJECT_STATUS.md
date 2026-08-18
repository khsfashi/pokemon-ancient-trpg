# Project Status

Last operational handoff update: **2026-08-18 12:05 KST**

This file is the concise operational handoff. Durable authority remains in `docs/DECISIONS.md`, phase contracts, owner-playtest contracts, and live GitHub state. If this file and live state disagree, reconcile this file before advancing.

## Current continuation command

The repository owner intentionally advances work with short requests such as:

```text
@GitHub pokemon-ancient-trpg 다음 작업 진행해줘
```

For that request, **do not ask the owner to repeat context**. Read `AGENTS.md`, this file, live PR/issue state, active issue **#118**, and `docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`, then finish the first incomplete unblocked P8.2 work.

## Binding product direction

- Unofficial, non-commercial Pokémon fan-made mobile text RPG/TRPG.
- Pre-regional-civilization proto-Kanto with an iron-age / medieval-fantasy-like ordinary material baseline and narrow Pokémon-dependent technology/culture islands.
- Exactly three visible companion slots; `0/3` remains a valid and fully playable complete run.
- The human player must have a satisfying adventurer loop without a Pokémon companion: preparation, equipment, survival, exploration, gathering, repair, barter, risk management and return-to-settlement progression.
- Pokémon remain the setting's defining world force, not generic fantasy monsters.
- P3 survival/inventory rules and P5 deterministic event/state/RNG rules remain authoritative.
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
P8.2 second owner remediation         BATCHES 04-09 MERGED / BATCH 10 AUTOMATED GATE IMPLEMENTED / FINAL CI + OWNER REPLAY / #118 / BLOCKING P9
P9 Content expansion                  BLOCKED
P10 Mobile/release                    QUEUED
```

## P8.2 owner remediation

Active issue: **#118 — Owner playtest expansion: visuals, motion, profile, equipment and adventurer loop**.

The owner replay requires the first several minutes to look and move like a real game, read naturally in Korean, communicate player/survival state clearly, use illustrations for immersion, support equipment/preparation/progression at `0/3` companions, and still feel fundamentally Pokémon-shaped.

Implemented and merged — do not repeat:

- **PR #120 / Batch 04** — progressive narrative reveal, tap-to-complete/advance isolation, rapid-submit guard, scene/travel transitions, reduced-motion parity.
- **PR #121 / Batch 05** — portrait selection, persistent expedition/profile HUD, Vitality/Fatigue/Fear/Injuries/resources/Load/locality/companions, danger semantics.
- **PR #122 / Batch 06** — stable on-demand scene illustrations, existing P6 loader/cache reuse, missing-media fallback, first-run visual identities.
- **PR #123 / Batch 07** — three formative memory scenes, concise action choices, second native-Korean pass, stable-ID/lifepath preservation, questionnaire/proof-language regression guards.
- **PR #124 / Batch 08** — stable notable equipment IDs, five slots, D-028 carried Load integration, bounded Attack/Defense/Field readiness, cached derived projection, `p8-authority-v2` save migration, Korean equipment HUD.
- **PR #125 / Batch 09** — bounded settlement/field risk/camp/return/improvement/barter loop, real locality travel, persisted Vitality/Fatigue/Injury pressure, Rattata-linked salvage ethics, zero-companion progression.
- **PR #126 / CI consolidation** — replaced the historical P7/P8/P8.2 workflow fan-out with one `P8 Integrated Validation` runtime gate while preserving contract, unit, build, Chromium/WebKit, save, PWA and offline coverage.

Batch 09 authoritative behavior:

- bounded six-step settlement -> field risk -> camp -> return -> equipment improvement -> barter loop;
- ordinary Materials and Provisions gathering before departure;
- mutually exclusive Rattata-linked pursuit/withdrawal decision with no Pokémon body loot or kill XP;
- real authoritative `reedbank-settlement -> old-levee -> reedbank-settlement` travel state;
- saved P3 Vitality/Fatigue/Injury pressure projected into HUD/preparation UI;
- P3 Fatigue uses the fixed `Ready/Tired/Exhausted` three-stage contract (`0..2`), not a Will-derived meter;
- camp consumes Provisions and, when injured, Remedies; restores up to 2 Vitality, reduces Fatigue by one stage, treats one Injury, then returns to Reedbank;
- Injury pressure reduces comfortable Load through the existing equipment projection;
- equipment improvement spends Materials and equips the already-carried hide buckler;
- local direct Provisions -> Remedies barter, no universal currency;
- dangerous old-levee checkpoint and final loop state persist across reload/resume;
- zero-companion viability and one-shot/bounded resource opportunities are regression-tested.

Audits:

- `docs/P8_2_BATCH_04_AUDIT.md`
- `docs/P8_2_BATCH_05_AUDIT.md`
- `docs/P8_2_BATCH_06_AUDIT.md`
- `docs/P8_2_BATCH_07_AUDIT.md`
- `docs/P8_2_BATCH_08_AUDIT.md`
- `docs/P8_2_BATCH_09_AUDIT.md`
- `docs/P8_2_BATCH_10_AUDIT.md`
- `docs/CI_VALIDATION_CONSOLIDATION.md`

## Exact next work

### Batch 10 — integrated automated + owner product gate — ACTIVE

The Batch 10 branch adds one longitudinal Chromium/WebKit 390x844 acceptance that crosses the combined product surfaces in a single persisted journey:

- native-Korean remembered-scene creation;
- non-default portrait selection and persistence;
- opening illustration + persistent expedition HUD;
- pending-event save/reload;
- full seven-transition zero-companion run;
- post-return gathering/foraging/Rattata risk/camp/repair/barter loop;
- dangerous field-checkpoint reload;
- hide-buckler equipment improvement;
- resource/survival/equipment/derived-readiness persistence across final reload;
- Korean completed-loop copy and mobile overflow proof.

It is included inside the existing **`P8 Integrated Validation`** job rather than creating a new expensive workflow. Existing motion, illustration-fallback, PWA/offline, resource-contract, save-compatibility and full-run gates remain in that same consolidated job.

**Next automation step:** the final PR head must pass `P8 Integrated Validation`. Do not accept an intermediate green commit.

**Next human/product step after green CI:** run the deployed build and answer the eight Batch 10 owner replay questions in `docs/P8_2_BATCH_10_AUDIT.md`. Only an affirmative owner replay closes #118 and unblocks P9.

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
- Batch 10 validation must remain inside the consolidated P8 runtime gate; do not reintroduce batch-per-workflow fan-out.

## Key rule compatibility

- `Vitality Max = 4 + Endurance`; `Vitality 0` means **Incapacitated**, not automatic death.
- Fatigue is `0 Ready / 1 Tired / 2 Exhausted`; it is not a second stamina-HP bar.
- Fear and persistent named Injury architecture remain P3-owned; Batch 09 only bridges the pressure needed by this bounded slice through existing saved authority.
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
- `docs/P8_2_BATCH_10_AUDIT.md`
- `docs/P8_2_BATCH_09_AUDIT.md`
- `docs/CI_VALIDATION_CONSOLIDATION.md`
- `docs/PLAYTEST_REMEDIATION.md`
- `docs/P8_EXIT_AUDIT.md`
- `docs/P7_EXIT_AUDIT.md`
- `docs/P6_EXIT_AUDIT.md`

Roadmap remains:

`#1 P0 -> #2 P1 -> #3 P2 -> #4 P3 -> #5 P4 -> #6 P5 -> #12 P6 -> #7 P7 -> #8 P8 -> #114 P8.1 -> #118 P8.2 owner acceptance -> #9 P9 -> #10 P10`

P9 resumes only after **#118 closes** or the owner explicitly changes direction.
