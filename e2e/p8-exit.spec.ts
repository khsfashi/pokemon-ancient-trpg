import { expect, test, type Page } from '@playwright/test';

const P8_SLOT_ID = 'p8.vertical-slice';

interface P8SaveWire {
  readonly transition_seq_u64: string;
  readonly authoritative_state: {
    readonly world: { readonly current_locality: string };
    readonly survival: { readonly resource_pools: { readonly provisions: number } };
    readonly pokemon: {
      readonly companion_slots: readonly unknown[];
      readonly direct_interactions: readonly string[];
    };
    readonly events: { readonly narrative_flags: Readonly<Record<string, boolean>> };
  };
  readonly pending_event_instance?: {
    readonly instance_id: string;
    readonly event_id: string;
  };
}

async function readP8SaveWire(page: Page): Promise<P8SaveWire> {
  return page.evaluate(async (slotId) => {
    const database = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('pokemon-ancient-trpg', 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error ?? new Error('failed to open P8 acceptance database'));
    });
    try {
      return await new Promise<P8SaveWire>((resolve, reject) => {
        const transaction = database.transaction('save_slots', 'readonly');
        const request = transaction.objectStore('save_slots').get(slotId);
        request.onsuccess = () => {
          const record = request.result as { envelope?: P8SaveWire } | undefined;
          if (record?.envelope === undefined) {
            reject(new Error('P8 save disappeared'));
            return;
          }
          resolve(record.envelope);
        };
        request.onerror = () => reject(request.error ?? new Error('failed to read P8 acceptance save'));
      });
    } finally {
      database.close();
    }
  }, P8_SLOT_ID);
}

async function readP8SaveJson(page: Page): Promise<string> {
  return JSON.stringify(await readP8SaveWire(page));
}

async function chooseFirstFormativeAnswer(page: Page): Promise<void> {
  await page.locator('button.choice').first().click();
}

