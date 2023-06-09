const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EmployeeApi")
.then(()=> console.log("connected to database"))
.catch((e)=> console.log("not connected to database "))
