import axios from 'axios'
import { action, observable, decorate, computed } from "mobx";

class Api {
    api = axios.create({
        baseURL: "/"
      })

    loginaccount = async (data) => {
        return this.api.post("accountRoute/loginAccounts" , {
          mode: 'cors',
          data: data
        })
      }

    getaccounts = ()=>{
        return this.api.get("accountRoute/getAccounts", {
          mode: "cors"
        })
    }

    addattendance = async (data) => {
      return this.api.post("attendanceRoute/addAttendance", {
        mode: "cors",
        data: data,
      })
    }

    getuserattendance = (data) => {
      return this.api.post("attendanceRoute/getUserAttendance", {
        mode: "cors",
        data: data,
      })
    }

    updateattendance = (data) => {
      return this.api.post("attendanceRoute/updateAttendance", {
        mode: "cors",
        data: data,
      })
    }

    getAttendanceTime = () => {
      return this.api.get("attendanceRoute/getAttendanceTime", {
        mode: "cors"
      })
    }

    getallattendance = () => {
      return this.api.get("attendanceRoute/getAllAttendance", {
        mode: "cors"
      })
    }

    getAlluserAttendance = () => {
      return this.api.get("attendanceRoute/getAllUserAttendance", {
        mode: "cors"
      })
    }
}

decorate(Api, {
    loginaccount:action,
    getAttendanceTime:action,
    updateattendance:action,
    getuserattendance:action,
    addattendance:action,
    getaccounts:action,
    getallattendance: action
 });

export default Api;