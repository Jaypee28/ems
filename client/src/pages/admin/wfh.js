import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact';
import { BrowserRouter } from 'react-router-dom';
import '../../css/style.css';
import Navbar from "../../components/navbar";
import SidebarAdmin from '../../components/sidebarAdmin';
import WFHTable from '../../components/wfhTable';

class WFHPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  constructor(){
      super();
      this.state={
          show:false,
          show1:true,
          show2:false
      }
  }
    state={
      modal2: false,
    }
    
    toggle = nr => () => {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
    }
    
    render() {
      return (
        <>
        {/* MODALS */}
        {/* //MODALS */}

          <div>
          <Navbar/>
          <SidebarAdmin/>

          {/* Page Title */}
          <BrowserRouter>
            <MDBRow>
                <MDBCol md="12">
                <div className="d-flex mb example-parent">
                  <div className="mr-auto col-example"><h4 className="title-page-h">Work From Home</h4>
                  <MDBNav className="links">
                  <MDBNavItem>
                    <MDBNavLink className="grey-text" to="">Dashboard</MDBNavLink>
                  </MDBNavItem>
                  <span className="mt-2">/</span>
                  <MDBNavItem>
                    <MDBNavLink className="white-text" to="attendance">Work From Home</MDBNavLink>
                  </MDBNavItem>
                  </MDBNav>
                  </div>
                </div>
                </MDBCol>
            </MDBRow>
          </BrowserRouter>
          {/* //Page Title */}
 
          <MDBRow className="mt-3">
             <MDBCol md="12">
                <WFHTable />
             </MDBCol>
          </MDBRow>
          </div>
        </>
      );
    }
  }
  
  export default WFHPage;