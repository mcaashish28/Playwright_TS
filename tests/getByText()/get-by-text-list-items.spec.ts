// spec: GetByText Locators - Test Case 4
// Locate multiple list items by text

import { test, expect } from '@playwright/test';

test('Locate multiple list items by text', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate "List item 1" using getByText
  const item1 = page.getByText('List item 1');
  
  // Verify List item 1 is visible
  await expect(item1).toBeVisible();
  await expect(item1).toHaveCount(1);
  
  // Locate "Special: Unique text identifier" using getByText
  const specialItem = page.getByText('Special: Unique text identifier');
  
  // Verify Special item is visible
  await expect(specialItem).toBeVisible();
  await expect(specialItem).toHaveCount(1);
});