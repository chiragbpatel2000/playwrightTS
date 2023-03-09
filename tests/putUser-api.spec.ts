import { request, test, expect } from '@playwright/test';


test.describe('put api response',()=>{

    test('put api tests',async({request})=>{

        const response = await request.put('https://reqres.in/api/users/2',{data:{
            "name": "morpheus",
            "job": "zion resident"
        }});
        console.log(response);
        expect(response.status()).toBe(200);
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.name).not.toBeNull();
        expect(responseBody.name).toBe('morpheus')

    })
    




})