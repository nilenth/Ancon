import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class AddOnDetailPage extends BasePage {

    private titleCreateNewAddOnSelector = "//h1[@class='PageHeader_lgWidthMobile__2M7Ni']";
    private saveButtonSelector = "//button[text()='Save']";
    private emptyAddOnNameErrorSelector = "//label[@class='control-label error-label']";
    private addAddOnButtonSelector = '//button[contains(text(),"Add Add-on")]';
    private dropDownSelector = '//div[contains(@class,"custom-select__indicators")]';
    private addOnIngredientNameSelector = '//div[@class="col"]//input[@name="name"]';
    private createNewIngredientSelector = '//button[contains(text(),"Create New")]';
    private addOnIngredientPriceSelector = '//input[@name="price"]';
    private createAndAddButtonSelector = '//button[contains(text(),"Create & Add")]';
    private okButtonSelector = '//button[contains(text(),"Ok")]';
    private multiValueLabel = '//div[contains(@class,"custom-select__multi-value__label")]';
    private addOnGroupNameSelector = "//input[@name='name']";
    private addOnValueSelector = '//h2[@class="inline-block"]';

    get titleCreateAnAddOn(): string {
        $(this.titleCreateNewAddOnSelector).waitForVisible();
        return $(this.titleCreateNewAddOnSelector).getText();
    }

    get selectSaveButton() {
        $(this.saveButtonSelector).waitForVisible();
        $(this.saveButtonSelector).waitForEnabled();
        return $(this.saveButtonSelector).click();
    }

    get emptyAddOnNameErrorMessage(): string {
        $(this.emptyAddOnNameErrorSelector).waitForVisible();
        return $(this.emptyAddOnNameErrorSelector).getText();
    }

    get selectAddAddOnButton() {
        $(this.addAddOnButtonSelector).waitForVisible();
        $(this.addAddOnButtonSelector).waitForEnabled();
        return $(this.addAddOnButtonSelector).click();
    }

    get selectDropDown() {
        $(this.dropDownSelector).waitForVisible();
        return $(this.dropDownSelector).click();
    }

    get selectCreateNewIngredient() {
        $(this.createNewIngredientSelector).waitForVisible();
        return $(this.createNewIngredientSelector).click();
    }

    get addOnIngredientName() {
        $(this.addOnIngredientNameSelector).waitForVisible();
        return $(this.addOnIngredientNameSelector);
    }

    get addOnIngredientPrice() {
        $(this.addOnIngredientPriceSelector).waitForVisible();
        return $(this.addOnIngredientPriceSelector);
    }

    get selectCreateAndAdd() {
        $(this.createAndAddButtonSelector).waitForVisible();
        return $(this.createAndAddButtonSelector).click();
    }

    get selectOk() {
        $(this.multiValueLabel).waitForVisible();
        $(this.okButtonSelector).waitForVisible();
        $(this.okButtonSelector).waitForEnabled();
        return $(this.okButtonSelector).click();
    }

    get addOnGroupName() {
        $(this.addOnGroupNameSelector).waitForVisible();
        return $(this.addOnGroupNameSelector);
    }

    get addOnValue(): string {
        $(this.addOnValueSelector).waitForVisible();
        return $(this.addOnValueSelector).getText();
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public clickAddAddOn(): void {
        this.selectAddAddOnButton;
    }

    public clickDropDown(): void {
        this.selectDropDown;
    }

    public clickCreateNewIngredient(): void {
        this.selectCreateNewIngredient;
    }

    public addAddOnIngredient(ingredientName: string): void {
        this.addOnIngredientName.setValue(ingredientName);
    }

    public addAddOnIngredientPrice(ingredientPrice: string): void {
        this.addOnIngredientPrice.setValue(ingredientPrice);
    }

    public clickCreateAndAdd(): void {
        this.selectCreateAndAdd;
    }

    public clickOk(): void {
        this.selectOk;
    }

    public createAnAddOn(ingredientName: string, ingredientPrice: string): void {
        this.clickAddAddOn();
        this.clickDropDown();
        this.clickCreateNewIngredient();
        this.addAddOnIngredient(ingredientName);
        this.addAddOnIngredientPrice(ingredientPrice);
        this.clickCreateAndAdd();
        this.clickOk();
    }

    public setAddOnGroupName(addOnName: string): void {
        this.addOnGroupName.setValue(addOnName);
    }

    public setEditedAddOnGroupName(updatedAddOnName: string): void {
        this.addOnGroupName.setValue(updatedAddOnName);
    }

    public createAnAddOnGroup(addOnName: string): void {
        this.setAddOnGroupName(addOnName);
        this.clickSaveButton();
    }

    public editAddOnGroup(updatedAddOnName: string): void {
        this.setEditedAddOnGroupName(updatedAddOnName);
        this.clickSaveButton();
    }

}
