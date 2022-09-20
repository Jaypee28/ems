import { action, observable, decorate, computed } from "mobx"
import User from "../models/User";
import Account from "../models/Account"

class StartingStore {
    account = new Account()
    currentUser = new User()
    welcomMessage = "Welcome!"
    listOfUsers = []
    currentUser = []
    listOfUserDocs = []
    api = undefined

    constructor(api){
        this.api = api
    }

    getAccounts = () => {
        this.api.getaccounts()
        .then(resp => {
          // console.log(resp.data.data)
         this.listOfUsers=resp.data
        })
    }

    pushToArray = (user, firstName) => {
        this.listOfUsers.push(new User(user));
    
        // changing model property
        this.currentUser.setProperty("firstName", firstName);
    }

    loginAccount = () => { 
        return new Promise((resolve, reject) => {   
             this.api.loginaccount(this.account)
             .then(resp => {    
                sessionStorage.setItem("userData",JSON.stringify(resp.data))       
                if (resp.data.accessType === "Admin" ) {   
                         resolve(true)       
                         } 
                else if (resp.data.accessType === 'Standard' || resp.data.accessType==='Curator'){
                  resolve(2)
                         }
                else {         
                  resolve(false)      
                  }  
                  })
        })
    }
}

decorate(StartingStore, {
    currentUser: observable,
    welcomMessage: observable,
    account : observable,
    listOfUsers: observable,
    pushToArray: action,
    getAccounts: action
})

export default StartingStore;