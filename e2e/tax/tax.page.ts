import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { ProductGroupPage } from '../productgroup/productgroup.page';

export class TaxPage extends BasePage {

    private titleSelector = '//h1[contains(text(),"Accounting")]';
    private selectCreateNewSelector = '//span[@class="web"]';
    private titleCreateNewTaxSelector = '//div[@class="modal-header"]';
    private selectTaxTypeSelector = '//div[@class="css-vj8t7z custom-select__control"]';
    private saveButtonSelector = '//button[contains(@class,"Buttons_btn__3MjdI Buttons_btn-primary__22NL0 btn btn-primary")]';
    private inputAccountNumberSelector = '//input[@name="outletTaxSettings.0.accountNumber"]';
    private inputRateAmountSelector = '//input[@name="rate"]';
    private firstRawValueSelector = '//tbody[1]//tr[1]//td[5]';
    private clickFirstCheckboxSelector = '//tbody[1]//tr[1]';
    private editButtonSelector = '//*[@id="root"]/div/div[1]/div/div[2]/div/div/div/div[2]/div[3]/div[1]/table/tbody[1]/tr/td[7]/button[1]/div/i';
    private clickMainDeleteIconSelector = '//body//thead//button[2]';
    private clickYesDeletePopupSelector = '//button[@class="btn btn-primary"]';
    private secondRawValueSelector = '//*[@id="root"]/div/div[1]/div/div[2]/div/div/div/div[2]/div[3]/div[1]/table/tbody[2]/tr/td[5]';
    private productGroupTabSelector = '//a[contains(text(),"Product Groups")]';

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get selectCreateNewButton() {
        $(this.selectCreateNewSelector).waitForVisible();
        return $(this.selectCreateNewSelector).click();
    }

    get titleCreateNewTax(): string {
        $(this.titleCreateNewTaxSelector).waitForVisible();
        return $(this.titleCreateNewTaxSelector).getText();
    }

    get clickTaxTypDropdown() {
        $(this.selectTaxTypeSelector).waitForVisible();
        return $(this.selectTaxTypeSelector).click();
    }

    get saveButton() : Client<RawResult<Element>> {
        $(this.saveButtonSelector).waitForVisible();
        return $(this.saveButtonSelector);
    }

    get inputRateAmount() : Client<RawResult<Element>> {
        return $(this.inputRateAmountSelector);
    }

    get inputAccountNumber() : Client<RawResult<Element>> {
        $(this.inputAccountNumberSelector).waitForVisible();
        return $(this.inputAccountNumberSelector);
    }

    get firstRawValue() : string {
        $(this.firstRawValueSelector).waitForVisible();
        return $(this.firstRawValueSelector).getText();
    }

    get clickEditButton() {
        $(this.editButtonSelector).waitForVisible();
        return $(this.editButtonSelector).click();
    }

    get clickFirstCheckbox() {
        $(this.clickFirstCheckboxSelector).waitForVisible();
        return $(this.clickFirstCheckboxSelector).click();
    }

    get clickMainDeleteIcon() {
        $(this.clickMainDeleteIconSelector).waitForVisible();
        return $(this.clickMainDeleteIconSelector).click();
    }

    get clickYesDeletePopup() {
        $(this.clickYesDeletePopupSelector).waitForVisible();
        return $(this.clickYesDeletePopupSelector).click();
    }

    get secondRawValue() : string {
        $(this.secondRawValueSelector).waitForVisible();
        return $(this.secondRawValueSelector).getText();
    }

    get selectProductGroupTab() {
        $(this.productGroupTabSelector).waitForVisible();
        return $(this.productGroupTabSelector).click();
    }

    public clickCreateNewButton(): void {
        this.selectCreateNewButton;
    }

    public selectATaxType(): void {
        this.clickTaxTypDropdown;
        browser.keys(['Meta', 'VAT']);
        this.enter();
    }

    public inputRateDetails(rateAmount : string): void {
        this.inputRateAmount.setValue(rateAmount);
    }

    public inputAccountDetails(accountNumber : string): void {
        this.inputAccountNumber.setValue(accountNumber);
        this.saveButton.click();
        browser.pause(2000);
    }

    public clickSaveButton(): void {
        this.saveButton.click();
    }

    public selectEditButton(): void {
        this.clickFirstCheckbox;
        this.clickEditButton;
    }

    public selectFirstCheckbox(): void {
        this.clickFirstCheckbox;
    }

    public deleteARecord(): void {
        this.clickMainDeleteIcon;
        this.clickYesDeletePopup;
        browser.pause(2000);
    }

    public clickProductGroupTab(): ProductGroupPage {
        this.selectProductGroupTab;
        return new ProductGroupPage();
    }
}
