// spec: GetByPlaceholder Locators - Test Case 7
// Verify multiple placeholder inputs

import { test, expect } from '@playwright/test';

test('Verify multiple placeholder inputs', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Verify all 4 placeholder inputs exist
  const fullNameInput = page.getByPlaceholder('Enter your full name');
  const phoneInput = page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
  const messageInput = page.getByPlaceholder('Type your message here...');
  const searchInput = page.getByPlaceholder('Search products...');
  
  // Verify Full Name input is visible
  await expect(fullNameInput).toBeVisible();
  await expect(fullNameInput).toHaveRole('textbox');
  
  // Verify Phone input is visible
  await expect(phoneInput).toBeVisible();
  await expect(phoneInput).toHaveRole('textbox');
  
  // Verify Message textarea is visible
  await expect(messageInput).toBeVisible();
  await expect(messageInput).toHaveRole('textbox');
  
  // Verify Search input is visible
  await expect(searchInput).toBeVisible();
  await expect(searchInput).toHaveRole('searchbox');
});