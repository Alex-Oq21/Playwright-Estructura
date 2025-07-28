
import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from './testData';

export class LoginUtils {
  static async loginAs(page: Page, userType: keyof typeof users): Promise<void> {
    const loginPage = new LoginPage(page);
    const { username, password } = users[userType];

    await loginPage.goto();
    await loginPage.Login(username, password);
  }
}
