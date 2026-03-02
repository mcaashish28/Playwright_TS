import{test} from '@playwright/test';
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
await practice.BrokenError('#laptops','Apple');
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
await practice.BrokenError('#Attribution1','merrymoonmary');
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
await practice.labelInputtingTest('Email Address:','akarshitmahajan1094');
});

test('Label Inputing Password test', async ({ page }) => {
await practice.labelInputtingTest(' Password: ','1234578');
});

test('Label Express Shipping CheckMethod Test', async ({ page }) => {
await practice.CheckingShippingMethod( ' Express');
});

test('Label Standard Shipping CheckMethod Test', async ({ page }) => {
await practice.CheckingShippingMethod( ' Standard');
});

test('Label Inputing Age test', async ({ page }) => {
await practice.labelInputtingTest('Your Age:','1234');
});

test('Place Inputing Name test', async ({ page }) => {
await practice.PlaceInputtingTest('Enter your full name','Akarshit');
});

test('Place Inputing PhoneNumber test', async ({ page }) => {
await practice.PlaceInputtingTest('Phone number (xxx-xxx-xxxx)','6280327973');
});

test('Place Inputing Message test', async ({ page }) => {
await practice.PlaceInputtingTest('Type your message here...','I Am Good Coder,Agreed?');
});

test('Place Search test', async ({ page }) => {
await practice.PlaceInputtingTest('Search products...','Laptop');
});

test('Place Button test', async ({ page }) => {
await practice.PlaceButttonTest('Search');
});

test('TestID Button test', async ({ page }) => {
await practice.Test_IDVisiblityTest('edit-profile-btn');
});

test('TestID Name test', async ({ page }) => {
await practice.Test_IDVisiblityTest('profile-name');
});

test('TestID Gamil test', async ({ page }) => {
await practice.Test_IDVisiblityTest('profile-email');
});

test('TestID ProductA test', async ({ page }) => {
await practice.Test_IdLocatorVisibleTest('product-name','product-price');
});

test('ALT ImageVisibility test', async ({ page }) => {
  await practice.AltImageIsVisible('logo image');
});

test('ALT ImageSourceLoad test', async ({ page }) => {
await practice.AltImageLoadStatus('logo image');
});

test('ALT ImagePixel test', async ({ page }) => {
await practice.AltImagePixelTest('logo image');
});

test('ALT ImageNotBroken test', async ({ page }) => {
await practice.AltImageSizeStatus('logo image');
});


test('Role ToggleButton test', async ({ page }) => {
await practice.RoleToogleButton('Toggle Button');
});

test('Role PrimaryActionButton test', async ({ page }) => {
await practice.RoleToogleButton('Primary Action');
});

test('Role AcceptTerms test', async ({ page }) => {
await practice.RoleCheckingButton(' Accept terms ');
});


test("Role UsernameFilling Test ", async ({ page }) => {
await practice.RoleFillingValues('Username:','Akarshit');
});


test('Text Important test', async ({ page }) => { 
await practice.TextVisibilityTest('important');
});  

test('Text Button test', async ({ page }) => {
await practice.TextButton('Submit Form')
});


test('Title HTML test', async ({ page }) => {
await practice.TitleVisible('HyperText Markup Language');
});

test('Title 3 test', async ({ page }) => {
await practice.TitleVisible('Tooltip text');
});

test('Title Button test', async ({ page }) => {
await practice.TitleButtonClick('Click to save your changes');
});

test('Title Back to top test', async ({page}) => {
await practice.TitleWorkingButtonClick('Back to top');
});

test('Drag and Drop Test', async ({page}) => {
await practice.DragANDDrop('#draggable','#droppable'); 
});

test('MouseHover Mobile Test', async ({page}) => {
await practice.MOUSEHOVER('Point Me','Mobiles'); 
});

test('MouseHover Laptop Test', async ({page}) => {
await practice.MOUSEHOVER('Point Me','Laptops'); 
});

test('Text Labels test', async ({ page }) => { 
await practice.TextVisibilityTest('Samsung');
}); 
