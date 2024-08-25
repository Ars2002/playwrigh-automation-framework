const{Page, expect} = require('@playwright/test');
const { timeout } = require('../../playwright.config');


export class HomePage{
    homeTitleLocator = "//h1/span[@title='Home']";
    constructor(page){
        this.page = page;
    }

    async verifyLandingToHomePage(){
        await expect(this.page.locator(this.homeTitleLocator)).toBeVisible({timeout: 20000});
    }
}