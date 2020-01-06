import {$} from 'protractor';

export class EnterAddressPage {

    static async assertPageIsShown() {
        await this.getStepElement().isDisplayed();
    }

    static async enterAddress() {
        await $('#streetAndHouseNumber').sendKeys('Universitaetstrasse 9145');
        await $('#zipCodeAndCity').sendKeys('8006 Zuerich');
    }

    static async next() {
        await this.getStepElement().$('.next');
    }

    private static getStepElement() {
        return $('#step-enterAddress');
    }
}