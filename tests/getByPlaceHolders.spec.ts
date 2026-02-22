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