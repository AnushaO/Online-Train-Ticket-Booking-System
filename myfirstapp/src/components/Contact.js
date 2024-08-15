import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Contact() {
  return (
    <div>

        <div>
            <Header/>
        </div>

<div className="card">
        <div className="card-header">

      <h5> Contact Us  </h5>

        </div>

        <div className="card-body">

        <form action="">


<label> Name  </label>
<input type="text"  class="form-control"
 id='Name'

 /> 

<label> Email  </label>
<input type="text"class="form-control"
 id='DateOfBirth'

  />

<label> Contact Number   </label>
<input type="text" class="form-control"
 id='Email'

  />


<label> Message  </label>
<input type="text"  class="form-control"
 id='Address'
 />





</form>

        </div>

        <div className="card-footer">

         <button className='btn btn-success jop' type="button" > Send </button>
      

        </div>
       </div>

















   <div>
    <Footer/>
   </div>


    </div>
  )
}
