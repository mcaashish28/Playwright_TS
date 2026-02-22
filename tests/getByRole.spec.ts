import { test, expect, Locator } from '@playwright/test';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

test('Button test', async ({ page }) => {
  await page.goto(url);


const button = await page.getByRole('button', { name: 'Primary Action' });
await button.click();

const button2= await page.getByRole('button',{ name: 'Toggle Button' });
await button2.click();
const button3= await page.getByRole('button',{ name: 'Div with button role' });
await button3.click();
});



test("Headings test", async ({ page }) => {
    await page.goto(url);
     await expect(page.getByRole('heading', { name: 'Buttons' })).toBeVisible();
     await expect(page.getByRole('heading', { name: 'Form Elements' })).toBeVisible();
     await expect(page.getByRole('heading', { name: 'Navigation' })).toBeVisible();
});


test("Links test", async ({ page }) => {
    await page.goto(url);
    
    await page.getByRole('menuitem', { name: 'Home' }).click();
    await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);
    await page.getByRole('menuitem', { name: 'Products' }).click();
     await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);
    await page.getByRole('menuitem', { name: 'Contact' }).click();
     await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);

}); 

test("Username test & checkbox", async ({ page }) => {
    await page.goto(url);
    await page.locator('#username').fill('Akarshit');
    await expect(page.locator('#username')).toHaveValue('Akarshit');
    const pagecheck=await expect(page.getByRole('checkbox', { name: 'Accept Terms' })).toBeChecked;
    // await expect(page.getByRole('checkbox', { name: 'Accept Terms' })).toBeChecked();
   console.log(pagecheck);
   await page.locator('#username').clear();
});

test("click button afect textfeild or not", async ({ page }) => {
    await page.goto(url);
    await page.locator('#username').fill('Akarshit');
    const button =  page.getByRole('button', { name: 'Primary Action' });
    await button.click();

    const button2= await page.getByRole('button',{ name: 'Toggle Button' });
    await button2.click();

    await expect(page.locator('#username')).toHaveValue('Akarshit');
});