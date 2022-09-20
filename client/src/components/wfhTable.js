import React from 'react';
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon, MDBModal,MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn, MDBListGroup, MDBListGroupItem } from 'mdbreact';
import "../css/style.css";
import AttendanceBtn from './attendanceBtn';
import ActivityStepper from './activityStepper';

class WFHTable extends React.Component {
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
        {/* WFH Info Modal */}
        <MDBModal className="black-text" isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg" centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(1)}>Work From Home Info</MDBModalHeader>
        <MDBModalBody className="mb-4">
        <MDBRow className="flex-center">
           <MDBCol className="left-side-box mr-2 py-2" lg="5">
            <div>Timesheet <span className="grey-text"> 05 May 2020</span></div>
            <div className="time-sheet-bg p-1 my-2">Time in at<br/>
            <span className="grey-text">Wed, 05 May, 2020 10:00 AM</span>
            </div>   
            <center><AttendanceBtn/></center>
            <div className="time-sheet-bg p-1 my-2">Time out at<br/>
            <span className="grey-text">Wed, 05 May, 2020 7:00 PM</span>
            </div> 
            <MDBRow className="text-center">
              <MDBCol md="6">
              <div className="time-sheet-bg p-1 my-2">Break<br/>
                <span className="grey-text">1.00 hr</span>
              </div> 
              </MDBCol>
              <MDBCol md="6">
              <div className="time-sheet-bg p-1 my-2">Undertime<br/>
                <span className="grey-text">0.20 hr</span>
              </div> 
              </MDBCol>
            </MDBRow> 
           </MDBCol>

           <MDBCol className="right-side-box ml-2 py-2" lg="5">
            <div className="mb-2">Activity</div>
            <ActivityStepper/>
           </MDBCol>
         </MDBRow>

         <MDBRow className="flex-center my-3">
          <MDBCol className="py-2 center-box" lg="10">
            <div>Projects</div>
            <MDBListGroup className="my-2 grey-text" style={{ width: "100%" }}>
              <MDBListGroupItem className="project-list"><a>Project 1</a></MDBListGroupItem>
              <MDBListGroupItem className="project-list"><a>Project 2</a></MDBListGroupItem>
              <MDBListGroupItem className="project-list"><a>Project 3</a></MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
         </MDBRow>
        </MDBModalBody>
        </MDBModal>
        {/* //WFH Info Modal */}
        {/* //MODALS */}

        <MDBTable className="white-text" responsive borderless striped hover>
          <MDBTableHead>
            <tr>
              <th>Name</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>2nd Time In</th>
              <th>2nd Time Out</th>
              <th>Total Hours</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr className="hover-table">
              <td>Sample Name</td>
              <td>9:00 AM</td>
              <td>12:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td>
              <td>9.24 HRS</td>
              <td className="active-color">Active</td>
              <td><a onClick={this.toggle(1)}><MDBIcon icon="info-circle" className="action-icon-info" /></a></td>
            </tr>
            <tr className="hover-table">
              <td>Sample Name</td>
              <td>9:00 AM</td>
              <td>12:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td>
              <td>9.24 HRS</td>
              <td className="active-color">Active</td>
              <td><a onClick={this.toggle(1)}><MDBIcon icon="info-circle" className="action-icon-info" /></a></td>
            </tr>
            <tr className="hover-table">
              <td>Sample Name</td>
              <td>9:00 AM</td>
              <td>12:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td>
              <td>9.24 HRS</td>
              <td className="active-color">Active</td>
              <td><a onClick={this.toggle(1)}><MDBIcon icon="info-circle" className="action-icon-info" /></a></td>
            </tr>
          </MDBTableBody>
        </MDBTable>
    
        </>
      );
    }
  }
  
  export default WFHTable;