import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './css files/header.css';

export default function AboutUs() {
  return (
    <div>

        <div>
            <Header/>
        </div>
        
       <div className="container">

        <h2>About Us</h2>
        
        <div className="larger">

               <p className='tko'>
               Bus Ticket Booking System is an automated system for purchasing online bus tickets. Adopt your own branded website, mobile apps (Android & iOS) and allow your clients to book tickets for different routes & destinations. This system keeps the record of passengers’ details as per each bus schedule. You can also set seat availability, schedule routes, and upload interactive seat maps to assist customers pick out their preferred seats. With the help of Bus Ticket Booking System, you can reserve tickets each time anywhere with the aid of the Internet. You can also enable your clients to check the availability of buses they decide on and book the seats of their choice
               </p>

        </div>
   
     

       </div>

       <Footer/>

    </div>
  )
}
