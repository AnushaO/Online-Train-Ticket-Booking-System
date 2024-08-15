const express = require ('express');
const Job = require ('../models/Job');
const router = express.Router();


// Save Users 

router.post('/Job/save',(req,res)=>{

    let newJob = new Job(req.body);

    newJob.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Job saved Successfully"
        });
    });
});

// get User

router.get('/Job',(req,res)=>{
    Job.find().exec((err,Job) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
            
        return res.status(200).json({
            sucuss:true,
            existingJob:Job
        });

       });
});

// update

router.put('/Job/update/:id',(req,res)=>{

    Job.findByIdAndUpdate(
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


// delete Users

router.delete('/Job/delete/:id',(req,res) =>{
    Job.findByIdAndRemove(req.params.id).exec((err,deleteJob) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteJob
        });
    });
});


module.exports = router;