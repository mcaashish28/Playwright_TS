// spec: GetByPlaceholder Locators - Test Case 6
// Clear and re-enter placeholder input

import { test, expect } from '@playwright/test';

test('Clear and re-enter placeholder input', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate full name input by placeholder
  const fullNameInput = page.getByPlaceholder('Enter your full name');
  
  // Verify input is found
  await expect(fullNameInput).toBeVisible();
  
  // Fill initial value
  await fullNameInput.fill('John Doe');
  await expect(fullNameInput).toHaveValue('John Doe');
  
  // Clear the input
  await fullNameInput.clear();
  await expect(fullNameInput).toHaveValue('');
  
  // Re-fill with new value
  await fullNameInput.fill('Jane Smith');
  
  // Verify final value
  await expect(fullNameInput).toHaveValue('Jane Smith');
});