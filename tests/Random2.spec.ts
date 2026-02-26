import{test,expect,Page} from '@playwright/test';

const url='https://www.pavanonlinetrainings.com/p/udemy-courses.html';


async function nameTesting(page:Page, loc:string,num:number,tag:string ,i:number,howmany:number,cla:string,testing:string) {
    let prefix='';
     if(cla=='class'){
    prefix='.';
   }else{
    prefix='#';
   }

   if(i>0){ i=i-1; }

   if(testing == 'Courses') {
    for(i = i;  i < howmany;  i++)  {
        
      const imgurl= page.locator(`${prefix}${loc}`).nth(num).locator(tag);
      await imgurl.isVisible();
      console.log(await imgurl.allInnerTexts());
      await LinkTesting(page,'course',0,'View Course');
      await Imagetesting(page,'course img',0,'src','class')
      num++;

        }
    }else{
    const imgurl= page.locator(`${prefix}${loc}`).nth(num).locator(tag);
    await imgurl.isVisible();
    console.log(await imgurl.allInnerTexts());
    }
}
     



async function LinkTesting(page:Page, loc:string,num:number,text:string,){
  
    const btn=page.locator(`.${loc}`).nth(num);

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        await btn.getByText(text).click()
    ]);
        console.log(newPage.url()); 
        newPage.close();
}

async function Imagetesting(page:Page, loc:string,num:number,tag:string ,cla:string){
    let prefix='';
     if(cla=='class'){
    prefix='.';
   }else{
    prefix='#';
   }

        
      const imagelink= page.locator(`${prefix}${loc}`).nth(num);
      await imagelink.isVisible();
      console.log(await imagelink.getAttribute(tag));
      await imagelink.click();
      await expect(page).toHaveURL('https://www.pavanonlinetrainings.com/p/udemy-courses.html');
      num++;
        }



test('Courses', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',0,'h2',1,20,'class','Courses');
   

});


test('Heading Test', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'description',0,'span',1,1,'class','NM');


});

test('Scrolling Heading Test', async ({page}) => {
    await page.goto(url);
     await nameTesting(page,'HTML3',0,'b',1,1,'id','Heading');

   });