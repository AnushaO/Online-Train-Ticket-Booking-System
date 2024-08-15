import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './css files/EmployeeApplication.css'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export default function EmpApplication() {

   const [Name, setName] = useState('');
   const [Position, setPosition] = useState('');
   const [DateOfBirth, setDateOfBirth] = useState('');
   const [ContactNumber, setContactNumber] = useState('');
   const [Email, setEmail] = useState('');
   const [Address, setAddress] = useState('');


   const validateEmail = (email) => {
      return String(email)
         .toLowerCase()
         .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         );
   };


   function handleClick() {

      const newEmployee = {
         Name,
         Position,
         DateOfBirth,
         ContactNumber,
         Email,
         Address


      }
      if (Name === '' && Position === '' && DateOfBirth === '' && ContactNumber === '' && Email === '' && Address === '') {
         swal('Error')
      } else if (Name === '') {
         swal('Name cant be empty')
      }
      else if (Position === '') {
         swal('position is required')
      }
      else if (DateOfBirth === '') {
         swal('Date of birth cant be empty')
      }
      else if (ContactNumber === '') {
         swal('Contact number is required')
      }
      else if (isNaN(ContactNumber) || ContactNumber.length < 10) {
         swal('Invalid contact number ')
      }
      else if (Email === '') {
         swal('Email is required')
      }
      else if (!validateEmail(Email)) {
         swal('Invalid email')
      }
      else if (Address === '') {
         swal('Address is required')
      }else{

         axios.post('http://localhost:8000/Employee/save', newEmployee).then(() => {
            swal({
               title: "Success",
               text: "New Employee Registerd",
               icon: 'success',
               timer: 2000,
               button: false
            });
         }).catch((e) => {
            // alert(e)
         })

      }




    

   };


   return (
      <>

         <div>
            <Header />
         </div>

         <div className=' appk'>

            <h3> Employee Application </h3> <br />

            <form action="">


               <label> Name  </label>
               <input type="text" class="form-control"
                  id='Name'
                  value={Name}
                  onChange={(e) => setName(e.target.value)} />

               <label> Date Of Birth  </label>
               <input type="text" class="form-control"
                  id='DateOfBirth'
                  value={DateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)} />

               <label> Email   </label>
               <input type="text" class="form-control"
                  id='Email'
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)} />

               <label> Position  </label>
               <input type="text" class="form-control"
                  id='Position'
                  value={Position}
                  onChange={(e) => setPosition(e.target.value)} />

               <label> Contact Number  </label>
               <input type="text" class="form-control"
                  id='ContactNumber'
                  value={ContactNumber}
                  onChange={(e) => setContactNumber(e.target.value)} />

               <label> Address  </label>
               <input type="text" class="form-control"
                  id='Address'
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)} />   <br />

               <button class="btn btn-success" type='button' onClick={handleClick}> Submit </button>



            </form>
         </div>

         <div>
            <Footer />
         </div>


      </>
   )
}