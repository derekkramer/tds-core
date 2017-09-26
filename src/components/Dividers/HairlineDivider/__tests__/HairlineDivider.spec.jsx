import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import HairlineDivider from '../HairlineDivider'

describe('HairlineDivider', () => {
  const doShallow = (props = {}) => shallow(<HairlineDivider {...props} />)

  it('renders', () => {
    const hairlineDivider = render(<HairlineDivider />)

    expect(toJson(hairlineDivider)).toMatchSnapshot()
  })

  it('is an HTMl hr element', () => {
    const hairlineDivider = doShallow()

    expect(hairlineDivider).toHaveTagName('hr')
  })

  it('can be horizontal or vertical', () => {
    let hairlineDivider = doShallow()
    expect(hairlineDivider).toHaveClassName('horizontal')

    hairlineDivider = doShallow({ vertical: true })
    expect(hairlineDivider).toHaveClassName('vertical')
  })

  it('can have a gradient', () => {
    let hairlineDivider = doShallow()
    expect(hairlineDivider).toHaveClassName('thin')

    hairlineDivider = doShallow({ gradient: true })
    expect(hairlineDivider).toHaveClassName('gradient')
  })

  it('passes additional attributes to the element', () => {
    const hairlineDivider = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(hairlineDivider).toHaveProp('id', 'the-id')
    expect(hairlineDivider).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const hairlineDivider = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(hairlineDivider).not.toHaveProp('className', 'my-custom-class')
    expect(hairlineDivider).not.toHaveProp('style')
  })
})
