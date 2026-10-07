import { expect, test } from '@playwright/test';

test('displays the welcome message without browser errors', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Welcome to app!');
  expect(pageErrors).toEqual([]);
});
