import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  
});

