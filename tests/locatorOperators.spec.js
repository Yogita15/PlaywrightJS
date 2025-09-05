const { test, expect } = require('@playwright/test')

test('Launch application', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox').and(page.getByPlaceholder('Username')).fill('standard_user');
    await page.getByRole('textbox').and(page.getByPlaceholder('Password')).fill('secret_sauce');
    await page.getByRole('button').click();
})                                                                        
