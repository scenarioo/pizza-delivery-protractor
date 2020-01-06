import {$} from 'protractor';

export class ConfirmationPage {

    static async assertPageIsShown() {
        await this.getStepElement().isDisplayed();
    }

    private static getStepElement() {
        return $('#step-confirmation');
    }
}