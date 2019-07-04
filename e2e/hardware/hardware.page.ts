import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class HardwarePage extends BasePage {

    private titleSelector = '//h1[contains(text(),"Client / Hardware")]';
    private selectCreateNewSelector = '//button[@class="btn btn-primary btn-right"]';
    private titleCreateNewClientSelector = '//h5[@class="modal-title"]';
    private saveButtonSelector = '//button[@type="submit"]';
    private emptyNameErrorSelector = '//label[@class="control-label error-label"]';
    private clientNameSelector = '//input[@name="name"]';
    private firstRawValueSelector = '//tbody[1]//tr[1]//td[4]';
    private toggleSelector = '//div[contains(@class,"modal-body")]//button[1]';
    private connectionTextSelector = '//strong[contains(text(),"Connection")]';
    private portNumberSelector = '//input[@name="comPort"]';
    private clickSam4sRadioButtonSelector = '//div[@class="flex-column row"]//div[1]//label[1]//span[1]';
    private ipAddressRadioButtonSelector = '//p[contains(text(),"IP")]/ancestor::label';
    private ipAddressSelector = '//input[@name="host"]';
    private clickCustomPortRadioButtonSelector = '//p[contains(text(),"Custom Port Settings")]';
    private portSelector = '//input[@name="port"]';
    private baudRateSelector = '//strong[contains(text(),"Serial Baud Rate *")]/ancestor::div[1]/div';
    private clickFirstBaudRateSelector = '//*[contains(text(),"75")]';
    private serialDatabitSelector = '//strong[contains(text(),"Serial Databits *")]/ancestor::div[1]/div';
    private clickFirstDatabitSelector = '//*[contains(text(),"4")]';
    private firstRawWithValue = '//tbody[1]//tr[1]//td[contains(text(),"XXX")]';

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get titleCreateNewClient(): string {
        $(this.titleCreateNewClientSelector).waitForVisible();
        return $(this.titleCreateNewClientSelector).getText();
    }

    get emptyNameErrorMessage(): string {
        $(this.emptyNameErrorSelector).waitForVisible();
        return $(this.emptyNameErrorSelector).getText();
    }

    get selectCreateNewButton() {
        $(this.selectCreateNewSelector).waitForVisible();
        return $(this.selectCreateNewSelector).click();
    }

    get selectSaveButton() {
        $(this.saveButtonSelector).waitForVisible();
        return $(this.saveButtonSelector).click();
    }

    get clientName() {
        $(this.clientNameSelector).waitForVisible();
        return $(this.clientNameSelector);
    }

    get firstRawValue(): string {
        browser.waitForVisible(this.firstRawWithValue);
        $(this.firstRawValueSelector).waitForVisible();
        return $(this.firstRawValueSelector).getText();
    }

    get toggleOn() {
        $(this.toggleSelector).waitForVisible();
        return $(this.toggleSelector).click();
    }

    get connectionText(): string {
        $(this.connectionTextSelector).waitForVisible();
        return $(this.connectionTextSelector).getText();
    }

    get portNumber() {
        $(this.portNumberSelector).waitForVisible();
        return $(this.portNumberSelector);
    }

    get clickSam4sRadioButton() {
        $(this.clickSam4sRadioButtonSelector).waitForVisible();
        return $(this.clickSam4sRadioButtonSelector).click();
    }

    get clickCustomPortRadioButton() {
        $(this.clickCustomPortRadioButtonSelector).waitForVisible();
        return $(this.clickCustomPortRadioButtonSelector).click();
    }

    get clickIPRadioButton() {
        $(this.ipAddressRadioButtonSelector).waitForVisible();
        return $(this.ipAddressRadioButtonSelector).click();
    }

    get ipAddress() {
        $(this.ipAddressSelector).waitForVisible();
        return $(this.ipAddressSelector);
    }

    get port() {
        $(this.portSelector).waitForVisible();
        return $(this.portSelector);
    }

    get clickbaudRate() {
        $(this.baudRateSelector).waitForVisible();
        return $(this.baudRateSelector).click();
    }

    get clickFirstBaudRate() {
        $(this.clickFirstBaudRateSelector).waitForVisible();
        return $(this.clickFirstBaudRateSelector).click();
    }

    get clickDatabit() {
        $(this.serialDatabitSelector).waitForVisible();
        return $(this.serialDatabitSelector).click();
    }

    get clickFirstDatabit() {
        $(this.clickFirstDatabitSelector).waitForVisible();
        return $(this.clickFirstDatabitSelector).click();
    }

    public clickCreateNewButton(): void {
        this.selectCreateNewButton;
    }

    public clickSaveNewButton(): void {
        this.selectSaveButton;
    }

    public setClientName(clientName: string): void {
        this.clientName.setValue(clientName);
    }

    public createAClientWithoutAPrinter(clientName: string): void {
        this.setClientName(clientName);
        this.clickSaveNewButton();
    }

    public printerToggleActivate(): void {
        this.toggleOn;
    }

    public setPortNumber(portNumber: string): void {
        this.portNumber.setValue(portNumber);
    }

    public selectSam4RadioButton(): void {
        this.clickSam4sRadioButton;
    }

    public selectIPRadioButton(): void {
        this.clickIPRadioButton;
    }

    public selectCustomPort(): void {
        this.clickCustomPortRadioButton;
    }

    public setIpAddress(ipAddress: string): void {
        this.ipAddress.setValue(ipAddress);
    }

    public setPort(port): void {
        this.port.setValue(port);
    }

    public selectbaudRate(): void {
        this.clickbaudRate;
    }

    public selectFirstBaudRate(): void {
        this.clickFirstBaudRate;
    }

    public selectDatabit(): void {
        this.clickDatabit;
    }

    public selectFirstDatabit(): void {
        this.clickFirstDatabit;
    }

    public createAClientWithAPrinterAndAComPortAndSam(clientName: string, portNumber: string): void {
        this.setClientName(clientName);
        this.setPortNumber(portNumber);
        this.selectSam4RadioButton();
        this.clickSaveNewButton();
    }

    public createAClientWithAPrinterAndIPAndSam(clientName: string, ipAddress: string): void {
        this.setClientName(clientName);
        this.printerToggleActivate();
        this.selectIPRadioButton();
        this.setIpAddress(ipAddress);
        this.selectSam4RadioButton();
        this.clickSaveNewButton();
    }

    public createAClientWithAPrinterAndIPAndCustomPort(clientName: string, ipAddress: string, port: string): void {
        this.setClientName(clientName);
        this.printerToggleActivate();
        this.selectIPRadioButton();
        this.setIpAddress(ipAddress);
        this.selectCustomPort();
        this.setPort(port);
        this.clickSaveNewButton();
    }

    public createAClientWithAPrinterAndCustomPrinter(clientName: string, portNumber: string): void {
        this.setClientName(clientName);
        this.printerToggleActivate();
        this.setPortNumber(portNumber);
        this.selectbaudRate();
        this.selectFirstBaudRate();
        this.selectDatabit();
        this.selectFirstDatabit();
        this.clickSaveNewButton();
    }
}
