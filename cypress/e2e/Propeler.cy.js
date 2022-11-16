/// <reference types="Cypress" />

beforeEach('launches website',()=> {
    cy.visit('https://propeler.io/') 
    cy.viewport(1280,720)
  })

describe('Propeler Profile Page Header suite',()=> {
        
    it('Verify Page Logo,should return Profil page', ()=> {
        cy.get('.custom-logo-link').click()
        cy.title().should('eq','Propeler')
    })
    
    it('Verify Page Title', ()=> {
        cy.title().should('eq','Propeler')
    })

    it('Verify Page Title - Negative TC ', ()=> {
        cy.title().should('not.contain','PROPELAR' )
    })

    it('Verify Home button, in the Header', ()=> {
        cy.get('#menu-item-123').click()
        cy.title().should('eq','Propeler' )
  
    })
    it('Verify Our services button, in the Header', ()=> {
        cy.get('#menu-item-20').click()
        cy.url('https://propeler.io/our-services/')
  
    })
    it('Verify projects button, in the Header', ()=> {
        cy.get('#menu-item-19').click()
        cy.url('https://propeler.io/projekti/')
  
    })
    it('Verify Courses button, in the Header', ()=> {
        cy.get('#menu-item-302').click()
        cy.url('https://propeler.io/courses/')
  
    })
    it('Verify About us button, in the Header', ()=> {
        cy.get('#menu-item-18').click()
        cy.url('https://propeler.io/o-nama/')
  
    })
    it('Verify Contact button, in the Header', ()=> {
        cy.get('#menu-item-17').click()
        cy.url('https://propeler.io/kontakt/')
  
    })
    it('Verify Search, in the Header', ()=> {
        cy.get('.search').invoke('show').click()
        cy.get('.search').type('About Us')
        cy.get('.searchsubmit').click({ force: true })
  
    })
})
describe('Propeler Profile Page suite',()=> {
        
    it('Verify Read more button at the section Projects', ()=> {
        cy.contains('Read more').click()
        cy.title().should('eq','Projects – Propeler')
        cy.scrollTo('bottom')
        cy.get('#colophon > a > i').click()
        cy.go('back')

    })
    it('Verify Contact us from the bottom of the page', ()=> {
        cy.scrollTo('bottom')
        cy.get('#textbox5').type('Aleksandra')
        cy.get('#email6').type('saska@gmail.com')
        cy.get('#textarea7').type('some text')
        cy.get('#submitButton4').click()

    })
    it('Verify Contact us from the bottom of the page(wrong username and email)Negative TC', ()=> {
         cy.scrollTo('bottom')
         cy.get('#textbox5').type('123')
         cy.get('#email6').type('123')
         cy.get('#submitButton4').click()
         cy.get('.kaliforms-form-container').should('exist')

    })
    it('Verify Contact us from the bottom of the page(username and email field is empty)Negative TC', ()=> {
        cy.get('.kaliforms-form-container').submit()
        cy.get('.kaliforms-form-container').should('not.exist')

    })
    it('Verify email link in the contact us section)', ()=> {
        cy.scrollTo('bottom')
        cy.contains('office@propeler.io').should('have.attr', 'href').should('not.be.empty').and('contain', 'mailto:office@propeler.io')
        })
        

    })
describe('Propeler Contact suite',()=> {

    beforeEach ('Open Contact page)', ()=> {
        cy.get('#menu-item-17').click()
    })

    it('Verify email link in the contact us section)', ()=> {
        cy.contains('office@propeler.io').should('have.attr', 'href').should('not.be.empty').and('contain', 'mailto:office@propeler.io')

    })
        
    it('Verify Contact us form (name, email are mandatory, and the text is optional) valid form ', ()=> {
        cy.get('#textbox5').type('Aleksandra')
        cy.get('#email6').type('saska@gmail.com')
        cy.get('#textarea7').type('some text')
        cy.get('#submitButton4').click()
    })
    it('Verify Contact us form (name, email are mandatory, and the text is optional) Negative TC ', ()=> {
        cy.get('#textbox5').type('123')
        cy.get('#email6').type('123')
        cy.get('#submitButton4').click()
        cy.get('.kaliforms-form-container').should('exist')
    })
    it('Verify Contact us form (name, email are mandatory, and the text is optional) Negative TC ', ()=> {
        cy.get('.kaliforms-form-container').submit()
        cy.get('.kaliforms-form-container').should('not.exist')
        cy.go('back')
    })
})