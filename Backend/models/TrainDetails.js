const mongoose = require('mongoose');

const TrainDetailsSchema =  new mongoose.Schema({

     TrainName:{
        type:String,
        required:true
     },

     Day:{
        type:String,
        required:true
     },

     StartPoint:{
        type:String,
        required:true
     },

     EndPoint:{
        type:String,
        required:true
     },

     StartUpTime:{
        type:String,
        required:true
     },
     TrainType:{
        type:String,
        required:true
     }

});

module.exports  = mongoose.model('TrainDetails',TrainDetailsSchema);