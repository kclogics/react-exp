import React from 'react'
import PropTypes from 'prop-types'
import { NavItem } from 'reactstrap'

const NavItemComponent = ({ children, ...props }) => {
  return <NavItem {...props}>{children}</NavItem>
}

NavItemComponent.propTypes = {
  children: PropTypes.node,
}

export default NavItemComponent
