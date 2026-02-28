import{test,expect,Page, Locator} from '@playwright/test';

const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';

async function ForSearch(Btn:Locator,searchVal:string) {
 await Btn.pressSequentially(`{searchval}`,{delay:300});
}

async function inputvalues(btn1:Locator,v1:string,) {
    await btn1.isVisible();
    await btn1.fill(v1);

}   

async function erasevalues(btn1:Locator) {
    await btn1.clear();    
}

async function checkmark(btn1:Locator) {
    await btn1.check();
}

async function ID0RCLASS(page :Page,text:string,getBy:string):Promise<Locator> {
    if(getBy=='ID'){
        return page.locator(`#${text}`);
    }
    return page.locator(`.${text}`);
}

async function SingleTargetLoc(page:Page | Locator,text:string,getBy:string): Promise<Locator> {
    
    if(getBy=='Text'){
    const btn = page.getByText(`${text}`,{exact:true});
    return btn;
    }else if(getBy=='Place'){
    const btn2=page.getByPlaceholder(`${text}`);
    return btn2;
    }else if(getBy=='Alt'){
    const btn3=page.getByAltText(`${text}`);
    return btn3;
    }else if(getBy=='Label'){
    const btn4=page.getByLabel(`${text}`);
    return btn4;
    }else if(getBy=='Title'){
    const btn5=page.getByTitle(`${text}`);
    return btn5;
    }else if(getBy=='Testid'){
    const btn6=page.getByTestId(`${text}`);
    return btn6;
    }
    return page.locator('sdf');
}

async function  DoubleTargetLoc(page:Page|Locator,role: 'button' | 'link' | 'textbox', 
  accessibleName: string ):Promise<Locator> {
    return page.getByRole(role,{name:accessibleName,exact:true}); 

}

async function newWindowLink(page:Page,btn:Locator) {
     const [newPage] = await Promise.all([
        page.context().waitForEvent(`page`),
        await btn.click(),
    ]);
    console.log(newPage.url());
    await newPage.waitForTimeout(100);
    newPage.close();
}

async function Linkstest(page:Page,loc:Locator) {
     await loc.click();
    await page.context().newPage();
    console.log(page.url());
    await page.waitForTimeout(100);
    await page.goBack();
}


test('Errorcode 400',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Errorcode 400','Text');
await Linkstest(page,btn);
});

test('Errorcode 401',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Errorcode 401','Text');
await Linkstest(page,btn);
});

test('Errorcode 403',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Errorcode 403','Text');
await Linkstest(page,btn);
});

test('Errorcode 404',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Errorcode 404','Text');
await Linkstest(page,btn);
});

test('Errorcode 408',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Errorcode 408','Text');
await Linkstest(page,btn);
});

test('Errorcode 500',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Errorcode 500','Text');
await Linkstest(page,btn);
});

test('Errorcode 502',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Errorcode 502','Text');
await Linkstest(page,btn);
});

test('Errorcode 503',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Errorcode 503','Text');
await Linkstest(page,btn);
});

test('Apple Link Test',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Apple','Text');
await Linkstest(page,btn);
});

test('Lenovo Link Test',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Lenovo','Text');
await Linkstest(page,btn);
});

test('Dell Link Test',async ({page}) => { 
await page.goto(url);
const btn=await SingleTargetLoc(page,'Dell','Text');
await Linkstest(page,btn);
});

test('Fotter 1 Link Test',async ({page}) => { 
await page.goto(url);
const btn=await ID0RCLASS(page,'PageList1','ID');
const btn2=await DoubleTargetLoc(btn,'link','Home');
await Linkstest(page,btn2);
});

test('Fotter 2 Link Test',async ({page}) => { 
await page.goto(url);
const btn=await ID0RCLASS(page,'PageList1','ID');
const btn2=await DoubleTargetLoc(btn,'link','Hidden Elements & AJAX');
await Linkstest(page,btn2);
});

test('Fotter 3 Link Test',async ({page}) => { 
await page.goto(url);
const btn=await ID0RCLASS(page,'PageList1','ID');
const btn2=await DoubleTargetLoc(btn,'link','Download Files');
await Linkstest(page,btn2);
});

test('merrymoonmary Link test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'Attribution1','ID');
const btn2=await DoubleTargetLoc(btn,'link','merrymoonmary');
await newWindowLink(page,btn2);
});

test('Blogger Link test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'Attribution1','ID');
const btn2=await DoubleTargetLoc(btn,'link','Blogger');
await newWindowLink(page,btn2);
});

test('Top Blog Link test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'PageList2','ID');
const btn2= await SingleTargetLoc(btn,'Blog','Text');
await Linkstest(page,btn);
});

test('Youtube Link test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'footer-2-2','ID');
const btn2= await SingleTargetLoc(btn,'Youtube','Text');
await Linkstest(page,btn2);
});

test('Comments Atom Link Test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'feed-link','class');
const btn2= await SingleTargetLoc(btn,'Comments (Atom)','Text');
await Linkstest(page,btn2);
});

test('Home Last Link Test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'home-link','class');
const btn2= await SingleTargetLoc(btn,'Home','Text');
await Linkstest(page,btn2);
});

