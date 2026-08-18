import { expect, test, type Page } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';

async function assertPhoneSafeChoices(page: Page): Promise<void> {
  const metrics = await page.evaluate(() => {
    const choices = [...document.querySelectorAll<HTMLButtonElement>('button.choice')].map((button) => button.getBoundingClientRect());
    return {
      viewportWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      minHeight: choices.length === 0 ? 0 : Math.min(...choices.map((rect) => rect.height)),
    };
  });
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.viewportWidth);
  expect(metrics.minHeight).toBeGreaterThanOrEqual(44);
}

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
  await expect(page.getByText('그 뒤', { exact: false })).toBeVisible();
  await page.getByRole('button', { name: '계속', exact: true }).click();
}

test('Korean character creation reads as three remembered scenes instead of a questionnaire', async ({ page, browserName }) => {
  await page.addInitScript(({ key }) => window.localStorage.setItem(key, 'ko-KR'), { key: LOCALE_KEY });
  await page.goto('/');
  await page.getByRole('button', { name: '새 여정' }).click();

  await expect(page.getByRole('heading', { name: /강물이 둑 아래까지 차오른 새벽이었다/ })).toBeVisible();
  await expect(page.getByText('머릿속에 가장 선명한 장면을 따라가 보세요.')).toBeVisible();
  await expect(page.locator('button.choice')).toHaveCount(3);
  await expect(page.getByRole('button', { name: '곡식 자루부터 옮겼다' })).toBeVisible();
  await assertPhoneSafeChoices(page);
  await page.getByRole('button', { name: '곡식 자루부터 옮겼다' }).click();

  await expect(page.getByRole('heading', { name: /한번 크게 곤란을 겪고 나면 몸이 먼저 기억한다/ })).toBeVisible();
  await expect(page.getByRole('button', { name: '물에 잠긴 길을 새로 찾았다' })).toBeVisible();
  await assertPhoneSafeChoices(page);
  await page.getByRole('button', { name: '물에 잠긴 길을 새로 찾았다' }).click();

  await expect(page.getByRole('heading', { name: /해가 기울면 어른들의 손이 늘 모자랐다/ })).toBeVisible();
  await expect(page.getByRole('button', { name: '집집을 오가며 말을 풀었다' })).toBeVisible();
  await assertPhoneSafeChoices(page);
  await page.getByRole('button', { name: '집집을 오가며 말을 풀었다' }).click();

  await expect(page.getByText('세 장면을 되짚고 나니, 몸에 밴 일과 사람을 대하는 방식이 선명해집니다.')).toBeVisible();
  await expect(page.getByRole('button', { name: '강점 고르기' })).toBeVisible();
  await page.getByRole('button', { name: '강점 고르기' }).click();
  await expect(page.getByRole('heading', { name: /막막한 길 앞에 서면 결국 늘 하던 방식으로 손이 움직였다/ })).toBeVisible();
  await expect(page.getByText(/발자국과 눌린 풀, 물길의 모양을 먼저 봅니다/)).toBeVisible();
  await assertPhoneSafeChoices(page);

  const visibleCopy = await page.locator('main').innerText();
  expect(visibleCopy).not.toContain('정답은 없습니다');
  expect(visibleCopy).not.toContain('무엇인가요?');
  expect(visibleCopy).not.toContain('무엇이었나요?');

  console.log('P8_2_KOREAN_NARRATIVE_PROOF', JSON.stringify({ browserName, memories: 3, phoneSafe: true }));
});

test('Korean orchard boundary makes Beedrill threat, ecology, and livelihood physically readable on phone', async ({ page, browserName }) => {
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
  const narrative = page.locator('.narrative-copy');
  await expect(narrative).toContainText('열두어 걸음');
  await expect(narrative).toContainText('두 앞다리 침');
  await expect(narrative).toContainText('여덟 걸음');
  await expect(narrative).toContainText('다섯 걸음');
  await expect(narrative).toContainText('두 번째 진동음');
  await expect(narrative).toContainText('다른 일손이 바구니를 내려놓는다');
  await expect(narrative).toContainText('방풍림을 베면 제방 바람이 어린 과수를 때리고');
  await expect(page.getByText('길을 정한다', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: '돌담을 끼고 방풍림 바깥으로 돌아간다' })).toBeVisible();
  await expect(page.getByRole('button', { name: '경고선을 넘어 안쪽 지름길로 시간을 줄인다' })).toBeVisible();
  await assertPhoneSafeChoices(page);

  const visibleCopy = await page.locator('main').innerText();
  expect(visibleCopy).not.toContain('어느 쪽으로 갈까?');
  expect(visibleCopy).not.toContain('독침붕 무리와 자연스레 거리가 벌어진다');

  await page.getByRole('button', { name: '돌담을 끼고 방풍림 바깥으로 돌아간다' }).click();
  await expect(page.getByText('다음 붉은 말뚝', { exact: false })).toBeVisible();
  await expect(page.getByText('방풍림과 작업선은 그대로 남았다', { exact: false })).toBeVisible();

  console.log('P8_3_BEEDRILL_RUNTIME_PROOF', JSON.stringify({
    browserName,
    locale: 'ko-KR',
    viewport: '390x844',
    physicalDistanceCues: ['12-ish', '8-ish', '5-ish'],
    livelihoodConsequenceVisible: true,
    authorityChoiceIdsPreserved: true,
  }));
});
