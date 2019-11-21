import React from 'react'
import PropTypes from 'prop-types'
import { Button as RSButton } from 'reactstrap'

const Button = ({ children, style, color, ...props }) => {
  const mergedStyle = {
    ...style,
    textDecoration: color === 'link' && 'none',
  }
  return (
    <RSButton style={mergedStyle} {...props} color={color}>
      {children}
    </RSButton>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  children: PropTypes.node,
}

export default Button
