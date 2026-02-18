// spec: GetByRole Link Locators - Test Case 6
// Verify multiple Home links on page

import { test, expect } from '@playwright/test';

test('Verify multiple Home links on page', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Count all "Home" links using getByRole
  const allHomeLinks = page.getByRole('link', { name: 'Home' });
  
  // Verify multiple matches found (multiple Home links across page sections)
  await expect(allHomeLinks).toHaveCount(6);
  
  // Click the last (footer) Home link
  await allHomeLinks.last().click();
  
  // Navigation to home URL
  await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);
});