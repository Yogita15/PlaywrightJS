const {test, expect} = require('@playwright/test') //Imports the test and expect functions from the Playwright Test library

test('Launch application', async({page}) =>                               //page tells the program to return a page object so that you can use it in your test function
{                                                                         //test function body starts here
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');  //async tells the program that the function is asynchronous(the execution is not sequential) & await asks the program to wait until the promise(object returned after using goto, toHaveClick) is fulfilled, before executing the next step
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking'); 
})                                                                        //test function body ends here
