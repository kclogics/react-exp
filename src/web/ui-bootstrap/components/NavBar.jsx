import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'reactstrap'

import modules from '../../../../../../modules'

const NavBar = () => (
  <Navbar color="faded" light>
    <Container>
      <Nav>
        <NavLink to="/" className="navbar-brand">
          LJ Hooker Avnu
        </NavLink>
        {modules.navItems}
      </Nav>

      <Nav className="ustify-content-end">{modules.navItemsRight}</Nav>
    </Container>
  </Navbar>
)

export default NavBar
