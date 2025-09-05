const { test, expect } = require('@playwright/test')

test('Launch application', async ({ page }) => {
    await page.goto('https://training.rcvacademy.com/');

    const listsection = page.locator("(//div[@class='dynamic-text'])[1]");
    await expect(listsection.getByRole('listItem')).toHaveCount(4); //Count list items in the list section

    for (const row of await listsection.getByRole('listitem').all()) //Print the list items in the list section
    console.log(await row.textContent());

})                                                                        

