# P8 CI Validation Consolidation

## Problem

The P8.2 Batch 09 pull request showed the scaling failure of the historical batch-per-workflow model. A single final head scheduled thirteen overlapping P7/P8/P8.2 pull-request workflows. Most repeated the same expensive sequence: checkout, `npm ci`, TypeScript/unit validation, production build, Playwright browser installation, then one narrow browser spec. Several historical workflows also watched `PROJECT_STATUS.md`, so operational handoff edits could schedule expensive runtime validation without changing runtime code.

The repository's `main` branch has no required-status-check protection, so there is no branch-protection dependency on the retired historical workflow names.

## New model

`P8 Integrated Validation` is the single automatic P8/P8.2 runtime gate.

It runs once per relevant pull-request head and once after relevant changes land on `main`:

1. P5/P6 contract validators and deterministic P7 runtime-pack check;
2. P8 vertical-slice, authored-pack, and phone-presentation guards;
3. one `npm ci`;
4. one deterministic unit-suite pass;
5. one typecheck + production PWA build;
6. one Chromium/WebKit installation step with browser-binary caching;
7. one consolidated development-server Playwright pass covering resource cache, browser saves, P8 phone flow, save compatibility, localization, motion, profile/equipment HUD, illustration fallback, Korean creation, and Batch 09 preparation loop;
8. production full-run/bilingual exit proof;
9. inherited P7 physical PWA offline proof;
10. P8 pending-save physical-origin-down proof.

The workflow uses PR-scoped concurrency with `cancel-in-progress: true`, so a superseded commit does not keep consuming a runner. Branch pushes no longer run the full gate for `agent/**`/`codex/**`; pull requests are the validation surface, while `main` still revalidates after merge.

## Retired automatic workflows

The following historical batch workflows are removed from the current tree. Their code and run evidence remain available in Git history and the corresponding batch audits:

- P7 Batch 02 / 04 / 05 / 06 Validation;
- P8 Vertical Slice Validation;
- P8 Authority Runtime Validation;
- P8 Batch 04 / 05 Validation;
- P8.2 Batch 04 / 05 / 06 / 07 / 08 / 09 Validation.

Independent P5 contract, P6 resource, and P7 architecture workflows remain because they are narrow contract-specific gates rather than duplicate P8 runtime lanes. Public playtest deployment remains independent.

## Trigger policy

Operational documentation such as `PROJECT_STATUS.md` and completed batch audit files intentionally do not trigger the integrated runtime gate. Runtime/configuration/content/test/resource changes and binding contracts do.

## Expected effect

For ordinary P8/P9 implementation pull requests, the previous many-run fan-out is replaced by one comprehensive runtime workflow. This reduces repeated dependency installation, repeated builds, repeated browser downloads, runner queue pressure, and stale runs after a new head is pushed while preserving the combined acceptance surface.
