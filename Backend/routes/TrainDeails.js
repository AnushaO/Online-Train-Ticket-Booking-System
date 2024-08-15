const express = require ('express');

const TrainDetails = require('../models/TrainDetails');

const router = express.Router();


// Save TrainDetails

router.post('/TrainDetails/save',(req,res)=>{

    let newTrainDetails = new TrainDetails(req.body);

    newTrainDetails.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"TrainDetails saved Successfully"
        });
    });
});

// get TrainDetails

router.get('/TrainDetails',(req,res)=>{
    TrainDetails.find().exec((err,TrainDetails) =>{
        if(err){
            return res.status(400).json({
              error:err
            });
        }
            
        return res.status(200).json({
            sucuss:true,
            existingTrainDetails:TrainDetails
        });

       });
});

// router.get('/getSelectedTrainDetails',(req,res)=>{
//     const id = req.params.id;
//     TrainDetails.findById(id).exec((err,TrainDetails) =>{
//         if(err){
//             return res.status(400).json({
//               error:err
//             });
//         }
            
//         return res.status(200).json({
//             sucuss:true,
//             existingTrainDetails:TrainDetails
//         });

//        });
// });

// update

router.put('/TrainDetails/update/:id',(req,res)=>{

    TrainDetails.findByIdAndUpdate(
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

router.delete('/TrainDetails/delete/:id',(req,res) =>{
    TrainDetails.findByIdAndRemove(req.params.id).exec((err,deleteTrainDetails) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteTrainDetails
        });
    });
});




// fetch one 


router.get('/TrainDetails/:id' , async(req,res)=>{

    let userId = req.params.id;

    const trainDetails = await TrainDetails.findById(userId).then((trainDetails) => {



        res.status(200).send({status:"user fetched",trainDetails})

    }).catch((err)=> {

        console.log(err.message );

        res.status(500).send({status:"error with get user", error: err.message})



    })

})


module.exports = router;