import {action, observable, decorate, computed } from 'mobx'
import User from '../models/Employee'
import Attendance from '../models/Attendance'
import moment from 'moment'

class AttendanceStore {
    checkInCounter = 0
    attendance = new Attendance()
    welcomeMessage = "Welcome!"
    listOfUsers = []
    currentUser = new User()
    api = undefined
  
    firstIn = ""
    firstOut = ""
    secondIn = ""
    secondOut = ""
    totalHours = ""
    listOfAttendance = []
    employeeList = []
    employeeInfo = []
    userSchedule = []
    attendanceID = ""
    duration = undefined
    duration1 = ""
    duration2 = ""
    listofpayroll = []
    listOfAttendanceTime = []
    tardiness = false
    constructor(api) {
      this.api = api
    }
  
    changeMessage = (msg) => {
      this.welcomeMessage = msg.target.value
    }
  
    resetMessage = () => {
      this.welcomeMessage = "Welcome!"
    }
  
    pushToArray = (user, firstName) => {
      this.listOfUsers.push(new User(user))
  
      this.currentUser.setProperty("firstName", firstName)
    }
  
    getName = () => {
      this.api.getUsers().then((data) => {
        // console.log(data.data);
      })
    }
    editPassword = () => {
      this.api.editpassword(this.currentUser).then((resp) => {
        // console.log(resp.data);
      })
    }
  

