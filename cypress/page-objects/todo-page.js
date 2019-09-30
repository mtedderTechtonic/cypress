
   export function navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    export function addTodo(todoText) {
        cy.get('.new-todo').type(`${todoText}{enter}`) // command chaining
    }

    export function toggleTodo(todoIndex) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }

    export function showOnlyCompletedTodos() {
        cy.contains('Completed').click()
    }

    export function showOnlyActiveTodos() {
        cy.contains('Active').click()
    }

    export function showAllTodos() {
        cy.contains('All').click()
    }

    export function clearCompleted() {
        cy.contains('Clear completed').click()
    }

    export function validateNumberOfTodosShown(expectedNumberOfTodos) {
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }

    export function validateTodoCompletedState(todoIndex, shouldBeCompleted) {
        const l = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

        l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
    }

    export function validateTodoTxt(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1})`).should('have.text', expectedText) // use cypress' should method to validate tests
    }

    export function validateToggleState(todoIndex, shouldBeToggled) {
        const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)

        label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
    }