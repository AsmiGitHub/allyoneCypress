// two-factor-auth.spec.js
describe('Two-Factor Authentication', () => {
    it('should complete two-factor authentication after successful login', () => {
      cy.visit('http://localhost:3000');
      cy.get("input[name=email]").type("emily.grimes@allygroup.com.au");
      cy.get("input[name=password]").type("Emily2003*");
      cy.get('.login-btn__CyH4A').click();
      cy.url().should('include', 'two-factor-auth');
      cy.get('div.code-input__input__Jf2CN > div > .code-input__input__Jf2CN').type("147122");
      cy.get('.two-factor-auth__btn__uWI7V').click();
      cy.url().should('include', 'home');
      cy.contains('button', 'Go to my Projects').click();
    });
  });
  