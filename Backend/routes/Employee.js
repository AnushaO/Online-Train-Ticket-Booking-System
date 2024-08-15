const express = require ('express');
const Employee = require('../models/Employee');
const router = express.Router();


// Save Employee 

router.post('/Employee/save',(req,res)=>{

    let newEmployee = new Employee(req.body);

    newEmployee.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employee saved Successfully"
        });
    });
});

// get Employee

router.get('/Employee',(req,res)=>{
    Employee.find().exec((err,Employee) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
            
        return res.status(200).json({
            sucuss:true,
            existingEmployee:Employee
        });

       });
});

// update

router.post('/Employee/update/:id',(req,res)=>{

    Employee.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update Succesfully"
            });
        }
    );
});


// delete Employee

router.delete('/Employee/delete/:id',(req,res) =>{
    Employee.findByIdAndRemove(req.params.id).exec((err,deleteEmployee) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteEmployee
        });
    });
});

router.get('/employees/:id' , async(req,res)=>{

    let userId = req.params.id;

    const employees = await Employee.findById(userId).then((users) => {



        res.status(200).send({status:"Employee fetched",users})

    }).catch((err)=> {

        console.log(err.message );

        res.status(500).send({status:"error with get user", error: err.message})



    })

})


module.exports = router;