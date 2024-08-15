import React, { useState, useEffect } from 'react';
import { useParams,Link } from "react-router-dom";
import axios from 'axios';



export default function GetOneShedule() {

	const { id } = useParams();

    


	const [employeeData, setEmployeeData] = useState({ });

	useEffect(() => {
		axios.get(`http://localhost:8000/trainDetails/`+id).then((res) => {
            console.log(res.data.trainDetails);
            setEmployeeData(res.data.trainDetails);
        })
	  }, []);



    return (

        <div class="wrapper">

            <div class="main">

                <main class="content">
                    <div class="container-fluid">

                        <div class="header">
                            <h1 class="header-title">
                               
                            </h1>

                        </div>

                       
                        <div class="col-md-12">
                        <div class="card">
								<div class="card-body">
                                    
									<div class="column" >
									<center><Link
												to={"/Shedule"}
												class="top-bar-link"
											>
												<button
												class="btn btn-pill btn-success btn-sm"
												style={{ marginLeft:-600, width: 60 }}
												>
												Back
												</button>
											</Link></center>
                                        
										<div class="col-sm-3 col-xl-12 col-xxl-12 text-center">
											
										</div>
										<br></br>
                                        <br></br>
									</div>

                                    <div class="row">
                                                <div class="col-md-2"></div>
                                                <div class="col-md-8"><table class="table table-sm my-2 " >
										<tbody>
											<tr>
												<th>Train Name</th>
												<td>{employeeData.TrainName}</td>
											</tr>
											<tr>
												<th>Day</th>
												<td>{employeeData.Day}</td>
											</tr>
											<tr>
												<th>Start Point</th>
												<td>{employeeData.StartPoint}</td>
											</tr>
											<tr>
												<th>End Point</th>
												<td>{employeeData.EndPoint}</td>
											</tr>
											<tr>
												<th>Startup Time</th>
												<td>{employeeData.StartUpTime}</td>
											</tr>
											<tr>
												<th>Train Type</th>
												<td>{employeeData.TrainType}</td>
											</tr>
											
											
											
										</tbody>
									</table></div>
                                                <div class="col-md-2"></div>
                                            </div>


                                            <hr></hr>
                                            
									
								</div>
							</div>
                        </div>





              



                    


                    </div>
                </main>



            </div>

                      

            {/* <h1> hello  { TrainName } </h1> */}




        </div>


    )

}


