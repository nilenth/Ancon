import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { ProductPage } from '../product/product.page';
import { IngredientPage } from '../ingredient/ingredient.page';
import { IngredientDetailPage } from './ingredientDetail.page';

describe('Ingredient page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let productPage: ProductPage;
    let ingredientPage: IngredientPage;
    let ingredientDetailPage: IngredientDetailPage;
    const currentTimeVar = new Date().getTime().toString();
    const ingredientName = `Sugar ${currentTimeVar}`;
    const updatedIngredientName = `${ingredientName} ${'Updated'}`;

    afterEach((done) => {
        const filename = './e2e/screenshots/Ingredient_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        ingredientDetailPage  = new IngredientDetailPage();
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('admin@ancon.io', 'admin');
        dashboardPage = welcomepage.selectATenant();
        productPage = dashboardPage.clickProductButton();
        ingredientPage = productPage.clickIngredientTab();
    });

    it('should have correct title', () => {
        expect(ingredientPage.title).to.be.equal('Ingredients');
    });

    it('should open create an Ingredient page', () => {
        ingredientPage.clickCreateNewIngredientButton();
        expect(ingredientDetailPage.titleCreateAnIngredient).to.equal('Create an Ingredient');
    });

    it('should show mandatory validation', () => {
        ingredientDetailPage.clickSaveButton();
        expect(ingredientDetailPage.emptyIngredientNameErrorMessage).to.equal('Ingredient Name : Required');
    });

    it('should create an Ingredient', () => {
        ingredientDetailPage.createAnIngredient(ingredientName, '25.00');
        expect(ingredientPage.firstRowValue).to.equal(ingredientName);
    });

    it('should navigate to edit ingredient page', () => {
        ingredientPage.clickEditIngredientButton();
        expect(ingredientPage.titleEditClient).to.equal('Edit an Ingredient');
    });

    it('should edit an ingredient', () => {

        ingredientDetailPage.editIngredient(updatedIngredientName, '25.25');
        expect(ingredientPage.firstRowValue).to.equal(updatedIngredientName);
    });

    it('should search an ingredient', () => {
        ingredientPage.searchAnIngredient(updatedIngredientName);
        expect(ingredientPage.firstRowValue).to.equal(updatedIngredientName);
    });

    it('should delete an ingredient', () => {
        ingredientPage.removeFilter();
        if (ingredientPage.noOfRows > 1) {
            ingredientPage.deleteIngredient();
            expect(ingredientPage.firstRowValue).to.not.equal(updatedIngredientName);
        } else {
            ingredientPage.noOfRows === 0;
        }
    });

});
