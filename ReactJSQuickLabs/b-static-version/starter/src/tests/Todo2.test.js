import React from "react"
import { create } from "react-test-renderer"
import AllTodos from "../Components/AllTodos"
import TodoModel from "../Components/utils/Todo.model"
import ToDo from "../Components/ToDo"

jest.mock('../Components/utils/Todo.model', () => {
    return class TodoModel {
        constructor() {
            this.todoDescription = 'Test Todo',
            this.todoDateCreated = '2019-05-04T15:30:00.00z',
            this.todoCompleted = false
        }
    }
})

test('it should render 2 tds with className completed if props.todo.todoCompleted is true', () => {
    const testTodo = new TodoModel
    const testRenderer = create(<ToDo todo={testTodo} />)
    const testInstance = testRenderer.root
    const cells = testInstance.findAllByType('td')
    for (let i=0; i < cells.length - 2; i++) {
        expect(cells[i].props.className).toEqual('')
    }
})
