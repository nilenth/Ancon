import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class ModifierPage extends BasePage {

    private titleSelector = '//div[@class="tab-title"]/h1';
    private selectCreateNewSelector = "//button[@class='btn btn-primary create']";
    private firstRowValueSelector = '//td[@class="truncate-td"]';
    private firstRowWithValue = '//table[contains(@class,"table")]//tbody//tr[1]';
    private editButtonSelector = '//table[contains(@class,"table")]//tbody//tr[1]//button[1]';
    private selectCheckBoxSelector = '//tbody[1]//tr[1]//td[2]//label[1]//span';
    private searchButtonSelector = '//i[contains(@class,"a_icon-search")]';
    private searchFieldSelector = '//input[contains(@placeholder,"Search Modifiers")]';
    private clearAllSelector = "//button[@class='btn btn-secondary btn-xs']";
    private selectDeleteSelector = '//table[contains(@class,"table")]//tbody[1]//tr[1]//td[5]//button[2]//div[1]//i[1]';
    private selectDeleteConfirmationSelector = "//button[@class='btn btn-primary']";
    private secondRowValueSelector = '//tbody[2]//tr[1]//td[4]';
    private noOfRowsSelector = "//table[contains(@class,'table')]//tbody";

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get selectCreateNewButton() {
        $(this.selectCreateNewSelector).waitForVisible();
        return $(this.selectCreateNewSelector).click();
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

    get noOfRows(): number {
        $(this.noOfRowsSelector).waitForVisible();
        return browser.elements(this.noOfRowsSelector).value.length;
    }

    public clickCreateNewModifierButton(): void {
        this.selectCreateNewButton;
    }

    public clickEditButton(): void {
        this.selectEditButton;
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

    public clickEditModifierButton() {
        this.clickFirstProductCheckBox;
        this.clickEditButton();
    }

    public searchAModifier(searchField: string): void {
        this.setSearchTerm(searchField);
        this.clickSearchButton();
    }

    public deleteModifier(): void {
        this.clickFirstProductCheckBox;
        this.clickDeleteButton;
        this.clickDeleteConfirmation;
    }

}
