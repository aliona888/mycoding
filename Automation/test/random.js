const random = require ("generate-random-data");
export function inputRegistrationForm() {
    return {
        firstName: random.maleFirstName(),
        lastName: random.femaleFirstName(),
        email: random.email("gmail.com"),
        mobile: random.mobile(),
        currentAddress: random.sentence(20,50)
    };
}