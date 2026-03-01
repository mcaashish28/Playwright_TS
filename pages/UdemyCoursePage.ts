import { Page,BrowserContext,expect, Locator } from "@playwright/test";

export class UdemyCoursePage{
    constructor(private page:Page,private context:BrowserContext){}

async clickButton(role:string,name:string){
this.page.getByRole(role as any,{name});
}


async getConstantCard(courseName:string,want:string):Promise<Locator>{
const card = this.page.locator('.course').filter({
has: this.page.getByRole('heading', { name: courseName })
});
return card.locator(want)
}




async CourseImageLoadStatus(card:Locator){
const src=await card.getAttribute('src');
const response=await this.page.request.get(src!)
expect(response.status()).toBe(200);
}




async ClickandHandleNewTab(btn:Locator){
const[newPage]=await Promise.all([
this.context.waitForEvent('page'),
await btn.click()
]);
await newPage.waitForLoadState();
await newPage.waitForTimeout(600);
await newPage.close();
}




async FullCourseCheck(course:string){
const btn1=await this.getConstantCard(course,'a');
const img=await this.getConstantCard(course,'img');

await this.ClickandHandleNewTab(btn1);
await this.CourseImageLoadStatus(img);
}



}