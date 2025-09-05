const { test, expect } = require('@playwright/test')

//Browser context is used because browser should have knowledge of all pages that have to be opened
test('Handle multiple windows or tabs', async ({ browser }) => {
  
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://training.rcvacademy.com/');

//Clicking on the image opens a new page which needs to be stored in a variable 
//Promise.all takes an array of promises and waits for all of them to complete. It then returns an array of their resolved values, in the same order as the input.   
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('(//img)[3]').click()
        ])
    
    await newPage.locator("//button[@aria-label='Install']").click();
    await page.waitForTimeout(2000);
    await newPage.locator("(//button[contains(text(),'Cancel')])[2]").click();
    await page.waitForTimeout(2000);
    await newPage.close();    

    await page.locator("(//*[@id='name'])[1]").fill("RCV Academy and testing");
    await page.waitForTimeout(2000);
    await page.close();
})      

 

