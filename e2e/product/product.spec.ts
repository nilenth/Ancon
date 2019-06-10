import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { ProductPage } from '../product/product.page';

describe('Dashboard page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let productPage: ProductPage;
    const currentTimeVar = new Date().getTime().toString();
    const productName = `Tang ${currentTimeVar}`;
    const updatedProductName = `${productName} ${'Updated'}`;
    const productInfo = 'Fresh Juice';
    const updatedProductInfo = `${productInfo} ${'Updated'}`;
    const productPrice = '25.00';
    const updatedProductPrice = '25.25';

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
        productPage = dashboardPage.clickProductButton();
    });

    it('should open create new product page', () => {
        productPage.clickCreateNewButton();
        expect(productPage.titleCreateNewClient).to.equal('Create a Product');
    });

    it('should show mandatory validation', () => {
        productPage.clickSaveButton();
        expect(productPage.emptyProductNameErrorMessage).to.equal('Product Name : Required');
        expect(productPage.emptyProductGroupErrorMessage).to.equal('Product Group : Required');
    });

    it('should create a product', () => {
        productPage.createAProduct(productName, productInfo, productPrice);
        expect(productPage.firstRowValue).to.equal(productName);
    });

    it('should navigate to edit product page', () => {
        productPage.clickEditProductButton();
        expect(productPage.titleEditClient).to.equal(productName);
    });

    it('should edit a product', () => {
        productPage.editProduct(updatedProductName, updatedProductInfo, updatedProductPrice);
        expect(productPage.firstRowValue).to.equal(updatedProductName);
    });

    it('should search a product', () => {
        productPage.searchAProduct(updatedProductName);
        expect(productPage.firstRowValue).to.equal(updatedProductName);
    });

    it('should delete a product', () => {
        productPage.removeFilter();
        const secondRowValueName = productPage.secondRowValue;
        productPage.deleteProduct();
        expect(productPage.firstRowValue).to.equal(secondRowValueName);
    });

});
