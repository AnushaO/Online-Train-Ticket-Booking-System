import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from'axios'
import Header from './Header';


export default function EmployeeDetailsList() {

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

                                <td class="table-action">
                              <button
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
                                to={"/employeeEdit/" + bk._id}
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
                    <Link
                                to={"/addjob/"}
                                class="top-bar-link"
                              >
                                <button
                                  class="btn btn-pill btn-success btn-sm"
                                  style={{ marginLeft: 10, width: 60 }}
                                >
                                  Add Job
                                </button>
                              </Link>

                </div>
            </div>
    </div>
  )
}