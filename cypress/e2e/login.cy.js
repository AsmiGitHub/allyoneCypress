describe('Two-Factor Authentication', () => {
    it('should complete two-factor authentication after successful login', () => {
    //  const apiUrl = Cypress.env('API_URL'); this is test
  
      // Perform the login with valid credentials
      cy.visit('http://localhost:3000');
      cy.get("input[name=email]").type("emily.grimes@allygroup.com.au");cy.wait(4000);
      cy.get("input[name=password]").type("Emily2003*");cy.wait(4000);
      cy.get('.login-btn__CyH4A').click();cy.wait(4000);
  //redirected to two-factor-auth page 
      cy.url().should('include', 'two-factor-auth');
    
      cy.get('div.code-input__input__Jf2CN > div > .code-input__input__Jf2CN').type("091632");cy.wait(4000);
      cy.get('.two-factor-auth__btn__uWI7V').click();  cy.wait(4000); 
//redirected to home page
     cy.url().should('include', 'home');  cy.wait(4000); 
    cy.contains('button', 'Go to my Projects') // Use the 'contains' command to find the button by its text content.
      .click();  cy.wait(4000); 

// test the welcome pop up box is clicked ok,
    cy.get('.modal__send-btn__K0y_t').click(); cy.wait(3000);
 //testing navigation

   //home      
    cy.get(':nth-child(1) > a').click();  cy.wait(3000); 
  //projects
    cy.get(':nth-child(2) > a').click(); cy.wait(4000);
  //DashBoard
    cy.get(':nth-child(3) > a').click(); cy.wait(4000); 
   // cy.get(':nth-child(4) > a').click(); cy.wait(1000); 
   //Settings 
   cy.get(':nth-child(5) > a').click(); cy.wait(4000); 
   //Support 
   cy.get(':nth-child(6) > a').click(); cy.wait(2000); 


//testing settings

    cy.get(':nth-child(5) > a').click(); cy.wait(4000); 
     //Account 
        
   cy.get(':nth-child(1) > div > .form__input__omB1C').type("Test");   cy.wait(3000);
   cy.get(':nth-child(2) > div > .form__input__omB1C').type("Test1");cy.wait(3000);
   cy.get('.form__save-btn__fRpst').click();
  
   //testing support
  cy.get(':nth-child(6) > a').click(); cy.wait(3000);
  // cy.get("input[name=support]").type("");
  cy.get('.form__input__omB1C').type("Hi, We are Allyone demo group. We would like to check this support section"); cy.wait(3000);
   cy.get('.form__send-btn__NyOVB').click();cy.wait(5000);  
   
  

   //log out
 //  cy.get('.ser-btn-wrapper__BK93k').click();
   cy.get('.btn-wrapper__btn__yTGXy').click();cy.wait(3000);  
   cy.get('.popup__item__m8XF4').click();cy.wait(5000);  
   cy.get('.btn_red-text__Z0QfV').click();cy.wait(5000);  
    });
  });
  