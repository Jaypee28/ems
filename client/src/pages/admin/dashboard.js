import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from 'mdbreact';
import { BrowserRouter } from 'react-router-dom';
import '../../css/style.css';
import Navbar from "../../components/navbar";
import SidebarAdmin from '../../components/sidebarAdmin';

class Dashboard extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <div>
        <Navbar/>
        <SidebarAdmin/>

        {/* Page Title */}
        <BrowserRouter>
          <MDBRow>
              <MDBCol md="12">
                  <h4>Dashboard</h4>
              </MDBCol>
              <MDBCol md="12">
                <MDBNav className="links">
              <MDBNavItem>
                <MDBNavLink className="grey-text" to="">Dashboard</MDBNavLink>
              </MDBNavItem>
                </MDBNav>
              </MDBCol>
          </MDBRow>
        </BrowserRouter>
        {/* Page Title */}

        </div>
      </>
    );
  }
}

export default Dashboard;
