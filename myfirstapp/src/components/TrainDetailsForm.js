import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css files/trainDforms.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

export default function TrainDetailsForm() {

  const [TrainName,setTrainName] = useState('');
  const [Day,setDay] = useState('');
  const [StartPoint,setStartPoint] = useState('');
  const [EndPoint,setEndPoint] = useState('');
  const [StartUpTime,setStartUpTime] = useState('');
  const [TrainType,setTrainType] = useState('');
  

function handleClick() {

   const newTrain = {
      TrainName,
      Day,
      StartPoint,
      EndPoint,
      StartUpTime,
      TrainType

   }
   if (TrainName ==='' && Day ==='' && StartPoint === '' && EndPoint === ''&& StartUpTime === '' &&TrainType === '' ){
      swal('Error')                               
   }else if( TrainName ==='') {
      swal('Name cant be empty')
   }
   else if(Day ==='') {
      swal('Day is required')
   }
   else if(StartPoint ==='') {
      swal('Day is required')
   }
   else if(EndPoint ==='') {
      swal('Day is required')
   }
   else if(StartUpTime ==='') {
      swal('Day is required')
   }
   else if(TrainType ==='') {
      swal('Day is required')
   }




   axios.post('http://localhost:8000/TrainDetails/save',newTrain).then(()=>{
      swal({
         title: "Success",
         text: "New User Added",
         icon:'success',
         timer:2000,
         button:false
      });
   }).catch((e)=>{
      // alert(e)
   })

};















  return (
    <>
    
    <div> <Header/> </div>
    
    <div className='td'> </div>
         
    <form  className='frm' action="">  <br />

     <label className='lab'> Train Name :</label>
     <input className='ip form-control'
        type="text"
        id='TrainName'
        value={TrainName}
        onChange = {(e) =>setTrainName(e.target.value)}
       
        />

     <label className='lab'> Train Type : </label>
     <input className='ip form-control'
      type="text" 
     id='TrainType'
     value={TrainType}
     onChange = {(e) =>setTrainType(e.target.value)}/>

     <label className='lab'> Day : </label>
     <input  className='ip form-control'
      type="Day"
     id='Day'
     value={Day}
     onChange = {(e) =>setDay(e.target.value)} />

     <label className='lab'> Start Point :</label>
     <input className='ip form-control'
      type="StartPoint" 
     id='StartPoint'
     value={StartPoint}
     onChange = {(e) =>setStartPoint(e.target.value)}/>


     <label className='lab'> End Point : </label>
     <input className='ip form-control' 
     type="EndPoint" 
     id='EndPoint'
     value={EndPoint}
     onChange = {(e) =>setEndPoint(e.target.value)}/>


     <label className='lab'> Startup Time : </label>
     <input className='ip form-control'
      type="text" 
     id='StartUpTime'
     value={StartUpTime}
     onChange = {(e) =>setStartUpTime(e.target.value)}/>  <br />


    <button class="btn btn-primary  by"  type='button' onClick={handleClick} > Add </button>


   

    <Link to="/upTrain">  <button class="btn btn-primary  by"  > View  </button> </Link>

     </form>
     
    <div className='fu'> 
        <Footer/>
    </div>
    
    </>
  )
}
