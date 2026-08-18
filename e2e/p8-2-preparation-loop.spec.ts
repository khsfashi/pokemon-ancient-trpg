import { expect, test, type Locator, type Page } from '@playwright/test';

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

function stat(panel: Locator, label: string): Locator {
  return panel.locator('.ending-grid > div').filter({ hasText: label }).locator('strong');
}

test('completes and persists the full settlement-travel-risk-camp-return loop on a phone surface', async ({ page }) => {
  await reachReturnSummary(page);

  let panel = page.locator('.preparation-panel');
  await expect(panel).toBeVisible();
  await expect(panel).toHaveAttribute('data-preparation-locality', 'reedbank-settlement');
  await expect(panel.getByText('Expedition loop', { exact: true })).toBeVisible();
  await expect(stat(panel, 'Expedition loop')).toHaveText('0/6');
  await expect(stat(panel, 'Current place')).toHaveText('Reedbank Settlement');
  await expect(panel.getByText(/decide whether the Rattata signs are worth the risk/i)).toBeVisible();

  let gather = panel.locator('[data-preparation-action="gather.repair-stock"]');
  let forage = panel.locator('[data-preparation-action="forage.bank-edge"]');
  let hunt = panel.locator('[data-preparation-action="hunt.rattata-storetrail"]');
  let flee = panel.locator('[data-preparation-action="flee.rattata-storetrail"]');
  let camp = panel.locator('[data-preparation-action="camp.rest-and-treat"]');
  let repair = panel.locator('[data-preparation-action="repair.wet-route-gear"]');
  let trade = panel.locator('[data-preparation-action="trade.provision-for-remedy"]');

  await expect(hunt).toBeDisabled();
  await expect(camp).toBeDisabled();
  await expect(repair).toBeDisabled();
  await gather.click();
  await forage.click();
  await expect(stat(panel, 'Expedition loop')).toHaveText('2/6');

  await expect(hunt).toBeEnabled();
  await expect(flee).toBeEnabled();
  await hunt.click();
  await expect(panel).toHaveAttribute('data-preparation-locality', 'old-levee');
  await expect(stat(panel, 'Current place')).toHaveText('Old Levee');
  await expect(flee).toBeDisabled();
  await expect(stat(panel, 'Vitality')).toHaveText('4/5');
  await expect(stat(panel, 'Fatigue')).toHaveText('2/2');
  await expect(stat(panel, 'Injuries')).toHaveText('1');
  await expect(camp).toBeEnabled();
  await expect(repair).toBeDisabled();

  // Prove that the dangerous field checkpoint itself survives a full browser reload.
  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  panel = page.locator('.preparation-panel');
  gather = panel.locator('[data-preparation-action="gather.repair-stock"]');
  forage = panel.locator('[data-preparation-action="forage.bank-edge"]');
  hunt = panel.locator('[data-preparation-action="hunt.rattata-storetrail"]');
  flee = panel.locator('[data-preparation-action="flee.rattata-storetrail"]');
  camp = panel.locator('[data-preparation-action="camp.rest-and-treat"]');
  repair = panel.locator('[data-preparation-action="repair.wet-route-gear"]');
  trade = panel.locator('[data-preparation-action="trade.provision-for-remedy"]');
  await expect(panel).toHaveAttribute('data-preparation-locality', 'old-levee');
  await expect(stat(panel, 'Current place')).toHaveText('Old Levee');
  await expect(stat(panel, 'Vitality')).toHaveText('4/5');
  await expect(stat(panel, 'Fatigue')).toHaveText('2/2');
  await expect(stat(panel, 'Injuries')).toHaveText('1');
  await expect(camp).toBeEnabled();

  await camp.click();
  await expect(panel).toHaveAttribute('data-preparation-locality', 'reedbank-settlement');
  await expect(stat(panel, 'Current place')).toHaveText('Reedbank Settlement');
  await expect(stat(panel, 'Vitality')).toHaveText('5/5');
  await expect(stat(panel, 'Fatigue')).toHaveText('1/2');
  await expect(stat(panel, 'Injuries')).toHaveText('0');
  await expect(repair).toBeEnabled();

  await repair.click();
  await expect(trade).toBeEnabled();
  await trade.click();

  await expect(panel).toHaveAttribute('data-preparation-complete', 'true');
  await expect(stat(panel, 'Expedition loop')).toHaveText('6/6');
  await expect(panel.getByText(/next departure is ready/i)).toBeVisible();
  await expect(gather).toBeDisabled();
  await expect(forage).toBeDisabled();
  await expect(hunt).toBeDisabled();
  await expect(flee).toBeDisabled();
  await expect(camp).toBeDisabled();
  await expect(repair).toBeDisabled();
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
      locality: authority.world.currentLocality,
      pools: authority.survival.resourcePools,
      guard: authority.survival.equipment.equippedItemIds.guard,
      pressure,
      companions: authority.pokemon.companionSlots.map((slot) => slot?.speciesId ?? null),
      complete: authority.events.narrativeFlags['slice.prep.complete'] === true,
      nonlethal: authority.events.narrativeFlags['slice.prep.hunt_nonlethal'] === true,
      noPokemonHarvest: authority.events.narrativeFlags['slice.prep.no_pokemon_harvest'] === true,
      pokemonLinkedSalvage: authority.events.narrativeFlags['slice.prep.rattata_linked_salvage'] === true,
      routeMarked: authority.events.narrativeFlags['slice.prep.rattata_route_marked'] === true,
      campRecovered: authority.events.narrativeFlags['slice.prep.camp_recovered'] === true,
      returnedFromField: authority.events.narrativeFlags['slice.prep.returned_from_field_loop'] === true,
      gearServiced: authority.events.narrativeFlags['slice.prep.gear_serviced'] === true,
    };
  });

  expect(saved.transitionSeq).toBe('7');
  expect(saved.locality).toBe('reedbank-settlement');
  expect(saved.pools).toEqual({ provisions: 0, remedies: 1, materials: 1 });
  expect(saved.guard).toBe('hide.buckler');
  expect(saved.pressure).toMatchObject({ vitalityCurrent: 5, fatigueStage: 1, fatigueLimit: 2, injuries: 0 });
  expect(saved.companions).toEqual([null, null, null]);
  expect(saved.complete).toBe(true);
  expect(saved.nonlethal).toBe(true);
  expect(saved.noPokemonHarvest).toBe(true);
  expect(saved.pokemonLinkedSalvage).toBe(true);
  expect(saved.routeMarked).toBe(true);
  expect(saved.campRecovered).toBe(true);
  expect(saved.returnedFromField).toBe(true);
  expect(saved.gearServiced).toBe(true);

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
  await expect(page.locator('.preparation-panel')).toHaveAttribute('data-preparation-complete', 'true');
  await expect(page.locator('.preparation-panel')).toHaveAttribute('data-preparation-locality', 'reedbank-settlement');

  await page.getByRole('button', { name: '한국어' }).click();
  await expect(page.getByText('챙기고, 나가고, 버티고, 다시 돌아온다', { exact: true })).toBeVisible();
  await expect(page.getByText('몸과 짐을 추슬렀고 장비도 손봤습니다. 다음 길을 나설 준비가 끝났습니다.', { exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
