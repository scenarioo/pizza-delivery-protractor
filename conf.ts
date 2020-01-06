import {Config} from 'protractor';


export const config: Config = {
    specs: ['tests/*.js'],
    noGlobals: true,
    // Disable because we want to use async/await
    SELENIUM_PROMISE_MANAGER: false,

    // Do not use Selenium server
    directConnect: true,

    // Headless chrome
    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=800,600']
        }
    }
};