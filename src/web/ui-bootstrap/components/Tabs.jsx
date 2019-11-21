import React from 'react'
import PropTypes from 'prop-types'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

const Tabs = ({ children, ...props }) => (
  <Nav tabs {...props}>
    {children}
  </Nav>
)

Tabs.propTypes = {
  children: PropTypes.node,
}

const Item = ({ children, containerProps, ...props }) => (
  <NavItem {...containerProps}>
    <NavLink {...props}>{children}</NavLink>
  </NavItem>
)

Item.propTypes = {
  children: PropTypes.node,
  containerProps: PropTypes.object,
}

const Content = ({ children, ...props }) => (
  <TabContent {...props}>{children}</TabContent>
)

Content.propTypes = {
  children: PropTypes.node,
}

const Panel = ({ children, ...props }) => (
  <TabPane {...props}>{children}</TabPane>
)

Panel.propTypes = {
  children: PropTypes.node,
}

Tabs.Item = Item
Tabs.Content = Content
Tabs.Panel = Panel

export default Tabs
