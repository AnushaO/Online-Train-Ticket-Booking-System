import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css files/trainDforms.css'
import './css files/EditTrainDetails.css'

export default function EditTrainDetails() {
  return (
    <>
    
    <div> <Header/> </div>
    
    <div className='td'> </div>
         
    <form  className='frm' action="">  <br />

    <h3> Changes </h3>  

     <label className='lab'> Train Name :</label>
     <input className='ip form-control'  type="text" />

     <label className='lab'> Train Type : </label>
     <input className='ip form-control' type="text" />

     <label className='lab'> Day : </label>
     <input  className='ip form-control' type="text" />

     <label className='lab'> Start Point :</label>
     <input className='ip form-control' type="text" />


     <label className='lab'> End Point : </label>
     <input className='ip form-control' type="text" />


     <label className='lab'> Startup Time : </label>
     <input className='ip form-control' type="text" />  <br />
          
     <button type="button" class="btn btn-primary bk">Update</button>  
     <button type="button" class="btn btn-primary bk">Delete</button>

// ggh

//hhj
 //rjiulrthieuhteiluthieutheiutherithueityriuhyie5t;pprgjyp99tunrpyuryentube5nubteyneru5bye5bbyrtyrurtrttuyrt



    




    

     </form>
     
    <div className='fu'> 
        <Footer/>
    </div>
    
    </>
  )
}
