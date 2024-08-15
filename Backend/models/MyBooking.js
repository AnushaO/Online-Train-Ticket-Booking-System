const mongoose = require('mongoose');

const MyBookingSchema =  new mongoose.Schema({

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
     },
     customerName:{
        type:String,
     },

     customerId:{
        type:String,
     },

     date:{
        type:String,
        required:true
     },
     time:{
        type:String,
        required:true
     }

});

module.exports  = mongoose.model('MyBooking',MyBookingSchema);