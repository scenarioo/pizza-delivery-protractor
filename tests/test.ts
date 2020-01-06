import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('angularjs homepage todo list', () => {
    it('should add a todo', async () => {
        await browser.get('https://angularjs.org');

        await element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        await $('[value="add"]').click();

        const todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(await todoList.count()).toEqual(3);
        expect(await todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        await todoList.get(2).$('input').click();
        const completedAmount = $$('.done-true');
        expect(await completedAmount.count()).toEqual(2);
    });
});