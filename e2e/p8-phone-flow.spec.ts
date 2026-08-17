import { expect, test, type Page } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';
const PLAYER_SURFACE_JARGON = /(?:P7|P8|IndexedDB|결정론|권위 상태|리소스 캐시|계약)/i;

async function chooseFirstFormativeAnswer(page: Page): Promise<void> {
  await page.locator('button.choice').first().click();
}

async function resolveCurrentScene(page: Page): Promise<void> {
  await page.locator('button.choice:not([disabled])').first().click();
  await expect(page.getByText('Afterward', { exact: false })).toBeVisible();
}

async function continueAfterConsequence(page: Page): Promise<void> {
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
}

async function assertNoPlayerFacingEngineeringJargon(page: Page): Promise<void> {
  const text = await page.locator('main').innerText();
  expect(text).not.toMatch(PLAYER_SURFACE_JARGON);
}

async function assertGameSurfaceGeometry(page: Page): Promise<void> {
  const geometry = await page.evaluate(() => {
    const panel = document.querySelector<HTMLElement>('.panel');
    const choices = [...document.querySelectorAll<HTMLButtonElement>('.choice-stack button.choice')]
      .filter((button) => {
        const rect = button.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      })
      .map((button) => button.getBoundingClientRect());
    return {
      viewportWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      panelHeight: panel?.getBoundingClientRect().height ?? 0,
      minChoiceHeight: choices.length === 0 ? 0 : Math.min(...choices.map((rect) => rect.height)),
    };
  });
  expect(geometry.viewportWidth).toBe(390);
  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.viewportWidth);
  expect(geometry.panelHeight).toBeGreaterThan(500);
  expect(geometry.minChoiceHeight).toBeGreaterThanOrEqual(44);
}

test('presents the Korean landing and first event as a game-first phone surface', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Batch 03 presentation acceptance adds one stable Chromium phone assertion; Batch 05 retains cross-engine proof.');
  await page.addInitScript(({ key }) => window.localStorage.setItem(key, 'ko-KR'), { key: LOCALE_KEY });
  await page.goto('/');

  await expect(page.locator('.panel.hero-panel')).toBeVisible();
  await expect(page.locator('.language-switcher')).toBeVisible();
  await expect(page.getByRole('heading', { name: '고대 포켓몬 TRPG' })).toBeVisible();
  await expect(page.getByRole('button', { name: '새 여정' })).toBeVisible();
  await assertNoPlayerFacingEngineeringJargon(page);

  await page.getByRole('button', { name: '새 여정' }).click();
  for (let index = 1; index <= 3; index += 1) {
    await expect(page.getByText(`지난 기억 · ${index}/3`)).toBeVisible();
    await chooseFirstFormativeAnswer(page);
  }
  await page.getByRole('button', { name: '강점 고르기' }).click();
  await page.getByRole('button', { name: '확인하기' }).click();
  await page.getByRole('button', { name: '길을 나선다' }).click();

  await expect(page.getByRole('heading', { name: '창고 앞에서 터진 고함' })).toBeVisible();
  await expect(page.locator('.run-status')).toBeVisible();
  await expect(page.locator('.panel > .eyebrow')).toContainText('갈대둑');
  await expect(page.locator('.panel > .lead')).toBeVisible();
  const choices = page.locator('.choice-stack button.choice:not([disabled])');
  await expect(choices).toHaveCount(2);
  await expect(choices.nth(0)).toContainText('사이에 끼어 사정을 듣는다');
  await expect(choices.nth(1)).toContainText('한발 물러서');
  await assertGameSurfaceGeometry(page);
  await assertNoPlayerFacingEngineeringJargon(page);

  console.log(`P8_BATCH03_PRESENTATION_ACCEPTANCE ${JSON.stringify({
    browserName,
    locale: 'ko-KR',
    viewport: '390x844',
    firstEventChoices: 2,
    playerFacingEngineeringJargon: false,
  })}`);
});

