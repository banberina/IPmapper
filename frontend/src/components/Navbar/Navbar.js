import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import './navbar.css'

import GoogleSignInButton from '../GoogleSignInButton';
import { hasValidJwt } from '../../utils/jwtValidator';
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
                <MDBNavLink to="/lookup"><h6>Current IP Lookup</h6></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/details"><h6>Details</h6></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                { hasValidJwt()? (
                  <MDBNavLink to="/asnlookup"><h6>Reverse DNS</h6></MDBNavLink>
                ) :(<div></div>)
                }
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/proxy"><h6>Proxy Data</h6></MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbar right >
                        
                  {      hasValidJwt() ? (
                    <h6>You are logged in. </h6>
                ) : (
                    <GoogleSignInButton />
                )}
                    
                        </MDBNavbar>
          </MDBCollapse>
        </MDBNavbar>
      </div>

    );
  }
}


export default Navbar;
