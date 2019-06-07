import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { DashboardPage } from '../dashboard/dashboard.page';

export class Welcomepage extends BasePage {

    private titleSelector = '//h2[contains(text(),"Welcome to your BackOffice")]';
    private clickTenantDropDownSelector = '//div[@class="custom-select__control css-yk16xz-control"]';
    private selectFirstTenantSelector = '//div[contains(text(),"T Avenue")]';
    private continueButtonSeletor = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/button[1]';

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }

    get selectTenantDropDown() {
        $(this.clickTenantDropDownSelector).waitForVisible();
        return $(this.clickTenantDropDownSelector);
    }

    get selectFirstTenant() {
        $(this.selectFirstTenantSelector).waitForVisible();
        return $(this.selectFirstTenantSelector);
    }

    get selectContinueButton() {
        $(this.continueButtonSeletor).waitForVisible();
        return $(this.continueButtonSeletor);
    }

    public navigate(): void {
        super.open('');
    }

    public selectATenant() : DashboardPage {
        this.selectTenantDropDown.click();
        this.selectFirstTenant.click();
        this.selectContinueButton.click();
        return new DashboardPage();
    }
}
