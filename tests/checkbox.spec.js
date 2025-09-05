const {test, expect} = require('@playwright/test') 

test('Checkbox', async({page}) =>                               
{                                                                         
    await page.goto('https://login.salesforce.com/');  
    await page.locator('#rememberUn').click();
    expect (page.locator('#rememberUn')).toBeChecked();

})    


