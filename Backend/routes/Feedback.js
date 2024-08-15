const express = require ('express');
const Feedback = require ('../models/Feedback');
const router = express.Router();


// Save Users 

router.post('/Feedback/save',(req,res)=>{

    let newFeedback = new Feedback(req.body);

    newFeedback.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Feedback saved Successfully"
        });
    });
});

// get User

router.get('/Feedback',(req,res)=>{
    Job.find().exec((err,Feedback) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
            
        return res.status(200).json({
            sucuss:true,
            existingFeedback:Feedback
        });

       });
});

// update

router.put('/Feedback/update/:id',(req,res)=>{

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

router.delete('/Feedback/delete/:id',(req,res) =>{
    Feedback.findByIdAndRemove(req.params.id).exec((err,deleteFeedback) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteFeedback
        });
    });
});


module.exports = router;