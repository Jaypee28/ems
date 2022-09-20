const mongoose = require('mongoose')

const attendanceSchema = mongoose.Schema({
    empID : {
        type: String
    },
    empFname : {
        type: String
    },
    empLname : {
        type: String
    },
    empCompanyID : {
        type: String
    },
    validatorPIN : {
        type: String
    },
    timeStamp : {
        type: Array
    },
    dateStamp : {
        type: String
    },
    firstTimeIn : {
        type: String
    },
    firstTimeOut : {
        type: String
    },
    secondTimeIn : {
        type: String
    },
    secondTimeOut : {
        type: String
    },
    totalHours: {
        type: String
    },
    overTime : {
        type: String
    },
    underTime : {
        type: String
    },
    absences : {
        type: String
    },
    tardiness : {
        type: String
    },
    count : {
        type: Number
    },
    durationOne : {
        type: String
    },
    durationTwo : {
        type: String
    },
    duration : {
        type : Object
    },
    firstTimeInStatus : {
        type : String
    },
    firstTimeOutStatus : {
        type : String
    },
    secondTimeInStatus : {
        type : String
    },
    secondTimeOutStatus : {
        type : String
    },
    lateOne : {
        type : String
    },
    underTimeOne : {
        type : String
    },
    lateTwo : {
        type : String
    },
    underTimeTwo : {
        type : String
    },
    lateTotal : {
        type : String
    },
    underTimeTotal : {
        type : String
    },
    schedType : {
        type : String
    }
})


module.exports = Attendance = mongoose.model('attendanceSchema' , attendanceSchema);