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

  test('specialization authority fields survive localization unchanged', () => {
    for (const source of P8_SLICE_SPECIALIZATIONS) {
      const korean = localizeP8Specialization(source, 'ko-KR');
      expect(korean.specializationId).toBe(source.specializationId);
      expect(korean.attributeIncreases).toEqual(source.attributeIncreases);
      expect(korean.personalCompetenceId).toBe(source.personalCompetenceId);
      expect(korean.label).not.toBe(source.label);
    }
  });

  test('official slice species names and shell copy exist in both locales', () => {
    expect(labelP8SpeciesLocalized(13, 'ko-KR')).toBe('뿔충이');
    expect(labelP8SpeciesLocalized(15, 'ko-KR')).toBe('독침붕');
    expect(labelP8SpeciesLocalized(19, 'ko-KR')).toBe('꼬렛');
    expect(labelP8SpeciesLocalized(13, 'en-US')).toBe('Weedle');
    expect(p8Text('ko-KR', 'start')).toBe('새 여정 시작');
    expect(p8Text('en-US', 'start')).toBe('Start new run');
  });
});
