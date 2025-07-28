import { test, expect } from '@playwright/test';
import { LoginUtils } from '../../utils/LoginUtils';

test('Login exitoso con usuario standard', async ({ page }) => {
    await LoginUtils.loginAs(page, 'standard');
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
});

test('Login con usuario bloqueado', async ({ page }) => {
    await LoginUtils.loginAs(page, 'lockedOut');
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toContainText('Sorry, this user has been locked out');
});

test('Login con usuario con problemas', async ({ page }) => {
    await LoginUtils.loginAs(page, 'problem');
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
});

test('Login con usuario random', async ({ page }) => {
    await LoginUtils.loginAs(page, 'randomuser');
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toContainText('Username and password do not match any user in this service');
});
