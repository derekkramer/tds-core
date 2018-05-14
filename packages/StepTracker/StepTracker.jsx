import React from 'react'
import PropTypes from 'prop-types'
import AirbnbPropTypes from 'airbnb-prop-types'

import { warn } from '../../shared/utils/warn'

import Step from './Step/Step'

import styles from './StepTracker.modules.scss'

/**
 * Show the current position in a sequence of steps.
 *
 * @version ./package.json
 */

const StepTracker = props => {
  if (props.current > props.steps.length) {
    warn('StepTracker', '`current` prop is greater then the length of the `steps` prop.')
  }

  return (
    <div>
      <ul className={styles.container}>
        {props.steps.map((label, index) => {
          return React.createElement(StepTracker.Step, {
            label,
            status: props.current,
            label: props.steps[index], // eslint-disable-line no-dupe-keys
            stepNumber: index + 1,
            stepIndex: index,
            key: index, // eslint-disable-line react/no-array-index-key
          })
        })}
      </ul>
      <div className={styles.mobileLabel}>
        <span className={styles.mobileLabelStepInfo}>
          {props.stepText}{' '}
          {props.current < props.steps.length ? props.current + 1 : props.steps.length}{' '}
          {props.outOfText} {props.steps.length}:{' '}
        </span>
        {props.current < props.steps.length
          ? props.steps[props.current]
          : props.steps[props.steps.length - 1]}
      </div>
    </div>
  )
}

StepTracker.propTypes = {
  /**
   * The active step. The minimum value is 0, while the maximum value is the length of the steps prop.
   */
  current: AirbnbPropTypes.and([PropTypes.number, AirbnbPropTypes.nonNegativeInteger]),
  /**
   * The steps as an array of strings.
   */
  steps: PropTypes.array.isRequired,
  /**
   * String for text to display in front of current step number.
   */
  stepText: PropTypes.string,
  /**
   * String for text to display in between current step and total step numbers.
   */
  outOfText: PropTypes.string,
}

StepTracker.defaultProps = {
  stepText: 'Step',
  outOfText: 'of',
}

StepTracker.Step = Step

export default StepTracker
