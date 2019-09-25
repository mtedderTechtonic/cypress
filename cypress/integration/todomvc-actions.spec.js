/// <reference types="cypress" />

describe('cypress documentation', () => {
    it('does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('todo actions', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo', {timeout: 3000}).type("Clean room{enter}") // command chaining
    })
    it('should add a new todo to the list', () => {
        
        cy.get('label').should('have.text', 'Clean room') // use cypress' should method to validate tests
        cy.get('.toggle').should('not.be.checked')
    })
    
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through') // checks css after action is performed
    })

       
    it('should clear completed todos', () => {
        cy.get('.toggle').click()

        cy.contains('Clear').click()

        cy.get('.todo-list').should('not.have.descendants', 'li') // validates whether list is cleared after clicking clear list
        
    })
})
