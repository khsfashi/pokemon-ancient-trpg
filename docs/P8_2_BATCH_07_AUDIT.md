# P8.2 Batch 07 Audit — Native-Korean narrative pass

Date: **2026-08-17**

Scope: issue **#118 / Batch 07** only. P9 remains blocked.

## Goal

Remove the remaining translated-questionnaire feel from character creation and run a second native-Korean game-copy pass without changing deterministic gameplay identities, lifepath resolution, RNG, save state or event authority.

## Implemented

- Rewrote all three formative prompts as short remembered scenes with concrete time/place/action imagery before the choices.
- Shortened every formative answer into an action-like memory fragment instead of a questionnaire answer sentence.
- Preserved all prompt IDs and answer IDs exactly, so hidden Origin / Practice resolution remains unchanged.
- Rewrote current Korean specialization descriptions for read-aloud rhythm and concrete observation/action language.
- Re-reviewed every current P8 Korean scene body, choice and outcome under `.github/skills/korean-game-copy/SKILL.md`.
- Shortened several scene choices while preserving their existing authoritative choice IDs and declared costs/checks.
- Removed remaining explanation-heavy shell phrases such as `정답은 없습니다` and `방금 선택의 결과가 기록되었습니다` in favor of player-facing prose.
- Kept official Korean species labels and approved attribute terminology unchanged.

## Authority / compatibility boundary

This batch is presentation-only.

Unchanged:

- `content/p8/vertical-slice.source.json`;
- `content/p8/vertical-slice.presentation.json` stable gameplay IDs;
- P5 event selection / choice resolution / RNG subjects;
- Origin / Practice lifepath mapping;
- specialization authority fields (`specializationId`, attribute increases, personal competence ID);
- save schema and IndexedDB representation;
- resource/cache behavior;
- P8.2 motion, portrait/HUD and illustration systems.

## New regression guards

Unit tests now require:

- every Korean formative memory to contain multiple narrative sentences rather than end as a question;
- formative answer labels to stay concise and punctuation-free;
- Korean and English to retain the same prompt/answer, scene/choice/outcome and specialization authority identities;
- the current Korean creation / scene / shell corpus to remain free of known questionnaire, translation-proof and implementation vocabulary.

Browser acceptance now checks, on Chromium and WebKit phone projects:

- the three Korean creation steps render as the authored memory scenes;
- concise answer labels remain 44px+ touch targets;
- 390px phone width has no horizontal overflow;
- the past/background reveal and specialization copy continue naturally from the memory sequence;
- known questionnaire phrases do not reappear on the visible creation surface.

The dedicated workflow also re-runs bilingual save-preservation acceptance and inherited P8 phone smoke.

## Validation

Dedicated workflow: **`P8.2 Batch 07 Validation`**.

Final run ID and result are recorded in `PROJECT_STATUS.md` after CI completes.
