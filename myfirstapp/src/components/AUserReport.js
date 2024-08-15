import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from'axios'
import Header from './Header';


export default function AUserReport() {

    const[Edetails,setEdetails] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/users`).then(res=> {
            setEdetails(res.data.existingUsers);
            console.log(res.data.existingUsers);
         

        })
            .catch(err => {
                console.log(err);
            })
    },[])

    const repotGen=()=>{

        window.print();

   }


   const deleteMyEmployee =((id)=>{


   axios.delete(`http://localhost:8000/users/delete/${id}`).then((res)=>{
   alert("delete succesfull")
   });
  



   })

   

  return (
    <div>

      <div>
       
      </div>

        <br />
            <br/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                 <th scope="col">Name</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Email</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {
                          Edetails.map ( (bk) => { 
                             return <tr>


                                <td>{bk.Name}</td>
                                <td>{bk.ContactNumber}</td> 
                                <td>{bk.Email}</td>
                               

                               




                            </tr>
                            
                           }
                            
                            )
                            }
                        </tbody>
                    </table>
                    <br />

                    <button class="btn btn-success" onClick={repotGen}>Print</button>
                    

                </div>
            </div>
    </div>
  )
}
