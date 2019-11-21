import React from 'react'
import styled from 'styled-components'
import { Nav, NavLink } from 'reactstrap'
import { Auth } from 'aws-amplify'

import modules from '../../../../../../modules'
import logo from '../../../../../assets/logo/logo.svg'
import { MenuItem } from '.'

const Navbar = styled.nav`
  min-width: 250px;
  max-width: 250px;
  background: #000;
  color: #fff;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  &.active {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    .sidebar-header h3,
    .CTAs {
      display: none;
    }
    .sidebar-header strong {
      display: block;
    }
  }
  ul li a {
    text-align: left;
  }
  &.active {
    ul {
      li a {
        padding: 20px 10px;
        text-align: center;
        font-size: 0.85em;
        i {
          margin-right: 0;
          display: block;
          font-size: 1.8em;
          margin-bottom: 5px;
        }
      }
      ul a {
        padding: 10px !important;
      }
    }
    a {
      &[aria-expanded='false']::before,
      &[aria-expanded='true']::before {
        top: auto;
        bottom: 5px;
        right: 50%;
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
      }
    }
  }
  .sidebar-header {
    padding: 40px 20px 60px 20px;
  }
  .nav-link {
    color: #b7b7b7;
    padding-left: 20px;
    &.active {
      color: #fff;
      border-left: 4px solid #fff;
      padding-left: 16px;
    }
  }

  @media (max-width: 767px) {
    min-width: 100px;
    max-width: 100px;
    text-align: center;
    .nav-link {
      padding-left: 4px;
      .oi {
        font-size: 1.25rem;
      }
      &.active {
        padding-left: 0;
      }
    }

    a {
      &[aria-expanded='false']::before,
      &[aria-expanded='true']::before {
        top: auto;
        bottom: 5px;
        right: 50%;
        -webkit-transform: translateX(50%);
        -ms-transform: translateX(50%);
        transform: translateX(50%);
      }
    }
    &4a4a4a {
      margin-left: 0 !important;
    }
    .sidebar-header h3,
    .CTAs {
      display: none;
    }
    .sidebar-header strong {
      display: block;
    }
    ul {
      li a {
        span {
          font-size: 0.85em;
        }
        i {
          margin-right: 0;
          display: block;
        }
      }
      ul a {
        padding: 10px !important;
      }
      li a i {
        font-size: 1.3em;
      }
    }
    margin-left: 0;
    #sidebarCollapse span {
      display: none;
    }
    .navbar-brand {
      padding: 10px;
      text-align: center;
    }
  }
  .nav-item {
    margin-bottom: 10px;
  }
  .nav-item,
  .nav-link {
    display: block;
    width: 100%;
  }
`

const Sidebar = () => (
  <Navbar id="sidebar">
    <ul className="list-unstyled components">
      <MenuItem className="sidebar-header">
        <NavLink href="/" className="navbar-brand">
          <img src={logo} />
        </NavLink>
      </MenuItem>
      {modules.navItems}
    </ul>

    <Nav className="mt-auto pb-3 list-unstyled">
      {modules.navItemsRight}
      <MenuItem>
        <NavLink onClick={() => Auth.signOut()} className="nav-link">
          Sign out
        </NavLink>
      </MenuItem>
    </Nav>
  </Navbar>
)

export default Sidebar