    addAttendance = () => {
      return new Promise((resolve, reject) => {
        this.api.addattendance(this.attendance).then((resp) => {
          sessionStorage.setItem("attendanceID", resp.data._id)
  
          if (resp.data !== false && resp.data !== []) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }
    // getAllAttendance = (id) => {
    //   return new Promise((resolve, reject) => {
    //     let data = JSON.parse(sessionStorage.getItem("userData"))
    //     this.api
    //       .getallattendance(id !== undefined ? id : data.empID)
    //       .then((resp) => {
    //         this.listOfAttendance = resp.data
  
    //         if (resp.data !== false && resp.data !== []) {
    //           resolve(resp.data)
    //         } else {
    //           resolve(false)
    //         }
    //       })
    //   })
    // }
    getAllAttendance = () => {
      this.api.getallattendance()
      .then(resp => {
       this.listOfAttendance=resp.data
      })
    }
  
    getSalaries = () => {
      let salariesdata = JSON.parse(localStorage.getItem("userData"))
      return this.api.getpayroll().then((data) => {
        this.listofpayroll = data.data
      })
    }
  
    getAlluserAttendance = () => {
      return this.api.getAlluserAttendance().then((data) => {
        this.listOfAttendance = data.data
      })
    }
  
    getAttendanceTime = () => {
      return new Promise((resolve, reject) => {
        return this.api.getAttendanceTime().then((resp) => {
          this.listOfAttendanceTime = resp.data
          console.log(resp.data, "uest")
  
          if (resp.data !== false && resp.data !== []) {
            resolve(resp.data)
          } else {
            resolve(false)
          }
        })
      })
    }
  
    getemployees = () => {
      let dataaa = JSON.parse(localStorage.getItem("userData"))
      return this.api.getAllEmployees(dataaa.empCompanyID).then((data) => {
        this.employeeList = data.data
      })
    }
  
    getTableAttendance = () => {
      let data = JSON.parse(localStorage.getItem("userData"))
      let currentDate = moment().format("MMMM Do YYYY")
  
      let attendanceCheck = {
        empID: data.empID,
        currentDate: currentDate,
        // attendanceID: localStorage.getItem("attendanceID")
      }
  
      return new Promise((resolve, reject) => {
        this.api.getuserattendance(attendanceCheck).then((resp) => {
          // console.log(resp.data, "awts");
          this.listOfAttendance = resp.data
          if (resp.data !== false && resp.data !== []) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }
  
    getUserAttendance = () => {
      // ============= let variables can only be access with the functions
      // =============resp.data is the responce of the back-end
      let data = JSON.parse(sessionStorage.getItem("userData"))
      let currentDate = moment().format("MMMM Do YYYY")
  
      let attendanceCheck = {
        empID: data.accID,
        currentDate: currentDate,
        attendanceID: sessionStorage.getItem("attendanceID"),
      }
  
      return new Promise((resolve, reject) => {
        this.api.getuserattendance(attendanceCheck).then((resp) => {
          // console.log(resp.data, "Testing");
          sessionStorage.setItem("attendanceID", resp.data._id)
          if (resp.data.count === undefined || resp.data.count === null) {
            this.checkInCounter = 1
          } else {
            this.checkInCounter = resp.data.count
  
            this.attendance.setProperty(
              "_id",
              sessionStorage.getItem("attendanceID")
            )
          }
          // let date = D
          if (resp.data.dateStamp !== null && resp.data.dateStamp !== undefined) {
            if (resp.data.dateStamp === moment().format("MMMM Do YYYY")) {
              this.firstIn = resp.data.firstTimeIn
              this.firstOut = resp.data.firstTimeOut
              this.secondIn = resp.data.secondTimeIn
              this.secondOut = resp.data.secondTimeOut
              this.duration1 = resp.data.durationOne
              this.duration2 = resp.data.durationTwo
              this.duration = resp.data.duration
              this.tardiness = resp.data.tardiness
              this.totalHours = resp.data.totalHours
            } else {
              this.firstIn = ""
              this.firstOut = ""
              this.secondIn = ""
              this.secondOut = ""
              this.duration1 = ""
              this.duration2 = ""
              this.duration = ""
              this.tardiness = ""
              this.totalHours = ""
            }
          } else {
            this.firstIn = ""
            this.firstOut = ""
            this.secondIn = ""
            this.secondOut = ""
            this.duration1 = ""
            this.duration2 = ""
            this.duration = ""
            this.tardiness = ""
            this.totalHours = ""
          }
  
          if (resp.data !== false && resp.data !== []) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }
  
    updateAttendance = () => {
      return new Promise((resolve, reject) => {
        this.api.updateattendance(this.attendance).then((resp) => {
          if (resp.data !== false && resp.data !== []) {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }
  
    getSchedule = () => {
      let local = JSON.parse(localStorage.getItem("userData"))
      return new Promise((resolve, reject) => {
        this.api
          .getuserschedule(local.empSchedule, local.empCompanyID)
          .then((resp) => {
            const days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ]
            console.log(local.empSchedule, "awtsuuuuuuuuuu")
            let day = new Date()
            let currentDate = days[day.getDay()]
  
            const scheduleDays = resp.data.map((data, index) => {
              return data.days.indexOf(currentDate)
            })
  
            const scheduleFirstSched = resp.data.map((data, index) => {
              return data.firstSched[scheduleDays[0]]
            })
  
            const scheduleSecondSched = resp.data.map((data, index) => {
              return data.secondSched[scheduleDays[0]]
            })
  
            let samp = [scheduleFirstSched, scheduleSecondSched]
  
            localStorage.setItem("scheduleArray", samp)
  
            if (resp.data !== false && resp.data !== []) {
              resolve(true)
            } else {
              resolve(false)
            }
          })
      })
    }
    
    getAccounts = () => {
      this.api.getaccounts()
      .then(resp => {
       this.listOfUsers=resp.data
      })
    }


  }

  
  decorate(AttendanceStore, {
    welcomeMessage: observable,
    getTableAttendance: action,
    listName: observable,
    currentUser: observable,
    changeMessage: action,
    resetMessage: action,
    pushToArray: action,
    getName: action,
    loginEmployee: action,
    attendance: observable,
    addAttendance: observable,
    getUserAtendance: observable,
    checkInCounter: observable,
    updateAttendance: observable,
    getAttendanceTime: action,
    firstIn: observable,
    secondIn: observable,
    firstOut: observable,
    secondOut: observable,
    totalHours: observable,
    getSchedule: action,
    getAllAttendance: action,
    getAlluserAttendance: action,
    getemployees: action,
    userSchedule: observable,
    listOfAttendance: observable,
    listOfUsers: observable,
    employeeList: observable,
    getAccounts: action,
    editPassword: action,
    duration: observable,
    tardiness: observable,
    getSalaries: action,
    listofpayroll: observable,
    listOfAttendanceTime: observable,
  })
  
  export default AttendanceStore