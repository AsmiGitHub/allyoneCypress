/** describe('Forgot PASSWORD', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');  // Visit the login page before each test
       // cy.pause(); // Pause the test execution to allow manual input of email and password
      });
   
    it('should complete the forget password with the email inserted', () => {   
      // Perform the forget password form
      cy.get('.forgot-text__BoilM').click();cy.wait(4000);
      cy.get('.input__yMvQB > div > .form__input__omB1C').type("ashmita.ghimire@allygroup.com.au");cy.wait(4000);
      cy.get('.send-btn__KE7EE').click();cy.wait(4000);
      cy.get('.close-button__ZgEa2').click();cy.wait(4000);

    });
  });
  */

  describe('Forgot PASSWORD', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Visit the login page before each test
      // cy.pause(); // Pause the test execution to allow manual input of email and password
      cy.get('.forgot-text__BoilM').click();
    });
  
    it('should check the error if the field is empty',()=> {
      cy.wait(4000);
      //cy.get('.input__yMvQB > div > .form__input__omB1C').type(" ");
     //cy.wait(4000);
      cy.get('.send-btn__KE7EE').click();
      cy.wait(4000);
      cy.get('.form__error__fd0QL').contains("This field is required").should("be.visible");
      cy.get('.form__error__fd0QL')
    });

    it('should show an error message for invalid email', () => {
      // Perform the forget password form with an invalid email
      
      cy.wait(4000);
      cy.get('.input__yMvQB > div > .form__input__omB1C').type("invalid-email");
      cy.wait(4000);
      cy.get('.send-btn__KE7EE').click();
      cy.wait(4000);
      cy.get('.form__error__fd0QL').contains("Incorrect email format").should("be.visible");
    });
  

    it('should show a success message for valid email', () => {
      // Perform the forget password form with a valid email
   
      cy.wait(4000);
      cy.get('.input__yMvQB > div > .form__input__omB1C').type("asmi.ghimire077@gmail.com");
      cy.wait(4000);
      cy.get('.send-btn__KE7EE').click();
      cy.wait(4000);
      cy.get('.success-text__oCurF').contains("Email sent. Please check your inbox").should("be.visible");
      cy.wait(4000); 
      cy.get('.close-button__ZgEa2').click();

    });
    
    //testing this part as there was bug in the code so Saransh will let me know.
    /** it('should show an error message for an email not found', () => {
      // Visit the "Forgot Password" page
      cy.wait(4000);
      
      // Enter an invalid email (an email that doesn't exist in the system)
      cy.get('.input__yMvQB > div > .form__input__omB1C').type('invalidemail@example.com');
    
      // Click the submit button
      cy.get('.send-btn__KE7EE').click();
    
      // Verify that the error message is displayed for the email not found
      cy.get('.form__error__fd0QL').contains("We could not send you an email. Please check that the email you entered is correct").should("be.visible");
    });
    */
   

  });
  