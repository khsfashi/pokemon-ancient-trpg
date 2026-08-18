import { expect, test } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';

test.use({ viewport: { width: 390, height: 844 } });

test('opening V2 is a standalone full-screen game surface at 390x844', async ({ page, browserName }) => {
  await page.addInitScript(({ key }) => window.localStorage.setItem(key, 'ko-KR'), { key: LOCALE_KEY });
  await page.goto('/');

  const opening = page.getByTestId('opening-v2');
  await expect(opening).toBeVisible();
  await expect(page.locator('main.shell')).toHaveCount(0);
  await expect(opening.locator('.panel')).toHaveCount(0);
  await expect(opening.locator('.hero-panel')).toHaveCount(0);
  await expect(page.getByRole('heading', { name: '고대 포켓몬 TRPG' })).toBeVisible();
  await expect(page.getByRole('button', { name: '새 여정' })).toBeVisible();

  const art = opening.locator('.opening-v2__art');
  await expect(art).toBeVisible();
  await expect.poll(async () => art.evaluate((image) => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);

  const start = opening.locator('.opening-v2__start');
  await expect(start).toBeVisible();
  await expect(start).toBeEnabled();

  const geometry = await page.evaluate(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
  }));
  expect(geometry.width).toBe(390);
  expect(geometry.height).toBe(844);
  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.width);
  expect(geometry.scrollHeight).toBeLessThanOrEqual(geometry.height);

  const startBox = await start.boundingBox();
  expect(startBox).not.toBeNull();
  expect(startBox!.x).toBeGreaterThanOrEqual(0);
  expect(startBox!.x + startBox!.width).toBeLessThanOrEqual(390);
  expect(startBox!.y + startBox!.height).toBeLessThanOrEqual(844);

  if (browserName === 'chromium') {
    await page.screenshot({
      path: 'test-results/p8-3-opening-v2-390x844.png',
      fullPage: false,
    });
  }
});

test('V2 opening hands off to existing character creation without rendering both shells', async ({ page }) => {
  await page.goto('/');

  const opening = page.getByTestId('opening-v2');
  await expect(opening).toBeVisible();
  await opening.locator('.opening-v2__start').click();

  await expect(opening).toHaveCount(0);
  await expect(page.locator('main.shell')).toBeVisible();
  await expect(page.locator('.scene-stage .panel')).toBeVisible();
});
