// spec: specs/get-by-label-locators-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test('Negative label case', async ({ page }) => {
  // Navigate to page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  // Attempt to getByLabel('Nonexistent Label').
  await expect(page.getByLabel('Nonexistent Label')).toHaveCount(0);
});