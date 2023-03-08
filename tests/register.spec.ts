import { expect, test } from '@playwright/test';

test('validate register functionality',async({page})=>{

    await page.goto('https://automationteststore.com/');
    await expect(page).toHaveTitle('A place to practice your automation skills!');

    await expect(page.getByText('Login or register')).toHaveText('Login or register');
    await page.getByText('Login or register').click();
    await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/login');
    await expect(page).toHaveTitle('Account Login');
 //   const newCustomerTextElement=await page.locator('text=I am a new customer.');
 //   await expect(newCustomerTextElement).toContainText('I am a new customer.')
    await expect(page.locator('text=I am a new customer.')).toContainText('I am a new customer.')
    await page.locator('.fa.fa-check.fa').click();
    await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/create')
    await page.locator('#AccountFrm_firstname').fill('masoom');
    await page.locator('#AccountFrm_lastname').fill('sam');
    await page.locator('#AccountFrm_email').fill('sammasoom45@gmail.com');
    await page.locator('#AccountFrm_telephone').fill('01234567890');
    await page.locator('#AccountFrm_fax').fill('0123456789');
    await page.locator('#AccountFrm_company').fill('abc');
    await page.locator('#AccountFrm_address_1').fill('91A, Kenton Road');
    await page.locator('#AccountFrm_address_2').fill('Harrow');
    await page.locator('#AccountFrm_city').fill('Harrow');
    await page.locator('#AccountFrm_zone_id').click();
    await page.locator('#AccountFrm_postcode').fill('HA30AN');
    await page.locator('#AccountFrm_country_id').click();
    await page.locator('#AccountFrm_loginname').fill('masoom21');
    await page.locator('#AccountFrm_password').fill('masoom21');
    await page.locator('#AccountFrm_confirm').fill('masoom21');
    await page.locator('#AccountFrm_newsletter0').click();
    await page.locator('#AccountFrm_agree').click();
    await page.locator('text=Continue').click({timeout:10000});

})