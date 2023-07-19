import Chance from 'chance';
//import { CommonUrl } from '../e2e/utils/commonUrl.cy';

describe('Forgot PASSWORD', () => {
  const chance = new Chance();

    beforeEach(() => {
    // cy.CommonUrl();
   cy.visit('http://localhost:3000'); // Visit the login page before each test
      // cy.pause(); // Pause the test execution to allow manual input of email and password
      cy.get('.signup-btn__PqSz5').click();
     
    });
  
    it('should check the error if the field is empty',()=> {
      cy.wait(4000);
      //cy.get('.input__yMvQB > div > .form__input__omB1C').type(" ");
     //cy.wait(4000);
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

  //testing the types of input field and submit

    it('should have properties type correct', () => {
      // Perform the forget password form with a valid email
      cy.get(':nth-child(1) > div > .form__input__omB1C').should('have.attr','type','text');cy.wait(4000);
      cy.get(':nth-child(2) > div > .form__input__omB1C').should('have.attr', 'type', 'text');cy.wait(4000);
      cy.get(':nth-child(3) > div > .form__input__omB1C').should('have.attr', 'type', 'text');cy.wait(4000);
      cy.get(':nth-child(4) > div > .form__input__omB1C').should('have.attr', 'type', 'text');cy.wait(4000);
      cy.get(':nth-child(5) > div > .form__input__omB1C').should('have.attr', 'type', 'text');cy.wait(4000);
      cy.get(':nth-child(6) > div > .form__input__omB1C').should('have.attr', 'type', 'password');cy.wait(4000);
      cy.get(':nth-child(7) > div > .form__input__omB1C').should('have.attr', 'type', 'password');cy.wait(4000);
      cy.get('.register-btn__scuFq').should('have.attr','type','submit').click();cy.wait(4000);

    });
  //testing for the invalid email  
    it('should match the invalid error for the email input', () => {
      cy.get(':nth-child(5) > div > .form__input__omB1C').type('invalid-email');
      cy.get(':nth-child(5) > .form__error__fd0QL').contains('Incorrect email format').should('be.visible');
    })
    
   //testing for the password match with confrim password
  
   it('should require passwords to match with the password and confrim password and have at least 6 characters', () => {
   
    const shortPassword = 'abc12';
    const password = chance.string({ length: 10, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()' });
    const confirmPassword = password;
    cy.get(':nth-child(1) > div > .form__input__omB1C').type("Ashmita Ghimire");;cy.wait(4000);
    cy.get(':nth-child(2) > div > .form__input__omB1C').type("1 morre");;cy.wait(4000);
    cy.get(':nth-child(3) > div > .form__input__omB1C').type("0451 524 368");;cy.wait(4000);
    cy.get(':nth-child(4) > div > .form__input__omB1C').type("Allyone");;cy.wait(4000);
    cy.get(':nth-child(5) > div > .form__input__omB1C').type("asmi123@gmail.com");;cy.wait(4000);
   
    
    // Test case: Password and confirm password should not match
    cy.get(':nth-child(6) > div > .form__input__omB1C').type(password);
    cy.get(':nth-child(7) > div > .form__input__omB1C').type('differentPasßsword');
    cy.get('.register-btn__scuFq').click();cy.wait(4000);
    cy.get('.form__error__fd0QL').contains("Passwords doesn't match").should('exist');

    // Test case: Password should have at least 6 characters
    cy.get(':nth-child(6) > div > .form__input__omB1C').clear().type('123');
    cy.get(':nth-child(7) > div > .form__input__omB1C').clear().type("vgyju");
    cy.get('.register-btn__scuFq').click();cy.wait(4000);
    cy.get('.form__error__fd0QL').contains('This password is too short. It must contain at least 6 characters.').should('exist');

    // Test case: Password and confirm password should match
    cy.get(':nth-child(6) > div > .form__input__omB1C').type("password");
    cy.get(':nth-child(7) > div > .form__input__omB1C').type("password");
    cy.get('.register-btn__scuFq').click();cy.wait(4000);
    cy.contains('Passwords do not match').should('not.exist'); // Assuming you have an error message for mismatching passwords.

  });
  it('should show error message for a common password', () => {
    const commonPassword = 'password'; // Replace with a common password that triggers the error message

    // Enter the common password in the password field
    cy.get('.form__input__omB1C[name="password"]').type(commonPassword);
    cy.get('.form__input__omB1C[name="confirmPassword"]').type(commonPassword); // Assuming there's a confirm password field

    // Submit the form (or interact with the submit button if it exists)
    cy.get('form').submit();

    // Check if the error message appears
    cy.contains('Password is common').should('be.visible');
  });

  it('should not show error message for a non-common password', () => {
    const nonCommonPassword = 'securePassword123'; // Replace with a non-common password

    // Enter the non-common password in the password field
    cy.get('.form__input__omB1C[name="password"]').type(nonCommonPassword);
    cy.get('.form__input__omB1C[name="confirmPassword"]').type(nonCommonPassword); // Assuming there's a confirm password field

    // Submit the form (or interact with the submit button if it exists)
    cy.get('form').submit();

    // Check if the error message is NOT present
    cy.contains('Password is common').should('not.exist');
  });
  
});
  