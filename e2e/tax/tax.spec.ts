import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { TaxPage } from '../tax/tax.page';

describe('Dashboard page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let taxPage: TaxPage;
    let secondRowValue = '0';
    const rateValue = Math.floor(Math.random() * (99 - 0) + 0);
    const rateEditedValue = rateValue + 1;

    afterEach((done) => {
        const filename = './e2e/screenshots/TaxPage_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
        dashboardPage = welcomepage.selectATenant();
        taxPage = dashboardPage.clickAccountingButton();
    });

    it('should open create new client popup', () => {
        taxPage.clickCreateNewButton();
        expect(taxPage.titleCreateNewTax).to.equal('Create a Tax');
    });

    it('should create a new tax record', () => {
        const accountValue = 3300;
        taxPage.createTax(rateValue, accountValue);
        expect(taxPage.firstRowValue).to.contains(rateValue);
    });

    it('should display edit tax popup', () => {
        taxPage.selectEditButton();
        expect(taxPage.titleEditClient).to.equal('Edit a Tax');
    });

    it('should be able to edit created tax record', () => {
        taxPage.editTax(rateEditedValue);
        expect(taxPage.firstRowValue).to.contains(rateEditedValue);
    });

    it('should be able to search edited tax record', () => {
        secondRowValue = taxPage.secondRowValue;
        taxPage.searchTax(rateEditedValue);
        expect(taxPage.firstRowValue).to.contains(rateEditedValue);
    });

    it('should be able to remove search filter', () => {
        taxPage.removeFilter();
        expect(taxPage.firstRowValue).to.contains(rateEditedValue);
        expect(taxPage.secondRowValue).to.contains(secondRowValue);
    });

    it('should be able to delete created tax record', () => {
        taxPage.deleteARecord();
        expect(taxPage.firstRowValue).to.not.equal(rateEditedValue);
    });
});
