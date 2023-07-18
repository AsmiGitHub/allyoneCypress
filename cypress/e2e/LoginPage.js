class LoginPage {
    visit() {
      cy.visit('http://localhost:3000');
    }
  
    fillEmail(email) {
      cy.get('input[name="email"]').type("emily.grimes@allygroup.com.au");
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type("Emily2003*");
    }
  
    submitLoginForm() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default new LoginPage();
  