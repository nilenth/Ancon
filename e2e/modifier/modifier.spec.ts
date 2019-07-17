import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { ProductPage } from '../product/product.page';
import { ModifierPage } from '../modifier/modifier.page';
import { ModifierDetailPage } from '../modifier/modifierDetail.page';

describe('modifier page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let productPage: ProductPage;
    let modifierPage: ModifierPage;
    let modifierDetailPage: ModifierDetailPage;
    const currentTimeVar = new Date().getTime().toString();
    const modifierName = `Vitamin B ${currentTimeVar}`;
    const updatedModifierName = `${modifierName} ${'Updated'}`;

    afterEach((done) => {
        const filename = './e2e/screenshots/modifier_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        modifierDetailPage  = new ModifierDetailPage();
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
        dashboardPage = welcomepage.selectATenant();
        productPage = dashboardPage.clickProductButton();
        modifierPage = productPage.clickModifierTab();
    });

    it('should have correct title', () => {
        expect(modifierPage.title).to.be.equal('Modifiers');
    });

    it('should open create a Modifier page', () => {
        modifierPage.clickCreateNewModifierButton();
        expect(modifierDetailPage.titleCreateAnModifier).to.equal('Create a Modifier');
    });

    it('should show mandatory validation', () => {
        modifierDetailPage.clickSaveButton();
        expect(modifierDetailPage.emptyModifierNameErrorMessage).to.equal('Modifier Name : Required');
    });

    it('should create a Modifier', () => {
        modifierDetailPage.createAModifier(modifierName);
        expect(modifierPage.firstRowValue).to.equal(modifierName);
    });

    it('should navigate to edit modifier page', () => {
        modifierPage.clickEditModifierButton();
        expect(modifierDetailPage.titleEditClient).to.equal('Edit a Modifier');
    });

    it('should edit a modifier', () => {
        modifierDetailPage.editModifier(updatedModifierName);
        expect(modifierPage.firstRowValue).to.equal(updatedModifierName);
    });

    it('should search a modifier', () => {
        modifierPage.searchAModifier(updatedModifierName);
        expect(modifierPage.firstRowValue).to.equal(updatedModifierName);
    });

    it('should delete a modifier', () => {
        modifierPage.removeFilter();
        if (modifierPage.noOfRows > 1) {
            modifierPage.deleteModifier();
            expect(modifierPage.firstRowValue).to.not.equal(updatedModifierName);
        } else {
            modifierPage.noOfRows === 0;
        }
    });

});
