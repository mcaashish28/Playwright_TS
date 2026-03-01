import { Page,BrowserContext } from "@playwright/test";
import { BasePage } from "./BasePage";



export class PlaywrightPracticePage extends BasePage{
    constructor( page:Page, context:BrowserContext){
        super(page,context);
    }

    async BrokenError(locclass:string,text:string){
       const btn= await this.getConstantCard(locclass,'link',text,);
       await this.ClickandHandleNewPage(btn);
    }
}
