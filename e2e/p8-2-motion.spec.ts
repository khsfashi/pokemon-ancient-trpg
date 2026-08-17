import { expect, test, type Page } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';

async function startFirstScene(page: Page): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: 'New journey' }).click();
  for (let index = 0; index < 3; index += 1) {
    await page.locator('button.choice').first().click();
  }
  await page.getByRole('button', { name: 'Choose a strength' }).click();
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'Set out' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
}

async function finishNarrative(page: Page): Promise<void> {
  const narrative = page.locator('.narrative-copy').first();
  await expect(narrative).toBeVisible();
  if (await narrative.getAttribute('data-ready') !== 'true') {
    await narrative.click();
  }
  await expect(narrative).toHaveAttribute('data-ready', 'true');
}

async function resolveFirstEnabledChoice(page: Page): Promise<void> {
  await finishNarrative(page);
  await page.locator('.choice-stack button.choice:not([disabled])').first().click();
  await expect(page.getByText('Afterward', { exact: false })).toBeVisible();
}

async function continueAfterResolution(page: Page): Promise<void> {
  await finishNarrative(page);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
}

async function readAuthorityJson(page: Page): Promise<unknown> {
  return page.evaluate(async () => {
    const [{ P8BrowserSession }, { p8AuthorityStateToJson }] = await Promise.all([
      import('/src/platform/p8BrowserSession.ts'),
      import('/src/domain/p8Authority.ts'),
    ]);
    const restored = await new P8BrowserSession().resume();
    if (restored.authority === null) throw new Error('P8.2 motion proof lost the authoritative run');
    return p8AuthorityStateToJson(restored.authority);
  });
}

async function readTransitionSummary(page: Page): Promise<{ readonly transitionSeq: string; readonly pending: boolean; readonly locality: string }> {
  return page.evaluate(async () => {
    const { P8BrowserSession } = await import('/src/platform/p8BrowserSession.ts');
    const restored = await new P8BrowserSession().resume();
    if (restored.authority === null) throw new Error('P8.2 motion proof lost the authoritative run');
    return {
      transitionSeq: restored.transitionSeq.toString(),
      pending: restored.pending !== null,
      locality: restored.authority.world.currentLocality,
    };
  });
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(({ key }) => window.localStorage.setItem(key, 'en-US'), { key: LOCALE_KEY });
});

test('tap-to-complete never commits a choice and rapid double input commits once', async ({ page }) => {
  await startFirstScene(page);

  const narrative = page.locator('.narrative-copy').first();
  await expect(narrative).toHaveAttribute('data-revealing', 'true');
  await narrative.click();
  await expect(narrative).toHaveAttribute('data-ready', 'true');

  const beforeChoice = await readTransitionSummary(page);
  expect(beforeChoice).toEqual({
    transitionSeq: '0',
    pending: true,
    locality: 'reedbank-settlement',
  });

  const choice = page.locator('.choice-stack button.choice:not([disabled])').first();
  await choice.evaluate((button) => {
    (button as HTMLButtonElement).click();
    (button as HTMLButtonElement).click();
  });

  await expect(page.getByText('Afterward', { exact: false })).toBeVisible();
  const afterChoice = await readTransitionSummary(page);
  expect(afterChoice).toEqual({
    transitionSeq: '1',
    pending: false,
    locality: 'reedbank-settlement',
  });
});

test('normal motion and reduced motion produce identical authoritative state', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await startFirstScene(page);
  await resolveFirstEnabledChoice(page);
  const animatedAuthority = await readAuthorityJson(page);

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await page.getByRole('button', { name: 'New journey' }).click();
  for (let index = 0; index < 3; index += 1) {
    await page.locator('button.choice').first().click();
  }
  await page.getByRole('button', { name: 'Choose a strength' }).click();
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'Set out' }).click();

  const reducedNarrative = page.locator('.narrative-copy').first();
  await expect(reducedNarrative).toHaveAttribute('data-ready', 'true');
  await expect(page.locator('.scene-stage')).toHaveAttribute('data-transition-phase', 'idle');
  await page.locator('.choice-stack button.choice:not([disabled])').first().click();
  await expect(page.getByText('Afterward', { exact: false })).toBeVisible();

  const reducedAuthority = await readAuthorityJson(page);
  expect(reducedAuthority).toEqual(animatedAuthority);
});

test('locality-changing travel uses the travel transition without changing the event path', async ({ page }) => {
  await startFirstScene(page);

  const sceneTitles = [
    "The Steward's Errand",
    'A Promise at the Mill',
    'Beyond the Last Dry Marker',
  ];

  await resolveFirstEnabledChoice(page);
  for (const sceneTitle of sceneTitles) {
    await continueAfterResolution(page);
    await expect(page.getByRole('heading', { name: sceneTitle })).toBeVisible();
    if (sceneTitle !== 'Beyond the Last Dry Marker') {
      await resolveFirstEnabledChoice(page);
    }
  }

  await finishNarrative(page);
  await page.locator('.choice-stack button.choice:not([disabled])').first().click();
  await expect(page.getByText('Afterward', { exact: false })).toBeVisible();
  await expect(page.locator('.scene-stage')).toHaveAttribute('data-transition-kind', 'travel');

  const afterTravel = await readTransitionSummary(page);
  expect(afterTravel).toEqual({
    transitionSeq: '4',
    pending: false,
    locality: 'old-levee',
  });
});
