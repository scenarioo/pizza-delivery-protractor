import {$} from 'protractor';

export class SelectDrinkPage {

    static async selectDrinkRedWine() {
        await $('#dv').click();
    }

    static async next() {
        await this.getStepElement().$('.next').click();
    }

    static async assertPageIsShown() {
        await this.getStepElement().isDisplayed();
    }

    private static getStepElement() {
        return $('#step-selectDrinks')
    }
}