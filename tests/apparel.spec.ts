import { expect, test } from "@playwright/test";


test('validating apparel functionality',async ({page}) => {

    await page.goto('https://automationteststore.com/');
    await page.locator('text=Apparel & accessories').nth(1).click();
    await expect(page).toHaveTitle('Apparel & accessories');
    await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=product/category&path=68');
    await page.locator('text=T-shirts').nth(3).click({timeout:10000});
    // const tshirtElement=page.locator('text=T-shirts').nth(3);
    // await tshirtElement.waitFor({state:"visible"})
    // await tshirtElement.click();
    // const fivetshirtElement=page.locator('.prdocutname').nth(3);
    // await fivetshirtElement.waitFor({state:"visible"})
    // await fivetshirtElement.click();
    await page.locator('.prdocutname').nth(3).click({timeout:10000});
    
    
})