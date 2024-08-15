import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './css files/createNotice.css'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

export default function EditNotice() {

   const {id} = useParams();

   const [date, setDate] = useState("");
   const [notice, setNotice] = useState("");

   useEffect(() => {
      axios.get("http://localhost:8000/Notice/" + id).then((res) => {
          console.log(res);
          setDate(res.data.trainDetails.Date)
          setNotice(res.data.trainDetails.Notice)
      })
  }, [])

  const handleClick = async (e) => {
       
   alert("Notice Updated Succesfully");
   e.preventDefault();
   try{

      const resp = await axios.post('http://localhost:8000/Notice/update/' + id, {Date:date,Notice: notice});

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

                   <h2> Update Notice </h2>

                   <form action="">

                              
<label for="date">Date:</label>  <br />
<input type="date"
           id='Date'
           value={date}
           onChange = {(e) =>setDate(e.target.value)} />
   
    <br />
    <br />
    <br />


<label for="notice">Notice:</label>  <br /> 
<textarea name="" id="" cols="60" rows="10"
value={notice}
onChange = {(e) =>setNotice(e.target.value)}></textarea>
<br />
<br />
<button

                               class="btn btn-pill btn-success btn-sm"

                              style={{ marginLeft: 10, width: 60 }}
                              onClick={handleClick}

                              >Update </button>


</form>
</div>                  

       <div className='fo'>
          <Footer/>   
       </div>

       </>
  )
}
