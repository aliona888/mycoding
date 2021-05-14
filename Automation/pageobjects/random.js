class Random {
    fillForm(obj) {
        this.inputFirstName.setValue(obj.firstName);
        this.inputLastName.setValue(obj.lastName);
        this.inputEmail.setValue(obj.email);
        this.inputMobile.setValue(obj.mobile);
        this.inputCurrentAddress.setValue(obj.currentAddress);
    }
    get btnSubmit() {
        return ("#submit");
    }
}
export default new Random();
