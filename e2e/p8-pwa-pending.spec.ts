import { expect, test, type Page } from '@playwright/test';
import { spawn, type ChildProcess } from 'node:child_process';

const PREVIEW_URL = 'http://127.0.0.1:4173';
const P8_SLOT_ID = 'p8.vertical-slice';

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function originIsOnline(): Promise<boolean> {
  try {
    const response = await fetch(PREVIEW_URL, {
      headers: { 'cache-control': 'no-cache' },
      signal: AbortSignal.timeout(500),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForOriginState(expectedOnline: boolean): Promise<void> {
  const deadline = Date.now() + 10_000;
  while (Date.now() < deadline) {
    if (await originIsOnline() === expectedOnline) return;
    await delay(50);
  }
  throw new Error(`preview origin did not become ${expectedOnline ? 'online' : 'offline'}`);
}

async function startPreview(): Promise<ChildProcess> {
  const preview = spawn(process.execPath, [
    'node_modules/vite/bin/vite.js',
    'preview',
    '--host', '127.0.0.1',
    '--port', '4173',
    '--strictPort',
  ], { stdio: 'ignore' });
  await waitForOriginState(true);
  if (preview.exitCode !== null || preview.signalCode !== null) {
    throw new Error(`preview exited before becoming usable: exit=${preview.exitCode} signal=${preview.signalCode}`);
  }
  return preview;
}

async function stopPreview(preview: ChildProcess): Promise<void> {
  if (preview.exitCode === null && preview.signalCode === null) {
    preview.kill('SIGTERM');
    const gracefulDeadline = Date.now() + 5_000;
    while (preview.exitCode === null && preview.signalCode === null && Date.now() < gracefulDeadline) {
      await delay(50);
    }
    if (preview.exitCode === null && preview.signalCode === null) preview.kill('SIGKILL');
  }
  await waitForOriginState(false);
}

async function readP8SaveJson(page: Page): Promise<string> {
  return page.evaluate(async (slotId) => {
    const database = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('pokemon-ancient-trpg', 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error ?? new Error('failed to open P8 PWA acceptance database'));
    });
    try {
      return await new Promise<string>((resolve, reject) => {
        const transaction = database.transaction('save_slots', 'readonly');
        const request = transaction.objectStore('save_slots').get(slotId);
        request.onsuccess = () => {
          const record = request.result as { envelope?: unknown } | undefined;
          if (record?.envelope === undefined) {
            reject(new Error('P8 PWA save disappeared'));
            return;
          }
          resolve(JSON.stringify(record.envelope));
        };
        request.onerror = () => reject(request.error ?? new Error('failed to read P8 PWA acceptance save'));
      });
    } finally {
      database.close();
    }
  }, P8_SLOT_ID);
}

async function startNewRunToFirstPending(page: Page): Promise<void> {
  await page.getByRole('button', { name: 'Start new run' }).click();
  for (const index of [1, 2, 3]) {
    await expect(page.getByText(`Formative memory · ${index}/3`)).toBeVisible();
    await page.locator('button.choice').first().click();
  }
  await expect(page.getByText('Background reveal')).toBeVisible();
  await page.getByRole('button', { name: 'Choose a specialization' }).click();
  await page.getByRole('button', { name: 'Review character' }).click();
  await page.getByRole('button', { name: 'Begin the run' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
}

test('production service worker restores the exact P8 pending save with the preview origin physically down', async ({ page, browserName }) => {
  let preview: ChildProcess | null = await startPreview();
  try {
    await page.goto('/');
    await page.evaluate(async () => {
      if (!('serviceWorker' in navigator)) throw new Error('service workers are unavailable');
      await navigator.serviceWorker.ready;
    });
    await page.reload();
    await expect.poll(async () => page.evaluate(() => navigator.serviceWorker.controller?.state ?? null)).toBe('activated');

    await startNewRunToFirstPending(page);
    const pendingBeforeOffline = await readP8SaveJson(page);

    await stopPreview(preview);
    preview = null;
    expect(await originIsOnline()).toBe(false);

    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { name: 'Ancient Pokémon TRPG' })).toBeVisible();
    await page.getByRole('button', { name: 'Continue saved run' }).click();
    await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
    expect(await readP8SaveJson(page)).toBe(pendingBeforeOffline);

    console.log(`P8_BATCH05_PWA_PENDING ${JSON.stringify({ browserName, originDown: true, pendingPreserved: true })}`);
  } finally {
    if (preview !== null) await stopPreview(preview);
  }
});
