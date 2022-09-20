import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdbreact';
import { inject, observer } from 'mobx-react';
import moment from 'moment-timezone';

import '../../css/style.css';
import '../../css/mediaQuery.css';
import Navbar from "../../components/navbar";
import SidebarEmp from '../../components/sidebarEmp';
import profileAvatar from "../../assets/avatar.png";
import AttendanceBtn from '../../components/attendanceBtn';
import ActivityStepper from '../../components/activityStepper';
import EmpAttendanceTable from '../../components/empAttendanceTable';


class EmpAttendancePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  componentDidMount() {
    let {
      attendanceStore: {
        getUserAttendance,
      },
    } = this.props
    getUserAttendance()
  }

  componentWillMount() {
    let {
      attendanceStore: {getAttendanceTime},
    } = this.props
    let day = ""
    let hour = ""
    getAttendanceTime().then((resp) => {
      this.setState({
        days: resp.currentDay,
      })

      let date = moment(resp.allDate).format("X")
      let setTime = () => {
        hour = date * 1000
        d = new Date()
        d.setTime(hour)
        setInterval(() => {
          updateTime()
          //
        }, 1000)
      }

      let updateTime = () => {
        d.setSeconds(d.getSeconds() + 1)
        this.setState({hour: moment(d).format("h:mm:ss a")})
      }
      setTime()
    })
    let d = null
    console.log(this.state, "d")
  }

  render() {

    let getId = JSON.parse(sessionStorage.getItem('userData'))
    if(!getId){
      window.location.href="/"
    }

    let dateTimeFormat = moment().format("ddd, MMMM D, YYYY, hh:mm:ss A")

    let datetime = <div className="attendance-profile grey-text my-1" style={{fontSize: "20px"}}>{dateTimeFormat}</div>

    let {
      attendanceStore: {
        firstIn,
        firstOut,
        secondIn,
        secondOut,
      },
    } = this.props
    
    return (
      <>
      <div className="emp-attendance-page">
        <Navbar/>
        <SidebarEmp/>
        <MDBRow>
            <MDBCol className="mb-2" md="12">
               <div className="box-container p-2">
                <div className="d-flex bd-highlight example-parent">
                 <div className="align-self-center bd-highlight"><img className="m-2" src={profileAvatar} height="80" width="80"/> </div>
                 <div className="align-self-center bd-highlight">
                     <div className="attendance-profile my-1" style={{fontSize: "20px"}}>{getId.accFname + " " + getId.accLname}</div>
                     {datetime}
                 </div>
                </div>
               </div>
            </MDBCol>
            <MDBCol className="my-2" md="6">
                <div className="box-container p-4">
                    <MDBRow>
                        <MDBCol md="12">
                            <h5 className="mb-3">Timesheet</h5>
                                <div className="box-outline-in p-3 mb-1">
                                    <div>Time in at</div>
                                      <div className="grey-text">{firstIn ? firstIn : "00:00:00"}</div>
                                </div>
                        </MDBCol>
                        <MDBCol className="text-center my-4 mx-auto" md="12">
                            <div>
                                <AttendanceBtn/>
                            </div>
                        </MDBCol>
                        <MDBCol sm="6">
                          <div className="box-outline-in p-3 my-1 text-center">
                            <div>Break</div>
                            <div className="grey-text">00:00:00</div>
                          </div>
                        </MDBCol>
                        <MDBCol sm="6">
                          <div className="box-outline-in p-3 my-1 text-center">
                            <div>Undertime</div>
                            <div className="grey-text">00:00:00</div>
                          </div>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBCol>
            <MDBCol className="my-2" md="6">
              <div className="box-container p-4">
                <MDBRow>
                  <MDBCol md="12">
                    <h5 className="mb-3">Activity</h5>
                  </MDBCol>
                  <MDBCol md="12">
                    <ActivityStepper/>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
            <MDBCol className="my-2" md="12">
              <EmpAttendanceTable/>
            </MDBCol>
        </MDBRow>
      </div>
      </>
    );
  }
}

export default inject("attendanceStore")(observer(EmpAttendancePage));