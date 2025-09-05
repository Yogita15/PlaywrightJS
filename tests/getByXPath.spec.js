const {test, expect} = require('@playwright/test') 

test('Launch application', async({page}) =>                               
{                                                                         
    await page.goto('https://login.salesforce.com/?locale=au');  
    await page.locator("xpath=//*[@id='username']").fill('ABC');
    await page.locator('css=#password').fill('ABC');
    
})                                                                        
