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

test('clicking on image doesnt aloow to move to another page',async({page})=>{
    await page.goto(url);
    const image = page.getByAltText('logo image');
    await image.click();
    await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);
});

test('clicking on image doesnt change any text',async({page})=>{
    await page.goto(url);
    const text2 =  page.getByText('Playwright Logo', { exact: true });
    
    const image = page.getByAltText('logo image');
    await image.click();
    
    await expect(text2).toBeVisible();
});

test('checking image is full size',async({page})=>{
    await page.goto(url);
    const image = page.getByAltText('logo image');
    const box = await image.boundingBox();
    console.log(box?.width, box?.height);
    // await expect(image).toHaveAttribute('width','212');
    // await expect(image).toHaveAttribute('height','212');
    await expect(box?.width).toBe(212);
    await expect(box?.height).toBe(212);
    
});