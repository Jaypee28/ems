import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from 'mdbreact';

import { BrowserRouter } from 'react-router-dom';
import '../../css/style.css';
import Navbar from "../../components/navbar";
import SidebarAdmin from '../../components/sidebarAdmin';
import EmployeeTable from '../../components/employeeTable';

class EmployeesPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  constructor(){
    super();
    this.state={
        show:false
    }
  }
  state={
    modal3: false,
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
        {/* Add Employee Modal */}
        <MDBModal className="black-text" size="lg" isOpen={this.state.modal3} toggle={this.toggle(3)} centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(3)}>Add Employee</MDBModalHeader>
        <MDBModalBody className="p-4">
        <form>
         <MDBRow className="flex-center">
          <MDBCol className="my-2" md="6">    
           <label>First Name</label>
            <input type="text" id="" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">    
           <label>Last Name</label>
            <input type="text" id="" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">    
           <label>Username</label>
            <input type="text" id="" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Email</label> 
            <input type="text" id="" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Password</label> 
            <input type="text" id="" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Confirm Password</label> 
            <input type="text" id="" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Employee ID</label> 
            <input type="text" id="" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Date Hired</label> 
            <input type="text" id="" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Department</label> 
           <select className="browser-default custom-select">  
                <option>Select Department</option>
                <option value="1">Software Developer</option>
                <option value="2">Management</option>
                <option value="3">Graphic Designer</option>
            </select>
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Designation</label> 
           <select className="browser-default custom-select">  
                <option>Select Designation</option>
                <option value="1">Web Designer</option>
                <option value="2">Software Developer</option>
                <option value="3">Graphic Designer</option>
            </select>
           </MDBCol>
           <MDBCol md="12">
           <div>
              {
                  this.state.show?
                  <div>
                    <MDBRow>
                      <MDBCol className="my-2" md="6">
                      <label>2nd Time In</label> 
                      <input type="text" id="example2" className="form-control form-control-md" />
                      </MDBCol>
                      <MDBCol className="my-2" md="6">
                      <label>2nd Time out</label> 
                      <input type="text" id="example2" className="form-control form-control-md" />
                      </MDBCol>
                    </MDBRow>
                  </div> : null
              }  
              </div>
           </MDBCol>
           <MDBCol className="text-right mt-2" md="12">
            <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Add</MDBBtn>
           </MDBCol>
         </MDBRow>
         </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Add Employee Modal */}
        {/* //MODALS */}

        <div>
        <Navbar/>
        <SidebarAdmin/>

        {/* Page Title */}
        <BrowserRouter>
            <MDBRow>
                <MDBCol md="12">
                <div className="d-flex mb example-parent">
                  <div className="mr-auto col-example"><h4 className="title-page-h">Employee List</h4>
                  <MDBNav className="links">
                  <MDBNavItem>
                    <MDBNavLink className="grey-text" to="">Dashboard</MDBNavLink>
                  </MDBNavItem>
                  <span className="mt-2">/</span>
                  <MDBNavItem>
                    <MDBNavLink className="white-text" to="attendance">Employee List</MDBNavLink>
                  </MDBNavItem>
                  </MDBNav>
                  </div>
                  <div className="col-example"><MDBBtn className="edit-add-btn" onClick={this.toggle(3)}><MDBIcon className="mr-2" icon="plus" />Add Employee</MDBBtn></div>
                </div>
                </MDBCol>
            </MDBRow>
          </BrowserRouter>
          {/* //Page Title */}

        <MDBRow className="mt-1">
            <MDBCol className="mt-3" md="3">
            <input type="text" className="form-control hrs-input" id="" placeholder="Employee ID"/>
            </MDBCol>
            <MDBCol className="mt-3" md="3">
            <input type="text" className="form-control hrs-input" id="" placeholder="Employee Name"/>
            </MDBCol>
            <MDBCol className="mt-3" md="3">
            <select className="browser-default custom-select hrs-input">  
                <option>Select Designation</option>
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
            
            <MDBCol className="mt-3" md="12">
              <EmployeeTable/>
            </MDBCol>
        </MDBRow>

        </div>
      </>
    );
  }
}

export default EmployeesPage;
