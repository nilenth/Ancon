import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { IngredientPage } from '../ingredient/ingredient.page';
import { AddOnPage } from '../addOn/addOn.page';
import { ModifierPage } from '../modifier/modifier.page';

export class ProductPage extends BasePage {
    private titleSelector = '//h1[contains(text(),"Products")]';
    private selectCreateNewSelector = '//button[@class="btn btn-primary create"]';
    private titleCreateNewClientSelector = '//h1[@class="PageHeader_lgWidthMobile__2M7Ni"]';
    private saveButtonSelector = '//button[text()="Save"]';
    private emptyProductNameErrorSelector = '//label[@for="name"]';
    private emptyProductGroupErrorSelector = '//label[@for="productGroup"]';
    private productNameSelector = '//input[@name="name"]';
    private productInfoSelector = '//textarea[@name="description"]';
    private priceSelector = '//input[@name="defaultVariant.variantPrice.unitPrice"]';
    private clickProductGroupSelector = '//div[@class="custom-select__value-container custom-select__value-container--has-value css-1hwfws3"]';
    private clickFirstProductGroupSelector = '//div[@class="custom-select__option custom-select__option--is-focused css-1n7v3ny-option"]';
    private clickMenuGroupSelector = '//div[@class="css-vj8t7z custom-select__control"]';
    private clickFirstMenuGroupSelector = '//div[@class="css-vj8t7z custom-select__control"]';
    private autoAcceptToggleSelector = '//div[@class="row"]/div[@class="col-md-12"][3]//button[1]';
    private firstRowWithValue = '//tbody[1]//tr[1]//td[contains(text(),"Tang")]';
    private firstRowValueSelector = '//tbody[1]//tr[1]//td[4]';
    private secondRowValueSelector = '//tbody[2]//tr[1]//td[4]';
    private selectEditSelector = '//tbody[1]//tr[1]//td[8]//button[1]//div[1]//i[1]';
    private titleEditProductSelector = '//h1[@class="PageHeader_lgWidthMobile__2M7Ni"]';
    private selectCheckBoxSelector = '//tbody[1]//tr[1]//span[@class="CheckboxLabel_checkmark__3G56x"]';
    private selectDeleteSelector = '//table[1]/thead[1]/tr[1]/th[3]/div[1]/button[2]/i[1]';
    private selectDeleteConfirmationSelector = "//button[@class='btn btn-primary']";
    private searchFieldSelector = "//input[contains(@placeholder,'Search Products')]";
    private searchButtonSelector = "//div[@class='AutoComplete_search-button__1Hwhf']";
    private clearAllSelector = "//button[contains(@class,'btn btn-secondary btn-xs')]";
    private clickIngredientSelector = "//a[contains(text(),'Ingredients')]";
    private clickAddOnSelector = "//a[contains(text(),'Add-on Groups')]";

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get selectCreateNewButton() {
        $(this.selectCreateNewSelector).waitForVisible();
        return $(this.selectCreateNewSelector).click();
    }

    get clickEditButton() {
        $(this.selectEditSelector).waitForVisible();
        return $(this.selectEditSelector).click();
    }

    get clickDeleteButton() {
        $(this.selectDeleteSelector).waitForVisible();
        return $(this.selectDeleteSelector).click();
    }

    get clickDeleteConfirmation() {
        $(this.selectDeleteConfirmationSelector).waitForVisible();
        return $(this.selectDeleteConfirmationSelector).click();
    }

    get clickFirstProductCheckBox() {
        $(this.selectCheckBoxSelector).waitForVisible();
        return $(this.selectCheckBoxSelector).click();
    }

    get titleCreateNewClient(): string {
        $(this.titleCreateNewClientSelector).waitForVisible();
        return $(this.titleCreateNewClientSelector).getText();
    }

    get selectSaveButton() {
        $(this.saveButtonSelector).waitForVisible();
        $(this.saveButtonSelector).waitForEnabled();
        return $(this.saveButtonSelector).click();
    }

