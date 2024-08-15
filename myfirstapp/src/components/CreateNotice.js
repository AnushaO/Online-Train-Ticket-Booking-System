import React from 'react'
import './css files/createNotice.css'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'


export default function CreateNotice() {

const [date,setDate] = useState('');
const [Notice,setNotice] = useState('');


// const handleClick = async (e) => {

//    console.log(date)

//    alert("Notice Added Succesfully");
   
//     e.preventDefault();
//    try{

//       const resp = await axios.post('http://localhost:8000/Notice/save',{date:date,Notice:Notice});

//       console.log(resp.data);

//    } catch(error) {
//      console.log(error.response);
//    }
// };   


function handleClick() {

   const newNotice = {
      date,
      Notice
     
   }
   if (date ==='' && Notice ==='' ){
      swal('Error')
   }else if(date ==='') {
      swal('Date is Required')
   }
   else if(Notice ==='') {
      swal('This field cant be empty')
   }
 



   axios.post('http://localhost:8000/Notice/save',newNotice).then(()=>{
      swal({
         title: "Success",
         text: "New Notice Added",
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

<h2> Create Notice </h2>

<form action="">

                           
<label for="date">Date:</label>  <br />
       <input type="date"
        id='Date'
        value={date}
        onChange = {(e) =>setDate(e.target.value)} />

 <br />
 <br />
 <br />




<label for="date">Notice:</label>  <br />
       {/* <input type="text"
        id='Notice'
        value={Notice}
        onChange = {(e) =>setNotice(e.target.value)} /> */}
<br />
<textarea name="" id="" cols="60" rows="10"
value={Notice}
onChange = {(e) =>setNotice(e.target.value)}></textarea>
<br />

   <button class="btn btn-primary  by" type='button' onClick={handleClick} > Add </button>


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
