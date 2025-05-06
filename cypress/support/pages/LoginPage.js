class LoginPage {
    get usernameInput(){
        return cy.get('#xuser_name');
    }
    get passwordInput(){
        return cy.get('#xuser_password');
    }
    get loginBtn(){
        return cy.get('#login');
    }

    enterUsername(name){
        this.usernameInput.type(name);
    }
    enterPW(pw){
        this.passwordInput.type(pw);
    }
    clickBtnLogin(){
        this.loginBtn.click();
    }
}

export default LoginPage;