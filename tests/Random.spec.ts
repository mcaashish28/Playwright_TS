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


// Links test

test('merrymoonmary Links test', async ({page}) => {
    await page.goto(url);
    const widg=page.locator('#Attribution1');
            
   
     
     const [newPage] = await Promise.all([
  page.context().waitForEvent('page'), 
    await widg .getByRole('link', { name: 'merrymoonmary' }).click()     
]);

await newPage.waitForLoadState();      
console.log('New page URL:', await newPage.url()); 

await expect(page).toHaveURL('https://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger');


        
});




// Get By alt text------------------___________________----------------------------____________________-----------------------------



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



// Get By Label Text Test---------------_____________________----------------_____________---------------



test('Inputing Values test', async ({ page }) => {
    await page.goto(url);
    const adr=await page.getByLabel('Email Address:');
    adr.focus();
    await adr.fill('Aperion123@gmail.com');
    await expect(adr).toHaveValue('Aperion123@gmail.com');
   

    const pass=await page.getByLabel(' Password: ');
    pass.focus();
    await pass.fill('123456789');
    await expect(pass).toHaveValue('123456789');
    // Checking for email adress value
    await expect(adr).toHaveValue('Aperion123@gmail.com');


    const ag=await page.getByLabel('Age:');
    ag.focus();
    await ag.fill('19');
    await expect(ag).toHaveValue('19');

    // checking for upper filled values
    await expect(pass).toHaveValue('123456789');
    await expect(adr).toHaveValue('Aperion123@gmail.com');
});



test('Shiiping method test', async ({ page }) => {
    await page.goto(url);
    const legend= page.getByText('Shipping Method');
    await expect(legend).toBeVisible();
    await expect(legend).toHaveText('Shipping Method');
    

    const stshiping=page.getByLabel(' Standard');
    await stshiping.check();
    await expect(stshiping).toBeChecked();


    const exshiping=page.getByLabel(' Express');
    await exshiping.check();
    await expect(exshiping).toBeChecked();

    // checking for that st shipping get unchecked
    await expect(stshiping).not.toBeChecked();


  });

  test('enter email & password and then erase email and check the value', async ({ page }) => {
    await page.goto(url);
    const adr= page.getByLabel('Email Address:');
    adr.focus();
    await adr.fill('Aperion123@gmail.com');
    await expect(adr).toHaveValue('Aperion123@gmail.com');
    const pass= page.getByLabel(' Password: ');
    pass.focus();
    await pass.fill('123456789');
    await expect(pass).toHaveValue('123456789');
    await adr.clear();
    await expect(adr).toHaveValue('');
  });

  test('enter age and then check the value and then enter value and check the value', async ({ page }) => {
    await page.goto(url);
    const ag= page.getByLabel('Age:');
    ag.focus();
    await ag.fill('19');
    await expect(ag).toHaveValue('19');
    await ag.clear();
    await expect(ag).toHaveValue('');
    await ag.fill('20');
    await expect(ag).toHaveValue('20');

  });

  test('fill email and click on shipping method and check the email value & clear & fill new value & check clicbox ', async ({ page }) => {
    await page.goto(url);
    const adr= page.getByLabel('Email Address:');
    adr.focus();
    await adr.fill('Aperion123@gmail.com');
    await expect(adr).toHaveValue('Aperion123@gmail.com');
    const stshiping=page.getByLabel(' Standard');
    await stshiping.check();
    await expect(stshiping).toBeChecked();
    await adr.clear();
    await expect(adr).toHaveValue('');
    await adr.fill('NewEmail@gmail.com');
    await expect(adr).toHaveValue('NewEmail@gmail.com');
    await expect(stshiping).toBeChecked();
  });



//   Get By PlaceHolders_______________----------------___________________________--------_______________---------------____-



test('PlaceHoldets Values test', async ({ page }) => {

    await page.goto(url);
    const nm=await page.getByPlaceholder('Enter your full name');
    nm.focus();
    await nm.fill('Akarshit');
    await expect(nm).toHaveValue('Akarshit');


    const pn=await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
    pn.focus();
    await pn.fill('123-456-7890');  
    await expect(pn).toHaveValue('123-456-7890');
 


    const msg=await page.getByPlaceholder('Type your message here...');
    msg.focus();
    await msg.fill('This is a test message for placeholder test Great Coder');
    await expect(msg).toHaveValue('This is a test message for placeholder test Great Coder');

    // checking for upper filled values
    await expect(nm).toHaveValue('Akarshit');
    await expect(pn).toHaveValue('123-456-7890');


    // clearing the values
    await nm.clear();
    await pn.clear();
    await msg.clear();



    const sea=await page.getByPlaceholder('Search products...');
    sea.focus();
    await sea.pressSequentially('Laptop',{delay:300});
    await expect(sea).toHaveValue('Laptop');

    // checking button works

   const but=await page.getByRole('button', { name: 'Search' });
   await but.click();
   await expect(sea).toHaveValue('Laptop');
    
      
});

test('click empty search and then fill product name and check the value', async ({ page }) => {
    await page.goto(url);
    const sea= page.getByPlaceholder('Search products...');
    const but= page.getByRole('button', { name: 'Search' });
    await but.click();
    await expect(sea).toHaveValue('');
    await sea.focus();
    await sea.fill('Laptop');
    await expect(sea).toHaveValue('Laptop');
    await but.click();
    await expect(sea).toHaveValue('Laptop');

});

