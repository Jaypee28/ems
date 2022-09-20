import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import currentPanel from 'react';
import newPanelIndex from 'react';
import "../css/style.css";
import "../css/activityStepper.css";
import moment from 'moment-timezone';
import { inject, observer } from 'mobx-react';


// Step
const Step = ( props ) =>
  <div className="Stepper__step">
    <div className="Stepper__indicator">
      <span className="Stepper__info">{props.indicator}</span>
    </div>
    <div className="Stepper__label">{props.title}</div>
    <div className="Stepper__panel">
      {props.children}
    </div>
  </div>;

// Overlay
const Stepper = ( props ) =>
  <div className={`Stepper ${props.isVertical ? 'Stepper--vertical' : ''} ${props.isInline ? 'Stepper--inline' : ''}`}>
    {props.children}
  </div>;

class  ActivityStepper extends React.Component {
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
  componentWillMount() {
    let {
      attendanceStore: {getAttendanceTime},
    } = this.props
    let day = ""
    let hour = ""
    getAttendanceTime().then((resp) => {
      this.setState({
        // hour: resp.currentTime,
        days: resp.currentDay,
      })

      let date = moment(resp.allDate).format("X")
      let setTime = () => {
        hour = date * 1000 // This would be the PHP timestamp * 1000
        d = new Date()
        d.setTime(hour)
        setInterval(() => {
          updateTime()
          //
        }, 1000)
      }

      let updateTime = () => {
        d.setSeconds(d.getSeconds() + 1)
        // console.log(d, "dsd")
        this.setState({hour: moment(d).format("h:mm:ss a")})
      }
      setTime()
      // console.log(setTime(), "time")
    })
    let d = null
    console.log(this.state, "d")

    // console.log("wwww" , )

    // setInterval(() => {
    //   let now = moment()
    //   let days = now.tz("Asia/Manila").format("LL dddd")
    //   let hour = now.tz("Asia/Manila").format("h:mm:ss a")

    //   // const currentTime = new time.Date()
    //   // var localTime = moment.utc(today)
    //   // const local = moment(localTime).format("YYYY-MM-DD HH:mm:ss")
    //   // console.log(pds, "aws")
    //   // this.setState({days, hour})
    // }, 1000)
  }

  constructor(props) {
    super(props);

    this.state = {
      currentTabIndex : 0
    };
    
  };
  
  showActiveStep = (tabIndex) => {
    currentPanel.style.display = "none";
    [newPanelIndex].style.display = "block";
  };
  
  render() {
    let {
      attendanceStore: {
        firstIn,
        firstOut,
        secondIn,
        secondOut,
      },
    } = this.props
    return (
      <div>
        <Stepper isVertical>
          <Step indicator="1" title="Time in at">
            <div className="Content">
              {firstIn ? firstIn : "00:00:00"}
            </div>
          </Step>          
          <Step indicator="2" title="Time out at">
            <div className="Content">
              {firstOut ? firstOut : "00:00:00"}
            </div>
          </Step>          
          {/* <Step indicator="3" title="Lunch in at">
            <div className="Content">
              9:00 AM
            </div>
          </Step>
          <Step indicator="4" title="Lunch out at">
            <div className="Content">
              9:00 AM
            </div>
          </Step> */}
          <Step indicator="3" title="Time in at">
            <div className="Content">
              {secondIn ? secondIn : "00:00:00"}
            </div>
          </Step>
          <Step indicator="4" title="Time out at">
            <div className="Content">
              {secondOut ? secondOut : "00:00:00"}
            </div>
          </Step>          
        </Stepper> 

      </div>
    );
  }
}

export default inject("attendanceStore")(observer(ActivityStepper));