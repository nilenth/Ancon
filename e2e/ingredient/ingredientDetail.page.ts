import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class IngredientDetailPage extends BasePage {
    private titleCreateNewIngredientSelector = "//h1[@class='PageHeader_lgWidthMobile__2M7Ni']";
    private saveButtonSelector = "//button[text()='Save']";
    private emptyIngredientNameErrorSelector = "//label[@class='control-label error-label']";
    private ingredientNameSelector = "//input[@name='name']";

    private priceSelector = '//input[@name="price"]';

    get titleCreateAnIngredient(): string {
        $(this.titleCreateNewIngredientSelector).waitForVisible();
        return $(this.titleCreateNewIngredientSelector).getText();
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

    get selectSaveButton() {
        $(this.saveButtonSelector).waitForVisible();
        $(this.saveButtonSelector).waitForEnabled();
        return $(this.saveButtonSelector).click();
    }

    public setIngredientName(ingredientName: string): void {
        this.ingredientName.setValue(ingredientName);
    }

    public setEditedIngredientName(updatedIngredientName: string): void {
        this.ingredientName.setValue(updatedIngredientName);
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public setPrice(price: string): void {
        this.price.setValue(price);
    }

    public setEditedIngredientPrice(updatedPrice: string): void {
        this.price.setValue(updatedPrice);
    }

    public createAnIngredient(ingredientName: string, price: string): void {
        this.setIngredientName(ingredientName);
        this.setPrice(price);
        this.clickSaveButton();
    }

    public editIngredient(updatedIngredientName: string, updatedPrice: string): void {
        this.setEditedIngredientName(updatedIngredientName);
        this.setEditedIngredientPrice(updatedPrice);
        this.clickSaveButton();
    }
}
