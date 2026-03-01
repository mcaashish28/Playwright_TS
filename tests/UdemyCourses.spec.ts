import{test,expect,Page, Browser, BrowserContext} from '@playwright/test';
import { UdemyCoursePage } from '../pages/UdemyCoursePage';
import { webkit,chromium,firefox } from '@playwright/test';
const url='https://www.pavanonlinetrainings.com/p/udemy-courses.html';

let Course:UdemyCoursePage;

test.beforeEach(async ({ page }) => {
  let context = page.context();
  Course = new UdemyCoursePage(page, context);
  await page.goto(url);
});


test('Course1', async ({page}) => {
    await Course.FullCourseCheck('🎭 Playwright with TypeScript');
});

test('Course2', async ({page}) => {
    await Course.FullCourseCheck('🎭 Playwright with Python');
});

test('Course3', async ({page}) => {
    await Course.FullCourseCheck('🎭 Playwright with JavaScript');
});

test('Course4', async ({page}) => {
    await Course.FullCourseCheck('🤖 Generative AI for Software Testing');
});

test('Course5', async ({page}) => {
    await Course.FullCourseCheck('🔍 Manual Testing + Agile with Jira');
});

test('Course6', async ({page}) => {
    await Course.FullCourseCheck('🧪 Selenium with Java, Cucumber & Frameworks');
});

test('Course7', async ({page}) => {
    await Course.FullCourseCheck('🔗 API Testing: Postman + RestAssured + SoapUI');
});

test('Course8', async ({page}) => {
    await Course.FullCourseCheck('🧪 Selenium with Python & PyTest');
});

test('Course9', async ({page}) => {
    await Course.FullCourseCheck('🌐 Web & API Automation using Cypress');
});

test('Course10', async ({page}) => {
    await Course.FullCourseCheck('☕ Java Programming (Beginner to Pro)');
});

test('Course11', async ({page}) => {
    await Course.FullCourseCheck('🐍 Python Programming (Basics to Advanced)');
});

test('Course12', async ({page}) => {
    await Course.FullCourseCheck('🤖 Selenium with Python using Robot Framework');
});

test('Course13', async ({page}) => {
    await Course.FullCourseCheck('🤖 Rest API Testing with Robot Framework');
});

test('Course14', async ({page}) => {
    await Course.FullCourseCheck('🐍 API Testing with Postman & Python');
});

test('Course15', async ({page}) => {
    await Course.FullCourseCheck('📊 JMeter – Performance & API Testing');
});

test('Course16', async ({page}) => {
    await Course.FullCourseCheck('🧩 SDET Essentials (Full Stack QA)');
});

test('Course17', async ({page}) => {
    await Course.FullCourseCheck('📱 Appium – Mobile Automation Testing');
});

test('Course18', async ({page}) => {
    await Course.FullCourseCheck('🧺 Java Collections Deep Dive');
});

test('Course19', async ({page}) => {
    await Course.FullCourseCheck('🌱 Cucumber BDD Framework');
});

test('Course20', async ({page}) => {
    await Course.FullCourseCheck('🧭 Protractor with JavaScript');
});

test('Course21', async ({page}) => {
    await Course.FullCourseCheck('☕ TestNG Framework');
});

test('Heading Test', async ({page}) => {
    await page.goto(url);

});

test('Scrolling Heading Test', async ({page}) => {
    await page.goto(url);

});
