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

test('windbreak golden screen is scene-first, raster-authored and phone-contained', async ({ page }) => {
  await reachWindbreak(page);

  const viewport = page.viewportSize();
  expect(viewport).toEqual({ width: 390, height: 844 });

  const hud = page.locator('.expedition-hud');
  const goldenHud = hud.locator('.golden-hud-surface');
  const illustration = page.locator('.scene-illustration[data-resource-id="p8.illustration.orchard.windbreak-boundary"]');
  const choices = page.locator('.choice-stack button.choice:not([disabled])');

  await expect(hud).toBeVisible();
  await expect(goldenHud).toBeVisible();
  await expect(goldenHud.locator('img.golden-hud-icon')).toHaveCount(4);
  await expect(goldenHud.locator('.golden-hud-identity .portrait-art.compact')).toBeVisible();
  await expect(illustration).toHaveAttribute('data-media-state', 'loaded');
  await expect(choices).toHaveCount(2);

  // Existing deep/stat-heavy HUD remains implemented for its existing surfaces,
  // but it must not consume persistent pixels in the golden gameplay hierarchy.
  await expect(hud.locator('.hud-primary-row')).toBeHidden();
  await expect(hud.locator('.hud-chip-row')).toBeHidden();
  await expect(hud.locator('.readiness-strip')).toBeHidden();
  await expect(hud.locator('.resource-grid')).toBeHidden();
  await expect(hud.locator('.profile-details')).toBeHidden();

  const goldenHudText = await goldenHud.innerText();
  for (const forbidden of ['공격', '방어', '현장', '하중', '사망', '◇', '■', '▧', '+']) {
    expect(goldenHudText).not.toContain(forbidden);
  }

  const raster = illustration.locator('img.scene-illustration-image');
  await expect(raster).toBeVisible();

  const geometry = await page.evaluate(() => {
    const hud = document.querySelector<HTMLElement>('.expedition-hud')!;
    const goldenHud = document.querySelector<HTMLElement>('.golden-hud-surface')!;
    const portrait = goldenHud.querySelector<SVGSVGElement>('.golden-hud-identity .portrait-art.compact')!;
    const portraitParts = [...portrait.children] as SVGElement[];
    const illustration = document.querySelector<HTMLElement>('.scene-illustration[data-resource-id="p8.illustration.orchard.windbreak-boundary"]')!;
    const narrative = document.querySelector<HTMLElement>('.narrative-copy')!;
    const choiceButtons = [...document.querySelectorAll<HTMLElement>('.choice-stack button.choice:not([disabled])')];
    const raster = illustration.querySelector<HTMLImageElement>('img.scene-illustration-image')!;
    const icons = [...goldenHud.querySelectorAll<HTMLImageElement>('img.golden-hud-icon')];
    const lastChoice = choiceButtons.at(-1)!.getBoundingClientRect();
    return {
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      hudHeight: hud.getBoundingClientRect().height,
      illustrationHeight: illustration.getBoundingClientRect().height,
      narrativeHeight: narrative.getBoundingClientRect().height,
      lastChoiceBottom: lastChoice.bottom,
      portraitVisibleParts: portraitParts.filter((part) => getComputedStyle(part).display !== 'none' && getComputedStyle(part).visibility !== 'hidden').length,
      rasterWidth: raster.naturalWidth,
      rasterHeight: raster.naturalHeight,
      rasterOpacity: Number.parseFloat(getComputedStyle(raster).opacity),
      rasterVisibility: getComputedStyle(raster).visibility,
      rasterRendering: getComputedStyle(raster).imageRendering,
      narrativeFont: getComputedStyle(narrative).fontFamily,
      iconGeometry: icons.map((icon) => ({
        width: icon.naturalWidth,
        height: icon.naturalHeight,
        rendering: getComputedStyle(icon).imageRendering,
        visible: getComputedStyle(icon).display !== 'none' && Number.parseFloat(getComputedStyle(icon).opacity) > 0,
      })),
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
  expect(geometry.portraitVisibleParts).toBeGreaterThan(2);
  expect(geometry.rasterWidth).toBe(384);
  expect(geometry.rasterHeight).toBe(276);
  expect(geometry.rasterOpacity).toBe(1);
  expect(geometry.rasterVisibility).toBe('visible');
  expect(geometry.rasterRendering).toBe('pixelated');
  expect(geometry.narrativeFont).not.toContain('NeoDunggeunmo');
  expect(geometry.iconGeometry).toHaveLength(4);
  expect(geometry.iconGeometry.every((icon) => icon.width === 20 && icon.height === 20 && icon.rendering === 'pixelated' && icon.visible)).toBe(true);

  await page.screenshot({
    path: 'test-results/p8-3-windbreak-golden-screen-390x844.png',
    fullPage: false,
  });
});
