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

async function  DoubleTargetLoc(page:Page|Locator,role: 'button' | 'link' | 'textbox'|'heading'|'checkbox', 
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
await expect(age).toHaveValue('40');
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

test('Role ToggleButton test', async ({ page }) => {
await page.goto(url);
const button1=await DoubleTargetLoc(page,'button','Toggle Button');
await button1.isVisible();
await button1.click();
});

test('Role PrimaryActionButton test', async ({ page }) => {
await page.goto(url);
const button=await DoubleTargetLoc(page,'button','Primary Action');
await button.isVisible();
await button.click();
});

test("Role Navigation test", async ({ page }) => {
await page.goto(url);
const button2=await DoubleTargetLoc(page,'heading','Navigation');
await expect(button2).toBeVisible();
});

test("Role UsernameFilling Test ", async ({ page }) => {
await page.goto(url);
const button2=await DoubleTargetLoc(page,'textbox','Username:');
await inputvalues(button2,'Akarshit');
await expect(button2).toBeVisible();
});

test('Text Important test', async ({ page }) => { 
await page.goto(url);
const word=await SingleTargetLoc(page,'important','Text');
await word.isVisible();
});  

test('Text Button test', async ({ page }) => {
await page.goto(url);
const button=await SingleTargetLoc(page,'Submit Form','Text');
await button.isVisible();
await button.click();
});

test('Title HTML test', async ({ page }) => {
await page.goto(url);
const mark=await SingleTargetLoc(page,'HyperText Markup Language','Title');
await mark.isVisible();
console.log(await mark.innerText());
});

test('Title 3 test', async ({ page }) => {
await page.goto(url);
const mark=await SingleTargetLoc(page,'Tooltip text','Title');
await mark.isVisible();
console.log(await mark.innerText());
});

test('Title Button test', async ({ page }) => {
await page.goto(url);
const mark=await SingleTargetLoc(page,'Click to save your changes','Title');
await mark.isVisible();
console.log(await mark.innerText());
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