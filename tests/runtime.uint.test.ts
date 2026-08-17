import { describe, expect, it } from 'vitest';
import { formatUnsignedDecimal, parseUnsignedDecimal, U63_MAX, U64_MAX } from '../src/runtime/uint';

describe('unsigned bigint wire boundary', () => {
  it('round-trips values beyond Number.MAX_SAFE_INTEGER without precision loss', () => {
    const value = '18446744073709551615';
    expect(formatUnsignedDecimal(parseUnsignedDecimal(value))).toBe(value);
    expect(parseUnsignedDecimal(value)).toBe(U64_MAX);
  });

  it('keeps the P5 unsigned 63-bit weight boundary exact', () => {
    expect(parseUnsignedDecimal('9223372036854775807', U63_MAX)).toBe(U63_MAX);
    expect(() => parseUnsignedDecimal('9223372036854775808', U63_MAX)).toThrow(RangeError);
  });

  it('rejects non-canonical or signed decimal strings', () => {
    for (const value of ['-1', '+1', '01', '1.0', ' 1']) {
      expect(() => parseUnsignedDecimal(value)).toThrow(RangeError);
    }
  });
});
