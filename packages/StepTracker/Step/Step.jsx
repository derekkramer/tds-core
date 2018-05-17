import React from 'react'
import PropTypes from 'prop-types'

import Icon from '@tds/core-decorative-icon'

import styles from '../StepTracker.modules.scss'

/**
 * A single step of a StepTracker.
 */

const Step = ({ label, status, stepNumber, stepIndex }) => {
  let cls
  if (status > stepIndex) {
    cls = styles.completed
  } else if (status === stepIndex) {
    cls = styles.processing
  } else {
    cls = styles.step
  }

  return (
    <li className={cls} aria-label={label} aria-current={status === stepIndex ? 'true' : 'false'}>
      <span className={styles.icon}>
        {status > stepIndex ? <Icon symbol="checkmark" size={16} variant="inverted" /> : <br />}
      </span>
      <span className={styles.label}>
        {stepNumber}. {label}
      </span>
    </li>
  )
}

Step.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  stepNumber: PropTypes.number.isRequired,
  stepIndex: PropTypes.number.isRequired,
}

export default Step
