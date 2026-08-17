import { describe, expect, it } from 'vitest';
import {
  P8_FULL_SCENE_DECODED_BUDGET_BYTES,
  P8_ILLUSTRATIONS,
  getP8IllustrationResourceIdForEvent,
  illustrationResourceIdForPresentationKey,
} from '../src/resources/p8Illustrations';

describe('P8.2 illustration catalog', () => {
  it('keeps stable unique local resource IDs under the frozen P6 full-scene budget', () => {
    const ids = P8_ILLUSTRATIONS.map((entry) => entry.resourceId);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toHaveLength(5);

    for (const entry of P8_ILLUSTRATIONS) {
      expect(entry.resource_id).toBe(entry.resourceId);
      expect(entry.semanticClass).toBe('scene_illustration');
      expect(entry.asset_class).toBe('pokemon_encounter_image');
      expect(entry.requirement).toBe('optional');
      expect(entry.output_format).toBe('svg');
      expect(entry.sourceKind).toBe('project_authored_original_svg');
      expect(entry.decodedBudgetBytes).toBe(P8_FULL_SCENE_DECODED_BUDGET_BYTES);
      expect(entry.provenance.length).toBeGreaterThan(20);
    }
  });

  it('assigns distinct visual identity to opening, travel, Weedle, orchard and return', () => {
    const ids = [
      getP8IllustrationResourceIdForEvent('slice.opening.market_call'),
      getP8IllustrationResourceIdForEvent('slice.travel.leave_settlement'),
      getP8IllustrationResourceIdForEvent('slice.ecology.weedle_crossing'),
      getP8IllustrationResourceIdForEvent('slice.mixed.orchard_boundary'),
      getP8IllustrationResourceIdForEvent('slice.ending.return_crossroads'),
    ];
    expect(ids.every((id) => id !== null)).toBe(true);
    expect(new Set(ids).size).toBe(5);
  });

  it('resolves both scene and consequence presentation keys without touching authority state', () => {
    expect(illustrationResourceIdForPresentationKey('scene:4:slice.ecology.weedle_crossing:ko-KR'))
      .toBe('p8.illustration.ecology.weedle-crossing');
    expect(illustrationResourceIdForPresentationKey('resolution:5:slice.mixed.orchard_boundary:windbreak_protected:en-US'))
      .toBe('p8.illustration.orchard.windbreak-boundary');
    expect(illustrationResourceIdForPresentationKey('profile:5:anything:en-US')).toBeNull();
    expect(getP8IllustrationResourceIdForEvent('missing.event')).toBeNull();
  });
});
