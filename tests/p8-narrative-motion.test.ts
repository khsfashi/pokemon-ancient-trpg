import { describe, expect, it } from 'vitest';
import {
  advanceNarrativeCursor,
  narrativeCursorComplete,
  segmentNarrativeBeats,
  type NarrativeCursor,
} from '../src/app/NarrativeReveal';

describe('P8.2 narrative motion foundation', () => {
  it('keeps ordinary prose as one authored beat unless the content explicitly inserts a beat break', () => {
    expect(segmentNarrativeBeats('First sentence. Second sentence.')).toEqual([
      'First sentence. Second sentence.',
    ]);
    expect(segmentNarrativeBeats('첫 장면이다.\n\n두 번째 숨을 고른다.')).toEqual([
      '첫 장면이다.',
      '두 번째 숨을 고른다.',
    ]);
  });

  it('uses the first tap to finish the active reveal and the next tap to advance the authored beat', () => {
    const beats = ['abc', 'def'];
    const initial: NarrativeCursor = { beatIndex: 0, visibleCharacters: 1 };

    const completedFirst = advanceNarrativeCursor(initial, beats);
    expect(completedFirst).toEqual({ beatIndex: 0, visibleCharacters: 3 });
    expect(narrativeCursorComplete(completedFirst, beats)).toBe(false);

    const advanced = advanceNarrativeCursor(completedFirst, beats);
    expect(advanced).toEqual({ beatIndex: 1, visibleCharacters: 0 });
    expect(narrativeCursorComplete(advanced, beats)).toBe(false);

    const completedLast = advanceNarrativeCursor(advanced, beats);
    expect(completedLast).toEqual({ beatIndex: 1, visibleCharacters: 3 });
    expect(narrativeCursorComplete(completedLast, beats)).toBe(true);

    expect(advanceNarrativeCursor(completedLast, beats)).toBe(completedLast);
  });
});
