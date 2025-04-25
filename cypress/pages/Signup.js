export class SignUp{
//ok
    webLocators={
        firstName:"#firstName",
        lastName:"#lastName",
        email: "#email",
        password:"#password",
        submit:"#submit",
        addUserTitle:".main-content h1",
        signUpMsg:"body div[class='main-content'] p:nth-child(1)"
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    clickOnSignUpBtn(){
        cy.contains("Sign up").click()
    }

    enterFirstName(fName){
        cy.get(this.webLocators.firstName).type(fName);
    }
    enterLastName(lName){
        cy.get(this.webLocators.lastName).type(lName);
    }
    enterEmail(email){
        cy.get(this.webLocators.email).type(email);
    }
    enterPassword(password){
        cy.get(this.webLocators.password).type(password);

    }
    clickSubmit(){
        cy.get(this.webLocators.submit).click();
    }

    addUserTitle(){
       cy.get(this.addUserTitle).should('have.value','Add User'); 
    }
    
    signUpMessage(){
        cy.get(this.signUpMessage).should('have.value','Sign up to begin adding your contacts!')
    }




}