import{test,expect} from '@playwright/test';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';
test('checking image have same attribute',async({page})=>{
    await page.goto(url);
    const image = page.getByAltText('logo image');
    await expect(image).toHaveAttribute('src','https://playwright.dev/img/playwright-logo.svg');
    
    
});

test('verify image is correct by another image src',async({page})=>{
    await page.goto(url);
    const image = page.getByAltText('logo image');
    await expect(image).not.toHaveAttribute('src','https://miro.medium.com/v2/resize:fit:1080/1*8DDN_DRuSBlM74dVYUjR9Q.png');
});