import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from './Header';
import './css files/UserProfile.css';

export default function UserProfile() {
 

  return (
           
    <div>
          
           <div>
            <Header/>
           </div>

         <div className="row">
            <div className="col-3">


          
          <Link to = "" > <button className='btn btn-primary btn-lg  ggh'> Profile Information </button></Link>

          <Link to = "/myBookings" > <button className='btn btn-primary btn-lg  ggh'> My Booking </button></Link>

          <Link to = "" > <button className='btn btn-primary btn-lg  ggh'>  My Cansalations </button></Link>

          <Link to = "/Payment" > <button className='btn btn-primary btn-lg  ggh'> My Payment Option </button></Link>

          <Link to = "/ViewFeed" > <button className='btn btn-primary btn-lg  ggh'> Add Feedback </button></Link>
          


            </div>

            <div className="col-6">

              <div className="container">

                     <div className="dd">
                               
                               <h2> Profile Information </h2>

                               <div className="df">
                                   
                                <h3> User Name : Chamod Bandara </h3>
                                 <br /> <br />
                                <h3> Email : chamodbandara78@gmail.com</h3>

                                <Link to=" "> <button className='btn btn-primary btn-lg' > Edit Profile </button> </Link>

                               </div>

                     </div>

              </div>
             
    
            </div>
         </div>








    </div>
    )
     
    }
    
    