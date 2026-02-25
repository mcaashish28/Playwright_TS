import{test,expect,Page} from '@playwright/test';

const url='https://www.pavanonlinetrainings.com/p/udemy-courses.html';

// Function for Text Verifying Is it present
async function nameTesting(page:Page, loc:string,num:number,tag:string  ) {
      const imgurl= page.locator(`.${loc}`).nth(num);
      console.log(await imgurl.locator(tag).allInnerTexts());
   
     
}

// Function for getting button click and redirected to another site / Link testing 
async function LinkTesting(page:Page, loc:string,num:number,text:string){
    const btn=page.locator(`.${loc}`).nth(num);
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        await btn.getByText(text).click()
    ]);
    console.log(newPage.url());
    // await btn.getByText(text).click(); 
        
}

test('Course0', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',0,'h2');
    await LinkTesting(page,'course',0,'View Course');
   

});

test('Course1', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',1,'h2');
    await LinkTesting(page,'course',1,'View Course');
   

});

test('Course2', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',2,'h2');
    await LinkTesting(page,'course',2,'View Course');


});

test('Course3', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',3,'h2');
    await LinkTesting(page,'course',3,'View Course');

});

test('Course4', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',4,'h2');
    await LinkTesting(page,'course',4,'View Course');

});

test('Course5', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',5,'h2');
    await LinkTesting(page,'course',5,'View Course');

});

test('Course6', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',6,'h2');
    await LinkTesting(page,'course',6,'View Course');

});


test('Course7', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',7,'h2');
    await LinkTesting(page,'course',7,'View Course');

});


test('Course8', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',8,'h2');
    await LinkTesting(page,'course',8,'View Course');

});


test('Course9', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',9,'h2');
    await LinkTesting(page,'course',9,'View Course');

});


test('Course10', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',10,'h2');
    await LinkTesting(page,'course',10,'View Course');

});


test('Course11', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',11,'h2');
    await LinkTesting(page,'course',11,'View Course');

});


test('Course12', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',12,'h2');
    await LinkTesting(page,'course',12,'View Course');

});


test('Course13', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',13,'h2');
    await LinkTesting(page,'course',13,'View Course');

});


test('Course14', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',14,'h2');
    await LinkTesting(page,'course',14,'View Course');

});


test('Course15', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',15,'h2');
    await LinkTesting(page,'course',15,'View Course');

});


test('Course16', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',16,'h2');
    await LinkTesting(page,'course',16,'View Course');
   

});


test('Course17', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',17,'h2');
    await LinkTesting(page,'course',17,'View Course');

});


test('Course18', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',18,'h2');
    await LinkTesting(page,'course',18,'View Course');

});


test('Course19', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',19,'h2');
    await LinkTesting(page,'course',19,'View Course');
   

});


test('Course20', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',20,'h2');
    await LinkTesting(page,'course',20,'View Course');
   

});


test('Course21', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',21,'h2');
    await LinkTesting(page,'course',21,'View Course');
   

});



test('Heading Test', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'description',0,'span');


});


test('Scrolling Heading Test', async ({page}) => {
    await page.goto(url);
     await nameTesting(page,'widget-content',0,'b');

     
});