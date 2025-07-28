import {Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){

        this.page = page;
        this.userField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        this.loginButton = page.getByRole('button', { name: 'LOGIN' });
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    async Login(username: string, password: string){
        await this.userField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}