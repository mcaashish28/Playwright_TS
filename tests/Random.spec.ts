import{test,expect} from '@playwright/test';
import { link } from 'fs/promises';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';



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

    const result=await page.locator('body').textContent();
    console.log(result);
    page.close();

    // await expect(page.getByText('Bad Request')).toBeVisible();
    // page.close();
});


// 401 error code test
test('Broken Links Test 401', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 401').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error401.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=401');

    const result=await page.locator('h3').textContent();
    console.log(result);
    page.close();

    // await expect(page.getByText('Server Error')).toBeVisible();
    // page.close();
});


// 403 error code test

test('Broken Links Test 403', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 403').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error403.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=403');

    const result=await page.locator('h2').textContent();
    console.log(result);
    page.close();

    // await expect(page.getByText('403 - Forbidden: Access is denied.')).toBeVisible();
    // page.close();
});


// 404 error code test

test('Broken Links Test 404', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 404').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error404.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=404');

    const result=await page.locator('h2').textContent();
    console.log(result);
    page.close();

    // await expect(page.getByText('404 - File or directory not found.')).toBeVisible();
    // page.close();
});


// 408 error code test

test('Broken Links Test 408', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 408').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error408.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=408');

    const result=await page.locator('body').textContent();
    console.log(result);
    page.close();

    // await expect(page.getByText('The page cannot be displayed because the client took too long to complete its request and the server closed the connection.')).toBeVisible();
    // page.close();
});


// 500 error code test

test('Broken Links Test 500', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 500').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error500.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=500');

    const result=await page.locator('h2').textContent();
    console.log(result);
    page.close();

//     await expect(page.getByText('500 - Internal server error.')).toBeVisible();
//     page.close();
 });


// 502 error code test

test('Broken Links Test 502', async ({page}) => {
    await page.goto(url);
    const link=await page.getByText('Errorcode 502').click();
    await expect(page).not.toHaveURL('https://testautomationpractice.blogspot.com/p/error502.html');
    await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('http://www.deadlinkcity.com/error-page.asp?e=502');

    const result=await page.locator('h2').textContent();
    console.log(result);
    page.close();

    // await expect(page.getByText('502 - Web server received an invalid response while acting as a gateway or proxy server.')).toBeVisible();
    // page.close();
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

// Alerts Test & Popup Test------------------------------------------------------------

test(' Simple Alert Test', async ({page}) => {
    await page.goto(url);   
    page.on('dialog', async (popup) => {
        console.log(popup.message());
        await popup.accept();
    });
    await page.getByText('Simple Alert').click();
   
});

// Conformation Alert Test
test(' Confirmation Alert Test', async ({page}) => {
    await page.goto(url);   
    
    page.on('dialog', async (popup) => {
        console.log(popup.message());
        await popup.accept();
    });
    await page.getByText('Confirmation Alert').click();
    const result= await page.textContent('#demo');
    console.log(result);
});

// Non confirmation alerttest
 
test(' Non Confirmation Alert Test', async ({page}) => {
    await page.goto(url);
    page.on('dialog', async (popup) => {
        console.log(popup.message());
        await popup.dismiss();
    });
    await page.getByText('Confirmation Alert').click();
    const result= await page.textContent('#demo');
    console.log(result);
});

// prompt Alert Test

test(' Prompt Alert Test', async ({page}) => {
    await page.goto(url);
    page.on('dialog', async (popup) => {
        console.log(popup.message());
        await popup.accept('Playwright');
    });
    await page.getByText('Prompt Alert').click();
    const result= await page.textContent('#demo');
    console.log(result);
});

// negative prompt Alert Test

test(' Negative Prompt Alert Test', async ({page}) => {
    await page.goto(url);
    page.on('dialog', async (popup) => {
        console.log(popup.message());
        await popup.dismiss();
    });
    await page.getByText('Prompt Alert').click();
    const result= await page.textContent('#demo');
    console.log(result);
});

// Window popup Test

test(' Window popup Test', async ({page}) => {
    await page.goto(url);
    await page.getByText('New Tab').click();
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        
    ]);
    await newPage.waitForLoadState();
    console.log(newPage.url());
    await expect(newPage).toHaveURL('https://www.pavantestingtools.com/');
    const result= await newPage.locator('h1.title').textContent();
    console.log(result);
    newPage.close();
});

