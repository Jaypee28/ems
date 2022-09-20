import React from 'react';
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon, MDBModal,MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import "../css/style.css";

class EmployeeTable extends React.Component {
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
        
        {/* //MODALS */}

        <MDBTable className="white-text" responsive borderless striped hover>
          <MDBTableHead>
            <tr>
              <th>Name</th>
              <th>Employee ID</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr className="hover-table" Link to="profile">
              <td>Sample Name</td>
              <td>SUP-0001</td>
              <td>sample@gmail.com</td>
              <td>09123456789</td>
              <td>Web Designer</td>
              <td>
                  <Link className="mr-1" to="profile"><MDBIcon icon="pen-square" className="action-icon-edit"  onClick={this.toggle(1)} /></Link>
                  <a className="ml-1"><MDBIcon icon="minus-square" className="action-icon-delete" /></a>
              </td>
            </tr>
            <tr className="hover-table">
              <td>Sample Name</td>
              <td>SUP-0001</td>
              <td>sample@gmail.com</td>
              <td>09123456789</td>
              <td>Web Designer</td>
              <td>
                  <a className="mr-1"><MDBIcon icon="pen-square" className="action-icon-edit" onClick={this.toggle(1)} /></a>
                  <a className="ml-1"><MDBIcon icon="minus-square" className="action-icon-delete" /></a>
              </td>
            </tr>
            <tr className="hover-table">
              <td>Sample Name</td>
              <td>SUP-0001</td>
              <td>sample@gmail.com</td>
              <td>09123456789</td>
              <td>Web Designer</td>
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
  
  export default EmployeeTable;