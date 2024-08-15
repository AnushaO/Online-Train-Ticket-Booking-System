import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from'axios'
import Header from './Header';
import Footer from './Footer';


export default function JobVacancy() {

    const[Ndetails,setNdetails] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/Job`).then(res=> {
            setNdetails(res.data.existingJob);
            console.log(res.data.existingJob);
         

        })
            .catch(err => {
                console.log(err);
            })
    },[])

   const deleteMyEmployee =((id)=>{


   axios.delete(`http://localhost:8000/Job/delete/${id}`).then((res)=>{
   alert("delete succesfull")
   });
  



   })

   

  

   

  return (
    <div>
     
      <div> < Header/></div>

        <br />
            <br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                 <th scope="col">Job Title</th>
                                <th scope="col">Discription</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                          Ndetails.map ( (bk) => { 
                             return <tr>


                                <td>{bk.JobTitle}</td>
                                <td>{bk.Discription}</td> 
                             

                                <td class="table-action">
                              {/* <button
                                class="btn btn-pill btn-danger btn-sm"
                                style={{ marginLeft: 45, width: 60 }}
                                onClick={() =>{ deleteMyEmployee(bk._id)
                                    setTimeout(()=>{
                                        window.location.reload(true);
                                    },2050)
                                
                                }}
                              >
                                Delete
                              </button>
                              <Link
                                to={"/TrainEdit/" + bk._id}
                                class="top-bar-link"
                              >
                                <button
                                  class="btn btn-pill btn-success btn-sm"
                                  style={{ marginLeft: 10, width: 60 }}
                                >
                                  Edit
                                </button>
                              </Link> */}

                              <Link to = "/empApplication"> <button id='btn-1'> Apply </button> </Link>
                            
                            </td>




                            </tr>
                            
                           }
                            
                            )
                            }
                        </tbody>
                    </table>
                    <br />
                    

                </div>
            </div>

            <div>  <Footer/> </div>
    </div>
  )
}