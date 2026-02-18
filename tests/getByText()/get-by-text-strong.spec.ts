// spec: GetByText Locators - Test Case 2
// Locate strong/emphasized text element

import { test, expect } from '@playwright/test';

test('Locate strong/emphasized text element', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate the strong text "important" using exact match
  const importantText = page.getByText('important', { exact: true });
  
  // Verify element is visible
  await expect(importantText).toBeVisible();
  
  // Verify count is 1 (exact match to strong element only)
  await expect(importantText).toHaveCount(1);
});