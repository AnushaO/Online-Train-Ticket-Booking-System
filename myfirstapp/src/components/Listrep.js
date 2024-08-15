import React from 'react'
import { Link } from "react-router-dom";

export default function Listrep() {
  return (
    <div>


<Link to = "/Au" > <button className='btn btn-primary btn-lg  ggh'> User Report </button></Link>

<Link to = "/AE" > <button className='btn btn-primary btn-lg  ggh'> Employee Report </button></Link>

<Link to = "/AN" > <button className='btn btn-primary btn-lg  ggh'> Notice report </button></Link>

<Link to = "/AT" > <button className='btn btn-primary btn-lg  ggh'> Train Details Report </button></Link>




    </div>
  )
}
