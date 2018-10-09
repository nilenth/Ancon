import { expect } from 'chai';
import { LoginPage } from './login.page';
import { DashboardPage } from '../dashboard/dashboard.page';

describe('Login page', () => {
    let n = 0;
    let loginPage: LoginPage;

    afterEach((done) => {
        const filename = './e2e/screenshots/Login_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        loginPage = new LoginPage();
        loginPage.navigate();
    });

    it('given invalid credentials should fail with a message', () => {
        const errorMessage = loginPage.loginWithInvalidCredentials('invalid-user@gmail.com', 'password');
        expect(errorMessage).to.be.equal('User not found');
    });

    it('given invalid password should fail with a message', () => {
        const errorMessage = loginPage.loginWithInvalidCredentials('testcalcey1@gmail.com', 'invalid-password');
        expect(errorMessage).to.be.equal('Wrong Email or Password');
    });

    it('given valid credentials should take to dashboard', () => {
        const dashboardPage: DashboardPage = loginPage.loginWithValidCredentials('testcalcey1@gmail.com', 'user@123');
        expect(dashboardPage.getTitle()).to.be.equal('Dashboard');
    });
});
