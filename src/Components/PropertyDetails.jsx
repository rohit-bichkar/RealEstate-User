import React, { useEffect, useState } from 'react'
import { getAllPropertiesById } from '../API/api'
import { useParams } from 'react-router-dom'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Form,Container,Button } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";
import { getAllProperties } from '../API/api';
import { createProperties } from '../API/api';
import { ToastContainer,toast } from 'react-toastify';


const PropertyDetails = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('');
    const[message,setMessage] = useState('');
    const { ID } = useParams();
    const [property, setProperty] = useState(null);
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

    useEffect(() => {
        const fetchGetPropertyByID = async () => {
            try {
                const data = await getAllPropertiesById(ID);
                setProperty(data?.property || data);
            } catch (error) {
                console.log("Error fetching product by ID:", error);
            }
        }
        fetchGetPropertyByID();
    }, [ID]);

    if (!property) {
        return <p>Loading...</p>;
    }

   const imageSrc = property.image
  ? (property.image.startsWith('http')
      ? encodeURI(property.image)
      : `http://localhost:2000/uploads/${encodeURI(property.image)}`)
  : '';


  const handleSubmit = async(e)=>{
         e.preventDefault();

    const inquiryData = {
        name,
        email,
        phone: phone, // or phoneno if you use that state
        message
    };

    try {
        const response = await createProperties(inquiryData);

        if (response?.success) {
            toast.success('Form submitted, You will get a Call from us!');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } else {
            toast.error(response?.message || 'Error submitting form');
        }
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        toast.error('Something went wrong. Please try again.');
    }
  }


    return (
        <>
        <div className='container mt-5 d-flex justify-content-between'> 
            
            <div className='d-flex gap-4'>
                <h1>{property.title}</h1>
               <p className='mt-3 text-secondary'><FaMapMarkerAlt /> {property.location}</p>
            </div>
            
           <div>
             <h3>
                Price: ${property.price}/mo
            </h3>
           </div>
        </div>
        <button className='btn btn-success' style={{marginLeft:'5%'}}>For rent</button>
        <button className='btn btn-warning' style={{marginLeft:'1%'}}>Featured</button>


        <div className='container'>
            <div className='row'>
                <div className='col md-7'>
                    <img src={imageSrc} style={{width:"750px",height:'590px'}}/>
                </div>

                <div className='col md-5'>
                <Container className=" bg-light shadow p-4" style={{ maxWidth: '400px',marginTop: '2%', borderRadius: '15px' }}>
     <p className='fs-3 border-bottom'>Submit an Inquiry</p>
      <Form onSubmit={handleSubmit} >
        <p className='fs-4'>Property Consultant</p>
        <p className='text-secondary'>Martha Stewart</p>

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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
      <ToastContainer/>
    </Container>
                </div>
            </div>
        </div>

{/* overview  */}
 <div class="container mt-4">
   
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-secondary text-dark">
        <h5 class="mb-0">Overview</h5>
      </div>
      <div class="card-body">
        <div class="row text-center">
      
          <div class="col-6 col-md-2">
            <p class="mb-1 ">Property Type</p>
            <p class="fw-bold">Shared House</p>
          </div>
          
          <div class="col-6 col-md-2">
            <p class="mb-1 ">Year Built</p>
            <p class="fw-bold">2015</p>
          </div>
        
          <div class="col-6 col-md-2">
            <p class="mb-1 ">Size (m<sup>2</sup>)</p>
            <p class="fw-bold">1950</p>
          </div>
         
          <div class="col-6 col-md-2">
            <p class="mb-1 ">Bedrooms</p>
            <p class="fw-bold">6</p>
          </div>
  
          <div class="col-6 col-md-2">
            <p class="mb-1 ">Bathrooms</p>
            <p class="fw-bold">3</p>
          </div>
        
          <div class="col-6 col-md-2">
            <p class="mb-1 ">Garage</p>
            <p class="fw-bold">2</p>
          </div>
        </div>
      </div>
    </div>
  </div>

{/* adress section  */}
  <div class="container mt-4">
   
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-secondary text-dark">
        <h5 class="mb-0">Address</h5>
      </div>
      <div class="card-body">
        <div class="row">
   
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Address</p>
            <p class="text-dark">7409 Knollwood Cove, 78731</p>
          </div>
          
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Zip/Postal Code</p>
            <p class="text-dark">78731</p>
          </div>
         
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">City</p>
            <p class="text-dark">Austin</p>
          </div>
         
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Area</p>
            <p class="text-dark">Knollwood</p>
          </div>
        
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">State/County</p>
            <p class="text-dark">Texas</p>
          </div>
          
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Country</p>
            <p class="text-dark">United States</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Description  */}
   <div class="container mt-4">
   
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-secondary text-dark">
        <h5 class="mb-0">Description</h5>
      </div>
      <div class="card-body">
            <p class="mb-1 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
      </div>
    </div>
  </div>

  {/* Details  */}

   <div class="container mt-4">
   
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-secondary text-dark">
        <h5 class="mb-0">Details</h5>
      </div>
      <div class="card-body">
        <div class="row">
         
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Property ID</p>
            <p class="text-dark">MT1651674</p>
          </div>
        
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Property Size</p>
            <p class="text-dark">1950 m<sup>2</sup></p>
          </div>
         
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Property Type</p>
            <p class="text-dark">Shared House</p>
          </div>
          
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Property Status</p>
            <p class="text-dark">For Rent</p>
          </div>
         
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Bedrooms</p>
            <p class="text-dark">6</p>
          </div>
         
          <div class="col-6 col-md-3">
            <p class="mb-1 fw-bold">Bathrooms</p>
            <p class="text-dark">3</p>
          </div>
        </div>
      </div>
    </div>
  </div>

{/* Features  */}
  <div class="container mt-4">
   
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-secondary text-dark">
        <h5 class="mb-0">Features</h5>
      </div>
      <div class="card-body">
        <div className='row'>
            <div className='col md-4'>
                <p><FaCheckCircle className='text-info'/>  Air Conditioning</p>
                <p><FaCheckCircle className='text-info'/>  External Yard</p>
                <p><FaCheckCircle className='text-info'/>  Dryer</p>
                <p><FaCheckCircle className='text-info'/>  Gym</p>
                <p><FaCheckCircle className='text-info'/>  Laundary</p>

            </div>

            <div className='col md-4'>
                <p> <FaCheckCircle className='text-info'/> Shared Gym</p>
                <p><FaCheckCircle className='text-info'/>  Kitchen Appliances</p>
                <p><FaCheckCircle className='text-info'/>  Outdoor Shower</p>
                <p><FaCheckCircle className='text-info'/>  Two Refrigereators</p>
                <p><FaCheckCircle className='text-info'/>  Club House</p>

            </div>

            <div className='col md-4'>
                <p><FaCheckCircle className='text-info'/>  Tv Cable</p>
                <p><FaCheckCircle className='text-info'/>  Washer</p>

            </div>
        </div>
      </div>
    </div>
  </div>

  <div className='container mt-5'>
         <h1 className='text-center'>Featured Listings</h1>
        <p className='text-secondary text-center'>Browse our wide range of featured properties.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center',marginTop:'5%' }}>
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
  </div>

        </>
    );
}

export default PropertyDetails