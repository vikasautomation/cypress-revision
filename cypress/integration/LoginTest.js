import {LoginPage} from "../pages/LoginPage"
const loginPage = new LoginPage();
const data = require('../fixtures/testdata.json');
//LoginSuite 
describe('LoginSuite',()=>{
    it('Login Functionality',()=>{
        cy.visit(Cypress.env('URL'))
       loginPage.enterEmail(data.login.email);
       loginPage.enterPassword(data.login.password);
       loginPage.clickOnLogin();

    })
})
