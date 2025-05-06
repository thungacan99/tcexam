class Footer{
    //get language
    GetLanguageByTitle(title){
        return cy.get(`a,span[title="${title}"]`);
    }
    /*
    //26 languages
    get AR(){
        return cy.get('a[title="Arabian"]');
    }

    get AZ(){
        return cy.get('a[title="Azerbaijani"]');
    }

    get BG(){
        return cy.get('a[title="Bulgarian"]');
    }

    get BR(){
        return cy.get('a[title="Brazilian Portuguese"]');
    }

    get CN(){
        return cy.get('a[title="Chinese"]');
    }

    get DE(){
        return cy.get('a[title="German"]');
    }

    get EL(){
        return cy.get('a[title="Greek"]');
    }

    get EN(){
        return cy.get('a[title="English"]');
    }

    get ES(){
        return cy.get('a[title="Spanish"]');
    }

    get FA(){
        return cy.get('a[title="Farsi"]');
    }

    get FR(){
        return cy.get('a[title="French"]');
    }

    get HE(){
        return cy.get('a[title="Hebrew"]');
    }

    get HI(){
        return cy.get('a[title="Hindi"]');
    }

    get HU(){
        return cy.get('a[title="Hungarian"]');
    }

    get ID(){
        return cy.get('a[title="Indonesian"]');
    }

    get IT(){
        return cy.get('a[title="Italian"]');
    }

    get JP(){
        return cy.get('a[title="Japanese"]');
    }

    get MR(){
        return cy.get('a[title="Marathi"]');
    }

    get MS(){
        return cy.get('a[title="Malay (Bahasa Melayu)"]');
    }

    get NL(){
        return cy.get('a[title="Dutch"]');
    }

    get PL(){
        return cy.get('a[title="Polish"]');
    }

    get RO(){
        return cy.get('a[title="Romanian"]');
    }

    get TR(){
        return cy.get('a[title="Turkish"]');
    }

    get UR(){
        return cy.get('a[title="Urdu"]');
    }

    get VN(){
        return cy.get('a[title="Vietnamese"]');
    }
    */

    //label
    get label(){
        return cy.get('.copyright');
    }

    //button
    get W3C_XHTML(){
        return cy.get('a[title="This Page Is Valid XHTML 1.0 Strict!"]');
    }

    get W3C_CSS(){
        return cy.get('a[title="This document validates as CSS!"]');
    }

    get W3C_WAI(){
        return cy.get('a[title="Explanation of Level Triple-A Conformance"]');
    }

}

export default Footer;