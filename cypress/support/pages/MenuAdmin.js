class MenuAdmin{
    get index(){
        return cy.get('a[title="main page"]');
    }

    get users(){
        return cy.get('a[title="users"]');
    }

    get modules(){
        return cy.get('a[title="modules"]');
    }

    get tests(){
        return cy,get('a[title="tests"]');
    }

    get backup(){
        return cy.get('a[title="Database Backup and Restore"]');
    }

    get public(){
        return cy.get('a[title="public area"]');
    }

    get help(){
        return cy.get('a[title="help"]');
    }

    get info(){
        return cy.get('a[title="about TCExam"]');
    }

    get logout(){
        return cy.get('a[title="click on this link to exit the system (session end)"]');
    }
}

export default MenuAdmin;