import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class LoginPage extends BasePage {

    private emailSelector = 'input[name=email]';
    private passwordSelector = 'input[name=password]';
    private loginButtonSelector = '.btn-default*=LOG';
    private errorMessageSelector = '#errorMessage';
    private titleSelector = 'h2';

    get email() : Client<RawResult<Element>> {
        return browser.$(this.emailSelector);
    }

    get password() : Client<RawResult<Element>> {
        return browser.$(this.passwordSelector);
    }

    get loginButton() :  Client<RawResult<Element>> {
        return browser.$(this.loginButtonSelector);
    }

    get title(): string {
        return browser.getText(this.titleSelector);
    }

    public navigate(): void {
        super.open('login');
    }

    public loginWithValidCredentials(email: string, password: string): void {
        this.login(email, password);
    }

    public getLoginErrorMessage(): string {
        browser.waitForVisible(this.errorMessageSelector, 10000);
        return browser.getText(this.errorMessageSelector);
    }

    private setEmail(email: string): void {
        this.email.setValue(email);
    }

    private setPassword(password: string): void {
        this.password.setValue(password);
    }

    private login(email: string, password: string): void {
        this.setEmail(email);
        this.setPassword(password);
        this.loginButton.click();
    }
}
