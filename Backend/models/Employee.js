const mongoose = require('mongoose');

const EmployeeSchema =  new mongoose.Schema({

     Name:{
        type:String,
        required:true
     },

     Position:{
        type:String,
        required:true
     },

     DateOfBirth:{
        type:String,
        required:true
     },
    
      ContactNumber:{
      type:String,
      required:true
     },

    Email:{
        type:String,
        required:true
     },
     Address:{
        type:String,
        required:true
     }

});

module.exports  = mongoose.model('Employee', EmployeeSchema);