import React, { useEffect, useState } from 'react'

import banner1 from '../assets/Banner1.png'
import banner2 from '../assets/Banner2.png'
import banner3 from '../assets/Banner3.png'
import testimonials from '../assets/Testimonial1.png'
import testimonials2 from '../assets/Testinomial2.png'
import testimonials3 from '../assets/Testimonial3.png'
import dot from '../assets/499_frame.png'
import './Homepage.css'
import { getAllProperties } from '../API/api'
import { Form,Button,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const[message,setMessage] = useState('')
    const[phoneno,setPhoneNo] = useState('')
    const[inquiry,setInquiry] = useState('')
    const[name,setName] = useState('')
    const[email,setEmail] = useState('');
    const[properties,setProperties] = useState([])
    const fetchgetAllProperties =async()=>{
        try {
            const response =await getAllProperties();
            if(response?.success){
                setProperties(response.properties)
            }
        } catch (error) {
            console.error('Error fetching properties:', error);
            
        }
    }

    useEffect(()=>{
        fetchgetAllProperties();
    },[])
  return (
    <>
    <div style={{ backgroundImage: `url(${banner1})`, height: '700px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className='text-light fw-bold text-center' style={{fontSize:"75px",position:'relative',top:'120px'}}>Your Dream Home</h1>
      <p className='text-light text-center ' style={{fontSize:"55px",position:'relative',top:'110px'}}>is one click away</p>
    <div className='container' style={{position:'relative',top:'150px'}}>
     <div class="tab-btns" style={{position:'relative',left:'40%'}}>
      <button class="btn btn-light">All Units</button>
      <button class="btn btn-primary">For Rent</button>
      <button class="btn btn-primary">For Sale</button>
    </div>
    <div class="search-bar">
      <div class="search-input">
        <label for="propertyType" class="form-label">Looking For</label>
        <select id="propertyType" class="form-select">
          <option selected>Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Townhouse</option>
        </select>
      </div>
      <div class="search-input">
        <label for="location" class="form-label">Location</label>
        <select id="location" class="form-select">
          <option selected>All Cities</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
        </select>
      </div>
      <div class="search-input">
        <label for="propertySize" class="form-label">Property Size</label>
        <select id="propertySize" class="form-select">
          <option selected>Bedrooms</option>
          <option>1 Bedroom</option>
          <option>2 Bedrooms</option>
          <option>3 Bedrooms</option>
        </select>
      </div>
      <div class="search-input">
        <label for="budget" class="form-label">Budget</label>
        <select id="budget" class="form-select">
          <option selected>Max. Price</option>
          <option>$500,000</option>
          <option>$1,000,000</option>
          <option>$2,000,000</option>
        </select>
      </div>
      <button class="btn btn-primary search-btn">Search</button>
    </div>
      </div>
    </div>

    <div className='container mt-5'>
        <h1 className='text-center'>Explore Our Properties</h1>
        <p className='text-secondary text-center'>Enjoy the variety of 100+ Different properties in the market!</p>

       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
      {properties.map((property, index) => (
        <div key={index} className="property-card" style={{ width: '300px' }}>
          <div className="position-relative">
            <img src={property.image} alt={property.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <span className="property-status">FOR RENT</span>
          </div>
          <div className="property-details">
            <h5>{property.title}</h5>
            <p><i className="bi bi-geo-alt"></i> {property.description}</p>
            <p><i className="bi bi-geo-alt"></i> {property.location}</p>
            <p className='text-black'> ${property.price}</p>
           <Link to={`/propertycard-details/${property.id}`}> <button className='btn btn-primary'>View</button></Link>
          </div>
        </div>
      ))}
    </div>
    <button className='btn btn-outline-primary fs-4 mt-5' style={{marginLeft:'45%'}}>Load More</button>
    </div>

    <div className='container' style={{marginTop:'10%'}}>
    <img src={banner2}/>
    </div>

    <div  style={{ backgroundImage: `url(${banner3})`, height: '690px', backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'10%' }}>
        <div className='row'>
            <div className='col md-7 d-flex flex-wrap gap-3'>
                <div className='mx-5 ' style={{marginTop:'15%'}}>
                    <h1 className='text-light'>Why Our<br/> Service Is The<br/> Perfect Choice?</h1>
                    <h1 className='text-light mt-5'>02. <br/>Lorem Ipsum</h1>
                    <p className='text-light'>Lorem ipsum dolor sit amet,<br/> consectetuer adipiscing elit, sed<br/> diam nonummy nibh euismod.</p>
                 </div>
                 <div className='mt-5' >
                     <h1 className='text-light' style={{marginTop:'24%'}}>01. <br/>Lorem Ipsum</h1>
                    <p className='text-light'>Lorem ipsum dolor sit amet,<br/> consectetuer adipiscing elit, sed<br/> diam nonummy nibh euismod.</p>
                    <h1 className='text-light'>03. <br/>Lorem Ipsum</h1>
                    <p className='text-light'>Lorem ipsum dolor sit amet,<br/> consectetuer adipiscing elit, sed<br/> diam nonummy nibh euismod.</p>
                 </div>
            </div>
            <div className='col md-5'>
    <Container className=" bg-light shadow p-4" style={{ maxWidth: '400px',marginTop: '5%', borderRadius: '15px' }}>
     <p className='fs-3 border-bottom'>Real Estate Inquiry Form</p>
      <Form >
      <Form.Group className="mb-3">
                <Form.Label>Inquiry Type</Form.Label>
                <Form.Select
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                >
                    <option value="">Renting property</option>
                    <option value="land">Land</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">house</option>
                    <option value="commercial">commercial</option>

                </Form.Select>
            </Form.Group>
      <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="john@gamil.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone (Optional)</Form.Label>
          <Form.Control
            type="number"
            placeholder="+1 (123) 456-0509"
            value={phoneno}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mb-3">
  <Form.Label>Message</Form.Label>
  <Form.Control
    as="textarea"
    rows={3}
    placeholder="Type your message here"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  />
</Form.Group>

        <Button variant="primary" type="submit"  className="w-100">
          Login
        </Button>
      </Form>
    </Container>
            </div>
        </div>
    </div>

    <div className='container mt-5'>
      <h1 className='text-center'>Featured Listings</h1>
        <p className='text-secondary text-center'>Browse our wide range of featured properties.</p>

         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center' }}>
      {properties.slice(4,7).map((property, index) => (
        <div key={index} className="property-card" style={{ width: '300px' }}>
          <div className="position-relative">
            <img src={property.image} alt={property.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <span className="property-status">FOR RENT</span>
          </div>
          <div className="property-details">
            <h5>{property.title}</h5>
            <p><i className="bi bi-geo-alt"></i> {property.description}</p>
            <p><i className="bi bi-geo-alt"></i> {property.location}</p>
            <p className='text-black'> ${property.price}</p>

          </div>
        </div>
      ))}
    </div>
    <img src={dot} className='mt-3' style={{marginLeft:'45%'}}/>
    </div>


    <div className='container mt-5'>
        <h1 className='text-center'>Testimonials</h1>
        <p className='text-secondary text-center'>What Our Clients Say About Us!</p>

        <div className='d-flex gap-5 mt-5'>
          <div>
            <img src={testimonials} style={{marginLeft:'40%'}}/>
            <p className='fs-4' style={{marginLeft:'40%'}}>David Elson</p>
            <p className='text-secondary' style={{marginLeft:'40%'}}>7th july 2002</p>
            <p className='fs-5 text-center '>“Very professional broker with great apartments selections”</p>
         </div>

          <div>
            <img src={testimonials2} style={{marginLeft:'40%'}}/>
            <p className='fs-4' style={{marginLeft:'40%'}}>Stephanie Nicol</p>
            <p className='text-secondary' style={{marginLeft:'40%'}}>7th july 2002</p>
            <p className='fs-5 text-center '>“Very good, they offer the best prices of properties and customer service”</p>
         </div>

          <div className=''>
            <img src={testimonials3} style={{marginLeft:'40%'}}/>
            <p className='fs-4' style={{marginLeft:'40%'}}>Allen Jordan</p>
            <p className='text-secondary' style={{marginLeft:'40%'}}>7th july 2002</p>
            <p className='fs-5 text-center' >“Good experience and good customer welcoming reflects level of the broker”</p>
         </div>
        </div>
    </div>
    </>
  )
}

export default HomePage
