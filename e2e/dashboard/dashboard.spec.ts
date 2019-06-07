import { expect } from 'chai';
import { DashboardPage } from './dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { HardwarePage } from '../hardware/hardware.page';

describe('Dashboard page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;

    afterEach((done) => {
        const filename = './e2e/screenshots/Dashboard_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('nalinda@calcey.com', 'User@123');
        dashboardPage = welcomepage.selectATenant();
    });

    it('should navigate to hardware page', () => {
        const hardwarePage = dashboardPage.clickHardwareButton();
        expect(hardwarePage.title).to.equal('Client / Hardware');
    });

    it('should navigate to tax page', () => {
        const taxPage = dashboardPage.clickAccountingButton();
        expect(taxPage.title).to.equal('Accounting');
    });

    it('should navigate to products page', () => {
        const productPage = dashboardPage.clickAccountingButton();
        expect(productPage.title).to.equal('Products');
    });
});
