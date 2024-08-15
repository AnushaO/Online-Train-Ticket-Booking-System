import React, { useState, useEffect }  from 'react'
import Footer from './Footer'
import Header from './Header'
import './css files/EmployeeApplication.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function EmployeeEdit() {

    const {id} = useParams();

const [Name,setName] = useState('');
const [Position,setPosition] = useState('');
const [DateOfBirth,setDateOfBirth] = useState('');
const [ContactNumber,setContactNumber] = useState('');
const [Email,setEmail] = useState('');
const [Address,setAddress] = useState('');

useEffect(() => {
    axios.get("http://localhost:8000/employees/" + id).then((res) => {
        console.log(res.data.users);
        setName(res.data.users.Name);
        setPosition(res.data.users.Position);
        setDateOfBirth(res.data.users.DateOfBirth);
        setContactNumber(res.data.users.ContactNumber);
        setEmail(res.data.users.Email);
        setAddress(res.data.users.Address);

    })
}, [])

const handleClick = async (e) => {

  alert("Employee Updated Succesfully");
   
    e.preventDefault();
   try{

      const resp = await axios.post('http://localhost:8000/Employee/update/' + id,{
        Name:Name,
        Position:Position,
        DateOfBirth:DateOfBirth,
        ContactNumber:ContactNumber,
        Email:Email,
        Address:Address

      });

      console.log(resp.data);

   } catch(error) {
    console.log(error.response);
   }
};

return (
      <>
        
        <div>
            <Header/>
        </div>

        <div className=' appk'>

           <h3> Employee Details </h3> <br />
             
             <form action="">


               <label> Name  </label>
               <input type="text"  class="form-control"
                id='Name'
                value={Name}
                onChange = {(e) =>setName(e.target.value)}/> 

               <label> Date Of Birth  </label>
               <input type="text"class="form-control"
                id='DateOfBirth'
                value={DateOfBirth}
                onChange = {(e) =>setDateOfBirth(e.target.value)} />

               <label> Email   </label>
               <input type="text" class="form-control"
                id='Email'
                value={Email}
                onChange = {(e) =>setEmail(e.target.value)} />

               <label> Position  </label>
               <input type="text"  class="form-control"
                id='Position'
                value={Position}
                onChange = {(e) =>setPosition(e.target.value)}/>

               <label> Contact Number  </label>
               <input type="text"  class="form-control"
                id='ContactNumber'
                value={ContactNumber}
                onChange = {(e) =>setContactNumber(e.target.value)}/>

               <label> Address  </label>
               <input type="text"  class="form-control"
                id='Address'
                value={Address}
                onChange = {(e) =>setAddress(e.target.value)}/>   <br />

              <button class="btn btn-success" onClick={handleClick}> Update </button>



             </form>
          </div>
      
      <div>
        <Footer/>
      </div>
      
      
      </>
  )
}
