import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class ModifierPage extends BasePage {

    private titleSelector = '//h1[contains(text(),"Products")]';
    private selectCreateNewSelector = "//button[@class='btn btn-primary create']";
    private titleCreateNewModifierSelector = "//h1[@class='PageHeader_lgWidthMobile__2M7Ni']";
    private saveButtonSelector = "//button[text()='Save']";
    private emptyModifierNameErrorSelector = "//label[@class='control-label error-label']";
    private modifierNameSelector = "//input[@name='name']";
    private firstRowValueSelector = '//td[@class="truncate-td"]';
    private firstRowWithValue = '//table[contains(@class,"table")]//tbody//tr[1]';
    private editButtonSelector = '//table[contains(@class,"table")]//tbody//tr[1]//button[1]';
    private selectCheckBoxSelector = '//tbody[1]//tr[1]//td[2]//label[1]//span';
    private titleEditProductSelector = '//div[contains(@class,"App")]//h1';
    private searchButtonSelector = '//i[contains(@class,"a_icon-search")]';
    private searchFieldSelector = '//input[contains(@placeholder,"Search Add-on Groups")]';
    private clearAllSelector = "//button[@class='btn btn-secondary btn-xs']";
    private selectDeleteSelector = '//tbody[1]//tr[1]//td[5]//button[2]//div[1]';
    private selectDeleteConfirmationSelector = "//button[@class='btn btn-primary']";
    private secondRowValueSelector = '//tbody[2]//tr[1]//td[4]';

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get titleCreateAnModifier(): string {
        $(this.titleCreateNewModifierSelector).waitForVisible();
        return $(this.titleCreateNewModifierSelector).getText();
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

    get emptyModifierNameErrorMessage(): string {
        $(this.emptyModifierNameErrorSelector).waitForVisible();
        return $(this.emptyModifierNameErrorSelector).getText();
    }

    get modifierName() {
        $(this.modifierNameSelector).waitForVisible();
        return $(this.modifierNameSelector);
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

    public clickCreateNewModifierButton(): void {
        this.selectCreateNewButton;
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public clickEditButton(): void {
        this.selectEditButton;
    }

    public setModifierName(modifierName: string): void {
        this.modifierName.setValue(modifierName);
    }

    public setEditedModifierName(updatedModifierName: string): void {
        this.modifierName.setValue(updatedModifierName);
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

    public createAnModifier(modifierName: string): void {
        this.setModifierName(modifierName);
        this.clickSaveButton();
    }

    public clickEditModifierButton() {
        this.clickFirstProductCheckBox;
        this.clickEditButton();
    }

    public editModifier(updatedModifierName: string): void {
        this.setEditedModifierName(updatedModifierName);
        this.clickSaveButton();
    }

    public searchAnModifier(searchField: string): void {
        this.setSearchTerm(searchField);
        this.clickSearchButton();
    }

    public deleteModifier(): void {
        this.clickFirstProductCheckBox;
        this.clickDeleteButton;
        this.clickDeleteConfirmation;
    }

}
