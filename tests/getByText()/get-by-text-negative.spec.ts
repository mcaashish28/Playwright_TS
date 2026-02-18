// spec: GetByText Locators - Test Case 8
// Negative case - nonexistent text

import { test, expect } from '@playwright/test';

test('Negative case - nonexistent text', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Attempt to locate nonexistent text
  const nonexistentText = page.getByText('This text does not exist on the page');
  
  // Verify locator count is 0 (no matches found)
  await expect(nonexistentText).toHaveCount(0);
});