import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { IngredientPage } from '../ingredient/ingredient.page';
import { AddOnPage } from '../addOn/addOn.page';
import { ModifierPage } from '../modifier/modifier.page';
import { MenuGroupDetailPage } from '../menuGroup/MenuGroupDetail.Page';

export class MenuGroupPage extends BasePage {

    private titleSelector = '//div[@class="tab-title"]/h1';
    private saveButtonSelector = '//button[contains(text(),"Save")]';
    private editButtonSelector = '(//div[contains(text(),"mediterranean")])[last()]/following::div[1]/div[4]';
    private selectCreateGroupSelector = '//button[@class="margin-bottom-sm btn btn-secondary"]';
    private lastRowValueSelector = "(//div[contains(text(),'mediterranean')])[last()]";
    private toastValueSelector = "//div[@class='Toastify__toast-body ancon-toast-body']";

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get selectCreateGroupButton() {
        $(this.selectCreateGroupSelector).waitForVisible();
        return $(this.selectCreateGroupSelector).click();
    }

    get lastRowValue(): string {
        browser.waitForVisible(this.lastRowValueSelector);
        return $(this.lastRowValueSelector).getText().substr(1);
    }

    get selectSaveButton() {
        $(this.saveButtonSelector).waitForEnabled();
        return $(this.saveButtonSelector).click();
    }

    get selectEditButton() {
        $(this.editButtonSelector).waitForEnabled();
        return $(this.editButtonSelector).click();
    }

    get toastSuccessMessage(): string {
        browser.waitForVisible(this.toastValueSelector);
        return $(this.toastValueSelector).getText();
    }

    public clickCreateNewGroupButton(): void {
        this.selectCreateGroupButton;
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public clickEditButton(): void {
        this.selectEditButton;
    }

}
