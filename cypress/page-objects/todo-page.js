
   export function navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    export function addToDo(todoText) {
        cy.get('.new-todo').type(`${todoText}{enter}`) // command chaining
    }

    export function validateTodoTxt(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1})`).should('have.text', expectedText) // use cypress' should method to validate tests
    }