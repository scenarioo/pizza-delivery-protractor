import {$} from 'protractor';

export class SelectPizzaPage {

    static async selectPizzaVerdura() {
        await $('#v').click();
    }

    static async next() {
        await this.getStepElement().$('.next').click();
    }

    static async assertPageIsShown() {
        await this.getStepElement().isDisplayed();
    }

    private static getStepElement() {
        return $('#step-selectPizza');
    }
}