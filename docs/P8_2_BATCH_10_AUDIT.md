# P8.2 Batch 10 — Integrated Product Gate Audit

Date: **2026-08-18**  
Active owner gate: **#118**  
Branch: `agent/p8-2-batch10-integrated-product-gate`

## Purpose

Batch 10 does not add another gameplay subsystem. It proves that the P8.2 remediation work behaves as one coherent first-play product instead of a collection of isolated green feature tests.

The binding owner gate remains the combined experience from `docs/P8_2_OWNER_PLAYTEST_EXPANSION_PLAN.md`:

- game-like phone presentation;
- native-Korean character creation;
- persistent player identity and survival/readiness state;
- meaningful scene art and movement presentation;
- zero-companion viability;
- equipment/preparation/progression;
- Pokémon-shaped ecology and reward ethics;
- save/reload and PWA safety.

## Live-state reconciliation

Before this batch started:

- Batch 09 PR #125 had already merged into `main`;
- CI-consolidation PR #126 had already merged into `main`;
- `PROJECT_STATUS.md` still described #125 as awaiting final validation and therefore lagged live GitHub state.

Batch 10 reconciles that stale handoff and continues from the actual first incomplete work.

## Added longitudinal acceptance

`e2e/p8-2-integrated-product-gate.spec.ts` runs on both configured phone projects (`390x844` Chromium and WebKit) and deliberately crosses feature boundaries in one saved journey:

1. starts in Korean and enters the native-Korean remembered-scene character creation;
2. switches presentation language without changing gameplay authority;
3. selects a non-default Herbalist portrait and verifies it on review/play surfaces;
4. enters the opening event and verifies the stable opening illustration plus expedition HUD;
5. reloads while the first event is pending and verifies exact continuation plus portrait persistence;
6. completes the full seven-transition zero-companion vertical slice;
7. enters the post-return preparation loop;
8. gathers/forages, follows the Rattata-linked risk path, and reaches the dangerous old-levee checkpoint;
9. reloads from that dangerous checkpoint;
10. camps/recovers, equips the already-carried hide buckler through the repair/improvement action, barters, and completes the six-step preparation loop;
11. records persisted resources, survival pressure, equipment, derived readiness, zero-companion completion, and Pokémon-loot ethics flags;
12. reloads again and requires the reconstructed persisted projection to be identical;
13. switches back to Korean and verifies the completed preparation copy plus player-facing fatigue/stamina wording;
14. keeps the 390px surface free of horizontal overflow.

The test uses `prefers-reduced-motion` for the longitudinal path so the complete combined state can be proven without paying animation delay on every authored beat. Animated skip/advance and transition timing remain owned by the dedicated P8.2 motion acceptance in the same consolidated gate.

## Consolidated CI coverage

The existing `.github/workflows/p8-integrated-validation.yml` remains the single expensive P8/P8.2 runtime workflow. Batch 10 adds the longitudinal spec to its existing Chromium/WebKit Playwright invocation rather than creating another workflow.

That same integrated job already retains:

- frozen P5/P6 contract validation;
- P7 generated runtime-pack validation;
- P8 authority/authored-pack/phone presentation guards;
- deterministic unit tests;
- strict TypeScript + production PWA build;
- resource-cache and browser-save acceptance;
- P8 save compatibility and localization;
- animated/reduced-motion transition safety;
- portrait/profile/HUD persistence;
- illustration loaded/fallback behavior;
- native-Korean creation acceptance;
- preparation-loop persistence;
- production Chromium/WebKit full-run + bilingual proof;
- inherited P7 physical PWA offline proof;
- P8 pending-save origin-down proof.

This preserves the CI-consolidation goal from #126: install dependencies, build, and install browsers once per P8 integrated run.

## Architecture/performance impact

Runtime gameplay code is unchanged.

- no new frame/update work;
- no new production allocations or caches;
- no save-schema change;
- no new resource preload;
- no duplicate workflow fan-out;
- the added cost is one serial longitudinal Playwright scenario per browser inside the existing consolidated runner.

## Remaining gate

Automated validation is necessary but does **not** replace the owner product judgment required by #118.

After the final PR head passes `P8 Integrated Validation`, the remaining Human/Product Gate is the owner's deployed replay against these questions:

1. Does the first screen immediately feel like a game?
2. Does character creation read naturally like fiction rather than a questionnaire?
3. Can the player always understand health, exertion/stamina, food, danger and current condition?
4. Does movement between places feel like movement?
5. Does the scene art materially improve immersion?
6. Does equipment/progression create a medieval adventurer fantasy even without a Pokémon companion?
7. Do Pokémon still feel integral to the world rather than pasted onto a generic fantasy RPG?
8. Is the first several-minute loop compelling enough to justify P9 content multiplication?

Only an affirmative owner replay closes #118 and unblocks P9.

## Validation status

**Pending final PR-head GitHub Actions validation.**

Do not record an intermediate commit as Batch 10 acceptance. Final-head Chromium/WebKit results from `P8 Integrated Validation` are the automated merge gate.
