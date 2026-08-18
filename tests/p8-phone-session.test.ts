import { describe, expect, it } from 'vitest';
import { runP8SliceReplay } from '../src/content/p8SliceReplay';
import { P8_SLICE_REPLAYS } from '../src/content/p8SliceContent';
import { P8_SLICE_SCENE_SEQUENCE } from '../src/content/p8SlicePresentation';
import { deriveP8ExpeditionProfile } from '../src/app/ProfileHud';
import { p8AuthorityStateFromJson } from '../src/domain/p8AuthorityJson';
import { p8AuthorityStateToJson } from '../src/domain/p8Authority';
import { P8BrowserSession } from '../src/platform/p8BrowserSession';
import { WebCryptoHashProvider } from '../src/platform/webCryptoHashProvider';
import type { SaveEnvelopeV1Wire } from '../src/saves/saveEnvelope';
import type { SaveStore } from '../src/saves/saveStore';

class MemorySaveStore implements SaveStore {
  public value: SaveEnvelopeV1Wire | null = null;

  public async load(_slotId: string): Promise<unknown | null> {
    return this.value === null ? null : structuredClone(this.value);
  }

  public async replace(_slotId: string, envelope: SaveEnvelopeV1Wire): Promise<void> {
    this.value = structuredClone(envelope);
  }
}

const hash = new WebCryptoHashProvider();
const fixedNow = () => new Date('2026-08-17T07:40:00.000Z');

describe('P8 Batch 04 authority save restore', () => {
  it('round-trips a completed authority state including canonical direct-interaction identities', async () => {
    const replay = await runP8SliceReplay(hash, P8_SLICE_REPLAYS.zeroCompanion);
    const restored = p8AuthorityStateFromJson(replay.stateJson);

    expect(p8AuthorityStateToJson(restored)).toEqual(replay.stateJson);
    expect(restored.pokemon.directInteractions).toEqual([
      '13:weedle.crossing:old-levee',
      '15:beedrill.windbreak:old-levee',
      '19:rattata.storetrail:old-levee',
    ]);
  });
});

describe('P8 Batch 04 browser session integration', () => {
  it('starts the owner-facing slice within comfortable Load instead of showing immediate overload', async () => {
    const definition = P8_SLICE_REPLAYS.zeroCompanion;
    const store = new MemorySaveStore();
    const active = new P8BrowserSession({ saveStore: store, hashProvider: hash, now: fixedNow });

    const snapshot = await active.startNewRun(definition.character, definition.runSeedHex);
    const authority = snapshot.authority!;
    const profile = deriveP8ExpeditionProfile(authority);

    expect(authority.survival.resourcePools).toEqual({ provisions: 1, remedies: 1, materials: 0 });
    expect(profile.currentLoad).toBeLessThanOrEqual(profile.comfortableLoad);
    expect(profile.burdened).toBe(false);
  });

  it('resumes every pending event exactly and every committed checkpoint without Preact authority', async () => {
    const definition = P8_SLICE_REPLAYS.zeroCompanion;
    const store = new MemorySaveStore();
    let active = new P8BrowserSession({ saveStore: store, hashProvider: hash, now: fixedNow });

    let snapshot = await active.startNewRun(definition.character, definition.runSeedHex);
    expect(snapshot.transitionSeq).toBe(0n);
    expect(snapshot.pending).toBeNull();
    expect(store.value?.pending_event_instance).toBeUndefined();

    for (let index = 0; index < definition.inputs.length; index += 1) {
      const input = definition.inputs[index]!;
      snapshot = await active.prepareNextScene();
      expect(snapshot.scene?.eventId).toBe(P8_SLICE_SCENE_SEQUENCE[index]!.eventId);
      expect(snapshot.pending?.eventId).toBe(input.expectedEventId);
      const pendingInstanceId = snapshot.pending!.instanceId;
      const precommitState = p8AuthorityStateToJson(snapshot.authority!);
      expect(store.value?.pending_event_instance?.instance_id).toBe(pendingInstanceId);

      active = new P8BrowserSession({ saveStore: store, hashProvider: hash, now: fixedNow });
      const resumedPending = await active.resume();
      expect(resumedPending.pending?.instanceId).toBe(pendingInstanceId);
      expect(p8AuthorityStateToJson(resumedPending.authority!)).toEqual(precommitState);
      expect(resumedPending.transitionSeq).toBe(BigInt(index));

      const committed = await active.resolveChoice(input.choiceId);
      expect(committed.pending).toBeNull();
      expect(committed.transitionSeq).toBe(BigInt(index + 1));
      expect(store.value?.pending_event_instance).toBeUndefined();
      const committedState = p8AuthorityStateToJson(committed.authority!);

      active = new P8BrowserSession({ saveStore: store, hashProvider: hash, now: fixedNow });
      const resumedCommitted = await active.resume();
      expect(resumedCommitted.pending).toBeNull();
      expect(resumedCommitted.transitionSeq).toBe(BigInt(index + 1));
      expect(p8AuthorityStateToJson(resumedCommitted.authority!)).toEqual(committedState);
      snapshot = resumedCommitted;
    }

    expect(snapshot.status).toBe('ended');
    expect(snapshot.authority?.pokemon.companionSlots).toEqual([null, null, null]);
    expect(snapshot.authority?.world.currentLocality).toBe('reedbank-settlement');
    expect(snapshot.authority?.survival.resourcePools.provisions).toBe(0);
    expect(snapshot.authority?.events.narrativeFlags['slice.zero_companion_route_complete']).toBe(true);
  });

  it('does not select the next event merely by resuming a committed checkpoint', async () => {
    const definition = P8_SLICE_REPLAYS.zeroCompanion;
    const store = new MemorySaveStore();
    const first = new P8BrowserSession({ saveStore: store, hashProvider: hash, now: fixedNow });
    await first.startNewRun(definition.character, definition.runSeedHex);
    await first.prepareNextScene();
    await first.resolveChoice(definition.inputs[0]!.choiceId);

    const resumed = new P8BrowserSession({ saveStore: store, hashProvider: hash, now: fixedNow });
    const snapshot = await resumed.resume();
    expect(snapshot.transitionSeq).toBe(1n);
    expect(snapshot.pending).toBeNull();
    expect(store.value?.pending_event_instance).toBeUndefined();
  });
});
