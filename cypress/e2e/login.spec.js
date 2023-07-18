import { login } from './loginUtils';

describe('Two-Factor Authentication', () => {
  it('should complete two-factor authentication after successful login', () => {
    const email = "emily.grimes@allygroup.com.au";
    const password = "Emily2003*";

    login(email, password);

    cy.url().should('include', 'two-factor-auth');
    // Rest of your test code...
  });
});
