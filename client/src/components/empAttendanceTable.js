import React from 'react';
import { inject, observer } from 'mobx-react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "../css/style.css";

class EmpAttendanceTable extends React.Component{

  // componentDidMount(){
  //   let { attendanceStore: { getAccounts, getAllAttendance } } = this.props
  //   getAccounts();
  //   getAllAttendance();
  // }
  
  render(){
    let getId = JSON.parse(sessionStorage.getItem('userData'))

    // let { attendanceStore: { listOfAttendance } } = this.props;

    // let tableFilter = listOfAttendance.filter(data => {
    //   if(data.empID === getId.accID){
    //     return data  
    //   }
    // })

    // let table = tableFilter.map(item => 
    //   <tr className="hover-table">
    //     <td>{item.dateStamp}</td>
    //     <td>{item.firstTimeIn ? item.firstTimeIn:"--------------------"}</td>
    //     <td>{item.firstTimeOut ? item.firstTimeOut:"--------------------"}</td>
    //     <td>1.00 Hr</td>
    //     <td>{item.secondTimeIn ? item.secondTimeIn:"--------------------"}</td>
    //     <td>{item.secondTimeOut ? item.secondTimeOut:"--------------------"}</td>
    //     <td>{item.totalHours ? item.totalHours:"--------------------"}</td>
    //   </tr>
    // )

    return (
    <MDBRow>
        <MDBCol className="mt-4" md="12">
          <MDBTable style={{color:"white"}} striped borderless responsive>
            <MDBTableHead>
              <tr>
                <th>Date</th>
                <th>AM In</th>
                <th>AM out</th>
                <th>Break</th>
                <th>PM In</th>
                <th>PM Out</th>
                <th>Total Hrs</th>
              </tr>
              </MDBTableHead>
              <MDBTableBody>
                {/* {table} */}
                </MDBTableBody>
            </MDBTable>
        </MDBCol>
    </MDBRow>

    );
  }
}
export default inject("attendanceStore")(observer(EmpAttendanceTable));