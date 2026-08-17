import { describe, expect, it } from 'vitest';
import type { SaveEnvelopeV1Wire } from '../src/saves/saveEnvelope';
import {
  exportSaveJson,
  importSaveJson,
  loadRuntimeEnvelope,
  saveRuntimeEnvelope,
  type SaveStore,
} from '../src/saves/saveStore';
import { saveEnvelopeV1ToWire } from '../src/saves/saveEnvelope';
import { contentIdentity, envelopeWithPending, pendingAtChoice, pendingAtReaction, pendingAtRoll } from './saves.fixtures';

function cloneWire(value: SaveEnvelopeV1Wire): SaveEnvelopeV1Wire {
  return JSON.parse(JSON.stringify(value)) as SaveEnvelopeV1Wire;
}

class MemorySaveStore implements SaveStore {
  private readonly slots = new Map<string, SaveEnvelopeV1Wire>();
  public replacementCount = 0;

  public async load(slotId: string): Promise<SaveEnvelopeV1Wire | null> {
    const value = this.slots.get(slotId);
    return value === undefined ? null : cloneWire(value);
  }

  public async replace(slotId: string, envelope: SaveEnvelopeV1Wire): Promise<void> {
    this.replacementCount += 1;
    this.slots.set(slotId, cloneWire(envelope));
  }
}

describe('atomic save/import and exact pending resume foundation', () => {
  for (const [name, pending] of [
    ['choice', pendingAtChoice()],
    ['roll', pendingAtRoll()],
    ['reaction', pendingAtReaction()],
  ] as const) {
    it(`reloads ${name} pending state without reroll/reselection`, async () => {
      const store = new MemorySaveStore();
      const runtime = envelopeWithPending(pending);
      await saveRuntimeEnvelope(store, 'slot-1', runtime);
      const loaded = await loadRuntimeEnvelope(store, 'slot-1', contentIdentity);
      expect(loaded).toEqual(runtime);
      expect(loaded?.pendingEventInstance?.completedRngDrawRecords).toEqual(pending.completedRngDrawRecords);
    });
  }

  it('exports canonical wire JSON and imports it into another slot without precision loss', async () => {
    const store = new MemorySaveStore();
    const runtime = envelopeWithPending(pendingAtReaction());
    await saveRuntimeEnvelope(store, 'slot-1', runtime);

    const backup = await exportSaveJson(store, 'slot-1', contentIdentity);
    expect(backup).not.toBeNull();
    expect(backup?.endsWith('\n')).toBe(true);
    expect(JSON.parse(backup ?? 'null')).toEqual(saveEnvelopeV1ToWire(runtime));

    const imported = await importSaveJson(store, 'slot-2', backup ?? '', contentIdentity);
    expect(imported).toEqual(runtime);
    expect(await loadRuntimeEnvelope(store, 'slot-2', contentIdentity)).toEqual(runtime);
    expect(imported.transitionSeq).toBe(18446744073709551614n);
    expect(imported.pendingEventInstance?.originTransitionSeq).toBe(9007199254740993n);
  });

  it('returns null when exporting an empty slot', async () => {
    const store = new MemorySaveStore();
    await expect(exportSaveJson(store, 'missing-slot', contentIdentity)).resolves.toBeNull();
    expect(store.replacementCount).toBe(0);
  });

  it('validates import completely before one replacement and leaves prior slot intact on failure', async () => {
    const store = new MemorySaveStore();
    const original = envelopeWithPending(pendingAtChoice());
    await saveRuntimeEnvelope(store, 'slot-1', original);
    const beforeInvalidImport = store.replacementCount;

    await expect(importSaveJson(store, 'slot-1', '{bad json', contentIdentity)).rejects.toThrow(SyntaxError);
    await expect(importSaveJson(
      store,
      'slot-1',
      JSON.stringify({ ...saveEnvelopeV1ToWire(envelopeWithPending(pendingAtReaction())), content_digest_sha256: 'b'.repeat(64) }),
      contentIdentity,
    )).rejects.toThrow(RangeError);

    expect(store.replacementCount).toBe(beforeInvalidImport);
    expect(await loadRuntimeEnvelope(store, 'slot-1', contentIdentity)).toEqual(original);

    const replacement = envelopeWithPending(pendingAtRoll());
    const imported = await importSaveJson(store, 'slot-1', JSON.stringify(saveEnvelopeV1ToWire(replacement)), contentIdentity);
    expect(imported).toEqual(replacement);
    expect(store.replacementCount).toBe(beforeInvalidImport + 1);
    expect(await loadRuntimeEnvelope(store, 'slot-1', contentIdentity)).toEqual(replacement);
  });
});
