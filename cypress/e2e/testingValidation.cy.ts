describe('User Login', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');  // Visit the login page before each test
     // cy.pause(); // Pause the test execution to allow manual input of email and password
    });
 
    it('should handle validation errors and successful login', () => {
      const email = '';
      const password = 'correct-password';
  
      cy.get(':nth-child(1) > div > .form__input__omB1C')
        .click()
        .type(email); // Enter the email
  
      cy.get('.form__error__fd0QL')
        .should('be.visible')
        .should('have.text', 'Email field is required');
  
      cy.get(':nth-child(1) > div > .form__input__omB1C')
        .clear()
        .type('incorrect-email');
  
      cy.get('.form__error__fd0QL')
        .should('be.visible')
        .should('have.text', 'Incorrect email format');
  
      cy.get(':nth-child(1) > div > .form__input__omB1C')
        .clear()
        .type('correct-email@example.com');
  
      cy.get('.form__error__fd0QL').should('not.exist');
  
      cy.get('input[name="password"]').type(password); // Enter the password
  
      cy.get('button[type="submit"]').click(); // Click the submit button
  
      // Assert that the user is redirected to the next page after successful login
      cy.url().should('include', '/two-factor-auth');
      cy.contains('Welcome, correct-email@example.com!').should('be.visible');
    });
  });
  