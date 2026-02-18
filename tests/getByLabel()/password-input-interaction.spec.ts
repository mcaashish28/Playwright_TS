// spec: specs/get-by-label-locators-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test('Password input interaction', async ({ page }) => {
  // Go to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  // Locate password field via getByLabel('Password:').
  const pwd = page.getByLabel('Password:');
  await expect(pwd).toBeVisible();
  // Type 'secret123' into the field.
  await pwd.fill('secret123');
  await expect(pwd).toHaveValue('secret123');
});