import React from 'react'
import estatelogo from '../assets/EstateLogo.png'
import { FaMapMarkerAlt } from "react-icons/fa";

const MainNavbar = () => {
  return (
   <div class="container-fluid shadow">
    <header class="d-flex flex-wrap justify-content-center align-items-center py-3 mb-2 mt-2  ">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
       <img src={estatelogo}/>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link text-black">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black"><FaMapMarkerAlt /> Explore</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black">About Us</a></li>
        <li class="nav-item"><a href="#" class="nav-link text-black">Contact Us</a></li>
        <li className='btn btn-primary'>Request a call</li>
      </ul> 
    </header>
  </div>
  )
}

export default MainNavbar
