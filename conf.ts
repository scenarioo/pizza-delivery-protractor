import {browser, Config} from 'protractor';


export const config: Config = {
    specs: ['tests/*.js'],
    baseUrl: 'http://scenarioo.org/pizza-delivery/',

    noGlobals: true,
    // Disable because we want to use async/await
    SELENIUM_PROMISE_MANAGER: false,

    // Do not use Selenium server
    directConnect: true,

    onPrepare: () => {
        // For non-Angular apps we need to set this. Otherwise Protractor will wait for Angular to be loaded.
        return browser.waitForAngularEnabled(false);
    },

    // Headless chrome
    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=800,600']
        }
    }
};