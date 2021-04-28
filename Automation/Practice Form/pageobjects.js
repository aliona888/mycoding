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
  }}
  export default new PracticeForm();
