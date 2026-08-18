import { expect, test, type Locator, type Page } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';

async function chooseFirstFormativeAnswer(page: Page): Promise<void> {
  await page.locator('button.choice').first().click();
}

async function resolveSceneAndContinue(page: Page, last = false): Promise<void> {
  const choice = page.locator('.choice-stack button.choice:not([disabled])').first();
  await expect(choice).toBeEnabled();
  await choice.click();
  await expect(page.getByText('Afterward', { exact: false })).toBeVisible();
  await page.getByRole('button', { name: last ? 'See journey summary' : 'Continue', exact: true }).click();
}

function stat(panel: Locator, label: string): Locator {
  return panel.locator('.ending-grid > div').filter({ hasText: label }).locator('strong');
}

async function readIntegratedSaveProof(page: Page) {
  return page.evaluate(async () => {
    const { P8BrowserSession } = await import('/src/platform/p8BrowserSession.ts');
    const { deriveP8EquipmentProjection } = await import('/src/domain/p8Equipment.ts');
    const { deriveP8SurvivalPressure } = await import('/src/domain/p8Survival.ts');
    const resumed = await new P8BrowserSession().resume();
    const authority = resumed.authority;
    if (authority === null) throw new Error('expected saved P8 authority');
    const pressure = deriveP8SurvivalPressure(authority);
    const readiness = deriveP8EquipmentProjection(authority.character, authority.survival, pressure.injuries);
    return {
      status: resumed.status,
      transitionSeq: resumed.transitionSeq.toString(),
      locality: authority.world.currentLocality,
      pools: authority.survival.resourcePools,
      guard: authority.survival.equipment.equippedItemIds.guard,
      readiness: {
        attack: readiness.attackReadiness,
        defense: readiness.defenseReadiness,
        field: readiness.fieldReadiness,
        currentLoad: readiness.currentLoad,
        comfortableLoad: readiness.comfortableLoad,
      },
      pressure: {
        vitalityCurrent: pressure.vitalityCurrent,
        vitalityMax: pressure.vitalityMax,
        fatigueStage: pressure.fatigueStage,
        fatigueLimit: pressure.fatigueLimit,
        injuries: pressure.injuries,
      },
      companions: authority.pokemon.companionSlots.map((slot) => slot?.speciesId ?? null),
      prepComplete: authority.events.narrativeFlags['slice.prep.complete'] === true,
      zeroCompanionComplete: authority.events.narrativeFlags['slice.zero_companion_route_complete'] === true,
      noPokemonHarvest: authority.events.narrativeFlags['slice.prep.no_pokemon_harvest'] === true,
      pokemonLinkedSalvage: authority.events.narrativeFlags['slice.prep.rattata_linked_salvage'] === true,
    };
  });
}

async function assertPhoneGeometry(page: Page): Promise<void> {
  const geometry = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(geometry.viewportWidth).toBe(390);
  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.viewportWidth);
}

