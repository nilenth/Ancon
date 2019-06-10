import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class IngredientPage extends BasePage {

    private titleSelector = '//h1[contains(text(),"Products")]';
    private selectCreateNewSelector = "//button[@class='btn btn-primary create']";
    private titleCreateNewIngredientSelector = "//h1[@class='PageHeader_lgWidthMobile__2M7Ni']";
    private saveButtonSelector = "//button[text()='Save']";
    private emptyIngredientNameErrorSelector = "//label[@class='control-label error-label']";
    private ingredientNameSelector = "//input[@name='name']";
    private priceSelector = '//input[@name="price"]';
    private firstRowValueSelector = '//td[@class="truncate-td"]';
    private firstRowWithValue = '//table[contains(@class,"table")]//tbody//tr[1]';
    private editButtonSelector = '//table[contains(@class,"table")]//tbody//tr[1]//button[1]';
    private deleteButtonSelector = '//table[contains(@class,"table")]//tbody//tr[1]//button[2]';
    private selectCheckBoxSelector = '//tbody[1]//tr[1]//td[2]//label[1]//span[1]';
    private titleEditProductSelector = '//div[@class="App"]//h1';
    private searchButtonSelector = '//i[@class="a_icon-search"]';
    private searchFieldSelector = '//input[@placeholder="Search Ingredients"]';
    private clearAllSelector = "//button[@class='btn btn-secondary btn-xs']";
    private selectDeleteSelector = '//tbody[1]//tr[1]//td[5]//button[2]//div[1]';
    private selectDeleteConfirmationSelector = "//button[@class='btn btn-primary']";
    private secondRowValueSelector = '//tbody[2]//tr[1]//td[4]';

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get titleCreateAnIngredient(): string {
        $(this.titleCreateNewIngredientSelector).waitForVisible();
        return $(this.titleCreateNewIngredientSelector).getText();
    }

    get selectCreateNewButton() {
        $(this.selectCreateNewSelector).waitForVisible();
        return $(this.selectCreateNewSelector).click();
    }

    get selectSaveButton() {
        $(this.saveButtonSelector).waitForVisible();
        $(this.saveButtonSelector).waitForEnabled();
        return $(this.saveButtonSelector).click();
    }

    get emptyIngredientNameErrorMessage(): string {
        $(this.emptyIngredientNameErrorSelector).waitForVisible();
        return $(this.emptyIngredientNameErrorSelector).getText();
    }

    get ingredientName() {
        $(this.ingredientNameSelector).waitForVisible();
        return $(this.ingredientNameSelector);
    }

    get price() {
        $(this.priceSelector).waitForVisible();
        return $(this.priceSelector);
    }

    get firstRowValue(): string {
        browser.waitForVisible(this.firstRowWithValue);
        $(this.firstRowValueSelector).waitForVisible();
        return $(this.firstRowValueSelector).getText();
    }

    get selectEditButton() {
        $(this.editButtonSelector).waitForVisible();
        $(this.editButtonSelector).waitForEnabled();
        return $(this.editButtonSelector).click();
    }

    get clickFirstProductCheckBox() {
        $(this.selectCheckBoxSelector).waitForVisible();
        return $(this.selectCheckBoxSelector).click();
    }

    get titleEditClient(): string {
        $(this.titleEditProductSelector).waitForVisible();
        return $(this.titleEditProductSelector).getText();
    }

    get searchTerm() {
        $(this.searchFieldSelector).waitForVisible();
        return $(this.searchFieldSelector);
    }

    get selectSearchButton() {
        $(this.searchButtonSelector).waitForVisible();
        $(this.searchButtonSelector).waitForEnabled();
        return $(this.searchButtonSelector).click();
    }

    get clickClearAll() {
        $(this.clearAllSelector).waitForVisible();
        return $(this.clearAllSelector).click();
    }

    get clickDeleteButton() {
        $(this.selectDeleteSelector).waitForVisible();
        return $(this.selectDeleteSelector).click();
    }

    get clickDeleteConfirmation() {
        $(this.selectDeleteConfirmationSelector).waitForVisible();
        return $(this.selectDeleteConfirmationSelector).click();
    }

    get secondRowValue(): string {
        $(this.secondRowValueSelector).waitForVisible();
        return $(this.secondRowValueSelector).getText();
    }

    public clickCreateNewIngredientButton(): void {
        this.selectCreateNewButton;
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public clickEditButton(): void {
        this.selectEditButton;
    }

    public setIngredientName(ingredientName: string): void {
        this.ingredientName.setValue(ingredientName);
    }

    public setEditedIngredientName(updatedIngredientName: string): void {
        this.ingredientName.setValue(updatedIngredientName);
    }

    public setPrice(price: string): void {
        this.price.setValue(price);
    }

    public setEditedIngredientPrice(updatedPrice: string): void {
        this.price.setValue(updatedPrice);
    }

    public setSearchTerm(searchTerm: string): void {
        this.searchTerm.setValue(searchTerm);
    }

    public clickSearchButton(): void {
        this.selectSearchButton;
    }

    public removeFilter(): void {
        this.clickClearAll;
    }

    public createAnIngredient(ingredientName: string, price: string): void {
        this.setIngredientName(ingredientName);
        this.setPrice(price);
        this.clickSaveButton();
    }

    public clickEditIngredientButton() {
        this.clickFirstProductCheckBox;
        this.clickEditButton();
    }

    public editIngredient(updatedIngredientName: string, updatedPrice: string): void {
        this.setEditedIngredientName(updatedIngredientName);
        this.setEditedIngredientPrice(updatedPrice);
        this.clickSaveButton();
    }

    public searchAnIngredient(searchField: string): void {
        this.setSearchTerm(searchField);
        this.clickSearchButton();
    }

    public deleteIngredient(): void {
        this.clickFirstProductCheckBox;
        this.clickDeleteButton;
        this.clickDeleteConfirmation;
    }

}
