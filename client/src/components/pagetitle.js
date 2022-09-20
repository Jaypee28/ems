import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink, MDBRow, MDBCol } from "mdbreact";

export default () => (
  <BrowserRouter>
  <MDBRow>
      <MDBCol md="12">
          <h4>Attendance</h4>
      </MDBCol>
      <MDBCol md="12">
    <MDBNav className="links">
      <MDBNavItem className="link-item">
        <MDBNavLink to="">Dashboard</MDBNavLink>
      </MDBNavItem>
      <span className="mt-1">/</span>
      <MDBNavItem className="link-item active">
        <MDBNavLink to="attendance">Attendance</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
    </MDBCol>
    </MDBRow>
  </BrowserRouter>
);