test('enter name & phone number and last name & then check name contain full name+lastname & phone number contain only phone number & then clear the name and check the value', async ({ page }) => {
    await page.goto(url);
    const nm= page.getByPlaceholder('Enter your full name');
    nm.focus();
    await nm.fill('Akarshit');
    await expect(nm).toHaveValue('Akarshit');
    const pn= page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
    pn.focus();
    await pn.fill('123-456-7890');
    nm.focus();
    await nm.fill('Akarshit Mahajan');
    await expect(nm).toHaveValue('Akarshit Mahajan');
    await expect(pn).toHaveValue('123-456-7890');
    await nm.clear();
    await expect(nm).toHaveValue('');
    await expect(pn).toHaveValue('123-456-7890');
    await pn.clear();
    await expect(pn).toHaveValue('');
});

test('enter message and  clear the message and write new msg come to phone number fill it & name & go to msg continue it and check the values should be as +msg ', async ({ page }) => {
    await page.goto(url);
    const msg= page.getByPlaceholder('Type your message here...');
    msg.focus();
    await msg.fill('This is a test message for placeholder test Great Coder');
    await expect(msg).toHaveValue('This is a test message for placeholder test Great Coder');
    await msg.clear();
    await msg.fill('This is a new message');
    const pn= page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
    pn.focus();
    await pn.fill('123-456-7890');
    const nm= page.getByPlaceholder('Enter your full name');
    nm.focus();
    await nm.fill('Akarshit Mahajan');
    msg.focus();
    await msg.fill('This is a new message for phone number 123-456-7890 and name Akarshit Mahajan');
    await expect(msg).toHaveValue('This is a new message for phone number 123-456-7890 and name Akarshit Mahajan');
});

test('enter  name and search button click and then come back to name &check name write phone number then click button and then come to phone number and then check the value be wrriten ', async ({ page }) => {
    await page.goto(url);
    const nm= page.getByPlaceholder('Enter your full name');
    nm.focus();
    await nm.fill('Akarshit Mahajan');
    const but= page.getByRole('button', { name: 'Search' });
    await but.click();
    await expect(nm).toHaveValue('Akarshit Mahajan');
    const pn= page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
    pn.focus();
    await pn.fill('123-456-7890');
    await but.click();
    await expect(pn).toHaveValue('123-456-7890');
    await expect(nm).toHaveValue('Akarshit Mahajan');
});



// GetByRole _______________--------------_____________--------------_______________-----------


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


// GetByTestId______________------------------______________________-----------------------_______


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


test('clicking button and check the text isn present or not', async ({ page }) => {
await page.goto(url);
const btn=await page.getByTestId('footer-button');
await expect(btn).toBeVisible();
await btn.click();
const text=await page.getByText ('This page demonstrates various Playwright locators for testing purposes.',{exact:true});
await expect(text).toBeVisible();
});


// GetByText______________-----------------------__________________


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




// GetByTitle_____________---------------______________------------_____-

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




// blogger Link Test


test('blogger link test', async ({ page }) => {

await page.goto(url);
    const widg=page.locator('#Attribution1');
    const [newPage] = await Promise.all([
     page.context().waitForEvent('page'), 
     await widg .getByRole('link', { name: 'Blogger' }).click()     
]);

await newPage.waitForLoadState();      
console.log('New page URL:',newPage.url()); 

// We Are Not Using session here so we are using www 

await expect(newPage).toHaveURL('https://www.blogger.com/about/?bpli=1');
newPage.close();
});

//  blog link test


test('blog link test', async ({ page }) => {
    await page.goto(url);
    const widg=page.locator('#shadow_host');
    
    await widg .getByText('Blog',{exact: true}).click()     

await page.waitForLoadState();      
console.log('New page URL:',page.url()); 
await expect(page).toHaveURL('https://www.pavantestingtools.com/');

});

// Youtube Link Test  
test('Youtube Link test ', async ({ page }) => {
    await page.goto(url);
    const widg=page.locator('#footer-2-2');
    
    await widg .getByText('Youtube',{exact: true}).click();   

await page.waitForLoadState();      
console.log('New page URL:',page.url()); 
await expect(page).toHaveURL('https://www.youtube.com/@sdetpavan/videos');

});

// Comments atom test
test('Comments atom Link test',async({ page }) =>{

    await page.goto(url);
    const widg=page.locator('.feed-link');
     const [newPage] = await Promise.all([
     page.context().waitForEvent('page'), 
      await widg .getByText('Comments (Atom)',{exact: true}).click()  
]);

    await newPage.waitForLoadState();

         
    console.log('New page URL:',newPage.url()); 
    await expect(newPage).toHaveURL('https://testautomationpractice.blogspot.com/feeds/posts/default');


});

// added Home Link tests

test('Homelast Link test ', async ({ page }) => {
    await page.goto(url);
    const widg=page.locator('.home-link');
    
    await widg .getByText('Home',{exact: true}).click();   

await page.waitForLoadState();      
console.log('New page URL:',page.url()); 
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

});

// Automation Testing Practice link test

test('Automation head Link test ', async ({ page }) => {
    await page.goto(url);
    const widg=page.locator('#header-inner');
    
    await widg .getByText('Automation Testing Practice',{exact: true}).click();   

await page.waitForLoadState();      
console.log('New page URL:',page.url()); 
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

});


