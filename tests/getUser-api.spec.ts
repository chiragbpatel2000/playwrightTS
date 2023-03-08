import { expect, test } from "@playwright/test";

test.describe.parallel('get user validation api response',()=>{
    
    const baseUrl ='https://reqres.in/api';
    test('simple api test -assert api response',async({request})=>{

      const response =  await request.get(`${baseUrl}/users/2`);
      expect(response.status()).toBe(200);
      expect(response.status()).not.toBe(404);
      expect(response.json).not.toBeNull();

      const responseBody = JSON.parse(await response.text());
      console.log(responseBody);
      expect(responseBody.data.id).toBe(2);
      expect(responseBody.data.last_name).toBe('Weaver');
    })

});