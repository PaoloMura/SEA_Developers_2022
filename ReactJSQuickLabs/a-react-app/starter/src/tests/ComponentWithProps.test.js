import React from 'react'
import { create } from 'react-test-renderer'
import ComponentWithProps from '../ComponentWithProps'

test('It should render the correct heading from props when a header prop is supplied', () => {
    const testHeader = 'some text'
    const testRenderer = create(<ComponentWithProps header={testHeader}/>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType('h1').children).toContain(testHeader)
})

test('It should render the correct content from props when a content prop is supplied', () => {
    const testContent = 'some text'
    const testRenderer = create(<ComponentWithProps content={testContent} />)
    const testInstance = testRenderer.root
    const renderedParagraphs = testInstance.findAllByType('p')
    expect(renderedParagraphs[0].children).toContain(testContent)
})

test('It should render the correct number from props when a number prop is supplied', () => {
    const testNumber = 5
    const testRenderer = create(<ComponentWithProps number={testNumber} />)
    const testInstance = testRenderer.root
    const renderedParagraphs = testInstance.findAllByType('p')
    expect(renderedParagraphs[1].children).toContain(testNumber.toString())
})