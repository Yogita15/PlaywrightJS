const { test, expect } = require('@playwright/test')

test('Launch application', async ({ page }) => {
    await page.goto('https://training.rcvacademy.com/');
    const listsection = page.locator("xpath=(//div[@class='dynamic-text'])[1]");
    await expect(listsection.getByRole('listItem')).toHaveCount(4);
})                                                                        

