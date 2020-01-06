import {EnterPhoneNumberPage} from './page-objects/enter-phone-number.po';

describe('Look up phone number of "Hot Pizza Delivery"', () => {
    it('Finds phone number on start page ', async () => {
        await EnterPhoneNumberPage.navigateToPage();
        await EnterPhoneNumberPage.assertPhoneNumberOfHotPizzaDeliveryIsDisplayed();
    });
});