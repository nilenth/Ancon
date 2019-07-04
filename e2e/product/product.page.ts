import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { IngredientPage } from '../ingredient/ingredient.page';
import { AddOnPage } from '../addOn/addOn.page';
import { ModifierPage } from '../modifier/modifier.page';
import { ProductDetailPage } from './productDetail.page';

export class ProductPage extends BasePage {
    private titleSelector = '//div[@class="tab-title"]/h1';
    private selectCreateNewSelector = '//button[@class="btn btn-primary create"]';
    private autoAcceptToggleSelector = '//div[@class="row"]/div[@class="col-md-12"][3]//button[1]';
    private firstRowWithValue = '//table[contains(@class,"table")]//tbody//tr[1]';
    private firstRowValueSelector = '//tbody[1]//tr[1]//td[4]';
    private secondRowValueSelector = '//tbody[2]//tr[1]//td[4]';
    private selectEditSelector = '//tbody[1]//tr[1]//td[8]//button[1]//div[1]//i[1]';
    private selectCheckBoxSelector = '//tbody[1]//tr[1]//span[@class="CheckboxLabel_checkmark__3G56x"]';
    private selectDeleteSelector = '//table[1]/thead[1]/tr[1]/th[3]/div[1]/button[2]/i[1]';
    private selectDeleteConfirmationSelector = "//button[@class='btn btn-primary']";
    private searchFieldSelector = "//input[contains(@placeholder,'Search Products')]";
    private searchButtonSelector = "//div[@class='AutoComplete_search-button__1Hwhf']";
    private clearAllSelector = "//button[@class='btn btn-secondary btn-xs']";
    private clickIngredientSelector = "//a[contains(text(),'Ingredients')]";
    private clickAddOnSelector = "//a[contains(text(),'Add-on Groups')]";
    private clickModifierSelector = "//a[contains(text(),'Modifiers')]";
    private noOfRowsSelector = "//table[contains(@class,'table')]//tbody";

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

    get selectSearchButton() {
        $(this.searchButtonSelector).waitForVisible();
        $(this.searchButtonSelector).waitForEnabled();
        return $(this.searchButtonSelector).click();
    }

    get firstRowValue(): string {
        browser.waitForVisible(this.firstRowWithValue);
        $(this.firstRowValueSelector).waitForVisible();
        return $(this.firstRowValueSelector).getText();
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

    get clickModifier() {
        $(this.clickModifierSelector).waitForVisible();
        return browser.$(this.clickModifierSelector);
    }

    get noOfRows(): number {
        $(this.noOfRowsSelector).waitForVisible();
        return browser.elements(this.noOfRowsSelector).value.length;
    }

    public clickCreateNewButton(): void {
        this.selectCreateNewButton;
    }

    public clickEditProductButton(): void {
        this.clickFirstProductCheckBox;
        this.clickEditButton;
    }

    public clickSearchButton(): void {
        this.selectSearchButton;
    }

    public clickSearchField(): void {
        this.searchTerm;
    }

    public removeFilter(): void {
        this.clickClearAll;
    }

    public setSearchTerm(searchTerm: string): void {
        this.searchTerm.setValue(searchTerm);
    }

    public searchAProduct(searchField: string): void {
        this.setSearchTerm(searchField);
        this.clickSearchButton();
    }

    public deleteProduct(): void {
        this.clickFirstProductCheckBox;
        this.clickDeleteButton;
        this.clickDeleteConfirmation;
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
        this.clickModifier.click();
        return new ModifierPage();
    }

}
