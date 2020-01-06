import {$} from 'protractor';

export class ConfirmAddressPage {

    static async assertPageIsShown() {
        await this.getStepElement().isDisplayed();
    }

    static async yes() {
        await this.getStepElement().$('.yes').click();
    }

    static async no() {
        await this.getStepElement().$('.no').click();
    }

    private static getStepElement() {
        return $('#step-confirmAddress');
    }
}