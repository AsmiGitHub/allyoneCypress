describe('Forgot PASSWORD', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Visit the login page before each test
      // cy.pause(); // Pause the test execution to allow manual input of email and password
     
    });
  
    it('should check the error if the field is empty',()=> {
      cy.wait(4000);
      //cy.get('.input__yMvQB > div > .form__input__omB1C').type(" ");
     //cy.wait(4000);
     cy.get('.signup-btn__PqSz5').click();
      cy.wait(4000);
      cy.url().should('include', '/register');
      cy.get(':nth-child(1) > div > .form__input__omB1C');cy.wait(4000);
      cy.get(':nth-child(2) > div > .form__input__omB1C');cy.wait(4000);
      cy.get(':nth-child(3) > div > .form__input__omB1C');cy.wait(4000);
      cy.get(':nth-child(4) > div > .form__input__omB1C');cy.wait(4000);
      cy.get(':nth-child(5) > div > .form__input__omB1C');cy.wait(4000);
      cy.get(':nth-child(6) > div > .form__input__omB1C');cy.wait(4000);
      cy.get(':nth-child(7) > div > .form__input__omB1C');cy.wait(4000);

      cy.get('.register-btn__scuFq').click();cy.wait(4000);

      cy.get(':nth-child(1) > .form__error__fd0QL').contains("This field is required").should("be.visible");cy.wait(4000);
      cy.get(':nth-child(2) > .form__error__fd0QL').contains("This field is required").should("be.visible");cy.wait(4000);
      cy.get(':nth-child(3) > .form__error__fd0QL').contains("This field is required").should("be.visible");cy.wait(4000);
      cy.get(':nth-child(4) > .form__error__fd0QL').contains("This field is required").should("be.visible");cy.wait(4000);
      cy.get(':nth-child(5) > .form__error__fd0QL').contains("This field is required").should("be.visible");cy.wait(4000);
      cy.get(':nth-child(6) > .form__error__fd0QL').contains("This field is required").should("be.visible");cy.wait(4000);
      cy.get(':nth-child(7) > .form__error__fd0QL').contains("This field is required").should("be.visible");cy.wait(4000);

    });

    it('should show an error message for invalid email format', () => {
      // Perform the forget password form with an invalid email
//Create Emails
//Did a small modification so that you can decied the email length you need
const emails = (val) => {
    var email = "";
    var possible = "abcd@.gh";
    for (var i = 0; i < val; i++){
    email += possible.charAt(Math.floor(Math.random() * possible.length));}
    return email;
    }
    
    
    //validate emails
    //I have used a general Regex here, use the regex you have used in your website insted
    
    const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
    }
    
    //Test Cases (I have added 10 loops so it will create 10 test cases)
    //Change the test case count as much as you need
    for (let index = 0; index < 10; index++) {
    const TestEmail = emails(10)
    const EmailState = validateEmail(TestEmail)
    it("EmailTest -"+ TestEmail +" - " + EmailState,() => {
    cy.get('#email_signup').type(TestEmail)
    cy.get('.nextBtn').click();
        if(!EmailState){
             cy.get('.error-message').should('be.visible');
        }else{
             cy.get('.error-message').should('not.be.visible');
        }
    })
    }
      
    });
  

    it('should show a success message for valid email', () => {
      // Perform the forget password form with a valid email
   
    
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
  