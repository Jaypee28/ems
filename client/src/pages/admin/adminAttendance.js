import React from 'react';
import { inject, observer } from 'mobx-react';
import { MDBNav, MDBNavItem, MDBNavLink, MDBRow, MDBCol, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBModalBody } from 'mdbreact';
import { BrowserRouter } from 'react-router-dom';
import '../../css/style.css';
import Navbar from "../../components/navbar";
import SidebarAdmin from '../../components/sidebarAdmin';


class AdminAttendance extends React.Component {

      componentDidMount(){
        let { attendanceStore: { getAccounts, getAllAttendance } } = this.props
        getAccounts();
        getAllAttendance();
      } 


      scrollToTop = () => window.scrollTo(0, 0);

      constructor(){
        super();
        this.state = { value: 1 };
      }
      state={
        value: 1,
      }

      chooseEmployee = (event) => {
        this.setState({value: event.target.value});
      }
      
      render() {

          let { attendanceStore: { listOfUsers, listOfAttendance } } = this.props;

          let listOfEmployee = listOfUsers.filter(employee=>{if(employee.accessType==="Standard"){
            return employee;
          }})

          let id = this.state.value
          
          let table = listOfAttendance.filter(function(data){
            return data.empID == id
          }).map(item => 
            <tr className="hover-table">
              <td>{item.dateStamp}</td>
              <td>{item.firstTimeIn}</td>
              <td>{item.firstTimeOut}</td>
              <td>{item.secondTimeIn}</td>
              <td>{item.secondTimeOut}</td>
              <td>{item.totalHours}</td>
            </tr>
          )

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
                    <div className="mr-auto col-example"><h4 className="title-page-h">Attendance</h4>
                    <MDBNav className="links">
                    <MDBNavItem>
                      <MDBNavLink className="grey-text" to="">Dashboard</MDBNavLink>
                    </MDBNavItem>
                    <span className="mt-2">/</span>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="attendance">Attendance</MDBNavLink>
                    </MDBNavItem>
                    </MDBNav>
                    </div>
                  </div>
                  </MDBCol>
              </MDBRow>
            </BrowserRouter>
            {/* //Page Title */}

            <MDBRow className="mt-1">
            <MDBCol className="mt-3" md="3">
            <select className="browser-default custom-select hrs-input" onChange={this.chooseEmployee}>
                {
                  listOfEmployee.map( data => 
                  <option value={data.accID}>{data.accFname + " " + data.accLname}</option>
                  )
                }
            </select>
            </MDBCol>
            <MDBCol md="12">
            
            <MDBTable className="white-text" responsive borderless striped hover>
          <MDBTableHead>
            <tr>
              <th>Date</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>2nd Time In</th>
              <th>2nd Time Out</th>
              <th>Total Hours</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {table}
          </MDBTableBody>
        </MDBTable>
            </MDBCol>
        </MDBRow>
            </div>
          </>
        );
      }
}

export default inject("attendanceStore")(observer(AdminAttendance));
