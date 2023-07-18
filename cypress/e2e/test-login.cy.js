describe('template spec', () => {
    it('passes', () => {
      const apiUrl = Cypress.env('API_URL');
  
      cy.visit('http://localhost:3000');
  
      cy.pause(); // Pause the test execution to allow manual input of email and password
  
      cy.get("input[name=email]").type(" ");
      cy.get("input[name=password]").type(" ").type("{enter}");
  //The test sets up an intercept using cy.intercept(), specifically intercepting a "POST" request to ${apiUrl}/token (constructed using the previously obtained apiUrl).
  // This intercept allows the test to capture and manipulate the request and response.
    /** */  cy.intercept('POST', `${apiUrl}/token`).as('loginRequest');
      cy.wait('@loginRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.property('refresh');
        expect(response.body).to.have.property('access');
  
        cy.get("input[name=verificationCode]").type("your-verification-code").type("{enter}");
  
        // Continue with further assertions or actions based on the response
        // ...
      });
  
      cy.on('uncaught:exception', (error, runnable) => {
        throw new Error(`API request failed: ${error.message}`);
      });
    });
  });
  