import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

test('opening V2 is a standalone full-screen game surface at 390x844', async ({ page }) => {
  await page.goto('/');

  const opening = page.getByTestId('opening-v2');
  await expect(opening).toBeVisible();
  await expect(page.locator('main.shell')).toHaveCount(0);
  await expect(opening.locator('.panel')).toHaveCount(0);
  await expect(opening.locator('.hero-panel')).toHaveCount(0);

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
