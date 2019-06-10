import { expect } from 'chai';
import { DashboardPage } from '../dashboard/dashboard.page';
import { LoginPage } from '../login/login.page';
import { Welcomepage } from '../welcome/welcome.page';
import { ProductPage } from '../product/product.page';
import { IngredientPage } from '../ingredient/ingredient.page';

describe('Ingredient page', () => {
    let n = 0;
    let welcomepage: Welcomepage;
    let dashboardPage: DashboardPage;
    let productPage: ProductPage;
    let ingredientPage: IngredientPage;
    const currentTimeVar = new Date().getTime().toString();
    const ingredientName = `Sugar ${currentTimeVar}`;
    const updatedIngredientName = `${ingredientName} ${'Updated'}`;

    afterEach((done) => {
        const filename = './e2e/screenshots/Ingredient_'.concat(String(n), '.png');
        browser.saveScreenshot(filename);
        n += 1;
    });

    beforeAll(() => {
        const loginPage: LoginPage = new LoginPage();
        loginPage.navigate();
        welcomepage = loginPage.loginWithValidCredentials('nalinda@calcey.com', 'User@123');
        dashboardPage = welcomepage.selectATenant();
        productPage = dashboardPage.clickProductButton();
        ingredientPage = productPage.clickIngredientTab();
    });

    it('should open create an Ingredient page', () => {
        ingredientPage.clickCreateNewIngredientButton();
        expect(ingredientPage.titleCreateAnIngredient).to.equal('Create an Ingredient');
    });

    it('should show mandatory validation', () => {
        ingredientPage.clickSaveButton();
        expect(ingredientPage.emptyIngredientNameErrorMessage).to.equal('Ingredient Name : Required');
    });

    it('should create an Ingredient', () => {
        ingredientPage.createAnIngredient(ingredientName, '25.00');
        expect(ingredientPage.firstRowValue).to.equal(ingredientName);
    });

    it('should navigate to edit ingredient page', () => {
        ingredientPage.clickEditIngredientButton();
        expect(ingredientPage.titleEditClient).to.equal('Edit an Ingredient');
    });

    it('should edit an ingredient', () => {

        ingredientPage.editIngredient(updatedIngredientName, '25.25');
        expect(ingredientPage.firstRowValue).to.equal(updatedIngredientName);
    });

    it('should search an ingredient', () => {
        ingredientPage.searchAnIngredient(updatedIngredientName);
        expect(ingredientPage.firstRowValue).to.equal(updatedIngredientName);
    });

    it('should delete an ingredient', () => {
        ingredientPage.removeFilter();
        const secondRowValueName = ingredientPage.secondRowValue;
        ingredientPage.deleteIngredient();
        expect(ingredientPage.firstRowValue).to.equal(secondRowValueName);
    });

});
