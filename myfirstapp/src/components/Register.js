import React  from 'react'
import './css files/Feedback.css'
import './css files/Register.css'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'


export default function Register() {

const [Name,setName] = useState('');
const [ContactNumber,setContactNumber] = useState('');
const [Email,setEmail] = useState('');
const [Password,setPassword] = useState('');

console.log(Name);
       
  const number = 10;

function handleClick() {

   const newUser = {
      Name,
      ContactNumber,
      Email,
      Password
   }
   if (Name ==='' && ContactNumber ==='' && Email === '' && Password === '' ){
      swal('User Not Registerd')
   }else if(Name ==='') {
      swal('Name cant be empty')
   }
   else if(ContactNumber ==='') {
      swal('Contact Number cant be empty')
   }
   else if(Email ==='') {
      swal('Email cant be empty')
   }
   else if(Password ==='') {
      swal('Password cant be empty')
   } else if (!validateEmail(Email)){
      swal('Email is not valid')
   } 
   else if (isNaN(ContactNumber) || ContactNumber.length < 10){
      swal('Contact Number is not valid')
   }else {
  




   axios.post('http://localhost:8000/users/save',newUser).then(()=>{
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
}

};

const validateEmail = (email) => {
   return String(email)
     .toLowerCase()
     .match(
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     );
 };




return (
      <>
         <div>
            <Header/>
         </div>
             
      <div className="row bba"> 
      
      <div className="col-3 bbb">

        <img src="./images/raf.svg" alt="" />
          

      </div>

      <div className="col-7 bbc">

         <div className="container bbd">
                
                <h3> Register </h3>
                     
                    <div className='dg'>
                    <form action="">

                      <label className='jj'> Full Name  </label>
                      
                      <input className='ip form-control bn'
                      type="text"
                      id='Name'
                      value={Name}
                      onChange = {(e) =>setName(e.target.value)} /> 

                      <br />

                      <label className='jj'> Contact Number  </label>

                      <input className='ip form-control bn'
                      type="text"
                      id='ContactNumber'
                      value={ContactNumber}
                      onChange = {(e) =>setContactNumber(e.target.value)} /> 

                      <br />

                      <label className='jj'> Email </label>

                     <input className='ip form-control bn'
                      type="text"
                      id='Email'
                      value={Email}
                      onChange = {(e) =>setEmail(e.target.value)} /> 

                      <br />

                      <label className='jj'> Password </label>

                      <input className='ip form-control bn'
                      type="text"
                      id='Password'
                      value={Password}
                      onChange = {(e) =>setPassword(e.target.value)} /> 

                      <br />

                     
                   <button class="btn btn-success" type='button' onClick={handleClick}> Submit </button>
                     

                      <br />

                     

                      


                    </form>
                </div>

         </div>


      </div>
      
      </div>
      
      
      
      <div className='llk'>
        <Footer/>
      </div>
      
      </>
  )
}