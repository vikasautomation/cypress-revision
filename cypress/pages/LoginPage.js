export class LoginPage{

    webLocators={
        email:"#email",
        password:"#password",
        submitBtn: "#submit"
    }

    enterEmail(email){
        cy.get(this.webLocators.email).type(email)
    }
    enterPassword(password){
        cy.get(this.webLocators.password).type(password)
    }

    clickOnLogin(){
        cy.get(this.webLocators.submitBtn).click()
    }
}


