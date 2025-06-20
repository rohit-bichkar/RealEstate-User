import React from "react";
import estatelogo from '../assets/EstateLogo.png'

const Footer = () => {
  return (
    <div class="container-fluid bg-dark text-light mt-5">
     <footer class="bg-dark text-light pt-4">
        <div class="container">
            {/* <!-- Newsletter Signup --> */}
            <div class="row mb-4 border-bottom">
                <div class="col text-center d-flex justify-content-between mb-3">
                    <h5>Newsletter Signup</h5>
                        <input type="email" class="form-control w-50" placeholder="Enter your email" />                    
                </div>
            </div>

            {/* <!-- Footer Content --> */}
            <div class="row text-center text-md-start">
               
                <div class="col-md-4 mb-3" >
                <img src={estatelogo} style={{width:'200px',height:'80px'}}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod lorem ipsum dolor sit amet.</p>
                </div>

                {/* <!-- Explore Section --> */}
                <div class="col-md-2 mb-3">
                    <h5 class="mb-3">Explore</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                    </ul>
                </div>

                {/* <!-- Services Section --> */}
                <div class="col-md-2 mb-3">
                    <h5 class="mb-3">Services</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                    </ul>
                </div>

                {/* <!-- Contact Section --> */}
                <div class="col-md-2 mb-3">
                    <h5 class="mb-3">Contact</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                        <li><a href="#" class="text-light text-decoration-none">Lorem Ipsum</a></li>
                    </ul>
                </div>
            </div>

            {/* <!-- Footer Bottom --> */}
            <div class="row border-top">
                <div class="col text-center">
                    <p class="mb-3 mt-4">© Lorem Ipsum - All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
};

export default Footer;
