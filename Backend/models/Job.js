const mongoose = require('mongoose');

const JobSchema =  new mongoose.Schema({

     JobTitle:{
        type:String,
        required:true
     },

     Discription:{
        type:String,
        required:true
     }
     
    

});

module.exports  = mongoose.model('Job',JobSchema)