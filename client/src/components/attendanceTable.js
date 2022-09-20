import React from 'react';
import { inject, observer } from 'mobx-react';
import moment from 'moment'
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon, MDBModal,MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import "../css/style.css";
import AttendanceBtn from './viewAttendanceBtn';
import ActivityStepper from './viewActivities';

class AttendanceTable extends React.Component {

    componentDidMount(){
      let { attendanceStore: { getAccounts, getAllAttendance } } = this.props
      getAccounts();
      getAllAttendance();
    }

    scrollToTop = () => window.scrollTo(0, 0);
    
    state={
        modal3: false
      }
      
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
      
      
    render() {
      const { classes } = this.props;
      let { attendanceStore: { listOfUsers, listOfAttendance } } = this.props;
      let listOfEmployee = listOfUsers.filter(employee=>{if(employee.accessType==="Standard"){
        return employee;
      }})
      console.log(listOfAttendance)
      
      
      function getDaysArrayByMonth() {
        let daysInMonth = moment().daysInMonth();
        let arrDays = [];
      
        while(daysInMonth) {
          let current = moment().date(daysInMonth);
          arrDays.push(current);
          daysInMonth--;
        }
      
        return arrDays;
      }

      let schedule = getDaysArrayByMonth().reverse();

      let getDays = schedule.map((item) => {
            return <th>{item.format("DD")}</th>
      });
      console.log("attendance", listOfAttendance)
      let days = schedule.map((daysData) => {
        return daysData.format("MMMM Do YYYY")
      })

      let id = listOfEmployee.map((emp) => {
        return emp.accID
      })
      console.log("id", id)
      console.log("days", days)
      
     let att = listOfAttendance.map(
       (items) => {
        if(items.dateStamp = days){
          if(items.count == 1){
            return "fullTime"
          }else if(items.secondTimeIn != null){
            return "halfDay"
          }
        }else{
          return "absent"
        }
      })

      let getAttendance = att.map(count => {
        return <td><MDBIcon className={count == "fullTime" ? "green-text" : count == "halfDay" ? "yellow-text" : "red-text"} icon={count == "fullTime" ? "check" : count == "halfDay" ? "minus" : "times"} onClick={count == "fullTime" ? this.toggle(3) : count == "halfDay" ? this.toggle(3) : ""}/></td> 
      })
        
        

    //  <td><a><MDBIcon className={checkAttendance == "fullTime" ? "green-text" : checkAttendance == "halfDay" ? "yellow-text" : "red-text"} icon={checkAttendance == "fullTime" ? "check" : checkAttendance == "halfDay" ? "minus" : "times"} onClick={checkAttendance == "check" ? this.toggle(3) : checkAttendance == "halfDay" ? this.toggle(3) : ""}/></a></td>
      return (
        <>
        {/* MODALS */}
        {/* Attendance Modal */}
        <MDBModal size="lg" className="black-text" isOpen={this.state.modal3} toggle={this.toggle(3)} centered>
        <MDBModalHeader toggle={this.toggle(3)}>Attendance</MDBModalHeader>
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
        </MDBModalBody>
        </MDBModal>
       {/* //Attendance Modal */}
       {/* //MODALS */}

       <MDBTable className="attendance-table white-text mt-4" responsive>
      <MDBTableHead>
        <tr>
          <th className="th-name">Name</th>
          {getDays}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
          {
            listOfEmployee.map(data => 
              <tr>
                <td>
                  {data.accFname + " " + data.accLname}
                  <input type="text" id="userID" value={data.accID} disabled hidden/>
                </td>
                {getAttendance}
              </tr> 
              )
          }
          {/* <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="red-text" icon="times" /></td>
          <td><MDBIcon className="yellow-text" icon="minus" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="yellow-text" icon="minus" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="red-text" icon="times" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="red-text" icon="times" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="red-text" icon="times" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="green-text" icon="check" /></td>
          <td><MDBIcon className="red-text" icon="times" /></td> */}
          
        {/* <tr>
          <td>Sample Name</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Sample Name</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr> */}
      </MDBTableBody>
    </MDBTable>
    
        </>
      );
    }
  }
  
export default inject("attendanceStore")(observer(AttendanceTable));