test('Automation Practice Headlink test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'titlewrapper','class');
const btn2= await SingleTargetLoc(btn,'Automation Testing Practice','Text');
await Linkstest(page,btn2);
});

test('Sample Test23', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'titlewrapper','class');
const btn2= await SingleTargetLoc(btn,'Automation Testing Practice','Text');
 await Linkstest(page,btn2);
});

test('Udemy Course Link test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'PageList2','ID');
const btn2= await SingleTargetLoc(btn,'Udemy Courses','Text');
await Linkstest(page,btn2);
});

test('Online Training Link test', async ({page}) => {
await page.goto(url);
const btn=await ID0RCLASS(page,'PageList2','ID');
const btn2= await SingleTargetLoc(btn,'Online Trainings','Text');
await Linkstest(page,btn2);
});

test('Label Inputing Gmail test', async ({ page }) => {
await page.goto(url);
const adr=await SingleTargetLoc(page,'Email Address:','Label');
await inputvalues(adr,'akarshitmahajan1094')
});

test('Label Inputing Password test', async ({ page }) => {
await page.goto(url);
const pass=await SingleTargetLoc(page,' Password: ','Label');
await  inputvalues(pass,'1234578');
});

test('Label Standard Shipping CheckMethod Test', async ({ page }) => {
await page.goto(url);
const legend= await ID0RCLASS(page,'label-locators','ID');
const standard=await SingleTargetLoc(legend,' Standard','Label')
await checkmark(standard);
await expect(standard).toBeChecked();
});

test('Label Express Shipping CheckMethod Test', async ({ page }) => {
await page.goto(url);
const legend= await ID0RCLASS(page,'label-locators','ID');
const express=await SingleTargetLoc(legend,' Express','Label')
await checkmark(express);
await expect(express).toBeChecked();
});

test('Label Age inputting Test', async ({ page }) => {
await page.goto(url);
const age=await SingleTargetLoc(page,'Your Age:','Label');
await inputvalues(age,'25');
await erasevalues(age);
await inputvalues(age,'40');
expect(age).toHaveValue('40');
});

test('PlaceHolders Inputing Name test', async ({ page }) => {
await page.goto(url);
const gname=await SingleTargetLoc(page,'Enter your full name','Place');
await inputvalues(gname,'Akarshit')
});

test('PlaceHolders Inputing PhoneNumber test', async ({ page }) => {
await page.goto(url);
const pno=await SingleTargetLoc(page,'Phone number (xxx-xxx-xxxx)','Place');
await inputvalues(pno,'123457783');
});

test('PlaceHolders Inputing Message test', async ({ page }) => {
await page.goto(url);
const pno=await SingleTargetLoc(page,'Type your message here...','Place');
await inputvalues(pno,' I Am Good Coder,Agreed?');
});

test('PlaceHolders Search test', async ({ page }) => {
await page.goto(url);
const search=await SingleTargetLoc(page,'Search products...','Place');
await ForSearch(search,'Laptop');
});

test('PlaceHolders Button test', async ({ page }) => {
await page.goto(url);
const btn=await SingleTargetLoc(page,'Search','Place');
await btn.isVisible();
});

test('TestID Button test', async ({ page }) => {
await page.goto(url);
const btn=await SingleTargetLoc(page,'edit-profile-btn','Testid');
await btn.isVisible();
});

test('TestID Name test', async ({ page }) => {
await page.goto(url);
const gname=await SingleTargetLoc(page,'profile-name','Testid');
await gname.isVisible();
});

test('TestID Gamil test', async ({ page }) => {
await page.goto(url);
const gname=await SingleTargetLoc(page,'profile-email','Testid');
await gname.isVisible();
});

test('TestID ProductA test', async ({ page }) => {
await page.goto(url);
const name=await ID0RCLASS(page,'product-card-2','ID')
const ppname=await SingleTargetLoc(name,'product-name','Testid')
await ppname.isVisible();
const pprice=await SingleTargetLoc(name,'product-price','Testid')
await pprice.isVisible();
});

test('ALT ImageVisibility test', async ({ page }) => {
await page.goto(url);
const image = await SingleTargetLoc(page,'logo image','Alt');
await image.isVisible();
});

test('ALT ImageSource test', async ({ page }) => {
await page.goto(url);
const image = await SingleTargetLoc(page,'logo image','Alt');
const src=await image.getAttribute('src');
console.log(src);
});

test('ALT ImageSize test', async ({ page }) => {
await page.goto(url);
const image = await SingleTargetLoc(page,'logo image','Alt');
const box = await image.boundingBox();
console.log(box?.width, box?.height);
});

test('ALT ImageNotBroken test', async ({ page }) => {
await page.goto(url);
const image = await SingleTargetLoc(page,'logo image','Alt');
const src=await image.getAttribute('src');
const response=await page.request.get(src!)
expect(response.status()).toBe(200);
});

test('ALT ImageHover test', async ({ page }) => {
await page.goto(url);
const image = await SingleTargetLoc(page,'logo image','Alt');
await image.hover();
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




