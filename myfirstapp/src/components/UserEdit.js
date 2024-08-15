import React, { useState, useEffect }  from 'react'
import './css files/Feedback.css'
import './css files/Register.css'
import Footer from './Footer'
import Header from './Header'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


export default function UserEdit() {

const [user, setUser] = useState({})
const [Name,setName] = useState('');
const [ContactNumber,setContactNumber] = useState('');
const [Email,setEmail] = useState('');
const [Password,setPassword] = useState('');

const {id} = useParams();

useEffect(() => {
    axios.get("http://localhost:8000/users/" + id).then((res) => {
        console.log(res.data.users);
        setUser(res.data.users);
        setName(res.data.users.Name);
        setContactNumber(res.data.users.ContactNumber);
        setEmail(res.data.users.Email)
        setPassword(res.data.users.Password)
    })
}, [])

const handleClick = async (e) => {
       
   alert("User Updated Succesfully");
   e.preventDefault();
   try{

      const resp = await axios.post('http://localhost:8000/users/update/' + id, {Name:Name,ContactNumber:ContactNumber,Email:Email,Password:Password});

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
             
      <div className="row bba"> 
      
      <div className="col-3 bbb">

        <img src="./images/raf.svg" alt="" />
          

      </div>

      <div className="col-7 bbc">

         <div className="container bbd">
                
                <h3> User details </h3>
                     
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
                      type="password"
                      id='Password'
                      value={Password}
                      onChange = {(e) =>setPassword(e.target.value)} /> 

                      <br />

                     
                   <button class="btn btn-success" onClick={handleClick}> Update </button>
                     

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
