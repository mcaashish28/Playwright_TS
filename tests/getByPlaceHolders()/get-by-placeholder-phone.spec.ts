// spec: GetByPlaceholder Locators - Test Case 2
// Locate phone number input by placeholder

import { test, expect } from '@playwright/test';

test('Locate phone number input by placeholder', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate phone number input using getByPlaceholder
  const phoneInput = page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
  
  // Verify element is visible
  await expect(phoneInput).toBeVisible();
  
  // Verify it's a textbox role
  await expect(phoneInput).toHaveRole('textbox');
  
  // Fill with valid phone format
  await phoneInput.fill('123-456-7890');
  
  // Verify filled value matches input
  await expect(phoneInput).toHaveValue('123-456-7890');
});