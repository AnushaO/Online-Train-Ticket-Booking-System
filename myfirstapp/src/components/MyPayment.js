import React from 'react'
import Header from './Header'
import './css files/createNotice.css'
import Footer from './Footer'

export default function MyPayment() {
  return (
    <div>
 
 <div> <Header/> </div>

<div className="row">

    <div className="col-5">
       
       <div className="card">
        <div className="card-header">

      <h5> Select Your Card</h5>

        </div>

        <div className="card-body">

        <img className='hio' src="./images/pay.png"  alt="" />

        </div>

        <div className="card-footer">

         <button className='btn btn-success jop'>Add</button>
         <button className='btn btn-danger jop'>Change</button>

        </div>
       </div>


    </div>

    <div className="col-5">

       <div className="jklm">


       <form action="">


<label> Pay Amount  </label>
<input type="text"  class="form-control"
 id='Name'

 /> 

<label> Card Number  </label>
<input type="text"class="form-control"
 id='DateOfBirth'

  />

<label> Expire date   </label>
<input type="text" class="form-control"
 id='Email'

  />


<label> Cvv  </label>
<input type="text"  class="form-control"
 id='Address'
 />

   <br />

<button class="btn btn-success" type='button'> Submit </button>



</form>




       </div>



    </div>
</div>



<div>
    <Footer/>
</div>
  
    </div>
  )
}
