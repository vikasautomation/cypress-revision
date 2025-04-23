import { SignUp } from "../pages/Signup";
const signUp = new SignUp();
const data = require("../fixtures/testdata.json")

describe('SignUp Test Suite',()=>{
    it('registration test',()=>{
        signUp.openURL()
        signUp.clickOnSignUpBtn()
        signUp.enterFirstName(data.signup.firstName);
        signUp.enterLastName(data.signup.lastName);
        signUp.enterEmail(data.signup.email);
        signUp.enterPassword(data.signup.password);
        signUp.addUserTitle;
        signUp.signUpMessage;
    })
})