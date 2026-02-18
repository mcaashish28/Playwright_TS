// spec: specs/get-by-label-locators-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test('Email input interaction', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  // Use getByLabel('Email Address:') to locate the textbox.
  const email = page.getByLabel('Email Address:');
  await expect(email).toBeVisible();
  // Fill the textbox with 'user@example.com'.
  await email.fill('user@example.com');
  await expect(email).toHaveValue('user@example.com');
});