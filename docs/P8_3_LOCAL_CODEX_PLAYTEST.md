# P8.3 Local Codex Playtest Gate

## Purpose

P8.3 owner acceptance must not rely only on unit tests, deterministic DOM assertions, or a single golden screenshot. Before the owner reviews the final 390×844 windbreak/Beedrill screen, run a local Codex-assisted **exploratory playtest** against the real browser build.

This is an additional product-quality gate. It does not replace deterministic Playwright regression tests, and Codex does not have authority to declare subjective visual quality accepted on behalf of the owner.

## Authority split

### Deterministic Playwright owns correctness

Automated tests remain authoritative for reproducible behavior such as:

- buttons are clickable;
- choices transition to the intended authoritative state;
- HUD/detail surfaces fit the 390×844 viewport;
- profile/inventory/equipment/detail surfaces open and close;
- save/reload reconstructs the same authoritative state;
- there is no horizontal overflow;
- no browser/runtime error appears;
- previously fixed regressions stay fixed.

### Codex exploratory playtest owns discovery

Codex should behave like a first-time player and look for problems that existing assertions may miss:

- unclear or misleading interaction entry points;
- inability to understand what a choice means before clicking;
- awkward back/close behavior from secondary detail UI;
- lost scene context after opening profile/inventory/equipment/record surfaces;
- UI hierarchy that still reads like a webpage rather than a game shell;
- excessive empty space, clipping, overlap, scroll traps, or hidden controls;
- state that visually disagrees with the underlying game state;
- paths that only break after a particular sequence of interactions;
- obvious visual/product defects visible in screenshots even when assertions pass.

A Codex statement such as "looks good" is never sufficient evidence by itself.

## Required local baseline

Use the PR branch under review and a clean dependency install.

```bash
git fetch origin
git checkout p8-3/golden-screen-windbreak
git pull --ff-only origin p8-3/golden-screen-windbreak
npm ci
npx playwright install chromium
npm run build
```

The repository requires Node 24 and npm 11 or later as declared in `package.json`.

Before exploratory work, run the deterministic golden screen once:

```bash
npx playwright test e2e/p8-3-golden-screen.spec.ts --project=phone-chromium --trace=on
```

If this baseline fails, do not continue by weakening/skipping assertions. Diagnose the failure first.

## Exploratory scenario

Run the application at the repository's accepted phone viewport **390×844** and perform the flow as an actual user rather than merely inspecting source code.

At minimum:

1. Start from a clean/new first-play state.
2. Progress through the existing opening flow to `slice.mixed.orchard_boundary` / windbreak-Beedrill.
3. At each step, inspect the full viewport before clicking.
4. Exercise every visible choice on the target scene across reproducible fresh/save states as needed.
5. Open each secondary information entry point that exists in the new hierarchy.
   - character/profile/status;
   - inventory;
   - equipment, whether nested under inventory/profile or otherwise;
   - record/journey/detail surface when present.
6. Close/back out of each secondary surface and verify the scene returns without losing authoritative state or scroll/context unexpectedly.
7. Verify detailed stats/equipment remain secondary rather than becoming persistent HUD clutter.
8. Verify the main play surface keeps only immediate survival/decision information visible.
9. Verify choice UI communicates meaningful cost/risk/requirement when such information already exists in authoritative state; do not invent new mechanics merely for presentation.
10. Reload at a meaningful checkpoint and verify save/resume returns to the same scene/state.
11. Re-open the secondary surfaces after reload.
12. Inspect browser console/runtime errors.
13. Capture screenshots for the important checkpoints and preserve Playwright trace/video/screenshot evidence when available.

## Evidence to retain

Store local exploratory evidence under an ignored/test-output location unless a specific artifact is intentionally reviewed/committed. The PR report should summarize:

- exact tested commit SHA;
- Node/npm versions;
- browser/project used;
- commands executed;
- target viewport;
- first-play route tested;
- secondary UI surfaces exercised;
- save/reload checkpoint tested;
- screenshots/trace paths or uploaded CI/PR evidence when applicable;
- every defect found, including reproduction steps;
- which defects were converted into deterministic regression tests;
- unresolved subjective concerns reserved for owner review.

Do not overwrite or hide negative evidence merely because a later run looks better.

## Defect handling rule

When Codex discovers a reproducible defect:

1. record the shortest reproduction path;
2. add or extend a deterministic Playwright regression when practical;
3. make the smallest implementation fix consistent with existing gameplay/save/narrative authority;
4. rerun the new regression plus the relevant existing gates;
5. retain the initial failure evidence in the report/history.

Do not solve an exploratory finding by weakening, skipping, deleting, or making an assertion less specific.

## Scope boundary for PR #136

This gate is currently scoped to the single 390×844 windbreak/Beedrill golden screen and the detail surfaces directly reachable from that play shell.

Do not use the playtest as justification to:

- propagate the visual redesign to all scenes before owner approval;
- start P9;
- redesign gameplay/save/narrative authority;
- add a new state/schema/framework just to support the test;
- invent new equipment/stat mechanics.

The goal is to prove that the proposed hierarchy works as an actual playable screen, not only as a screenshot.

## Suggested Codex instruction

From the repository root, start Codex and give it this task:

```text
Read AGENTS.md, PROJECT_STATUS.md, PR #136 context if available locally, and docs/P8_3_LOCAL_CODEX_PLAYTEST.md.

You are the local exploratory playtester for the current P8.3 windbreak/Beedrill golden-screen branch. Do not start P9 and do not broaden the redesign beyond the current 390×844 golden screen and its directly reachable secondary detail surfaces.

First verify the exact checked-out commit/branch and run the deterministic baseline from the playtest document. Then use the real local browser build at 390×844 and play from a clean first-play state to the windbreak/Beedrill scene as an actual user. Exercise visible choices, profile/status, inventory, equipment/detail, record/journey surfaces that are present, close/back behavior, save/reload, and the same secondary surfaces after reload.

Do not merely inspect DOM/source or declare that the screenshot looks fine. Collect concrete screenshots/traces and inspect runtime/browser errors. Look specifically for unclear interaction hierarchy, webpage-like card stacking, hidden or clipped controls, excessive blank space, confusing choice meaning, detail UI that destroys scene context, persistent-HUD clutter, state/UI disagreement, and sequence-dependent breakage.

If you find a reproducible functional defect, preserve the failure evidence, add the narrowest deterministic Playwright regression, fix the root cause without weakening existing tests, and rerun relevant validation. Do not change gameplay/save/narrative authority and do not invent new schemas or mechanics.

At the end, write a concise local playtest report with tested SHA, commands, scenarios, evidence paths, defects found/fixed, regressions added, and remaining subjective owner-review concerns. Stop for owner review rather than propagating the design to other screens.
```