test('Batch 10 integrated first-play survives one Korean-to-English run, gated preparation loop, and full reload on phone', async ({ page, browserName }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(({ key }) => {
    if (window.localStorage.getItem(key) === null) window.localStorage.setItem(key, 'ko-KR');
  }, { key: LOCALE_KEY });
  await page.goto('/');

  await expect(page.getByRole('heading', { name: '고대 포켓몬 TRPG' })).toBeVisible();
  await page.getByRole('button', { name: '새 여정' }).click();
  await expect(page.getByRole('heading', { name: /강물이 둑 아래까지 차오른 새벽이었다/ })).toBeVisible();
  await chooseFirstFormativeAnswer(page);
  await chooseFirstFormativeAnswer(page);
  await chooseFirstFormativeAnswer(page);
  await page.getByRole('button', { name: '강점 고르기' }).click();

  await page.getByRole('button', { name: 'English' }).click();
  const portraitGroup = page.getByRole('radiogroup', { name: 'Choose your portrait' });
  await expect(portraitGroup).toBeVisible();
  await portraitGroup.getByRole('radio', { name: 'Herbalist portrait' }).click();
  await page.getByRole('button', { name: 'Review' }).click();
  await expect(page.locator('.character-portrait-preview .portrait-herbalist')).toBeVisible();
  await page.getByRole('button', { name: 'Set out' }).click();

  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
  await expect(page.locator('.expedition-hud .portrait-herbalist')).toBeVisible();
  await expect(page.locator('.expedition-hud').getByText('Fatigue / stamina · 0/2', { exact: true })).toBeVisible();
  await expect(page.locator('.expedition-hud').getByText('Attack', { exact: true })).toBeVisible();
  const openingIllustration = page.locator(
    '.scene-illustration[data-resource-id="p8.illustration.opening.reedbank-square"]',
  );
  await expect(openingIllustration).toHaveAttribute('data-media-state', 'loaded');
  await expect(openingIllustration.locator('img.scene-illustration-image')).toBeVisible();
  await assertPhoneGeometry(page);

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
  await expect(page.locator('.expedition-hud .portrait-herbalist')).toBeVisible();

  for (let index = 0; index < 6; index += 1) await resolveSceneAndContinue(page);
  await resolveSceneAndContinue(page, true);
  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
  await expect(page.getByText('Returned without a companion: complete', { exact: false })).toBeVisible();
  await expect(page.locator('.expedition-hud .portrait-herbalist')).toBeVisible();

  let panel = page.locator('.preparation-panel');
  await expect(panel).toHaveAttribute('data-preparation-locality', 'reedbank-settlement');
  await expect(panel).toHaveAttribute('data-preparation-active-stage', 'prepare');
  await expect(panel.locator('[data-preparation-stage="prepare"]')).toHaveAttribute('data-stage-state', 'active');

  await panel.locator('[data-preparation-action="gather.repair-stock"]').click();
  await panel.locator('[data-preparation-action="forage.bank-edge"]').click();
  await expect(panel).toHaveAttribute('data-preparation-active-stage', 'risk');
  await panel.locator('[data-preparation-action="hunt.rattata-storetrail"]').click();
  await expect(panel).toHaveAttribute('data-preparation-locality', 'old-levee');
  await expect(panel).toHaveAttribute('data-preparation-active-stage', 'recover');
  await expect(stat(panel, 'Vitality')).toHaveText('5/6');
  await expect(stat(panel, 'Fatigue')).toHaveText('2/2');
  await expect(stat(panel, 'Injuries')).toHaveText('1');

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  panel = page.locator('.preparation-panel');
  await expect(panel).toHaveAttribute('data-preparation-locality', 'old-levee');
  await expect(panel).toHaveAttribute('data-preparation-active-stage', 'recover');
  await expect(page.locator('.expedition-hud .portrait-herbalist')).toBeVisible();
  await panel.locator('[data-preparation-action="camp.rest-and-treat"]').click();
  await expect(panel).toHaveAttribute('data-preparation-active-stage', 'improve');
  await panel.locator('[data-preparation-action="repair.wet-route-gear"]').click();
  await expect(panel).toHaveAttribute('data-preparation-active-stage', 'resupply');
  await panel.locator('[data-preparation-action="trade.provision-for-remedy"]').click();
  await expect(panel).toHaveAttribute('data-preparation-complete', 'true');
  await expect(panel).toHaveAttribute('data-preparation-active-stage', 'ready');
  await expect(stat(panel, 'Expedition loop')).toHaveText('6/6');
  await expect(panel.locator('.prep-reward-ledger')).toBeVisible();

  const beforeReload = await readIntegratedSaveProof(page);
  expect(beforeReload).toMatchObject({
    status: 'ended',
    transitionSeq: '7',
    locality: 'reedbank-settlement',
    pools: { provisions: 0, remedies: 1, materials: 1 },
    guard: 'hide.buckler',
    pressure: { vitalityCurrent: 6, vitalityMax: 6, fatigueStage: 1, fatigueLimit: 2, injuries: 0 },
    companions: [null, null, null],
    prepComplete: true,
    zeroCompanionComplete: true,
    noPokemonHarvest: true,
    pokemonLinkedSalvage: true,
  });

  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
  await expect(page.locator('.preparation-panel')).toHaveAttribute('data-preparation-complete', 'true');
  await expect(page.locator('.preparation-panel')).toHaveAttribute('data-preparation-active-stage', 'ready');
  await expect(page.locator('.expedition-hud .portrait-herbalist')).toBeVisible();
  await expect(page.locator('.expedition-hud').getByText('Attack', { exact: true })).toBeVisible();
  await expect(page.locator('.expedition-hud').getByText('Defense', { exact: true })).toBeVisible();
  await expect(page.locator('.expedition-hud').getByText('Field', { exact: true })).toBeVisible();
  expect(await readIntegratedSaveProof(page)).toEqual(beforeReload);

  await page.getByRole('button', { name: '한국어' }).click();
  await expect(page.getByText('챙긴다 → 위험을 감수한다 → 돌아온다 → 강해진다', { exact: true })).toBeVisible();
  await expect(page.getByText(/재출발 준비 완료/)).toBeVisible();
  await expect(page.getByText('이번 원정에서 남은 것', { exact: true })).toBeVisible();
  await expect(page.locator('.expedition-hud').getByText('피로(스태미나) · 1/2', { exact: true })).toBeVisible();
  await assertPhoneGeometry(page);

  console.log('P8_3_GATED_PREPARATION_PRODUCT_GATE', JSON.stringify({
    browserName,
    viewport: '390x844',
    localeStart: 'ko-KR',
    localeEnd: 'ko-KR',
    transitionSeq: beforeReload.transitionSeq,
    preparationComplete: beforeReload.prepComplete,
    preparationStage: 'ready',
    guard: beforeReload.guard,
    companions: 0,
  }));
});
