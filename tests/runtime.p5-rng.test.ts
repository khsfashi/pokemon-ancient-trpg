import { describe, expect, it } from 'vitest';
import { WebCryptoHashProvider } from '../src/platform/webCryptoHashProvider';
import {
  bytesToHex,
  deriveP5RngRawDraw,
  drawP5Bounded,
  encodeP5RngV1Input,
  type P5RngStreamKey,
} from '../src/runtime/p5Rng';

const provider = new WebCryptoHashProvider();
const pack = { contentPackId: 'p5-foundation-fixtures', contentPackVersion: '1.0.0' } as const;

const vectors = [
  {
    id: 'weighted-selection-vector-001',
    key: {
      runSeedHex: '00000000000000000000000000000001', ...pack,
      originTransitionSeq: 1n, triggerId: 'location_entered', channel: 'event.select', subjectId: 'eval:0',
    } satisfies P5RngStreamKey,
    drawIndex: 0n,
    inputHex: '706f6b656d6f6e2d616e6369656e742d747270672f70352d726e672d763100000000000000000000000000000000010070352d666f756e646174696f6e2d666978747572657300312e302e30000000000000000001006c6f636174696f6e5f656e7465726564006576656e742e73656c656374006576616c3a30000000000000000000',
    sha256: '8fa123d41a83eee27404d409e3c1931ab5c97f95fb1b84bae33788307759cc05',
    rawU64: 10349592812559003362n, bound: 100n, boundedResult: 62n,
  },
  {
    id: 'd034-rare-selection-vector-001',
    key: {
      runSeedHex: '00000000000000000000000000000031', ...pack,
      originTransitionSeq: 3n, triggerId: 'event_chain_advanced', channel: 'event.select', subjectId: 'eval:0',
    } satisfies P5RngStreamKey,
    drawIndex: 0n,
    inputHex: '706f6b656d6f6e2d616e6369656e742d747270672f70352d726e672d763100000000000000000000000000000000310070352d666f756e646174696f6e2d666978747572657300312e302e30000000000000000003006576656e745f636861696e5f616476616e636564006576656e742e73656c656374006576616c3a30000000000000000000',
    sha256: '937fdfabd7edbce9eedc177a5e71e6f3bc32a4d4d8763ef50094672e0810b1f9',
    rawU64: 10628459574772743401n, bound: 100n, boundedResult: 1n,
  },
  {
    id: 'hazardous-check-die-001',
    key: {
      runSeedHex: '00000000000000000000000000000002', ...pack,
      originTransitionSeq: 2n, triggerId: 'travel_step_committed', channel: 'check.d6',
      subjectId: 'fixture.risk.beedrill_corridor/observe_and_withdraw/read_escape_gap',
    } satisfies P5RngStreamKey,
    drawIndex: 0n,
    inputHex: '706f6b656d6f6e2d616e6369656e742d747270672f70352d726e672d763100000000000000000000000000000000020070352d666f756e646174696f6e2d666978747572657300312e302e300000000000000000020074726176656c5f737465705f636f6d6d697474656400636865636b2e643600666978747572652e7269736b2e6265656472696c6c5f636f727269646f722f6f6273657276655f616e645f77697468647261772f726561645f6573636170655f676170000000000000000000',
    sha256: '3df0deaba15f8fbd942b1b29f6632c42ef0a51ed7ff4ba0c5a040bcd9124a531',
    rawU64: 4463312059452329917n, bound: 6n, boundedResult: 1n,
  },
  {
    id: 'hazardous-check-die-002',
    key: {
      runSeedHex: '00000000000000000000000000000002', ...pack,
      originTransitionSeq: 2n, triggerId: 'travel_step_committed', channel: 'check.d6',
      subjectId: 'fixture.risk.beedrill_corridor/observe_and_withdraw/read_escape_gap',
    } satisfies P5RngStreamKey,
    drawIndex: 1n,
    inputHex: '706f6b656d6f6e2d616e6369656e742d747270672f70352d726e672d763100000000000000000000000000000000020070352d666f756e646174696f6e2d666978747572657300312e302e300000000000000000020074726176656c5f737465705f636f6d6d697474656400636865636b2e643600666978747572652e7269736b2e6265656472696c6c5f636f727269646f722f6f6273657276655f616e645f77697468647261772f726561645f6573636170655f676170000000000000000001',
    sha256: '712b428cd907797eebd3eff5a6183f8d66945dfc4515934ec0bca2e691c8f9e6',
    rawU64: 8154684722988415358n, bound: 6n, boundedResult: 2n,
  },
] as const;

describe('p5-rng-v1 production port', () => {
  for (const vector of vectors) {
    it(`${vector.id} matches frozen bytes, digest, raw u64, and bounded result`, async () => {
      expect(bytesToHex(encodeP5RngV1Input(vector.key, vector.drawIndex))).toBe(vector.inputHex);
      const raw = await deriveP5RngRawDraw(provider, vector.key, vector.drawIndex);
      expect(raw.sha256Hex).toBe(vector.sha256);
      expect(raw.rawU64).toBe(vector.rawU64);
      const bounded = await drawP5Bounded(provider, vector.key, vector.drawIndex, vector.bound);
      expect(bounded.value).toBe(vector.boundedResult);
      expect(bounded.draws).toHaveLength(1);
      expect(bounded.draws[0]?.accepted).toBe(true);
      expect(bounded.draws[0]?.rawU64).toBe(vector.rawU64);
    });
  }

  it('records rejected raw draws and advances only the same keyed stream', async () => {
    const providerWithForcedRejection = {
      sha256: async (bytes: Uint8Array): Promise<Uint8Array> => {
        const digest = new Uint8Array(32);
        if (bytes[bytes.length - 1] === 0) digest.fill(0xff, 0, 8);
        return digest;
      },
    };
    const result = await drawP5Bounded(providerWithForcedRejection, vectors[0].key, 0n, 10n);
    expect(result.value).toBe(0n);
    expect(result.nextDrawIndex).toBe(2n);
    expect(result.draws).toHaveLength(2);
    expect(result.draws[0]?.accepted).toBe(false);
    expect(result.draws[0]?.drawIndex).toBe(0n);
    expect(result.draws[1]?.accepted).toBe(true);
    expect(result.draws[1]?.drawIndex).toBe(1n);
  });

  it('fails closed before hashing malformed seed/ASCII input or zero bounds', async () => {
    const key = vectors[0].key;
    expect(() => encodeP5RngV1Input({ ...key, runSeedHex: '0123456789ABCDEF0123456789ABCDEF' }, 0n)).toThrow(RangeError);
    expect(() => encodeP5RngV1Input({ ...key, subjectId: '비결정적' }, 0n)).toThrow(RangeError);
    await expect(drawP5Bounded(provider, key, 0n, 0n)).rejects.toThrow(RangeError);
  });
});
