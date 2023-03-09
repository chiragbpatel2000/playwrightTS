import { test, expect } from '@playwright/test';

test.describe('post user api testing',()=>{

    test('post api tests response',async({request})=>{

        const baseUrl ='https://reqres.in/api/users';
        const response =await request.post('c',{data:{ id:4567}})
        const responseBody =JSON.parse(await response.text());
        console.log(responseBody) ; 
        expect(responseBody.id).toBe(4567);
        expect(responseBody.createdAt).toBeTruthy();
    
    });

    test('Post request login',async({request})=>{

        const response = await request.post('https://reqres.in/api/login',{
            
        data :
        {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        });
        const responseBody =JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
        expect(responseBody.token).toBeTruthy();
    });

     test.only('login unsuccessful api response',async({request})=>{


        const response = await request.post('https://reqres.in/api/login',{data:
            {
            
                "email": "peter@klaven"
            
        }});
        expect(response.status()).toBe(400);
        console.log(response)
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(responseBody.error).toBe('Missing password')
        

     })


   

    })



