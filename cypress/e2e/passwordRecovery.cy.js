describe('Two-Factor Authentication', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should complete two-factor authentication after successful login', () => {
      cy.get("input[name=email]").type("emily.grimes@allygroup.com.au");
      cy.get("input[name=password]").type("Emily2003*");
      cy.get('.login-btn__CyH4A').click();
      
      // Verify redirection to the two-factor-auth page
      cy.url().should('include', 'two-factor-auth');
  
      // Test Case 1: Verify Successful Login
      cy.get('div.code-input__input__Jf2CN > div > .code-input__input__Jf2CN').should('be.visible');
  
      // Test Case 2: Invalid Two-Factor Authentication Code
      cy.get('div.code-input__input__Jf2CN > div > .code-input__input__Jf2CN').type('000000'); // Invalid code
      cy.get('.two-factor-auth__btn__uWI7V').click();
      cy.contains('Invalid code').should('be.visible');
  
      // Test Case 3: Empty Two-Factor Authentication Code
      cy.get('div.code-input__input__Jf2CN > div > .code-input__input__Jf2CN').clear();
      cy.get('.two-factor-auth__btn__uWI7V').click();
      cy.contains('Please enter the code').should('be.visible');
  
      // Test Case 4: Successful Two-Factor Authentication
      cy.get('div.code-input__input__Jf2CN > div > .code-input__input__Jf2CN').type('091632'); // Valid code
      cy.get('.two-factor-auth__btn__uWI7V').click();
      // Add assertions to verify successful completion of two-factor authentication and redirection to authenticated page.
  
      // Test Case 5: Resend Two-Factor Authentication Code
      cy.contains('Resend Code').click();
      // Add assertions to verify that a new two-factor authentication code is sent successfully.
    });
  });
  