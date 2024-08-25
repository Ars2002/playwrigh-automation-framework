import { HomePage } from './HomePage';

// const { page } = require('@playwright/test');

const userNameInputSelector = "#username";
const passwordInputSelector = "#password";
const loginButtonSelector = "#Login";

export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    }

    async fillUserName(userName) {
        await this.page.fill(userNameInputSelector, userName);
    }

    async fillPassword(password) {
        await this.page.fill(passwordInputSelector, password);
    }

    async clickLoginButton() {
        await this.page.locator(loginButtonSelector)
            .click()
            .catch((error) => {
                console.error(`Error on clicking on login button: ${error}`);
                throw error;
            });
        return new HomePage(this.page);
    }
}