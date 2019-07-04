import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';

export class ModifierDetailPage extends BasePage {

    private titleCreateNewModifierSelector = "//h1[@class='PageHeader_lgWidthMobile__2M7Ni']";
    private selectCreateNewSelector = "//button[@class='btn btn-primary create']";
    private saveButtonSelector = "//button[@type='submit' and text()='Save']";
    private emptyModifierNameErrorSelector = "//label[@class='control-label error-label']";
    private modifierNameSelector = "//input[@name='name']";
    private applicableMenuGroupSelector = "//span[contains(@class,'ApplicableMenuGroup_checkmark')]";
    private withOrWithoutToggleSelector = "//div[contains(@class,'section-row row')]//button[contains(@class,'btn btn-primary active')]";
    private titleEditModifierSelector = '//div[contains(@class,"App")]//h1';

    get titleCreateAnModifier(): string {
        $(this.titleCreateNewModifierSelector).waitForVisible();
        return $(this.titleCreateNewModifierSelector).getText();
    }

    get selectCreateNewButton() {
        $(this.selectCreateNewSelector).waitForVisible();
        return $(this.selectCreateNewSelector).click();
    }

    get selectSaveButton() {
        $(this.saveButtonSelector).waitForVisible();
        $(this.saveButtonSelector).waitForEnabled();
        return $(this.saveButtonSelector).click();
    }

    get emptyModifierNameErrorMessage(): string {
        $(this.emptyModifierNameErrorSelector).waitForVisible();
        return $(this.emptyModifierNameErrorSelector).getText();
    }

    get modifierName() {
        $(this.modifierNameSelector).waitForVisible();
        return $(this.modifierNameSelector);
    }

    get selectApplicableMenuGroup() {
        $(this.applicableMenuGroupSelector).waitForVisible();
        return $(this.applicableMenuGroupSelector).click();
    }

    get selectWithOrWithoutToggle() {
        $(this.withOrWithoutToggleSelector).waitForVisible();
        return $(this.withOrWithoutToggleSelector).click();
    }

    public clickSaveButton(): void {
        this.selectSaveButton;
    }

    public setModifierName(modifierName: string): void {
        this.modifierName.setValue(modifierName);
    }

    public setEditedModifierName(updatedModifierName: string): void {
        this.modifierName.setValue(updatedModifierName);
    }

    public clickApplicableMenuGroup(): void {
        this.selectApplicableMenuGroup;
    }

    public clickWithOrWithoutToggle(): void {
        this.selectWithOrWithoutToggle;
    }

    public createAModifier(modifierName: string): void {
        this.setModifierName(modifierName);
        this.clickApplicableMenuGroup();
        this.clickWithOrWithoutToggle();
        this.clickSaveButton();
    }

    public editModifier(updatedModifierName: string): void {
        this.setEditedModifierName(updatedModifierName);
        this.clickSaveButton();
    }

    get titleEditClient(): string {
        $(this.titleEditModifierSelector).waitForVisible();
        return $(this.titleEditModifierSelector).getText();
    }

}
