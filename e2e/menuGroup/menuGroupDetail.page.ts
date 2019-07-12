import BasePage from '../BasePage';
import { Client, Element, RawResult } from 'webdriverio';
import { IngredientPage } from '../ingredient/ingredient.page';
import { AddOnPage } from '../addOn/addOn.page';
import { ModifierPage } from '../modifier/modifier.page';
import { MenuGroupPage } from '../menuGroup/menuGroup.page';

export class MenuGroupDetailPage extends BasePage {

    private titleCreateNewGroupSelector = '//h5[@class="modal-title"]';
    private okButtonSelector = '//button[contains(text(),"Ok")]';
    private emptyGroupNameErrorSelector = "//div[@class='form-group']//div[@class='form-group']//label[@class='control-label error-label']";
    private emptyBackgroundColourErrorSelector = "//div[@class='modal-body']/div[@class='row'][2]//label[@class='control-label error-label']";
    private groupNameSelector = '//input[@placeholder="Group Name"]';
    private colourIDSelector = '//input[@placeholder="#8888"]';

    get titleCreateGroup(): string {
        $(this.titleCreateNewGroupSelector).waitForVisible();
        return $(this.titleCreateNewGroupSelector).getText();
    }

    get selectOkButton() {
        $(this.okButtonSelector).waitForVisible();
        $(this.okButtonSelector).waitForEnabled();
        return $(this.okButtonSelector).click();
    }

    get emptyGroupNameErrorMessage(): string {
        $(this.emptyGroupNameErrorSelector).waitForVisible();
        return $(this.emptyGroupNameErrorSelector).getText();
    }

    get emptyBackgroundColourErrorMessage(): string {
        $(this.emptyBackgroundColourErrorSelector).waitForVisible();
        return $(this.emptyBackgroundColourErrorSelector).getText();
    }

    get groupName() {
        $(this.groupNameSelector).waitForVisible();
        return $(this.groupNameSelector);
    }

    get colourID() {
        $(this.colourIDSelector).waitForVisible();
        return $(this.colourIDSelector);
    }

    get titleEditPopup(): string {
        $(this.titleCreateNewGroupSelector).waitForVisible();
        return $(this.titleCreateNewGroupSelector).getText();
    }

    public clickOkButton(): void {
        this.selectOkButton;
    }

    public setGroupName(groupName: string): void {
        this.groupName.setValue(groupName);
    }

    public setColourID(colourID: string): void {
        this.colourID.setValue(colourID);
    }

    public createGroup(groupName: string, colourID: string): void {
        this.setGroupName(groupName);
        this.setColourID(colourID);
        this.clickOkButton();
    }

}
