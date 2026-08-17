import { describe, expect, test } from 'vitest';
import { P8_SLICE_PRESENTATION_PROMPTS } from '../content/p8SliceContent';
import { P8_SLICE_SCENE_SEQUENCE, P8_SLICE_SPECIALIZATIONS } from '../content/p8SlicePresentation';
import {
  getLocalizedP8Scene,
  labelP8SpeciesLocalized,
  localizeP8Prompt,
  localizeP8Specialization,
  p8Text,
} from './p8Localization';

describe('P8 bilingual presentation', () => {
  test('Korean and English preserve stable formative identities', () => {
    for (const source of P8_SLICE_PRESENTATION_PROMPTS) {
      const english = localizeP8Prompt(source, 'en-US');
      const korean = localizeP8Prompt(source, 'ko-KR');
      expect(korean.promptId).toBe(english.promptId);
      expect(korean.answers.map((answer) => answer.answerId)).toEqual(english.answers.map((answer) => answer.answerId));
      expect(korean.promptText).not.toBe(english.promptText);
    }
  });

  test('Korean formative memories are narrative scenes with concise action choices', () => {
    for (const source of P8_SLICE_PRESENTATION_PROMPTS) {
      const korean = localizeP8Prompt(source, 'ko-KR');
      const sentenceCount = korean.promptText.split(/[.!?]/u).map((part) => part.trim()).filter(Boolean).length;
      expect(sentenceCount).toBeGreaterThanOrEqual(2);
      expect(korean.promptText).not.toMatch(/[?？]\s*$/u);
      for (const answer of korean.answers) {
        expect(answer.text.length).toBeLessThanOrEqual(22);
        expect(answer.text).not.toMatch(/[.!?。！？]\s*$/u);
      }
    }
  });

  test('Korean and English preserve stable scene, choice and outcome identities', () => {
    for (const source of P8_SLICE_SCENE_SEQUENCE) {
      const english = getLocalizedP8Scene(source.eventId, 'en-US');
      const korean = getLocalizedP8Scene(source.eventId, 'ko-KR');
      expect(english).toBeDefined();
      expect(korean).toBeDefined();
      expect(korean?.eventId).toBe(english?.eventId);
      expect(Object.keys(korean?.choices ?? {}).sort()).toEqual(Object.keys(english?.choices ?? {}).sort());
      expect(Object.keys(korean?.outcomes ?? {}).sort()).toEqual(Object.keys(english?.outcomes ?? {}).sort());
      expect(korean?.title).not.toBe(english?.title);
    }
  });

  test('current Korean narrative copy avoids questionnaire and translation-proof language', () => {
    const forbidden = [
      '상호작용',
      '권위 상태',
      '결정론',
      'IndexedDB',
      '리소스 캐시',
      '플레이 구간',
      '방금 선택의 결과가 기록되었습니다',
      '정답은 없습니다',
      '무엇이었나요?',
      '무엇인가요?',
    ];
    const narrative = P8_SLICE_SCENE_SEQUENCE.flatMap((source) => {
      const scene = getLocalizedP8Scene(source.eventId, 'ko-KR');
      if (scene === undefined) return [];
      return [scene.eyebrow, scene.title, scene.body, scene.continueLabel, ...Object.values(scene.choices), ...Object.values(scene.outcomes)];
    }).join('\n');
    const creation = P8_SLICE_PRESENTATION_PROMPTS.flatMap((source) => {
      const prompt = localizeP8Prompt(source, 'ko-KR');
      return [prompt.promptText, ...prompt.answers.map((answer) => answer.text)];
    }).join('\n');
    const shell = [
      p8Text('ko-KR', 'landingLead'),
      p8Text('ko-KR', 'promptHint'),
      p8Text('ko-KR', 'revealLead'),
      p8Text('ko-KR', 'specializationQuestion'),
      p8Text('ko-KR', 'attributeContract'),
      p8Text('ko-KR', 'committedSave'),
      p8Text('ko-KR', 'restoredLead'),
    ].join('\n');
    const copy = `${creation}\n${narrative}\n${shell}`;
    for (const token of forbidden) expect(copy).not.toContain(token);
  });

  test('specialization authority fields survive localization unchanged', () => {
    for (const source of P8_SLICE_SPECIALIZATIONS) {
      const korean = localizeP8Specialization(source, 'ko-KR');
      expect(korean.specializationId).toBe(source.specializationId);
      expect(korean.attributeIncreases).toEqual(source.attributeIncreases);
      expect(korean.personalCompetenceId).toBe(source.personalCompetenceId);
      expect(korean.label).not.toBe(source.label);
    }
  });

  test('official slice species names and player-facing shell copy exist in both locales', () => {
    expect(labelP8SpeciesLocalized(13, 'ko-KR')).toBe('뿔충이');
    expect(labelP8SpeciesLocalized(15, 'ko-KR')).toBe('독침붕');
    expect(labelP8SpeciesLocalized(19, 'ko-KR')).toBe('꼬렛');
    expect(labelP8SpeciesLocalized(13, 'en-US')).toBe('Weedle');
    expect(p8Text('ko-KR', 'start')).toBe('새 여정');
    expect(p8Text('en-US', 'start')).toBe('New journey');
  });

  test('normal Korean player UI does not expose implementation proof vocabulary', () => {
    const playerFacingKeys = [
      'mediaFailed',
      'mediaChecking',
      'mediaNotConfigured',
      'mediaFallback',
      'mediaLoaded',
      'sliceEyebrow',
      'landingLead',
      'replaceSave',
      'zeroCompanionContract',
      'revealLead',
      'attributeContract',
      'committedSave',
      'pendingSaveNote',
      'restoredLead',
      'footer',
    ] as const;
    const forbidden = ['P7', 'P8', 'IndexedDB', '권위 상태', '결정론', '리소스 캐시', '플레이 구간'];
    const copy = playerFacingKeys.map((key) => p8Text('ko-KR', key)).join('\n');
    for (const token of forbidden) expect(copy).not.toContain(token);
  });
});
