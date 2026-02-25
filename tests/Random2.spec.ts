import{test,expect,Page} from '@playwright/test';
import { time } from 'console';
import { setTimeout } from 'timers/promises';
const url='https://www.pavanonlinetrainings.com/p/udemy-courses.html';


async function nameTesting(page:Page, loc:string,num:number,tag:string  ) {
      const imgurl= page.locator(`.${loc}`).nth(num);
      console.log(await imgurl.locator(tag).allInnerTexts());
   
     
}

test('Course0', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',0,'h2');
   

});

test('Course1', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',1,'h2');
   

});

test('Course2', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',2,'h2');
   

});

test('Course3', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',3,'h2');
   

});

test('Course4', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',4,'h2');
   

});

test('Course5', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',5,'h2');
   

});

test('Course6', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',6,'h2');
   

});


test('Course7', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',8,'h2');
   

});


test('Course9', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',9,'h2');
   

});


test('Course10', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',10,'h2');
   

});


test('Course11', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',11,'h2');
   

});


test('Course12', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',12,'h2');
   

});


test('Course13', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',13,'h2');
   

});


test('Course14', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',14,'h2');
   

});


test('Course15', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',15,'h2');
   

});


test('Course16', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',16,'h2');
   

});


test('Course17', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',17,'h2');
   

});


test('Course18', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',18,'h2');
   

});


test('Course19', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',19,'h2');
   

});


test('Course20', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',20,'h2');
   

});


test('Course21', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',21,'h2');
   

});



test('Heading Test', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'description',0,'span');
});

test('Scrolling Heading Test', async ({page}) => {
    await page.goto(url);
    // const text= page.locator('.widget-content');
    // console.log(await text.locator('b').allInnerTexts());
     await nameTesting(page,'widget-content',0,'b');
});