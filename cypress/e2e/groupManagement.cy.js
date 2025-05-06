import GroupManagerment from "../support/pages/GroupManagement";
import MenuAdmin from "../support/pages/MenuAdmin";
import Footer from "../support/pages/Footer";

//const footer = new Footer();
//const menuAdmin = new MenuAdmin();
const groupManagementPage = new GroupManagerment();


describe("Group Management", () =>{
    it(['display'], "Display Group Management Screen", ()=>{
        groupManagementPage.title.should('have.text', 'Group Management');
    })

    it(['display'], "Initial Display", ()=>{
        //title
        groupManagementPage.title.should('have.text', 'Group Management');

        //dropdown group
        groupManagementPage.groupLabel.should('have.text', 'group');
        groupManagementPage.groupDropdown.should('be.visible');

        //text box name
        groupManagementPage.nameLabel.should('have.text', 'name');
        groupManagementPage.nameTextBox.should('be.visible');

        //3 button: add, clear, logout
        groupManagementPage.AddBtn.should('have.value', 'add');
        groupManagementPage.ClearBtn.should('have.value', 'clear');
        groupManagementPage.LogoutBtn.should('have.text', 'logout');

        //footer
        cy.DisplayCorrectFooter();        
    })

    it(['validate'], "Dropdown Default Value", () =>{
        //default value is the first value in the list
        groupManagementPage.groupDropdown.find('option').first().should('be.selected');
    })

    it(['validate'], 'Validate name blank', () =>{
        //click button Add
        groupManagementPage.AddBtn.click()
        cy.wait(1000)
        let msg = 'some of the required fields have not been filled out:  name'
        groupManagementPage.errorMSG.should('contain.text', msg)
    })

    beforeEach(() =>{
        cy.GetInGroupManagementScreen();
    })
})