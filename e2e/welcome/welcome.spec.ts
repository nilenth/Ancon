import { expect } from 'chai';
import { Welcomepage } from './welcome.page';
import { LoginPage } from '../login/login.page';
import { DashboardPage } from '../dasboard/dashboard.page';

describe('Welcomepage', () => {
    let n = 0;
    let welcomepage: Welcomepage;

    afterEach((done) => {
        const filename = './e2e/screenshots/Welcomepage_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
    });

    it('Select the first tenant from the dropdown', () => {
        const dashboardPage = welcomepage.selectATenant();
        expect(dashboardPage.title).to.be.equal('Tenant Dashboard');
    });
});
