import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { TaxPage } from '../tax/tax.page';
import { ProductGroupPage } from './productgroup.page';

describe('Product Group Page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let taxPage: TaxPage;
    let productGroupPage: ProductGroupPage;

    afterEach((done) => {
        const filename = './e2e/screenshots/ProductGroup_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('nalinda@calcey.com', 'User@123');
        dashboardPage = welcomepage.selectATenant();
        taxPage = dashboardPage.clickAccountingButton();
        productGroupPage = taxPage.clickProductGroupTab();
    });

    it('should open create new product group popup', () => {
        productGroupPage.clickCreateNewButton();
        expect(productGroupPage.popupTitle).to.equal('Create Product Group');
    });

    it('should create a new product group', () => {
        const prodGroupName = 'Group B';
        const prodGroupCost = 'ABC';
        const prodGroupAccount = '123456789';
        productGroupPage.inputProdName(prodGroupName);
        productGroupPage.selectGroupTax();
        browser.pause(2000);
        productGroupPage.inputProdCost(prodGroupCost);
        productGroupPage.inputProdAccount(prodGroupAccount);
        productGroupPage.clickSaveButton();
        browser.pause(3000);
        expect(productGroupPage.prodGroupFirstRawValue).to.contains(prodGroupName);
    });

    it('should be able to edit created product group record', () => {
        const prodNameEditedValue = 'Edit';
        productGroupPage.selectEditButton();
        productGroupPage.inputProdName(prodNameEditedValue);
        productGroupPage.clickSaveButton();
        browser.pause(2000);
        expect(taxPage.firstRawValue).to.contains(prodNameEditedValue);
    });

    it('should be able to delete created product group record', () => {
        productGroupPage.deleteARecord();
    });
});
