const  mongoose  = require('mongoose')

const userSchema = mongoose.Schema({
    accID : {
        type: String,
       
    },
    accFname : {
        type: String,
       
    },
    accLname : {
        type: String,
      
    },
    accAddress : {
        type: String,
      
    },
    accEmailAddress : {
        type: String,
      
    },
    accessType : {
        type: String,
      
    },
    password : {
        type: String,
        
    },
    username : {
        type: String,
       
    },
    accContact : {
        type: String
    },
    password: {
        type: String
    },
})


module.exports = User = mongoose.model('userSchema' , userSchema);
