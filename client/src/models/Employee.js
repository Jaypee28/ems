import { decorate, observable } from 'mobx'
import Model from './Model'


class Employee extends Model {
    constructor(props) {
      const defaults = {
        _id: undefined,
        empFname: "",
        empMname: "",
        empID: "",
        empDepartment: "",
        empLname: "",
        empSuffix: "",
        empAddress: "",
        empEmailAddress: "",
        accessType: "",
        empBirthday: "",
        empGender: "",
        empCivilStatus: "",
        empReligion: "",
        empContactNumber: "",
        empGovernmentID: "",
        empCompanyID: "",
        empStatus: "",
        empPosition: "",
        dateRegistered: undefined,
        empSchedule: "",
        username: "",
        password: "",
        days: "",
        empName: "",
        salaryType: ""
  
        // request: ""
      }
      super({...defaults, ...props})
    }
  }
  
  decorate(Employee, {
    _id: observable,
    empFname: observable,
    empMname: observable,
    empLname: observable,
    empSuffix: observable,
    empEmailAddress: observable,
    empAddress: observable,
    accessType: observable,
    empBirthday: observable,
    empGender: observable,
    empCivilStatus: observable,
    empReligion: observable,
    empContactNumber: observable,
    empGovernmentID: observable,
    empStatus: observable,
    dateRegistered: observable,
    username: observable,
    password: observable,
    empPosition: observable,
    empSchedule: observable,
    empCompanyID: observable,
    days: observable,
    empID: observable,
    empDepartment: observable,
    empName: observable,
    salaryType: observable
  
    // request: ""
  })
  
  export default Employee