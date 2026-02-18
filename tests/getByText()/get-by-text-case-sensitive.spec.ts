// spec: GetByText Locators - Test Case 9
// Case sensitivity in text matching

import { test, expect } from '@playwright/test';

test('Case sensitivity in text matching', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate text with exact case match
  const caseExactText = page.getByText('List item 1', { exact: true });
  
  // Verify element is visible
  await expect(caseExactText).toBeVisible();
  
  // Verify count of exact match is 1
  await expect(caseExactText).toHaveCount(1);
  
  // Attempt case-insensitive search (should still find it in this context)
  const caseInsensitiveText = page.getByText('list item 1');
  
  // Verify the case-insensitive search finds elements as well
  await expect(caseInsensitiveText).toHaveCount(1);
});