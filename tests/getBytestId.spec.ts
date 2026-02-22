import { test, expect } from '@playwright/test';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';


test('getByTestId & check the existance of text by ids', async ({ page }) => {

await page.goto(url);
const profileCard = page.getByTestId('user-profile-card');

await expect(profileCard.getByTestId('profile-name')).toHaveText('John Doe');
await expect(profileCard.getByTestId('profile-email')).toHaveText('john.doe@example.com');

const btn=await page.getByTestId('edit-profile-btn');
await btn.click();
await expect(btn).toBeVisible();

// checking after clicking name and gamil are same or get different
await expect(profileCard.getByTestId('profile-name')).toHaveText('John Doe');
await expect(profileCard.getByTestId('profile-email')).toHaveText('john.doe@example.com');


});

test('Checking for products', async ({ page }) => {

await page.goto(url);
const cards = page.getByTestId('product-card-1');
await expect(cards.getByTestId('product-name')).toHaveText('Product A');
await expect(cards.getByTestId('product-price')).toHaveText('$19.99');  

const card2=page.getByTestId('product-card-2');
await expect(card2.getByTestId('product-name')).toHaveText('Product B');
await expect(card2.getByTestId('product-price')).toHaveText('$29.99');

const card3=page.getByTestId('product-card-3');
await expect(card3.getByTestId('product-name')).toHaveText('Product C');
await expect(card3.getByTestId('product-price')).toHaveText('$39.99');


// await expect(cards).toHaveCount(3);

// await cards.nth(1).getByTestId('edit-profile-btn').click();
});

test('Checking After button clicking edit profile there is no change in products', async ({ page }) => {
await page.goto(url);
const btn=await page.getByTestId('edit-profile-btn');
await btn.click();
await expect(btn).toBeVisible();

const cards = page.getByTestId('product-card-1');
await expect(cards.getByTestId('product-name')).toHaveText('Product A');
await expect(cards.getByTestId('product-price')).toHaveText('$19.99');  

const card2=page.getByTestId('product-card-2');
await expect(card2.getByTestId('product-name')).toHaveText('Product B');
await expect(card2.getByTestId('product-price')).toHaveText('$29.99');

const card3=page.getByTestId('product-card-3');
await expect(card3.getByTestId('product-name')).toHaveText('Product C');
await expect(card3.getByTestId('product-price')).toHaveText('$39.99');
});

test('checking that after cliking links we are redirected to same site or not', async ({ page }) => {
await page.goto(url);
// home
const link1=await page.getByTestId('nav-home');
await link1.click();
await expect(page).toHaveURL(url);
// products
const link2=await page.getByTestId('nav-products');
await link2.click();
await expect(page).toHaveURL(url);
// contact
const link3=await page.getByTestId('nav-contact');
await link3.click();
await expect(page).toHaveURL(url);
});