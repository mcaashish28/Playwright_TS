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