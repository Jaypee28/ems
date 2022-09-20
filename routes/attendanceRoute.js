var express = require('express');
var router = express.Router();
var Attendance = require('../schemas/attendance')
var moment = require('moment')
var mongoose = require('mongoose')
var Schema = mongoose.schema


router.post('/getUserAttendance', function (req, res) {
    const request = req.body.data
    // console.log(request , "reqs")
    const attendanceList = Attendance.find({'empID': request.empID , 'dateStamp' : request.currentDate  })
    let currentAttendance = []
    attendanceList.exec(function (err , docs){
      if (err || docs === null){
        res.send(false)
      }
      else{
        let attendances = docs.map((attendance, index) => {
          if(index+1 === docs.length){
            currentAttendance.push(docs[docs.length-1])
          } 
        })
        res.json(currentAttendance[0])
      }
    })   
  })
  
  router.get('/getAllAttendance' , function(req , res) {
    const attendance = Attendance.find({} , function(err, docs) {
        res.json(docs)
    })
})


  router.post('/addAttendance', function (req, res) {
    const request = req.body.data;
    const attendance = new Attendance({
        empID: request.empID,
        empFname: request.empFname,
        empLname: request.empLname,
        empCompanyID : request.empCompanyID,
        validatorPIN: request.validatorPIN,
        timeStamp: request.timeStamp,
        dateStamp : request.dateStamp ,
        firstTimeIn : request.firstTimeIn ,
        firstTimeOut : request.firstTimeOut ,
        secondTimeIn: request.secondTimeIn,
        secondTimeOut : request.secondTimeOut ,
        overTime : request.overTime ,
        underTime : request.underTime,
        absences : request.absences ,
        tardiness : request.tardiness ,
        count : request.count , 
        durationOne : request.durationOne,
        durationTwo : request.durationTwo,
        duration : request.duration,
        // firstTimeInStatus : inStatusOne(),
        // firstTimeOutStatus : request.firstTimeOutStatus,
        // secondTimeInStatus : request.secondTimeInStatus,
        // secondTimeOutStatus : request.secondTimeOutStatus,
        // lateOne : /**/request.lateOne,
        // underTimeOne : /**/request.underTimeOne,
        // lateTwo : /**/request.lateTwo,
        // underTimeTwo : /**/request.underTimeTwo,
        // lateTotal : ,
        // underTimeTotal : ,
        schedType : request.schedType
      })
      attendance
      .save()
      .then(result => {
        console.log(result , "<<<<<=====NEW ATTENDANCE")
        // res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
    // }
    // addAttendanceBody()
  
  })

  router.post('/updateAttendance', function(req, res){
    const request = req.body.data;
    let query = {empID: request.empID, _id : request._id}

    Attendance.findOneAndUpdate(query , request, {upsert: true,useFindAndModify: false} , (err, place)=> {
    if(err){
      return res
      .status(500)
      .send({error: "unsuccessful"})
    }
    console.log(place, '<<<<<Edited Attendance')
    // submits to payrollSchema
    // console.log(salaryArray, "arry")
    res.send({success: "success"});
  })
})

  router.get('/getAllUserAttendance', function (req, res) {
    const attendanceList = Attendance.find({})
    attendanceList.exec(function (err , docs){
      if (err || docs === null){
        res.send(false)
      }
      else{
        res.json(docs)
      }
    })      
  })

  router.post('/statusAttendance', function (req, res) {
    const request = req.body.data;
    console.log(request)
    let query = {empID: request.empID , dateStamp : request.dateStamp}
    // console.log(req.body)
    Attendance.findOneAndUpdate(query , request, {upsert: true,useFindAndModify: false} , (err, place)=> {
      if(err){
        return res
        .status(500)
        .send({error: "unsuccessful"})
      } 
      res.send({success: "success"});
    })
  })
  
  router.get('/getAttendanceTime', function (req, res) {
    let currentTime = moment().format("hh:mm:ss a")
    let currentDay = moment().format("LL dddd")
    let allDate = moment().format()
    let current = {
      currentTime : currentTime,
      currentDay : currentDay,
      allDate : allDate
    }
    res.json(current)
  })
  
  module.exports = router;