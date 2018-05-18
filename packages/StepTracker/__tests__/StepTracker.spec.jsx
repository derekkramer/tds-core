import React from 'react'
import { render, mount } from 'enzyme'

import Icon from '@tds/core-decorative-icon'

import StepTracker from '../StepTracker'

describe('<StepTracker />', () => {
  const defaultProps = {
    current: 1,
    steps: ['Login', 'Purchase', 'Checkout'],
  }

  const doMount = (overrides = {}) => {
    const container = mount(<StepTracker {...defaultProps} {...overrides} />)
    const innerSteps = container.find('[data-testid="innerStep"]')

    return {
      container,
      innerSteps,
    }
  }

  const doRender = (overrides = {}) => render(<StepTracker {...defaultProps} {...overrides} />)

  it('renders', () => {
    const stepTracker = doRender()

    expect(stepTracker).toMatchSnapshot()
  })

  it('contains defined steps', () => {
    const stepTracker = doMount()

    expect(stepTracker.innerSteps.length).toBe(3)
  })

  it('renders a single step in progress', () => {
    const { container, innerSteps } = doMount({ current: 2 })
    expect(container.find('div.stepActive').length).toBe(3)

    expect(innerSteps.at(0)).toContainReact(
      <Icon symbol="checkmark" size={16} variant="inverted" />
    )
    expect(innerSteps.at(1)).toContainReact(
      <Icon symbol="checkmark" size={16} variant="inverted" />
    )
    expect(innerSteps.at(2)).not.toContainReact(
      <Icon symbol="checkmark" size={16} variant="inverted" />
    )
  })
})
