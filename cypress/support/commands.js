// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {constants} from './constants'
import Footer from './pages/Footer';

const footer = new Footer();

const languageCodes = [
    "Arabian", "Azerbaijani", "Bulgarian", "Brazilian Portuguese", "Chinese",
    "German", "Greek", "English", "Spanish", "Farsi", "French", "Hebrew", "Hindi",
    "Hungarian", "Indonesian", "Italian", "Japanese", "Marathi", "Malay", "Dutch",
    "Polish", "Romanian", "Russian", "Turkish", "Urdu", "Vietnamese"
  ];

Cypress.Commands.add('Login', () => {
    cy.visit(constants.url)
    cy.fixture('user').then((data) => {
        cy.get('#xuser_name').type(data.user.username)
        cy.get('#xuser_password').type(data.user.password)
        cy.get('#login').click()
    })
});

//Get in Test Management screen
Cypress.Commands.add('GetInTestManagementScreen', () => {
    cy.Login();
    cy.sleep(5000);
    cy.get('a[accesskey="a"]').click()
    cy.get('a[title="tests"]').click()
    cy.get('a[href="tce_edit_test.php"]').eq(1).click()
})

Cypress.Commands.add('GetInGroupManagementScreen', () => {
    cy.Login();
    cy.get('a[accesskey="a"]').click()
    cy.get('a[href="tce_menu_users.php"]').click();
    cy.get('a[title="Group Management"]').eq(1).click();
})

Cypress.Commands.add('DisplayCorrectFooter', () => {
    
    //26 languages
    languageCodes.forEach(code => {
        footer.GetLanguageByTitle(code).should('be.visible');
    })

    //labels
    footer.label.should('have.text', 'TCExam ver. 15.0.1\n - Copyright © 2004-2020 Nicola Asuni - Tecnick.com LTD');

    //3 button:
    footer.W3C_XHTML.should('be.visible');
    footer.W3C_CSS.should('be.visible');
    footer.W3C_WAI.should('be.visible');
})


