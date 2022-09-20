import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "../css/sidebar.css";
import "../css/style.css";
import AttendancePage from "../pages/admin/attendance";



class SidebarAdmin extends Component {
state = {
    isOpen: false
};
    
toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
}
    
render() {
    return (
    <SideNav
    onSelect={(selected) => {
    
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home"> 
            <NavIcon>
                <i className="fas fa-grip-horizontal" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link className="link-text" to="dashboard">Dashboard</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="employees">
            <NavIcon>
                <i className="fas fa-user-friends" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Employees
            </NavText>
            <NavItem eventKey="employees/allemployees">
                <NavText>
                <Link to="allEmployees" className="sidebar-link">All Employees</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="employees/leaves">
                <NavText>
                <Link to="" className="sidebar-link">Leaves</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="employees/attendance">
                <NavText>
                <Link to="attendance" className="sidebar-link">Attendance</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="employees/scheduling">
                <NavText>
                <Link to="scheduling" className="sidebar-link">Scheduling</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="employees/workfromhome">
                <NavText>
                <Link to="" className="sidebar-link">Work From Home</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="employees/departments">
                <NavText>
                <Link to="" className="sidebar-link">Departments</Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="employees/designations">
                <NavText>
                <Link to="" className="sidebar-link">Designations</Link>
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fas fa-list-alt" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Projects
            </NavText>
        </NavItem>
        <NavItem eventKey="performance">
            <NavIcon>
                <i className="fas fa-star" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Performance
            </NavText>
            <NavItem eventKey="performance/perfreview">
                <NavText>
                    Performance Review
                </NavText>
            </NavItem>
            <NavItem eventKey="performance/perfappraisal">
                <NavText>
                    Performance Appraisal
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>

);
  }
}

export default SidebarAdmin;