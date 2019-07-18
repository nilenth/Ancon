import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { SettingPage } from '../setting/setting.page';

describe('Settings page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let settingPage: SettingPage;

    afterEach((done) => {
        const filename = './e2e/screenshots/setting_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
        dashboardPage = welcomepage.selectATenant();
        settingPage = dashboardPage.clickSettingButton();

    });

    it('should have correct title', () => {
        expect(settingPage.title).to.equal('T Avenue Details');
    });
});
