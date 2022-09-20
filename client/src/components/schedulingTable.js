import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon, MDBModal,MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import "../css/style.css";
import SelectEmployee from '../components/selectEmp';
import SelectDays from '../components/selectDays';

class SchedulingTable extends React.Component {
    scrollToTop = () => window.scrollTo(0, 0);
    
    state={
        modal1: false,
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
        {/* Edit Schedule Modal */}
        <MDBModal className="black-text" isOpen={this.state.modal1} toggle={this.toggle(1)} centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(1)}>Edit Schedule</MDBModalHeader>
        <MDBModalBody className="p-4">
        <form>
         <MDBRow className="flex-center">
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
            <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Update</MDBBtn>
           </MDBCol>
         </MDBRow>
         </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Edit Schedule Modal */}
        {/* //MODALS */}

        <MDBTable className="white-text" responsive borderless striped>
          <MDBTableHead>
            <tr>
              <th>Name</th>
              <th>Days</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>2nd Time In</th>
              <th>2nd Time Out</th>
              <th>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>Sample Name</td>
              <td>T, W,T h, F</td>
              <td>9:00 AM</td>
              <td>12:00 PM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td>
              <td>
                  <a className="mr-1"><MDBIcon icon="pen-square" className="action-icon-edit" onClick={this.toggle(1)} /></a>
                  <a className="ml-1"><MDBIcon icon="minus-square" className="action-icon-delete" /></a>
              </td>
            </tr>
            <tr>
              <td>Sample Name</td>
              <td>T, W,T h, F</td>
              <td>9:00 AM</td>
              <td>7:00 PM</td>
              <td>Unspecified</td>
              <td>Unspecified</td>
              <td>
                  <a className="mr-1"><MDBIcon icon="pen-square" className="action-icon-edit" onClick={this.toggle(1)} /></a>
                  <a className="ml-1"><MDBIcon icon="minus-square" className="action-icon-delete" /></a>
              </td>
            </tr>
            <tr>
              <td>Sample Name</td>
              <td>T, W,T h, F</td>
              <td>9:00 AM</td>
              <td>7:00 PM</td>
              <td>Unspecified</td>
              <td>Unspecified</td>
              <td>
                  <a className="mr-1"><MDBIcon icon="pen-square" className="action-icon-edit" onClick={this.toggle(1)} /></a>
                  <a className="ml-1"><MDBIcon icon="minus-square" className="action-icon-delete" /></a>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
    
        </>
      );
    }
  }
  
  export default SchedulingTable;