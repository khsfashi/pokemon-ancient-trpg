import { describe, expect, it } from 'vitest';
import { skeletonSaveProbeFromWire, skeletonSaveProbeToWire } from '../src/saves/skeletonProbe';

const runtime = {
  originTransitionSeq: 18446744073709551614n,
  rngDrawIndex: 9007199254740993n,
} as const;

describe('Batch 02 save wire probe', () => {
  it('serializes authoritative integers only as decimal strings', () => {
    const wire = skeletonSaveProbeToWire(runtime);
    const serialized = JSON.stringify(wire);

    expect(serialized).toContain('18446744073709551614');
    expect(serialized).toContain('9007199254740993');
    expect(skeletonSaveProbeFromWire(JSON.parse(serialized) as typeof wire)).toEqual(runtime);
  });
});
