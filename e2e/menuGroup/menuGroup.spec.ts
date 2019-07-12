import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { ProductPage } from '../product/product.page';
import { MenuGroupPage } from '../menuGroup/menuGroup.page';
import { MenuGroupDetailPage } from '../menuGroup/menuGroupDetail.page';

describe('Dashboard page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let productPage: ProductPage;
    let menuGroupPage: MenuGroupPage;
    let menuGroupDetailPage: MenuGroupDetailPage;
    const currentTimeVar = new Date().getTime().toString();
    const groupName = `mediterranean ${currentTimeVar}`;
    const updatedGroupName = `${groupName} ${'Updated'}`;
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
        menuGroupDetailPage = new MenuGroupDetailPage();
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('nalinda@calcey.com', 'User@123');
        dashboardPage = welcomepage.selectATenant();
        productPage = dashboardPage.clickProductButton();
        menuGroupPage = productPage.clickMenuGroupTab();
    });

    it('should have correct title', () => {
        expect(menuGroupPage.title).to.be.equal('Menu Groups');
    });

    it('should open create Group popup', () => {
        menuGroupPage.clickCreateNewGroupButton();
        expect(menuGroupDetailPage.titleCreateGroup).to.equal('Create Group');
    });

    it('should show mandatory validation', () => {
        menuGroupDetailPage.clickOkButton();
        expect(menuGroupDetailPage.emptyGroupNameErrorMessage).to.equal('Group Name : Required');
        expect(menuGroupDetailPage.emptyBackgroundColourErrorMessage).to.equal('Background Color : Required');
    });

    it('should create a group', () => {
        menuGroupDetailPage.createGroup(groupName, '#b34321');
        expect(menuGroupPage.lastRowValue).to.equal(groupName);
    });

    it('should save the created group', () => {
        menuGroupPage.clickSaveButton();
        expect(menuGroupPage.toastSuccessMessage).to.equal('Menu Group Updated Successfully');
    });

    it('should display edit menu group popup', () => {
        menuGroupPage.clickEditButton();
        expect(menuGroupDetailPage.titleEditPopup).to.equal(`Edit\n${groupName}`);
    });

});
