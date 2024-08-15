import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from'axios'
import Header from './Header';


export default function AEmployee() {

    const[Edetails,setEdetails] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/Employee`).then(res=> {
            setEdetails(res.data.existingEmployee);
            console.log(res.data.existingEmployee);
         

        })
            .catch(err => {
                console.log(err);
            })
    },[])


    const repotGen=()=>{

      window.print();

 }
   const deleteMyEmployee =((id)=>{


   axios.delete(`http://localhost:8000/Employee/delete/${id}`).then((res)=>{
   alert("delete succesfull")
   });
  



   })

   

  return (
    <div>

     <div>
      <Header/>
     </div>

        <br />
            <br/>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-9">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                 <th scope="col">Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">DateOfBirth</th>
                                <th scope="col">ContactNumber</th>
                                <th scope="col">Email</th>
                                <th scope="col"> Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                          Edetails.map ( (bk) => { 
                             return <tr>


                                <td>{bk.Name}</td>
                                <td>{bk.Position}</td> 
                                <td>{bk.DateOfBirth}</td>
                                <td>{bk.ContactNumber}</td>
                                <td>{bk.Email}</td>
                                <td>{bk.Address}</td>

                               



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