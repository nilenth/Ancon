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

    afterEach((done) => {
        const filename = './e2e/screenshots/TaxPage_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('nalinda@calcey.com', 'User@123');
        dashboardPage = welcomepage.selectATenant();
        taxPage = dashboardPage.clickAccountingButton();
    });

    it('should open create new client popup', () => {
        taxPage.clickCreateNewButton();
        expect(taxPage.titleCreateNewTax).to.equal('Create a Tax');
    });

    it('should create a new tax record', () => {
        const accountValue = '1234567890';
        const rateValue = '171';
        taxPage.selectATaxType();
        taxPage.inputRateDetails(rateValue);
        taxPage.inputAccountDetails(accountValue);
        expect(taxPage.firstRawValue).to.contains(rateValue);
    });

    it('should be able to edit created tax record', () => {
        const rateEditedValue = '1';
        taxPage.selectEditButton();
        taxPage.inputRateDetails(rateEditedValue);
        taxPage.clickSaveButton();
        expect(taxPage.firstRawValue).to.contains(rateEditedValue);
    });

    it('should be able to delete created tax record', () => {
        taxPage.selectFirstCheckbox();
        const secondRowValue = taxPage.secondRawValue;
        taxPage.deleteARecord();
        expect(taxPage.firstRawValue).to.be.equal(secondRowValue);
    });

    it('should navigate to product group page', () => {
        const productgroup = taxPage.clickProductGroupTab();
        expect(productgroup.title).to.equal('Product Groups');
    });
});
