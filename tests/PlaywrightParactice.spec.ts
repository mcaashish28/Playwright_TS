import{test,expect,Page, Locator} from '@playwright/test';
import { PlaywrightPracticePage } from '../pages/PlaywrightPracticePage';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html#';

let practice:PlaywrightPracticePage;

test.beforeEach(async ({ page }) => {
  let context = page.context();
  practice = new PlaywrightPracticePage(page, context);
  await page.goto(url);
});


test('Errorcode 400',async ({page}) => { 
await practice.BrokenError('#broken-links','Errorcode 400');
});

test('Errorcode 401',async ({page}) => { 
await practice.BrokenError('#broken-links','Errorcode 401');
});

test('Errorcode 403',async ({page}) => { 
await practice.BrokenError('#broken-links','Errorcode 403');
});

test('Errorcode 404',async ({page}) => { 
await practice.BrokenError('#broken-links','Errorcode 404');
});

test('Errorcode 408',async ({page}) => { 
await practice.BrokenError('#broken-links','Errorcode 408');
});

test('Errorcode 500',async ({page}) => { 
await practice.BrokenError('#broken-links','Errorcode 500');
});

test('Errorcode 502',async ({page}) => { 
await practice.BrokenError('#broken-links','Errorcode 502');
});

test('Errorcode 503',async ({page}) => { 
await practice.BrokenError('#broken-links','Errorcode 503');
});

test('AppleLink Test',async ({page}) => { 
await practice.LaptopLinks('#laptops','Apple');
});

test('LenovoLink Test',async ({page}) => { 
await practice.BrokenError('#laptops','Lenovo');
});

test('DellLink Test',async ({page}) => { 
await practice.BrokenError('#laptops','Dell');
});

test('Footer HomeLink  Test',async ({page}) => { 
await practice.BrokenError('#PageList1','Home');
});

test('Footer 2 Link Test',async ({page}) => { 
await practice.BrokenError('#PageList1','Hidden Elements & AJAX');
});

test('Footer 3 Link Test',async ({page}) => { 
await practice.BrokenError('#PageList1','Download Files');
});

test('MerryMoon Link Test',async ({page}) => { 
await practice.BrokenError('#Attribution1','merrymoonmary')
});

test('Blogger Link Test',async ({page}) => { 
await practice.BrokenError('#Attribution1','Blogger');
});

test('TopBlog Link Test',async ({page}) => { 
await practice.BrokenError('#PageList2','Blog');
});

test('YouTube Link Test',async ({page}) => { 
await practice.BrokenError('#footer-2-2','Youtube');
});

test('CommentsAtom Link Test',async ({page}) => { 
await practice.BrokenError('.feed-links','Comments (Atom)');
});

test('HomeLast Link Test',async ({page}) => { 
await practice.BrokenError('#blog-pager','Home');
});

test('Automation Practice head Linktest Link Test',async ({page}) => { 
await practice.BrokenError('#header-inner','Automation Testing Practice');
});

test('Udemy Course Link Test',async ({page}) => { 
await practice.BrokenError('#PageList2','Udemy Courses');
});

test('Online Training Link Test',async ({page}) => { 
await practice.BrokenError('#PageList2','Online Trainings');
});

test('SimpleAlert Test',async ({page}) => { 
await practice.PopupChecker('Simple Alert');
});

test('Confirmational alert Test',async ({page}) => { 
await practice.PopupChecker('Confirmation Alert');
});

test('Negative Prompt alert Test',async ({page}) => { 
await practice.PopupChecker('Prompt Alert');
});

test('Window popup alert Test',async ({page}) => { 
await practice.NewWindow('New Tab');
});

test('Popup Windows Test',async ({page}) => { 
await practice.NewWindow('Popup Windows');
});

test('Label Inputing Gmail test', async ({ page }) => {
await practice.labelInputtingTest('Email Address:','akarshitmahajan1094')
});

test('Label Inputing Password test', async ({ page }) => {
await practice.labelInputtingTest(' Password: ','1234578')
});

test('Label Express Shipping CheckMethod Test', async ({ page }) => {
await practice.CheckingShippingMethod( ' Express');
});

test('Label Standard Shipping CheckMethod Test', async ({ page }) => {
await practice.CheckingShippingMethod( ' Standard');
});

test('Label Inputing Age test', async ({ page }) => {
await practice.labelInputtingTest('Your Age:','1234')
});

test('Place Inputing Name test', async ({ page }) => {
await practice.PlaceInputtingTest('Enter your full name','Akarshit')
});

test('Place Inputing PhoneNumber test', async ({ page }) => {
await practice.PlaceInputtingTest('Phone number (xxx-xxx-xxxx)','6280327973')
});

test('Place Inputing Message test', async ({ page }) => {
await practice.PlaceInputtingTest('Type your message here...','I Am Good Coder,Agreed?')
});

test('Place Search test', async ({ page }) => {
await practice.PlaceInputtingTest('Search products...','Laptop')
});

test('Place Button test', async ({ page }) => {
await practice.PlaceButttonTest('Search');
});

test('TestID Button test', async ({ page }) => {
await practice.Test_IDVisiblityTest('edit-profile-btn')
});

