# P8.1 Playtest Remediation Contract

Date: **2026-08-17**  
Owner verdict: **the current build does not yet read as a finished game.**  
Tracking issue: **#114**

## Why this exists

P8 passed its technical integration, deterministic-state, save/resume, PWA and mobile-layout gates. The first owner playtest exposed a different class of failure that those gates did not measure:

- Korean reads as translated/technical prose rather than native game writing;
- the presentation reads as a generic mobile web card rather than a game screen;
- too many main-path scenes have only one effective action;
- internal implementation and acceptance language leaks into player-facing copy;
- as a result, the slice proves architecture but does not yet deliver the expected player experience.

This is a **blocking product-quality gate before P9 bulk content expansion**. Scaling content first would multiply the same copy, UI and interaction problems.

## Owner-approved direction

### Korean

All current and future Korean player-facing content must be authored/reviewed through the repo-local `.github/skills/korean-game-copy/SKILL.md` rules.

The desired process is benchmarked from the open-source `DaleSeo/korean-skills` workflow:

1. humanize large-scale phrasing first;
2. grammar/spacing review second;
3. style/terminology consistency last.

We adopt the **workflow principles**, then add project-specific narrative/choice/outcome rules. We do not need to vendor the external skill package into runtime code.

Reference:

- https://github.com/DaleSeo/korean-skills
- MIT license as stated by that repository at review time.

GitHub's current Agent Skills documentation explicitly supports repository skills at `.github/skills/<skill-name>/SKILL.md`, which is why the project-owned skill is stored there.

Reference:

- https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills

### Game UI / interaction benchmark

Use **StudioWheel's `모험가 이야기`** as a benchmark for *why a compact text game still reads as a game*, not as a pixel-perfect template to copy.

Useful observed/product-stated principles:

- text roguelike / event-driven adventure framing;
- the player repeatedly faces events and chooses actions;
- ability, item, wealth and prior-choice conditions can change event choices/results;
- multiple choices are a headline feature rather than a rare exception;
- pixel-art situation presentation gives events visual identity;
- choices feed into different epilogues/results;
- reviews repeatedly identify the stat/dice/choice presentation as TRPG-like.

References reviewed:

- Google Play listing: https://play.google.com/store/apps/details?id=com.StudioWheel.Bard&hl=ko
- StudioWheel site: https://www.studiowheel.net/
- App Store listing/reviews: https://apps.apple.com/kr/app/id1551617649

### What we copy vs do not copy

We may adapt general design principles:

- scene-first hierarchy;
- persistent run-state HUD;
- a visually distinct scene/illustration area;
- clear narrative body;
- choice buttons as the primary interaction surface;
- explicit known cost/check information where appropriate;
- visible consequence feedback;
- game-specific typography, borders, texture and spacing.

We must **not** copy proprietary artwork, pixel assets, exact layouts, icons, music, text, branding or a pixel-perfect arrangement from `모험가 이야기`.

## Root cause found in current P8

The Korean pass in PR #113 solved localization **coverage and gameplay-identity preservation**, but it did not establish native Korean editorial quality.

More importantly, P8 intentionally exposed technical proof text in the presentation. Examples include player-facing references to:

- `P8` / `P7`;
- `결정론적으로`;
- `권위 상태`;
- `IndexedDB`;
- `전이`;
- `리소스 캐시`;
- `계약` / proof-like `0/3` explanations.

Several scene bodies also narrate the design requirement rather than the fiction, for example explicitly explaining that a problem is “not a Pokémon's fault,” or that human motives and Pokémon ecology are both important.

The visual root cause is similarly structural: `app.css` presents nearly every mode as one centered rounded cream `.panel`, using system UI typography and generic web-card/buttons. It is accessible and measurable, but the information hierarchy is closer to a form/onboarding flow than a game HUD + scene + action surface.

## New player-surface rules

### 1. No implementation proof in normal play

A player should never need to know how save authority, deterministic event identity, IndexedDB, P-phase acceptance or resource fallback works in order to play.

If an implementation fact has no player decision attached to it, remove it from the ordinary surface or translate it into a diegetic/player-useful message.

### 2. Scene before system

The visual order for a gameplay event should be:

1. current locality / compact run state;
2. scene mood/identity;
3. what is happening;
4. optional Pokémon/situation visual;
5. choices;
6. known check/cost/risk cues;
7. consequence feedback.

Debug/acceptance information is not part of this hierarchy.

### 3. Choices are gameplay

For ordinary events, `1 choice == no decision`.

A single action is acceptable for a true transition/acknowledgement. Main events should normally provide at least two materially different actions when fiction permits. Differences should affect one or more of:

- check/risk;
- resource cost;
- route/time;
- relationship/reputation;
- information/knowledge;
- Pokémon approach;
- immediate or delayed consequence.

### 4. UI must identify itself as a game immediately

At the accepted 390x844 viewport, the landing screen and first event must no longer resemble a generic settings/onboarding card.

The first visual pass should use project-owned CSS/components only and preserve the existing P6 performance/resource contract. Heavy decorative assets are not required to establish a game frame.

## Acceptance for Batch 01

- repo-local Korean game-copy skill exists;
- all current P8 Korean prompt/scene/choice/outcome copy receives a native rewrite;
- player-facing system strings no longer expose development/proof jargon;
- base shell is visually reworked into a game-like scene/HUD/choice composition;
- stable IDs and localization coverage stay unchanged;
- no runtime dependency or backend is added;
- existing deterministic/save/resource tests remain green.

## Acceptance for Batch 02

- audit all current scenes by decision count;
- replace one-button main-event progression with meaningful branches using the existing authoritative engine;
- preserve reload/replay determinism for every new choice/outcome;
- keep one-action scenes only where the action is genuinely an acknowledgement or unavoidable transition.

## Exit judgment

Automated tests remain necessary but no longer sufficient for this gate.

P8.1 exits only after another owner playtest confirms that the first several minutes read as an actual game and the original first-impression failures are no longer present.