    get selectSearchButton() {
        $(this.searchButtonSelector).waitForVisible();
        $(this.searchButtonSelector).waitForEnabled();
        return $(this.searchButtonSelector).click();
    }

    get emptyProductNameErrorMessage(): string {
        $(this.emptyProductNameErrorSelector).waitForVisible();
        return $(this.emptyProductNameErrorSelector).getText();
    }

    get emptyProductGroupErrorMessage(): string {
        $(this.emptyProductNameErrorSelector).waitForVisible();
        return $(this.emptyProductGroupErrorSelector).getText();
    }

    get productName() {
        $(this.productNameSelector).waitForVisible();
        return $(this.productNameSelector);
    }

    get clickProductGroup() {
        $(this.clickProductGroupSelector).waitForVisible();
        return $(this.clickProductGroupSelector).click();
    }

    get clickFirstProductGroup() {
        $(this.clickFirstProductGroupSelector).waitForVisible();
        return $(this.clickFirstProductGroupSelector).click();
    }

    get productInfo() {
        $(this.productInfoSelector).waitForVisible();
        return $(this.productInfoSelector);
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

    get titleEditClient(): string {
        $(this.titleEditProductSelector).waitForVisible();
        return $(this.titleEditProductSelector).getText();
    }

    get secondRowValue(): string {
        $(this.secondRowValueSelector).waitForVisible();
        return $(this.secondRowValueSelector).getText();
    }

    get searchTerm() {
        $(this.searchFieldSelector).waitForVisible();
        return $(this.searchFieldSelector);
    }

    get clickClearAll() {
        $(this.clearAllSelector).waitForVisible();
        return $(this.clearAllSelector).click();
    }

    get clickIngredient() {
        $(this.clickIngredientSelector).waitForVisible();
        return browser.$(this.clickIngredientSelector);
    }

    get clickAddOn() {
        $(this.clickAddOnSelector).waitForVisible();
        return browser.$(this.clickAddOnSelector);
    }

    public clickCreateNewButton(): void {
        this.selectCreateNewButton;
    }

    public clickEditProductButton(): void {
        this.clickFirstProductCheckBox;
        this.clickEditButton;
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public clickSearchButton(): void {
        this.selectSearchButton;
    }

    public clickSearchField(): void {
        this.searchTerm;
    }

    public selectProductGroup(): void {
        this.clickProductGroup;
        this.clickFirstProductGroup;
    }

    public removeFilter(): void {
        this.clickClearAll;
    }

    public setProductName(productName: string): void {
        this.productName.setValue(productName);
    }

    public setProductInfo(productInfo: string): void {
        this.productInfo.setValue(productInfo);
    }

    public setPrice(price: string): void {
        this.price.setValue(price);
    }

    public setSearchTerm(searchTerm: string): void {
        this.searchTerm.setValue(searchTerm);
    }

    public setEditedProductName(updatedProductName: string): void {
        this.productName.setValue(updatedProductName);
    }

    public searchAProduct(searchField: string): void {
        this.setSearchTerm(searchField);
        this.clickSearchButton();
    }

    public createAProduct(productName: string, productInfo: string, price: string): void {
        this.setProductName(productName);
        this.selectProductGroup();
        this.setProductInfo(productInfo);
        this.setPrice(price);
        this.clickSaveButton();
    }

    public editProduct(updatedProductName: string, updatedProductInfo: string, updatedPrice: string): void {
        this.setEditedProductName(updatedProductName);
        this.setProductInfo(updatedProductInfo);
        this.setPrice(updatedPrice);
        this.clickSaveButton();
    }

    public deleteProduct(): void {
        this.clickFirstProductCheckBox;
        this.clickDeleteButton;
        this.clickDeleteConfirmation;
        browser.pause(2000);
    }

    public clickIngredientTab(): IngredientPage {
        this.clickIngredient.click();
        return new IngredientPage();
    }

    public clickAddOnTab(): AddOnPage {
        this.clickAddOn.click();
        return new AddOnPage();
    }

    public clickModifierTab(): ModifierPage {
        this.clickAddOn.click();
        return new ModifierPage();
    }

}
