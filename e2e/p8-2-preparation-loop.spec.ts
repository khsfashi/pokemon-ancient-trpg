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

test('completes and persists the survival risk-recovery loop on a phone surface', async ({ page }) => {
  await reachReturnSummary(page);

  const panel = page.locator('.preparation-panel');
  await expect(panel).toBeVisible();
  await expect(panel.getByText('Expedition loop', { exact: true })).toBeVisible();
  await expect(panel.getByText('0/6', { exact: true })).toBeVisible();
  await expect(panel.getByText(/decide whether the Rattata signs are worth the risk/i)).toBeVisible();

  const gather = panel.locator('[data-preparation-action="gather.repair-stock"]');
  const forage = panel.locator('[data-preparation-action="forage.bank-edge"]');
  const hunt = panel.locator('[data-preparation-action="hunt.rattata-storetrail"]');
  const flee = panel.locator('[data-preparation-action="flee.rattata-storetrail"]');
  const repair = panel.locator('[data-preparation-action="repair.wet-route-gear"]');
  const camp = panel.locator('[data-preparation-action="camp.rest-and-treat"]');
  const trade = panel.locator('[data-preparation-action="trade.provision-for-remedy"]');

  await expect(hunt).toBeDisabled();
  await expect(repair).toBeDisabled();
  await gather.click();
  await forage.click();
  await expect(panel.getByText('2/6', { exact: true })).toBeVisible();

  await expect(hunt).toBeEnabled();
  await expect(flee).toBeEnabled();
  await hunt.click();
  await expect(flee).toBeDisabled();
  await expect(panel.getByText('4/5', { exact: true })).toBeVisible();
  await expect(panel.getByText('2/5', { exact: true })).toBeVisible();
  await expect(panel.getByText('1', { exact: true })).toBeVisible();

  await repair.click();
  await expect(camp).toBeEnabled();
  await camp.click();
  await expect(panel.getByText('5/5', { exact: true })).toBeVisible();
  await expect(panel.getByText('0/5', { exact: true })).toBeVisible();
  await trade.click();

  await expect(panel).toHaveAttribute('data-preparation-complete', 'true');
  await expect(panel.getByText('6/6', { exact: true })).toBeVisible();
  await expect(panel.getByText(/next departure is ready/i)).toBeVisible();
  await expect(gather).toBeDisabled();
  await expect(forage).toBeDisabled();
  await expect(hunt).toBeDisabled();
  await expect(flee).toBeDisabled();
  await expect(repair).toBeDisabled();
  await expect(camp).toBeDisabled();
  await expect(trade).toBeDisabled();

  const saved = await page.evaluate(async () => {
    const { P8BrowserSession } = await import('/src/platform/p8BrowserSession.ts');
    const { deriveP8SurvivalPressure } = await import('/src/domain/p8Survival.ts');
    const resumed = await new P8BrowserSession().resume();
    const authority = resumed.authority;
    if (authority === null) throw new Error('expected saved P8 authority');
    const pressure = deriveP8SurvivalPressure(authority);
    return {
      transitionSeq: resumed.transitionSeq.toString(),
      pools: authority.survival.resourcePools,
      guard: authority.survival.equipment.equippedItemIds.guard,
      pressure,
      companions: authority.pokemon.companionSlots.map((slot) => slot?.speciesId ?? null),
      complete: authority.events.narrativeFlags['slice.prep.complete'] === true,
      nonlethal: authority.events.narrativeFlags['slice.prep.hunt_nonlethal'] === true,
      noPokemonHarvest: authority.events.narrativeFlags['slice.prep.no_pokemon_harvest'] === true,
      pokemonLinkedSalvage: authority.events.narrativeFlags['slice.prep.rattata_linked_salvage'] === true,
      routeMarked: authority.events.narrativeFlags['slice.prep.rattata_route_marked'] === true,
      gearServiced: authority.events.narrativeFlags['slice.prep.gear_serviced'] === true,
      campRecovered: authority.events.narrativeFlags['slice.prep.camp_recovered'] === true,
    };
  });

  expect(saved.transitionSeq).toBe('7');
  expect(saved.pools).toEqual({ provisions: 0, remedies: 1, materials: 1 });
  expect(saved.guard).toBe('hide.buckler');
  expect(saved.pressure).toMatchObject({ vitalityCurrent: 5, fatigueStage: 0, injuries: 0 });
  expect(saved.companions).toEqual([null, null, null]);
  expect(saved.complete).toBe(true);
  expect(saved.nonlethal).toBe(true);
  expect(saved.noPokemonHarvest).toBe(true);
  expect(saved.pokemonLinkedSalvage).toBe(true);
  expect(saved.routeMarked).toBe(true);
  expect(saved.gearServiced).toBe(true);
  expect(saved.campRecovered).toBe(true);

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
  await expect(page.locator('.preparation-panel')).toHaveAttribute('data-preparation-complete', 'true');

  await page.getByRole('button', { name: '한국어' }).click();
  await expect(page.getByText('챙기고, 나가고, 버티고, 다시 돌아온다', { exact: true })).toBeVisible();
  await expect(page.getByText('몸과 짐을 추슬렀습니다. 다음 길을 나설 준비가 끝났습니다.', { exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
