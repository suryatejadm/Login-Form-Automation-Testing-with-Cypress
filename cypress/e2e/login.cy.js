describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/index.html');
  });

  it('shows error when fields are empty', () => {
    cy.get('button').click();
    cy.contains('Please enter email and password').should('be.visible');
  });

  it('shows error for invalid email', () => {
    cy.get('input[name="email"]').type('invalid@email');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').click();
    cy.contains('Invalid email').should('be.visible');
  });

  it('logs in with correct credentials', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('correctpassword');
    cy.get('button').click();
    cy.contains('Login successful').should('be.visible');
  });
});
