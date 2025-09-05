const { test, expect } = require('@playwright/test')

test('Browser fixture demo', async ({ browser }) => {
  
 // Create a new incognito browser context using pre-requisite of dark theme.
    const context = await browser.newContext({baseURL:'https://playwright.dev/', colorScheme:'dark'});

// Create a new page in a pristine context.
    const page = await context.newPage();

    await page.goto('/');
})      

 

