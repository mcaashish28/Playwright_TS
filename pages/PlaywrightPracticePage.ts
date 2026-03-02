import { Page,BrowserContext, expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";



export class PlaywrightPracticePage extends BasePage{
    constructor( page:Page, context:BrowserContext){
        super(page,context);
    }

    async BrokenError(locclass:string,text:string){
       const btn2= await this.getConstantCard(locclass,'link',text);
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

    async AltImageIsVisible(text:string): Promise<void>{
        const img=await this.ALTclick(text);
        await img.isVisible();
    }

    async AltImageLoadStatus(text:string){
        const img=await this.ALTclick(text);
        await this.CourseImageLoadStatus(img);
    }

    async AltImagePixelTest(text:string){
        const img=await this.ALTclick(text);
        await this.ImagePixelTest(img);
    }

     async AltImageSizeStatus(text:string){
        const img=await this.ALTclick(text);
        const res=await this.CourseImageLoadStatus(img);
        await this.ImageFileSizeTest(res);
    }

    async RoleToogleButton(text:string){
        const btn=await this.Roleclick('button',text);
        await this.ClickingMethod(btn);
    }

    async RoleCheckingButton(text:string){
        const btn=await this.Roleclick('checkbox',text);
        await this.CheckingMethod(btn);
    }

    async RoleFillingValues(text:string,value:string){
        const wait=await this.Roleclick('textbox',text);
        await this.InputValue(wait,value);
    }

    async TextVisibilityTest(text:string){
        const loc=await this.Textclick(text);
    }

    async TextButton(text:string){
    const btn=await this.Textclick(text);
    await this.ClickingMethod(btn);
    }

    async TitleVisible(text:string){
        const btn=await this.TITLEclick(text);
        await btn.isVisible();
        }

    async TitleButtonClick(text:string){
        const btn=await this.TITLEclick(text);
        await this.ClickingMethod(btn);
    }

    async TitleWorkingButtonClick(text:string){
        const btn=await this.TITLEclick(text);
        await this.ClickingMethod(btn);
    }

    async DragANDDrop(text:string,text2:string){
        const source=await this.LocatorClick(text);
        const target=await this.LocatorClick(text2);
        await source.dragTo(target);
    }

    async MOUSEHOVER(text1:string,text2:string){
    const h=await this.Textclick(text1);
    await this.page.waitForTimeout(300);
    const btn=await this.Roleclick('link',text2);
    }
}
