import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from'axios'
import Header from './Header';
import Footer from './Footer';


export default function SelectTicket() {

    const[tdetails,setTdetails] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/TrainDetails`).then(res=> {
            setTdetails(res.data.existingTrainDetails);
            console.log(res.data.existingTrainDetails)
         

        })
            .catch(err => {
                console.log(err);
            })
    },[])

   const deleteMyEmployee =((id)=>{


   axios.delete(`http://localhost:8000/TrainDetails/delete/${id}`).then((res)=>{
   alert("delete succesfull")
   });
  

   })

//    const buttonClick = (id) => {

//    }

   

  return (
    <div>
        
        <Header/>

        <br />
            <br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <table className="table">
                        <thead className="thead-dark">

                            <tr>
                                 <th scope="col">TrainName</th>
                                <th scope="col">Day</th>
                                <th scope="col">StartPoint</th>
                                <th scope="col">EndPoint</th>
                                <th scope="col">StartUpTime</th>
                                <th scope="col"> TrainType</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                          tdetails.map ( (bk) => { 
                             return <tr>


                                <td>{bk.TrainName}</td>
                                <td>{bk.Day}</td> 
                                <td>{bk.StartPoint}</td>
                                <td>{bk.EndPoint}</td>
                                <td>{bk.StartUpTime}</td>
                                <td>{bk.TrainType}</td>

                                <td>


                                <Link

                               to={`/getone/${bk._id} `}

                               class="top-bar-link"

>

                              <button

                               class="btn btn-pill btn-success btn-sm"

                              style={{ marginLeft: 10, width: 60 }}

                              >

                               Edit

                            </button>

                            </Link>





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

           
    </div>
  )
}