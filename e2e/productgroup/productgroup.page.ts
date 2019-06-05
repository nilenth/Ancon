import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class ProductGroupPage extends BasePage {

    private titleSelector = '//h1[contains(text(),"Product Groups")]';
    private selectCreateNewSelector = '//button[@class="btn btn-primary create"]';
    private createNewPopUpSelector = '//h5[@class="modal-title"]';
    private productNameSelector = '//input[@name="name"]';
    private selectGroupTaxSelector = '//div[@class="css-vj8t7z custom-select__control"]';
    private productCostSelector = '//input[@name="outletProductGroupSettings.0.costCenter"]';
    private productAccountSelector = '//input[@name="outletProductGroupSettings.0.accountNumber"]';
    private selectSaveButtonSelector = '//span[contains(text(),"Save")]';
    private firstRawValueSelector = '//td[@class="truncate-td"]';
    private clickFirstCheckboxSelector = '//tbody[1]//tr[1]';
    private clickEditSelector = '//*[@id="root"]/div/div[1]/div/div[2]/div/div/div/div[2]/div[3]/div[1]/table/tbody[1]/tr/td[5]/button[1]/div/i';
    private clickMainDeleteSelector = '//body//thead//button[2]';

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get selectCreateNewButton() {
        $(this.selectCreateNewSelector).waitForVisible();
        return $(this.selectCreateNewSelector).click();
    }

    get popupTitle(): string {
        $(this.createNewPopUpSelector).waitForVisible();
        browser.pause(3000);
        return $(this.createNewPopUpSelector).getText();
    }

    get inputProductName() : Client<RawResult<Element>> {
        return $(this.productNameSelector);
    }

    get clickGroupTaxDropdown() {
        $(this.selectGroupTaxSelector).waitForVisible();
        return $(this.selectGroupTaxSelector).click();
    }

    get inputProductCost() : Client<RawResult<Element>> {
        return $(this.productCostSelector);
    }

    get inputProductAccount() : Client<RawResult<Element>> {
        return $(this.productAccountSelector);
    }

    get selectSaveButton() {
        $(this.selectSaveButtonSelector).waitForVisible();
        return $(this.selectSaveButtonSelector).click();
    }

    get prodGroupFirstRawValue() : string {
        $(this.firstRawValueSelector).waitForVisible();
        return $(this.firstRawValueSelector).getText();
    }

    get clickFirstCheckbox() {
        $(this.clickFirstCheckboxSelector).waitForVisible();
        return $(this.clickFirstCheckboxSelector).click();
    }

    get clickEditIcon() {
        $(this.clickEditSelector).waitForVisible();
        return $(this.clickEditSelector).click();
    }

    get clickMainDeleteButton() {
        $(this.clickMainDeleteSelector).waitForVisible();
        return $(this.clickMainDeleteSelector).click();
    }

    public clickCreateNewButton(): void {
        this.selectCreateNewButton;
    }

    public inputProdName(prodGroupName : string): void {
        this.inputProductName.setValue(prodGroupName);
    }

    public selectGroupTax(): void {
        this.clickGroupTaxDropdown;
        browser.keys(['Meta', '1']);
        browser.pause(2000);
        this.enter();
    }

    public inputProdCost(prodGroupCost : string): void {
        this.inputProductCost.setValue(prodGroupCost);
    }

    public inputProdAccount(prodGroupAccount : string): void {
        this.inputProductAccount.setValue(prodGroupAccount);
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public selectEditButton(): void {
        this.clickFirstCheckbox;
        this.clickEditIcon;
    }

    public deleteARecord(): void {
        this.clickMainDeleteButton;
    //
    }
}
