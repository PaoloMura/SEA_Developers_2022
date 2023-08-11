import React from 'react'
import { create, act } from 'react-test-renderer'
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

    describe('onChange event tests', () => {
        test('it should render the new value in the input when todoDescription onChange is activated', () => {
            const testValue = 'Test'

            const testRenderer = create(<TodoForm />)
            const testInstance = testRenderer.root
            const descInput = testInstance.findByProps({ name: 'todoDescription' })
            
            expect(descInput.props.value).toBe('')

            act(() => {
                descInput.props.onChange({target: {value: testValue}})
            })

            expect(descInput.props.value).toBe(testValue)
        })

        test('it should render the new value in the input when todoCompleted onChange is activated', () => {
            const testRenderer = create(<TodoForm />)
            const testInstance = testRenderer.root
            const compInput = testInstance.findByProps({ name: 'todoCompleted' })
            
            expect(compInput.props.checked).toBeFalsy()

            act(() => {
                compInput.props.onChange({target: {checked: true}})
            })

            expect(compInput.props.checked).toBeTruthy()
        })

        test('it should render the new value in the input when submit description is changed', () => {
            const testRenderer = create(<TodoForm />)
            const testInstance = testRenderer.root
            const submitInput = testInstance.findByProps({ type: 'submit' })
            
            expect(submitInput.props.disabled).toBeTruthy()
            
            const descInput = testInstance.findByProps({ name: 'todoDescription' })
            act(() => {
                descInput.props.onChange({target: {value: 'something'}})
            })

            expect(submitInput.props.disabled).toBeFalsy()
        })
    })
})
