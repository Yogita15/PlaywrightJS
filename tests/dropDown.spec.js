const {test, expect} = require('@playwright/test') 

test('Static dropdown', async({page}) =>                               
{    
    test.slow()                                                                     
    await page.goto('https://www.salesforce.com/au/form/signup/sales-ee/');  
    await page.waitForTimeout(5000);
    await page.locator("//*[@name='CompanyEmployees']").selectOption({label:'6 - 30 employees'});
    await page.waitForTimeout(5000);
})                                                                        

test.only('Dynamic dropdown', async({page}) =>                               
{                                                                         
    await page.goto('https://www.yatra.com/%3Fredirect%3Dno');  
    const departfrom = page.locator("#BE_flight_origin_city");
    await departfrom.clear();
    await departfrom.pressSequentially('New');
    await page.locator('.viewport').getByRole("listitem").filter({hasText:'New York (JFK)'}).click();
})     