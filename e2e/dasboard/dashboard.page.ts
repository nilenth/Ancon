import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { HardwarePage } from '../hardware/hardware.page';
import { TaxPage } from '../tax/tax.page';

export class DashboardPage extends BasePage {

    private titleSelector = '//h1[contains(text(),"Tenant Dashboard")]';
    private clickHardwareSelector = '//span[contains(text(),"Hardware")]';
    private clickAccountingSelector = '//span[contains(text(),"Accounting")]';

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

    public clickHardwareButton(): HardwarePage {
        this.clickHardware.click();
        return new HardwarePage();
    }

    public clickAccountingButton(): TaxPage {
        this.clickAccounting.click();
        return new TaxPage();
    }
}
