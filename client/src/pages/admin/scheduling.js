import React from 'react';
import { MDBNav, MDBNavItem, MDBNavLink, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact';
import { BrowserRouter } from 'react-router-dom';
import Select from 'react-select';
import '../../css/style.css';
import Navbar from "../../components/navbar";
import SidebarAdmin from '../../components/sidebarAdmin';
import SchedulingTable from '../../components/schedulingTable';
import SelectEmployee from '../../components/selectEmp';
import SelectDays from '../../components/selectDays';
import SchedulingCalendar from '../../components/schedulingCalendar';

class SchedulingPage extends React.Component {
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
        {/* Add Schedule Modal */}
        <MDBModal className="black-text" isOpen={this.state.modal2} toggle={this.toggle(2)} centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(2)}>Add Schedule</MDBModalHeader>
        <MDBModalBody className="p-4 mx-auto">
        <form>
         <MDBRow>
         <MDBCol md="12">
          <label>With Break</label>
           <input className="mx-2" type="checkbox" onClick={()=>{this.setState({show:!this.state.show})}} style={{height: '12px', width: '16px'}}></input>
           </MDBCol>
           <MDBCol className="my-2" md="12">    
           <label>Employee</label> 
            <SelectEmployee/>
           </MDBCol>
           <MDBCol className="my-2" md="12">
           <label>Days</label> 
            <SelectDays/>
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Time in</label> 
              <input type="text" id="example2" className="form-control form-control-md" />
           </MDBCol>
           <MDBCol className="my-2" md="6">
           <label>Time out</label> 
            <input type="text" id="example2" className="form-control form-control-md" />
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
             <div className="mx-auto">
              <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Add</MDBBtn>
            </div>
           </MDBCol>
         </MDBRow>
         </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Add Schedule Modal */}
        {/* //MODALS */}

          <div>
          <Navbar/>
          <SidebarAdmin/>

          {/* Page Title */}
          <BrowserRouter>
            <MDBRow>
                <MDBCol md="12">
                <div className="d-flex mb example-parent">
                  <div className="mr-auto col-example"><h4 className="title-page-h">Scheduling</h4>
                  <MDBNav className="links">
                  <MDBNavItem>
                    <MDBNavLink className="grey-text" to="">Dashboard</MDBNavLink>
                  </MDBNavItem>
                  <span className="mt-2">/</span>
                  <MDBNavItem>
                    <MDBNavLink className="white-text" to="attendance">Scheduling</MDBNavLink>
                  </MDBNavItem>
                  </MDBNav>
                  </div>
                  <div className="col-example">
                    <MDBIcon icon="th-list" className="p-2 mx-1 list-grid" style={{backgroundColor: "#16191C"}} onClick={()=>{this.setState({show1:!this.state.show1})}}  /> 
                    <MDBIcon icon="th-large" className="p-2 mx-1 list-grid" style={{backgroundColor: "#16191C"}} onClick={()=>{this.setState({show2:!this.state.show2})}} />
                  <MDBBtn className="edit-add-btn" onClick={this.toggle(2)}><MDBIcon className="mr-2" icon="plus" />Add Schedule</MDBBtn></div>
                </div>
                </MDBCol>
            </MDBRow>
          </BrowserRouter>
          {/* //Page Title */}
 
          <MDBRow className="mt-3">
              <MDBCol md="12">
              <div>
              {
                  this.state.show1?
                  <div>
                    <SchedulingTable />
                  </div> : null
              }  
              </div>

              <div>
              {
                  this.state.show2?
                  <div>
                    <SchedulingCalendar />
                  </div> : null
              }  
              </div>
                
              </MDBCol>
          </MDBRow>
          </div>
        </>
      );
    }
  }
  
  export default SchedulingPage;