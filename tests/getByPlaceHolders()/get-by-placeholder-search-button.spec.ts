// spec: GetByPlaceholder Locators - Test Case 5
// Click search button after search input

import { test, expect } from '@playwright/test';

test('Click search button after search input', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate search input using placeholder
  const searchInput = page.getByPlaceholder('Search products...');
  
  // Verify search input is found and visible
  await expect(searchInput).toBeVisible();
  
  // Type search query
  await searchInput.fill('product search');
  
  // Verify search value entered
  await expect(searchInput).toHaveValue('product search');
  
  // Locate and click Search button
  const searchButton = page.getByRole('button', { name: 'Search' });
  await expect(searchButton).toBeVisible();
  await searchButton.click();
  
  // Verify interaction succeeds (no errors on click)
  await expect(page).toHaveURL(/playwrightpractice/);
});