import React, { useState } from "react";
import Header from "./Header";
import swal from 'sweetalert'
import { Link } from 'react-router-dom';

export default function AddImage() {

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    const handleClick = () =>{

        // alert("Image Added Success");
          
        if (file ===''){
            swal('Error')
         }


      
    }


  return (
    <div>

        <Header/>

<div className="row">


<div className="col-5">

<div className="container">


<div style={{marginTop:"20px"}}>
            <h2>Add Image To the Gallery :</h2>
            <input type="file" onChange={handleChange} />
           
  
        </div>


</div>


</div>

<div className="col-5">
      
       <div className="card">
        <div className="card-header">

      <h5> Selected Image </h5>

        </div>

        <div className="card-body">

        <img src={file} />

        </div>

        <div className="card-footer">

         <button className='btn btn-success jop' type="button" onClick={handleClick}>  Post </button>
      

        </div>
       </div>

 

</div>

</div>
  
    </div>
  )
}
