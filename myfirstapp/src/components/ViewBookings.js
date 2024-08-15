import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from'axios'
import Header from './Header';
import Footer from './Footer';
import swal from 'sweetalert'


export default function ViewBookings() {

    const[tdetails,setTdetails] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/MyBooking`).then(res=> {
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

   const onBook = async () => {


    alert("Booking Added Succesfully");
   
    // e.preventDefault();
    let obj = tdetails;
    obj.customerName = null;
    obj.customerId = null;
    obj.date = new Date().toISOString().substring(0,10);
    obj.time = new Date().getTime();
   try{

      const resp = await axios.post('http://localhost:8000/MyTrainDetails/save', obj);

      console.log(resp.data);

   } catch(error) {
     console.log(error.response);
   }
   }

   function handleClick(TrainName, Day, StartPoint,EndPoint, StartUpTime, TrainType) {

    const newTrain = {
       TrainName,
       Day,
       StartPoint,
       EndPoint,
       StartUpTime,
       TrainType,
       customerName: "Chamod Bandara",
       customerId: "334344444444444444444",
       date: new Date().toISOString().substring(0,10),
       time: new Date().toLocaleTimeString('en-US')


 
    }
 
    axios.post('http://localhost:8000/MyBooking/save',newTrain).then(()=>{
       swal({
          title: "Success",
          text: "New Booking Added",
          icon:'success',
          timer:2000,
          button:false
       });
    }).catch((e)=>{
       // alert(e)
    })
 
 };
 

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
                                <th scope="col">Time</th>
                                <th scope="col"> Date</th>
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
                                <td>{bk.time}</td>
                                <td>{bk.date}</td>

                                <td>


                                <Link

                               to={`/getBooking/${bk._id} `}

                               class="top-bar-link"

>

                              <button

                               class="btn btn-pill btn-success btn-sm"

                              style={{ marginLeft: 10, width: 60 }}

                              >

                               View

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