test('TestID Name test', async ({ page }) => {
await practice.Test_IDVisiblityTest('profile-name')
});

test('TestID Gamil test', async ({ page }) => {
await practice.Test_IDVisiblityTest('profile-email')
});

test('TestID ProductA test', async ({ page }) => {
  await practice.Test_IdLocatorVisibleTest('product-name','product-price')
});

// test('ALT ImageVisibility test', async ({ page }) => {
// await page.goto(url);
// const image = await SingleTargetLoc(page,'logo image','Alt');
// await image.isVisible();
// });

// test('ALT ImageSource test', async ({ page }) => {
// await page.goto(url);
// const image = await SingleTargetLoc(page,'logo image','Alt');
// const src=await image.getAttribute('src');
// console.log(src);
// });

// test('ALT ImageSize test', async ({ page }) => {
// await page.goto(url);
// const image = await SingleTargetLoc(page,'logo image','Alt');
// const box = await image.boundingBox();
// console.log(box?.width, box?.height);
// });

// test('ALT ImageNotBroken test', async ({ page }) => {
// await page.goto(url);
// const image = await SingleTargetLoc(page,'logo image','Alt');
// const src=await image.getAttribute('src');
// const response=await page.request.get(src!)
// expect(response.status()).toBe(200);
// });

// test('ALT ImageHover test', async ({ page }) => {
// await page.goto(url);
// const image = await SingleTargetLoc(page,'logo image','Alt');
// await image.hover();
// });

// test('Role ToggleButton test', async ({ page }) => {
// await page.goto(url);
// const button1=await DoubleTargetLoc(page,'button','Toggle Button');
// await button1.isVisible();
// await button1.click();
// });

// test('Role PrimaryActionButton test', async ({ page }) => {
// await page.goto(url);
// const button=await DoubleTargetLoc(page,'button','Primary Action');
// await button.isVisible();
// await button.click();
// });

// test("Role Navigation test", async ({ page }) => {
// await page.goto(url);
// const button2=await DoubleTargetLoc(page,'heading','Navigation');
// await expect(button2).toBeVisible();
// });

// test("Role UsernameFilling Test ", async ({ page }) => {
// await page.goto(url);
// const button2=await DoubleTargetLoc(page,'textbox','Username:');
// await inputvalues(button2,'Akarshit');
// await expect(button2).toBeVisible();
// });

// test('Text Important test', async ({ page }) => { 
// await page.goto(url);
// const word=await SingleTargetLoc(page,'important','Text');
// await word.isVisible();
// });  

// test('Text Button test', async ({ page }) => {
// await page.goto(url);
// const button=await SingleTargetLoc(page,'Submit Form','Text');
// await button.isVisible();
// await button.click();
// });

// test('Title HTML test', async ({ page }) => {
// await page.goto(url);
// const mark=await SingleTargetLoc(page,'HyperText Markup Language','Title');
// await mark.isVisible();
// console.log(await mark.innerText());
// });

// test('Title 3 test', async ({ page }) => {
// await page.goto(url);
// const mark=await SingleTargetLoc(page,'Tooltip text','Title');
// await mark.isVisible();
// console.log(await mark.innerText());
// });

// test('Title Button test', async ({ page }) => {
// await page.goto(url);
// const mark=await SingleTargetLoc(page,'Click to save your changes','Title');
// await mark.isVisible();
// console.log(await mark.innerText());
// });

// //  Drag and Drop Test----------------------------------------------------------------

// test('Drag and Drop Test', async ({page}) => {
//     await page.goto(url);
//     // css using 
//     const source=page.locator('#draggable');
//     const target=page.locator('#droppable');
//     await source.dragTo(target);
//     await page.waitForTimeout(4000);
// });


// // Mouse Hover Test----------------------------------------------------------------

// test('Mouse Hover Test', async ({page}) => {
//     await page.goto(url);
//     await page.getByText('Point Me').hover();
//     await page.waitForTimeout(4000);
//     await page.getByRole('link', { name: 'Mobiles' }).click();
//     await expect(page).toHaveURL(url);
//     // second laptop test
//     await page.getByText('Point Me').hover();
//     await page.waitForTimeout(4000);
//     await page.getByRole('link', { name: 'Laptops' }).click();
//     await expect(page).toHaveURL(url);
// });

// //  Labels & Links Test----------------------------------------------------------------

// test('Labels & Links Test', async ({page}) => {
//     await page.goto(url);
//     page.getByText('Mobile Labels');
//     await page.getByText('Samsung');
//     await page.getByText('Motorola');
//     await page.getByText('Real me');    
        
// });

// test('Home Link Test2', async ({page}) => {
//     await page.goto(url);
//     await page.locator('a.home-link').click();
//       await page.context().newPage();
//     console.log(page.url());
//     await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

//     const result=await page.locator('h1').textContent();
//     console.log(result);
//     page.close();

        
// });


// // Back to top Test


// test('Back to top test', async ({page}) => {
//     await page.goto(url);
//     await page.getByTitle('Back to top').click();
//     console.log(page.url());
//     await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');

//     const para=page.getByText('This page demonstrates various Playwright locators for testing purposes.',{exact:true});
//     await expect(para).toBeVisible();
//     page.close();

        
// });