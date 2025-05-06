class GroupManagerment{
    get title(){
        return cy.get('h1');
    }

    get errorMSG(){
        return cy.get('.warning');
    }

    get groupLabel(){
        return cy.get('label[for="group_id"]');
    }

    get groupDropdown(){
        return cy.get('#group_id');
    }

    get nameLabel(){
        return cy.get('label[for="group_name"]');
    }

    get nameTextBox(){
        return cy.get('#group_name');
    }

    get AddBtn(){
        return cy.get('#add');
    }

    get ClearBtn(){
        return cy.get('#clear');
    }

    get LogoutBtn(){
        return cy.get('.logoutbutton');
    }

    SelectGroupIdByValue(value){
        return cy.get('#group_id').select(value);
    }

    InputGroupName(text){
        return cy.get('#group_name').type(text);
    }
}

export default GroupManagerment;