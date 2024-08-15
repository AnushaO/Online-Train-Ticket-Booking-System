import React from 'react'
import './css files/NoticeReport.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function NoticeReport() {
  return (

       <>

       <div>
        <Header/>
       </div>

           <div className="divg"> 

                
           <h3> Notice Report </h3>
       
       <div className="row"> 
                 
           <div className="col-2"> 
                   
           <div className="l1"> 
           
           <span> 
  
            <h4> Date </h4>      
            
           </span>
           
           </div>    
                  
           </div>

        

        <div className="col-6">  
       
           
        <div className="l2"> 
        
        <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore molestiae non </h4>
        
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
        
                  <h4> Date </h4>      
                  
                 </span>
                 
                 </div>    
                        
                 </div>
     
              
     
              <div className="col-6">  
             
                 
              <div className="l2"> 
              
              <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore molestiae non </h4>
              
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
