import { expect, test } from '@playwright/test';

const SOURCE_SLOT_ID = 'p8.backup.source';
const IMPORT_SLOT_ID = 'p8.backup.imported';

function uniqueDatabaseName(browserName: string): string {
  return `pokemon-ancient-trpg-p8-b05-${browserName}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

test('P8 authoritative pending state round-trips through the existing P7 backup boundary', async ({ page, browserName }) => {
  const databaseName = uniqueDatabaseName(browserName);
  await page.goto('/');

  const result = await page.evaluate(async ({ databaseName, sourceSlotId, importSlotId }) => {
    const [sessionModule, storeModule, saveModule, contentModule, presentationModule] = await Promise.all([
      import('/src/platform/p8BrowserSession.ts'),
      import('/src/saves/indexedDbSaveStore.ts'),
      import('/src/saves/saveStore.ts'),
      import('/src/content/p8SliceContent.ts'),
      import('/src/content/p8SlicePresentation.ts'),
    ]);

    const store = new storeModule.IndexedDbSaveStore(indexedDB, databaseName);
    try {
      const answers = contentModule.P8_SLICE_PRESENTATION_PROMPTS.map((prompt) => prompt.answers[0]!.answerId);
      if (answers.length !== 3) throw new Error('P8 acceptance expected exactly three formative prompts');
      const specialization = presentationModule.P8_SLICE_SPECIALIZATIONS[0]!;
      const session = new sessionModule.P8BrowserSession({ saveStore: store, slotId: sourceSlotId });
      await session.startNewRun({
        answerIds: [answers[0]!, answers[1]!, answers[2]!],
        attributeIncreases: [...specialization.attributeIncreases],
        personalCompetenceId: specialization.personalCompetenceId,
      }, '0000000000000000000000000000002a');
      const prepared = await session.prepareNextScene();
      if (prepared.pending === null) throw new Error('P8 acceptance pending event was not prepared');

      const backup = await saveModule.exportSaveJson(store, sourceSlotId, contentModule.P8_SLICE_CONTENT_IDENTITY);
      if (backup === null) throw new Error('P8 backup export unexpectedly returned null');
      await saveModule.importSaveJson(store, importSlotId, backup, contentModule.P8_SLICE_CONTENT_IDENTITY);
      const importedBackup = await saveModule.exportSaveJson(store, importSlotId, contentModule.P8_SLICE_CONTENT_IDENTITY);
      if (importedBackup === null) throw new Error('P8 imported backup unexpectedly returned null');

      const importedSession = new sessionModule.P8BrowserSession({ saveStore: store, slotId: importSlotId });
      const resumed = await importedSession.resume();
      if (resumed.pending === null || resumed.authority === null) throw new Error('P8 imported pending state did not resume');

      return {
        backup,
        importedBackup,
        transitionSeq: resumed.transitionSeq.toString(),
        pendingInstanceId: resumed.pending.instanceId,
        pendingEventId: resumed.pending.eventId,
        locality: resumed.authority.world.currentLocality,
        companions: resumed.authority.pokemon.companionSlots.filter((slot) => slot !== null).length,
      };
    } finally {
      await store.close();
    }
  }, { databaseName, sourceSlotId: SOURCE_SLOT_ID, importSlotId: IMPORT_SLOT_ID });

  expect(result.backup.endsWith('\n')).toBe(true);
  expect(result.importedBackup).toBe(result.backup);
  expect(result.transitionSeq).toBe('0');
  expect(result.pendingEventId).toBe('slice.opening.market_call');
  expect(result.pendingInstanceId.length).toBeGreaterThan(16);
  expect(result.locality).toBe('reedbank-settlement');
  expect(result.companions).toBe(0);

  console.log(`P8_BATCH05_BACKUP ${JSON.stringify({
    browserName,
    transitionSeq: result.transitionSeq,
    pendingEventId: result.pendingEventId,
    backupBytes: new TextEncoder().encode(result.backup).byteLength,
  })}`);

  await page.evaluate(async (databaseName) => {
    await new Promise<void>((resolve, reject) => {
      const request = indexedDB.deleteDatabase(databaseName);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error ?? new Error('failed to remove P8 acceptance database'));
      request.onblocked = () => reject(new Error('P8 acceptance database deletion was blocked'));
    });
  }, databaseName);
});
