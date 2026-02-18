// spec: GetByRole Link Locators - Test Case 7
// Negative case - nonexistent link

import { test, expect } from '@playwright/test';

test('Negative case - nonexistent link', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Attempt to locate a link with name "Nonexistent Link" using getByRole
  const nonexistentLink = page.getByRole('link', { name: 'Nonexistent Link' });
  
  // Verify the locator count is 0 (no matches found)
  await expect(nonexistentLink).toHaveCount(0);
});