class PracticeForm {
  get inputFirstName() {
    return $("#firstName");
  }

  get inputLastName() {
    return $("#lastName");
  }

  get inputEmail() {
    return $("#userEmail");
  }

  get inputMobile() {
    return $("#userNumber");
  }

  get inputCurrentAddress() {
    return $("#currentAddress");
  }

  get ddState() {
    return $("#state > div > div:nth-of-type(1)");
  }
  get ddStateList() {
    return $$("#state > div:nth-of-type(2) > div > div");
  }

  get ddCity(){
    return $("#city > div > div:nth-of-type(1)");
  }

  get ddCityList(){
    return $$("#city > div:nth-of-type(2) > div > div");
  }


  fillForm(obj) {
    this.inputFirstName.setValue(obj.firstName);
    this.inputLastName.setValue(obj.lastName);
    this.inputEmail.setValue(obj.email);
    this.inputMobile.setValue(obj.mobile);
    this.inputCurrentAddress.setValue(obj.currentAddress);
  }

  get thanksModal(){
      return $('#example-modal-sizes-title-lg');
  }

  get radioMale(){
      return $('[for = "gender-radio-1"]');
  }

  get btnSubmit() {
    return $('#submit');
  }

  get thanksModalData(){
    return $$('td').map(el => el.getText());

  }
}
export default new PracticeForm();
