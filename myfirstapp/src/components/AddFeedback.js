import React from 'react'
import './css files/createNotice.css'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'


export default function AddFeedback() {

const [Email,setEmail] = useState('');
const [Discription,setDiscription] = useState('');


function handleClick() {

   const newFeedback = {
      Email,
      Discription
     
   }
   if (Email ==='' && Discription ==='' ){
      swal('Please add Email and Disription')
   }else if(Email ==='') {
      swal('Email is Required')
   }
   else if(Discription ==='') {
      swal('This field cant be empty')
   }
 



   axios.post('http://localhost:8000/Feedback/save',newFeedback).then(()=>{
      swal({
         title: "Success",
         text: "New Feedback Added",
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

   <div>
        <Header/>
     </div>      
                              
              
  

<div className="row">


<div className="col-6">
 
       
<div className="formdiv">

<h2> Add Feedback </h2>

<form action="">

                           
<label for="date">Email:</label>  <br />
       <input type="text" 
       className='form-control-lg'
        id='Email'
        value={Email}
        onChange = {(e) =>setEmail(e.target.value)} />

 <br />
 <br />
 <br />




<label for="Email">Feedback:</label>  <br />
       {/* <input type="text"
        id='Notice'
        value={Notice}
        onChange = {(e) =>setNotice(e.target.value)} /> */}
<br />
<textarea name="" id="" cols="60" rows="10"
className='form-contro'
value={Discription}
onChange = {(e) =>setDiscription(e.target.value)}></textarea>
<br />

   <button className='btn btn-success' type='button' onClick={handleClick} > Add </button>


</form>
</div> 

</div>



<div className="col-6">    

<div className="kl">
<img className='hio' src="./images/1.jpg"  alt="" />
</div>  

 </div>




</div>


       <div className='fo'>
          <Footer/>   
       </div>

       </>
  )
}
