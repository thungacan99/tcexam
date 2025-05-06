import { faker } from '@faker-js/faker';
import 'cypress-iframe';

describe(['group', 'smoke'], 'Group Management', () => {

    it(['display'], 'Display Group Management Screen', () =>{
        cy.get('h1').should('have.text', 'Group Management');
    })

    it(['display'], 'Initial Display ', () => {
        
    })
    
    it(['validate'], 'Validate name blank', () =>{
        cy.get('#add').click()
        cy.wait(1000)
        let msg = 'some of the required fields have not been filled out:  name'
        cy.get('.warning').should('contain.text', msg)
    })

    beforeEach(() => {
        cy.GetInGroupManagementScreen();
    })
})

describe(['test', 'smoke'], 'Test Management', () => {

    it(['priority'], 'Add new test', () => {
        //input data
        cy.wait(1000)
        let test_name = faker.lorem.sentence();
        cy.get('#test_name').clear().type(test_name);

        let test_description = faker.lorem.paragraph();
        cy.get('#test_description').type(test_description)

        cy.get('select[id="user_groups"]').select('1')

        cy.get('#add').click()

        //confirm result
        //1. Bai thi duoc them moi thanh cong
        cy.get('select[id="test_id"]').find('option:selected').invoke('text').should('contains', test_name);
        
        //2. man hinh hien thi du lieu duoc tao o cac truong
        cy.wait(1000)
        cy.get('#test_name').invoke('val').then((value)=>{
            console.log('value :::::'+ value);
            expect(value).to.equal(test_name)
        })
        cy.get('#test_description').invoke('val').then((value)=>{
            console.log('description ::::::' + value);
            expect(value).to.equal(test_description)
        })
        cy.get('select[id="user_groups"]').find('option:selected').should('have.value', '1');

        //3. MH hien thi button: update/add/delete/lock/clear
        cy.get('#update').should('have.value', 'update'); 
        cy.get('#add').should('have.value', 'add');
        cy.get('#delete').should('have.value', 'delete');
        cy.get('#lock').should('have.value', 'lock');
        cy.get('#clear').should('have.value', 'clear');

        //4. MH hien thi bang cau hoi
        cy.contains('legend', 'questions').should('be.visible')
    })

    beforeEach(() =>{
        cy.GetInTestManagementScreen()
    })
})