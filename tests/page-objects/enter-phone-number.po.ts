import {$, browser} from 'protractor';

const KNOWN_PHONE_NUMBER = '0791111111';
const UNKNOWN_PHONE_NUMBER = '0792222222';

export class EnterPhoneNumberPage {

    static async navigateToPage() {
        await browser.get('')
    }

    static async assertPhoneNumberOfHotPizzaDeliveryIsDisplayed() {
        await $('#hot-pizza-delivery-phone-number').isDisplayed();
    }

    static async enterKnownPhoneNumber() {
        await EnterPhoneNumberPage.enterPhoneNumber(KNOWN_PHONE_NUMBER);
    }

    static async enterUnknownPhoneNumber() {
        await EnterPhoneNumberPage.enterPhoneNumber(UNKNOWN_PHONE_NUMBER);
    }

    private static async enterPhoneNumber(phoneNumber: string) {
        await $('#phoneNumber').sendKeys(phoneNumber);
    }

    static async next() {
        await $('#step-enterPhoneNumber').$('.next').click();
    }
}