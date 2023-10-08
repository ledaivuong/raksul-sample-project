import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import SamplePage from '../pageobjects/samplePage.js';


const pages = {
    samplePage: SamplePage
}

Given(/^I am on the page test$/, async () => {
    await SamplePage.open();
});

When(/^I input email \"(.*)\"$/, async (email) => {
    await SamplePage.inputEmail(email);
});

When(/^I input last name \"(.*)\"$/, async (lastName) => {
    await SamplePage.inputLastName(lastName);
});

When(/^I input first name \"(.*)\"$/, async (firstName) => {
    await SamplePage.inputFirstName(firstName);
});

When(/^I select info source \"(.*)\"$/, async (optionInfoSource) => {
    await SamplePage.selectInfoSource(optionInfoSource);
});

When(/^I select services of interest \"(.*)\"$/, async (optionInterest) => {
    await SamplePage.selectInterestServices(optionInterest);
});

When(/^I select type of association \"(.*)\"$/, async (optionAssociation) => {
    await SamplePage.selectAssociation(optionAssociation);
});

When(/^I input explanation \"(.*)\"$/, async (explanation) => {
    await SamplePage.inputExplanation(explanation);
});

When(/^I click on submit button$/, async () => {
    await SamplePage.clickSubmitbutton();
});

Then(/^I expect the success message display \"(.*)\"$/, async (successMessage) => {
    await expect(SamplePage.successAlert).toBeExisting();
    await expect(SamplePage.successAlert).toHaveTextContaining(successMessage);
});

Then(/^I expect the invalid email validation display \"(.*)\"$/, async (status, validationMessage) => {
    switch (status) {
        case "display":
            await expect(SamplePage.emptyValidationEmail).toBeDisplayed();
            await expect(SamplePage.emptyValidationEmail).toHaveTextContaining(validationMessage);
            await expect(SamplePage.emailInputField).toHaveElementClassContaining("error")
            break;
        case "disappear":
            await expect(SamplePage.emptyValidationEmail).not.toBeDisplayed();
            await expect(SamplePage.emailInputField).toHaveElementClassContaining("success")
            break;
        default:
            throw new Error(`Please select display || disappear instead of ${status}`)
    }
});

Then(/^I expect the empty email validation \"(.*)\" \"(.*)\"$/, async (status, validationMessage) => {
    switch (status) {
        case "display":
            await expect(SamplePage.emptyValidationEmail).toBeDisplayed();
            await expect(SamplePage.emptyValidationEmail).toHaveTextContaining(validationMessage);
            await expect(SamplePage.emailInputField).toHaveElementClassContaining("error")
            break;
        case "disappear":
            await expect(SamplePage.emptyValidationEmail).not.toBeDisplayed();
            await expect(SamplePage.emailInputField).toHaveElementClassContaining("success")
            break;
        default:
            throw new Error(`Please select display || disappear instead of ${status}`)
    }
});

Then(/^I expect the empty lastName validation \"(.*)\" \"(.*)\"$/, async (status, validationMessage) => {
    switch (status) {
        case "display":
            await expect(SamplePage.emptyValidationLastName).toBeDisplayed();
            await expect(SamplePage.emptyValidationLastName).toHaveTextContaining(validationMessage);
            await expect(SamplePage.lastNameInputField).toHaveElementClassContaining("error")
            break;
        case "disappear":
            await expect(SamplePage.emptyValidationLastName).not.toBeDisplayed();
            await expect(SamplePage.lastNameInputField).toHaveElementClassContaining("success")
            break;
        default:
            throw new Error(`Please select display || disappear instead of ${status}`)
    }
});

Then(/^I expect the empty firstName validation \"(.*)\" \"(.*)\"$/, async (status, validationMessage) => {
    switch (status) {
        case "display":
            await expect(SamplePage.emptyValidationFirstName).toBeDisplayed();
            await expect(SamplePage.emptyValidationFirstName).toHaveTextContaining(validationMessage);
            await expect(SamplePage.firstNameInputField).toHaveElementClassContaining("error")
            break;
        case "disappear":
            await expect(SamplePage.emptyValidationFirstName).not.toBeDisplayed();
            await expect(SamplePage.firstNameInputField).toHaveElementClassContaining("success")
            break;
        default:
            throw new Error(`Please select display || disappear instead of ${status}`)
    }
});

Then(/^I expect the empty infoSource validation \"(.*)\" \"(.*)\"$/, async (status, validationMessage) => {
    let infoSourceFieldDiv = '//div[@id="field_infoSource"]//child::div[contains(@class, "ant-select-in-form-item")]'
    let infoSourceFieldElement = await $(infoSourceFieldDiv);
    switch (status) {
        case "display":
            await expect(SamplePage.emptyValidationInfoSource).toBeDisplayed();
            await expect(SamplePage.emptyValidationInfoSource).toHaveTextContaining(validationMessage);
            await expect(infoSourceFieldElement).toHaveElementClassContaining("error")
            break;
        case "disappear":
            await expect(SamplePage.emptyValidationInfoSource).not.toBeDisplayed();
            await expect(infoSourceFieldElement).toHaveElementClassContaining("success")
            break;
        default:
            throw new Error(`Please select display || disappear instead of ${status}`)
    }
});

Then(/^I expect the empty association validation \"(.*)\" \"(.*)\"$/, async (status, validationMessage) => {
    switch (status) {
        case "display":
            await expect(SamplePage.emptyValidationAssociation).toBeDisplayed();
            await expect(SamplePage.emptyValidationAssociation).toHaveTextContaining(validationMessage);
            break;
        case "disappear":
            await expect(SamplePage.emptyValidationAssociation).not.toBeDisplayed();
            break;
        default:
            throw new Error(`Please select display || disappear instead of ${status}`)
    }
});

Then(/^I expect the empty interest services validation \"(.*)\" \"(.*)\"$/, async (status, validationMessage) => {
    switch (status) {
        case "display":
            await expect(SamplePage.emptyValidationInterestSerives).toBeDisplayed();
            await expect(SamplePage.emptyValidationInterestSerives).toHaveTextContaining(validationMessage);
            break;
        case "disappear":
            await expect(SamplePage.emptyValidationInterestSerives).not.toBeDisplayed();
            break;
        default:
            throw new Error(`Please select display || disappear instead of ${status}`)
    }
});


