---
name: korean-game-copy
description: Rewrite or review player-facing Korean for this game so it reads like native Korean adventure-game prose rather than translated English, developer documentation, or AI-generated copy. Use for ko-KR prompts, event scenes, choices, outcomes, HUD labels, tutorials, localization review, and Korean content authoring.
license: Project-owned instructions; benchmark principles are attributed in docs/PLAYTEST_REMEDIATION.md.
---

# Korean game copy

Use this skill whenever authoring or reviewing `ko-KR` player-facing text in this repository.

The target is **Korean that feels written in Korean for a game**, not English content that happened to be translated.

## Mandatory pipeline

Review in this order:

1. **Humanize** — remove translationese, AI-like abstraction, repeated sentence shapes, needless explanation and nominalization.
2. **Grammar** — fix spacing, particles, endings, punctuation and awkward word order after the large rewrite.
3. **Game voice consistency** — make terminology, tense, information hierarchy and tone fit the surrounding game content.
4. **Read aloud** — if a sentence is hard to say naturally once, rewrite it before shipping.

Do not preserve a bad source sentence merely because it is semantically close to English. Preserve **gameplay meaning and stable IDs**, not English syntax.

## Hard player-surface rule

Never expose implementation or validation language merely because it exists in source/design documents.

Unless the fiction itself requires the term, player-facing Korean must not mention:

- P-phase names such as `P7`, `P8`, `P9`;
- authority / authoritative state;
- deterministic / determinism;
- IndexedDB, service workers, caches, manifests or resource loaders;
- transition sequence / event identity / content pack;
- schema, contract, validation, acceptance proof or implementation boundary;
- “this demonstrates/proves/supports X” design commentary.

Translate **intent into player experience** instead.

Bad:
> 이 결과는 이미 권위 상태와 IndexedDB에 확정 저장되었습니다.

Good:
> 방금 내린 선택은 이미 기록되었습니다.

Better when no message is necessary:
> Omit the sentence entirely.

## Sentence rules

Prefer:

- concrete actor + action + consequence;
- short-to-medium sentences with varied rhythm;
- verbs over abstract nouns;
- context the character can perceive;
- implied worldbuilding over design explanation;
- Korean ellipsis/omission when the subject is obvious;
- direct sensory or social detail when it improves the scene.

Aggressively question:

- `~에 대해`, `~을 통해`, `~에 있어서`;
- repeated `~할 수 있습니다`;
- unnecessary passive constructions;
- `~의 ~의 ~` modifier chains;
- abstract nouns such as `상호작용`, `결과`, `상태`, `관계`, `요소`, `부분` when a concrete verb exists;
- literal English connective logic (`하지만`, `그러나`, `또한`) repeated every sentence;
- explicit explanation of what the scene is “meant to show.”

## Narrative voice

Default current P8/P8.1 scene voice:

- second-person experience without mechanically repeating `당신은`;
- present tense for immediate scenes, past/perfect only for committed aftermath when natural;
- grounded pre-modern diction, but **not** pseudo-historical archaic Korean;
- restrained, readable atmosphere rather than purple prose;
- Pokémon names use the approved Korean species labels;
- people in the world do not speak like product designers describing “human motives + Pokémon ecology.”

Example:

Bad:
> 독침붕의 활동과 꼬렛의 흔적도 중요하지만, 과수원지기가 경계를 지켜야 하는 사정도 똑같이 중요합니다.

Better:
> 지름길은 방풍림 안쪽으로 이어진다. 벌어진 나무껍질엔 꼬렛의 이빨자국이 남아 있고, 머리 위에서는 독침붕 날갯소리가 끊이지 않는다. 과수원지기는 말없이 길을 막아선다.

## Choice-copy rules

A choice is an **action**, not a summary of the designer's intent.

Prefer verb-first, concrete labels:

- `흔적을 따라간다`
- `방풍림을 돌아간다`
- `식량을 내어 준다`
- `관리인에게 따져 묻는다`

Avoid:

- `상황을 확인한다`
- `상호작용한다`
- `선택을 진행한다`
- `인간관계의 대가를 감수한다`
- labels that reveal hidden outcome metadata unless the player is intentionally meant to know it.

When a known check or cost matters, attach it compactly after the action rather than turning the whole label into a system sentence.

Example:
> 흔적을 자세히 살핀다 · 감각+추적

## Outcome-copy rules

Describe what happened, then let the player infer significance.

Bad:
> 유대를 강요하지 않고도 생태와 직접 맞닿았습니다. 길은 여전히 열려 있습니다.

Good:
> 몸을 낮추고 기다리자 뿔충이 무리가 풀숲으로 빠져나간다. 막혔던 길이 다시 열린다.

Avoid `기록됩니다`, `관계가 변경됩니다`, `플래그가 설정됩니다` unless the UI is intentionally showing a diegetic journal/log.

## UI labels

UI text should be the shortest natural phrase that preserves meaning.

Prefer:

- `여정 이어하기`
- `새 여정`
- `현재 위치`
- `식량 2`
- `동행 0/3`
- `판정: 성공`

Avoid:

- `첫 플레이 가능 구간`
- `권위 상태 복원`
- `확정된 상태에서 계속`
- `선택형 로컬 이미지`

## Game-copy review checklist

Before accepting a Korean content change, verify all of the following:

- [ ] Could this sentence plausibly appear in a commercially released Korean game?
- [ ] Does it sound natural when read aloud once?
- [ ] Did we preserve gameplay meaning without preserving English grammar?
- [ ] Is any sentence explaining implementation/design proof rather than the world?
- [ ] Are choices concrete actions?
- [ ] Are outcome consequences shown through events rather than metadata narration?
- [ ] Are terms consistent with the project glossary and approved species/locality labels?
- [ ] Is the amount of text appropriate for a 390x844 phone screen?
- [ ] Did we avoid adding new persistent world canon merely to improve prose?

If any answer fails, revise before merge.
