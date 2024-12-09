import { test } from "@playwright/test";

test.describe('toolshop', () => {

  const { test, expect } = require('@playwright/test');

  test.describe('Reqres API Testing', () => {
    const baseURL = 'https://reqres.in/api';

    test('GET /users?page=1', async ({ request }) => {
      const response = await request.get(`${baseURL}/users?page=1`);
      expect(response.ok()).toBeTruthy();
      const data = await response.json();
      expect(data.page).toBe(2);
      expect(data.data.length).toBeGreaterThan(0);
    });
  
    test('GET /users?page=2', async ({ request }) => {
      const response = await request.get(`${baseURL}/users?page=2`);
      expect(response.ok()).toBeTruthy();
      const data = await response.json();
      expect(data.page).toBe(2);
      expect(data.data.length).toBeGreaterThan(0);
    });
  
    test('POST /users', async ({ request }) => {
      const newUser = { name: 'John Doe', job: 'Software Engineer' };
      const response = await request.post(`${baseURL}/users`, { data: newUser });
      expect(response.status()).toBe(201);
      const user = await response.json();
      expect(user.name).toBe(newUser.name);
      expect(user.job).toBe(newUser.job);
    });
  
    test('PUT /users/2', async ({ request }) => {
      const updatedUser = { name: 'Jane Doe', job: 'Product Manager' };
      const response = await request.put(`${baseURL}/users/2`, { data: updatedUser });
      expect(response.ok()).toBeTruthy();
      const user = await response.json();
      expect(user.name).toBe(updatedUser.name);
      expect(user.job).toBe(updatedUser.job);
    });
  
    test('DELETE /users/2', async ({ request }) => {
      const response = await request.delete(`${baseURL}/users/2`);
      expect(response.status()).toBe(204); // No Content status for DELETE
    });
  
    test('GET /unknown', async ({ request }) => {
      const response = await request.get(`${baseURL}/unknown`);
      expect(response.ok()).toBeTruthy();
      const data = await response.json();
      expect(data.data.length).toBeGreaterThan(0);
    });
  
    test('POST /register - success', async ({ request }) => {
      const registration = { email: "eve.holt@reqres.in", password: "pistol" };
      const response = await request.post(`${baseURL}/register`, { data: registration });
      expect(response.ok()).toBeTruthy();
      const data = await response.json();
      expect(data.id).toBeDefined();
      expect(data.token).toBeDefined();
    });
  
    test('POST /register - fail', async ({ request }) => {
      const registration = { email: "sydney@fife" }; // Missing password
      const response = await request.post(`${baseURL}/register`, { data: registration });
      expect(response.status()).toBe(400);
      const data = await response.json();
      expect(data.error).toBe("Missing password");
    });
  });
  


});
