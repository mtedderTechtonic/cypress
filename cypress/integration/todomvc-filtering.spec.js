/// <reference types='cypress' />

import {
	navigate,
	addTodo,
	toggleTodo,
	showOnlyActiveTodos,
	validateNumberOfTodosShown,
	showOnlyCompletedTodos,
	showAllTodos
} from '../page-objects/todo-page';

describe('filtering', () => {
	beforeEach(() => {
		navigate();
		addTodo('Clean room');
		addTodo('Learn JavaScript');
		addTodo('Use Cypress');
		toggleTodo(1);

		// see todo-page.js for logic
	});

	it('should filter "Active" correctly', () => {
		showOnlyActiveTodos();
		validateNumberOfTodosShown(2);
	});

	it('should filter "Completed" correctly', () => {
		showOnlyCompletedTodos();
		validateNumberOfTodosShown(1);

		// see todo-page.js for logic
	});

	it('should filter "All" correctly', () => {
		showAllTodos();
		validateNumberOfTodosShown(3);

		// see todo-page.js for logic
	});
});
