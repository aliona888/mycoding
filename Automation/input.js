const random = require("generate-random-data");

export const inputTextBox = {
  fullName: "IT START",
  email: "info@itstart.us",
  currentAddress: "USA Florida",
  permanentAddress: "USA Florida, Jax",
};

export const inputPracticeForm = {
  name: "First Name",
  name: "Last Name",
  email: "name@example.com",
  mobile: "Mobile Number",
  currentAddress: "Current Address",
};

export function inputRegistrationForm() {
  return {
    firstName: random.maleFirstName(),
    lastName: random.femaleFirstName(),
    email: random.email("gmail.com"),
    mobile: random.mobile(),
    currentAddress: random.sentence(20, 50),
  };
}
