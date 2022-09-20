import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBIcon,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdbreact';
import { BrowserRouter } from 'react-router-dom';
import '../../css/style.css';
import Navbar from "../../components/navbar";
import SidebarAdmin from '../../components/sidebarAdmin';
import ProfileAvatar from '../../assets/avatar.png';

class ProfilePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

constructor(props) {
  super(props);
  this.state = { count1 : 1, count2 : 1, count3: 1 }
  this.addFamily = this.addFamily.bind(this)
  this.addEducation = this.addEducation.bind(this)
  this.addWork = this.addWork.bind(this)
}

addFamily() {
  this.setState({count1: this.state.count1 + 1})    
}

addEducation() {
  this.setState({count2: this.state.count2 + 1})    
}

addWork() {
  this.setState({count3: this.state.count3 + 1})    
}

renderAddFamily(){
    let count1 = this.state.count1, addFamily = [];
    while(count1--)
       addFamily.push(
           <div>
              <MDBRow className="my-2">
                <MDBCol className="my-2" md="6">
                <label>Name</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="6">
                <label>Relationship</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="6">
                <label>Phone</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
              </MDBRow>
              <hr/>
           </div> 
        )
    return addFamily;
  }

  renderAddEducation(){
    let count2 = this.state.count2, addEducation = [];
    while(count2--)
       addEducation.push(
           <div>
              <MDBRow className="my-2">
                <MDBCol className="my-2" md="6">
                <label>Institution</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="6">
                <label>Course</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="6">
                <label>Starting Date</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="6">
                <label>Complete Date</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
              </MDBRow>
              <hr/>
           </div> 
        )
    return addEducation;
  }

  renderAddWork(){
    let count3 = this.state.count3, addWork = [];
    while(count3--)
       addWork.push(
           <div>
              <MDBRow className="my-2">
                <MDBCol className="my-2" md="6">
                <label>Company Name</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="6">
                <label>Job Position</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="6">
                <label>From Date</label> 
                  <input type="date" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="6">
                <label>To Date</label> 
                  <input type="date" id="" className="form-control form-control-md" />
                </MDBCol>
                <MDBCol className="my-2" md="12">
                <label>Address</label> 
                  <input type="text" id="" className="form-control form-control-md" />
                </MDBCol>
              </MDBRow>
              <hr/>
           </div> 
        )
    return addWork;
  }
  
  state={
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <>
      {/* MODALS */}
        {/* Basic Profile Modal */}
        <MDBModal className="black-text" isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg" centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(1)}>Profile Information</MDBModalHeader>
        <MDBModalBody className="py-4 px-5 mx-auto">
          <form>
          <MDBRow>
            <MDBCol className="flex-center" md="12">
              <img className="profile-picture" src={ProfileAvatar} height="120" width="120" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>First Name</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Last Name</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Birth Date</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Gender</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="12">
            <label>Address</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Province</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Country</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Password</label> 
              <input type="password" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Phone Number</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Department</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="6">
            <label>Designation</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="12">
            <label>Facebook Account Link</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="12">
            <label>Instagram Account Link</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <MDBCol className="my-3" md="12">
            <label>LinkedIn Account Link</label> 
              <input type="text" id="" className="form-control form-control-md" />
            </MDBCol>
            <div className="mx-auto mt-2">
            <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Submit</MDBBtn>
            </div>
          </MDBRow>
          </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Basic Profile Modal */}

        {/* Personal Information Modal */}
        <MDBModal className="black-text" isOpen={this.state.modal2} toggle={this.toggle(2)} size="lg" centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(2)}>Personal Information</MDBModalHeader>
        <MDBModalBody className="py-4 px-5 mx-auto">
          <form>
            <MDBRow>
              <MDBCol className="my-3" md="6">
              <label>Passport No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>SSS No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Philhealth No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>PAGIBIG No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>TIN No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Nationality</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Religion</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Marital Status</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <div className="mx-auto mt-2">
                <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Submit</MDBBtn>
              </div>
            </MDBRow>
          </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Personal Information Modal */}

        {/* Emergency Contact */}
        <MDBModal className="black-text" isOpen={this.state.modal3} toggle={this.toggle(3)} size="lg" centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(3)}>Emergency Contact</MDBModalHeader>
        <MDBModalBody className="py-4 px-5 mx-auto">
          <form>
            <MDBRow>
              <MDBCol md="12">
              <h5>Primary Contact</h5>
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Name</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Relationship</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Phone No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>

              <MDBCol className="mt-5" md="12">
              <h5>Secondary Contact</h5>
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Name</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Relationship</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Phone No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="text-center" md="12">
              <div className="mx-auto mt-2">
                <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Submit</MDBBtn>
              </div>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Emergency Contact */}

        {/* Bank Information */}
        <MDBModal className="black-text" isOpen={this.state.modal4} toggle={this.toggle(4)} size="lg" centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(4)}>Bank Information</MDBModalHeader>
        <MDBModalBody className="py-4 px-5 mx-auto">
          <form>
            <MDBRow>
              <MDBCol className="my-3" md="6">
              <label>Bank Name</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>Bank Account No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>IFSC Code</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>
              <MDBCol className="my-3" md="6">
              <label>PAN No.</label> 
                <input type="text" id="" className="form-control form-control-md" />
              </MDBCol>

              <div className="mx-auto mt-2">
                <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Submit</MDBBtn>
              </div>
            </MDBRow>
          </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Bank Information */}

        {/* Family Information */}
        <MDBModal className="black-text" isOpen={this.state.modal5} toggle={this.toggle(5)} size="lg" centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(5)}>Family Information</MDBModalHeader>
        <MDBModalBody className="py-4 px-5 mx-auto">
          <form>   
            {this.renderAddFamily()} 
            <MDBRow>
            <MDBCol md="12">
              <a className="float-left red-text" onClick={this.addFamily}><MDBIcon icon="plus-circle"/><span> Add More</span></a>
            </MDBCol>
            <MDBCol className="text-center" md="12">
            <div className="text-center mt-2">
              <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Submit</MDBBtn>
            </div>
            </MDBCol>
          </MDBRow>       
          </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Family Information */}
        
        {/* Education Information */}
        <MDBModal className="black-text" isOpen={this.state.modal6} toggle={this.toggle(6)} size="lg" centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(6)}>Education Information</MDBModalHeader>
        <MDBModalBody className="py-4 px-5 mx-auto">
          <form>
              {this.renderAddEducation()}
              <MDBRow>
                <MDBCol md="12">
                  <a className="float-left red-text" onClick={this.addEducation}><MDBIcon icon="plus-circle"/><span> Add More</span></a>
                </MDBCol>
                <MDBCol className="text-center" md="12">
                <div className="mx-auto mt-2">
                  <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Submit</MDBBtn>
                </div>
                </MDBCol>
              </MDBRow>
          </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Education Information */}

        {/* Work Experience */}
        <MDBModal className="black-text" isOpen={this.state.modal7} toggle={this.toggle(7)} size="lg" centered>
        <MDBModalHeader className="text-center" toggle={this.toggle(7)}>Work Experience</MDBModalHeader>
        <MDBModalBody className="py-4 px-5 mx-auto">
          <form>
              {this.renderAddWork()}
              <MDBRow>
                <MDBCol md="12">
                  <a className="float-left red-text" onClick={this.addWork}><MDBIcon icon="plus-circle"/><span> Add More</span></a>
                </MDBCol>
                <MDBCol className="text-center" md="12">
                <div className="mx-auto mt-2">
                  <MDBBtn className="color-blue px-5" style={{borderRadius: "20px"}}>Submit</MDBBtn>
                </div>
                </MDBCol>
              </MDBRow>
          </form>
        </MDBModalBody>
        </MDBModal>
        {/* //Work Experience */}
        {/* //MODALS */}

        <div>
        <Navbar/>
        <SidebarAdmin/>

        {/* Page Title */}
        <BrowserRouter>
          <MDBRow>
              <MDBCol md="12">
                  <h4>Profile</h4>
              </MDBCol>
              <MDBCol md="12">
            <MDBNav className="links">
              <MDBNavItem>
                <MDBNavLink className="grey-text" to="">Dashboard</MDBNavLink>
              </MDBNavItem>
              <span className="mt-2">/</span>
              <MDBNavItem>
                  <MDBNavLink className="white-text" to="attendance">Profile</MDBNavLink>
                </MDBNavItem>
                </MDBNav>
              </MDBCol>
          </MDBRow>
        </BrowserRouter>
        {/* Page Title */}

        <MDBRow className="mt-1">
            <MDBCol className="mt-3" md="12">
                <div className="box-container p-3">
                <a><MDBIcon far icon="edit" className="edit-icon float-right" onClick={this.toggle(1)} /></a>
                    <MDBRow>
                        <MDBCol className="vl" md="6">
                          <MDBRow>
                            <MDBCol className="p-1" xl="3">
                              <div className="bd-highlight col-example"> <img src={ProfileAvatar} className="profile-picture" height="120" width="120" /></div>
                            </MDBCol>
                            <MDBCol className="p-1" xl="9">
                              <div className="align-self-start bd-highlight col-example mt-2 mb-3">
                                <div style={{fontSize: "20px"}}>Sample Name</div>
                                <div style={{fontSize: "14px", color: '#999999'}}>Sample Department <span>/ Sample Position</span></div>
                                <div>Employee ID</div>
                                <div style={{fontSize: "14px", color: '#999999'}}>Date Hired: </div>
                              </div>
                            </MDBCol>
                        </MDBRow>
                        </MDBCol>
                        <MDBCol md="6">
                        <ul class="profile-info my-3" style={{listStyle: "none", padding: "0px"}}>
                          <li className="my-1"><div className="float-left title">Phone:</div><div className="text">09123456789</div></li>
                          <li className="my-1"><div className="float-left title">Email:</div><div className="text">sample@gmail.com</div></li>
                          <li className="my-1"><div className="float-left title">Birthday:</div><div className="text">05 Feb 1997</div></li>
                          <li className="my-1"><div className="float-left title">Address:</div><div className="text">sample address, address, address</div></li>
                          <li className="my-1"><div className="float-left title">Facebook:</div><a className="color-blue-text text">https://web.facebook.com/sample.user</a></li>
                          <li className="my-1" className="my-1"><div className="float-left title">Instagram:</div><a className="color-blue-text text">https://www.instagram.com//user</a></li>
                          <li className="my-1"><div className="float-left title">LinkedIn:</div><a className="color-blue-text text">https://www.linkedin.com/in/sample-user</a></li>
                        </ul>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBCol>
            <MDBCol className="mt-4" md="6">
            <div className="box-container p-3">
              <a><MDBIcon far icon="edit" className="edit-icon float-right" onClick={this.toggle(2)} /></a>
              <h5>Personal Information</h5>
              <ul class="profile-info my-3" style={{listStyle: "none", padding: "0px"}}>
                <li className="my-1"><div className="float-left title">Passport No.:</div><div className="text">123456789</div></li>
                <li className="my-1"><div className="float-left title">SSS No.:</div><div className="text">123456789</div></li>
                <li className="my-1"><div className="float-left title">Philhealth No.:</div><div className="text">123456789</div></li>
                <li className="my-1"><div className="float-left title">PAGIBIG No.:</div><div className="text">123456789</div></li>
                <li className="my-1"><div className="float-left title">TIN:</div><a className="text">123456789</a></li>
                <li className="my-1"><div className="float-left title">Nationality:</div><a className="text">Filipino</a></li>
                <li className="my-1"><div className="float-left title">Religion:</div><a className="text">Christian</a></li>
                <li className="my-1"><div className="float-left title">Marital Status:</div><a className="text">Single</a></li>
              </ul>
            </div>
            </MDBCol>
            <MDBCol className="mt-4" md="6">
            <div className="box-container p-3">
              <a><MDBIcon far icon="edit" className="edit-icon float-right" onClick={this.toggle(3)} /></a>
              <h5>Emergency Contact</h5>
              <ul class="profile-info my-3" style={{listStyle: "none", padding: "0px"}}>
                <li className="my-1">Primary</li>
                <li className="my-1"><div className="float-left title">Name:</div><div className="text">09123456789</div></li>
                <li className="my-1"><div className="float-left title">Relationship:</div><div className="text">sample@gmail.com</div></li>
                <li className="my-1"><div className="float-left title">Phone:</div><div className="text">05 Feb 1997</div></li>
                <li className="mt-3 mb-1">Secondary</li>
                <li className="my-1"><div className="float-left title">Name:</div><div className="text">09123456789</div></li>
                <li className="my-1"><div className="float-left title">Relationship:</div><div className="text">sample@gmail.com</div></li>
                <li className="my-1"><div className="float-left title">Phone:</div><div className="text">05 Feb 1997</div></li>
              </ul>
            </div>
            </MDBCol>
            <MDBCol className="mt-4" md="6">
            <div className="box-container p-3" style={{height: '100%'}}>
              <a><MDBIcon far icon="edit" className="edit-icon float-right" onClick={this.toggle(4)} /></a>
              <h5>Bank Information</h5>
              <ul class="profile-info my-3" style={{listStyle: "none", padding: "0px"}}>
                <li className="my-1"><div className="float-left title">Bank Name:</div><div className="text">BPI</div></li>
                <li className="my-1"><div className="float-left title">Bank Account No.:</div><div className="text">123456789</div></li>
                <li className="my-1"><div className="float-left title">IFSC Code:</div><div className="text">BPI123456789</div></li>
                <li className="my-1"><div className="float-left title">PAN No.:</div><div className="text">TC321321</div></li>
              </ul>
            </div>
            </MDBCol>
            <MDBCol className="mt-4" md="6">
            <div className="box-container p-3">
              <a><MDBIcon far icon="edit" className="edit-icon float-right" onClick={this.toggle(5)} /></a>
              <h5>Family Information</h5>
              <MDBTable className="white-text" borderless responsive>
                <MDBTableHead>
                  <tr>
                    <th>Name</th>
                    <th>Relationship</th>
                    <th>Phone</th>
                    <th></th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>Sample Name</td>
                    <td>Father</td>
                    <td>09123456789</td>
                    <td><a><MDBIcon className="action-icon-delete" icon="minus-square" /></a></td>
                  </tr>
                  <tr>
                    <td>Sample Name</td>
                    <td>Mother</td>
                    <td>09123456789</td>
                    <td><a><MDBIcon className="action-icon-delete" icon="minus-square" /></a></td>
                  </tr>
                  <tr>
                    <td>Sample Name</td>
                    <td>Brother</td>
                    <td>09123456789</td>
                    <td><a><MDBIcon className="action-icon-delete" icon="minus-square" /></a></td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
              </div>
            </MDBCol>
            <MDBCol className="mt-4" md="6">
            <div className="box-container p-3">
              <a><MDBIcon far icon="edit" className="edit-icon float-right" onClick={this.toggle(6)} /></a>
              <h5>Education Information</h5>
              <ul class="profile-info my-3" style={{listStyle: "none", padding: "0px"}}>
                <li className="my-1"><div className="title">Central Philippine University</div>
                <div className="grey-text">BS Information Technology</div>
                <div style={{fontSize: "14px"}}>2015-2019</div>
                </li>
                <li className="my-1"><div className="title">Central Philippine University</div>
                <div className="grey-text">BS Software Engineering</div>
                <div style={{fontSize: "14px"}}>2009-2014</div>
                </li>
              </ul>
            </div>
            </MDBCol>
            <MDBCol className="mt-4" md="6">
            <div className="box-container p-3">
              <a><MDBIcon far icon="edit" className="edit-icon float-right" onClick={this.toggle(7)} /></a>
              <h5>Work Experience</h5>
              <ul class="profile-info my-3" style={{listStyle: "none", padding: "0px"}}>
                <li className="my-1"><div className="title">Web Developer</div>
                <div className="grey-text">Google Inc.</div>
                <div style={{fontSize: "14px"}}>2021-2025</div>
                </li>
                <li className="my-1"><div className="title">UI/UX Designer</div>
                <div className="grey-text">Samsung Corporation</div>
                <div style={{fontSize: "14px"}}>2026-2050</div>
                </li>
              </ul>
            </div>
            </MDBCol>
          </MDBRow>
        </div>
      </>
    );
  }
}

export default ProfilePage;
