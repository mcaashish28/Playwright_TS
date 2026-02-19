import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  
});
// 
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
test('Click inline link within list item', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Locate the inline "link" text within "List item 2 with link" using getByRole
  const inlineLink = page.getByRole('link', { name: 'link' });
  
  // Verify single matching element found
  await expect(inlineLink).toHaveCount(1);
  
  // Link should be visible
  await expect(inlineLink).toBeVisible();
  
  // Click the inline link
  await inlineLink.click();
  
  // URL should update to include anchor
  await expect(page).toHaveURL(/#$/);
});
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
test('Negative case - nonexistent link', async ({ page }) => {
  // Navigate to the practice page.
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  // Attempt to locate a link with name "Nonexistent Link" using getByRole
  const nonexistentLink = page.getByRole('link', { name: 'Nonexistent Link' });
  
  // Verify the locator count is 0 (no matches found)
  await expect(nonexistentLink).toHaveCount(0);
});
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
