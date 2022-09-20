import Joi from "joi"
import {decorate, observable} from "mobx"
import Model from "./Model"

class recordAttendance extends Model {
  constructor(props) {
    const defaults = {
      _id: "",
      empID: "",
      empFname: "",
      empMname: "",
      empLname: "",
      empSuffix: "",
      validatorPIN: "",
      timeStamp: "",
      dateStamp: "",
      firstTimeIn: "",
      firstTimeOut: "",
      secondTimeIn: "",
      secondTimeOut: "",
      overTime: "",
      underTime: "",
      absences: "",
      tardiness: "",
      durationOne: "",
      durationTwo: "",
      duration: undefined,
      count: 0
    }
    super({...defaults, ...props})
  }

  static get schema() {
    return {
      _id: Joi.string()
        .hex()
        .length(20),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.email().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      address: Joi.object().keys({
        street: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        postalCode: Joi.number()
      }),
      date: Joi.date()
        .iso()
        .required()
    }
  }
}
decorate(recordAttendance, {
  _id: observable,
  empID: observable,
  empFname: observable,
  empMname: observable,
  empLname: observable,
  empSuffix: observable,
  validatorPIN: observable,
  timeStamp: observable,
  dateStamp: observable,
  firstTimeIn: observable,
  firstTimeOut: observable,
  secondTimeIn: observable,
  secondTimeOut: observable,
  overTime: observable,
  underTime: observable,
  absences: observable,
  tardiness: observable,
  count: observable,
  duration: observable,
  durationOne: observable,
  durationTwo: observable
})

export default recordAttendance
