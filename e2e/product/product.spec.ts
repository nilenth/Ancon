import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { ProductPage } from '../product/product.page';
import { ProductDetailPage } from '../product/productDetail.page';

describe('Product page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let productPage: ProductPage;
    let productDetailPage: ProductDetailPage;
    const currentTimeVar = new Date().getTime().toString();
    const productName = `Tang ${currentTimeVar}`;
    const updatedProductName = `${productName} ${'Updated'}`;
    const productInfo = 'Fresh Juice';
    const updatedProductInfo = `${productInfo} ${'Updated'}`;
    const productPrice = '25.00';
    const updatedProductPrice = '25.25';

    afterEach((done) => {
        const filename = './e2e/screenshots/Product_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        productDetailPage  = new ProductDetailPage();
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
        dashboardPage = welcomepage.selectATenant();
        productPage = dashboardPage.clickProductButton();
    });

    it('should have correct title', () => {
        expect(productPage.title).to.be.equal('Products');
    });

    it('should open create new product page', () => {
        productPage.clickCreateNewButton();
        expect(productDetailPage.titleCreateNewClient).to.equal('Create a Product');
    });

    it('should show mandatory validation', () => {
        productDetailPage.clickSaveButton();
        expect(productDetailPage.emptyProductNameErrorMessage).to.equal('Product Name : Required');
        expect(productDetailPage.emptyProductGroupErrorMessage).to.equal('Product Group : Required');
    });

    it('should create a product', () => {
        productDetailPage.createAProduct(productName, productInfo, productPrice);
        expect(productPage.firstRowValue).to.equal(productName);
    });

    it('should navigate to edit product page', () => {
        productPage.clickEditProductButton();
        expect(productDetailPage.titleEditClient).to.equal(productName);
    });

    it('should edit a product', () => {
        productDetailPage.editProduct(updatedProductName, updatedProductInfo, updatedProductPrice);
        expect(productPage.firstRowValue).to.equal(updatedProductName);
    });

    it('should search a product', () => {
        productPage.searchAProduct(updatedProductName);
        expect(productPage.firstRowValue).to.equal(updatedProductName);
    });

    it('should delete a product', () => {
        productPage.removeFilter();
        if (productPage.noOfRows > 1) {
            productPage.deleteProduct();
            expect(productPage.firstRowValue).to.not.equal(updatedProductName);
        } else {
            productPage.noOfRows === 0;
        }
    });

});
