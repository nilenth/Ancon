import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { ProductPage } from '../product/product.page';
import { AddOnPage } from '../addOn/addOn.page';
import { AddOnDetailPage } from '../addOn/addOnDetail.page';

describe('addOn page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let productPage: ProductPage;
    let addOnPage: AddOnPage;
    let addOnDetailPage: AddOnDetailPage;
    const currentTimeVar = new Date().getTime().toString();
    const addOnGroupName = `Cheese ${currentTimeVar}`;
    const updatedAddOnGroupName = `${addOnGroupName} ${'Updated'}`;
    const ingredientName = `Sauce ${currentTimeVar}`;
    const ingredientPrice = '25.00';

    afterEach((done) => {
        const filename = './e2e/screenshots/addOn_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        addOnDetailPage  = new AddOnDetailPage();
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
        dashboardPage = welcomepage.selectATenant();
        productPage = dashboardPage.clickProductButton();
        addOnPage = productPage.clickAddOnTab();
    });

    it('should have correct title', () => {
        expect(addOnPage.title).to.be.equal('Add-on Groups');
    });

    it('should open create an AddOn page', () => {
        addOnPage.clickCreateNewAddOnButton();
        expect(addOnDetailPage.titleCreateAnAddOn).to.equal('Create an Add-on Group');
    });

    it('should show mandatory validation', () => {
        addOnDetailPage.clickSaveButton();
        expect(addOnDetailPage.emptyAddOnNameErrorMessage).to.equal('Add-on Group Title : Required');
    });

    it('should create an AddOn', () => {
        addOnDetailPage.createAnAddOn(ingredientName, ingredientPrice);
        expect(addOnDetailPage.addOnValue).to.equal(ingredientName);
    });

    it('should create an AddOn Group', () => {
        addOnDetailPage.createAnAddOnGroup(addOnGroupName);
        expect(addOnPage.firstRowValue).to.equal(addOnGroupName);
    });

    it('should navigate to edit addOn group page', () => {
        addOnPage.clickEditAddOnGroupButton();
        expect(addOnPage.titleEditClient).to.equal('Edit an Add-on Group');
    });

    it('should edit an addOn', () => {
        addOnDetailPage.editAddOnGroup(updatedAddOnGroupName);
        expect(addOnPage.firstRowValue).to.equal(updatedAddOnGroupName);
    });

    it('should search an addOn group', () => {
        addOnPage.searchAnAddOn(updatedAddOnGroupName);
        expect(addOnPage.firstRowValue).to.equal(updatedAddOnGroupName);
    });

    it('should delete an addOn group', () => {
        addOnPage.removeFilter();
        if (addOnPage.noOfRows > 1) {
            addOnPage.deleteAddOn();
            expect(addOnPage.firstRowValue).to.not.equal(updatedAddOnGroupName);
        } else {
            addOnPage.noOfRows === 0;
        }
    });

});
