import { Page,BrowserContext, Locator } from "playwright";
import { APIResponse, expect } from "playwright/test";

export class BasePage {
     constructor(protected page:Page,protected context:BrowserContext){}


async clickButton(role:string,name:string){
  this.page.getByRole(role as any,{name});
}

async getConstantCard(locclass:string,type:string,coursename:string):Promise<Locator>{
const card = this.page.locator(`${locclass}`).filter({
has: this.page.getByRole(type as any, { name: coursename })
});
return card;
}
async TakeConstantcard(btn:Locator,want:string):Promise<Locator>{
return btn.locator(want);
}

async ClickandHandleNewTab(btn:Locator){
const[newPage]=await Promise.all([
 this.context.waitForEvent('page'),
 btn.click()
]);
await newPage.waitForLoadState();
await newPage.waitForTimeout(600);
await newPage.close();
}


async ClickandHandleNewPage(btn:Locator){
    await btn.click();
    await this.page.context().newPage();
    await this.page.waitForTimeout(600);
    await this.page.goBack();
}

async CourseImageLoadStatus(card:Locator):Promise<APIResponse>{
const src=await card.getAttribute('src');
const response=await this.page.request.get(src!)
expect(response.status()).toBe(200);
return response;
}

async ImageFileSizeTest(response: APIResponse){
  const buffer = await  response.body();
  const sizeInKB = buffer.length / 1024;
  expect(sizeInKB).toBeLessThan(500);
}


async ImagePixelTest(img:Locator) {
await expect(img).toHaveScreenshot();
}



}