test('completes the phone zero-companion slice and resumes pending/committed saves exactly', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Batch 04 uses one Chromium phone smoke; Batch 05 owns Chromium + WebKit exit proof.');

  await page.goto('/');
  await page.getByRole('button', { name: 'New journey' }).click();

  await expect(page.getByText('A memory from before · 1/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);
  await expect(page.getByText('A memory from before · 2/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);
  await expect(page.getByText('A memory from before · 3/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);

  await expect(page.getByText('Your past')).toBeVisible();
  await page.getByRole('button', { name: 'Choose a strength' }).click();
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'Set out' }).click();

  // Fresh-run creation and event preparation are separate commits. Reload while the
  // first event is pending, then prove the exact pending event resumes without reselection.
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();

  await resolveCurrentScene(page);
  await expect(page.getByText('record 1', { exact: false })).toBeVisible();

  // Reload after a committed transition. Resume must restore the checkpoint and wait
  // for explicit player input before preparing the next authoritative event.
  await page.reload();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: 'Go to the next scene' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue journey' }).click();
  await expect(page.getByRole('heading', { name: "The Steward's Errand" })).toBeVisible();

  // Remaining authored zero-companion route. Every scene resolves through the shared
  // P8/P5 event runtime and every consequence is committed before the next event starts.
  const remainingSceneTitles = [
    "The Steward's Errand",
    'A Promise at the Mill',
    'Beyond the Last Dry Marker',
    'Weedle at the Crossing',
    'The Windbreak Boundary',
  ];
  for (const sceneTitle of remainingSceneTitles) {
    await expect(page.getByRole('heading', { name: sceneTitle })).toBeVisible();
    await resolveCurrentScene(page);
    await continueAfterConsequence(page);
  }

  await expect(page.getByRole('heading', { name: 'Return to Reedbank' })).toBeVisible();
  await resolveCurrentScene(page);
  await page.getByRole('button', { name: 'See journey summary' }).click();

  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
  await expect(page.getByText('Returned without a companion: complete', { exact: false })).toBeVisible();
  await expect(page.getByText('Companions 0/3', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Weedle')).toBeVisible();
  await expect(page.getByText('Beedrill')).toBeVisible();
  await expect(page.getByText('Rattata')).toBeVisible();

  const saved = await page.evaluate(async () => {
    const { P8BrowserSession } = await import('/src/platform/p8BrowserSession.ts');
    const session = new P8BrowserSession();
    const snapshot = await session.resume();
    const authority = snapshot.authority;
    if (authority === null) throw new Error('P8 browser smoke save disappeared');
    return {
      status: snapshot.status,
      transitionSeq: snapshot.transitionSeq.toString(),
      locality: authority.world.currentLocality,
      provisions: authority.survival.resourcePools.provisions,
      companionSpeciesIds: authority.pokemon.companionSlots.map((slot) => slot?.speciesId ?? null),
      zeroCompanionComplete: authority.events.narrativeFlags['slice.zero_companion_route_complete'] === true,
      directInteractions: [...authority.pokemon.directInteractions],
    };
  });

  expect(saved.status).toBe('ended');
  expect(saved.transitionSeq).toBe('7');
  expect(saved.locality).toBe('reedbank-settlement');
  expect(saved.provisions).toBe(2);
  expect(saved.companionSpeciesIds).toEqual([null, null, null]);
  expect(saved.zeroCompanionComplete).toBe(true);
  expect(saved.directInteractions).toEqual([
    '13:weedle.crossing:old-levee',
    '15:beedrill.windbreak:old-levee',
    '19:rattata.storetrail:old-levee',
  ]);

  console.log(`P8_BATCH04_PHONE_SMOKE ${JSON.stringify({
    browserName,
    transitionSeq: saved.transitionSeq,
    locality: saved.locality,
    provisions: saved.provisions,
    companions: saved.companionSpeciesIds.filter((speciesId) => speciesId !== null).length,
    directInteractions: saved.directInteractions.length,
  })}`);
});
