import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Account extends Model {
  constructor(props) {
    const defaults = {
      accID: "",
      accFname: "",
      accLname:"",
      accAddress: "",
      accEmailAddress: '',
      accessType :"",
      password:"",
      username :"",
      accContact :""
    };
    super({ ...defaults, ...props });
  }

//   static get schema() {
//     return {
//       _id: Joi.string()
//         .hex()
//         .length(20),
//         firstName: Joi.string().required(),
//         lastName: Joi.string().required(),
//         email: Joi.email().required(),
//         password: Joi.string().required(),
//         phone: Joi.string().required(),
//         address: Joi.object().keys({
//           street: Joi.string(),
//           city: Joi.string(),
//           state: Joi.string(),
//           postalCode: Joi.number()
//       }),
//       date: Joi.date()
//         .iso()
//         .required()
//     };
//   }
 }

decorate(Account, {
  accID: observable,
  accFname: observable,
  accLname: observable,
  accAddress: observable,
  accEmailAddress: observable,
  accessType: observable,
  password:observable,
  username:observable,
  accContact:observable
});

export default Account;
