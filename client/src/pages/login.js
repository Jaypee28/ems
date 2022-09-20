import React from 'react';
import { inject, observer } from 'mobx-react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import SUPLogo from "../assets/suplogo.png";
import "../css/style.css";

class LoginPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    
    let { startingStore: { loginAccount } } = this.props;
    loginAccount().then(res => {
      if (res === true) {
        this.props.history.push("/attendance")
      }
      else if(res === 2){
        this.props.history.push("/empAttendance")
      }
      else {
        this.props.history.push("/")
      }
    });
    console.log("Log in")
  };


  render() {

    let getId = JSON.parse(sessionStorage.getItem('userData'))
    if(getId){
      if(getId.accessType == "Standard"){
        window.location.href="/empAttendance"
      }else{
        window.location.href="/attendance"
      }
    }

    let { startingStore: { account } } = this.props;

    return (
      <>
        <div className="login-page text-center m-auto">
          <MDBRow>
            <MDBCol md="12">
                <img className="mb-3" src={SUPLogo} width="100" height="100" />
                <div className="box-container m-auto py-4 px-2" style={{maxWidth: "480px", height: "auto"}}>
                    <h3>Login</h3>
                    <p>Startup Project Ventures</p>
                    <form className="my-4 mx-4" onSubmit={this.submitHandler}>
                    <div className="form-group my-4">
                        <label className="float-left grey-text" htmlFor="">Username</label>
                          <input
                          type="text"
                          className="form-control hrs-input"
                          id="formGroupExampleInput"
                          style={{height: "46px"}}
                          onChange={username => account.setProperty("username", username.target.value)}
                          required
                        />
                    </div>
                    <div className="form-group my-4">
                        <label className="float-left grey-text" htmlFor="">Password</label>
                        <label className="float-right dark-grey-text" htmlFor="" style={{fontSize: '14px'}}>Forgot password?</label>
                          <input
                          type="password"
                          className="form-control hrs-input"
                          id="formGroupExampleInput"
                          style={{height: "46px"}}
                          onChange={password => account.setProperty("password", password.target.value)}
                          required
                        />
                    </div>
                    <MDBBtn className="login-btn mx-auto py-auto" style={{fontSize: "16px"}} type="submit">Login</MDBBtn>
                    </form>
                    <p style={{fontSize: "14px"}}>Don't have an account yet? <span style={{color: "#01D2FE"}}> Register</span></p>
                </div>
            </MDBCol>
          </MDBRow>
        </div>
      </>
    );
  }
}

export default inject("startingStore")(observer(LoginPage));
