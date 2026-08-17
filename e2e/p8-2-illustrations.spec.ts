import { expect, test, type Page } from '@playwright/test';

async function reachOpeningScene(page: Page): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: 'New journey' }).click();
  await page.locator('button.choice').first().click();
  await page.locator('button.choice').first().click();
  await page.locator('button.choice').first().click();
  await page.getByRole('button', { name: 'Choose a strength' }).click();
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'Set out' }).click();
}

test('loads a stable opening illustration on the phone layout', async ({ page }) => {
  await reachOpeningScene(page);

  const illustration = page.locator(
    '.scene-illustration[data-resource-id="p8.illustration.opening.reedbank-square"]',
  );
  await expect(illustration).toBeVisible();
  await expect(illustration).toHaveAttribute('data-slot', 'locality');
  await expect(illustration).toHaveAttribute('data-media-state', 'loaded');
  await expect(illustration.locator('img.scene-illustration-image')).toBeVisible();

  const geometry = await page.evaluate(() => ({
    width: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.width);
});

test('missing optional scene media falls back without locking gameplay', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'One browser is sufficient for the forced media-failure contract.');
  await page.route('**/illustrations/reedbank-square.svg', (route) => route.abort());
  await reachOpeningScene(page);

  const illustration = page.locator(
    '.scene-illustration[data-resource-id="p8.illustration.opening.reedbank-square"]',
  );
  await expect(illustration).toHaveAttribute('data-media-state', 'fallback');
  await expect(illustration.locator('.scene-illustration-placeholder')).toBeVisible();

  await page.locator('button.narrative-copy').click();
  const firstChoice = page.locator('button.choice').first();
  await expect(firstChoice).toBeEnabled();
});
