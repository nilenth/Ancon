import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { HardwarePage } from '../hardware/hardware.page';

describe('Dashboard page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let hardwarePage: HardwarePage;

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
        hardwarePage = dashboardPage.clickHardwareButton();
    });

    it('should open create new client popup', () => {
        hardwarePage.clickCreateNewButton();
        expect(hardwarePage.titleCreateNewClient).to.equal('Create New Client');
    });

    it('should show mandatory validation', () => {
        hardwarePage.clickSaveNewButton();
        expect(hardwarePage.emptyNameErrorMessage).to.equal('Client Name : Required');
    });

    it('should create a client without connecting the printer', () => {
        const value = 'XXX';
        hardwarePage.createAClientWithoutAPrinter(value);
        expect(hardwarePage.firstRawValue).to.equal(value);
    });

    it('should be able to activate printer toggle', () => {
        hardwarePage.clickCreateNewButton();
        hardwarePage.printerToggleActivate();
        expect(hardwarePage.connectionText).to.equal('Connection');
    });

    it('should be able to activate printer toggle and add a com port and Sam4s Giant100 port', () => {
        const value = 'XXX';
        hardwarePage.createAClientWithAPrinterAndAComPortAndSam(value, '123');
        expect(hardwarePage.firstRawValue).to.equal(value);
    });

    it('should be able to activate printer toggle and add an IP and Sam4s Giant100 port', () => {
        const value = 'XXX';
        hardwarePage.clickCreateNewButton();
        hardwarePage.createAClientWithAPrinterAndIPAndSam(value, '192.168.1.1');
        expect(hardwarePage.firstRawValue).to.equal(value);
    });

    it('should be able to activate printer toggle and add an IP and custom port settings', () => {
        const value = 'XXX';
        hardwarePage.clickCreateNewButton();
        hardwarePage.createAClientWithAPrinterAndIPAndCustomPort(value, '192.168.1.2', '111');
        expect(hardwarePage.firstRawValue).to.equal(value);
    });

    it('should be able to activate printer toggle and select custom printer ', () => {
        const value = 'XXX';
        hardwarePage.clickCreateNewButton();
        hardwarePage.createAClientWithAPrinterAndCustomPrinter(value, '112');
        expect(hardwarePage.firstRawValue).to.equal(value);
    });
});
