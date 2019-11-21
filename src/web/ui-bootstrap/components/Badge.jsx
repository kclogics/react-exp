import React from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'reactstrap'

const BadgeComponent = ({ children, ...props }) => {
  return <Badge {...props}>{children}</Badge>
}

BadgeComponent.propTypes = {
  children: PropTypes.node,
}

export default BadgeComponent
