import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { ProductPage } from '../product/product.page';
import { AddOnPage } from '../addOn/addOn.page';

describe('addOn page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let productPage: ProductPage;
    let addOnPage: AddOnPage;
    const currentTimeVar = new Date().getTime().toString();
    const addOnName = `Cheese ${currentTimeVar}`;
    const updatedAddOnName = `${addOnName} ${'Updated'}`;

    afterEach((done) => {
        const filename = './e2e/screenshots/addOn_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('nalinda@calcey.com', 'User@123');
        dashboardPage = welcomepage.selectATenant();
        productPage = dashboardPage.clickProductButton();
        addOnPage = productPage.clickAddOnTab();
    });

    it('should open create an AddOn page', () => {
        addOnPage.clickCreateNewAddOnButton();
        expect(addOnPage.titleCreateAnAddOn).to.equal('Create an Add-on Group');
    });

    it('should show mandatory validation', () => {
        addOnPage.clickSaveButton();
        expect(addOnPage.emptyAddOnNameErrorMessage).to.equal('Add-on Group Title : Required');
    });

    it('should create an AddOn', () => {
        addOnPage.createAnAddOn(addOnName);
        expect(addOnPage.firstRowValue).to.equal(addOnName);
    });

    it('should navigate to edit addOn page', () => {
        addOnPage.clickEditAddOnButton();
        expect(addOnPage.titleEditClient).to.equal('Edit an Add-on Group');
    });

    it('should edit an addOn', () => {
        addOnPage.editAddOn(updatedAddOnName);
        expect(addOnPage.firstRowValue).to.equal(updatedAddOnName);
    });

    it('should search an addOn', () => {
        addOnPage.searchAnAddOn(updatedAddOnName);
        expect(addOnPage.firstRowValue).to.equal(updatedAddOnName);
    });

    it('should delete an addOn', () => {
        addOnPage.removeFilter();
        const secondRowValueName = addOnPage.secondRowValue;
        addOnPage.deleteAddOn();
        expect(addOnPage.firstRowValue).to.equal(secondRowValueName);
    });

});
