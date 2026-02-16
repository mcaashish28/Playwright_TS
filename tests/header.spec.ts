import {test, expect} from '@playwright/test';

test('header for correct title', async ({page})   => {
    // check if page is having header 'Playwright' or not
    await page.goto('https://playwright.dev/');
    const value = (await page.locator('css=[class="highlight_gXVj"]').textContent())?.trim();
    console.log(value);
    expect(value).toEqual('Playwright');

});