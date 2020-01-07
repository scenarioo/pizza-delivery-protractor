import {$, browser, protractor} from 'protractor';

export class ConfirmationPage {

    static async assertPageIsShown() {
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(this.getStepElement()), 15 * 1000);
    }

    private static getStepElement() {
        return $('#step-confirmation');
    }
}