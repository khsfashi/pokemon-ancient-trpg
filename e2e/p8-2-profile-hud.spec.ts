import { expect, test, type Page } from '@playwright/test';

async function chooseFirstFormativeAnswer(page: Page): Promise<void> {
  await page.locator('button.choice').first().click();
}

async function reachSpecialization(page: Page): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: 'New journey' }).click();
  await chooseFirstFormativeAnswer(page);
  await chooseFirstFormativeAnswer(page);
  await chooseFirstFormativeAnswer(page);
  await page.getByRole('button', { name: 'Choose a strength' }).click();
}

test('chooses a cosmetic portrait and keeps a persistent expedition HUD across save resume', async ({ page }) => {
  await reachSpecialization(page);

  const portraitGroup = page.getByRole('radiogroup', { name: 'Choose your portrait' });
  await expect(portraitGroup).toBeVisible();
  await expect(portraitGroup.getByRole('radio')).toHaveCount(3);
  await portraitGroup.getByRole('radio', { name: 'Herbalist portrait' }).click();
  await expect(portraitGroup.getByRole('radio', { name: 'Herbalist portrait' })).toHaveAttribute('aria-checked', 'true');

  await page.getByRole('button', { name: 'Review' }).click();
  await expect(page.locator('.character-portrait-preview .portrait-herbalist')).toBeVisible();
  await page.getByRole('button', { name: 'Set out' }).click();

  const hud = page.locator('.expedition-hud');
  await expect(hud).toBeVisible();
  await expect(hud.locator('.portrait-herbalist')).toBeVisible();
  await expect(hud.getByText('Vitality', { exact: false })).toBeVisible();
  await expect(hud.getByText('Fatigue / stamina · Ready', { exact: false })).toBeVisible();
  await expect(hud.getByText('Fear · Steady', { exact: false })).toBeVisible();
  await expect(hud.getByText('Injuries · None', { exact: false })).toBeVisible();
  await expect(hud.getByText(/Load 4\/[5-7]/)).toBeVisible();
  await expect(hud.getByText('Provisions')).toBeVisible();
  await expect(hud.getByText('Remedies')).toBeVisible();
  await expect(hud.getByText('Materials')).toBeVisible();

  await hud.locator('summary').click();
  await expect(hud.getByText('Vitality 0 → Incapacitated')).toBeVisible();
  await expect(hud.getByText('Death → only through an explicit lethal path')).toBeVisible();
  await expect(hud.getByText('Pokémon companions · 0/3')).toBeVisible();

  const geometry = await page.evaluate(() => ({
    width: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.width);

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.locator('.expedition-hud .portrait-herbalist')).toBeVisible();
  await expect(page.locator('.expedition-hud')).toBeVisible();
});

test('Korean HUD explains exertion and lethal-state rules without inventing a second stamina pool', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'One Korean semantic acceptance is sufficient; persistence coverage runs on all configured projects.');
  await page.addInitScript(() => window.localStorage.setItem('pokemon-ancient-trpg.locale.v1', 'ko-KR'));
  await page.goto('/');
  await page.getByRole('button', { name: '새 여정' }).click();
  await chooseFirstFormativeAnswer(page);
  await chooseFirstFormativeAnswer(page);
  await chooseFirstFormativeAnswer(page);
  await page.getByRole('button', { name: '강점 고르기' }).click();

  await expect(page.getByRole('radiogroup', { name: '내 모습 고르기' })).toBeVisible();
  await page.getByRole('button', { name: '확인하기' }).click();
  await page.getByRole('button', { name: '길을 나선다' }).click();

  const hud = page.locator('.expedition-hud');
  await expect(hud.getByText('활력(체력)', { exact: false })).toBeVisible();
  await expect(hud.getByText('피로(스태미나) · 정상', { exact: false })).toBeVisible();
  await expect(hud.getByText('하중 4/', { exact: false })).toBeVisible();
  await hud.locator('summary').click();
  await expect(hud.getByText('활력 0 → 행동불능')).toBeVisible();
  await expect(hud.getByText('사망 → 명시된 치명 경로에서만 발생')).toBeVisible();
});
