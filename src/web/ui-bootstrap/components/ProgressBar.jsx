import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'reactstrap'

const ProgressBar = ({ percentage, ...props }) => (
  <Progress {...props} value={percentage} />
)

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
}

ProgressBar.defaultProps = {
  percentage: 0,
}

export default ProgressBar
