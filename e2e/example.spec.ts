import { test, expect } from './playwright';

test.use({
  headless: true,
})

test('hi 버튼', async ({ page }) => {
  await page.goto('http://localhost:8080');

  const hi1 = page.getByTestId(testId => testId.도메인.페이지.버튼);
  await expect(hi1).toHaveText('hi');

  const hi2 = page.getByTestId('button_hi');
  await expect(hi2).toHaveText('hi');
});
