import { expect, test, type Page } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';

async function chooseFirstFormativeAnswer(page: Page): Promise<void> {
  await page.locator('button.choice').first().click();
}

async function resolveSceneAndContinue(page: Page, last = false): Promise<void> {
  await page.locator('.choice-stack button.choice:not([disabled])').first().click();
  await expect(page.getByText('Afterward', { exact: false })).toBeVisible();
  await page.getByRole('button', { name: last ? 'See journey summary' : 'Continue', exact: true }).click();
}

async function reachReturnSummary(page: Page): Promise<void> {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(({ key }) => window.localStorage.setItem(key, 'en-US'), { key: LOCALE_KEY });
  await page.goto('/');
  await page.getByRole('button', { name: 'New journey' }).click();
  await chooseFirstFormativeAnswer(page);
  await chooseFirstFormativeAnswer(page);
  await chooseFirstFormativeAnswer(page);
  await page.getByRole('button', { name: 'Choose a strength' }).click();
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'Set out' }).click();

  for (let index = 0; index < 6; index += 1) await resolveSceneAndContinue(page);
  await resolveSceneAndContinue(page, true);
  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
}

test('completes and persists the bounded return-to-preparation cycle on a phone surface', async ({ page }) => {
  await reachReturnSummary(page);

  const panel = page.locator('.preparation-panel');
  await expect(panel).toBeVisible();
  await expect(panel.getByText('Preparation', { exact: true })).toBeVisible();
  await expect(panel.getByText('0/5', { exact: true })).toBeVisible();
  await expect(panel.getByText(/no repeatable harvest faucet/i)).toBeVisible();

  const gather = panel.locator('[data-preparation-action="gather.repair-stock"]');
  const repair = panel.locator('[data-preparation-action="repair.wet-route-gear"]');
  const forage = panel.locator('[data-preparation-action="forage.bank-edge"]');
  const hunt = panel.locator('[data-preparation-action="hunt.rattata-storetrail"]');
  const trade = panel.locator('[data-preparation-action="trade.provision-for-remedy"]');

  await expect(repair).toBeDisabled();
  await gather.click();
  await expect(gather).toBeDisabled();
  await expect(panel.getByText('1/5', { exact: true })).toBeVisible();

  await expect(repair).toBeEnabled();
  await repair.click();
  await forage.click();
  await hunt.click();
  await trade.click();

  await expect(panel).toHaveAttribute('data-preparation-complete', 'true');
  await expect(panel.getByText('5/5', { exact: true })).toBeVisible();
  await expect(panel.getByText('Ready to depart again', { exact: true })).toBeVisible();
  await expect(gather).toBeDisabled();
  await expect(repair).toBeDisabled();
  await expect(forage).toBeDisabled();
  await expect(hunt).toBeDisabled();
  await expect(trade).toBeDisabled();

  const saved = await page.evaluate(async () => {
    const { P8BrowserSession } = await import('/src/platform/p8BrowserSession.ts');
    const resumed = await new P8BrowserSession().resume();
    const authority = resumed.authority;
    if (authority === null) throw new Error('expected saved P8 authority');
    return {
      transitionSeq: resumed.transitionSeq.toString(),
      pools: authority.survival.resourcePools,
      companions: authority.pokemon.companionSlots.map((slot) => slot?.speciesId ?? null),
      complete: authority.events.narrativeFlags['slice.prep.complete'] === true,
      nonlethal: authority.events.narrativeFlags['slice.prep.hunt_nonlethal'] === true,
      noPokemonHarvest: authority.events.narrativeFlags['slice.prep.no_pokemon_harvest'] === true,
      routeMarked: authority.events.narrativeFlags['slice.prep.rattata_route_marked'] === true,
      gearServiced: authority.events.narrativeFlags['slice.prep.gear_serviced'] === true,
    };
  });

  expect(saved.transitionSeq).toBe('7');
  expect(saved.pools).toEqual({ provisions: 1, remedies: 2, materials: 0 });
  expect(saved.companions).toEqual([null, null, null]);
  expect(saved.complete).toBe(true);
  expect(saved.nonlethal).toBe(true);
  expect(saved.noPokemonHarvest).toBe(true);
  expect(saved.routeMarked).toBe(true);
  expect(saved.gearServiced).toBe(true);

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
  await expect(page.locator('.preparation-panel')).toHaveAttribute('data-preparation-complete', 'true');

  await page.getByRole('button', { name: '한국어' }).click();
  await expect(page.getByText('이번 귀환을 다음 준비로 바꾼다', { exact: true })).toBeVisible();
  await expect(page.getByText('다시 길을 나설 준비가 됐습니다.', { exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
