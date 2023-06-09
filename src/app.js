const express = require("express");
require("./database/connection");
const Employee = require("./models/students");
const app = express();
const port = process.env.PORT || 8090


app.get("/students",(req, res)=>{
    res.send("welcome to my restFul students API");
})

app.get("/studentsOf",(req, res)=>{
    res.send("welcome to my restFul lets go API");
})

app.listen(port, ()=>{
    console.log(`connnection to the database ${port}`);
})
