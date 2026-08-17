import { describe, expect, it } from 'vitest';
import { RngCursor } from '../src/runtime/rngCursor';
import { U64_MAX } from '../src/runtime/uint';

const seed = '0123456789abcdef0123456789abcdef';

describe('deterministic RNG cursor skeleton', () => {
  it('advances immutably and preserves exact u64 wire values', () => {
    const cursor = new RngCursor(seed, 'event.primary', 9007199254740993n);
    const next = cursor.advance();

    expect(cursor.drawIndex).toBe(9007199254740993n);
    expect(next.toWire()).toEqual({
      runSeed: seed,
      channel: 'event.primary',
      drawIndex: '9007199254740994',
    });
  });

  it('fails closed on u64 overflow', () => {
    expect(() => new RngCursor(seed, 'event.primary', U64_MAX).advance()).toThrow(RangeError);
  });
});
