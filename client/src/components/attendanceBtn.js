import React, { Fragment } from "react";
import { MDBBtn, toast, ToastContainer, MDBContainer } from "mdbreact";
import moment from 'moment-timezone';
import { inject, observer } from 'mobx-react';

import "../css/style.css";

class AttendanceBtn extends React.Component{
  componentDidMount() {
    let {
      attendanceStore: {
        getUserAttendance,
        getTableAttendance,
        // getSchedule,
        getAttendanceTime,
      },
    } = this.props
    // setInterval(() => {
    // getSchedule()
    // getTableAttendance();
    getUserAttendance()
    // getAttendanceTime()
    // }, 1500);
  }

  render(){
    let {
      attendanceStore:{
        attendance,
        checkInCounter,
        addAttendance,
        getUserAttendance,
        updateAttendance,
        firstIn,
        firstOut,
        secondIn,
        secondOut,
        totalHours,
        duration1,
        duration2,
        duration,
      }
    } = this.props
    function AttendancePage (){

      let getId = JSON.parse(sessionStorage.getItem('userData'))
      let now = moment()
      let days = now.format("LL dddd")
      let hour = now.format("h:mm:ss a")

      const notify = () => {
        toast.info(checkInCounter == 1 ? 'Timing In...' : (checkInCounter == 3 ? 'Timing In...' : 'Timing Out...'), {
          autoClose: 1500
        })
        setTimeout(() =>{
          toast.success(checkInCounter == 1 ? 'Successfully Timed In' : (checkInCounter == 3 ? 'Successfully Timed In' : 'Successfully Timed out'), {
            autoClose: 2500
          }, setTimeout(() => window.location.reload(false), 800))
         }, 1500)
      }
    
      function firstTimeIn(){
    
        attendance.setProperty("firstTimeIn", hour)
        attendance.setProperty("secondTimeOut", "")
        attendance.setProperty("secondTimeIn", "")
        attendance.setProperty("firstTimeOut", "")
    
        attendance.setProperty("empID", getId.accID);
        attendance.setProperty("empFname", getId.accFname);
        attendance.setProperty("empLname", getId.accLname);
        // attendance.setProperty("empCompanyID", getId.empCompanyID)
        attendance.setProperty("count", 2)
        attendance.setProperty("dateStamp", moment(days, "MMMM Do YYYY dddd").format("MMMM Do YYYY"))
        
        
        addAttendance()
        notify()
        console.log("time in")
        setTimeout(() => {
          getUserAttendance()
        }, 800)
        
      }
    
       function firsTtimeOut(){
         
        attendance.setProperty("firstTimeOut", hour)
        attendance.setProperty("firstTimeIn", firstIn)
        attendance.setProperty("count", 3)
    
        attendance.setProperty("empID", getId.accID);
        attendance.setProperty("empFname", getId.accFname);
        attendance.setProperty("empLname", getId.accLname);
        attendance.setProperty("dateStamp", moment(days, "MMMM Do YYYY dddd").format("MMMM Do YYYY"))
        
        let firstInHour = moment(firstIn, "HH:mm:ss").format("HH:mm:ss")
        let firstOutHour = moment(hour, "HH:mm:ss").format("HH:mm:ss")
        const totalhours = [firstInHour, firstOutHour]

        const totalDurations = totalhours.slice(1).reduce((prev, cur) => moment.duration(cur).subtract(prev), moment.duration(totalhours[0]))

        console.log(`Total time is: ${moment.utc(totalDurations.asMilliseconds()).format("HH:mm:ss")}`)

        attendance.setProperty("totalHours", moment.utc(totalDurations.asMilliseconds()).format("HH:mm:ss"))
        console.log("First timeout")

        updateAttendance()
        notify()
        setTimeout(() => {
          getUserAttendance()
        }, 800)
        
      }
    
      function secondTimeIn(){
    
        attendance.setProperty("secondTimeIn", hour);
        attendance.setProperty("firstTimeIn", firstIn);
        attendance.setProperty("firstTimeOut", firstOut);
        attendance.setProperty("count", 4)
    
        attendance.setProperty("empID", getId.accID);
        attendance.setProperty("empFname", getId.accFname);
        attendance.setProperty("empLname", getId.accLname);
        attendance.setProperty("dateStamp", moment(days, "MMMM Do YYYY dddd").format("MMMM Do YYYY"))
    
        console.log("Secod Time in")
    
        updateAttendance()
        notify()
        setTimeout(() => {
          getUserAttendance()
        }, 800)
      }
    
      function secondTimeOut(){
    
        attendance.setProperty("secondTimeOut", hour);
        attendance.setProperty("secondTimeIn", secondIn);
        attendance.setProperty("firstTimeIn", firstIn);
        attendance.setProperty("firstTimeOut", firstOut);
        attendance.setProperty("count", 1);
    
        attendance.setProperty("empID", getId.accID);
        attendance.setProperty("empFname", getId.accFname);
        attendance.setProperty("empLname", getId.accLname);
        attendance.setProperty("dateStamp", moment(days, "MMMM Do YYYY dddd").format("MMMM Do YYYY"))

        let firstInHour = moment(firstIn, "HH:mm:ss").format("HH:mm:ss")
        let firstOutHour = moment(firstOut, "HH:mm:ss").format("HH:mm:ss")
        let secondInHour = moment(secondIn, "HH:mm:ss").format("HH:mm:ss")
        let secondOutHour = moment(hour, "HH:mm:ss").format("HH:mm:ss")

        const firstTotalhours = [firstInHour, firstOutHour]
        const secondTotalHours = [secondInHour, secondOutHour]

        const firstTotalDurations = firstTotalhours.slice(1).reduce((prev, cur) => moment.duration(cur).subtract(prev), moment.duration(firstTotalhours[0]))
        const secondTotalDurations = secondTotalHours.slice(1).reduce((prev, cur) => moment.duration(cur).subtract(prev), moment.duration(secondTotalHours[0]))
        
        const totalHours = [moment.utc(firstTotalDurations.asMilliseconds()).format("HH:mm:ss"), moment.utc(secondTotalDurations.asMilliseconds()).format("HH:mm:ss")]

        const totalDurations = totalHours.slice(1).reduce((prev, cur) => moment.duration(cur).add(prev), moment.duration(totalHours[0]))

        console.log(`Second Total time is: ${moment.utc(secondTotalDurations.asMilliseconds()).format("HH:mm:ss")}`)
        console.log(`Total Time: ${moment.utc(totalDurations.asMilliseconds()).format("HH:mm:ss")}`)
    
        console.log("Second Time out")

        attendance.setProperty("totalHours", moment.utc(totalDurations.asMilliseconds()).format("HH:mm:ss"))
    
        updateAttendance()
        notify()
        setTimeout(() => {
          getUserAttendance()
        }, 800)
      }
    
    
        return(
          <Fragment>
            <MDBContainer>
              <div className="attendance-info m-auto flex-center" id="total-hours">{totalHours ? totalHours : "00:00:00"}</div>
              <MDBBtn className="attendance-btn mt-3" color={checkInCounter == 1 ? "primary" : (checkInCounter == 3 ? "primary" : "danger")} onClick={checkInCounter == 1 ? firstTimeIn : (checkInCounter == 2 ? firsTtimeOut : (checkInCounter == 3 ? secondTimeIn : secondTimeOut))} id="time-btn">{checkInCounter == 1 ? "Time In" : (checkInCounter == 3 ? "Time In" : "Time Out")}</MDBBtn>
              <ToastContainer
              hideProgressBar={true}
              newestOnTop={true}
              closeButton={false}
              />
            </MDBContainer>
          </Fragment>
        )
      //   // document.querySelector("#time-btn").innerHTML = "Time Out"
        
    }
    return (
      <AttendancePage/>
    );
  }
}

export default inject("attendanceStore")(observer(AttendanceBtn));