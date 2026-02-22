import{test,expect} from '@playwright/test';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';

test('getByTitle are they present', async ({ page }) => {
  await page.goto(url);
  await expect(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');
  await expect(page.getByTitle('Home Page Link')).toHaveText('Home');
});

test('verify btn/link doesnt moves to another site', async ({ page }) => {
    await page.goto( url);
    const btn=page.getByTitle('Save');
    btn.click();
    await page.getByText('Save').click();
    await expect(page).toHaveURL(url);

    await page.locator('a[title="Home page link"]').click();
    await expect(page).toHaveURL(url);
    // console.log(await page.url());
});

test('Click On button and see does exist attribute ', async ({ page }) => {
    await page.goto(url);
    const btn1=page.getByTitle('Save');
    await expect(btn1).toBeVisible();
    await btn1.click();
    await expect(page.getByTitle('HyperText Markup Language')).toHaveText('HTML');
    await expect(page.getByTitle('Home Page Link')).toHaveText('Home');
    await expect(page.getByTitle('Tooltip text')).toHaveText('This text has a tooltip');
});

test('click on save btn and click on home link and redirected to same site or another site', async ({ page }) => {
    await page.goto(url);
    const btn=page.getByTitle('Save');
    await expect(btn).toBeVisible();
  await btn.click();
    await page.locator('a[title="Home page link"]').click();
    await expect(page).toHaveURL(url);
});

test('verify for unpresent', async ({ page }) => {
    await page.goto(url);
    await expect(page.getByTitle('Non-existent Title')).not.toBeVisible();
});