async function startNewRunToFirstPending(page: Page): Promise<void> {
  await page.getByRole('button', { name: 'New journey' }).click();
  await expect(page.getByText('A memory from before · 1/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);
  await expect(page.getByText('A memory from before · 2/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);
  await expect(page.getByText('A memory from before · 3/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);
  await expect(page.getByText('Your past')).toBeVisible();
  await page.getByRole('button', { name: 'Choose a strength' }).click();
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'Set out' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
}

async function resolveCurrentScene(page: Page, choiceIndex = 0): Promise<void> {
  const choices = page.locator('button.choice:not([disabled])');
  await expect(choices.nth(choiceIndex)).toBeVisible();
  await choices.nth(choiceIndex).click();
  await expect(page.getByText('Afterward', { exact: false })).toBeVisible();
}

async function continueAfterConsequence(page: Page): Promise<void> {
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
}

async function assertPhoneUsability(page: Page): Promise<void> {
  const metrics = await page.evaluate(() => {
    const buttons = [...document.querySelectorAll<HTMLButtonElement>('button')]
      .filter((button) => {
        const rect = button.getBoundingClientRect();
        const style = getComputedStyle(button);
        return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
      })
      .map((button) => button.getBoundingClientRect());
    return {
      viewportWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      minButtonWidth: Math.min(...buttons.map((rect) => rect.width)),
      minButtonHeight: Math.min(...buttons.map((rect) => rect.height)),
    };
  });
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
  expect(metrics.minButtonWidth).toBeGreaterThanOrEqual(44);
  expect(metrics.minButtonHeight).toBeGreaterThanOrEqual(44);
}

test('production Chromium/WebKit completes the deterministic zero-companion slice with exact pending and committed reloads', async ({ page, browserName }) => {
  await page.goto('/');
  await startNewRunToFirstPending(page);
  await assertPhoneUsability(page);

  const pendingBeforeReload = await readP8SaveJson(page);
  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
  expect(await readP8SaveJson(page)).toBe(pendingBeforeReload);

  await resolveCurrentScene(page);
  await expect(page.getByText('record 1', { exact: false })).toBeVisible();
  const committedBeforeReload = await readP8SaveJson(page);

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'Go to the next scene' })).toBeVisible();
  expect(await readP8SaveJson(page)).toBe(committedBeforeReload);
  await page.getByRole('button', { name: 'Continue journey' }).click();

  const remainingSceneTitles = [
    "The Steward's Errand",
    'A Promise at the Mill',
    'Beyond the Last Dry Marker',
    'Weedle at the Crossing',
    'The Windbreak Boundary',
  ];
  for (const sceneTitle of remainingSceneTitles) {
    await expect(page.getByRole('heading', { name: sceneTitle })).toBeVisible();
    if (sceneTitle === 'Weedle at the Crossing') {
      await expect(page.getByText('No clear likeness has been recorded here yet.', { exact: false })).toBeVisible();
      await assertPhoneUsability(page);
    }
    await resolveCurrentScene(page);
    await continueAfterConsequence(page);
  }

  await expect(page.getByRole('heading', { name: 'Return to Reedbank' })).toBeVisible();
  await resolveCurrentScene(page);
  await page.getByRole('button', { name: 'See journey summary' }).click();

  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
  await expect(page.getByText('Returned without a companion: complete', { exact: false })).toBeVisible();
  const endingGrid = page.locator('.ending-grid');
  await expect(endingGrid.getByText('Companions', { exact: true })).toBeVisible();
  await expect(endingGrid.getByText('0/3', { exact: true })).toBeVisible();
  await assertPhoneUsability(page);

  const saved = await readP8SaveWire(page);
  expect(saved.transition_seq_u64).toBe('7');
  expect(saved.pending_event_instance).toBeUndefined();
  expect(saved.authoritative_state.world.current_locality).toBe('reedbank-settlement');
  expect(saved.authoritative_state.survival.resource_pools.provisions).toBe(2);
  expect(saved.authoritative_state.pokemon.companion_slots).toEqual([null, null, null]);
  expect(saved.authoritative_state.events.narrative_flags['slice.zero_companion_route_complete']).toBe(true);
  expect(saved.authoritative_state.pokemon.direct_interactions).toEqual([
    '13:weedle.crossing:old-levee',
    '15:beedrill.windbreak:old-levee',
    '19:rattata.storetrail:old-levee',
  ]);

  console.log(`P8_BATCH05_FULL_RUN ${JSON.stringify({
    browserName,
    transitionSeq: saved.transition_seq_u64,
    locality: saved.authoritative_state.world.current_locality,
    provisions: saved.authoritative_state.survival.resource_pools.provisions,
    companions: saved.authoritative_state.pokemon.companion_slots.filter((slot) => slot !== null).length,
    directInteractions: saved.authoritative_state.pokemon.direct_interactions.length,
  })}`);
});

test('production browser reloads an exactly committed checked choice before later input', async ({ page, browserName }) => {
  await page.goto('/');
  await startNewRunToFirstPending(page);

  const directScenesBeforeCheck = [
    'A Call Across the Square',
    "The Steward's Errand",
    'A Promise at the Mill',
    'Beyond the Last Dry Marker',
  ];
  for (const sceneTitle of directScenesBeforeCheck) {
    await expect(page.getByRole('heading', { name: sceneTitle })).toBeVisible();
    await resolveCurrentScene(page);
    await continueAfterConsequence(page);
  }

  await expect(page.getByRole('heading', { name: 'Weedle at the Crossing' })).toBeVisible();
  await resolveCurrentScene(page, 1);
  const checkBand = await page.locator('.check-band').innerText();
  expect(checkBand.toLowerCase().startsWith('check:')).toBe(true);
  const checkedBeforeReload = await readP8SaveJson(page);

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'Go to the next scene' })).toBeVisible();
  expect(await readP8SaveJson(page)).toBe(checkedBeforeReload);
  expect((await readP8SaveWire(page)).transition_seq_u64).toBe('5');

  console.log(`P8_BATCH05_CHECK_RELOAD ${JSON.stringify({ browserName, checkBand, transitionSeq: '5' })}`);
});