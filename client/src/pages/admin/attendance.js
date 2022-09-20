import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from 'mdbreact';
import { BrowserRouter } from 'react-router-dom';
import '../../css/style.css';
import Navbar from "../../components/navbar";
import SidebarAdmin from '../../components/sidebarAdmin';
import PageTitle from '../../components/pagetitle';
import AttendanceTable from '../../components/attendanceTable';
import moment from 'moment';


class AttendancePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  
  render() {

    var m = moment();
    for (var i = 0; i < 12; i++) {
    console.log(m.months(i).format('MMMM'))
  }
    return (
      <>
      <div>
        <Navbar/>
        <SidebarAdmin/>
        
        {/* Page Title */}
        <BrowserRouter>
          <MDBRow>
              <MDBCol md="12">
                  <h4>Attendance</h4>
              </MDBCol>
              <MDBCol md="12">
            <MDBNav className="links">
              <MDBNavItem>
                <MDBNavLink className="grey-text" to="">Dashboard</MDBNavLink>
              </MDBNavItem>
              <span className="mt-2">/</span>
              <MDBNavItem>
                  <MDBNavLink className="white-text" to="attendance">Attendance</MDBNavLink>
                </MDBNavItem>
                </MDBNav>
              </MDBCol>
          </MDBRow>
        </BrowserRouter>
        {/* Page Title */}

        <MDBRow className="mt-1">
            <MDBCol className="mt-3" md="3">
            <input type="text" className="form-control hrs-input" id="" placeholder="Name"/>
            </MDBCol>
            <MDBCol className="mt-3" md="3">
            <select className="browser-default custom-select hrs-input">
                <option>Choose Month</option>
                <option value="1">{moment.months()}</option>
            </select>
            </MDBCol>
            <MDBCol className="mt-3" md="3">
            <select className="browser-default custom-select hrs-input">  
                <option>Choose Year</option>
                <option value="1">2018</option>
                <option value="2">2019</option>
                <option value="3">2020</option>
            </select>
            </MDBCol>
            <MDBCol className="mt-3" md="3">
            <MDBBtn className="search-btn m-auto">
                SEARCH
            </MDBBtn>
            </MDBCol>
            <MDBCol md="12">
              <AttendanceTable/>
            </MDBCol>
        </MDBRow>
        </div>
      </>
    );
  }
}

export default AttendancePage;
