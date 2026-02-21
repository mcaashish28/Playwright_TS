import{test,expect} from '@playwright/test';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

test('Inputing Values test', async ({ page }) => {

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