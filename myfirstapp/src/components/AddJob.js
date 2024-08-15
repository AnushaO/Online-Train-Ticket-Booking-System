import React from 'react'
import './css files/createNotice.css'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios'


export default function AddJob() {

const [JobTitle,setDate] = useState('');
const [Discription,setNotice] = useState('');


const handleClick = async (e) => {

   alert("Job Added Succesfully");
   
    e.preventDefault();
   try{

      const resp = await axios.post('http://localhost:8000/Job/save',{JobTitle:JobTitle,Discription:Discription});

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

   <h2> Publish Job </h2>

   <form action="">

                              
<label for="JobTitle">JobTitle:</label>  <br />
          <input type="text"
           id='JobTitle'
           value={JobTitle}
           onChange = {(e) =>setDate(e.target.value)} />
   
    <br />
    <br />
    <br />




<label for="Discription">Discription:</label>  <br />
          <input type="text"
           id='Discription'
           value={Discription}
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
