const mongoose = require('mongoose');

const FeedbackSchema =  new mongoose.Schema({

     Email:{
        type:String,
        required:true
     },

     Discription:{
        type:String,
        required:true
     }
     
    

});

module.exports  = mongoose.model('Feedback',FeedbackSchema)