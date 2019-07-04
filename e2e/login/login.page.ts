import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { Welcomepage } from '../welcome/welcome.page';

export class LoginPage extends BasePage {

    private emailSelector = '//input[@id="Username"]';
    private passwordSelector = '//input[@id="password"]';
    private loginButtonSelector = '//button[@value="login"]';
    private errorSelector = '//div[@class="danger validation-summary-errors"]';

    get email() { return $(this.emailSelector); }

    get password() { return browser.$(this.passwordSelector); }

    get loginButton() { return $(this.loginButtonSelector); }

    get error(): string {
        $(this.errorSelector).waitForVisible();
        return $(this.errorSelector).getText();
    }

    navigate() {
        browser.windowHandleMaximize();
        browser.url('');
    }

    public loginWithValidCredentials(email: string, password: string): Welcomepage {
        this.login(email, password);
        return new Welcomepage();
    }

    public loginWithInvalidCredentials(email: string, password: string): void {
        this.login(email, password);
    }

    private setEmail(email: string): void {
        this.email.setValue(email);
    }

    private setPassword(password: string): void {
        this.password.setValue(password);
    }

    private login(email: string, password: string): void {
        browser.waitForVisible(this.emailSelector);
        this.setEmail(email);
        this.setPassword(password);
        this.loginButton.click();
    }
}
