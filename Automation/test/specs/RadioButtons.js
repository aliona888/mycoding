const expect = require("chai").expect;
import {URLs} from "../../Practice Form/expectedp";
import RadioButton from "../../pageobjects/radioButtons";
describe('Validate Radio Button page',() => {
it('Randomly select a radio button and validate the selection', () => {
    browser.url(URLs.radioButtons);
    const selection = Math.round(Math.random());
    RadioButton.radioButtons[selection].click();
    expect(RadioButton.textSuccess).to.equal(RadioButton.radioButtons[selection].getText());
});
});