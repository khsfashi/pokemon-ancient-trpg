import { expect, test, type Page } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';

async function startKoreanRun(page: Page): Promise<void> {
  await page.addInitScript(({ key }) => window.localStorage.setItem(key, 'ko-KR'), { key: LOCALE_KEY });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('button', { name: '새 여정' }).click();
  for (let index = 0; index < 3; index += 1) await page.locator('button.choice').first().click();
  await page.getByRole('button', { name: '강점 고르기' }).click();
  await page.getByRole('button', { name: '확인하기' }).click();
  await page.getByRole('button', { name: '길을 나선다' }).click();
}

async function resolveFirstChoiceAndContinue(page: Page): Promise<void> {
  await page.locator('button.choice:not([disabled])').first().click();
  await page.getByRole('button', { name: '계속', exact: true }).click();
}

async function reachWindbreak(page: Page): Promise<void> {
  await startKoreanRun(page);
  for (const sceneTitle of [
    '창고 앞에서 터진 고함',
    '관리인의 부탁',
    '돌아오면 들려줘',
    '마지막 돌표식 너머',
    '길을 건너는 뿔충이',
  ]) {
    await expect(page.getByRole('heading', { name: sceneTitle })).toBeVisible();
    await resolveFirstChoiceAndContinue(page);
  }
  await expect(page.getByRole('heading', { name: '날갯소리 아래의 지름길' })).toBeVisible();
}

test('windbreak golden screen is scene-first, raster-authored and phone-contained', async ({ page }, testInfo) => {
  await reachWindbreak(page);

  const viewport = page.viewportSize();
  expect(viewport).toEqual({ width: 390, height: 844 });

  const hud = page.locator('.expedition-hud');
  const illustration = page.locator('.scene-illustration[data-resource-id="p8.illustration.orchard.windbreak-boundary"]');
  const choices = page.locator('.choice-stack button.choice:not([disabled])');

  await expect(hud).toBeVisible();
  await expect(illustration).toHaveAttribute('data-media-state', 'loaded');
  await expect(choices).toHaveCount(2);
  await expect(hud.locator('.readiness-strip')).toBeHidden();
  await expect(hud.locator('.resource-grid > div').nth(1)).toBeHidden();
  await expect(hud.locator('.resource-grid > div').nth(2)).toBeHidden();

  const raster = illustration.locator('img.scene-illustration-image');
  await expect(raster).toBeVisible();

  const geometry = await page.evaluate(() => {
    const hud = document.querySelector<HTMLElement>('.expedition-hud')!;
    const illustration = document.querySelector<HTMLElement>('.scene-illustration[data-resource-id="p8.illustration.orchard.windbreak-boundary"]')!;
    const narrative = document.querySelector<HTMLElement>('.narrative-copy')!;
    const choiceButtons = [...document.querySelectorAll<HTMLElement>('.choice-stack button.choice:not([disabled])')];
    const raster = illustration.querySelector<HTMLImageElement>('img.scene-illustration-image')!;
    const vitalityIconHost = document.querySelector<HTMLElement>('.vitality-block > div:first-child > span')!;
    const staminaIconHost = document.querySelector<HTMLElement>('.hud-chip-row > span:nth-child(1)')!;
    const injuryIconHost = document.querySelector<HTMLElement>('.hud-chip-row > span:nth-child(3)')!;
    const provisionsIconHost = document.querySelector<HTMLElement>('.resource-grid > div:first-child')!;
    const lastChoice = choiceButtons.at(-1)!.getBoundingClientRect();
    const authoredIconHosts = [vitalityIconHost, staminaIconHost, injuryIconHost, provisionsIconHost];
    const retiredGlyphHosts = [staminaIconHost, injuryIconHost, provisionsIconHost];
    return {
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      hudHeight: hud.getBoundingClientRect().height,
      illustrationHeight: illustration.getBoundingClientRect().height,
      narrativeHeight: narrative.getBoundingClientRect().height,
      lastChoiceBottom: lastChoice.bottom,
      rasterWidth: raster.naturalWidth,
      rasterHeight: raster.naturalHeight,
      rasterRendering: getComputedStyle(raster).imageRendering,
      narrativeFont: getComputedStyle(narrative).fontFamily,
      iconBackgrounds: authoredIconHosts.map((node) => getComputedStyle(node).backgroundImage),
      retiredGlyphContents: retiredGlyphHosts.map((node) => getComputedStyle(node, '::before').content),
    };
  });

  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.innerWidth);
  expect(geometry.hudHeight).toBeGreaterThanOrEqual(60);
  expect(geometry.hudHeight).toBeLessThanOrEqual(80);
  expect(geometry.illustrationHeight).toBeGreaterThanOrEqual(240);
  expect(geometry.illustrationHeight).toBeLessThanOrEqual(280);
  expect(geometry.narrativeHeight).toBeGreaterThanOrEqual(180);
  expect(geometry.narrativeHeight).toBeLessThanOrEqual(220);
  expect(geometry.lastChoiceBottom).toBeLessThanOrEqual(geometry.innerHeight);
  expect(geometry.rasterWidth).toBe(384);
  expect(geometry.rasterHeight).toBe(276);
  expect(geometry.rasterRendering).toBe('pixelated');
  expect(geometry.narrativeFont).not.toContain('NeoDunggeunmo');
  expect(geometry.iconBackgrounds.every((value) => value !== 'none')).toBe(true);
  expect(geometry.retiredGlyphContents.every((value) => value === 'none')).toBe(true);

  await testInfo.attach('windbreak-390x844', {
    body: await page.screenshot({ fullPage: false }),
    contentType: 'image/png',
  });
});
