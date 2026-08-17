import { expect, test, type Page } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';
const P8_SLOT_ID = 'p8.vertical-slice';

async function readSaveJson(page: Page): Promise<string> {
  return page.evaluate(async (slotId) => {
    const database = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('pokemon-ancient-trpg', 1);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error ?? new Error('failed to open P8 localization database'));
    });
    try {
      const envelope = await new Promise<unknown>((resolve, reject) => {
        const transaction = database.transaction('save_slots', 'readonly');
        const request = transaction.objectStore('save_slots').get(slotId);
        request.onsuccess = () => resolve((request.result as { envelope?: unknown } | undefined)?.envelope);
        request.onerror = () => reject(request.error ?? new Error('failed to read P8 localization save'));
      });
      return JSON.stringify(envelope);
    } finally {
      database.close();
    }
  }, P8_SLOT_ID);
}

async function assertPhoneLayout(page: Page): Promise<void> {
  const metrics = await page.evaluate(() => {
    const languageButtons = [...document.querySelectorAll<HTMLButtonElement>('.language-switcher button')]
      .map((button) => button.getBoundingClientRect());
    return {
      viewportWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      minLanguageWidth: Math.min(...languageButtons.map((rect) => rect.width)),
      minLanguageHeight: Math.min(...languageButtons.map((rect) => rect.height)),
    };
  });
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
  expect(metrics.minLanguageWidth).toBeGreaterThanOrEqual(44);
  expect(metrics.minLanguageHeight).toBeGreaterThanOrEqual(44);
}

test('Korean/English switching is presentation-only, persistent, and phone-safe', async ({ page, browserName }) => {
  await page.addInitScript(({ key }) => {
    if (window.localStorage.getItem(key) === null) window.localStorage.setItem(key, 'ko-KR');
  }, { key: LOCALE_KEY });
  await page.goto('/');

  await expect(page.getByRole('heading', { name: '고대 포켓몬 TRPG' })).toBeVisible();
  await expect(page.getByRole('button', { name: '새 여정' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ko-KR');
  await assertPhoneLayout(page);

  await page.getByRole('button', { name: '새 여정' }).click();
  for (let index = 0; index < 3; index += 1) await page.locator('button.choice').first().click();
  await page.getByRole('button', { name: '강점 고르기' }).click();
  await page.getByRole('button', { name: '확인하기' }).click();
  await page.getByRole('button', { name: '길을 나선다' }).click();
  await expect(page.getByRole('heading', { name: '창고 앞에서 터진 고함' })).toBeVisible();

  const koreanSave = await readSaveJson(page);
  expect(koreanSave).toContain('slice.opening.market_call');

  await page.getByRole('button', { name: 'English' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-US');
  expect(await readSaveJson(page)).toBe(koreanSave);
  await assertPhoneLayout(page);

  await page.reload();
  await expect(page.getByRole('button', { name: 'Continue journey' })).toBeVisible();
  expect(await page.evaluate((key) => window.localStorage.getItem(key), LOCALE_KEY)).toBe('en-US');
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
  expect(await readSaveJson(page)).toBe(koreanSave);

  await page.getByRole('button', { name: '한국어' }).click();
  await expect(page.getByRole('heading', { name: '창고 앞에서 터진 고함' })).toBeVisible();
  expect(await readSaveJson(page)).toBe(koreanSave);

  console.log('P8_I18N_PROOF', JSON.stringify({ browserName, locales: ['ko-KR', 'en-US'], saveUnchanged: true }));
});
