import LoginPage from './LoginPage';

describe('User Login', () => {
  beforeEach(() => {
    LoginPage.visit(); // Use the page object method to visit the login page before each test
  });

  it('should perform login with valid credentials', () => {
    LoginPage.fillEmail('exampleuser@example.com'); // Use the page object method to fill the email field
    LoginPage.fillPassword('password'); // Use the page object method to fill the password field
    LoginPage.submitLoginForm(); // Use the page object method to submit the login form

    // Perform assertions or additional actions after login
  });
});