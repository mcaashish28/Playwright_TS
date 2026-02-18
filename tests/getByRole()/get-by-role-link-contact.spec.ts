// spec: GetByRole Link Locators - Test Case 3
// Navigate using Contact link in navigation

import { test, expect } from '@playwright/test';

test('Navigate using Contact link in navigation', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Find the Contact link using getByRole within the role-locators navigation section
  const contactLink = page.locator('#role-locators').getByRole('navigation').getByRole('link', { name: 'Contact' });
  
  // Link should be visible and clickable
  await expect(contactLink).toBeVisible();
  
  // Verify href attribute is "#"
  await expect(contactLink).toHaveAttribute('href', '#');
  
  // Click the Contact link
  await contactLink.click();
  
  // Navigation anchor should be applied (URL ends with #)
  await expect(page).toHaveURL(/#$/);
});