import{test,expect} from '@playwright/test';

test('getByAltText',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    const image = page.getByAltText('logo image');
    await expect(image).toHaveAttribute('src','https://playwright.dev/img/playwright-logo.svg');
    
    
});