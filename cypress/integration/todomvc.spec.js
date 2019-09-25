/// <reference types="cypress" />

describe('Cypress Documentation', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('TAU Course Tests', () => {
    it('should navigate to the TodoMvC App', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    })

    it('should be able to add a new todo to the list and mark it as complete', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    
        cy.get('.new-todo', {timeout: 3000}).type("Clean room{enter}") // command chaining

        cy.get('label').should('have.text', 'Clean room') // use cypress' should method to validate tests
        cy.get('.toggle').should('not.be.checked')

        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through') // checks css after action is performed
    
        cy.contains('Clear').click()

        cy.get('.todo-list').should('not.have.descendants', 'li') // validates whether list is cleared after clicking clear list
    })

})
