class TextBox {
  get labelName() {
    return $("#userName-label").getText();
  }
  get labelEmail() {
    return $("#userEmail-label").getText();
  }
  get labelGender() {
    return $("#currentAddress-label").getText();
  }
  get labelMobile() {
    return $("#userNumber-label").getText();
  }
  get labelDateOfBirth() {
      return $("#dateOfBirth-label");
  }
  get labelSubjects() {
      return $$("#subjects-label")[0];
  }
  get labelHobbies() {
      return $$("#subjects-label")[1];
  }
  get labelPicture() {
      return $$("#subjects-label")[2];
  }
  get labelCurrentAddress() {
      return $("#currentAddress-label");
  }
  get labelStateandCity() {
      return $("#stateCity-label");
  }
  get inputFullName() {
    return $("#userName");
  }
  get inputFullNamePlaceholder() {
    return this.inputFullName.getAttribute("placeholder");
  }
  get inputEmail() {
    return $("#userEmail");
  }
  get inputEmailPlaceholder() {
    return this.inputEmail.getAttribute("placeholder");
  }
  get inputEmail() {
    return $("#userEmail");
  }
  get inputEmailPlaceholder() {
    return this.inputEmail.getAttribute("placeholder");
  }
  get inputCurrentAddress() {
    return $("textarea#currentAddress");
  }
  get inputCurrentAddressPlaceholder() {
    return this.inputCurrentAddress.getAttribute("placeholder");
  }
  get inputPermanentAddress() {
    return $("textarea#permanentAddress");
  }
  fillForm(obj) {
    this.inputFullName.setValue(obj.fullName);
    this.inputEmail.setValue(obj.email);
    this.inputCurrentAddress.setValue(obj.currentAddress);
    this.inputPermanentAddress.setValue(obj.permanentAddress);
  }
  get resultFullName() {
    return $("#name");
  }
  get resultEmail() {
    return $("#email");
  }
  get resultCurrentAddress() {
    return $("p#currentAddress");
  }
  get resultPermanentAddress() {
    return $("p#permanentAddress");
  }
  get btnSubmit() {
    return $("#submit");
  }
}

export default new TextBox();