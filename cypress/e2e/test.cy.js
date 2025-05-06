import LoginPage from "../support/pages/LoginPage"
import IndexPage from "../support/pages/IndexPage"

describe('Login', () => {
    const loginPage = new LoginPage();
    const indexPage = new IndexPage();

    it('should redirect to Index Page', () =>{
        cy.visit('http://103.245.237.118/tcexam');
        loginPage.enterUsername('admin');
        loginPage.enterPW('admin1234');
        loginPage.clickBtnLogin();

        indexPage.pageName.should('have.text', 'Test List');
    })
})