/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () => { // mocha.js preamble
    before(() => todoPage.navigate())

    it('should look good', () => { // test function
        todoPage.addToDo('Clean room')
        todoPage.addToDo('Learn JavaScript')

        todoPage.toggleTodo()
    })
})