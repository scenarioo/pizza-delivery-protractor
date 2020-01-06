import {EnterPhoneNumberPage} from './page-objects/enter-phone-number.po';
import {ConfirmAddressPage} from './page-objects/confirm-address.po';
import {SelectPizzaPage} from './page-objects/select-pizza.po';
import {SelectDrinkPage} from './page-objects/select-drink.po';
import {SummaryPage} from './page-objects/summary.po';
import {ConfirmationPage} from './page-objects/confirmation.po';
import {EnterAddressPage} from './page-objects/enter-address.po';

describe('Order a pizza and drinks from "Hot Pizza Delivery"', () => {

    it('Typical order process for a customer with a known phone number', async () => {

        await EnterPhoneNumberPage.navigateToPage();
        await EnterPhoneNumberPage.enterKnownPhoneNumber();
        await EnterPhoneNumberPage.next();

        await ConfirmAddressPage.assertPageIsShown();
        await ConfirmAddressPage.yes();

        await SelectPizzaPage.assertPageIsShown();
        await SelectPizzaPage.selectPizzaVerdura();
        await SelectPizzaPage.next();

        await SelectDrinkPage.assertPageIsShown();
        await SelectDrinkPage.selectDrinkRedWine();
        await SelectDrinkPage.next();

        await SummaryPage.assertPageIsShown();
        await SummaryPage.assertPizzaVerduraAndRedWineAreListed();
        await SummaryPage.order();

        await ConfirmationPage.assertPageIsShown();
    });

    it('Phone number is known, but the customer want to correct his address', async () => {
        await EnterPhoneNumberPage.navigateToPage();
        await EnterPhoneNumberPage.enterKnownPhoneNumber();
        await EnterPhoneNumberPage.next();

        await ConfirmAddressPage.assertPageIsShown();
        await ConfirmAddressPage.no();

        await EnterAddressPage.assertPageIsShown();
        await EnterAddressPage.enterAddress();
        await EnterAddressPage.next();

        await SelectPizzaPage.assertPageIsShown();
    });

    it('Phone number is not known, there the customer has to enter his address', async () => {
        await EnterPhoneNumberPage.navigateToPage();
        await EnterPhoneNumberPage.enterUnknownPhoneNumber();
        await EnterPhoneNumberPage.next();

        await EnterAddressPage.assertPageIsShown();
        await EnterAddressPage.enterAddress();
        await EnterAddressPage.next();

        await SelectPizzaPage.assertPageIsShown();
    });
});