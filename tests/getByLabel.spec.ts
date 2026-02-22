import{test,expect} from '@playwright/test';
const url='https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

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