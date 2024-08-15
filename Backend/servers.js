const express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();


// import routes 

const UsersRoutes = require('./routes/Users');

const TrainDetailsRoutes = require('./routes/TrainDeails')

const NoticeRoutes = require('./routes/Notice')

const EmployeeRoutes = require('./routes/Employee')

const JobRoutes = require('./routes/Job')

const MyTrainDetailsRoutes = require('./routes/MyTrainDetails')

const FeedbackRoutes = require('./routes/Feedback')

const MyBookingRoutes = require('./routes/MyBooking')

app.use(bodyparser.json());
app.use(cors());




// route middleware
app.use(UsersRoutes);
app.use(TrainDetailsRoutes); 
app.use(NoticeRoutes);
app.use(EmployeeRoutes);
app.use(JobRoutes);
app.use(MyTrainDetailsRoutes);
app.use(FeedbackRoutes);
app.use(MyBookingRoutes)




const PORT = 8000;
const DB_URL = 'mongodb+srv://binod:bino1999@cluster0.l1h44vy.mongodb.net/Spm_Project?retryWrites=true&w=majority';


mongoose.connect(DB_URL)
.then( ()=>{
    console.log('DB Connect');
})
.catch((err) => console.log('DB connection error ', err));

app.listen(PORT ,() =>{
    console.log(`App is running on ${PORT}`);

});

