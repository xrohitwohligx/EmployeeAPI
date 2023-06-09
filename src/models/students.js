const mongoose = require("mongoose")
const validator = require("validator")

const employeeSchema =  new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength:3
    },
    email:{
        type:String,
        required: true,
        unique:[true, "Email already exits"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
        max:10,
        unique:true
    },
    address:{
        type:String,
        required:true,
    }
})

//we will create a new collection 
const Employee = mongoose.model("EmployeeData", employeeSchema);
module.exports = Employee;