// popup windows
test('popup windows', async ({page}) => {
    await page.goto(url);
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByText('Popup Windows').click()
    ]);
    const prl=newPage.url();
    expect(prl).toMatch(/playwright\.dev|selenium\.dev/);
    await newPage.waitForLoadState('networkidle');

    console.log(newPage.url());
    
    
    newPage.close();
});


//  Labels & Links Test----------------------------------------------------------------

test('Labels & Links Test', async ({page}) => {
    await page.goto(url);
    page.getByText('Mobile Labels');
    await page.getByText('Samsung');
    await page.getByText('Motorola');
    await page.getByText('Real me');    
        
});


// Laptop Links Test---------------------------------------------------------------
    // Apple link test
test('AppleLinks Test', async ({page}) => {
    await page.goto(url);
    await page.getByText('Laptop Links');
    const appleLink =  page.getByText('Apple', { exact: true });
    await appleLink.click();
    await expect(page).toHaveURL('https://www.apple.com/');
    await page.goBack();
});

 // lenovo link test
test('Lenovo Links Test', async ({page}) => {
    await page.goto(url);
    await page.getByText('Laptop Links');
    const lenovoLink =  page.getByText('Lenovo', { exact: true });
    await lenovoLink.click();
    await expect(page).toHaveURL('https://www.lenovo.com/in/en/');
    await page.goBack();
});

// Dell link test
test('Dell Links Test', async ({page}) => {
    await page.goto(url);
    await page.getByText('Laptop Links');
    const dellLink =  page.getByText('Dell', { exact: true });
    await dellLink.click();
    await expect(page).toHaveURL('https://www.dell.com/en-in');
    await page.goBack();
});


// Visitors Test ----------------------------------------------------------------

test('Visitors Test', async ({page}) => {
    await page.goto(url);
    const visitors= page.locator('#Stats1_totalCount');
    await visitors.waitFor();
    const value = await visitors.textContent();
    console.log(value);

});

// Copy Text Test--------------------------------------------------------------

test('text Test', async ({page}) => {
    await page.goto(url);
    const check1=await page.locator('#field1').inputValue();
    console.log(check1);

    const check2=await page.locator('#field2').inputValue();
    console.log(check2);

        const btn=page.getByText('Copy Text',{exact:true});
        await btn.click();
        await btn.click();
    


    await page.waitForTimeout(300);

    const check3=await page.locator('#field2').inputValue();
    console.log(check3);



      const check5=await page.locator('#field1').fill('Akarshit');
    console.log(check5);
        await btn.click();
        await btn.click();
         console.log(check3);
    


    await page.waitForTimeout(300);


});

// home link test

test('Home Link Test2', async ({page}) => {
    await page.goto(url);
    await page.locator('a.home-link').click();
      await page.context().newPage();
    console.log(page.url());
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    const result=await page.locator('h1').textContent();
    console.log(result);
    page.close();

        
});


// Back to top Test


test('Back to top test', async ({page}) => {
    await page.goto(url);
    await page.getByTitle('Back to top').click();
    console.log(page.url());
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');

    const para=page.getByText('This page demonstrates various Playwright locators for testing purposes.',{exact:true});
    await expect(para).toBeVisible();
    page.close();

        
});


// Footer Links Test----------------------------------------------------------------

test('Fotter Links test', async ({page}) => {
    await page.goto(url);
    const widg=page.locator('#PageList1');
            
     await widg .getByRole('link', { name: 'Home' }).click();
     console.log(page.url());
     await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

     const head=await page.locator('#header-inner');
     console.log(await head.locator('p').textContent());
     page.close();
        
});


test('Fotter 2 Links test', async ({page}) => {
    await page.goto(url);
    const widg=page.locator('#PageList1');
            
     await widg .getByRole('link', { name: 'Hidden Elements & AJAX' }).click();
     console.log(page.url());
     await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html');

     const head=await page.locator('#header-inner');
     console.log(await head.locator('p').textContent());
     page.close();
        
});


test('Fotter 3 Links test', async ({page}) => {
    await page.goto(url);
    const widg=page.locator('#PageList1');
            
     await widg .getByRole('link', { name: 'Download Files' }).click();
     console.log(page.url());
     await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/download-files_25.html');

     const head=await page.locator('#header-inner');
     console.log(await head.locator('p').textContent());
     page.close();
        
});





