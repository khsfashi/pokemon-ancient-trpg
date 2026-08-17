import { expect, test } from '@playwright/test';

async function chooseFirstFormativeAnswer(page: Parameters<typeof test>[0] extends never ? never : any): Promise<void> {
  await page.locator('button.choice').first().click();
}

async function resolveCurrentScene(page: any): Promise<void> {
  await page.locator('button.choice:not([disabled])').first().click();
  await expect(page.getByText('Committed consequence', { exact: false })).toBeVisible();
}

async function continueAfterConsequence(page: any): Promise<void> {
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
}

test('completes the phone zero-companion slice and resumes pending/committed saves exactly', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Batch 04 uses one Chromium phone smoke; Batch 05 owns Chromium + WebKit exit proof.');

  await page.goto('/');
  await page.getByRole('button', { name: 'Start new run' }).click();

  await expect(page.getByText('Formative memory · 1/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);
  await expect(page.getByText('Formative memory · 2/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);
  await expect(page.getByText('Formative memory · 3/3')).toBeVisible();
  await chooseFirstFormativeAnswer(page);

  await expect(page.getByText('Background reveal')).toBeVisible();
  await page.getByRole('button', { name: 'Choose a specialization' }).click();
  await page.getByRole('button', { name: 'Review character' }).click();
  await page.getByRole('button', { name: 'Begin the run' }).click();

  // Fresh-run creation and event preparation are separate commits. Reload while the
  // first event is pending, then prove the exact pending event resumes without reselection.
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();
  await page.reload();
  await page.getByRole('button', { name: 'Continue saved run' }).click();
  await expect(page.getByRole('heading', { name: 'A Call Across the Square' })).toBeVisible();

  await resolveCurrentScene(page);
  await expect(page.getByText('transition 1', { exact: false })).toBeVisible();

  // Reload after a committed transition. Resume must restore the checkpoint and wait
  // for explicit player input before preparing the next authoritative event.
  await page.reload();
  await page.getByRole('button', { name: 'Continue saved run' }).click();
  await expect(page.getByRole('heading', { name: 'Continue from the committed state' })).toBeVisible();
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
  for (let index = 0; index < remainingSceneTitles.length; index += 1) {
    await expect(page.getByRole('heading', { name: remainingSceneTitles[index]! })).toBeVisible();
    await resolveCurrentScene(page);
    await continueAfterConsequence(page);
  }

  await expect(page.getByRole('heading', { name: 'Return to Reedbank' })).toBeVisible();
  await resolveCurrentScene(page);
  await page.getByRole('button', { name: 'View run summary' }).click();

  await expect(page.getByRole('heading', { name: 'Back at Reedbank' })).toBeVisible();
  await expect(page.getByText('Zero-companion completion: proven')).toBeVisible();
  await expect(page.getByText('Companions 0/3', { exact: false })).toBeVisible();
  await expect(page.getByText('Weedle')).toBeVisible();
  await expect(page.getByText('Beedrill')).toBeVisible();
  await expect(page.getByText('Rattata')).toBeVisible();

  const saved = await page.evaluate(async () => {
    const [{ P8BrowserSession }, authorityModule] = await Promise.all([
      import('/src/platform/p8BrowserSession.ts'),
      import('/src/domain/p8Authority.ts'),
    ]);
    const session = new P8BrowserSession();
    const snapshot = await session.resume();
    if (snapshot.authority === null) throw new Error('P8 browser smoke save disappeared');
    return {
      status: snapshot.status,
      transitionSeq: snapshot.transitionSeq.toString(),
      authority: authorityModule.p8AuthorityStateToJson(snapshot.authority),
    };
  });

  expect(saved.status).toBe('ended');
  expect(saved.transitionSeq).toBe('7');
  expect(saved.authority.world.current_locality).toBe('reedbank-settlement');
  expect(saved.authority.survival.resource_pools.provisions).toBe(2);
  expect(saved.authority.pokemon.companion_slots).toEqual([null, null, null]);
  expect(saved.authority.events.narrative_flags['slice.zero_companion_route_complete']).toBe(true);
  expect(saved.authority.pokemon.direct_interactions).toEqual([
    '13:weedle.crossing:old-levee',
    '15:beedrill.windbreak:old-levee',
    '19:rattata.storetrail:old-levee',
  ]);

  console.log(`P8_BATCH04_PHONE_SMOKE ${JSON.stringify({
    browserName,
    transitionSeq: saved.transitionSeq,
    locality: saved.authority.world.current_locality,
    provisions: saved.authority.survival.resource_pools.provisions,
    companions: saved.authority.pokemon.companion_slots.filter((slot) => slot !== null).length,
    directInteractions: saved.authority.pokemon.direct_interactions.length,
  })}`);
});
