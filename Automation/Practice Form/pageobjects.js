class PracticeForm {
  get labelName() {
    return $("#userName-label").getText();
  }
  get labelEmail() {
    return $("#userEmail-label").getText();
  }
  get labelGender() {
    return $$("#genterWrapper > div.col-md-3.col-sm-12")[0].getText();
  }
  get labelMobile() {
    return $("#userNumber-label").getText();
  }
  get labelDateOfBirth() {
      return $("#dateOfBirth-label").getText();
  }
  get labelSubjects() {
      return $$("#subjects-label")[0].getText();
  }
  get labelHobbies() {
      return $$("#subjects-label")[1].getText();
  }
  get labelPicture() {
      return $$("#subjects-label")[2].getText();
  }
  get labelCurrentAddress() {
      return $("#currentAddress-label").getText();
  }
  get labelStateandCity() {
      return $("#stateCity-label").getText();
  }
  get checkSports() {
    return $('#hobbies-checkbox-1 + label');
  }
  get checkReading() {
    return $('#hobbies-checkbox-2 + label');
  }
  get checkMusic() {
    return $('#hobbies-checkbox-3 + label');
  }
  get allChecked() {
    return $$(':checked + label').map(el => el.getText());
  
  }
  get inputFirstName(){
    return $('#firstName');
  }
  get inputFirstNamePlaceholder(){
    return this.inputFirstName.getAttribute('placeholder');
  }
  get inputLastName(){
    return $('#lastName');
  }
  get inputLastNamePlaceholder(){
    return this.inputLastName.getAttribute('placeholder');
  }
  get inputFirstName(){
    return $('#firstName');
  }
  get inputEmailPlaceholder(){
    return this.inputUserEmail.getAttribute('placeholder');
  }
  get inputFirstName(){
    return $('#firstName');
  }
  get inputMobilePlaceholder(){
    return this.inputUserNumber.getAttribute('placeholder');
  }
  get inputFirstName(){
    return $('#firstName');
  }
  get inputCurrentAddressPlaceholder(){
    return this.inputCurrentAddress.getAttribute('placeholder');
  }
}
export default new PracticeForm();

