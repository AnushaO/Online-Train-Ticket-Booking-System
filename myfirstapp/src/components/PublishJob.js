import React from 'react'
import './css files/createNotice.css'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios'


export default function PublishJob() {

const [Date,setDate] = useState('');
const [Notice,setNotice] = useState('');


const handleClick = async (e) => {

   alert("Notice Added Succesfully");
   
    e.preventDefault();
   try{

      const resp = await axios.post('http://localhost:8000/Notice/save',{Date:Date,Notice:Notice});

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
                              
              
   <div className="formdiv">

   <h2> Publish Job Vacancy</h2>

   <form action="">

                              
<label for="date">Job Title:</label>  <br />
          <input type="text"
           id='Date'
           value={Date}
           onChange = {(e) =>setDate(e.target.value)} />
   
    <br />
    <br />
    <br />




<label for="date">Discription:</label>  <br />
          <input type="text"
           id='Notice'
           value={Notice}
           onChange = {(e) =>setNotice(e.target.value)} />
<br />

      <button class="btn btn-primary  by" onClick={handleClick} > Add </button>


</form>
</div>                  

       <div className='fo'>
          <Footer/>   
       </div>

       </>
  )
}
