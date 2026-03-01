import { Page,BrowserContext, expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { text } from "node:stream/consumers";



export class PlaywrightPracticePage extends BasePage{
    constructor( page:Page, context:BrowserContext){
        super(page,context);
    }

    async BrokenError(locclass:string,text:string){
       const btn2= await this.getConstantCard(locclass,'link',text);
       await this.ClickandHandleNewPage(btn2);
    }

    async LaptopLinks(locclass:string,text:string){
       const btn2= await this.getConstantCard(locclass,'heading',text);
       await this.ClickandHandleNewPage(btn2);
    }
   
    async PopupChecker(popupname:string){
     await this.PopupAllower(popupname)
    }

    async NewWindow(text:string){
     const btn1=await this.Textclick(text);
     await this.ClickandHandleNewPage(btn1);
     
    }
   
    async labelInputtingTest(loc:string,value:string){
     const btn1= await this.Labelclick(loc);
     await this.InputValue(btn1,value);
     await expect(btn1).toHaveValue(value);
    }

    async CheckingShippingMethod(text:string){
    const btn1=await this.Roleclick('radio',text);
    await this.CheckingMethod(btn1);
    await expect(btn1).toBeChecked();
    }

    async PlaceInputtingTest(loc:string,value:string){
        const btn1=await this.Placeclick(loc);
        await this.InputValue(btn1,value);
        await expect(btn1).toHaveValue(value);
    } 
    
    async PlaceButttonTest(loc:string){
        const btn1=await this.Placeclick(loc);
        await btn1.isVisible();
    }

    async Test_IDVisiblityTest(loc:string){
        const btn1=await this.TestIdclick(loc);
        await btn1.isVisible();
    }

    async Test_IdLocatorVisibleTest(ppname:string,pprice:string){
      const btn1=(await this.TestIdclick(ppname)).nth(0);
      const btn2=(await this.TestIdclick(pprice)).nth(0);
      await btn1.isVisible();
      await btn2.isVisible();
    }
}
