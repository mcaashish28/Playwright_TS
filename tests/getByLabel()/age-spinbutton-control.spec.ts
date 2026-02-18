// spec: specs/get-by-label-locators-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test('Age spinbutton control', async ({ page }) => {
  // Open the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  // Find the spinbutton labeled 'Your Age:'.
  const age = page.getByLabel('Your Age:');
  await expect(age).toBeVisible();
  // Set its value to 30 using fill or type and press Tab.
  await age.fill('30');
  await expect(age).toHaveValue('30');
});