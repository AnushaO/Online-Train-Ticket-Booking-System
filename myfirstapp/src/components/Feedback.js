import React from 'react'
import './css files/Feedback.css'
import Footer from './Footer'
import Header from './Header'

export default function Feedback() {
  return (
      <>
         <div>
            <Header/>
         </div>
             
      <div className="row bba"> 
      
      <div className="col-3 bbb">

      <div>
     <ul class="list-group vn">
  <li class="list-group-item vm">Profile Information</li>
  <li class="list-group-item vm"> My Bookings</li>
  <li class="list-group-item vm"> My canselations</li>
  <li class="list-group-item vm">My payment Option </li>
  <li class="list-group-item vm"> Add Feedback </li>
</ul>
     </div>

      </div>

      <div className="col-7 bbc">

         <div className="container bbd">
                
                <h3>How was Express Lanka ?</h3>
                <h5> We appriciate feedback about <br /> your Experiance</h5>

                <div className='dg'>
                    <form action="">

                      <label className='jj'> Email </label>
                      <input className='ip form-control bn' type="text" /> 

                      <br />

                      <label className='jj'> Feedback </label>
                      <input className='ip form-control bn ' type="text" />

                      <input className='hh' type="submit" />

                      


                    </form>
                </div>

         </div>


      </div>
      
      </div>
      
      
      
      <div className='jjk'>
        <Footer/>
      </div>
      
      </>
  )
}
