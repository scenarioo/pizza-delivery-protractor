import {browser, $, protractor} from 'protractor';
import * as path from 'path';

const EC = protractor.ExpectedConditions;

describe('Show a file upload is testable with protractor', () => {
    it('Ajax file upload', async () => {
        await browser.get('https://kzrfaisal.github.io/#/afu');

        const imagePath = path.resolve(__dirname, '../../upload.txt');
        await $('#default input[name="files[]"]').sendKeys(imagePath);

        await $('#default button[class="btn btn-success afu-upload-btn"]').click();

        await browser.wait(EC.visibilityOf($('#default p[class="text-success lead + afu-upload-status"]')));
    });
});