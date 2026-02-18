// spec: GetByRole Link Locators - Test Case 2
// Navigate using Products link in navigation

import { test, expect } from '@playwright/test';

test('Navigate using Products link in navigation', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate the Products link within the role-locators navigation using getByRole
  const productsLink = page.locator('#role-locators').getByRole('navigation').getByRole('link', { name: 'Products' });
  
  // Link should be visible
  await expect(productsLink).toBeVisible();
  
  // Verify href attribute is "#"
  await expect(productsLink).toHaveAttribute('href', '#');
  
  // Click the Products link
  await productsLink.click();
  
  // URL should contain anchor
  await expect(page).toHaveURL(/#$/);
});