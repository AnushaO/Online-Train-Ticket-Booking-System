import React from 'react'
import './css files/Feedback.css'
import './css files/Login.css'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert'


export default function Login() {


const [Email,setEmail] = useState('');
const [Password,setPassword] = useState('');

const PassData = {Email,Password};





function handleClick() {

console.log(Email);
console.log(Password);

if (Email ==='' && Password ==='' ){
  swal('Please Login ')
}else if(Email ==='') {
  swal('Email is required')
}
else if(Password ==='') {
  swal('Password is required')
}
if (Email == "chamodbandara78@gmail.com" && Password == "bino123"){
  swal('User Login Success')
}





 }


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
                
                <h3> Login </h3>
                

                <div className='dg'>
                    <form action="">

                      <label className='jj'> Email  </label>
                      <input className='ip form-control bn' 
                       type="text"
                       id='Email'
                       value={Email}
                       onChange = {(e) =>setEmail(e.target.value)} /> 

                      <br />

                      <label className='jj'> Password </label>

                      <input className='ip form-control bn ' type="text"
            
                      id='Password'
                      value={Password}
                      onChange = {(e) =>setPassword(e.target.value)} />

                      <br /> <br />

                      <button class="btn btn-success" type='button' onClick={handleClick}> Submit </button>

                      <br />

                      <h5> Don't have an eccount ?  <Link to = "/register"> Register </Link> </h5>

                      

                      


                    </form>
                </div>

         </div>


      </div>
      
      </div>
      
      
      
      <div className='kkl'>
        <Footer/>
      </div>
      
      </>
  )
}
