// spec: GetByRole Link Locators - Test Case 1
// Navigate using Home link in navigation

import { test, expect } from '@playwright/test';

test('Navigate using Home link in navigation', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate the Home link within the role-locators navigation using getByRole
  const homeLink = page.locator('#role-locators').getByRole('navigation').getByRole('link', { name: 'Home' });
  
  // Link should be visible
  await expect(homeLink).toBeVisible();
  
  // Verify href attribute is "#"
  await expect(homeLink).toHaveAttribute('href', '#');
  
  // Click the Home link
  await homeLink.click();
  
  // URL should change to include anchor (#)
  await expect(page).toHaveURL(/#$/);
});