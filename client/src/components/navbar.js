import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import SUPLogo from "../assets/suplogo.png";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  function logout(){
    sessionStorage.clear()
    window.location.href = '/'
  }
  return (
    <Router>
      <MDBNavbar className="px-3" fixed="top" dark expand="xs" style={{ backgroundColor: '#16191C'}}>
      <MDBNavbarBrand>
          <img src={SUPLogo} width="35" height="35" />
          <span className="sup-logo-text mx-3">Startup Project Ventures</span>
        </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon className="mx-2" icon="user" /><span className="navbar-link">Profile</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
             <MDBNavLink className="waves-effect waves-light" to="" onClick={logout}>
                <MDBIcon className="mx-2" icon="sign-out-alt" /><span className="navbar-link">Logout</span>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;