import{test,expect} from '@playwright/test';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';

test('Wikepedia Test', async ({page}) => {
    await page.goto(url);
    const ele=await page.locator('#Wikipedia1_wikipedia-search-input').fill('Playwri');

     await page.locator('input[type="submit"]').click();
     await page.waitForTimeout(4000);
     const results=page.locator('a[target="_blank"]').first().click();
     


    //  const results=await expect(page.locator('.wikipedia-search-result-link')).toHaveCount(10);
    //  const count = await expect(page.locator('.wikipedia-search-result-link')).not.toHaveCount(0);
    //  console.log(count);
    //  for(let i=0;i<5;i++){
    //     const text=await page.locator('.wikipedia-search-result-link').nth(i).textContent();
    //     console.log(text);
    //  }
        // console.log(count);
    // const button = page.locator('#wikipedia-search-button');
    // await expect(button).toBeVisible();
    // await button.click();
    // const btnele=await page.locator('#wikipedia-search-button');
    // await btnele.click();


});

//  Drag and Drop Test

test('Drag and Drop Test', async ({page}) => {
    await page.goto(url);
    // css using 
    const source=page.locator('#draggable');
    const target=page.locator('#droppable');
    await source.dragTo(target);
    await page.waitForTimeout(4000);
});

// Mouse Hover Test

test('Mouse Hover Test', async ({page}) => {
    await page.goto(url);
    await page.getByText('Point Me').hover();
    await page.waitForTimeout(4000);
    await page.getByRole('link', { name: 'Mobiles' }).click();
    await expect(page).toHaveURL(url);
    // second laptop test
    await page.getByText('Point Me').hover();
    await page.waitForTimeout(4000);
    await page.getByRole('link', { name: 'Laptops' }).click();
    await expect(page).toHaveURL(url);
});