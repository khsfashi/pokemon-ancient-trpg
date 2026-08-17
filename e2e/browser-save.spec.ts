import { expect, test } from '@playwright/test';

const SLOT_ID = 'p7-browser-acceptance';
const IMPORT_SLOT_ID = 'p7-browser-imported';

function uniqueDatabaseName(browserName: string): string {
  return `pokemon-ancient-trpg-p7-b06-${browserName}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

test('persists exact run state, resumes pending RNG records, and round-trips backup JSON', async ({ page, browserName }) => {
  const databaseName = uniqueDatabaseName(browserName);
  await page.goto('/');

  const initialWire = await page.evaluate(async ({ databaseName, slotId }) => {
    const [{ IndexedDbSaveStore }, saveModule, envelopeModule, generatedModule] = await Promise.all([
      import('/src/saves/indexedDbSaveStore.ts'),
      import('/src/saves/saveStore.ts'),
      import('/src/saves/saveEnvelope.ts'),
      import('/src/generated/runtimePack.ts'),
    ]);
    const store = new IndexedDbSaveStore(indexedDB, databaseName);
    const envelope = {
      saveSchemaVersion: 1,
      architectureContractVersion: 'p7-architecture-v1',
      ...generatedModule.runtimeContentIdentity,
      p5ContractVersion: 'p5-event-contract-v1',
      runSeedHex: '0000000000000000000000000000002a',
      transitionSeq: 18446744073709551614n,
      createdAtIso: '2026-08-17T04:00:00.000Z',
      updatedAtIso: '2026-08-17T04:00:00.000Z',
      authoritativeState: {
        location_ref: 'p7.acceptance.start',
        health: 7,
        companions: 0,
      },
    } as const;

    await saveModule.saveRuntimeEnvelope(store, slotId, envelope);
    const loaded = await saveModule.loadRuntimeEnvelope(store, slotId, generatedModule.runtimeContentIdentity);
    if (loaded === null) throw new Error('browser save did not persist');
    const wire = envelopeModule.saveEnvelopeV1ToWire(loaded);
    await store.close();
    return wire;
  }, { databaseName, slotId: SLOT_ID });

  expect(initialWire.transition_seq_u64).toBe('18446744073709551614');
  expect(initialWire.authoritative_state).toEqual({
    location_ref: 'p7.acceptance.start',
    health: 7,
    companions: 0,
  });

  await page.reload();
  const reloadedInitialWire = await page.evaluate(async ({ databaseName, slotId }) => {
    const [{ IndexedDbSaveStore }, saveModule, envelopeModule, generatedModule] = await Promise.all([
      import('/src/saves/indexedDbSaveStore.ts'),
      import('/src/saves/saveStore.ts'),
      import('/src/saves/saveEnvelope.ts'),
      import('/src/generated/runtimePack.ts'),
    ]);
    const store = new IndexedDbSaveStore(indexedDB, databaseName);
    const loaded = await saveModule.loadRuntimeEnvelope(store, slotId, generatedModule.runtimeContentIdentity);
    if (loaded === null) throw new Error('saved run disappeared after reload');
    const wire = envelopeModule.saveEnvelopeV1ToWire(loaded);
    await store.close();
    return wire;
  }, { databaseName, slotId: SLOT_ID });
  expect(reloadedInitialWire).toEqual(initialWire);

  const pendingWire = await page.evaluate(async ({ databaseName, slotId }) => {
    const [{ IndexedDbSaveStore }, saveModule, envelopeModule, generatedModule] = await Promise.all([
      import('/src/saves/indexedDbSaveStore.ts'),
      import('/src/saves/saveStore.ts'),
      import('/src/saves/saveEnvelope.ts'),
      import('/src/generated/runtimePack.ts'),
    ]);
    const store = new IndexedDbSaveStore(indexedDB, databaseName);
    const identity = generatedModule.runtimeContentIdentity;
    const runSeedHex = '0000000000000000000000000000002a';
    const pendingEventInstance = {
      pendingSchemaVersion: 'p5-pending-v1',
      p5ContractVersion: 'p5-event-contract-v1',
      ...identity,
      runSeedHex,
      instanceId: 'p7.acceptance.pending',
      eventId: 'p7.acceptance.event',
      contentRevision: 1,
      originTransitionSeq: 9007199254740993n,
      triggerId: 'travel_step_committed',
      evaluationOrdinal: 0,
      phase: 'awaiting_reaction',
      resolvedChoiceView: [
        { choiceId: 'observe_and_withdraw', visible: true, enabled: true },
      ],
      selectedChoiceId: 'observe_and_withdraw',
      completedRngDrawRecords: [
        {
          channel: 'check.d6',
          subjectId: 'p7.acceptance.event/observe_and_withdraw/read_escape_gap',
          drawIndex: 0n,
          rawU64: 4463312059452329917n,
          accepted: true,
          boundedResult: 1n,
        },
        {
          channel: 'check.d6',
          subjectId: 'p7.acceptance.event/observe_and_withdraw/read_escape_gap',
          drawIndex: 1n,
          rawU64: 8154684722988415358n,
          accepted: true,
          boundedResult: 2n,
        },
      ],
      completedCheckResult: {
        checkId: 'read_escape_gap',
        dice: [2, 3],
        total: 8,
        margin: -3,
        outcomeBand: 'setback',
        doublesOverlay: 'none',
      },
      pendingConsequence: 'fixture.consequence.light_sting',
      pendingReactionWindow: 'fixture.reaction.escape_smoke',
      precommitStateDigest: 'p7-acceptance-precommit',
    } as const;
    const envelope = {
      saveSchemaVersion: 1,
      architectureContractVersion: 'p7-architecture-v1',
      ...identity,
      p5ContractVersion: 'p5-event-contract-v1',
      runSeedHex,
      transitionSeq: 18446744073709551614n,
      createdAtIso: '2026-08-17T04:00:00.000Z',
      updatedAtIso: '2026-08-17T04:01:00.000Z',
      authoritativeState: {
        location_ref: 'p7.acceptance.corridor',
        health: 6,
        companions: 0,
      },
      pendingEventInstance,
    } as const;

    await saveModule.saveRuntimeEnvelope(store, slotId, envelope);
    const loaded = await saveModule.loadRuntimeEnvelope(store, slotId, identity);
    if (loaded === null) throw new Error('pending save did not persist');
    const wire = envelopeModule.saveEnvelopeV1ToWire(loaded);
    await store.close();
    return wire;
  }, { databaseName, slotId: SLOT_ID });

  expect(pendingWire.pending_event_instance?.origin_transition_seq_u64).toBe('9007199254740993');
  expect(pendingWire.pending_event_instance?.completed_rng_draw_records.map((draw) => draw.raw_u64)).toEqual([
    '4463312059452329917',
    '8154684722988415358',
  ]);

  await page.reload();
  const resumedPendingWire = await page.evaluate(async ({ databaseName, slotId }) => {
    const [{ IndexedDbSaveStore }, saveModule, envelopeModule, generatedModule] = await Promise.all([
      import('/src/saves/indexedDbSaveStore.ts'),
      import('/src/saves/saveStore.ts'),
      import('/src/saves/saveEnvelope.ts'),
      import('/src/generated/runtimePack.ts'),
    ]);
    const store = new IndexedDbSaveStore(indexedDB, databaseName);
    const loaded = await saveModule.loadRuntimeEnvelope(store, slotId, generatedModule.runtimeContentIdentity);
    if (loaded === null) throw new Error('pending save disappeared after reload');
    const wire = envelopeModule.saveEnvelopeV1ToWire(loaded);
    await store.close();
    return wire;
  }, { databaseName, slotId: SLOT_ID });
  expect(resumedPendingWire).toEqual(pendingWire);

  const backupRoundTrip = await page.evaluate(async ({ databaseName, sourceSlotId, importSlotId }) => {
    const [{ IndexedDbSaveStore }, saveModule, envelopeModule, generatedModule] = await Promise.all([
      import('/src/saves/indexedDbSaveStore.ts'),
      import('/src/saves/saveStore.ts'),
      import('/src/saves/saveEnvelope.ts'),
      import('/src/generated/runtimePack.ts'),
    ]);
    const store = new IndexedDbSaveStore(indexedDB, databaseName);
    const identity = generatedModule.runtimeContentIdentity;
    const source = await saveModule.loadRuntimeEnvelope(store, sourceSlotId, identity);
    if (source === null) throw new Error('source save missing before export');
    const backup = await saveModule.exportSaveJson(store, sourceSlotId, identity);
    if (backup === null) throw new Error('export unexpectedly returned null');
    const imported = await saveModule.importSaveJson(store, importSlotId, backup, identity);
    const result = {
      backup,
      sourceWire: envelopeModule.saveEnvelopeV1ToWire(source),
      importedWire: envelopeModule.saveEnvelopeV1ToWire(imported),
    };
    await store.close();
    return result;
  }, { databaseName, sourceSlotId: SLOT_ID, importSlotId: IMPORT_SLOT_ID });

  expect(backupRoundTrip.backup.endsWith('\n')).toBe(true);
  expect(JSON.parse(backupRoundTrip.backup)).toEqual(backupRoundTrip.sourceWire);
  expect(backupRoundTrip.importedWire).toEqual(backupRoundTrip.sourceWire);

  console.log(`P7_BROWSER_SAVE_PROOF ${browserName} ${JSON.stringify({
    transitionSeq: resumedPendingWire.transition_seq_u64,
    pendingPhase: resumedPendingWire.pending_event_instance?.phase,
    rngDrawCount: resumedPendingWire.pending_event_instance?.completed_rng_draw_records.length,
    backupBytes: new TextEncoder().encode(backupRoundTrip.backup).byteLength,
  })}`);

  await page.evaluate(async (databaseName) => {
    await new Promise<void>((resolve, reject) => {
      const request = indexedDB.deleteDatabase(databaseName);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error ?? new Error('failed to remove acceptance database'));
      request.onblocked = () => reject(new Error('acceptance database deletion was blocked'));
    });
  }, databaseName);
});
