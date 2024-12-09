// import { HomePage } from './src/pages/home-page';
// import { MainViewPage } from './src/pages/toolshop/mainview-page';
// import { Loginpage } from './src/pages/toolshop/login-page';
// import { ContactPage } from './src/pages/toolshop/contact-page';
// import { RegistrationPage } from './src/pages/toolshop/registration-page';
import { test as base } from '@playwright/test';


type allStepsClasses = {
    // homePage: HomePage;
    // mainViewPage: MainViewPage;
    // loginPage: Loginpage;
    // contactPage: ContactPage;
    // registrationPage: RegistrationPage;
}

export const test = base.extend<allStepsClasses>({
    // homePage: async ({ page }, use) => { await use(new HomePage(page)) },
    // mainViewPage: async({page}, use) =>{ await use(new MainViewPage(page))},
    // loginPage: async({page}, use) =>{ await use(new Loginpage(page))},
    // contactPage: async({page}, use) =>{ await use(new ContactPage(page))},
    // registrationPage: async({page}, use) =>{ await use(new RegistrationPage(page))},

});