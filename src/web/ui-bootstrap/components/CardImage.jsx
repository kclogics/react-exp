import React from 'react'
import PropTypes from 'prop-types'
import { CardImg } from 'reactstrap'

const CardImage = ({ children, ...props }) => {
  return <CardImg {...props}>{children}</CardImg>
}

CardImage.propTypes = {
  children: PropTypes.node,
}

export default CardImage
