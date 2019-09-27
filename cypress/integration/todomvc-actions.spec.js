/// <reference types="cypress" />

import { navigate, addToDo, validateTodoTxt } from "../page-objects/todo-page"

describe('cypress documentation', () => {
    it('does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('todo actions', () => {

    beforeEach(() => {
        navigate() // using page objects

        addToDo('Clean room') // using page objects
    })
    it('should add a new todo to the list', () => {
        
        validateTodoTxt(0, 'Clean room')
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
