import Page from './page.js';
import { expect, $ } from '@wdio/globals'

class SamplePage extends Page {

    get emailInputField() {
        return this.waitForInputElement('//input[@id="form_item_email"]');
    }

    async inputEmail(email) {
        await this.emailInputField.setValue(email);
    }

    get lastNameInputField() {
        return this.waitForInputElement('//input[@id="form_item_lastName"]');
    }

    async inputLastName(lastName) {
        await this.lastNameInputField.setValue(lastName);
    }

    get firstNameInputField() {
        return this.waitForInputElement('//input[@id="form_item_firstName"]');
    }

    async inputFirstName(firstName) {
        await this.firstNameInputField.setValue(firstName);
    }

    get infoSourceInputField() {
        return this.waitForClickElement('//span[@class="ant-select-selection-item"]');
    }

    async selectInfoSource(option) {
        if (["Search engines", "Recommended by friend",
            "Social media", "Email marketing", "Other"].indexOf(option) > -1) {
            const optionXpath = `//div[@class="rc-virtual-list-holder-inner"]//child::div[@class="ant-select-item-option-content" and .="${option}"]`;
            await this.infoSourceInputField.click();
            await this.waitForClickElement(optionXpath).click();
        } else {
            throw new Error('Please select Search engines || Recommended by friend || Social media '
                + '|| Email marketing || Other')
        }
    }

    get interestServicesCheckbox() {
        var interestServicesOption = new Object();
        interestServicesOption.printing = this.waitForClickElement('//input[@type="checkbox" and @value="1"]');
        interestServicesOption.logistics = this.waitForClickElement('//input[@type="checkbox" and @value="2"]');
        interestServicesOption.advertisement = this.waitForClickElement('//input[@type="checkbox" and @value="3"]');
        return interestServicesOption;
    }

    async selectInterestServices(option) {
        switch (option) {
            case "Printing":
                await this.interestServicesCheckbox.printing.click();
                break;
            case "Logistics":
                await this.interestServicesCheckbox.logistics.click();
                break;
            case "Advertisement":
                await this.interestServicesCheckbox.advertisement.click();
                break;
            default:
                throw new Error("Please select Printing | Logistics | Advertisement");
        }
    }

    get associationRadio() {
        var associationOption = new Object();
        associationOption.prospect = this.waitForClickElement('//input[@type="radio" and @value="1"]');
        associationOption.partner = this.waitForClickElement('//input[@type="radio" and @value="2"]');
        associationOption.reseller = this.waitForClickElement('//input[@type="radio" and @value="3"]');
        associationOption.vendor = this.waitForClickElement('//input[@type="radio" and @value="4"]');
        associationOption.other = this.waitForClickElement('//input[@type="radio" and @value="5"]');
        return associationOption;
    }

    async selectAssociation(option) {
        switch (option) {
            case "Prospect":
                await this.associationRadio.prospect.click();
                break;
            case "Partner":
                await this.associationRadio.partner.click();
                break;
            case "Reseller":
                await this.associationRadio.reseller.click();
                break;
            case "Vendor":
                await this.associationRadio.vendor.click();
                break;
            case "Other":
                await this.associationRadio.other.click();
                break;
            default:
                throw new Error("Please select Prospect | Partner | Reseller | Vendor | Other");
        }
    }

    get explanationTextArea() {
        return this.waitForInputElement('//textarea');
    }

    async inputExplanation(text) {
        await this.explanationTextArea.setValue(text);
    }

    get submitButton() {
        return this.waitForClickElement('//button');
    }

    async clickSubmitbutton() {
        await this.submitButton.click();
    }

    get successAlert() {
        return $('//div[@class="ant-alert-message"]');
    }

    get emptyValidationEmail() {
        return $('//input[@id="form_item_email"]//following::div[@class="ant-form-item-explain-error" and contains(.,"email")]');
    }

    get emptyValidationLastName() {
        return $('//input[@id="form_item_email"]//following::div[@class="ant-form-item-explain-error" and contains(.,"lastName")]');
    }

    get emptyValidationFirstName() {
        return $('//input[@id="form_item_email"]//following::div[@class="ant-form-item-explain-error" and contains(.,"firstName")]');
    }

    get emptyValidationInfoSource() {
        return $('//input[@id="form_item_email"]//following::div[@class="ant-form-item-explain-error" and contains(.,"infoSource")]');
    }

    get emptyValidationInterestSerives() {
        return $('//div[@id="field_servicesOfInterest"]//following::div[@class="ant-form-item-explain-error" and contains(.,"servicesOfInterest")]');
    }

    get emptyValidationAssociation() {
        return $('//div[@id="field_typeOfAssociation"]//following::div[@class="ant-form-item-explain-error" and contains(.,"typeOfAssociation")]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */

    open() {
        return super.open(`recruit-qa-engineer-work-sample/`)
    }

}

export default new SamplePage();
