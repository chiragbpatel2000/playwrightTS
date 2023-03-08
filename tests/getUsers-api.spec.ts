import { expect, test } from '@playwright/test';

test.describe('get users validation api response',()=>{
    const baseUrl ='https://reqres.in/api';
    test('Tc1 - api get users validate response', async({request})=>{

        const response =  await request.get(`${baseUrl}/users?page=2`);
        expect(response.status()).toBe(200);
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(responseBody.data.email).not.toBeNull();

    })

})
