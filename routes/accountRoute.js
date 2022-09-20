var express = require('express');
var router = express.Router();
var Accounts = require('../schemas/account')
var mongoose = require('mongoose')
var Schema = mongoose.schema

router.get('/getAccounts' , function(req , res) {
    const accounts = Accounts.find({} , function(err, docs) {
        res.json(docs)
    })
})

router.post('/addAccounts', function (req, res) {
    const request = req.body.data;
     console.log(req.body.data)
  let data = []
     const accounts = Accounts.find({username: request.username} , function(err, docs) {
      data.push(docs)
  })

  if (data.length === 0){
    const accounts= new Accounts({
      accFname : request.accFname,
      accLname : request.accLname,
      accAddress : request.accAddress,
      accEmailAddress : request.accEmailAddress,
      accContact : request.accContact,
      username : request.username,
      password : request.Password,
      accID : request.accID,
      accessType : request.accessType,
      password : request.password,
      
    })
    accounts
    .save()
    .then(result => {
      setTimeout(() => {
        const accounts = Accounts.find({} , function(err, docs) {
          res.json(docs)
      })
      }, 1200);
     
    })
    .catch(err => {
      console.log(err)
    })

  }
  else{
    res.send(false)
  }

   
 
})  

router.post('/editAccounts', function (req, res) {
    const request = req.body.data;
    console.log(request)
    let query = {accID : request.accID}
    // console.log(req.body)
    Accounts.findOneAndUpdate(query , request, function(err, place) {
      if(err){
        return res
        .status(500)
        .send({error: "unsuccessful"})
      }
      res.send({success:"success"})
    })
})

router.post('/loginAccounts', function (req, res) {
    const request = req.body.data;
    console.log(request)

    const accountsList = Accounts.find({})

    accountsList.exec((err , docs)=>{

     if (err || docs === null){     
        res.send(false)
      }
      else{
        let result = docs.filter(data => {
          if (data.username === request.username && data.password === request.password){
            console.log(data)
            res.json(data)
          }
        })

      }
    })  
})



module.exports = router;