// VALIDATION TESTS FOR /login
// login_spec.js

describe('/login', () => {
	beforeEach(() => {
		cy.visit('/#/login');
	});

	it('greets with Sign in', () => {
		cy.contains('h1', 'Sign In');
	});

	it('links to #/register', () => {
		cy.contains('Need an account?').should('have.attr', 'href', '#/register');
	});

	it('requires email', () => {
		cy.get('form')
			.contains('Sign in')
			.click();
		cy.get('.error-messages').should('contain', "email can't be blank");
	});

	it('requires password', () => {
		cy.get('[data-test=email]').type('joe@example.com{enter}');
		cy.get('.error-messages').should('contain', "password can't be blank");
	});

	it('requires valid username and password', () => {
		cy.get('[data-test=email]').type('joe@example.com');
		cy.get('[data-test=password]').type('invalid{enter}');
		cy.get('.error-messages').should('contain', 'email or password is invalid');
	});

	it('navigates to #/ on successful login', () => {
		cy.get('[date-test=email]').type('joe@example.com');
		cy.get('[data-test=password]').type('joe#{enter}');
		cy.hash().should('eq', '#/');
	});
});

// USER PROFILE SETTINGS TESTS
// settings_spec.js

describe('/settings', () => {
    beforeEach(() => {
		// ...must login first
		cy.login()
		// and then visit settings...
        cy.visit('/#/settings')
    })
})