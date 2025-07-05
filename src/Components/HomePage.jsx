import React, { useEffect, useRef, useState } from 'react'

import banner1 from '../assets/Banner1.png'
import banner2 from '../assets/Banner2.png'
import banner3 from '../assets/Banner3.png'
import testimonials from '../assets/Testimonial1.png'
import testimonials2 from '../assets/Testinomial2.png'
import testimonials3 from '../assets/Testimonial3.png'
import img1 from '../assets/313_rectangle.png'
import img2 from '../assets/314_rectangle.png'
import img3 from '../assets/315_rectangle.png'
import img4 from '../assets/316_rectangle.png'
import img5 from '../assets/317_rectangle.png'
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
    const[visibleCount,setVisibleCount] = useState(6);
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

    const featuredRef = useRef(null);
    const scrollRight = ()=>{
      if(featuredRef.current){
        featuredRef.current.scrollBy({left: 350, behavior:'smooth'});
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
        <h1 className='text-center #explore'>Explore Our Properties</h1>
        <p className='text-secondary text-center'>Enjoy the variety of 100+ Different properties in the market!</p>

       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center',overflowX: 'hidden' }}>
      {properties.slice(0,visibleCount).map((property, index) => (
        <div key={index} className="property-card" style={{  width: '100%',
    maxWidth: '350px', 
    minWidth: '260px',
    boxSizing: 'border-box' }}>
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
    <button className='btn btn-outline-primary fs-4 mt-5' style={{marginLeft:'45%'}} onClick={()=> setVisibleCount(prev => prev +6)} disabled={visibleCount >= properties.length}>{visibleCount >= properties.length ? 'No More Properties' : 'Load More'}</button>
    </div>

   <div className='container d-flex gap-4' style={{marginTop:'10%'}}>
   <div className='left'>
      <img src={img1} className='img-hover-scale'></img>
   </div>

   <div className='right'>
      <div className='d-flex align-items-center' style={{gap:'20px'}}>
        <img src={img2} className='img-hover-scale'></img>
        <div>
            <h2>Wide Selection Of Properties</h2>
         <p>Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard.</p>
        </div>
         
      </div>

      <div className='d-flex gap-2 mt-3'>
        <img src={img5} style={{width:'440px',height:'360px'}} className='img-hover-scale'></img>
        <div>
          <img src={img3} style={{width:'200px',height:'180px'}} className='img-hover-scale'/>
           <img src={img4} style={{width:'200px',height:'180px'}} className='img-hover-scale'/>
        </div>
        
      </div>
   </div>

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
            <div style={{ position: 'relative' }}>
          {/* Right arrow button */}
          <button
            onClick={scrollRight}
            style={{
              position: 'absolute',
              right: 0,
              top: '40%',
              zIndex: 2,
              background: '#fff',
              border: '1px solid #ccc',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
            aria-label="Scroll right"
          >
            <span style={{ fontSize: '1.5rem' }}>&rarr;</span>
          </button>

         <div ref={featuredRef} className='hide-scrollbar' style={{ display: 'flex', flexWrap: 'nowrap', gap: '50px',overflow:'auto',scrollBehavior:'smooth',paddingBottom:'10px' }}>
      {properties.slice(3,10).map((property, index) => (
        <div key={index} className="property-card" style={{ minWidth: '300px',maxWidth:'300px' }}>
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
    </div>
    <img src={dot} className='mt-3' style={{marginLeft:'45%',cursor:'pointer'}} onClick={scrollRight}/>
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
