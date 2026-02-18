// spec: GetByPlaceholder Locators - Test Case 4
// Locate search product input by placeholder

import { test, expect } from '@playwright/test';

test('Locate search product input by placeholder', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate search product input using getByPlaceholder
  const searchInput = page.getByPlaceholder('Search products...');
  
  // Verify element is visible
  await expect(searchInput).toBeVisible();
  
  // Verify it's a searchbox role
  await expect(searchInput).toHaveRole('searchbox');
  
  // Type search term
  await searchInput.fill('laptop');
  
  // Verify search value
  await expect(searchInput).toHaveValue('laptop');
});