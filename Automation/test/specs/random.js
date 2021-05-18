import { inputRegistrationForm } from "../../input";
import {URLs} from '../../expected';
import PracticeForm from "../../pageobjects/practiceForm.page";
import { expect } from "chai";

describe("Randomly fill in the data", () => {
  before(() => {
    browser.url(URLs.practiceForm);
  });
  it("Fill Student Registration Form with Random data and submit", () => {
    let myObj = inputRegistrationForm();
    PracticeForm.fillForm(myObj);
    PracticeForm.radioMale.click();
    PracticeForm.btnSubmit.scrollIntoView();
    PracticeForm.btnSubmit.click();
    try{
      PracticeForm.thanksModal.waitForExist({timeout: 10000});
    }
    catch(err){
      console.log(err.message);
    }
    expect(PracticeForm.thanksModal.isExisting()).to.be.true;
  });
});
