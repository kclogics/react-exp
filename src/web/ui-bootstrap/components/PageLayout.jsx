import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Navbar,
  Collapse,
  Nav,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap'
import { Auth } from 'aws-amplify'

import modules from '../../../../../../modules'
import logo from '../../../../../assets/logo/logo.svg'

const Content = styled.div`
  transition: all 2s;
`

const Logo = styled.img`
  height: 35px;
`

const ContainerWrapper = styled(Container)`
  background-color: #fff;
`

const NavbarWrapper = styled(Navbar)`
  padding: 10px 0;
`

class PageLayout extends React.Component {
  state = {
    collapsed: true,
    currentUserInfo: null,
  }

  async componentDidMount() {
    const currentUserInfo = await Auth.currentUserInfo()
    this.setState({ currentUserInfo })
  }

  toggleNavbar = () =>
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }))

  render() {
    const { children } = this.props
    const { currentUserInfo } = this.state
    return (
      <section className="d-flex flex-column flex-grow">
        <ContainerWrapper fluid className="no-gutters">
          <Container>
            <NavbarWrapper light expand="md">
              <NavbarToggler onClick={this.toggleNavbar} />
              <NavbarBrand href="/" className="m-auto">
                <Logo src={logo} />
              </NavbarBrand>

              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar className="mr-auto">
                  {modules.navItems}
                </Nav>
                <Nav navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {currentUserInfo &&
                        currentUserInfo.attributes &&
                        currentUserInfo.attributes.name}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={() => Auth.signOut()}>
                        Sign out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </NavbarWrapper>
          </Container>
        </ContainerWrapper>
        <Content id="content">{children}</Content>
      </section>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
