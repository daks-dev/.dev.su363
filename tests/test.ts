import { expect, test } from '@playwright/test';

test('home page has expected tytle', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Строительное Управление № 363 Москва/);
});

test('home page has expected header', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /СУ.+363/ })).toBeVisible();
});
