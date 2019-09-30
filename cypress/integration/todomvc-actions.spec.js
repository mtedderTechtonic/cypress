/// <reference types="cypress" />

import {
	navigate,
	addTodo,
	validateTodoTxt,
	validateToggleState,
	toggleTodo,
	validateTodoCompletedState,
	clearCompleted,
	validateNumberOfTodosShown
} from '../page-objects/todo-page';

describe('cypress documentation', () => {
	it('does not do much!', () => {
		expect(true).to.equal(true);
	});
});

describe('todo actions', () => {
	beforeEach(() => {
		navigate(); // using page objects

		addTodo('Clean room'); // using page objects
	});

	it('should add a new todo to the list', () => {
		validateTodoTxt(0, 'Clean room');
		validateToggleState(0, false);
	});

	describe('toggling todos', () => {
		it('should toggle test correctly', () => {
			toggleTodo(0);
			validateTodoCompletedState(0, true);
		});

		it('should clear completed', () => {
			toggleTodo(0);
			clearCompleted();
			validateNumberOfTodosShown(0);
		});
	});
});
