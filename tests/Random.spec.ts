import{test,expect} from '@playwright/test';
import { link } from 'fs/promises';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';

// test('Wikepedia Test', async ({page}) => {
//     await page.goto(url);
//     const ele=await page.locator('#Wikipedia1_wikipedia-search-input').fill('Playwri');

//      await page.locator('input[type="submit"]').click();
//      await page.waitForTimeout(4000);
//      const results=page.locator('a[target="_blank"]').first().click();
     


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
// });




//  Drag and Drop Test----------------------------------------------------------------

test('Drag and Drop Test', async ({page}) => {
    await page.goto(url);
    // css using 
    const source=page.locator('#draggable');
    const target=page.locator('#droppable');
    await source.dragTo(target);
    await page.waitForTimeout(4000);
});

// Mouse Hover Test----------------------------------------------------------------

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

// Broken Links Test-----------------------------------------------------------------
// 400 error code test

test('Broken Links Test 400', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 400').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error400.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=400');
    await expect(page.getByText('Bad Request')).toBeVisible();
    page.close();
});


// 401 error code test
test('Broken Links Test 401', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 401').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error401.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=401');
    await expect(page.getByText('Server Error')).toBeVisible();
    page.close();
});


// 403 error code test

test('Broken Links Test 403', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 403').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error403.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=403');
    await expect(page.getByText('403 - Forbidden: Access is denied.')).toBeVisible();
    page.close();
});


// 404 error code test

test('Broken Links Test 404', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 404').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error404.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=404');
    await expect(page.getByText('404 - File or directory not found.')).toBeVisible();
    page.close();
});


// 408 error code test

test('Broken Links Test 408', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 408').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error408.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=408');
    await expect(page.getByText('The page cannot be displayed because the client took too long to complete its request and the server closed the connection.')).toBeVisible();
    page.close();
});


// 500 error code test

test('Broken Links Test 500', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 500').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error500.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=500');
    await expect(page.getByText('500 - Internal server error.')).toBeVisible();
    page.close();
});


// 502 error code test

test('Broken Links Test 502', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 502').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error502.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=502');
    await expect(page.getByText('502 - Web server received an invalid response while acting as a gateway or proxy server.')).toBeVisible();
    page.close();
});


// 503 error code test

test('Broken Links Test 503', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 503').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error503.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=503');
    await expect(page.getByText('The service is unavailable.')).toBeVisible();
    page.close();
});



