import React from 'react';
import ReactDOM from 'react-dom';
// import Timeline, { DateHeader } from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
// import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import "../css/style.css";

const groups = [
    
    { 
        id: 1, 
        title: 'Employee Name 1 1', 
        rightTitle: 'title in the right sidebar',
        stackItems: true,
        height: 30
    },

    { 
        id: 2, 
        title: 'Employee Name 2', 
        rightTitle: 'title in the right sidebar',
        stackItems: true,
        height: 30
    },
    { 
        id: 3, 
        title: 'Employee Name 3', 
        rightTitle: 'title in the right sidebar',
        stackItems: true,
        height: 30
    }
]
 
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: (0, 'hours'),
    end_time: moment().add(0, 'hours'),
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(0.5, 'day'),
    end_time: moment().add(0.5, 'day')
  },
  {
    id: 2,
    group: 2,
    title: 'item 3',
    start_time: moment().add(10.5, 'day'),
    end_time: moment().add(10.5, 'day')
  },
  {
    id: 3,
    group: 3,
    title: 'item 3',
    start_time: moment().add(2, 'day'),
    end_time: moment().add(3, 'day')
  }
  
]
 
class  SchedulingCalendar extends React.Component {
    
    render() {
      return (
        <div>
        {/* <Timeline */}
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        style={{backgroundColor: "black"}}
        {/* /> */}

        </div>
      );
    }
  }
  export default SchedulingCalendar;