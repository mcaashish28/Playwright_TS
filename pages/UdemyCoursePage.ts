import { Page,BrowserContext,expect, Locator, APIResponse } from "@playwright/test";
import { BasePage } from "./BasePage";


export class UdemyCoursePage extends BasePage{
    constructor( page:Page, context:BrowserContext){
        super(page,context);
    }





async FullCourseCheck(course:string){
const loc=await this.getConstantCard('.course','heading',course);
const link=await this.TakeConstantcard(loc,'a');
const img=await this.TakeConstantcard(loc,'img');

await this.ClickandHandleNewTab(link);
const res=await this.CourseImageLoadStatus(img);
await this.ImageFileSizeTest(res);
await this.ImagePixelTest(img);
}



}