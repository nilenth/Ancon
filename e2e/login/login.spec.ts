import { expect } from 'chai';
import { LoginPage } from './login.page';
import { Welcomepage } from '../welcome/welcome.page';

describe('Login page', () => {
    let n = 0;
    let loginPage: LoginPage;
    let welcomePage: Welcomepage;

    afterEach((done) => {
        const filename = './e2e/screenshots/Login_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        loginPage = new LoginPage();
        loginPage.navigate();
    });

    it('Invalid credentials should show error messages', () => {
        loginPage.loginWithInvalidCredentials('admin@ancon.io', 'invalid-password');
        expect(loginPage.error).to.be.equal('Invalid username or password');
    });

    it('Providing a valid Epost and not providing password should show error messages', () => {
        loginPage.loginWithInvalidCredentials('admin@ancon.io', '');
        expect(loginPage.error).to.be.equal('The Lösenord field is required.');
    });

    it('Not providing Epost and provide valid password should show error messages', () => {
        loginPage.loginWithInvalidCredentials('', 'admin');
        expect(loginPage.error).to.be.equal('The E-post field is required.');
    });

    it('given valid credentials should take to welcome page', () => {
        welcomePage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
        expect(welcomePage.title).to.be.equal('Welcome to your BackOffice');
    });
});
