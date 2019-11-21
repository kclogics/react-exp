import React from 'react'
import PropTypes from 'prop-types'
import { CardSubtitle as RSCardSubtitle } from 'reactstrap'

const CardSubtitle = ({ children, ...props }) => {
  return <RSCardSubtitle {...props}>{children}</RSCardSubtitle>
}

CardSubtitle.propTypes = {
  children: PropTypes.node,
}

export default CardSubtitle
