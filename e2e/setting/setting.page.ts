import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class SettingPage extends BasePage {

    private titleSelector = '//div[@class="App"]//h1';

    get title(): string {
        $(this.titleSelector).waitForVisible();
        return $(this.titleSelector).getText();
    }
}
