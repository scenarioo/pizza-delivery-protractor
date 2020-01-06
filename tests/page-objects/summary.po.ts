import {$} from 'protractor';

export class SummaryPage {

    static async assertPizzaVerduraAndRedWineAreListed() {
        const pizza: string = await $('#summary_pizza').getText();
        const drinks: string = await $('#summary_drinks').getText();

        expect(pizza).toBe('Pizza Verdura');
        expect(drinks).toBe('Vino Rosso');
    }

    static async order() {
        await this.getStepElement().$('.next').click();
    }

    static async assertPageIsShown() {
        await this.getStepElement().isDisplayed();
    }

    private static getStepElement() {
        return $('#step-summary');
    }
}