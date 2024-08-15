import React from 'react'
import './css files/NoticeReport.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function RecivedApplication() {
  return (

       <>

       <div>
        <Header/>
       </div>

           <div className="divg"> 

                
           <h3> Recived Application List  </h3>
       
       <div className="row"> 
                 
           <div className="col-2"> 
                   
           <div className="l1"> 
           
           <span> 
  
            <h4> Name </h4>      
            
           </span>
           
           </div>    
                  
           </div>

        

        <div className="col-6">  
       
           
        <div className="l2"> 
        
        <h4> BINOD NIRMAL SATHSARNA BANDARA  </h4>
        
        </div>
        
        
        </div>
              
        
        <div className="col-2">
           
            
        <div className="l3"> 
         
         <div className="row">
                   <div className="col-1 ccf">
                      <Link to="/editNotice"> <img src="./images/setting.svg" alt="" /></Link> 
                   </div>

                   <div className="col-1 ccf">
                      <Link to ="/ddl"> <img src="./images/delete.svg" alt="" /> </Link> 
                   </div>
             </div>

        </div>
           
           
        </div>

       
      
        </div>




        <div className="row"> 
                 
                 <div className="col-2"> 
                         
                 <div className="l1"> 
                 
                 <span> 
        
                  <h4> Job Title  </h4>    <br /> <br />    
                  
                 </span>
                 
                 </div>    
                        
                 </div>
     
              
     
              <div className="col-6">  
             
                 
              <div className="l2"> 
              
              <h4> ASSISTANT DIRECTOR FOR TOUR LANAKA PRIVATE LIMITED   </h4>
              
              </div>
              
              
              </div>
                    
              
              <div className="col-2">
                 
                  
              <div className="l3"> 
               
               <div className="row">
                         <div className="col-1 ccf">
                            <Link to="/editNotice"> <img src="./images/setting.svg" alt="" /></Link> 
                         </div>
     
                         <div className="col-1 ccf">
                            <Link to ="/ddl"> <img src="./images/delete.svg" alt="" /> </Link> 
                         </div>
                   </div>
     
              </div>
                 
                 
              </div>
     
             
            
              </div>
      

    


           </div>
        
         <div className='lop'>
            <Footer/>
         </div>
       
       </>
  )
}
