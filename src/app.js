const express = require("express");
require("./database/connection");
const Employee = require("./models/employee");
const employeeRouter = require("./routers/employee");
const app = express();
const port = process.env.PORT || 8090

app.use(express.json());
app.use(employeeRouter);


app.listen(port, ()=>{
    console.log(`connnection to the database ${port}`);
})


