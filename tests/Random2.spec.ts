import{test,expect,Page} from '@playwright/test';

const url='https://www.pavanonlinetrainings.com/p/udemy-courses.html';

// Function for Text Verifying Is it present
/*
function chnges the prefix by 7 th method class or id
function do iterating and result come

this function takes the parameter locate the text and then print the text on console and befor printing it verifies also
that it is present or not then it takes

*/
async function nameTesting(page:Page, loc:string,num:number,tag:string ,i:number,howmany:number,cla:string) {
    // "for chnging loactors path by class or id"
    let prefix='';
     if(cla=='class'){
    prefix='.';
   }else{
    prefix='#';
   }
//   for iteration we know index starts from 0 but not a random persom
   if(i>0){ i=i-1; }
//    code iterating 
    for(i=i;i<howmany;i++){
        
      const imgurl= page.locator(`${prefix}${loc}`).nth(num).locator(tag);
      await imgurl.isVisible();
      console.log(await imgurl.allInnerTexts());
      num++;
        

    }
}
     


// Function for getting button click and redirected to another site / Link testing 
/*
   this function takes parameter and then by clicking the link it moves to another tab and then it 
   locate the page url and print it and wait there for 5 sec and then page closes  


*/
async function LinkTesting(page:Page, loc:string,num:number,text:string,i:number,howmany:number){
//   for iteration we know index starts from 0 but not a random persom
    if(i>0){ i=i-1; }
//    code iterating 
    for(i=i;i<howmany;i++){
    const btn=page.locator(`.${loc}`).nth(num);
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        await btn.getByText(text).click()
    ]);
        console.log(newPage.url()); 
        await newPage.waitForTimeout(500);
        newPage.close();
}
}



/* nameTesting(page,loc,nthcourse,tag,startingindex,closingindex,{class/id})
   write nth course and if you want specific course test then you have to write starting index=1,closingindex=1,
   if and tell class id also in 7 th parameter .
   
   LinkTesting(page,loc,nthcourse,tag,startingindex,closingindex)
   only starting and closing index change,if you want specific test then you chnge only nthcourse  ,starting index=1,closingindex=1 these remains same.  
*/


test('Courses', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'course',0,'h2',1,1,'class');
    await LinkTesting(page,'course',0,'View Course',1,1);
   

});


test('Heading Test', async ({page}) => {
    await page.goto(url);
    await nameTesting(page,'description',0,'span',1,1,'class');


});

test('Scrolling Heading Test', async ({page}) => {
    await page.goto(url);
     await nameTesting(page,'HTML3',0,'b',1,1,'id');

   
});