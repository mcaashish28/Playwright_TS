// spec: GetByRole Link Locators - Test Case 4
// Click inline link within list item

import { test, expect } from '@playwright/test';

test('Click inline link within list item', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate the inline "link" text within "List item 2 with link" using getByRole
  const inlineLink = page.getByRole('link', { name: 'link' });
  
  // Verify single matching element found
  await expect(inlineLink).toHaveCount(1);
  
  // Link should be visible
  await expect(inlineLink).toBeVisible();
  
  // Click the inline link
  await inlineLink.click();
  
  // URL should update to include anchor
  await expect(page).toHaveURL(/#$/);
});