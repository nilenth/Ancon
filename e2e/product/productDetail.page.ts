import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class ProductDetailPage extends BasePage {
    private titleCreateNewClientSelector = '//h1[@class="PageHeader_lgWidthMobile__2M7Ni"]';
    private saveButtonSelector = '//button[text()="Save"]';
    private emptyProductNameErrorSelector = '//label[@for="name"]';
    private emptyProductGroupErrorSelector = '//label[@for="productGroup"]';
    private productNameSelector = '//input[@name="name"]';
    private clickProductGroupSelector = '//div[@class="custom-select__value-container custom-select__value-container--has-value css-1hwfws3"]';
    private clickFirstProductGroupSelector = '//div[@class="custom-select__option custom-select__option--is-focused css-1n7v3ny-option"]';
    private productInfoSelector = '//textarea[@name="description"]';
    private priceSelector = '//input[@name="defaultVariant.variantPrice.unitPrice"]';
    private titleEditProductSelector = '//h1[@class="PageHeader_lgWidthMobile__2M7Ni"]';

    get titleEditClient(): string {
        $(this.titleEditProductSelector).waitForVisible();
        return $(this.titleEditProductSelector).getText();
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

    public setProductName(productName: string): void {
        this.productName.setValue(productName);
    }

    public setEditedProductName(updatedProductName: string): void {
        this.productName.setValue(updatedProductName);
    }

    public setProductInfo(productInfo: string): void {
        this.productInfo.setValue(productInfo);
    }

    public setPrice(price: string): void {
        this.price.setValue(price);
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public selectProductGroup(): void {
        this.clickProductGroup;
        this.clickFirstProductGroup;
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
}
