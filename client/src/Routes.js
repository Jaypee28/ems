import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from 'mobx-react';

import Dashboard from "./pages/admin/dashboard";
import AttendancePage from "./pages/admin/adminAttendance";
import EmpAttendancePage from "./pages/employee/empAttendance";
import LoginPage from "./pages/login";
import SchedulingPage from "./pages/admin/scheduling";
import EmployeesPage from "./pages/admin/allEmployees";
import ProfilePage from "./pages/admin/profile";
import WFHPage from "./pages/admin/wfh";

import {
  StartingStore,
  Api,
  AttendanceStore
} from "./stores";

const api = new Api();
const startingStore = new StartingStore(api);
const attendanceStore = new AttendanceStore(api);

const stores = {
  startingStore,
  attendanceStore
};

class Routes extends React.Component {
  render() {
    return (
      <Provider {...stores}>
      <Switch>
        <Route exact path="/" component={LoginPage} /> 
        <Route path="/empAttendance" component={EmpAttendancePage} />   
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/allEmployees" component={EmployeesPage} />
        <Route path="/attendance" component={AttendancePage} />
        <Route path="/scheduling" component={SchedulingPage} /> 
        <Route path="/profile" component={ProfilePage} />
        <Route path="/wfh" component={WFHPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
      </Provider>
    );
  }
}

export default Routes;
