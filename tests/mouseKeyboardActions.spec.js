const {test, expect} = require('@playwright/test') 

test('Mouse hover', async({page}) =>                               
{                                                                         
    await page.goto('https://www.flipkart.com/');  

    await page.locator("//span[contains(text(),'Login')]").hover();
    await page.waitForTimeout(4000);
})  

test('Drag and drop', async({page}) =>                               
{                                                                         
    await page.goto('https://jqueryui.com/droppable/'); 

    const pageIframe = await page.frameLocator("//*[@id='content']/iframe");
    const toDrag = await pageIframe.locator("//*[@id='draggable']");
    const toDrop = await pageIframe.locator("//*[@id='droppable']");
    await toDrag.dragTo(toDrop);
}) 

test.only('Slider', async({page}) =>                               
{                                                                         
   await page.goto('https://www.flipkart.com/');   

    await page.locator("//body/div[@id='container']/div/div[@class='q8WwEU']/div[@class='_3zsGrb']/div[@class='_2-LWwB']/div/div[@class='css-175oi2r']/div[@class='css-175oi2r']/div[@class='css-175oi2r']/div[@class='css-175oi2r r-13awgt0 r-1iqfa7g r-60vfwk']/div[@class='css-175oi2r r-13awgt0 r-1iqfa7g r-60vfwk']/div[@class='_1ui5b4']/div[@class='yAlKeh']/div[@class='_2L0uxW']/div[@class='_3116_u']/div[@class='_1yQHx8 _2UnIQ_ _3ak8Rd _1kAmyc']/div/div[@class='css-175oi2r r-13awgt0 r-eqz5dr']/div/div/div/div[@class='_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0']/div/div[@class='css-175oi2r']/div[@class='_3MlEpv']/div[@class='tLbyDf']/div[1]").click();
    await page.waitForTimeout(4000);
    const sl = page.locator("//div[@class='iToJ4v Kaqq1s']//div[@class='PYKUdo']");
    const box = await sl.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(3000);
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.move(box.x + 40, box.y + box.height / 2);
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(3000);
}) 

test('Right click and double click', async({page}) =>                               
{                                                                         
    await page.goto('https://textbox.johnjago.com/');  

    await page.locator("//textarea").pressSequentially("RCV Academy",{delay:1000});
    await page.waitForTimeout(2000);
    await page.locator("//textarea").dblclick();
    await page.waitForTimeout(2000);
    await page.mouse.click(100,100,{button:"right"});
    await page.waitForTimeout(2000);
}) 

test('Keyboard actions', async({page}) =>                               
{                                                                         
    await page.goto('https://textbox.johnjago.com/');  

//    await page.locator("//textarea").pressSequentially("RCV Academy",{delay:500});
//    await page.locator("//textarea").press("Control+A");
//    await page.locator("//textarea").press("Backspace");

    await page.keyboard.type("Hello World",{delay:200});

    await page.keyboard.down('Shift');
    for(let i=0;i<'World'.length;i++)
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Shift');
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(2000);
}) 
