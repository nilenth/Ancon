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
        welcomepage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
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
        productGroupPage.createAProductGroup(prodGroupName, prodGroupAccount);
        expect(productGroupPage.prodGroupfirstRowValue).to.contains(prodGroupName);
    });

    it('should be able to edit created product group record', () => {
        const prodNameEditedValue = 'Edit';
        productGroupPage.editAProductGroup(prodNameEditedValue);
        expect(taxPage.firstRowValue).to.contains(prodNameEditedValue);
    });

    it('should be able to delete created product group record', () => {
        productGroupPage.deleteARecord();
    });
});
