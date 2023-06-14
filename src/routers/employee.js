const express = require("express");
const router = new express.Router();
const Employee = require("../models/employee");


//creating a new employee using promise  
// app.post("/employee",(req, res)=>{
//     console.log(req.body);
//     const user  = new Employee(req.body);
//     user.save()
//     .then(()=>{
//         res.status(201).send(user);
//     })
//     .catch((e)=>{
//         res.status(400).send(e);
//     })
// })

// using async await 
router.post("/employee",  async(req,res)=>{
    try{
        const user = new Employee(req.body);
        const createUser = await user.save()
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/employeesData",async(req, res)=>{
    try{
        const employeesData = await Employee.find()
        res.status(201).send(employeesData);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/employee/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const employeeData = await Employee.findById(_id);
        console.log(employeeData)
        if(!employeeData){
            return res.send(404).send();
        }else{
            res.send(employeeData);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

//update students id

router.patch("/employee/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
        const updateEmployee = await Employee.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(updateEmployee);
    }catch(e){
        res.status(404).send(e);
    }
})

// delete employee

router.delete("/employee/:id",  async(req, res)=>{
    try{
        const _id = req.params.id;
        const deleteEmployee = await Employee.findByIdAndDelete(_id)
        if(!req.params.id){
            return res.status(400).send();
        }else {
            res.status(201).send(deleteEmployee);
        }
        res.status(201).send(deleteEmployee);
    }catch(e){
        res.status(404).send(e);
    }
})


module.exports = router;
