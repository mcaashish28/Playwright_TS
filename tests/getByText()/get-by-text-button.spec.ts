// spec: GetByText Locators - Test Case 6
// Locate button by text and interact

import { test, expect } from '@playwright/test';

test('Locate button by text and interact', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate "Submit Form" button using getByText
  const submitButton = page.getByText('Submit Form');
  
  // Verify button is visible and clickable
  await expect(submitButton).toBeVisible();
  
  // Click the button
  await submitButton.click();
  
  // Verify the form submission message is still visible after click
  const message = page.getByText('Click the button above to submit your information.');
  await expect(message).toBeVisible();
});