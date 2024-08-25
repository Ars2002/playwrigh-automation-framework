const {test, expect} = require('@playwright/test');
import { log } from "console";
import { LoginPage } from "../pages/LoginPage";

test("Login Test",async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName("9682jamal-k9qe@force.com");
    await loginPage.fillPassword("Aj@07062002");
    const homePage = await loginPage.clickLoginButton();

    await homePage.verifyLandingToHomePage();
})