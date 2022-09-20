import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "../css/sidebar.css";
import "../css/style.css";

class SidebarEmp extends Component {
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
    <SideNav.Nav defaultSelected="attendance">
        <NavItem eventKey="attendance"> 
            <NavIcon>
                <i className="far fa-clock" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link className="link-text" to="/">Attendance</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="leave"> 
            <NavIcon>
                <i className="far fa-envelope" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link className="link-text" to="/">Leave Request</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="projects"> 
            <NavIcon>
                <i className="far fa-file" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link className="link-text" to="/">Projects</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="performance"> 
            <NavIcon>
                <i className="far fa-star" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link className="link-text" to="/">Performance</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="payroll"> 
            <NavIcon>
                <i className="far fa-credit-card" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <Link className="link-text" to="/">Payroll</Link>
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>

);
  }
}

export default SidebarEmp;