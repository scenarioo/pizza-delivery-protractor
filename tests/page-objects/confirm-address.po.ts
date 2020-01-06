import {$} from 'protractor';

export class ConfirmAddressPage {

    static async assertPageIsShown() {
        await this.getStepElement().isDisplayed();
    }

    static async yes() {
        await this.getStepElement().$('.yes').click();
    }

    private static getStepElement() {
        return $('#step-confirmAddress');
    }
}