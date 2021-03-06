import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { HardwarePage } from '../hardware/hardware.page';
import { TaxPage } from '../tax/tax.page';
import { ProductPage } from '../product/product.page';
import { SettingPage } from '../setting/setting.page';

export class DashboardPage extends BasePage {

    private titleSelector = '//h1[contains(text(),"Tenant Dashboard")]';
    private clickHardwareSelector = '//span[contains(text(),"Hardware")]';
    private clickAccountingSelector = '//span[contains(text(),"Accounting")]';
    private clickProductSelector = '//span[contains(text(),"Products")]';
    private clickSettingSelector = '//span[contains(text(),"Settings")]';

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get clickHardware() {
        $(this.clickHardwareSelector).waitForVisible();
        return browser.$(this.clickHardwareSelector);
    }

    get clickAccounting() {
        $(this.clickAccountingSelector).waitForVisible();
        return browser.$(this.clickAccountingSelector);
    }

    get clickProduct() {
        $(this.clickProductSelector).waitForVisible();
        return browser.$(this.clickProductSelector);
    }

    get clickSetting() {
        $(this.clickSettingSelector).waitForVisible();
        return browser.$(this.clickSettingSelector);
    }

    public clickHardwareButton(): HardwarePage {
        this.clickHardware.click();
        return new HardwarePage();
    }

    public clickAccountingButton(): TaxPage {
        this.clickAccounting.click();
        return new TaxPage();
    }

    public clickProductButton(): ProductPage {
        this.clickProduct.click();
        return new ProductPage();
    }

    public clickSettingButton(): SettingPage {
        this.clickSetting.click();
        return new SettingPage();
    }
}
