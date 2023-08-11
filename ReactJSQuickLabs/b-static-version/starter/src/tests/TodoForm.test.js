import React from 'react'
import { create } from 'react-test-renderer'
import TodoForm from '../Components/TodoForm'

jest.mock('../Components/utils/DateCreated', () => {
    const MockDateCreated = () => {
        return <span testid='dateCreated'>Date Created Component</span>
    }
    return MockDateCreated
})

describe('TodoForm test suite', () => {
    describe('DateCreated function and render tests', () => {
        test('should render a DateCreated component', () => {
            const testRenderer = create(<TodoForm />)
            const testInstance = testRenderer.root
            const dateCreated = testInstance.find(e1 => {
                return e1.type === 'span' && e1.props.testid === 'dateCreated'
            })
            expect(dateCreated).toBeTruthy()
            expect(dateCreated.children).toContain('Date Created Component')
        })
    })
})