import React, { Fragment } from "react";
import { MDBBtn, toast, ToastContainer, MDBContainer } from "mdbreact";
import moment from 'moment-timezone';
import { inject, observer } from 'mobx-react';

import "../css/style.css";

class viewAttendanceBtn extends React.Component{

  render(){

    function AttendancePage (){

        return(
          <Fragment>
            <MDBContainer>
              <div className="attendance-info m-auto flex-center" id="total-hours">"00:00:00"</div>
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

export default viewAttendanceBtn