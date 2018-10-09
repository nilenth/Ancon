export default class BasePage {
    protected open(path): void {
        browser.windowHandleMaximize();
        browser.url(path);
    }

    protected enter(): void {
        browser.keys('\uE007');
    }
}
