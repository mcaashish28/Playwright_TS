import{test,expect} from '@playwright/test';

test('Get by text test', async ({ page }) => { 
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
const text1 = await page.getByText(/Locate elements by their text content/i).textContent();
console.log(text1);
expect(text1).toMatch(/Locate elements by their text content/i);
});  



test('Get by insesitivetext', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
const text2 = await page.getByText('List item 1', { exact: true });

  await expect(text2).toBeVisible();

const caseInsensitiveText = page.getByText('list item 1');

  await expect(caseInsensitiveText).toHaveCount(1);
    
});



test('links test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByText('link', { exact: true }).click();
    await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);
    
});



test('special test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
   const special=await page.getByText('important', { exact: true });
   await expect(special).toBeVisible();
   await expect(special).toHaveCount(1);

   /// unpresent word text
    const unpresent=await page.getByText('unpresent', { exact: true });
    await expect(unpresent).toHaveCount(0);

});



test('button test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    const button=await page.getByText('Submit Form', { exact: true });
    await button.click();
    await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);

    const message = page.getByText('Click the button above to submit your information.');
    await expect(message).toBeVisible();
});



