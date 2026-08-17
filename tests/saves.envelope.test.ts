import { describe, expect, it } from 'vitest';
import { saveEnvelopeV1FromWire, saveEnvelopeV1ToWire } from '../src/saves/saveEnvelope';
import { envelopeWithPending, pendingAtChoice, pendingAtReaction, pendingAtRoll } from './saves.fixtures';

describe('SaveEnvelopeV1 wire/runtime boundary', () => {
  for (const [name, pending] of [
    ['choice', pendingAtChoice()],
    ['roll', pendingAtRoll()],
    ['reaction', pendingAtReaction()],
  ] as const) {
    it(`round-trips exact ${name} pending state without bigint JSON loss`, () => {
      const runtime = envelopeWithPending(pending);
      const wire = saveEnvelopeV1ToWire(runtime);
      const serialized = JSON.stringify(wire);
      expect(serialized).toContain('18446744073709551614');
      expect(serialized).toContain('9007199254740993');
      expect(serialized).not.toContain('n"');
      expect(saveEnvelopeV1FromWire(JSON.parse(serialized) as unknown)).toEqual(runtime);
    });
  }

  it('fails closed on noncanonical, overflowing, future-version, or mismatched pending data', () => {
    const wire = saveEnvelopeV1ToWire(envelopeWithPending(pendingAtChoice()));
    expect(() => saveEnvelopeV1FromWire({ ...wire, transition_seq_u64: '01' })).toThrow(RangeError);
    expect(() => saveEnvelopeV1FromWire({ ...wire, transition_seq_u64: '18446744073709551616' })).toThrow(RangeError);
    expect(() => saveEnvelopeV1FromWire({ ...wire, save_schema_version: 2 })).toThrow(RangeError);
    expect(() => saveEnvelopeV1FromWire({
      ...wire,
      pending_event_instance: { ...wire.pending_event_instance, run_seed_hex: '00000000000000000000000000000003' },
    })).toThrow(RangeError);
  });
});
