import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './navbar.css'

import GoogleSignInButton from '../Buttons/GoogleSignInButton';
import SignOutButton from '../Buttons/LogOutButton'
import { hasValidJwt } from '../../utils/jwtValidator';
import { isAdmin } from '../../utils/isAdmin'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,

    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <div>
        <MDBNavbar color="deep-purple darken-3" dark expand="md" >
          <MDBNavbarBrand href="/">
            <h1>IPMapper</h1>
          </MDBNavbarBrand>
          {<MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to={'/current'}><h6>Current IP Lookup</h6></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/proxy"><h6>Proxy Data</h6></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                {hasValidJwt() ? (
                  <MDBNavLink to="/asnlookup"><h6>ASN</h6></MDBNavLink>
                ) : (null)
                }
              </MDBNavItem>
              <MDBNavItem>
                {hasValidJwt() ? (
                  <MDBNavLink to="/ipv6lookup"><h6>IPv6</h6></MDBNavLink>
                ) : (null)
                }
              </MDBNavItem>
              
              {hasValidJwt() && isAdmin() ?
                (<MDBNavItem>
                  <MDBNavLink to="/admin"><h6>Admin page</h6></MDBNavLink>
                </MDBNavItem>
                ) : (null)
              }
              {hasValidJwt() && isAdmin() ?
                (<MDBNavItem>
                  <MDBNavLink to="/users"><h6>Users</h6></MDBNavLink>
                </MDBNavItem>
                ) : (null)
              }
            </MDBNavbarNav>
            <MDBNavItem right >
              {hasValidJwt() ? (
                <SignOutButton />
              ) : (
                  <GoogleSignInButton />
                )}
            </MDBNavItem>
          </MDBCollapse>
        </MDBNavbar>
      </div>

    );
  }
}


export default Navbar;
