// spec: specs/get-by-label-locators-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test('Shipping method radios', async ({ page }) => {
  // Visit the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  // Select the radio labeled 'Standard' with getByLabel.
  const standard = page.getByLabel('Standard');
  const express = page.getByLabel('Express');
  await standard.check();
  await expect(standard).toBeChecked();
  // Then select 'Express'.
  await express.check();
  await expect(express).toBeChecked();
  await expect(standard).not.toBeChecked();
});