const express = require ('express');

const MyTrainDetails = require('../models/MyBooking');

const router = express.Router();


// Save TrainDetails

router.post('/MyBooking/save',(req,res)=>{

    let newTrainDetails = new MyTrainDetails(req.body);

    newTrainDetails.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"MyTrainDetails saved Successfully"
        });
    });
});

// get TrainDetails

router.get('/MyBooking',(req,res)=>{
    MyTrainDetails.find().exec((err,TrainDetails) =>{
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

router.put('/MyBooking/update/:id',(req,res)=>{

    MyTrainDetails.findByIdAndUpdate(
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

router.delete('/MyBooking/delete/:id',(req,res) =>{
    MyTrainDetails.findByIdAndRemove(req.params.id).exec((err,deleteTrainDetails) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteTrainDetails
        });
    });
});




// fetch one 


router.get('/MyBooking/:id' , async(req,res)=>{

    let userId = req.params.id;

    const trainDetails = await MyTrainDetails.findById(userId).then((trainDetails) => {



        res.status(200).send({status:"user fetched",trainDetails})

    }).catch((err)=> {

        console.log(err.message );

        res.status(500).send({status:"error with get user", error: err.message})



    })

})


module.exports = router;