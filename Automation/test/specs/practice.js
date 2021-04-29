const expect = require("chai").expect;
import {URLs,labels} from "../../Practice Form/expectedp";
import PracticeForm from "../../Practice Form/pageobjects";
describe('Validate test Practice Form',() => {
it('Navigate to Practice Form page and check the header text',() => {
    browser.url(URLs.practiceForm);
    const header = $(".main-header");
    expect(header.getText()).to.equal(labels.practiceForm);
});
it('Validate the labels in Practice Form area',() => {
    expect(PracticeForm.labelName).to.equal(labels.name);
    expect(PracticeForm.labelEmail).to.equal(labels.email);
    expect(PracticeForm.labelGender).to.equal(labels.gender);
    expect(PracticeForm.labelMobile).to.equal(labels.mobile);
    expect(PracticeForm.labelDateOfBirth).to.equal(labels.dateOfBirth);
    expect(PracticeForm.labelSubjects).to.equal(labels.subjects);
    expect(PracticeForm.labelHobbies).to.equal(labels.hobbies);
    expect(PracticeForm.labelPicture).to.equal(labels.picture);
    expect(PracticeForm.labelCurrentAddress).to.equal(labels.currentAddress);
    expect(PracticeForm.labelStateandCity).to.equal(labels.stateAndCity);
});
});

it('Make clicks on checkboxes -> Sports/Reading/Music and validate the clicks', () => {
    browser.url(URLs.practiceForm);
    PracticeForm.checkMusic.click();
    PracticeForm.checkReading.click();
    PracticeForm.checkSports.click();
    expect(PracticeForm.allChecked).to.eql(['Sports', 'Reading', 'Music']);
  });