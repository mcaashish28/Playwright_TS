import { promises } from "dns";
import { Page,BrowserContext, Locator } from "playwright";
import { APIResponse, expect } from "playwright/test";

export class BasePage {
     constructor(protected page:Page,protected context:BrowserContext){}




 async CheckingMethod(btn:Locator){
  await btn.isVisible();
  await btn.check();
}

 async InputValue(btn:Locator,text:string){
  await btn.fill(text);
 }

async Roleclick(role:string,name:string):Promise<Locator>{
 return this.page.getByRole(role as any,{name});
}

async Textclick(text:string):Promise<Locator>{
return this.page.getByText(text);
}

async Labelclick(text:string):Promise<Locator>{
return this.page.getByLabel(text);
}

async Placeclick(text:string):Promise<Locator>{
return this.page.getByPlaceholder(text);
}

async TestIdclick(text:string):Promise<Locator>{
  return this.page.getByTestId(text);
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


async ClickandHandleNewTab(btn1:Locator){
const[newPage]=await Promise.all([
 this.context.waitForEvent('page'),
 btn1.click()]);
await newPage.waitForLoadState();
await newPage.waitForTimeout(600);
await newPage.close();
}


async ClickandHandleNewPage(btn2:Locator){
    await btn2.click();
    await this.page.context().newPage();
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(600);
    await this.page.goBack();
}

async CourseImageLoadStatus(card:Locator):Promise<APIResponse>{
const src=await card.getAttribute('src');
const response=await this.page.request.get(src!);
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

async PopupAllower(popupname:string){
this.page.on('dialog', async (popup) => {
console.log(popup.message());
await popup.accept()});
await this.page.getByText(popupname).click();
}

}