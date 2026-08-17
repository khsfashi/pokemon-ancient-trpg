import { expect, test } from '@playwright/test';

const LOCALE_KEY = 'pokemon-ancient-trpg.locale.v1';

async function assertPhoneSafeChoices(page: import('@playwright/test').Page): Promise<void> {
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
