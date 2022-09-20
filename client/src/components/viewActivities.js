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

class viewActivities extends React.Component {
  
  showActiveStep = (tabIndex) => {
    currentPanel.style.display = "none";
    [newPanelIndex].style.display = "block";
  };
  
  render() {
    return (
      <div>
        <Stepper isVertical>
          <Step indicator="1" title="Time in at">
            <div className="Content">
              00:00:00"
            </div>
          </Step>          
          <Step indicator="2" title="Time out at">
            <div className="Content">
              00:00:00
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
              00:00:00
            </div>
          </Step>
          <Step indicator="4" title="Time out at">
            <div className="Content">
              00:00:00
            </div>
          </Step>          
        </Stepper> 

      </div>
    );
  }
}

export default viewActivities;