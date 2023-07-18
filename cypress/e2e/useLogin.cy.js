describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Visit the login page before each test
  });

  it('should display validation error for empty email field', () => {
    cy.get('input[name="email"]').clear(); // Clear the email field

    cy.get('.form__error__fd0QL')
      .should('be.visible')
      .should('have.text', 'This field is required');
  });

  it('should display validation error for invalid email format', () => {
    const invalidEmail = 'invalid-email';

    cy.get('input[name="email"]').type(invalidEmail); // Enter an invalid email

    cy.get('.form__error__fd0QL')
      .should('be.visible')
      .should('have.text', 'Incorrect email format');
  });

  it('should display validation error for empty password field', () => {
    cy.get('input[name="password"]').clear(); // Clear the password field

    cy.get('.form__error__fd0QL')
      .should('be.visible')
      .should('have.text', 'This field is required');
  });

  // Add more test cases for other validation scenarios as needed
});
