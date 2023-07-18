export function login(email, password) {
    cy.visit('http://localhost:3000');
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get('.login-btn__CyH4A').click();
  }
  