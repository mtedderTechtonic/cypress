/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page';
import { each } from 'cypress/types/bluebird';

describe('visual validation', () => {
	// mocha.js preamble
	before(() => todoPage.navigate());

	beforeEach(() =>
		cy.eyesOpen({
			appName: 'TAU TodoMVC',
			batchName: 'TAU TodoMVC Hey!',
			browser: [
				{ name: 'chrome', width: 1024, height: 768 },
				{ name: 'chrome', width: 800, height: 600 },
				{ name: 'firefox', width: 1024, height: 768 },
				{ deviceName: 'iPhone X' }
			]
		})
	);
	afterEach(() => cy.eyesClose());

	it('should look good', () => {
		// test function
		cy.eyesCheckWindow('empty todo list');

		todoPage.addToDo('Clean room');
		todoPage.addToDo('Learn JavaScript');

		cy.eyesCheckWindow('two todos');

		todoPage.toggleTodo();

		cy.eyesCheckWindow('mark as completed');
	});
});
