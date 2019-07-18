import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { ProductGroupPage } from '../productgroup/productgroup.page';

export class TaxPage extends BasePage {

    private titleSelector = '//h1[contains(text(),"Accounting")]';
    private selectCreateNewSelector = '//span[@class="web"]';
    private titleCreateNewTaxSelector = '//div[@class="modal-header"]';
    private selectTaxTypeSelector = '//div[@class="custom-select__indicator custom-select__dropdown-indicator css-tlfecz-indicatorContainer"]';
    private saveButtonSelector = '//button[contains(@class,"Buttons_btn__3MjdI Buttons_btn-primary__22NL0 btn btn-primary")]';
    private inputAccountNumberSelector = '//input[@name="outletTaxSettings.0.accountNumber"]';
    private inputRateAmountSelector = '//input[@name="rate"]';
    private firstRowValueSelector = '//tbody[1]//tr[1]//td[5]';
    private clickFirstCheckboxSelector = '//tbody[1]//tr[1]';
    private editButtonSelector = '//*[@id="root"]/div/div[1]/div/div[2]/div/div/div/div[2]/div[3]/div[1]/table/tbody[1]/tr/td[7]/button[1]/div/i';
    private clickMainDeleteIconSelector = '//table[1]/thead[1]/tr[1]/th[3]/div[1]/button[2]/i[1]';
    private clickYesDeletePopupSelector = '//button[@class="btn btn-primary"]';
    private secondRowValueSelector = '//tbody[2]/tr[1]/td[5]';
    private productGroupTabSelector = '//a[contains(text(),"Product Groups")]';
    private searchFieldSelector = '//input[@placeholder="Search TAX"]';
    private searchButtonSelector = '//i[@class="a_icon-search"]';
    private removeSearchFilter = '//span[@class="a_icon-close"]';

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

    get saveButton(): Client<RawResult<Element>> {
        $(this.saveButtonSelector).waitForVisible();
        return $(this.saveButtonSelector);
    }

    get inputRateAmount(): Client<RawResult<Element>> {
        $(this.saveButtonSelector).waitForVisible();
        return $(this.inputRateAmountSelector);
    }

    get inputAccountNumber(): Client<RawResult<Element>> {
        $(this.inputAccountNumberSelector).waitForVisible();
        return $(this.inputAccountNumberSelector);
    }

    get firstRowValue(): string {
        $(this.firstRowValueSelector).waitForVisible();
        browser.pause(2000);
        return $(this.firstRowValueSelector).getText();
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

    get secondRowValue(): string {
        $(this.secondRowValueSelector).waitForVisible();
        return $(this.secondRowValueSelector).getText();
    }

    get selectProductGroupTab() {
        $(this.productGroupTabSelector).waitForVisible();
        return $(this.productGroupTabSelector).click();
    }

    get searchTerm() {
        $(this.searchFieldSelector).waitForVisible();
        return $(this.searchFieldSelector);
    }

    get selectSearchButton() {
        $(this.searchButtonSelector).waitForVisible();
        return $(this.searchButtonSelector).click();
    }

    get clickClearAll() {
        $(this.removeSearchFilter).waitForVisible();
        return $(this.removeSearchFilter).click();
    }

    public clickCreateNewButton(): void {
        this.selectCreateNewButton;
    }

    public selectATaxType(): void {
        this.clickTaxTypDropdown;
        browser.keys(['Meta', 'VAT']);
        this.enter();
    }

    public inputRateDetails(rateAmount: number): void {
        this.inputRateAmount.clearElement();
        this.inputRateAmount.setValue(rateAmount);
    }

    public inputAccountDetails(accountNumber: number): void {
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
        this.clickFirstCheckbox;
        this.clickMainDeleteIcon;
        this.clickYesDeletePopup;
        browser.pause(2000);
    }

    public setSearchTerm(searchTerm: number): void {
        this.searchTerm.setValue(searchTerm);
    }

    public clickProductGroupTab(): ProductGroupPage {
        this.selectProductGroupTab;
        return new ProductGroupPage();
    }

    public clickSearchButton(): void {
        this.selectSearchButton;
    }

    public removeFilter(): void {
        this.clickClearAll;
    }

    public createTax(rateValue: number, accountValue: number): void {
        this.selectATaxType();
        this.inputRateDetails(rateValue);
        this.inputAccountDetails(accountValue);
    }

    public editTax(rateEditedValue: number): void {
        this.selectEditButton();
        this.inputRateDetails(rateEditedValue);
        this.clickSaveButton();
    }

    public searchTax(searchField: number): void {
        this.setSearchTerm(searchField);
        this.clickSearchButton();
    }
}
